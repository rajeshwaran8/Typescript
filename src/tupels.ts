
// Tuples

let tuple :[string,number,boolean];

tuple = ['ak',2,true];
console.log(tuple)

let ourTupe :readonly [string,number,boolean];

ourTupe = ['Rams',2,true];
console.log(ourTupe)

//destructuring 

let destruct:readonly [number,number,number] = [100,199,982]

let [q,r,c] = destruct;

console.log(c)