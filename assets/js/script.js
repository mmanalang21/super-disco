// create variable and function to show current day and time
workdayTime();

function workdayTime() {
  var workdayDatetime = $("#currentDay").text(moment().format('dddd, MMMM Do h:mm:ss A'));
  setTimeout(workdayTime, 1000);
}

// create save button and variable to store data in local storage
$(".saveBtn").on("click", function () {
  var textData = $(this).siblings("textarea").val()
  var timeClock = $(this).parent().attr('id')
  console.log('textData', textData, timeClock);
  localStorage.setItem(timeClock, textData);
});


let currentHour = moment().hours();

// create a for loo to iterate through all HTML IDs

for (let i = 9; i <= 17; i++) {
  $('#' + i).children('textarea').val(localStorage.getItem(i)) 

  if (i < currentHour) {
    $("#" + i).children('textarea').addClass("past")

  } else if (currentHour === i) {
    $("#" + i).children('textarea').addClass("present")
  }

  else {
    $("#" + i).children('textarea').addClass("future")
  }
}