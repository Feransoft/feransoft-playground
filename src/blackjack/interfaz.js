const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const divCartas = document.querySelectorAll('.divCartas');
const puntosHTML = document.querySelectorAll('small');

/**
 * Función que actualiza los puntos en la interfaz del juego de Blackjack.
 * @param {number} puntos - Puntos a actualizar.
 * @param {number} turno - Turno del jugador (0 para jugador, 1 para computadora).
 * @returns {void} No retorna ningún valor, solo actualiza el DOM.
 */
export const actualizarPuntos = (puntos, turno) => puntosHTML[turno].innerText = puntos;

/**
 * Función que muestra una carta en la interfaz del juego de Blackjack.
 * @param {string} carta - Carta a mostrar.
 * @param {number} turno - Turno del jugador (0 para jugador, 1 para computadora).
 * @returns {void} No retorna ningún valor, solo actualiza el DOM.
 */
export const mostrarCarta = (carta, turno) => {

    // const divCartas = document.querySelector(turno === 0 ? '#jugador-cartas' : '#computadora-cartas');
    const imgCarta  = document.createElement('img');

    imgCarta.src = `/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartas[turno].append(imgCarta);
}

/**
 * Función que limpia las cartas mostradas en la interfaz del juego de Blackjack.
 * @returns {void} No retorna ningún valor, solo actualiza el DOM.
 */
export const limpiarCartas = () => divCartas.forEach(div => div.innerHTML = '');

/**
 * Función que desactiva los botones de pedir y detener en la interfaz del juego de Blackjack.
 * @returns {void} No retorna ningún valor, solo actualiza el DOM.
 */
export const desactivarBotones = () => {

    btnPedir.disabled   = true;
    btnDetener.disabled = true;
}

/**
 * Función que activa los botones de pedir y detener en la interfaz del juego de Blackjack.
 * @returns {void} No retorna ningún valor, solo actualiza el DOM.
 */
export const activarBotones = () => {

    btnPedir.disabled   = false;
    btnDetener.disabled = false;
}