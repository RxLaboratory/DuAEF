/**
 * Checks if a property is a layer. Useful when traversing up the property tree to stop when getting the layer.
 * @function
 * @param {Property} prop - The property to test
 * @return {boolean} true if the prop is a layer
 */
function isLayer( prop ) {
	//try catch is needed for the legacy expression engine
	try { if ( prop.index ) return true; }
	catch (e) { return false; }
}