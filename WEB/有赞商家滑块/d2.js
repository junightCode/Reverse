(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
    "03kM": function(t, e, n) {
        "use strict";
        var r = n("VTBJ")
          , i = n("ODXe")
          , o = n("q1tI")
          , a = n.n(o)
          , s = n("UoUk")
          , c = (n("YjmP"),
        n("ZWy1"),
        n("H2OQ"),
        n("ofMT"),
        n("TSYQ"))
          , u = n.n(c)
          , l = n("o1E3")
          , h = (n("dQNJ"),
        a.a.forwardRef((function(t, e) {
            var n = t.value.showForgetPass
              , c = Object(o.useState)(1)
              , h = Object(i.default)(c, 2)
              , f = h[0]
              , p = h[1]
              , d = Object(o.useState)(!1)
              , g = Object(i.default)(d, 2)
              , m = g[0]
              , v = g[1]
              , y = Object(o.useRef)(f)
              , b = Object(o.useMemo)((function() {
                return u()({
                    "account-password__icon": !0,
                    "account-password__icon--open": 1 === f,
                    "account-password__icon--hide": 2 === f,
                    "account-password__icon--right": 3 === f,
                    "forget-pass-icon": n
                })
            }
            ), [f, n])
              , A = Object(o.useMemo)((function() {
                return 1 === (0 === f || 3 === f ? y.current : f) ? "password" : "text"
            }
            ), [f])
              , w = Object(o.useCallback)((function() {
                if (3 !== f) {
                    if (1 === f)
                        return y.current = 2,
                        void p(2);
                    y.current = 1,
                    p(1)
                }
            }
            ), [f])
              , E = Object(o.useCallback)((function(e) {
                t.onChange(Object(r.default)(Object(r.default)({}, t.value), {}, {
                    pass: e.target.value,
                    error: !1,
                    errorText: ""
                })),
                !m && v(!0)
            }
            ), [m, t])
              , x = Object(o.useCallback)((function() {
                t.onChange(Object(r.default)(Object(r.default)({}, t.value), {}, {
                    error: !1,
                    errorText: ""
                }))
            }
            ), [t])
              , k = Object(o.useCallback)((function() {
                var e = t.value
                  , n = e.pass
                  , i = e.register
                  , o = e.repeat
                  , a = e.onBlur;
                if (m) {
                    if (!n)
                        return t.onChange(Object(r.default)(Object(r.default)({}, t.value), {}, {
                            error: !0,
                            errorText: o ? "请再次输入密码" : i ? "请设置登录密码" : "请输入密码"
                        }));
                    if (i) {
                        if (n.length < 8 || n.length > 20)
                            return t.onChange(Object(r.default)(Object(r.default)({}, t.value), {}, {
                                error: !0,
                                errorText: "密码长度应为8～20个字符"
                            }));
                        if (!l.a.containLetter(n) || !l.a.containNumber(n))
                            return t.onChange(Object(r.default)(Object(r.default)({}, t.value), {}, {
                                error: !0,
                                errorText: '密码过于简单，请尝试"字母+数字+符号"的组合'
                            }));
                        a && a()
                    }
                }
            }
            ), [m, t]);
            return a.a.createElement("div", {
                className: "account-password"
            }, a.a.createElement(s.Input, {
                name: "password",
                className: u()("account-password__input", {
                    "account-password__input--error": t.value.error,
                    "account-password__input--show-forget": n
                }),
                type: A,
                placeholder: t.value.placeholder,
                value: t.value.pass,
                onChange: E,
                onFocus: x,
                onBlur: k,
                onPressEnter: t.onSubmit
            }), a.a.createElement("span", {
                className: b,
                onClick: w
            }), n && a.a.createElement("a", {
                className: "account-password__forget-password",
                href: "/retrieve-pass"
            }, "忘记密码"), a.a.createElement("p", {
                className: "account-password__error"
            }, t.value.errorText))
        }
        )));
        e.a = h
    },
    "5dt4": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "a", (function() {
            return o
        }
        )),
        n.d(e, "c", (function() {
            return a
        }
        ));
        var r = n("VTBJ")
          , i = function() {
            var t = document.getElementsByClassName("account-input__input");
            if (t = t && t[0]) {
                var e = t.children;
                return e[0] && e[0].value
            }
            return ""
        }
          , o = function() {
            var t = document.getElementsByClassName("zent-select-text")
              , e = t[0] && t[0].innerText;
            return e && e.split(" ")[1] || ""
        }
          , a = function(t, e) {
            window.addEventListener("DOMContentLoaded", (function() {
                if (window.Logger) {
                    window.addEventListener("click", (function(n) {
                        t.forEach((function(t) {
                            var i = t()
                              , o = i.selector
                              , a = i.data;
                            window._global.fromSourceCode && a.params && (a.params.source = window._global.fromSourceCode);
                            var s, c, u = document.getElementsByClassName(o)[0];
                            u && (s = u,
                            c = n.target,
                            s !== c && s.contains(c) || u === n.target) && (a.pt = a.pt || e,
                            a.params = Object(r.default)({
                                source: 1
                            }, a.params || {}),
                            window.Logger.log(a))
                        }
                        ))
                    }
                    ), !0)
                }
            }
            ))
        }
    },
    "5xlH": function(t, e, n) {},
    "8LUD": function(t, e, n) {},
    "8xpM": function(t, e, n) {},
    9: function(t, e, n) {
        n("aFlX"),
        t.exports = n("qnJg")
    },
    Dg3S: function(t, e, n) {
        "use strict";
        var r, i;
        n.d(e, "b", (function() {
            return r
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        )),
        function(t) {
            t.LOGIN = "login",
            t.REGISTER = "register",
            t.RETRIEVE = "retrieve-pass"
        }(r || (r = {})),
        function(t) {
            t.PASS = "password",
            t.CODE = "verify_code",
            t.SCAN = "scan"
        }(i || (i = {}))
    },
    EbSO: function(t, e, n) {},
    Fl3x: function(t, e, n) {
        "use strict";
        function r(t) {
            this.mode = o.MODE_8BIT_BYTE,
            this.data = t,
            this.parsedData = [];
            for (var e = 0, n = this.data.length; e < n; e++) {
                var r = []
                  , i = this.data.charCodeAt(e);
                i > 65536 ? (r[0] = 240 | (1835008 & i) >>> 18,
                r[1] = 128 | (258048 & i) >>> 12,
                r[2] = 128 | (4032 & i) >>> 6,
                r[3] = 128 | 63 & i) : i > 2048 ? (r[0] = 224 | (61440 & i) >>> 12,
                r[1] = 128 | (4032 & i) >>> 6,
                r[2] = 128 | 63 & i) : i > 128 ? (r[0] = 192 | (1984 & i) >>> 6,
                r[1] = 128 | 63 & i) : r[0] = i,
                this.parsedData.push(r)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239))
        }
        function i(t, e) {
            this.typeNumber = t,
            this.errorCorrectLevel = e,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        r.prototype = {
            getLength: function(t) {
                return this.parsedData.length
            },
            write: function(t) {
                for (var e = 0, n = this.parsedData.length; e < n; e++)
                    t.put(this.parsedData[e], 8)
            }
        },
        i.prototype = {
            addData: function(t) {
                var e = new r(t);
                this.dataList.push(e),
                this.dataCache = null
            },
            isDark: function(t, e) {
                if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                    throw new Error(t + "," + e);
                return this.modules[t][e]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(t, e) {
                this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) {
                    this.modules[n] = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++)
                        this.modules[n][r] = null
                }
                this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, e),
                this.typeNumber >= 7 && this.setupTypeNumber(t),
                null == this.dataCache && (this.dataCache = i.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, e)
            },
            setupPositionProbePattern: function(t, e) {
                for (var n = -1; n <= 7; n++)
                    if (!(t + n <= -1 || this.moduleCount <= t + n))
                        for (var r = -1; r <= 7; r++)
                            e + r <= -1 || this.moduleCount <= e + r || (this.modules[t + n][e + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
            },
            getBestMaskPattern: function() {
                for (var t = 0, e = 0, n = 0; n < 8; n++) {
                    this.makeImpl(!0, n);
                    var r = g.getLostPoint(this);
                    (0 == n || t > r) && (t = r,
                    e = n)
                }
                return e
            },
            createMovieClip: function(t, e, n) {
                var r = t.createEmptyMovieClip(e, n);
                this.make();
                for (var i = 0; i < this.modules.length; i++)
                    for (var o = 1 * i, a = 0; a < this.modules[i].length; a++) {
                        var s = 1 * a;
                        this.modules[i][a] && (r.beginFill(0, 100),
                        r.moveTo(s, o),
                        r.lineTo(s + 1, o),
                        r.lineTo(s + 1, o + 1),
                        r.lineTo(s, o + 1),
                        r.endFill())
                    }
                return r
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++)
                    null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var e = 8; e < this.moduleCount - 8; e++)
                    null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
            },
            setupPositionAdjustPattern: function() {
                for (var t = g.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[e]
                          , i = t[n];
                        if (null == this.modules[r][i])
                            for (var o = -2; o <= 2; o++)
                                for (var a = -2; a <= 2; a++)
                                    this.modules[r + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
                    }
            },
            setupTypeNumber: function(t) {
                for (var e = g.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                    var r = !t && 1 == (e >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                }
                for (n = 0; n < 18; n++) {
                    r = !t && 1 == (e >> n & 1);
                    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                }
            },
            setupTypeInfo: function(t, e) {
                for (var n = this.errorCorrectLevel << 3 | e, r = g.getBCHTypeInfo(n), i = 0; i < 15; i++) {
                    var o = !t && 1 == (r >> i & 1);
                    i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
                }
                for (i = 0; i < 15; i++) {
                    o = !t && 1 == (r >> i & 1);
                    i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
                }
                this.modules[this.moduleCount - 8][8] = !t
            },
            mapData: function(t, e) {
                for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                    for (6 == a && a--; ; ) {
                        for (var s = 0; s < 2; s++)
                            if (null == this.modules[r][a - s]) {
                                var c = !1;
                                o < t.length && (c = 1 == (t[o] >>> i & 1)),
                                g.getMask(e, r, a - s) && (c = !c),
                                this.modules[r][a - s] = c,
                                -1 == --i && (o++,
                                i = 7)
                            }
                        if ((r += n) < 0 || this.moduleCount <= r) {
                            r -= n,
                            n = -n;
                            break
                        }
                    }
            }
        },
        i.PAD0 = 236,
        i.PAD1 = 17,
        i.createData = function(t, e, n) {
            for (var r = b.getRSBlocks(t, e), o = new A, a = 0; a < n.length; a++) {
                var s = n[a];
                o.put(s.mode, 4),
                o.put(s.getLength(), g.getLengthInBits(s.mode, t)),
                s.write(o)
            }
            var c = 0;
            for (a = 0; a < r.length; a++)
                c += r[a].dataCount;
            if (o.getLengthInBits() > 8 * c)
                throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * c + ")");
            for (o.getLengthInBits() + 4 <= 8 * c && o.put(0, 4); o.getLengthInBits() % 8 != 0; )
                o.putBit(!1);
            for (; !(o.getLengthInBits() >= 8 * c || (o.put(i.PAD0, 8),
            o.getLengthInBits() >= 8 * c)); )
                o.put(i.PAD1, 8);
            return i.createBytes(o, r)
        }
        ,
        i.createBytes = function(t, e) {
            for (var n = 0, r = 0, i = 0, o = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
                var c = e[s].dataCount
                  , u = e[s].totalCount - c;
                r = Math.max(r, c),
                i = Math.max(i, u),
                o[s] = new Array(c);
                for (var l = 0; l < o[s].length; l++)
                    o[s][l] = 255 & t.buffer[l + n];
                n += c;
                var h = g.getErrorCorrectPolynomial(u)
                  , f = new y(o[s],h.getLength() - 1).mod(h);
                a[s] = new Array(h.getLength() - 1);
                for (l = 0; l < a[s].length; l++) {
                    var p = l + f.getLength() - a[s].length;
                    a[s][l] = p >= 0 ? f.get(p) : 0
                }
            }
            var d = 0;
            for (l = 0; l < e.length; l++)
                d += e[l].totalCount;
            var m = new Array(d)
              , v = 0;
            for (l = 0; l < r; l++)
                for (s = 0; s < e.length; s++)
                    l < o[s].length && (m[v++] = o[s][l]);
            for (l = 0; l < i; l++)
                for (s = 0; s < e.length; s++)
                    l < a[s].length && (m[v++] = a[s][l]);
            return m
        }
        ;
        for (var o = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, a = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, s = 0, c = 1, u = 2, l = 3, h = 4, f = 5, p = 6, d = 7, g = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var e = t << 10; g.getBCHDigit(e) - g.getBCHDigit(g.G15) >= 0; )
                    e ^= g.G15 << g.getBCHDigit(e) - g.getBCHDigit(g.G15);
                return (t << 10 | e) ^ g.G15_MASK
            },
            getBCHTypeNumber: function(t) {
                for (var e = t << 12; g.getBCHDigit(e) - g.getBCHDigit(g.G18) >= 0; )
                    e ^= g.G18 << g.getBCHDigit(e) - g.getBCHDigit(g.G18);
                return t << 12 | e
            },
            getBCHDigit: function(t) {
                for (var e = 0; 0 != t; )
                    e++,
                    t >>>= 1;
                return e
            },
            getPatternPosition: function(t) {
                return g.PATTERN_POSITION_TABLE[t - 1]
            },
            getMask: function(t, e, n) {
                switch (t) {
                case s:
                    return (e + n) % 2 == 0;
                case c:
                    return e % 2 == 0;
                case u:
                    return n % 3 == 0;
                case l:
                    return (e + n) % 3 == 0;
                case h:
                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                case f:
                    return e * n % 2 + e * n % 3 == 0;
                case p:
                    return (e * n % 2 + e * n % 3) % 2 == 0;
                case d:
                    return (e * n % 3 + (e + n) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new y([1],0), n = 0; n < t; n++)
                    e = e.multiply(new y([1, m.gexp(n)],0));
                return e
            },
            getLengthInBits: function(t, e) {
                if (1 <= e && e < 10)
                    switch (t) {
                    case o.MODE_NUMBER:
                        return 10;
                    case o.MODE_ALPHA_NUM:
                        return 9;
                    case o.MODE_8BIT_BYTE:
                    case o.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                    }
                else if (e < 27)
                    switch (t) {
                    case o.MODE_NUMBER:
                        return 12;
                    case o.MODE_ALPHA_NUM:
                        return 11;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t)
                    }
                else {
                    if (!(e < 41))
                        throw new Error("type:" + e);
                    switch (t) {
                    case o.MODE_NUMBER:
                        return 14;
                    case o.MODE_ALPHA_NUM:
                        return 13;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                    }
                }
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                    for (var i = 0; i < e; i++) {
                        for (var o = 0, a = t.isDark(r, i), s = -1; s <= 1; s++)
                            if (!(r + s < 0 || e <= r + s))
                                for (var c = -1; c <= 1; c++)
                                    i + c < 0 || e <= i + c || 0 == s && 0 == c || a == t.isDark(r + s, i + c) && o++;
                        o > 5 && (n += 3 + o - 5)
                    }
                for (r = 0; r < e - 1; r++)
                    for (i = 0; i < e - 1; i++) {
                        var u = 0;
                        t.isDark(r, i) && u++,
                        t.isDark(r + 1, i) && u++,
                        t.isDark(r, i + 1) && u++,
                        t.isDark(r + 1, i + 1) && u++,
                        0 != u && 4 != u || (n += 3)
                    }
                for (r = 0; r < e; r++)
                    for (i = 0; i < e - 6; i++)
                        t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
                for (i = 0; i < e; i++)
                    for (r = 0; r < e - 6; r++)
                        t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
                var l = 0;
                for (i = 0; i < e; i++)
                    for (r = 0; r < e; r++)
                        t.isDark(r, i) && l++;
                return n += 10 * (Math.abs(100 * l / e / e - 50) / 5)
            }
        }, m = {
            glog: function(t) {
                if (t < 1)
                    throw new Error("glog(" + t + ")");
                return m.LOG_TABLE[t]
            },
            gexp: function(t) {
                for (; t < 0; )
                    t += 255;
                for (; t >= 256; )
                    t -= 255;
                return m.EXP_TABLE[t]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, v = 0; v < 8; v++)
            m.EXP_TABLE[v] = 1 << v;
        for (v = 8; v < 256; v++)
            m.EXP_TABLE[v] = m.EXP_TABLE[v - 4] ^ m.EXP_TABLE[v - 5] ^ m.EXP_TABLE[v - 6] ^ m.EXP_TABLE[v - 8];
        for (v = 0; v < 255; v++)
            m.LOG_TABLE[m.EXP_TABLE[v]] = v;
        function y(t, e) {
            if (null == t.length)
                throw new Error(t.length + "/" + e);
            for (var n = 0; n < t.length && 0 == t[n]; )
                n++;
            this.num = new Array(t.length - n + e);
            for (var r = 0; r < t.length - n; r++)
                this.num[r] = t[r + n]
        }
        function b(t, e) {
            this.totalCount = t,
            this.dataCount = e
        }
        function A() {
            this.buffer = [],
            this.length = 0
        }
        y.prototype = {
            get: function(t) {
                return this.num[t]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(t) {
                for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
                    for (var r = 0; r < t.getLength(); r++)
                        e[n + r] ^= m.gexp(m.glog(this.get(n)) + m.glog(t.get(r)));
                return new y(e,0)
            },
            mod: function(t) {
                if (this.getLength() - t.getLength() < 0)
                    return this;
                for (var e = m.glog(this.get(0)) - m.glog(t.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
                    n[r] = this.get(r);
                for (r = 0; r < t.getLength(); r++)
                    n[r] ^= m.gexp(m.glog(t.get(r)) + e);
                return new y(n,0).mod(t)
            }
        },
        b.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        b.getRSBlocks = function(t, e) {
            var n = b.getRsBlockTable(t, e);
            if (null == n)
                throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
            for (var r = n.length / 3, i = [], o = 0; o < r; o++)
                for (var a = n[3 * o + 0], s = n[3 * o + 1], c = n[3 * o + 2], u = 0; u < a; u++)
                    i.push(new b(s,c));
            return i
        }
        ,
        b.getRsBlockTable = function(t, e) {
            switch (e) {
            case a.L:
                return b.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case a.M:
                return b.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case a.Q:
                return b.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case a.H:
                return b.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return
            }
        }
        ,
        A.prototype = {
            get: function(t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
            },
            put: function(t, e) {
                for (var n = 0; n < e; n++)
                    this.putBit(1 == (t >>> e - n - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++
            }
        };
        var w = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
        function E(t, e) {
            for (var n = 1, r = function(t) {
                var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                return e.length + (e.length != t ? 3 : 0)
            }(t), i = 0, o = w.length; i <= o; i++) {
                var s = 0;
                switch (e) {
                case a.L:
                    s = w[i][0];
                    break;
                case a.M:
                    s = w[i][1];
                    break;
                case a.Q:
                    s = w[i][2];
                    break;
                case a.H:
                    s = w[i][3]
                }
                if (r <= s)
                    break;
                n++
            }
            if (n > w.length)
                throw new Error("Too long data");
            return n
        }
        var x = function(t) {
            this._bIsPainted = !1,
            this._htOption = t,
            this._elCanvas = document.createElement("canvas"),
            this._elCanvas.width = t.width,
            this._elCanvas.height = t.height,
            this._oContext = this._elCanvas.getContext("2d"),
            this._bIsPainted = !1
        };
        x.prototype.draw = function(t) {
            var e = this._oContext
              , n = this._htOption
              , r = t.getModuleCount()
              , i = n.width / r
              , o = n.height / r
              , a = Math.round(i)
              , s = Math.round(o);
            this.clear();
            for (var c = 0; c < r; c++)
                for (var u = 0; u < r; u++) {
                    var l = t.isDark(c, u)
                      , h = u * i
                      , f = c * o;
                    e.strokeStyle = l ? n.colorDark : n.colorLight,
                    e.lineWidth = 1,
                    e.fillStyle = l ? n.colorDark : n.colorLight,
                    e.fillRect(h, f, i, o),
                    e.strokeRect(Math.floor(h) + .5, Math.floor(f) + .5, a, s),
                    e.strokeRect(Math.ceil(h) - .5, Math.ceil(f) - .5, a, s)
                }
            this._bIsPainted = !0
        }
        ,
        x.prototype.isPainted = function() {
            return this._bIsPainted
        }
        ,
        x.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
            this._bIsPainted = !1
        }
        ;
        var k = function(t) {
            if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: a.H
            },
            "string" == typeof t && (t = {
                text: t
            }),
            t)
                for (var e in t)
                    this._htOption[e] = t[e];
            this._oQRCode = null,
            this._oDrawing = new x(this._htOption)
        };
        k.prototype.makeCode = function(t) {
            this._oQRCode = new i(E(t, this._htOption.correctLevel),this._htOption.correctLevel),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            this._oDrawing.draw(this._oQRCode)
        }
        ,
        k.prototype.toDataURL = function(t) {
            return this.makeCode(t),
            this._oDrawing._elCanvas.toDataURL("image/png")
        }
        ,
        k.CorrectLevel = a,
        e.a = function(t, e) {
            return new k(e).toDataURL(t)
        }
    },
    "HaE+": function(t, e, n) {
        t.exports = n("N6oO")("HaE+")
    },
    IJYC: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }
        ));
        var r = n("ODXe")
          , i = n("q1tI")
          , o = n("NBWt");
        function a(t) {
            var e = function() {
                var t = {
                    countryCode: "+86",
                    countryEng: "china"
                };
                try {
                    var e = o.a.getItem("loginCountryCode");
                    return e ? {
                        countryCode: e,
                        countryEng: o.a.getItem("loginCountryEng")
                    } : t
                } catch (e) {
                    return t
                }
            }()
              , n = Object(i.useState)(t.notUseCache ? "+86" : e.countryCode)
              , a = Object(r.default)(n, 2)
              , s = a[0]
              , c = a[1]
              , u = Object(i.useState)(t.notUseCache ? "china" : e.countryEng)
              , l = Object(r.default)(u, 2)
              , h = l[0]
              , f = l[1]
              , p = Object(i.useState)(t.notUseCache ? "" : o.a.getItem("loginAccount") || "")
              , d = Object(r.default)(p, 2)
              , g = d[0]
              , m = d[1]
              , v = Object(i.useState)(!1)
              , y = Object(r.default)(v, 2)
              , b = y[0]
              , A = y[1]
              , w = Object(i.useState)(!1)
              , E = Object(r.default)(w, 2)
              , x = E[0]
              , k = E[1]
              , S = Object(i.useState)("")
              , T = Object(r.default)(S, 2)
              , C = T[0]
              , O = T[1];
            return {
                countryCode: s,
                countryEng: h,
                mobile: g,
                accountError: b,
                codeError: x,
                accountErrorText: C,
                handleAccountChange: Object(i.useCallback)((function(t) {
                    var e = t.countryCode
                      , n = t.eng
                      , r = t.mobile
                      , i = t.error
                      , o = t.codeError
                      , a = t.errorText;
                    c(e),
                    f(n),
                    m(r),
                    A(i),
                    k(o),
                    O(a)
                }
                ), []),
                handleSetAccountError: Object(i.useCallback)((function(t, e, n) {
                    A(t),
                    k(e),
                    O(n)
                }
                ), []),
                accountValidations: {
                    validations: {
                        need: function(t, e) {
                            return !!e.mobile
                        },
                        format: function(t, e) {
                            var n = e.mobile
                              , r = e.countryCode;
                            return !!r && ("+86" !== r || /^1\d{10}/.test(n))
                        }
                    },
                    validationErrors: {
                        need: "请输入手机号",
                        format: "请输入正确的手机号"
                    }
                }
            }
        }
    },
    Im9W: function(t, e, n) {
        t.exports = n("N6oO")("Im9W")
    },
    N6oO: function(t, e) {
        t.exports = library
    },
    NBWt: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = {
            getItem: function(t) {
                if (!window.localStorage)
                    return "";
                try {
                    return window.localStorage.getItem(t)
                } catch (t) {
                    return ""
                }
            },
            setItem: function(t, e) {
                if (!window.localStorage)
                    return !1;
                try {
                    "string" != typeof e && (e = JSON.stringify(e)),
                    window.localStorage.setItem(t, e)
                } catch (t) {
                    return
                }
            }
        }
    },
    NkVu: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return Nt
            }
            ));
            var r = n("q1tI")
              , i = n.n(r)
              , o = n("N2V7")
              , a = n("pVbJ")
              , s = n("UoUk")
              , c = n("kCqN")
              , u = n("a+Rt")
              , l = n("oAOj")
              , h = n("L8Cs")
              , f = n.n(h)
              , p = function() {
                return (p = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
                ).apply(this, arguments)
            };
            function d(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(a, s)
                    }
                    c((r = r.apply(t, e || [])).next())
                }
                ))
            }
            function g(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys,
                                        (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2],
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
            function m(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports),
                e.exports
            }
            var v = m((function(t) {
                /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
                !function() {
                    var e = {}.hasOwnProperty;
                    function n() {
                        for (var t = [], r = 0; r < arguments.length; r++) {
                            var i = arguments[r];
                            if (i) {
                                var o = typeof i;
                                if ("string" === o || "number" === o)
                                    t.push(i);
                                else if (Array.isArray(i)) {
                                    if (i.length) {
                                        var a = n.apply(null, i);
                                        a && t.push(a)
                                    }
                                } else if ("object" === o) {
                                    if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                                        t.push(i.toString());
                                        continue
                                    }
                                    for (var s in i)
                                        e.call(i, s) && i[s] && t.push(s)
                                }
                            }
                        }
                        return t.join(" ")
                    }
                    t.exports ? (n.default = n,
                    t.exports = n) : window.classNames = n
                }()
            }
            ));
            var y = {
                get: function(t, e, n) {
                    void 0 === n && (n = !0),
                    t = t.replace(/[[]/, "\\[").replace(/[]]/, "\\]"),
                    e = e ? "?" + e.split("#")[0].split("?")[1] : window.location.search;
                    var r = RegExp("[?&]" + t + "=([^&#]*)").exec(e);
                    return r ? n ? decodeURIComponent(r[1].replace(/\+/g, " ")) : r[1] : ""
                },
                remove: function(t, e) {
                    var n = t.split("?");
                    if (n.length >= 2) {
                        for (var r = encodeURIComponent(e) + "=", i = n[1].split("&"), o = (i = i.reduce((function(t, e) {
                            return t.concat(e.split(";"))
                        }
                        ), [])).length; o-- > 0; )
                            -1 !== i[o].lastIndexOf(r, 0) && i.splice(o, 1);
                        return t = n[0] + "?" + i.join("&")
                    }
                    return t
                },
                add: function(t, e) {
                    if (!t || 0 === t.length || 0 === t.trim().indexOf("javascript"))
                        return "";
                    var n = t.split("#")
                      , r = n[0].split("?")
                      , i = {};
                    return r[1] && r[1].split("&").forEach((function(t) {
                        var e;
                        e = t.split("="),
                        i[e[0]] = e.slice(1).join("=")
                    }
                    )),
                    Object.keys(e).forEach((function(t) {
                        i[t.trim()] = encodeURIComponent(e[t])
                    }
                    )),
                    t = r[0] + function(t) {
                        var e = "";
                        for (var n in t)
                            "" !== t[n] && (e += n.trim() + "=" + t[n] + "&");
                        return e ? "?" + e.slice(0, e.length - 1) : ""
                    }(i),
                    n[1] ? t += "#" + n[1] : t
                }
            }
              , b = b || function(t, e) {
                var n = {}
                  , r = n.lib = {}
                  , i = function() {}
                  , o = r.Base = {
                    extend: function(t) {
                        i.prototype = this;
                        var e = new i;
                        return t && e.mixIn(t),
                        e.hasOwnProperty("init") || (e.init = function() {
                            e.$super.init.apply(this, arguments)
                        }
                        ),
                        e.init.prototype = e,
                        e.$super = this,
                        e
                    },
                    create: function() {
                        var t = this.extend();
                        return t.init.apply(t, arguments),
                        t
                    },
                    init: function() {},
                    mixIn: function(t) {
                        for (var e in t)
                            t.hasOwnProperty(e) && (this[e] = t[e]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
                  , a = r.WordArray = o.extend({
                    init: function(t, e) {
                        t = this.words = t || [],
                        this.sigBytes = null != e ? e : 4 * t.length
                    },
                    toString: function(t) {
                        return (t || c).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words
                          , n = t.words
                          , r = this.sigBytes;
                        if (t = t.sigBytes,
                        this.clamp(),
                        r % 4)
                            for (var i = 0; i < t; i++)
                                e[r + i >>> 2] |= (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8;
                        else if (65535 < n.length)
                            for (i = 0; i < t; i += 4)
                                e[r + i >>> 2] = n[i >>> 2];
                        else
                            e.push.apply(e, n);
                        return this.sigBytes += t,
                        this
                    },
                    clamp: function() {
                        var e = this.words
                          , n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                        e.length = t.ceil(n / 4)
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t.words = this.words.slice(0),
                        t
                    },
                    random: function(e) {
                        for (var n = [], r = 0; r < e; r += 4)
                            n.push(4294967296 * t.random() | 0);
                        return new a.init(n,e)
                    }
                })
                  , s = n.enc = {}
                  , c = s.Hex = {
                    stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var n = [], r = 0; r < t; r++) {
                            var i = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            n.push((i >>> 4).toString(16)),
                            n.push((15 & i).toString(16))
                        }
                        return n.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r += 2)
                            n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new a.init(n,e / 2)
                    }
                }
                  , u = s.Latin1 = {
                    stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var n = [], r = 0; r < t; r++)
                            n.push(String.fromCharCode(e[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                        return n.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++)
                            n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new a.init(n,e)
                    }
                }
                  , l = s.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(u.stringify(t)))
                        } catch (t) {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return u.parse(unescape(encodeURIComponent(t)))
                    }
                }
                  , h = r.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new a.init,
                        this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = l.parse(t)),
                        this._data.concat(t),
                        this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var n = this._data
                          , r = n.words
                          , i = n.sigBytes
                          , o = this.blockSize
                          , s = i / (4 * o);
                        if (e = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * o,
                        i = t.min(4 * e, i),
                        e) {
                            for (var c = 0; c < e; c += o)
                                this._doProcessBlock(r, c);
                            c = r.splice(0, e),
                            n.sigBytes -= i
                        }
                        return new a.init(c,i)
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._data = this._data.clone(),
                        t
                    },
                    _minBufferSize: 0
                });
                r.Hasher = h.extend({
                    cfg: o.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t),
                        this.reset()
                    },
                    reset: function() {
                        h.reset.call(this),
                        this._doReset()
                    },
                    update: function(t) {
                        return this._append(t),
                        this._process(),
                        this
                    },
                    finalize: function(t) {
                        return t && this._append(t),
                        this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(t) {
                        return function(e, n) {
                            return new t.init(n).finalize(e)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(e, n) {
                            return new f.HMAC.init(t,n).finalize(e)
                        }
                    }
                });
                var f = n.algo = {};
                return n
            }(Math);
            !function() {
                var t = b
                  , e = t.lib.WordArray;
                t.enc.Base64 = {
                    stringify: function(t) {
                        var e = t.words
                          , n = t.sigBytes
                          , r = this._map;
                        t.clamp(),
                        t = [];
                        for (var i = 0; i < n; i += 3)
                            for (var o = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; 4 > a && i + .75 * a < n; a++)
                                t.push(r.charAt(o >>> 6 * (3 - a) & 63));
                        if (e = r.charAt(64))
                            for (; t.length % 4; )
                                t.push(e);
                        return t.join("")
                    },
                    parse: function(t) {
                        var n = t.length
                          , r = this._map;
                        (i = r.charAt(64)) && (-1 != (i = t.indexOf(i)) && (n = i));
                        for (var i = [], o = 0, a = 0; a < n; a++)
                            if (a % 4) {
                                var s = r.indexOf(t.charAt(a - 1)) << a % 4 * 2
                                  , c = r.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                                i[o >>> 2] |= (s | c) << 24 - o % 4 * 8,
                                o++
                            }
                        return e.create(i, o)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(),
            function(t) {
                function e(t, e, n, r, i, o, a) {
                    return ((t = t + (e & n | ~e & r) + i + a) << o | t >>> 32 - o) + e
                }
                function n(t, e, n, r, i, o, a) {
                    return ((t = t + (e & r | n & ~r) + i + a) << o | t >>> 32 - o) + e
                }
                function r(t, e, n, r, i, o, a) {
                    return ((t = t + (e ^ n ^ r) + i + a) << o | t >>> 32 - o) + e
                }
                function i(t, e, n, r, i, o, a) {
                    return ((t = t + (n ^ (e | ~r)) + i + a) << o | t >>> 32 - o) + e
                }
                for (var o = b, a = (c = o.lib).WordArray, s = c.Hasher, c = o.algo, u = [], l = 0; 64 > l; l++)
                    u[l] = 4294967296 * t.abs(t.sin(l + 1)) | 0;
                c = c.MD5 = s.extend({
                    _doReset: function() {
                        this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, o) {
                        for (var a = 0; 16 > a; a++) {
                            var s = t[c = o + a];
                            t[c] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                        }
                        a = this._hash.words;
                        var c = t[o + 0]
                          , l = (s = t[o + 1],
                        t[o + 2])
                          , h = t[o + 3]
                          , f = t[o + 4]
                          , p = t[o + 5]
                          , d = t[o + 6]
                          , g = t[o + 7]
                          , m = t[o + 8]
                          , v = t[o + 9]
                          , y = t[o + 10]
                          , b = t[o + 11]
                          , A = t[o + 12]
                          , w = t[o + 13]
                          , E = t[o + 14]
                          , x = t[o + 15]
                          , k = e(k = a[0], C = a[1], T = a[2], S = a[3], c, 7, u[0])
                          , S = e(S, k, C, T, s, 12, u[1])
                          , T = e(T, S, k, C, l, 17, u[2])
                          , C = e(C, T, S, k, h, 22, u[3]);
                        k = e(k, C, T, S, f, 7, u[4]),
                        S = e(S, k, C, T, p, 12, u[5]),
                        T = e(T, S, k, C, d, 17, u[6]),
                        C = e(C, T, S, k, g, 22, u[7]),
                        k = e(k, C, T, S, m, 7, u[8]),
                        S = e(S, k, C, T, v, 12, u[9]),
                        T = e(T, S, k, C, y, 17, u[10]),
                        C = e(C, T, S, k, b, 22, u[11]),
                        k = e(k, C, T, S, A, 7, u[12]),
                        S = e(S, k, C, T, w, 12, u[13]),
                        T = e(T, S, k, C, E, 17, u[14]),
                        k = n(k, C = e(C, T, S, k, x, 22, u[15]), T, S, s, 5, u[16]),
                        S = n(S, k, C, T, d, 9, u[17]),
                        T = n(T, S, k, C, b, 14, u[18]),
                        C = n(C, T, S, k, c, 20, u[19]),
                        k = n(k, C, T, S, p, 5, u[20]),
                        S = n(S, k, C, T, y, 9, u[21]),
                        T = n(T, S, k, C, x, 14, u[22]),
                        C = n(C, T, S, k, f, 20, u[23]),
                        k = n(k, C, T, S, v, 5, u[24]),
                        S = n(S, k, C, T, E, 9, u[25]),
                        T = n(T, S, k, C, h, 14, u[26]),
                        C = n(C, T, S, k, m, 20, u[27]),
                        k = n(k, C, T, S, w, 5, u[28]),
                        S = n(S, k, C, T, l, 9, u[29]),
                        T = n(T, S, k, C, g, 14, u[30]),
                        k = r(k, C = n(C, T, S, k, A, 20, u[31]), T, S, p, 4, u[32]),
                        S = r(S, k, C, T, m, 11, u[33]),
                        T = r(T, S, k, C, b, 16, u[34]),
                        C = r(C, T, S, k, E, 23, u[35]),
                        k = r(k, C, T, S, s, 4, u[36]),
                        S = r(S, k, C, T, f, 11, u[37]),
                        T = r(T, S, k, C, g, 16, u[38]),
                        C = r(C, T, S, k, y, 23, u[39]),
                        k = r(k, C, T, S, w, 4, u[40]),
                        S = r(S, k, C, T, c, 11, u[41]),
                        T = r(T, S, k, C, h, 16, u[42]),
                        C = r(C, T, S, k, d, 23, u[43]),
                        k = r(k, C, T, S, v, 4, u[44]),
                        S = r(S, k, C, T, A, 11, u[45]),
                        T = r(T, S, k, C, x, 16, u[46]),
                        k = i(k, C = r(C, T, S, k, l, 23, u[47]), T, S, c, 6, u[48]),
                        S = i(S, k, C, T, g, 10, u[49]),
                        T = i(T, S, k, C, E, 15, u[50]),
                        C = i(C, T, S, k, p, 21, u[51]),
                        k = i(k, C, T, S, A, 6, u[52]),
                        S = i(S, k, C, T, h, 10, u[53]),
                        T = i(T, S, k, C, y, 15, u[54]),
                        C = i(C, T, S, k, s, 21, u[55]),
                        k = i(k, C, T, S, m, 6, u[56]),
                        S = i(S, k, C, T, x, 10, u[57]),
                        T = i(T, S, k, C, d, 15, u[58]),
                        C = i(C, T, S, k, w, 21, u[59]),
                        k = i(k, C, T, S, f, 6, u[60]),
                        S = i(S, k, C, T, b, 10, u[61]),
                        T = i(T, S, k, C, l, 15, u[62]),
                        C = i(C, T, S, k, v, 21, u[63]);
                        a[0] = a[0] + k | 0,
                        a[1] = a[1] + C | 0,
                        a[2] = a[2] + T | 0,
                        a[3] = a[3] + S | 0
                    },
                    _doFinalize: function() {
                        var e = this._data
                          , n = e.words
                          , r = 8 * this._nDataBytes
                          , i = 8 * e.sigBytes;
                        n[i >>> 5] |= 128 << 24 - i % 32;
                        var o = t.floor(r / 4294967296);
                        for (n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                        n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                        e.sigBytes = 4 * (n.length + 1),
                        this._process(),
                        n = (e = this._hash).words,
                        r = 0; 4 > r; r++)
                            i = n[r],
                            n[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        return e
                    },
                    clone: function() {
                        var t = s.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                }),
                o.MD5 = s._createHelper(c),
                o.HmacMD5 = s._createHmacHelper(c)
            }(Math),
            function() {
                var t, e = b, n = (t = e.lib).Base, r = t.WordArray, i = (t = e.algo).EvpKDF = n.extend({
                    cfg: n.extend({
                        keySize: 4,
                        hasher: t.MD5,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var n = (s = this.cfg).hasher.create(), i = r.create(), o = i.words, a = s.keySize, s = s.iterations; o.length < a; ) {
                            c && n.update(c);
                            var c = n.update(t).finalize(e);
                            n.reset();
                            for (var u = 1; u < s; u++)
                                c = n.finalize(c),
                                n.reset();
                            i.concat(c)
                        }
                        return i.sigBytes = 4 * a,
                        i
                    }
                });
                e.EvpKDF = function(t, e, n) {
                    return i.create(n).compute(t, e)
                }
            }(),
            b.lib.Cipher || function(t) {
                var e = (p = b).lib
                  , n = e.Base
                  , r = e.WordArray
                  , i = e.BufferedBlockAlgorithm
                  , o = p.enc.Base64
                  , a = p.algo.EvpKDF
                  , s = e.Cipher = i.extend({
                    cfg: n.extend(),
                    createEncryptor: function(t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    init: function(t, e, n) {
                        this.cfg = this.cfg.extend(n),
                        this._xformMode = t,
                        this._key = e,
                        this.reset()
                    },
                    reset: function() {
                        i.reset.call(this),
                        this._doReset()
                    },
                    process: function(t) {
                        return this._append(t),
                        this._process()
                    },
                    finalize: function(t) {
                        return t && this._append(t),
                        this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function(t) {
                        return {
                            encrypt: function(e, n, r) {
                                return ("string" == typeof n ? d : f).encrypt(t, e, n, r)
                            },
                            decrypt: function(e, n, r) {
                                return ("string" == typeof n ? d : f).decrypt(t, e, n, r)
                            }
                        }
                    }
                });
                e.StreamCipher = s.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                });
                var c = p.mode = {}
                  , u = function(t, e, n) {
                    var r = this._iv;
                    r ? this._iv = void 0 : r = this._prevBlock;
                    for (var i = 0; i < n; i++)
                        t[e + i] ^= r[i]
                }
                  , l = (e.BlockCipherMode = n.extend({
                    createEncryptor: function(t, e) {
                        return this.Encryptor.create(t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.Decryptor.create(t, e)
                    },
                    init: function(t, e) {
                        this._cipher = t,
                        this._iv = e
                    }
                })).extend();
                l.Encryptor = l.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , r = n.blockSize;
                        u.call(this, t, e, r),
                        n.encryptBlock(t, e),
                        this._prevBlock = t.slice(e, e + r)
                    }
                }),
                l.Decryptor = l.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , r = n.blockSize
                          , i = t.slice(e, e + r);
                        n.decryptBlock(t, e),
                        u.call(this, t, e, r),
                        this._prevBlock = i
                    }
                }),
                c = c.CBC = l,
                l = (p.pad = {}).Pkcs7 = {
                    pad: function(t, e) {
                        for (var n, i = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, o = [], a = 0; a < n; a += 4)
                            o.push(i);
                        n = r.create(o, n),
                        t.concat(n)
                    },
                    unpad: function(t) {
                        t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                    }
                },
                e.BlockCipher = s.extend({
                    cfg: s.cfg.extend({
                        mode: c,
                        padding: l
                    }),
                    reset: function() {
                        s.reset.call(this);
                        var t = (e = this.cfg).iv
                          , e = e.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE)
                            var n = e.createEncryptor;
                        else
                            n = e.createDecryptor,
                            this._minBufferSize = 1;
                        this._mode = n.call(e, this, t && t.words)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else
                            e = this._process(!0),
                            t.unpad(e);
                        return e
                    },
                    blockSize: 4
                });
                var h = e.CipherParams = n.extend({
                    init: function(t) {
                        this.mixIn(t)
                    },
                    toString: function(t) {
                        return (t || this.formatter).stringify(this)
                    }
                })
                  , f = (c = (p.format = {}).OpenSSL = {
                    stringify: function(t) {
                        var e = t.ciphertext;
                        return ((t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o)
                    },
                    parse: function(t) {
                        var e = (t = o.parse(t)).words;
                        if (1398893684 == e[0] && 1701076831 == e[1]) {
                            var n = r.create(e.slice(2, 4));
                            e.splice(0, 4),
                            t.sigBytes -= 16
                        }
                        return h.create({
                            ciphertext: t,
                            salt: n
                        })
                    }
                },
                e.SerializableCipher = n.extend({
                    cfg: n.extend({
                        format: c
                    }),
                    encrypt: function(t, e, n, r) {
                        r = this.cfg.extend(r);
                        var i = t.createEncryptor(n, r);
                        return e = i.finalize(e),
                        i = i.cfg,
                        h.create({
                            ciphertext: e,
                            key: n,
                            iv: i.iv,
                            algorithm: t,
                            mode: i.mode,
                            padding: i.padding,
                            blockSize: t.blockSize,
                            formatter: r.format
                        })
                    },
                    decrypt: function(t, e, n, r) {
                        return r = this.cfg.extend(r),
                        e = this._parse(e, r.format),
                        t.createDecryptor(n, r).finalize(e.ciphertext)
                    },
                    _parse: function(t, e) {
                        return "string" == typeof t ? e.parse(t, this) : t
                    }
                }))
                  , p = (p.kdf = {}).OpenSSL = {
                    execute: function(t, e, n, i) {
                        return i || (i = r.random(8)),
                        t = a.create({
                            keySize: e + n
                        }).compute(t, i),
                        n = r.create(t.words.slice(e), 4 * n),
                        t.sigBytes = 4 * e,
                        h.create({
                            key: t,
                            iv: n,
                            salt: i
                        })
                    }
                }
                  , d = e.PasswordBasedCipher = f.extend({
                    cfg: f.cfg.extend({
                        kdf: p
                    }),
                    encrypt: function(t, e, n, r) {
                        return n = (r = this.cfg.extend(r)).kdf.execute(n, t.keySize, t.ivSize),
                        r.iv = n.iv,
                        (t = f.encrypt.call(this, t, e, n.key, r)).mixIn(n),
                        t
                    },
                    decrypt: function(t, e, n, r) {
                        return r = this.cfg.extend(r),
                        e = this._parse(e, r.format),
                        n = r.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                        r.iv = n.iv,
                        f.decrypt.call(this, t, e, n.key, r)
                    }
                })
            }(),
            function() {
                for (var t = b, e = t.lib.BlockCipher, n = t.algo, r = [], i = [], o = [], a = [], s = [], c = [], u = [], l = [], h = [], f = [], p = [], d = 0; 256 > d; d++)
                    p[d] = 128 > d ? d << 1 : d << 1 ^ 283;
                var g = 0
                  , m = 0;
                for (d = 0; 256 > d; d++) {
                    var v = (v = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4) >>> 8 ^ 255 & v ^ 99;
                    r[g] = v,
                    i[v] = g;
                    var y = p[g]
                      , A = p[y]
                      , w = p[A]
                      , E = 257 * p[v] ^ 16843008 * v;
                    o[g] = E << 24 | E >>> 8,
                    a[g] = E << 16 | E >>> 16,
                    s[g] = E << 8 | E >>> 24,
                    c[g] = E,
                    E = 16843009 * w ^ 65537 * A ^ 257 * y ^ 16843008 * g,
                    u[v] = E << 24 | E >>> 8,
                    l[v] = E << 16 | E >>> 16,
                    h[v] = E << 8 | E >>> 24,
                    f[v] = E,
                    g ? (g = y ^ p[p[p[w ^ y]]],
                    m ^= p[p[m]]) : g = m = 1
                }
                var x = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                n = n.AES = e.extend({
                    _doReset: function() {
                        for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), i = this._keySchedule = [], o = 0; o < n; o++)
                            if (o < e)
                                i[o] = t[o];
                            else {
                                var a = i[o - 1];
                                o % e ? 6 < e && 4 == o % e && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a]) : (a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a],
                                a ^= x[o / e | 0] << 24),
                                i[o] = i[o - e] ^ a
                            }
                        for (t = this._invKeySchedule = [],
                        e = 0; e < n; e++)
                            o = n - e,
                            a = e % 4 ? i[o] : i[o - 4],
                            t[e] = 4 > e || 4 >= o ? a : u[r[a >>> 24]] ^ l[r[a >>> 16 & 255]] ^ h[r[a >>> 8 & 255]] ^ f[r[255 & a]]
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, o, a, s, c, r)
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n,
                        this._doCryptBlock(t, e, this._invKeySchedule, u, l, h, f, i),
                        n = t[e + 1],
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n
                    },
                    _doCryptBlock: function(t, e, n, r, i, o, a, s) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], l = t[e + 1] ^ n[1], h = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], p = 4, d = 1; d < c; d++) {
                            var g = r[u >>> 24] ^ i[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & f] ^ n[p++]
                              , m = r[l >>> 24] ^ i[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & u] ^ n[p++]
                              , v = r[h >>> 24] ^ i[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & l] ^ n[p++];
                            f = r[f >>> 24] ^ i[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & h] ^ n[p++],
                            u = g,
                            l = m,
                            h = v
                        }
                        g = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++],
                        m = (s[l >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++],
                        v = (s[h >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++],
                        f = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & h]) ^ n[p++],
                        t[e] = g,
                        t[e + 1] = m,
                        t[e + 2] = v,
                        t[e + 3] = f
                    },
                    keySize: 8
                });
                t.AES = e._createHelper(n)
            }(),
            b.pad.Iso10126 = {
                pad: function(t, e) {
                    var n = (n = 4 * e) - t.sigBytes % n;
                    t.concat(b.lib.WordArray.random(n - 1)).concat(b.lib.WordArray.create([n << 24], 1))
                },
                unpad: function(t) {
                    t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                }
            };
            var A = b
              , w = m((function(t, e) {
                /*! For license information please see jsencrypt.min.js.LICENSE.txt */
                t.exports = function() {
                    var t = [, function(t, e, n) {
                        function r(t) {
                            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                        }
                        function i(t, e) {
                            return t & e
                        }
                        function o(t, e) {
                            return t | e
                        }
                        function a(t, e) {
                            return t ^ e
                        }
                        function s(t, e) {
                            return t & ~e
                        }
                        function c(t) {
                            if (0 == t)
                                return -1;
                            var e = 0;
                            return 0 == (65535 & t) && (t >>= 16,
                            e += 16),
                            0 == (255 & t) && (t >>= 8,
                            e += 8),
                            0 == (15 & t) && (t >>= 4,
                            e += 4),
                            0 == (3 & t) && (t >>= 2,
                            e += 2),
                            0 == (1 & t) && ++e,
                            e
                        }
                        function u(t) {
                            for (var e = 0; 0 != t; )
                                t &= t - 1,
                                ++e;
                            return e
                        }
                        n.d(e, {
                            default: function() {
                                return at
                            }
                        });
                        var l, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        function f(t) {
                            var e, n, r = "";
                            for (e = 0; e + 3 <= t.length; e += 3)
                                n = parseInt(t.substring(e, e + 3), 16),
                                r += h.charAt(n >> 6) + h.charAt(63 & n);
                            for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16),
                            r += h.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16),
                            r += h.charAt(n >> 2) + h.charAt((3 & n) << 4)); (3 & r.length) > 0; )
                                r += "=";
                            return r
                        }
                        function p(t) {
                            var e, n = "", i = 0, o = 0;
                            for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                                var a = h.indexOf(t.charAt(e));
                                a < 0 || (0 == i ? (n += r(a >> 2),
                                o = 3 & a,
                                i = 1) : 1 == i ? (n += r(o << 2 | a >> 4),
                                o = 15 & a,
                                i = 2) : 2 == i ? (n += r(o),
                                n += r(a >> 2),
                                o = 3 & a,
                                i = 3) : (n += r(o << 2 | a >> 4),
                                n += r(15 & a),
                                i = 0))
                            }
                            return 1 == i && (n += r(o << 2)),
                            n
                        }
                        var d, g = {
                            decode: function(t) {
                                var e;
                                if (void 0 === d) {
                                    var n = "= \f\n\r\t \u2028\u2029";
                                    for (d = Object.create(null),
                                    e = 0; e < 64; ++e)
                                        d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                                    for (d["-"] = 62,
                                    d._ = 63,
                                    e = 0; e < n.length; ++e)
                                        d[n.charAt(e)] = -1
                                }
                                var r = []
                                  , i = 0
                                  , o = 0;
                                for (e = 0; e < t.length; ++e) {
                                    var a = t.charAt(e);
                                    if ("=" == a)
                                        break;
                                    if (-1 != (a = d[a])) {
                                        if (void 0 === a)
                                            throw new Error("Illegal character at offset " + e);
                                        i |= a,
                                        ++o >= 4 ? (r[r.length] = i >> 16,
                                        r[r.length] = i >> 8 & 255,
                                        r[r.length] = 255 & i,
                                        i = 0,
                                        o = 0) : i <<= 6
                                    }
                                }
                                switch (o) {
                                case 1:
                                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                                case 2:
                                    r[r.length] = i >> 10;
                                    break;
                                case 3:
                                    r[r.length] = i >> 16,
                                    r[r.length] = i >> 8 & 255
                                }
                                return r
                            },
                            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                            unarmor: function(t) {
                                var e = g.re.exec(t);
                                if (e)
                                    if (e[1])
                                        t = e[1];
                                    else {
                                        if (!e[2])
                                            throw new Error("RegExp out of sync");
                                        t = e[2]
                                    }
                                return g.decode(t)
                            }
                        }, m = 1e13, v = function() {
                            function t(t) {
                                this.buf = [+t || 0]
                            }
                            return t.prototype.mulAdd = function(t, e) {
                                var n, r, i = this.buf, o = i.length;
                                for (n = 0; n < o; ++n)
                                    (r = i[n] * t + e) < m ? e = 0 : r -= (e = 0 | r / m) * m,
                                    i[n] = r;
                                e > 0 && (i[n] = e)
                            }
                            ,
                            t.prototype.sub = function(t) {
                                var e, n, r = this.buf, i = r.length;
                                for (e = 0; e < i; ++e)
                                    (n = r[e] - t) < 0 ? (n += m,
                                    t = 1) : t = 0,
                                    r[e] = n;
                                for (; 0 === r[r.length - 1]; )
                                    r.pop()
                            }
                            ,
                            t.prototype.toString = function(t) {
                                if (10 != (t || 10))
                                    throw new Error("only base 10 is supported");
                                for (var e = this.buf, n = e[e.length - 1].toString(), r = e.length - 2; r >= 0; --r)
                                    n += (m + e[r]).toString().substring(1);
                                return n
                            }
                            ,
                            t.prototype.valueOf = function() {
                                for (var t = this.buf, e = 0, n = t.length - 1; n >= 0; --n)
                                    e = e * m + t[n];
                                return e
                            }
                            ,
                            t.prototype.simplify = function() {
                                var t = this.buf;
                                return 1 == t.length ? t[0] : this
                            }
                            ,
                            t
                        }(), y = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, b = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
                        function A(t, e) {
                            return t.length > e && (t = t.substring(0, e) + "…"),
                            t
                        }
                        var w, E = function() {
                            function t(e, n) {
                                this.hexDigits = "0123456789ABCDEF",
                                e instanceof t ? (this.enc = e.enc,
                                this.pos = e.pos) : (this.enc = e,
                                this.pos = n)
                            }
                            return t.prototype.get = function(t) {
                                if (void 0 === t && (t = this.pos++),
                                t >= this.enc.length)
                                    throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                                return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                            }
                            ,
                            t.prototype.hexByte = function(t) {
                                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                            }
                            ,
                            t.prototype.hexDump = function(t, e, n) {
                                for (var r = "", i = t; i < e; ++i)
                                    if (r += this.hexByte(this.get(i)),
                                    !0 !== n)
                                        switch (15 & i) {
                                        case 7:
                                            r += "  ";
                                            break;
                                        case 15:
                                            r += "\n";
                                            break;
                                        default:
                                            r += " "
                                        }
                                return r
                            }
                            ,
                            t.prototype.isASCII = function(t, e) {
                                for (var n = t; n < e; ++n) {
                                    var r = this.get(n);
                                    if (r < 32 || r > 176)
                                        return !1
                                }
                                return !0
                            }
                            ,
                            t.prototype.parseStringISO = function(t, e) {
                                for (var n = "", r = t; r < e; ++r)
                                    n += String.fromCharCode(this.get(r));
                                return n
                            }
                            ,
                            t.prototype.parseStringUTF = function(t, e) {
                                for (var n = "", r = t; r < e; ) {
                                    var i = this.get(r++);
                                    n += i < 128 ? String.fromCharCode(i) : i > 191 && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                                }
                                return n
                            }
                            ,
                            t.prototype.parseStringBMP = function(t, e) {
                                for (var n, r, i = "", o = t; o < e; )
                                    n = this.get(o++),
                                    r = this.get(o++),
                                    i += String.fromCharCode(n << 8 | r);
                                return i
                            }
                            ,
                            t.prototype.parseTime = function(t, e, n) {
                                var r = this.parseStringISO(t, e)
                                  , i = (n ? y : b).exec(r);
                                return i ? (n && (i[1] = +i[1],
                                i[1] += +i[1] < 70 ? 2e3 : 1900),
                                r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4],
                                i[5] && (r += ":" + i[5],
                                i[6] && (r += ":" + i[6],
                                i[7] && (r += "." + i[7]))),
                                i[8] && (r += " UTC",
                                "Z" != i[8] && (r += i[8],
                                i[9] && (r += ":" + i[9]))),
                                r) : "Unrecognized time: " + r
                            }
                            ,
                            t.prototype.parseInteger = function(t, e) {
                                for (var n, r = this.get(t), i = r > 127, o = i ? 255 : 0, a = ""; r == o && ++t < e; )
                                    r = this.get(t);
                                if (0 == (n = e - t))
                                    return i ? -1 : 0;
                                if (n > 4) {
                                    for (a = r,
                                    n <<= 3; 0 == (128 & (+a ^ o)); )
                                        a = +a << 1,
                                        --n;
                                    a = "(" + n + " bit)\n"
                                }
                                i && (r -= 256);
                                for (var s = new v(r), c = t + 1; c < e; ++c)
                                    s.mulAdd(256, this.get(c));
                                return a + s.toString()
                            }
                            ,
                            t.prototype.parseBitString = function(t, e, n) {
                                for (var r = this.get(t), i = "(" + ((e - t - 1 << 3) - r) + " bit)\n", o = "", a = t + 1; a < e; ++a) {
                                    for (var s = this.get(a), c = a == e - 1 ? r : 0, u = 7; u >= c; --u)
                                        o += s >> u & 1 ? "1" : "0";
                                    if (o.length > n)
                                        return i + A(o, n)
                                }
                                return i + o
                            }
                            ,
                            t.prototype.parseOctetString = function(t, e, n) {
                                if (this.isASCII(t, e))
                                    return A(this.parseStringISO(t, e), n);
                                var r = e - t
                                  , i = "(" + r + " byte)\n";
                                r > (n /= 2) && (e = t + n);
                                for (var o = t; o < e; ++o)
                                    i += this.hexByte(this.get(o));
                                return r > n && (i += "…"),
                                i
                            }
                            ,
                            t.prototype.parseOID = function(t, e, n) {
                                for (var r = "", i = new v, o = 0, a = t; a < e; ++a) {
                                    var s = this.get(a);
                                    if (i.mulAdd(128, 127 & s),
                                    o += 7,
                                    !(128 & s)) {
                                        if ("" === r)
                                            if ((i = i.simplify())instanceof v)
                                                i.sub(80),
                                                r = "2." + i.toString();
                                            else {
                                                var c = i < 80 ? i < 40 ? 0 : 1 : 2;
                                                r = c + "." + (i - 40 * c)
                                            }
                                        else
                                            r += "." + i.toString();
                                        if (r.length > n)
                                            return A(r, n);
                                        i = new v,
                                        o = 0
                                    }
                                }
                                return o > 0 && (r += ".incomplete"),
                                r
                            }
                            ,
                            t
                        }(), x = function() {
                            function t(t, e, n, r, i) {
                                if (!(r instanceof k))
                                    throw new Error("Invalid tag value.");
                                this.stream = t,
                                this.header = e,
                                this.length = n,
                                this.tag = r,
                                this.sub = i
                            }
                            return t.prototype.typeName = function() {
                                switch (this.tag.tagClass) {
                                case 0:
                                    switch (this.tag.tagNumber) {
                                    case 0:
                                        return "EOC";
                                    case 1:
                                        return "BOOLEAN";
                                    case 2:
                                        return "INTEGER";
                                    case 3:
                                        return "BIT_STRING";
                                    case 4:
                                        return "OCTET_STRING";
                                    case 5:
                                        return "NULL";
                                    case 6:
                                        return "OBJECT_IDENTIFIER";
                                    case 7:
                                        return "ObjectDescriptor";
                                    case 8:
                                        return "EXTERNAL";
                                    case 9:
                                        return "REAL";
                                    case 10:
                                        return "ENUMERATED";
                                    case 11:
                                        return "EMBEDDED_PDV";
                                    case 12:
                                        return "UTF8String";
                                    case 16:
                                        return "SEQUENCE";
                                    case 17:
                                        return "SET";
                                    case 18:
                                        return "NumericString";
                                    case 19:
                                        return "PrintableString";
                                    case 20:
                                        return "TeletexString";
                                    case 21:
                                        return "VideotexString";
                                    case 22:
                                        return "IA5String";
                                    case 23:
                                        return "UTCTime";
                                    case 24:
                                        return "GeneralizedTime";
                                    case 25:
                                        return "GraphicString";
                                    case 26:
                                        return "VisibleString";
                                    case 27:
                                        return "GeneralString";
                                    case 28:
                                        return "UniversalString";
                                    case 30:
                                        return "BMPString"
                                    }
                                    return "Universal_" + this.tag.tagNumber.toString();
                                case 1:
                                    return "Application_" + this.tag.tagNumber.toString();
                                case 2:
                                    return "[" + this.tag.tagNumber.toString() + "]";
                                case 3:
                                    return "Private_" + this.tag.tagNumber.toString()
                                }
                            }
                            ,
                            t.prototype.content = function(t) {
                                if (void 0 === this.tag)
                                    return null;
                                void 0 === t && (t = 1 / 0);
                                var e = this.posContent()
                                  , n = Math.abs(this.length);
                                if (!this.tag.isUniversal())
                                    return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                                switch (this.tag.tagNumber) {
                                case 1:
                                    return 0 === this.stream.get(e) ? "false" : "true";
                                case 2:
                                    return this.stream.parseInteger(e, e + n);
                                case 3:
                                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
                                case 4:
                                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                                case 6:
                                    return this.stream.parseOID(e, e + n, t);
                                case 16:
                                case 17:
                                    return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                                case 12:
                                    return A(this.stream.parseStringUTF(e, e + n), t);
                                case 18:
                                case 19:
                                case 20:
                                case 21:
                                case 22:
                                case 26:
                                    return A(this.stream.parseStringISO(e, e + n), t);
                                case 30:
                                    return A(this.stream.parseStringBMP(e, e + n), t);
                                case 23:
                                case 24:
                                    return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber)
                                }
                                return null
                            }
                            ,
                            t.prototype.toString = function() {
                                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                            }
                            ,
                            t.prototype.toPrettyString = function(t) {
                                void 0 === t && (t = "");
                                var e = t + this.typeName() + " @" + this.stream.pos;
                                if (this.length >= 0 && (e += "+"),
                                e += this.length,
                                this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"),
                                e += "\n",
                                null !== this.sub) {
                                    t += "  ";
                                    for (var n = 0, r = this.sub.length; n < r; ++n)
                                        e += this.sub[n].toPrettyString(t)
                                }
                                return e
                            }
                            ,
                            t.prototype.posStart = function() {
                                return this.stream.pos
                            }
                            ,
                            t.prototype.posContent = function() {
                                return this.stream.pos + this.header
                            }
                            ,
                            t.prototype.posEnd = function() {
                                return this.stream.pos + this.header + Math.abs(this.length)
                            }
                            ,
                            t.prototype.toHexString = function() {
                                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                            }
                            ,
                            t.decodeLength = function(t) {
                                var e = t.get()
                                  , n = 127 & e;
                                if (n == e)
                                    return n;
                                if (n > 6)
                                    throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                                if (0 === n)
                                    return null;
                                e = 0;
                                for (var r = 0; r < n; ++r)
                                    e = 256 * e + t.get();
                                return e
                            }
                            ,
                            t.prototype.getHexStringValue = function() {
                                var t = this.toHexString()
                                  , e = 2 * this.header
                                  , n = 2 * this.length;
                                return t.substr(e, n)
                            }
                            ,
                            t.decode = function(e) {
                                var n;
                                n = e instanceof E ? e : new E(e,0);
                                var r = new E(n)
                                  , i = new k(n)
                                  , o = t.decodeLength(n)
                                  , a = n.pos
                                  , s = a - r.pos
                                  , c = null
                                  , u = function() {
                                    var e = [];
                                    if (null !== o) {
                                        for (var r = a + o; n.pos < r; )
                                            e[e.length] = t.decode(n);
                                        if (n.pos != r)
                                            throw new Error("Content size is not correct for container starting at offset " + a)
                                    } else
                                        try {
                                            for (; ; ) {
                                                var i = t.decode(n);
                                                if (i.tag.isEOC())
                                                    break;
                                                e[e.length] = i
                                            }
                                            o = a - n.pos
                                        } catch (t) {
                                            throw new Error("Exception while decoding undefined length content: " + t)
                                        }
                                    return e
                                };
                                if (i.tagConstructed)
                                    c = u();
                                else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber))
                                    try {
                                        if (3 == i.tagNumber && 0 != n.get())
                                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                                        c = u();
                                        for (var l = 0; l < c.length; ++l)
                                            if (c[l].tag.isEOC())
                                                throw new Error("EOC is not supposed to be actual content.")
                                    } catch (t) {
                                        c = null
                                    }
                                if (null === c) {
                                    if (null === o)
                                        throw new Error("We can't skip over an invalid tag with undefined length at offset " + a);
                                    n.pos = a + Math.abs(o)
                                }
                                return new t(r,s,o,i,c)
                            }
                            ,
                            t
                        }(), k = function() {
                            function t(t) {
                                var e = t.get();
                                if (this.tagClass = e >> 6,
                                this.tagConstructed = 0 != (32 & e),
                                this.tagNumber = 31 & e,
                                31 == this.tagNumber) {
                                    var n = new v;
                                    do {
                                        e = t.get(),
                                        n.mulAdd(128, 127 & e)
                                    } while (128 & e);
                                    this.tagNumber = n.simplify()
                                }
                            }
                            return t.prototype.isUniversal = function() {
                                return 0 === this.tagClass
                            }
                            ,
                            t.prototype.isEOC = function() {
                                return 0 === this.tagClass && 0 === this.tagNumber
                            }
                            ,
                            t
                        }(), S = {
                            appName: "Netscape",
                            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46     (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
                        }, T = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], C = (1 << 26) / T[T.length - 1], O = function() {
                            function t(t, e, n) {
                                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                            }
                            return t.prototype.toString = function(t) {
                                if (this.s < 0)
                                    return "-" + this.negate().toString(t);
                                var e;
                                if (16 == t)
                                    e = 4;
                                else if (8 == t)
                                    e = 3;
                                else if (2 == t)
                                    e = 1;
                                else if (32 == t)
                                    e = 5;
                                else {
                                    if (4 != t)
                                        return this.toRadix(t);
                                    e = 2
                                }
                                var n, i = (1 << e) - 1, o = !1, a = "", s = this.t, c = this.DB - s * this.DB % e;
                                if (s-- > 0)
                                    for (c < this.DB && (n = this[s] >> c) > 0 && (o = !0,
                                    a = r(n)); s >= 0; )
                                        c < e ? (n = (this[s] & (1 << c) - 1) << e - c,
                                        n |= this[--s] >> (c += this.DB - e)) : (n = this[s] >> (c -= e) & i,
                                        c <= 0 && (c += this.DB,
                                        --s)),
                                        n > 0 && (o = !0),
                                        o && (a += r(n));
                                return o ? a : "0"
                            }
                            ,
                            t.prototype.negate = function() {
                                var e = j();
                                return t.ZERO.subTo(this, e),
                                e
                            }
                            ,
                            t.prototype.abs = function() {
                                return this.s < 0 ? this.negate() : this
                            }
                            ,
                            t.prototype.compareTo = function(t) {
                                var e = this.s - t.s;
                                if (0 != e)
                                    return e;
                                var n = this.t;
                                if (0 != (e = n - t.t))
                                    return this.s < 0 ? -e : e;
                                for (; --n >= 0; )
                                    if (0 != (e = this[n] - t[n]))
                                        return e;
                                return 0
                            }
                            ,
                            t.prototype.bitLength = function() {
                                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + V(this[this.t - 1] ^ this.s & this.DM)
                            }
                            ,
                            t.prototype.mod = function(e) {
                                var n = j();
                                return this.abs().divRemTo(e, null, n),
                                this.s < 0 && n.compareTo(t.ZERO) > 0 && e.subTo(n, n),
                                n
                            }
                            ,
                            t.prototype.modPowInt = function(t, e) {
                                var n;
                                return n = t < 256 || e.isEven() ? new _(e) : new R(e),
                                this.exp(t, n)
                            }
                            ,
                            t.prototype.clone = function() {
                                var t = j();
                                return this.copyTo(t),
                                t
                            }
                            ,
                            t.prototype.intValue = function() {
                                if (this.s < 0) {
                                    if (1 == this.t)
                                        return this[0] - this.DV;
                                    if (0 == this.t)
                                        return -1
                                } else {
                                    if (1 == this.t)
                                        return this[0];
                                    if (0 == this.t)
                                        return 0
                                }
                                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                            }
                            ,
                            t.prototype.byteValue = function() {
                                return 0 == this.t ? this.s : this[0] << 24 >> 24
                            }
                            ,
                            t.prototype.shortValue = function() {
                                return 0 == this.t ? this.s : this[0] << 16 >> 16
                            }
                            ,
                            t.prototype.signum = function() {
                                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                            }
                            ,
                            t.prototype.toByteArray = function() {
                                var t = this.t
                                  , e = [];
                                e[0] = this.s;
                                var n, r = this.DB - t * this.DB % 8, i = 0;
                                if (t-- > 0)
                                    for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0; )
                                        r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r,
                                        n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255,
                                        r <= 0 && (r += this.DB,
                                        --t)),
                                        0 != (128 & n) && (n |= -256),
                                        0 == i && (128 & this.s) != (128 & n) && ++i,
                                        (i > 0 || n != this.s) && (e[i++] = n);
                                return e
                            }
                            ,
                            t.prototype.equals = function(t) {
                                return 0 == this.compareTo(t)
                            }
                            ,
                            t.prototype.min = function(t) {
                                return this.compareTo(t) < 0 ? this : t
                            }
                            ,
                            t.prototype.max = function(t) {
                                return this.compareTo(t) > 0 ? this : t
                            }
                            ,
                            t.prototype.and = function(t) {
                                var e = j();
                                return this.bitwiseTo(t, i, e),
                                e
                            }
                            ,
                            t.prototype.or = function(t) {
                                var e = j();
                                return this.bitwiseTo(t, o, e),
                                e
                            }
                            ,
                            t.prototype.xor = function(t) {
                                var e = j();
                                return this.bitwiseTo(t, a, e),
                                e
                            }
                            ,
                            t.prototype.andNot = function(t) {
                                var e = j();
                                return this.bitwiseTo(t, s, e),
                                e
                            }
                            ,
                            t.prototype.not = function() {
                                for (var t = j(), e = 0; e < this.t; ++e)
                                    t[e] = this.DM & ~this[e];
                                return t.t = this.t,
                                t.s = ~this.s,
                                t
                            }
                            ,
                            t.prototype.shiftLeft = function(t) {
                                var e = j();
                                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                                e
                            }
                            ,
                            t.prototype.shiftRight = function(t) {
                                var e = j();
                                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                                e
                            }
                            ,
                            t.prototype.getLowestSetBit = function() {
                                for (var t = 0; t < this.t; ++t)
                                    if (0 != this[t])
                                        return t * this.DB + c(this[t]);
                                return this.s < 0 ? this.t * this.DB : -1
                            }
                            ,
                            t.prototype.bitCount = function() {
                                for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                                    t += u(this[n] ^ e);
                                return t
                            }
                            ,
                            t.prototype.testBit = function(t) {
                                var e = Math.floor(t / this.DB);
                                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                            }
                            ,
                            t.prototype.setBit = function(t) {
                                return this.changeBit(t, o)
                            }
                            ,
                            t.prototype.clearBit = function(t) {
                                return this.changeBit(t, s)
                            }
                            ,
                            t.prototype.flipBit = function(t) {
                                return this.changeBit(t, a)
                            }
                            ,
                            t.prototype.add = function(t) {
                                var e = j();
                                return this.addTo(t, e),
                                e
                            }
                            ,
                            t.prototype.subtract = function(t) {
                                var e = j();
                                return this.subTo(t, e),
                                e
                            }
                            ,
                            t.prototype.multiply = function(t) {
                                var e = j();
                                return this.multiplyTo(t, e),
                                e
                            }
                            ,
                            t.prototype.divide = function(t) {
                                var e = j();
                                return this.divRemTo(t, e, null),
                                e
                            }
                            ,
                            t.prototype.remainder = function(t) {
                                var e = j();
                                return this.divRemTo(t, null, e),
                                e
                            }
                            ,
                            t.prototype.divideAndRemainder = function(t) {
                                var e = j()
                                  , n = j();
                                return this.divRemTo(t, e, n),
                                [e, n]
                            }
                            ,
                            t.prototype.modPow = function(t, e) {
                                var n, r, i = t.bitLength(), o = U(1);
                                if (i <= 0)
                                    return o;
                                n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
                                r = i < 8 ? new _(e) : e.isEven() ? new B(e) : new R(e);
                                var a = []
                                  , s = 3
                                  , c = n - 1
                                  , u = (1 << n) - 1;
                                if (a[1] = r.convert(this),
                                n > 1) {
                                    var l = j();
                                    for (r.sqrTo(a[1], l); s <= u; )
                                        a[s] = j(),
                                        r.mulTo(l, a[s - 2], a[s]),
                                        s += 2
                                }
                                var h, f, p = t.t - 1, d = !0, g = j();
                                for (i = V(t[p]) - 1; p >= 0; ) {
                                    for (i >= c ? h = t[p] >> i - c & u : (h = (t[p] & (1 << i + 1) - 1) << c - i,
                                    p > 0 && (h |= t[p - 1] >> this.DB + i - c)),
                                    s = n; 0 == (1 & h); )
                                        h >>= 1,
                                        --s;
                                    if ((i -= s) < 0 && (i += this.DB,
                                    --p),
                                    d)
                                        a[h].copyTo(o),
                                        d = !1;
                                    else {
                                        for (; s > 1; )
                                            r.sqrTo(o, g),
                                            r.sqrTo(g, o),
                                            s -= 2;
                                        s > 0 ? r.sqrTo(o, g) : (f = o,
                                        o = g,
                                        g = f),
                                        r.mulTo(g, a[h], o)
                                    }
                                    for (; p >= 0 && 0 == (t[p] & 1 << i); )
                                        r.sqrTo(o, g),
                                        f = o,
                                        o = g,
                                        g = f,
                                        --i < 0 && (i = this.DB - 1,
                                        --p)
                                }
                                return r.revert(o)
                            }
                            ,
                            t.prototype.modInverse = function(e) {
                                var n = e.isEven();
                                if (this.isEven() && n || 0 == e.signum())
                                    return t.ZERO;
                                for (var r = e.clone(), i = this.clone(), o = U(1), a = U(0), s = U(0), c = U(1); 0 != r.signum(); ) {
                                    for (; r.isEven(); )
                                        r.rShiftTo(1, r),
                                        n ? (o.isEven() && a.isEven() || (o.addTo(this, o),
                                        a.subTo(e, a)),
                                        o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a),
                                        a.rShiftTo(1, a);
                                    for (; i.isEven(); )
                                        i.rShiftTo(1, i),
                                        n ? (s.isEven() && c.isEven() || (s.addTo(this, s),
                                        c.subTo(e, c)),
                                        s.rShiftTo(1, s)) : c.isEven() || c.subTo(e, c),
                                        c.rShiftTo(1, c);
                                    r.compareTo(i) >= 0 ? (r.subTo(i, r),
                                    n && o.subTo(s, o),
                                    a.subTo(c, a)) : (i.subTo(r, i),
                                    n && s.subTo(o, s),
                                    c.subTo(a, c))
                                }
                                return 0 != i.compareTo(t.ONE) ? t.ZERO : c.compareTo(e) >= 0 ? c.subtract(e) : c.signum() < 0 ? (c.addTo(e, c),
                                c.signum() < 0 ? c.add(e) : c) : c
                            }
                            ,
                            t.prototype.pow = function(t) {
                                return this.exp(t, new D)
                            }
                            ,
                            t.prototype.gcd = function(t) {
                                var e = this.s < 0 ? this.negate() : this.clone()
                                  , n = t.s < 0 ? t.negate() : t.clone();
                                if (e.compareTo(n) < 0) {
                                    var r = e;
                                    e = n,
                                    n = r
                                }
                                var i = e.getLowestSetBit()
                                  , o = n.getLowestSetBit();
                                if (o < 0)
                                    return e;
                                for (i < o && (o = i),
                                o > 0 && (e.rShiftTo(o, e),
                                n.rShiftTo(o, n)); e.signum() > 0; )
                                    (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
                                    (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
                                    e.compareTo(n) >= 0 ? (e.subTo(n, e),
                                    e.rShiftTo(1, e)) : (n.subTo(e, n),
                                    n.rShiftTo(1, n));
                                return o > 0 && n.lShiftTo(o, n),
                                n
                            }
                            ,
                            t.prototype.isProbablePrime = function(t) {
                                var e, n = this.abs();
                                if (1 == n.t && n[0] <= T[T.length - 1]) {
                                    for (e = 0; e < T.length; ++e)
                                        if (n[0] == T[e])
                                            return !0;
                                    return !1
                                }
                                if (n.isEven())
                                    return !1;
                                for (e = 1; e < T.length; ) {
                                    for (var r = T[e], i = e + 1; i < T.length && r < C; )
                                        r *= T[i++];
                                    for (r = n.modInt(r); e < i; )
                                        if (r % T[e++] == 0)
                                            return !1
                                }
                                return n.millerRabin(t)
                            }
                            ,
                            t.prototype.copyTo = function(t) {
                                for (var e = this.t - 1; e >= 0; --e)
                                    t[e] = this[e];
                                t.t = this.t,
                                t.s = this.s
                            }
                            ,
                            t.prototype.fromInt = function(t) {
                                this.t = 1,
                                this.s = t < 0 ? -1 : 0,
                                t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                            }
                            ,
                            t.prototype.fromString = function(e, n) {
                                var r;
                                if (16 == n)
                                    r = 4;
                                else if (8 == n)
                                    r = 3;
                                else if (256 == n)
                                    r = 8;
                                else if (2 == n)
                                    r = 1;
                                else if (32 == n)
                                    r = 5;
                                else {
                                    if (4 != n)
                                        return void this.fromRadix(e, n);
                                    r = 2
                                }
                                this.t = 0,
                                this.s = 0;
                                for (var i = e.length, o = !1, a = 0; --i >= 0; ) {
                                    var s = 8 == r ? 255 & +e[i] : z(e, i);
                                    s < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1,
                                    0 == a ? this[this.t++] = s : a + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - a) - 1) << a,
                                    this[this.t++] = s >> this.DB - a) : this[this.t - 1] |= s << a,
                                    (a += r) >= this.DB && (a -= this.DB))
                                }
                                8 == r && 0 != (128 & +e[0]) && (this.s = -1,
                                a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
                                this.clamp(),
                                o && t.ZERO.subTo(this, this)
                            }
                            ,
                            t.prototype.clamp = function() {
                                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                                    --this.t
                            }
                            ,
                            t.prototype.dlShiftTo = function(t, e) {
                                var n;
                                for (n = this.t - 1; n >= 0; --n)
                                    e[n + t] = this[n];
                                for (n = t - 1; n >= 0; --n)
                                    e[n] = 0;
                                e.t = this.t + t,
                                e.s = this.s
                            }
                            ,
                            t.prototype.drShiftTo = function(t, e) {
                                for (var n = t; n < this.t; ++n)
                                    e[n - t] = this[n];
                                e.t = Math.max(this.t - t, 0),
                                e.s = this.s
                            }
                            ,
                            t.prototype.lShiftTo = function(t, e) {
                                for (var n = t % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(t / this.DB), a = this.s << n & this.DM, s = this.t - 1; s >= 0; --s)
                                    e[s + o + 1] = this[s] >> r | a,
                                    a = (this[s] & i) << n;
                                for (s = o - 1; s >= 0; --s)
                                    e[s] = 0;
                                e[o] = a,
                                e.t = this.t + o + 1,
                                e.s = this.s,
                                e.clamp()
                            }
                            ,
                            t.prototype.rShiftTo = function(t, e) {
                                e.s = this.s;
                                var n = Math.floor(t / this.DB);
                                if (n >= this.t)
                                    e.t = 0;
                                else {
                                    var r = t % this.DB
                                      , i = this.DB - r
                                      , o = (1 << r) - 1;
                                    e[0] = this[n] >> r;
                                    for (var a = n + 1; a < this.t; ++a)
                                        e[a - n - 1] |= (this[a] & o) << i,
                                        e[a - n] = this[a] >> r;
                                    r > 0 && (e[this.t - n - 1] |= (this.s & o) << i),
                                    e.t = this.t - n,
                                    e.clamp()
                                }
                            }
                            ,
                            t.prototype.subTo = function(t, e) {
                                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i; )
                                    r += this[n] - t[n],
                                    e[n++] = r & this.DM,
                                    r >>= this.DB;
                                if (t.t < this.t) {
                                    for (r -= t.s; n < this.t; )
                                        r += this[n],
                                        e[n++] = r & this.DM,
                                        r >>= this.DB;
                                    r += this.s
                                } else {
                                    for (r += this.s; n < t.t; )
                                        r -= t[n],
                                        e[n++] = r & this.DM,
                                        r >>= this.DB;
                                    r -= t.s
                                }
                                e.s = r < 0 ? -1 : 0,
                                r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r),
                                e.t = n,
                                e.clamp()
                            }
                            ,
                            t.prototype.multiplyTo = function(e, n) {
                                var r = this.abs()
                                  , i = e.abs()
                                  , o = r.t;
                                for (n.t = o + i.t; --o >= 0; )
                                    n[o] = 0;
                                for (o = 0; o < i.t; ++o)
                                    n[o + r.t] = r.am(0, i[o], n, o, 0, r.t);
                                n.s = 0,
                                n.clamp(),
                                this.s != e.s && t.ZERO.subTo(n, n)
                            }
                            ,
                            t.prototype.squareTo = function(t) {
                                for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0; )
                                    t[n] = 0;
                                for (n = 0; n < e.t - 1; ++n) {
                                    var r = e.am(n, e[n], t, 2 * n, 0, 1);
                                    (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                                    t[n + e.t + 1] = 1)
                                }
                                t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                                t.s = 0,
                                t.clamp()
                            }
                            ,
                            t.prototype.divRemTo = function(e, n, r) {
                                var i = e.abs();
                                if (!(i.t <= 0)) {
                                    var o = this.abs();
                                    if (o.t < i.t)
                                        return null != n && n.fromInt(0),
                                        void (null != r && this.copyTo(r));
                                    null == r && (r = j());
                                    var a = j()
                                      , s = this.s
                                      , c = e.s
                                      , u = this.DB - V(i[i.t - 1]);
                                    u > 0 ? (i.lShiftTo(u, a),
                                    o.lShiftTo(u, r)) : (i.copyTo(a),
                                    o.copyTo(r));
                                    var l = a.t
                                      , h = a[l - 1];
                                    if (0 != h) {
                                        var f = h * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0)
                                          , p = this.FV / f
                                          , d = (1 << this.F1) / f
                                          , g = 1 << this.F2
                                          , m = r.t
                                          , v = m - l
                                          , y = null == n ? j() : n;
                                        for (a.dlShiftTo(v, y),
                                        r.compareTo(y) >= 0 && (r[r.t++] = 1,
                                        r.subTo(y, r)),
                                        t.ONE.dlShiftTo(l, y),
                                        y.subTo(a, a); a.t < l; )
                                            a[a.t++] = 0;
                                        for (; --v >= 0; ) {
                                            var b = r[--m] == h ? this.DM : Math.floor(r[m] * p + (r[m - 1] + g) * d);
                                            if ((r[m] += a.am(0, b, r, v, 0, l)) < b)
                                                for (a.dlShiftTo(v, y),
                                                r.subTo(y, r); r[m] < --b; )
                                                    r.subTo(y, r)
                                        }
                                        null != n && (r.drShiftTo(l, n),
                                        s != c && t.ZERO.subTo(n, n)),
                                        r.t = l,
                                        r.clamp(),
                                        u > 0 && r.rShiftTo(u, r),
                                        s < 0 && t.ZERO.subTo(r, r)
                                    }
                                }
                            }
                            ,
                            t.prototype.invDigit = function() {
                                if (this.t < 1)
                                    return 0;
                                var t = this[0];
                                if (0 == (1 & t))
                                    return 0;
                                var e = 3 & t;
                                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                            }
                            ,
                            t.prototype.isEven = function() {
                                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                            }
                            ,
                            t.prototype.exp = function(e, n) {
                                if (e > 4294967295 || e < 1)
                                    return t.ONE;
                                var r = j()
                                  , i = j()
                                  , o = n.convert(this)
                                  , a = V(e) - 1;
                                for (o.copyTo(r); --a >= 0; )
                                    if (n.sqrTo(r, i),
                                    (e & 1 << a) > 0)
                                        n.mulTo(i, o, r);
                                    else {
                                        var s = r;
                                        r = i,
                                        i = s
                                    }
                                return n.revert(r)
                            }
                            ,
                            t.prototype.chunkSize = function(t) {
                                return Math.floor(Math.LN2 * this.DB / Math.log(t))
                            }
                            ,
                            t.prototype.toRadix = function(t) {
                                if (null == t && (t = 10),
                                0 == this.signum() || t < 2 || t > 36)
                                    return "0";
                                var e = this.chunkSize(t)
                                  , n = Math.pow(t, e)
                                  , r = U(n)
                                  , i = j()
                                  , o = j()
                                  , a = "";
                                for (this.divRemTo(r, i, o); i.signum() > 0; )
                                    a = (n + o.intValue()).toString(t).substr(1) + a,
                                    i.divRemTo(r, i, o);
                                return o.intValue().toString(t) + a
                            }
                            ,
                            t.prototype.fromRadix = function(e, n) {
                                this.fromInt(0),
                                null == n && (n = 10);
                                for (var r = this.chunkSize(n), i = Math.pow(n, r), o = !1, a = 0, s = 0, c = 0; c < e.length; ++c) {
                                    var u = z(e, c);
                                    u < 0 ? "-" == e.charAt(c) && 0 == this.signum() && (o = !0) : (s = n * s + u,
                                    ++a >= r && (this.dMultiply(i),
                                    this.dAddOffset(s, 0),
                                    a = 0,
                                    s = 0))
                                }
                                a > 0 && (this.dMultiply(Math.pow(n, a)),
                                this.dAddOffset(s, 0)),
                                o && t.ZERO.subTo(this, this)
                            }
                            ,
                            t.prototype.fromNumber = function(e, n, r) {
                                if ("number" == typeof n)
                                    if (e < 2)
                                        this.fromInt(1);
                                    else
                                        for (this.fromNumber(e, r),
                                        this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), o, this),
                                        this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n); )
                                            this.dAddOffset(2, 0),
                                            this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
                                else {
                                    var i = []
                                      , a = 7 & e;
                                    i.length = 1 + (e >> 3),
                                    n.nextBytes(i),
                                    a > 0 ? i[0] &= (1 << a) - 1 : i[0] = 0,
                                    this.fromString(i, 256)
                                }
                            }
                            ,
                            t.prototype.bitwiseTo = function(t, e, n) {
                                var r, i, o = Math.min(t.t, this.t);
                                for (r = 0; r < o; ++r)
                                    n[r] = e(this[r], t[r]);
                                if (t.t < this.t) {
                                    for (i = t.s & this.DM,
                                    r = o; r < this.t; ++r)
                                        n[r] = e(this[r], i);
                                    n.t = this.t
                                } else {
                                    for (i = this.s & this.DM,
                                    r = o; r < t.t; ++r)
                                        n[r] = e(i, t[r]);
                                    n.t = t.t
                                }
                                n.s = e(this.s, t.s),
                                n.clamp()
                            }
                            ,
                            t.prototype.changeBit = function(e, n) {
                                var r = t.ONE.shiftLeft(e);
                                return this.bitwiseTo(r, n, r),
                                r
                            }
                            ,
                            t.prototype.addTo = function(t, e) {
                                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i; )
                                    r += this[n] + t[n],
                                    e[n++] = r & this.DM,
                                    r >>= this.DB;
                                if (t.t < this.t) {
                                    for (r += t.s; n < this.t; )
                                        r += this[n],
                                        e[n++] = r & this.DM,
                                        r >>= this.DB;
                                    r += this.s
                                } else {
                                    for (r += this.s; n < t.t; )
                                        r += t[n],
                                        e[n++] = r & this.DM,
                                        r >>= this.DB;
                                    r += t.s
                                }
                                e.s = r < 0 ? -1 : 0,
                                r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r),
                                e.t = n,
                                e.clamp()
                            }
                            ,
                            t.prototype.dMultiply = function(t) {
                                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                                ++this.t,
                                this.clamp()
                            }
                            ,
                            t.prototype.dAddOffset = function(t, e) {
                                if (0 != t) {
                                    for (; this.t <= e; )
                                        this[this.t++] = 0;
                                    for (this[e] += t; this[e] >= this.DV; )
                                        this[e] -= this.DV,
                                        ++e >= this.t && (this[this.t++] = 0),
                                        ++this[e]
                                }
                            }
                            ,
                            t.prototype.multiplyLowerTo = function(t, e, n) {
                                var r = Math.min(this.t + t.t, e);
                                for (n.s = 0,
                                n.t = r; r > 0; )
                                    n[--r] = 0;
                                for (var i = n.t - this.t; r < i; ++r)
                                    n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                                for (i = Math.min(t.t, e); r < i; ++r)
                                    this.am(0, t[r], n, r, 0, e - r);
                                n.clamp()
                            }
                            ,
                            t.prototype.multiplyUpperTo = function(t, e, n) {
                                --e;
                                var r = n.t = this.t + t.t - e;
                                for (n.s = 0; --r >= 0; )
                                    n[r] = 0;
                                for (r = Math.max(e - this.t, 0); r < t.t; ++r)
                                    n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
                                n.clamp(),
                                n.drShiftTo(1, n)
                            }
                            ,
                            t.prototype.modInt = function(t) {
                                if (t <= 0)
                                    return 0;
                                var e = this.DV % t
                                  , n = this.s < 0 ? t - 1 : 0;
                                if (this.t > 0)
                                    if (0 == e)
                                        n = this[0] % t;
                                    else
                                        for (var r = this.t - 1; r >= 0; --r)
                                            n = (e * n + this[r]) % t;
                                return n
                            }
                            ,
                            t.prototype.millerRabin = function(e) {
                                var n = this.subtract(t.ONE)
                                  , r = n.getLowestSetBit();
                                if (r <= 0)
                                    return !1;
                                var i = n.shiftRight(r);
                                (e = e + 1 >> 1) > T.length && (e = T.length);
                                for (var o = j(), a = 0; a < e; ++a) {
                                    o.fromInt(T[Math.floor(Math.random() * T.length)]);
                                    var s = o.modPow(i, this);
                                    if (0 != s.compareTo(t.ONE) && 0 != s.compareTo(n)) {
                                        for (var c = 1; c++ < r && 0 != s.compareTo(n); )
                                            if (0 == (s = s.modPowInt(2, this)).compareTo(t.ONE))
                                                return !1;
                                        if (0 != s.compareTo(n))
                                            return !1
                                    }
                                }
                                return !0
                            }
                            ,
                            t.prototype.square = function() {
                                var t = j();
                                return this.squareTo(t),
                                t
                            }
                            ,
                            t.prototype.gcda = function(t, e) {
                                var n = this.s < 0 ? this.negate() : this.clone()
                                  , r = t.s < 0 ? t.negate() : t.clone();
                                if (n.compareTo(r) < 0) {
                                    var i = n;
                                    n = r,
                                    r = i
                                }
                                var o = n.getLowestSetBit()
                                  , a = r.getLowestSetBit();
                                if (a < 0)
                                    e(n);
                                else {
                                    o < a && (a = o),
                                    a > 0 && (n.rShiftTo(a, n),
                                    r.rShiftTo(a, r));
                                    var s = function() {
                                        (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                                        (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r),
                                        n.compareTo(r) >= 0 ? (n.subTo(r, n),
                                        n.rShiftTo(1, n)) : (r.subTo(n, r),
                                        r.rShiftTo(1, r)),
                                        n.signum() > 0 ? setTimeout(s, 0) : (a > 0 && r.lShiftTo(a, r),
                                        setTimeout((function() {
                                            e(r)
                                        }
                                        ), 0))
                                    };
                                    setTimeout(s, 10)
                                }
                            }
                            ,
                            t.prototype.fromNumberAsync = function(e, n, r, i) {
                                if ("number" == typeof n)
                                    if (e < 2)
                                        this.fromInt(1);
                                    else {
                                        this.fromNumber(e, r),
                                        this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), o, this),
                                        this.isEven() && this.dAddOffset(1, 0);
                                        var a = this
                                          , s = function() {
                                            a.dAddOffset(2, 0),
                                            a.bitLength() > e && a.subTo(t.ONE.shiftLeft(e - 1), a),
                                            a.isProbablePrime(n) ? setTimeout((function() {
                                                i()
                                            }
                                            ), 0) : setTimeout(s, 0)
                                        };
                                        setTimeout(s, 0)
                                    }
                                else {
                                    var c = []
                                      , u = 7 & e;
                                    c.length = 1 + (e >> 3),
                                    n.nextBytes(c),
                                    u > 0 ? c[0] &= (1 << u) - 1 : c[0] = 0,
                                    this.fromString(c, 256)
                                }
                            }
                            ,
                            t
                        }(), D = function() {
                            function t() {}
                            return t.prototype.convert = function(t) {
                                return t
                            }
                            ,
                            t.prototype.revert = function(t) {
                                return t
                            }
                            ,
                            t.prototype.mulTo = function(t, e, n) {
                                t.multiplyTo(e, n)
                            }
                            ,
                            t.prototype.sqrTo = function(t, e) {
                                t.squareTo(e)
                            }
                            ,
                            t
                        }(), _ = function() {
                            function t(t) {
                                this.m = t
                            }
                            return t.prototype.convert = function(t) {
                                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                            }
                            ,
                            t.prototype.revert = function(t) {
                                return t
                            }
                            ,
                            t.prototype.reduce = function(t) {
                                t.divRemTo(this.m, null, t)
                            }
                            ,
                            t.prototype.mulTo = function(t, e, n) {
                                t.multiplyTo(e, n),
                                this.reduce(n)
                            }
                            ,
                            t.prototype.sqrTo = function(t, e) {
                                t.squareTo(e),
                                this.reduce(e)
                            }
                            ,
                            t
                        }(), R = function() {
                            function t(t) {
                                this.m = t,
                                this.mp = t.invDigit(),
                                this.mpl = 32767 & this.mp,
                                this.mph = this.mp >> 15,
                                this.um = (1 << t.DB - 15) - 1,
                                this.mt2 = 2 * t.t
                            }
                            return t.prototype.convert = function(t) {
                                var e = j();
                                return t.abs().dlShiftTo(this.m.t, e),
                                e.divRemTo(this.m, null, e),
                                t.s < 0 && e.compareTo(O.ZERO) > 0 && this.m.subTo(e, e),
                                e
                            }
                            ,
                            t.prototype.revert = function(t) {
                                var e = j();
                                return t.copyTo(e),
                                this.reduce(e),
                                e
                            }
                            ,
                            t.prototype.reduce = function(t) {
                                for (; t.t <= this.mt2; )
                                    t[t.t++] = 0;
                                for (var e = 0; e < this.m.t; ++e) {
                                    var n = 32767 & t[e]
                                      , r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                                    for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV; )
                                        t[n] -= t.DV,
                                        t[++n]++
                                }
                                t.clamp(),
                                t.drShiftTo(this.m.t, t),
                                t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                            }
                            ,
                            t.prototype.mulTo = function(t, e, n) {
                                t.multiplyTo(e, n),
                                this.reduce(n)
                            }
                            ,
                            t.prototype.sqrTo = function(t, e) {
                                t.squareTo(e),
                                this.reduce(e)
                            }
                            ,
                            t
                        }(), B = function() {
                            function t(t) {
                                this.m = t,
                                this.r2 = j(),
                                this.q3 = j(),
                                O.ONE.dlShiftTo(2 * t.t, this.r2),
                                this.mu = this.r2.divide(t)
                            }
                            return t.prototype.convert = function(t) {
                                if (t.s < 0 || t.t > 2 * this.m.t)
                                    return t.mod(this.m);
                                if (t.compareTo(this.m) < 0)
                                    return t;
                                var e = j();
                                return t.copyTo(e),
                                this.reduce(e),
                                e
                            }
                            ,
                            t.prototype.revert = function(t) {
                                return t
                            }
                            ,
                            t.prototype.reduce = function(t) {
                                for (t.drShiftTo(this.m.t - 1, this.r2),
                                t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                                t.clamp()),
                                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                                    t.dAddOffset(1, this.m.t + 1);
                                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                                    t.subTo(this.m, t)
                            }
                            ,
                            t.prototype.mulTo = function(t, e, n) {
                                t.multiplyTo(e, n),
                                this.reduce(n)
                            }
                            ,
                            t.prototype.sqrTo = function(t, e) {
                                t.squareTo(e),
                                this.reduce(e)
                            }
                            ,
                            t
                        }();
                        function j() {
                            return new O(null)
                        }
                        function I(t, e) {
                            return new O(t,e)
                        }
                        var L = void 0 !== S;
                        L && "Microsoft Internet Explorer" == S.appName ? (O.prototype.am = function(t, e, n, r, i, o) {
                            for (var a = 32767 & e, s = e >> 15; --o >= 0; ) {
                                var c = 32767 & this[t]
                                  , u = this[t++] >> 15
                                  , l = s * c + u * a;
                                i = ((c = a * c + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + s * u + (i >>> 30),
                                n[r++] = 1073741823 & c
                            }
                            return i
                        }
                        ,
                        w = 30) : L && "Netscape" != S.appName ? (O.prototype.am = function(t, e, n, r, i, o) {
                            for (; --o >= 0; ) {
                                var a = e * this[t++] + n[r] + i;
                                i = Math.floor(a / 67108864),
                                n[r++] = 67108863 & a
                            }
                            return i
                        }
                        ,
                        w = 26) : (O.prototype.am = function(t, e, n, r, i, o) {
                            for (var a = 16383 & e, s = e >> 14; --o >= 0; ) {
                                var c = 16383 & this[t]
                                  , u = this[t++] >> 14
                                  , l = s * c + u * a;
                                i = ((c = a * c + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + s * u,
                                n[r++] = 268435455 & c
                            }
                            return i
                        }
                        ,
                        w = 28),
                        O.prototype.DB = w,
                        O.prototype.DM = (1 << w) - 1,
                        O.prototype.DV = 1 << w,
                        O.prototype.FV = Math.pow(2, 52),
                        O.prototype.F1 = 52 - w,
                        O.prototype.F2 = 2 * w - 52;
                        var M, N, P = [];
                        for (M = "0".charCodeAt(0),
                        N = 0; N <= 9; ++N)
                            P[M++] = N;
                        for (M = "a".charCodeAt(0),
                        N = 10; N < 36; ++N)
                            P[M++] = N;
                        for (M = "A".charCodeAt(0),
                        N = 10; N < 36; ++N)
                            P[M++] = N;
                        function z(t, e) {
                            var n = P[t.charCodeAt(e)];
                            return null == n ? -1 : n
                        }
                        function U(t) {
                            var e = j();
                            return e.fromInt(t),
                            e
                        }
                        function V(t) {
                            var e, n = 1;
                            return 0 != (e = t >>> 16) && (t = e,
                            n += 16),
                            0 != (e = t >> 8) && (t = e,
                            n += 8),
                            0 != (e = t >> 4) && (t = e,
                            n += 4),
                            0 != (e = t >> 2) && (t = e,
                            n += 2),
                            0 != (e = t >> 1) && (t = e,
                            n += 1),
                            n
                        }
                        O.ZERO = U(0),
                        O.ONE = U(1);
                        var F, H, q = function() {
                            function t() {
                                this.i = 0,
                                this.j = 0,
                                this.S = []
                            }
                            return t.prototype.init = function(t) {
                                var e, n, r;
                                for (e = 0; e < 256; ++e)
                                    this.S[e] = e;
                                for (n = 0,
                                e = 0; e < 256; ++e)
                                    n = n + this.S[e] + t[e % t.length] & 255,
                                    r = this.S[e],
                                    this.S[e] = this.S[n],
                                    this.S[n] = r;
                                this.i = 0,
                                this.j = 0
                            }
                            ,
                            t.prototype.next = function() {
                                var t;
                                return this.i = this.i + 1 & 255,
                                this.j = this.j + this.S[this.i] & 255,
                                t = this.S[this.i],
                                this.S[this.i] = this.S[this.j],
                                this.S[this.j] = t,
                                this.S[t + this.S[this.i] & 255]
                            }
                            ,
                            t
                        }(), G = {
                            ASN1: null,
                            Base64: null,
                            Hex: null,
                            crypto: null,
                            href: null
                        }, K = null;
                        if (null == K) {
                            K = [],
                            H = 0;
                            var W = void 0;
                            if (G.crypto && G.crypto.getRandomValues) {
                                var Q = new Uint32Array(256);
                                for (G.crypto.getRandomValues(Q),
                                W = 0; W < Q.length; ++W)
                                    K[H++] = 255 & Q[W]
                            }
                            var Y = 0
                              , J = function(t) {
                                if ((Y = Y || 0) >= 256 || H >= 256)
                                    G.removeEventListener ? G.removeEventListener("mousemove", J, !1) : G.detachEvent && G.detachEvent("onmousemove", J);
                                else
                                    try {
                                        var e = t.x + t.y;
                                        K[H++] = 255 & e,
                                        Y += 1
                                    } catch (t) {}
                            };
                            G.addEventListener ? G.addEventListener("mousemove", J, !1) : G.attachEvent && G.attachEvent("onmousemove", J)
                        }
                        function X() {
                            if (null == F) {
                                for (F = new q; H < 256; ) {
                                    var t = Math.floor(65536 * Math.random());
                                    K[H++] = 255 & t
                                }
                                for (F.init(K),
                                H = 0; H < K.length; ++H)
                                    K[H] = 0;
                                H = 0
                            }
                            return F.next()
                        }
                        var Z = function() {
                            function t() {}
                            return t.prototype.nextBytes = function(t) {
                                for (var e = 0; e < t.length; ++e)
                                    t[e] = X()
                            }
                            ,
                            t
                        }()
                          , $ = function() {
                            function t() {
                                this.n = null,
                                this.e = 0,
                                this.d = null,
                                this.p = null,
                                this.q = null,
                                this.dmp1 = null,
                                this.dmq1 = null,
                                this.coeff = null
                            }
                            return t.prototype.doPublic = function(t) {
                                return t.modPowInt(this.e, this.n)
                            }
                            ,
                            t.prototype.doPrivate = function(t) {
                                if (null == this.p || null == this.q)
                                    return t.modPow(this.d, this.n);
                                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0; )
                                    e = e.add(this.p);
                                return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
                            }
                            ,
                            t.prototype.setPublic = function(t, e) {
                                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = I(t, 16),
                                this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                            }
                            ,
                            t.prototype.encrypt = function(t) {
                                var e = function(t, e) {
                                    if (e < t.length + 11)
                                        return console.error("Message too long for RSA"),
                                        null;
                                    for (var n = [], r = t.length - 1; r >= 0 && e > 0; ) {
                                        var i = t.charCodeAt(r--);
                                        i < 128 ? n[--e] = i : i > 127 && i < 2048 ? (n[--e] = 63 & i | 128,
                                        n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128,
                                        n[--e] = i >> 6 & 63 | 128,
                                        n[--e] = i >> 12 | 224)
                                    }
                                    n[--e] = 0;
                                    for (var o = new Z, a = []; e > 2; ) {
                                        for (a[0] = 0; 0 == a[0]; )
                                            o.nextBytes(a);
                                        n[--e] = a[0]
                                    }
                                    return n[--e] = 2,
                                    n[--e] = 0,
                                    new O(n)
                                }(t, this.n.bitLength() + 7 >> 3);
                                if (null == e)
                                    return null;
                                var n = this.doPublic(e);
                                if (null == n)
                                    return null;
                                var r = n.toString(16);
                                return 0 == (1 & r.length) ? r : "0" + r
                            }
                            ,
                            t.prototype.setPrivate = function(t, e, n) {
                                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = I(t, 16),
                                this.e = parseInt(e, 16),
                                this.d = I(n, 16)) : console.error("Invalid RSA private key")
                            }
                            ,
                            t.prototype.setPrivateEx = function(t, e, n, r, i, o, a, s) {
                                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = I(t, 16),
                                this.e = parseInt(e, 16),
                                this.d = I(n, 16),
                                this.p = I(r, 16),
                                this.q = I(i, 16),
                                this.dmp1 = I(o, 16),
                                this.dmq1 = I(a, 16),
                                this.coeff = I(s, 16)) : console.error("Invalid RSA private key")
                            }
                            ,
                            t.prototype.generate = function(t, e) {
                                var n = new Z
                                  , r = t >> 1;
                                this.e = parseInt(e, 16);
                                for (var i = new O(e,16); ; ) {
                                    for (; this.p = new O(t - r,1,n),
                                    0 != this.p.subtract(O.ONE).gcd(i).compareTo(O.ONE) || !this.p.isProbablePrime(10); )
                                        ;
                                    for (; this.q = new O(r,1,n),
                                    0 != this.q.subtract(O.ONE).gcd(i).compareTo(O.ONE) || !this.q.isProbablePrime(10); )
                                        ;
                                    if (this.p.compareTo(this.q) <= 0) {
                                        var o = this.p;
                                        this.p = this.q,
                                        this.q = o
                                    }
                                    var a = this.p.subtract(O.ONE)
                                      , s = this.q.subtract(O.ONE)
                                      , c = a.multiply(s);
                                    if (0 == c.gcd(i).compareTo(O.ONE)) {
                                        this.n = this.p.multiply(this.q),
                                        this.d = i.modInverse(c),
                                        this.dmp1 = this.d.mod(a),
                                        this.dmq1 = this.d.mod(s),
                                        this.coeff = this.q.modInverse(this.p);
                                        break
                                    }
                                }
                            }
                            ,
                            t.prototype.decrypt = function(t) {
                                var e = I(t, 16)
                                  , n = this.doPrivate(e);
                                return null == n ? null : function(t, e) {
                                    for (var n = t.toByteArray(), r = 0; r < n.length && 0 == n[r]; )
                                        ++r;
                                    if (n.length - r != e - 1 || 2 != n[r])
                                        return null;
                                    for (++r; 0 != n[r]; )
                                        if (++r >= n.length)
                                            return null;
                                    for (var i = ""; ++r < n.length; ) {
                                        var o = 255 & n[r];
                                        o < 128 ? i += String.fromCharCode(o) : o > 191 && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]),
                                        ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]),
                                        r += 2)
                                    }
                                    return i
                                }(n, this.n.bitLength() + 7 >> 3)
                            }
                            ,
                            t.prototype.generateAsync = function(t, e, n) {
                                var r = new Z
                                  , i = t >> 1;
                                this.e = parseInt(e, 16);
                                var o = new O(e,16)
                                  , a = this
                                  , s = function() {
                                    var e = function() {
                                        if (a.p.compareTo(a.q) <= 0) {
                                            var t = a.p;
                                            a.p = a.q,
                                            a.q = t
                                        }
                                        var e = a.p.subtract(O.ONE)
                                          , r = a.q.subtract(O.ONE)
                                          , i = e.multiply(r);
                                        0 == i.gcd(o).compareTo(O.ONE) ? (a.n = a.p.multiply(a.q),
                                        a.d = o.modInverse(i),
                                        a.dmp1 = a.d.mod(e),
                                        a.dmq1 = a.d.mod(r),
                                        a.coeff = a.q.modInverse(a.p),
                                        setTimeout((function() {
                                            n()
                                        }
                                        ), 0)) : setTimeout(s, 0)
                                    }
                                      , c = function() {
                                        a.q = j(),
                                        a.q.fromNumberAsync(i, 1, r, (function() {
                                            a.q.subtract(O.ONE).gcda(o, (function(t) {
                                                0 == t.compareTo(O.ONE) && a.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(c, 0)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                      , u = function() {
                                        a.p = j(),
                                        a.p.fromNumberAsync(t - i, 1, r, (function() {
                                            a.p.subtract(O.ONE).gcda(o, (function(t) {
                                                0 == t.compareTo(O.ONE) && a.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(u, 0)
                                            }
                                            ))
                                        }
                                        ))
                                    };
                                    setTimeout(u, 0)
                                };
                                setTimeout(s, 0)
                            }
                            ,
                            t.prototype.sign = function(t, e, n) {
                                var r = function(t, e) {
                                    if (e < t.length + 22)
                                        return console.error("Message too long for RSA"),
                                        null;
                                    for (var n = e - t.length - 6, r = "", i = 0; i < n; i += 2)
                                        r += "ff";
                                    return I("0001" + r + "00" + t, 16)
                                }((tt[n] || "") + e(t).toString(), this.n.bitLength() / 4);
                                if (null == r)
                                    return null;
                                var i = this.doPrivate(r);
                                if (null == i)
                                    return null;
                                var o = i.toString(16);
                                return 0 == (1 & o.length) ? o : "0" + o
                            }
                            ,
                            t.prototype.verify = function(t, e, n) {
                                var r = I(e, 16)
                                  , i = this.doPublic(r);
                                return null == i ? null : function(t) {
                                    for (var e in tt)
                                        if (tt.hasOwnProperty(e)) {
                                            var n = tt[e]
                                              , r = n.length;
                                            if (t.substr(0, r) == n)
                                                return t.substr(r)
                                        }
                                    return t
                                }(i.toString(16).replace(/^1f+00/, "")) == n(t).toString()
                            }
                            ,
                            t
                        }()
                          , tt = {
                            md2: "3020300c06082a864886f70d020205000410",
                            md5: "3020300c06082a864886f70d020505000410",
                            sha1: "3021300906052b0e03021a05000414",
                            sha224: "302d300d06096086480165030402040500041c",
                            sha256: "3031300d060960864801650304020105000420",
                            sha384: "3041300d060960864801650304020205000430",
                            sha512: "3051300d060960864801650304020305000440",
                            ripemd160: "3021300906052b2403020105000414"
                        }
                          , et = {};
                        et.lang = {
                            extend: function(t, e, n) {
                                if (!e || !t)
                                    throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                                var r = function() {};
                                if (r.prototype = e.prototype,
                                t.prototype = new r,
                                t.prototype.constructor = t,
                                t.superclass = e.prototype,
                                e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e),
                                n) {
                                    var i;
                                    for (i in n)
                                        t.prototype[i] = n[i];
                                    var o = function() {}
                                      , a = ["toString", "valueOf"];
                                    try {
                                        /MSIE/.test(navigator.userAgent) && (o = function(t, e) {
                                            for (i = 0; i < a.length; i += 1) {
                                                var n = a[i]
                                                  , r = e[n];
                                                "function" == typeof r && r != Object.prototype[n] && (t[n] = r)
                                            }
                                        }
                                        )
                                    } catch (t) {}
                                    o(t.prototype, n)
                                }
                            }
                        };
                        var nt = {};
                        void 0 !== nt.asn1 && nt.asn1 || (nt.asn1 = {}),
                        nt.asn1.ASN1Util = new function() {
                            this.integerToByteHex = function(t) {
                                var e = t.toString(16);
                                return e.length % 2 == 1 && (e = "0" + e),
                                e
                            }
                            ,
                            this.bigIntToMinTwosComplementsHex = function(t) {
                                var e = t.toString(16);
                                if ("-" != e.substr(0, 1))
                                    e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                                else {
                                    var n = e.substr(1).length;
                                    n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                                    for (var r = "", i = 0; i < n; i++)
                                        r += "f";
                                    e = new O(r,16).xor(t).add(O.ONE).toString(16).replace(/^-/, "")
                                }
                                return e
                            }
                            ,
                            this.getPEMStringFromHex = function(t, e) {
                                return hextopem(t, e)
                            }
                            ,
                            this.newObject = function(t) {
                                var e = nt.asn1
                                  , n = e.DERBoolean
                                  , r = e.DERInteger
                                  , i = e.DERBitString
                                  , o = e.DEROctetString
                                  , a = e.DERNull
                                  , s = e.DERObjectIdentifier
                                  , c = e.DEREnumerated
                                  , u = e.DERUTF8String
                                  , l = e.DERNumericString
                                  , h = e.DERPrintableString
                                  , f = e.DERTeletexString
                                  , p = e.DERIA5String
                                  , d = e.DERUTCTime
                                  , g = e.DERGeneralizedTime
                                  , m = e.DERSequence
                                  , v = e.DERSet
                                  , y = e.DERTaggedObject
                                  , b = e.ASN1Util.newObject
                                  , A = Object.keys(t);
                                if (1 != A.length)
                                    throw "key of param shall be only one.";
                                var w = A[0];
                                if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + w + ":"))
                                    throw "undefined key: " + w;
                                if ("bool" == w)
                                    return new n(t[w]);
                                if ("int" == w)
                                    return new r(t[w]);
                                if ("bitstr" == w)
                                    return new i(t[w]);
                                if ("octstr" == w)
                                    return new o(t[w]);
                                if ("null" == w)
                                    return new a(t[w]);
                                if ("oid" == w)
                                    return new s(t[w]);
                                if ("enum" == w)
                                    return new c(t[w]);
                                if ("utf8str" == w)
                                    return new u(t[w]);
                                if ("numstr" == w)
                                    return new l(t[w]);
                                if ("prnstr" == w)
                                    return new h(t[w]);
                                if ("telstr" == w)
                                    return new f(t[w]);
                                if ("ia5str" == w)
                                    return new p(t[w]);
                                if ("utctime" == w)
                                    return new d(t[w]);
                                if ("gentime" == w)
                                    return new g(t[w]);
                                if ("seq" == w) {
                                    for (var E = t[w], x = [], k = 0; k < E.length; k++) {
                                        var S = b(E[k]);
                                        x.push(S)
                                    }
                                    return new m({
                                        array: x
                                    })
                                }
                                if ("set" == w) {
                                    for (E = t[w],
                                    x = [],
                                    k = 0; k < E.length; k++)
                                        S = b(E[k]),
                                        x.push(S);
                                    return new v({
                                        array: x
                                    })
                                }
                                if ("tag" == w) {
                                    var T = t[w];
                                    if ("[object Array]" === Object.prototype.toString.call(T) && 3 == T.length) {
                                        var C = b(T[2]);
                                        return new y({
                                            tag: T[0],
                                            explicit: T[1],
                                            obj: C
                                        })
                                    }
                                    var O = {};
                                    if (void 0 !== T.explicit && (O.explicit = T.explicit),
                                    void 0 !== T.tag && (O.tag = T.tag),
                                    void 0 === T.obj)
                                        throw "obj shall be specified for 'tag'.";
                                    return O.obj = b(T.obj),
                                    new y(O)
                                }
                            }
                            ,
                            this.jsonToASN1HEX = function(t) {
                                return this.newObject(t).getEncodedHex()
                            }
                        }
                        ,
                        nt.asn1.ASN1Util.oidHexToInt = function(t) {
                            for (var e = "", n = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(n / 40) + "." + n % 40,
                            ""), i = 2; i < t.length; i += 2) {
                                var o = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
                                r += o.substr(1, 7),
                                "0" == o.substr(0, 1) && (e = e + "." + new O(r,2).toString(10),
                                r = "")
                            }
                            return e
                        }
                        ,
                        nt.asn1.ASN1Util.oidIntToHex = function(t) {
                            var e = function(t) {
                                var e = t.toString(16);
                                return 1 == e.length && (e = "0" + e),
                                e
                            }
                              , n = function(t) {
                                var n = ""
                                  , r = new O(t,10).toString(2)
                                  , i = 7 - r.length % 7;
                                7 == i && (i = 0);
                                for (var o = "", a = 0; a < i; a++)
                                    o += "0";
                                for (r = o + r,
                                a = 0; a < r.length - 1; a += 7) {
                                    var s = r.substr(a, 7);
                                    a != r.length - 7 && (s = "1" + s),
                                    n += e(parseInt(s, 2))
                                }
                                return n
                            };
                            if (!t.match(/^[0-9.]+$/))
                                throw "malformed oid string: " + t;
                            var r = ""
                              , i = t.split(".")
                              , o = 40 * parseInt(i[0]) + parseInt(i[1]);
                            r += e(o),
                            i.splice(0, 2);
                            for (var a = 0; a < i.length; a++)
                                r += n(i[a]);
                            return r
                        }
                        ,
                        nt.asn1.ASN1Object = function() {
                            this.getLengthHexFromValue = function() {
                                if (void 0 === this.hV || null == this.hV)
                                    throw "this.hV is null or undefined.";
                                if (this.hV.length % 2 == 1)
                                    throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                                var t = this.hV.length / 2
                                  , e = t.toString(16);
                                if (e.length % 2 == 1 && (e = "0" + e),
                                t < 128)
                                    return e;
                                var n = e.length / 2;
                                if (n > 15)
                                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                                return (128 + n).toString(16) + e
                            }
                            ,
                            this.getEncodedHex = function() {
                                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                                this.hL = this.getLengthHexFromValue(),
                                this.hTLV = this.hT + this.hL + this.hV,
                                this.isModified = !1),
                                this.hTLV
                            }
                            ,
                            this.getValueHex = function() {
                                return this.getEncodedHex(),
                                this.hV
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return ""
                            }
                        }
                        ,
                        nt.asn1.DERAbstractString = function(t) {
                            nt.asn1.DERAbstractString.superclass.constructor.call(this),
                            this.getString = function() {
                                return this.s
                            }
                            ,
                            this.setString = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.s = t,
                                this.hV = stohex(this.s)
                            }
                            ,
                            this.setStringHex = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.s = null,
                                this.hV = t
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                            ,
                            void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERAbstractString, nt.asn1.ASN1Object),
                        nt.asn1.DERAbstractTime = function(t) {
                            nt.asn1.DERAbstractTime.superclass.constructor.call(this),
                            this.localDateToUTC = function(t) {
                                return utc = t.getTime() + 6e4 * t.getTimezoneOffset(),
                                new Date(utc)
                            }
                            ,
                            this.formatDate = function(t, e, n) {
                                var r = this.zeroPadding
                                  , i = this.localDateToUTC(t)
                                  , o = String(i.getFullYear());
                                "utc" == e && (o = o.substr(2, 2));
                                var a = o + r(String(i.getMonth() + 1), 2) + r(String(i.getDate()), 2) + r(String(i.getHours()), 2) + r(String(i.getMinutes()), 2) + r(String(i.getSeconds()), 2);
                                if (!0 === n) {
                                    var s = i.getMilliseconds();
                                    if (0 != s) {
                                        var c = r(String(s), 3);
                                        a = a + "." + (c = c.replace(/[0]+$/, ""))
                                    }
                                }
                                return a + "Z"
                            }
                            ,
                            this.zeroPadding = function(t, e) {
                                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                            }
                            ,
                            this.getString = function() {
                                return this.s
                            }
                            ,
                            this.setString = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.s = t,
                                this.hV = stohex(t)
                            }
                            ,
                            this.setByDateValue = function(t, e, n, r, i, o) {
                                var a = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
                                this.setByDate(a)
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                        }
                        ,
                        et.lang.extend(nt.asn1.DERAbstractTime, nt.asn1.ASN1Object),
                        nt.asn1.DERAbstractStructured = function(t) {
                            nt.asn1.DERAbstractString.superclass.constructor.call(this),
                            this.setByASN1ObjectArray = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.asn1Array = t
                            }
                            ,
                            this.appendASN1Object = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.asn1Array.push(t)
                            }
                            ,
                            this.asn1Array = new Array,
                            void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
                        }
                        ,
                        et.lang.extend(nt.asn1.DERAbstractStructured, nt.asn1.ASN1Object),
                        nt.asn1.DERBoolean = function() {
                            nt.asn1.DERBoolean.superclass.constructor.call(this),
                            this.hT = "01",
                            this.hTLV = "0101ff"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERBoolean, nt.asn1.ASN1Object),
                        nt.asn1.DERInteger = function(t) {
                            nt.asn1.DERInteger.superclass.constructor.call(this),
                            this.hT = "02",
                            this.setByBigInteger = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.hV = nt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                            }
                            ,
                            this.setByInteger = function(t) {
                                var e = new O(String(t),10);
                                this.setByBigInteger(e)
                            }
                            ,
                            this.setValueHex = function(t) {
                                this.hV = t
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                            ,
                            void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERInteger, nt.asn1.ASN1Object),
                        nt.asn1.DERBitString = function(t) {
                            if (void 0 !== t && void 0 !== t.obj) {
                                var e = nt.asn1.ASN1Util.newObject(t.obj);
                                t.hex = "00" + e.getEncodedHex()
                            }
                            nt.asn1.DERBitString.superclass.constructor.call(this),
                            this.hT = "03",
                            this.setHexValueIncludingUnusedBits = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.hV = t
                            }
                            ,
                            this.setUnusedBitsAndHexValue = function(t, e) {
                                if (t < 0 || 7 < t)
                                    throw "unused bits shall be from 0 to 7: u = " + t;
                                var n = "0" + t;
                                this.hTLV = null,
                                this.isModified = !0,
                                this.hV = n + e
                            }
                            ,
                            this.setByBinaryString = function(t) {
                                var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                                8 == e && (e = 0);
                                for (var n = 0; n <= e; n++)
                                    t += "0";
                                var r = "";
                                for (n = 0; n < t.length - 1; n += 8) {
                                    var i = t.substr(n, 8)
                                      , o = parseInt(i, 2).toString(16);
                                    1 == o.length && (o = "0" + o),
                                    r += o
                                }
                                this.hTLV = null,
                                this.isModified = !0,
                                this.hV = "0" + e + r
                            }
                            ,
                            this.setByBooleanArray = function(t) {
                                for (var e = "", n = 0; n < t.length; n++)
                                    1 == t[n] ? e += "1" : e += "0";
                                this.setByBinaryString(e)
                            }
                            ,
                            this.newFalseArray = function(t) {
                                for (var e = new Array(t), n = 0; n < t; n++)
                                    e[n] = !1;
                                return e
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                            ,
                            void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERBitString, nt.asn1.ASN1Object),
                        nt.asn1.DEROctetString = function(t) {
                            if (void 0 !== t && void 0 !== t.obj) {
                                var e = nt.asn1.ASN1Util.newObject(t.obj);
                                t.hex = e.getEncodedHex()
                            }
                            nt.asn1.DEROctetString.superclass.constructor.call(this, t),
                            this.hT = "04"
                        }
                        ,
                        et.lang.extend(nt.asn1.DEROctetString, nt.asn1.DERAbstractString),
                        nt.asn1.DERNull = function() {
                            nt.asn1.DERNull.superclass.constructor.call(this),
                            this.hT = "05",
                            this.hTLV = "0500"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERNull, nt.asn1.ASN1Object),
                        nt.asn1.DERObjectIdentifier = function(t) {
                            var e = function(t) {
                                var e = t.toString(16);
                                return 1 == e.length && (e = "0" + e),
                                e
                            }
                              , n = function(t) {
                                var n = ""
                                  , r = new O(t,10).toString(2)
                                  , i = 7 - r.length % 7;
                                7 == i && (i = 0);
                                for (var o = "", a = 0; a < i; a++)
                                    o += "0";
                                for (r = o + r,
                                a = 0; a < r.length - 1; a += 7) {
                                    var s = r.substr(a, 7);
                                    a != r.length - 7 && (s = "1" + s),
                                    n += e(parseInt(s, 2))
                                }
                                return n
                            };
                            nt.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                            this.hT = "06",
                            this.setValueHex = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.s = null,
                                this.hV = t
                            }
                            ,
                            this.setValueOidString = function(t) {
                                if (!t.match(/^[0-9.]+$/))
                                    throw "malformed oid string: " + t;
                                var r = ""
                                  , i = t.split(".")
                                  , o = 40 * parseInt(i[0]) + parseInt(i[1]);
                                r += e(o),
                                i.splice(0, 2);
                                for (var a = 0; a < i.length; a++)
                                    r += n(i[a]);
                                this.hTLV = null,
                                this.isModified = !0,
                                this.s = null,
                                this.hV = r
                            }
                            ,
                            this.setValueName = function(t) {
                                var e = nt.asn1.x509.OID.name2oid(t);
                                if ("" === e)
                                    throw "DERObjectIdentifier oidName undefined: " + t;
                                this.setValueOidString(e)
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                            ,
                            void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERObjectIdentifier, nt.asn1.ASN1Object),
                        nt.asn1.DEREnumerated = function(t) {
                            nt.asn1.DEREnumerated.superclass.constructor.call(this),
                            this.hT = "0a",
                            this.setByBigInteger = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.hV = nt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                            }
                            ,
                            this.setByInteger = function(t) {
                                var e = new O(String(t),10);
                                this.setByBigInteger(e)
                            }
                            ,
                            this.setValueHex = function(t) {
                                this.hV = t
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                            ,
                            void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
                        }
                        ,
                        et.lang.extend(nt.asn1.DEREnumerated, nt.asn1.ASN1Object),
                        nt.asn1.DERUTF8String = function(t) {
                            nt.asn1.DERUTF8String.superclass.constructor.call(this, t),
                            this.hT = "0c"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERUTF8String, nt.asn1.DERAbstractString),
                        nt.asn1.DERNumericString = function(t) {
                            nt.asn1.DERNumericString.superclass.constructor.call(this, t),
                            this.hT = "12"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERNumericString, nt.asn1.DERAbstractString),
                        nt.asn1.DERPrintableString = function(t) {
                            nt.asn1.DERPrintableString.superclass.constructor.call(this, t),
                            this.hT = "13"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERPrintableString, nt.asn1.DERAbstractString),
                        nt.asn1.DERTeletexString = function(t) {
                            nt.asn1.DERTeletexString.superclass.constructor.call(this, t),
                            this.hT = "14"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERTeletexString, nt.asn1.DERAbstractString),
                        nt.asn1.DERIA5String = function(t) {
                            nt.asn1.DERIA5String.superclass.constructor.call(this, t),
                            this.hT = "16"
                        }
                        ,
                        et.lang.extend(nt.asn1.DERIA5String, nt.asn1.DERAbstractString),
                        nt.asn1.DERUTCTime = function(t) {
                            nt.asn1.DERUTCTime.superclass.constructor.call(this, t),
                            this.hT = "17",
                            this.setByDate = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.date = t,
                                this.s = this.formatDate(this.date, "utc"),
                                this.hV = stohex(this.s)
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                                this.s = this.formatDate(this.date, "utc"),
                                this.hV = stohex(this.s)),
                                this.hV
                            }
                            ,
                            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERUTCTime, nt.asn1.DERAbstractTime),
                        nt.asn1.DERGeneralizedTime = function(t) {
                            nt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                            this.hT = "18",
                            this.withMillis = !1,
                            this.setByDate = function(t) {
                                this.hTLV = null,
                                this.isModified = !0,
                                this.date = t,
                                this.s = this.formatDate(this.date, "gen", this.withMillis),
                                this.hV = stohex(this.s)
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                                this.s = this.formatDate(this.date, "gen", this.withMillis),
                                this.hV = stohex(this.s)),
                                this.hV
                            }
                            ,
                            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date),
                            !0 === t.millis && (this.withMillis = !0))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERGeneralizedTime, nt.asn1.DERAbstractTime),
                        nt.asn1.DERSequence = function(t) {
                            nt.asn1.DERSequence.superclass.constructor.call(this, t),
                            this.hT = "30",
                            this.getFreshValueHex = function() {
                                for (var t = "", e = 0; e < this.asn1Array.length; e++)
                                    t += this.asn1Array[e].getEncodedHex();
                                return this.hV = t,
                                this.hV
                            }
                        }
                        ,
                        et.lang.extend(nt.asn1.DERSequence, nt.asn1.DERAbstractStructured),
                        nt.asn1.DERSet = function(t) {
                            nt.asn1.DERSet.superclass.constructor.call(this, t),
                            this.hT = "31",
                            this.sortFlag = !0,
                            this.getFreshValueHex = function() {
                                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                                    var n = this.asn1Array[e];
                                    t.push(n.getEncodedHex())
                                }
                                return 1 == this.sortFlag && t.sort(),
                                this.hV = t.join(""),
                                this.hV
                            }
                            ,
                            void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
                        }
                        ,
                        et.lang.extend(nt.asn1.DERSet, nt.asn1.DERAbstractStructured),
                        nt.asn1.DERTaggedObject = function(t) {
                            nt.asn1.DERTaggedObject.superclass.constructor.call(this),
                            this.hT = "a0",
                            this.hV = "",
                            this.isExplicit = !0,
                            this.asn1Object = null,
                            this.setASN1Object = function(t, e, n) {
                                this.hT = e,
                                this.isExplicit = t,
                                this.asn1Object = n,
                                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                                this.hTLV = null,
                                this.isModified = !0) : (this.hV = null,
                                this.hTLV = n.getEncodedHex(),
                                this.hTLV = this.hTLV.replace(/^../, e),
                                this.isModified = !1)
                            }
                            ,
                            this.getFreshValueHex = function() {
                                return this.hV
                            }
                            ,
                            void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag),
                            void 0 !== t.explicit && (this.isExplicit = t.explicit),
                            void 0 !== t.obj && (this.asn1Object = t.obj,
                            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                        }
                        ,
                        et.lang.extend(nt.asn1.DERTaggedObject, nt.asn1.ASN1Object);
                        var rt, it = (rt = function(t, e) {
                            return (rt = Object.setPrototypeOf || {
                                __proto__: []
                            }instanceof Array && function(t, e) {
                                t.__proto__ = e
                            }
                            || function(t, e) {
                                for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            }
                            )(t, e)
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            rt(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        ), ot = function(t) {
                            function e(n) {
                                var r = t.call(this) || this;
                                return n && ("string" == typeof n ? r.parseKey(n) : (e.hasPrivateKeyProperty(n) || e.hasPublicKeyProperty(n)) && r.parsePropertiesFrom(n)),
                                r
                            }
                            return it(e, t),
                            e.prototype.parseKey = function(t) {
                                try {
                                    var e = 0
                                      , n = 0
                                      , r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? function(t) {
                                        var e;
                                        if (void 0 === l) {
                                            var n = "0123456789ABCDEF"
                                              , r = " \f\n\r\t \u2028\u2029";
                                            for (l = {},
                                            e = 0; e < 16; ++e)
                                                l[n.charAt(e)] = e;
                                            for (n = n.toLowerCase(),
                                            e = 10; e < 16; ++e)
                                                l[n.charAt(e)] = e;
                                            for (e = 0; e < r.length; ++e)
                                                l[r.charAt(e)] = -1
                                        }
                                        var i = []
                                          , o = 0
                                          , a = 0;
                                        for (e = 0; e < t.length; ++e) {
                                            var s = t.charAt(e);
                                            if ("=" == s)
                                                break;
                                            if (-1 != (s = l[s])) {
                                                if (void 0 === s)
                                                    throw new Error("Illegal character at offset " + e);
                                                o |= s,
                                                ++a >= 2 ? (i[i.length] = o,
                                                o = 0,
                                                a = 0) : o <<= 4
                                            }
                                        }
                                        if (a)
                                            throw new Error("Hex encoding incomplete: 4 bits missing");
                                        return i
                                    }(t) : g.unarmor(t)
                                      , i = x.decode(r);
                                    if (3 === i.sub.length && (i = i.sub[2].sub[0]),
                                    9 === i.sub.length) {
                                        e = i.sub[1].getHexStringValue(),
                                        this.n = I(e, 16),
                                        n = i.sub[2].getHexStringValue(),
                                        this.e = parseInt(n, 16);
                                        var o = i.sub[3].getHexStringValue();
                                        this.d = I(o, 16);
                                        var a = i.sub[4].getHexStringValue();
                                        this.p = I(a, 16);
                                        var s = i.sub[5].getHexStringValue();
                                        this.q = I(s, 16);
                                        var c = i.sub[6].getHexStringValue();
                                        this.dmp1 = I(c, 16);
                                        var u = i.sub[7].getHexStringValue();
                                        this.dmq1 = I(u, 16);
                                        var h = i.sub[8].getHexStringValue();
                                        this.coeff = I(h, 16)
                                    } else {
                                        if (2 !== i.sub.length)
                                            return !1;
                                        var f = i.sub[1].sub[0];
                                        e = f.sub[0].getHexStringValue(),
                                        this.n = I(e, 16),
                                        n = f.sub[1].getHexStringValue(),
                                        this.e = parseInt(n, 16)
                                    }
                                    return !0
                                } catch (t) {
                                    return !1
                                }
                            }
                            ,
                            e.prototype.getPrivateBaseKey = function() {
                                var t = {
                                    array: [new nt.asn1.DERInteger({
                                        int: 0
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.n
                                    }), new nt.asn1.DERInteger({
                                        int: this.e
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.d
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.p
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.q
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.dmp1
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.dmq1
                                    }), new nt.asn1.DERInteger({
                                        bigint: this.coeff
                                    })]
                                };
                                return new nt.asn1.DERSequence(t).getEncodedHex()
                            }
                            ,
                            e.prototype.getPrivateBaseKeyB64 = function() {
                                return f(this.getPrivateBaseKey())
                            }
                            ,
                            e.prototype.getPublicBaseKey = function() {
                                var t = new nt.asn1.DERSequence({
                                    array: [new nt.asn1.DERObjectIdentifier({
                                        oid: "1.2.840.113549.1.1.1"
                                    }), new nt.asn1.DERNull]
                                })
                                  , e = new nt.asn1.DERSequence({
                                    array: [new nt.asn1.DERInteger({
                                        bigint: this.n
                                    }), new nt.asn1.DERInteger({
                                        int: this.e
                                    })]
                                })
                                  , n = new nt.asn1.DERBitString({
                                    hex: "00" + e.getEncodedHex()
                                });
                                return new nt.asn1.DERSequence({
                                    array: [t, n]
                                }).getEncodedHex()
                            }
                            ,
                            e.prototype.getPublicBaseKeyB64 = function() {
                                return f(this.getPublicBaseKey())
                            }
                            ,
                            e.wordwrap = function(t, e) {
                                if (!t)
                                    return t;
                                var n = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                                return t.match(RegExp(n, "g")).join("\n")
                            }
                            ,
                            e.prototype.getPrivateKey = function() {
                                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                                return (t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----"
                            }
                            ,
                            e.prototype.getPublicKey = function() {
                                var t = "-----BEGIN PUBLIC KEY-----\n";
                                return (t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----"
                            }
                            ,
                            e.hasPublicKeyProperty = function(t) {
                                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
                            }
                            ,
                            e.hasPrivateKeyProperty = function(t) {
                                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                            }
                            ,
                            e.prototype.parsePropertiesFrom = function(t) {
                                this.n = t.n,
                                this.e = t.e,
                                t.hasOwnProperty("d") && (this.d = t.d,
                                this.p = t.p,
                                this.q = t.q,
                                this.dmp1 = t.dmp1,
                                this.dmq1 = t.dmq1,
                                this.coeff = t.coeff)
                            }
                            ,
                            e
                        }($), at = function() {
                            function t(t) {
                                t = t || {},
                                this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024,
                                this.default_public_exponent = t.default_public_exponent || "010001",
                                this.log = t.log || !1,
                                this.key = null
                            }
                            return t.prototype.setKey = function(t) {
                                this.log && this.key && console.warn("A key was already set, overriding existing."),
                                this.key = new ot(t)
                            }
                            ,
                            t.prototype.setPrivateKey = function(t) {
                                this.setKey(t)
                            }
                            ,
                            t.prototype.setPublicKey = function(t) {
                                this.setKey(t)
                            }
                            ,
                            t.prototype.decrypt = function(t) {
                                try {
                                    return this.getKey().decrypt(p(t))
                                } catch (t) {
                                    return !1
                                }
                            }
                            ,
                            t.prototype.encrypt = function(t) {
                                try {
                                    return f(this.getKey().encrypt(t))
                                } catch (t) {
                                    return !1
                                }
                            }
                            ,
                            t.prototype.sign = function(t, e, n) {
                                try {
                                    return f(this.getKey().sign(t, e, n))
                                } catch (t) {
                                    return !1
                                }
                            }
                            ,
                            t.prototype.verify = function(t, e, n) {
                                try {
                                    return this.getKey().verify(t, p(e), n)
                                } catch (t) {
                                    return !1
                                }
                            }
                            ,
                            t.prototype.getKey = function(t) {
                                if (!this.key) {
                                    if (this.key = new ot,
                                    t && "[object Function]" === {}.toString.call(t))
                                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                                    this.key.generate(this.default_key_size, this.default_public_exponent)
                                }
                                return this.key
                            }
                            ,
                            t.prototype.getPrivateKey = function() {
                                return this.getKey().getPrivateKey()
                            }
                            ,
                            t.prototype.getPrivateKeyB64 = function() {
                                return this.getKey().getPrivateBaseKeyB64()
                            }
                            ,
                            t.prototype.getPublicKey = function() {
                                return this.getKey().getPublicKey()
                            }
                            ,
                            t.prototype.getPublicKeyB64 = function() {
                                return this.getKey().getPublicBaseKeyB64()
                            }
                            ,
                            t.version = "3.0.1",
                            t
                        }()
                    }
                    ]
                      , e = {};
                    function n(r) {
                        if (e[r])
                            return e[r].exports;
                        var i = e[r] = {
                            exports: {}
                        };
                        return t[r](i, i.exports, n),
                        i.exports
                    }
                    return n.d = function(t, e) {
                        for (var r in e)
                            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                                enumerable: !0,
                                get: e[r]
                            })
                    }
                    ,
                    n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }
                    ,
                    n(1)
                }().default
            }
            ));
            w.JSEncrypt;
            var E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
              , x = "~!@#$%^*()_+-=[]{}|;:,./<>?";
            var k = {
                randomString: function(t, e) {
                    t || (t = 8),
                    e || (e = {});
                    var n = ""
                      , r = "";
                    for (!0 === e ? n = "0123456789" + E + x : "string" == typeof e ? n = e : (!1 !== e.numbers && (n += "string" == typeof e.numbers ? e.numbers : "0123456789"),
                    !1 !== e.letters && (n += "string" == typeof e.letters ? e.letters : E),
                    e.specials && (n += "string" == typeof e.specials ? e.specials : x)); t > 0; )
                        t--,
                        r += n[Math.floor(Math.random() * n.length)];
                    return r
                }
            }
              , S = A.enc.Utf8.parse("youzan.com.aesiv")
              , T = A.enc.Utf8.parse("youzan.com._key_")
              , C = {
                utils: {
                    generateKeyAndIv: function(t, e) {
                        return e = e || "yz.i.",
                        {
                            key: (t = t || "yz.k.") + k.randomString(16),
                            iv: e + k.randomString(16)
                        }
                    },
                    parse: function(t) {
                        return A.enc.Utf8.parse(t)
                    }
                },
                aes: {
                    encrypt: function(t) {
                        var e = t.data
                          , n = t.key
                          , r = t.iv;
                        return e = A.enc.Utf8.parse(e),
                        A.AES.encrypt(e, n, {
                            mode: A.mode.CBC,
                            padding: A.pad.Iso10126,
                            iv: r
                        }).toString()
                    },
                    decrypt: function(t) {
                        var e = t.encrypted
                          , n = t.key
                          , r = t.iv
                          , i = A.AES.decrypt(e, n, {
                            mode: A.mode.CBC,
                            padding: A.pad.Iso10126,
                            iv: r
                        });
                        return A.enc.Utf8.stringify(i)
                    },
                    legacyEncrypt: function(t) {
                        return this.encrypt({
                            data: t,
                            key: T,
                            iv: S
                        })
                    },
                    legacyDecrypt: function(t) {
                        return this.decrypt({
                            encrypted: t,
                            key: T,
                            iv: S
                        })
                    }
                },
                rsa: {
                    encrypt: function(t) {
                        var e = t.data
                          , n = t.publicKey
                          , r = new w;
                        return r.setPublicKey(n),
                        r.encrypt(e)
                    },
                    decrypt: function(t) {
                        var e = t.encrypted
                          , n = t.privateKey
                          , r = new w;
                        return r.setPrivateKey(n),
                        r.decrypt(e)
                    }
                }
            }
              , O = "";
            "undefined" != typeof window && (O = navigator.userAgent.toLowerCase());
            var D = {
                isIOS: function() {
                    return /iPhone|iPad|iPod/gi.test(O) && !window.MSStream
                },
                getIOSVersion: function() {
                    return parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1
                },
                isAndroid: function() {
                    return /android/gi.test(O)
                },
                isAndroidOld: function() {
                    return /android 2.3/gi.test(O) || /android 2.2/gi.test(O)
                },
                isWeixin: function() {
                    return /micromessenger/gi.test(O)
                },
                isIPad: function() {
                    return /ipad/gi.test(O)
                },
                isMobile: function() {
                    return /(android|bb\d+|meego).+mobile|kdtunion|weibo|m2oapp|micromessenger|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(O) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(O.substr(0, 4))
                },
                isSafari: function() {
                    return /safari/gi.test(O) && !/chrome/gi.test(O)
                },
                isWxd: function() {
                    return /youzan_wxd/i.test(O)
                },
                isWsc: function() {
                    return /youzan_wsc/i.test(O)
                },
                isPf: function() {
                    return /younipf/i.test(O)
                },
                isWeappWebview: function() {
                    var t = "undefined" != typeof __wxjs_environment ? __wxjs_environment : "";
                    return /miniprogram/i.test(O) || "miniprogram" === t
                },
                isMiniProgramWebview: function() {
                    var t = "undefined" != typeof __wxjs_environment ? __wxjs_environment : "";
                    return /miniprogram/i.test(O) || "miniprogram" === t || /swan\//.test(O)
                },
                getPlatformVersion: function() {
                    return this.isWxd() ? O.match(/(?:(?:wxd_android)|(?:wxd_ios))\/?([\d\.]+)/i)[1] : O.match(/(?:(?:youzan_wsc_ios)|(?:youzan_wsc_android))\/?([\d\.]+)/i)[1]
                }
            };
            function _(t) {
                if (t && "undefined" != typeof window) {
                    var e = document.createElement("style");
                    return e.setAttribute("type", "text/css"),
                    e.innerHTML = t,
                    document.head.appendChild(e),
                    t
                }
            }
            function R(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function B(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function j(t, e, n) {
                return e && B(t.prototype, e),
                n && B(t, n),
                t
            }
            function I(t, e) {
                return (I = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function L(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && I(t, e)
            }
            function M(t) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function N(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function P(t, e) {
                return !e || "object" !== M(e) && "function" != typeof e ? N(t) : e
            }
            function z(t) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function U(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            function V(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                            !e || n.length !== e); r = !0)
                                ;
                        } catch (t) {
                            i = !0,
                            o = t
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return U(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function F(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            function H(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);
                        function a(t) {
                            F(o, r, i, a, s, "next", t)
                        }
                        function s(t) {
                            F(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            var q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}
              , G = {
                exports: {}
            };
            !function(t) {
                var e = function(t) {
                    var e, n = Object.prototype, r = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
                    function c(t, e, n) {
                        return Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        t[e]
                    }
                    try {
                        c({}, "")
                    } catch (t) {
                        c = function(t, e, n) {
                            return t[e] = n
                        }
                    }
                    function u(t, e, n, r) {
                        var i = e && e.prototype instanceof m ? e : m
                          , o = Object.create(i.prototype)
                          , a = new O(r || []);
                        return o._invoke = function(t, e, n) {
                            var r = h;
                            return function(i, o) {
                                if (r === p)
                                    throw new Error("Generator is already running");
                                if (r === d) {
                                    if ("throw" === i)
                                        throw o;
                                    return _()
                                }
                                for (n.method = i,
                                n.arg = o; ; ) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = S(a, n);
                                        if (s) {
                                            if (s === g)
                                                continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method)
                                        n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === h)
                                            throw r = d,
                                            n.arg;
                                        n.dispatchException(n.arg)
                                    } else
                                        "return" === n.method && n.abrupt("return", n.arg);
                                    r = p;
                                    var c = l(t, e, n);
                                    if ("normal" === c.type) {
                                        if (r = n.done ? d : f,
                                        c.arg === g)
                                            continue;
                                        return {
                                            value: c.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === c.type && (r = d,
                                    n.method = "throw",
                                    n.arg = c.arg)
                                }
                            }
                        }(t, n, a),
                        o
                    }
                    function l(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = u;
                    var h = "suspendedStart"
                      , f = "suspendedYield"
                      , p = "executing"
                      , d = "completed"
                      , g = {};
                    function m() {}
                    function v() {}
                    function y() {}
                    var b = {};
                    b[o] = function() {
                        return this
                    }
                    ;
                    var A = Object.getPrototypeOf
                      , w = A && A(A(D([])));
                    w && w !== n && r.call(w, o) && (b = w);
                    var E = y.prototype = m.prototype = Object.create(b);
                    function x(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            c(t, e, (function(t) {
                                return this._invoke(e, t)
                            }
                            ))
                        }
                        ))
                    }
                    function k(t, e) {
                        function n(i, o, a, s) {
                            var c = l(t[i], t, o);
                            if ("throw" !== c.type) {
                                var u = c.arg
                                  , h = u.value;
                                return h && "object" === M(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                    n("next", t, a, s)
                                }
                                ), (function(t) {
                                    n("throw", t, a, s)
                                }
                                )) : e.resolve(h).then((function(t) {
                                    u.value = t,
                                    a(u)
                                }
                                ), (function(t) {
                                    return n("throw", t, a, s)
                                }
                                ))
                            }
                            s(c.arg)
                        }
                        var i;
                        this._invoke = function(t, r) {
                            function o() {
                                return new e((function(e, i) {
                                    n(t, r, e, i)
                                }
                                ))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    }
                    function S(t, n) {
                        var r = t.iterator[n.method];
                        if (r === e) {
                            if (n.delegate = null,
                            "throw" === n.method) {
                                if (t.iterator.return && (n.method = "return",
                                n.arg = e,
                                S(t, n),
                                "throw" === n.method))
                                    return g;
                                n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return g
                        }
                        var i = l(r, t.iterator, n.arg);
                        if ("throw" === i.type)
                            return n.method = "throw",
                            n.arg = i.arg,
                            n.delegate = null,
                            g;
                        var o = i.arg;
                        return o ? o.done ? (n[t.resultName] = o.value,
                        n.next = t.nextLoc,
                        "return" !== n.method && (n.method = "next",
                        n.arg = e),
                        n.delegate = null,
                        g) : o : (n.method = "throw",
                        n.arg = new TypeError("iterator result is not an object"),
                        n.delegate = null,
                        g)
                    }
                    function T(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]),
                        2 in t && (e.finallyLoc = t[2],
                        e.afterLoc = t[3]),
                        this.tryEntries.push(e)
                    }
                    function C(t) {
                        var e = t.completion || {};
                        e.type = "normal",
                        delete e.arg,
                        t.completion = e
                    }
                    function O(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        t.forEach(T, this),
                        this.reset(!0)
                    }
                    function D(t) {
                        if (t) {
                            var n = t[o];
                            if (n)
                                return n.call(t);
                            if ("function" == typeof t.next)
                                return t;
                            if (!isNaN(t.length)) {
                                var i = -1
                                  , a = function n() {
                                    for (; ++i < t.length; )
                                        if (r.call(t, i))
                                            return n.value = t[i],
                                            n.done = !1,
                                            n;
                                    return n.value = e,
                                    n.done = !0,
                                    n
                                };
                                return a.next = a
                            }
                        }
                        return {
                            next: _
                        }
                    }
                    function _() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return v.prototype = E.constructor = y,
                    y.constructor = v,
                    v.displayName = c(y, s, "GeneratorFunction"),
                    t.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                    }
                    ,
                    t.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                        c(t, s, "GeneratorFunction")),
                        t.prototype = Object.create(E),
                        t
                    }
                    ,
                    t.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }
                    ,
                    x(k.prototype),
                    k.prototype[a] = function() {
                        return this
                    }
                    ,
                    t.AsyncIterator = k,
                    t.async = function(e, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new k(u(e, n, r, i),o);
                        return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                            return t.done ? t.value : a.next()
                        }
                        ))
                    }
                    ,
                    x(E),
                    c(E, s, "Generator"),
                    E[o] = function() {
                        return this
                    }
                    ,
                    E.toString = function() {
                        return "[object Generator]"
                    }
                    ,
                    t.keys = function(t) {
                        var e = [];
                        for (var n in t)
                            e.push(n);
                        return e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var r = e.pop();
                                if (r in t)
                                    return n.value = r,
                                    n.done = !1,
                                    n
                            }
                            return n.done = !0,
                            n
                        }
                    }
                    ,
                    t.values = D,
                    O.prototype = {
                        constructor: O,
                        reset: function(t) {
                            if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = e,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = e,
                            this.tryEntries.forEach(C),
                            !t)
                                for (var n in this)
                                    "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type)
                                throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done)
                                throw t;
                            var n = this;
                            function i(r, i) {
                                return s.type = "throw",
                                s.arg = t,
                                n.next = r,
                                i && (n.method = "next",
                                n.arg = e),
                                !!i
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o]
                                  , s = a.completion;
                                if ("root" === a.tryLoc)
                                    return i("end");
                                if (a.tryLoc <= this.prev) {
                                    var c = r.call(a, "catchLoc")
                                      , u = r.call(a, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < a.catchLoc)
                                            return i(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc)
                                            return i(a.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < a.catchLoc)
                                            return i(a.catchLoc, !0)
                                    } else {
                                        if (!u)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc)
                                            return i(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = t,
                            a.arg = e,
                            o ? (this.method = "next",
                            this.next = o.finallyLoc,
                            g) : this.complete(a)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type)
                                throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            g
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t)
                                    return this.complete(n.completion, n.afterLoc),
                                    C(n),
                                    g
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        C(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, n, r) {
                            return this.delegate = {
                                iterator: D(t),
                                resultName: n,
                                nextLoc: r
                            },
                            "next" === this.method && (this.arg = e),
                            g
                        }
                    },
                    t
                }(t.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    Function("r", "regeneratorRuntime = r")(e)
                }
            }(G);
            var K = G.exports;
            function W() {
                this.onSuccess = function(t) {}
                ,
                this.onFail = function() {}
                ,
                this.onCancel = function() {}
                ,
                this.bizType = ""
            }
            function Q(t) {
                return new Promise((function(e, n) {
                    var r = new XMLHttpRequest
                      , i = t.url;
                    "GET" === t.method.toUpperCase() && (i = y.add(t.url, t.data)),
                    r.open(t.method, i),
                    r.setRequestHeader("Content-Type", "application/json"),
                    t.headers && Object.keys(t.headers).forEach((function(e) {
                        r.setRequestHeader(e, t.headers[e])
                    }
                    )),
                    r.timeout = 1e4,
                    r.withCredentials = !0,
                    r.responseType = "json",
                    r.onreadystatechange = function() {
                        if (4 === r.readyState)
                            if (200 === r.status && r.response) {
                                var t = r.response;
                                "string" == typeof t && (t = JSON.parse(t)),
                                e(t)
                            } else
                                n(r.errors)
                    }
                    ,
                    r.send(JSON.stringify(t.data))
                }
                ))
            }
            function Y(t, e, n) {
                !function r(i) {
                    i && i !== e && (i.attributes.length && Array.prototype.forEach.call(i.attributes, (function(e) {
                        var r = e.name;
                        if (r === "@".concat(t.type)) {
                            var o = i.getAttribute(r);
                            n[o] && n[o].apply(n, [t, {
                                elm: i
                            }])
                        }
                    }
                    )),
                    r(i.parentElement))
                }(t.target)
            }
            W.prototype.check = function(t) {
                var e = t.onSuccess
                  , n = t.onFail
                  , r = t.onCancel
                  , i = t.bizType
                  , o = t.bizData
                  , a = void 0 === o ? "" : o;
                if ("function" != typeof e)
                    throw Error("onSuccess 必须为一个方法");
                var s = this;
                if (this.onSuccess = function() {
                    s.hideLoading(),
                    e(s.token)
                }
                ,
                n) {
                    if ("function" != typeof n)
                        throw Error("onFail 必须为一个方法");
                    this.onFail = n
                }
                if (r) {
                    if ("function" != typeof r)
                        throw Error("onCancel 必须为一个方法");
                    this.onCancel = r
                }
                if (void 0 === i)
                    throw Error("业务线类型 bizType 为必传");
                this.bizType = i,
                this.bizData = a,
                this.getToken().then(function() {
                    var t = this
                      , e = {
                        token: this.token,
                        onSuccess: this.onSuccess,
                        onCancel: this.onCancel,
                        bizType: this.bizType,
                        bizData: this.bizData,
                        onFail: function(n) {
                            if (t.hideLoading(),
                            n.captchaType)
                                switch (n.captchaType) {
                                case 1:
                                    t.slideCaptcha.startVerify(e);
                                    break;
                                case 2:
                                    t.clickOrTouch.startVerify(e);
                                    break;
                                default:
                                    t.errorTip("没有当前类型验证码")
                                }
                            else
                                t.slideCaptcha.hide(),
                                t.errorTip("string" == typeof n ? n : "停留时间过长，请重试"),
                                t.onFail(n)
                        }
                    };
                    this.token && this.clickOrTouch.startVerify(e)
                }
                .bind(this))
            }
            ,
            W.prototype.getToken = function() {}
            ,
            W.prototype.errorTip = function() {}
            ,
            _("#behavior-verify-web-toast-container {\n  position: fixed;\n  width: 280px;\n  height: 35px;\n  left: 50%;\n  margin-left: -140px;\n  top: 30px;\n  z-index: 99999;\n  font-size: 14px;\n  text-align: center;\n  line-height: 35px;\n  color: #d40000;\n  border-radius: 2px;\n  background: #ffffff;\n  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  transition: opacity 0.3s ease 0s;\n}\n#behavior-verify-web-toast-container.show {\n  opacity: 1;\n}");
            var J = C
              , X = ""
              , Z = "";
            function $(t, e) {
                X = J.utils.parse(t),
                Z = J.utils.parse(e)
            }
            function tt(t) {
                return J.aes.encrypt({
                    data: JSON.stringify(t),
                    iv: Z,
                    key: X
                })
            }
            function et(t) {
                return decodeURIComponent(t.split("").reverse().join(""))
            }
            var nt = ((window._global || {}).url || {}).passport || et("moc.nazuoy.tropssapF2%F2%A3%sptth");
            try {
                wx && Page && (nt = et("tropssapF2%"))
            } catch (_) {}
            var rt = nt + et("nosj.2v-nekot-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%")
              , it = nt + et("nosj.atad-ahctpac-roivaheb-kcehcF2%ahctpacF2%ipaF2%")
              , ot = nt + et("nosj.atad-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%");
            var at = function(t) {
                L(r, W);
                var e, n = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(r);
                function r() {
                    var t;
                    return R(this, r),
                    (t = n.call(this)).loadingDomID = "__behavior_loading",
                    t
                }
                return j(r, [{
                    key: "getToken",
                    value: (e = H(K.mark((function t() {
                        var e, n, r, i, o, a, s, c, u, l, h, f, p, d, g, m, v;
                        return K.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.showLoading(),
                                    t.prev = 1,
                                    t.next = 4,
                                    Q({
                                        url: rt,
                                        method: "GET",
                                        data: {
                                            bizType: this.bizType,
                                            version: "1.0"
                                        }
                                    });
                                case 4:
                                    if (e = t.sent,
                                    n = e.code,
                                    r = e.msg,
                                    i = e.data,
                                    o = i.token,
                                    a = i.randomStr,
                                    s = void 0 === a ? "" : a,
                                    0 !== n) {
                                        t.next = 11;
                                        break
                                    }
                                    if (!o) {
                                        t.next = 11;
                                        break
                                    }
                                    return c = s.split("").reverse().join("").split("@"),
                                    u = V(c, 2),
                                    l = u[0],
                                    h = void 0 === l ? "" : l,
                                    f = u[1],
                                    $(h, void 0 === f ? "" : f),
                                    t.abrupt("return", this.token = o);
                                case 11:
                                    this.token = "",
                                    this.errorTip(r || "token 获取失败"),
                                    this.hideLoading(),
                                    t.next = 32;
                                    break;
                                case 16:
                                    t.prev = 16,
                                    t.t0 = t.catch(1),
                                    p = t.t0 || {},
                                    d = p.error,
                                    g = (d = void 0 === d ? {} : d).msg,
                                    m = g ? g.match(/\d{3}$/) : null,
                                    v = m ? m[0] : null,
                                    t.t1 = v,
                                    t.next = "429" === t.t1 ? 26 : 28;
                                    break;
                                case 26:
                                    return this.errorTip("当前系统访问人数较多，请稍后重试"),
                                    t.abrupt("break", 30);
                                case 28:
                                    return this.errorTip("网络错误，请稍后重试"),
                                    t.abrupt("break", 30);
                                case 30:
                                    throw this.hideLoading(),
                                    t.t0;
                                case 32:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 16]])
                    }
                    ))),
                    function() {
                        return e.apply(this, arguments)
                    }
                    )
                }, {
                    key: "showLoading",
                    value: function() {
                        var t = document.getElementById(this.loadingDomID);
                        t ? t.style.display = "flex" : ((t = document.createElement("div")).style.cssText = "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99999;\n      ",
                        t.id = this.loadingDomID,
                        t.innerHTML = '\n      <img style="width: 100px;border-radius: 4px;position: absolute; left: 50%; top: 50%; margin-left: -50px; margin-top: -50px;" src="https://b.yzcdn.cn/public_files/2019/08/16/cd20fdda6cd217f27da625e229917f57.gif" />\n      ',
                        document.body.appendChild(t))
                    }
                }, {
                    key: "hideLoading",
                    value: function() {
                        var t = document.getElementById(this.loadingDomID);
                        t && (t.style.display = "none")
                    }
                }]),
                r
            }();
            _('.slide-captcha-container.hide {\n  display: none;\n}\n.slide-captcha-container .slide-captcha.pop {\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box {\n  width: 280px;\n  background: #fff;\n  z-index: 1;\n  position: absolute;\n  padding: 20px 18px 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  left: 50%;\n  top: 50%;\n  margin-left: -158px;\n  margin-top: -157px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box .title {\n  font-size: 20px;\n  line-height: 28px;\n  margin-bottom: 20px;\n  float: left;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box .close {\n  float: right;\n  cursor: pointer;\n  color: #999;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  font-size: 22px;\n  line-height: 22px;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box .top-ctrl::after {\n  content: " ";\n  display: block;\n  clear: both;\n}\n.slide-captcha-container .slide-captcha.pop::before {\n  content: " ";\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  left: 0;\n  top: 0;\n}');
            var st, ct = {
                exports: {}
            };
            st = ct,
            function(t) {
                var e = function t(e, n) {
                    var r = /[^\w\-.:]/.test(e) ? new Function(t.arg + ",tmpl","var _e=tmpl.encode" + t.helper + ",_s='" + e.replace(t.regexp, t.func) + "';return _s;") : t.cache[e] = t.cache[e] || t(t.load(e));
                    return n ? r(n, t) : function(e) {
                        return r(e, t)
                    }
                };
                e.cache = {},
                e.load = function(t) {
                    return document.getElementById(t).innerHTML
                }
                ,
                e.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,
                e.func = function(t, e, n, r, i, o) {
                    return e ? {
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        " ": " "
                    }[e] || "\\" + e : n ? "=" === n ? "'+_e(" + r + ")+'" : "'+(" + r + "==null?'':" + r + ")+'" : i ? "';" : o ? "_s+='" : void 0
                }
                ,
                e.encReg = /[<>&"'\x00]/g,
                e.encMap = {
                    "<": "&lt;",
                    ">": "&gt;",
                    "&": "&amp;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                e.encode = function(t) {
                    return (null == t ? "" : "" + t).replace(e.encReg, (function(t) {
                        return e.encMap[t] || ""
                    }
                    ))
                }
                ,
                e.arg = "o",
                e.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}",
                st.exports ? st.exports = e : t.tmpl = e
            }(q);
            var ut = ct.exports
              , lt = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        eventHandler: {}
                    };
                    R(this, t),
                    this.props = e,
                    this.state = {},
                    this.elm = null,
                    this.html = ""
                }
                return j(t, [{
                    key: "addEventListener",
                    value: function() {
                        var t = this;
                        this.elm.addEventListener("click", (function(e) {
                            return Y(e, t.elm, t)
                        }
                        ), !1),
                        this.elm.addEventListener("touchstart", (function(e) {
                            return Y(e, t.elm, t)
                        }
                        ), !1),
                        this.elm.addEventListener("mousedown", (function(e) {
                            return Y(e, t.elm, t)
                        }
                        ), !1)
                    }
                }, {
                    key: "_render",
                    value: function() {
                        this.elm || (this.elm = document.createElement("div"),
                        this.addEventListener()),
                        this.elm.innerHTML = ut(this.html, this.state)
                    }
                }, {
                    key: "emit",
                    value: function(t, e) {
                        this.props.eventHandler && "function" == typeof this.props.eventHandler[t] && this.props.eventHandler[t](e)
                    }
                }]),
                t
            }();
            var ht = function(t) {
                L(n, lt);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(n);
                function n(t) {
                    var r;
                    return R(this, n),
                    (r = e.call(this, t)).html = '<div class="slide-captcha-container">\n  <div class="slide-captcha pop" class="{%=o.className%}">\n    <div class="slide-box">\n      <div class="top-ctrl">\n        <div class="title">请完成安全验证</div>\n        <div class="close" @click="handleClose">+</div>\n      </div>\n      <slot/>\n    </div>\n  </div>\n</div>\n',
                    r._render(),
                    r
                }
                return j(n, [{
                    key: "slot",
                    set: function(t) {
                        var e = this.elm.getElementsByTagName("slot")[0];
                        e.parentElement.replaceChild(t, e)
                    }
                }, {
                    key: "handleClose",
                    value: function() {
                        this.emit("cancel")
                    }
                }]),
                n
            }()
              , ft = '<div class="content">\n  <div\n    class="display"\n    style="height: {%=o.bgHeight%}px"\n  >\n    <div id="statusRef">\n      <div class="loading-icon">\n        <i class="icon-l"></i>\n        <div class="tip">加载中</div>\n      </div>\n    </div>\n    <div id="slidePicRef">\n      <div\n        class="refresh"\n        @click="handleRefresh"\n      ></div>\n      <div class="bg"><img id="bigImg" src="{%=o.bigUrl%}" /></div>\n      <div\n        id="blockRef"\n        class="view-block"\n        @touchstart="handleMouseDown"\n        @mousedown="handleMouseDown"\n        style="left: {%=o.left%}px; top: {%=o.top%}px"\n      >\n        <img\n          id="smallImg"\n          style="width: {%=o.smallImageWidth%}px"\n          src="{%=o.smallUrl%}"\n        />\n      </div>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="bar">\n      <div id="slideTipsRef" class="placeholder" @click="handleExceptionRefresh"></div>\n      <div\n        id="slideBlockRef"\n        class="slide-block {%=o.slideBlockClass%}"\n        style="left:{%=o.left%}px"\n        @touchstart="handleMouseDown"\n        @mousedown="handleMouseDown"\n      >\n        <span id="slideIconRef" class="icon"></span>\n      </div>\n      <div id="maskRef" class="mask" style="width:{%=o.left%}px" />\n    </div>\n  </div>\n</div>\n';
            _('@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.slide-captcha-container .content .display {\n  margin-bottom: 20px;\n  position: relative;\n  background-color: rgba(216, 216, 216, 0.33);\n  overflow: hidden;\n}\n.slide-captcha-container .content .display,\n.slide-captcha-container .content .display > * {\n  -webkit-user-drag: none;\n  user-select: none;\n}\n.slide-captcha-container .content .display .loading-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -60px;\n  margin-top: -30px;\n  width: 120px;\n  height: 60px;\n  text-align: center;\n}\n.slide-captcha-container .content .display .loading-icon .icon-e {\n  font-size: 40px;\n  color: #d5d5d5;\n}\n.slide-captcha-container .content .display .loading-icon .icon-l {\n  display: inline-block;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA51BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uAAD93d3zS0v/8vLwFhbvCgrvBAT/9vb4jo73fn73eHjwGxv//v7/+vr92tr3hYX2amr1ZGT1YWH0TEzzQEDyMzPxKirwERH+7Oz91tb8zMz7v7/7urr7tbX5np7xIyP+4uL6sLD6q6v1Wlr0UVHzRkb5oKD2cXH0V1diGNV2AAAAI3RSTlMA39KRTQkG+fHv7OXi3dXFsZ2UcWhSPx4cFBIBu0VtbCdGuvm/TykAAAK6SURBVFjDxZkHdtswDEBpjXgk3ivyTAo5trx3vOKV3fb+52lrS21TkSBFVS//AP+RAgiQEOFgVOuZihKKhcOxkFLJ1KsGkUfXVAVcKKqmy9jKhXQEGETShbJH3UUuDijx3IWXvWYvgctlVnjnWgiECGlCumIKhEkV+b58FDwQzfOCoYJHVDQ4pSR4Jlli+64TIEHimuW7uQIprm4Y68N8uJG6xlICpEmUKPFNgg+S7lir4AvVlc/gk38yvBgFn0Q/nkL++W0s2oN+EzvXH+oL8Og8mj8ZbICN9sen8+vVwTwxx6qZThyywKV7FraxTWd/p6BAfZ6aZ8ZYDXeSMQd83m1hAxBydn+LA5+WLWyinevcCwvAZ2P72kPAKJyEaeCzt4UtQEmfciYCfCa2cAUoEd1Oai53tnABOJpgmRmubeGbQNFRgM/WtJkBjkKIAQL0HGEfOBjkFgRYOsJvwOGW1IDPk+mw3jbHu2Nvvni0BjNaktdIRnzHDtgHzZAKcOm0XC5mlldEgnw06QyoYQ6JFGs677QqS2LAo+8yITkUI2Hg8GKymICbME/YmbSZwjlNiG15s2/Cm8lmRdsyIyjDQ+9+8Kvg3yHCFjUoCtKTqEJ8hQojsS0R4Su4+cI4eqaI8Jl69OoSQqQD1klVWmgBhSox/u8KDUIUaeGW2gKIKi0c05uUJitcj+htVI9ICqeMRk/SksId4ypCCpLCB9ZlqRyXFLKucyQnJbQ6lAuncyWWEXbZV2KS9SxsL78il3aih5jCe5dq9b338jDCnxVEExFay9fJ83iEP3wcUqjQWs67h8YQUFLo43HtCPuz7v4JBIgW0eftsdVaTLu7EQiTD/gB7n9EEPwQw/+YJfhBkPyoKvBhmv9xX/ADSfmRacBD3eDHzvKDcf+j+8//uWBjVGt///6ocX9//AC2nLe96zxw0QAAAABJRU5ErkJggg==") no-repeat;\n  background-size: 100%;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 2px 8px rgba(200, 201, 204, 0.5);\n  border-radius: 50%;\n  position: relative;\n}\n.slide-captcha-container .content .display .loading-icon .icon-l::before {\n  content: " ";\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAnFBMVEX/qqruAADvAAD/GhrvAADvAADwAADvAADyBwfuAADuAADvAADvAADvAAD/JibvAADvAADvAADvAADwAADwAgLvBAT0Bgb1Cgr0Dg7/FhbvAADzBgbuAADvAADvAADvAADvAADvAADvAgLwAwPxAwPwAwP1CAjvAwPxBQX/EhLvAADvAADwAwPxAwP3CQnzDAz/VVXvAADvAgLuAACAwTkdAAAAM3RSTlMDw9IJ/PqEjCb38+qunAbB7t26lmhBLBkRC4ko5eHMtKWPfGJZTR9eNA2ek1NHHhUDyXBoC+/ZAAAC+ElEQVR42tzbaXLiMBAF4CfjJV7AGGMwhLAm7AzM9P3vNiRFWbYDhD+p4um7gcpWd6tbwi+L/SAcJePOdDdfHF5aoKWkzH7rzBbrBggp+c62mosXkFFyQxh1/4CIkjssLzuBhJL73txXUFDyo7/dI56fkgc40f7pI5mSx7SHfTy17ixtTqPYGjnyA39HEsX6WXc2SWy5zWkSZZdGbz/v+HKDPe2BSSNzlSPXRVxLATaH4ViucbwN2Ly6b3LF6B10Ttk2kO86RLu+MHif2FLnuwMQWqa+1CUfYNT3AqlLn75suerotqXGIimM6/J5KFUBYfj6svEcqWpy/l5ALzbk9wJWoVQEK5DKU1sqXLBaj6WiSdvXa3lSEbFueeCjLWVxDlZLJWXWk5/oH/+9EsZ6+OrvFa5Ba2lVVkL8TXIlJQnvPsFgIiUWb+xCayslMW8+AYZSEtHm+LN/UtIEsZUZFWT9m9BW9fV9EtCetD5tRbOYQ1drYsqGHyjRWHsrX3JLCgFx1QUs24ZsE3yIloLZUDTODvdFS0khoZw66G1iSKlS3iY+deSCJ4UOmLXGhqRFrG09++WbYpelUvDALNdTB4ftjsTN82IEarEUuD9JT88Zp6Cmk4nNnRU3oRmHRWCuAxfJ7cEbcl087kDN1bUjcYf+7Khv4AxBTQeuNvXxHX19v2sPaqkpdcrSLiIwwwuBO3QPtQtq7/rVBqgNdASmnjMAW0M6Q8j06yaad1pXnfRt9AzUXEO6EHjVUwZw08067lMJhqbkxIMp9dbAkYsQ3HSHi7ubUgrAC1DLTGkLNXxTMklHLmzq2Wi5U0d8l/bT3pTd3isWMgO1hm3GjBdIisMVuE2KsMV8j/ZsZkqR0i0WcgC1zJT42y8WMgc3x5DRFUaGTKphmZIRY7kYg1skF8n/9uzYBmAQiqGgUyZSlCYlBTuw/240iB0+upvC8kttfSwttb2nHCm7JT6pbY+tO7X91/IFAAAAAAAAAAAAAAAAAAAAAAAAkgm4GR+RayV+hQAAAABJRU5ErkJggg==") no-repeat;\n  background-size: 100%;\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  z-index: 0;\n  animation: rotate 1s infinite linear;\n}\n.slide-captcha-container .content .display .loading-icon .tip {\n  color: #999;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.slide-captcha-container .content .display .refresh {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAMAAACl6XjsAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMACfXuEQXmc0ca2pPp1cutmIMmjolpQDYrt32ln1E0ZCFfBh5hAAABM0lEQVQ4y6WUa3eDIAyGA0QFra3zVu1t8///yZmso3iUZce+X+CEBwi5ALul6sGpP4mkL0o9zdLl7R5DsTVTIN24rbsyD3mwowWaecod/WKe69/5iEvskbL5UFnkTfamfwx9iD3YaLLAbewM2+oX5visE8JCbiRr7jHFfn3ASheyeyx7UmsVAYaGbtyO9/jCWvIUV8gUiHbQYRlIWE/hURLGblYgYuU8WBBFCVAipSjbIKqmhOzApEvff4IckPO1GyAaXla4bOcxTaI9mfJlPvURdfRCdr3xhbSWosMaEMoSTnQYglDkfkVumSM/L96AeOVG/QpiqLnFsyRw/pP36n4Ra7ZNaWUVM7Y9sMGcgbX+akxZMsJ+1f/5uC5bycFmAZrWxRJoi+fflhd3obhwGBD26RvNAzMZ4SEYUAAAAABJRU5ErkJggg==") no-repeat;\n  background-size: 100%;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.slide-captcha-container .content .display img {\n  display: block;\n  width: 100%;\n  pointer-events: none;\n}\n.slide-captcha-container .content .display .view-block {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n}\n.slide-captcha-container .content .control {\n  height: 44px;\n}\n.slide-captcha-container .content .control .bar {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.slide-captcha-container .content .control .bar .placeholder {\n  border: 1px solid #e5e5e5;\n  height: 100%;\n  text-align: center;\n  line-height: 44px;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  border-radius: 2px;\n  user-select: none;\n}\n.slide-captcha-container .content .control .bar .slide-block {\n  position: absolute;\n  background: #38f;\n  border-radius: 2px;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 100%;\n  display: table;\n  cursor: pointer;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  text-align: center;\n  transition: left 0.2s ease-out 0s;\n}\n.slide-captcha-container .content .control .bar .slide-block--arrow {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAPRJREFUSA1jYBhO4P///2oD5h+g5dVA/BuIA+juCKClLUAMAz+BDA+6OQJomSEQ/4XZDqW/A2lHejoiAWjhPzRHfAHyrenpiAw0B4C4H4HYhJ6OKMTiiLdAMT16OqIKiyNeAcU06emIZiyOeAYUU6GnI3qwOOIhUEyeno6YisURd4BiUjBHMIIUwDh0pG8A7bJnZGR8NVAOAPn1MhA7MIFYAwkGygGgKHABRsE7mnoemLwIJkKaOQBo+cBlQ6DlA1cQAS0fuKIYaPnAVUZAyweuOgZaPnANEqDlg6JJNnCNUlhBAgyJgWuWIzli4DomMEeQSgMAYqr1SM/RM9IAAAAASUVORK5CYII=");\n  background-size: 18px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon {\n  display: table-cell;\n  vertical-align: middle;\n  color: #fff;\n  font-size: 18px;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon.arrow::before {\n  content: " ";\n  display: inline-block;\n  width: 18px;\n  height: 20px;\n  background: no-repeat center 3px url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAPRJREFUSA1jYBhO4P///2oD5h+g5dVA/BuIA+juCKClLUAMAz+BDA+6OQJomSEQ/4XZDqW/A2lHejoiAWjhPzRHfAHyrenpiAw0B4C4H4HYhJ6OKMTiiLdAMT16OqIKiyNeAcU06emIZiyOeAYUU6GnI3qwOOIhUEyeno6YisURd4BiUjBHMIIUwDh0pG8A7bJnZGR8NVAOAPn1MhA7MIFYAwkGygGgKHABRsE7mnoemLwIJkKaOQBo+cBlQ6DlA1cQAS0fuKIYaPnAVUZAyweuOgZaPnANEqDlg6JJNnCNUlhBAgyJgWuWIzli4DomMEeQSgMAYqr1SM/RM9IAAAAASUVORK5CYII=);\n  background-size: 100%;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon.error::before {\n  content: " ";\n  display: inline-block;\n  width: 18px;\n  height: 20px;\n  background: no-repeat center 3px url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAABI0lEQVRYCe2XAQrDIAxFZUfaXcbuf4GdYMPli4EsOJtER1umINZqXr4x2JrSKisC/xSBnPOV6m3WmsECM8SrYh7UPqneQxBhBEZlgekTBQOqMOQyJIogLIZ5PlFkhdBChCwhUQTQYsAEy5cKHZB5+2YwxK6nNAIcsf0QoTsRcMRG++32PQ48c7tOtwYtjixztvy4xnsOe2MuJ97JXxy/6D2qLKFjwqunzCevrbNlHzG8gipKRwWi8M58VjGP2ws/nLqt0dGfFkSHy+75s09S0/JbyVyi0Rv7STpYHFrmTBHnceSZGxIXcRCxMYkbAY/YNsXNAM5gFHEEOtYvLAk61k8+wiRETTl1xfb5bhwyoaoo3+1AAtQz8eIXRcVa3RWB00TgDeeCXVcQJSDYAAAAAElFTkSuQmCC);\n  background-size: 100%;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon.success::before {\n  content: " ";\n  display: inline-block;\n  width: 18px;\n  height: 20px;\n  background: no-repeat center 3px url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAABGElEQVRYCe2UyQ3CMBBFuVAEDeTEgUbYGmAvAppCNEEP3KiAAkCC8CZiUBQ5IYuxWTzSz0Rexs/fTlqtEMGB4MCPOhDHcfQxWwNmjC5o7R0qBcNrEhtvUCyvzjxYknTl2XUOxaIjJMeUDoGZ/D3MEBdMzkx9OBNgjK5zRHnOzIwT3tloHYaCPbRHnargzBkg0wWu5wzFBOaEJA6oNBRjBeaM0iH/mdowEZMVRouWgmKwXRg5Goq20U5JUrkQinF9ZHJmLnUbBYUrQeXA3GhvDqM7KQtVALPQWtbyKyinMLqrAqgjfdk7I8dk3xmF0VwARdcz3MCUhBKYpY51llnU9PX5gdFdZ6D8wmSgtsCttC3k4EBw4NscuAO6Cg6c6rGw9AAAAABJRU5ErkJggg==);\n  background-size: 100%;\n}\n.slide-captcha-container .content .control .bar .mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  border: 1px solid rgba(51, 136, 255, 0.3);\n  height: 100%;\n  box-sizing: border-box;\n  background: rgba(51, 136, 255, 0.16);\n  border-right: 0;\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  transition: width 0.2s ease-out 0s;\n}\n.slide-captcha-container .content .control .bar.slide .slide-block {\n  transition: none;\n}\n.slide-captcha-container .content .control .bar.slide .mask {\n  transition: none;\n}\n.slide-captcha-container .content .control .bar.failed .slide-block {\n  background: #df4545;\n}\n.slide-captcha-container .content .control .bar.failed .mask {\n  border: 1px solid rgba(223, 69, 69, 0.4);\n  border-right: 0;\n  background: rgba(223, 69, 69, 0.1);\n}\n.slide-captcha-container .content .control .bar.success .slide-block {\n  background: #2da641;\n}\n.slide-captcha-container .content .control .bar.success .mask {\n  border: 1px solid rgba(45, 166, 65, 0.4);\n  border-right: 0;\n  background: rgba(45, 166, 65, 0.08);\n}\n.slide-captcha-container .content .control .bar.limit .slide-block,\n.slide-captcha-container .content .control .bar.exception .slide-block {\n  display: none;\n}\n.slide-captcha-container .content .control .bar.limit .placeholder,\n.slide-captcha-container .content .control .bar.exception .placeholder {\n  color: #df4545;\n  border: 1px solid rgba(223, 69, 69, 0.4);\n  background: rgba(223, 69, 69, 0.1);\n  cursor: pointer;\n}\n.slide-captcha-container .content .control .bar.limit .mask,\n.slide-captcha-container .content .control .bar.exception .mask {\n  display: none;\n}\n.slide-captcha-container .content .control .bar.limit .icon,\n.slide-captcha-container .content .control .bar.exception .icon {\n  margin-right: 10px;\n}');
            var pt = function(t) {
                L(n, lt);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(n);
                function n() {
                    var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bgWhScale: 280 / 158,
                        initLeft: 30
                    };
                    return R(this, n),
                    (t = e.call(this, r)).html = ft,
                    t.state = {
                        left: t.props.initLeft,
                        top: 0,
                        bigUrl: "",
                        smallUrl: "",
                        token: "",
                        scale: 1,
                        smallImageWidth: 1,
                        status: "loading",
                        bgHeight: 158
                    },
                    t._render(),
                    t
                }
                return j(n, [{
                    key: "render",
                    value: function() {
                        this.slideBlockElm = this.elm.querySelector("#slideBlockRef"),
                        this.blockElm = this.elm.querySelector("#blockRef"),
                        this.maskElm = this.elm.querySelector("#maskRef"),
                        this.slideIconElm = this.elm.querySelector("#slideIconRef"),
                        this.slideTipsElm = this.elm.querySelector("#slideTipsRef"),
                        this.statusElm = this.elm.querySelector("#statusRef"),
                        this.slidePicElm = this.elm.querySelector("#slidePicRef"),
                        this.updateSlideIcon(),
                        this.updateViewMode()
                    }
                }, {
                    key: "status",
                    set: function(t) {
                        this.state.status = t,
                        this.render()
                    }
                }, {
                    key: "left",
                    set: function(t) {
                        this.state.left = t,
                        this.slideBlockElm.style.left = "".concat(t, "px"),
                        this.blockElm.style.left = "".concat(t, "px"),
                        this.maskElm.style.width = "".concat(t, "px")
                    }
                }, {
                    key: "slideViewData",
                    set: function(t) {
                        var e = this.elm.getBoundingClientRect().width
                          , n = e / t.bigImageWidth;
                        Object.assign(this.state, {
                            scale: n,
                            smallImageWidth: t.smallImageWidth * n,
                            top: Math.ceil(t.cy * n),
                            bigUrl: t.bigUrl,
                            smallUrl: t.smallUrl,
                            left: this.props.initLeft,
                            bgHeight: e / this.props.bgWhScale,
                            status: "ready"
                        }),
                        this.render()
                    }
                }, {
                    key: "updateSlideIcon",
                    value: function() {
                        var t = this
                          , e = "arrow"
                          , n = "加载中";
                        switch (this.state.status) {
                        case "ready":
                            n = "向右拖动滑块填充拼图";
                            break;
                        case "failed":
                            e = "error",
                            n = "验证失败";
                            break;
                        case "success":
                            e = "success",
                            n = "验证成功";
                            break;
                        case "limit":
                            n = "失败过多，点此重试";
                            break;
                        case "exception":
                            n = "加载失败，请重试"
                        }
                        this.slideIconElm.className = "icon ".concat(e),
                        this.slideTipsElm.innerText = n,
                        this.maskElm.style.width = "".concat(this.state.left, "px"),
                        this.slideBlockElm.style.left = "".concat(this.state.left, "px"),
                        this.slideBlockElm.parentElement.className = "bar ".concat(this.state.status),
                        setTimeout((function() {
                            t.slideBlockElm.parentElement.className = "bar ".concat(t.state.status, " slide")
                        }
                        ), 1e3)
                    }
                }, {
                    key: "updateViewMode",
                    value: function() {
                        if (-1 !== ["loading", "exception"].indexOf(this.state.status))
                            this.statusElm.style.display = "block",
                            this.slidePicElm.style.display = "none";
                        else {
                            this.statusElm.style.display = "none",
                            this.slidePicElm.style.display = "block",
                            this.slidePicElm.querySelector("#bigImg").src = this.state.bigUrl;
                            var t = this.slidePicElm.querySelector("#smallImg");
                            t.src = this.state.smallUrl,
                            t.style.width = "".concat(this.state.smallImageWidth, "px"),
                            this.blockElm.style.left = "".concat(this.state.left, "px"),
                            this.blockElm.style.top = "".concat(this.state.top, "px")
                        }
                    }
                }, {
                    key: "handleRefresh",
                    value: function() {
                        this.emit("needCaptchaData")
                    }
                }, {
                    key: "handleMouseDown",
                    value: function(t) {
                        var e = this
                          , n = this.elm.getBoundingClientRect()
                          , r = n.left
                          , i = n.top
                          , o = n.width
                          , a = this.slideBlockElm.getBoundingClientRect().width
                          , s = t;
                        "touchstart" === t.type && (s = t.touches[0]);
                        var c = s
                          , u = c.pageX
                          , l = c.pageY
                          , h = [];
                        h.push({
                            x: u,
                            y: l,
                            t: Date.now()
                        }),
                        function(t) {
                            var e = function() {}
                              , n = function() {};
                            if ("touchstart" === t.type) {
                                t.preventDefault();
                                var r = function(t) {
                                    var n = t.touches[0];
                                    n && e(n.pageX, n.pageY)
                                };
                                window.addEventListener("touchmove", r, !0),
                                window.addEventListener("touchend", (function t(e) {
                                    var i = e.changedTouches[0];
                                    i && n(i.pageX, i.pageY),
                                    window.removeEventListener("touchmove", r, !0),
                                    window.removeEventListener("touchend", t, !0)
                                }
                                ), !0)
                            } else {
                                var i = function(t) {
                                    e(t.pageX, t.pageY)
                                };
                                window.addEventListener("mousemove", i, !1),
                                window.addEventListener("mouseup", (function t(e) {
                                    n(e.pageX, e.pageY),
                                    window.removeEventListener("mousemove", i, !1),
                                    window.removeEventListener("mouseup", t, !1)
                                }
                                ), !1)
                            }
                            return {
                                change: function(t) {
                                    return e = t,
                                    this
                                },
                                end: function(t) {
                                    n = t
                                }
                            }
                        }(t).change((function(t, n) {
                            h.length < 300 && (h.push({
                                x: t,
                                y: n,
                                t: Date.now()
                            }),
                            e.left = Math.min(e.props.initLeft + Math.max(0, t - u), o - a))
                        }
                        )).end((function() {
                            if (!(h.length < 5)) {
                                var t = [];
                                h.map((function(t) {
                                    var e = t.x
                                      , n = t.y
                                      , o = t.t;
                                    return {
                                        x: e - r,
                                        y: n - i,
                                        t: o
                                    }
                                }
                                )).reduce((function(e, n, r) {
                                    return 1 === r && t.push({
                                        mx: Math.ceil(e.x),
                                        my: Math.ceil(e.y),
                                        ts: e.t
                                    }),
                                    t.push({
                                        mx: Math.ceil(n.x - e.x),
                                        my: Math.ceil(n.y - e.y),
                                        ts: Math.ceil(n.t - e.t)
                                    }),
                                    n
                                }
                                )),
                                e.emit("complete", {
                                    userDataList: t,
                                    left: e.state.left,
                                    top: e.state.top,
                                    scale: e.state.scale
                                })
                            }
                        }
                        ))
                    }
                }]),
                n
            }();
            function dt() {
                this.token = "",
                this.onSuccess,
                this.onFail,
                this.onCancel,
                this.now = Date.now()
            }
            dt.prototype.getPageExposureTime = function() {
                return {
                    start: this.now,
                    now: Date.now()
                }
            }
            ,
            dt.prototype.startVerify = function() {}
            ,
            dt.prototype.submitUserData = function() {}
            ;
            var gt = function(t) {
                L(i, dt);
                var e, n, r = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(i);
                function i(t) {
                    var e, n, o;
                    return R(this, i),
                    (e = r.call(this)).initLeft = 14,
                    e.bg_W_H_Scale = 280 / 158,
                    e.component = t,
                    e.initComAndEventHandler({
                        complete: (o = H(K.mark((function t(n) {
                            return K.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        e.submitUserData(n);
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        ))),
                        function(t) {
                            return o.apply(this, arguments)
                        }
                        ),
                        fail: function() {
                            return e.onFail()
                        },
                        cancel: function() {
                            e.onCancel(),
                            e.closeSlideCaptcha()
                        },
                        needCaptchaData: (n = H(K.mark((function t() {
                            return K.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                        t.next = 3,
                                        e.refreshSlideCaptcha();
                                    case 3:
                                        e.slideViewData = t.sent,
                                        t.next = 8;
                                        break;
                                    case 6:
                                        t.prev = 6,
                                        t.t0 = t.catch(0);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[0, 6]])
                        }
                        ))),
                        function() {
                            return n.apply(this, arguments)
                        }
                        )
                    }),
                    e
                }
                return j(i, [{
                    key: "initComAndEventHandler",
                    value: function(t) {
                        t.complete,
                        t.fail,
                        t.cancel,
                        t.needCaptchaData
                    }
                }, {
                    key: "status",
                    get: function() {
                        return this._status
                    },
                    set: function(t) {
                        this._status = t,
                        this.setStatus(t)
                    }
                }, {
                    key: "slideViewData",
                    set: function(t) {}
                }, {
                    key: "setStatus",
                    value: function(t) {}
                }, {
                    key: "closeSlideCaptcha",
                    value: function() {
                        this.hide()
                    }
                }, {
                    key: "hide",
                    value: function() {}
                }, {
                    key: "startVerify",
                    value: function(t) {
                        t.token,
                        t.onSuccess,
                        t.onFail
                    }
                }, {
                    key: "show",
                    value: function(t) {}
                }, {
                    key: "submitUserData",
                    value: (n = H(K.mark((function t(e) {
                        return K.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))),
                    function(t) {
                        return n.apply(this, arguments)
                    }
                    )
                }, {
                    key: "refreshSlideCaptcha",
                    value: (e = H(K.mark((function t() {
                        return K.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))),
                    function() {
                        return e.apply(this, arguments)
                    }
                    )
                }]),
                i
            }()
              , mt = {
                TENCENT: 0,
                SLIDE: 1,
                CLICK: 2,
                NUMBER: -1
            };
            var vt = mt
              , yt = function(t) {
                L(i, gt);
                var e, n, r = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(i);
                function i() {
                    return R(this, i),
                    r.call(this)
                }
                return j(i, [{
                    key: "startVerify",
                    value: function(t) {
                        var e = t.token
                          , n = t.onSuccess
                          , r = t.onFail
                          , i = t.onCancel
                          , o = t.bizType
                          , a = t.bizData;
                        this.token = e,
                        this.onSuccess = n,
                        this.onFail = r,
                        this.onCancel = i,
                        this.bizType = o,
                        this.bizData = a,
                        this.show()
                    }
                }, {
                    key: "submitUserData",
                    value: (n = H(K.mark((function t(e) {
                        var n, r, i, o, a, s, c, u, l = this;
                        return K.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = e.userDataList,
                                    r = e.scale,
                                    i = e.left,
                                    o = e.top,
                                    t.prev = 1,
                                    t.next = 4,
                                    Q({
                                        url: it,
                                        method: "POST",
                                        withCredentials: !0,
                                        data: {
                                            token: this.token,
                                            bizType: this.bizType,
                                            bizData: this.bizData,
                                            captchaType: vt.SLIDE,
                                            userBehaviorData: tt({
                                                cx: Math.ceil(i),
                                                cy: Math.ceil(o),
                                                scale: r,
                                                slidingEvents: n
                                            })
                                        },
                                        options: {
                                            rawResponse: !0
                                        }
                                    });
                                case 4:
                                    a = t.sent,
                                    s = a.code,
                                    c = a.data,
                                    u = a.msg,
                                    0 === s && c.success ? (this.status = "success",
                                    setTimeout((function() {
                                        l.hide(),
                                        l.onSuccess()
                                    }
                                    ), 500)) : c ? c.captchaType === vt.SLIDE ? c && c.needRefresh ? this.status = "limit" : (this.status = "failed",
                                    setTimeout(H(K.mark((function t() {
                                        return K.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    l.refreshSlideCaptcha();
                                                case 2:
                                                    l.slideViewData = t.sent;
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ))), 500)) : this.onFail(c) : this.onFail(u),
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(1),
                                    this.onFail("网络错误，请稍候再试");
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 9]])
                    }
                    ))),
                    function(t) {
                        return n.apply(this, arguments)
                    }
                    )
                }, {
                    key: "refreshSlideCaptcha",
                    value: (e = H(K.mark((function t() {
                        var e, n = this;
                        return K.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.status = "loading",
                                    t.prev = 1,
                                    t.next = 4,
                                    Q({
                                        url: ot,
                                        method: "GET",
                                        withCredentials: !0,
                                        data: {
                                            token: this.token,
                                            captchaType: vt.SLIDE
                                        },
                                        options: {
                                            rawResponse: !0
                                        }
                                    });
                                case 4:
                                    return e = t.sent,
                                    t.abrupt("return", new Promise((function(t) {
                                        var r = e.code
                                          , i = e.data
                                          , o = e.msg;
                                        if (0 === r) {
                                            var a = i.captchaObtainInfoResult
                                              , s = new Image
                                              , c = new Image;
                                            Promise.all([new Promise((function(t) {
                                                s.onload = function() {
                                                    t()
                                                }
                                            }
                                            )), new Promise((function(t) {
                                                c.onload = function() {
                                                    t()
                                                }
                                            }
                                            ))]).then((function() {
                                                t({
                                                    cy: a.cy,
                                                    bigUrl: a.bigUrl,
                                                    smallUrl: a.smallUrl,
                                                    token: a.token,
                                                    bigImageWidth: s.width,
                                                    smallImageWidth: c.width
                                                })
                                            }
                                            )),
                                            s.src = a.bigUrl,
                                            c.src = a.smallUrl
                                        } else
                                            void 0 !== i.captchaType ? n.onFail(i) : o && (n.status = "exception",
                                            n.onFail(o))
                                    }
                                    )));
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t.catch(1),
                                    this.onFail("网络错误，请稍候再试");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 8]])
                    }
                    ))),
                    function() {
                        return e.apply(this, arguments)
                    }
                    )
                }]),
                i
            }();
            var bt = function(t) {
                L(n, yt);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(n);
                function n() {
                    return R(this, n),
                    e.apply(this, arguments)
                }
                return j(n, [{
                    key: "initComAndEventHandler",
                    value: function(t) {
                        var e = t.complete
                          , n = t.fail
                          , r = t.cancel
                          , i = t.needCaptchaData;
                        this.container = new ht({
                            eventHandler: {
                                cancel: r
                            }
                        }),
                        this.content = new pt({
                            initLeft: this.initLeft,
                            bgWhScale: this.bg_W_H_Scale,
                            eventHandler: {
                                needCaptchaData: i,
                                complete: e,
                                fail: n
                            }
                        }),
                        this.container.slot = this.content.elm,
                        this.hide(),
                        document.body.appendChild(this.container.elm)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.container.elm.firstChild.classList.add("hide")
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        this.container.elm.firstChild.classList.remove("hide"),
                        this.refreshSlideCaptcha().then((function(e) {
                            t.slideViewData = e
                        }
                        ))
                    }
                }, {
                    key: "setStatus",
                    value: function(t) {
                        this.content.status = t
                    }
                }, {
                    key: "slideViewData",
                    set: function(t) {
                        this.content.slideViewData = t
                    }
                }]),
                n
            }();
            function At() {
                dt.prototype.constructor.call(this),
                this.gyroscopeTrack = [],
                this.speedTrack = []
            }
            function wt() {
                dt.prototype.constructor.call(this),
                this.mouseTrackData = [],
                this.mouseData = {},
                this.clickAreaData = []
            }
            function Et() {
                dt.prototype.constructor.call(this),
                this.touchData = {}
            }
            At.prototype.handlerGyroscope = function(t) {
                var e = t.x
                  , n = t.y
                  , r = t.z;
                this.gyroscopeTrack.push({
                    x: e,
                    y: n,
                    z: r,
                    t: Date.now()
                })
            }
            ,
            At.prototype.handlerSpeed = function(t) {
                var e = t.x
                  , n = t.y
                  , r = t.z;
                this.speedTrack.push({
                    x: e,
                    y: n,
                    z: r,
                    t: Date.now()
                })
            }
            ,
            At.prototype.getAndClearGyroscopeTrack = function() {
                var t = this.gyroscopeTrack;
                return this.gyroscopeTrack = [],
                t
            }
            ,
            At.prototype.getAndClearSpeedTrack = function() {
                var t = this.speedTrack;
                return this.speedTrack = [],
                t
            }
            ,
            At.prototype.startRecordGyroscopeTrack = function() {}
            ,
            At.prototype.startRecordSpeedTrack = function() {}
            ,
            wt.prototype.handlerMousemove = function(t) {
                this.mouseTrackData.push({
                    x: t.pageX,
                    y: t.pageY,
                    t: Date.now()
                })
            }
            ,
            wt.prototype.getAndClearMouseTrack = function() {
                var t = this.mouseTrackData;
                this.mouseTrackData = [];
                var e = [];
                return Array.isArray(t) && 0 !== t.length ? (t.reduce((function(t, n, r) {
                    return 1 === r && e.push(t),
                    e.push({
                        x: Math.ceil(n.x - t.x),
                        y: Math.ceil(n.y - t.y),
                        t: Math.ceil(n.t - t.t)
                    }),
                    n
                }
                )),
                e) : e
            }
            ,
            wt.prototype.startRecordClickArea = function() {
                var t = this;
                window.addEventListener("click", (function(e) {
                    if (Array.isArray(e.path)) {
                        for (var n, r = e.path, i = []; n = r.pop(); )
                            "function" == typeof n.getBoundingClientRect && i.push(JSON.parse(JSON.stringify(n.getBoundingClientRect())));
                        var o = window.innerHeight
                          , a = window.innerWidth;
                        i.push({
                            bottom: o,
                            height: o,
                            left: 0,
                            right: a,
                            top: 0,
                            width: a,
                            x: 0,
                            y: 0
                        }),
                        t.clickAreaData = i.reverse()
                    }
                }
                ), !0)
            }
            ,
            wt.prototype.startRecordClick = function() {
                var t = this;
                window.addEventListener("mousedown", (function(e) {
                    t.mouseData.down = {
                        x: e.pageX,
                        y: e.pageY,
                        t: Date.now()
                    }
                }
                ), !0),
                window.addEventListener("mouseup", (function(e) {
                    t.mouseData.up = {
                        x: e.pageX,
                        y: e.pageY,
                        t: Date.now()
                    }
                }
                ), !0)
            }
            ,
            wt.prototype.startRecordMouseTrack = function() {
                window.addEventListener("mousemove", this.handlerMousemove.bind(this), !0)
            }
            ,
            Et.prototype.startRecordTouchStart = function(t) {
                for (var e = [], n = 0, r = t.touches.length; n < r; n++) {
                    var i = t.touches[n];
                    e.push({
                        x: i.pageX,
                        y: i.pageY,
                        force: i.force
                    })
                }
                this.touchData.down = {
                    touches: e,
                    t: Date.now()
                }
            }
            ,
            Et.prototype.startRecordTouchEnd = function(t) {
                for (var e = [], n = 0, r = t.changedTouches.length; n < r; n++) {
                    var i = t.changedTouches[n];
                    e.push({
                        x: i.pageX,
                        y: i.pageY,
                        force: i.force
                    })
                }
                this.touchData.up = {
                    touches: e,
                    t: Date.now()
                }
            }
            ;
            var xt, kt, St, Tt = mt, Ct = function(t) {
                L(r, dt);
                var e, n = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(r);
                function r() {
                    var t;
                    return R(this, r),
                    t = n.call(this),
                    At.prototype.constructor.call(N(t)),
                    wt.prototype.constructor.call(N(t)),
                    Et.prototype.constructor.call(N(t)),
                    t.startRecordTouch(),
                    t.startRecordGyroscopeTrack(),
                    t.startRecordSpeedTrack(),
                    t.startRecordClickArea(),
                    t.startRecordClick(),
                    t.startRecordMouseTrack(),
                    t
                }
                return j(r, [{
                    key: "startRecordGyroscopeTrack",
                    value: function() {
                        var t = this;
                        window.addEventListener("deviceorientation", (function(e) {
                            t.handlerGyroscope({
                                y: e.gamma,
                                x: e.beta,
                                z: e.alpha
                            })
                        }
                        ), !0)
                    }
                }, {
                    key: "startRecordSpeedTrack",
                    value: function() {
                        var t = this;
                        window.addEventListener("devicemotion", (function(e) {
                            var n = e.acceleration || e.accelerationIncludingGravity || {}
                              , r = n.x
                              , i = n.y
                              , o = n.z;
                            r === i && r === o && void 0 === r || t.handlerSpeed({
                                x: r,
                                y: i,
                                z: o
                            })
                        }
                        ), !0)
                    }
                }, {
                    key: "startRecordTouch",
                    value: function() {
                        var t = this;
                        window.addEventListener("touchstart", (function(e) {
                            t.startRecordTouchStart(e)
                        }
                        ), !0),
                        window.addEventListener("touchend", (function(e) {
                            t.startRecordTouchEnd(e)
                        }
                        ), !0)
                    }
                }, {
                    key: "startVerify",
                    value: function(t) {
                        var e = t.token
                          , n = t.onSuccess
                          , r = t.onFail
                          , i = t.bizType
                          , o = t.bizData;
                        this.token = e,
                        this.onSuccess = n,
                        this.onFail = r,
                        this.bizType = i,
                        this.bizData = o;
                        var a = {
                            clickAreaData: this.clickAreaData,
                            pageExposureTime: this.getPageExposureTime()
                        };
                        D.isMobile() ? Object.assign(a, {
                            touchData: this.touchData,
                            gyroscopeTrack: this.getAndClearGyroscopeTrack(),
                            speedTrack: this.getAndClearSpeedTrack()
                        }) : Object.assign(a, {
                            mouseTrackData: this.getAndClearMouseTrack(),
                            mouseData: this.mouseData
                        }),
                        this.submitUserData(a)
                    }
                }, {
                    key: "submitUserData",
                    value: (e = H(K.mark((function t(e) {
                        var n, r, i, o;
                        return K.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    Q({
                                        url: it,
                                        method: "POST",
                                        data: {
                                            token: this.token,
                                            bizType: this.bizType,
                                            bizData: this.bizData,
                                            captchaType: Tt.CLICK,
                                            userBehaviorData: tt(e)
                                        },
                                        options: {
                                            rawResponse: !0
                                        },
                                        withCredentials: !0
                                    });
                                case 3:
                                    n = t.sent,
                                    r = n.code,
                                    i = n.data,
                                    0 === r && (o = i.captchaType,
                                    i.success ? this.onSuccess() : this.onFail({
                                        captchaType: o
                                    })),
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t.catch(0),
                                    this.onFail("网络错误，请稍候再试");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 8]])
                    }
                    ))),
                    function(t) {
                        return e.apply(this, arguments)
                    }
                    )
                }]),
                r
            }();
            xt = Ct,
            kt = Object.assign({}, At.prototype, wt.prototype, Et.prototype),
            St = Object.getOwnPropertyNames(xt.prototype),
            Object.keys(kt).forEach((function(t) {
                -1 === St.indexOf(t) && (xt.prototype[t] = kt[t])
            }
            ));
            var Ot = function(t) {
                L(n, Ct);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(n);
                function n() {
                    return R(this, n),
                    e.call(this)
                }
                return n
            }();
            var Dt = new (function(t) {
                L(n, at);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = z(t);
                        if (e) {
                            var i = z(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return P(this, n)
                    }
                }(n);
                function n() {
                    var t;
                    return R(this, n),
                    (t = e.call(this)).slideCaptcha = new bt,
                    t.clickOrTouch = new Ot,
                    t
                }
                return j(n, [{
                    key: "errorTip",
                    value: function(t) {
                        !function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3
                              , n = "behavior-verify-web-toast-container"
                              , r = document.getElementById(n);
                            r || ((r = document.createElement("div")).id = n,
                            document.body.appendChild(r)),
                            r.innerText = t,
                            r.classList.add("show"),
                            clearTimeout(void 0),
                            setTimeout((function() {
                                r.classList.remove("show")
                            }
                            ), e)
                        }(t)
                    }
                }]),
                n
            }());
            var _t = function(t) {
                return f()({
                    url: "https://account.youzan.com/api/captcha/sms/check.json",
                    method: "POST",
                    data: t,
                    withCredentials: !0
                })
            };
            function Rt(t) {
                var e = Object(r.useState)(0)
                  , n = e[0]
                  , a = e[1]
                  , s = Object(r.useRef)()
                  , c = Object(r.useCallback)((function(t, e) {
                    return n > 0 || ("+86" !== e ? !t : !/^1\d{10}/.test(t))
                }
                ), [n])
                  , u = Object(r.useCallback)((function(e, n) {
                    var r, s = e.mobile, c = e.countryCode, u = e.customAjax, l = u ? u(n) : (r = {
                        ticket: n,
                        mobile: s,
                        countryCode: c,
                        behaviorBizType: t.bizType,
                        platform: t.platform || "pc",
                        subFrom: t.subFrom || t.biz,
                        biz: t.biz
                    },
                    f()({
                        url: "https://account.youzan.com/api/captcha/sms/send.json",
                        method: "GET",
                        data: r,
                        withCredentials: !0
                    }));
                    return new Promise((function(t, e) {
                        l.then((function() {
                            a(60),
                            t()
                        }
                        )).catch((function(t) {
                            if (135900032 === t.code)
                                return o.Sweetalert.alert({
                                    title: "提示",
                                    closeBtn: !0,
                                    content: i.a.createElement("p", null, t.msg),
                                    confirmText: "我知道了"
                                });
                            e(t)
                        }
                        ))
                    }
                    ))
                }
                ), [t.bizType, t.platform, t.subFrom, t.bizType])
                  , l = Object(r.useCallback)((function(e) {
                    var n = e.countryCode
                      , r = void 0 === n ? "+86" : n
                      , i = e.mobile;
                    return c(i, r) ? Promise.reject({
                        code: "10001"
                    }) : new Promise((function(n, i) {
                        !function(t) {
                            var e = t.onSuccess
                              , n = t.onFail
                              , r = t.onCancel
                              , i = t.bizType
                              , o = t.bizData;
                            Dt.check({
                                bizType: i,
                                bizData: o,
                                onSuccess: e,
                                onFail: n,
                                onCancel: r
                            })
                        }({
                            bizType: t.bizType,
                            onSuccess: function(t) {
                                u(p(p({}, e), {
                                    countryCode: r
                                }), t).then(n).catch(i)
                            },
                            onFail: i
                        })
                    }
                    ))
                }
                ), [c]);
                return Object(r.useEffect)((function() {
                    n > 0 && (s.current = setTimeout((function() {
                        a(n - 1)
                    }
                    ), 1e3))
                }
                ), [n]),
                Object(r.useEffect)((function() {
                    return function() {
                        s.current && clearTimeout(s.current)
                    }
                }
                ), [s]),
                {
                    countdown: n,
                    sendCaptcha: l
                }
            }
            function Bt(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0]
                      , i = document.createElement("style");
                    i.type = "text/css",
                    "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i),
                    i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
                }
            }
            Bt(".account-captcha {\n  position: relative;\n  margin-top: 32px;\n}\n.account-captcha__input {\n  height: 48px !important;\n  max-height: 48px;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n.account-captcha__input .zent-input {\n  padding: 0 !important;\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  font-size: 16px !important;\n  border-radius: 0;\n  border-bottom: 1px solid #dcdee0 !important;\n}\n.account-captcha__input .zent-input:focus {\n  border: 0 !important;\n  outline: none !important;\n  border-bottom: 1px solid #155bd4 !important;\n}\n.account-captcha__input--error .zent-input {\n  border-bottom: 1px solid #d40000 !important;\n}\n.account-captcha__btn {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 16px;\n  color: #155bd4;\n  cursor: pointer;\n}\n.account-captcha__btn--disable {\n  color: #969799;\n  cursor: not-allowed;\n}\n.account-captcha__warn {\n  position: absolute;\n  right: 0;\n  bottom: -22px;\n  font-size: 14px;\n  color: #969799;\n}\n.account-captcha__warn--error {\n  color: #d40000;\n}\n.account-captcha__warn > a {\n  color: #155bd4;\n  cursor: pointer;\n}");
            var jt = i.a.forwardRef((function(t, e) {
                var n = Rt({
                    biz: t.value.biz,
                    bizType: t.value.bizType
                })
                  , o = n.countdown
                  , c = n.sendCaptcha
                  , u = Object(r.useState)(!1)
                  , l = u[0]
                  , h = u[1]
                  , f = function() {
                    var t = Object(r.useState)(0)
                      , e = t[0]
                      , n = t[1]
                      , i = Object(r.useRef)();
                    Object(r.useEffect)((function() {
                        return clearTimeout(i.current),
                        e > 0 && (i.current = window.setTimeout((function() {
                            n(e - 1 >= 0 ? e - 1 : 0)
                        }
                        ), 1e3)),
                        function() {
                            clearTimeout(i.current)
                        }
                    }
                    ), [e]);
                    return {
                        count: e,
                        startCountDown: function(t) {
                            n(t)
                        }
                    }
                }()
                  , m = f.count
                  , y = f.startCountDown
                  , b = Object(r.useMemo)((function() {
                    return o || m
                }
                ), [o, m])
                  , A = Object(r.useMemo)((function() {
                    var e = t.value
                      , n = e.mobile
                      , r = e.countryCode;
                    return b > 0 || ("+86" !== r ? !n : !/^1\d{10}/.test(n))
                }
                ), [b, t.value])
                  , w = Object(r.useMemo)((function() {
                    return b > 0 ? "重新获取 " + b + "s" : "获取验证码"
                }
                ), [b])
                  , E = Object(r.useCallback)((function(e) {
                    var n = e.target.value;
                    /^\d*$/.test(n) && (t.onChange(p(p({}, t.value), {
                        captcha: n,
                        error: !1,
                        errorText: ""
                    })),
                    !l && h(!0))
                }
                ), [l, t])
                  , x = Object(r.useCallback)((function() {
                    t.onChange(p(p({}, t.value), {
                        error: !1,
                        errorText: ""
                    }))
                }
                ), [t])
                  , k = Object(r.useCallback)((function() {
                    var e = t.value.captcha;
                    if (l)
                        return /^\d{6}$/.test(e) ? void 0 : t.onChange(p(p({}, t.value), {
                            error: !0,
                            errorText: "短信验证码是 6 位数字"
                        }))
                }
                ), [l, t])
                  , S = Object(r.useCallback)((function() {
                    return d(void 0, void 0, void 0, (function() {
                        var e;
                        return g(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                if (A)
                                    return [2];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 6, , 7]),
                                "function" != typeof t.value.onSendCaptcha ? [3, 3] : [4, t.value.onSendCaptcha()];
                            case 2:
                                return n.sent(),
                                y(60),
                                [3, 5];
                            case 3:
                                return [4, c({
                                    mobile: t.value.mobile,
                                    countryCode: t.value.countryCode
                                })];
                            case 4:
                                n.sent(),
                                n.label = 5;
                            case 5:
                                return a.Notify.success("验证码发送成功"),
                                t.onChange(p(p({}, t.value), {
                                    error: !1,
                                    errorText: "验证码已发送，15分钟内输入有效"
                                })),
                                [3, 7];
                            case 6:
                                return e = n.sent(),
                                t.value.onError(e.msg || e),
                                [3, 7];
                            case 7:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ), [A, t]);
                return i.a.createElement("div", {
                    className: "account-captcha"
                }, i.a.createElement(s.Input, {
                    name: "captcha",
                    maxLength: 6,
                    className: v("account-captcha__input", t.value.error ? "account-captcha__input--error" : ""),
                    type: "text",
                    placeholder: "输入短信验证码",
                    autoComplete: "off",
                    value: t.value.captcha,
                    onChange: E,
                    onFocus: x,
                    onBlur: k,
                    onPressEnter: t.onSubmit
                }), i.a.createElement("div", {
                    className: v("account-captcha__btn js-get-identify-code", A ? "account-captcha__btn--disable" : ""),
                    onClick: S
                }, w), i.a.createElement("p", {
                    className: v("account-captcha__warn", t.value.error ? "account-captcha__warn--error" : "")
                }, t.value.errorText))
            }
            ));
            Bt(".captcha-dialog-heander {\n  margin-bottom: 16px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333;\n}\n.captcha-dialog-form {\n  margin-bottom: 0 !important;\n}\n.captcha-dialog-footer {\n  margin-top: 32px;\n  text-align: right;\n}");
            var It, Lt = l.Form.Field, Mt = (0,
            l.Form.createForm)({})((function(t) {
                var e = t.biz
                  , n = t.bizType
                  , o = t.visible
                  , s = t.zentForm
                  , h = t.mobile
                  , f = t.topTips
                  , m = t.countryCode
                  , v = void 0 === m ? "+86" : m
                  , y = t.onChangeVisible
                  , b = t.onValidCaptcha
                  , A = t.onSuccess
                  , w = t.onFailed
                  , E = function() {
                    var t = Object(r.useState)("")
                      , e = t[0]
                      , n = t[1]
                      , i = Object(r.useState)(!1)
                      , o = i[0]
                      , a = i[1]
                      , s = Object(r.useState)("")
                      , c = s[0]
                      , u = s[1];
                    return {
                        captcha: e,
                        captchaError: o,
                        captchaErrorText: c,
                        handleCaptchaChange: Object(r.useCallback)((function(t) {
                            var e = t.error
                              , r = t.errorText
                              , i = t.captcha;
                            n(i),
                            a(e),
                            u(r)
                        }
                        ), []),
                        handleSetCaptchaError: Object(r.useCallback)((function(t, e) {
                            a(t),
                            u(e)
                        }
                        ), []),
                        captchaValidations: {
                            validations: {
                                format: function(t, e) {
                                    var n = e.captcha;
                                    return !(!n || 6 !== n.length)
                                }
                            },
                            validationErrors: {
                                format: "短信验证码是 6 位数字"
                            }
                        }
                    }
                }()
                  , x = E.captcha
                  , k = E.captchaError
                  , S = E.captchaErrorText
                  , T = E.handleCaptchaChange
                  , C = E.handleSetCaptchaError
                  , O = E.captchaValidations
                  , D = Object(r.useState)(!1)
                  , _ = D[0]
                  , R = D[1]
                  , B = Object(r.useMemo)((function() {
                    return s.isSubmitting() || _
                }
                ), [s, _])
                  , j = Object(r.useCallback)((function(t) {
                    a.Notify.info(t)
                }
                ), [])
                  , I = Object(r.useCallback)((function(t) {
                    return d(void 0, void 0, void 0, (function() {
                        var n, r, i, o, a;
                        return g(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                R(!0),
                                n = t.captcha,
                                r = {
                                    biz: e,
                                    mobile: v + "-" + h,
                                    platform: "pc",
                                    smsCaptcha: n.captcha
                                },
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, 4, 5]),
                                [4, (b || _t)(r)];
                            case 2:
                                return i = s.sent(),
                                b && i || (null == i ? void 0 : i.success) ? (A(),
                                y(!1)) : (C(!0, "验证码错误"),
                                w && w()),
                                [3, 5];
                            case 3:
                                return o = s.sent(),
                                C(!0, (null === (a = o) || void 0 === a ? void 0 : a.msg) || o || "验证错误"),
                                [3, 5];
                            case 4:
                                return R(!1),
                                [7];
                            case 5:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ), [C, b, e, h, v])
                  , L = Object(r.useCallback)((function(t) {
                    t.preventDefault(),
                    s.validateForm(!0, (function() {
                        var t = s.getFieldError
                          , e = s.getFormValues
                          , n = t("captcha");
                        n ? C(!0, n) : I(e())
                    }
                    ))
                }
                ), [C, s, I]);
                return i.a.createElement(c.Dialog, {
                    className: "captcha-dialog",
                    visible: o,
                    maskClosable: !1,
                    onClose: function() {
                        return y(!1)
                    },
                    title: "验证手机号",
                    style: {
                        minWidth: "488px",
                        width: "488px"
                    }
                }, i.a.createElement(l.Form, {
                    className: "captcha-dialog-form",
                    horizontal: !0,
                    onSubmit: L
                }, i.a.createElement("div", {
                    className: "captcha-dialog-header"
                }, f || "为了帐号安全，请输入发送至 " + v + " " + h + " 的 6 位验证码。"), i.a.createElement(Lt, p({
                    name: "captcha",
                    component: jt,
                    value: {
                        biz: e,
                        bizType: n,
                        captcha: x,
                        mobile: h,
                        countryCode: v,
                        error: k,
                        errorText: S,
                        onError: j
                    }
                }, O, {
                    validateOnBlur: !0,
                    onChange: T,
                    onSubmit: L
                })), i.a.createElement("div", {
                    className: "captcha-dialog-footer"
                }, i.a.createElement(u.Button, {
                    loading: B,
                    onClick: function() {
                        return y(!1)
                    }
                }, "取消"), i.a.createElement(u.Button, {
                    loading: B,
                    type: "primary",
                    htmlType: "submit"
                }, "确定"))))
            }
            ));
            !function(t) {
                t.NO_CERT = "NO_CERT",
                t.SMS_CERT = "SMS_CERT"
            }(It || (It = {}));
            var Nt = function(t) {
                var e = Object(r.useState)(!1)
                  , n = e[0]
                  , o = e[1]
                  , s = function(e) {
                    o(e),
                    e || t.onClose && t.onClose()
                };
                return Object(r.useEffect)((function() {
                    void 0 !== t.visible && s(t.visible)
                }
                ), [t.visible]),
                i.a.createElement(i.a.Fragment, null, t.children && i.a.createElement("div", {
                    onClick: function() {
                        return d(void 0, void 0, void 0, (function() {
                            var e, n, r, i, o;
                            return g(this, (function(c) {
                                switch (c.label) {
                                case 0:
                                    if (e = t.isCheckCaptchaCache,
                                    n = t.operationType,
                                    r = t.onSuccess,
                                    !e)
                                        return [3, 5];
                                    c.label = 1;
                                case 1:
                                    return c.trys.push([1, 3, , 4]),
                                    [4, (u = {
                                        operationType: n
                                    },
                                    f()({
                                        url: "https://account.youzan.com/api/captcha/sms/cache.json",
                                        method: "GET",
                                        data: u,
                                        withCredentials: !0
                                    }))];
                                case 2:
                                    return c.sent().method === It.SMS_CERT ? s(!0) : r(),
                                    [3, 4];
                                case 3:
                                    return i = c.sent(),
                                    a.Notify.error((null === (o = i) || void 0 === o ? void 0 : o.msg) || "获取校验状态失败"),
                                    [3, 4];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    s(!0),
                                    c.label = 6;
                                case 6:
                                    return [2]
                                }
                                var u
                            }
                            ))
                        }
                        ))
                    }
                }, t.children), i.a.createElement(Mt, p({}, t, {
                    visible: n,
                    onChangeVisible: s
                })))
            }
        }
        ).call(this, n("yLpj"))
    },
    Nlu1: function(t, e, n) {
        t.exports = n("SFYO")("Nlu1")
    },
    OkiR: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return u
        }
        )),
        n.d(e, "a", (function() {
            return a
        }
        ));
        var r, i, o = function() {
            var t, e, n = null;
            try {
                n = null === (e = null === (t = null === window || void 0 === window ? void 0 : window._unsafeRuntime) || void 0 === t ? void 0 : t.function) || void 0 === e ? void 0 : e.generateUrl
            } catch (t) {}
            return n = n || function(t) {
                return t
            }
        }, a = (o(),
        function(t, e, n) {
            r || (r = o());
            try {
                t = r(t)
            } catch (e) {
                console.error('[windowOpen generateUrl] error url: "' + t + '"', e)
            }
            return window.open(t, e, n)
        }
        ), s = {};
        "undefined" != typeof window && (s = window.location);
        var c = Object.create(s.constructor.prototype);
        ["ancestorOrigins", "hash", "port", "protocol", "search"].forEach((function(t) {
            Object.defineProperty(c, t, {
                set: function(e) {
                    s[t] = e
                },
                get: function() {
                    return s[t] || ""
                }
            })
        }
        )),
        ["host", "hostname", "href", "origin", "pathname"].forEach((function(t) {
            Object.defineProperty(c, t, {
                set: function(e) {
                    if (("host" === t || "hostname" === t) && e.endsWith("/"))
                        throw new DOMException("Failed to set the '" + t + "' property on 'Location': Not a valid URL.");
                    i || (i = o());
                    var n = s[t]
                      , r = "";
                    if ("pathname" === t) {
                        var a = s.origin
                          , c = e.startsWith("/") ? e : "/" + e;
                        r = a + s.href.replace(a, "").replace(n, c)
                    } else
                        r = s.href.replace(n, e);
                    try {
                        r = i(r)
                    } catch (t) {
                        console.error('[yzLocation generateUrl] error url: "' + r + '"', t)
                    }
                    s.href = r
                },
                get: function() {
                    return s[t] || ""
                }
            })
        }
        )),
        c.reload = s.reload.bind(s),
        c.toString = s.toString.bind(s),
        c.valueOf = s.valueOf.bind(s),
        ["assign", "replace"].forEach((function(t) {
            c[t] = function(e) {
                if (/^(https?:)?\/\/$/i.test(e))
                    throw new DOMException("Failed to execute '" + t + "' on 'Location': Not a valid URL.");
                i || (i = o());
                var n = e;
                if (!/^(https?:)?\/\//.test(n))
                    if (n.startsWith("/"))
                        n = s.origin + n;
                    else {
                        var r = s.pathname.replace(/\/([^/]*)$/, "/" + n);
                        n = s.origin + r
                    }
                try {
                    n = i(n)
                } catch (t) {
                    console.error('[yzLocation generateUrl] error url: "' + n + '"', t)
                }
                s[t].call(s, n)
            }
        }
        ));
        var u = c
    },
    OvgT: function(t, e, n) {
        "use strict";
        var r = n("q1tI")
          , i = n.n(r)
          , o = n("UH8F")
          , a = (n("YjmP"),
        n("ZWy1"),
        n("6H3b"));
        n("EbSO");
        e.a = function(t) {
            var e = t.single
              , n = t.title
              , r = t.desc;
            return i.a.createElement("div", {
                className: "account"
            }, i.a.createElement("a", {
                className: "account__logo",
                href: "//www.youzan.com"
            }), i.a.createElement("div", {
                className: "account__container"
            }, i.a.createElement("div", {
                className: "account__container__left"
            }, t.children), e ? null : i.a.createElement("div", {
                className: "account__container__right"
            }, i.a.createElement("div", {
                className: "account__container__right__header"
            }, i.a.createElement("div", {
                className: "title"
            }, n || "他们都在用有赞"), i.a.createElement("p", null, r || "落地社交电商、新零售、小程序"), i.a.createElement("a", {
                href: "https://www.youzan.com/intro/anli",
                target: "_blank",
                rel: "noopener"
            }, "查看更多案例", i.a.createElement(o.Icon, {
                type: "right"
            }))), i.a.createElement("div", {
                className: "account__container__right__logo"
            }, i.a.createElement("img", {
                src: "https://b.yzcdn.cn/public_files/82981d0b120c429bb81b416a82ab94f2.png"
            })))), i.a.createElement(a.a, null))
        }
    },
    PSy9: function(t, e, n) {},
    SFYO: function(t, e) {
        t.exports = component
    },
    T901: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return s
        }
        ));
        var r = n("ODXe")
          , i = n("TSYQ")
          , o = n.n(i)
          , a = n("q1tI")
          , s = (n("PSy9"),
        function(t) {
            var e = Object(a.useState)(!1)
              , n = Object(r.default)(e, 2)
              , i = n[0]
              , s = n[1]
              , c = Object(a.useRef)();
            return {
                trigger: function() {
                    s(!0),
                    clearTimeout(c.current),
                    c.current = window.setTimeout((function() {
                        return s(!1)
                    }
                    ), 450)
                },
                motionNames: o()("shake-motion", {
                    "shake-motion-active": i
                }, t)
            }
        }
        )
    },
    U8uH: function(t, e, n) {
        "use strict";
        var r, i, o = (r = new Date,
        i = +r,
        function(t, e) {
            if (void 0 === e)
                return function(t) {
                    var e = document.cookie
                      , n = "\\b" + t + "="
                      , r = e.search(n);
                    if (r < 0)
                        return "";
                    r += n.length - 2;
                    var i = e.indexOf(";", r);
                    return i < 0 && (i = e.length),
                    e.substring(r, i) || ""
                }(t);
            if ("string" == typeof e || e instanceof String) {
                if (e)
                    return document.cookie = t + "=" + e + ";",
                    e;
                e = {
                    expires: -100
                }
            }
            var n = t + "=" + ((e = e || {}).value || "") + ";";
            delete e.value,
            void 0 !== e.expires && (r.setTime(i + 864e5 * e.expires),
            e.expires = r.toGMTString()),
            n += function(t, e, n) {
                if (!t)
                    return "";
                var r = [];
                for (var i in t)
                    t.hasOwnProperty(i) && r.push(encodeURIComponent(i) + "=" + (n ? encodeURIComponent(t[i]) : t[i]));
                return r.join(e || ",")
            }(e, ";"),
            document.cookie = n
        }
        );
        t.exports = o
    },
    XcOS: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        )),
        n.d(e, "b", (function() {
            return a
        }
        ));
        var r = n("L8Cs")
          , i = n.n(r)
          , o = function() {
            return i()({
                url: "/api/code/country-code.json"
            })
        }
          , a = function() {
            return i()({
                url: "/api/code/country-code.json"
            })
        }
    },
    ZVAt: function(t, e, n) {
        "use strict";
        var r, i = n("VTBJ"), o = n("HaE+"), a = n("ODXe"), s = n("o0o1"), c = n.n(s), u = n("q1tI"), l = n.n(u), h = n("pVbJ"), f = n("FIJR"), p = n("UoUk"), d = (n("YjmP"),
        n("ZWy1"),
        n("H2OQ"),
        n("ofMT"),
        n("h4m+"),
        n("sGv0"),
        n("TSYQ")), g = n.n(d), m = n("J2m7"), v = n.n(m), y = n("XcOS");
        n("wDYy");
        !function(t) {
            t.normal = "验证完成后，可使用该手机号登录或找回密码",
            t.required = "请输入手机号",
            t.correct = "请输入正确的手机号"
        }(r || (r = {}));
        var b = l.a.forwardRef((function(t, e) {
            var n = Object(u.useState)([])
              , s = Object(a.default)(n, 2)
              , d = s[0]
              , m = s[1]
              , b = Object(u.useState)(!1)
              , A = Object(a.default)(b, 2)
              , w = A[0]
              , E = A[1]
              , x = Object(u.useMemo)((function() {
                var e = t.value
                  , n = e.eng
                  , r = e.countryCode;
                n || (n = (v()(d, ["code", r]) || {}).eng);
                return n
            }
            ), [d, t.value])
              , k = function() {
                var t = Object(o.default)(c.a.mark((function t() {
                    var e;
                    return c.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                Object(y.a)();
                            case 3:
                                e = t.sent,
                                window._countryList = e,
                                m(e),
                                t.next = 11;
                                break;
                            case 8:
                                t.prev = 8,
                                t.t0 = t.catch(0),
                                h.Notify.error(t.t0);
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 8]])
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
              , S = Object(u.useCallback)((function(e, n) {
                t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    countryCode: n.code,
                    eng: n.eng
                }))
            }
            ), [t])
              , T = Object(u.useCallback)((function(e) {
                t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    mobile: e.target.value,
                    error: !1,
                    codeError: !1,
                    errorText: r.normal
                })),
                !w && E(!0)
            }
            ), [w, t])
              , C = Object(u.useCallback)((function() {
                t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    error: !1,
                    codeError: !1,
                    errorText: r.normal
                }))
            }
            ), [t])
              , O = Object(u.useCallback)((function() {
                var e = t.value
                  , n = e.mobile
                  , o = e.countryCode;
                w ? n ? "+86" !== o || /^1\d{10}$/.test(n) ? t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    error: !1,
                    codeError: !1,
                    errorText: ""
                })) : t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    error: !0,
                    codeError: !1,
                    errorText: r.correct
                })) : t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    error: !0,
                    codeError: !1,
                    errorText: r.required
                })) : t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    error: !1,
                    codeError: !1,
                    errorText: ""
                }))
            }
            ), [w, t]);
            return Object(u.useEffect)((function() {
                var t = window._countryList;
                Array.isArray(t) ? m(t) : Object(y.b)().then((function(t) {
                    var e = t.map((function(t) {
                        return t.text = "".concat(t.name, " ").concat(t.code),
                        t
                    }
                    ));
                    window._countryList = e,
                    m(e)
                }
                )).catch(k)
            }
            ), []),
            Object(u.useEffect)(O, [t.value.countryCode]),
            l.a.createElement("div", {
                className: "account-input"
            }, l.a.createElement(f.Select, {
                className: g()("account-input__select", t.value.codeError ? "account-input__select--error" : ""),
                width: 100,
                value: x,
                data: d,
                optionValue: "eng",
                optionText: "text",
                onChange: S
            }), l.a.createElement(p.Input, {
                className: g()("account-input__input", t.value.error ? "account-input__input--error" : ""),
                placeholder: "请输入手机号",
                maxLength: "+86" === t.value.countryCode ? 11 : 99,
                value: t.value.mobile,
                onChange: T,
                onFocus: C,
                onBlur: O
            }), l.a.createElement("p", {
                className: g()("account-input__warning", t.value.error ? "account-input__warning--error" : ""),
                dangerouslySetInnerHTML: {
                    __html: t.value.errorText
                }
            }))
        }
        ));
        e.a = b
    },
    "ZaH+": function(t, e, n) {
        "use strict";
        var r = n("HaE+")
          , i = n("VTBJ")
          , o = n("ODXe")
          , a = n("o0o1")
          , s = n.n(a)
          , c = n("q1tI")
          , u = n.n(c)
          , l = n("pVbJ")
          , h = n("UoUk")
          , f = (n("YjmP"),
        n("ZWy1"),
        n("H2OQ"),
        n("ofMT"),
        n("h4m+"),
        n("TSYQ"))
          , p = n.n(f)
          , d = n("m72K")
          , g = n("N2V7")
          , m = (n("v25+"),
        n("JmmQ"),
        n("pMcc"),
        n("jQsQ"))
          , v = n("L8Cs")
          , y = n.n(v);
        function b(t) {
            var e = Object(c.useState)(0)
              , n = Object(o.default)(e, 2)
              , r = n[0]
              , a = n[1]
              , s = Object(c.useRef)()
              , l = Object(c.useCallback)((function(t, e) {
                return r > 0 || ("+86" !== e ? !t : !/^1\d{10}/.test(t))
            }
            ), [r])
              , h = Object(c.useCallback)((function(e) {
                var n = e.countryCode
                  , r = void 0 === n ? "+86" : n
                  , o = e.mobile;
                return l(o, r) ? Promise.reject({
                    code: "10001"
                }) : new Promise((function(n, o) {
                    Object(m.a)({
                        bizType: t.bizType,
                        onSuccess: function(t) {
                            f(Object(i.default)(Object(i.default)({}, e), {}, {
                                countryCode: r
                            }), t).then(n).catch(o)
                        },
                        onFail: o
                    })
                }
                ))
            }
            ), [l])
              , f = Object(c.useCallback)((function(e, n) {
                var r, i = e.mobile, o = e.countryCode, s = e.customAjax, c = s ? s(n) : (r = {
                    ticket: n,
                    mobile: i,
                    countryCode: o,
                    behaviorBizType: t.bizType,
                    platform: t.platform || "pc",
                    subFrom: t.subFrom || t.biz,
                    biz: t.biz
                },
                y()({
                    url: "/api/captcha/sms/send.json",
                    method: "GET",
                    data: r,
                    rawResponse: !0,
                    withCredentials: !0
                }));
                return new Promise((function(t, e) {
                    c.then((function() {
                        a(60),
                        t()
                    }
                    )).catch((function(t) {
                        if (135900032 === t.code)
                            return g.Sweetalert.alert({
                                title: "提示",
                                closeBtn: !0,
                                content: u.a.createElement("p", null, t.msg),
                                confirmText: "我知道了"
                            });
                        e(t)
                    }
                    ))
                }
                ))
            }
            ), [t.bizType, t.platform, t.subFrom, t.bizType]);
            return Object(c.useEffect)((function() {
                r > 0 && (s.current = setTimeout((function() {
                    a(r - 1)
                }
                ), 1e3))
            }
            ), [r]),
            Object(c.useEffect)((function() {
                return function() {
                    s.current && clearTimeout(s.current)
                }
            }
            ), [s]),
            {
                countdown: r,
                sendCaptcha: h
            }
        }
        n("czG+");
        var A = u.a.forwardRef((function(t, e) {
            var n = b({
                biz: "uic_login_without_password",
                bizType: d.a.B_LOGIN_SMS
            })
              , a = n.countdown
              , f = n.sendCaptcha
              , g = Object(c.useState)(!1)
              , m = Object(o.default)(g, 2)
              , v = m[0]
              , y = m[1]
              , A = function() {
                var t = Object(c.useState)(0)
                  , e = Object(o.default)(t, 2)
                  , n = e[0]
                  , r = e[1]
                  , i = Object(c.useRef)();
                Object(c.useEffect)((function() {
                    return clearTimeout(i.current),
                    n > 0 && (i.current = window.setTimeout((function() {
                        r(n - 1 >= 0 ? n - 1 : 0)
                    }
                    ), 1e3)),
                    function() {
                        clearTimeout(i.current)
                    }
                }
                ), [n]);
                return {
                    count: n,
                    startCountDown: function(t) {
                        r(t)
                    }
                }
            }()
              , w = A.count
              , E = A.startCountDown
              , x = Object(c.useMemo)((function() {
                return a || w
            }
            ), [a, w])
              , k = Object(c.useMemo)((function() {
                var e = t.value
                  , n = e.mobile
                  , r = e.countryCode;
                return x > 0 || ("+86" !== r ? !n : !/^1\d{10}/.test(n))
            }
            ), [x, t.value])
              , S = Object(c.useMemo)((function() {
                return x > 0 ? "重新获取 ".concat(x, "s") : "获取验证码"
            }
            ), [x])
              , T = Object(c.useCallback)((function(e) {
                var n = e.target.value;
                /^\d*$/.test(n) && (t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    captcha: n,
                    error: !1,
                    errorText: ""
                })),
                !v && y(!0))
            }
            ), [v, t])
              , C = Object(c.useCallback)((function() {
                t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                    error: !1,
                    errorText: ""
                }))
            }
            ), [t])
              , O = Object(c.useCallback)((function() {
                var e = t.value.captcha;
                if (v)
                    return /^\d{6}$/.test(e) ? void 0 : t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                        error: !0,
                        errorText: "短信验证码是 6 位数字"
                    }))
            }
            ), [v, t])
              , D = Object(c.useCallback)(Object(r.default)(s.a.mark((function e() {
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!k) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (e.prev = 2,
                            "function" != typeof t.value.onSendCaptcha) {
                                e.next = 9;
                                break
                            }
                            return e.next = 6,
                            t.value.onSendCaptcha();
                        case 6:
                            E(60),
                            e.next = 11;
                            break;
                        case 9:
                            return e.next = 11,
                            f({
                                mobile: t.value.mobile,
                                countryCode: t.value.countryCode
                            });
                        case 11:
                            l.Notify.success("验证码发送成功"),
                            t.onChange(Object(i.default)(Object(i.default)({}, t.value), {}, {
                                error: !1,
                                errorText: "验证码已发送，15分钟内输入有效"
                            })),
                            e.next = 18;
                            break;
                        case 15:
                            e.prev = 15,
                            e.t0 = e.catch(2),
                            t.value.onError(e.t0.msg);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 15]])
            }
            ))), [k, t]);
            return u.a.createElement("div", {
                className: "account-captcha"
            }, u.a.createElement(h.Input, {
                name: "captcha",
                maxLength: 6,
                className: p()("account-captcha__input", t.value.error ? "account-captcha__input--error" : ""),
                type: "text",
                placeholder: "输入短信验证码",
                autoComplete: "off",
                value: t.value.captcha,
                onChange: T,
                onFocus: C,
                onBlur: O,
                onPressEnter: t.onSubmit
            }), u.a.createElement("div", {
                className: p()("account-captcha__btn js-get-identify-code", k ? "account-captcha__btn--disable" : ""),
                onClick: D
            }, S), u.a.createElement("p", {
                className: p()("account-captcha__warn", t.value.error ? "account-captcha__warn--error" : "")
            }, t.value.errorText))
        }
        ));
        e.a = A
    },
    aDp3: function(t, e, n) {
        t.exports = n("SFYO")("aDp3")
    },
    asw2: function(t, e, n) {
        t.exports = n("N6oO")("asw2")
    },
    "b1/A": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        ));
        var r = n("ODXe")
          , i = n("q1tI");
        function o() {
            var t = Object(i.useState)("")
              , e = Object(r.default)(t, 2)
              , n = e[0]
              , o = e[1]
              , a = Object(i.useState)(!1)
              , s = Object(r.default)(a, 2)
              , c = s[0]
              , u = s[1]
              , l = Object(i.useState)("")
              , h = Object(r.default)(l, 2)
              , f = h[0]
              , p = h[1];
            return {
                captcha: n,
                captchaError: c,
                captchaErrorText: f,
                handleCaptchaChange: Object(i.useCallback)((function(t) {
                    var e = t.error
                      , n = t.errorText
                      , r = t.captcha;
                    o(r),
                    u(e),
                    p(n)
                }
                ), []),
                handleSetCaptchaError: Object(i.useCallback)((function(t, e) {
                    u(t),
                    p(e)
                }
                ), []),
                captchaValidations: {
                    validations: {
                        format: function(t, e) {
                            return !!e.captcha
                        }
                    },
                    validationErrors: {
                        format: "短信验证码是 6 位数字"
                    }
                }
            }
        }
    },
    "czG+": function(t, e, n) {},
    dQNJ: function(t, e, n) {},
    fYP4: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        ));
        var r = n("ODXe")
          , i = n("q1tI");
        function o() {
            var t = Object(i.useState)("")
              , e = Object(r.default)(t, 2)
              , n = e[0]
              , o = e[1]
              , a = Object(i.useState)(!1)
              , s = Object(r.default)(a, 2)
              , c = s[0]
              , u = s[1]
              , l = Object(i.useState)("")
              , h = Object(r.default)(l, 2)
              , f = h[0]
              , p = h[1];
            return {
                pass: n,
                passError: c,
                passErrorText: f,
                handlePassChange: Object(i.useCallback)((function(t) {
                    var e = t.pass
                      , n = t.error
                      , r = t.errorText;
                    o(e),
                    u(n),
                    p(r)
                }
                ), []),
                handleSetPassError: Object(i.useCallback)((function(t, e) {
                    u(t),
                    p(e)
                }
                ), []),
                passValidations: {
                    validations: {
                        format: function(t, e) {
                            return !!e.pass
                        }
                    },
                    validationErrors: {
                        format: "请输入密码"
                    }
                }
            }
        }
    },
    gSup: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return b
        }
        ));
        var r = n("U8uH")
          , i = n.n(r);
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function(e) {
                    s(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var c = "https://risk-dfp-service.youzan.com"
          , u = "https://fp.youzanyun.com";
        function l(t) {
            var e = i()("yz_fp_hash") === t;
            return !e && t && i()("yz_fp_hash", {
                value: t,
                path: "/",
                domain: "youzan.com",
                expires: 365
            }),
            e
        }
        function h(t) {
            return new Promise((function(e, n) {
                var r = new XMLHttpRequest;
                r.open(t.method, t.url),
                r.setRequestHeader("Content-Type", "application/json"),
                r.timeout = 1e4,
                r.responseType = "json",
                r.onreadystatechange = function() {
                    4 === r.readyState && (200 === r.status && r.response ? e(r.response) : n(r.errors))
                }
                ,
                r.send(JSON.stringify(t.data))
            }
            ))
        }
        var f = {
            resolves: [],
            rejects: [],
            enqueue: function(t, e) {
                "function" == typeof t && this.resolves.push(t),
                "function" == typeof e && this.rejects.push(e)
            },
            dequeueResolve: function(t) {
                for (; this.resolves.length; ) {
                    this.resolves.shift()(t)
                }
            },
            dequeueReject: function(t) {
                for (; this.rejects.length; ) {
                    this.rejects.shift()(t)
                }
            }
        }
          , p = function(t, e) {
            return e.reduce((function(e, n) {
                var r = t[n];
                return void 0 !== r && (e[n] = r),
                e
            }
            ), {})
        }
          , d = function() {
            "dfp-v1.1.0" !== localStorage.getItem("_dfp_flag_") && m("", -1)
        }
          , g = function() {
            return localStorage.setItem("_dfp_flag_", "dfp-v1.1.0")
        }
          , m = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7;
            i()("dfp", {
                value: t,
                path: "/",
                domain: "youzan.com",
                expires: e,
                Secure: !0,
                SameSite: "None"
            })
        }
          , v = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            d();
            var e = window._fmOpt = a(a({
                partner: "youzan",
                appName: "YZ"
            }, p(t, ["appName"])), {}, {
                token: "youzan-" + (new Date).getTime() + "-" + Math.random().toString(16).substr(2),
                fpHost: c,
                fmb: !0,
                cub: !0,
                success: function(t) {
                    if (t) {
                        var n = i()("dfp");
                        l(t) && n && 40 === n.length || e.getBlackbox && e.getBlackbox((function(t) {
                            h({
                                url: u + "/new/dfp/bb/change",
                                method: "post",
                                data: {
                                    blackbox: t
                                }
                            }).then((function(t) {
                                t && (m(t),
                                g())
                            }
                            ))
                        }
                        ))
                    }
                }
            })
              , n = document.createElement("script");
            try {
                n.type = "text/javascript",
                n.async = !0,
                n.src = e.fpHost + "/static/fm.js?ver=0.1&t=" + ((new Date).getTime() / 36e5).toFixed(0),
                document.body.appendChild(n)
            } catch (t) {}
        }
          , y = !1
          , b = {
            init: function(t) {
                y || (y = !0,
                v(t),
                "undefined" != typeof window && (window.tdFinger ? window.tdFinger.get || (window.tdFinger.get = b.get,
                "function" == typeof window.tdFinger.onComplete && f.enqueue(window.tdFinger.onComplete)) : window.tdFinger = b))
            },
            get: function() {
                return new Promise((function(t, e) {
                    f.enqueue(t, e),
                    v()
                }
                ))
            }
        }
    },
    jQsQ: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n("f4ya")
              , i = n.n(r)
              , o = n("214s")
              , a = n.n(o)
              , s = n("Im9W")
              , c = n.n(s);
            function u(t) {
                if (t && "undefined" != typeof window) {
                    var e = document.createElement("style");
                    return e.setAttribute("type", "text/css"),
                    e.innerHTML = t,
                    document.head.appendChild(e),
                    t
                }
            }
            function l(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function f(t, e, n) {
                return e && h(t.prototype, e),
                n && h(t, n),
                t
            }
            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function d(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && p(t, e)
            }
            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function m(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function v(t, e) {
                return !e || "object" !== g(e) && "function" != typeof e ? m(t) : e
            }
            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function b(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            function A(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                            !e || n.length !== e); r = !0)
                                ;
                        } catch (t) {
                            i = !0,
                            o = t
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return b(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function w(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            function E(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);
                        function a(t) {
                            w(o, r, i, a, s, "next", t)
                        }
                        function s(t) {
                            w(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            var x = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}
              , k = {
                exports: {}
            };
            !function(t) {
                var e = function(t) {
                    var e, n = Object.prototype, r = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
                    function c(t, e, n) {
                        return Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        t[e]
                    }
                    try {
                        c({}, "")
                    } catch (t) {
                        c = function(t, e, n) {
                            return t[e] = n
                        }
                    }
                    function u(t, e, n, r) {
                        var i = e && e.prototype instanceof v ? e : v
                          , o = Object.create(i.prototype)
                          , a = new D(r || []);
                        return o._invoke = function(t, e, n) {
                            var r = h;
                            return function(i, o) {
                                if (r === p)
                                    throw new Error("Generator is already running");
                                if (r === d) {
                                    if ("throw" === i)
                                        throw o;
                                    return R()
                                }
                                for (n.method = i,
                                n.arg = o; ; ) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = T(a, n);
                                        if (s) {
                                            if (s === m)
                                                continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method)
                                        n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === h)
                                            throw r = d,
                                            n.arg;
                                        n.dispatchException(n.arg)
                                    } else
                                        "return" === n.method && n.abrupt("return", n.arg);
                                    r = p;
                                    var c = l(t, e, n);
                                    if ("normal" === c.type) {
                                        if (r = n.done ? d : f,
                                        c.arg === m)
                                            continue;
                                        return {
                                            value: c.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === c.type && (r = d,
                                    n.method = "throw",
                                    n.arg = c.arg)
                                }
                            }
                        }(t, n, a),
                        o
                    }
                    function l(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = u;
                    var h = "suspendedStart"
                      , f = "suspendedYield"
                      , p = "executing"
                      , d = "completed"
                      , m = {};
                    function v() {}
                    function y() {}
                    function b() {}
                    var A = {};
                    A[o] = function() {
                        return this
                    }
                    ;
                    var w = Object.getPrototypeOf
                      , E = w && w(w(_([])));
                    E && E !== n && r.call(E, o) && (A = E);
                    var x = b.prototype = v.prototype = Object.create(A);
                    function k(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            c(t, e, (function(t) {
                                return this._invoke(e, t)
                            }
                            ))
                        }
                        ))
                    }
                    function S(t, e) {
                        function n(i, o, a, s) {
                            var c = l(t[i], t, o);
                            if ("throw" !== c.type) {
                                var u = c.arg
                                  , h = u.value;
                                return h && "object" === g(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                    n("next", t, a, s)
                                }
                                ), (function(t) {
                                    n("throw", t, a, s)
                                }
                                )) : e.resolve(h).then((function(t) {
                                    u.value = t,
                                    a(u)
                                }
                                ), (function(t) {
                                    return n("throw", t, a, s)
                                }
                                ))
                            }
                            s(c.arg)
                        }
                        var i;
                        this._invoke = function(t, r) {
                            function o() {
                                return new e((function(e, i) {
                                    n(t, r, e, i)
                                }
                                ))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    }
                    function T(t, n) {
                        var r = t.iterator[n.method];
                        if (r === e) {
                            if (n.delegate = null,
                            "throw" === n.method) {
                                if (t.iterator.return && (n.method = "return",
                                n.arg = e,
                                T(t, n),
                                "throw" === n.method))
                                    return m;
                                n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return m
                        }
                        var i = l(r, t.iterator, n.arg);
                        if ("throw" === i.type)
                            return n.method = "throw",
                            n.arg = i.arg,
                            n.delegate = null,
                            m;
                        var o = i.arg;
                        return o ? o.done ? (n[t.resultName] = o.value,
                        n.next = t.nextLoc,
                        "return" !== n.method && (n.method = "next",
                        n.arg = e),
                        n.delegate = null,
                        m) : o : (n.method = "throw",
                        n.arg = new TypeError("iterator result is not an object"),
                        n.delegate = null,
                        m)
                    }
                    function C(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]),
                        2 in t && (e.finallyLoc = t[2],
                        e.afterLoc = t[3]),
                        this.tryEntries.push(e)
                    }
                    function O(t) {
                        var e = t.completion || {};
                        e.type = "normal",
                        delete e.arg,
                        t.completion = e
                    }
                    function D(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        t.forEach(C, this),
                        this.reset(!0)
                    }
                    function _(t) {
                        if (t) {
                            var n = t[o];
                            if (n)
                                return n.call(t);
                            if ("function" == typeof t.next)
                                return t;
                            if (!isNaN(t.length)) {
                                var i = -1
                                  , a = function n() {
                                    for (; ++i < t.length; )
                                        if (r.call(t, i))
                                            return n.value = t[i],
                                            n.done = !1,
                                            n;
                                    return n.value = e,
                                    n.done = !0,
                                    n
                                };
                                return a.next = a
                            }
                        }
                        return {
                            next: R
                        }
                    }
                    function R() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return y.prototype = x.constructor = b,
                    b.constructor = y,
                    y.displayName = c(b, s, "GeneratorFunction"),
                    t.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                    }
                    ,
                    t.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                        c(t, s, "GeneratorFunction")),
                        t.prototype = Object.create(x),
                        t
                    }
                    ,
                    t.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }
                    ,
                    k(S.prototype),
                    S.prototype[a] = function() {
                        return this
                    }
                    ,
                    t.AsyncIterator = S,
                    t.async = function(e, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new S(u(e, n, r, i),o);
                        return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                            return t.done ? t.value : a.next()
                        }
                        ))
                    }
                    ,
                    k(x),
                    c(x, s, "Generator"),
                    x[o] = function() {
                        return this
                    }
                    ,
                    x.toString = function() {
                        return "[object Generator]"
                    }
                    ,
                    t.keys = function(t) {
                        var e = [];
                        for (var n in t)
                            e.push(n);
                        return e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var r = e.pop();
                                if (r in t)
                                    return n.value = r,
                                    n.done = !1,
                                    n
                            }
                            return n.done = !0,
                            n
                        }
                    }
                    ,
                    t.values = _,
                    D.prototype = {
                        constructor: D,
                        reset: function(t) {
                            if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = e,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = e,
                            this.tryEntries.forEach(O),
                            !t)
                                for (var n in this)
                                    "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type)
                                throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done)
                                throw t;
                            var n = this;
                            function i(r, i) {
                                return s.type = "throw",
                                s.arg = t,
                                n.next = r,
                                i && (n.method = "next",
                                n.arg = e),
                                !!i
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o]
                                  , s = a.completion;
                                if ("root" === a.tryLoc)
                                    return i("end");
                                if (a.tryLoc <= this.prev) {
                                    var c = r.call(a, "catchLoc")
                                      , u = r.call(a, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < a.catchLoc)
                                            return i(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc)
                                            return i(a.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < a.catchLoc)
                                            return i(a.catchLoc, !0)
                                    } else {
                                        if (!u)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc)
                                            return i(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = t,
                            a.arg = e,
                            o ? (this.method = "next",
                            this.next = o.finallyLoc,
                            m) : this.complete(a)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type)
                                throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            m
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t)
                                    return this.complete(n.completion, n.afterLoc),
                                    O(n),
                                    m
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        O(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, n, r) {
                            return this.delegate = {
                                iterator: _(t),
                                resultName: n,
                                nextLoc: r
                            },
                            "next" === this.method && (this.arg = e),
                            m
                        }
                    },
                    t
                }(t.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    Function("r", "regeneratorRuntime = r")(e)
                }
            }(k);
            var S = k.exports;
            function T() {
                this.onSuccess = function(t) {}
                ,
                this.onFail = function() {}
                ,
                this.onCancel = function() {}
                ,
                this.bizType = ""
            }
            function C(t) {
                return new Promise((function(e, n) {
                    var r = new XMLHttpRequest
                      , o = t.url;
                    "GET" === t.method.toUpperCase() && (o = i.a.add(t.url, t.data)),
                    r.open(t.method, o),
                    r.setRequestHeader("Content-Type", "application/json"),
                    t.headers && Object.keys(t.headers).forEach((function(e) {
                        r.setRequestHeader(e, t.headers[e])
                    }
                    )),
                    r.timeout = 1e4,
                    r.withCredentials = !0,
                    r.responseType = "json",
                    r.onreadystatechange = function() {
                        if (4 === r.readyState)
                            if (200 === r.status && r.response) {
                                var t = r.response;
                                "string" == typeof t && (t = JSON.parse(t)),
                                e(t)
                            } else
                                n(r.errors)
                    }
                    ,
                    r.send(JSON.stringify(t.data))
                }
                ))
            }
            function O(t, e, n) {
                !function r(i) {
                    i && i !== e && (i.attributes.length && Array.prototype.forEach.call(i.attributes, (function(e) {
                        var r = e.name;
                        if (r === "@".concat(t.type)) {
                            var o = i.getAttribute(r);
                            n[o] && n[o].apply(n, [t, {
                                elm: i
                            }])
                        }
                    }
                    )),
                    r(i.parentElement))
                }(t.target)
            }
            T.prototype.check = function(t) {
                var e = t.onSuccess
                  , n = t.onFail
                  , r = t.onCancel
                  , i = t.bizType
                  , o = t.bizData
                  , a = void 0 === o ? "" : o;
                if ("function" != typeof e)
                    throw Error("onSuccess 必须为一个方法");
                var s = this;
                if (this.onSuccess = function() {
                    s.hideLoading(),
                    e(s.token)
                }
                ,
                n) {
                    if ("function" != typeof n)
                        throw Error("onFail 必须为一个方法");
                    this.onFail = n
                }
                if (r) {
                    if ("function" != typeof r)
                        throw Error("onCancel 必须为一个方法");
                    this.onCancel = r
                }
                if (void 0 === i)
                    throw Error("业务线类型 bizType 为必传");
                this.bizType = i,
                this.bizData = a,
                this.getToken().then(function() {
                    var t = this
                      , e = {
                        token: this.token,
                        onSuccess: this.onSuccess,
                        onCancel: this.onCancel,
                        bizType: this.bizType,
                        bizData: this.bizData,
                        onFail: function(n) {
                            if (t.hideLoading(),
                            n.captchaType)
                                switch (n.captchaType) {
                                case 1:
                                    t.slideCaptcha.startVerify(e);
                                    break;
                                case 2:
                                    t.clickOrTouch.startVerify(e);
                                    break;
                                default:
                                    t.errorTip("没有当前类型验证码")
                                }
                            else
                                t.slideCaptcha.hide(),
                                t.errorTip("string" == typeof n ? n : "停留时间过长，请重试"),
                                t.onFail(n)
                        }
                    };
                    this.token && this.clickOrTouch.startVerify(e)
                }
                .bind(this))
            }
            ,
            T.prototype.getToken = function() {}
            ,
            T.prototype.errorTip = function() {}
            ,
            u("#behavior-verify-web-toast-container {\n  position: fixed;\n  width: 280px;\n  height: 35px;\n  left: 50%;\n  margin-left: -140px;\n  top: 30px;\n  z-index: 99999;\n  font-size: 14px;\n  text-align: center;\n  line-height: 35px;\n  color: #d40000;\n  border-radius: 2px;\n  background: #ffffff;\n  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  transition: opacity 0.3s ease 0s;\n}\n#behavior-verify-web-toast-container.show {\n  opacity: 1;\n}");
            var D = a.a
              , _ = ""
              , R = "";
            function B(t, e) {
                _ = D.utils.parse(t),
                R = D.utils.parse(e)
            }
            function j(t) {
                return D.aes.encrypt({
                    data: JSON.stringify(t),
                    iv: R,
                    key: _
                })
            }
            function I(t) {
                return decodeURIComponent(t.split("").reverse().join(""))
            }
            var L = ((window._global || {}).url || {}).passport || I("moc.nazuoy.tropssapF2%F2%A3%sptth");
            try {
                wx && Page && (L = I("tropssapF2%"))
            } catch (u) {}
            var M = L + I("nosj.2v-nekot-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%")
              , N = L + I("nosj.atad-ahctpac-roivaheb-kcehcF2%ahctpacF2%ipaF2%")
              , P = L + I("nosj.atad-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%");
            var z = function(t) {
                d(r, T);
                var e, n = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(r);
                function r() {
                    var t;
                    return l(this, r),
                    (t = n.call(this)).loadingDomID = "__behavior_loading",
                    t
                }
                return f(r, [{
                    key: "getToken",
                    value: (e = E(S.mark((function t() {
                        var e, n, r, i, o, a, s, c, u, l, h, f, p, d, g, m, v;
                        return S.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.showLoading(),
                                    t.prev = 1,
                                    t.next = 4,
                                    C({
                                        url: M,
                                        method: "GET",
                                        data: {
                                            bizType: this.bizType,
                                            version: "1.0"
                                        }
                                    });
                                case 4:
                                    if (e = t.sent,
                                    n = e.code,
                                    r = e.msg,
                                    i = e.data,
                                    o = i.token,
                                    a = i.randomStr,
                                    s = void 0 === a ? "" : a,
                                    0 !== n) {
                                        t.next = 11;
                                        break
                                    }
                                    if (!o) {
                                        t.next = 11;
                                        break
                                    }
                                    return c = s.split("").reverse().join("").split("@"),
                                    u = A(c, 2),
                                    l = u[0],
                                    h = void 0 === l ? "" : l,
                                    f = u[1],
                                    B(h, void 0 === f ? "" : f),
                                    t.abrupt("return", this.token = o);
                                case 11:
                                    this.token = "",
                                    this.errorTip(r || "token 获取失败"),
                                    this.hideLoading(),
                                    t.next = 32;
                                    break;
                                case 16:
                                    t.prev = 16,
                                    t.t0 = t.catch(1),
                                    p = t.t0 || {},
                                    d = p.error,
                                    g = (d = void 0 === d ? {} : d).msg,
                                    m = g ? g.match(/\d{3}$/) : null,
                                    v = m ? m[0] : null,
                                    t.t1 = v,
                                    t.next = "429" === t.t1 ? 26 : 28;
                                    break;
                                case 26:
                                    return this.errorTip("当前系统访问人数较多，请稍后重试"),
                                    t.abrupt("break", 30);
                                case 28:
                                    return this.errorTip("网络错误，请稍后重试"),
                                    t.abrupt("break", 30);
                                case 30:
                                    throw this.hideLoading(),
                                    t.t0;
                                case 32:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 16]])
                    }
                    ))),
                    function() {
                        return e.apply(this, arguments)
                    }
                    )
                }, {
                    key: "showLoading",
                    value: function() {
                        var t = document.getElementById(this.loadingDomID);
                        t ? t.style.display = "flex" : ((t = document.createElement("div")).style.cssText = "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99999;\n      ",
                        t.id = this.loadingDomID,
                        t.innerHTML = '\n      <img style="width: 100px;border-radius: 4px;position: absolute; left: 50%; top: 50%; margin-left: -50px; margin-top: -50px;" src="https://b.yzcdn.cn/public_files/2019/08/16/cd20fdda6cd217f27da625e229917f57.gif" />\n      ',
                        document.body.appendChild(t))
                    }
                }, {
                    key: "hideLoading",
                    value: function() {
                        var t = document.getElementById(this.loadingDomID);
                        t && (t.style.display = "none")
                    }
                }]),
                r
            }();
            u('.slide-captcha-container.hide {\n  display: none;\n}\n.slide-captcha-container .slide-captcha.pop {\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box {\n  width: 280px;\n  background: #fff;\n  z-index: 1;\n  position: absolute;\n  padding: 20px 18px 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  left: 50%;\n  top: 50%;\n  margin-left: -158px;\n  margin-top: -157px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box .title {\n  font-size: 20px;\n  line-height: 28px;\n  margin-bottom: 20px;\n  float: left;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box .close {\n  float: right;\n  cursor: pointer;\n  color: #999;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  font-size: 22px;\n  line-height: 22px;\n}\n.slide-captcha-container .slide-captcha.pop .slide-box .top-ctrl::after {\n  content: " ";\n  display: block;\n  clear: both;\n}\n.slide-captcha-container .slide-captcha.pop::before {\n  content: " ";\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  left: 0;\n  top: 0;\n}');
            var U, V = {
                exports: {}
            };
            U = V,
            function(t) {
                var e = function t(e, n) {
                    var r = /[^\w\-.:]/.test(e) ? new Function(t.arg + ",tmpl","var _e=tmpl.encode" + t.helper + ",_s='" + e.replace(t.regexp, t.func) + "';return _s;") : t.cache[e] = t.cache[e] || t(t.load(e));
                    return n ? r(n, t) : function(e) {
                        return r(e, t)
                    }
                };
                e.cache = {},
                e.load = function(t) {
                    return document.getElementById(t).innerHTML
                }
                ,
                e.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,
                e.func = function(t, e, n, r, i, o) {
                    return e ? {
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        " ": " "
                    }[e] || "\\" + e : n ? "=" === n ? "'+_e(" + r + ")+'" : "'+(" + r + "==null?'':" + r + ")+'" : i ? "';" : o ? "_s+='" : void 0
                }
                ,
                e.encReg = /[<>&"'\x00]/g,
                e.encMap = {
                    "<": "&lt;",
                    ">": "&gt;",
                    "&": "&amp;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                e.encode = function(t) {
                    return (null == t ? "" : "" + t).replace(e.encReg, (function(t) {
                        return e.encMap[t] || ""
                    }
                    ))
                }
                ,
                e.arg = "o",
                e.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}",
                U.exports ? U.exports = e : t.tmpl = e
            }(x);
            var F = V.exports
              , H = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        eventHandler: {}
                    };
                    l(this, t),
                    this.props = e,
                    this.state = {},
                    this.elm = null,
                    this.html = ""
                }
                return f(t, [{
                    key: "addEventListener",
                    value: function() {
                        var t = this;
                        this.elm.addEventListener("click", (function(e) {
                            return O(e, t.elm, t)
                        }
                        ), !1),
                        this.elm.addEventListener("touchstart", (function(e) {
                            return O(e, t.elm, t)
                        }
                        ), !1),
                        this.elm.addEventListener("mousedown", (function(e) {
                            return O(e, t.elm, t)
                        }
                        ), !1)
                    }
                }, {
                    key: "_render",
                    value: function() {
                        this.elm || (this.elm = document.createElement("div"),
                        this.addEventListener()),
                        this.elm.innerHTML = F(this.html, this.state)
                    }
                }, {
                    key: "emit",
                    value: function(t, e) {
                        this.props.eventHandler && "function" == typeof this.props.eventHandler[t] && this.props.eventHandler[t](e)
                    }
                }]),
                t
            }();
            var q = function(t) {
                d(n, H);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(n);
                function n(t) {
                    var r;
                    return l(this, n),
                    (r = e.call(this, t)).html = '<div class="slide-captcha-container">\n  <div class="slide-captcha pop" class="{%=o.className%}">\n    <div class="slide-box">\n      <div class="top-ctrl">\n        <div class="title">请完成安全验证</div>\n        <div class="close" @click="handleClose">+</div>\n      </div>\n      <slot/>\n    </div>\n  </div>\n</div>\n',
                    r._render(),
                    r
                }
                return f(n, [{
                    key: "slot",
                    set: function(t) {
                        var e = this.elm.getElementsByTagName("slot")[0];
                        e.parentElement.replaceChild(t, e)
                    }
                }, {
                    key: "handleClose",
                    value: function() {
                        this.emit("cancel")
                    }
                }]),
                n
            }()
              , G = '<div class="content">\n  <div\n    class="display"\n    style="height: {%=o.bgHeight%}px"\n  >\n    <div id="statusRef">\n      <div class="loading-icon">\n        <i class="icon-l"></i>\n        <div class="tip">加载中</div>\n      </div>\n    </div>\n    <div id="slidePicRef">\n      <div\n        class="refresh"\n        @click="handleRefresh"\n      ></div>\n      <div class="bg"><img id="bigImg" src="{%=o.bigUrl%}" /></div>\n      <div\n        id="blockRef"\n        class="view-block"\n        @touchstart="handleMouseDown"\n        @mousedown="handleMouseDown"\n        style="left: {%=o.left%}px; top: {%=o.top%}px"\n      >\n        <img\n          id="smallImg"\n          style="width: {%=o.smallImageWidth%}px"\n          src="{%=o.smallUrl%}"\n        />\n      </div>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="bar">\n      <div id="slideTipsRef" class="placeholder" @click="handleExceptionRefresh"></div>\n      <div\n        id="slideBlockRef"\n        class="slide-block {%=o.slideBlockClass%}"\n        style="left:{%=o.left%}px"\n        @touchstart="handleMouseDown"\n        @mousedown="handleMouseDown"\n      >\n        <span id="slideIconRef" class="icon"></span>\n      </div>\n      <div id="maskRef" class="mask" style="width:{%=o.left%}px" />\n    </div>\n  </div>\n</div>\n';
            u('@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.slide-captcha-container .content .display {\n  margin-bottom: 20px;\n  position: relative;\n  background-color: rgba(216, 216, 216, 0.33);\n  overflow: hidden;\n}\n.slide-captcha-container .content .display,\n.slide-captcha-container .content .display > * {\n  -webkit-user-drag: none;\n  user-select: none;\n}\n.slide-captcha-container .content .display .loading-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -60px;\n  margin-top: -30px;\n  width: 120px;\n  height: 60px;\n  text-align: center;\n}\n.slide-captcha-container .content .display .loading-icon .icon-e {\n  font-size: 40px;\n  color: #d5d5d5;\n}\n.slide-captcha-container .content .display .loading-icon .icon-l {\n  display: inline-block;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA51BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uAAD93d3zS0v/8vLwFhbvCgrvBAT/9vb4jo73fn73eHjwGxv//v7/+vr92tr3hYX2amr1ZGT1YWH0TEzzQEDyMzPxKirwERH+7Oz91tb8zMz7v7/7urr7tbX5np7xIyP+4uL6sLD6q6v1Wlr0UVHzRkb5oKD2cXH0V1diGNV2AAAAI3RSTlMA39KRTQkG+fHv7OXi3dXFsZ2UcWhSPx4cFBIBu0VtbCdGuvm/TykAAAK6SURBVFjDxZkHdtswDEBpjXgk3ivyTAo5trx3vOKV3fb+52lrS21TkSBFVS//AP+RAgiQEOFgVOuZihKKhcOxkFLJ1KsGkUfXVAVcKKqmy9jKhXQEGETShbJH3UUuDijx3IWXvWYvgctlVnjnWgiECGlCumIKhEkV+b58FDwQzfOCoYJHVDQ4pSR4Jlli+64TIEHimuW7uQIprm4Y68N8uJG6xlICpEmUKPFNgg+S7lir4AvVlc/gk38yvBgFn0Q/nkL++W0s2oN+EzvXH+oL8Og8mj8ZbICN9sen8+vVwTwxx6qZThyywKV7FraxTWd/p6BAfZ6aZ8ZYDXeSMQd83m1hAxBydn+LA5+WLWyinevcCwvAZ2P72kPAKJyEaeCzt4UtQEmfciYCfCa2cAUoEd1Oai53tnABOJpgmRmubeGbQNFRgM/WtJkBjkKIAQL0HGEfOBjkFgRYOsJvwOGW1IDPk+mw3jbHu2Nvvni0BjNaktdIRnzHDtgHzZAKcOm0XC5mlldEgnw06QyoYQ6JFGs677QqS2LAo+8yITkUI2Hg8GKymICbME/YmbSZwjlNiG15s2/Cm8lmRdsyIyjDQ+9+8Kvg3yHCFjUoCtKTqEJ8hQojsS0R4Su4+cI4eqaI8Jl69OoSQqQD1klVWmgBhSox/u8KDUIUaeGW2gKIKi0c05uUJitcj+htVI9ICqeMRk/SksId4ypCCpLCB9ZlqRyXFLKucyQnJbQ6lAuncyWWEXbZV2KS9SxsL78il3aih5jCe5dq9b338jDCnxVEExFay9fJ83iEP3wcUqjQWs67h8YQUFLo43HtCPuz7v4JBIgW0eftsdVaTLu7EQiTD/gB7n9EEPwQw/+YJfhBkPyoKvBhmv9xX/ADSfmRacBD3eDHzvKDcf+j+8//uWBjVGt///6ocX9//AC2nLe96zxw0QAAAABJRU5ErkJggg==") no-repeat;\n  background-size: 100%;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 2px 8px rgba(200, 201, 204, 0.5);\n  border-radius: 50%;\n  position: relative;\n}\n.slide-captcha-container .content .display .loading-icon .icon-l::before {\n  content: " ";\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAnFBMVEX/qqruAADvAAD/GhrvAADvAADwAADvAADyBwfuAADuAADvAADvAADvAAD/JibvAADvAADvAADvAADwAADwAgLvBAT0Bgb1Cgr0Dg7/FhbvAADzBgbuAADvAADvAADvAADvAADvAADvAgLwAwPxAwPwAwP1CAjvAwPxBQX/EhLvAADvAADwAwPxAwP3CQnzDAz/VVXvAADvAgLuAACAwTkdAAAAM3RSTlMDw9IJ/PqEjCb38+qunAbB7t26lmhBLBkRC4ko5eHMtKWPfGJZTR9eNA2ek1NHHhUDyXBoC+/ZAAAC+ElEQVR42tzbaXLiMBAF4CfjJV7AGGMwhLAm7AzM9P3vNiRFWbYDhD+p4um7gcpWd6tbwi+L/SAcJePOdDdfHF5aoKWkzH7rzBbrBggp+c62mosXkFFyQxh1/4CIkjssLzuBhJL73txXUFDyo7/dI56fkgc40f7pI5mSx7SHfTy17ixtTqPYGjnyA39HEsX6WXc2SWy5zWkSZZdGbz/v+HKDPe2BSSNzlSPXRVxLATaH4ViucbwN2Ly6b3LF6B10Ttk2kO86RLu+MHif2FLnuwMQWqa+1CUfYNT3AqlLn75suerotqXGIimM6/J5KFUBYfj6svEcqWpy/l5ALzbk9wJWoVQEK5DKU1sqXLBaj6WiSdvXa3lSEbFueeCjLWVxDlZLJWXWk5/oH/+9EsZ6+OrvFa5Ba2lVVkL8TXIlJQnvPsFgIiUWb+xCayslMW8+AYZSEtHm+LN/UtIEsZUZFWT9m9BW9fV9EtCetD5tRbOYQ1drYsqGHyjRWHsrX3JLCgFx1QUs24ZsE3yIloLZUDTODvdFS0khoZw66G1iSKlS3iY+deSCJ4UOmLXGhqRFrG09++WbYpelUvDALNdTB4ftjsTN82IEarEUuD9JT88Zp6Cmk4nNnRU3oRmHRWCuAxfJ7cEbcl087kDN1bUjcYf+7Khv4AxBTQeuNvXxHX19v2sPaqkpdcrSLiIwwwuBO3QPtQtq7/rVBqgNdASmnjMAW0M6Q8j06yaad1pXnfRt9AzUXEO6EHjVUwZw08067lMJhqbkxIMp9dbAkYsQ3HSHi7ubUgrAC1DLTGkLNXxTMklHLmzq2Wi5U0d8l/bT3pTd3isWMgO1hm3GjBdIisMVuE2KsMV8j/ZsZkqR0i0WcgC1zJT42y8WMgc3x5DRFUaGTKphmZIRY7kYg1skF8n/9uzYBmAQiqGgUyZSlCYlBTuw/240iB0+upvC8kttfSwttb2nHCm7JT6pbY+tO7X91/IFAAAAAAAAAAAAAAAAAAAAAAAAkgm4GR+RayV+hQAAAABJRU5ErkJggg==") no-repeat;\n  background-size: 100%;\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  z-index: 0;\n  animation: rotate 1s infinite linear;\n}\n.slide-captcha-container .content .display .loading-icon .tip {\n  color: #999;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.slide-captcha-container .content .display .refresh {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAMAAACl6XjsAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMACfXuEQXmc0ca2pPp1cutmIMmjolpQDYrt32ln1E0ZCFfBh5hAAABM0lEQVQ4y6WUa3eDIAyGA0QFra3zVu1t8///yZmso3iUZce+X+CEBwi5ALul6sGpP4mkL0o9zdLl7R5DsTVTIN24rbsyD3mwowWaecod/WKe69/5iEvskbL5UFnkTfamfwx9iD3YaLLAbewM2+oX5visE8JCbiRr7jHFfn3ASheyeyx7UmsVAYaGbtyO9/jCWvIUV8gUiHbQYRlIWE/hURLGblYgYuU8WBBFCVAipSjbIKqmhOzApEvff4IckPO1GyAaXla4bOcxTaI9mfJlPvURdfRCdr3xhbSWosMaEMoSTnQYglDkfkVumSM/L96AeOVG/QpiqLnFsyRw/pP36n4Ra7ZNaWUVM7Y9sMGcgbX+akxZMsJ+1f/5uC5bycFmAZrWxRJoi+fflhd3obhwGBD26RvNAzMZ4SEYUAAAAABJRU5ErkJggg==") no-repeat;\n  background-size: 100%;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.slide-captcha-container .content .display img {\n  display: block;\n  width: 100%;\n  pointer-events: none;\n}\n.slide-captcha-container .content .display .view-block {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n}\n.slide-captcha-container .content .control {\n  height: 44px;\n}\n.slide-captcha-container .content .control .bar {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.slide-captcha-container .content .control .bar .placeholder {\n  border: 1px solid #e5e5e5;\n  height: 100%;\n  text-align: center;\n  line-height: 44px;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  border-radius: 2px;\n  user-select: none;\n}\n.slide-captcha-container .content .control .bar .slide-block {\n  position: absolute;\n  background: #38f;\n  border-radius: 2px;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 100%;\n  display: table;\n  cursor: pointer;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  text-align: center;\n  transition: left 0.2s ease-out 0s;\n}\n.slide-captcha-container .content .control .bar .slide-block--arrow {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAPRJREFUSA1jYBhO4P///2oD5h+g5dVA/BuIA+juCKClLUAMAz+BDA+6OQJomSEQ/4XZDqW/A2lHejoiAWjhPzRHfAHyrenpiAw0B4C4H4HYhJ6OKMTiiLdAMT16OqIKiyNeAcU06emIZiyOeAYUU6GnI3qwOOIhUEyeno6YisURd4BiUjBHMIIUwDh0pG8A7bJnZGR8NVAOAPn1MhA7MIFYAwkGygGgKHABRsE7mnoemLwIJkKaOQBo+cBlQ6DlA1cQAS0fuKIYaPnAVUZAyweuOgZaPnANEqDlg6JJNnCNUlhBAgyJgWuWIzli4DomMEeQSgMAYqr1SM/RM9IAAAAASUVORK5CYII=");\n  background-size: 18px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon {\n  display: table-cell;\n  vertical-align: middle;\n  color: #fff;\n  font-size: 18px;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon.arrow::before {\n  content: " ";\n  display: inline-block;\n  width: 18px;\n  height: 20px;\n  background: no-repeat center 3px url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAPRJREFUSA1jYBhO4P///2oD5h+g5dVA/BuIA+juCKClLUAMAz+BDA+6OQJomSEQ/4XZDqW/A2lHejoiAWjhPzRHfAHyrenpiAw0B4C4H4HYhJ6OKMTiiLdAMT16OqIKiyNeAcU06emIZiyOeAYUU6GnI3qwOOIhUEyeno6YisURd4BiUjBHMIIUwDh0pG8A7bJnZGR8NVAOAPn1MhA7MIFYAwkGygGgKHABRsE7mnoemLwIJkKaOQBo+cBlQ6DlA1cQAS0fuKIYaPnAVUZAyweuOgZaPnANEqDlg6JJNnCNUlhBAgyJgWuWIzli4DomMEeQSgMAYqr1SM/RM9IAAAAASUVORK5CYII=);\n  background-size: 100%;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon.error::before {\n  content: " ";\n  display: inline-block;\n  width: 18px;\n  height: 20px;\n  background: no-repeat center 3px url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAABI0lEQVRYCe2XAQrDIAxFZUfaXcbuf4GdYMPli4EsOJtER1umINZqXr4x2JrSKisC/xSBnPOV6m3WmsECM8SrYh7UPqneQxBhBEZlgekTBQOqMOQyJIogLIZ5PlFkhdBChCwhUQTQYsAEy5cKHZB5+2YwxK6nNAIcsf0QoTsRcMRG++32PQ48c7tOtwYtjixztvy4xnsOe2MuJ97JXxy/6D2qLKFjwqunzCevrbNlHzG8gipKRwWi8M58VjGP2ws/nLqt0dGfFkSHy+75s09S0/JbyVyi0Rv7STpYHFrmTBHnceSZGxIXcRCxMYkbAY/YNsXNAM5gFHEEOtYvLAk61k8+wiRETTl1xfb5bhwyoaoo3+1AAtQz8eIXRcVa3RWB00TgDeeCXVcQJSDYAAAAAElFTkSuQmCC);\n  background-size: 100%;\n}\n.slide-captcha-container .content .control .bar .slide-block .icon.success::before {\n  content: " ";\n  display: inline-block;\n  width: 18px;\n  height: 20px;\n  background: no-repeat center 3px url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAABGElEQVRYCe2UyQ3CMBBFuVAEDeTEgUbYGmAvAppCNEEP3KiAAkCC8CZiUBQ5IYuxWTzSz0Rexs/fTlqtEMGB4MCPOhDHcfQxWwNmjC5o7R0qBcNrEhtvUCyvzjxYknTl2XUOxaIjJMeUDoGZ/D3MEBdMzkx9OBNgjK5zRHnOzIwT3tloHYaCPbRHnargzBkg0wWu5wzFBOaEJA6oNBRjBeaM0iH/mdowEZMVRouWgmKwXRg5Goq20U5JUrkQinF9ZHJmLnUbBYUrQeXA3GhvDqM7KQtVALPQWtbyKyinMLqrAqgjfdk7I8dk3xmF0VwARdcz3MCUhBKYpY51llnU9PX5gdFdZ6D8wmSgtsCttC3k4EBw4NscuAO6Cg6c6rGw9AAAAABJRU5ErkJggg==);\n  background-size: 100%;\n}\n.slide-captcha-container .content .control .bar .mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  border: 1px solid rgba(51, 136, 255, 0.3);\n  height: 100%;\n  box-sizing: border-box;\n  background: rgba(51, 136, 255, 0.16);\n  border-right: 0;\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  transition: width 0.2s ease-out 0s;\n}\n.slide-captcha-container .content .control .bar.slide .slide-block {\n  transition: none;\n}\n.slide-captcha-container .content .control .bar.slide .mask {\n  transition: none;\n}\n.slide-captcha-container .content .control .bar.failed .slide-block {\n  background: #df4545;\n}\n.slide-captcha-container .content .control .bar.failed .mask {\n  border: 1px solid rgba(223, 69, 69, 0.4);\n  border-right: 0;\n  background: rgba(223, 69, 69, 0.1);\n}\n.slide-captcha-container .content .control .bar.success .slide-block {\n  background: #2da641;\n}\n.slide-captcha-container .content .control .bar.success .mask {\n  border: 1px solid rgba(45, 166, 65, 0.4);\n  border-right: 0;\n  background: rgba(45, 166, 65, 0.08);\n}\n.slide-captcha-container .content .control .bar.limit .slide-block,\n.slide-captcha-container .content .control .bar.exception .slide-block {\n  display: none;\n}\n.slide-captcha-container .content .control .bar.limit .placeholder,\n.slide-captcha-container .content .control .bar.exception .placeholder {\n  color: #df4545;\n  border: 1px solid rgba(223, 69, 69, 0.4);\n  background: rgba(223, 69, 69, 0.1);\n  cursor: pointer;\n}\n.slide-captcha-container .content .control .bar.limit .mask,\n.slide-captcha-container .content .control .bar.exception .mask {\n  display: none;\n}\n.slide-captcha-container .content .control .bar.limit .icon,\n.slide-captcha-container .content .control .bar.exception .icon {\n  margin-right: 10px;\n}');
            var K = function(t) {
                d(n, H);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(n);
                function n() {
                    var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bgWhScale: 280 / 158,
                        initLeft: 30
                    };
                    return l(this, n),
                    (t = e.call(this, r)).html = G,
                    t.state = {
                        left: t.props.initLeft,
                        top: 0,
                        bigUrl: "",
                        smallUrl: "",
                        token: "",
                        scale: 1,
                        smallImageWidth: 1,
                        status: "loading",
                        bgHeight: 158
                    },
                    t._render(),
                    t
                }
                return f(n, [{
                    key: "render",
                    value: function() {
                        this.slideBlockElm = this.elm.querySelector("#slideBlockRef"),
                        this.blockElm = this.elm.querySelector("#blockRef"),
                        this.maskElm = this.elm.querySelector("#maskRef"),
                        this.slideIconElm = this.elm.querySelector("#slideIconRef"),
                        this.slideTipsElm = this.elm.querySelector("#slideTipsRef"),
                        this.statusElm = this.elm.querySelector("#statusRef"),
                        this.slidePicElm = this.elm.querySelector("#slidePicRef"),
                        this.updateSlideIcon(),
                        this.updateViewMode()
                    }
                }, {
                    key: "status",
                    set: function(t) {
                        this.state.status = t,
                        this.render()
                    }
                }, {
                    key: "left",
                    set: function(t) {
                        this.state.left = t,
                        this.slideBlockElm.style.left = "".concat(t, "px"),
                        this.blockElm.style.left = "".concat(t, "px"),
                        this.maskElm.style.width = "".concat(t, "px")
                    }
                }, {
                    key: "slideViewData",
                    set: function(t) {
                        var e = this.elm.getBoundingClientRect().width
                          , n = e / t.bigImageWidth;
                        Object.assign(this.state, {
                            scale: n,
                            smallImageWidth: t.smallImageWidth * n,
                            top: Math.ceil(t.cy * n),
                            bigUrl: t.bigUrl,
                            smallUrl: t.smallUrl,
                            left: this.props.initLeft,
                            bgHeight: e / this.props.bgWhScale,
                            status: "ready"
                        }),
                        this.render()
                    }
                }, {
                    key: "updateSlideIcon",
                    value: function() {
                        var t = this
                          , e = "arrow"
                          , n = "加载中";
                        switch (this.state.status) {
                        case "ready":
                            n = "向右拖动滑块填充拼图";
                            break;
                        case "failed":
                            e = "error",
                            n = "验证失败";
                            break;
                        case "success":
                            e = "success",
                            n = "验证成功";
                            break;
                        case "limit":
                            n = "失败过多，点此重试";
                            break;
                        case "exception":
                            n = "加载失败，请重试"
                        }
                        this.slideIconElm.className = "icon ".concat(e),
                        this.slideTipsElm.innerText = n,
                        this.maskElm.style.width = "".concat(this.state.left, "px"),
                        this.slideBlockElm.style.left = "".concat(this.state.left, "px"),
                        this.slideBlockElm.parentElement.className = "bar ".concat(this.state.status),
                        setTimeout((function() {
                            t.slideBlockElm.parentElement.className = "bar ".concat(t.state.status, " slide")
                        }
                        ), 1e3)
                    }
                }, {
                    key: "updateViewMode",
                    value: function() {
                        if (-1 !== ["loading", "exception"].indexOf(this.state.status))
                            this.statusElm.style.display = "block",
                            this.slidePicElm.style.display = "none";
                        else {
                            this.statusElm.style.display = "none",
                            this.slidePicElm.style.display = "block",
                            this.slidePicElm.querySelector("#bigImg").src = this.state.bigUrl;
                            var t = this.slidePicElm.querySelector("#smallImg");
                            t.src = this.state.smallUrl,
                            t.style.width = "".concat(this.state.smallImageWidth, "px"),
                            this.blockElm.style.left = "".concat(this.state.left, "px"),
                            this.blockElm.style.top = "".concat(this.state.top, "px")
                        }
                    }
                }, {
                    key: "handleRefresh",
                    value: function() {
                        this.emit("needCaptchaData")
                    }
                }, {
                    key: "handleMouseDown",
                    value: function(t) {
                        var e = this
                          , n = this.elm.getBoundingClientRect()
                          , r = n.left
                          , i = n.top
                          , o = n.width
                          , a = this.slideBlockElm.getBoundingClientRect().width
                          , s = t;
                        "touchstart" === t.type && (s = t.touches[0]);
                        var c = s
                          , u = c.pageX
                          , l = c.pageY
                          , h = [];
                        h.push({
                            x: u,
                            y: l,
                            t: Date.now()
                        }),
                        function(t) {
                            var e = function() {}
                              , n = function() {};
                            if ("touchstart" === t.type) {
                                t.preventDefault();
                                var r = function(t) {
                                    var n = t.touches[0];
                                    n && e(n.pageX, n.pageY)
                                };
                                window.addEventListener("touchmove", r, !0),
                                window.addEventListener("touchend", (function t(e) {
                                    var i = e.changedTouches[0];
                                    i && n(i.pageX, i.pageY),
                                    window.removeEventListener("touchmove", r, !0),
                                    window.removeEventListener("touchend", t, !0)
                                }
                                ), !0)
                            } else {
                                var i = function(t) {
                                    e(t.pageX, t.pageY)
                                };
                                window.addEventListener("mousemove", i, !1),
                                window.addEventListener("mouseup", (function t(e) {
                                    n(e.pageX, e.pageY),
                                    window.removeEventListener("mousemove", i, !1),
                                    window.removeEventListener("mouseup", t, !1)
                                }
                                ), !1)
                            }
                            return {
                                change: function(t) {
                                    return e = t,
                                    this
                                },
                                end: function(t) {
                                    n = t
                                }
                            }
                        }(t).change((function(t, n) {
                            h.length < 300 && (h.push({
                                x: t,
                                y: n,
                                t: Date.now()
                            }),
                            e.left = Math.min(e.props.initLeft + Math.max(0, t - u), o - a))
                        }
                        )).end((function() {
                            if (!(h.length < 5)) {
                                var t = [];
                                h.map((function(t) {
                                    var e = t.x
                                      , n = t.y
                                      , o = t.t;
                                    return {
                                        x: e - r,
                                        y: n - i,
                                        t: o
                                    }
                                }
                                )).reduce((function(e, n, r) {
                                    return 1 === r && t.push({
                                        mx: Math.ceil(e.x),
                                        my: Math.ceil(e.y),
                                        ts: e.t
                                    }),
                                    t.push({
                                        mx: Math.ceil(n.x - e.x),
                                        my: Math.ceil(n.y - e.y),
                                        ts: Math.ceil(n.t - e.t)
                                    }),
                                    n
                                }
                                )),
                                e.emit("complete", {
                                    userDataList: t,
                                    left: e.state.left,
                                    top: e.state.top,
                                    scale: e.state.scale
                                })
                            }
                        }
                        ))
                    }
                }]),
                n
            }();
            function W() {
                this.token = "",
                this.onSuccess,
                this.onFail,
                this.onCancel,
                this.now = Date.now()
            }
            W.prototype.getPageExposureTime = function() {
                return {
                    start: this.now,
                    now: Date.now()
                }
            }
            ,
            W.prototype.startVerify = function() {}
            ,
            W.prototype.submitUserData = function() {}
            ;
            var Q = function(t) {
                d(i, W);
                var e, n, r = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(i);
                function i(t) {
                    var e, n, o;
                    return l(this, i),
                    (e = r.call(this)).initLeft = 14,
                    e.bg_W_H_Scale = 280 / 158,
                    e.component = t,
                    e.initComAndEventHandler({
                        complete: (o = E(S.mark((function t(n) {
                            return S.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        e.submitUserData(n);
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        ))),
                        function(t) {
                            return o.apply(this, arguments)
                        }
                        ),
                        fail: function() {
                            return e.onFail()
                        },
                        cancel: function() {
                            e.onCancel(),
                            e.closeSlideCaptcha()
                        },
                        needCaptchaData: (n = E(S.mark((function t() {
                            return S.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                        t.next = 3,
                                        e.refreshSlideCaptcha();
                                    case 3:
                                        e.slideViewData = t.sent,
                                        t.next = 8;
                                        break;
                                    case 6:
                                        t.prev = 6,
                                        t.t0 = t.catch(0);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[0, 6]])
                        }
                        ))),
                        function() {
                            return n.apply(this, arguments)
                        }
                        )
                    }),
                    e
                }
                return f(i, [{
                    key: "initComAndEventHandler",
                    value: function(t) {
                        t.complete,
                        t.fail,
                        t.cancel,
                        t.needCaptchaData
                    }
                }, {
                    key: "status",
                    get: function() {
                        return this._status
                    },
                    set: function(t) {
                        this._status = t,
                        this.setStatus(t)
                    }
                }, {
                    key: "slideViewData",
                    set: function(t) {}
                }, {
                    key: "setStatus",
                    value: function(t) {}
                }, {
                    key: "closeSlideCaptcha",
                    value: function() {
                        this.hide()
                    }
                }, {
                    key: "hide",
                    value: function() {}
                }, {
                    key: "startVerify",
                    value: function(t) {
                        t.token,
                        t.onSuccess,
                        t.onFail
                    }
                }, {
                    key: "show",
                    value: function(t) {}
                }, {
                    key: "submitUserData",
                    value: (n = E(S.mark((function t(e) {
                        return S.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))),
                    function(t) {
                        return n.apply(this, arguments)
                    }
                    )
                }, {
                    key: "refreshSlideCaptcha",
                    value: (e = E(S.mark((function t() {
                        return S.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))),
                    function() {
                        return e.apply(this, arguments)
                    }
                    )
                }]),
                i
            }()
              , Y = {
                TENCENT: 0,
                SLIDE: 1,
                CLICK: 2,
                NUMBER: -1
            };
            var J = Y
              , X = function(t) {
                d(i, Q);
                var e, n, r = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(i);
                function i() {
                    return l(this, i),
                    r.call(this)
                }
                return f(i, [{
                    key: "startVerify",
                    value: function(t) {
                        var e = t.token
                          , n = t.onSuccess
                          , r = t.onFail
                          , i = t.onCancel
                          , o = t.bizType
                          , a = t.bizData;
                        this.token = e,
                        this.onSuccess = n,
                        this.onFail = r,
                        this.onCancel = i,
                        this.bizType = o,
                        this.bizData = a,
                        this.show()
                    }
                }, {
                    key: "submitUserData",
                    value: (n = E(S.mark((function t(e) {
                        var n, r, i, o, a, s, c, u, l = this;
                        return S.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = e.userDataList,
                                    r = e.scale,
                                    i = e.left,
                                    o = e.top,
                                    t.prev = 1,
                                    t.next = 4,
                                    C({
                                        url: N,
                                        method: "POST",
                                        withCredentials: !0,
                                        data: {
                                            token: this.token,
                                            bizType: this.bizType,
                                            bizData: this.bizData,
                                            captchaType: J.SLIDE,
                                            userBehaviorData: j({
                                                cx: Math.ceil(i),
                                                cy: Math.ceil(o),
                                                scale: r,
                                                slidingEvents: n
                                            })
                                        },
                                        options: {
                                            rawResponse: !0
                                        }
                                    });
                                case 4:
                                    a = t.sent,
                                    s = a.code,
                                    c = a.data,
                                    u = a.msg,
                                    0 === s && c.success ? (this.status = "success",
                                    setTimeout((function() {
                                        l.hide(),
                                        l.onSuccess()
                                    }
                                    ), 500)) : c ? c.captchaType === J.SLIDE ? c && c.needRefresh ? this.status = "limit" : (this.status = "failed",
                                    setTimeout(E(S.mark((function t() {
                                        return S.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    l.refreshSlideCaptcha();
                                                case 2:
                                                    l.slideViewData = t.sent;
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ))), 500)) : this.onFail(c) : this.onFail(u),
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(1),
                                    this.onFail("网络错误，请稍候再试");
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 9]])
                    }
                    ))),
                    function(t) {
                        return n.apply(this, arguments)
                    }
                    )
                }, {
                    key: "refreshSlideCaptcha",
                    value: (e = E(S.mark((function t() {
                        var e, n = this;
                        return S.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.status = "loading",
                                    t.prev = 1,
                                    t.next = 4,
                                    C({
                                        url: P,
                                        method: "GET",
                                        withCredentials: !0,
                                        data: {
                                            token: this.token,
                                            captchaType: J.SLIDE
                                        },
                                        options: {
                                            rawResponse: !0
                                        }
                                    });
                                case 4:
                                    return e = t.sent,
                                    t.abrupt("return", new Promise((function(t) {
                                        var r = e.code
                                          , i = e.data
                                          , o = e.msg;
                                        if (0 === r) {
                                            var a = i.captchaObtainInfoResult
                                              , s = new Image
                                              , c = new Image;
                                            Promise.all([new Promise((function(t) {
                                                s.onload = function() {
                                                    t()
                                                }
                                            }
                                            )), new Promise((function(t) {
                                                c.onload = function() {
                                                    t()
                                                }
                                            }
                                            ))]).then((function() {
                                                t({
                                                    cy: a.cy,
                                                    bigUrl: a.bigUrl,
                                                    smallUrl: a.smallUrl,
                                                    token: a.token,
                                                    bigImageWidth: s.width,
                                                    smallImageWidth: c.width
                                                })
                                            }
                                            )),
                                            s.src = a.bigUrl,
                                            c.src = a.smallUrl
                                        } else
                                            void 0 !== i.captchaType ? n.onFail(i) : o && (n.status = "exception",
                                            n.onFail(o))
                                    }
                                    )));
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t.catch(1),
                                    this.onFail("网络错误，请稍候再试");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 8]])
                    }
                    ))),
                    function() {
                        return e.apply(this, arguments)
                    }
                    )
                }]),
                i
            }();
            var Z = function(t) {
                d(n, X);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(n);
                function n() {
                    return l(this, n),
                    e.apply(this, arguments)
                }
                return f(n, [{
                    key: "initComAndEventHandler",
                    value: function(t) {
                        var e = t.complete
                          , n = t.fail
                          , r = t.cancel
                          , i = t.needCaptchaData;
                        this.container = new q({
                            eventHandler: {
                                cancel: r
                            }
                        }),
                        this.content = new K({
                            initLeft: this.initLeft,
                            bgWhScale: this.bg_W_H_Scale,
                            eventHandler: {
                                needCaptchaData: i,
                                complete: e,
                                fail: n
                            }
                        }),
                        this.container.slot = this.content.elm,
                        this.hide(),
                        document.body.appendChild(this.container.elm)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.container.elm.firstChild.classList.add("hide")
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        this.container.elm.firstChild.classList.remove("hide"),
                        this.refreshSlideCaptcha().then((function(e) {
                            t.slideViewData = e
                        }
                        ))
                    }
                }, {
                    key: "setStatus",
                    value: function(t) {
                        this.content.status = t
                    }
                }, {
                    key: "slideViewData",
                    set: function(t) {
                        this.content.slideViewData = t
                    }
                }]),
                n
            }();
            function $() {
                W.prototype.constructor.call(this),
                this.gyroscopeTrack = [],
                this.speedTrack = []
            }
            function tt() {
                W.prototype.constructor.call(this),
                this.mouseTrackData = [],
                this.mouseData = {},
                this.clickAreaData = []
            }
            function et() {
                W.prototype.constructor.call(this),
                this.touchData = {}
            }
            $.prototype.handlerGyroscope = function(t) {
                var e = t.x
                  , n = t.y
                  , r = t.z;
                this.gyroscopeTrack.push({
                    x: e,
                    y: n,
                    z: r,
                    t: Date.now()
                })
            }
            ,
            $.prototype.handlerSpeed = function(t) {
                var e = t.x
                  , n = t.y
                  , r = t.z;
                this.speedTrack.push({
                    x: e,
                    y: n,
                    z: r,
                    t: Date.now()
                })
            }
            ,
            $.prototype.getAndClearGyroscopeTrack = function() {
                var t = this.gyroscopeTrack;
                return this.gyroscopeTrack = [],
                t
            }
            ,
            $.prototype.getAndClearSpeedTrack = function() {
                var t = this.speedTrack;
                return this.speedTrack = [],
                t
            }
            ,
            $.prototype.startRecordGyroscopeTrack = function() {}
            ,
            $.prototype.startRecordSpeedTrack = function() {}
            ,
            tt.prototype.handlerMousemove = function(t) {
                this.mouseTrackData.push({
                    x: t.pageX,
                    y: t.pageY,
                    t: Date.now()
                })
            }
            ,
            tt.prototype.getAndClearMouseTrack = function() {
                var t = this.mouseTrackData;
                this.mouseTrackData = [];
                var e = [];
                return Array.isArray(t) && 0 !== t.length ? (t.reduce((function(t, n, r) {
                    return 1 === r && e.push(t),
                    e.push({
                        x: Math.ceil(n.x - t.x),
                        y: Math.ceil(n.y - t.y),
                        t: Math.ceil(n.t - t.t)
                    }),
                    n
                }
                )),
                e) : e
            }
            ,
            tt.prototype.startRecordClickArea = function() {
                var t = this;
                window.addEventListener("click", (function(e) {
                    if (Array.isArray(e.path)) {
                        for (var n, r = e.path, i = []; n = r.pop(); )
                            "function" == typeof n.getBoundingClientRect && i.push(JSON.parse(JSON.stringify(n.getBoundingClientRect())));
                        var o = window.innerHeight
                          , a = window.innerWidth;
                        i.push({
                            bottom: o,
                            height: o,
                            left: 0,
                            right: a,
                            top: 0,
                            width: a,
                            x: 0,
                            y: 0
                        }),
                        t.clickAreaData = i.reverse()
                    }
                }
                ), !0)
            }
            ,
            tt.prototype.startRecordClick = function() {
                var t = this;
                window.addEventListener("mousedown", (function(e) {
                    t.mouseData.down = {
                        x: e.pageX,
                        y: e.pageY,
                        t: Date.now()
                    }
                }
                ), !0),
                window.addEventListener("mouseup", (function(e) {
                    t.mouseData.up = {
                        x: e.pageX,
                        y: e.pageY,
                        t: Date.now()
                    }
                }
                ), !0)
            }
            ,
            tt.prototype.startRecordMouseTrack = function() {
                window.addEventListener("mousemove", this.handlerMousemove.bind(this), !0)
            }
            ,
            et.prototype.startRecordTouchStart = function(t) {
                for (var e = [], n = 0, r = t.touches.length; n < r; n++) {
                    var i = t.touches[n];
                    e.push({
                        x: i.pageX,
                        y: i.pageY,
                        force: i.force
                    })
                }
                this.touchData.down = {
                    touches: e,
                    t: Date.now()
                }
            }
            ,
            et.prototype.startRecordTouchEnd = function(t) {
                for (var e = [], n = 0, r = t.changedTouches.length; n < r; n++) {
                    var i = t.changedTouches[n];
                    e.push({
                        x: i.pageX,
                        y: i.pageY,
                        force: i.force
                    })
                }
                this.touchData.up = {
                    touches: e,
                    t: Date.now()
                }
            }
            ;
            var nt, rt, it, ot = Y, at = function(t) {
                d(r, W);
                var e, n = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(r);
                function r() {
                    var t;
                    return l(this, r),
                    t = n.call(this),
                    $.prototype.constructor.call(m(t)),
                    tt.prototype.constructor.call(m(t)),
                    et.prototype.constructor.call(m(t)),
                    t.startRecordTouch(),
                    t.startRecordGyroscopeTrack(),
                    t.startRecordSpeedTrack(),
                    t.startRecordClickArea(),
                    t.startRecordClick(),
                    t.startRecordMouseTrack(),
                    t
                }
                return f(r, [{
                    key: "startRecordGyroscopeTrack",
                    value: function() {
                        var t = this;
                        window.addEventListener("deviceorientation", (function(e) {
                            t.handlerGyroscope({
                                y: e.gamma,
                                x: e.beta,
                                z: e.alpha
                            })
                        }
                        ), !0)
                    }
                }, {
                    key: "startRecordSpeedTrack",
                    value: function() {
                        var t = this;
                        window.addEventListener("devicemotion", (function(e) {
                            var n = e.acceleration || e.accelerationIncludingGravity || {}
                              , r = n.x
                              , i = n.y
                              , o = n.z;
                            r === i && r === o && void 0 === r || t.handlerSpeed({
                                x: r,
                                y: i,
                                z: o
                            })
                        }
                        ), !0)
                    }
                }, {
                    key: "startRecordTouch",
                    value: function() {
                        var t = this;
                        window.addEventListener("touchstart", (function(e) {
                            t.startRecordTouchStart(e)
                        }
                        ), !0),
                        window.addEventListener("touchend", (function(e) {
                            t.startRecordTouchEnd(e)
                        }
                        ), !0)
                    }
                }, {
                    key: "startVerify",
                    value: function(t) {
                        var e = t.token
                          , n = t.onSuccess
                          , r = t.onFail
                          , i = t.bizType
                          , o = t.bizData;
                        this.token = e,
                        this.onSuccess = n,
                        this.onFail = r,
                        this.bizType = i,
                        this.bizData = o;
                        var a = {
                            clickAreaData: this.clickAreaData,
                            pageExposureTime: this.getPageExposureTime()
                        };
                        c.a.isMobile() ? Object.assign(a, {
                            touchData: this.touchData,
                            gyroscopeTrack: this.getAndClearGyroscopeTrack(),
                            speedTrack: this.getAndClearSpeedTrack()
                        }) : Object.assign(a, {
                            mouseTrackData: this.getAndClearMouseTrack(),
                            mouseData: this.mouseData
                        }),
                        this.submitUserData(a)
                    }
                }, {
                    key: "submitUserData",
                    value: (e = E(S.mark((function t(e) {
                        var n, r, i, o;
                        return S.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    C({
                                        url: N,
                                        method: "POST",
                                        data: {
                                            token: this.token,
                                            bizType: this.bizType,
                                            bizData: this.bizData,
                                            captchaType: ot.CLICK,
                                            userBehaviorData: j(e)
                                        },
                                        options: {
                                            rawResponse: !0
                                        },
                                        withCredentials: !0
                                    });
                                case 3:
                                    n = t.sent,
                                    r = n.code,
                                    i = n.data,
                                    0 === r && (o = i.captchaType,
                                    i.success ? this.onSuccess() : this.onFail({
                                        captchaType: o
                                    })),
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t.catch(0),
                                    this.onFail("网络错误，请稍候再试");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 8]])
                    }
                    ))),
                    function(t) {
                        return e.apply(this, arguments)
                    }
                    )
                }]),
                r
            }();
            nt = at,
            rt = Object.assign({}, $.prototype, tt.prototype, et.prototype),
            it = Object.getOwnPropertyNames(nt.prototype),
            Object.keys(rt).forEach((function(t) {
                -1 === it.indexOf(t) && (nt.prototype[t] = rt[t])
            }
            ));
            var st = function(t) {
                d(n, at);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(n);
                function n() {
                    return l(this, n),
                    e.call(this)
                }
                return n
            }();
            var ct = new (function(t) {
                d(n, z);
                var e = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = y(t);
                        if (e) {
                            var i = y(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return v(this, n)
                    }
                }(n);
                function n() {
                    var t;
                    return l(this, n),
                    (t = e.call(this)).slideCaptcha = new Z,
                    t.clickOrTouch = new st,
                    t
                }
                return f(n, [{
                    key: "errorTip",
                    value: function(t) {
                        !function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3
                              , n = "behavior-verify-web-toast-container"
                              , r = document.getElementById(n);
                            r || ((r = document.createElement("div")).id = n,
                            document.body.appendChild(r)),
                            r.innerText = t,
                            r.classList.add("show"),
                            clearTimeout(void 0),
                            setTimeout((function() {
                                r.classList.remove("show")
                            }
                            ), e)
                        }(t)
                    }
                }]),
                n
            }());
            e.a = function(t) {
                var e = t.onSuccess
                  , n = t.onFail
                  , r = t.onCancel
                  , i = t.bizType
                  , o = t.bizData;
                ct.check({
                    bizType: i,
                    bizData: o,
                    onSuccess: e,
                    onFail: n,
                    onCancel: r
                })
            }
        }
        ).call(this, n("yLpj"))
    },
    lz4H: function(t, e, n) {},
    nXAi: function(t, e, n) {
        "use strict";
        n.d(e, "f", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        )),
        n.d(e, "e", (function() {
            return a
        }
        )),
        n.d(e, "d", (function() {
            return s
        }
        )),
        n.d(e, "c", (function() {
            return c
        }
        )),
        n.d(e, "a", (function() {
            return u
        }
        ));
        var r = n("5dt4")
          , i = function(t) {
            return {
                selector: "account__logo",
                data: {
                    et: "click",
                    ei: "youzan_icon",
                    en: "有赞图标",
                    params: {
                        country_code: Object(r.a)(),
                        mobile: Object(r.b)(),
                        module: t
                    }
                }
            }
        }
          , o = function(t) {
            return {
                selector: "js-retrieve-btn",
                data: {
                    et: "click",
                    ei: "forget_password",
                    en: "忘记密码",
                    params: {
                        country_code: Object(r.a)(),
                        mobile: Object(r.b)(),
                        module: t
                    }
                }
            }
        }
          , a = function(t) {
            return {
                selector: "js-goto-register-btn",
                data: {
                    et: "click",
                    ei: "turn_to_register",
                    en: "去注册",
                    params: {
                        country_code: Object(r.a)(),
                        mobile: Object(r.b)(),
                        module: t
                    }
                }
            }
        }
          , s = function(t) {
            return {
                selector: "js-goto-login-btn",
                data: {
                    et: "click",
                    ei: "turn_to_login",
                    en: "去登录",
                    params: {
                        country_code: Object(r.a)(),
                        mobile: Object(r.b)(),
                        module: t
                    }
                }
            }
        }
          , c = function(t) {
            return {
                selector: "js-get-identify-code",
                data: {
                    et: "click",
                    ei: "get_identify_code",
                    en: "获取验证码",
                    params: {
                        country_code: Object(r.a)(),
                        mobile: Object(r.b)(),
                        module: t
                    }
                }
            }
        }
          , u = function(t) {
            return {
                selector: "js-get-identify-code",
                data: {
                    et: "click",
                    ei: "fetch_code",
                    en: "获取验证码",
                    params: {
                        country_code: Object(r.a)(),
                        mobile: Object(r.b)(),
                        module: t
                    }
                }
            }
        }
    },
    o0o1: function(t, e, n) {
        t.exports = n("N6oO")("o0o1")
    },
    pMcc: function(t, e, n) {
        t.exports = n("SFYO")("pMcc")
    },
    qnJg: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("q1tI")
          , i = n.n(r)
          , o = n("i8i4")
          , a = n.n(o)
          , s = n("gSup")
          , c = n("OvgT")
          , u = n("HaE+")
          , l = n("ODXe")
          , h = n("o0o1")
          , f = n.n(h)
          , p = n("pVbJ")
          , d = (n("YjmP"),
        n("ZWy1"),
        n("h4m+"),
        n("ypRW"))
          , g = n("f4ya")
          , m = n.n(g)
          , v = n("NkVu")
          , y = n("wx14")
          , b = n("VTBJ")
          , A = n("jQsQ")
          , w = n("214s")
          , E = n.n(w)
          , x = n("oAOj")
          , k = (n("kifK"),
        n("rW1U"))
          , S = n("ZVAt")
          , T = n("03kM")
          , C = n("IJYC")
          , O = n("fYP4")
          , D = n("NBWt")
          , _ = n("o1E3")
          , R = n("OkiR")
          , B = n("N2V7")
          , j = n("UH8F");
        n("H2OQ"),
        n("v25+"),
        n("JmmQ"),
        n("pMcc");
        function I() {
            var t = Object(r.useState)(0)
              , e = Object(l.default)(t, 2)
              , n = e[0]
              , o = e[1];
            return {
                errCode: n,
                dealWithErro: Object(r.useCallback)((function(t, e, n, r) {
                    var a = t.code
                      , s = t.msg;
                    if (160210182 !== a || "function" != typeof r) {
                        if (100001 === a)
                            return p.Notify.error("网络错误，请刷新页面重试"),
                            setTimeout((function() {
                                window.location.reload()
                            }
                            ), 400);
                        if (1352e5 === a || 135200020 === a)
                            return o(a),
                            e(!0, !0, ""),
                            void n(!0, "账号或密码错误");
                        if (160210038 !== a)
                            if (135200014 !== a)
                                if (135200025 !== a) {
                                    if (160210047 !== a && 160210080 !== a)
                                        return 160210081 === a ? B.Sweetalert.alert({
                                            title: "提示",
                                            closeBtn: !0,
                                            content: i.a.createElement("p", null, t.msg),
                                            confirmText: "我知道了"
                                        }) : void e(!0, !0, s);
                                    B.Sweetalert.alert({
                                        title: "提示",
                                        closeBtn: !0,
                                        content: i.a.createElement("div", {
                                            className: "login-container__dialog__error"
                                        }, i.a.createElement("p", {
                                            className: "title"
                                        }, i.a.createElement(j.Icon, {
                                            type: "error-circle",
                                            className: "login-container__dialog__error__icon"
                                        }), i.a.createElement("span", null, "账号存在违规嫌疑")), i.a.createElement("p", {
                                            className: "message"
                                        }, s)),
                                        confirmText: "我知道了"
                                    })
                                } else
                                    e(!0, !0, '账户未设置密码，<a href="/retrieve-pass">请点击设置登录密码</a>');
                            else
                                B.Sweetalert.alert({
                                    title: "提示",
                                    closeBtn: !0,
                                    content: i.a.createElement("div", {
                                        className: "login-container__dialog__error"
                                    }, i.a.createElement("p", {
                                        className: "title"
                                    }, i.a.createElement(j.Icon, {
                                        type: "error-circle",
                                        className: "login-container__dialog__error__icon"
                                    }), i.a.createElement("span", null, "账号密码输入错误次数过多已被锁定"))),
                                    confirmText: "找回密码",
                                    onConfirm: function() {
                                        R.b.href = "/retrieve-pass"
                                    }
                                });
                        else
                            n(!0, s)
                    } else
                        r({
                            code: a,
                            action: "USER_LOGIN_NEED_AGAIN_CAPTCHA",
                            data: {}
                        })
                }
                ), [])
            }
        }
        var L = n("6JVB")
          , M = (n("AzM8"),
        n("TSYQ"))
          , N = n.n(M)
          , P = n("CAyg")
          , z = function(t) {
            var e = t.btnExtraClassName
              , n = t.protocolExtraClassName
              , r = t.loginDisabled;
            return i.a.createElement("div", {
                className: "login-container__auto"
            }, t.onAutoLoginChange ? i.a.createElement(L.Checkbox, {
                className: "login-container__auto__check",
                checked: t.autoLogin,
                onChange: t.onAutoLoginChange
            }, "3天内自动登录") : null, i.a.createElement("div", null, t.onAgreeChange ? i.a.createElement(L.Checkbox, {
                className: N()("login-container__protocol__check", n),
                checked: t.agree,
                onChange: t.onAgreeChange
            }, "阅读并同意", i.a.createElement("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.youzan.com/intro/rule/detail?alias=4f234e2f&pageType=rules"
            }, "用户协议"), i.a.createElement("span", null, "、"), i.a.createElement("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.youzan.com/intro/rule/detail?alias=132atyi19&pageType=rules"
            }, "隐私声明")) : null), i.a.createElement(P.a, {
                className: N()("login-container__btn", e),
                disabled: r,
                bordered: !1,
                type: "primary",
                size: "large",
                htmlType: "submit",
                block: !0,
                loading: t.loading
            }, "登 录"), i.a.createElement("div", {
                className: "login-container__links"
            }, i.a.createElement("div", {
                className: "login-container__links__actions"
            }, "没有账号，", i.a.createElement("a", {
                className: "js-goto-register-btn",
                href: "/register"
            }, "免费注册"))))
        }
          , U = n("m72K")
          , V = n("T901")
          , F = x.Form.Field
          , H = x.Form.createForm
          , q = i.a.forwardRef((function(t, e) {
            var n = Object(C.a)({})
              , o = n.countryCode
              , a = n.countryEng
              , s = n.mobile
              , c = n.accountError
              , h = n.codeError
              , p = n.accountErrorText
              , d = n.handleAccountChange
              , g = n.handleSetAccountError
              , m = n.accountValidations
              , v = Object(O.a)()
              , w = v.pass
              , R = v.passError
              , B = v.passErrorText
              , j = v.handlePassChange
              , L = v.handleSetPassError
              , M = v.passValidations
              , N = I()
              , P = N.errCode
              , H = N.dealWithErro
              , q = Object(r.useState)(!1)
              , G = Object(l.default)(q, 2)
              , K = G[0]
              , W = G[1]
              , Q = Object(r.useState)(!1)
              , Y = Object(l.default)(Q, 2)
              , J = Y[0]
              , X = Y[1]
              , Z = Object(r.useState)("true" === D.a.getItem("loginAutoRemember") || !1)
              , $ = Object(l.default)(Z, 2)
              , tt = $[0]
              , et = $[1]
              , nt = Object(V.a)()
              , rt = nt.motionNames
              , it = nt.trigger
              , ot = Object(r.useMemo)((function() {
                return _.a.isNotEmptyValues(s, w)
            }
            ), [s, w])
              , at = Object(r.useCallback)(function() {
                var e = Object(u.default)(f.a.mark((function e(n) {
                    var r, i, o, a, s, c, u, l;
                    return f.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return W(!0),
                                r = n.account,
                                i = n.password,
                                o = n.ticket,
                                a = n.csrf_token,
                                s = i.pass,
                                c = {
                                    countryCode: r.countryCode,
                                    mobile: r.mobile,
                                    password: E.a.aes.legacyEncrypt(s),
                                    autoLogin: !0,
                                    ticket: o,
                                    csrf_token: a,
                                    fromSource: "SOURCE_PC"
                                },
                                e.prev = 4,
                                e.next = 7,
                                Object(k.f)(c);
                            case 7:
                                u = e.sent,
                                t.onOk(u, c),
                                e.next = 15;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(4),
                                l = function(e) {
                                    t.onOk(e, c)
                                }
                                ,
                                H(e.t0, g, L, l);
                            case 15:
                                return e.prev = 15,
                                W(!1),
                                e.finish(15);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[4, 11, 15, 18]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [H, g, L, t])
              , st = Object(r.useCallback)((function(t) {
                var e = t.account;
                D.a.setItem("loginCountryCode", e.countryCode),
                D.a.setItem("loginCountryEng", e.eng),
                D.a.setItem("loginAccount", t.account.mobile),
                D.a.setItem("loginAutoRemember", String(tt)),
                Object(A.a)({
                    bizType: U.a.B_LOGIN_PASS,
                    onSuccess: function(e) {
                        at(Object(b.default)(Object(b.default)({}, t), {}, {
                            ticket: e
                        }))
                    }
                })
            }
            ), [tt, at])
              , ct = Object(r.useCallback)((function(t) {
                d(t),
                1352e5 === P && L(!1, "")
            }
            ), [P, d, L])
              , ut = Object(r.useCallback)((function(t) {
                j(t),
                1352e5 === P && g(!1, !1, "")
            }
            ), [P, j, g])
              , lt = Object(r.useCallback)((function(e) {
                e.preventDefault(),
                J ? t.zentForm.validateForm(!0, (function() {
                    var e = t.zentForm
                      , n = e.getFieldError
                      , r = e.getFormValues
                      , i = n("account")
                      , o = n("password");
                    if (i || o)
                        return i && g(!0, !1, i),
                        void (o && L(!0, o));
                    st(r())
                }
                )) : it()
            }
            ), [J, g, L, t.zentForm, st, it])
              , ht = Object(r.useMemo)((function() {
                return t.zentForm.isSubmitting() || K
            }
            ), [t.zentForm, K]);
            return i.a.createElement(x.Form, {
                horizontal: !0,
                onSubmit: lt
            }, i.a.createElement(F, Object(y.default)({
                name: "account",
                component: S.a,
                value: {
                    countryCode: o,
                    eng: a,
                    mobile: s,
                    error: c,
                    codeError: h,
                    errorText: p
                }
            }, m, {
                validateOnBlur: !0,
                onChange: ct
            })), i.a.createElement(F, Object(y.default)({
                name: "password",
                component: T.a,
                value: {
                    pass: w,
                    error: R,
                    errorText: B,
                    placeholder: "输入登录密码",
                    showForgetPass: !0
                }
            }, M, {
                validateOnBlur: !0,
                onChange: ut,
                onSubmit: lt
            })), i.a.createElement(z, {
                loading: ht,
                autoLogin: tt,
                protocolExtraClassName: rt,
                agree: J,
                btnExtraClassName: "js-login-btn",
                onAutoLoginChange: function() {
                    return et(!tt)
                },
                onAgreeChange: function(t) {
                    return X(t.target.checked)
                },
                loginDisabled: !(ot && J)
            }))
        }
        ))
          , G = H()(q)
          , K = n("ZaH+")
          , W = n("b1/A")
          , Q = x.Form.Field
          , Y = x.Form.createForm
          , J = i.a.forwardRef((function(t, e) {
            var n = Object(C.a)({})
              , o = n.countryCode
              , a = n.countryEng
              , s = n.mobile
              , c = n.accountError
              , h = n.codeError
              , p = n.accountErrorText
              , d = n.handleAccountChange
              , g = n.handleSetAccountError
              , m = n.accountValidations
              , v = Object(W.a)()
              , b = v.captcha
              , A = v.captchaError
              , w = v.captchaErrorText
              , E = v.handleCaptchaChange
              , T = v.handleSetCaptchaError
              , O = v.captchaValidations
              , R = I().dealWithErro
              , B = Object(r.useState)(!1)
              , j = Object(l.default)(B, 2)
              , L = j[0]
              , M = j[1]
              , N = Object(r.useState)(!1)
              , P = Object(l.default)(N, 2)
              , U = P[0]
              , F = P[1]
              , H = Object(r.useState)("true" === D.a.getItem("loginAutoRemember") || !1)
              , q = Object(l.default)(H, 2)
              , G = q[0]
              , Y = q[1]
              , J = Object(V.a)()
              , X = J.motionNames
              , Z = J.trigger
              , $ = Object(r.useMemo)((function() {
                return _.a.isNotEmptyValues(s, b)
            }
            ), [s, b])
              , tt = Object(r.useMemo)((function() {
                return t.zentForm.isSubmitting() || L
            }
            ), [t.zentForm, L])
              , et = Object(r.useCallback)((function(t) {
                g(!0, !0, t)
            }
            ), [g])
              , nt = Object(r.useCallback)(function() {
                var e = Object(u.default)(f.a.mark((function e(n) {
                    var r, i, o, a, s, c;
                    return f.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = n.account,
                                D.a.setItem("loginCountryCode", r.countryCode),
                                D.a.setItem("loginCountryEng", r.eng),
                                D.a.setItem("loginAccount", n.account.mobile),
                                D.a.setItem("loginAutoRemember", String(G)),
                                M(!0),
                                i = n.captcha,
                                o = n.csrf_token,
                                a = {
                                    countryCode: r.countryCode,
                                    mobile: r.mobile,
                                    smsCaptcha: i.captcha,
                                    autoLogin: !0,
                                    csrf_token: o,
                                    fromSource: "SOURCE_PC"
                                },
                                e.prev = 8,
                                e.next = 11,
                                Object(k.e)(a);
                            case 11:
                                s = e.sent,
                                t.onOk(s, a),
                                e.next = 19;
                                break;
                            case 15:
                                e.prev = 15,
                                e.t0 = e.catch(8),
                                c = function(e) {
                                    t.onOk(e, a)
                                }
                                ,
                                R(e.t0, g, T, c);
                            case 19:
                                return e.prev = 19,
                                M(!1),
                                e.finish(19);
                            case 22:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[8, 15, 19, 22]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [G, R, g, T, t])
              , rt = Object(r.useCallback)((function(e) {
                e.preventDefault(),
                U ? t.zentForm.validateForm(!0, (function() {
                    var e = t.zentForm
                      , n = e.getFieldError
                      , r = e.getFormValues
                      , i = n("account")
                      , o = n("captcha");
                    if (i || o)
                        return i && g(!0, !0, i),
                        void (o && T(!0, o));
                    nt(r())
                }
                )) : Z()
            }
            ), [U, g, T, t.zentForm, nt, Z]);
            return i.a.createElement(x.Form, {
                horizontal: !0,
                onSubmit: rt
            }, i.a.createElement(Q, Object(y.default)({
                name: "account",
                component: S.a,
                value: {
                    countryCode: o,
                    eng: a,
                    mobile: s,
                    error: c,
                    codeError: h,
                    errorText: p
                }
            }, m, {
                validateOnBlur: !0,
                onChange: d
            })), i.a.createElement(Q, Object(y.default)({
                name: "captcha",
                component: K.a,
                value: {
                    captcha: b,
                    mobile: s,
                    countryCode: o,
                    error: A,
                    errorText: w,
                    onError: et
                }
            }, O, {
                validateOnBlur: !0,
                onChange: E,
                onSubmit: rt
            })), i.a.createElement(z, {
                agree: U,
                loading: tt,
                autoLogin: G,
                btnExtraClassName: "js-login-verify-code-btn",
                protocolExtraClassName: X,
                onAutoLoginChange: function() {
                    return Y(!G)
                },
                onAgreeChange: function(t) {
                    return F(t.target.checked)
                },
                loginDisabled: !($ && U)
            }))
        }
        ))
          , X = Y({})(J)
          , Z = n("L8Cs")
          , $ = n.n(Z)
          , tt = n("Fl3x")
          , et = n("moBG")
          , nt = n("Nlu1")
          , rt = ["black", "blue", "red", "green"]
          , it = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isDotActive = function(t, e, n) {
                    return t === e || 0 === t && e > n - 1 || t === n - 1 && e < 0
                }
                ,
                e.isBuildInColor = function(t) {
                    return -1 !== rt.indexOf(t)
                }
                ,
                e
            }
            return Object(et.__extends)(e, t),
            e.prototype.render = function() {
                var t, e = this, n = this.props, i = n.prefix, o = n.dotsColor, a = n.dotsSize, s = n.items, c = n.currentIndex, u = n.onDotsClick, l = N()(i + "-swiper__dots", i + "-swiper__dots-" + a, ((t = {})[i + "-swiper__dots-" + o] = this.isBuildInColor(o),
                t));
                return r.createElement("ul", {
                    className: l,
                    "data-zv": "8.6.2"
                }, r.Children.map(s, (function(t, n) {
                    var a, l = e.isDotActive(n, c, s.length);
                    return l && !e.isBuildInColor(o) ? r.createElement("li", {
                        key: n,
                        style: {
                            background: o
                        },
                        className: i + "-swiper__dots-item " + i + "-swiper__dots-item-active",
                        "data-zv": "8.6.2"
                    }) : r.createElement("li", {
                        key: n,
                        className: N()(i + "-swiper__dots-item", (a = {},
                        a[i + "-swiper__dots-item-active"] = l,
                        a)),
                        onClick: function() {
                            return u(n)
                        },
                        "data-zv": "8.6.2"
                    })
                }
                )))
            }
            ,
            e
        }(r.PureComponent);
        function ot(t, e) {
            var n = t.style;
            Object.keys(e).forEach((function(t) {
                n[t] = e[t]
            }
            ))
        }
        var at = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.state = {
                    currentIndex: 0
                },
                e.init = function(t) {
                    void 0 === t && (t = !1);
                    var n = e.props
                      , i = n.autoplay
                      , o = n.children
                      , a = e.state.currentIndex
                      , s = r.Children.count(o)
                      , c = e.swiperContainer.children;
                    e.clearAutoplay(),
                    e.setSwiperWidth(),
                    ot(e.swiperContainer, {
                        width: e.swiperWidth * c.length + "px"
                    });
                    for (var u = 0; u < c.length; u++) {
                        ot(c[u], {
                            width: 100 / c.length + "%"
                        })
                    }
                    t && e.translate(-1, null, !0),
                    s > 1 && (i && e.startAutoplay(),
                    e.translate(a, null, !0))
                }
                ,
                e.getSwiper = function(t) {
                    e.swiper = t
                }
                ,
                e.getSwiperContainer = function(t) {
                    e.swiperContainer = t
                }
                ,
                e.setSwiperWidth = function() {
                    e.swiperWidth = e.swiper.getBoundingClientRect().width
                }
                ,
                e.startAutoplay = function() {
                    var t = e.props.autoplayInterval;
                    e.autoplayTimer = setTimeout(e.next, Number(t))
                }
                ,
                e.clearAutoplay = function() {
                    clearTimeout(e.autoplayTimer),
                    e.autoplayTimer = void 0
                }
                ,
                e.next = function() {
                    var t = e.state.currentIndex;
                    1 !== r.Children.count(e.props.children) && e.swipeTo(t + 1)
                }
                ,
                e.prev = function() {
                    var t = e.state.currentIndex;
                    e.swipeTo(t - 1)
                }
                ,
                e.swipeTo = function(t) {
                    t === e.state.currentIndex || e.isSwiping || (e.isSwiping = !0,
                    e.setState({
                        currentIndex: t
                    }))
                }
                ,
                e.translate = function(t, n, r) {
                    var i = e.props
                      , o = i.autoplay
                      , a = i.autoplayInterval
                      , s = i.transitionDuration
                      , c = i.onChange
                      , u = e.props.children.length
                      , l = e.swiperWidth * (-1 - t)
                      , h = r ? 0 : s;
                    if (o && !e.isMouseEnter && (clearTimeout(e.autoplayTimer),
                    e.autoplayTimer = setTimeout(e.next, Number(a))),
                    ot(e.swiperContainer, {
                        transform: "translateX(" + l + "px)",
                        "transition-duration": h + "ms"
                    }),
                    t > u - 1 || t < 0)
                        return e.resetPosition(t);
                    setTimeout((function() {
                        e.isSwiping = !1
                    }
                    ), h),
                    c && c(t, e.getRealPrevIndex(n))
                }
                ,
                e.resetPosition = function(t) {
                    var n = e.props.transitionDuration
                      , r = e.props.children.length;
                    t < 0 ? setTimeout((function() {
                        return e.setState({
                            currentIndex: r - 1
                        })
                    }
                    ), n) : setTimeout((function() {
                        return e.setState({
                            currentIndex: 0
                        })
                    }
                    ), n)
                }
                ,
                e.getRealPrevIndex = function(t) {
                    var n = e.props.children.length;
                    return null === t ? null : t > n - 1 ? n - 1 : t < 0 ? 0 : t
                }
                ,
                e.cloneChildren = function(t) {
                    var e = r.Children.count(t);
                    if (e <= 1)
                        return t;
                    var n = new Array(e + 2);
                    return r.Children.forEach(t, (function(t, r) {
                        n[r + 1] = t,
                        0 === r ? n[e + 1] = t : r === e - 1 && (n[0] = t)
                    }
                    )),
                    n
                }
                ,
                e.handleMouseEnter = function() {
                    var t = e.props.autoplay;
                    e.isMouseEnter = !0,
                    t && e.clearAutoplay()
                }
                ,
                e.handleMouseLeave = function() {
                    var t = e.props.autoplay;
                    e.isMouseEnter = !1,
                    t && e.startAutoplay()
                }
                ,
                e.handleDotsClick = function(t) {
                    e.setState({
                        currentIndex: t
                    })
                }
                ,
                e.handleResize = function() {
                    return e.init()
                }
                ,
                e
            }
            return Object(et.__extends)(e, t),
            e.getDerivedStateFromProps = function(t, e) {
                if (!e.prevProps)
                    return {
                        prevProps: t
                    };
                var n = t.children
                  , i = e.prevProps.children;
                return r.Children.count(i) !== r.Children.count(n) ? {
                    currentIndex: 0,
                    prevProps: t
                } : null
            }
            ,
            e.prototype.componentDidMount = function() {
                this.init()
            }
            ,
            e.prototype.componentDidUpdate = function(t, e) {
                var n = this.props.children.length
                  , i = this.state.currentIndex
                  , o = e.currentIndex
                  , a = o > n - 1 || o < 0;
                if (o !== i && this.translate(i, o, a),
                r.Children.count(t.children) !== r.Children.count(this.props.children)) {
                    var s = 2 === r.Children.count(t.children) && 1 === r.Children.count(this.props.children);
                    this.init(s)
                }
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.clearAutoplay()
            }
            ,
            e.prototype.render = function() {
                var t, e = this.props, n = e.className, i = e.prefix, o = e.dots, a = e.dotsColor, s = e.dotsSize, c = e.arrows, u = e.arrowsType, l = e.children, h = this.state.currentIndex, f = N()(i + "-swiper", n, ((t = {})[i + "-swiper-light"] = c && "light" === u,
                t)), p = r.Children.count(l), d = this.cloneChildren(l);
                return r.createElement("div", {
                    ref: this.getSwiper,
                    className: f,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    "data-zv": "8.6.2"
                }, c && p > 1 && r.createElement("div", {
                    className: i + "-swiper__arrow " + i + "-swiper__arrow-left",
                    onClick: this.prev,
                    "data-zv": "8.6.2"
                }, r.createElement(j.default, {
                    type: "right-circle",
                    className: i + "-swiper__arrow-icon"
                })), c && p > 1 && r.createElement("div", {
                    className: i + "-swiper__arrow " + i + "-swiper__arrow-right",
                    onClick: this.next,
                    "data-zv": "8.6.2"
                }, r.createElement(j.default, {
                    type: "right-circle",
                    className: i + "-swiper__arrow-icon"
                })), r.createElement("div", {
                    ref: this.getSwiperContainer,
                    className: i + "-swiper__container",
                    "data-zv": "8.6.2"
                }, r.Children.map(d, (function(t, e) {
                    return Object(r.cloneElement)(t, {
                        key: e - 1,
                        style: {
                            float: "left",
                            height: "100%"
                        }
                    })
                }
                ))), o && p > 1 && r.createElement(it, {
                    prefix: i,
                    dotsColor: a,
                    dotsSize: s,
                    items: l,
                    currentIndex: h,
                    onDotsClick: this.handleDotsClick
                }), r.createElement(nt.WindowResizeHandler, {
                    onResize: this.handleResize
                }))
            }
            ,
            e.defaultProps = {
                className: "",
                prefix: "zent",
                transitionDuration: 300,
                autoplay: !1,
                autoplayInterval: 3e3,
                dots: !0,
                dotsColor: "black",
                dotsSize: "normal",
                arrows: !1,
                arrowsType: "dark"
            },
            e
        }(r.Component)
          , st = n("v7hk")
          , ct = {}
          , ut = {
            opacity: 0
        }
          , lt = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.textNodeRef = r.createRef(),
                e.avatarNodeRef = r.createRef(),
                e.state = {
                    textScale: 1,
                    textReady: !1
                },
                e
            }
            return Object(et.__extends)(e, t),
            e.prototype.render = function() {
                var t, e = this.props, n = e.prefix, i = e.size, o = e.shape, a = e.src, s = e.icon, c = e.children, u = e.bordered, l = e.style, h = e.className, f = !!a, p = !!c, d = N()(n + "-avatar", h, ((t = {})[n + "-avatar--size-large"] = "large" === i,
                t[n + "-avatar--size-default"] = "default" === i,
                t[n + "-avatar--size-small"] = "small" === i,
                t[n + "-avatar--shape-circle"] = "circle" === o,
                t[n + "-avatar--shape-square"] = "square" === o,
                t[n + "-avatar--type-icon"] = !!s,
                t[n + "-avatar--type-image"] = f,
                t[n + "-avatar--type-string"] = p,
                t[n + "-avatar--bordered"] = u,
                t));
                if (f)
                    return r.createElement("span", {
                        style: l,
                        className: d,
                        "data-zv": "8.6.2"
                    }, r.createElement("img", {
                        className: n + "-avatar-image",
                        src: a,
                        alt: "avatar",
                        "data-zv": "8.6.2"
                    }));
                if (s)
                    return r.createElement("span", {
                        style: l,
                        className: d,
                        "data-zv": "8.6.2"
                    }, r.createElement(j.default, {
                        type: s
                    }));
                var g = this.state
                  , m = g.textScale
                  , v = g.textReady
                  , y = this.textNodeRef.current
                  , b = ct;
                if (v && y)
                    if (1 === m)
                        b = ct;
                    else {
                        var A = "scale(" + m + ")";
                        b = {
                            msTransform: A,
                            WebkitTransform: A,
                            MozTransform: A,
                            transform: A,
                            position: "absolute",
                            display: "inline-block",
                            left: "calc(50% - " + Math.floor(y.offsetWidth / 2) + "px)"
                        }
                    }
                else
                    b = ut;
                var w = "number" == typeof i ? Object(et.__assign)({
                    width: i + "px",
                    height: i + "px",
                    lineHeight: i + "px"
                }, l) : l;
                return r.createElement("span", {
                    style: w,
                    className: d,
                    ref: this.avatarNodeRef,
                    "data-zv": "8.6.2"
                }, r.createElement("span", {
                    className: n + "-avatar-string",
                    style: b,
                    ref: this.textNodeRef,
                    "data-zv": "8.6.2"
                }, c))
            }
            ,
            e.prototype.componentDidMount = function() {
                this.updateTextScale()
            }
            ,
            e.getDerivedStateFromProps = function(t, e) {
                var n = t.children;
                return n !== e.prevChildren ? {
                    textReady: !1,
                    prevChildren: n
                } : null
            }
            ,
            e.prototype.componentDidUpdate = function(t) {
                t.children !== this.props.children && this.updateTextScale()
            }
            ,
            e.prototype.updateTextScale = function() {
                if (this.props.children) {
                    var t = function(t, e) {
                        if (!t || !e)
                            return 1;
                        var n = t.getBoundingClientRect().width
                          , r = e.offsetWidth
                          , i = n - 6;
                        if (i > r)
                            return 1;
                        return i / r
                    }(this.avatarNodeRef.current, this.textNodeRef.current);
                    this.setState({
                        textScale: t,
                        textReady: !0
                    })
                }
            }
            ,
            e.defaultProps = {
                shape: "circle",
                size: "default",
                bordered: !1,
                prefix: "zent"
            },
            e
        }(r.Component);
        n("5xlH"),
        n("aDp3"),
        n("8xpM");
        var ht, ft = n("asw2"), pt = n.n(ft), dt = [{
            img: "upload_files/2023/07/05/Fnz_LVMYHDRyF-B3frgJ87Ju_eMy.jpg",
            text: "支付宝",
            swiper: "upload_files/2023/07/05/FvU559RJmDdh37SlP3-PFQF1erMM.jpg"
        }, {
            img: "public_files/d1c821bb95a2b3cec7495ce133701b74.png",
            text: "微信",
            swiper: "public_files/7d4b1fdf8259420218aacaa82af59dbe.png"
        }, {
            img: "public_files/ccabfa6df93e84ea591cae9d59df417a.png",
            qrcode: "public_files/2016/12/02/64f14f3b24ae96d6a8935ffc65054664.png",
            text: "微商城",
            swiper: "public_files/0874370957b71d25ac87f792744b119f.png"
        }, {
            img: "public_files/22410e432c519bfea8f46834664a03ef.png",
            qrcode: "retail/img/app/retail.png",
            text: "零售",
            swiper: "public_files/3f55c31ab984bf450180de32a86b451a.png"
        }, {
            img: "public_files/7f12433bfafd042fc81bfd8a73a119cc.png",
            qrcode: "public_files/2019/07/01/72cbb0529c109cddfea8b62311b3c36f.png",
            text: "美业",
            swiper: "public_files/3e6b8c133bbb965b5921d6b8a463116e.png"
        }], gt = function(t) {
            var e = t.qrcodeText
              , n = t.warningText
              , o = t.maxLimit
              , a = function() {}
              , s = function() {}
              , c = Object(r.useState)(0)
              , u = Object(l.default)(c, 2)
              , h = u[0]
              , f = u[1]
              , p = Object(r.useState)(0)
              , d = Object(l.default)(p, 2)
              , g = d[0]
              , m = d[1]
              , v = Object(r.useState)(0)
              , y = Object(l.default)(v, 2)
              , b = y[0]
              , A = y[1]
              , w = Object(r.useRef)(-1)
              , E = Object(r.useMemo)((function() {
                return [0, 0, h, g, b]
            }
            ), [0, b, g, h, 0])
              , x = Object(r.useMemo)((function() {
                return [a, s, f, m, A]
            }
            ), [])
              , k = !!n
              , S = Object(r.useMemo)((function() {
                return !!E.find((function(t) {
                    return t > 1
                }
                ))
            }
            ), [E])
              , T = Object(r.useMemo)((function() {
                return k && !o
            }
            ), [k, o])
              , C = Object(r.useCallback)((function(t) {
                return t.qrcode ? i.a.createElement("div", {
                    className: "scan-pop-container"
                }, i.a.createElement("img", {
                    src: pt()(t.qrcode, "middle")
                }), i.a.createElement("p", null, "扫码下载", t.text, "App")) : null
            }
            ), [])
              , O = Object(r.useCallback)((function(t) {
                var e = x[t];
                E[t] > 0 || (w.current = t,
                setTimeout((function() {
                    w.current === t && (e(1),
                    setTimeout((function() {
                        e(2)
                    }
                    ), 20))
                }
                ), 200))
            }
            ), [E, x])
              , D = Object(r.useCallback)((function(t) {
                var e = E[t]
                  , n = x[t];
                w.current = -1,
                0 !== e && (n(1),
                setTimeout((function() {
                    n(0)
                }
                ), 300))
            }
            ), [E, x]);
            return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                className: "login-qrcode__container"
            }, i.a.createElement("div", {
                className: N()("login-qrcode__container__qrcode", {
                    "login-qrcode__container__qrcode--weak": S
                })
            }, i.a.createElement("img", {
                src: Object(tt.a)(e, {
                    width: 160,
                    height: 160
                }),
                alt: e
            }), i.a.createElement("div", {
                className: N()("warning", {
                    "warning--show": k
                })
            }, T && i.a.createElement(j.Icon, {
                type: "refresh",
                className: "refresh__icon",
                onClick: t.onFresh
            }), i.a.createElement("p", null, n))), i.a.createElement("div", {
                className: "login-qrcode__container__banner"
            }, i.a.createElement(at, {
                autoplay: !0,
                dots: !1,
                autoplayInterval: 3e3
            }, dt.map((function(t) {
                return i.a.createElement("img", {
                    key: t.swiper,
                    src: pt()(t.swiper, "large")
                })
            }
            ))))), i.a.createElement("div", {
                className: "login-qrcode__footer"
            }, i.a.createElement("p", null, "支付宝或微信扫码 ", i.a.createElement("strong", null, "安全"), "登录"), i.a.createElement("div", {
                className: "login-qrcode__footer__flex"
            }, dt.map((function(t, e) {
                return i.a.createElement(st.Pop, {
                    key: t.swiper,
                    className: N()("login-qrcode__pop", 2 === E[e] ? "login-qrcode__pop--show" : ""),
                    visible: E[e] > 0,
                    onVisibleChange: function() {},
                    content: C(t)
                }, i.a.createElement("div", {
                    className: "app-item",
                    onMouseOver: O.bind(null, e),
                    onMouseLeave: D.bind(null, e)
                }, i.a.createElement(lt, {
                    shape: "square",
                    src: pt()(t.img, "large")
                }), i.a.createElement("p", null, t.text)))
            }
            )))))
        }, mt = n("a+Rt"), vt = function(t) {
            return i.a.createElement("div", {
                className: "login-qrcode__scaned"
            }, i.a.createElement("img", {
                src: "https://b.yzcdn.cn/public_files/0198ac37bde1b4748df3f7c5cd6cc5f1.png"
            }), i.a.createElement("div", {
                className: "login-qrcode__scaned__title"
            }, "扫码成功"), i.a.createElement("p", null, "请在手机上确认登录"), i.a.createElement(mt.Button, {
                className: "login-qrcode__scaned__btn",
                onClick: t.onSwitch
            }, "切换账号"))
        };
        !function(t) {
            t.PASS = "password",
            t.CAPTCHA = "captcha",
            t.QRCODE = "qrcode"
        }(ht || (ht = {}));
        var yt = n("5dt4")
          , bt = n("Dg3S")
          , At = window._global.product
          , wt = function() {
            return {
                selector: "js-login-btn",
                data: {
                    et: "click",
                    ei: "login",
                    en: "登录",
                    params: "TSA" !== At ? {
                        country_code: Object(yt.a)(),
                        mobile: Object(yt.b)(),
                        module: "login",
                        login_type: bt.a.PASS
                    } : {
                        country_code: Object(yt.a)(),
                        mobile: Object(yt.b)()
                    }
                }
            }
        }
          , Et = function() {
            return {
                selector: "js-login-verify-code-btn",
                data: {
                    et: "click",
                    ei: "login",
                    en: "登录",
                    params: "TSA" !== At ? {
                        country_code: Object(yt.a)(),
                        mobile: Object(yt.b)(),
                        module: "login",
                        login_type: bt.a.CODE
                    } : {
                        country_code: Object(yt.a)(),
                        mobile: Object(yt.b)()
                    }
                }
            }
        }
          , xt = function() {
            return {
                selector: "js-tab-password-login",
                data: {
                    et: "click",
                    ei: "password_login",
                    en: "密码登录"
                }
            }
        }
          , kt = function() {
            return {
                selector: "login-qrcode__title__right",
                data: {
                    et: "click",
                    ei: "identify_code_login",
                    en: "验证码登录"
                }
            }
        }
          , St = function() {
            return {
                selector: "js-tab-captcha-login",
                data: {
                    et: "click",
                    ei: "identify_code_login",
                    en: "验证码登录"
                }
            }
        }
          , Tt = function() {
            return {
                selector: "switch-type",
                data: {
                    et: "click",
                    ei: "scan_code",
                    en: "扫码登录"
                }
            }
        }
          , Ct = (n("lz4H"),
        $.a.CancelToken)
          , Ot = function(t) {
            var e = Object(r.useState)("")
              , n = Object(l.default)(e, 2)
              , o = n[0]
              , a = n[1]
              , s = Object(r.useState)(!1)
              , c = Object(l.default)(s, 2)
              , h = c[0]
              , p = c[1]
              , d = Object(r.useState)(!1)
              , g = Object(l.default)(d, 2)
              , m = g[0]
              , v = g[1]
              , y = Object(r.useState)(!1)
              , b = Object(l.default)(y, 2)
              , A = b[0]
              , w = b[1]
              , E = Object(r.useState)(1)
              , x = Object(l.default)(E, 2)
              , S = x[0]
              , T = x[1]
              , C = Object(r.useRef)(0)
              , O = Object(r.useRef)(Ct.source())
              , D = Object(r.useMemo)((function() {
                if (!o)
                    return "";
                var t = window._global.fromSource
                  , e = t ? "&fromSource=" + t : "";
                return "http://passport.youzan.com/scan-login?token=".concat(o).concat(e)
            }
            ), [o])
              , _ = Object(r.useMemo)((function() {
                return h ? "二维码已失效" : A ? "你已取消此次登录" : m ? i.a.createElement("span", {
                    style: {
                        lineHeight: "2em"
                    }
                }, "二维码获取频繁", i.a.createElement("br", null), "请稍后再试") : ""
            }
            ), [h, m, A])
              , R = Object(r.useCallback)(Object(u.default)(f.a.mark((function t() {
                var e, n, r;
                return f.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0,
                            t.next = 3,
                            Object(k.d)();
                        case 3:
                            e = t.sent,
                            n = e.code,
                            r = e.data,
                            0 === n && r.token && (a(r.token),
                            p(!1),
                            w(!1),
                            v(!1)),
                            t.next = 13;
                            break;
                        case 9:
                            throw t.prev = 9,
                            t.t0 = t.catch(0),
                            "160210089" === String(t.t0.code) && v(!0),
                            new Error(t.t0);
                        case 13:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[0, 9]])
            }
            ))), [])
              , B = Object(r.useCallback)(Object(u.default)(f.a.mark((function t() {
                return f.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!o) {
                                t.next = 9;
                                break
                            }
                            return t.prev = 1,
                            t.next = 4,
                            Object(k.a)({
                                token: o
                            });
                        case 4:
                            t.next = 9;
                            break;
                        case 6:
                            return t.prev = 6,
                            t.t0 = t.catch(1),
                            t.abrupt("return");
                        case 9:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[1, 6]])
            }
            ))), [o])
              , j = Object(r.useCallback)((function() {
                try {
                    window.Logger && window.Logger.log({
                        et: "click",
                        ei: "login",
                        en: "登录",
                        params: {
                            module: "login",
                            login_type: bt.a.SCAN
                        }
                    })
                } catch (t) {}
            }
            ), [])
              , I = Object(r.useCallback)((function(t) {
                var e = 1
                  , n = function() {
                    3 === ++e && i()
                }
                  , r = function() {
                    clearTimeout(C.current)
                }
                  , i = function i() {
                    e = 1,
                    t(n, r),
                    C.current = setTimeout((function() {
                        2 === e ? i() : e++
                    }
                    ), 2e3)
                };
                i()
            }
            ), [])
              , L = Object(r.useCallback)((function() {
                O.current = Ct.source(),
                I(function() {
                    var e = Object(u.default)(f.a.mark((function e(n, r) {
                        var i, a, s, c;
                        return f.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!h && o) {
                                        e.next = 3;
                                        break
                                    }
                                    return r(),
                                    e.abrupt("return");
                                case 3:
                                    return e.prev = 3,
                                    e.next = 6,
                                    Object(k.b)(O.current.token, {
                                        token: o
                                    });
                                case 6:
                                    i = e.sent,
                                    a = i.code,
                                    s = i.data,
                                    0 === a ? s ? (j(),
                                    t.onOk(i, {}),
                                    r()) : (T(2),
                                    n()) : (p(!0),
                                    r()),
                                    e.next = 26;
                                    break;
                                case 11:
                                    if (e.prev = 11,
                                    e.t0 = e.catch(3),
                                    "160210086" !== (c = String(e.t0.code))) {
                                        e.next = 18;
                                        break
                                    }
                                    return p(!1),
                                    w(!1),
                                    e.abrupt("return", n());
                                case 18:
                                    if ("160210087" !== c) {
                                        e.next = 23;
                                        break
                                    }
                                    return p(!1),
                                    w(!0),
                                    T(1),
                                    e.abrupt("return", r());
                                case 23:
                                    p(!0),
                                    T(1),
                                    r();
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 11]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            ), [h, t, o, I, j])
              , M = Object(r.useCallback)((function() {
                C.current && clearTimeout(C.current),
                O.current && O.current.cancel(),
                B().then((function() {
                    T(1),
                    p(!1),
                    w(!1),
                    a(""),
                    R()
                }
                ))
            }
            ), [B, R]);
            Object(r.useEffect)((function() {
                M()
            }
            ), []),
            Object(r.useEffect)((function() {
                return function() {
                    C.current && clearTimeout(C.current),
                    B()
                }
            }
            ), []),
            Object(r.useEffect)((function() {
                o && L()
            }
            ), [L, o]);
            var N = Object(r.useMemo)((function() {
                return 1 === S ? D ? i.a.createElement(gt, {
                    qrcodeText: D,
                    warningText: _,
                    maxLimit: m,
                    onFresh: M
                }) : null : 2 === S ? i.a.createElement(vt, {
                    onSwitch: M
                }) : void 0
            }
            ), [M, m, D, S, _]);
            return i.a.createElement("div", {
                className: "login-qrcode"
            }, i.a.createElement("div", {
                className: "login-qrcode__title"
            }, i.a.createElement("span", {
                className: "login-qrcode__title__left"
            }, "扫码登录"), i.a.createElement("span", {
                className: "login-qrcode__title__right",
                onClick: function() {
                    return t.onTypeChange(ht.CAPTCHA)
                }
            }, "使用账号登录")), N, i.a.createElement("div", {
                className: "login-qrcode__register"
            }, "没有账号，", i.a.createElement("a", {
                className: "login-qrcode__register__link",
                href: "/register"
            }, "免费注册")))
        };
        var Dt = function(t) {
            var e = t.triggerClassName;
            return i.a.createElement("div", {
                className: "switch-type"
            }, i.a.createElement("p", {
                className: "switch-type__tip",
                onClick: t.onSwitch
            }, i.a.createElement("img", {
                src: pt()("/public_files/982ce7a51441adc9bdad447d53d3de0d.png", "origin")
            }), i.a.createElement("span", null, t.text)), i.a.createElement("img", {
                className: e || "",
                src: t.img,
                onClick: t.onSwitch
            }))
        }
          , _t = (n("8LUD"),
        function(t) {
            var e = t.type
              , n = Object(r.useCallback)((function(n) {
                n !== e && t.onChange(n)
            }
            ), [t, e]);
            return i.a.createElement("div", {
                className: "login-container"
            }, i.a.createElement(Dt, {
                img: "https://b.yzcdn.cn/public_files/00768c433665a52ff84927cd89702259.png",
                text: "扫码登录更便捷",
                triggerClassName: "js-tab-scan-code-login",
                onSwitch: t.onChange.bind(null, ht.QRCODE)
            }), i.a.createElement("div", {
                className: "login-container__header"
            }, i.a.createElement("span", {
                className: N()({
                    "js-tab-captcha-login": !0,
                    bold: e === ht.CAPTCHA
                }),
                onClick: function() {
                    return n(ht.CAPTCHA)
                }
            }, "验证码登录"), i.a.createElement("span", {
                className: N()({
                    "js-tab-password-login": !0,
                    bold: e === ht.PASS
                }),
                onClick: function() {
                    return n(ht.PASS)
                }
            }, "密码登录")), t.children)
        }
        )
          , Rt = G
          , Bt = X
          , jt = !1
          , It = window._global.redirectUrl || ""
          , Lt = i.a.forwardRef((function(t, e) {
            var n = {
                getLoginType: function() {
                    return D.a.getItem("__login_type__") || ht.QRCODE
                },
                setLoginType: function(t) {
                    return D.a.setItem("__login_type__", t)
                }
            }
              , o = n.getLoginType
              , a = n.setLoginType
              , s = Object(r.useState)(o())
              , c = Object(l.default)(s, 2)
              , h = c[0]
              , g = c[1]
              , y = Object(r.useState)("+86")
              , b = Object(l.default)(y, 2)
              , A = b[0]
              , w = b[1]
              , E = Object(r.useState)("")
              , x = Object(l.default)(E, 2)
              , S = x[0]
              , T = x[1]
              , C = Object(r.useState)(!1)
              , O = Object(l.default)(C, 2)
              , R = O[0]
              , B = O[1];
            if (!jt) {
                var j = m.a.get("type");
                Object.values(ht).includes(j) && g(j)
            }
            jt = !0;
            var I = Object(r.useCallback)((function(t) {
                g(t)
            }
            ), [])
              , L = Object(r.useCallback)((function(t, e) {
                try {
                    window.Logger && window.Logger.log((n = e,
                    r = t.data.isRegister,
                    {
                        et: "click",
                        ei: "login_callback",
                        en: "登录回调",
                        pt: "pc_login",
                        params: {
                            countryCode: n.countryCode,
                            mobile: n.mobile,
                            module: "login",
                            login_type: n.password ? bt.a.PASS : n.smsCaptcha ? bt.a.CODE : bt.a.SCAN,
                            is_registered: !1 === r ? 0 : 1,
                            source: 1
                        }
                    }))
                } catch (t) {}
                var n, r
            }
            ), [])
              , M = Object(r.useCallback)((function() {
                var t = _.a.getIronLoginUrl();
                It && (t = m.a.add(t, {
                    redirect_back: It
                })),
                setTimeout((function() {
                    d.redirect({
                        url: _.a.protocolHelper(t)
                    })
                }
                ), 400)
            }
            ), [])
              , N = Object(r.useCallback)((function(t, e) {
                if ("USER_LOGIN_NEED_AGAIN_CAPTCHA" === t.action)
                    return T(e.mobile),
                    w(e.countryCode),
                    B(!1),
                    void B(!0);
                p.Notify.success("登录成功"),
                a(h),
                L(t, e),
                M()
            }
            ), [M, a, L, h])
              , P = Object(r.useCallback)(function() {
                var t = Object(u.default)(f.a.mark((function t(e) {
                    var n;
                    return f.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return n = e.smsCaptcha,
                                t.prev = 1,
                                t.next = 4,
                                Object(k.e)({
                                    countryCode: A,
                                    mobile: S,
                                    smsCaptcha: n,
                                    fromSource: "SOURCE_PC"
                                });
                            case 4:
                                return t.abrupt("return", !0);
                            case 7:
                                return t.prev = 7,
                                t.t0 = t.catch(1),
                                p.Notify.error(t.t0.msg),
                                t.abrupt("return", !1);
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[1, 7]])
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), [A, S]);
            return h === ht.QRCODE ? i.a.createElement(Ot, {
                onOk: N,
                onTypeChange: I
            }) : i.a.createElement(i.a.Fragment, null, i.a.createElement(_t, {
                type: h,
                onChange: I
            }, h === ht.PASS ? i.a.createElement(Rt, {
                onOk: N,
                onTypeChange: I
            }) : i.a.createElement(Bt, {
                onOk: N,
                onTypeChange: I
            })), i.a.createElement(v.a, {
                visible: R,
                biz: "uic_login_without_password",
                bizType: U.a.B_LOGIN_SMS,
                countryCode: A,
                mobile: S,
                isCheckCaptchaCache: !1,
                onValidCaptcha: P,
                onSuccess: M,
                topTips: "为了你的账号安全，请输入发送至 ".concat(A, " ").concat(S, " 的 6 位验证码。")
            }))
        }
        ))
          , Mt = function() {
            return i.a.createElement(c.a, null, i.a.createElement(Lt, null))
        }
          , Nt = n("nXAi");
        Object(yt.c)([wt, Et, xt, kt, St, Tt, Nt.f.bind(null, bt.b.LOGIN), Nt.b.bind(null, bt.b.LOGIN), Nt.e.bind(null, bt.b.LOGIN), Nt.c.bind(null, bt.b.LOGIN)], "pc_login"),
        s.a.init(),
        a.a.render(i.a.createElement(Mt, null), document.getElementById("app"))
    },
    rW1U: function(t, e, n) {
        "use strict";
        n.d(e, "f", (function() {
            return o
        }
        )),
        n.d(e, "e", (function() {
            return a
        }
        )),
        n.d(e, "a", (function() {
            return s
        }
        )),
        n.d(e, "d", (function() {
            return c
        }
        )),
        n.d(e, "b", (function() {
            return u
        }
        )),
        n.d(e, "c", (function() {
            return l
        }
        ));
        var r = n("L8Cs")
          , i = n.n(r)
          , o = function(t) {
            return i()({
                url: "/api/login/by-pass-with-tencent-image.json",
                data: t,
                method: "post",
                rawResponse: !0,
                withCredentials: !0,
                noXRequestedWithHeader: !0
            })
        }
          , a = function(t) {
            return i()({
                url: "/api/register-and-login.json",
                data: t,
                method: "post",
                rawResponse: !0,
                withCredentials: !0,
                noXRequestedWithHeader: !0
            })
        }
          , s = function(t) {
            return i()({
                url: "/api/login/cancel-qrcode-login",
                method: "post",
                data: t,
                rawResponse: !0,
                withCredentials: !0,
                noXRequestedWithHeader: !0
            })
        }
          , c = function() {
            return i()({
                url: "/api/login/qrcode-data.json",
                method: "GET",
                rawResponse: !0
            })
        }
          , u = function(t, e) {
            return i()({
                url: "/api/login/check-qrcode-is-login.json",
                method: "POST",
                cancelToken: t,
                data: e,
                rawResponse: !0,
                withCredentials: !0,
                noXRequestedWithHeader: !0
            })
        }
          , l = function(t) {
            return i()({
                url: "/api/embed/login-or-register/sms.json",
                method: "post",
                rawResponse: !0,
                withCredentials: !0,
                noXRequestedWithHeader: !0,
                data: t
            })
        }
    },
    "v25+": function(t, e, n) {
        t.exports = n("SFYO")("v25+")
    },
    wDYy: function(t, e, n) {},
    ypRW: function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};
            function n(r) {
                if (e[r])
                    return e[r].exports;
                var i = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
            }
            return n.m = t,
            n.c = e,
            n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(t, e) {
                if (1 & e && (t = n(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var i in t)
                        n.d(r, i, function(e) {
                            return t[e]
                        }
                        .bind(null, i));
                return r
            }
            ,
            n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = 3)
        }([function(t, e, n) {
            "use strict";
            /**
 * @preserve Create and manage a DOM event delegator.
 *
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
            var r = n(2);
            t.exports = function(t) {
                return new r(t)
            }
            ,
            t.exports.Delegate = r
        }
        , function(t, e, n) {
            "use strict";
            var r = {
                get: function(t, e) {
                    t = t.replace(/[[]/, "\\[").replace(/[]]/, "\\]"),
                    e = e ? "?" + e.split("#")[0].split("?")[1] : window.location.search;
                    var n = RegExp("[?&]" + t + "=([^&#]*)").exec(e);
                    return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : ""
                },
                remove: function(t, e) {
                    var n = t.split("?");
                    if (n.length >= 2) {
                        for (var r = encodeURIComponent(e) + "=", i = n[1].split(/[&;]/g), o = i.length; o-- > 0; )
                            -1 !== i[o].lastIndexOf(r, 0) && i.splice(o, 1);
                        return n[0] + "?" + i.join("&")
                    }
                    return t
                },
                add: function(t, e) {
                    if (!t || 0 === t.length || 0 === t.trim().indexOf("javascript"))
                        return "";
                    var n = t.split("#")
                      , r = n[0].split("?")
                      , i = {};
                    return r[1] && r[1].split("&").forEach((function(t) {
                        var e;
                        e = t.split("="),
                        i[e[0]] = e.slice(1).join("=")
                    }
                    )),
                    Object.keys(e).forEach((function(t) {
                        i[t.trim()] = encodeURIComponent(e[t])
                    }
                    )),
                    t = r[0] + function(t) {
                        var e = "";
                        for (var n in t)
                            "" !== t[n] && (e += n.trim() + "=" + t[n] + "&");
                        return e ? "?" + e.slice(0, e.length - 1) : ""
                    }(i),
                    n[1] ? t += "#" + n[1] : t
                }
            };
            t.exports = r
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                this.listenerMap = [{}, {}],
                t && this.root(t),
                this.handle = r.prototype.handle.bind(this),
                this._removedListeners = []
            }
            t.exports = r,
            r.prototype.root = function(t) {
                var e, n = this.listenerMap;
                if (this.rootElement) {
                    for (e in n[1])
                        n[1].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !0);
                    for (e in n[0])
                        n[0].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !1)
                }
                if (!t || !t.addEventListener)
                    return this.rootElement && delete this.rootElement,
                    this;
                for (e in this.rootElement = t,
                n[1])
                    n[1].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !0);
                for (e in n[0])
                    n[0].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !1);
                return this
            }
            ,
            r.prototype.captureForType = function(t) {
                return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(t)
            }
            ,
            r.prototype.on = function(t, e, n, r) {
                var c, u, l, h;
                if (!t)
                    throw new TypeError("Invalid event type: " + t);
                if ("function" == typeof e && (r = n,
                n = e,
                e = null),
                void 0 === r && (r = this.captureForType(t)),
                "function" != typeof n)
                    throw new TypeError("Handler must be a type of Function");
                return c = this.rootElement,
                (u = this.listenerMap[r ? 1 : 0])[t] || (c && c.addEventListener(t, this.handle, r),
                u[t] = []),
                e ? /^[a-z]+$/i.test(e) ? (h = e,
                l = o) : /^#[a-z0-9\-_]+$/i.test(e) ? (h = e.slice(1),
                l = s) : (h = e,
                l = i) : (h = null,
                l = a.bind(this)),
                u[t].push({
                    selector: e,
                    handler: n,
                    matcher: l,
                    matcherParam: h
                }),
                this
            }
            ,
            r.prototype.off = function(t, e, n, r) {
                var i, o, a, s, c;
                if ("function" == typeof e && (r = n,
                n = e,
                e = null),
                void 0 === r)
                    return this.off(t, e, n, !0),
                    this.off(t, e, n, !1),
                    this;
                if (a = this.listenerMap[r ? 1 : 0],
                !t) {
                    for (c in a)
                        a.hasOwnProperty(c) && this.off(c, e, n);
                    return this
                }
                if (!(s = a[t]) || !s.length)
                    return this;
                for (i = s.length - 1; i >= 0; i--)
                    o = s[i],
                    e && e !== o.selector || n && n !== o.handler || (this._removedListeners.push(o),
                    s.splice(i, 1));
                return s.length || (delete a[t],
                this.rootElement && this.rootElement.removeEventListener(t, this.handle, r)),
                this
            }
            ,
            r.prototype.handle = function(t) {
                var e, n, r, i, o, a = t.type, s = [];
                if (!0 !== t.ftLabsDelegateIgnore) {
                    switch (3 === (o = t.target).nodeType && (o = o.parentNode),
                    o.correspondingUseElement && (o = o.correspondingUseElement),
                    r = this.rootElement,
                    t.eventPhase || (t.target !== t.currentTarget ? 3 : 2)) {
                    case 1:
                        s = this.listenerMap[1][a];
                        break;
                    case 2:
                        this.listenerMap[0] && this.listenerMap[0][a] && (s = s.concat(this.listenerMap[0][a])),
                        this.listenerMap[1] && this.listenerMap[1][a] && (s = s.concat(this.listenerMap[1][a]));
                        break;
                    case 3:
                        s = this.listenerMap[0][a]
                    }
                    var c, u = [];
                    for (n = s.length; o && n; ) {
                        for (e = 0; e < n && (i = s[e]); e++)
                            o.tagName && ["button", "input", "select", "textarea"].indexOf(o.tagName.toLowerCase()) > -1 && o.hasAttribute("disabled") ? u = [] : i.matcher.call(o, i.matcherParam, o) && u.push([t, o, i]);
                        if (o === r)
                            break;
                        if (n = s.length,
                        (o = o.parentElement || o.parentNode)instanceof HTMLDocument)
                            break
                    }
                    for (e = 0; e < u.length; e++)
                        if (!(this._removedListeners.indexOf(u[e][2]) > -1) && !1 === this.fire.apply(this, u[e])) {
                            u[e][0].ftLabsDelegateIgnore = !0,
                            u[e][0].preventDefault(),
                            c = !1;
                            break
                        }
                    return c
                }
            }
            ,
            r.prototype.fire = function(t, e, n) {
                return n.handler.call(e, t, e)
            }
            ;
            var i = function(t) {
                if (t) {
                    var e = t.prototype;
                    return e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector
                }
            }(Element);
            function o(t, e) {
                return t.toLowerCase() === e.tagName.toLowerCase()
            }
            function a(t, e) {
                return this.rootElement === window ? e === document || e === document.documentElement || e === window : this.rootElement === e
            }
            function s(t, e) {
                return t === e.id
            }
            r.prototype.destroy = function() {
                this.off(),
                this.root()
            }
        }
        , function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(0)
              , i = n.n(r);
            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }
                ).apply(this, arguments)
            }
            var a = n(1)
              , s = n.n(a)
              , c = ["youzan.com"]
              , u = ["isv.youzan.com", "isv-dev.youzan.com"]
              , l = [41785471]
              , h = ["@", "\\"];
            function f(t) {
                return "" === t || "javascript:" === t || "javascript:;" === t || "javascript:void(0)" === t || "javascript:void(0);" === t || 0 === t.indexOf("tel:") || 0 === t.indexOf("mailto:") || 0 === t.indexOf("#")
            }
            function p(t) {
                return !function(t) {
                    return c.indexOf(t) > -1 || c.some((function(e) {
                        var n = "." + e
                          , r = t.lastIndexOf(n);
                        return r > -1 && r === t.length - n.length
                    }
                    ))
                }(t) || function(t) {
                    return u.indexOf(t) > -1 || u.some((function(e) {
                        var n = "." + e
                          , r = t.lastIndexOf(n);
                        return r > -1 && r === t.length - n.length
                    }
                    ))
                }(t) || function(t) {
                    return h.some((function(e) {
                        return t.indexOf(e) > -1
                    }
                    ))
                }(t)
            }
            function d(t) {
                var e = void 0 === t ? {} : t
                  , n = e.url
                  , r = void 0 === n ? "" : n
                  , i = e.kdtId
                  , a = void 0 === i ? "" : i
                  , c = e.extraQuery
                  , u = void 0 === c ? {} : c;
                if (r = r.trim(),
                function(t) {
                    return l.some((function(e) {
                        return e == t
                    }
                    ))
                }(a) || f(r))
                    return r;
                var h = (r = function(t) {
                    var e = document.createElement("a");
                    return e.href = t,
                    e.href
                }(r)).match(/^https?:\/\/([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,10})\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
                return !h || p(h[1]) ? s.a.add("https://rd.youzan.com/ban/common/outbound-link/judge", o({}, u, {
                    url: r
                })) : r
            }
            function g(t) {
                var e = void 0 === t ? {} : t
                  , n = e.url
                  , r = void 0 === n ? "" : n
                  , i = e.kdtId
                  , o = void 0 === i ? "" : i
                  , a = e.openType
                  , s = void 0 === a ? "" : a
                  , c = e.redirectType
                  , u = void 0 === c ? "" : c
                  , l = e.extraQuery
                  , h = d({
                    url: r,
                    kdtId: o,
                    extraQuery: void 0 === l ? {} : l
                });
                h && ("replace" === u ? location.replace(h) : s ? window.open(h, s) : location.href = h)
            }
            function m(t) {
                var e = void 0 === t ? {} : t
                  , n = e.kdtId
                  , r = void 0 === n ? "" : n
                  , o = e.redirectType
                  , a = void 0 === o ? "" : o
                  , s = e.extraQuery
                  , c = void 0 === s ? {} : s
                  , u = e.beforeRedirect
                  , l = e.delegateCanceled;
                i()(document.body).on("click", "a", (function(t) {
                    var e, n;
                    if (n = ((e = this).getAttribute("href") || "").trim(),
                    "A" !== e.tagName || f(n))
                        l && l({
                            delegateElement: this,
                            event: t
                        });
                    else {
                        t.preventDefault();
                        var i = {
                            delegateElement: this,
                            event: t,
                            kdtId: r,
                            redirectType: a,
                            extraQuery: c,
                            openType: (this.target || "").trim(),
                            url: (this.href || "").trim()
                        }
                          , o = function(t) {
                            console.warn("safe-link: beforeRedirect canceled", t)
                        };
                        u ? Promise.resolve(u(i)).then((function(t) {
                            t ? g(t) : o(t)
                        }
                        )).catch((function(t) {
                            o(t)
                        }
                        )) : g(i)
                    }
                }
                ))
            }
            n.d(e, "delegate", (function() {
                return m
            }
            )),
            n.d(e, "redirect", (function() {
                return g
            }
            )),
            n.d(e, "getSafeUrl", (function() {
                return d
            }
            )),
            window.SafeLink = {
                delegate: m,
                redirect: g,
                getSafeUrl: d
            }
        }
        ])
    }
}, [[9, 0]]]);
//# sourceMappingURL=login_2ce483b3.js.map
