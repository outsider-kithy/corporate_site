window.addEventListener("DOMContentLoaded", function(){
    //トグルボタン
    var toggle = document.getElementById('toggle');
    var gnav = document.getElementById('gnav');

    toggle.onclick = function(){
        this.classList.toggle('open');
        gnav.classList.toggle('open');
    }
});
