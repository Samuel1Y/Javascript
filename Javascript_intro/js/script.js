var document;
var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

var spanNumber = document.getElementById("firstFieldId");
spanNumber.innerHTML = "15";

var lineNumber = document.getElementById("firstLineId");
lineNumber.innerHTML = lineNumber.innerHTML + "18";

var animalArray = ["cat", "dog", "parrot"];
document.getElementById("secondLineId").innerHTML = animalArray;

var fruitArray = ["Apple", "Banana"];
document.getElementsByClassName("fruitClass").innerHTML = fruitArray[1];

var underLine = document.getElementById("thirdLineId");
underLine.innerHTML = "<u>" + underLine.innerHTML + "</u>";
