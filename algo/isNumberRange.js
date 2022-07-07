const isNumberInRange = (number, min, max) => {
  return Number.parseFloat(number) >= min && Number.parseFloat(number) <= max;
};

const isIndianNumberPlate = (input) => {
  return /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(input);
};

// console.log(isNumberInRange(-100, 20, 100));
// console.log(isIndianNumberPlate("MH 01 C AA 1111"));
