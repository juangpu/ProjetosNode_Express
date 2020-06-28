const express = require('express');
const rotasSeries = require('./routers/series');
const rotasProdutos = require('./routers/produtos');
const app = express();

app.use('/series', rotasSeries)
app.use('/produtos', rotasProdutos)

app.listen(8000, () => console.log('Rodando na porta 8000'))