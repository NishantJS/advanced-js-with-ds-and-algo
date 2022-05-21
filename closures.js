for (let i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }

  setTimeout(log, 100);
}

//! Var get hoisted o / p: 333
//? let o/p: 012

const outerFunction = () => {
  let v = 10;
  const innerFunction = () => {
    return v;
  };
  return innerFunction();
};

const z = outerFunction();

console.log(z);

const add = (() => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();
console.log(add());

function Add(count = 0) {
  this.count = count;
  this.add = function () {
    this.count++;
  };
  this.show = function show() {
    return this.count;
  };
}
const counter = new Add(88);
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
console.log(counter.show());
