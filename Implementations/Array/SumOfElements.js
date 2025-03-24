const sumOfArrayElements = (arr) => {
  let initialVal = 0;

  return arr.reduce((acc, curr) => acc + curr, initialVal);
};

console.log(sumOfArrayElements([2, 4, 6, 7, 8, 9]));
