const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Você está na pagina series')
})

router.get('/minhasSeries', (req, res) => {
    res.send(["The 100", "13 Reasons Why", "Snowpiercer"])
})

router.get('/minhasSeries/:serie', (req, res) => {
    let serie = req.params.serie
    res.send('Sua serie é: ' + serie)
})

// TESTE QUE DEU ERRADO :(
// router.get('http://localhost:8000/series/minhasSeries/:serie', (req, res)=> { 
//     let serie = req.params.serie
//     let suaSerie = ["The 100", "13 Reasons Why", "Snowpiercer"];
//     let url = req.url
//     switch(serie){
//         case url == 'http://localhost:8000/series/minhasSeries/The100':
//             res.send('Sua serie é: ' + suaSerie[0]);
//             break;
//         case url == 'http://localhost:8000/series/minhasSeries/13ReaonsWhy':
//             res.send('Sua serie é: ' + suaSerie[1]);
//             break;
//         case url == 'http://localhost:8000/series/minhasSeries/Snowpiercer':
//             res.send('Sua serie é: ' + suaSerie[2]);
//             break;
//         default:
//             res.send('Não encontramos sua serie');
//     }
// })

module.exports = router
