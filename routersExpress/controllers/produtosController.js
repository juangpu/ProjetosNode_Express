const controller = {
    index: (req, res)=>{
        res.send(["Z Nation", "The Society", "Dark"]);
    },
    
    show: (req, res)=>{
        res.send('Todas as series estão disponiveis no site oficial da Netflix')
    }
};

module.exports = controller