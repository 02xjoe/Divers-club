const x = document.getElementById('login');
const y = document.getElementById('register');
const z = document.getElementById('btn');

function register() {
    x.style.left = '400px';
    y.style.left = '50px';
    z.style.left = '110px';
  
}

function login() {
    x.style.left = '51px';
    y.style.left = '451px';
    z.style.left = '0';
}

const modal = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}