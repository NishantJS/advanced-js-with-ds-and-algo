function checkGreaterSmallerEqual(num1 = 0, num2 = 0) {
  if (num1 === num2) return "Equal";
  return `${num1} is ${num1 < num2 ? "Smaller" : "Greater"} than ${num2}`;
}

console.log(checkGreaterSmallerEqual(10, 20));
console.log(checkGreaterSmallerEqual(10, 10));
console.log(checkGreaterSmallerEqual(20, 10));
