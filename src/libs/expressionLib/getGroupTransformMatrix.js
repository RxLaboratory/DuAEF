/**
 * Gets the transformation Matrix for the current group in a shape layer, including the transformation from the ancestor groups
 * @function
 * @return {Matrix} The 2D Transform Matrix.
 * @requires isLayer
 * @requires Matrix
 */
function getGroupTransformMatrix( ) {
    // A Matrix to apply group transforms
    var matrix = new Matrix();

	// Get all groups from this propperty
	var shapeGroups = [];
	var parentProp = thisProperty.propertyGroup(1);
	while( parentProp && !isLayer(parentProp) )
	{
		if ( parentProp.transform ) shapeGroups.push( parentProp.transform );
		parentProp = parentProp.propertyGroup(1);
	}
	
	for (var i = shapeGroups.length - 1; i >= 0; i--)
	{
		var group = shapeGroups[i];

		// position
		matrix.translate( group.position.value );
		// rotation
		matrix.rotate( group.rotation.value );
		// anchor point inverse transform, taking sale into account
		var aPX = -( group.anchorPoint.value[ 0 ] * group.scale.value[ 0 ] / 100 );
		var aPY = -( group.anchorPoint.value[ 1 ] * group.scale.value[ 1 ] / 100 );
		matrix.translate( [ aPX, aPY ] );
		// scale
		matrix.scale( group.scale.value / 100 );
	}

    return matrix;
}