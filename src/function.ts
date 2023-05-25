//Functions in Typescript

let greet = () => { return 'hello'; }

console.log(greet());

// with type param 

let add = (a: number, b: number) :number=> {
    return a + b;
}
console.log(add(190, 2));


//with union fubction

let playMusic = (song: (string | number | boolean),playing ?:any) : any=> {

    switch (song || playing) {
        case 'Tamil'|| 1:
            return 'Arabic Kuthu is playing';
        case 'Hindi' :
            return 'Thum he ho is playing';
        default:
             return 'No song available';
    }
}

console.log(playMusic('Hindi'));

//Alias

type stringOrNumber = string| number
let call = (mobile:stringOrNumber,name?:stringOrNumber):stringOrNumber=>{
    return mobile+' Rajesh'
}

console.log(call(7326234243))


//object 
type User  = {name:string,age:number}

let userObject = (user:User):User=>{

    return user;
}

console.log(userObject({name:'Rajesh',age:212}));


//rest param
let ar:number[]= [10,10,10];

let sum = (a:number,b:number,...arr:number[]):number =>{
    return a+b+arr.reduce((a,c)=>a+c)
}

console.log(sum(10,10,...ar))