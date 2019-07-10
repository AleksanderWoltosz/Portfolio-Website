// $('button.go-back').on('click', function(e){
//     $('.body,html').animate({
//         scrollTop: 0
//     }, 1000)
// })

// $('.btnScroll').on('click', function() {
//     $('body,html').animate({
//         scrollTop: $('#about-me').offset().top
//     },800)
// })

//scrolling function
const smoothScroll = ()=>{
    $('button.go-back').on('click', function(e){
        $('.body,html').animate({
            scrollTop: 0
        }, 1000)
    })
    
    $('.btnScroll').on('click', function() {
        $('body,html').animate({
            scrollTop: $('#about-me').offset().top
        },800)
    })
}


// burger animation and slide-in menu animation
    const navShow = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
    
}

const app = function(){
    navShow();
    smoothScroll();
}

app();