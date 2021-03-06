/*
Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Pra isso vamos precisar trabalhar com dois elementos:
1- Listagem
2- Cartão Pokemon

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique, feito pelo o usuário na listagem de pokemons

- Remover a classe aberto só do cartao que está em aberto
- Ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
- Remover a classe ativo que marca o pokemon selecionado
- Adicionar a classe ativo no item da lista selecionado
*/
//----------------------------------------------------------------------------------------------------
//Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com um evento de clique, feito pelo o usuário na listagem de pokemons
    pokemon.addEventListener('click', () => {
        //Remover a classe aberto só do cartao que está em aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //Ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- Remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //- Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

