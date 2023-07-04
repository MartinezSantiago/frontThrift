import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage:any;
  constructor(private http: HttpClient) {}

  login() {
    const apiUrl = 'http://localhost:3000/api/auth/login';

    const requestBody = {
      username: this.email,
      password: this.password,
    };

    this.http.post(apiUrl, requestBody).subscribe(
      (response: any) => {
        localStorage.setItem('userId', response.data._id);
        localStorage.setItem('role', response.data.role);
        window.location.replace('');
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage=(error.message);
      }
    );
  }
}
