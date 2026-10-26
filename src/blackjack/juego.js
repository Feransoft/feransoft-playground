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
let cartasJugador = [];
let puntosJugador = 0;
let partidaActiva = false;

/**
 * Inicia una partida nueva y reinicia el estado de la mesa.
 */
export const iniciarPartida = () => {
    mazo = crearMazo();
    cartasJugador = [];
    puntosJugador = 0;
    partidaActiva = true;

    actualizarMarcador(0, 0);
    actualizarMarcador(0, 1);
    limpiarMesa();
    habilitarBotonesPartida();
};

/**
 * Permite al jugador pedir una carta mientras la partida está activa.
 */
export const procesarCartaJugador = () => {
    if (!partidaActiva) return;

    if (mazo.length === 0) {
        finalizarPartida();
        alert('No quedan cartas en el mazo. La partida ha terminado.');
        return;
    }

    const { puntos, carta, mano } = tomarCartaParaJugador(mazo, cartasJugador);
    cartasJugador = mano;
    puntosJugador = puntos;

    actualizarMarcador(puntosJugador, 0);
    mostrarCartaEnMesa(carta, 0);

    if (puntosJugador > 21) {
        finalizarPartida();
        alert('Te has pasado de 21. Gana la computadora.');
        return;
    }

    if (puntosJugador === 21) {
        resolverTurnoComputadora();
    }
};

/**
 * El jugador se planta y cede el turno a la computadora.
 */
export const plantarseJugador = () => {
    if (!partidaActiva || cartasJugador.length === 0) return;
    resolverTurnoComputadora();
};

/**
 * Finaliza la partida y bloquea las acciones del jugador.
 */
const finalizarPartida = () => {
    partidaActiva = false;
    deshabilitarBotonesPartida();
};

/**
 * Ejecuta el turno de la computadora y determina el resultado.
 */
const resolverTurnoComputadora = () => {
    if (!partidaActiva) return;

    finalizarPartida();

    const { puntos, cartas } = obtenerJugadaComputadora(puntosJugador, mazo);

    cartas.forEach(carta => mostrarCartaEnMesa(carta, 1));
    actualizarMarcador(puntos, 1);

    setTimeout(() => {
        if (puntos > 21) {
            alert('La computadora se ha pasado. ¡Gana el jugador!');
        } else if (puntos === puntosJugador) {
            alert('Empate.');
        } else if (puntos > puntosJugador) {
            alert('Gana la computadora.');
        } else {
            alert('¡Gana el jugador!');
        }
    }, 100);
};
