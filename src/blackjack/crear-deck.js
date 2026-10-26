import _ from 'underscore';

const tiposDeCarta      = ['C','D','H','S'];
const tiposEspeciales   = ['A','J','Q','K'];

/**
 * Crea y mezcla un mazo de cartas para el juego de Blackjack.
 * @returns {string[]} El mazo de cartas mezclado.
 */
export const crearMazo = () => {

    let mazo = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            mazo.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            mazo.push( esp + tipo);
        }
    }

    mazo = _.shuffle( mazo );
    return mazo;
}
