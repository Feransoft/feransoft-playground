import _ from 'underscore';

const tiposDeCarta      = ['C','D','H','S'];
const tiposEspeciales   = ['A','J','Q','K'];

/**
 * Función que crea un nuevo deck de cartas para el juego de Blackjack.
 * @returns {string[]} Retorna un array con las cartas del deck mezcladas.
 */
export const crearDeck = () => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}