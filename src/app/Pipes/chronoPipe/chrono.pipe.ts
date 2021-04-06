import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number): string {
    let centiSeconds: string | number  = (value % 100);
    let seconds: string | number = ((value - centiSeconds) / 100) % 60;
    let minutes: string | number = (Math.floor(value / (100 * 60)));

    centiSeconds = centiSeconds < 10 ? '0' + centiSeconds : centiSeconds;
    seconds = seconds < 10 ? '0' + seconds % 60 : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${(minutes)}:${(seconds)}:${(centiSeconds)}`;
  }

}
