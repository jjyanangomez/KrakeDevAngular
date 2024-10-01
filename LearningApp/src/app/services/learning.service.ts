import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { courseData } from '../data/course.data';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  private learning:Course = courseData;
  constructor() { }

  getCourse():Course{
    return this.learning;
  }
}
