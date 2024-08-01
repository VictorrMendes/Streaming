const login = document.querySelector('.submit');

alert('Olá, bem vindo ao site! O login e a senha são "admin" ');

login.addEventListener('click', verificarAcesso);

function verificarAcesso() {

    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    fetch('credenciais.json')
        .then(response => response.json()
            .then(data => {
                const login_acesso = data.KEY_LOGIN;
                const senha_acesso = data.KEY_PASSWORD;





                if (email === login_acesso && password === senha_acesso) {
                    window.open('./documents/perfis.html')
                    alert('Bem vinda!');
                } else {
                    alert('Senha ou Login errada bb!');
                };
            }));
}
