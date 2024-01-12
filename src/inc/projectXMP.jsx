/**
 * Manages XMP Metadata of the project.
 * @namespace
 * @category DuAEF
 */
var DuAEProjectXMP = {};

/**
 * Gets the XMP of the current project
 * @return {XMPMeta} The XMP data
 */
DuAEProjectXMP.getXmp = function()
{
    if (!DuXMP.init()) return null;
    if (!app.project.file) return null;
    return new XMPMeta(app.project.xmpPacket)
}

/**
 * Gets the value of a property.
 * @param {string} prop The name of the property
 * @param {*} [defaultVal] A default value to be returned if the property is not found.
 * @return {Object} The value
 */
DuAEProjectXMP.getPropertyValue = function( prop, defaultVal)
{
    var xmp = DuAEProjectXMP.getXmp();
    if (!xmp) return null;

    var p = xmp.getProperty(XMPConst.NS_XMP, prop);

    if (!p) return defaultVal;
    if (p.value === null) return defaultVal;
    return p.value;
}

/**
 * Sets the value of a property.
 * @param {string} prop The name of the property
 * @param {Object} value The value
 */
DuAEProjectXMP.setPropertyValue = function(prop, value)
{
    var xmp = DuAEProjectXMP.getXmp();
    if (!xmp) return null;

    var type;
    var options = 0;
    var isArray = false;

    //Check type
    //TODO if array, use setArrayItem (see XMP doc)
    if (jstype(value) === 'array')
    {
        options = XMPConst.PROP_IS_ARRAY;
        isArray = true;
    }

    var testVal;
    if (isArray && value.length > 0) testVal = value[0];
    else testVal = value;

    if (jstype(testVal) === 'string')
    {
        type = XMPConst.STRING;
    }
    else if (jstype(testVal) === 'number')
    {
        var testInt = Math.round(testVal);
        if (testInt == testVal) type = XMPConst.INTEGER;
        else type = XMPConst.NUMBER;
    }
    else if (jstype(testVal) === 'boolean')
    {
        type = XMPConst.BOOLEAN;
    }
    else if (jstype(testVal) === 'date')
    {
        type = XMPConst.XMPDATE;
    }

    xmp.setProperty(XMPConst.NS_XMP, prop, value, options, type);
    app.project.xmpPacket = xmp.serialize();
}

/**
 * Gets the project settings stored in XMP by DuAEF.
 * @return {object} The settings.
 */
DuAEProjectXMP.getSettings = function ()
{
    var json = null;
    try {
        json = JSON.parse(DuAEProjectXMP.getPropertyValue("DuAEF"));
    } catch (e) {}
    if (!json) json = {};
    return json;
}

/**
 * Saves the project settings stored in XMP by DuAEF.
 * @param {object} settings The settings.
 */
DuAEProjectXMP.saveSettings = function (settings)
{
    var str = JSON.stringify(settings);
    DuAEProjectXMP.setPropertyValue("DuAEF", str);
}

/**
 * The Settings of the current project, an object similar to {@link DuSettings} except that it saves in the Project XMP
 * @type {Object}
 */
DuAEProject.settings = {}

/**
 * The settings data
 * @type {Object}
 */
DuAEProject.settings.data = {};

/**
 * Updates the settings: reads them in the XMP of the current project. Call this function before reading the data.
 */
DuAEProject.settings.update = function()
{
    DuAEProject.settings.data = DuAEProjectXMP.getSettings();
}

/**
 * Saves the settings to the project XMP
 */
DuAEProject.settings.save = function()
{
    DuAEProjectXMP.saveSettings(DuAEProject.settings.data);
}