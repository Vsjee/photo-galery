import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { CardImgComponent } from 'src/app/components/card-img/card-img.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, CardImgComponent],
})
export class FavoritesModule {}
