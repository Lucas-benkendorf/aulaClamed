var nota1 = Number(prompt("Digite a primeira nota:"));
var nota2 = Number(prompt("Digite a segunda nota:"));
var nota3 = Number(prompt("Digite a terceira nota:"));
var nota4 = Number(prompt("Digite a quarta nota:"));

var total = nota1 + nota2 + nota3 + nota4;

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    console.log("Alguma nota não foi digitada corretamente.");
} else {
    if (total >= 24) {
        console.log("Você está aprovado!");
    } else {
        console.log("Você está em exame.");
    }
}
