/**
 * Converts the point coordinates from Layer to the current group in the shape layer.<br />
 * Use fromWorld or fromComp first if you need to convert from the world or composition coordinates, and pass the result to this function.
 * @function
 * @param {number[]} point The 2D coordinates of the point in the Layer.
 * @return {number[]} The 2D coordinates of the point in the current group.
 * @requires isLayer
 * @requires Matrix
 * @requires getGroupTransformMatrix
 */
function fromLayerToGroup( point ) {
    var matrix = getGroupTransformMatrix().inverse();
    return matrix.applyToPoint( point );
}