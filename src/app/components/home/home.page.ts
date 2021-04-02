import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public userName = 'inconnu(e)';
  public observable: Observable<number>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUserName();
    this.startChrono();
  }

  public getUserName(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const username = paramMap.get('username');
        if (username !== null) {
          this.userName = username;
        }
      }
    );
  }

  public startChrono(): Observable<number> {
    return this.observable = new Observable((observer => {
      let value = 0;
      const interval = setInterval(() => {
        observer.next(value);
        value++;
      }, 100);
      return () => clearInterval(interval);
    }));
  }

}
