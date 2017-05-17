$( document ).ready(function() {
    console.log( "ready!" );


//var input[name=PossibleAnswer] = $(name);
$("input[type=radio]").attr('disabled', false)
$("input[name=PossibleAnswer]:checked").click(function(){
  var possibleAnswer = document.getElementsByName('PossibleAnswer');
  if ($('input[name=PossibleAnswer]:checked').val()== "Chile"){
    event.preventDefault();
    alert("Correct");
  }
})


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
