var senha = 1234

do { 
    var senhaDigitada = prompt("Digita sua senha:")
    if (senhaDigitada == senha){
        alert("Acesso permitido")
    }
} while (senhaDigitada != senha)