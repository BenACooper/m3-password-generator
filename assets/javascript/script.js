// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria.
var includeLowerCase = window.confirm("Include uppercase?")
var includeUpperCase = window.confirm("Include lowercase?")
var includeNumeric = window.confirm("Include numbers?")
var includeSpecial = window.confirm("Include special characters?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  //your code goes here
  //return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
