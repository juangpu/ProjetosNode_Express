const fs = require('fs'); // modulo nativo
let moment = require('moment'); // modulo que eu instalei (npm install moment --save)

const superHerois = require('./superHerois/index'); // retorna no console.log, o que foi feito em index.js que exportou as informações para app.js

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8'); // retorna no console.log, o que foi feito em dados.txt
let data = moment().format('MMM do YY'); // retorna no console.log, a data do dia, o que tem na moment.js dentro da pasta node_modules


// EXERCICIO PLAYGROUND Exercício: Importando Módulos
let moduloNativo = require('http'); // modulo nativo
let moduloInstalado = require('axios'); // modulo instalado
let moduloProprio = require('./superHerois/minhaFuncao'); // modulo criado na pasta superHerois e exportado do arquivo minhaFuncao.js
// ===========================================================================================================


console.log(moduloProprio());