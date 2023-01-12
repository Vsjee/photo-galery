import { createSelector } from '@ngrx/store';
import { FavoritesState } from 'src/app/models';
import { AppState } from '../app.state';

export const selectFavoriteFeature = (state: AppState) => state.favorites;

export const selectFavoriteList = createSelector(
  selectFavoriteFeature,
  (favorite: FavoritesState) => favorite.favorites
);

export const selectFavoriteLoading = createSelector(
  selectFavoriteFeature,
  (favorite: FavoritesState) => favorite.loading
);
