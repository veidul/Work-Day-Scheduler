$(document).ready(function(){

    var timeblocks = [9,10,11,12,1,2,3,4,5];
    var date = $('#currentDay')
    var past = $('.past')
    var future = $('.future')
    var present = $('.present')
    
    date.text(moment().format("dddd MMMM, Do, YYYY"))

    console.log(date);
    function pastPresentFuture(hour) {
        
        return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
    }
    var blocks = $('#timeblocks');
    
    // for (var i = 0; i < timeblocks.length; i++ ){
    //     blocks.append('<textarea class="${pastPresentFuture(timeblocks[i])}" />')
    // };
})
    