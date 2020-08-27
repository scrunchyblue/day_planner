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


var plansHours = 
// array of hours of the day //
[
    {
        hourOfDay: 9,
        value: 9,
        dayNight: "am"
    },
    {
        hourOfDay: 10,
        value: 10,
        dayNight: "am"
    },
    {
        hourOfDay: 11,
        value: 11,
        dayNight: "am"
    },
    {
        hourOfDay: 12,
        value: 12,
        dayNight: "pm"
    },
    {
        hourOfDay: 1,
        value: 13,
        dayNight: "pm"
    },
    {
        hourOfDay: 2,
        value: 14,
        dayNight: "pm"
    },
    {
        hourOfDay: 3,
        value: 15,
        dayNight: "pm"
    },
    {
        hourOfDay: 4,
        value: 16,
        dayNight: "pm"
    },
    {
        hourOfDay: 5,
        value: 17,
        dayNight: "pm"
    },
]

// for(var i = 0; i < 9; i ++){
//     // using jquery to create divs/classes...//
//     var row = $("<div>".addClass("row");
// }