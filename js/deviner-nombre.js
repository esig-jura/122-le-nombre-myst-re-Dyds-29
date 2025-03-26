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

alert(tireNombre(50,150));