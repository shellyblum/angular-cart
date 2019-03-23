import { Subject } from 'rxjs';

import { Course } from '../shared/course.model';
import { CartItem } from '../shared/cartItem.model';

export class CartService {
  STORAGE_KEY = 'local_cart';
  cartItemsChanged = new Subject<CartItem[]>();
  cartItems: CartItem[] = [];

  constructor() {
    this.initCartItems();
  }

  initCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    this.cartItemsChanged.subscribe(
      (cartItems: CartItem[]) => localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cartItems))
    );
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  addToCart(course: Course) {
    this.cartItems.push(course);
    this.cartItemsChanged.next(this.getCartItems())
  }

  removeFromCart(course: Course) {
    this.cartItems = this.cartItems.filter((item: CartItem) => {
      return item.id !== course.id
    });
    this.cartItemsChanged.next(this.getCartItems());
  }

  isItemInCart(course: Course) {
    return this.cartItems.some((item:CartItem) => item.id === course.id);
  }
}