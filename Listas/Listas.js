// --- LISTA 1 ---

function lista1_exercicio1() {
    let nome = prompt("Digite seu nome:");
    if (nome !== null && nome.trim() !== "") {
        alert(`Olá, ${nome}! Seja bem-vindo!`);
    }
}

function lista1_exercicio2() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`A soma é: ${num1 + num2}`);
    } else {
        alert("Por favor, insira números válidos.");
    }
}

function lista1_exercicio3() {
    let celsius = Number(prompt("Digite a temperatura em Celsius:"));
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        alert(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    } else {
        alert("Digite uma temperatura válida.");
    }
}

function lista1_exercicio4() {
    let numero = Number(prompt("Digite um número:"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("O número é PAR.");
        } else {
            alert("O número é ÍMPAR.");
        }
    } else {
        alert("Digite um número válido.");
    }
}

function lista1_exercicio5() {
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let media = (nota1 + nota2 + nota3) / 3;
        alert(`A média das notas é: ${media.toFixed(2)}`);
    } else {
        alert("Digite notas válidas.");
    }
}

function lista1_exercicio6() {
    let peso = Number(prompt("Digite seu peso (kg):"));
    let altura = Number(prompt("Digite sua altura (m):"));
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        let imc = peso / (altura * altura);
        let classificacao = "";
        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        alert(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
    } else {
        alert("Digite valores válidos.");
    }
}

function lista1_exercicio7() {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (!isNaN(numero) && numero >= 0) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert(`O fatorial de ${numero} é: ${fatorial}`);
    } else {
        alert("Digite um número inteiro válido.");
    }
}

function lista1_exercicio8() {
    let ano = parseInt(prompt("Digite um ano:"));
    if (!isNaN(ano)) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            alert(`${ano} é um ano bissexto.`);
        } else {
            alert(`${ano} não é um ano bissexto.`);
        }
    } else {
        alert("Digite um ano válido.");
    }
}


// --- LISTA 2 ---

function lista2_exercicio1() {
    let texto = prompt("Digite uma frase:");
    if (texto !== null) {
        let resultado = texto
            .replace(/a/gi, "@")
            .replace(/e/gi, "#")
            .replace(/i/gi, "!")
            .replace(/o/gi, "$")
            .replace(/u/gi, "*");
        alert("Mensagem codificada: " + resultado);
    }
}

function lista2_exercicio3() {
    let nome = prompt("Digite seu nome:");
    if (nome !== null) {
        const adjetivos = ["Invencível", "Poderoso", "Incrível", "Veloz"];
        const poderes = ["das Sombras", "do Fogo", "da Luz", "do Gelo"];
        let adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
        let poder = poderes[Math.floor(Math.random() * poderes.length)];
        alert(`Capitão ${nome}, o ${adjetivo} ${poder}`);
    }
}

function lista2_exercicio4() {
    let signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"];
    let signo = prompt("Digite seu signo:");
    if (signo !== null) {
        signo = signo.charAt(0).toUpperCase() + signo.slice(1).toLowerCase();
        if (signos.includes(signo)) {
            const mensagens = [
                "Hoje é um ótimo dia para buscar novos desafios!",
                "Seja paciente e as coisas irão melhorar!",
                "Uma boa surpresa está a caminho!"
            ];
            let mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
            alert(`${mensagem} (${signo})`);
        } else {
            alert("Signo inválido!");
        }
    }
}

function lista2_exercicio10() {
    let escolha = prompt('Escolha "Par" ou "Ímpar":');
    if (escolha !== null) {
        escolha = escolha.toLowerCase();
        if (escolha !== "par" && escolha !== "ímpar") {
            alert("Escolha inválida!");
            return;
        }
        let numeroUsuario = parseInt(prompt("Digite um número de 0 a 10:"));
        if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
            alert("Número inválido!");
            return;
        }
        let numeroComputador = Math.floor(Math.random() * 11);
        let soma = numeroUsuario + numeroComputador;
        let resultado = soma % 2 === 0 ? "par" : "ímpar";
        alert(`Você jogou ${numeroUsuario} e o computador ${numeroComputador}. Soma: ${soma} (${resultado})`);
        if ((resultado === "par" && escolha === "par") || (resultado === "ímpar" && escolha === "ímpar")) {
            alert("Você ganhou!");
        } else {
            alert("Você perdeu!");
        }
    }
}

function lista2_exercicio14() {
    let cliques = 0;
    let aviso = confirm("Aperte OK e comece a clicar o máximo em 3 segundos!");
    if (!aviso) return;

    const contarCliques = () => cliques++;
    document.addEventListener("click", contarCliques);

    setTimeout(() => {
        document.removeEventListener("click", contarCliques);
        alert(`Você clicou ${cliques} vezes em 3 segundos!`);
    }, 3000);
}

function lista2_exercicio15() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let chute = null;
    while (chute !== numeroSecreto) {
        chute = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        if (isNaN(chute)) {
            alert("Digite um número válido!");
        } else if (chute > numeroSecreto) {
            alert("É menor!");
        } else if (chute < numeroSecreto) {
            alert("É maior!");
        } else {
            alert("Parabéns, você acertou!");
        }
    }
}

function lista2_exercicio18() {
    let comprimento = parseInt(prompt("Qual o comprimento da senha?"));
    if (isNaN(comprimento) || comprimento <= 0) {
        alert("Digite um número válido!");
        return;
    }
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    alert("Senha gerada: " + senha);
}

function lista2_exercicio20() {
    const palavras = ["javascript", "programador", "forca", "computador"];
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    let progresso = Array(palavra.length).fill("_");
    let tentativas = 6;

    while (tentativas > 0 && progresso.includes("_")) {
        let letra = prompt(`Palavra: ${progresso.join(" ")}\nTentativas restantes: ${tentativas}\nDigite uma letra:`)?.toLowerCase();
        if (letra && palavra.includes(letra)) {
            for (let i = 0; i < palavra.length; i++) {
                if (palavra[i] === letra) {
                    progresso[i] = letra;
                }
            }
        } else {
            tentativas--;
        }
    }

    if (!progresso.includes("_")) {
        alert(`Você venceu! A palavra era: ${palavra}`);
    } else {
        alert(`Você perdeu! A palavra era: ${palavra}`);
    }
}

function lista2_exercicio22() {
    let perguntas = [
        { pergunta: "Qual a capital do Brasil?", resposta: "Brasília" },
        { pergunta: "Quanto é 2 + 2?", resposta: "4" },
        { pergunta: "Qual a cor do céu em um dia limpo?", resposta: "Azul" }
    ];
    let acertos = 0;

    perguntas.forEach(p => {
        let resposta = prompt(p.pergunta);
        if (resposta && resposta.trim().toLowerCase() === p.resposta.toLowerCase()) {
            acertos++;
        }
    });

    alert(`Você acertou ${acertos} de ${perguntas.length} perguntas.`);
}

function lista2_exercicio30() {
    const mensagens = [
        "Hoje é um ótimo dia para começar algo novo.",
        "A sorte está do seu lado!",
        "Confie no seu potencial!"
    ];
    let mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    alert(mensagem);
}

function lista2_exercicio32() {
    const respostas = ["Sim", "Não", "Talvez"];
    let resposta = respostas[Math.floor(Math.random() * respostas.length)];
    alert(resposta);
}

function lista2_exercicio34() {
    const emojis = ["😃", "😎", "😢", "😡"];
    let emoji = prompt(`Como você está se sentindo hoje?\nEscolha: ${emojis.join(" ")}`);
    if (emojis.includes(emoji)) {
        alert(`Você está se sentindo: ${emoji}`);
    } else {
        alert("Emoji não reconhecido!");
    }
}

function lista2_exercicio41() {
    let resposta = prompt("Qual a cor do botão de fazer exercício?");
    if (resposta && resposta.trim().toLowerCase() === "verde") {
        alert("Você acertou!");
    } else {
        alert("Resposta errada! Era verde.");
    }
}
    // --- LISTA DO PROFESSOR RAFAEL---

function rafaelexercicio1() {
    let senha = prompt("Digite a senha:");
    if (senha === "1234") {
        alert("Acesso permitido.");
    } else {
        alert("Acesso negado.");
    }
}

function rafaelexercicio2() {
    let A = Number(prompt("Digite o primeiro número (A):"));
    let B = Number(prompt("Digite o segundo número (B):"));
    if (!isNaN(A) && !isNaN(B)) {
        if (A > B) {
            alert(`O maior número é: ${A}`);
        } else if (B > A) {
            alert(`O maior número é: ${B}`);
        } else {
            alert("Os dois números são iguais.");
        }
    } else {
        alert("Digite apenas números válidos.");
    }
}

function rafaelexercicio3() {
    let placa = prompt("Digite o último número da placa:");
    if (placa !== null && placa.trim() !== "" && !isNaN(placa)) {
        let final = Number(placa);

        if (final === 0 || final === 1) {
            alert("Não pode rodar na segunda-feira.");
        } else if (final === 2 || final === 3) {
            alert("Não pode rodar na terça-feira.");
        } else if (final === 4 || final === 5) {
            alert("Não pode rodar na quarta-feira.");
        } else if (final === 6 || final === 7) {
            alert("Não pode rodar na quinta-feira.");
        } else if (final === 8 || final === 9) {
            alert("Não pode rodar na sexta-feira.");
        } else {
            alert("Número inválido. Digite apenas o último número da placa.");
        }
    } else {
        alert("Entrada inválida!");
    }
}

function rafaelexercicio4() {
    let palestra = prompt(
        "Digite o número da palestra:\n" +
        "1 - Animações com Scratch\n" +
        "2 - Scratch para gamers\n" +
        "3 - JavaScript para leigos\n" +
        "4 - Tópicos avançados de JavaScript\n" +
        "5 - Vida e carreira"
    );

    if (palestra === "1") {
        alert("Animações com Scratch - Laboratório 305, 19h");
    } else if (palestra === "2") {
        alert("Scratch para gamers - Laboratório 512, 20h");
    } else if (palestra === "3") {
        alert("JavaScript para leigos - Laboratório 101, 19h");
    } else if (palestra === "4") {
        alert("Tópicos avançados de JavaScript - Laboratório 305, 20h");
    } else if (palestra === "5") {
        alert("Vida e carreira - Auditório, 21h");
    } else {
        alert("Palestra inválida!");
    }
}

{
    function while1(){
        let contador = 1
        
        while (contador <= 20){
            if( contador % 2 == 0){
                alert("Este número e par: " + contador)
            } else {
                alert("Este número e impar: " + contador)
            }
            contador = contador +1
        }
    }
}


{
    function While3(){

        let vezes = 0
        while(vezes <= 6){
        alert("Olá, mundo!")
        vezes = vezes + 1
        vezes++
    }
    alert("Acabou a Impressão")
  }

}

    function while4(){

    let contador = 0
        while (contador <= 45) {
             console.log(contador)
        contador += 5
        alert(contador)
}

}

{
    function while6(){
        let soma = 0

        let cont = 1
        while(cont <= 100 && soma <= 400 ){
            soma = soma + cont
            cont++
            
        }
        alert("Soma: " + soma)

    }
}




