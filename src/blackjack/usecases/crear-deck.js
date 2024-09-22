
/** 
 * Crea un deck de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspecialesDeCarta Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>}
 * 
 */
const crearDeck = (tiposDeCarta = ['C', 'D', 'H', 'S'], tiposEspecialesDeCarta = ['A', 'J', 'Q', 'K']) => {

    if (tiposDeCarta.length === 0 || tiposEspecialesDeCarta.length === 0) 
        throw 'No se han proporcionado los tipos de carta';
    

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspecialesDeCarta) {
            deck.push(esp + tipo);
        }
    }
    return deck.sort(() => Math.random() - 0.5);
}

export default crearDeck;