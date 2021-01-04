var color = prompt("Enter Color of Road traffic signal:").toUpperCase();
if(color == "RED"){
    alert("Must Stop");
}
else if( color == "YELLOW"){
    alert("Ready to move");
}
else if(color == "GREEN"){
    alert("Move now");

}
else if(!color){
    alert("Please Enter Color of Road traffic signal");

}
else {
    alert("Not traffic signal Color");
}