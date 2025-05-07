const string = "a man is known by the company he keeps";
const capitalizeEveryFirstWord = (str) => {
  const newArray = [];
  const array = str.split(" ");
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element.charAt(0).toUpperCase() + element.slice(1));
  }
  const newString = newArray.join(" ");
  return newString;
};

const capitalizeEveryWord = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const input = "a man is known by the company he keeps";
console.log(capitalizeEveryWord(input));

console.log(capitalizeEveryFirstWord(string));
