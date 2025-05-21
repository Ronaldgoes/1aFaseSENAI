function cadastrar(){
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    let sexo = document.getElementById("sexo").value
    let kg = Number(document.getElementById("kg").value)
    let altura = Number(document.getElementById("altura").value)
    let resultado = document.getElementById("resultado")
    let imc = document.getElementById("imc")

    resultado = (kg / altura**2).toFixed(2)

    imc.innerText = nome + " Tem " + idade + " anos " + sexo + " seu imc é de: " + resultado



}
