document.write("<h1>Mark Sheet </h1>")
var totalMarks = 300;
var marks1 = parseInt(prompt("Enter your 1st subjects's marks:"));
var marks2 = parseInt(prompt("Enter your 2nd subject's marks:"));
var marks3 = parseInt(prompt("Enter your 3rd subject's marks:"));
var marksObtained = marks1 + marks2 + marks3;
var avg = (marksObtained/totalMarks)*100;
console.log(avg)
if(avg >= 80){
    document.write("Total Marks :" + totalMarks);
    document.write("<br>");
    document.write("Marks obtained :" + marksObtained);
    document.write("<br>");
    document.write("Percentage :" + avg);
    document.write("<br>");
    document.write("Grade :" + "A-one");
    document.write("<br>");
    document.write("Remarks : Excellent!");
}
else if(avg >=70){
    document.write("Total Marks :" + totalMarks);
    document.write("<br>");
    document.write("Marks obtained :" + marksObtained);
    document.write("<br>");
    document.write("Percentage :" + avg);
    document.write("<br>");
    document.write("Grade :" + "A");
    document.write("<br>");
    document.write("Remarks : Good!");
}
else if(avg >=60){
    document.write("Total Marks :" + totalMarks);
    document.write("<br>");
    document.write("Marks obtained :" + marksObtained);
    document.write("<br>");
    document.write("Percentage :" + avg);
    document.write("<br>");
    document.write("Grade :" + "B");
    document.write("<br>");
    document.write("Remarks : You need to improve!");
}
else{
    document.write("Total Marks :" + totalMarks);
    document.write("<br>");
    document.write("Marks obtained :" + marksObtained);
    document.write("<br>");
    document.write("Percentage :" + avg);
    document.write("<br>");
    document.write("Grade :" + "Fail");
    document.write("<br>");
    document.write("Remarks : Sorry!");
}
