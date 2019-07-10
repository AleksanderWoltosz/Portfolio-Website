//importing jump.js which is used in scrolling function
import jump from '../node_modules/jump.js/dist/jump.module.js';
// ./node_modules/jump.js/dist/jump.module.js

//scrolling function
const smoothScroll = ()=>{
    const btns = document.querySelectorAll('.btnScroll');
    const ProjectsBtn = document.querySelector('button.go-back');

    btns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            jump('.about');
        })
    });
    ProjectsBtn.addEventListener('click', ()=>{
        jump('.navbar');
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