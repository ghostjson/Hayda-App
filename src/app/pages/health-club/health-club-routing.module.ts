import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthClubPage } from './health-club.page';

const routes: Routes = [
  {
    path: '',
    component: HealthClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthClubPageRoutingModule {}
