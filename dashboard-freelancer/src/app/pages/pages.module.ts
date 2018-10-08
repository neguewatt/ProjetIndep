import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClientsModule } from './clients/clients.module';
import { FacturesModule } from './factures/factures.module';
import { SimulateurModule } from './simulateur/simulateur.module';
import { ParametragesModule } from './parametrages/parametrages.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagoftimeComponent } from './managoftime/managoftime.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ClientsModule,
    FacturesModule,
    SimulateurModule,
    ParametragesModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ManagoftimeComponent,
  ],
})
export class PagesModule {
}
