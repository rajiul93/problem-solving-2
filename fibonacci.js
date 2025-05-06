let valueOne = 0;
let valueTwo = 1;
const fibonacci = [];
for (let index = 0; index < 10; index++) {
  const tempValue = valueOne + valueTwo;
  fibonacci.push(valueOne);
  valueOne = valueTwo;
  valueTwo = tempValue;
}
console.log(fibonacci);