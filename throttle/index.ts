const throttle = (func: Function, delay: number = 0) => {
  let lastTime = 0;
  let id = 0;
  return (...args: any) => {
    id++;
    let now = new Date().getTime();
    console.log("Now value", now);
    if (now - lastTime < delay) return;
    setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default throttle;

// When we peform some action like scrolling or resizing -> We just need some intermediate values (X and Y coordinates) and their computation
// lakhs of tatkal booking requests -> but throttling allows only few calls to hit the server
