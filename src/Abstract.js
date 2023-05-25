"use strict";
class Pers {
}
class Students extends Pers {
    constructor(name) {
        super();
        this.name = name;
    }
    getPerson() {
        console.log(`${this.name} is a Student`);
    }
}
let st = new Students('rajeshwaran');
st.getPerson();
