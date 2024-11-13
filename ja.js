let a = document.querySelectorAll('tr');
a.forEach(function(a99){
    a99.addEventListener('click',function(){
        let a1 = a99.nextElementSibling.querySelector('.detail');
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

let b = document.querySelectorAll('.start');
let by = []
b.forEach(function(b99){
    let bp = b99.getBoundingClientRect().top
    by.push(Math.floor(bp));
})
document.addEventListener('scroll',function(){
let count = 0
let before = -1
by.forEach(function(by99){
            let y = window.scrollY + window.innerHeight;
            console.log(y,by99,count);
            let head = document.getElementById(count);
            let beforehead = document.getElementById(before);
            if(y > by99 && head.classList.contains('open') == false){
                head.classList.toggle('open')
                head.style.width = head.scrollWidth + 10 + 'px';
                head.style.backgroundColor = '#00000044'
                beforehead.style.width = '';
                beforehead.style.right = 0 + 'px';
                console.log(count)
            }
            count = count + 1; 
            before = before + 1;
    })

})
