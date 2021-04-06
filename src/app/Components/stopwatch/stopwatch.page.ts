import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonReorderGroup, IonVirtualScroll} from '@ionic/angular';
import {ItemReorderEventDetail} from '@ionic/core';
import {DatePipe} from '@angular/common';
import {ChronoPipe} from '../../Pipes/chronoPipe/chrono.pipe';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit {
  @ViewChild('vScroll', {read: IonVirtualScroll}) virtualScroll: IonVirtualScroll;
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  public time = 0;
  public timer: any;
  public isStart = false;
  public recordsTimer: Array<{ time: number, date: Date, favorite: boolean }> = [];
  public timerMax = 0;
  public timerMin = 0;
  public timerTotal = 0;
  public timerAvg = 0;
  public seeDetails = false;
  public seeRecordsTimer = true;

  constructor(private alert: AlertController) {
  }

  ngOnInit() {
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
    this.recordsTimer.push({time: this.time, date: new Date(), favorite: false});
    // this.virtualScroll.checkRange(0);
    this.calcStat();
  }

  public isFavoris(i): void {
    this.recordsTimer[i].favorite = !this.recordsTimer[i].favorite;
    console.log( this.recordsTimer);
  }

  async deleteTimer(i, recordTimer): Promise<void> {
    const chrono = new ChronoPipe();
    const formatDate = new DatePipe('fr_FR');
    const time = chrono.transform(recordTimer.time);
    const date = formatDate.transform(recordTimer.date, 'EEEE dd MMMM YYYY');
    this.alert.create({
      header: `Suppression du chrono `,
      message: `êtes-vous sur de vouloir supprimer ce chrono ${time} du ${date} ?`,
      buttons: [{
        text: 'Supprimer',
        handler: () => {
          this.recordsTimer.splice(i, 1);
          this.calcStat();
        }
      },
        {
          text: 'Annuler',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    }).then((modalAlert: HTMLIonAlertElement) => modalAlert.present());

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

  public recordTimerAvg(): number {
    return Number((this.recordTimerTotal() / this.recordsTimer.length).toFixed(0));
  }

  public toggleSeeDetails(): void {
    this.seeDetails = !this.seeDetails;
  }

  public toggleSeeRecordsTimer(): void {
    this.seeRecordsTimer = !this.seeRecordsTimer;
  }

  // https://stackblitz.com/edit/ionic-filter-list?file=pages%2Fcontact%2Fcontact.ts
}
