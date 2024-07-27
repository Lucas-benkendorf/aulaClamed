var nomeAluno = prompt("QUal é o seu nome ?")
var idadeAluno = parseInt(prompt("QUal é sua idade ?"))

/*
   if(nomeAluno == "") {
    console.log("Nome não foi digitado")
    return
  }
*/

if(nomeAluno == "") {
  console.log("Nome não foi digitado")
  // isNaN é uma função que verifica se o valor não é um número 
} else if(isNaN(idadeAluno) == true) {
  console.log("Idade não foi digitada")
} else {
    if(idadeAluno < 13) {
    console.log(nomeAluno + ", você é uma criança")
    // && é o operador lógico "e"
  } else if(idadeAluno >= 13 && idadeAluno <= 17 ) {
    console.log(nomeAluno + ", você é uma adolescente")
  } else if(idadeAluno >= 18 && idadeAluno <= 64) {
    console.log(nomeAluno + ", você é um adulto")
  } else {
    console.log(nomeAluno + ", você é um idoso")
  }
  
}

