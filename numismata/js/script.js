function REDEF(){
    
if(document.getElementById("redefinir").value){
    alert("disponivel na proxima atualização");
}
}

function login(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario && senha){
        alert("login efetuado!");
    }
    else {
        alert("Por favor, insira seu login e senha.");
    }
}

function cadastrar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarsenha = document.getElementById("confirmarsenha").value;

    if(nome && email && senha && confirmarsenha){
        alert("cadastro efetuado!");
    }
    else{
        alert("Por favor, insira os campos em branco");
    }
}