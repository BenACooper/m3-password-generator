// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {  // Your code goes here.

  // Declare variables for all possible password characters, grouped by criteria.
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "1234567890"
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "

  // Turn them into arrays.
  lowerArray = lowerCase.split("")
  upperArray = lowerCase.split("")
  numericArray = lowerCase.split("")
  specialArray = lowerCase.split("")
  

  // Request password criteria from user via dialogues.
  // Prompt use to enter a password length. Declare it as a variable.
  var includeLength = window.prompt("Choose a character length from 8 to 128.");
  // If user cancels instead of entering a length end the function.
  if (!includeLength) {
    return;
  // If password length is valid user then confirm or !confirm criteria.
  } else if (includeLength >= 8 && includeLength <= 128) {
    var includeLowerCase = window.confirm("Include uppercase in your password?");
    var includeUpperCase = window.confirm("Include lowercase in your password?");
    var includeNumeric = window.confirm("Include numbers in your password?");
    var includeSpecial = window.confirm("Include special characters in your password?");
  // If password length is not valid the dialogue reminds them and the function calls itself to start over.
  } else {
    window.alert("The character length MUST be a number between 8 and 128");
    generatePassword();
  }

  // Express function to get random lower case characters.
  function getRandomLowerCase() {
    Math.random()
  }

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);