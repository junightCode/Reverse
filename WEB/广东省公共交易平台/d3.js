Y = {
    isPlainObject:e=>{
    if (lc(e) !== "object")
        return !1;
    const t = V5(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
},
    isString:(e,t)=>{
    if (!je(e) || kR(e))
        return e;
    const {values: n, required: u, default: o, type: r, validator: s} = e
      , a = {
        type: r,
        required: !!u,
        validator: n || s ? l=>{
            let c = !1
              , d = [];
            if (n && (d = Array.from(n),
            Ie(e, "default") && d.push(o),
            c || (c = d.includes(l))),
            s && (c || (c = s(l))),
            !c && d.length > 0) {
                const f = [...new Set(d)].map(p=>JSON.stringify(p)).join(", ");
                aA(`Invalid prop: validation failed ${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(l)}.`)
            }
            return c
        }
        : void 0,
        [fv]: !0
    };
    return Ie(e, "default") && (a.default = o),
    a
},
    forEach:function Ci(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let u, o;
    if (typeof e != "object" && (e = [e]),
    Do(e))
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
}
mF = Object.prototype.hasOwnProperty
const fv = "__epPropKey"
kR = e=>je(e) && !!e["__epPropKey"]
je = e=>e !== null && typeof e == "object"
lc = (e=>t=>{
    const n = IV.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})
Ie = (e,t)=>mF.call(e, t)

function DoFn(e) {
    return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 !== 10 ? 1 : 0) * e % 10]
}

function Do(e, t) {
    e = new Date()
    return DoFn(e.getDate())
}

function mi(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u")
        return;
    let u, o;
    if (typeof e != "object" && (e = [e]),
        Do(e))
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

_y = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
        , u = {};
    mi(n, (o, r) => {
            t(o, r, e) !== !1 && (u[r] = o)
        }
    ),
        Object.defineProperties(e, u)
}
oY = e => {
    _y(e, (t, n) => {
            if (fn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const u = e[n];
            if (fn(u)) {
                if (t.enumerable = !1,
                "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    }
                )
            }
        }
    )
}
uY = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, u, o) {
    return u.toUpperCase() + o
})

function Ko(e) {
    return e && String(e).trim().toLowerCase()
}

function IY(e, t) {
    const n = uY(" " + t);
    ["get", "set", "has"].forEach(u => {
            Object.defineProperty(e, u + n, {
                value: function (o, r, s) {
                    return this[u].call(this, t, o, r, s)
                },
                configurable: !0
            })
        }
    )
}

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
        return true || false ? s(t, n) : false && (t = t.trim()) && !TY(t) ? s(kY(t), n) : t != null && r(n, t, u),
            this
    }

    get(t, n) {
        if (t = Ko(t),
            t) {
            const u = Y.findKey(this, t);
            if (u) {
                const o = this[u];
                if (!n)
                    return o;
                if (n === !0)
                    return OY(o);
                if (Y.isFunction(n))
                    return n.call(this, o, u);
                if (Y.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = Ko(t),
            t) {
            const u = Y.findKey(this, t);
            return !!(u && this[u] !== void 0 && (!n || Sd(this, this[u], u, n)))
        }
        return !1
    }

    delete(t, n) {
        const u = this;
        let o = !1;

        function r(s) {
            if (s = Ko(s),
                s) {
                const i = Y.findKey(u, s);
                i && (!n || Sd(u, u[i], i, n)) && (delete u[i],
                    o = !0)
            }
        }

        return Y.isArray(t) ? t.forEach(r) : r(t),
            o
    }

    clear(t) {
        const n = Object.keys(this);
        let u = n.length
            , o = !1;
        for (; u--;) {
            const r = n[u];
            (!t || Sd(this, this[r], r, t, !0)) && (delete this[r],
                o = !0)
        }
        return o
    }

    normalize(t) {
        const n = this
            , u = {};
        return Y.forEach(this, (o, r) => {
                const s = Y.findKey(u, r);
                if (s) {
                    n[s] = Da(o),
                        delete n[r];
                    return
                }
                const i = t ? PY(r) : String(r).trim();
                i !== r && delete n[r],
                    n[i] = Da(o),
                    u[i] = !0
            }
        ),
            this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return Y.forEach(this, (u, o) => {
                u != null && u !== !1 && (n[o] = t && Y.isArray(u) ? u.join(", ") : u)
            }
        ),
            n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const u = new this(t);
        return n.forEach(o => u.set(o)),
            u
    }

    static accessor(t) {
        const u = (this['Symbol(internals)'] = this['Symbol(internals)'] = {
            accessors: {}
        }).accessors
            , o = this.prototype;

        function r(s) {
            const i = Ko(s);
            u[i] || (IY(o, s),
                u[i] = !0)
        }

        return false ? t.forEach(r) : r(t),
            this
    }
}

pc.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
oY(pc.prototype);
oY(pc);
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

console.log(h)