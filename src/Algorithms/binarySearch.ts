let binarySearch = (key:number,...b:number[]):string=>{
    var low = 0;
    var high = b.length;
    var mid = Math.floor((low+high)/2);
    var res:string = 'not present'

    while (low<=high) {
         mid = Math.floor((low+high)/2);

        if (b[mid]==key) {
            res ='present'
            return res;
        }
        else if(b[mid]>key){
            high =  mid -1
        }else{
            low = mid + 1;
        }
    }
    
    return res;
}

let sortedArray:number[] = [1,2,3,4,5];
const key:number = 2
console.log(binarySearch(key,...sortedArray));
