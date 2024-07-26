window = global;
an = window;

function rc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

const hi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [u, o] of t)
        n[u] = o;
    return n
}
const Bq = {
    class: "site-list"
}
    , bq = ["onClick"]
    , wq = {
    __name: "SiteList",
    props: {
        siteList: {
            type: Array,
            default() {
                return []
            }
        },
        currentSite: {
            type: String,
            default: ""
        }
    },
    emits: ["handleSiteItemClick"],
    setup(e, {emit: t}) {
        return (n, u) => (F(),
            w("ul", Bq, [(F(!0),
                w(le, null, be(e.siteList, ({orgCode: o, orgName: r}) => (F(),
                    w("li", {
                        onClick: s => t("handleSiteItemClick", {
                            orgCode: o,
                            orgName: r
                        }),
                        class: x(["site-item", {
                            active: +e.currentSite == +o
                        }]),
                        key: o
                    }, V(r), 11, bq))), 128))]))
    }
}
    , Dq = hi(wq, [["__scopeId", "data-v-f9389d2d"]]);
var pC = {
    exports: {}
};

function Sq(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}

var Vd = {
    exports: {}
}, Bg;

function _q() {
    return Bg || (Bg = 1,
        function (e, t) {
            (function (n, u) {
                    e.exports = u()
                }
            )(an, function () {
                var n = n || function (u, o) {
                    var r;
                    if (typeof window < "u" && window.crypto && (r = window.crypto),
                    typeof self < "u" && self.crypto && (r = self.crypto),
                    typeof globalThis < "u" && globalThis.crypto && (r = globalThis.crypto),
                    !r && typeof window < "u" && window.msCrypto && (r = window.msCrypto),
                    !r && typeof an < "u" && an.crypto && (r = an.crypto),
                    !r && typeof Sq == "function")
                        try {
                            r = Wy
                        } catch {
                        }
                    var s = function () {
                        if (r) {
                            if (typeof r.getRandomValues == "function")
                                try {
                                    return r.getRandomValues(new Uint32Array(1))[0]
                                } catch {
                                }
                            if (typeof r.randomBytes == "function")
                                try {
                                    return r.randomBytes(4).readInt32LE()
                                } catch {
                                }
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    }
                        , i = Object.create || function () {
                        function v() {
                        }

                        return function (y) {
                            var E;
                            return v.prototype = y,
                                E = new v,
                                v.prototype = null,
                                E
                        }
                    }()
                        , a = {}
                        , l = a.lib = {}
                        , c = l.Base = function () {
                        return {
                            extend: function (v) {
                                var y = i(this);
                                return v && y.mixIn(v),
                                (!y.hasOwnProperty("init") || this.init === y.init) && (y.init = function () {
                                        y.$super.init.apply(this, arguments)
                                    }
                                ),
                                    y.init.prototype = y,
                                    y.$super = this,
                                    y
                            },
                            create: function () {
                                var v = this.extend();
                                return v.init.apply(v, arguments),
                                    v
                            },
                            init: function () {
                            },
                            mixIn: function (v) {
                                for (var y in v)
                                    v.hasOwnProperty(y) && (this[y] = v[y]);
                                v.hasOwnProperty("toString") && (this.toString = v.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }()
                        , d = l.WordArray = c.extend({
                        init: function (v, y) {
                            v = this.words = v || [],
                                y != o ? this.sigBytes = y : this.sigBytes = v.length * 4
                        },
                        toString: function (v) {
                            return (v || p).stringify(this)
                        },
                        concat: function (v) {
                            var y = this.words
                                , E = v.words
                                , B = this.sigBytes
                                , A = v.sigBytes;
                            if (this.clamp(),
                            B % 4)
                                for (var _ = 0; _ < A; _++) {
                                    var O = E[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                                    y[B + _ >>> 2] |= O << 24 - (B + _) % 4 * 8
                                }
                            else
                                for (var P = 0; P < A; P += 4)
                                    y[B + P >>> 2] = E[P >>> 2];
                            return this.sigBytes += A,
                                this
                        },
                        clamp: function () {
                            var v = this.words
                                , y = this.sigBytes;
                            v[y >>> 2] &= 4294967295 << 32 - y % 4 * 8,
                                v.length = u.ceil(y / 4)
                        },
                        clone: function () {
                            var v = c.clone.call(this);
                            return v.words = this.words.slice(0),
                                v
                        },
                        random: function (v) {
                            for (var y = [], E = 0; E < v; E += 4)
                                y.push(s());
                            return new d.init(y, v)
                        }
                    })
                        , f = a.enc = {}
                        , p = f.Hex = {
                        stringify: function (v) {
                            for (var y = v.words, E = v.sigBytes, B = [], A = 0; A < E; A++) {
                                var _ = y[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                                B.push((_ >>> 4).toString(16)),
                                    B.push((_ & 15).toString(16))
                            }
                            return B.join("")
                        },
                        parse: function (v) {
                            for (var y = v.length, E = [], B = 0; B < y; B += 2)
                                E[B >>> 3] |= parseInt(v.substr(B, 2), 16) << 24 - B % 8 * 4;
                            return new d.init(E, y / 2)
                        }
                    }
                        , h = f.Latin1 = {
                        stringify: function (v) {
                            for (var y = v.words, E = v.sigBytes, B = [], A = 0; A < E; A++) {
                                var _ = y[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                                B.push(String.fromCharCode(_))
                            }
                            return B.join("")
                        },
                        parse: function (v) {
                            for (var y = v.length, E = [], B = 0; B < y; B++)
                                E[B >>> 2] |= (v.charCodeAt(B) & 255) << 24 - B % 4 * 8;
                            return new d.init(E, y)
                        }
                    }
                        , m = f.Utf8 = {
                        stringify: function (v) {
                            try {
                                return decodeURIComponent(escape(h.stringify(v)))
                            } catch {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (v) {
                            return h.parse(unescape(encodeURIComponent(v)))
                        }
                    }
                        , C = l.BufferedBlockAlgorithm = c.extend({
                        reset: function () {
                            this._data = new d.init,
                                this._nDataBytes = 0
                        },
                        _append: function (v) {
                            typeof v == "string" && (v = m.parse(v)),
                                this._data.concat(v),
                                this._nDataBytes += v.sigBytes
                        },
                        _process: function (v) {
                            var y, E = this._data, B = E.words, A = E.sigBytes, _ = this.blockSize, O = _ * 4,
                                P = A / O;
                            v ? P = u.ceil(P) : P = u.max((P | 0) - this._minBufferSize, 0);
                            var L = P * _
                                , ue = u.min(L * 4, A);
                            if (L) {
                                for (var N = 0; N < L; N += _)
                                    this._doProcessBlock(B, N);
                                y = B.splice(0, L),
                                    E.sigBytes -= ue
                            }
                            return new d.init(y, ue)
                        },
                        clone: function () {
                            var v = c.clone.call(this);
                            return v._data = this._data.clone(),
                                v
                        },
                        _minBufferSize: 0
                    });
                    l.Hasher = C.extend({
                        cfg: c.extend(),
                        init: function (v) {
                            this.cfg = this.cfg.extend(v),
                                this.reset()
                        },
                        reset: function () {
                            C.reset.call(this),
                                this._doReset()
                        },
                        update: function (v) {
                            return this._append(v),
                                this._process(),
                                this
                        },
                        finalize: function (v) {
                            v && this._append(v);
                            var y = this._doFinalize();
                            return y
                        },
                        blockSize: 16,
                        _createHelper: function (v) {
                            return function (y, E) {
                                return new v.init(E).finalize(y)
                            }
                        },
                        _createHmacHelper: function (v) {
                            return function (y, E) {
                                return new g.HMAC.init(v, E).finalize(y)
                            }
                        }
                    });
                    var g = a.algo = {};
                    return a
                }(Math);
                return n
            })
        }(Vd)),
        Vd.exports
}

(function (e, t) {
        (function (n, u) {
                e.exports = u(_q())
            }
        )(an, function (n) {
            return function (u) {
                var o = n
                    , r = o.lib
                    , s = r.WordArray
                    , i = r.Hasher
                    , a = o.algo
                    , l = []
                    , c = [];
                (function () {
                        function p(g) {
                            for (var v = u.sqrt(g), y = 2; y <= v; y++)
                                if (!(g % y))
                                    return !1;
                            return !0
                        }

                        function h(g) {
                            return (g - (g | 0)) * 4294967296 | 0
                        }

                        for (var m = 2, C = 0; C < 64;)
                            p(m) && (C < 8 && (l[C] = h(u.pow(m, 1 / 2))),
                                c[C] = h(u.pow(m, 1 / 3)),
                                C++),
                                m++
                    }
                )();
                var d = []
                    , f = a.SHA256 = i.extend({
                    _doReset: function () {
                        this._hash = new s.init(l.slice(0))
                    },
                    _doProcessBlock: function (p, h) {
                        for (var m = this._hash.words, C = m[0], g = m[1], v = m[2], y = m[3], E = m[4], B = m[5], A = m[6], _ = m[7], O = 0; O < 64; O++) {
                            if (O < 16)
                                d[O] = p[h + O] | 0;
                            else {
                                var P = d[O - 15]
                                    , L = (P << 25 | P >>> 7) ^ (P << 14 | P >>> 18) ^ P >>> 3
                                    , ue = d[O - 2]
                                    , N = (ue << 15 | ue >>> 17) ^ (ue << 13 | ue >>> 19) ^ ue >>> 10;
                                d[O] = L + d[O - 7] + N + d[O - 16]
                            }
                            var H = E & B ^ ~E & A
                                , Q = C & g ^ C & v ^ g & v
                                , W = (C << 30 | C >>> 2) ^ (C << 19 | C >>> 13) ^ (C << 10 | C >>> 22)
                                , R = (E << 26 | E >>> 6) ^ (E << 21 | E >>> 11) ^ (E << 7 | E >>> 25)
                                , I = _ + R + H + c[O] + d[O]
                                , te = W + Q;
                            _ = A,
                                A = B,
                                B = E,
                                E = y + I | 0,
                                y = v,
                                v = g,
                                g = C,
                                C = I + te | 0
                        }
                        m[0] = m[0] + C | 0,
                            m[1] = m[1] + g | 0,
                            m[2] = m[2] + v | 0,
                            m[3] = m[3] + y | 0,
                            m[4] = m[4] + E | 0,
                            m[5] = m[5] + B | 0,
                            m[6] = m[6] + A | 0,
                            m[7] = m[7] + _ | 0
                    },
                    _doFinalize: function () {
                        var p = this._data
                            , h = p.words
                            , m = this._nDataBytes * 8
                            , C = p.sigBytes * 8;
                        return h[C >>> 5] |= 128 << 24 - C % 32,
                            h[(C + 64 >>> 9 << 4) + 14] = u.floor(m / 4294967296),
                            h[(C + 64 >>> 9 << 4) + 15] = m,
                            p.sigBytes = h.length * 4,
                            this._process(),
                            this._hash
                    },
                    clone: function () {
                        var p = i.clone.call(this);
                        return p._hash = this._hash.clone(),
                            p
                    }
                });
                o.SHA256 = i._createHelper(f),
                    o.HmacSHA256 = i._createHmacHelper(f)
            }(Math),
                n.SHA256
        })
    }
)(pC);
var xq = pC.exports;
const kq = rc(xq);

// =================================================
const sF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM"
    , Hte = sF + "-@#$%^&*+!";

function Nte(e, t) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * e + 1, 10);
        case 2:
            return parseInt(Math.random() * (t - e + 1) + e, 10);
        default:
            return 0
    }
}

function jte(e) {
    return [...Array(e)].map(() => sF[Nte(0, 61)]).join("")
}


function qu(e = []) {
    return e.map(t => Hte[t]).join("")
}

function zte(e) {
    let t = "";
    return typeof e == "object" ? t = Object.keys(e).map(n => `${n}=${e[n]}`).sort().join("&") : typeof e == "string" && (t = e.split("&").sort().join("&")),
        t
}

function signature_word(e = {}) {
    const {p: t, t: n, n: u, k: o} = e, r = zte(t);
    return kq(u + o + decodeURIComponent(r) + n)
}


// s = "type=trading-type&openConvert=false&keyword=&siteCode=44&secondType=A&tradingProcess=&thirdType=%5B%5D&projectType=&publishStartTime=&publishEndTime=&pageNo=23&pageSize=10"
// a = Date.now()
// l = jte(16)
// c = qu([8, 28, 20, 42, 21, 53, 65, 6])
// e = {
//     p: s,
//     t: a,
//     n: l,
//     k: c
// }
// console.log(e)


// console.log(p)
// console.log(String(p))


// headers = {
//     "X-Dgi-Req-App": "ggzy-portal",
//     "X-Dgi-Req-Nonce": l,
//     "X-Dgi-Req-Timestamp": a,
//     "X-Dgi-Req-Signature": p,
//     "Accept": "application/json, text/plain, */*"
// }


// s = "type=trading-type&openConvert=false&keyword=&siteCode=44&secondType=A&tradingProcess=&thirdType=%5B%5D&projectType=&publishStartTime=&publishEndTime=&pageNo=23&pageSize=10"
function getHeaders(s) {
    a = Date.now()
    l = jte(16)
    c = qu([8, 28, 20, 42, 21, 53, 65, 6])
    e = {
        p: s,
        t: a,
        n: l,
        k: c
    }
    p = signature_word(e);
    return {
        "X-Dgi-Req-App": "ggzy-portal",
        "X-Dgi-Req-Nonce": l,
        "X-Dgi-Req-Timestamp": String(a),
        "X-Dgi-Req-Signature": String(p),
        "Accept": "application/json, text/plain, */*"
    }
}

console.log(qu([8, 28, 20, 42, 21, 53, 65, 6]));