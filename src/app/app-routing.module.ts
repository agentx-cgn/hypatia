import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPage } from '@hypatia/pages/start/start.page';
import { SimulationPage } from '@hypatia/pages/simulation/simulation.page';
import { LaborPage } from '@hypatia/pages/labor/labor.page';
import { NotfoundPage } from '@hypatia/pages/notfound/notfound.page';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },

  { path: ':lang/start',      component: StartPage },
  { path: ':lang/labor',      component: LaborPage },
  { path: ':lang/simulation', component: SimulationPage },

  { path: '**', component: NotfoundPage }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
