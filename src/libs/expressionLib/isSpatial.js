/**
 * Checks if a property is spatial
 * @param {Property} prop The property to check
 * @return {boolean} true if the property is spatial.
 */
function isSpatial(prop) {
	if (typeof prop === "undefined") prop = thisProperty;
	if (!(prop.value instanceof Array)) return false;
	if (prop.value.length != 2 && prop.value.length != 3) return false;
	try {
		sp = prop.speed;
		return true;
	} catch (e) {
		return false;
	}
}