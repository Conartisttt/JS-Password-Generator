// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let includedCharacters = ""
  let generatedPassword = ""
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const special = "!@#$%^&*()_+-="

  includeLowercase = confirm("Do you want to include lowercase?")
  if(includeLowercase) {
    includedCharacters = includedCharacters.concat(lowercase)
  }
  includeUppercase = confirm("Do you want to include uppercase?")
  if(includeUppercase) {
    includedCharacters = includedCharacters.concat(uppercase)
  }
  includeNumbers = confirm("Do you want to include numbers?")
  if(includeNumbers) {
    includedCharacters = includedCharacters.concat(numbers)
  }
  includeSpecial = confirm("Do you want to include special characters?")
  if(includeSpecial) {
    includedCharacters = includedCharacters.concat(special)
  }

  characterCount = prompt("Please choose a password length: Between 8 and 128 characters.")

  for (let i = 0; i < characterCount; i++) {
    generatedPassword = generatedPassword.concat(includedCharacters[Math.floor(Math.random() * includedCharacters.length)])
  }
  
  return generatedPassword;

}