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

var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');
var btn5 = document.querySelector('.btn5');
var btn6 = document.querySelector('.btn6');
var btn7 = document.querySelector('.btn7');
var btn8 = document.querySelector('.btn8');
var btn9 = document.querySelector('.btn9');

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

//add date to header and calculate military time of hour so can compare later for background colors
function displayCurrentTime() {
    var today = moment()
    $(currentDayDisplay).text(today.format("dddd, MMM Do, YYYY")); 
    rightNow = today.format('hh:mm:ss a');
    todayMilitary = today.format("kk");
    numberTodayMilitary = parseInt(todayMilitary);
    return; //need return??
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
    return; //need return??
}
addBlankInput()

console.log(blankInputArray[0], blankInputArray[1])

//compare current hour vs hour of each timeblock to determine color
function colorChange (){
    for (var i = 0; i < colorNumbersArray.length; i++){
        if (numberTodayMilitary === colorNumbersArray[i]) {
            blankActivityArray[i].style.backgroundColor = "#ff6961";
            blankInputArray[i].style.color = "white";
        } else if (numberTodayMilitary < colorNumbersArray[i]) {
            blankActivityArray[i].style.backgroundColor = "#77dd77";
            blankInputArray[i].style.color = "white";
        } else if (numberTodayMilitary > colorNumbersArray[i]) {
            blankActivityArray[i].style.backgroundColor = "#d3d3d3";
        }
    } 
    return; //need return??
} 
colorChange();

//when click save button, save to local storage
/* function saveButtonClicked () {
    localStorage.setItem("savedInputs", JSON.stringify(blankInputArray));
    console.log("clicked save button, getSaved fxn running")
    console.log("first input box: " + blankInput1.value)
    return; //need return??
} */

//when open page, pull from local storage for last input
btn1.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput9AM", blankInputArray[0].value);
    console.log("btn 1 worked :  " + blankInputArray[0].value)
})
btn2.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput10AM", blankInputArray[1].value);
    console.log("btn 2 worked :  " + blankInputArray[1].value)
})
btn3.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput11AM", blankInputArray[2].value);
    console.log("btn 3 worked :  " + blankInputArray[2].value)
})
btn4.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput12PM", blankInputArray[3].value);
    console.log("btn 4 worked :  " + blankInputArray[3].value)
})
btn5.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput1PM", blankInputArray[4].value);
    console.log("btn 5 worked :  " + blankInputArray[4].value)
})
btn6.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput2PM", blankInputArray[5].value);
    console.log("btn 6 worked :  " + blankInputArray[5].value)
})
btn7.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput3PM", blankInputArray[6].value);
    console.log("btn 7 worked :  " + blankInputArray[6].value)
})
btn8.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput4PM", blankInputArray[7].value);
    console.log("btn 8 worked :  " + blankInputArray[7].value)
})
btn9.addEventListener("click", function getSaved(){
    localStorage.setItem("savedInput5PM", blankInputArray[8].value);
    console.log("btn 9 worked :  " + blankInputArray[8].value)
})
//key is working but value comes back as " ", but console log comes back with the string i typed in... if i get rid of the stringify, it works... why?? bc already a string?? but i thought we were supposed to stringify everything. and if not needed, then is parse not needed either??
//also, i think i can delete var blankInput1-9

function getSavedInputs() {
    var savedInput9AM = localStorage.getItem("savedInput9AM");
    console.log("saved9am " + savedInput9AM)
    var savedInput10AM = localStorage.getItem("savedInput10AM");
    var savedInput11AM = localStorage.getItem("savedInput11AM");
    var savedInput12PM = localStorage.getItem("savedInput12PM");
    var savedInput1PM = localStorage.getItem("savedInput1PM");
    var savedInput2PM = localStorage.getItem("savedInput2PM");
    var savedInput3PM = localStorage.getItem("savedInput3PM");
    var savedInput4PM = localStorage.getItem("savedInput4PM");
    var savedInput5PM = localStorage.getItem("savedInput5PM");
    }
/*does this work to save time?? 
    for (var i = 0; i < localStorage.length; i++){
        localStorage.getItem(localStorage.key(i));
    } 
    */
getSavedInputs()
//print getItems back to page




//if works, try removing btn link to method in html???

/* to do:
have save button add activities to local storage and call back on page refresh
*/
