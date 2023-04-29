import Termek from "./Termek.js"


class Termekek {
    #lista = [];
    //ha szeretnék paramétert megadni, akkor azt a konstruktorban tehetem meg
    constructor(adatLISTA){
        this.#lista = adatLISTA;
        const szuloElem = $("article");
        for(let i = 0; i <adatLISTA.length; i++){
            const listaElem = new Termek(szuloElem, this.#lista[i]);
           
        }
    }
}

export default Termekek;