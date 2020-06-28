function osHerois(poder){
    switch(poder){
        case "Batman":
            console.log("Eu tenho o poder da Interligencia");
            break;
        case "Superman":
            console.log("Eu tenho o poder da Super força");
            break;
        default:
            console.log("Eu não sei o poder desse heroi");
    }
}
let poder = "Batman";
osHerois(poder)

module.exports = osHerois;