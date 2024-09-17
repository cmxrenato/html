

let body = document.querySelector('body');
body.innerHTML = `<main>
        <h1 id="titulo">Este é o primeiro h1</h1>
        <ul>
            <li> Home </li>
            <li> Contato</li>
            <li> Sair </li> 
        </ul>
        <div class="texto-simples">Esta é uma div</div>
        <div><h2>Este é o segundo h2

            </h2>
            <p class="texto-simples">Este é um parágrafo dentro da segunda div</p>
        </div>
    </main>
`
let titulo = document.querySelector('h1');
titulo.innerText = 'Olá mundo!';
