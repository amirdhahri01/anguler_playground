import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  imports: [RoomsComponent],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'hoteninventoryapp';
}
