const debounce = (func: Function, delay: number = 0) => {
  let timerID: any;
  console.log(`id on load - ${timerID}`);
  return (...args: any) => {
    if (timerID) clearTimeout(timerID);
    console.log(`previous id - ${timerID}`);
    timerID = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;

// When we want the final state of the search text (user stopped typing for delay seconds - it's final search text)
