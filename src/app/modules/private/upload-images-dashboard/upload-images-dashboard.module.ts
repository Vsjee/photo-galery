import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesDashboardComponent } from './upload-images-dashboard.component';
import { CardImgComponent } from 'src/app/components/card-img/card-img.component';

@NgModule({
  declarations: [UploadImagesDashboardComponent],
  imports: [CommonModule, CardImgComponent],
})
export class UploadImagesDashboardModule {}
