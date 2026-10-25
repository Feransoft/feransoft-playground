import { crearMazo } from './crear-deck.js';
import { tomarCartaParaJugador } from './jugador.js';
import { obtenerJugadaComputadora } from './turno-computadora.js';
import {
    actualizarMarcador,
    limpiarMesa,
    habilitarBotonesPartida,
    deshabilitarBotonesPartida,
    mostrarCartaEnMesa
} from './interfaz.js';

let mazo = [];
let puntosJugador;

/**
 * Inicia el juego de Blackjack
 * @returns {void} No retorna ningún valor, solo inicializa el juego y actualiza el DOM.º
 */
export const iniciarPartida = () => {

    mazo = crearMazo();
    puntosJugador = 0;

    console.clear();
    actualizarMarcador(0, 0);
    actualizarMarcador(0, 1);
    limpiarMesa();
    habilitarBotonesPartida();
};
/**
 * Permite al jugador pedir una carta
 * Actualiza los puntos y muestra la carta en el DOM.
 * Llama al turno de la computadora si el jugador alcanza o supera 21 puntos.
 * @returns {void} No retorna ningún valor, solo realiza acciones en el DOM y muestra alertas.
 */
export const procesarCartaJugador = () => {

    const { puntos, carta } = tomarCartaParaJugador(mazo, puntosJugador);
    puntosJugador = puntos;

    actualizarMarcador(puntosJugador, 0);
    mostrarCartaEnMesa(carta, 0);

    if ( puntosJugador >= 21 ) {

        console.warn(puntosJugador > 21 ? 'Lo siento mucho, perdiste' : '¡21, genial!');

        resolverTurnoComputadora(puntosJugador, mazo);
    }
};

/**
 * Permite al jugador detener su turno y pasar el turno a la computadora.
 * @returns {void} No retorna ningún valor, solo realiza acciones en el DOM y muestra alertas.
 */
export const plantarseJugador = () => {
    deshabilitarBotonesPartida();
    resolverTurnoComputadora(puntosJugador, mazo);
};

/**
 * Juega el turno de la computadora después de que el jugador se detiene.
 * Actualiza los puntos y cartas de la computadora en el DOM y muestra el resultado del juego.
 * @returns {void} No retorna ningún valor, solo realiza acciones en el DOM y muestra alertas.
 */
const resolverTurnoComputadora = ( puntosObjetivo, mazo ) => {
    const { puntos, cartas } = obtenerJugadaComputadora(puntosObjetivo, mazo);

    cartas.forEach(carta => mostrarCartaEnMesa(carta, 1));
    actualizarMarcador(puntos, 1);
    deshabilitarBotonesPartida();

    setTimeout(() => {
        if (puntosJugador > 21) {
            alert('Computadora gana');
        } else if (puntos > 21) {
            alert('Jugador gana');
        } else if (puntos === puntosJugador) {
            alert('Nadie gana :(');
        } else if (puntos > puntosJugador) {
            alert('Computadora gana');
        } else {
            alert('Jugador gana');
        }
    }, 100);
};
