var timeblocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour()
console.log(currentHour);
var date = $('#currentDay')
var past = $('.past')
var future = $('.future')
var present = $('.present')

function pastPresentFuture() {
    $(".container .time-block").each(function () {
        var textArea = $(this).children()
        console.log(textArea[1]);
        var hour = $(this).attr("data-time")
        if (hour == currentHour) {
            textArea[1].addClass("present")
        }
        else if (hour < currentHour) {
            textArea[1].addClass("past")
        }
        else {
            textArea[1].addClass("future")
        }
    })
    //return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
}

$(document).ready(function () {

    date.text(moment().format("dddd MMMM, Do, YYYY"))

    pastPresentFuture();
    var blocks = $('.time-block');


    // onclick function save button is gonna save to local storage
    $(blocks).on("click",function(event){
        event.preventDefault();
        console.log(event.target);
    })
})
