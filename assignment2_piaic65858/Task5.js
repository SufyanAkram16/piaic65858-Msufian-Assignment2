var scrtNmber = 8 ;
var gnmber = parseInt(prompt("Guess the number :"));

if(gnmber === scrtNmber){
alert("Bingo! Correct answer");
}

else if ( gnmber+1 === scrtNmber){
    alert("Close enough to the correct answer")
}
else{
    alert("Wrong. Please Try again")
}