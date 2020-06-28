const express = require("express");
let app = express();

app.get('/', (req, res)=> res.send("Ola mundo!")); // ROTA

app.get('/contato', (req, res)=> res.send(["Contato 1", "Contato 2"])); // ROTA

let produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
};

app.get('/produtos/adicionar', (req, res)=> res.send(produto));

app.get('/produtos/:id?', (req, res)=> { // o numero que o usuario colocar na rota(url) é o numero do id, esse "?" é para que quando o usuario colocar apena /produto, sem um numero, ele não dê uma mensagem de erro e sim um id undefined.
    let id = req.params.id;
    res.send("Eu tenho um produto com o id: " + id);
})


app.listen(3000, ()=> console.log("Servidor rodando na porta 3000")); // mostrar no terminal que o servidor está rodando naquela determinada porta
// app.listen() - cuida da configuração do servidor, ele recebe dois parametros:
// 1° - o numero da porta que queremos que a aplicação seja executada
// 2° - um callback que retorna uma console.log para saber se o servidor foi levantado corretamente

// ROTAS:
// app.METODO HTTP(NOME DO CAMINHO, FUNÇÃO A SER EXECUTADA-oq acontece quando a rota é acessada);
