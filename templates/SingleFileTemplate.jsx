/*
This is a Script/ScriptUI Template using the Duduf After Effects Framework (DuAEF).
The script can be launched both from ScriptUI Panels or the File/Scripts/Run Script... menu.
*/

//encapsulate the script in a function to avoid global variables
(function (thisObj) {

	//================
	#include DuAEF.jsxinc
	DuAEF.init("Your Script Name", "1.0.2");

	// ================ FUNCTIONS =============
	//MAIN


	//UI EVENTS


	// _______ UI SETUP _______
	var ui = DuAEF.DuScriptUI.createUI(thisObj);

	// ============ UI CONTENT =================
	var contents = ui.contents;
	DuAEF.DuScriptUI.addStaticText(contents, "Welcome to " + DuAEF.scriptName);


	//Show UI
	DuAEF.DuScriptUI.showUI(ui);
	DuAEF.enterRunTime();
})(this);
