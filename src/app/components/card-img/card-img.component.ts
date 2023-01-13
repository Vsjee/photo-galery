import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FavoriteInfo, privateRoutes } from 'src/app/models';
import { ImageDialogComponent } from 'src/app/modules';
import { ShareUrlsService } from 'src/app/services';
import {
  addFavoriteItem,
  AppState,
  removeFavoriteItem,
  selectFavoriteList,
} from 'src/app/state';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule],
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss'],
})
export class CardImgComponent {
  @Input() image: string = '';
  display: boolean = false;
  favorites: FavoriteInfo[] = [];

  constructor(
    private store: Store<AppState>,
    private shareUrl: ShareUrlsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  actions() {
    const currentUrl = this.router.url;
    const favoritePage = `/${privateRoutes.PRIVATE}/${privateRoutes.FAVORITES}`;

    if (currentUrl !== favoritePage) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

  addFavoriteItem(image: string) {
    this.getFavoriteList();

    let find = this.favorites.find((item) => item.favoriteItem === image);

    if (!find) {
      let addItem: FavoriteInfo = {
        favoriteItem: image,
      };
      this.store.dispatch(addFavoriteItem({ favorite: addItem }));
    }
  }

  removeFavoriteItem(image: string) {
    let removeItem: FavoriteInfo = {
      favoriteItem: image,
    };
    this.store.dispatch(removeFavoriteItem({ favorite: removeItem }));
  }

  getFavoriteList() {
    this.store.select(selectFavoriteList).subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  openDialog(image: string) {
    this.shareUrl.setInformation(image);
    this.dialog.open(ImageDialogComponent);
  }

  ngOnInit() {
    this.actions();
  }
}
