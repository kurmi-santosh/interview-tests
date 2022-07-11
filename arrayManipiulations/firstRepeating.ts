export const firstRepeatingElement = (input: number[]) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] == input[j]) return input[i];
    }
  }
  return -1;
};
