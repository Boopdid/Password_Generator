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
var capitalAlphabet = [
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
var numbers = ["0", "1", "2", "3,", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var passwordLength = prompt("How long do you want your password?(8-128)");
  console.log(passwordLength);

  if (passwordLength == null) {
    return ""; // if user hit cancel returns nothing
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Accepted input criteria");
  } else {
    alert("Invaild input needs to be 8-128 characters");
    return "";
  }
  var lowerCase = confirm("Would you like to include lowercase letters?");
  console.log(lowerCase);

  var upperCase = confirm("Would you like to include uppercase letters?");
  console.log(upperCase);

  var nums = confirm("Would you like to include numbers?");
  console.log(nums);

  var specialChara = confirm("Would you like to include special characters?");
  console.log(specialChara);

  var selectedCharas = [];

  var generatedPassword = "";

  if (!lowerCase && !upperCase && !nums && !specialChara) {
    alert("No charcters selected to generate password.");
    return "";
  }

  if (lowerCase) {
    selectedCharas = selectedCharas.concat(alphabet);
    generatedPassword = generatedPassword.concat(
      alphabet[Math.floor(Math.random() * alphabet.length)]
    );
  }

  if (upperCase) {
    selectedCharas = selectedCharas.concat(capitalAlphabet);
    generatedPassword = generatedPassword.concat(
      capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)]
    );
  }

  if (nums) {
    selectedCharas = selectedCharas.concat(numbers);
    generatedPassword = generatedPassword.concat(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }

  if (specialChara) {
    selectedCharas = selectedCharas.concat(specialCharacters);
    generatedPassword = generatedPassword.concat(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }

  for (var i = 0; i < passwordLength - generatedPassword.length; i++) {
    console.log(i);
    generatedPassword = generatedPassword.concat(
      selectedCharas[Math.floor(Math.random() * selectedCharas.length)]
    );
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
