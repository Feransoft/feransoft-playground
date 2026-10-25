import { pedirCarta, valorCarta, actualizarPuntos, mostrarCarta } from "./index";

/**
 * Función que representa el turno de la computadora en el juego de Blackjack.
 * @param {number} puntosMinimos - Puntos mínimos que la computadora debe superar.
 * @param {Array<string>} deck - Deck de cartas disponible.
 * @returns {void} No retorna ningún valor, solo realiza acciones en el DOM y muestra alertas.
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, deck ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        actualizarPuntos(puntosComputadora, 1);
        mostrarCarta(carta, 1);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}