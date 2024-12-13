import { Component } from '@angular/core';
import { BookRepository } from '../models/repository.model';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
    model:BookRepository = new BookRepository();
    book : Book | undefined = this.model.getIDBook(1);
    getClassBinding(id:number) : string{
      this.book  =  this.model.getIDBook(id);
      return (this?.book?.price != undefined && this.book.price >= 20) ? "bg-primary" : "bg-info";
    }
}
