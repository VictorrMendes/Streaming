const login = document.querySelector('.submit');

login.addEventListener('click',verificarAcesso);

function verificarAcesso(){

var email = document.querySelector('#email').value;
var password = document.querySelector('#password').value;

const login_acesso = "admin";
const senha_acesso = "admin";

if (email === login_acesso && password === senha_acesso) {
    window.open('./documents/perfis.html')
    alert('Bem vinda!');
} else {
    alert('Senha ou Login errada bb!');
};
}
