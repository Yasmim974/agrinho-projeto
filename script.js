
// Formulário de contato
const form = document.getElementById('formContato');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita envio real
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
        resposta.style.color = 'green';
        form.reset();
    } else {
        resposta.textContent = "Por favor, preencha todos os campos.";
        resposta.style.color = 'red';
    }
});
