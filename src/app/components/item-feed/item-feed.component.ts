import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-item-feed',
  templateUrl: './item-feed.component.html',
  styleUrls: ['./item-feed.component.css']
})
export class ItemFeedComponent {
  constructor(public router: Router, private http: HttpClient, private cartService: CartService,private location: Location) {}
  @Input() product: any;
  @Input() isUserProfile:any;
  @Input() vendor:any;
    userData:any

  navigateToUserProfile(id: string) {
    this.router.navigate(['store', id]);
    
  }

  showPopup = false;
    expandedPost: any;

    expandPost(product: any) {
      this.expandedPost = product;
      this.showPopup = true;
    }

    closePopup() {
      this.showPopup = false;
      this.expandedPost = null;
    }

    addItemToCart(item: any, qty: number) {
      this.cartService.addToCart(item, qty);
      console.log(this.cartService.cart);
    }

    isInCart(id: any): boolean {
      return this.cartService?.cart.some((prod:any) => prod?._id === id);
    }

    deleteProduct(){
     console.log(this.product._id);
      this.http.delete(`http://localhost:3000/api/products/${this.product._id}`).subscribe( (response) => {
        console.log('Producto eliminado:', response);
        const currentRoute = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigateByUrl(currentRoute);
        });
      },
      (error) => {
        console.error('Error durante la eliminación del producto:', error);
      });
    
  }
}
