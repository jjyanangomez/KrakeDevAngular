import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { CourseStudentItemComponent } from '../course-student-item/course-student-item.component';

@Component({
  selector: 'invoice-detail',
  standalone: true,
  imports: [CourseStudentItemComponent],
  templateUrl: './course-student-detail.component.html',
})
export class CourseStudentDetailComponent {
  @Input()students!:Student[];
}
