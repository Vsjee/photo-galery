import { ActionReducerMap } from '@ngrx/store';
import { FavoritesState } from '../models';
import { favoriteReducers } from './favorites/favorite.reducers';

export interface AppState {
  favorites: FavoritesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  favorites: favoriteReducers,
};
