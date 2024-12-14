import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {

  constructor() { }

  @HostListener("focus") onFocus(){
    window.alert("Focus")
  }
  @HostListener("blur") onBlur(){
    window.alert("Blur")
  }
}
