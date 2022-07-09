"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
const reverseString = (input) => {
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
};
exports.reverseString = reverseString;
//# sourceMappingURL=reverseString.js.map