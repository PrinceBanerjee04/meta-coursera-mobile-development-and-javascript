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

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
        this.energy -= 10; // Assuming working reduces energy
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    let internWorker = new Worker("Bob", 21, 110, 0, 10);
    internWorker.goToWork();
    return internWorker;
}

// Task 4: Code a manager object, methods
function manager() {
    let managerWorker = new Worker("Alice", 30, 120, 100, 30);
    managerWorker.doSomethingFun();
    return managerWorker;

}
