
const titulo = document.getElementById("titulo");

console.log(titulo);

const textos = document.getElementsByClassName("texto-simples");

console.log(textos[0]);

const segundoTitulo = document.querySelector("div h2"); //Usado para aproveitar os mesmos seletores do CSS.

console.log(segundoTitulo);

const textos2 = document.querySelectorAll(".texto-simples");

console.log(textos2);