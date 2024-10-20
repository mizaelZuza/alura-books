//Seleciona o elemento HTML por ID
const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

//Adiciona um evento de clique ao botão. Quando o botão for clicado a função ordenarLivrosPorPreco será executada.
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);


function ordenarLivrosPorPreco() {
    //Ordena os livros por preço em ordem crescente.
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    //Exibe os livros ordenados na tela.
    exibirOsLivrosNaTela(livrosOrdenados);
};