var numeroUm = parseInt(prompt("Digite o primeiro número:"))
var numeroDois = parseInt(prompt("Digite o segundo número:"))
var operacao = prompt("Digite uma operação: 1- Adição, 2- Subtração, 3- Multiplicação, 4- Divisão.")
var adicao = (numeroUm + numeroDois)
var subtracao = (numeroUm - numeroDois)
var multiplicacao = (numeroUm*numeroDois)
var divisao = (numeroUm/numeroDois)

switch(operação)
{
    case 1: (console.log (adicao))
    break
    case 2: (console.log (subtracao))
    break
    case 3: (console.log (multiplicacao))
    break
    case 4: (console.log (divisao))
}