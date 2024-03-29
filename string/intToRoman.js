const intToRoman = (num) => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "",
    i;
  for (i in map) {
    while (num >= map[i]) {
      console.log(num);
      roman += i;
      num -= map[i];
    }
  }
  return roman;
};

console.log(intToRoman(4));
