let menu = document.querySelector("#menubars")
let navbar = document.querySelector(".navbar")
let search = document.querySelector("#search-icon")
let section = document.querySelectorAll("section")
let navLink = document.querySelectorAll("header .navbar a")
let suggest_item = document.querySelector(".suggest_today_item")
let suggest_lisst = document.querySelector(".list_suggest_today")
let btn_oder_now = document.querySelectorAll(".home-slider .btn")



/* btn_oder_now.onclick = ()=>{
    console.log('123456')
    let a = document.querySelector(".content h3").textContent;
    console.log(a)
} */
let name_food ='';
btn_oder_now.forEach(e=>{
    e.onclick = ()=>{
        name_food = document.querySelector(".content h3").textContent;
    }
  
})
console.log(name_food);


menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle("active")

}
window.onscroll = () => {
    /* menu.classList.remove('fa-xmark')
    navbar.classList.remove("active") */
    section.forEach(sec=>
        {
            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offset = sec.offsetTop-150;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height )
            {
                navLink.forEach(navLinks=>
                    {
                        navLinks.classList.remove('active')
                        document.querySelector("header .navbar a[href*="+id+"]").classList.add('active');
                    
                    });
            };
        });

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
/* ---------------------------jquery------------------ */

$(document).ready(function(){
    $('.home-slider .content .btn').click(function(){
        var name_food = $(this).prev().prev().text();
        $('#yourOrder').val(name_food);
    });
})

$(document).ready(function(){
    $('#order .btn').click(function(){
        alert('Oder thành công!');
    });
})

/* -----------loader--------- */
/* function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function FadeOut(){
    setInterval(loader,3000);
}A

window.onload = FadeOut();
 */