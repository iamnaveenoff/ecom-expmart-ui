import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  errorMsg: string = '';

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      const {username, password} = this.signinForm.value;

      this.apiService.signin(username, password).subscribe(
        response => {
          console.log('Signin successful:', response);
          // Navigate to the dashboard or home page
          this.router.navigateByUrl('/home');
        },
        error => {
          console.error('Signin failed:', error);
          this.errorMsg = 'Login failed. Please try again.';
        }
      );
    }
  }
}
