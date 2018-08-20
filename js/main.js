$(document).ready(function(){
$('h1').css("color", "red")

$('a').click(function(eventObject){
  this.preventDefault();
  this.css('background','green');
})
})
