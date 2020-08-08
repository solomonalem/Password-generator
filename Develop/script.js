const lowerAlph = [
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

const upperCaseAlp = [
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
];

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "]",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var password = "";

function generateRandomNumber(min = 0, max) {
  var randomNumber = min + Math.floor(Math.random() * max);
  return randomNumber;
}

function generate() {
  if (lower.checked || upper.checked || number.checked) {
    var password = generatePassword();
    passwordText.value = password;

    //Clear the checked requirments for new password
    document.getElementById("lower").checked = false;
    document.getElementById("upper").checked = false;
    document.getElementById("number").checked = false;
  } else {
    //clear password area for new password
    passwordText.value = "";
    window.alert("Please select at least one requirement ");
  }
}

// Assignment code here
function generatePassword() {
  for (var i = 0; i < 20; i++) {
    password = password + upperCaseAlp[generateRandomNumber(2, 9)];
  }
  return password;
}

function changeCase() {
  password.toLowerCase();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get references to the #password element
var passwordText = document.querySelector("#password");

// Get references to the #password element
var cardRequirement = document.getElementById("card-requirement");
var lengthOfPassword = document.querySelector('input[value="character"]');

var lowercase = document.querySelector("#lower");
var uppercase = document.querySelector("#upper");
var number = document.querySelector("#number");

generateBtn.addEventListener("click", generate);

// Write password to the #password input
// function writePassword() {
//   cardRequirement.style.display = "block";
//   generateBtn.style.display = "inline-block";
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// saveAndGenerate.addEventListener("click", generate);
