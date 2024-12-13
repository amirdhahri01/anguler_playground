import { Component } from "@angular/core";

@Component({
    selector : "app-products" ,
    imports : [],
    templateUrl: "./products.component.html",
    styleUrls : ["products.component.scss"]
})

export class ProductsComponent{
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
}