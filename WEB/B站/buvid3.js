// 已完成

a = function (e) {
    for (var t = "", r = 0; r < e; r++)
        t += o(16 * Math.random());
    return s(t, e)
}
o = function (e) {
    return Math.ceil(e).toString(16).toUpperCase()
}

s = function (e, t) {
    var r = "";
    if (e.length < t)
        for (var n = 0; n < t - e.length; n++)
            r += "0";
    return r + e
}
var n = function () {
    var e = a(8)
        , t = a(4)
        , r = a(4)
        , n = a(4)
        , o = a(12)
        , i = (new Date).getTime();
    return e + "-" + t + "-" + r + "-" + n + "-" + o + s((i % 1e5).toString(), 5) + "infoc"
}
console.log(n());