export const secondLargest = (array: number[]) => {
  // Sorting the array won't work
  let firstMax = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    firstMax = array[i] > firstMax ? array[i] : firstMax;
  }

  let secondMax = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    secondMax =
      array[i] > secondMax && array[i] < firstMax ? array[i] : secondMax;
  }

  console.log("First max", firstMax);
  console.log("Second max", secondMax);
};

export const thirdLargest = (input: number[]) => {
  let firstMax = input[0];
  let secondLargest = Number.MIN_VALUE;
  let thirdLargest = Number.MIN_VALUE;

  for (let i = 0; i < input.length; i++) {
    // All change
    if (input[i] > firstMax) {
      thirdLargest = secondLargest;
      secondLargest = firstMax;
      firstMax = input[i];
    } // first wont change
    else if (input[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = input[i];
    } else if (input[i] > thirdLargest) {
      thirdLargest = input[i];
    }
  }

  console.log("Second", secondLargest);
  console.log("Third", thirdLargest);
};
