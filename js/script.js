console.log("load");

//셀렉터 찾기
var $cursorBg = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $circle = document.querySelector("#circle");
var $main = document.querySelector("#main");

//커서 움직이기
window.addEventListener("mousemove", onMouseMoveWindow);
function onMouseMoveWindow(e){
     //console.log('move');
     var posX = e.pageX, posY=e.pageY;
     TweenMax.to($cursorBg, 0.3,{css : {top:posY,left:posX}});
     TweenMax.to($progress, 0.4,{css : {top:posY,left:posX}});
 }

$circle.addEventListener('mouseenter',function(){
     console.log("enter");
     if(!$cursorBg.classList.contains('active')){
          $cursorBg.classList.add('active')
     }
     if(!$progress.classList.contains('active')){
          $progress.classList.add('active')
     }
     if(!$main.classList.contains('active')){
          $main.classList.add('active')
     }

})
$circle.addEventListener('mouseleave',function(){
     console.log('leave');
     if(!$cursorBg.classList.contains('remove'))
     {$cursorBg.classList.remove('active')}
     if(!$progress.classList.contains('remove')){
     $progress.classList.remove('active')}
     if(!$main.classList.contains('remove')){
          $main.classList.remove('active')
     }
})
