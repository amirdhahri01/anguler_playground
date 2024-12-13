import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  imports: [RoomsComponent , CourseComponent],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'hoteninventoryapp';
}
