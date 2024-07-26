function wy(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let u = n.length, o;
    for (; u-- > 0; )
        if (o = n[u],
        t === o.toLowerCase())
            return o;
    return null
}

function Ko(e) {
    return e && String(e).trim().toLowerCase()
}
function Da(e) {
    return e === !1 || e == null ? e : Array.isArray(e) ? e.map(Da) : String(e)
}

function mi(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let u, o;
    if (typeof e != "object" && (e = [e]), false)
        for (u = 0,
        o = e.length; u < o; u++)
            t.call(null, e[u], u, e);
    else {
        const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = r.length;
        let i;
        for (u = 0; u < s; u++)
            i = r[u],
            t.call(null, e[i], i, e)
    }
}



o = {}
function r(i, a, l) {
    const c = Ko(a);
    const d = wy(o, c);
    (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || a] = Da(i))
}

const s = (i,a)=>mi(i, (l,c)=>r(l, c, a));
// console.log(r('application/json, text/plain, */*', 'Accept', undefined));



t = {
    "X-Dgi-Req-App": "ggzy-portal",
    "X-Dgi-Req-Nonce": "BoCZqu2mFJ174l4j",
    "X-Dgi-Req-Timestamp": 1693551067647,
    "X-Dgi-Req-Signature": {
        "words": [
            -2020843028,
            868111406,
            -692457328,
            -767499220,
            1760036765,
            -2054267849,
            1298136084,
            -214829916
        ],
        "sigBytes": 32
    },
    "Accept": "application/json, text/plain, */*"
}
n = undefined
s(t, n)
console.log(o)