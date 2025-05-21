function calcular(){
    let nota1 = Number(document.getElementById("number1").value)
    let nota2 = Number(document.getElementById("number2").value)
    let nota3 = Number(document.getElementById("number3").value)
    let nota4 = Number(document.getElementById("number4").value)
    let peso1 = Number(document.getElementById("peso1").value)
    let peso2 = Number(document.getElementById("peso2").value)
    let peso3 = Number(document.getElementById("peso3").value)
    let peso4 = Number(document.getElementById("peso4").value)
    let resultado = document.getElementById("resultado")
    let resultadopeso = document.getElementById("resultadopeso")
    let mediafinal = document.getElementById("mediafinal")

    resultado = (nota1*peso1) + (nota2*peso2) + (nota3*peso3) + (nota4*peso4)
    resultadopeso = peso1 + peso2 + peso3 + peso4
    media = resultado / resultadopeso

    mediafinal.innerText = media

    
}
