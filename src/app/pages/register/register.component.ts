import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string="";
  password:string="";
  errorMessage:any;
   constructor(private http: HttpClient) {}
    register() {
    const apiUrl = 'http://localhost:3000/api/auth/register';
  
    const requestBody = {
      username: this.email,
      password: this.password,
      role: "user"
    };

    this.http.post(apiUrl, requestBody).subscribe(
      (response:any) => {
        console.log(response);
        localStorage.setItem('userId', response.user._id);
        localStorage.setItem('role',  response.user.role);
        window.location.replace('');
      },
      (error) => {
        console.error('Error during registration:', error.message); 
      this.errorMessage=(error.message);}
    );
  }
}
