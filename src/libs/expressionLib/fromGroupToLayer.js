/**
 * Converts the point coordinates from the current group in the shape layer to the Layer.<br />
 * Use toWorld and toComp with the result if you need te coordinates in the world or the comp.
 * @function
 * @param {number[]} point The 2D coordinates of the point in the current group.
 * @return {number[]} The 2D coordinates of the point in the Layer.
 * @requires isLayer
 * @requires Matrix
 * @requires getGroupTransformMatrix
 */
function fromGroupToLayer( point ) {
    var matrix = getGroupTransformMatrix();
    return matrix.applyToPoint( point );
}