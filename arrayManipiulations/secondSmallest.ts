export const secondSmallest = (input: number[]) => {
  let firstSmallest = Number.MAX_VALUE;
  let secondSmallest = Number.MAX_VALUE;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = input[i];
    }
    else if(input[i] < secondSmallest){
        secondSmallest = input[i];
    }
  }
  return secondSmallest;
};
