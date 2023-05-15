export const isMonotonicArray = (input: Array<number>) => {
  let isDecreasing = true;
  let isIncreasing = true;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
      isIncreasing = false;
      break;
    } else if (input[i] > input[i + 1]) {
      isDecreasing = false;
      break;
    }
  }
  return isIncreasing || isDecreasing;
};
