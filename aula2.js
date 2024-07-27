var nomeAluno = prompt("Digite o Seu nome:")
console.log(nomeAluno)

var idade = parseInt(prompt("Digite sua idade:"))
console.log(idade)

var maiorIdade = idade > 17
console.log(maiorIdade)

var ingredientes = ["café, trigo, pão"]


// AULA 2 *****
var saldoConta = 1000

var pixDestinario = prompt("Digite o pix:")   

var valorPix = parseFloat(prompt("Digite o valor:"))

if(valorPix <= saldoConta) {
saldoConta = saldoConta - valorPix
console.log("Enviando pix")
console.log(saldoConta)
} else {
console.log("Sem saldo na conta")
}

var letra = prompt("Digite uma letra")
///IF VOGAL
if(
  letra == "A" || 
  letra == "E" ||
  letra == "I" ||
  letra == "O" ||
  letra == "U"
) {
  console.log("A letra é uma vogal")
} else {
  console.log("A letra não é um vogal")
}

// ELSE IF
var nome = prompt("Digite o seu nome:")
console.log(nome)
var idade = parseInt(prompt("Digite a sua idade:"))
console.log(idade)

if(nome == "") {
    console.log("Nome não foi digitado!")
}

if(idade < 13) {
    console.log(nome+" ,Você é uma criança")
}else if(idade <= 17) {
    console.log(nome+" ,Você é um adolescente")
}else if(idade >= 18) {
    console.log(nome+" ,Você é um adulto")
}else if(idade >= 65) {
    console.log(nome+" ,Você é um idoso")}
