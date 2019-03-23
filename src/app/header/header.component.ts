import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart/cart.service';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sumCartItems: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sumCartItems = this.cartService.getCartItems().length;
    this.cartService.cartItemsChanged.subscribe(
      (courses:Course[]) => this.sumCartItems = courses.length
    );
  }

}
