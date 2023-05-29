var comp = app.project.items.addComp('Test', 1280, 720, 1, 2, 24);
var layer = comp.layers.addText();
var effects = layer('ADBE Effect Parade');

//returns number[]. First value, duration of Conditions, second duration of Try/catch
function runTest()
{
    //purge memory
    app.purge(PurgeTarget.ALL_CACHES);

    //start timer
    var startTime = new Date().getTime();

    //add expression
    layer.text.sourceText.expression = ['var result = "Not Found.";',
        'for (var i = 1, num = thisLayer( "Effects" ).numProperties; i <= num; i++ ) {',
        '	var fx = thisLayer.effect(i);',
        '	if (fx.numProperties >= 5)',
        '	{',
        '		if (fx(5).name == "Luminosité") result = "Found at index " + i;',
        '	}',
        '}',
        'result;'
        ].join('\n');

    //get value
    var valConditions = layer.text.sourceText.valueAtTime(1, false);

    //check timer
    var durationConditions = new Date().getTime() - startTime;

    //purge memory
    app.purge(PurgeTarget.ALL_CACHES);

    //start timer
    startTime = new Date().getTime();

    //add other expression
    layer.text.sourceText.expression = ['var result = "Not Found.";',
        'for (var i = 1, num = thisLayer( "Effects" ).numProperties; i <= num; i++ ) {',
        '	var fx = thisLayer.effect(i);',
        '	try { if (fx(5).name == "Luminosité") result = "Found at index " + i; }' ,
        '   catch(e) {}',
        '	}',
        '}',
        'result;'
        ].join('\n');

    //get value
    var valConditions = layer.text.sourceText.valueAtTime(1, false);

    //check timer
    var durationTryCatch = new Date().getTime() - startTime;

    return [durationConditions, durationTryCatch];
}

//add a bunch of effects
for (var i = 0; i < 25; i++)
{
    effects.addProperty('ADBE Slider Control');
}

//add a fractal noise
var fx = effects.addProperty('ADBE Fractal Noise');
fx.name = "It's me!";

//add another bunch of effects
for (var i = 0; i < 25; i++)
{
    effects.addProperty('ADBE Stroke');
}

var durationConditions = 0;
var durationTryCatch = 0;
for (var i = 0; i < 50; i++)
{
    var result = runTest();
    durationConditions += result[0];
    durationTryCatch += result[1];
}


//do some math
var winner = 'Try/Catch';
var ratio = durationTryCatch / durationConditions ;
if (durationConditions < durationTryCatch) {
    winner = 'Conditions';
    ratio = durationConditions / durationTryCatch ;
}
ratio =  Math.round( 1/ratio * 100 );

//display result
var result = 'Conditions took ' + durationConditions + 'ms\nTry/Catch took ' + durationTryCatch + 'ms\n\nWinner: ' + winner + ' which is ' + ratio + '% faster';
alert(result);