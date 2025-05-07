const sentence = "string to camel case";
const stringToCamelCase = (string) => {
  const array = string.split(" ");
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element.charAt(0).toLocaleUpperCase() + element.slice(1));
  }
  return newArray.join("");
};
console.log(stringToCamelCase(sentence));
