/**
 * Gets the key immediately before the given time
 * @function
 * @param {number} [t=time] Time at which to get the key
 * @return {Key|null} The key, or null if there's no key before.
 */
function getPrevKey(t) {
    if (typeof t === "undefined") t = time;
    if (numKeys == 0) return null;
    var nKey = nearestKey(t);
    if (nKey.time <= t) return nKey;
    if (nKey.index > 1) return key(nKey.index - 1);
    return null;
  }