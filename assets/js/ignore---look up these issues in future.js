/* why does this work: 
i=1
blankInputArray[i] = document.createElement("INPUT");
blankInputArray[i].setAttribute("type", "text");
blankActivityArray[i].appendChild(blankInputArray[i]);
blankInputArray[i].classList.add("blank-input")

and this work: 
blankInputArray[1] = document.createElement("INPUT");
blankInputArray[1].setAttribute("type", "text");
blankActivityArray[1].appendChild(blankInputArray[1]);
blankInputArray[1].classList.add("blank-input")

but not this: 
function addBlankInput () {
    for (var i = 0; i < blankActivityArray.length; i++) {
        blankInputArray[i] = document.createElement("INPUT");}
    for (var i = 0; i < blankActivityArray.length; i++) {
        blankInputArray[i].setAttribute("type", "text");}
    for (var i = 0; i < blankActivityArray.length; i++) {
            blankInputArray[i].classList.add("blank-input")
            blankActivityArray[i].appendChild(blankInputArray[i]);}

}
//be able to add text to calendar
function addBlankInput () {
    for (var i = 0; i <= blankActivityArray.length; i++) {
        blankInputArray[i] = document.createElement("INPUT");}
    for (var i = 0; i <= blankActivityArray.length; i++) {
        blankInputArray[i].setAttribute("type", "text");}
    for (var i = 0; i <= blankActivityArray.length; i++) {
            blankInputArray[i].classList.add("blank-input")
    }
    for (var i = 0; i <= blankActivityArray.length; i++) {
        blankActivityArray[i].appendChild(blankInputArray[i]);}  //why does this give error msg on console log

}
addBlankInput(); 

function addBlankInput () {
    for (var i = 0; i < blankActivityArray.length; i++) {
        blankInputArray[i] = document.createElement("INPUT");}
    for (var i = 0;  i < blankActivityArray.length; i++) {
        blankInputArray[i].setAttribute("type", "text");}
    for (var i = 0;  i < blankActivityArray.length; i++) {
            blankInputArray[i].classList.add("blank-input")
            blankActivityArray[i].appendChild(blankInputArray[i]);}

} */

//click button and save to local storage, cuts out all the button add listeners, not working quite right yet
$(document).on("click", "button", function (event) {
    console.log("this.value: " + this.value);
    localStorage.setItem(this.value, JSON.stringify(this.value));
  });

//get and print saved data
document.querySelector("#hour0").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour1").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour2").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour3").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour4").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour5").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour6").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour7").value = JSON.parse(localStorage.getItem("this.value")) || "";
document.querySelector("#hour8").value = JSON.parse(localStorage.getItem("this.value")) || "";

 
//when click save button, save to local storage
/* function saveButtonClicked () {
    localStorage.setItem("savedInputs", JSON.stringify(blankInputArray));
    console.log("clicked save button, getSaved fxn running")
    console.log("first input box: " + blankInput1.value)
    return; //need return??
} */