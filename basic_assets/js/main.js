/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close'),
      start = document.getElementById('start'),
      products = document.getElementById('products'),
      services = document.getElementById('services'),
      team = document.getElementById('team'),
      company = document.getElementById('company'),
      testimonials = document.getElementById('testimonials'),
      contact = document.getElementById('contact')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
        main.classList.add('show-menu-border')
        headerToggle.classList.remove('header-toggle-color')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
        main.classList.remove('show-menu-border')
        headerToggle.classList.add('header-toggle-color')
    })
}
if(start){
    start.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.add('active-link')
        products.classList.remove('active-link')
        services.classList.remove('active-link')
        team.classList.remove('active-link')
        company.classList.remove('active-link')
        testimonials.classList.remove('active-link')
        contact.classList.remove('active-link')
    })
}
if(products){
    products.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.remove('active-link')
        products.classList.add('active-link')
        services.classList.remove('active-link')
        team.classList.remove('active-link')
        company.classList.remove('active-link')
        testimonials.classList.remove('active-link')
        contact.classList.remove('active-link')
    })
}
if(services){
    services.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.remove('active-link')
        products.classList.remove('active-link')
        services.classList.add('active-link')
        team.classList.remove('active-link')
        company.classList.remove('active-link')
        testimonials.classList.remove('active-link')
        contact.classList.remove('active-link')
    })
}
if(team){
    team.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.remove('active-link')
        products.classList.remove('active-link')
        services.classList.remove('active-link')
        team.classList.add('active-link')
        company.classList.remove('active-link')
        testimonials.classList.remove('active-link')
        contact.classList.remove('active-link')
    })
}
if(company){
    company.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.remove('active-link')
        products.classList.remove('active-link')
        services.classList.remove('active-link')
        team.classList.remove('active-link')
        company.classList.add('active-link')
        testimonials.classList.remove('active-link')
        contact.classList.remove('active-link')
    })
}
if(testimonials){
    testimonials.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.remove('active-link')
        products.classList.remove('active-link')
        services.classList.remove('active-link')
        team.classList.remove('active-link')
        company.classList.remove('active-link')
        testimonials.classList.add('active-link')
        contact.classList.remove('active-link')
    })
}
if(contact){
    contact.addEventListener('click', () =>{
        headerToggle.classList.add('header-toggle-color')
        start.classList.remove('active-link')
        products.classList.remove('active-link')
        services.classList.remove('active-link')
        team.classList.remove('active-link')
        company.classList.remove('active-link')
        testimonials.classList.remove('active-link')
        contact.classList.add('active-link')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const main = document.getElementById('main')
    var screenWidth = window.matchMedia("(max-width: 750px)")
    // When we click on each nav__link, we remove the show-menu class
    if (screenWidth.matches) {
        main.classList.remove('show-menu')
        main.classList.remove('show-menu-border')
    }
    else {
        headerToggle.classList.remove('header-toggle-color') 
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
