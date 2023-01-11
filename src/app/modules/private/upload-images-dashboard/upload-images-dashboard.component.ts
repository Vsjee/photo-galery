import { Component } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { ShareUrlsService } from 'src/app/services';
import { ImageDialogComponent } from './components';

@Component({
  selector: 'app-upload-images-dashboard',
  templateUrl: './upload-images-dashboard.component.html',
  styleUrls: ['./upload-images-dashboard.component.scss'],
})
export class UploadImagesDashboardComponent {
  images: string[];

  constructor(
    private storage: Storage,
    private dialog: MatDialog,
    private shareUrl: ShareUrlsService
  ) {
    this.images = [];
  }

  ngOnInit() {
    this.getImages();
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(() => {
        this.getImages();
      })
      .catch((error) => console.error(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async (response) => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch((error) => console.error(error));
  }

  openDialog(imageUrl: string) {
    this.shareUrl.setInformation(imageUrl);
    this.dialog.open(ImageDialogComponent);
  }
}
