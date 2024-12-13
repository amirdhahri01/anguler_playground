import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector : "app-products" ,
    imports : [FormsModule],
    templateUrl: "./products.component.html",
    styleUrls : ["products.component.scss"]
})

export class ProductsComponent{
    enteredValue : string = "";
    onUpdateProductName(event : Event) {
        this.enteredValue = (<HTMLInputElement>event.target).value ; 
    }
    greet : string = "Hello World";
    productId:number = 1;
    stockStatus:string = "Yes";
    addProduct: boolean = true;
    constructor(){
        setTimeout(()=>{
            this.addProduct = false;
        } , 100)
    }
    getStock() : string{
        return 'Amir Dhari';
    }
    onCLick(){
        console.log(this.greet);
    }
}