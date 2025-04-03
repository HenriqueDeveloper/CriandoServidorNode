# CriandoServidorNode
# Documentação: Servidores HTTP e Express

## 1. Servidor HTTP Simples

### Descrição
Este código cria um servidor HTTP básico utilizando o módulo "http" do Node.js. O servidor responde a todas as requisições com a mensagem "HELLO, WORLD!!!".

### Código
```javascript
const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('HELLO, WORLD!!!');
    response.end();
});

server.listen(3000);

console.log('Projeto iniciado na porta http://localhost:3000');
```

### Explicação
- **Importação do módulo HTTP**: O módulo "http" é importado para criar um servidor.
- **Criação do servidor**: 
  - O servidor é criado usando `createServer()`.
  - Quando alguém acessa o servidor, ele responde com "HELLO, WORLD!!!".
- **Cabeçalhos da resposta**: 
  - `response.writeHead(200, {'Content-Type': 'text/plain'})` define que a resposta terá status 200 (sucesso) e será um texto simples.
- **Resposta ao cliente**:
  - `response.write('HELLO, WORLD!!!')` envia o texto ao navegador.
  - `response.end()` finaliza a resposta.
- **Servidor ouvindo na porta 3000**: 
  - `server.listen(3000)` faz o servidor rodar na porta 3000.
- **Mensagem no console**:
  - `console.log('Projeto iniciado na porta http://localhost:3000')` exibe a URL para acessar o servidor.

---

## 2. Servidor com Express

### Descrição
Este código cria um servidor utilizando o framework Express.js. Ele define rotas que respondem a diferentes requisições HTTP.

### Código
```javascript
const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Rota GET');
});

app.get('/rota1', (req, res) => {
    res.send('Rota1');
});

app.route('/livro')
    .get((req, res) => {
        res.send('Adicionar Livro');
    })
    .post((req, res) => {
        res.send('');
    })
    .put((req, res) => {
        res.send('Atualiza Livro');
    })
    .delete((req, res) => {
        res.send('Deletar Livro');
    });

app.listen(porta, () => {
    console.log("Servidor iniciado na porta http://localhost:3000");
});
```

### Explicação
- **Importação do Express**: O Express é importado para facilitar a criação do servidor.
- **Criação do app**: `const app = express();` inicializa a aplicação Express.
- **Definição da porta**: O servidor rodará na porta 3000.
- **Rotas do servidor**:
  - `/`: Responde "Rota GET" quando acessado via `GET`.
  - `/rota1`: Responde "Rota1" quando acessado via `GET`.
  - `/livro`: 
    - `GET`: Retorna "Adicionar Livro".
    - `POST`: Ainda sem resposta definida.
    - `PUT`: Retorna "Atualiza Livro".
    - `DELETE`: Retorna "Deletar Livro".
- **Inicia o servidor**:
  - `app.listen(porta, () => {...})` faz o servidor rodar e exibe uma mensagem no console com o link do servidor.

### Como Usar
1. Instale o Express se ainda não tiver:
   ```sh
   npm install express
   ```
2. Execute o arquivo:
   ```sh
   node nome_do_arquivo.js
   ```
3. Acesse no navegador ou via ferramentas como Postman:
   - `http://localhost:3000/` → "Rota GET"
   - `http://localhost:3000/rota1` → "Rota1"
   - `http://localhost:3000/livro` com diferentes métodos HTTP (GET, POST, PUT, DELETE)

---

## Conclusão
Esses dois servidores mostram abordagens diferentes:
- O primeiro usa **Node.js puro** para criar um servidor simples.
- O segundo usa **Express.js**, facilitando a criação de rotas e respostas para diferentes requisições.

Ambos podem ser usados para construir aplicações web, dependendo da complexidade do projeto.
