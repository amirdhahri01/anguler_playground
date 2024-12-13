import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { SummaryPipe } from '../pipes/summary.pipe';
@Component({
  selector: 'app-course',
  imports: [FormsModule , CommonModule , SummaryPipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
//     courseName : string = "Anguler 6"
//     imageUrl : string = "https://www.avanse.com/blogs/images/15.jpg"
//     colSpan : number = 3
//     isActive : boolean = true
//     nameval : string = "Amir";
//     firstname : string = ""
//     methodName(){
//       alert("Welcome to angular")
//     }
//     divClick($event : Event){
//       console.log("Div get fired");
//       console.log($event);
//     }
//     btnClick($event : Event){
//       $event.stopPropagation();
//       console.log("Button get fired");
//       console.log($event);
//     }
    
//     onkeyUp() : void{
//       console.log(this.firstname);
//       this.nameval = this.firstname;
//     }
  // employee = {
  //   fullname : "Amir Dhahri",
  //   rating : 10,
  //   salary : 5000,
  //   hiringDate : new Date(2019 , 1 , 1)
  // }
  title : string = "Bienvenue Amir Dhahri"
}
