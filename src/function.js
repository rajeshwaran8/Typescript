"use strict";
//Functions in Typescript
let greet = () => { return 'hello'; };
console.log(greet());
// with type param 
let add = (a, b) => {
    return a + b;
};
console.log(add(190, 2));
//with union fubction
let playMusic = (song, playing) => {
    switch (song || playing) {
        case 'Tamil' || 1:
            return 'Arabic Kuthu is playing';
        case 'Hindi':
            return 'Thum he ho is playing';
        default:
            return 'No song available';
    }
};
console.log(playMusic('Hindi'));
let call = (mobile, name) => {
    return mobile + ' Rajesh';
};
console.log(call(7326234243));
let userObject = (user) => {
    return user;
};
console.log(userObject({ name: 'Rajesh', age: 212 }));
//rest param
let ar = [10, 10, 10];
let sum = (a, b, ...arr) => {
    return a + b + arr.reduce((a, c) => a + c);
};
console.log(sum(10, 10, ...ar));
