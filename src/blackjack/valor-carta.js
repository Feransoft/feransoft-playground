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
};

/**
 * Calcula la puntuación de una mano, contando los ases como 1 si hace falta.
 * @param {string[]} cartas - Cartas de la mano.
 * @returns {number} Puntuación más alta posible sin superar 21, si es posible.
 */
export const calcularPuntosMano = (cartas) => {
    let puntos = cartas.reduce((total, carta) => total + obtenerValorCarta(carta), 0);
    let ases = cartas.filter(carta => carta.startsWith('A')).length;

    while (puntos > 21 && ases > 0) {
        puntos -= 10;
        ases -= 1;
    }

    return puntos;
};
