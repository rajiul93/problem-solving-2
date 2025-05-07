const sentence = "A man is known by the company he keeps";

const reverseEachWord = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
};
console.log(reverseEachWord(sentence));

const reverseWords =(string)=>{
    return string.toLowerCase().split(" ").reverse().join(" ")
}
console.log(reverseWords(sentence));
