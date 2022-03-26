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
let name_food = '';
btn_oder_now.forEach(e => {
    e.onclick = () => {
        name_food = document.querySelector(".content h3").textContent;
    }

})


menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle("active")

}
window.onscroll = () => {
    /* menu.classList.remove('fa-xmark')
    navbar.classList.remove("active") */
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(navLinks => {
                navLinks.classList.remove('active')
                document.querySelector("header .navbar a[href*=" + id + "]").classList.add('active');

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
var spice_food;
$(document).ready(function () {

    $('.home-slider .content .btn').click(function () {
        //e.preventDefault();
        var name_food = $(this).prev().prev().text();
        spice_food = $(this).next().text();
        $('#yourOrder').text(name_food);
        $('#howMuch').text(spice_food);
     

        // console.log(getParameter('name'))
        /* $("#home .content a").attr('href', '#order?name=\'spicy noodles\'&?price=\'20.5') */
    });
    let paramsUrl = window.location.search
    let params = new URLSearchParams(paramsUrl);
    if(params.get('name')||params.get('price'))
    {
        $('html, body').animate(
        {
            scrollTop: $("#order").offset().top
        })
    }
    document.querySelector("#yourOrder").innerText = params.get('name');
    document.querySelector("#howMuch").innerText = params.get('price');
    var addtionalFoot_confirm = document.querySelector('#amount select');
    var howMuch_new = 1;
    addtionalFoot_confirm.onchange = function (e) {/* 
       var howMuch_confirm = $('#howMuch').text(); */
        howMuch_new =  params.get('price') * (e.target.value);
        /*         console.log(howMuch_new) */
        document.querySelector("#howMuch").innerText = howMuch_new;
    }
})
/* function getParameter(parameterName) {
    let parameter = new URLSearchParams(window.location.search);
    console.log(parameter)
    return parameter.get(parameterName)
} */

/*
        let params = new URLSearchParams(paramsUrl);
        
 */

$(document).ready(function () {




    /*  var evvv = document.getElementById("#amount")
     var addtionalFoot_confirm = e.options[e.selectedIndex].text;
     */

    $('#order .btn').click(function () {
        /* 
         */
        var addtionalFoot_confirm = document.getElementById('amountvalue').value
        var name_food_confirm = $('#yourName').val();
        var your_number_confirm = $('#yourNumber').val();
        var your_order_confirm = $('#yourOrder').text();
        var your_Adress_confirm = $('#yourAddress').val();
        var howMuch_confirm = $('#howMuch').text();
        var test_confirm = document.querySelectorAll('.invalid');
        if (test_confirm.length == 0) {
            if (name_food_confirm != '' && your_number_confirm != '') {
                $('.name_yourname').text(name_food_confirm);
                $('.name_phoneNumber').text(your_number_confirm);
                $('.name_yourOder').text(your_order_confirm);
                $('.name_amount').text(addtionalFoot_confirm);
                $('.name_howMuch').text(howMuch_confirm);
                $('.name_adress').text(your_Adress_confirm);
                $('.modal').addClass("display_block");
            }
            else{
                $('#error').addClass("display_block");
            }
        }
        else {
            $('#error').addClass("display_block");

        }




        /*  */
        /*  if (name_food_confirm !=''&&Number().isInteger(your_number_confirm))
         {
         else
         {
             alert('dsfđ');
         } */

        /*  */
        /*  var testmessage = document.querySelectorAll('.form-message')
        
         var result_testmessage = testmessage.every(function() {
             return e.innerText!=null;
         });
         console.log(result_testmessage);
         if(!result_testmessage)
         { 
             
         }
     */
    });
})
$(document).ready(function () {
    $('.modal-content .fa-xmark').click(function () {
        $('.modal').removeClass("display_block");
    })
    $('.error_container .btn_confirm').click(function () {
        $('#error').removeClass("display_block");
    })
})
var indext_of = 0;
$(document).ready(function () {
    $('#menu .btn').click(function () {
        indext_of = indext_of + 1;
        $('#amount_product_cart').text(indext_of);
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


function Validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            if (inputElement) {
                inputElement.onblur = function () {
                    //value :inputelement.values
                    //test func:rule.test
                    var errorMessage = rule.test(inputElement.value);
                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.classList.add('invalid')
                    }
                    else {
                        errorElement.innerText = '';
                        inputElement.classList.remove('invalid')
                    }
                }
                inputElement.oninput = function () {
                    /* 
                      */
                    errorElement.innerText = '';
                    inputElement.classList.remove('invalid')
                }
            }
        })
    }
}
//định nghĩa ruler
//khi có lỗi trả ra messae lỗi
//khi hợp lệ => không trả cái gì cra
Validator.isrequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'

        }
    }
}
Validator.isNumber = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
            return regex.test(value) ? undefined : 'vui lòng nhập số'

        }
    }
}


Validator({
    form: '#form_orderNow',
    rules: [
        Validator.isrequired("#yourName"),
        Validator.isNumber("#yourNumber"),
        Validator.isrequired("#yourAddress"),
    ]
})


/* --------------cart ------------ */
const btn_cart= document.querySelectorAll('#menu .btn')

btn_cart.forEach(function(btn,index) {

    btn.addEventListener("click",function(event){
        var btn_item=event.target;
        var product = btn_item.parentElement;
        var product_img = product.querySelector('img').src;
        var product_name =product.querySelector('h3').innerText;
        var product_price =product.querySelector('.price').innerText;
        //
        addCart(product_price,product_name,product_img)
    })

})
function addCart(product_price,product_name,product_img)
{
    var addtr= document.createElement('tr')
    var cart_item = document.querySelectorAll('tbody tr')
    for(var i=0; i<cart_item.length; i++){
        var product_name_inCart = document.querySelectorAll('.Name_product_itemInCart')
       if(product_name_inCart[i].innerText == product_name )
       {
           alert('product have your cart !');
           return;
       }
    }
    
    var trcontent = '<tr><td style="display: flex ; align-items: center"><img style="width: 70px;"src="'+product_img+'" alt=""><span class="Name_product_itemInCart">'+product_name+'</span></td><td><p><span class="price_product_itemInCart">'+product_price+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="btn_delete_itemInCart">delete</span></td></tr>'
    addtr.innerHTML =trcontent
    var cartTable=document.querySelector('tbody')
    //console.log(cartTable);
    //append() thêm biến addtr vào tbody
    cartTable.append(addtr)
    carttotal();
    deleteCart();
}

//-------total
function carttotal() {
    var cart_item = document.querySelectorAll('tbody tr')
    var total_sum =0;
    for(var i=0; i<cart_item.length; i++) {
        var inputvalue = cart_item[i].querySelector('input').value;
        var productPrice = cart_item[i].querySelector('.price_product_itemInCart').innerText;
       total_i = inputvalue*productPrice;
       total_sum = total_sum + total_i;
        
    }

    var car_total_sum =document.querySelector('.price_total span');
    car_total_sum.innerText=total_sum;
    inputchange()
}
//-------delete

function deleteCart(){
    var cart_item = document.querySelectorAll('tbody tr')
    for(var i=0; i<cart_item.length; i++){
        var product_delete_inCart = document.querySelectorAll('.btn_delete_itemInCart')
        product_delete_inCart[i].addEventListener('click', function(event){
            var cart_delete = event.target
            var cart_item_delete = cart_delete.parentElement.parentElement
            cart_item_delete.remove();
            carttotal();
        })
    }
}

function inputchange(){
    var cart_item = document.querySelectorAll('tbody tr')
    for(var i=0; i<cart_item.length; i++){
        var product_input_inCart = cart_item[i].querySelector('input')
        product_input_inCart.addEventListener('change', function(){
            carttotal();
        })
    }
}