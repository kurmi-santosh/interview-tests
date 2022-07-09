"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
const mergeSort = (input) => {
    if (input.length < 2)
        return input;
    let mid = Math.floor(input.length / 2);
    const leftArray = input.slice(0, mid);
    const rightArray = input.slice(mid);
    return mergeArrays((0, exports.mergeSort)(leftArray), (0, exports.mergeSort)(rightArray));
};
exports.mergeSort = mergeSort;
const mergeArrays = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        }
        else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
};
//# sourceMappingURL=mergeSort.js.map