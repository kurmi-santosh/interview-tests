const getTwoRepeatedElements = (input: Array<number>) => {
  let repeated = [];
  let frequency = {};
  for (let i = 0; i < input.length; i++) {
    frequency[input[i]] = frequency[input[i]] + 1 || 1;
    if (frequency[input[i]] == 2) {
      repeated.push(input[i]);
    }
  }
  return repeated;
};
