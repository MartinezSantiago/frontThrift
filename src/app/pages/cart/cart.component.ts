import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService, private http:HttpClient) { }
  cart:any = this.cartService.cart

  public totalP(): number {
    return this.cart.reduce((prev:any, act:any) => prev + act.qty * act.price, 0);
  }
  ngOnInit() {
    console.log(this.cart)
  }

  


}
