let elementoH1 = document.querySelector('#titulo');
elementoH1.innerText='Olá mundo!';

let anchor = document.querySelector('body a');
anchor.innerText='Clique aqui para ir ao site da Proz';

let ul = document.querySelector('body ul');
ul.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>teste</li>`;

let ol = document.querySelector('#lista-ordenada');
ol.innerHTML =` 
        <a href=""><li>Item 1 link</li></a>
        <a href=""><li>Item 2 link</li></a>
        <a href=""><li>Item 3 link</li></a>`;
        
