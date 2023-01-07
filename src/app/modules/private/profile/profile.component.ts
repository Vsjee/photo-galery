import { Component } from '@angular/core';
import { AuthService } from 'src/app/services';
import { filter } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user$ = this.auth.currentActiveUser$.pipe(
    filter((state) => (state ? true : false))
  );

  constructor(private auth: AuthService) {}
}
