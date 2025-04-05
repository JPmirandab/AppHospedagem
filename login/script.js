document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const mensagemErro = document.getElementById('mensagemErro');
  const textoErro = document.getElementById('textoErro');

mensagemErro.style.display = 'none'; // esconde no começo

try {
    const resposta = await fetch('https://localhost:7275/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, senha })
    });

    if (resposta.ok) {
        window.location.href = '../dashboard/index.html';
    } else if (resposta.status === 401) {
        textoErro.textContent = 'Login ou senha incorretos.';
        mensagemErro.style.display = 'flex';
    } else {
        textoErro.textContent = 'Erro ao tentar fazer login. Tente novamente.';
        mensagemErro.style.display = 'flex';
    }
} catch (error) {
    textoErro.textContent = 'Erro ao conectar com a API.';
    mensagemErro.style.display = 'flex';
}

});
