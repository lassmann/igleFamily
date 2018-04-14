import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../core/auth.service';

// type UserFields = 'email' | 'password';
// type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  sendingForm = false;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    this.sendingForm = true;
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
      .then(() => {
        this.sendingForm = false;
        this.snackBar.open('Bienvenido', null, { duration: 2000 });
        return this.router.navigate(['admin/dashboard']);
      });
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        // Validators.minLength(6),
        // Validators.maxLength(25),
      ]],
    });
  }

}
