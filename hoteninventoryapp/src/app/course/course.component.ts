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
    colSpan : number = 3
    isActive : boolean = true
    nameval : string = "Amir";
    methodName(){
      alert("Welcome to angular")
    }
    divClick($event : Event){
      console.log("Div get fired");
      console.log($event);
    }
    btnClick($event : Event){
      $event.stopPropagation();
      console.log("Button get fired");
      console.log($event);
    }
    
    onkeyUp(firstname : string){
      this.nameval = firstname;
    }
}
