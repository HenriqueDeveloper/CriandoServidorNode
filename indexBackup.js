const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('HELLO, WORLD!!!');
    response.end();
});

server.listen(3000);

console.log('Projeto iniciado na porta http://localhost:3000');