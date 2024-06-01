const codigo = document.querySelector(".coding__area");

codigo.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();

        const selection = window.getSelection(); // Obtém a seleção atual
        const range = selection.getRangeAt(0); // Obtém o primeiro intervalo da seleção
        
        const tabCharacter = '    '; // Define o caractere de tabulação (4 espaços)

        const tabNode = document.createTextNode(tabCharacter); // Cria um nó de texto com os espaços de tabulação
                
        // Se há texto selecionado, removemos a seleção antes de inserir o tabCharacter
        if (!range.collapsed) {
            range.deleteContents(); // Remove o conteúdo do intervalo selecionado
        }
        
        range.insertNode(tabNode); // Insere o nó de texto no intervalo
        
        // Move o cursor depois dos espaços adicionados
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        
        selection.removeAllRanges(); // Remove todas as seleções
        selection.addRange(range); // Adiciona o novo intervalo de seleção
    }
});
