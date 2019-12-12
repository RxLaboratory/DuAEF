/**
 * Gets the world velocity of a property.
 * @function
 * @param {number} [t=time] Time from when to get the position
 * @param {Layer} [prop=thisProperty] The property
 * @return {number[]} The world velocity
 * @requires getPropWorldValue
 * @requires getLayerWorldPos
 */
function getPropWorldVelocity(t, prop) {
	if (typeof t === "undefined") t = time;
	return (getPropWorldValue(t + 0.005, prop) - getPropWorldValue(t - 0.005, prop)) * 100;
}