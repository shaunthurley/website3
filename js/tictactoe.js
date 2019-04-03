var topLeft = document.getElementById("tl");
var topCenter = document.getElementById("tc");
var topRight = document.getElementById("tr");
var middleLeft = document.getElementById("ml");
var middleCenter = document.getElementById("mc");
var middleRight = document.getElementById("mr");
var bottomLeft = document.getElementById("bl");
var bottomCenter = document.getElementById("bc");
var bottomRight = document.getElementById("br");

var allElements = [topLeft, topCenter, topRight, middleLeft, middleCenter, middleRight, bottomLeft, bottomCenter, bottomRight];

var remainingLocations = ["tl", "tc", "tr", "ml", "mc", "mr", "bl", "bc", "br"];
var playerLocations = [];
var computerLocations = []

for(var i=0; i<allElements.length; i++) {
    allElements[i].addEventListener("click", makeX);
    allElements[i].addEventListener("mouseover", makeBlack);
}

function makeX() {
    var thisElementID = this.attributes["id"].value;
    var thisElement = document.getElementById(thisElementID);
    thisElement.textContent = "X";

    var indexOfLocation = remainingLocations.indexOf(thisElementID);
    if(indexOfLocation != -1) {
       remainingLocations.splice(indexOfLocation,1);
        playerLocations[playerLocations.length] = thisElementID;
//        alert(playerLocations);
        makeO();
        checkForWinner();
       }
}

function makeBlack() {
    var thisElementID = this.attributes["id"].value;
    var thisElement = document.getElementById(thisElementID);
    thisElement.className += " black"
}

function makeO() {
    var randomIndex = Math.floor(Math.random() * remainingLocations.length);
    var computerElementID = remainingLocations[randomIndex];
    var computerElement = document.getElementById(computerElementID);
    computerElement.textContent = "O";

    remainingLocations.splice(randomIndex,1);
    computerLocations[computerLocations.length] = computerElementID;
    checkForWinner();
}

//function checkForWinner() {
//    if()
//}
//
//function checkForThree(locations) {
//    var l = 0;
//    var c = 0;
//    var r = 0;
//    var t = 0;
//    var m = 0;
//    var b = 0;
//    for(var i=0; i<locations; i++) {
//
//    }
//}








//var allElements = [topLeft, topCenter, topRight, middleLeft, middleCenter, middleRight, bottomLeft, bottomCenter, bottomRight];
//// New
//var remainingLocations = ["tl", "tc", "tr", "ml", "mc", "mr", "bl", "bc", "br"];
//var playerLocations = [];
//var computerLocations = [];
////
//for(var i=0; i<allElements.length; i++) {
//    allElements[i].addEventListener("click", makeX);
//    allElements[i].addEventListener("mouseover", makeBlack);
//}
//
//function makeX() {
//    var thisElementID = this.attributes["id"].value;
//    var thisElement = document.getElementById(thisElementID);
//    thisElement.textContent = "X";
//    var indexOfElement = remainingLocations.indexOf(thisElementID);
//    if(indexOfElement != -1) {
//        remainingLocations.splice(indexOfElement,1);
//        playerLocations[playerLocations.length] = thisElementID;
////        alert(playerLocations.includes("tr"));
//        makeO();
//       }
//
//}
//
//function makeBlack() {
//    var thisElementID = this.attributes["id"].value;
//    var thisElement = document.getElementById(thisElementID);
//    thisElement.className += " black"
//}
//// New
//function makeO() {
//    var randomIndex = Math.floor(Math.random()*remainingLocations.length);
//    var computerElementID = remainingLocations[randomIndex]
//    var computerElement = document.getElementById(computerElementID);
//    computerElement.textContent = "O";
//    remainingLocations.splice(randomIndex,1);
//    computerLocations[computerLocations.length] = computerElementID;
//    alert(computerLocations);
//}
////
//function checkForWinner() {
//    if(remainingLocations.length == 0) {
//       return "Draw"
//       }
//    else if() {
//
//            }
//}
//
//function checkForThree(locations) {
//    var rCount = 0;
//    var lCount = 0;
//    var mCount = 0
//}
