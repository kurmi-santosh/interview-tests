// Given an array (that can have nested arrays) -
// return the sum of all the numbers in the array.
// If nested array is encountered, recursively add the numbers in the nested array
// multiplied by the depth of the nested array.
export const getProductSum = (input: any) => {
  let result = getSumByDepth(input, 1);
  return result;
};

const getSumByDepth = (input: any, depth: number) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] instanceof Array) {
      sum += getSumByDepth(input[i], depth + 1);
    } else {
      sum += input[i];
    }
  }
  return sum * depth;
};
