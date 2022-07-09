"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segregateBinary = void 0;
const segregateBinary = (input) => {
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
};
exports.segregateBinary = segregateBinary;
//# sourceMappingURL=segregateZeros.js.map