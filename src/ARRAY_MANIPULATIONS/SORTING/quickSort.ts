export const quickSort = (input: number[]) => {
  if (input.length < 2) return input;
  let lastIndex = input.length - 1;
  let pivotElement = input[lastIndex];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < pivotElement) leftArray.push(input[i]);
    else rightArray.push(input[i]);
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
};
