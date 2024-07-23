
const btnSubmeter = document.querySelector('.menu__configuracao-submeter');

const projetos = JSON.parse(localStorage.getItem('projetos')) || [];

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