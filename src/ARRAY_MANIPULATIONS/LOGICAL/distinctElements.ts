export const distinctElements = (input: number[]) => {
  let distinctArray = [];
  for (let i = 0; i < input.length; i++) {
    let j: number;
    for (j = 0; j < i; j++) {
      if (input[i] == input[j]) {
        break;
      }
    }
    if (i == j) distinctArray.push(input[i]);
  }
  return distinctArray;
};
