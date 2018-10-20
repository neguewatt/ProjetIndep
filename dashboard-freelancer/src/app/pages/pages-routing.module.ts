import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagoftimeComponent } from './managoftime/managoftime.component';
import { ClientsComponent } from './clients/clients.component';
import { FacturesComponent } from './factures/factures.component';
import { SimulateurComponent } from './simulateur/simulateur.component';
import { ParametragesComponent } from './parametrages/parametrages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'managoftime',
    component: ManagoftimeComponent,
  },{
    path: 'clients',
    component: ClientsComponent,
  },{
    path: 'Factures',
    component: FacturesComponent,
  },{
    path: 'Simulateur',
    component: SimulateurComponent,
  },{
    path: 'Paramètrages',
    component: ParametragesComponent,
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
