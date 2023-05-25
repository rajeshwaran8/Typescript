let aee:number[] = [974,5,6,8,7,9];
let keyy:number = 5 

console.log(linearSearch(keyy,...aee))

function linearSearch(keyy:number,...aee:number[]) :string{

let res:string = "not present"
    for (let i = 0; i < aee.length; i++) {
        if(keyy === aee[i]){
            res = `the given key is present ${aee[i]}`
            break;
        }else{
           continue;
        }
    }
    return res;
}
