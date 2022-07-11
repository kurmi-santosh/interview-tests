export const sortByFrequency = (input: number[]) => {
  let frequency = {};
  for (let i = 0; i < input.length; i++) {
    frequency[input[i]] = frequency[input[i]] + 1 || 1;
  }
  return [...input].sort((a, b) => frequency[b] - frequency[a] || a - b);
};
