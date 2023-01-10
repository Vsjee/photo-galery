import { Component } from '@angular/core';
import { AuthService } from 'src/app/services';
import { filter } from 'rxjs';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteAccountDialogComponent } from './components';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user$ = this.auth.currentActiveUser$.pipe(
    filter((state) => (state ? true : false))
  );

  constructor(private auth: AuthService, private dialog: MatDialog) {}

  openDialog() {
    const dialogConf = new MatDialogConfig();

    dialogConf.disableClose = true;
    dialogConf.autoFocus = true;

    const dialogRef = this.dialog.open(
      DeleteAccountDialogComponent,
      dialogConf
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
