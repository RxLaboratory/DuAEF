/**
 * Checks if current time is after the time of the last key in the property
 * @function
 * @return {boolean} true if time is > lastkey.time
 */
function isAfterLastKey() {
	if (numKeys == 0) return false;
	var nKey = nearestKey(time);
	return nKey.time <= time && nKey.index == numKeys;
}
