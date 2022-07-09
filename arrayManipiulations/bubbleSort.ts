export const bubbleSort = (input: number[]) => {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] < input[i + 1]) {
        let temp = input[i];
        input[i] = input[i + 1];
        input[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return input;
};
