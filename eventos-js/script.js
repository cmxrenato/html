/*
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
botao[1].addEventListener("click", subtrairUm); */

let button = document.querySelector('button');
let span = document.querySelector('span');
let section = document.querySelector('section');

button.addEventListener("mouseover", ()=>{
    span.style.opacity = "100";
});

button.addEventListener("mouseout", ()=>{
    span.style.opacity = "0";
});

button.addEventListener("click", ()=>{
    section.innerText = "Fez um clique simples!";

});

button.addEventListener("dblclick", ()=>{
    section.innerText = "Fez um duplo clique";
})