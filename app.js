// change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = S(window).scrollTop();
        if(scroll>150) {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
});

// smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();    
});

//navbar mobile version
const mobile = document.querySelector(".menu-toggle");
const mobilelink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

mobilelink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobilelink.classList.remove("active");
    }    
})


// swiper 
var swiper = new Swipper(".mySwiper", 
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPreView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPreView: 2,
            spaceBetween:20,
        },
        768:{
            slidesPreView: 3,
            spaceBetween:40,
        },
        1024:{
            slidesPreView:3,
            spaceBetween:50,
        }
   }
})
