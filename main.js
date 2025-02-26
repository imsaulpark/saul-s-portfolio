'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }

});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    console.log(event.target.dataset.link);
    scrollIntoView(link);
})


// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
})


// Make home transparent as the windows scroll down
const home = document.querySelector('.home__container');
const homeHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    home.style.opacity = homeHeight/window.scrollY;
});

// Show "arrow up" button when scrolling down
const arrowUP = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2) {
        arrowUP.classList.add('visible');
    } else {
        arrowUP.classList.remove('visible');
    }
})

// Handle click on the "arrow up" button 
arrowUP.addEventListener('click', ()=>{
    scrollIntoView('#home');
})

// Show projects by the categories as the button clicked
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    projectContainer.classList.add('anim-out');

    setTimeout(()=>{

        projects.forEach((project) =>{
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
    

        projectContainer.classList.remove('anim-out');

    }, 300);
})


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
