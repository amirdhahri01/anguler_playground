let lname : string = "Amir"
let fname : string = "Dhahri"
enum Fruits {
    Banana = "Banana",
    Apple = "Apple",
    Orange = "Orange"
}
interface Icar{
    printName():void;
}
class Car implements Icar{
    name : Fruits
    constructor(name : Fruits){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}
let car : Car = new Car(Fruits.Banana);

car.printName();