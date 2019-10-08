/**
 * Gets the world orientation of a (2D) layer.
 * @function
 * @param {Layer} l The layer to get the orientation from
 * @return {float} The orientation, in degrees.
 */
function getOrientation( l ) {
    var r = 0;
    r += l.rotation.value;
    while ( l.hasParent ) {
        l = l.parent;
        r += l.rotation.value;
    }
    return r;
}