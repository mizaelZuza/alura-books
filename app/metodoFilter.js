const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    let valorTotal = "";

    valorTotal = exibirValorTotalDeLivrosPorCategoria(categoria, valorTotal, livrosFiltrados);
    
};

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

function filtrarPorDisponibilidade (){
    return livros.filter(livro => livro.quantidade > 0);
};

function filtrarPorCategoria (categoria){
    return livros.filter(livro => livro.categoria == categoria);
}

function exibirValorTotalLivrosDisponiveis(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
};