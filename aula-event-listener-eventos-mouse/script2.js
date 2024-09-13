document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
});

// Fechar modal ao clicar fora dele
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
});
