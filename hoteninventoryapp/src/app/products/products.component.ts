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
    getStock() : string{
        return 'Amir Dhari';
    }
}