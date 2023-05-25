function minimumValue(...findMin:number[]):number {

    var min = findMin[0] 

    for (let index = 0; index < findMin.length; index++) {

        if (min>findMin[index]) {
            min = findMin[index]
        }
    }
    return min
}

const findMin:number[] = [12,3,5,7,7,9,1]

console.log(`Minimum value is ${minimumValue(...findMin)}`);
