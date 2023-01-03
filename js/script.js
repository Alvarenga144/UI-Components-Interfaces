// TODO JAVASCRIPT CODE OF COMPONENTS HERE ==>

// Header Main Navbar events
window.addEventListener("scroll", function () {  
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle("stickySide", window.scrollY > 0)
})
