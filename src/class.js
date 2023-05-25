"use strict";
class DeveloperClass {
    constructor(nm, id) {
        this.dId = id;
        this.devName = nm;
    }
    getDev() {
        return this.devName + " " + dev.dId;
    }
    setName(name) {
        return this.devName = name;
    }
}
let dev = new DeveloperClass('Rajesh', 10);
console.log(dev.getDev());
dev.setName("Rajesh waran");
console.log(dev.getDev());
class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getPerson() {
        console.log(this.name + ` ` + this.id + " " + this.city);
    }
}
let us = new Person(1, 'uhskljs', 'neelankarai');
console.log(us.name);
us.getPerson();
class Student extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 10;
    }
    printMethod() {
        console.log(`Student name is ${this.name} and his id ${this.id} , he lives in ${this.city}`);
    }
}
const stu = new Student(10, 'testing', 'chennai');
stu.printMethod();
