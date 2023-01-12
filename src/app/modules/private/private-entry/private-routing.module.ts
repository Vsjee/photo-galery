import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateRoutes } from 'src/app/models';
import { FavoritesComponent } from '../favorites';
import { ProfileComponent } from '../profile';
import { UploadImagesDashboardComponent } from '../upload-images-dashboard';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${privateRoutes.UPLOADIMAGESDASHBOARD}`,
    pathMatch: 'full',
  },
  {
    path: `${privateRoutes.UPLOADIMAGESDASHBOARD}`,
    component: UploadImagesDashboardComponent,
  },
  { path: `${privateRoutes.PROFILE}`, component: ProfileComponent },
  { path: `${privateRoutes.FAVORITES}`, component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
