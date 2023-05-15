import { mergeSort } from "./mergeSort";

export const twoWaySort = (input: number[]) => {
  // Segregate Odd and Even numbers  
  let oddCount = 0;
  let leftIndex = 0;
  let rightIndex = input.length - 1;
  while (leftIndex < rightIndex) {
    while(input[leftIndex]%2 !== 0){
        leftIndex++;
        oddCount++;
    }
    while(input[rightIndex]%2 == 0){
        rightIndex--;
    }
    if(leftIndex < rightIndex){
        let temp = input[leftIndex];
        input[leftIndex] = input[rightIndex];
        input[rightIndex] = temp;
    }
  }
  return [...mergeSort(input.slice(0,oddCount)), ...mergeSort(input.slice(oddCount))];
};
