function calcular(){
    let nota1 = Number(document.getElementById("number1").value)
    let nota2 = Number(document.getElementById("number2").value)
    let nota3 = Number(document.getElementById("number3").value)
    let nota4 = Number(document.getElementById("number4").value)
    let media = document.getElementById("media")

    let resultado = (nota1 + nota2 + nota3 + nota4) / 4

    media.innerText = resultado

   

    
}
