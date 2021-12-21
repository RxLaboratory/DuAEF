// This file is used for testing DuAEF

//encapsulate the script in a function to avoid global variables
(function(thisObj) {
    #include DuAEF.jsxinc

    DuAEF.init("DuAEF Test", "0.0.0", "RxLaboratory");
    DuAEF.enterRunTime();

    DuAE.beginUndoGroup("DuAEF Test");

    alert(app.findMenuCommandId("Convert Audio to Keyframes"));
    DuAE.endUndoGroup();
})(this);