//Assignment Code - variable names to the uppercase, lowercase, numbers and symbols

var generateBtn = document.querySelector("#generate");
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var pwLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function used to determine the length of the password
function determineLength(){
    pwLength = prompt("Please enter the number of characters you want for your new password. (between 8-128 characters): \n(Please type in a number between 8 to 128.) ");

    if (pwLength < 8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else if (pwLength > 128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else if (isNaN(pwLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else {
    alert("If you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return pwLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    } else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    } else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    } else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    } else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    } else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    } else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    } else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    } else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    } else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

 //Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 
function generatePassword(){
  determineLength();
  console.log(pwLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowerCases;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += upperCases + number + symbol;

} else if (uppercaseCheck && numberCheck){
  characters += upperCases + number;

} else if (numberCheck && specialCheck){
  characters += number + symbol;

} else if (uppercaseCheck && specialCheck){
  characters += upperCases + symbol;

} else if (uppercaseCheck){
  characters += upperCases;

} else if(numberCheck){
  characters += number;

} else if (specialCheck){
  characters += symbol;

} 
else{
  characters === lowerCases;
}

  for(var i = 0; i < pwLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);