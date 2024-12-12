"use strict";
// let lname : string = "Amir"
// let fname : string = "Dhahri"
// enum Fruits {
//     Banana = "Banana",
//     Apple = "Apple",
//     Orange = "Orange"
// }
// interface Icar{
//     printName():void;
// }
// class Car implements Icar{
//     name : Fruits
//     constructor(name : Fruits){
//         this.name = name;
//     }
//     printName(){
//         console.log(this.name);
//     }
// }
// let car : Car = new Car(Fruits.Banana);
// car.printName();
// type EmployeeType = {
//     name : string,
//     age : number,
//     country : string
// }
// let employees : EmployeeType[] = new Array();
// employees.push({
//     name : "Amir Dhahri",
//     age:20,
//     country:"Tunisie"
// })
// employees.forEach(employee => {
//     console.log(employee);
// })
// function getItem<T> (items : T[] , i : number) : T{
//     if(i < 0 || i >= items.length)return {} as any;
//     return items[i];
// }
// let items : string[] = ["Amir" , "Dhahri"];
// let nums : number[] = [1 , 2 , 3 ,  4 ,5 ,6 ,7 ,8,9];
// console.log(getItem(items , 1));
// console.log(getItem(nums, 2));
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    get empid() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    static getEmployeeCount() {
        return 50;
    }
}
class Manager extends Employee {
    constructor(role, id, name, address) {
        super(id, name, address);
        this.role = role;
    }
}
let amir = new Manager("An administrator", 100, "dhah", "qfqfq");
console.log(amir);
console.log(Employee.getEmployeeCount());
