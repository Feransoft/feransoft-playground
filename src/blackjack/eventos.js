import { procesarCartaJugador, plantarseJugador, iniciarPartida } from './juego.js';

/**
 * Registra los eventos de los botones del juego
 * @returns {void} No retorna ningún valor, solo registra los eventos en los botones del DOM.
 */
export const registrarEventosJuego = () => {
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');

    btnPedir.addEventListener('click', procesarCartaJugador);
    btnDetener.addEventListener('click', plantarseJugador);
    btnNuevo.addEventListener('click', iniciarPartida);
};
