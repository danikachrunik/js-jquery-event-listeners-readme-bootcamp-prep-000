function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function(){
    this.addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(){
  
  });
}

function submitIt() {
  $('img').on('load', function(){
  
  });
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
