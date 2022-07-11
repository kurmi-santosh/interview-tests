import { quickSort } from "./quickSort";

export const distinctElementsOptimized = (input: number[]) => {
  let distinctArray = [];
  let sortedArray = quickSort(input);
  for (let i = 0; i < sortedArray.length; i++) {
    while (i < sortedArray.length - 1 && sortedArray[i] == sortedArray[i + 1]) {
      i++;
    }
    distinctArray.push(sortedArray[i]);
  }
  return distinctArray;
};
