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
    if (key.which == 82) {
      alert('g was pressed');
    }
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
