import { mergeSort } from "./mergeSort";

export const binarySearch = (input: number[], target: number) => {
  let sortedArray = mergeSort(input);
  let start = 0;
  let end = input.length - 1;
  while (start <= end) {
    let midIndex = Math.floor((start + end) / 2);

    if (input[midIndex] == target) return midIndex;
    else if (input[midIndex] < target) {
      end = midIndex - 1;
    } else {
      start = midIndex + 1;
    }
  }
  return -1;
};


