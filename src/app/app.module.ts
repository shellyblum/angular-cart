import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartService } from './cart/cart.service';
import { CoursesService } from './courses/courses.service';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, CartComponent, HeaderComponent, CoursesComponent, CourseComponent],
  bootstrap: [AppComponent],
  providers: [CartService, CoursesService]
})
export class AppModule { }
