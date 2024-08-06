function criaProjeto(index, projeto) {
    // *************** CAMADA 1 *********************
    const liProjeto = document.createElement('li');
    liProjeto.classList.add('projeto', `p-${index}`);

    // *************** CAMADA 2 *********************
    const divSecaoCodigo = document.createElement('div');
    divSecaoCodigo.classList.add('secao__codigo');
    divSecaoCodigo.style.backgroundColor = projeto.cor;

    const divProjetoInfo = document.createElement('div');
    divProjetoInfo.classList.add('projeto__info');

    const divProjetoActions = document.createElement('div');
    divProjetoActions.classList.add('projeto__actions');


    // *************** CAMADA 3 *********************
    const divCodigo = document.createElement('div');
    divCodigo.classList.add('codigo');

    const h3ProjetoTitulo = document.createElement('h3');
    h3ProjetoTitulo.classList.add('projeto__titulo');
    h3ProjetoTitulo.textContent = projeto.titulo;

    const pProjetoDescricao = document.createElement('p');
    pProjetoDescricao.classList.add('projeto__descricao');
    pProjetoDescricao.textContent = projeto.descricao;

    const divBtnProjetoActions = document.createElement('div');
    divBtnProjetoActions.classList.add('projeto__actions-buttons');

    const divAutor = document.createElement('div');
    divAutor.classList.add('autor');

    // *************** CAMADA 4 ********************* 

    const divCirculos = document.createElement('div');
    divCirculos.classList.add('circulos');
    divCirculos.innerHTML = `
    <div class="circulo circulo-vermelho"></div>
    <div class="circulo circulo-amarelo"></div>
    <div class="circulo circulo-verde"></div>
    `;

    const divCodeWrapper = document.createElement('div');
    divCodeWrapper.classList.add('code-wrapper');

    const btnComent = document.createElement('button');
    btnComent.classList.add('action-button', 'button-coment');

    const btnLike = document.createElement('button');
    btnLike.classList.add('action-button', 'button-like');

    const btnExport = document.createElement('button');
    btnExport.classList.add('action-button', 'button-export');

    const imgAutor = document.createElement('img');
    imgAutor.classList.add('autor__foto');
    imgAutor.setAttribute('alt', 'foto do autor logado');
    imgAutor.setAttribute('src', '../img/foto-usuario.jpeg');

    const pAutorNome = document.createElement('p');
    pAutorNome.classList.add('autor__nome');
    pAutorNome.textContent = "@Harry";

    // *************** CAMADA 5 *********************

    const pre = document.createElement('pre');

    const divComentImg = document.createElement('div');
    divComentImg.classList.add('coment__img');
    const pComentContador = document.createElement('p');
    pComentContador.classList.add('contador', 'contador-coment');
    pComentContador.textContent = "0";

    const divLikeImg = document.createElement('div');
    divLikeImg.classList.add('like__img');
    const pLikeContador = document.createElement('p');
    pLikeContador.classList.add('contador', 'contador-like');
    pLikeContador.textContent = "0";

    // *************** CAMADA 6 *********************

    const code = document.createElement('code');
    code.classList.add('coding__area');
    code.setAttribute('aria-label', 'Editor de Código');
    code.textContent = projeto.codigo;

    // ***** APADRINHAMENTO *****

    // CAM 6 -> 5
    pre.append(code);

    // CAM 5 -> 4
    divCodeWrapper.append(pre);
    btnComent.append(divComentImg, pComentContador);
    btnLike.append(divLikeImg, pLikeContador);

    // CAM 4 -> 3 
    divCodigo.append(divCirculos, divCodeWrapper);
    divBtnProjetoActions.append(btnComent, btnLike, btnExport);
    divAutor.append(imgAutor, pAutorNome);

    // CAM 3 -> 2 
    divSecaoCodigo.append(divCodigo);
    divProjetoInfo.append(h3ProjetoTitulo, pProjetoDescricao);
    divProjetoActions.append(divBtnProjetoActions, divAutor);

    // CAM 2 -> 1
    liProjeto.append(divSecaoCodigo, divProjetoInfo, divProjetoActions);

    return liProjeto;
}

function Highlight (areaDoCodigo, linguagem) {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class="coding__area hljs language-${linguagem}" contenteditable="false" aria-label="Editor de Código"></code>`
    areaDoCodigo.querySelector("code").textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector("code"));
}

function atualizaListaProjetosComunidade(projetos) {
    projetos.forEach((projeto) => {
        const index = projetos.indexOf(projeto) + 1;
        const ilProjeto = criaProjeto(index, projeto);

        const areaDoCodigo = ilProjeto.querySelector(`.code-wrapper`)
        Highlight(areaDoCodigo, projeto.linguagem);

        listaComunidade.append(ilProjeto);
    })
}

const projetos = JSON.parse(localStorage.getItem('projetos')) || [];
const listaComunidade = document.querySelector('.conteudo__codigo');

atualizaListaProjetosComunidade(projetos);