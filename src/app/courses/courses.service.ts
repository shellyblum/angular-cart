import { of } from 'rxjs';
import { Course } from '../shared/course.model';

export class CoursesService {
  private courses: Course[] = [
    new Course(1, 'Javascript', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 50, 'Beginner'),
    new Course(2, 'React', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 40, 'Beginner+'),
    new Course(3, 'Nodejs', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', 30, 'Advanced'),
    new Course(4, 'Angular', 'Contrary to popular belief, Lorem Ipsum is not simply random text', 40, 'Expert'),
  ]

  getCourses() {
    return of([...this.courses]);
  }
}
