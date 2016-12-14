function showq1(){
  $(".question1").fadeIn();
  $(".question2").hide();
}
function showq2(){
  $(".question2").fadeIn();
  $(".question1").hide();
  $(".question3").hide();
}
function showq3(){
  $(".question3").fadeIn();
  $(".question2").hide();
  $(".question4").hide();
}
function showq4(){
  $(".question4").fadeIn();
  $(".question3").hide();
  $(".question5").hide();
}
function showq5(){
  $(".question5").fadeIn();
  $(".question4").hide();
}
function endExam(){
  $(".container").hide();
  $(".result").fadeIn();
  $(".terms").hide();
}

$(document).ready(function(){
  $("#qbtn1next").click(function(event){
    showq2();
  });
  $("#qbtn2previous").click(function(event){
    showq1();
  });
  $("#qbtn2next").click(function(event){
    showq3();
  });
  $("#qbtn3previous").click(function(event){
    showq2();
  });
  $("#qbtn3next").click(function(event){
    showq4();
  });
  $("#qbtn4previous").click(function(event){
    showq3();
  });
  $("#qbtn4next").click(function(event){
    showq5();
  });
  $("#qbtn5previous").click(function(event){
    showq4();
  });
  $("#submit").click(function(event){
    endExam();
  });
  $("form").submit(function(event){
    event.preventDefault();
    var result = 0;

    var button13 = document.getElementById('q13');
    var button21 = document.getElementById('q21');
    var button34 = document.getElementById('q34');
    var button43 = document.getElementById('q43');
    var button52 = document.getElementById('q52');

   if (button13.checked) {
     result += 20
   }
   if (button21.checked) {
     result += 20
   }
   if (button34.checked) {
     result += 20
   }
   if (button43.checked) {
     result += 20
   }
   if (button52.checked) {
     result += 20
   }
   else {
     result == 0
   }
   $("#marks").append(result);

  });
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
});
