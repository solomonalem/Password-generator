// DOM elements
var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");
var cardRequirement = document.getElementById("card-requirement");
var lowercase = document.querySelector("#lower");
var uppercase = document.querySelector("#upper");
var number = document.querySelector("#number");
var length = document.querySelector("#length");
var character = document.querySelector("#character");

// FUNCTION TO generate random number
function generateRandomNumber(min, max) {
  var randomNumber = max + Math.floor(Math.random() * min);
  return randomNumber;
}

//  FUNCTION TO Get random lowercase letter
function getLowerCaseRandom() {
  return String.fromCharCode(generateRandomNumber(26, 97));
}

//  FUNCTION TO Get random uppercase letter
function getUpperCaseRandom() {
  return String.fromCharCode(generateRandomNumber(26, 65));
}

//  FUNCTION TO Get random numbers
function getNumberRandom() {
  return String.fromCharCode(generateRandomNumber(10, 48));
}

//  FUNCTION TO Get random special character
function getSpecialCharacter() {
  const specialCharacters = "!@#+:;$%^&*(~){|}?[]=<>/,.";
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

// Object for all types
const getRandomTypeOfFunc = {
  lower: getLowerCaseRandom,
  upper: getUpperCaseRandom,
  number: getNumberRandom,
  character: getSpecialCharacter,
};

// declare initial password
var password = "";

// FUNCTION TO clear all checked requirements

function clearRequirementArea() {
  lowercase.checked = false;
  uppercase.checked = false;
  number.checked = false;
  character.checked = false;
  length.value = "";
}

//FUNCTION TO clear password area

function clearPasswordArea() {
  passwordText.value = "";
  password = "";
}

//====== FUNCTION GENERATE  ================================
function generate() {
  newLength = parseInt(length.value);
  const includeLower = lowercase.checked;
  const includeUpper = uppercase.checked;
  const includeNumber = number.checked;
  const includeCharacter = character.checked;

  console.log(newLength);

  //check if atleast one typpe is selected and the length is no empty
  if (
    !newLength == "" &&
    (includeLower || includeUpper || includeNumber || includeCharacter)
  ) {
    console.log(newLength);
    console.log(includeLower + includeCharacter);
    // check first if the user selectd length between 8 -128
    if (newLength < 8 || newLength > 128) {
      alert("please select valid Password LENGTH between 8 - 128");
    } else {
      // Generate new password with new newLength value  and Display it to the UI;
      passwordText.value = generatePassword(
        includeLower,
        includeUpper,
        includeNumber,
        includeCharacter,
        newLength
      );

      //Clear the checked requirments for new password
      clearRequirementArea();
    }
  } else {
    //clear password area for new password
    clearPasswordArea();

    window.alert(
      "Please select at least one requirement and specify password length"
    );
  }
}

// === FUNCTION TO GENERATE PASSWORD ====================================
function generatePassword(lower, upper, number, character, length) {
  let password = "";

  var includedTypes = lower + upper + number + character;

  // filter the checked types only
  var arrTypes = [{ lower }, { upper }, { number }, { character }].filter(
    (item) => Object.values(item)[0]
  );

  // Loop for every type
  for (var i = 0; i < length; i += includedTypes) {
    arrTypes.forEach((type) => {
      var funcName = Object.keys(type)[0];
      password += getRandomTypeOfFunc[funcName]();
    });
  }
  // return generated password
  return password;
}
// Onclick call generate function
generateBtn.addEventListener("click", generate);
