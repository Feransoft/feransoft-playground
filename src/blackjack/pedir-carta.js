/**
 * Extrae la última carta del mazo.
 * @param {string[]} mazo - Mazo de cartas disponible.
 * @returns {string} La carta extraída del mazo.
 */
// Esta función me permite tomar una carta
export const sacarCartaDelMazo = (mazo) => {

    if ( mazo.length === 0 ) {
        throw 'No hay cartas en el mazo';
    }
    const carta = mazo.pop();
    return carta;
}
