import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {EmptyFieldDirectiveModule} from '../../directives/emptyFeild/empty-field.module';
import {ChronoPipe} from '../../pipes/chronoPipe/chrono.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    HomePageRoutingModule,
    EmptyFieldDirectiveModule
  ],
  declarations: [HomePage, ChronoPipe]
})
export class HomePageModule {}
