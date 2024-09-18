let linkProz = document.getElementById("link-proz")
let botao = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e)=>{
    e.preventDefault()
    alert("Não foi possível acessar o link!")
})

botao.addEventListener("click", (e)=>{
    e.preventDefault()
})