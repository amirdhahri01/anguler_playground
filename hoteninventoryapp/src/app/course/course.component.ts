import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
    courseName : string = "Anguler 6"
    imageUrl : string = "https://www.avanse.com/blogs/images/15.jpg"
}
