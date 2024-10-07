

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// scroll section active link

const sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+ ']').classList.add('active');
            });
        };

    });

    // sticky navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle icon and navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

//// Initialize ScrollReveal with default settings
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.home-content, .heading', { 
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { 
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content h1, .about-img', { 
        origin: 'left',
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content p, .about-content', { 
        origin: 'right',
        distance: '80px',
        duration: 2000,
        delay: 200
    });
});

// typed js

const typed = new Typed('.multiple-text',{
    strings:['FullStack Developer','Programmer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});