
var b = document.querySelectorAll('.start');
var by = []
b.forEach(function(car){
    var bp = car.getBoundingClientRect().top
    by.push(Math.floor(bp) + window.scrollY);
});

let jumpbtn = []
for (let i = 0; i < 26; i++){
    jumpbtn.push(document.getElementById(i));
};

document.addEventListener('scroll',function(){
    let count = 0
    let after = 1
    by.forEach(function(car){
        let ytop = window.scrollY;
        let ybutt = window.scrollY + window.innerHeight;
        let head = jumpbtn[count];
        if(ybutt > car && head.classList.contains('in') == false){
            head.classList.toggle('in')
            head.style.width = 25 + 'px';
            head.style.backgroundColor = '#00000044';
            if (ytop > by[after] && head.classList.contains('out') == false){
                head.classList.toggle('out');
                head.style.width = 15 + 'px';
                head.style.backgroundColor = '#00000000';
            }
        } else if (ytop > by[after] && head.classList.contains('out') == false){
            head.classList.toggle('out');
            head.style.width = 15 + 'px';
            head.style.backgroundColor = '#00000000';
        } else if (ytop < by[after] && head.classList.contains('out')){
            head.classList.toggle('out');
            head.style.width = 25 + 'px';
            head.style.backgroundColor = '#00000044';
        } else if (ybutt < car && head.classList.contains('in')){
            head.classList.toggle('in');
            head.style.width = 15 + 'px';
            head.style.backgroundColor = '#00000000'
        }
        count = count + 1; 
        after = after + 1;
    });
});

jumpbtn.forEach(function(car){
    car.addEventListener('click',function(){
        window.scrollTo({
            top: by[car.getAttribute('id')],
            left: 0,
            behavior: "smooth",
        })
    })
})

        console.log(by)

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
            console.log(by)           
        }, 500);
    });
});

