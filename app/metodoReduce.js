// Calcula o valor total dos livros disponíveis.
// A função `reduce` itera sobre cada livro no array, acumulando o preço de cada um em uma variável `acc` (acumulador).
// O valor inicial do acumulador é 0.
function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acc,livro) => acc + livro.preco, 0).toFixed(2);// O resultado final é formatado para ter duas casas decimais.
};
