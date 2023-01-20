// Display the current day at the top of the calendar when a user opens the planner
$(document).ready(function() {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDay);
  });

  // Present timeblocks for standard business hours
for (let i = 9; i < 18; i++) {
    let row = $("<div>");
    row.addClass("row time-block");
    let hour = $("<div>");
    hour.addClass("hour col-md-2");
    let hourText = i + ":00";
    hour.text(hourText);
    let description = $("<textarea>");
    description.addClass("description col-md-8");
    let saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-md-2");
    saveBtn.html("<i class='fa fa-save'></i>");
    row.append(hour);
    row.append(description);
    row.append(saveBtn);
    $(".container").append(row);
  }