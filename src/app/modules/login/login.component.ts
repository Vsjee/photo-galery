import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { privateRoutes } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private auth: AuthService) {}

  logIn() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .logIn(email, password)
        .then(() =>
          this.router.navigate([
            `/${privateRoutes.PRIVATE}/${privateRoutes.UPLOADIMAGESDASHBOARD}`,
          ])
        )
        .catch((err) => {
          console.error(err);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
