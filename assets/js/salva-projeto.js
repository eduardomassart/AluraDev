function criaProjeto() {
    // *************** CAMADA 1 *********************
    const divProjeto = document.createElement('div');
    divProjeto.classList.add('projeto');

    // *************** CAMADA 2 *********************
    const divSecaoCodigo = document.createElement('div');
    divSecaoCodigo.classList.add('secao__codigo');

    const divProjetoInfo = document.createElement('div');
    divProjetoInfo.classList.add('projeto__info');

    const divProjetoActions = document.createElement('div');
    divProjetoActions.classList.add('projeto__actions');

    
    // *************** CAMADA 3 *********************
    const divCodigo = document.createElement('div');
    divCodigo.classList.add('codigo');
    
    const h3ProjetoTitulo = document.createElement('h3');
    h3ProjetoTitulo.classList.add('projeto__titulo');
    
    const pProjetoDescricao = document.createElement('p');
    pProjetoDescricao.classList.add('projeto__descricao');
    
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
    
    const imgAutor = document.createElement('img');
    imgAutor.classList.add('autor__foto');
    imgAutor.setAttribute('alt', 'foto do autor logado');
    imgAutor.setAttribute('src', '../img/foto-usuario.jpeg');

    const pAutorNome = document.createElement('p');
    pAutorNome.classList.add('autor__nome');

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

    // ***** APADRINHAMENTO *****

    // CAM 6 -> 5
    pre.append(code);

    // CAM 5 -> 4
    divCodeWrapper.append(pre);
    btnComent.append(divComentImg, pComentContador);
    btnLike.append(divLikeImg, pLikeContador);

    // CAM 4 -> 3 
    divCodigo.append(divCirculos, divCodeWrapper);
    divBtnProjetoActions.append(btnComent, btnLike);
    divAutor.append(imgAutor, pAutorNome);

    // CAM 3 -> 2 
    divSecaoCodigo.append(divCodigo);
    divProjetoInfo.append(h3ProjetoTitulo, pProjetoDescricao);
    divProjetoActions.append(divBtnProjetoActions, divAutor);

    // CAM 2 -> 1
    divProjeto.append(divSecaoCodigo, divProjetoInfo, divProjetoActions);

    return divProjeto;
}

const btnSubmeter = document.querySelector('.menu__configuracao-submeter');

const projetos = [];

btnSubmeter.addEventListener('click', () => {
    const codigoProjeto = document.querySelector('.coding__area');
    const tituloProjeto = document.querySelector('.input__projeto-nome');
    const descricaoProjeto = document.querySelector('.input__projeto-descricao');
    const linguagemProjeto = document.querySelector('.input__projeto-linguagem');
    const corProjeto = document.querySelector('.input__projeto-highlight-color');


    // Valida propriedades do objeto "projeto";
    if (codigoProjeto.textContent == "") {
        alert('Ops, o campo de código do seu projeto está vazio. Insira algum código para continuar!');
        return;
    } else if (tituloProjeto.value == "") {
        alert('É preciso atribuir um título ao seu projeto antes de prosseguir.');
        return;
    } else if (descricaoProjeto.value == "") {
        alert('É preciso insira uma descrição ao seu projeto antes de prosseguir.')
        return;
    }

    // Define objeto
    const projeto = {
        codigo: codigoProjeto.textContent,
        titulo: tituloProjeto.value,
        descricao: descricaoProjeto.value,
        linguagem: linguagemProjeto.value,
        cor: corProjeto.value
    }
    
    // Limpa valor dos inputs
    tituloProjeto.value = '';
    descricaoProjeto.value = '';

    projetos.push(projeto);
    localStorage.setItem('projetos', JSON.stringify(projetos));
})