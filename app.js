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
// for our eventListener, the second element in the parameter is the function we want to call when the event occurs.
// styles represents the classList (increase, decrease) 
// now for the conditional
// if the decrease button is hit, it knows to go down one number because the class list has "down" written.
// if the increase button is hit, it knows to go up one number because the class list has "up" written.
// if the reset button is hit, it will put the count back to zero.
// after all the logic is done, we will then set the value to whatever the count is using textContent. 
// value is the span id.
// textContent changes the value to whatever we set it to.

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
            if(styles.contains("down")){
                count--;
            }
            else if (styles.contains("up")){
                count++
            }
            else {
                count = 0;
            }
        value.textContent = count;    
    });
});