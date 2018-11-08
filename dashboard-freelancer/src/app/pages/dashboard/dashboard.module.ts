import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { WeatherComponent } from './weather/weather.component';

import { WeatherService } from '../../@core/data/weather.service'
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent, WeatherComponent,
  ],
  providers:[
  	WeatherService
  ]
})
export class DashboardModule { }
