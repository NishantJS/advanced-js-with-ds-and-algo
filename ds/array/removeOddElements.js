const usingFilter = (arr = []) => {
  return arr.filter((element) => element % 2 === 0);
};

const usingOf = (arr = []) => {
  let even = [];
  for (let element of arr) {
    if (element % 2 == 0) {
      even.push(element);
    }
  }
  return even;
};

let arr = [1, 2, 3, 4];
console.log(usingFilter(arr));
console.log(usingOf(arr));
