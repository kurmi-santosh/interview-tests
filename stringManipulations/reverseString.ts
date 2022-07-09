export const reverseString = (input: string) => {
  let array = input.split("");
  let i = 0;
  let n = array.length;
  while (i < n - 1 - i) {
    let temp = array[n - 1 - i];
    array[n - 1 - i] = array[i];
    array[i] = temp;
    i++;
  }
  console.log("Output", array.join("").toString());
};
