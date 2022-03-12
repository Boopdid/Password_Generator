// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  "!",
  '"',
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
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var alphabet = [
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
var numbers = ["0", "1", "2", "3,", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var passwordLength = prompt("How long do you want your password?");
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Accepted input criteria");
  } else {
    console.log("Unaccepted input criteria");
  }
  var lowerCase = confirm("Would you like to include lowercase letters?");
  console.log(lowerCase);

  var upperCase = confirm("Would you like to include uppercase letters?");
  console.log(upperCase);

  var numbers = confirm("Would you like to include numbers?");
  console.log(numbers);

  var specialChara = confirm("Would you like to include special characters?");
  console.log(specialChara);
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    console.log(i);
    generatedPassword = generatedPassword.concat("a");
    console.log(generatedPassword);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
