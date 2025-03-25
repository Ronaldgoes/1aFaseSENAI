//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento
// no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostr
//e na tela qual a idade do usuário em anos, em meses, em dias e em semanas.
programa {
  funcao inicio() {
    inteiro anoN, anoA, anos, meses, dias, semanas
      escreva("Escreva o seu ano de nascimento(YYYY): ")
      leia(anoN)

      escreva("Escreva o ano atual: ")
      leia(anoA)
      
      anos = anoA - anoN
      escreva(anos, " Anos, ")
      
      meses = anos * 12
      escreva(meses, " Meses, ")

      dias = anos * 365
      escreva(dias, " Dias, ")

      semanas = dias * 52
      escreva(semanas, " Semanas. ")




     
      
    

  
      
    
    
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 663; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */