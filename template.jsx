// This template shows you how to use DuESF

//encapsulate the script in a function to avoid global variables
(function (thisObj) {

    #include "DuESF.jsxinc"
    // This is required
    DuESF.init( DuESF.HostApplication.AFTER_EFFECTS, "Your Script Name", "1.0.0", "Your Company");

    // Setting these may prove useful
    DuESF.debug = false; // Change to true when you're developping!
    DuESF.chatURL = 'http://chat.rxlab.info';
    DuESF.bugReportURL = 'http://git.rxlab.io';
    DuESF.featureRequestURL = 'http://git.rxlab.io';
    DuESF.aboutURL = 'http://rxlaboratory.org';
    DuESF.docURL = 'http://duesf.rxlab.io';
    DuESF.scriptAbout = 'The Duduf ExtendScript Framework to help you develop Adobe Scripts';
    DuESF.companyURL = 'https://rxlaboratory.org';

    var ui = DuScriptUI.scriptPanel( thisObj, true, true, new File($.fileName) );

    // One of these is required at the end of init (building ui, etc) and before running methods
    //DuESF.enterRunTime();
    DuScriptUI.showUI(ui, true);

})(this);