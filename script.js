var menu = document.querySelector(".container-menu");
var btn = document.querySelector("#btn-expandir");

btn.addEventListener("click", function(){
    menu.classList.toggle("expandir")
});

function toggleMenu() {
    const menuLateral = document.getElementById('menuLateral');
    const homePage = document.getElementById('homePage');
    if (menuLateral && homePage) {
        menuLateral.classList.toggle('expandir');
        homePage.classList.toggle('expandir');
    } else {
        console.error('Elementos não encontrados');
    }
}

document.getElementById('btn-bounce').addEventListener('click', function() {
    this.classList.add('bounce');
    setTimeout(() => {
        this.classList.remove('bounce');
    }, 500);
});


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}