//Array para armazenar os dados dos livros obtidos da API.
let livros = [];

//URL da API que contém os dados dos livros.
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

//Chama a função assincrona para buscar os livros da API.
getBuscarLivrosDaAPI();

//Seleciona o elemento HTML onde os livros serão inseridos.
const elementoParaInserirLivros = document.getElementById("livros");
//Seleciona o elemento HTML onde o valor total dos livros disponíveis serão inseridos.
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

//Função assincrona para buscar os dados dos livros na API.
async function getBuscarLivrosDaAPI() {

    //Faz uma requisição para a API e aguarda a resposta.
    const res = await fetch(endpointDaAPI);

    //Converte a resposta da API para formato JSON e armazena os dados no array livros.
    livros = await res.json();

    //Aplica um desconto aos livros e armazena os resultados em um novo array.
    let livrosComDesconto = aplicarDesconto(livros);

    //Exibe os livros com desconto na tela.
    exibirOsLivrosNaTela(livrosComDesconto);
   
};


