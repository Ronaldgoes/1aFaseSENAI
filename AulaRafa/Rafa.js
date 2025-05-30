//let nome, idade, senha

inicializar()

let usuario = {
    nome: "um",
    idade: "2",
    senha: "tres"
}

function Cadastrar(){
    usuario.nome = document.getElementById("InpCadNome").value
    usuario.idade = document.getElementById("InpCadIdade").value
    usuario.senha = document.getElementById("InpCadSenha").value
    
    alert("Cadastrado com sucesso!! :D")
    limparInputs()
    mostrarLogin()

    console.log(usuario);

}

function Logar(){
    let nome = document.getElementById("InpLogNome").value
    let senha = document.getElementById("InpLogSenha").value

    if(nome === usuario.nome && senha === usuario.senha){
        alert("Login efetuado com sucesso.")
        limparInputs()
        mostrarProdutos()
    }else{
        alert("Login não efetuado.")
    }
}

function mostrarLogin(){
    esconderTodas()
    document.getElementById("login").style.display = "flex"
    document.getElementById("InpLogNome").focus()
}
   
function mostrarCadastro(){
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
    document.getElementById("InpCadNome").focus()
 
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById("Produtos").style.display = "flex"
}

function esconderTodas(){
    document.getElementById("login").style.display = "none"
    document.getElementById("cadastro").style.display = "none"
    document.getElementById("Produtos").style.display = "none"
    
}

function limparInputs(){
    document.getElementById("InpCadNome").value = " "
    document.getElementById("InpCadIdade").value = " "
    document.getElementById("InpCadSenha").value = " "
    document.getElementById("InpLogNome").value = " "
    document.getElementById("InpLogSenha").value = " "
}

function inicializar(){
    mostrarLogin()
}



