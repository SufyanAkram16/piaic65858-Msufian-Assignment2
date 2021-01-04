var correctPassword = "Sufian";
var enterPassword = prompt("Enter Your Password");
if(!enterPassword){
    alert("Please Enter your Password");
}
else if (correctPassword == enterPassword){
    alert("Correct! The password you entered matches the original password");

}
else {
    alert("Incorrect Password")
}