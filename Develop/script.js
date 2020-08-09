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
  if (
    lower.checked ||
    upper.checked ||
    number.checked ||
    !length.value === ""
  ) {
    // check first if the user selectd length between 8 -128
    if (length.value < 8 || length.value > 128) {
      alert("please select valid Password LENGTH");
    } else {
      password = generatePassword(2, 15);
      // Display the result to the UI
      passwordText.value = password;

      //Clear the checked requirments for new password
      lowercase.checked = false;
      uppercase.checked = false;
      number.checked = false;
      length.value = "";
    }
  } else {
    //clear password area for new password

    passwordText.value = "";
    password = "";
    window.alert(
      "Please select at least one requirement and specify password length"
    );
  }
}

// Assignment code here
function generatePassword(minChar, maxChar) {
  for (var i = minChar; i < maxChar; i++) {
    password = password + upperCaseAlp[generateRandomNumber(0, 9)];
  }
  return password;
}

// to lower case

function changeCase() {
  password.toLowerCase();
}

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Get references to the #password element
var passwordText = document.getElementById("password");

// Get references to the #password element
var cardRequirement = document.getElementById("card-requirement");
var lengthOfPassword = document.querySelector('input[value="character"]');

var lowercase = document.querySelector("#lower");
var uppercase = document.querySelector("#upper");
var number = document.querySelector("#number");
var length = document.querySelector("#length");

generateBtn.addEventListener("click", generate);

// Write password to the #password input
// function writePassword() {
//   cardRequirement.style.display = "block";
//   generateBtn.style.display = "inline-block";
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// saveAndGenerate.addEventListener("click", generate);
