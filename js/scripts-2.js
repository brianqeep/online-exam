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

var result = 0;
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
  $("form").submit(function(event){
    event.preventDefault();
    var question1 = $(".q11").val();
    if (question1==3) {
      alert("correct")
    }else {
      alert("wrong")
    }
  });
});
