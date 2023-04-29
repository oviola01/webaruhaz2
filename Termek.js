class Termek {
    #ELEM;
    constructor(szuloElem, ELEM){
        //felveszi a paraméterként megadott értéket:
        this.#ELEM = ELEM;
        console.log(this)
        //paraméter szerinti helyre berakja:
        szuloElem.append(
            `<div>
                <p>${this.#ELEM.nev}</p>
                <p>${this.#ELEM.labak}</p>
                <p>${this.#ELEM.gazda}</p>
            </div>`
        );
        //az utoljára létrehozott div elemet megfogja:
        this.divElem = $("article div:last-child");
        //az utoljára létrehozott p elemet megfogja:
        this.pElem = $("article div:last-child p");
    }

  
}

export default Termek;