import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){

  }
userId:any;
  location:any= window.location.pathname == '/login' || window.location.pathname == '/register' ? true: false
  isMenuOpen: boolean = false;

  navigateToProfile(){
   this.userId=localStorage.getItem("userId");

window.location.replace('store/'+this.userId);
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  logout() {
    localStorage.clear();
    window.location.replace('/login');
  }
}
