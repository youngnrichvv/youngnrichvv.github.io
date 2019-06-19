console.log("load");

var $gallery = document.querySelector('#gallery');
var $back = document.querySelector('.back');
var $backContainer = document.querySelector(".back-container");
var $backItem = document.querySelectorAll(".back-item");

var $cd = document.querySelector('.cd');
var $cdContainer = document.querySelector(".cd-container");
var $cdItem = document.querySelectorAll(".cd-item");

var $card = document.querySelector('.card');
var $cardContainer = document.querySelector(".card-container");
var $viewCard = document.querySelectorAll(".view-card");

var $o = document.querySelector('.o');
var $oContainer = document.querySelector(".o-container");
var $oItem = document.querySelectorAll(".o-item");



var $list =document.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var _$a = [];

var _vWidth= window.innerWidth;
var _vHeigt= window.innerHeight;
var _cardWidth = 560;

var _max = 6;
var _cuId = 0;
var _exId = _cuId;


window.addEventListener('resize', onResize);
function onResize(){
    _vWidth = window.innerWidth;
    _vHeigt = window.innerHeight;
    _cardWidth = 600;
    _oWidth = 700;
    $backContainer.style.width = (_vWidth * _max) + 'px';
    $cdContainer.style.width = (_vWidth * _max) + 'px';
    $cardContainer.style.width = (_cardWidth * _max) + 'px';
    $oContainer.style.width = (_vWidth * _max) + 'px';

    for (var i = 0; i < _max; i++) {
    $backItem[i].style.width = _vWidth + 'px';
    $cdItem[i].style.width = _vWidth + 'px';
    $viewCard[i].style.width = _cardWidth + 'px';
    $oItem[i].style.width = _vWidth + 'px';


    }
    //view-container 의 left의 좌표 변경.
    var left = _vWidth * _cuId * -1;
    var cardleft = _cardWidth * _cuId * -1;

    // $viewItem[i].style.left = left + "px";
    TweenMax.killTweensOf($backContainer);// 해당요소의 TweenMax 애니메이션 정지
    TweenMax.set($backContainer, {css:{left : left}})
    TweenMax.killTweensOf($cdContainer);// 해당요소의 TweenMax 애니메이션 정지
    TweenMax.set($cdContainer, {css:{left : left}})
    TweenMax.killTweensOf($cardContainer);// 해당요소의 TweenMax 애니메이션 정지
    TweenMax.set($cardContainer, {css:{left : cardleft}})
    TweenMax.killTweensOf($oContainer);// 해당요소의 TweenMax 애니메이션 정지
    TweenMax.set($cardContainer, {css:{left : left}})
}
onResize();


$backContainer.style.width = (_vWidth * _max) + 'px';
for(var i = 0; i < _max; i++){
    $backItem[i].style.width = _vWidth + 'px';;
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
}
function onClickListItemEl(e) {
    e.preventDefault();
    var id = _$a.indexOf(e.currentTarget);
    var $listItemParent = e.currentTarget.parentElement;
    //현재 클릭된 요소(a) 의 부모 요소(li)를 찾는다.
    if(!$listItemParent.classList.contains('selected')){
        //부모 요소(li) 가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때(false).
        _cuId = id;
        //현재 클릭된 버튼의 번호를 변경.
        $listItem[_exId].classList.remove("selected");
        //이전에 활성화된 버튼의 클래스(selected)를 삭제
        $listItem[_cuId].classList.add("selected");
        //현재 버튼의 클래스(selected)가 활성화되도록 추가.

        var left = _vWidth * _cuId * -1;
        var cardleft = _cardWidth * _cuId * -1;

        TweenMax.to($backContainer, 1.0, { css: { left: left }, ease: Quad.easeInOut });
        TweenMax.to($cdContainer, 1.0, { css: { left: left }, ease: Quad.easeInOut });
        TweenMax.to($cardContainer, 1.0, { css: { left: cardleft }, ease: Quad.easeInOut });
        TweenMax.to($oContainer, 1.0, { css: { left: left }, ease: Quad.easeInOut });
        _exId = _cuId;

    }
}





////////////////////////////////////////


var $cir1 = document.getElementById("cir1");
var $cir2 = document.getElementById("cir2");
var $cir3 = document.getElementById("cir3");
var $cir4 = document.getElementById("cir4");
var $cir5 = document.getElementById("cir5");
var $cir6 = document.getElementById("cir6");

var $circle = document.querySelectorAll(".circle");



console.log($circle);

$cir1.addEventListener("mouseenter", play1);
function play1() { 
    console.log("over")
    var audio1 = document.getElementById('audio1'); 
    audio1.play(); 
    $cir1.classList.add('circle-active');
    $cd.classList.add('cd-active');
} 
$cir1.addEventListener("mouseleave", pause1);
function pause1() { 
    console.log("out")
    var audio1 = document.getElementById('audio1'); 
    audio1.pause(); 
    $cir1.classList.remove('circle-active');
    $cd.classList.remove('cd-active');
}

$cir2.addEventListener("mouseenter", play2);
function play2() { 
    console.log("over")
    var audio2 = document.getElementById('audio2'); 
    audio2.play(); 
    $cir2.classList.add('circle-active');
    $cd.classList.add('cd-active');
} 
$cir2.addEventListener("mouseleave", pause2);
function pause2() { 
    console.log("out")
    var audio2 = document.getElementById('audio2'); 
    audio2.pause(); 
    $cir2.classList.remove('circle-active');
    $cd.classList.remove('cd-active');
}

$cir3.addEventListener("mouseenter", play3);
function play3() { 
    console.log("over")
    var audio3 = document.getElementById('audio3'); 
    audio3.play(); 
    $cir3.classList.add('circle-active');
    $cd.classList.add('cd-active');
} 
$cir3.addEventListener("mouseleave", pause3);
function pause3() { 
    console.log("out")
    var audio3 = document.getElementById('audio3'); 
    audio3.pause(); 
    $cir3.classList.remove('circle-active');
    $cd.classList.remove('cd-active');
}

$cir4.addEventListener("mouseenter", play4);
function play4() { 
    console.log("over")
    var audio4 = document.getElementById('audio4'); 
    audio4.play(); 
    $cir4.classList.add('circle-active');
    $cd.classList.add('cd-active');
} 
$cir4.addEventListener("mouseleave", pause4);
function pause4() { 
    console.log("out")
    var audio4 = document.getElementById('audio4'); 
    audio4.pause(); 
    $cir4.classList.remove('circle-active');
    $cd.classList.remove('cd-active');
}

$cir5.addEventListener("mouseenter", play5);
function play5() { 
    console.log("over")
    var audio5 = document.getElementById('audio5'); 
    audio5.play(); 
    $cir5.classList.add('circle-active');
    $cd.classList.add('cd-active');
} 
$cir5.addEventListener("mouseleave", pause5);
function pause5() { 
    console.log("out")
    var audio5 = document.getElementById('audio5'); 
    audio5.pause(); 
    $cir5.classList.remove('circle-active');
    $cd.classList.remove('cd-active');
}

$cir6.addEventListener("mouseenter", play6);
function play6() { 
    console.log("over")
    var audio6 = document.getElementById('audio6'); 
    audio6.play(); 
    $cir6.classList.add('circle-active');
    $cd.classList.add('cd-active');
} 
$cir6.addEventListener("mouseleave", pause6);
function pause6() { 
    console.log("out")
    var audio6 = document.getElementById('audio6'); 
    audio6.pause(); 
    $cir6.classList.remove('circle-active');
    $cd.classList.remove('cd-active');
}






