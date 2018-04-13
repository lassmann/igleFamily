import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    // activate spinner
    this.auth.emailLogin(this.userForm.value[ 'email' ], this.userForm.value[ 'password' ])
      .then(() => {
      // desactivate spinner
        return this.router.navigate([ 'admin/dashboard' ]);
      });
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': [ '', [
        Validators.required,
        Validators.email,
      ] ],
      'password': [ '', [
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        // Validators.minLength(6),
        // Validators.maxLength(25),
      ] ],
    });
  }

}
