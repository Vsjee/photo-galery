import { FavoriteInfo } from './favorite.model';

export interface FavoritesState {
  loading: boolean;
  favorites: FavoriteInfo[];
}
