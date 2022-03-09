let menu = document.querySelector("#menubars")
let navbar = document.querySelector(".navbar")
let search = document.querySelector("#search-icon")
menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle("active")

}
window.onscroll = () => {
    menu.classList.remove('fa-xmark')
    navbar.classList.remove("active")

}
search.onclick = () => {
    document.querySelector("#search-form").classList.toggle("active")
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active")
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});



/* -----------loader--------- */
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function FadeOut(){
    setInterval(loader,3000);
}

window.onload = FadeOut();