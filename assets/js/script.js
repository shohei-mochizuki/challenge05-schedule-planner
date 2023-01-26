$(function(){
  let plans = {}; // Create a blank object to store plans/events

  // 1. Event Listerner for the Save button
  $(".saveBtn").on("click", function(event){
    event.preventDefault;
    let plan = $(this).parent().children("textarea").val(); // Get the input of the selected time slot (this refers to the clicked button)  
    let hourId = $(this).parent().attr("id"); // Get the ID of the selected time slot
    plans[hourId] = plan; // Put them into the object as key and value
    localStorage.setItem("plans", JSON.stringify(plans)); // Save the object in local storage
  });

  // 2. Display date and color based on the current time
  $("#currentDay").text(dayjs().format("dddd")+", "+dayjs().format('MMMM D')); // Add date (today) to the bottom of the header
  let currentHour = dayjs().format("H");  // Get the current hour (0-23)
  for (let i = 9; i < 18; i++){
    if (i < currentHour){ // Compare the current hour and the ID of each time slot 
      $(`#hour-${i}`).addClass("past"); // Add class depending on the result
    } else if (i > currentHour){
      $(`#hour-${i}`).addClass("future");
    } else {
      $(`#hour-${i}`).addClass("present");
    }
  }

  // 3. Get the saved data from local storage and put them into the object 'plans' 
  let savedPlans = JSON.parse(localStorage.getItem("plans"));
    if (savedPlans !== null) {
      plans = savedPlans;
    }

  // 4. Show the saved data (plan/event) in the relevant time slots
  $.each(Object.keys(plans), function(j, key){ // Each key of 'plans' is read
    $(`#${key}`).children("textarea").text(plans[key]); // Show its value in the <textarea> of the ID matching the key name (e.g. 'hour-9') 
  })
});