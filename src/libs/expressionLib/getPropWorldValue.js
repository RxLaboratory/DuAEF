/**
 * Gets the world coordinates of a property.
 * @function
 * @param {number} [t=time] Time from when to get the position
 * @param {Layer} [prop=thisProperty] The property
 * @return {number[]} The world coordinates
 * @requires getLayerWorldPos
 */
function getPropWorldValue(t, prop) {
	if (typeof prop === "undefined") prop = thisProperty;
	if (typeof t === "undefined") t = time;
	if (isPosition(prop)) return getLayerWorldPos(t);
	return thisLayer.toWorld(prop.valueAtTime(t), t);
}