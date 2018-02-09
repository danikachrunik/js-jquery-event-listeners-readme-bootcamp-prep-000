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
  $('img').on('load', function(){
  
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
