import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { LearningService } from '../../services/learning.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.component.html'
})
export class LearningComponent implements OnInit{

  course!:Course;

  constructor(private learnig:LearningService){}

  ngOnInit(): void {
    this.course=this.learnig.getCourse();
  }
}
