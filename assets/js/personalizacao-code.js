const secaoCodigo = document.querySelector(".secao__codigo");
const inputColor = document.querySelector(".input__projeto-highlight-color");

botaoSyntax.addEventListener("click", (event) => {
    // event.preventDefault();
    const cor = inputColor.value;
    secaoCodigo.style.background = cor;
});