import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {ApiService} from "../../services/api.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMsg: string = '';  // Add the errorMsg property

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      gscId: ['', Validators.required],  // Added gscId
      phone: ['', [Validators.required, Validators.maxLength(10)]],  // Added phone with a pattern
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.required]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  // Method to handle form submission
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    // Create a UserModel object based on the form values
    const user: UserModel = {
      name: this.registerForm.get('name')?.value,
      gscId: this.registerForm.get('gscId')?.value,
      phone: this.registerForm.get('phone')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    };

    // Call the ApiService to register the user
    this.apiService.register(user).subscribe(
      response => {
        console.log('UserModel registered successfully:', response);
        this.router.navigate(['/login']);  // Navigate to the login page upon successful registration
      },
      error => {
        console.error('Registration error:', error);
        this.errorMsg = error.error.message || 'An error occurred during registration';  // Display the error message
      }
    );
  }
}
