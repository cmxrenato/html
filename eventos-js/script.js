let numero = document.querySelector('h1');
let botao = document.querySelectorAll('button');
let contador = 0;

function adicionarUm(){
    contador = contador + 1;
    numero.innerText = contador;
}
function subtrairUm(){
    contador = contador - 1;
    numero.innerText = contador;
}
botao[0].addEventListener("click", adicionarUm); //Essa função precisa de dois parâmetros. 
botao[1].addEventListener("click", subtrairUm);