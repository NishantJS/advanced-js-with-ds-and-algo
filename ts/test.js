var Counter = /** @class */ (function () {
    function Counter(count) {
        if (count === void 0) { count = 0; }
        var _this = this;
        this.add = function (by) {
            if (by === void 0) { by = 1; }
            _this.count += by;
        };
        this.show = function () {
            return _this.count;
        };
        this.count = count;
    }
    return Counter;
}());
var counter = new Counter(55);
counter.add();
console.log(counter.show());
