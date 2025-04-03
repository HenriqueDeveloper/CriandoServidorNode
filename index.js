// Pegamos uma ferramenta chamada Express, que ajuda a criar sites com Node.js
const express = require('express');

// Criamos uma "caixinha" chamada app, que vai guardar nosso site
const app = express();

// Escolhemos o número da porta onde nosso site vai funcionar (3000)
const porta = 3000;

// Criamos um caminho mágico chamado "/" (barra)
app.get('/', (req, res) => {
    // Quando alguém visitar esse caminho, o site vai mostrar "Rota GET"
    res.send('Rota GET');
});

// Criamos outro caminho mágico chamado "/rota1"
app.get('/rota1', (req, res) => {
    // Quando alguém visitar esse caminho, o site vai mostrar "Rota1"
    res.send('Rota1');
});

// Criamos um caminho especial chamado "/livro"
app.route('/livro')
    // Quando alguém quiser ver um livro (GET), mostramos "Adicionar Livro"
    .get(function(req, res) {
        res.send('Adicionar Livro');
    })
    // Quando alguém quiser colocar um novo livro (POST), ainda não respondemos nada
    .post(function(req, res) {
        res.send('');
    })
    // Quando alguém quiser mudar um livro (PUT), mostramos "Atualiza Livro"
    .put(function(req, res) {
        res.send('Atualiza Livro');
    })
    // Quando alguém quiser apagar um livro (DELETE), mostramos "Deletar Livro"
    .delete(function(req, res) {
        res.send('Deletar Livro');
    });

// Ligamos o site, como se fosse apertar o botão de "Ligar"
app.listen(porta, () => {
    // Mostramos no computador que o site está funcionando
    console.log("Servidor iniciado na porta http://localhost:3000");
});
