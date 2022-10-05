const randomArray = () => {
  let arr = [];
  let no_of_elements = Math.round(Math.random() * 5 + 5);
  for (let i = 0; i < no_of_elements; i++) {
    arr.push(Math.round(Math.random() * 10));
  }
  return arr;
};

let arr1 = randomArray();
let arr2 = randomArray();

const findUnion = (arr1 = [], arr2 = []) => {
  const obj = {};

  arr1.forEach((ele) => (obj[ele] = ele));
  arr2.forEach((ele) => (obj[ele] = ele));
  return Object.values(obj);
};

const findUnionUsingSet = (arr1 = [], arr2 = []) => {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
};

console.log({ arr1, arr2 });
console.time("obj");
console.log(findUnion(arr1, arr2));
console.timeEnd("obj");
console.time("set");
console.log(findUnionUsingSet(arr1, arr2));
console.timeEnd("set");
