import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { SimulateurComponent } from './simulateur.component';
import { SasuComponent } from './sasu/sasu.component';
import { EurlComponent } from './eurl/eurl.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [SimulateurComponent, SasuComponent, EurlComponent,
  ],
})
export class SimulateurModule { }
