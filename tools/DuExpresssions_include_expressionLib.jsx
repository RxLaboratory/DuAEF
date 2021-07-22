(function(){
    #include "../src/DuAEF.jsxinc"

    var thisScriptFile = new File($.fileName);
    var repositoryRootFolder = thisScriptFile.parent.parent;
    var expressionsFolder = new Folder(repositoryRootFolder.absoluteURI + "/src/libs/expressionLib/");

    //A regex to separate documentation from actual js code
    var reDoc = /(\/\*\*(?:\s|\S)*?\*\/)([\s\S]*)/m;

    //list all files
    var expressions = [];
    var expressionFiles = expressionsFolder.getFiles('*.js');
    for (var i = 0, num = expressionFiles.length; i < num; i++)
    {
        var file = expressionFiles[i];
        var expression = {};
        expression.name = file.name.substring(0, file.name.length - 3);
        file.open('r');
        var fileContent = file.read();
        var match = fileContent.match(reDoc);
        expression.doc = match[1];
        expression.expression = match[2];
        file.close();
        expressions.push(expression);
    }

    //create jsxinc content
    var content = ['/**',
        '* Expression Library',
        '* @namespace',
        '* @memberof DuAEF.DuExpression',
        '*/',
        'DuAEF.DuExpression.Library = {};',
        '',
        ''
        ].join('\n');
    for (var i = 0, num = expressions.length; i < num; i++)
    {
        var exp = expressions[i];
        content += exp.doc + '\n';
        content += 'DuAEF.DuExpression.Library.' + exp.name + " = " + DuAEProperty.scriptifyExpression(exp.expression) + '\n\n';
    }

    //write jsxinc
    var jsxinc = new File(expressionsFolder.absoluteURI + "/DuExpressionLibrary.jsxinc");
    jsxinc.open('w');
    jsxinc.write(content);
    jsxinc.close();
    alert(jsxinc.fsName + '\nhas been successfully generated/overwritten.')
})();