'use strict'

let photoArray = ['url("images/one.png")','url("assets/images/two.png")','url("images/three.png")','url("images/four.png")','url("images/five.png")'];

let photoDisplay = () => {
  setInterval(function(){
    $('section.one').css({'background-image':photoArray[1]});
  }, 8000);
  setInterval(function(){
    $('section.one').css({'background-image':photoArray[2]});
  }, 16000);
  setInterval(function(){
    $('section.one').css({'background-image':photoArray[3]});
  }, 24000);
  setInterval(function(){
    $('section.one').css({'background-image':photoArray[4]});
  }, 32000);
  setInterval(function(){
    $('section.one').css({'background-image':photoArray[5]});
  }, 40000);
}
photoDisplay();

