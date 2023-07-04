import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products:any

  constructor(public router: Router, private http:HttpClient) { }

  getProducts() {
    this.http
      .get(`http://localhost:3000/api/products`)
      .subscribe((response) => {
        this.products = response;
        console.log(this.products);
      });
  }
  ngOnInit() {
    this.getProducts();
  }
}
