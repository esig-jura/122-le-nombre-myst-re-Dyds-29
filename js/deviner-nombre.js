/**
 * Jeu du nombre mystère
 * @author  Dylan Teixeira Batista
 * @version 2.0
 * @since   2025-26-03 (date de création)
 */

'use strict';


/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const MIN = 1;
const MAX = 100;


let nbMystere = tireNombre(MIN, MAX);
let nbEssais = 0;
let message = `Le nombre à deviner est compris entre ${MIN} et ${MAX}.`;
let reponse = null;

do
{
    reponse = Number(prompt(message));
    nbEssais ++;

    if (reponse > nbMystere)
    {
        message = 'Trop grand';
    }
    if (reponse < nbMystere)
    {
        message = 'Trop petit';
    }

}while (nbMystere !== reponse);


alert('Vous avez trouvé après ' + nbEssais + ' essais');






