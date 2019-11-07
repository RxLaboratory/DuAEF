/**
 * Checks if a property is a transform.position property.
 * @function
 * @param {Property} [prop=thisProperty] The property
 * @return {boolean} true if the property is the transform.position property.
 */
function isPosition(prop) {
	if (typeof prop === "undefined") prop = thisProperty;
	if (!(prop.value instanceof Array)) return false;
	if (prop.value.length > 3) return false;
	//compare the name, index and value with the real position
	if ( prop === transform.position ) return true;
	if ( prop === position ) return true;
	return false;
}