window.addEventListener('DOMContentLoaded', () => {

    const $btn = document.querySelector('.hamburger');
    const $nav = document.querySelector('.nav');

    $btn.addEventListener('click', () => {
        $nav.classList.toggle('active');
        
        ($nav.classList.contains('active'))? $btn.textContent = 'close' : $btn.textContent = 'menu'
    })


    window.addEventListener('resize', () => {
        
        if(window.innerWidth >= 800){
            $nav.classList.remove('active');
            ($nav.classList.contains('active'))? $btn.textContent = 'close' : $btn.textContent = 'menu'
        }

    })

})