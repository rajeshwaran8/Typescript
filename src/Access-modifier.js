"use strict";
//public protected private readonly
class Birds {
    constructor(bName, age) {
        this.age = age;
        this.bName = bName;
    }
    getBirds() {
        console.log(this.bName + " " + this.age);
    }
    setBirds(name) {
        this.bName = name;
    }
}
let bird = new Birds('pigeon', 2);
bird.getBirds();
bird.setBirds('Crow');
bird.getBirds();
