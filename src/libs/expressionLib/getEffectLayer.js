/**
 * Gets a layer from a layer property in an effect, without generating an error if "None" is selected with the Legacy expression engine.
 * @function
 * @param {Property} fx The effect
 * @param {int|string} ind The index or the name of the property
 * @return {Layer|null} The layer, or null if set to "None"
 */
function getEffectLayer( fx, ind ) {
	try { var l = fx( ind ); return l; }
	catch ( e ) { return null; }	
}