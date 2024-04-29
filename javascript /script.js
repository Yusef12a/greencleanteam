$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Treppen ", "Garten", "Haus", "Büro", "Paraxis"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Funktion zum Schließen aller Popup-Fenster
    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(function (popup) {
            popup.style.display = 'none';
        });
        document.body.style.overflow = ''; // Erlaube das Scrollen, wenn alle Popups geschlossen sind
    }

    // JavaScript für das "Web Design" Popup
    document.querySelector('.card:nth-of-type(1) .box').addEventListener('click', function () {
        closeAllPopups(); // Zuerst alle anderen Popups schließen
        document.getElementById('web-design-popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hinzufügen, um das Scrollen zu verhindern
    });

    document.querySelector('#web-design-popup .close').addEventListener('click', function () {
        document.getElementById('web-design-popup').style.display = 'none';
        document.body.style.overflow = ''; // Entfernen, um das Scrollen zu erlauben
    });

    // JavaScript für das "Advertising" Popup
    document.querySelector('.card:nth-of-type(2) .box').addEventListener('click', function () {
        closeAllPopups(); // Zuerst alle anderen Popups schließen
        document.getElementById('buero-popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hinzufügen, um das Scrollen zu verhindern
    });

    document.querySelector('#buero-popup .close').addEventListener('click', function () {
        document.getElementById('buero-popup').style.display = 'none';
        document.body.style.overflow = ''; // Entfernen, um das Scrollen zu erlauben
    });

    document.querySelector('.card:nth-of-type(3) .box').addEventListener('click', function () {
        closeAllPopups(); // Zuerst alle anderen Popups schließen
        document.getElementById('unterhalt-popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hinzufügen, um das Scrollen zu verhindern
    });

    document.querySelector('#unterhalt-popup .close').addEventListener('click', function () {
        document.getElementById('unterhalt-popup').style.display = 'none';
        document.body.style.overflow = ''; // Entfernen, um das Scrollen zu erlauben
    });

    document.querySelector('.card:nth-of-type(4) .box').addEventListener('click', function () {
        closeAllPopups(); // Zuerst alle anderen Popups schließen
        document.getElementById('hotel-popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hinzufügen, um das Scrollen zu verhindern
    });

    document.querySelector('#hotel-popup .close').addEventListener('click', function () {
        document.getElementById('hotel-popup').style.display = 'none';
        document.body.style.overflow = ''; // Entfernen, um das Scrollen zu erlauben
    });



    document.querySelector('.card:nth-of-type(5) .box').addEventListener('click', function () {
        closeAllPopups(); // Zuerst alle anderen Popups schließen
        document.getElementById('schul-popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hinzufügen, um das Scrollen zu verhindern
    });

    document.querySelector('#schul-popup').addEventListener('click', function () {
        document.getElementById('schul-popup').style.display = 'none';
        document.body.style.overflow = ''; // Entfernen, um das Scrollen zu erlauben
    });



    document.querySelector('.card:nth-of-type(6) .box').addEventListener('click', function () {
        closeAllPopups(); // Zuerst alle anderen Popups schließen
        document.getElementById('treppen-popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hinzufügen, um das Scrollen zu verhindern
    });

    document.querySelector('#treppen-popup').addEventListener('click', function () {
        document.getElementById('treppen-popup').style.display = 'none';
        document.body.style.overflow = ''; // Entfernen, um das Scrollen zu erlauben
    });

});