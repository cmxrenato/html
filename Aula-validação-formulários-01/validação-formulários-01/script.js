// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username")
let usernameLabel = document.querySelector('label[for="username"]')
let usernameHelper = document.getElementById("username-helper")

let usernameEmail = document.getElementById("email")
let labelEmail = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById('email-helper')

let inputIdade = document.getElementById("idade")
let labelIdade = document.querySelector('label[for="idade"]')
let idadeHelper = document.getElementById("idade-helper")


/*// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", ()=>{
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur",()=>{
    usernameLabel.classList.remove('required-popup')
})*/

// Validar valor do input
usernameInput.addEventListener("change",(e)=>{
    let valor = e.target.value
    console.log(e.target)
    if (valor.length < 3){
        usernameInput.classList.remove('correct')
        usernameInput.classList.add('error')
        usernameHelper.innerText = "O username deve ter pelo menos 3 caracteres"
        usernameHelper.classList.add('visible')
    } else{
        usernameInput.classList.add('correct')
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
    }
})



usernameEmail.addEventListener("change", (e)=>{
    let valor = e.target.value
    if (valor.includes("@") && valor.includes(".com")){
        usernameEmail.classList.add('correct')
        usernameEmail.classList.remove('error')
        emailHelper.classList.remove('visible')
       
    } else{
        usernameEmail.classList.remove('correct')
        usernameEmail.classList.add('error')
        emailHelper.innerText = "O email dever ter @ e .com"
        emailHelper.classList.add('visible')
       
    }



})

inputIdade.addEventListener("change",(e)=>{
    let valor = e.target.value
    console.log(e.target.value)
    if (valor > 17){
        inputIdade.classList.add('correct')
        inputIdade.classList.remove('error')
        idadeHelper.classList.remove('visible')
    } else{
        inputIdade.classList.remove('correct')
        inputIdade.classList.add('error')
        idadeHelper.innerText = "O usuário tem que ser de maior"
        idadeHelper.classList.add('visible')
    }
})














function mostrarPopup(input,label){
    input.addEventListener("focus",()=>{
        label.classList.add('required-popup')
    })
    input.addEventListener("blur",()=>{
        label.classList.remove('required-popup')
    })
}

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel)

function temCaractereEspecial(senha) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(senha)
}

senhaInput.addEventListener('change', (e) =>{
    let valor = e.target.value
    let temCaractere = temCaractereEspecial(valor)
if (valor.length > 2 && temCaractere){
    senhaInput.classList.add('correct')
    senhaInput.classList.remove('error')
    senhaHelper.classList.remove('visible')
} else {
    senhaInput.classList.add('error')
    senhaInput.classList.remove('correct')
    senhaHelper.classList.add('visible')
    senhaHelper.innerText = " a senha precisa ter pelo menos 3 caracteres e um caractere especial"
}
})

// ---------- VALIDAÇÃO CONFIRMAR SENHA ---------- //

let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener('change', (e)=> {
    let valor = e.target.value
if(valor == senhaInput.value){
    confirmaSenhaInput.classList.add('correct')
    confirmaSenhaInput.classList.remove('error')
    confirmaSenhaHelper.classList.remove('visible')
} else {
    confirmaSenhaInput.classList.add('error')
    confirmaSenhaInput.classList.remove('correct')
    confirmaSenhaHelper.classList.add('visible')
    confirmaSenhaHelper.innerText = "as senhas precisam ser iguais"
}
})

function togglePassword(btn, inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        btn.innerText = "🚫"; // Altera o ícone para mostrar que a senha está visível
    } else {
        input.type = "password";
        btn.innerText = "👁️"; // Altera o ícone para mostrar que a senha está oculta
    }
}

mostrarPopup(usernameInput, usernameLabel)
mostrarPopup(usernameEmail, labelEmail)
mostrarPopup(inputIdade, labelIdade)
mostrarPopup(senhaInput, senhaLabel)


