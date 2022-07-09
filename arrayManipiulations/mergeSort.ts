
export const mergeSort = (input: number[]): number[] => {
  if (input.length < 2) return input;
  let mid = Math.floor(input.length / 2);
  const leftArray = input.slice(0, mid);
  const rightArray = input.slice(mid);
  return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
};

const mergeArrays = (leftArray: number[], rightArray: number[]): number[] => {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
};
