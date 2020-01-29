const nome = 'Carlos'
const peso = 80
const altura = 1.80

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log('Você está acima do peso')
} else {
    console.log('Você não está acima do peso')
}