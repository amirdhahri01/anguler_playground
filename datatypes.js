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
let employees = new Array();
employees.push({
    name: "Amir Dhahri",
    age: 20,
    country: "Tunisie"
});
employees.forEach(employee => {
    console.log(employee);
});
function getItem(items, i) {
    if (i < 0 || i >= items.length)
        return {};
    return items[i];
}
let items = ["Amir", "Dhahri"];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getItem(items, 1));
console.log(getItem(nums, 2));
