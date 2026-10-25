/**
 * Función que permite tomar una carta del deck.
 * @param {string[]} deck - Deck de cartas disponible.
 * @returns {string} La carta pedida del deck.
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}