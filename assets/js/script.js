//global variables
var blankActivity1 = document.querySelector(".blank-activity-1");
var blankActivity2 = document.querySelector(".blank-activity-2");
var blankActivity3 = document.querySelector(".blank-activity-3");
var blankActivity4 = document.querySelector(".blank-activity-4");
var blankActivity5 = document.querySelector(".blank-activity-5");
var blankActivity6 = document.querySelector(".blank-activity-6");
var blankActivity7 = document.querySelector(".blank-activity-7");
var blankActivity8 = document.querySelector(".blank-activity-8");
var blankActivity9 = document.querySelector(".blank-activity-9");
var currentDayDisplay = document.querySelector("#currentDay"); 
var tester = document.querySelector(".hour")

var nineAM = document.querySelector("#nineAM");
var tenAM = document.querySelector("#tenAM");
var elevenAM = document.querySelector("#elevenAM");
var twelvePM = document.querySelector("#twelvePM");
var onePM = document.querySelector("#onePM");
var twoPM = document.querySelector("#twoPM");
var threePM = document.querySelector("#threePM");
var fourPM = document.querySelector("#fourPM");
var fivePM = document.querySelector("#fivePM");

nineAM = 09;
tenAM = 10;
elevenAM = 11;
twelvePM = 12;
onePM = 13;
twoPM = 14;
threePM = 15;
fourPM = 16;
fivePM = 17;

var blankInput1=' ';
var blankInput2=' ';
var blankInput3=' ';
var blankInput4=' ';
var blankInput5=' ';
var blankInput6=' ';
var blankInput7=' ';
var blankInput8=' ';
var blankInput9=' ';

var rightNow;
var todayMilitary;
var numberTodayMilitary;

var blankInputArray = [blankInput1, blankInput2, blankInput3, blankInput4, blankInput5, blankInput6, blankInput7, blankInput8, blankInput9];
var blankActivityArray = [blankActivity1, blankActivity2, blankActivity3, blankActivity4, blankActivity5, blankActivity6, blankActivity7, blankActivity8, blankActivity9];
var colorNumbersArray = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

//add date to header

function displayCurrentTime() {
    var today = moment()
    $(currentDayDisplay).text(today.format("dddd, MMM Do, YYYY")); 
    rightNow = today.format('hh:mm:ss a');
    todayMilitary = today.format("kk");
    numberTodayMilitary = parseInt(todayMilitary);
  }
displayCurrentTime()
setInterval(displayCurrentTime, 1000);

//add input so can add text
function addBlankInput () {
    for (var i = 0; i < blankActivityArray.length; i++) {
        blankInputArray[i] = document.createElement("INPUT");
        blankInputArray[i].setAttribute("type", "text");
        blankInputArray[i].classList.add("blank-input")
        blankActivityArray[i].appendChild(blankInputArray[i]);
    }
}
addBlankInput()





/* to do:
have save button add activities to local storage and call back on page refresh
change color based on past/present/future



*/
