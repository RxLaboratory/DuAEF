/**
 * After Effects item methods
 * @namespace
 * @category DuAEF
 */
var DuAEItem = {};

DuAEItem.stillFormats = [
    "bmp",
    "rle",
    "dib",
    "tif",
    "crw",
    "nef",
    "raf",
    "orf",
    "mrw",
    "dcr",
    "mos",
    "raw",
    "pef",
    "srf",
    "dng",
    "x3f",
    "cr2",
    "erf",
    "sr2",
    "kdc",
    "mfw",
    "mef",
    "arw",
    "nrw",
    "rw2",
    "rwl",
    "iiq",
    "3fr",
    "fff",
    "srw",
    "gpr",
    "dxo",
    "heic",
    "arq",
    "cr3",
    "cin",
    "dpx",
    "img",
    "ei",
    "ai",
    "pdf",
    "eps",
    "ai3",
    "ai4",
    "ai5",
    "ai6",
    "ai7",
    "ai8",
    "epsf",
    "epsp",
    "jpg",
    "jpeg",
    "jfif",
    "jpe",
    "ico",
    "exr",
    "sxr",
    "mxr",
    "psd",
    "psb",
    "png",
    "hdr",
    "rgbe",
    "xyze",
    "rla",
    "rpf",
    "sgi",
    "bw",
    "rgb",
    "pic",
    "tga",
    "vda",
    "icb",
    "vst",
    "tiff"
]

//low-level undocumented method
//a function to compare items
DuAEItem.compareItems = function (itemA, itemB) { return itemA.id == itemB.id; }

/**
 * Gets the compositions this item is used in.
 * @param {AVItem} item The item
 * @param {boolean} [includeExpressionOnly=false] Check for comps using this item only through expressions. The cache has to be updated with {@link DuAEProject.updateExpressionCache} before using this method with this argument set to true.
 * @param {boolean} [recursive=false] Check recursively in parent comps too.
 * @return {CompItem[]} The compositions.
 */
DuAEItem.usedIn = function (item, recursive, keepExpressionOnly ) {
    keepExpressionOnly = def (keepExpressionOnly, false);
    recursive = def (recursive, false);
    var cacheSuspended = false;

    if (item instanceof FolderItem) return [];

    var usedIn = item.usedIn;

    if (!keepExpressionOnly) return usedIn;

    //update cache if needed
    var currentTime = new Date().getTime();
    if ( ( currentTime - DuAEProject.lastExpressionCacheUpdateTime > 60000 ) || DuAEProject.expressionCache.length == 0) {
        DuAEProject.updateExpressionCache();
        DuAEProject.suspendCacheUpdates = true;
        cacheSuspended = true;
    }

    //the regexps we need 
    var regExp = '';
    var itemNameRegEx = DuRegExp.escape(item.name);
    if (item instanceof CompItem ) regExp = new RegExp("comp\\s*\\(\\s*(\"|')" + itemNameRegEx + "\\1\\s*\\)");
    else regExp = new RegExp("footage\\s*\\(\\s*(\"|')" + itemNameRegEx + "\\1\\s*\\)");

    //check for expressions using this item
    for (var i = 0, num = DuAEProject.expressionCache.length; i < num; i++)
    {
        var exp = DuAEProject.expressionCache[i];
        if ( regExp.test(exp.expression) ) usedIn.push( exp.layer.containingComp );
    }

    if ( recursive ) {
        for ( var i = 0, num = usedIn.length; i < num; i++) {
            usedIn = usedIn.concat( DuAEItem.usedIn( usedIn[i] , true, keepExpressionOnly ) );
        }
    }

    usedIn = new DuList(usedIn);
    usedIn.removeDuplicates(DuAEItem.compareItems);

    if (cacheSuspended) DuAEProject.suspendCacheUpdates = false;

    return usedIn;
}

/**
 * Checks if this item source is an image sequence
 * @param {FootageItem} item The item
 * @return {boolean} true if the source is an image sequence
 */
DuAEItem.isImageSequence = function (item) {
    if (!(item instanceof FootageItem)) return false;

    //check if it's still
    if (item.mainSource.isStill) return false;

    //check if it's a video 
    var extension = DuPath.getExtension(item.file);
    extension = extension.toLowerCase();

    stillfmts = new DuList( DuAEItem.stillFormats )

    return stillfmts.indexOf( extension ) >= 0;

}

/**
 * Checks recursively (except for root folder) if an item is in a specific folder
 * @param {Item} item The item to check
 * @param {FolderItem} folder The folder
 * @return {boolean}
 */
DuAEItem.isInFolder = function (item, folder)
{
    var pFolder = item.parentFolder;
    if (pFolder.id == app.project.rootFolder.id && pFolder.id == folder.id) return true;
    while (pFolder && pFolder.id != app.project.rootFolder.id)
    {
        if (pFolder.id == folder.id) return true;
        pFolder = pFolder.parentFolder;
    }
    return false;
}