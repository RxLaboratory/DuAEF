/**
 * Checks the type of a pseudo-effect used by Duik.<br />
 * This is a workaround for the missing matchName in expressions.<br />
 * Pseudo-Effects used by Duik start with a hidden property which name is the same as the matchName of the effect itself (without the 'Pseudo/' part).
 * @function
 * @example
 * if ( checkEffect(thisLayer.effect(1), "DUIK parentConstraint2") ) { "This is the second version of the parent constraint by Duik" }
 * else { "Who knows what this is?" }
 * @param {Property} fx The effect to check
 * @param {string} duikMatchName The matchName of a pseudo-effect used by Duik (without the 'Pseudo/' part)
 * @return {boolean} True when the property at propIndex is named propName
 */
function checkDuikEffect(fx, duikMatchName) {
    if (fx.numProperties  < 3) return false;
    if (!!$.engineName) {
        if ( fx(2).name != duikMatchName ) return false;
    }
    else {
        try { if (fx(2).name != duikMatchName) return false; }
        catch (e) { return false; }
    }
    return true;
}