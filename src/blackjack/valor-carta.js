/**
 * Función que obtiene el valor numérico de una carta de Blackjack.
 * @param {string} carta - Carta cuyo valor se desea obtener.
 * @returns {number} Valor numérico de la carta.
 */
// pedirCarta();
export const obtenerValorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
