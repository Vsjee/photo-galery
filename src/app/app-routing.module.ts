import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { publicRoutes } from './models/routes';
import { privateRoutes } from './models/routes';

import { AuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: `${publicRoutes.HOME}`, pathMatch: 'full' },
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
    path: `${privateRoutes.PRIVATE}`,
    loadChildren: () => import('./modules').then((m) => m.PrivateRoutingModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
