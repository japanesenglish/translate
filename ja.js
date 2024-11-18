
let words = document.querySelectorAll('td:nth-of-type(1)')
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
        let long = text.length;
        for (let i = 1; i < long; i++){
            let textlong = text.slice(0,i);
            car.classList.toggle(textlong);
        }
        car.classList.toggle(text);
    }
})


let a = document.querySelectorAll('tr');
a.forEach(function(car){
    car.addEventListener('click',function(){
        let a1 = car.nextElementSibling.querySelector('.detail');
        if(a1 !== null){
            a1.classList.toggle('.open');
            if(a1.classList.contains('.open')){
                a1.style.height = a1.scrollHeight + 'px';
            } else {
                a1.style.height = '';
            };
        };
    });
});


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

let jump = document.querySelectorAll('span');
jump.forEach(function(car){
    car.addEventListener('click',function(){
        let cla = "." + car.textContent;
        let ele = document.querySelector(cla);
        let go = Math.floor(ele.getBoundingClientRect().top) + window.scrollY;
        window.scrollTo({
            top: go,
            left: 0,
            behavior: "smooth"
        });
    });
});
