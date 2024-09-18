const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})
/*
document.addEventListener('keyup',(e)=> {
  console.log(e.key);
  console.log(e.code);
  if (e.code == "Digit1"){
  navPerfil.style.display = "block";
  };
  if (e.code == "Escape"){
    navPerfil.style.display = "none";
  };


});*/

let linkPerfilDados = document.getElementById('link-perfil-dados')

document.addEventListener('keyup', (e)=>{
  console.log(e.code)
  if(navPerfil.style.display =='block'){
    if (e.code == 'Digit1'){
      linkPerfilDados.click()
    }
  }
  else if (e.code == 'Digit1'){
    navPerfil.style.display ='block'
  }
  if (navPerfil.style.display =='block'){
    if (e.code == 'Escape'){
      navPerfil.style.display = 'none'
    }
    1
  }

})
/*
const linkPerfilDados = document.getElementById('link-perfil-dados');


document.addEventListener('keyup', (e) => {
  console.log(e.code);

  const navDisplay = getComputedStyle(navPerfil).display;

  // Abrir o menu com 'Digit1'
  if (e.code === 'Digit1' && navDisplay === 'none') {
    navPerfil.style.display = 'block';
  } 
  // Navegar para o link dentro do menu com 'Digit1'
  else if (e.code === 'Digit1' && navDisplay === 'block') {
    linkPerfilDados.click();
  }

  // Fechar o menu com 'Escape'
  if (e.code === 'Escape' && navDisplay === 'block') {
    navPerfil.style.display = 'none';
  }
});*/







/*
document.addEventListener("click",()=>{
  navPerfil.style.display = "none"
})*/
