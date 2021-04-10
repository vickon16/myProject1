

$(document).ready(function(){

    // $nav = $(".nav");
    // $toggleCollapse = $(".toggle-collapse");

    // // Click event on toggle menu

    // $toggleCollapse.click(function(){
    //     $nav.toggleClass("collapse");
    // })

    // to create a toggle

    


    //owl carousel for blog 
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:false,
        // navText: [$(".owl-navigation .owl-nav-prev"),
        // $(".owl-navigation .owl-nav-next")],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1000:{
                items:1,
            },
            3400:{
                items:1,
                loop:true,
            }

        }

    });

    // click to scroll top
    $(".move-up span").click(() => {
        $("html, body").animate({scrollTop:0}, 1000);
    })


    // for dropdown country
    $("#country_selector").countrySelect({
        defaultCountry:"us",
        defaultStyling:"inside",
        preferredCountries: ['us','gb','ch','ca','do'],
        responsiveDropdown:true
        // excludeCountries: ["ch"],
        // onlyCountries: ["us", "gb", "ca"]
    });

    $("#country_selector_1").countrySelect({
        defaultCountry:"us",
        defaultStyling:"inside",
        preferredCountries: ['us','gb','ch','ca','do'],
        responsiveDropdown:true
        // excludeCountries: ["ch"],
        // onlyCountries: ["us", "gb", "ca"]
    });



    // // initializing Animation on Scroll
    AOS.init();

    // querySelector for hamburger menu icon for nav bar
    $hamburgerMenu = $(".hamburger-menu");
    $container = $(".container");

    $hamburgerMenu.click(function(){
        $container.toggleClass("change");
        
    })


    // another method below

    // querySelector for hamburger menu icon for nav bar
    // document.querySelector(".hamburger-menu").addEventListener("click", ()=> {
    //     document.querySelector(".container").classList.toggle("change");
    // })



    // javascript for navbar-new-container accordion

    var acc = document.getElementsByClassName("toggle-menu");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(){
            var activePanel = this.classList.toggle("active");
            
            if(activePanel) {
                this.style.color = "rgb(25,202,153)";
            } else {
                this.style.color = "black"
            }
            var panel = this.firstElementChild;
            if( panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // or another method

    // var toggleMenu = document.querySelectorAll(".toggle-menu");


    // Array.from(toggleMenu).forEach((item) => {
    //     item.addEventListener("click", function(){
    //         $container.toggleClass("toggle-list");
    //         var subList = document.querySelector(".sub-list");
    //         if (subList.style.display === "block") {
    //                         subList.style.display = "none";
    //                          } else {
    //                             subList.style.display = "block"
    //                         }
    //     })
    // })



    // javascript for marketing section toggle buttons

    var marketing = document.getElementsByClassName("toggle-marketing");

    for (var i = 0; i < marketing.length; i++) {
        marketing[i].addEventListener("click", function(){
            this.classList.toggle("activate");
            
            var marketingNewItems = this.nextElementSibling;
            if( marketingNewItems.style.maxHeight) {
                marketingNewItems.style.maxHeight = null;
            } else {
                marketingNewItems.style.maxHeight = marketingNewItems.scrollHeight + "px";
            }
        });
    }

    

})





