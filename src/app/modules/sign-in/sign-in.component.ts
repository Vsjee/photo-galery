import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, ValidationService } from 'src/app/services';
import { Router } from '@angular/router';
import { privateRoutes } from 'src/app/models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form = new FormGroup(
    {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    },
    this.validation.passwordMatch('password', 'confirmPassword')
  );

  constructor(
    public auth: AuthService,
    private router: Router,
    private validation: ValidationService
  ) {}

  signIn() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .register(email, password)
        .then(() =>
          this.router.navigate([
            `/${privateRoutes.PRIVATE}/${privateRoutes.UPLOADIMAGESDASHBOARD}`,
          ])
        )
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
