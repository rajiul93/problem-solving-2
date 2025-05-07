const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const commonElements = (array1, array2) => {
  const filter = array1.filter((e) => array2.includes(e));
  return filter;
};
console.log("মিল থাকা উপাদান:", commonElements(arr1, arr2));

const sumOfArray = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

console.log(sumOfArray(arr1));
