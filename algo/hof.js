const calculate = (logic, ...args) => {
  try {
    const NAN = args.some((arg) => isNaN(arg) || arg === "");
    if (NAN) throw "Please provide only numbers as argument";
    return logic(...args);
  } catch (error) {
    return error;
  }
};

const square = (num) => num * num;
const cube = (num) => num * num * num;

console.log(calculate(cube, 5));
