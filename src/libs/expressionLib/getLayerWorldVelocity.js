/**
 * Gets the world instant velocity of a layer.
 * @function
 * @param {number} [t=time] The time when to get the velocity
 * @param {Layer} [l=thisLayer] The layer
 * @return {number[]} The velocity.
 * @requires getLayerWorldPos
 */
function getLayerWorldVelocity(t, l) {
	if (typeof t === "undefined") t = time;
	return (getWorldPos(t, l) - getWorldPos(t - 0.01, l)) * 100;
}