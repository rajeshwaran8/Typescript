class DeveloperClass {
  private  devName:string
  private dId:number

   public constructor(nm:string,id:number){
        this.dId=id;
        this.devName = nm;
    }

    public  getDev(){
        return this.devName +" "+ dev.dId;
    }

    public setName(name:string){
        return this.devName  = name
    }
}
let dev = new DeveloperClass('Rajesh',10);

console.log(dev.getDev())
dev.setName("Rajesh waran")
console.log(dev.getDev())

interface PersonInterface{
    id:number;
    name:string
}
interface Address{
    city:string
}
class Person implements PersonInterface,Address{
    id: number;
    name: string;
    city:string
    constructor(id:number,name:string,city:string) {
        this.id= id;
        this.name = name;
        this.city = city;
    }

    getPerson(){
        console.log(this.name +` `+this.id+" "+this.city)
    }
}

let us = new Person(1,'uhskljs','neelankarai');

console.log(us.name)
us.getPerson()

class Student extends Person{

    studentId :number = 10;

    printMethod(){
        console.log(`Student name is ${this.name} and his id ${this.id} , he lives in ${this.city}`);
        
    }
}

const stu = new Student(10,'testing','chennai');
stu.printMethod()