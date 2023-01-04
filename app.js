// first we need to set the inital value to zero
let count = 0;
// we can now setup functionality for our buttons on HTML page
// we use #value in our first querySelector because we want to select the first element with the id of "value"
// we use .btn in our second querySelctor because we want to select all of the classes that have ".btn"
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// we are going to use the forEach method to call each function in btns which is on the HTML page. That is decrease, reset and increase.
// the first element in the parameter is the value of the current element
// for our eventListener, the first element in the parameter is what type of event or HTML DOM event is needed for this method to work. In this case, we use click.
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {

    })
});