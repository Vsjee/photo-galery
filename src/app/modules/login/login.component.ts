import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  logIn() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      console.log(email, password);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
