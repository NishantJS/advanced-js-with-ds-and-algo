const binarySearch = (array = [], element) => {
  if (!array || !Array.isArray(array) || !array.length)
    throw "Please provide valid array!";
  const length = array.length;

  let mid = Math.floor((length - 1) / 2);

  while (element <= array[mid]) {
    const right = array[mid];
    const left = 0;
    if (element === right) return mid;
    else if (element <= array[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return -1;
};

const array = [10, 20, 100];
console.log(binarySearch(array));
