const navToggle = document.querySelector(".toggle");

const navMenu = document.querySelector(".nav-menu");

const headerJs = document.querySelector(".header");

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu-visible")
    if(navMenu.classList.contains("nav-menu-visible")){
        headerJs.classList.toggle("main-header");
    }else{
        headerJs.classList.remove("main-header");
    }
});