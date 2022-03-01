// This file is used for testing DuAEF

//encapsulate the script in a function to avoid global variables
(function (thisObj) {

    #include "DuAEF.jsxinc"

    alert( DuAELayer.isRenderable( app.project.activeItem.layer(1) ) );

})(this);