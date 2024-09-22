import { crearNuevoDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta, determinarGanador } from './usecases';
import { $$, $ } from './import_utils/jquery';

(() => {
    'use strict';

    let deck = [];
    let puntosJugadores = [];

    //implementando jquery
    const $btnPedir = $('#btnPedir'),
        $btnDetener = $('#btnDetener'),
        $btnNuevo = $('#btnNuevo');


    // iniciar juego

    const $puntosHTML = $$('small');
    const $divCartasJugador = $$('.divCartas');

    const inicializarJuego = (numJugadores = 2) => {

        deck = crearNuevoDeck();
        puntosJugadores = [];

        for (let u = 0; u < numJugadores; u++) {
            puntosJugadores.push(0);
        }

        $puntosHTML.forEach(elem => elem.innerText = 0);
        $divCartasJugador.forEach(elem => elem.innerHTML = '');

        $btnPedir.disabled = false;
        $btnDetener.disabled = false;
    }




    // Eventos
    $btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(deck);

        const puntosJugador = acumularPuntos(puntosJugadores, carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            $btnPedir.disabled = true;
            $btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck);

        } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            $btnPedir.disabled = true;
            $btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck);
        }

    });


    $btnDetener.addEventListener('click', () => {
        $btnPedir.disabled = true;
        $btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0], deck, puntosJugadores);
    });

    $btnNuevo.addEventListener('click', () => inicializarJuego(2));


    return {
        nuevoJuego: inicializarJuego
    }
})();

