const quickSort = (array) => {
  if (!array || !Array.isArray(array))
    return new TypeError(
      "Array should be a collection of numbers not " + typeof array
    ).stack;

  const sort = (array) => {
    const LENGTH = array.length;
    if (LENGTH <= 1) return array;

    const PIVOT = array[0];
    const LARGER = [];
    const SMALLER = [];

    for (let i = 1; i < LENGTH; i++) {
      if (array[i] < PIVOT) {
        SMALLER.push(array[i]);
      } else {
        LARGER.push(array[i]);
      }
    }

    return [...sort(SMALLER), PIVOT, ...sort(LARGER)];
  };
  return sort(array);
};

const names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David"];
const numbers = [5, 20, 20, 4, 1, 0, 5, 8, 9, Infinity, -Infinity];
console.log(quickSort(numbers));
console.log(quickSort("Hello"));
console.log(quickSort(names));
