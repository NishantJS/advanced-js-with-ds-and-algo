const printFullName = function (age = 18) {
  if (isNaN(age)) return new TypeError("Please enter age in numbers");
  age = parseInt(age);
  if (age > 120 || age < 13)
    return new RangeError("Please enter valide age range");

  let fullName = `${this.firstName || "firstname"} ${
    this.lastName || "lastname"
  } from ${this.city || "Mumbai"} of age ${age}`;
  return fullName;
};

let name1 = {
  firstName: "Nishant",
  lastName: "Chorge",
  city: "Thane",
};

let name2 = {
  firstName: "N",
  lastName: "C",
};

let name3 = {
  firstName: "Chorge",
  lastName: "Nishant",
};

function callApplyBind(age=70) {
  console.log(printFullName.call(name1, 85));
  console.log(printFullName.apply(name2, [55]));
  let bi = printFullName.bind(name3, age);
  return bi;
};

;(function polyFillOfBind() {
  console.log(callApplyBind(15)());
})();
