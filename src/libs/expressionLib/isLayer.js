/**
 * Checks if a property is a layer. Useful when traversing up the property tree to stop when getting the layer.
 * @function
 * @param {Property} prop - The property to test
 * @return {boolean} true if the prop is a layer
 */
function isLayer( prop ) {
	if ( prop.index ) return true;
	else return false;
}