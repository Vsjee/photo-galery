import { Component, Input } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { privateRoutes, publicRoutes } from 'src/app/models';
import { AuthService } from 'src/app/services';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    CommonModule,
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showPrivateRoute: boolean = false;

  publicRoutes = publicRoutes;
  privateRoutes = privateRoutes;

  constructor(private auth: AuthService, private route: Router) {
    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Route change detected');
      }
      if (event instanceof NavigationEnd) {
        if (
          event.url ===
            `/${privateRoutes.PRIVATE}/${privateRoutes.UPLOADIMAGESDASHBOARD}` ||
          event.url === `/${privateRoutes.PRIVATE}/${privateRoutes.PROFILE}`
        ) {
          this.showPrivateRoute = true;
        } else {
          this.showPrivateRoute = false;
        }
      }
      if (event instanceof NavigationError) {
        console.error(event.error);
      }
    });
  }

  async logout() {
    await this.auth.logout();
    this.route.navigate([`/${publicRoutes.HOME}`]);
  }
}
