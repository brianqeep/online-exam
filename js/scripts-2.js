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
}
function start(){
  $(".particulars").hide();
  $(".question1").fadeIn();
}
$(document).ready(function(){
  $("#start").click(function(event){
    start();
  });
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

  var name2 = $("#name").val("");
  var nationality2 = $("#nationality").val("");
  var date2 = $("#date").val();
  var university2 = $("#university").val("");

  $("name1").text(name2);
  $("nationality1").text(nationality2);
  $("date1").text(date2);
  $("university1").text(university2);
  $("marks").append(result);

  alert(name2, nationality2, result);
  });
});
