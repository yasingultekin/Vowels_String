const text = "aaa";
const vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

const textArray = text.split("");

console.log(textArray);

// ? const result = textArray.filter((x) => vowels.indexOf(x) !== -1).length;

const result = textArray.filter((x) => vowels.includes(x)).length;

console.log(result);
