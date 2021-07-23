// This file is used for testing DuESF

//encapsulate the script in a function to avoid global variables
(function (thisObj) {

    #include "DuAEF.jsxinc"
    // This is required
    DuAEF.init( "Duik NoName", "17.0.0-Dev", "RxLaboratory");

    // Setting these may prove useful
    DuESF.chatURL = 'http://chat.rxlab.info';
    DuESF.bugReportURL = 'http://git.rxlab.io';
    DuESF.featureRequestURL = 'http://git.rxlab.io';
    DuESF.aboutURL = 'http://rxlaboratory.org';
    DuESF.docURL = 'http://duesf.rxlab.io';
    DuESF.scriptAbout = 'The Duduf ExtendScript Framework to help you develop Adobe Scripts';
    DuESF.companyURL = 'https://rxlaboratory.org';

    var ui = DuScriptUI.scriptPanel( thisObj, true, true, new File($.fileName) );
    ui.addCommonSettings();

    // A tab panel
    var tabPanel = DuScriptUI.tabPanel( ui.mainGroup, 'column' );

    // A tab
    var firstTab = tabPanel.addTab( "First", DuScriptUI.Icon.ROOKIE, "A tab with an icon and a text" )
    var secondTab = tabPanel.addTab( "Second", DuScriptUI.Icon.STANDARD, "A tab with an icon and a text" )
    var thirdTab = tabPanel.addTab( "Third", DuScriptUI.Icon.EXPERT, "A tab with an icon and a text" )

    firstTab.build = function( )
    {
        #include "inc/tests/testPseudoEffect.jsxinc";

        var pseudoButton = DuScriptUI.button( this, 'Apply test pseudo effect' );
        pseudoButton.onClick = function() { 
            var pseudoEffect = new DuAEPseudoEffect( testPseudoEffect );
            var comp = DuAEProject.getActiveComp();
            if (!comp) return;
            if (comp.layers.length == 0) return;
            alert(pseudoEffect.matchName);
            var effect = pseudoEffect.apply( comp.layer(1) );
            alert(pseudoEffect.props);
            alert(effect);
        };

        var layerSelector = DuScriptUI.layerSelector( this, "A layer selector");

        layerSelector.onChange = function() {
            alert(layerSelector.getLayer());
        }
    }

    secondTab.build = function( )
    {
        var testButton = DuScriptUI.button( this, 'Button with options', undefined, undefined, true );
        testButton.onClick = function() { alert('Hello World!'); };

        var testCheckBox = DuScriptUI.checkBox( this, 'CheckBox' );

        var testIconButton = DuScriptUI.button( this, 'Icon Button', DuScriptUI.Icon.ROOKIE, 'Help!' );

        var testIconButtonOpts = DuScriptUI.button( this, 'Icon Button w/ opts', DuScriptUI.Icon.ROOKIE, 'Help!', true );

        var testIconCheckBox = DuScriptUI.checkBox( this, 'Icon CheckBox', DuScriptUI.Icon.ROOKIE, 'Checkbox', 'Icon Checked' );

        var textEdit = DuScriptUI.editText( this, '', 'prefix ', ' suffix', "edit text", "This is an edit text field");
        
        var staticText = DuScriptUI.staticText( this, 'Static Text', undefined, "This is astatic text field");
        var staticColoredText = DuScriptUI.staticText( this, 'Colored Static Text', DuColor.Color.RAINBOX_RED, "This is astatic text field");

        var folderSelector = DuScriptUI.folderSelector( this, "Select a folder...", true, "A folder selector");
        
        var fileOpenSelector = DuScriptUI.fileSelector( this, "Open file...", true, "A file selector");
        
        var fileSaveSelector = DuScriptUI.fileSelector( this, "Save file...", true, "A file selector", undefined, 'save', "After Effects Project: *.aep, All files: *.*");
        
        var slider = DuScriptUI.slider( this, 17, 0, 100, 'column', false, "A slider: ", "%");
    }
    

    // One of these is required at the end of init (building ui, etc) and before runtime.
    //DuAEF.enterRunTime();
    DuScriptUI.showUI(ui, true);
})(this);