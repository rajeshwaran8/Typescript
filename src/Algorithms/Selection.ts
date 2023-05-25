let selectionSort = (...aray: number[]): number[] => {

    let index: number = 0;

    for (let i = 0; i < aray.length; i++) {
        index = i;

        for (let j = i + 1; j < aray.length; j++) {
            if (aray[index] > aray[j]) {
                index = j;
            }
        }
        var temp = aray[index];
        aray[index] = aray[i];
        aray[i] = temp;

    }

    return aray;
}

let aray: number[] = [44, 5, 7, 2, 8, 10];

console.log(selectionSort(...aray))