function customBezier(t, tMin, tMax, value1, value2, bezierPoints) {
    if (arguments.length !== 6) return value;
    var a = value2 - value1;
    var b = tMax - tMin;
    var c = clamp((t - tMin) / b, 0, 1);
    if (!(bezierPoints instanceof Array) || bezierPoints.length !== 4) bezierPoints = [0, 0, 1, 1];
    return a * h(c, bezierPoints) + value1;

    function h(f, g) {
        var x = 3 * g[0];
        var j = 3 * (g[2] - g[0]) - x;
        var k = 1 - x - j;
        var l = 3 * g[1];
        var m = 3 * (g[3] - g[1]) - l;
        var n = 1 - l - m;
        var d = f;
        for (var i = 0; i < 5; i++) {
            var z = d * (x + d * (j + d * k)) - f;
            if (Math.abs(z) < 1e-3) break;
            d -= z / (x + d * (2 * j + 3 * k * d));
        }
        return d * (l + d * (m + d * n));
    }
}
