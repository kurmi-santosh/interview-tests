const flatternNestedArray = (input: Array<any>) => {
  let result = [];
  let myArray = input.slice();

  while (myArray.length) {
    let item: any = myArray.shift();
    if (item instanceof Array) {
      myArray.unshift(...item);
    } else result.push(item);
  }
  return result;
};

export default flatternNestedArray;
