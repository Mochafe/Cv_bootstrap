function carouselTo(slide) {
    //console.log(`Slide ${slide} active`);
    carousel.to(`${slide}`);
}

//Navbar buttons
let nav_button = document.getElementsByClassName("nav-link");

//carousel
let carouselElement = document.getElementById("carousel1");
let carousel =  new bootstrap.Carousel(carouselElement, {
    interval: false
});

//addEventListener for buttons in navBar
for(let i = 0; i < nav_button.length; i++){
    nav_button[i].addEventListener("click", () => {
        carouselTo(i);
    }, {passive: true});
}

