
$(document).ready(function(){

 var timerButton;
 var time = 10;
 timerButton = setInterval (stopwatch, 1000)
 $("#startButton").on("click", function() {
  $("#form").show();
  $("#startButton").hide();
  
  
  //  timerButton = setTimeout(function() {
  //    alert("Alert #2: Called 3 seconds after the start button is clicked.");
  //  }, 3000);
 });

 function stopwatch() {
  time--;
  $("#clock").html(time);
  // if (time === 0) {
  //   clearInterval(stopwatch);
  // }
}
//  $("#submitButton").on("click", function() {
//    clearTimeout(timerButton);
//  });
// $("#startButton").on("click", function(){
// });

});