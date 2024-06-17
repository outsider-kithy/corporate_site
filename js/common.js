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
