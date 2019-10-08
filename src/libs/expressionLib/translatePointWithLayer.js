/**
 * Translates a point with a layer, as if it was parented to it.
 * @function
 * @param {Layer} l The layer to get the translation from.
 * @param {float[]} [point=[0,0]] The [X,Y] point to translate (using world coordinates).
 * @param {float} [startFrame=0] The start frame of the translation
 * @param {float} [endFrame=timeToFrames()] The end frame of the translation
 * @return {float[]} The coordinates of the translated point.
 */
function translatePointWithLayer( l, point, startFrame, endFrame ) {
    if (typeof startFrame === "undefined") startFrame = 0;
    if (typeof endFrame === "undefined") endFrame = timeToFrames();
    var sT = framesToTime( startFrame );
    var eT = framesToTime( endFrame );
    try {
        var pos = l.fromWorld( point, sT );
    } catch ( e ) {
        var pos = [ 0, 0 ];
    }
    var prevPos = l.toWorld( pos, sT );
    var newPos = l.toWorld( pos, eT );
    return newPos - prevPos;
}