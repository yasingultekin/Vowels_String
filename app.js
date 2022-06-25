// const text = "aaa";
// const vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

// const textArray = text.split("");

// console.log(textArray);

// // ? const result = textArray.filter((x) => vowels.indexOf(x) !== -1).length;

// const result = textArray.filter((x) => vowels.includes(x)).length;

// console.log(result);

const input = document.querySelector("input");

const button = document.querySelector("button");

const description = document.querySelector(".description");

button.addEventListener("click", () => {
  if (!input.value) {
    description.innerHTML = `Please write something!`;
  } else {
    vowelsString();
  }
});
