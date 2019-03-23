import { Component, Input, OnInit } from '@angular/core';

import { Course } from "../../shared/course.model";
import { CartService } from "../../cart/cart.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input('course') course: Course;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  isItemInCart() {
    return this.cartService.isItemInCart(this.course);
  }

  addToCart() {
    this.cartService.addToCart(this.course);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.course);
  }
}
