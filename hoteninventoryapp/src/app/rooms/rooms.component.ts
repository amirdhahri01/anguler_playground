import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';

@Component({
  selector: 'app-rooms',
  imports: [NgFor],
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

export class RoomsComponent implements OnInit{
  hotelName = "Hilton Hotel"
  courses : string[];
  constructor(){
    this.courses =  new DBService().getAll();
  }
  ngOnInit() : void{

  }
}
