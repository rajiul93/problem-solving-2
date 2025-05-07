const sentence = "string to camel case";

const stringToPascalCase = (string) => {
  const array = string.toLowerCase().split(" ");
  return array
    .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
    .join("");
};

const stringToCamelCase = (string) => {
  const array = string.toLowerCase().split(" ");
  return array
    .map((word, index) => {
      if (index === 0) return word; // প্রথম শব্দ ছোট রাখো
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

console.log(stringToCamelCase(sentence));

console.log(stringToPascalCase(sentence));
