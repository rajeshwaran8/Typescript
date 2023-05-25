//Any type array

let student:any[];
student = [1000,"Name",true];

console.log(student);

//Any type Object

type Employee = {
    name:any,
    age ?:any,
}

const employee:Employee ={
    name:10,
}
console.log(employee);

//null && undefined 

let a:null = null;

let b:undefined = undefined;

console.log(a,b);
