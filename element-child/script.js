let h1 = document.createElement('h1');
h1.innerText = 'Bem-vindos ao site de compras online!';
h1.id = 'titulo';

let body = document.querySelector('body');
body.appendChild(h1);

let produto = document.createElement('div');
produto.innerHTML = `
<h2> Notebook </h2>
<img src = notebook.jpg >
<p>Notebook de última geração: Processador i9 23ª Geração 
com 500GB de Memória e HD de 500 TeraBytes.
<strong>Somente: R$ 29.999.</strong></p>
<a href = ""> Comprar</a>
`;

body.appendChild(produto);