// Genrics 

let printArray = (a:any,b:any)=>{
    return [a,b];
}

console.log(printArray(2,'3'));


//Genric 

const toArraygenric = <T>(a:T,b:T) =>{

    return[a,b]
}

console.log(toArraygenric<string| number>('1','3'));


//hertro

const toArrayHetro = <X,Y,Z>(a:X,b:Y,c:Z) =>{

    console.log(`a is ${typeof a} , b is ${typeof b} , c is ${typeof c}`)
}

toArrayHetro('33',4,true);



interface Dictionary<T,U>{
    key:T,value:U
}

let dict:Dictionary<string,number> = {
    key:'one',
    value:2
}
console.log(dict.key);

interface Functional<T> {

    (a:T,b:T):T
}

let addin: Functional<number> = (x:number,y:number) =>{
    return x+y;
}
console.log(addin(2,23));


class StatusCodes<T> {
    code:T
    constructor(code:T) {
        this.code = code

    }
    
}

let stats = new StatusCodes('389');

console.log(stats.code);