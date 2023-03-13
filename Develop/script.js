// Wait for the DOM to finish rendering before running the code
$(function () {
    // Set the date to display it in the header
    var currentDate = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDate);
  
    // Get any user input that was previously saved in local storage
    for (var i = 9; i <= 17; i++) {
      var savedDescription = localStorage.getItem("hour-" + i);
      if (savedDescription) {
        $("#hour-" + i + " .description").val(savedDescription);
      }
    }
     // Apply the past, present, or future class to each time-block
  function updateHourBlocks() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);
      if (hourBlock < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (hourBlock === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }
  // Update the class of the hour blocks every 10 minutes
  setInterval(updateHourBlocks, 10 * 60 * 1000);
  updateHourBlocks();

  // Add a click listener to the save buttons
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var hourBlock = $(this).parent().attr("id");
    localStorage.setItem(hourBlock, description);
  });
});

    
 