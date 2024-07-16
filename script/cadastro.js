const nomeInput = document.querySelector('#Nome');
const emailInput = document.querySelector('#Email');
const numberInput = document.querySelector('#number');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

function cadastro(event) {
event.preventDefault(); 

const nome = nomeInput.value;
const email = emailInput.value;
const number = numberInput.value;
const password = passwordInput.value;
const confirmPassword = confirmPasswordInput.value;

console.log(nome, email, number, password, confirmPassword);
}