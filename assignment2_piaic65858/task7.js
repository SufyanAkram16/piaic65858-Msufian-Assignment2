var num1 = Number(prompt("Enter 1st number"));
var num2 =Number(prompt("Enter 2nd number"));
var operator = prompt("Enter the operator to perform calculations");
if(operator === "+"){
    alert("Your calculation is:" + (num1+num2));
}
else if(operator === "-"){
    alert("Your calculation is:" + (num1-num2));
}
else if(operator === "*"){
    alert("Your calculation is:" + (num1*num2));
}
else if(operator === "/"){
    alert("Your calculation is:" + (num1/num2));
}
else if(operator === "%"){
    alert("Your calculation is:" + (num1%num2));
}