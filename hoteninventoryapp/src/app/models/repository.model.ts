import { Book } from "./book.model";
import { DataSource } from "./dataSource.model";

export class BookRepository{
    private dataSource :  DataSource;
    private books :  Book[];
    constructor(){
        this.dataSource = new DataSource();
        this.books = new Array<Book>();
        this.dataSource.getBooks().forEach((book : Book) => {
                this.books.push(book);
        });;
    }
    getBooks() : Book[]{
        return this.books; 
    }   
}