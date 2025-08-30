const baseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function genPass() {
  const passwordLength = parseInt(lengthInput.value);

  let characters = [...baseCharacters];
  if (numbersToggle.checked) {
    characters = characters.concat(numberCharacters);
  }
  if (symbolsToggle.checked) {
    characters = characters.concat(symbolCharacters);
  }

  let password1 = "";
  for (let i = 0; i < passwordLength; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
  }
  document.querySelector(".result1").textContent = password1;

  let password2 = "";
  for (let i = 0; i < passwordLength; i++) {
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
  document.querySelector(".result2").textContent = password2;
}

function copyToClipboard(element) {
  const text = element.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Replace text with "Copied!"
      element.textContent = "Copied!";
      element.classList.add("copied");

      // After 1 second, fade back to original password
      setTimeout(() => {
        element.classList.remove("copied");
        element.textContent = text;
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}

// Attach click listeners
document.querySelectorAll(".result1, .result2").forEach((el) => {
  el.addEventListener("click", () => copyToClipboard(el));
});
