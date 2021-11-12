const randomArray = () => {
  let arr = [];
  let no_of_elements = Math.round(Math.random() * 5 + 5);
  for (let i = 0; i < no_of_elements; i++) {
    arr.push(Math.round(Math.random() * 10));
  }
  return arr;
};
