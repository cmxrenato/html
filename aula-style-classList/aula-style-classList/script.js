let inputError = document.querySelector('.error');
inputError.classList.remove('error');

let inputCorrect = document.querySelector('.correct');
inputCorrect.classList.remove('correct');


let visible = document.querySelector('.visible');
visible.classList.remove('visible');

let subtitulo = document.querySelector('h2');
subtitulo.style.fontSize = '45px';
subtitulo.innerHTML = 'Faça o login';

let botao = document.querySelector('button');
botao.style.fontSize = '20px';
botao.style.borderRadius = '10px';
botao.style.backgroundColor = '#7b7bcb';
botao.style.color = 'white';
botao.style.width = '200px';
botao.style.boxShadow = '5px 10px 4px rgba(0, 0, 0, 0.3)';
botao.style.cursor = 'pointer';

let userInput = document.querySelector('#login-usuario');
userInput.classList.add('error');



let userSenha = document.querySelector('#login-senha');
userSenha.classList.add('correct');


let messageError =document.querySelectorAll('p');
messageError[0].classList.remove('error-text');
messageError[1].classList.remove('error-text');


