//using jquery for all of my JS
$(document).ready(function () {
//declared my variables
var timeblocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour()
var date = $('#currentDay')
var past = $('.past')
var future = $('.future')
var present = $('.present')
//function to change the class if past present or future
function pastPresentFuture() {
    $(".container .time-block").each(function () {
        var textArea = $(this).children()
        console.log(textArea[1]);
        var hour = $(this).attr("data-time")
        if (hour == currentHour) {
            $(textArea[1]).addClass("present")
        }
        else if (hour < currentHour) {
            $(textArea[1]).addClass("past")
        }
        else {
            $(textArea[1]).addClass("future")
        }
    })
}
//on click event saves value of time and text
$(".saveBtn").on("click",function(event){
    event.preventDefault();
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
//saves the description to local storage
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))

//adds the date and time to page header
    date.text(moment().format("dddd MMMM, Do, YYYY"))

    var blocks = $('.time-block');
    
    
    // onclick function save button is gonna save to local storage
    pastPresentFuture();
})
