function aplicarDesconto(livros){
    //Define o valor do desconto como 30%.
    const desconto = 0.3;

    //Cria um novo array com os livros com desconto.
    livrosComDesconto = livros.map(livro => {

        //Cria um novo objeto com as mesmas propriedades do objeto original (livro), mas com o preço atualizado após aplicar o desconto.
        //A sintaxe {...livro} cria uma cópia superficial do objeto livro.
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });

    //Retorna o novo array com os livros com desconto.
    return livrosComDesconto;
};