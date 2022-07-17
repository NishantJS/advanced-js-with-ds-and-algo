const reverseUsingMap = (arr = []) => {
  return arr.map((_, index) => arr[arr.length - 1 - index]);
};

const reverse = (arr = []) => {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
};

const generateArray = () => {
  let arr = [];
  let no_of_elements = Math.round(Math.random() * 5 + 5);
  for (let i = 0; i < no_of_elements; i++) {
    arr.push(Math.round(Math.random() * 10));
  }
  return arr;
};

let arr = generateArray();
console.log({ arr: arr, rev: reverseUsingMap(arr), rev2: reverse(arr) });
// console.log(arr, reverseUsingSwap(arr));
