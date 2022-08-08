const navSlide = () => {
    const burger = document.getElementById('burgerID');
    const mobileNav = document.getElementById('mobileID');
    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav-show');
    });
}
navSlide();

document.getElementById("home").classList.add("navBtnActive");

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() < 1100){
        console.log("Home!");  
        console.log($(window).scrollTop() + $(window).height());
        document.getElementById("home").classList.add("navBtnActive");
        document.getElementById("ourSoftware").classList.remove("navBtnActive");
        document.getElementById("aboutUs").classList.remove("navBtnActive");
        document.getElementById("contacts").classList.remove("navBtnActive");
    }
    else if(($(window).scrollTop() + $(window).height() >= 1100) && ($(window).scrollTop() + $(window).height() <= 3090)){
        console.log("Software!");
        console.log($(window).scrollTop() + $(window).height());
        document.getElementById("home").classList.remove("navBtnActive");
        document.getElementById("ourSoftware").classList.add("navBtnActive");
        document.getElementById("aboutUs").classList.remove("navBtnActive");
        document.getElementById("contacts").classList.remove("navBtnActive");
    }
    else if(($(window).scrollTop() + $(window).height() >= 3100) && ($(window).scrollTop() + $(window).height() <= 4000)){
        console.log("About Us!");
        console.log($(window).scrollTop() + $(window).height());
        document.getElementById("home").classList.remove("navBtnActive");
        document.getElementById("ourSoftware").classList.remove("navBtnActive");
        document.getElementById("aboutUs").classList.add("navBtnActive");
        document.getElementById("contacts").classList.remove("navBtnActive");
    }
    else {
        console.log("Contact!");
        console.log($(window).scrollTop() + $(window).height());
        document.getElementById("home").classList.remove("navBtnActive");
        document.getElementById("ourSoftware").classList.remove("navBtnActive");
        document.getElementById("aboutUs").classList.remove("navBtnActive");
        document.getElementById("contacts").classList.add("navBtnActive");
    }
 });