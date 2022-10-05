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

const intersectionUsingInclude = (arr1, arr2) => {
  return [...new Set(arr1.filter((ele) => arr2.includes(ele)))];
};

console.log({ arr1, arr2 });

let max = 99999999 / 3;

console.time("include");
for (let i = 0; i < max; i++) {
  // console.log(intersectionUsingInclude(arr1, arr2));
  intersectionUsingInclude(arr1, arr2);
}
console.timeEnd("include");

const findIntersection = (arr1, arr2) => {
  const arr1length = arr1?.length;
  const arr2length = arr2?.length;

  const obj = {},
    intersection = [];
  for (let i = 0; i < arr1length; i++) {
    obj[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2length; i++) {
    if (obj[arr2[i]] === 1) {
      intersection.push(arr2[i]);
      obj[arr2[i]]++;
    }
  }

  return intersection;
};

console.time("obj");
for (let i = 0; i < max; i++) {
  // console.log(findIntersection(arr1, arr2));
  findIntersection(arr1, arr2);
}
console.timeEnd("obj");
