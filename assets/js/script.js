// Global Variables
let today = moment();
let now = moment().hour();

// Prints current date/time under header
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// Runs scheduleLoad on ready
$(document).ready(scheduleLoad);

// Set colors of hour slots, and inputs local storage.
function scheduleLoad() {
    for (i = 8; i <= 17; i++) {
        if (i < now) {
            $("#text" + i).removeClass('future').removeClass('present').addClass("past");
        } else if (i > now) {
            $("#text" + i).removeClass('present').removeClass('past').addClass("future");
        } else {
            $("#text" + i).removeClass('future').removeClass('past').addClass('present');
        }
        $("#text" + i).text(localStorage.getItem("text" + i))
    }
}

// Function to check every 15 mins to update colors
setInterval(scheduleLoad, 1000 * 60);

// All save buttons put input into local storage onclick.
$('.saveBtn').on("click", function (event) {
    console.log(event);
    var keyName = $(this).siblings('.entryHere').attr('id');
    var textValue = $(this).siblings('.entryHere').val();
    localStorage.setItem(keyName, textValue);
})

// Bonus: Clear local storage button
$('#clearStorage').on("click", function () {
    localStorage.clear();
    scheduleLoad();
})
