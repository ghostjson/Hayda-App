import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainPage } from "./main.page";

const routes: Routes = [
  {
    path: "",
    component: MainPage,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "club",
        loadChildren: () =>
          import("../health-club/health-club.module").then(
            (m) => m.HealthClubPageModule
          ),
      },
      
      {
        path: "gamification",
        loadChildren: () =>
          import("../gamification/gamification.module").then(
            (m) => m.GamificationPageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
