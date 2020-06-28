// aonde tiver <=== indica que é codigo

// SERVIDOR MANTENDO UMA UNICA ROTA, QUALQUER SOLICITAÇÃO QUE VEM A ELE, SERÁ RESPONDIDO DA MESMA MANEIRA, VEMOS ISSO QUANDO NA URL DO LOCALHOST COLOCAMOS DEPOIS DO NUMERO DA PORTA QUALQUER INFORMAÇÃO E CONTINUA RODANDO, EX.: http://localhost:3000/cjjdsidjkdfkdfjij
// const http = require('http'); <===

// metodo createServer é um metodo do http, que manda a requisicão, porem o servidor só não entrega nenhuma resposta
// ABRIR UM SERVIDOR
// http.createServer((req, res)=>{ <=== // arrow function => callback 
// ENVIAR UMA RESPOSTA PARA O CLIENTE
    // res.writeHead(200, {"Content-type":"text/plain"}) <=== // metodo especifico do objeto de resposta/ 200 diz para o cliente que deu tudo certo, {"Content-type":"text/plain"} = tipo de informação -> diz que a resposta vai ser um texto
    // res.end("Meu primeiro servidor!") <=== // metodo que de fato termina o ciclo, envia as informações para o cliente
// }).listen(3000); <=== // 3000 é o numero da porta no localhost, sempre será chamado de localhost e podemos usar qualquer numero de porta



// COMO ENVIAR RESPOSTAS DIFERENTES DEPENDENDO DA SOLICITAÇÃO ENVIADA NA URL = ROTAS
const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type":"text/plain"});

    switch(req.url){
        case "/": // caso vc digite apenas barra/ depois de (http://localhost:3000/) a resposta será ("Voce esta na pagina home!")
            res.end("Voce esta na pagina home!")
            break;
        case "/contato": // caso vc digite barra/ contato depois de (http://localhost:3000/) a resposta será ("Voce esta na pagina contato!")
            res.end("Voce esta na pagina contato!")
            break;
        default: // caso não digite nenhum dos 2 casos depois de (http://localhost:3000/) a resposta será ("Voce esta no nosso servidor!")
            res.end("Voce esta no nosso servidor!")
            break;
    }
}).listen(3000);