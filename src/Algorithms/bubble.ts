function bubbles(...arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j] > arr[j + 1]) {
                
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }

    return arr;
}

let array: number[] = [23, 4, 6, 8, 1, 2];
console.log(bubbles(...array))