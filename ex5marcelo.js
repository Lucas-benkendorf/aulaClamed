/*
Exercício 5: Verificar se um Número é Primo
Objetivo: Usar um loop for para verificar e imprimir se um número fornecido pelo usuário é primo.
*/

var numero = parseInt(prompt("Digite um número:"));
var ePrimo = true;

if (numero <= 1) {
  ePrimo = false;
} else {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      ePrimo = false;
      break;  }}}
if (ePrimo) {
  console.log(numero + " é primo");
} else {
  console.log(numero + " não é primo");
}
