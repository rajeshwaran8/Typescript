//TypeScript - TypeAlias

import { type } from "os";

type UserName = string
type Mobile = number
type isAvai = boolean;


let userName:UserName = `Jhon`;
let is :isAvai = false;
let mobile:Mobile = 9789678686

// Arrray Alias
type nameArray = string[];

let names:nameArray = ['Mohan',`Rajesh`,`Rahul`];

// Objects

type Users = {
    user:UserName,
    mobil:Mobile,
    avail:isAvai

}
const userData:Users = {
    user:'Raj',
    mobil:7962176,
    avail:true
}

console.log(userData);

//union 


type errorValue = string | number

let err:errorValue;

err = 404;
console.log(typeof err)

err = `400`;
console.log(typeof err)

//tuples

type Value = [name:string,age:number]

const user:Value = ['Rajesh',21];

console.log(user)