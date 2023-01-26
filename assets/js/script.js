// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });



// let plans = {};

// function init() {
//   let savedPlans = JSON.parse(localStorage.getItem("plans"));
//   if (savedPlans !== null) {
//     plans = savedPlans;
//     renderPlans();
//   } else {
//     plans ={};
//   }
//   loadCurrentDateTime();
// }

// $(function loadCurrentDateTime(){
//   $("#currentDay").text(dayjs().format("dddd")+", "+dayjs().format('MMMM D'));
//   let currentHour = dayjs().format("H");
//   for (let i = 9; i < 18; i++){
//     if (i < currentHour){
//       $(`#hour-${i}`).addClass("past");
//     } else if (i = currentHour){
//       $(`#hour-${i}`).addClass("present");
//     } else {
//       $(`#hour-${i}`).addClass("future");
//     }
//   }
// })

// function renderPlans(){
//   $.each(Object.keys(plans), function(i, key){
//     $(`#${key}`).children("textarea").text(plans[key]);
//   })
// }

// $(".saveBtn").on("click", async function(event){
//   await init();
//   event.preventDefault;
//   let plan = $(this).parent().children("textarea").val();
//   let hourId = $(this).parent().attr("id");
//   plans[hourId] = plan;
//   localStorage.setItem("plans", JSON.stringify(plans));
// });

// init();

// let plans = {"hour-9":"Meeting", "hour-11": "break"};

$(function(){

  let plans = {};

  $(".saveBtn").on("click", function(event){
    event.preventDefault;
    let plan = $(this).parent().children("textarea").val();
    let hourId = $(this).parent().attr("id");
    plans[hourId] = plan;
    localStorage.setItem("plans", JSON.stringify(plans));
  });

  $("#currentDay").text(dayjs().format("dddd")+", "+dayjs().format('MMMM D'));
  let currentHour = dayjs().format("H");
  for (let i = 9; i < 18; i++){
    if (i < currentHour){
      $(`#hour-${i}`).addClass("past");
      console.log(i + "Past");
    } else if (i > currentHour){
      $(`#hour-${i}`).addClass("future");
      console.log(i + "Future");
    } else {
      $(`#hour-${i}`).addClass("present");
      console.log(i + "Present");
    }
  }

  let savedPlans = JSON.parse(localStorage.getItem("plans"));
    if (savedPlans !== null) {
      plans = savedPlans;
    }

  $.each(Object.keys(plans), function(j, key){
    $(`#${key}`).children("textarea").text(plans[key]);
  })

});