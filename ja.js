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
