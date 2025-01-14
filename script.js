//////////////// function expandir menu lateral//////////////////
var menu = document.querySelector(".container-menu");
var btn = document.querySelector("#btn-expandir");

btn.addEventListener("click", function(){
    menu.classList.toggle("expandir")
});

//scroll menu lateral
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/////////////// function expandir conteudo tela para direita quando menu aberto //////////////////
//function toggleMenu() {
    //const menuLateral = document.getElementById('menuLateral');
    //const homePage = document.getElementById('homePage');
    //const aboutPage = document.getElementById('aboutPage');
    //const experiencePage = document.getElementById('experiencePage');
    //const developmentPage = document.getElementById('developmentPage');
    //if (menuLateral && homePage && aboutPage && experiencePage && developmentPage) {
        //menuLateral.classList.toggle('expandir');
        //homePage.classList.toggle('expandir');
        //aboutPage.classList.toggle('expandir');
        //experiencePage.classList.toggle('expandir');
        //developmentPage.classList.toggle('expandir');
    //} else {
        //console.error('Elementos não encontrados');
    //}
//}

document.getElementById('btn-bounce').addEventListener('click', function() {
    this.classList.add('bounce');
    setTimeout(() => {
        this.classList.remove('bounce');
    }, 500);
});

/////////////// function carrosel //////////////////
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrosel .card');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.carrosel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializando o carrossel
showSlide(currentIndex);
