const sentence = "string to camel case";
const convertSnakeCase = (string) => {
  return string.toLowerCase().split(" ").join("_");
};
console.log(convertSnakeCase(sentence));
