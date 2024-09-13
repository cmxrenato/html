

const btnSubtrair = document.getElementById('btn-subtrair-produto-01');
const btnAdicionar = document.getElementById('btn-adicionar-produto-01');
const inputQuantidade = document.getElementById('quantidade-produto-01');



btnSubtrair.addEventListener('click', () => {
  let quantidade = parseInt(inputQuantidade.value);
  if (quantidade > 1) {
    inputQuantidade.value = quantidade - 1;
  }
  
    subtotalInfo.quantidade = parseInt(inputQuantidade.value);
    subtotalInfo.valor = subtotalInfo.quantidade * 11.66;
    atualizarTotal();
});

btnAdicionar.addEventListener('click', () => {
    let quantidade = parseInt(inputQuantidade.value);
    inputQuantidade.value = quantidade + 1;
    subtotalInfo.quantidade = parseInt(inputQuantidade.value);
    subtotalInfo.valor = subtotalInfo.quantidade * 11.66;
    atualizarTotal();
  
});

/*------------------------------------------*/

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
  if (subtotalInfo.quantidade == 1){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item";
  valorSubtotal.innerText = subtotalInfo.valor;
  };
/*--------------------------------------------*/

function atualizarTotal(){
  if (subtotalInfo.quantidade == 1){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item";
    valorSubtotal.innerText = subtotalInfo.valor;
    } else{
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}};