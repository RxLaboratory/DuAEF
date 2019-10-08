/**
 * Gets the world orientation of a (2D) layer at a specific time.
 * @function
 * @param {Layer} l The layer to get the orientation from
 * @param {float} [t=time] The time at which to get the orientation
 * @return {float} The orientation, in degrees.
 */
function getOrientationAtTime( l, t ) {
    if (typeof t === "undefined" ) t = time;
    var r = 0;
    r += l.rotation.valueAtTime( t );
    while ( l.hasParent ) {
        l = l.parent;
        r += l.rotation.valueAtTime( t );
    }
    return r;
}