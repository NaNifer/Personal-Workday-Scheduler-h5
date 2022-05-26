var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm"));

var now = moment().format('HH:mm');
console.log(now)

console.log(moment('8:01', "HH:mm").isBetween('8:00', '8:59', "HH:mm", "HH:mm"));

// let amBox8El = $('#amBox8')


// Check to see all timeBoxes are between their respe tive times
// If yes = green CSS, If Before = RED, If after





