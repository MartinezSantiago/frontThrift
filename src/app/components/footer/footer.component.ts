import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  location:any= window.location.pathname == '/login' || window.location.pathname == '/register' ? true: false
}
