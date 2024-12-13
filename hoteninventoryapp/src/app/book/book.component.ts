import { Component } from '@angular/core';
import { BookRepository } from '../models/repository.model';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
    model:BookRepository = new BookRepository();
    
}
