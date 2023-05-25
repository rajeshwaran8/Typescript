"use strict";
// Genrics 
let printArray = (a, b) => {
    return [a, b];
};
console.log(printArray(2, '3'));
//Genric 
const toArraygenric = (a, b) => {
    return [a, b];
};
console.log(toArraygenric('1', '3'));
//hertro
const toArrayHetro = (a, b, c) => {
    console.log(`a is ${typeof a} , b is ${typeof b} , c is ${typeof c}`);
};
toArrayHetro('33', 4, true);
let dict = {
    key: 'one',
    value: 2
};
console.log(dict.key);
let addin = (x, y) => {
    return x + y;
};
console.log(addin(2, 23));
class StatusCodes {
    constructor(code) {
        this.code = code;
    }
}
let stats = new StatusCodes('389');
