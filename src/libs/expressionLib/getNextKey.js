/**
 * Gets the key immediately after the given time
 * @function
 * @param {number} [t=time] Time at which to get the key
 * @return {Key|null} The key, or null if there's no key before.
 */
function getNextKey(t) {
    if (typeof t === "undefined") t = time;
    if (numKeys == 0) return null;
    var nKey = nearestKey(t);
    if (nKey.time >= t) return nKey;
    if (nKey.index < numKeys) return key(nKey.index + 1);
    return null;
  }
  