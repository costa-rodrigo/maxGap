
// Given an unsorted array of numbers, find hte maximum difference
// between the successive elements in its sorted form

const maxGap = (arr) => {

    arr.sort((a, b) => a - b);
    let maxDiff = 0;
    if(arr.length < 2) {
        return 0;
    }
    for (let i=1; i<arr.length; i++) {
        let diff = arr[i] - arr[i-1];
        maxDiff = Math.max(maxDiff, diff);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }
    return maxDiff;
}

let result = [20, 1, 17, 3, 16, 2, 7];
if (maxGap(result) !== 9) {
    throw new Error();
}
console.log(`Maximum gap in array:  ${maxGap(result)}`);

result = [-20, 1, 17, -3, 16, 2, 7];
if (maxGap(result) !== 17) {
    throw new Error();
}
console.log(`Maximum gap in array:  ${maxGap(result)}`);

result = [20, 1.1, 17, 3.5, -16, 2, 7]
if (maxGap(result) !== 17.1) {
    throw new Error();
}
console.log(`Maximum gap in array:  ${maxGap(result)}`);

result = [20];
if (maxGap(result) !== 0) {
    throw new Error();
}
console.log(`Maximum gap in array:  ${maxGap(result)}`);