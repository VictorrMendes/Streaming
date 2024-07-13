const login = document.querySelector('.submit');

login.addEventListener('click',verificarAcesso);

function verificarAcesso(){

var email = document.querySelector('#email').value;
var password = document.querySelector('#password').value;

if (email === 'admin' && password === 'admin') {
    window.open('./documents/perfis.html')
    alert('Bem vinda!');
} else {
    alert('Senha ou Login errada bb!');
};
}
