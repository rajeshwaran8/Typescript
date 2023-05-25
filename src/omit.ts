interface userInterface{
    name:string;
    age:number;
    job:string;
    mobile ?:number;
    email:string;
    password:string

}

const usesr :Omit<userInterface,'email'| 'password'> = {
    name:"babu",
    age :21,
    mobile:9908008,
    job:'Se'
}

console.log(usesr)