import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from '../usecases';


/**
 * @param {Array<String>} deck
 * @param {Number} puntosMinimos
 * @returns {void}
 */

const turnoComputadora = (puntosMinimos, deck, puntosJugadores) => {

    if (!puntosMinimos) throw new Error ('No se han proporcionado los puntos mínimos');
    if (!deck) throw new Error ('No se ha proporcionado el deck');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = acumularPuntos(puntosJugadores, carta, puntosJugadores.length - 1);

        crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}

export default turnoComputadora;