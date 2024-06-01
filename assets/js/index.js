const linguagem = document.querySelector(".input__projeto-linguagem");
const areaDoCodigo = document.querySelector(".code-wrapper");
const botao = document.querySelector(".syntax-highlight");

function aplicaHighlight () {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class="coding__area hljs language-${linguagem.value}" contenteditable="true" aria-label="Editor de Código"></code>`
    areaDoCodigo.querySelector("code").textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector("code"));
}

botao.addEventListener("click", () => {
    aplicaHighlight();
})