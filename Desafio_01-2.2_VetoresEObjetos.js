/*
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
*/
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza.

const programador = {
    nome: 'Pedro',
    idade: 18,
    tecnologias: [
        {nome: 'Javascript', especialidade: 'Web/Mobile'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'C++', especialidade: 'Desktop'}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} em ${programador.tecnologias[0].especialidade}`)