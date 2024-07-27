/*
Exercício 2: Soma de Números de 1 a N
Objetivo: Usar um loop while para calcular a soma dos números de 1 a N, onde N é um valor fornecido pelo usuário.
*/

// Solicita ao usuário que insira o valor de N
const N = parseInt(prompt("Digite um número inteiro N: "));

// Inicializa a soma e o contador
let soma = 0;
let contador = 1;

// Usa o loop while para somar os números de 1 a N
while (contador <= N) {
    soma += contador;
    contador++;
}

// Exibe o resultado
console.log(`A soma dos números de 1 a ${N} é ${soma}.`);
