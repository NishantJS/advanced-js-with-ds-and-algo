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

const findIntersection = (arr1=[],arr2=[]) => {
  obj = {};

  arr1.forEach((ele) => obj[ele] = ele);
  arr2.forEach((ele) => (obj[ele] = ele));
  return Object.values(obj);
};

findIntersection(arr1, arr2);
console.log(findIntersection(arr1, arr2));