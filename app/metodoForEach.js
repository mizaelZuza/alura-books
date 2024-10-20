function exibirOsLivrosNaTela(listaDeLivros) {
    //Limpa a área onde os livros serão exibidos a cada chamada da função, garantindo que não haja duplicação de elementos.
    elementoParaInserirLivros.innerHTML = "";
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";

    //Itera sobre cada livro na lista.
    listaDeLivros.forEach(livro => {
        //Verifica a disponibilidade do livro com base na quantidade em estoque.
        let disponibilidade = livro.quantidade > 0 ? "livro_imagens" : "livro__imagens indisponivel";

        //Constroi o HTML para cada livro, incluindo imagem, título, autor, preço e categoria.
        //A Classe disponibilidade é utilizada para aplicar estilos diferentes dependendo da disponibilidade do livro.
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo};
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
};

