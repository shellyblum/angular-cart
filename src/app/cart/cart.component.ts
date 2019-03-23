import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../shared/course.model';
import { CartItem } from '../shared/cartItem.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [] ;
  sumCart: number;
  cartSub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.sumPrices();

    this.cartSub = this.cartService.cartItemsChanged.subscribe(
      (cartItems: Course[]) => {
        this.cartItems = cartItems;
        this.sumPrices();
      }
    );
  }

  sumPrices() {
    this.sumCart = 0;
    if (this.cartItems.length > 0) {
      this.cartItems.forEach((item: CartItem) => {
        this.sumCart += item.price;
      });
    }
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }
 
}