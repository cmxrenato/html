let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0;
let distanciaDaDireita = 0;
let distanciaDeCima = 0;
let distanciaDeBaixo = 0;



document.addEventListener("keyup", (e)=>{
    console.log(e);
    console.log(e.key);
    console.log(e.code);
    keyText.innerHTML = e.key;
    codeText.innerHTML = e.code;
});

document.addEventListener("keydown", (e)=>{
    if (e.code == "ArrowRight"){
        
        distanciaDaEsquerda = distanciaDaEsquerda + 10;
        console.log(distanciaDaEsquerda);
        quadrado.style.left = distanciaDaEsquerda + "px";
    }
    if (e.code == "ArrowDown"){
       
        distanciaDeCima = distanciaDeCima + 10;
        console.log(distanciaDeCima);
        quadrado.style.top = distanciaDeCima + "px";
    }
    if (e.code == "ArrowUp"){
        
        distanciaDeCima = distanciaDeCima - 10;
        console.log(distanciaDeCima);
        quadrado.style.top = distanciaDeCima + "px";
    }
    if (e.code == "ArrowLeft"){
       
        distanciaDaEsquerda = distanciaDaEsquerda - 10;
        console.log(distanciaDaEsquerda);
        quadrado.style.left = distanciaDaEsquerda + "px";
    }
});