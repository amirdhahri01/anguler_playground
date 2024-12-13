import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';

@Component({
  selector: 'app-rooms',
  imports: [],
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers:[DBService]
})

export class RoomsComponent implements OnInit{
  hotelName = "Hilton Hotel"
  courses : string[];
  constructor(dbServic : DBService){
    this.courses =  dbServic.getAll();
  }
  ngOnInit() : void{

  }
}
