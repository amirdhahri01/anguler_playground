import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {

  constructor() { }

  @HostListener("focus") onFocus(){
    console.log("Focus")
  }
  @HostListener("blur") onBlur(){
    console.log("Blur")
  }
}
