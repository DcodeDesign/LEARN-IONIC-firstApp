import {Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private menu: MenuController) {}

  ngOnInit(): void {

  }

  openFirst() {

    this.menu.open('first').then(r => console.log(r));
  }

}
