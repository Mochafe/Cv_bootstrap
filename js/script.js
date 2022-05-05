function carouselTo(slide) {
    //console.log(`Slide ${slide} active`);
    carouselElement.setAttribute("class","carousel carousel-dark h-90");
    carousel.to(`${slide}`);
    carouselElement.setAttribute("class","carousel slide carousel-dark h-90");
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

