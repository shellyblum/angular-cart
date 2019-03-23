import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Course } from '../shared/course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  coursesSub: Subscription;
  searchControl = new FormControl('');
  courses: Course[] = [];
  coursesToShow = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesSub = this.coursesService.getCourses().subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        this.coursesToShow = courses;
      }
    );

    this.searchControl.valueChanges.pipe(
      debounceTime((200))
    ).subscribe(this.search.bind(this));

    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
    });

    window.onclick = (event) => {
      if (!(<HTMLTextAreaElement>event.target).matches('.dropdown')) {
        event.stopPropagation();
        dropdown.classList.remove('is-active');
      }
    }
  }

  search(value: string) {
    if (value) {
      this.coursesToShow = this.courses.filter(
        (c: Course) => c.name.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      this.coursesToShow = this.courses;
    }
  }

  sortByPrice(): void {
    this.coursesToShow = this.courses.sort((a: Course, b: Course) => {
      return a.price - b.price;
    });
  }

  sortByLevel(): void {
    this.coursesToShow = this.courses.sort((a: Course, b: Course) => {
      let levelA = a.level.toUpperCase();
      let levelB = b.level.toUpperCase();
      if (levelA < levelB) {
        return -1;
      }
      if (levelA > levelB) {
        return 1;
      }
      return 0;
    });
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
  }
}
