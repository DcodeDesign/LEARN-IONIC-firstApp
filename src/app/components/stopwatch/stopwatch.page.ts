import {Component, OnInit, ViewChild} from '@angular/core';
import {IonVirtualScroll} from '@ionic/angular';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit {
  @ViewChild('vScroll', { read: IonVirtualScroll }) virtualScroll: IonVirtualScroll;

  public time: number;
  public timer: any;
  public isStart = false;
  public recordTimer: any[] | undefined = [];

  constructor() { }

  ngOnInit() {
    this.time = 0;

  }

  public startTimer(): void {
    this.timer = setInterval(() => this.time++, 10);
    this.isStart = true;
  }

  public stopTimer(): void  {
    clearInterval(this.timer);
    this.timer = undefined;
    this.isStart = false;
  }

  public resetTimer(): void  {
    this.stopTimer();
    this.time = 0;
  }

  public saveTimer(e): void {
    this.recordTimer.push({time: this.time, date : new Date() });
    this.virtualScroll.checkRange(0);
  }
}
