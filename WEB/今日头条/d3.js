
window = global;
var ju ;

!function(e) {
    function t(t) {
        for (var a, c, l = t[0], u = t[1], s = t[2], f = t[3] || [], m = 0, p = []; m < l.length; m++)
            c = l[m],
            Object.prototype.hasOwnProperty.call(r, c) && r[c] && p.push(r[c][0]),
            r[c] = 0;
        for (a in u)
            Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        for (d && d(t),
        i.push.apply(i, f); p.length; )
            p.shift()();
        return o.push.apply(o, s || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], a = !0, u = 1; u < n.length; u++) {
                var s = n[u];
                0 !== r[s] && (a = !1)
            }
            a && (o.splice(t--, 1),
            e = l(l.s = n[0]))
        }
        return 0 === o.length && (i.forEach((function(e) {
            if (void 0 === r[e]) {
                r[e] = null;
                var t = document.createElement("link");
                l.nc && t.setAttribute("nonce", l.nc),
                t.rel = "prefetch",
                t.as = "script",
                t.href = c(e),
                document.head.appendChild(t)
            }
        }
        )),
        i.length = 0),
        e
    }
    var a = {}
      , r = {
        10: 0
    }
      , o = []
      , i = [];
    function c(e) {
        return l.p + "common/" + ({
            3: "im_sdk_module",
            4: "im_web",
            5: "loginsdk_module",
            16: "ttwid_m",
            17: "vendors~qrcode-module"
        }[e] || e) + "." + {
            3: "29372f8d",
            4: "2316bfac",
            5: "4619f4d5",
            16: "bf3db692",
            17: "d64cd86c"
        }[e] + ".js"
    }
    function l(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, l),
        n.l = !0,
        n.exports
    }
    l.e = function(e) {
        var t = [];
        if (!o || !o.prototype.then) {
            var n = setTimeout;
            function a() {}
            function o(e) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                m(e, this)
            }
            function i(e, t) {
                for (; 3 === e._state; )
                    e = e._value;
                0 !== e._state ? (e._handled = !0,
                o._immediateFn((function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var a;
                        try {
                            a = n(e._value)
                        } catch (r) {
                            return void s(t.promise, r)
                        }
                        u(t.promise, a)
                    } else
                        (1 === e._state ? u : s)(t.promise, e._value)
                }
                ))) : e._deferreds.push(t)
            }
            function u(e, t) {
                try {
                    if (t === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof o)
                            return e._state = 3,
                            e._value = t,
                            void f(e);
                        if ("function" == typeof n)
                            return void m((a = n,
                            r = t,
                            function() {
                                a.apply(r, arguments)
                            }
                            ), e)
                    }
                    e._state = 1,
                    e._value = t,
                    f(e)
                } catch (i) {
                    s(e, i)
                }
                var a, r
            }
            function s(e, t) {
                e._state = 2,
                e._value = t,
                f(e)
            }
            function f(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn((function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                }
                ));
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    i(e, e._deferreds[t]);
                e._deferreds = null
            }
            function d(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function m(e, t) {
                var n = !1;
                try {
                    e((function(e) {
                        n || (n = !0,
                        u(t, e))
                    }
                    ), (function(e) {
                        n || (n = !0,
                        s(t, e))
                    }
                    ))
                } catch (a) {
                    if (n)
                        return;
                    n = !0,
                    s(t, a)
                }
            }
            o.prototype.catch = function(e) {
                return this.then(null, e)
            }
            ,
            o.prototype.then = function(e, t) {
                var n = new this.constructor(a);
                return i(this, new d(e,t,n)),
                n
            }
            ,
            o.prototype.finally = function(e) {
                var t = this.constructor;
                return this.then((function(n) {
                    return t.resolve(e()).then((function() {
                        return n
                    }
                    ))
                }
                ), (function(n) {
                    return t.resolve(e()).then((function() {
                        return t.reject(n)
                    }
                    ))
                }
                ))
            }
            ,
            o.all = function(e) {
                return new o((function(t, n) {
                    if (!e || void 0 === e.length)
                        throw new TypeError("Promise.all accepts an array");
                    var a = Array.prototype.slice.call(e);
                    if (0 === a.length)
                        return t([]);
                    var r = a.length;
                    function o(e, i) {
                        try {
                            if (i && ("object" == typeof i || "function" == typeof i)) {
                                var c = i.then;
                                if ("function" == typeof c)
                                    return void c.call(i, (function(t) {
                                        o(e, t)
                                    }
                                    ), n)
                            }
                            a[e] = i,
                            0 == --r && t(a)
                        } catch (l) {
                            n(l)
                        }
                    }
                    for (var i = 0; i < a.length; i++)
                        o(i, a[i])
                }
                ))
            }
            ,
            o.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === o ? e : new o((function(t) {
                    t(e)
                }
                ))
            }
            ,
            o.reject = function(e) {
                return new o((function(t, n) {
                    n(e)
                }
                ))
            }
            ,
            o.race = function(e) {
                return new o((function(t, n) {
                    for (var a = 0, r = e.length; a < r; a++)
                        e[a].then(t, n)
                }
                ))
            }
            ,
            o._immediateFn = "function" == typeof setImmediate && function(e) {
                setImmediate(e)
            }
            || function(e) {
                n(e, 0)
            }
            ,
            o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
        }
        var p = r[e];
        if (0 !== p)
            if (p)
                t.push(p[2]);
            else {
                var b = new o((function(t, n) {
                    p = r[e] = [t, n]
                }
                ));
                t.push(p[2] = b);
                var h, _ = document.createElement("script");
                _.charset = "utf-8",
                _.timeout = 120,
                l.nc && _.setAttribute("nonce", l.nc),
                _.src = c(e);
                var g = new Error;
                h = function(t) {
                    _.onerror = _.onload = null,
                    clearTimeout(v);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            g.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")",
                            g.name = "ChunkLoadError",
                            g.type = a,
                            g.request = o,
                            n[1](g)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var v = setTimeout((function() {
                    h({
                        type: "timeout",
                        target: _
                    })
                }
                ), 12e4);
                _.onerror = _.onload = h,
                document.head.appendChild(_)
            }
        return o.all(t)
    }
    ,
    l.m = e,
    l.c = a,
    l.d = function(e, t, n) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    l.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (l.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                l.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/",
    l.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var u = window.webpackJsonp = window.webpackJsonp || []
      , s = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var f = 0; f < u.length; f++)
        t(u[f]);
    var d = s
      , m = (o.push([4, 0]),
    n());
    ju = l
    t([[], {}, 0, [17]])

}({
    a99d8596674b8a971a00: function(e, t, n) {
        "use strict";
        var a = n("54868fd92a74e390355c")
          , r = n.n(a)
          , o = n("007862268c2fc8134ebb")
          , i = n.n(o)
          , c = n("c5054cf9c06ccf557fcd")
          , l = n.n(c)
          , u = n("4f25322f10fce8ce9169")
          , s = n.n(u)
          , f = n("a1370d8a46bf7fd478fc")
          , d = n.n(f)
          , m = n("a0317e3b4020b526a9b2")
          , p = n.n(m)
          , b = n("92c8006d8139d763c605")
          , h = n.n(b)
          , _ = n("ee10aab64b9ea632f5ab")
          , g = n.n(_)
          , v = n("819716bda1fd0681a754")
          , y = n.n(v)
          , w = n("3b6da333073325e45942")
          , E = n.n(w)
          , k = n("ad3ac99ada113225a3d8")
          , O = n.n(k)
          , j = ["/tt-anti-token", "/video/urls/v/1/toutiao/mp4/"]
          , A = ["/api/pc/list/feed", "/search/suggest/hot_words", "/hot-event/hot-board/", "/stream/widget/local_weather/", "search/suggest/hot_words/", "/api/pc/list/user/feed", "/2/article/v88/refresh_tip/", "/api/pc/user/follow", "/video/app/pseries/", "/ugc/video/v1/pseries", "/ugc/video/v1/player_info", "/action/api/v1/do_action/", "/api/amos_items/", "/wenda/v5/"]
          , C = ["/api/pc/list/feed", "/api/pc/list/user/feed", "/video/app/pseries/", "/ugc/video/v1/pseries"];
        function I(e, t) {
            var n, a, r = "".concat(location.protocol, "//").concat(location.host);
            (function(e) {
                return !A.some((function(t) {
                    return e.indexOf(t) > -1
                }
                ))
            }
            )(e) && (r += "/toutiao");
            var o = {
                url: r + e
            };
            return t.data && (o.body = t.data),
            (null === (n = window.byted_acrawler) || void 0 === n || null === (a = n.sign) || void 0 === a ? void 0 : a.call(n, o)) || ""
        }
        var x = n("c78901355124ccab56ec")
          , T = n.n(x)
          , N = n("6bb41c796464fc214f15")
          , S = n.n(N)
          , D = n("6104d0ccf35b3944ecf2")
          , L = n.n(D)
          , R = n("2422758950d9f66b7423");
        var U = new (function() {
            function e() {
                S()(this, e),
                this.show = !1,
                this.success = !1,
                this.waitVerify = null
            }
            return L()(e, [{
                key: "verify",
                value: function(e) {
                    var t = this;
                    return this.waitVerify = new T.a((function(n) {
                        var a;
                        t.show = !0,
                        a = {
                            verifyData: e,
                            successCb: function() {
                                t.show = !1,
                                t.success = !0,
                                n()
                            },
                            closeCb: function() {
                                t.show = !1,
                                t.success = !1,
                                n()
                            }
                        },
                        window.TTGCaptcha ? window.TTGCaptcha.render({
                            verify_data: a.verifyData,
                            captchaOptions: {
                                app_name: R.l,
                                showMode: "mask",
                                successCb: function(e) {
                                    var t;
                                    null === (t = a.successCb) || void 0 === t || t.call(a, e)
                                },
                                errorCb: function(e) {
                                    var t;
                                    null === (t = a.errorCb) || void 0 === t || t.call(a, e)
                                },
                                closeCb: function() {
                                    var e;
                                    null === (e = a.closeCb) || void 0 === e || e.call(a)
                                }
                            }
                        }) : console.error("No captcha.js")
                    }
                    )),
                    this.waitVerify
                }
            }, {
                key: "waitVerifyFinish",
                value: function() {
                    var e = this;
                    return new T.a((function(t) {
                        e.waitVerify ? e.waitVerify.then((function() {
                            t()
                        }
                        )) : t()
                    }
                    ))
                }
            }]),
            e
        }())
          , M = n("4e16ef1abe038022cfb8");
        function P(e, t) {
            var n = p()(e);
            if (d.a) {
                var a = d()(e);
                t && (a = a.filter((function(t) {
                    return s()(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(Object(n), !0).forEach((function(t) {
                    y()(e, t, n[t])
                }
                )) : l.a ? i()(e, l()(n)) : P(Object(n)).forEach((function(t) {
                    r()(e, t, s()(n, t))
                }
                ))
            }
            return e
        }
        var F = E.a.create({
            timeout: 1e4
        });
        F.interceptors.request.use((function(e) {
            return "post" === e.method && (e.headers = W(W({}, e.headers), {}, {
                "X-CSRFToken": O.a.get("csrftoken"),
                "tt-anti-token": O.a.get("tt_anti_token")
            })),
            e
        }
        )),
        F.interceptors.request.use((function(e) {
            var t;
            if (!function(e) {
                return !e || !j.some((function(t) {
                    return e.indexOf(t) > -1
                }
                ))
            }(e.url))
                return e;
            (null === (t = e.params) || void 0 === t ? void 0 : t._signature) && delete e.params._signature;
            var n = I(F.getUri(e), e);
            return e.params = W(W({}, e.params), {}, {
                _signature: n
            }),
            e
        }
        )),
        F.interceptors.request.use((function(e) {
            var t;
            return (t = e.url) && C.some((function(e) {
                return t.indexOf(e) > -1
            }
            )) && (e.params = W(W({}, e.params), {}, {
                aid: R.k,
                app_name: R.l
            })),
            e
        }
        )),
        F.interceptors.response.use(function() {
            var e = g()(h.a.mark((function e(t) {
                var n, a;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(a = null == t || null === (n = t.data) || void 0 === n ? void 0 : n.decision)) {
                                e.next = 19;
                                break
                            }
                            if (U.show) {
                                e.next = 13;
                                break
                            }
                            return Object(M.b)("show-captcha", {
                                type: "api"
                            }),
                            e.next = 6,
                            U.verify(a);
                        case 6:
                            if (!U.success) {
                                e.next = 11;
                                break
                            }
                            return Object(M.b)("pass-captcha", {
                                type: "api"
                            }),
                            e.next = 10,
                            F.request(t.config);
                        case 10:
                            return e.abrupt("return", e.sent);
                        case 11:
                            e.next = 19;
                            break;
                        case 13:
                            return e.next = 15,
                            U.waitVerifyFinish();
                        case 15:
                            if (!U.success) {
                                e.next = 19;
                                break
                            }
                            return e.next = 18,
                            F.request(t.config);
                        case 18:
                            return e.abrupt("return", e.sent);
                        case 19:
                            return e.abrupt("return", t);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }());
        t.a = F
    },
})
// console.log(ju('a99d8596674b8a971a00'));