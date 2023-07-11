// This file is used for testing DuAEF

//encapsulate the script in a function to avoid global variables
(function (thisObj) {

    var prop = app.project.activeItem.layer(1).transform.rotation;
    var ease = prop.keyOutTemporalEase( 2 );
    alert(ease);
    prop.setTemporalEaseAtKey(2, prop.keyInTemporalEase( 2 ), ease);


})(this);