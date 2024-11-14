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
