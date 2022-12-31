import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';
import { publicRoutes } from './models/routes';
import { privateRoutes } from './models/routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${publicRoutes.HOME}` },
  {
    path: `${publicRoutes.HOME}`,
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: `${publicRoutes.LOGIN}`,
    loadChildren: () => import('./modules').then((m) => m.LoginModule),
  },
  {
    path: `${publicRoutes.SIGNIN}`,
    loadChildren: () => import('./modules').then((m) => m.SignInModule),
  },
  {
    path: `${privateRoutes.UPLOADIMAGESDASHBOARD}`,
    loadChildren: () =>
      import('./modules').then((m) => m.UploadImagesDashboardModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
