// TAask 3a:
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
} // alert message would be displayed 

// Task 3b:
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} // alert message would not be displayed because of postfixx ...value of b will be incremented after comparing

//Task 3c:
var c = 12;
if (c++ === 13){
alert("condition 1 is true"); 
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}   //condition 2 and condition 4 is true             


//Task 3d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}   // alert message would be displayed 


//Task 3e:
if (true){

    alert("True");
    }
    if (false){
    alert("False");
    } //true message would be displayed


//Task 3f:
if("car" < "cat"){

    alert("car is smaller than cat");
    } //alert message would be displayed