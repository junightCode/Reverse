
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

_y = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , u = {};
    mi(n, (o,r)=>{
        t(o, r, e) !== !1 && (u[r] = o)
    }
    ),
    Object.defineProperties(e, u)
}
fn = cc = e=>t=>typeof t === e
Y = {
    isPlainObject: e => {
        if (lc(e) !== "object") return !1;
        const t = V5(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    isString:e=>t=>typeof t === e,
    isArray:function (e){return Array.isArray(e)},
    toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,u,o){return u.toUpperCase()+o}),
    freezeMethods:e=>{_y(e,(t,n)=>{if(fn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const u=e[n];if(fn(u)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},
    findKey:function wy(e,t){t=t.toLowerCase();const n=Object.keys(e);let u=n.length,o;for(;u-- >0;)if(o=n[u],t===o.toLowerCase())return o;return null}
}

lc = (e => t => {
        const n = IV.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    }
)
function Ko(e) {
    return e && String(e).trim().toLowerCase()
}
function Da(e) {
    return e === !1 || e == null ? e : Y.isArray(e) ? e.map(Da) : String(e)
}
function IY(e, t) {
    const n = Y.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(u=>{
        Object.defineProperty(e, u + n, {
            value: function(o, r, s) {
                return this[u].call(this, t, o, r, s)
            },
            configurable: !0
        })
    }
    )
}

const TY = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test();
class pc {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, u) {
        const o = this;

        function r(i, a, l) {
            const c = Ko(a);
            if (!c)
                throw new Error("header name must be a non-empty string");
            const d = Y.findKey(o, c);
            (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || a] = Da(i))
        }

        const s = (i, a) => Y.forEach(i, (l, c) => r(l, c, a));
        return Y.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : Y.isString(t) &&  !TY(t) ? s(kY(t), n) : t != null && r(n, t, u),
            this
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static accessor(t) {
        const u =  {
            accessors: {}
        }.accessors
          , o = this.prototype;
        function r(s) {
            const i = Ko(s);
            u[i] || (IY(o, s),
            u[i] = !0)
        }
        return Y.isArray(t) ? t.forEach(r) : r(t),
        this
    }
}

pc.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Y.freezeMethods(pc.prototype);
Y.freezeMethods(pc);
const Qn = pc;
headers = {
    'X-Dgi-Req-App': 'ggzy-portal',
    'X-Dgi-Req-Nonce': 'cibh0cBJTSzdyBci',
    'X-Dgi-Req-Timestamp': 1693477300699,
    'X-Dgi-Req-Signature': {
        words: [
            1677962230, 950399307,
            1400325004, -266367147,
            -1347964728, 927140148,
            -107460545, 365471557
        ],
        sigBytes: 32
    },
    Accept: 'application/json, text/plain, */*'
}


h = Qn.from(headers)
console.log(h.headers)