export const threeNumberSum = (array: Array<number>, targetSum: number) => {
  let triplet: Array<Array<number>> = [];
  var sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    // For number at i, find two other numbers (at left, at right)
    while (left < right) {
      let currentSum = sorted[i] + sorted[left] + sorted[right];
      if (currentSum === targetSum) {
        triplet.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplet;
};
