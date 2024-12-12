"use strict";
let lname = "Amir";
let fname = "Dhahri";
var Fruits;
(function (Fruits) {
    Fruits["Banana"] = "Banana";
    Fruits["Apple"] = "Apple";
    Fruits["Orange"] = "Orange";
})(Fruits || (Fruits = {}));
class Car {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
let car = new Car(Fruits.Banana);
car.printName();
