// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {  // Your code goes here.

  // Declare variables to store the character set of each criteria.
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "1234567890"
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ " // I had to remove quotes and the / symbol because they were not being treated as string for some reason.

  // Turn the variables into arrays and create an additional array to hold their combined values.
  var lowerCaseArray = lowerCase.split("")
  var upperCaseArray = upperCase.split("")
  var numericArray = numeric.split("")
  var specialArray = special.split("")
  var combinedArray = [];

  // Gather password criteria from user via dialogues. Store as vars.
  var selectLength = parseInt(window.prompt("Choose a character length from 8 to 128."));
  // Close dialogues if user chooses to cancel.
  if (!selectLength) {
    return;
    // If password length invalid alert user and restart dialogues.
  } if (selectLength < 8 || selectLength > 128) {
    window.alert("The character length must be a number between 8 and 128. Try again!");
    generatePassword();
    // If password length valid gather remaining criteria and combined the selected character sets into a single array.
  } if (window.confirm("Include lowercase characters?")) {
    combinedArray = combinedArray.concat(lowerCaseArray);
  } if (window.confirm("Include uppercase characters?")) {
    combinedArray = combinedArray.concat(upperCaseArray);
  } if (window.confirm("Include numbers")) {
    combinedArray = combinedArray.concat(numericArray)
  } if (window.confirm("Include special characters?")) {
    combinedArray = combinedArray.concat(specialArray)
     // Return to start over if user doesn't select any character set.
  } if (combinedArray.length === 0) {
    window.alert("The password needs at least one character set.");
    return;
  }

  // Set the password var to empty before requesting a new password.
  var password = "";

  //Generate a password based on the combined array length.
  for (var i = 0; i < selectLength; i++) {
    var passwordIndex = Math.floor(Math.random() * combinedArray.length);
    password = password + combinedArray[passwordIndex]
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);