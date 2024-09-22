import { $$} from '../import_utils/jquery';

const $divCartasJugador = $$('.divCartas');

/**
 * @param {String} carta
 * @param {Number} turno
 */

const crearCarta = (carta, turno) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    $divCartasJugador[turno].append(imgCarta);

}

export default crearCarta;