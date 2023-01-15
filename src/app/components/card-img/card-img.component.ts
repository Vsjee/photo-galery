import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { FavoriteInfo, privateRoutes } from 'src/app/models';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { ShareUrlsService } from 'src/app/services';
import {
  addFavoriteItem,
  AppState,
  removeFavoriteItem,
  selectFavoriteList,
} from 'src/app/state';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule, NgOptimizedImage],
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss'],
})
export class CardImgComponent {
  @Input() image: string = '';
  display: boolean = false;
  favorites: FavoriteInfo[] = [];
  currentUrl = this.router.url;
  favoritePage = `/${privateRoutes.PRIVATE}/${privateRoutes.FAVORITES}`;
  isLoading: boolean = true;
  loader: string =
    'https://media.tenor.com/images/8d483e909ec3618f521e9700d6fbf2e1/tenor.gif';

  constructor(
    private store: Store<AppState>,
    private shareUrl: ShareUrlsService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  actions() {
    if (this.currentUrl !== this.favoritePage) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

  addFavoriteItem(image: string) {
    this.getFavoriteList();
    let find = this.favorites.find(
      (item: FavoriteInfo) => item.favoriteItem === image
    );

    if (!find) {
      let addItem: FavoriteInfo = {
        favoriteItem: image,
      };
      this.store.dispatch(addFavoriteItem({ favorite: addItem }));
      this.openSnackBar('Item was succesfully added.');
    } else {
      this.openSnackBar('Item already exist in your favorites list.');
    }
  }

  removeFavoriteItem(image: string) {
    let removeItem: FavoriteInfo = {
      favoriteItem: image,
    };
    this.store.dispatch(removeFavoriteItem({ favorite: removeItem }));
    this.openSnackBar('Item was succesfully removed.');
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

  openSnackBar(message: string) {
    let snackConfig = new MatSnackBarConfig();

    snackConfig.horizontalPosition = 'end';
    snackConfig.duration = 1800;

    this._snackBar.open(message, 'X', snackConfig);
  }

  hideLoader() {
    this.isLoading = false;
  }

  ngOnInit() {
    this.actions();
  }
}
