const botaoPesquisa = document.querySelector(".botao__pesquisa");
const botaoFechaPesquisa = document.querySelector(".botao__fechar");
const campoBuscaMobile = document.querySelector(".busca__mobile");

botaoPesquisa.addEventListener("click", () => {
    campoBuscaMobile.style.display = "grid";
});

botaoFechaPesquisa.addEventListener("click", () => {
    campoBuscaMobile.style.display = "none";
})