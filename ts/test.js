"use strict";
class Counter {
    constructor(count = 0) {
        this.add = (by = 1) => {
            this.count += by;
        };
        this.show = () => {
            return this.count;
        };
        this.count = count;
    }
}
const counter = new Counter(55);
counter.add();
console.log(counter.show());
