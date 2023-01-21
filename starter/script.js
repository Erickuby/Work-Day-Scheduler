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
  // Color-code each timeblock based on past, present, and future
let currentHour = parseInt(moment().format("H"));
$(".time-block").each(function() {
    let blockHour = parseInt($(this).find(".hour").text().split(":")[0]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  
  // Allow a user to enter an event when they click a timeblock
  $(".description").on("click", function() {
    $(this).attr("readonly", false);
  });

  // Save the event in local storage when the save button is clicked in that timeblock
  $(".saveBtn").on("click", function() {
    let hour = $(this).siblings(".hour").text();
    let event = $(this).siblings(".description").val();
    localStorage.setItem(hour, event);
    $("#alert").text("Appointment added to local storage");
    $("#alert").show();
    setTimeout(function(){
      $("#alert").fadeOut();
    }, 2000);
  });

  // Persist events between refreshes of a page
  $(".description").each(function() {
    let hour = $(this).siblings(".hour").text();
    let event = localStorage.getItem(hour);
    $(this).val(event);
  });