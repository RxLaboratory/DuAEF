/**
 * Shape Layer methods
 * @namespace
 * @category DuAEF
 */
var DuAEShapeLayer = {};

/**
 * A List of primitive shapes
 * @enum {Number}
 */
DuAEShapeLayer.Primitive = {
    NONE: 0,
    CIRCLE: 1,
    SQUARE: 2,
    ROUNDED_SQUARE: 3,
    POLYGON: 4,
    STAR: 5
}

/**
 * Gets the transformation matrix for all the parent groups of a given property
 * @param {PropertyBase|DuAEProperty} prop - The property
 * @param {Boolean} [includeLayerTransform=true] - Whether to include the layer transformation in the matrix
 * @return {Matrix} The transformation matrix.
 */
DuAEShapeLayer.getTransformMatrix = function ( prop, includeLayerTransform ) {
    includeLayerTransform = def(includeLayerTransform, true);

    var propInfo = new DuAEProperty( prop );
    prop = propInfo.getProperty();

    var matrix = new Matrix();
    if (includeLayerTransform) matrix = DuAELayer.getTransformMatrix( propInfo.layer );

    var props = [];

    //get the groups
    var parentProp = prop;
    while ( parentProp.parentProperty ) {
        if ( parentProp.matchName == "ADBE Vector Group" ) {
            props.push( parentProp );
        }
        // Traverse up the property tree
        parentProp = parentProp.parentProperty;
    }

    //apply transforms from the ancestor
    for ( var i = props.length - 1; i >= 0; i-- ) {
        var p = props[ i ].property( "ADBE Vector Transform Group" );
        matrix.translate( - p.property( "ADBE Vector Anchor" ).value );
        matrix.translate( p.property( "ADBE Vector Position" ).value );
        matrix.rotate( p.property( "ADBE Vector Rotation" ).value );
        matrix.scale( p.property( "ADBE Vector Scale" ).value / 100 );
    }

    return matrix;
}

/**
 * Checks if this shape layers contains only one shape, one fill, and one stroke,\n
 * just like After Effects creates them at first.
 * @param {Layer} layer - The layer to test
 * @return {bool} True if the layer is a shape layer containing only one shape, one fill, and one stroke in a group. False otherwise.
 */
DuAEShapeLayer.isSingleShape = function ( layer ) {
    if ( !( layer instanceof ShapeLayer ) ) return false;

    var content = layer.property( "ADBE Root Vectors Group" );
    if ( content.numProperties != 1 ) return false;

    var shape = content.property( "ADBE Vector Group" ).property( "ADBE Vectors Group" );
    if ( shape.numProperties != 3 ) return false;

    var path = shape.property( 1 );
    if ( path.matchName != "ADBE Vector Shape - Group" && path.matchName != "ADBE Vector Shape - Rect" && path.matchName != "ADBE Vector Shape - Ellipse" && path.matchName != "ADBE Vector Shape - Star" ) return false;
    var stroke = shape.property( 2 );
    if ( stroke.matchName != "ADBE Vector Graphic - Stroke" ) return false;
    var fill = shape.property( 3 );
    if ( fill.matchName != "ADBE Vector Graphic - Fill" ) return false;

    return true;
}

/**
 * Gets the content of a specific group in the shape layer
 * @param {ShapeLayer} layer The layer
 * @param {string} path The path, using group names. e.g. <code>'Group 1/Subgroup'</code>
 * @return {PropertyGroup|null} The contents of the vector group, or null if it can't be found.
 */
DuAEShapeLayer.getVectorGroupContents = function( layer, path ) {
    path = path.split("/");
    var content = layer.property("ADBE Root Vectors Group");
    if (!content) return null;
    for (var i = 0, n = path.length; i < n; i++) {
        subgroup = path[i];
        content = content.property(subgroup);
        if (!content) return null;
        content = content.property('ADBE Vectors Group');
    }
    return content;
}

/**
 * Gets the transform of a specific group in the shape layer
 * @param {ShapeLayer} layer The layer
 * @param {string} path The path, using group names. e.g. <code>'Group 1/Subgroup'</code>
 * @return {PropertyGroup|null} The contents of the vector group, or null if it can't be found.
 */
DuAEShapeLayer.getVectorGroupTransform = function( layer, path ) {
    path = path.split("/");
    var content = layer.property("ADBE Root Vectors Group");
    if (!content) return null;
    for (var i = 0, n = path.length; i < n; i++) {
        subgroup = path[i];
        content = content.property(subgroup);
        if (!content) return null;
        if (i != n - 1) content = content.property('ADBE Vectors Group');
        else content = content.property("ADBE Vector Transform Group");
    }
    return content;
}