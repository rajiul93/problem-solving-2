const role = [10, 20, 30, 40, 50];
const averageDetermine = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};
console.log(averageDetermine(role));
