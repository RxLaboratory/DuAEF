/**
 * Gets the world velocity of a property.
 * @param {number} [t=time] Time from when to get the position
 * @param {Layer} [prop=thisProperty] The property
 * @return {number[]} The world velocity
 * @requires getPropWorldValue
 * @requires getLayerWorldPos
 */
function getPropWorldVelocity(t, prop) {
	if (typeof t === "undefined") t = time;
	return (getPropWorldValue(t, prop) - getPropWorldValue(t - 0.01, prop)) * 100;
}