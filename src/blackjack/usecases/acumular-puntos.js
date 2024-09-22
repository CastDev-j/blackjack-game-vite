import { $$ } from '../import_utils/jquery';
import valorCarta from './valor-carta';

const $puntosHTML = $$('small');

/**
 * @param {Array<Number>} puntosJugadores 
 * @param {String} carta 
 * @param {Number} turno 
 * @returns 
 */

const acumularPuntos = (puntosJugadores, carta, turno) => {

    puntosJugadores[turno] += valorCarta(carta);
    $puntosHTML[turno].innerText = puntosJugadores[turno];


    return puntosJugadores[turno];
}

export default acumularPuntos;