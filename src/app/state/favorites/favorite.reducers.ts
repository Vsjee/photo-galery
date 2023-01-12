import { createReducer, on } from '@ngrx/store';
import { FavoritesState } from 'src/app/models';
import { addFavoriteItem, removeFavoriteItem } from './favorites.actions';

export const initialState: FavoritesState = { loading: false, favorites: [] };

export const favoriteReducers = createReducer(
  initialState,
  on(addFavoriteItem, (state, { favorite }) => ({
    ...state,
    favorites: [
      ...state.favorites,
      {
        favoriteItem: favorite.favoriteItem,
      },
    ],
  })),

  on(removeFavoriteItem, (state, { favorite }) => ({
    ...state,
    favorites: [
      ...state.favorites.filter(
        (item) => item.favoriteItem !== favorite.favoriteItem
      ),
    ],
  }))
);
