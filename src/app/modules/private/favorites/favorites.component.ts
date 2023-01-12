import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteInfo } from 'src/app/models';
import { AppState, selectFavoriteList } from 'src/app/state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoriteList: FavoriteInfo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(selectFavoriteList)
      .subscribe((items: FavoriteInfo[]) => (this.favoriteList = items));
  }
}
