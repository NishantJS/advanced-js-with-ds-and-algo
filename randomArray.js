export const randomNumber = (min = 30, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateArray = (length) => {
  length = length || randomNumber(4, 10);
  let array = [];
  while (length) {
    array.push(randomNumber());
    length--;
  }
  return array;
};

export default generateArray;
