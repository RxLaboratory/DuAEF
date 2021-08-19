(function()
{
    #include "../DuAEF.jsxinc"

    // Ask var name
    var folder = Folder.selectDialog( "Select export location" );
    if (!folder) return;

    var comp = DuAEProject.getActiveComp();
    if (!comp)
    {
        alert("Nothing found, please select the path to export.");
        return;
    }

    var props = comp.selectedProperties;
    if (props.length == 0)
    {
        alert("Nothing found, please select the path to export.");
        return;
    }

    var path = new DuAEProperty( props.pop() );
    var pathProp = path.pathProperty();
    if (!pathProp)
    {
        alert("Selected property doesn't appear to be a path.");
        return;
    }
    var name = pathProp.getProperty().parentProperty.name;

    var file = new File(folder.absoluteURI + '/' + name + ".jsxinc");

    path.exportPathToJsxinc( file, false, false, name );

})();