var currentTime = moment().format('LT');
// console.log(currentTime);

var entryObject = {};

if(localStorage.getItem("entry")){
    // need JSON.parse vvv //
    entryObject = JSON.parse(localStorage.getItem("entry"));
}

var currentHour = moment().format("HH");
// console.log(currentHour);
// console.log( typeof currentHour);

var makeNumber = parseInt(currentHour);
// console.log("Now it's a number.", makeNumber);
// console.log( typeof makeNumber);


// header section //
var dayDateHeader = moment().format('dddd' + ", " + "LL");
// console.log(dayDateHeader);
$("#currentDay").append(dayDateHeader);


var workDayHours = []