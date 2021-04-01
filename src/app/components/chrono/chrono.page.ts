import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage implements OnInit, OnDestroy {
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public milliSeconds = 0;
  private timer: any;
  chronoStarted = false;

  constructor() {
  }

  ngOnInit() {

  }

  public startChrono(): void {
    this.chronoStarted = true;
    this.timer = setInterval(() => {
      // milliSeconds
      if (this.milliSeconds < 59) {
        this.milliSeconds = this.milliSeconds + 1;
      } else {
        this.milliSeconds = 0;

        // seconds
        if (this.seconds < 59) {
          this.seconds = this.seconds + 1;
        } else {
          this.seconds = 0;

          // minutes
          if (this.minutes < 59) {
            this.minutes = this.minutes + 1;
          } else {
            this.minutes = 0;

            // hours
            if (this.hours < 59) {
              this.hours = this.hours + 1;
            } else {
              this.hours = 0;
            }
          }
        }
      }
    }, 100);
  }

  public stopChrono(): void {
    this.chronoStarted = false;
    clearInterval(this.timer);
  }

  public initChrono(): void {
    this.chronoStarted = false;
    clearInterval(this.timer);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliSeconds = 0;
  }

  ngOnDestroy(): void {
    this.initChrono();
  }

}
