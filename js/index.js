console.log("load");

//셀렉터 찾기
var $cursorBg = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $circle = document.querySelector("#circle");
var $main = document.querySelector("#main");
var $mainContent = $main.querySelector('#main-content');


//커서 움직이기
window.addEventListener("mousemove", onMouseMoveWindow);
function onMouseMoveWindow(e){
     //console.log('move');
     var posX = e.pageX, posY=e.pageY;
     TweenMax.to($cursorBg, 0.1,{css : {top:posY,left:posX}});
     TweenMax.to($progress, 0.2,{css : {top:posY,left:posX}});
 }


// circle - mouse enter
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
});
 // circle - mouse leave
$circle.addEventListener('mouseleave',function(){
     console.log('leave');
     if(!$cursorBg.classList.contains('remove'))
     {$cursorBg.classList.remove('active')}
     if(!$progress.classList.contains('remove')){
     $progress.classList.remove('active')}
     if(!$main.classList.contains('remove')){
          $main.classList.remove('active')
     }
});


var $hyuk = document.querySelector("#hyuk");
var $oh = document.querySelector("#oh");
var $menu = document.querySelector("#menu");

var _isChange = false;
$circle.addEventListener('click',function(e){
     console.log("click circle");
     e.preventDefault();
     if(!_isChange){
          _isChange = true;
          $main.classList.add('click');
          $hyuk.classList.add('hyuk2');
          $oh.classList.add('oh2');
          $menu.classList.add('menu2');
          


     }
     else{
          _isChange = false;
          $main.classList.remove('click');
          $hyuk.classList.remove('hyuk2');
          $oh.classList.remove('oh2');
          $menu.classList.remove('menu2');



     }
})

