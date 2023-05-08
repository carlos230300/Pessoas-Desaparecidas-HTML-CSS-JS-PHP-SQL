let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    }else{
        inputSenha.setAttribute('type', 'password')
    }
});

// Codigo abaixo comentado para que a verificação seja feita através do php

// function entrar(){
//     let usuario = document.querySelector('#usuario');
//     let userLabel = document.querySelector('#userLabel');

//     let senha = document.querySelector('#senha');
//     let senhaLabel = document.querySelector('#senhaLabel');

//     let msgError = document.querySelector('#msgError');
//     let listaUser = [];

//     let userValid = {
//         nome: null,
//         user: null,
//         senha: null
//     };

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser?.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = 'http://127.0.0.1:5500/src/HOME-PAGE/index.html';

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userlogado', JSON.stringify(userValid));
    }else{
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário ou senha incorretos';
        usuario.focus();
    }



function voltar(){
    window.location.href = 'http://localhost:80/HOME-PAGE/index.html';
}