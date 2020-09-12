import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamificationPageRoutingModule } from './gamification-routing.module';

import { GamificationPage } from './gamification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamificationPageRoutingModule
  ],
  declarations: [GamificationPage]
})
export class GamificationPageModule {}
