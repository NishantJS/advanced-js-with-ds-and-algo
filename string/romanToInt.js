const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let prev = "";

  const total = s.split("").reduce((accu, current) => {
    let value = map[current] ?? 0;

    const cond1 = prev === "I" && (current === "V" || current === "X");
    const cond2 = prev === "X" && (current === "L" || current === "C");
    const cond3 = prev === "C" && (current === "D" || current === "M");

    if (cond1 || cond2 || cond3) {
      value = value - (map[prev] ?? 0) * 2;
    }

    prev = current;
    return accu + value;
  }, 0);

  return total;
};

console.log(romanToInt("MCMXCIV"));

const romanToInt2 = (s) => {
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

  let total = 0,
    roman = s;

  for (let i in map) {
    while (roman && roman?.startsWith(i)) {
      console.log(i);
      total += map[i];
      roman = roman.slice(i?.length);
    }
  }

  return total;
};

console.log(romanToInt2("MCMXCIV"));
