// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate randomized password based on user input
function generatePassword(characterCount) {
  let includedCharacters = ""
  let generatedPassword = ""
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  includeLowercase = confirm("Do you want to include lowercase?")
  if (includeLowercase) {
    includedCharacters = includedCharacters.concat(lowercase)
  }
  includeUppercase = confirm("Do you want to include uppercase?")
  if (includeUppercase) {
    includedCharacters = includedCharacters.concat(uppercase)
  }
  includeNumbers = confirm("Do you want to include numbers?")
  if (includeNumbers) {
    includedCharacters = includedCharacters.concat(numbers)
  }
  includeSpecial = confirm("Do you want to include special characters?")
  if (includeSpecial) {
    includedCharacters = includedCharacters.concat(special)
  }

  if(!includedCharacters) {
    alert("You must select at least one character type. Please try again.")
    return passwordText.value = "Please select at least one character type."
  }

    characterCount = prompt("Please choose a password length: Between 8 and 128 characters.")
  if (characterCount < 8 || characterCount > 128) {
    alert("You must choose a password between 8 and 128 characters. Please try again.")
    return passwordText.value = "Please choose a password between 8 and 128 characters. Please try again."
  }

  // const count = characterCounts();

  for (let i = 0; i < characterCount; i++) { //count instead of characterCount
    generatedPassword = generatedPassword.concat(includedCharacters[Math.floor(Math.random() * includedCharacters.length)])
  }

  return generatedPassword;

}

// function characterCounts() {
//   characterCount = prompt("Please choose a password length: Between 8 and 128 characters.")
//   if (characterCount < 8 || characterCount > 128) {
//     characterCounts();
//   } else {
//     return characterCount;
//   }
// }