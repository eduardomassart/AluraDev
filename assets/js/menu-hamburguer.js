const botaoMenuHamburguer = document.querySelector(".menu__hamburguer");
const classeAtivadora = "menu__hamburguer-active";
const asideMenu = document.querySelector(".aside__menu");

function ativaAsideMenu (ativa) {
    if (ativa == true){
        asideMenu.style.display = "block";
    } else {
        asideMenu.style.display = "none"
    }
}

botaoMenuHamburguer.addEventListener("click", () => {
    if (botaoMenuHamburguer.classList.contains(classeAtivadora)) {
        botaoMenuHamburguer.classList.remove(classeAtivadora);
        ativaAsideMenu(false);
    } else {
        botaoMenuHamburguer.classList.add(classeAtivadora);
        ativaAsideMenu(true);
    }
});