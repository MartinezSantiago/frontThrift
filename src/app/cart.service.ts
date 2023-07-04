import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any =[]

  addToCart(item: any, qty: number) {
    const existingItem = this.cart.find((product:any) => product._id === item._id);
    if (existingItem) {
      existingItem.qty += qty;
    } else {
      this.cart.push({ ...item, qty: qty });
    }
  }

  removeFromCart(item: any) {
    const index = this.cart.findIndex((product:any) => product._id === item._id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  totalP(): number {
    return this.cart.reduce((prev:any, act:any) => prev + act.qty * act.price, 0);
  }

  totalProducts(): number {
    return this.cart.reduce((acu:any, prodActual:any) => acu + prodActual.qty, 0);
  }

  clear() {
    this.cart = [];
  }

  isInCart(id: any): boolean {
    return this.cart.some((prod:any) => prod._id === id);
  }

  deleteProd(id: any) {
    this.cart = this.cart.filter((prod:any) => prod._id !== id);
  }
}