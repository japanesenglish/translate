//詳細オープンアコーディオン
let a = document.querySelectorAll('tr');
let z = 1;
a.forEach(function(car){
    car.addEventListener('click',function(){
        let a1 = car.nextElementSibling.querySelector('.detail');
        if(a1 !== null){
            a1.classList.toggle('open');
            if(a1.classList.contains('open')){
                a1.style.height = a1.scrollHeight + 'px';
                a1.style.zIndex = z;
                z = z + 1;
                console.log(z);
                setTimeout(() => {
                    a1.style.height = 'auto';
                }, 500);
            } else {
                a1.style.height = a1.scrollHeight + 'px';
                setTimeout(() => {
                    a1.style.height = '';
                }, 1);
            };
        };
    });
});

//検索ジャンプのために全単語行にクラス付け
let words = document.querySelectorAll('td:nth-of-type(1)')
var i = -1;
words.forEach(function(car){
    if(car.classList.contains('no') == false){
        var text = car.textContent;
        let apo = text.indexOf("'");
        let hai = text.indexOf("-");
        if(apo >= 0){
            text = text.slice(0,apo) + text.slice(apo+1);
        }
        if(hai >= 0){
            text = text.slice(0,hai) + text.slice(hai+1);
        }
        text = text.toLowerCase();
        for (let i = 1; i < 99; i++){
            if(textlong == text.slice(0,i)){
                i = 99;
            } else {
                var textlong = text.slice(0,i);
                car.classList.toggle(textlong);                
            }
        }
    } else {
        words[i].classList.toggle('xxx');
    }
    i= i + 1;
})

//検索ジャンプ
let sbox = document.querySelector('input');
sbox.addEventListener('keyup',function(){
    let cla = '.' + sbox.value.toLowerCase();
    let ele = document.querySelector(cla);
    let go = Math.floor(ele.getBoundingClientRect().top) + window.scrollY;
    window.scrollTo({
        top: go,
        left: 0,
        behavior: "smooth",
    });
});

//詳細類似表現ジャンプ
let jump = document.querySelectorAll('span');
jump.forEach(function(car){
    car.addEventListener('click',function(){
        var cla = "." + car.textContent;
        var ele = document.querySelector(cla);
        var go = Math.floor(ele.getBoundingClientRect().top) + window.scrollY;
        window.scrollTo({
            top: go,
            left: 0,
            behavior: "smooth"
        });
    });
});
