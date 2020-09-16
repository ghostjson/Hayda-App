import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "home",
    redirectTo: "main",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "info",
    loadChildren: () =>
      import("./pages/info/info.module").then((m) => m.InfoPageModule),
  },
  {
    path: "main",
    loadChildren: () =>
      import("./pages/main/main.module").then((m) => m.MainPageModule),
  },
  {
    path: "main/settings/profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "main/settings/notifications",
    loadChildren: () =>
      import("./pages/notifications/notifications.module").then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'main/settings/faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'main/settings/about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
