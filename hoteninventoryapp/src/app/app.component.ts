import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { CourseComponent } from './course/course.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [RoomsComponent , CourseComponent , ProductsComponent],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'hoteninventoryapp';
  
}
