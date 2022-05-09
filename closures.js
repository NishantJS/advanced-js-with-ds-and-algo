for (let i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }

  // log();
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

// console.log(z);
