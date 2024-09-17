let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");

botaoTempo.addEventListener("click",function(evento){
   let num = parseFloat(evento.timeStamp);
   let result = (num / 1000).toFixed(1);
    //console.log(evento.timeStamp);
    tempo.innerText = result;

});

document.addEventListener("click", function(e){
    console.log(e.target);
    elementoClicado.innerText = e.target.id;

});