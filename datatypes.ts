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

class Employee{
    id! : number;
    name! : string;
    address! : string
    constructor(id : number , name : string , address:string){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

let amir : Employee = new Employee(100 , "dhah" , "qfqfq");
amir.id = 100;
amir.name = "AmirDhahri";
amir.address = "amir@adazd";
console.log(amir);
