function EX1(){
    let num1 = Number (prompt("Digite um Número"))
    let num2 = Number (prompt("Digite outro Número"))
    let soma = num1 + num2
    alert("A soma dos dois números é: " + soma)
}



function EX2(){
    let num1 = Number (prompt("Digite um Número"))
    let num2 = Number (prompt("Digite outro Número"))
    let media = (num1 + num2) / 2
    alert("A media dos dois números é: " + media)
}

function NOME(){

let name = prompt("Digite seu Nome: ")
alert("Olá," + name + "! Seja bem vindo! ")

}

function TEMPERATURA(){

    let temperatura = Number (prompt("Digite a Temperatura em Celsius: "))
    let Fahrenheit = temperatura * 9/5 + 32
    alert("A temperatura em Fahrenheit é de: " + Fahrenheit)
    
}

function PAREIMPAR(){

    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 === 0) {
      alert(`${numero} é par`);
    } else {
      alert(`${numero} é ímpar`);
    }   
 }

 function MEDIA(){
    let nota1 = Number (prompt("Digite a primeira nota"))
    let nota2= Number (prompt("Digite a segunda nota"))
    let nota3 = Number (prompt("Digite a terceira nota"))
    let media = (nota1 + nota2 + nota3) / 3
    alert("A media do aluno é de: " + media)
}
    {
    function IMC(){
        let peso = Number(prompt("Digite seu peso em kg:"));
        let altura = Number(prompt("Digite sua altura em metros:"));
    
        let imc = peso / (altura * altura);
    
        if (imc < 18.5) {
            alert("Você está abaixo do peso. IMC: " + imc);
        } else if (imc >= 18.5 && imc <= 24.9) {
            alert("Você está com peso normal. IMC: " + imc);
        } else if (imc >= 25 && imc <= 29.9) {
            alert("Você está com sobrepeso. IMC: " + imc);
        } else {
            alert("Você está com obesidade. IMC: " + imc);
        }
    }

    function BISSEXTO(){
        let ano = Number(prompt("Digite um ano:"));

    if ((ano % 4 === 0 && ano % 100 !== 0)) {
        alert(ano + " é um ano bissexto.");
    } else {
        alert(ano + " não é um ano bissexto.");
    }
    }
    
    
    
}

