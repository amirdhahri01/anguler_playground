import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { CourseComponent } from './course/course.component';
import { ProductsComponent } from './products/products.component';
import { BookComponent } from './book/book.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductListComponent , ProductListComponent],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.scss',
})

export class AppComponent {
onChangeHandler() {
  console.log("OK.");
  
}
  title = 'hoteninventoryapp';
  data:string = "Hello From the othr side"
}
