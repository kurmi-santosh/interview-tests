export const binaryOutput = (input: number) => {
  let binaryArray: number[] = [];
  let quotient: number;
  let remainder: number;
  do {
    quotient = Math.floor(input / 2);
    remainder = input % 2;
    binaryArray.push(remainder);
    input = quotient;
  } while (quotient > 0);
  return binaryArray;
};
