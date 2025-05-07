const arr1 = [1, 2, 3, 4, 5];

const evenOdd = (array, expectation) => {
  if (expectation === "even") {
    return array.filter((e) => e % 2 === 0);
  } else if (expectation === "odd") {
    return array.filter((e) => e % 2 !== 0);
  } else {
    return "invalid expectation";
  }
};
console.log(evenOdd(arr1, "odd"));
