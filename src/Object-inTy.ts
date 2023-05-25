///Object

import { type } from "os"

const employee = {
    name:"Rajesh",
    age:21,
    job : `Software Engineer `
}

console.log(employee)

type Emp ={
    empName:String,
    age:Number,
    isPermenent ?:Boolean 
}

let emp :Emp = {
    empName:'Rajesh',
    age:21,
}

console.log(emp)