import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent implements OnInit{
  hotelName = "Hilton Hotel"
  constructor(){

  }
  ngOnInit() : void{

  }
}
