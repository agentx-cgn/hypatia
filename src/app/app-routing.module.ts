import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPage } from '@hypatia/pages/start/start.page';
import { LaborPage } from '@hypatia/pages/labor/labor.page';
import { NotfoundPage } from '@hypatia/pages/notfound/notfound.page';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },

  { path: '', children: [
    { path: ':lang/start', component: StartPage },
    // { path: '', loadChildren: () => import('./core/lazypages.module').then(m => m.LazypagesModule) },
  ] },

  { path: ':lang/labor', component: LaborPage },
  { path: '**', component: NotfoundPage }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
