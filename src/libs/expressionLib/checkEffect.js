/**
 * Checks the type of an effect.<br />
 * This is a workaround for the missing matchName in expressions.<br />
 * It checks if the given effect has a specific property at a specific index.
 * @function
 * @example
 * if ( checkEffect(thisLayer.effect(1), 1, "Blur") ) { "The first effect is a blur!" }
 * else { "Who knows what this is?" }
 * @param {Property} fx The effect to check
 * @param {int} propIndex The index of the property
 * @param {string} propName The expected name of the property. Be careful with the internationalization of After Effects...
 * @return {boolean} True when the property at propIndex is named propName
 */
function checkEffect(fx, propIndex, propName) {
    if (fx.numProperties  < propIndex) return false;
    //Check when this is a javascript engine (without try/catch for better performance)
    if (!!$.engineName) {
        if ( fx(propIndex).name != propName ) return false;
    }
    //Check with the extendscript engine
    else {
        try { if (fx(propIndex).name != propName) return false; }
        catch (e) { return false; }
    }
    return true;
}