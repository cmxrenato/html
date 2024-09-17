

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
});