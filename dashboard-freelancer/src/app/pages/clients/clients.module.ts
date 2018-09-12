import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientsComponent } from './clients.component';
import { ButtonSwitchComponent } from './button-switch/button-switch.component';


const components = [
	ClientsComponent,ButtonSwitchComponent,
];

@NgModule({
  imports: [
    ThemeModule,
  ],
  exports:[
  	...components,
  ],
  declarations: [
  	...components,
  ],
})
export class ClientsModule { }
