console.log("load");

var $cursorBg = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $circle = document.querySelector("#circle");

//커서 움직이기
window.addEventListener("mousemove", onMouseMoveWindow);
function onMouseMoveWindow(e){
     //console.log('move');
     var posX = e.clientX, posY = e.clientY;
     TweenMax.to($cursorBg, 0.2,{css : {top:posY,left:posX}});
     TweenMax.to($progress, 0.2,{css : {top:posY,left:posX}});
 }
