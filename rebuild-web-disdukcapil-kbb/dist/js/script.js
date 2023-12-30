// navbar fixed
window.onscroll = function () {
    const nav = document.querySelector('nav')
    const fixedNav = nav.offsetTop

    if(window.scrollY > fixedNav) {
        nav.classList.add('navbar-fixed')
    } else {
        nav.classList.remove('navbar-fixed')
    }
}

// hamburger click
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

const a = document.querySelectorAll('a')
a.forEach(link => {
    link.addEventListener('click', function() {
        console.log(`${link} ok!`);
    })
});
