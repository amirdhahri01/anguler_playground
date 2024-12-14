import { Component, Signal, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal("Angular Ecommerce")
  cart = signal("Cart")
  showBtnClick(){
    console.log("Clicked");
  }
}
