import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr[course-student-item]',
  standalone: true,
  imports: [],
  templateUrl: './course-student-item.component.html',
})
export class CourseStudentItemComponent {
  @Input()item!:Student;
}
