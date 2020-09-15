import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthClubPageRoutingModule } from './health-club-routing.module';

import { HealthClubPage } from './health-club.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LinkCardComponent } from 'src/app/components/link-card/link-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthClubPageRoutingModule
  ],
  declarations: [HealthClubPage, HeaderComponent, LinkCardComponent]
})
export class HealthClubPageModule {}
