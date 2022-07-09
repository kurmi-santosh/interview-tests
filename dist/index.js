function reverseString(input) {
    let array = input.split("");
    let i = 0;
    let n = array.length;
    while (i < n - 1 - i) {
        let temp = array[n - 1 - i];
        array[n - 1 - i] = array[i];
        array[i] = temp;
        i++;
    }
    console.log("Output", array.join("").toString());
}
function secondLargest(array) {
    // Sorting the array won't work
    let firstMax = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        firstMax = array[i] > firstMax ? array[i] : firstMax;
    }
    let secondMax = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        secondMax =
            array[i] > secondMax && array[i] < firstMax ? array[i] : secondMax;
    }
    console.log("First max", firstMax);
    console.log("Second max", secondMax);
}
function thirdLargest(input) {
    let firstMax = input[0];
    let secondLargest = Number.MIN_VALUE;
    let thirdLargest = Number.MIN_VALUE;
    for (let i = 0; i < input.length; i++) {
        // All change
        if (input[i] > firstMax) {
            thirdLargest = secondLargest;
            secondLargest = firstMax;
            firstMax = input[i];
        } // first wont change
        else if (input[i] > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = input[i];
        }
        else if (input[i] > thirdLargest) {
            thirdLargest = input[i];
        }
    }
    console.log("Second", secondLargest);
    console.log("Third", thirdLargest);
}
function segregateBinary(input) {
    let start = 0;
    let end = input.length - 1;
    while (start < end) {
        if (input[start] == 0)
            start++;
        if (input[end] == 1)
            end--;
        if (input[start] > input[end]) {
            let temp = input[end];
            input[end] = input[start];
            input[start] = temp;
            start++;
            end--;
        }
    }
    console.log("Output", input);
}
segregateBinary([0, 1, 1, 0, 1, 0]);
//# sourceMappingURL=index.js.map