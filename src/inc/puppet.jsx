
/**
 * Puppet tool methods
 * @namespace
 * @category DuAEF
 */
var DuAEPuppet = {};

/**
 * Checks if a pin can be rigged or not.\nFor now, the only pins which can not be rigged are starch pins.
 * @param {PropertyGroup} pin - The pin to test
 * @return {boolean} True if this pin has either a position, rotation or scale property
 */
DuAEPuppet.riggable = function ( pin ) {
    if ( pin.position.canSetExpression ) return true;
    if ( pin.rotation.canSetExpression ) return true;
    if ( pin.scale.canSetExpression ) return true;
    return false;
}