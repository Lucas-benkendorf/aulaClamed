/*Exercício 4: Soma de Números Pares de 1 a 100
Objetivo: Usar um loop while para calcular e imprimir a soma de todos os números pares de 1 a 100.
*/
var soma = 0;
var i = 1;
while (i <= 100) {
  if (i % 2 === 0) {
    soma += i;
  }
  i++;
}
console.log(soma);
