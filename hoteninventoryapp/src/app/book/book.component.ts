import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';
import { EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { InputFormDirective } from '../directives/input-form.directive';
import { log } from 'node:console';
import { provideHttpClient , withInterceptorsFromDi } from '@angular/common/http';
type def = {
  id : number,
  courseName : string
}
@Component({
  selector: 'app-book',
  imports: [FormsModule , CommonModule , InputFormDirective],
  standalone:true,
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})

export class BookComponent implements OnInit{
// onKeyUp($event: KeyboardEvent) {
// throw new Error('Method not implemented.');
// }

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
// styles = {
//   color:'white',
//   backgroundColor:"red"
// }
// getStyle(){
//   return this.styles;
// }
// onClick($event: MouseEvent) {
//   console.log("Div clicked");
// }
// name : string = "";
// data : string = "Amir Dhahri"
// price : number = 5000
// date : Date = new Date()
// onClickDiv($event: MouseEvent) {
//   $event.stopPropagation()
//   console.log("Button clicked");
// }

// @Input("isFavorite") data : string = "";
// @Output() change = new EventEmitter()

// onClickHandler($event : MouseEvent){
//   this.change.emit();
// }
// names : string[] = ["Amir" , "Dhahri"]
// peopleByCountry : any[] = [
//   { 
//     Country : "Tunisie",
//     names :[
//       {
//         name:"Amir"
//       },
//       {
//         name:"dhahri"
//       }
//     ]
//   },
//   { 
//     Country : "France",
//     names :[
//       {
//         name:"Nizar"
//       },
//       {
//         name:"Far"
//       }
//     ]
//   }
// ]
  
//   courses : def[] = [
//     {id:1 , courseName: "Java"} ,
//     {id:2 , courseName: "Python"},
//     {id:3 , courseName: "C++"},
//     {id:4 , courseName: "Ruby"},
//   ]
//   idx = 5;
//   trackByCourse(index : any, course : any){
//     return course ? course.id : undefined;
//   }
//   onRemove(idx : number){
//     this.courses.splice(idx , 1);
//   }
//   onAdd(){
//     this.courses.push({id: this.idx++ , courseName:"Far Cry"})
//   }  
  // defaultView : string = "courses"
  // setView(view : string){
  //   this.defaultView = view;
  // }
  whatcolor = true;
  url : string = "https://jsonplaceholder.typicode.com/todos/1"
  public constructor(){

  }
  ngOnInit(): void {
    // this.http.get(this.url).subscribe(response => {
    //   console.log(response);
    // })
  }
}
