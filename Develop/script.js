// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
}
  
  var passwordText = document.querySelector("#password");

  var password=document.getElementById("password");

  function genPassword() {
     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var passwordLength = 8;
     var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
         document.getElementById("password").value = password;
  }
 
 function copyPassword() {
   var copyText = document.getElementById("password");
   copyText.select();
   document.execCommand("copy");  
 }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
