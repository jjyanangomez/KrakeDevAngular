import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { LearningService } from '../../services/learning.service';
import { CourseHeaderComponent } from '../course-header/course-header.component';
import { CourseStudentDetailComponent } from '../course-student-detail/course-student-detail.component';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseHeaderComponent,CourseStudentDetailComponent],
  templateUrl: './learning.component.html'
})
export class LearningComponent implements OnInit{

  course!:Course;

  constructor(private learnig:LearningService){}

  ngOnInit(): void {
    this.course=this.learnig.getCourse();
  }
}
