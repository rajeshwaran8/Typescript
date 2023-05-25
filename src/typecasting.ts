let x:unknown = '11';
const casted = x as string
console.log(casted.length);

let  y : any  = '111';
console.log((<string>y).length)
