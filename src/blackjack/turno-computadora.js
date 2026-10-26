import { sacarCartaDelMazo } from './pedir-carta.js';
import { calcularPuntosMano } from './valor-carta.js';

/**
 * Calcula la jugada de la computadora y devuelve las cartas que tomó.
 * @param {number} puntosObjetivo - Puntuación que intenta alcanzar o superar.
 * @param {string[]} mazo - Mazo de cartas disponible.
 * @returns {Object} - Un objeto con los puntos y las cartas de la computadora.
 */
export const obtenerJugadaComputadora = ( puntosObjetivo, mazo ) => {

    let puntosComputadora = 0;
    const cartasComputadora = [];

    do {
        const carta = sacarCartaDelMazo(mazo);
        cartasComputadora.push(carta);

        puntosComputadora = calcularPuntosMano(cartasComputadora);

        if( puntosObjetivo > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosObjetivo)  && (puntosObjetivo <= 21 ) );

    return { puntos: puntosComputadora, cartas: cartasComputadora };
}
