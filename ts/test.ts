class Counter {
  count: number;
  constructor(count = 0) {
    this.count = count;
  }
  add = (by = 1) => {
    this.count += by;
  };
  show = () => {
    return this.count;
  };
}

const counter = new Counter(55);
counter.add()
console.log(counter.show())