const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.setHeader('Access-Control-Allow-Origin', '*');
let pb = Math.floor(Math.random()*100)
let pr = Math.floor(Math.random()*100)
let pt = pb+pr
let dados = {
    pecasboas:pb.toString(),
    pecasruins:pr.toString(),
    pecastotais:pt.toString(),
    timestamp:(new Date().getTime()).toString(),
    temperatura:(Math.floor(Math.random()*65)+35).toString()
}
res.end(JSON.stringify(dados))
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});