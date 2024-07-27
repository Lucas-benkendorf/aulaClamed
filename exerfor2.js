for (var contador = 0; contador < 3; contador++) {
    var desejo;
    if (contador === 0) {
        desejo = "primeiro desejo";
    } else if (contador === 1) {
        desejo = "segundo desejo";
    } else if (contador === 2) {
        desejo = "terceiro desejo";
    }

    var resposta = prompt("Faça o seu " + desejo + ":");
    console.log("Seu " + desejo + " é: " + resposta);
}
