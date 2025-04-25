// Show navbar
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav');

}
// remove
const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

// change active color
const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))

// change herder backgroud when scroll down
function scrollHerder(){
    const scrollHerder = document.getElementById('header');
    if(this.scrollY >= 200){
        scrollHerder.classList.add('scroll-header')
    }
    else{
        scrollHerder.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHerder);
