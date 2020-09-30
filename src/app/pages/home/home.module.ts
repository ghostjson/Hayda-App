import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { LinkCardComponent } from "../../components/link-card/link-card.component";
import { RedirectConfirmComponent } from "../../components/redirect-confirm/redirect-confirm.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  exports: [],
  declarations: [HomePage, LinkCardComponent, RedirectConfirmComponent],
})
export class HomePageModule {}
