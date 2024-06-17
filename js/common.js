//htmlの内容が全て読み込まれたら実行
window.addEventListener("DOMContentLoaded", function(){
    //トグルボタン
    let toggle = document.getElementById('toggle');
    let gnav = document.getElementById('gnav');

    //トグルボタンがクリックされたら実行
    toggle.onclick = function(){
        this.classList.toggle('open');
        gnav.classList.toggle('open');
    }

    //スライダー
    $('.slider').slick({
        autoplay:true,
        infinite:true,
        fade:true,
        autoplayspeed:1600,
        speed:1000,
        dots:true,
        arrows:false
    });

    //スクロールアニメーション
    let targets = document.querySelectorAll('.scrollIn');
    let offset = 100;

    window.addEventListener('scroll',function(){
        let scroll = window.scrollY;
        let height = window.innerHeight;

        for(let target of targets){
            let pos = target.getBoundingClientRect().top+scroll;
            if(scroll > pos - height + offset){
                target.classList.add('scrollOff');
            }
        }
    });
});

 //トップへ戻るボタン
 let totop = document.getElementById("totop");
 window.addEventListener("scroll", function () {
     if (window.scrollY > 500) {
     totop.classList.add("show");
     }
 });
 totop.addEventListener("click", function () {
     window.scrollTo({
        top: 0,
        behavior: "smooth",
     });
 });