//Seleciona todos os botões com a classe "btn" e adiciona um event listener para cada um.
const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

//Função principal que é chamada ao clicar em um botão.
//Filtra os livros com base na categoria selecionada e exibe o resultado na tela.
function filtrarLivros() {
    //Obtém o elemento do botão clicado e sua categoria.
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    //Filtra os livros de acordo com a categoria.
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

    //Exibe os livros filtrados na tela.
    exibirOsLivrosNaTela(livrosFiltrados);

    //Calcula e exibe o valor total dos livros da categoria selecionada.
    let valorTotal = "";
    valorTotal = exibirValorTotalDeLivrosPorCategoria(categoria, valorTotal, livrosFiltrados);
    
};

//função que calcula o valor total dos livros da categoria selecionada.
function exibirValorTotalDeLivrosPorCategoria(categoria, valorTotal, livrosFiltrados) {
    if (categoria == "front-end") {
        valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
    if (categoria == "back-end") {
        valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
    if (categoria == "dados") {
        valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
    if (categoria == "disponivel") {
        valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
    return valorTotal;
}

//Função que filtra os livros com quantidade maior que zero.
function filtrarPorDisponibilidade (){
    return livros.filter(livro => livro.quantidade > 0);
};

//Função que filtra os livros por categoria.
function filtrarPorCategoria (categoria){
    return livros.filter(livro => livro.categoria == categoria);
}

//Exibe o valor total dos livros disponíveis na tela.
function exibirValorTotalLivrosDisponiveis(valorTotal){

    //Insere o elemento HTML com o valor total na página.
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
};