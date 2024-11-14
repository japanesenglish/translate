
var b = document.querySelectorAll('.start');
var by = []
b.forEach(function(car){
    let bp = car.getBoundingClientRect().top
    by.push(Math.floor(bp) + window.scrollY);
});

var bydis = []
for (let i = 0; i < 26; i++){
    bydis.push(by[i]-by[i-1]);
};
console.log(bydis);

let jumpbtn = []
for (let i = 0; i < 26; i++){
    jumpbtn.push(document.getElementById(i));
};

document.addEventListener('scroll',function(){
    let count = 0
    let after = 1
    let ytop = window.scrollY;
    let ybutt = window.scrollY + window.innerHeight;
    by.forEach(function(car){
        let head = jumpbtn[count];
        if(ybutt > car && head.classList.contains('in') == false){
            head.classList.toggle('in')
            head.style.backgroundColor = '#00000044';
            if (ytop > by[after] && head.classList.contains('out') == false){
                head.classList.toggle('out');
                head.style.backgroundColor = '#00000000';
            }
        } else if (ytop > by[after] && head.classList.contains('out') == false){
            head.classList.toggle('out');
            head.style.backgroundColor = '#00000000';
        } else if (ytop < by[after] && head.classList.contains('out')){
            head.classList.toggle('out');
            head.style.backgroundColor = '#00000044';
        } else if (ybutt < car && head.classList.contains('in')){
            head.classList.toggle('in');
            head.style.backgroundColor = '#00000000'
        }
        count = count + 1; 
        after = after + 1;
    });
    count = 0;
    for (let i = 1; i < 25; i++){
        if(ytop < by[i]){
            i = 99;
        } else {
            count = count + 1;
        }
    };
    let eye = document.getElementById('scrolleye');
    eye.style.top = count * 45 * -1 - 5 + 'px';
});


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
        setTimeout(() => {
            by = []
            b.forEach(function(car){
                bp = car.getBoundingClientRect().top
                by.push(Math.floor(bp) + window.scrollY);
            }); 
        }, 500);
    });
});

let j = document.getElementById('jum');
let pin = document.querySelector('#pin');
document.addEventListener('click', (e) => {
    if(pin.classList.contains('on') == false){
        if(j.classList.contains('jhead') && !e.target.closest('#jum')) {
            j.classList.toggle('jbtn');
            j.classList.toggle('jhead');
        } else if (j.classList.contains('jbtn') && e.target.closest('#jum')){
            j.classList.toggle('jbtn');
            j.classList.toggle('jhead');        
        } else if (e.target.closest('#pin')){
            pin.classList.toggle('on');
            pin.style.backgroundColor = '#00000044';
        }
    } else if (e.target.closest('#pin')){
        pin.classList.toggle('on')
        pin.style.backgroundColor ='#00000000';
        j.classList.toggle('jbtn');
        j.classList.toggle('jhead');        
    }
})        

jumpbtn.forEach(function(car){
    car.addEventListener('click',function(){
        window.scrollTo({
            top: by[car.getAttribute('id')],
            left: 0,
            behavior: "smooth",
        })
        if(pin.classList.contains('on') == false){
            setTimeout(() => {
            j.classList.toggle('jbtn');
            console.log(j)                
            }, 1);
            j.classList.toggle('jhead');
            console.log(j)
        }
    })
})
