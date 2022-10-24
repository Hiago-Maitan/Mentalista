

function Chutar() {

    var numeroSecreto = parseInt(Math.random() * 11)
    console.log(`O numero secreto é: ` + numeroSecreto)

    var chute = parseInt(document.getElementById('valor').value)
    console.log(`O chute é: ` + chute)

    var resultado = document.getElementById('resultado')

    if (chute > 10 || chute < 0) {
        resultado.innerHTML = `Número inválido <br> Digite um número de 0 a 10`
    } else if (chute == numeroSecreto) {
        resultado.innerHTML = `Parabéns! <br> Você acertou o número secreto :)`
    } else {
        resultado.innerHTML = `Que pena! Você errou :( O número secreto era ${numeroSecreto} <br> Tente Novamente`
    }

}