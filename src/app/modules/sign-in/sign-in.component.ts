import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  signIn() {
    if (this.form.valid) {
      const { email, password, confirmPassword } = this.form.getRawValue();
      console.log(email, password, confirmPassword);
    } else {
      this.form.markAllAsTouched();
    }
  }

  // getErrorMessage() {
  //   if (this.form.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.form.hasError('email') ? 'Not a valid email' : '';
  // }
}
