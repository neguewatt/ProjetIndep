import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { SimulateurComponent } from './simulateur.component';
import { SasuComponent } from './sasu/sasu.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [SimulateurComponent, SasuComponent,
  ],
})
export class SimulateurModule { }
