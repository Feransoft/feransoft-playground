import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {    crearDeck, 
            pedirCarta, 
            valorCarta, 
            turnoComputadora, 
            actualizarPuntos, 
            mostrarCarta, 
            limpiarCartas, 
            desactivarBotones, 
            activarBotones } from './blackjack/index';

let deck         = [];
let puntosJugador = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    
    actualizarPuntos(puntosJugador, 0);
    mostrarCarta(carta, 0);

    if ( puntosJugador >= 21 ) {

        console.warn(puntosJugador > 21 ? 'Lo siento mucho, perdiste' : '¡21, genial!');

        desactivarBotones();
        turnoComputadora( puntosJugador, deck );
    }
});

btnDetener.addEventListener('click', () => {
    
    desactivarBotones();
    turnoComputadora( puntosJugador, deck );
});

btnNuevo.addEventListener('click', () => {

    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    
    console.clear();
    actualizarPuntos(0, 0);
    actualizarPuntos(0, 1);
    limpiarCartas();
    activarBotones();

});