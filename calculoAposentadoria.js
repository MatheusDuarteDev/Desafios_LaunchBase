const nome = 'Silvana'
const sexo = 'M'
const idade = 80
const contribuicao = 36

if (sexo == 'F') {
    if (contribuicao >= 30) {
        if (idade + contribuicao >= 85) {
            console.log(`${nome}, você pode se aposentar`)
        } else {
            console.log(`${nome}, você ainda não pode se aposentar pois a soma de idade e tempo de contribuição não atingiu 85`)
        }
    } else {
        console.log(`${nome}, você ainda não atingiu a idade de contribuição minima para se aposentar`)
    }
} else {
    if (contribuicao >= 35) {
        if (idade + contribuicao >= 95) {
            console.log(`${nome}, você pode se aposentar`)
        } else {
            console.log(`${nome}, você não pode se aposentar`)
        }
    } else {
        console.log(`${nome}, você ainda não atingiu o tempo de contribuição mínimo`)
    }
}