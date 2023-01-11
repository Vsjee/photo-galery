import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ShareUrlsService } from 'src/app/services';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
})
export class ImageDialogComponent {
  image: string = '';

  constructor(private shareUrl: ShareUrlsService) {
    this.shareUrl.getIformation().subscribe((info: string) => {
      this.image = info;
    });
  }
}
