import { Component } from '@angular/core';
import { BookRepository } from '../models/repository.model';
import { Book } from '../models/book.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  // model: BookRepository = new BookRepository();
  // book: Book | undefined = this.model.getIDBook(1);
  // disabled: boolean = true;
  // getClassBinding(id: number): string {
  //   this.book = this.model.getIDBook(id);
  //   return (this?.book?.price != undefined && this.book.price >= 20) ? "bg-primary" : "bg-info";
  // }
  // getClassObject(id: number): Object {
  //   const book = this.model.getIDBook(id);
  //   return  {
  //     "bg-primary": book?.price != undefined && book?.price >= 20,
  //     "bg-info": book?.price != undefined && book?.price < 20,
  //     "text-white": book?.name != undefined && book?.name == "My Childhod"
  //   };
  // }
  color:string = "red"
}
