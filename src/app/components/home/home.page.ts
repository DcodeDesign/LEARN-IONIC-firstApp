import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public userName: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUserName();
  }

  public getUserName(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.userName = paramMap.get('username');
      }
    );
  }

}
