function maximumValue(...findMax:number[]):number {

    var max = findMax[0] 

    for (let index = 0; index < findMax.length; index++) {

        if (max<findMax[index]) {
            max = findMax[index]
        }
    }
    return max
}

const values:number[] = [12,3,5,7,7,9]

console.log(`Maximum value is ${maximumValue(...values)}`);
