// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        if (this.energy >= 10) {
            this.energy -= 10;
        } else {
            console.log("Not enough energy to do something fun!");
        }
    }
}
