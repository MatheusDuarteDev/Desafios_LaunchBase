// Crie um programa para calcular a aposentadoria de uma pessoa.
/* 
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa
está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;

Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 
anos na soma;
*/


const nome = 'Silvana'
const sexo = 'F'
const idade = 40
const contribuicao = 31
const somaContrIdade = idade + contribuicao


if (sexo == 'F' && contribuicao >= 30 && somaContrIdade >=85) {
    console.log('Você pode se aposentar! Todos os requisitos foram atingidos.')
} else if (sexo == 'F') {
    if (contribuicao < 30) {
        console.log ('Você ainda não atingiu o tempo de contribuição mínimo.')
    } else {
        console.log('Você ainda não atingiu a soma mínima.')
    }
} else if (sexo == 'M' && contribuicao >= 35 && somaContrIdade >=95) {
    console.log('Você pode se aposentar! Todos os requisitos foram atigidos.')
} else if (sexo == 'M') {
    if (contribuicao < 35) {
        console.log('você ainda não completou o tempo de contribuição mínimo.')
    } else {
        console.log('você ainda não completou a soma mínima para se aposentar. ')
    }
} 
