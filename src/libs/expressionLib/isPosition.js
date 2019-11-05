/**
 * Checks if a property is a transform.position property.
 * @function
 * @param {Property} [prop=thisProperty] The property
 * @return {boolean} true if the property is the transform.position property.
 */
function isPosition(prop) {
	if (typeof prop === "undefined") prop = thisProperty;
	if (!(thisProperty.value instanceof Array)) return false;
	if (thisProperty.value.length > 3) return false;
	//compare the value to world with the anchor point to world
	var apWorld = thisLayer.toWorld(thisLayer.anchorPoint.valueAtTime(0), 0);
	var posWorld = thisProperty.valueAtTime(0);
	if (thisLayer.hasParent) posWorld = thisLayer.parent.toWorld(posWorld, 0);
	var result = true;
	for (var i = 0, num = thisProperty.value.length; i < num; i++) {
		if (posWorld[i] != apWorld[i]) return false;
	}
	return true;
}