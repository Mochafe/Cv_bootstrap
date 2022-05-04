function carouselTo(slide) {
    //console.log(`Slide ${slide} active`);
    carousel.to(`${slide}`);
}

//Navbar buttons
let nav_button = document.getElementsByClassName("nav-link");
//carousel buttons Prev/Next
let prev_btn = document.querySelector(".carousel-control-prev");
let next_btn = document.querySelector(".carousel-control-next");
//carousel
let carouselElement = document.getElementById("carousel");
let carousel =  new bootstrap.Carousel(carouselElement, {
    interval: false
});



//addEventListener for buttons in navBar
for(let i = 0; i < nav_button.length; i++){
    nav_button[i].addEventListener("click", () => {
        carouselTo(i);
    }, {passive: true});
}

//addEventListener for Prev/Next in carousel
prev_btn.addEventListener("click", () => {
    carousel.prev();
}, {passive: true});

next_btn.addEventListener("click", () => {
    carousel.next();
}, {passive: true});