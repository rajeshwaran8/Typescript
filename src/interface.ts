interface Use{
    name:string,
    age:number
}

const user:Use = {
    name:"rakesj",
    age:12
}
console.log(user);

//interface 

interface Functions{
     (x:number,y:number):number
}
let adding:Functions = (p:number,p2:number):number =>{

    return p+p2
}
console.log(adding(19,1))


interface A1{
    animal:string
}
interface A2 extends A1{
    sound:string
}

const A2:A2= {
    animal:'dog',
    sound:"bow"
}
console.log(A2);
