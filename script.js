$( document ).ready(function() {
    console.log( "ready!" );




$("input[type=radio]").attr('disabled', false)
$("#s1").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q1');
  if ($('input[name=q1]:checked').val()== "Chile"){
    alert("Correct");
  }else alert("Incorrect")
  $("div").slideUp();

})

$("input[type=radio]").attr('disabled', false)
$("#s2").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q2');
  if ($('input[name=q2]:checked').val()== "Belgium"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s3").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q3');
  if ($('input[name=q3]:checked').val()== "Australia"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s4").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q4');
  if ($('input[name=q4]:checked').val()== "Italy"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s5").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q5');
  if ($('input[name=q5]:checked').val()== "Portugal"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s6").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q6');
  if ($('input[name=q6]:checked').val()== "South Korea"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s7").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q7');
  if ($('input[name=q7]:checked').val()== "Togo"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s8").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q8');
  if ($('input[name=q8]:checked').val()== "Latvia"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s9").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q9');
  if ($('input[name=q9]:checked').val()== "Nigeria"){
    alert("Correct");
  }else alert("Incorrect")
})

$("input[type=radio]").attr('disabled', false)
$("#s10").click(function(event){
  event.preventDefault();
  var possibleAnswer = document.getElementsByName('q10');
  if ($('input[name=q10]:checked').val()== "Tanzania"){
    alert("Correct");
  }else alert("Incorrect")
})

//$("#s1").attr('disabled', true)
//var questionNumber = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
//var correctAnswer = ["Chile", "Belgium", "Australia", "Italy", "Portugal", "South Korea", "Togo", "Latvia", "Nigeria", "Tanzania"];


//function checkAnswer(questionNumber, correctAnswer){
  //event.preventDefault();
  //var possibleAnswer = document.getElementsByName(questionNumber);  // questionNumber: “q1” “q2" “q3”
  //if($(`input[name=${questionNumber}]:checked`).val() === correctAnswer){    // correctAnswer: “Chile”
    //alert(“Correct”)
  //}
//}
//var input[type=radio] = $("input:radio");
//var input[type=submit] = $("input[type=submit]");
//var formTags = $("form");
//$("input[type=radio]:checked").click(function(input[type=radio] + input[type=submit])){
  //$("form").slideUp();
//}








//$("input") .on("click", function(){
  //if($(:value == Chile))
//})

//$("input[name=PossibleAnswer]:checked").click(function(Submit){
  //var possibleAnswer = document.getElementsByName('PossibleAnswer');
  //if ($('input[name=PossibleAnswer]:checked').val()== "Chile"){
    //alert("Correct");
//}
//})

//function checkAnswer(){
  //$("input:radio").on("click", checkAnswer() ){
    //if(input:value == "Chile"){
      //alert("That's Correct");
    //}else if(input:value !== "Chile"){
      //alert("The correct answer is Chile");
    //}
  //}
//}




});
//var input = $( "form input:radio" )
//$("input[name='PossibleAnswer']").click(function){
  //if('input:radio'[name=PossibleAnswer]:checked.val()=== "Chile"){
    //console.log("That's Correct");

    //function submit(){
      //var score=0
      //var numberOfQuestions=10
      //var answers = ["Chile", "Belgium", "Australia", "Italy", "South Korea", "Togo", "Latvia", "Nigeria", "Tanzania"];

      //var q1 = document.forms["quiz"]["q1"].value;
      //var q2 = document.forms["quiz"]["q2"].value;
      //var q3 = document.forms["quiz"]["q3"].value;
      //var q4 = document.forms["quiz"]["q4"].value;
      //var q5 = document.forms["quiz"]["q5"].value;
      //var q6 = document.forms["quiz"]["q6"].value;
      //var q7 = document.forms["quiz"]["q7"].value;
      //var q8 = document.forms["quiz"]["q8"].value;
      //var q9 = document.forms["quiz"]["q9"].value;
      //var q10 = document.forms["quiz"]["q10"].value;
