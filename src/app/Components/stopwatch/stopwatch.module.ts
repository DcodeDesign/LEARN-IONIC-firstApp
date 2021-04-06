import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopwatchPageRoutingModule } from './stopwatch-routing.module';

import { StopwatchPage } from './stopwatch.page';
import {ChronoPipe} from '../../Pipes/chronoPipe/chrono.pipe';

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopwatchPageRoutingModule
  ],
  declarations: [StopwatchPage, ChronoPipe],
  providers: [ {provide: LOCALE_ID, useValue: 'fr-CA' } ]
})
export class StopwatchPageModule {}
