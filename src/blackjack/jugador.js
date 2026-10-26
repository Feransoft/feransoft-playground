import { sacarCartaDelMazo } from './pedir-carta.js';
import { calcularPuntosMano } from './valor-carta.js';

/**
 * Toma una carta para el jugador y calcula los puntos de su mano.
 * @param {string[]} mazo - El mazo de cartas.
 * @param {string[]} cartasJugador - Cartas actuales del jugador.
 * @returns {Object} Carta tomada, mano nueva y puntos actualizados.
 */
export const tomarCartaParaJugador = (mazo, cartasJugador) => {
    const carta = sacarCartaDelMazo(mazo);
    const mano = [...cartasJugador, carta];
    const puntos = calcularPuntosMano(mano);

    return { puntos, carta, mano };
};
