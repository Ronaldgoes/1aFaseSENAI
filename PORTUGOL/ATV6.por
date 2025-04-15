//Faça um programa onde o usuário deve digitar a temperatura em graus Celsius
//e mostrar na tela essa temperatura convertida em Fahrenheit.
programa {
  funcao inicio() {
    
    real temperaturaCelsius, fahrenheit

    escreva("Digite a temperatura em Celsius: ")
    leia(temperaturaCelsius)

    fahrenheit =  temperaturaCelsius * 1.8 + 32
    
    escreva(fahrenheit, "°F. ")

    
  


    
  }
}
