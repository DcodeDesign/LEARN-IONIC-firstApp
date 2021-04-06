import {Component, OnInit, ViewChild} from '@angular/core';
import {IonReorderGroup, IonVirtualScroll} from '@ionic/angular';
import {ItemReorderEventDetail} from '@ionic/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit {
  @ViewChild('vScroll', {read: IonVirtualScroll}) virtualScroll: IonVirtualScroll;
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  public time: number;
  public timer: any;
  public isStart = false;
  public recordsTimer: Array<{ time: number, date: Date }> = [];
  public timerMax: number = null;
  public timerMin: number = null;
  public timerTotal: number = null;
  public timerAvg: string = null;
  public seeDetails = false;
  public seeRecordsTimer = true;

  constructor() {
  }

  ngOnInit() {
    this.time = 0;
  }

  public startTimer(): void {
    this.timer = setInterval(() => this.time++, 10);
    this.isStart = true;
  }

  public stopTimer(): void {
    clearInterval(this.timer);
    this.timer = null;
    this.isStart = false;
  }

  public resetTimer(): void {
    this.stopTimer();
    this.time = 0;
  }

  private calcStat(): void {
    this.timerMax = this.recordTimerMax();
    this.timerMin = this.recordTimerMin();
    this.timerTotal = this.recordTimerTotal();
    this.timerAvg = this.recordTimerAvg();
  }

  public saveTimer(e): void {
    this.recordsTimer.push({time: this.time, date: new Date()});
    // this.virtualScroll.checkRange(0);
    this.calcStat();
  }

  public deleteTimer(i): void {
    this.recordsTimer.splice(i, 1);
    this.calcStat();
  }

  doReorder(event: CustomEvent<ItemReorderEventDetail>): void {
    const draggedItem = this.recordsTimer.splice(event.detail.from, 1)[0];
    this.recordsTimer.splice(event.detail.to, 0, draggedItem);
    event.detail.complete();
  }

  public recordTimerMax() {
    return (Math.max.apply(Math, this.recordsTimer.map((o) => {
        return o.time;
      }))
    );
  }

  public recordTimerMin(): number {
    return (Math.min.apply(Math, this.recordsTimer.map((o, index) => {
        return o.time;
      }))
    );
  }

  public recordTimerTotal(): number {
    return (this.recordsTimer.reduce(
      (accumulator, currentValue) => {
        return (accumulator + currentValue.time);
      }, 0));
  }

  public recordTimerAvg(): string {
    return (this.recordTimerTotal() / this.recordsTimer.length).toFixed(0);
  }

  public toggleSeeDetails(): void {
    this.seeDetails = !this.seeDetails;
  }

  public toggleSeeRecordsTimer(): void {
    this.seeRecordsTimer = !this.seeRecordsTimer;
  }

  // https://stackblitz.com/edit/ionic-filter-list?file=pages%2Fcontact%2Fcontact.ts
}
