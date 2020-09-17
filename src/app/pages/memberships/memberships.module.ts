import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipsPageRoutingModule } from './memberships-routing.module';

import { MembershipsPage } from './memberships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipsPageRoutingModule
  ],
  declarations: [MembershipsPage]
})
export class MembershipsPageModule {}
