import { sacarCartaDelMazo } from './pedir-carta.js';
import { obtenerValorCarta } from './valor-carta.js';

/**
 * Toma una carta para el jugador y calcula sus nuevos puntos.
 * @param {string[]} mazo - El mazo de cartas.
 * @param {number} puntosActuales - Los puntos actuales del jugador.
 * @returns {Object} - Un objeto con los puntos actualizados y la carta tomada
 */
export const tomarCartaParaJugador = (mazo, puntosActuales) => {
    const carta = sacarCartaDelMazo(mazo);
    
    puntosActuales += obtenerValorCarta( carta );

    return { puntos: puntosActuales, carta };
};
