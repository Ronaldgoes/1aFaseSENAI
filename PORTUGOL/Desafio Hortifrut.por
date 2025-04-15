programa {
  funcao inicio() {
    real valorTotal, valormaca, valorlaranja, valorBergamota, valorBanana, valorPera
    inteiro valorM, valorL, valorB , valorBA, valorP

    escreva("Quantidade de Maça? ")
    leia(valorM)

    escreva("Quantidade de laranja? ")
    leia(valorL)

    escreva("Quantidade de bergamota? ")
    leia(valorB)

    escreva("Quantidade de banana? ")
    leia(valorBA)

    escreva("Quantidade de pera? ")
    leia(valorP)

    valormaca = valorM * 1.50
    valorlaranja = valorL * 2.00
    valorBergamota = valorB * 1.00
    valorBanana = valorBA * 1.20
    valorPera = valorP * 0.50


    escreva(valorM, " Maça ", "R$", valormaca, "\n")

    escreva(valorL, " Laranja ", "R$", valorlaranja, "\n")

    escreva(valorB, " Bergamota ", "R$", valorBergamota, "\n")

    escreva(valorBA, " Banana ", "R$", valorBanana, "\n")

    escreva(valorP, " Pera ", "R$", valorPera, "\n")

    valorTotal = valormaca + valorlaranja + valorBergamota + valorBanana + valorPera

    escreva("Total R$", valorTotal)




    



    
    
  }
}
