import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImagesDashboardComponent } from './upload-images-dashboard.component';

const routes: Routes = [
  { path: '', component: UploadImagesDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadImagesDashboardRoutingModule {}
