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