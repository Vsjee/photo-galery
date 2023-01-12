import { createAction, props } from '@ngrx/store';
import { FavoriteInfo } from 'src/app/models';

export const addFavoriteItem = createAction(
  '[Favorite List] Add favorite item success',
  props<{ favorite: FavoriteInfo }>()
);

export const removeFavoriteItem = createAction(
  '[Favorite List] Remove favorite item success',
  props<{ favorite: FavoriteInfo }>()
);
