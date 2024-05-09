/**
 * After Effects User Interface tools
 * @namespace
 * @category DuAEF
 */
var DuAEUI = {};

/**
 * The background colors
 * @enum {DuColor[]}
 * @readonly
 */
/* @ts-ignore */
DuAEUI.bgColors = { /* @ts-ignore */
    DARKEST: new DuColor([.11328125, .11328125, .11328125, 1]), /* @ts-ignore */
    DARK: new DuColor([.1953125, .1953125, .1953125, 1]), /* @ts-ignore */
    LIGHT: new DuColor([.96875, .96875, .96875, 1]) /* @ts-ignore */
};

/**
 * The text colors
 * @enum {DuColor[]}
 * @readonly
 */
/* @ts-ignore */
DuAEUI.textColors = { /* @ts-ignore */
    DARK: new DuColor([1,1,1,1]), /* @ts-ignore */
    DARK_REDUCED: new DuColor([.6953125,.6953125,.6953125,1]), /* @ts-ignore */
    LIGHT: new DuColor([0,0,0,1]), /* @ts-ignore */
    LIGHT_REDUCED: new DuColor([.42578125, .42578125, .42578125, 1])
}

/**
 * The limits between the three themes
 * @enum {Number}
 */
DuAEUI.brightnessLimits = {
    DARK: .16,
    LIGHT: .5
};

/**
 * Checks if the "use reduced contrast" appearance option is enabled.
 * @returns {Boolean}
 */
DuAEUI.useReducedContrast = function() {
    if (DuAE.version.version < 24.4 || !app.preferences.havePref(
        "Main Pref Section v2",
        "Use Reduced Contrast",
        PREFType.PREF_Type_MACHINE_INDEPENDENT
    ))
        return true;

    return app.preferences.getPrefAsBool(
        "Main Pref Section v2",
        "Use Reduced Contrast",
        PREFType.PREF_Type_MACHINE_INDEPENDENT
        );
}

/**
 * Gets the current Brightness appearance option.
 * @returns {Number} A value in [0.0 ... 1.0].  
 * In 24.4.0:
 * - Darkest is `<= 0.16`. The corresponding backgound color is [.11328125, .11328125, .11328125, 1]
 * - Dark is `> 0.16`. The corresponding backgound color is [.1953125, .1953125, .1953125, 1]
 * - Light is `> 0.5`.  The corresponding backgound color is [.96875, .96875, .96875, 1]
 */
DuAEUI.brightness = function() {
    if (DuAE.version.version < 24.4 || !app.preferences.havePref(
        "Main Pref Section v2",
        "User Interface Brightness (4) [0.0..1.0]",
        PREFType.PREF_Type_MACHINE_INDEPENDENT
    ))
        return .2;

    return app.preferences.getPrefAsFloat(
        "Main Pref Section v2",
        "User Interface Brightness (4) [0.0..1.0]",
        PREFType.PREF_Type_MACHINE_INDEPENDENT
        );
}

/**
 * Is the UI using the "Darkest" theme?
 * @returns {Boolean}
 */
DuAEUI.isDarkest = function() {
    return DuAEUI.brightness() <= DuAEUI.brightnessLimits.DARK;
}

/**
 * Is the UI using the "Dark" theme?
 * @returns {Boolean}
 */
DuAEUI.isDark = function() {
    return DuAEUI.brightness() > DuAEUI.brightnessLimits.DARK &&
           DuAEUI.brightness() <= DuAEUI.brightnessLimits.LIGHT;
}

/**
 * Is the UI using the "Light" theme?
 * @returns {Boolean}
 */
DuAEUI.isLight = function() {
    return DuAEUI.brightness() > DuAEUI.brightnessLimits.LIGHT;
}

/**
 * Gets the current bakckground color
 * @returns {DuColor}
 */
DuAEUI.bgColor = function() {
    if (DuAE.version.version < 24.4) {
        var color = app.themeColor( 78 );
		color.push(1);
        return new DuColor(color);
    }
    if (DuAEUI.isDarkest()) return DuAEUI.bgColors.DARKEST;
    if (DuAEUI.isDark()) return DuAEUI.bgColors.DARK;
    if (DuAEUI.isLight()) return DuAEUI.bgColors.LIGHT;
}

/**
 * Gets the current foreground color
 * @returns {DuColor}
 */
DuAEUI.textColor = function() {
    // Dark
    if (DuAEUI.brightness() <= DuAEUI.brightnessLimits.DARK) {
        if (DuAEUI.useReducedContrast()) return DuAEUI.textColors.DARK_REDUCED;
        return DuAEUI.textColors.DARK;
    }
    // Light
    if (DuAEUI.useReducedContrast()) return DuAEUI.textColors.LIGHT_REDUCED;
    return DuAEUI.textColors.LIGHT;
}