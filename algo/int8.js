const arr = new Uint8ClampedArray([10]);

const arr2 = new Uint8Array([10]);

const [arr3, arr4] = [[10], [10]];

const a = {
  b: 1,
};

Object.freeze(a);

console.log(Object.isFrozen(a));
a.c = 2;
console.log(a["c"]);
