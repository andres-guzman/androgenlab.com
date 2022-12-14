// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// @fancyapps/ui/Fancybox v4.0.12
// @fancyapps/ui/Fancybox v4.0.16
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], e)
        : e(
              ((t =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : t || self).window = t.window || {})
          );
})(this, function (t) {
    "use strict";
    function e(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
                (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                i.push.apply(i, n);
        }
        return i;
    }
    function i(t) {
        for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2
                ? e(Object(n), !0).forEach(function (e) {
                      r(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                  )
                : e(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                      );
                  });
        }
        return t;
    }
    function n(t) {
        return (
            (n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      }),
            n(t)
        );
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
        }
    }
    function s(t, e, i) {
        return (
            e && a(t.prototype, e),
            i && a(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
        );
    }
    function r(t, e, i) {
        return (
            e in t
                ? Object.defineProperty(t, e, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = i),
            t
        );
    }
    function l(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError(
                "Super expression must either be null or a function"
            );
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
        })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && h(t, e);
    }
    function c(t) {
        return (
            (c = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            c(t)
        );
    }
    function h(t, e) {
        return (
            (h =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                }),
            h(t, e)
        );
    }
    function d(t) {
        if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
        return t;
    }
    function u(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e)
            throw new TypeError(
                "Derived constructors may only return object or undefined"
            );
        return d(t);
    }
    function f(t) {
        var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return (
                    Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                );
            } catch (t) {
                return !1;
            }
        })();
        return function () {
            var i,
                n = c(t);
            if (e) {
                var o = c(this).constructor;
                i = Reflect.construct(n, arguments, o);
            } else i = n.apply(this, arguments);
            return u(this, i);
        };
    }
    function v(t, e) {
        return (
            (function (t) {
                if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
                var i =
                    null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                          t["@@iterator"];
                if (null == i) return;
                var n,
                    o,
                    a = [],
                    s = !0,
                    r = !1;
                try {
                    for (
                        i = i.call(t);
                        !(s = (n = i.next()).done) &&
                        (a.push(n.value), !e || a.length !== e);
                        s = !0
                    );
                } catch (t) {
                    (r = !0), (o = t);
                } finally {
                    try {
                        s || null == i.return || i.return();
                    } finally {
                        if (r) throw o;
                    }
                }
                return a;
            })(t, e) ||
            g(t, e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function p(t) {
        return (
            (function (t) {
                if (Array.isArray(t)) return m(t);
            })(t) ||
            (function (t) {
                if (
                    ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                )
                    return Array.from(t);
            })(t) ||
            g(t) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function g(t, e) {
        if (t) {
            if ("string" == typeof t) return m(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return (
                "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i
                    ? Array.from(t)
                    : "Arguments" === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                    ? m(t, e)
                    : void 0
            );
        }
    }
    function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
    }
    function y(t, e) {
        var i =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
        if (!i) {
            if (
                Array.isArray(t) ||
                (i = g(t)) ||
                (e && t && "number" == typeof t.length)
            ) {
                i && (t = i);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= t.length
                            ? { done: !0 }
                            : { done: !1, value: t[n++] };
                    },
                    e: function (t) {
                        throw t;
                    },
                    f: o,
                };
            }
            throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
        }
        var a,
            s = !0,
            r = !1;
        return {
            s: function () {
                i = i.call(t);
            },
            n: function () {
                var t = i.next();
                return (s = t.done), t;
            },
            e: function (t) {
                (r = !0), (a = t);
            },
            f: function () {
                try {
                    s || null == i.return || i.return();
                } finally {
                    if (r) throw a;
                }
            },
        };
    }
    var b = function (t) {
            return (
                "object" === n(t) &&
                null !== t &&
                t.constructor === Object &&
                "[object Object]" === Object.prototype.toString.call(t)
            );
        },
        x = function t() {
            for (
                var e = !1, i = arguments.length, o = new Array(i), a = 0;
                a < i;
                a++
            )
                o[a] = arguments[a];
            "boolean" == typeof o[0] && (e = o.shift());
            var s = o[0];
            if (!s || "object" !== n(s))
                throw new Error("extendee must be an object");
            for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
                var h = r[c];
                for (var d in h)
                    if (h.hasOwnProperty(d)) {
                        var u = h[d];
                        if (e && (Array.isArray(u) || b(u))) {
                            var f = Array.isArray(u) ? [] : {};
                            s[d] = t(!0, s.hasOwnProperty(d) ? s[d] : f, u);
                        } else s[d] = u;
                    }
            }
            return s;
        },
        w = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1e4;
            return (
                (t = parseFloat(t) || 0),
                Math.round((t + Number.EPSILON) * e) / e
            );
        },
        k =
            ("undefined" != typeof window && window.ResizeObserver) ||
            (function () {
                function t(e) {
                    o(this, t),
                        (this.observables = []),
                        (this.boundCheck = this.check.bind(this)),
                        this.boundCheck(),
                        (this.callback = e);
                }
                return (
                    s(t, [
                        {
                            key: "observe",
                            value: function (t) {
                                if (
                                    !this.observables.some(function (e) {
                                        return e.el === t;
                                    })
                                ) {
                                    var e = {
                                        el: t,
                                        size: {
                                            height: t.clientHeight,
                                            width: t.clientWidth,
                                        },
                                    };
                                    this.observables.push(e);
                                }
                            },
                        },
                        {
                            key: "unobserve",
                            value: function (t) {
                                this.observables = this.observables.filter(
                                    function (e) {
                                        return e.el !== t;
                                    }
                                );
                            },
                        },
                        {
                            key: "disconnect",
                            value: function () {
                                this.observables = [];
                            },
                        },
                        {
                            key: "check",
                            value: function () {
                                var t = this.observables
                                    .filter(function (t) {
                                        var e = t.el.clientHeight,
                                            i = t.el.clientWidth;
                                        if (
                                            t.size.height !== e ||
                                            t.size.width !== i
                                        )
                                            return (
                                                (t.size.height = e),
                                                (t.size.width = i),
                                                !0
                                            );
                                    })
                                    .map(function (t) {
                                        return t.el;
                                    });
                                t.length > 0 && this.callback(t),
                                    window.requestAnimationFrame(
                                        this.boundCheck
                                    );
                            },
                        },
                    ]),
                    t
                );
            })(),
        S = function () {
            var t = window.getSelection
                ? window.getSelection()
                : document.selection;
            t &&
                t.rangeCount &&
                t.getRangeAt(0).getClientRects().length &&
                (t.removeAllRanges
                    ? t.removeAllRanges()
                    : t.empty && t.empty());
        },
        C = s(function t(e) {
            o(this, t),
                (this.id = e.pointerId || e.identifier || -1),
                (this.pageX = e.pageX),
                (this.pageY = e.pageY),
                (this.clientX = e.clientX),
                (this.clientY = e.clientY),
                (this.nativePointer = e);
        });
    function $(t, e) {
        return e
            ? Math.sqrt(
                  Math.pow(e.clientX - t.clientX, 2) +
                      Math.pow(e.clientY - t.clientY, 2)
              )
            : 0;
    }
    function E(t, e) {
        return e
            ? {
                  clientX: (t.clientX + e.clientX) / 2,
                  clientY: (t.clientY + e.clientY) / 2,
              }
            : t;
    }
    var P = (function () {
            function t(e) {
                var i = this,
                    n =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                    a = n.start,
                    s =
                        void 0 === a
                            ? function () {
                                  return !0;
                              }
                            : a,
                    r = n.move,
                    l = void 0 === r ? function () {} : r,
                    c = n.end,
                    h = void 0 === c ? function () {} : c;
                o(this, t),
                    (this.element = e),
                    (this.startPointers = []),
                    (this.currentPointers = []),
                    (this.startCallback = s),
                    (this.moveCallback = l),
                    (this.endCallback = h),
                    (this.onStart = function (t) {
                        if (!t.button || 0 === t.button) {
                            var e = new C(t);
                            if (!1 === i.startCallback(e, t)) return !1;
                            t.preventDefault(),
                                S(),
                                i.currentPointers.push(e),
                                i.startPointers.push(e),
                                (t.target && "setPointerCapture" in t.target
                                    ? t.target
                                    : i.element
                                ).setPointerCapture(t.pointerId),
                                i.element.addEventListener(
                                    "pointermove",
                                    i.onMove
                                ),
                                i.element.addEventListener(
                                    "pointerup",
                                    i.onEnd
                                ),
                                i.element.addEventListener(
                                    "pointercancel",
                                    i.onEnd
                                );
                        }
                    }),
                    (this.onMove = function (t) {
                        for (
                            var e = i.currentPointers.slice(),
                                n = [],
                                o = function () {
                                    var t = s[a],
                                        e = i.currentPointers.findIndex(
                                            function (e) {
                                                return e.id === t.id;
                                            }
                                        );
                                    if (e < 0) return "continue";
                                    n.push(t), (i.currentPointers[e] = t);
                                },
                                a = 0,
                                s = [new C(t)];
                            a < s.length;
                            a++
                        )
                            o();
                        n.length && i.moveCallback(e, i.currentPointers, t);
                    }),
                    (this.onEnd = function (t) {
                        var e = new C(t),
                            n = i.currentPointers.findIndex(function (t) {
                                return t.id === e.id;
                            });
                        if (-1 === n) return !1;
                        i.currentPointers.splice(n, 1),
                            i.startPointers.splice(n, 1),
                            i.endCallback(e, t),
                            i.currentPointers.length ||
                                (i.element.removeEventListener(
                                    "pointermove",
                                    i.onMove
                                ),
                                i.element.removeEventListener(
                                    "pointerup",
                                    i.onEnd
                                ),
                                i.element.removeEventListener(
                                    "pointercancel",
                                    i.onEnd
                                ));
                    }),
                    this.element.addEventListener("pointerdown", this.onStart);
            }
            return (
                s(t, [
                    {
                        key: "stop",
                        value: function () {
                            this.element.removeEventListener(
                                "pointerdown",
                                this.onStart
                            ),
                                this.element.removeEventListener(
                                    "pointermove",
                                    this.onMove
                                ),
                                this.element.removeEventListener(
                                    "pointerup",
                                    this.onEnd
                                ),
                                this.element.removeEventListener(
                                    "pointercancel",
                                    this.onEnd
                                );
                        },
                    },
                ]),
                t
            );
        })(),
        T = function (t, e) {
            return t.split(".").reduce(function (t, e) {
                return t && t[e];
            }, e);
        },
        L = (function () {
            function t() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                o(this, t),
                    (this.options = x(!0, {}, e)),
                    (this.plugins = []),
                    (this.events = {});
                for (var i = 0, n = ["on", "once"]; i < n.length; i++)
                    for (
                        var a = n[i],
                            s = 0,
                            r = Object.entries(this.options[a] || {});
                        s < r.length;
                        s++
                    ) {
                        var l = r[s];
                        this[a].apply(this, p(l));
                    }
            }
            return (
                s(t, [
                    {
                        key: "option",
                        value: function (t, e) {
                            t = String(t);
                            var i = T(t, this.options);
                            if ("function" == typeof i) {
                                for (
                                    var n,
                                        o = arguments.length,
                                        a = new Array(o > 2 ? o - 2 : 0),
                                        s = 2;
                                    s < o;
                                    s++
                                )
                                    a[s - 2] = arguments[s];
                                i = (n = i).call.apply(
                                    n,
                                    [this, this].concat(a)
                                );
                            }
                            return void 0 === i ? e : i;
                        },
                    },
                    {
                        key: "localize",
                        value: function (t) {
                            var e = this,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : [];
                            return (t = (t = String(t).replace(
                                /\{\{(\w+).?(\w+)?\}\}/g,
                                function (t, n, o) {
                                    var a = "";
                                    o
                                        ? (a = e.option(
                                              ""
                                                  .concat(
                                                      n[0] +
                                                          n
                                                              .toLowerCase()
                                                              .substring(1),
                                                      ".l10n."
                                                  )
                                                  .concat(o)
                                          ))
                                        : n &&
                                          (a = e.option("l10n.".concat(n))),
                                        a || (a = t);
                                    for (var s = 0; s < i.length; s++)
                                        a = a.split(i[s][0]).join(i[s][1]);
                                    return a;
                                }
                            )).replace(/\{\{(.*)\}\}/, function (t, e) {
                                return e;
                            }));
                        },
                    },
                    {
                        key: "on",
                        value: function (t, e) {
                            var i = this;
                            if (b(t)) {
                                for (
                                    var n = 0, o = Object.entries(t);
                                    n < o.length;
                                    n++
                                ) {
                                    var a = o[n];
                                    this.on.apply(this, p(a));
                                }
                                return this;
                            }
                            return (
                                String(t)
                                    .split(" ")
                                    .forEach(function (t) {
                                        var n = (i.events[t] =
                                            i.events[t] || []);
                                        -1 == n.indexOf(e) && n.push(e);
                                    }),
                                this
                            );
                        },
                    },
                    {
                        key: "once",
                        value: function (t, e) {
                            var i = this;
                            if (b(t)) {
                                for (
                                    var n = 0, o = Object.entries(t);
                                    n < o.length;
                                    n++
                                ) {
                                    var a = o[n];
                                    this.once.apply(this, p(a));
                                }
                                return this;
                            }
                            return (
                                String(t)
                                    .split(" ")
                                    .forEach(function (t) {
                                        var n = function n() {
                                            i.off(t, n);
                                            for (
                                                var o = arguments.length,
                                                    a = new Array(o),
                                                    s = 0;
                                                s < o;
                                                s++
                                            )
                                                a[s] = arguments[s];
                                            e.call.apply(e, [i, i].concat(a));
                                        };
                                        (n._ = e), i.on(t, n);
                                    }),
                                this
                            );
                        },
                    },
                    {
                        key: "off",
                        value: function (t, e) {
                            var i = this;
                            if (!b(t))
                                return (
                                    t.split(" ").forEach(function (t) {
                                        var n = i.events[t];
                                        if (!n || !n.length) return i;
                                        for (
                                            var o = -1, a = 0, s = n.length;
                                            a < s;
                                            a++
                                        ) {
                                            var r = n[a];
                                            if (r && (r === e || r._ === e)) {
                                                o = a;
                                                break;
                                            }
                                        }
                                        -1 != o && n.splice(o, 1);
                                    }),
                                    this
                                );
                            for (
                                var n = 0, o = Object.entries(t);
                                n < o.length;
                                n++
                            ) {
                                var a = o[n];
                                this.off.apply(this, p(a));
                            }
                        },
                    },
                    {
                        key: "trigger",
                        value: function (t) {
                            for (
                                var e = arguments.length,
                                    i = new Array(e > 1 ? e - 1 : 0),
                                    n = 1;
                                n < e;
                                n++
                            )
                                i[n - 1] = arguments[n];
                            var o,
                                a = y(p(this.events[t] || []).slice());
                            try {
                                for (a.s(); !(o = a.n()).done; ) {
                                    var s = o.value;
                                    if (
                                        s &&
                                        !1 ===
                                            s.call.apply(
                                                s,
                                                [this, this].concat(i)
                                            )
                                    )
                                        return !1;
                                }
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            var r,
                                l = y(p(this.events["*"] || []).slice());
                            try {
                                for (l.s(); !(r = l.n()).done; ) {
                                    var c = r.value;
                                    if (
                                        c &&
                                        !1 ===
                                            c.call.apply(
                                                c,
                                                [this, t, this].concat(i)
                                            )
                                    )
                                        return !1;
                                }
                            } catch (t) {
                                l.e(t);
                            } finally {
                                l.f();
                            }
                            return !0;
                        },
                    },
                    {
                        key: "attachPlugins",
                        value: function (t) {
                            for (
                                var e = {}, i = 0, n = Object.entries(t || {});
                                i < n.length;
                                i++
                            ) {
                                var o = v(n[i], 2),
                                    a = o[0],
                                    s = o[1];
                                !1 === this.options[a] ||
                                    this.plugins[a] ||
                                    ((this.options[a] = x(
                                        {},
                                        s.defaults || {},
                                        this.options[a]
                                    )),
                                    (e[a] = new s(this)));
                            }
                            for (
                                var r = 0, l = Object.entries(e);
                                r < l.length;
                                r++
                            ) {
                                var c = v(l[r], 2);
                                c[0], c[1].attach(this);
                            }
                            return (
                                (this.plugins = Object.assign(
                                    {},
                                    this.plugins,
                                    e
                                )),
                                this
                            );
                        },
                    },
                    {
                        key: "detachPlugins",
                        value: function () {
                            for (var t in this.plugins) {
                                var e = void 0;
                                (e = this.plugins[t]) &&
                                    "function" == typeof e.detach &&
                                    e.detach(this);
                            }
                            return (this.plugins = {}), this;
                        },
                    },
                ]),
                t
            );
        })(),
        A = {
            touch: !0,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: !1,
            lockAxis: !1,
            friction: 0.64,
            decelFriction: 0.88,
            zoomFriction: 0.74,
            bounceForce: 0.2,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: 0.5,
            textSelection: !1,
            click: "toggleZoom",
            wheel: "zoom",
            wheelFactor: 42,
            wheelLimit: 5,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging",
            ratio: 1,
        },
        O = (function (t) {
            l(n, t);
            var e = f(n);
            function n(t) {
                var i,
                    a =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                o(this, n),
                    ((i = e.call(this, x(!0, {}, A, a))).state = "init"),
                    (i.$container = t);
                for (
                    var s = 0, r = ["onLoad", "onWheel", "onClick"];
                    s < r.length;
                    s++
                ) {
                    var l = r[s];
                    i[l] = i[l].bind(d(i));
                }
                return (
                    i.initLayout(),
                    i.resetValues(),
                    i.attachPlugins(n.Plugins),
                    i.trigger("init"),
                    i.updateMetrics(),
                    i.attachEvents(),
                    i.trigger("ready"),
                    !1 === i.option("centerOnStart")
                        ? (i.state = "ready")
                        : i.panTo({ friction: 0 }),
                    i
                );
            }
            return (
                s(n, [
                    {
                        key: "initLayout",
                        value: function () {
                            var t = this.$container;
                            if (!(t instanceof HTMLElement))
                                throw new Error("Panzoom: Container not found");
                            var e =
                                this.option("content") ||
                                t.querySelector(".panzoom__content");
                            if (!e)
                                throw new Error("Panzoom: Content not found");
                            this.$content = e;
                            var i,
                                n =
                                    this.option("viewport") ||
                                    t.querySelector(".panzoom__viewport");
                            n ||
                                !1 === this.option("wrapInner") ||
                                ((n =
                                    document.createElement(
                                        "div"
                                    )).classList.add("panzoom__viewport"),
                                (i = n).append.apply(i, p(t.childNodes)),
                                t.appendChild(n));
                            this.$viewport = n || e.parentNode;
                        },
                    },
                    {
                        key: "resetValues",
                        value: function () {
                            (this.updateRate = this.option(
                                "updateRate",
                                /iPhone|iPad|iPod|Android/i.test(
                                    navigator.userAgent
                                )
                                    ? 250
                                    : 24
                            )),
                                (this.container = { width: 0, height: 0 }),
                                (this.viewport = { width: 0, height: 0 }),
                                (this.content = {
                                    origWidth: 0,
                                    origHeight: 0,
                                    width: 0,
                                    height: 0,
                                    x: this.option("x", 0),
                                    y: this.option("y", 0),
                                    scale: this.option("baseScale"),
                                }),
                                (this.transform = { x: 0, y: 0, scale: 1 }),
                                this.resetDragPosition();
                        },
                    },
                    {
                        key: "onLoad",
                        value: function (t) {
                            this.updateMetrics(),
                                this.panTo({
                                    scale: this.option("baseScale"),
                                    friction: 0,
                                }),
                                this.trigger("load", t);
                        },
                    },
                    {
                        key: "onClick",
                        value: function (t) {
                            if (!t.defaultPrevented)
                                if (
                                    this.option("textSelection") &&
                                    window.getSelection().toString().length
                                )
                                    t.stopPropagation();
                                else {
                                    var e = this.$content.getClientRects()[0];
                                    if (
                                        "ready" !== this.state &&
                                        (this.dragPosition.midPoint ||
                                            Math.abs(
                                                e.top - this.dragStart.rect.top
                                            ) > 1 ||
                                            Math.abs(
                                                e.left -
                                                    this.dragStart.rect.left
                                            ) > 1)
                                    )
                                        return (
                                            t.preventDefault(),
                                            void t.stopPropagation()
                                        );
                                    !1 !== this.trigger("click", t) &&
                                        this.option("zoom") &&
                                        "toggleZoom" === this.option("click") &&
                                        (t.preventDefault(),
                                        t.stopPropagation(),
                                        this.zoomWithClick(t));
                                }
                        },
                    },
                    {
                        key: "onWheel",
                        value: function (t) {
                            !1 !== this.trigger("wheel", t) &&
                                this.option("zoom") &&
                                this.option("wheel") &&
                                this.zoomWithWheel(t);
                        },
                    },
                    {
                        key: "zoomWithWheel",
                        value: function (t) {
                            void 0 === this.changedDelta &&
                                (this.changedDelta = 0);
                            var e = Math.max(
                                    -1,
                                    Math.min(
                                        1,
                                        -t.deltaY ||
                                            -t.deltaX ||
                                            t.wheelDelta ||
                                            -t.detail
                                    )
                                ),
                                i = this.content.scale,
                                n =
                                    (i *
                                        (100 +
                                            e * this.option("wheelFactor"))) /
                                    100;
                            if (
                                ((e < 0 &&
                                    Math.abs(i - this.option("minScale")) <
                                        0.01) ||
                                (e > 0 &&
                                    Math.abs(i - this.option("maxScale")) <
                                        0.01)
                                    ? ((this.changedDelta += Math.abs(e)),
                                      (n = i))
                                    : ((this.changedDelta = 0),
                                      (n = Math.max(
                                          Math.min(n, this.option("maxScale")),
                                          this.option("minScale")
                                      ))),
                                !(
                                    this.changedDelta >
                                    this.option("wheelLimit")
                                ) && (t.preventDefault(), n !== i))
                            ) {
                                var o = this.$content.getBoundingClientRect(),
                                    a = t.clientX - o.left,
                                    s = t.clientY - o.top;
                                this.zoomTo(n, { x: a, y: s });
                            }
                        },
                    },
                    {
                        key: "zoomWithClick",
                        value: function (t) {
                            var e = this.$content.getClientRects()[0],
                                i = t.clientX - e.left,
                                n = t.clientY - e.top;
                            this.toggleZoom({ x: i, y: n });
                        },
                    },
                    {
                        key: "attachEvents",
                        value: function () {
                            var t = this;
                            this.$content.addEventListener("load", this.onLoad),
                                this.$container.addEventListener(
                                    "wheel",
                                    this.onWheel,
                                    { passive: !1 }
                                ),
                                this.$container.addEventListener(
                                    "click",
                                    this.onClick,
                                    { passive: !1 }
                                ),
                                this.initObserver();
                            var e = new P(this.$container, {
                                start: function (i, n) {
                                    if (!t.option("touch")) return !1;
                                    if (!(t.velocity.scale < 0)) {
                                        if (!e.currentPointers.length) {
                                            if (
                                                -1 !==
                                                [
                                                    "BUTTON",
                                                    "TEXTAREA",
                                                    "OPTION",
                                                    "INPUT",
                                                    "SELECT",
                                                    "VIDEO",
                                                ].indexOf(n.target.nodeName)
                                            )
                                                return !1;
                                            if (
                                                t.option("textSelection") &&
                                                (function (t, e, i) {
                                                    for (
                                                        var n = t.childNodes,
                                                            o =
                                                                document.createRange(),
                                                            a = 0;
                                                        a < n.length;
                                                        a++
                                                    ) {
                                                        var s = n[a];
                                                        if (
                                                            s.nodeType ===
                                                            Node.TEXT_NODE
                                                        ) {
                                                            o.selectNodeContents(
                                                                s
                                                            );
                                                            var r =
                                                                o.getBoundingClientRect();
                                                            if (
                                                                e >= r.left &&
                                                                i >= r.top &&
                                                                e <= r.right &&
                                                                i <= r.bottom
                                                            )
                                                                return s;
                                                        }
                                                    }
                                                    return !1;
                                                })(
                                                    n.target,
                                                    n.clientX,
                                                    n.clientY
                                                )
                                            )
                                                return !1;
                                        }
                                        return (
                                            !1 !== t.trigger("touchStart", n) &&
                                            ((t.state = "pointerdown"),
                                            t.resetDragPosition(),
                                            (t.dragPosition.midPoint = null),
                                            (t.dragPosition.time = Date.now()),
                                            !0)
                                        );
                                    }
                                },
                                move: function (i, n, o) {
                                    if ("pointerdown" === t.state)
                                        if (0 != t.trigger("touchMove", o)) {
                                            if (
                                                !(
                                                    n.length < 2 &&
                                                    1 ==
                                                        t.option(
                                                            "panOnlyZoomed"
                                                        ) &&
                                                    t.content.width <=
                                                        t.viewport.width &&
                                                    t.content.height <=
                                                        t.viewport.height &&
                                                    t.transform.scale <=
                                                        t.option("baseScale")
                                                ) &&
                                                (!(n.length > 1) ||
                                                    (t.option("zoom") &&
                                                        !1 !==
                                                            t.option(
                                                                "pinchToZoom"
                                                            )))
                                            ) {
                                                o.preventDefault(),
                                                    o.stopPropagation();
                                                var a = E(i[0], i[1]),
                                                    s = E(n[0], n[1]),
                                                    r = s.clientX - a.clientX,
                                                    l = s.clientY - a.clientY,
                                                    c = $(i[0], i[1]),
                                                    h = $(n[0], n[1]),
                                                    d = c ? h / c : 1;
                                                (t.dragOffset.x += r),
                                                    (t.dragOffset.y += l),
                                                    (t.dragOffset.scale *= d),
                                                    (t.dragOffset.time =
                                                        Date.now() -
                                                        t.dragPosition.time);
                                                var u =
                                                    1 === t.dragStart.scale &&
                                                    t.option("lockAxis");
                                                if (u && !t.lockAxis) {
                                                    if (
                                                        Math.abs(
                                                            t.dragOffset.x
                                                        ) < 6 &&
                                                        Math.abs(
                                                            t.dragOffset.y
                                                        ) < 6
                                                    )
                                                        return;
                                                    if ("xy" === u) {
                                                        var f = Math.abs(
                                                            (180 *
                                                                Math.atan2(
                                                                    t.dragOffset
                                                                        .y,
                                                                    t.dragOffset
                                                                        .x
                                                                )) /
                                                                Math.PI
                                                        );
                                                        t.lockAxis =
                                                            f > 45 && f < 135
                                                                ? "y"
                                                                : "x";
                                                    } else t.lockAxis = u;
                                                }
                                                if (
                                                    (t.lockAxis &&
                                                        (t.dragOffset[
                                                            "x" === t.lockAxis
                                                                ? "y"
                                                                : "x"
                                                        ] = 0),
                                                    t.$container.classList.add(
                                                        t.option(
                                                            "draggingClass"
                                                        )
                                                    ),
                                                    (t.transform.scale ===
                                                        t.option("baseScale") &&
                                                        "y" === t.lockAxis) ||
                                                        (t.dragPosition.x =
                                                            t.dragStart.x +
                                                            t.dragOffset.x),
                                                    (t.transform.scale ===
                                                        t.option("baseScale") &&
                                                        "x" === t.lockAxis) ||
                                                        (t.dragPosition.y =
                                                            t.dragStart.y +
                                                            t.dragOffset.y),
                                                    (t.dragPosition.scale =
                                                        t.dragStart.scale *
                                                        t.dragOffset.scale),
                                                    n.length > 1)
                                                ) {
                                                    var v = E(
                                                            e.startPointers[0],
                                                            e.startPointers[1]
                                                        ),
                                                        p =
                                                            v.clientX -
                                                            t.dragStart.rect.x,
                                                        g =
                                                            v.clientY -
                                                            t.dragStart.rect.y,
                                                        m = t.getZoomDelta(
                                                            t.content.scale *
                                                                t.dragOffset
                                                                    .scale,
                                                            p,
                                                            g
                                                        ),
                                                        y = m.deltaX,
                                                        b = m.deltaY;
                                                    (t.dragPosition.x -= y),
                                                        (t.dragPosition.y -= b),
                                                        (t.dragPosition.midPoint =
                                                            s);
                                                } else t.setDragResistance();
                                                (t.transform = {
                                                    x: t.dragPosition.x,
                                                    y: t.dragPosition.y,
                                                    scale: t.dragPosition.scale,
                                                }),
                                                    t.startAnimation();
                                            }
                                        } else o.preventDefault();
                                },
                                end: function (n, o) {
                                    if ("pointerdown" === t.state)
                                        if (
                                            ((t._dragOffset = i(
                                                {},
                                                t.dragOffset
                                            )),
                                            e.currentPointers.length)
                                        )
                                            t.resetDragPosition();
                                        else if (
                                            ((t.state = "decel"),
                                            (t.friction =
                                                t.option("decelFriction")),
                                            t.recalculateTransform(),
                                            t.$container.classList.remove(
                                                t.option("draggingClass")
                                            ),
                                            !1 !== t.trigger("touchEnd", o) &&
                                                "decel" === t.state)
                                        ) {
                                            var a = t.option("minScale");
                                            if (t.transform.scale < a)
                                                t.zoomTo(a, { friction: 0.64 });
                                            else {
                                                var s = t.option("maxScale");
                                                if (
                                                    t.transform.scale - s >
                                                    0.01
                                                ) {
                                                    var r =
                                                            t.dragPosition
                                                                .midPoint || n,
                                                        l =
                                                            t.$content.getClientRects()[0];
                                                    t.zoomTo(s, {
                                                        friction: 0.64,
                                                        x: r.clientX - l.left,
                                                        y: r.clientY - l.top,
                                                    });
                                                } else;
                                            }
                                        }
                                },
                            });
                            this.pointerTracker = e;
                        },
                    },
                    {
                        key: "initObserver",
                        value: function () {
                            var t = this;
                            this.resizeObserver ||
                                ((this.resizeObserver = new k(function () {
                                    t.updateTimer ||
                                        (t.updateTimer = setTimeout(
                                            function () {
                                                var e =
                                                    t.$container.getBoundingClientRect();
                                                e.width && e.height
                                                    ? ((Math.abs(
                                                          e.width -
                                                              t.container.width
                                                      ) > 1 ||
                                                          Math.abs(
                                                              e.height -
                                                                  t.container
                                                                      .height
                                                          ) > 1) &&
                                                          (t.isAnimating() &&
                                                              t.endAnimation(
                                                                  !0
                                                              ),
                                                          t.updateMetrics(),
                                                          t.panTo({
                                                              x: t.content.x,
                                                              y: t.content.y,
                                                              scale: t.option(
                                                                  "baseScale"
                                                              ),
                                                              friction: 0,
                                                          })),
                                                      (t.updateTimer = null))
                                                    : (t.updateTimer = null);
                                            },
                                            t.updateRate
                                        ));
                                })),
                                this.resizeObserver.observe(this.$container));
                        },
                    },
                    {
                        key: "resetDragPosition",
                        value: function () {
                            (this.lockAxis = null),
                                (this.friction = this.option("friction")),
                                (this.velocity = { x: 0, y: 0, scale: 0 });
                            var t = this.content,
                                e = t.x,
                                n = t.y,
                                o = t.scale;
                            (this.dragStart = {
                                rect: this.$content.getBoundingClientRect(),
                                x: e,
                                y: n,
                                scale: o,
                            }),
                                (this.dragPosition = i(
                                    i({}, this.dragPosition),
                                    {},
                                    { x: e, y: n, scale: o }
                                )),
                                (this.dragOffset = {
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    time: 0,
                                });
                        },
                    },
                    {
                        key: "updateMetrics",
                        value: function (t) {
                            !0 !== t && this.trigger("beforeUpdate");
                            var e,
                                n = this.$container,
                                o = this.$content,
                                a = this.$viewport,
                                s = o instanceof HTMLImageElement,
                                r = this.option("zoom"),
                                l = this.option("resizeParent", r),
                                c = this.option("width"),
                                h = this.option("height"),
                                d =
                                    c ||
                                    ((e = o),
                                    Math.max(
                                        parseFloat(e.naturalWidth || 0),
                                        parseFloat(
                                            (e.width &&
                                                e.width.baseVal &&
                                                e.width.baseVal.value) ||
                                                0
                                        ),
                                        parseFloat(e.offsetWidth || 0),
                                        parseFloat(e.scrollWidth || 0)
                                    )),
                                u =
                                    h ||
                                    (function (t) {
                                        return Math.max(
                                            parseFloat(t.naturalHeight || 0),
                                            parseFloat(
                                                (t.height &&
                                                    t.height.baseVal &&
                                                    t.height.baseVal.value) ||
                                                    0
                                            ),
                                            parseFloat(t.offsetHeight || 0),
                                            parseFloat(t.scrollHeight || 0)
                                        );
                                    })(o);
                            Object.assign(o.style, {
                                width: c ? "".concat(c, "px") : "",
                                height: h ? "".concat(h, "px") : "",
                                maxWidth: "",
                                maxHeight: "",
                            }),
                                l &&
                                    Object.assign(a.style, {
                                        width: "",
                                        height: "",
                                    });
                            var f = this.option("ratio");
                            (c = d = w(d * f)), (h = u = w(u * f));
                            var v = o.getBoundingClientRect(),
                                p = a.getBoundingClientRect(),
                                g = a == n ? p : n.getBoundingClientRect(),
                                m = Math.max(a.offsetWidth, w(p.width)),
                                y = Math.max(a.offsetHeight, w(p.height)),
                                b = window.getComputedStyle(a);
                            if (
                                ((m -=
                                    parseFloat(b.paddingLeft) +
                                    parseFloat(b.paddingRight)),
                                (y -=
                                    parseFloat(b.paddingTop) +
                                    parseFloat(b.paddingBottom)),
                                (this.viewport.width = m),
                                (this.viewport.height = y),
                                r)
                            ) {
                                if (
                                    Math.abs(d - v.width) > 0.1 ||
                                    Math.abs(u - v.height) > 0.1
                                ) {
                                    var x = (function (t, e, i, n) {
                                        var o = Math.min(i / t || 0, n / e);
                                        return {
                                            width: t * o || 0,
                                            height: e * o || 0,
                                        };
                                    })(
                                        d,
                                        u,
                                        Math.min(d, v.width),
                                        Math.min(u, v.height)
                                    );
                                    (c = w(x.width)), (h = w(x.height));
                                }
                                Object.assign(o.style, {
                                    width: "".concat(c, "px"),
                                    height: "".concat(h, "px"),
                                    transform: "",
                                });
                            }
                            if (
                                (l &&
                                    (Object.assign(a.style, {
                                        width: "".concat(c, "px"),
                                        height: "".concat(h, "px"),
                                    }),
                                    (this.viewport = i(
                                        i({}, this.viewport),
                                        {},
                                        { width: c, height: h }
                                    ))),
                                s &&
                                    r &&
                                    "function" != typeof this.options.maxScale)
                            ) {
                                var k = this.option("maxScale");
                                this.options.maxScale = function () {
                                    return this.content.origWidth > 0 &&
                                        this.content.fitWidth > 0
                                        ? this.content.origWidth /
                                              this.content.fitWidth
                                        : k;
                                };
                            }
                            (this.content = i(
                                i({}, this.content),
                                {},
                                {
                                    origWidth: d,
                                    origHeight: u,
                                    fitWidth: c,
                                    fitHeight: h,
                                    width: c,
                                    height: h,
                                    scale: 1,
                                    isZoomable: r,
                                }
                            )),
                                (this.container = {
                                    width: g.width,
                                    height: g.height,
                                }),
                                !0 !== t && this.trigger("afterUpdate");
                        },
                    },
                    {
                        key: "zoomIn",
                        value: function (t) {
                            this.zoomTo(
                                this.content.scale + (t || this.option("step"))
                            );
                        },
                    },
                    {
                        key: "zoomOut",
                        value: function (t) {
                            this.zoomTo(
                                this.content.scale - (t || this.option("step"))
                            );
                        },
                    },
                    {
                        key: "toggleZoom",
                        value: function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                e = this.option("maxScale"),
                                i = this.option("baseScale"),
                                n =
                                    this.content.scale > i + 0.5 * (e - i)
                                        ? i
                                        : e;
                            this.zoomTo(n, t);
                        },
                    },
                    {
                        key: "zoomTo",
                        value: function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.option("baseScale"),
                                e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {},
                                i = e.x,
                                n = void 0 === i ? null : i,
                                o = e.y,
                                a = void 0 === o ? null : o;
                            t = Math.max(
                                Math.min(t, this.option("maxScale")),
                                this.option("minScale")
                            );
                            var s = w(
                                this.content.scale /
                                    (this.content.width /
                                        this.content.fitWidth),
                                1e7
                            );
                            null === n && (n = this.content.width * s * 0.5),
                                null === a &&
                                    (a = this.content.height * s * 0.5);
                            var r = this.getZoomDelta(t, n, a),
                                l = r.deltaX,
                                c = r.deltaY;
                            (n = this.content.x - l),
                                (a = this.content.y - c),
                                this.panTo({
                                    x: n,
                                    y: a,
                                    scale: t,
                                    friction: this.option("zoomFriction"),
                                });
                        },
                    },
                    {
                        key: "getZoomDelta",
                        value: function (t) {
                            var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 0,
                                i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : 0,
                                n = this.content.fitWidth * this.content.scale,
                                o = this.content.fitHeight * this.content.scale,
                                a = e > 0 && n ? e / n : 0,
                                s = i > 0 && o ? i / o : 0,
                                r = this.content.fitWidth * t,
                                l = this.content.fitHeight * t,
                                c = (r - n) * a,
                                h = (l - o) * s;
                            return { deltaX: c, deltaY: h };
                        },
                    },
                    {
                        key: "panTo",
                        value: function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                e = t.x,
                                n = void 0 === e ? this.content.x : e,
                                o = t.y,
                                a = void 0 === o ? this.content.y : o,
                                s = t.scale,
                                r = t.friction,
                                l = void 0 === r ? this.option("friction") : r,
                                c = t.ignoreBounds,
                                h = void 0 !== c && c;
                            if (((s = s || this.content.scale || 1), !h)) {
                                var d = this.getBounds(s),
                                    u = d.boundX,
                                    f = d.boundY;
                                u && (n = Math.max(Math.min(n, u.to), u.from)),
                                    f &&
                                        (a = Math.max(
                                            Math.min(a, f.to),
                                            f.from
                                        ));
                            }
                            (this.friction = l),
                                (this.transform = i(
                                    i({}, this.transform),
                                    {},
                                    { x: n, y: a, scale: s }
                                )),
                                l
                                    ? ((this.state = "panning"),
                                      (this.velocity = {
                                          x:
                                              (1 / this.friction - 1) *
                                              (n - this.content.x),
                                          y:
                                              (1 / this.friction - 1) *
                                              (a - this.content.y),
                                          scale:
                                              (1 / this.friction - 1) *
                                              (s - this.content.scale),
                                      }),
                                      this.startAnimation())
                                    : this.endAnimation();
                        },
                    },
                    {
                        key: "startAnimation",
                        value: function () {
                            var t = this;
                            this.rAF
                                ? cancelAnimationFrame(this.rAF)
                                : this.trigger("startAnimation"),
                                (this.rAF = requestAnimationFrame(function () {
                                    return t.animate();
                                }));
                        },
                    },
                    {
                        key: "animate",
                        value: function () {
                            var t = this;
                            if (
                                (this.setEdgeForce(),
                                this.setDragForce(),
                                (this.velocity.x *= this.friction),
                                (this.velocity.y *= this.friction),
                                (this.velocity.scale *= this.friction),
                                (this.content.x += this.velocity.x),
                                (this.content.y += this.velocity.y),
                                (this.content.scale += this.velocity.scale),
                                this.isAnimating())
                            )
                                this.setTransform();
                            else if ("pointerdown" !== this.state)
                                return void this.endAnimation();
                            this.rAF = requestAnimationFrame(function () {
                                return t.animate();
                            });
                        },
                    },
                    {
                        key: "getBounds",
                        value: function (t) {
                            var e = this.boundX,
                                i = this.boundY;
                            if (void 0 !== e && void 0 !== i)
                                return { boundX: e, boundY: i };
                            (e = { from: 0, to: 0 }),
                                (i = { from: 0, to: 0 }),
                                (t = t || this.transform.scale);
                            var n = this.content.fitWidth * t,
                                o = this.content.fitHeight * t,
                                a = this.viewport.width,
                                s = this.viewport.height;
                            if (n < a) {
                                var r = w(0.5 * (a - n));
                                (e.from = r), (e.to = r);
                            } else e.from = w(a - n);
                            if (o < s) {
                                var l = 0.5 * (s - o);
                                (i.from = l), (i.to = l);
                            } else i.from = w(s - o);
                            return { boundX: e, boundY: i };
                        },
                    },
                    {
                        key: "setEdgeForce",
                        value: function () {
                            if ("decel" === this.state) {
                                var t,
                                    e,
                                    i,
                                    n,
                                    o = this.option("bounceForce"),
                                    a = this.getBounds(
                                        Math.max(
                                            this.transform.scale,
                                            this.content.scale
                                        )
                                    ),
                                    s = a.boundX,
                                    r = a.boundY;
                                if (
                                    (s &&
                                        ((t = this.content.x < s.from),
                                        (e = this.content.x > s.to)),
                                    r &&
                                        ((i = this.content.y < r.from),
                                        (n = this.content.y > r.to)),
                                    t || e)
                                ) {
                                    var l =
                                            ((t ? s.from : s.to) -
                                                this.content.x) *
                                            o,
                                        c =
                                            this.content.x +
                                            (this.velocity.x + l) /
                                                this.friction;
                                    c >= s.from &&
                                        c <= s.to &&
                                        (l += this.velocity.x),
                                        (this.velocity.x = l),
                                        this.recalculateTransform();
                                }
                                if (i || n) {
                                    var h =
                                            ((i ? r.from : r.to) -
                                                this.content.y) *
                                            o,
                                        d =
                                            this.content.y +
                                            (h + this.velocity.y) /
                                                this.friction;
                                    d >= r.from &&
                                        d <= r.to &&
                                        (h += this.velocity.y),
                                        (this.velocity.y = h),
                                        this.recalculateTransform();
                                }
                            }
                        },
                    },
                    {
                        key: "setDragResistance",
                        value: function () {
                            if ("pointerdown" === this.state) {
                                var t,
                                    e,
                                    i,
                                    n,
                                    o = this.getBounds(this.dragPosition.scale),
                                    a = o.boundX,
                                    s = o.boundY;
                                if (
                                    (a &&
                                        ((t = this.dragPosition.x < a.from),
                                        (e = this.dragPosition.x > a.to)),
                                    s &&
                                        ((i = this.dragPosition.y < s.from),
                                        (n = this.dragPosition.y > s.to)),
                                    (t || e) && (!t || !e))
                                ) {
                                    var r = t ? a.from : a.to,
                                        l = r - this.dragPosition.x;
                                    this.dragPosition.x = r - 0.3 * l;
                                }
                                if ((i || n) && (!i || !n)) {
                                    var c = i ? s.from : s.to,
                                        h = c - this.dragPosition.y;
                                    this.dragPosition.y = c - 0.3 * h;
                                }
                            }
                        },
                    },
                    {
                        key: "setDragForce",
                        value: function () {
                            "pointerdown" === this.state &&
                                ((this.velocity.x =
                                    this.dragPosition.x - this.content.x),
                                (this.velocity.y =
                                    this.dragPosition.y - this.content.y),
                                (this.velocity.scale =
                                    this.dragPosition.scale -
                                    this.content.scale));
                        },
                    },
                    {
                        key: "recalculateTransform",
                        value: function () {
                            (this.transform.x =
                                this.content.x +
                                this.velocity.x / (1 / this.friction - 1)),
                                (this.transform.y =
                                    this.content.y +
                                    this.velocity.y / (1 / this.friction - 1)),
                                (this.transform.scale =
                                    this.content.scale +
                                    this.velocity.scale /
                                        (1 / this.friction - 1));
                        },
                    },
                    {
                        key: "isAnimating",
                        value: function () {
                            return !(
                                !this.friction ||
                                !(
                                    Math.abs(this.velocity.x) > 0.05 ||
                                    Math.abs(this.velocity.y) > 0.05 ||
                                    Math.abs(this.velocity.scale) > 0.05
                                )
                            );
                        },
                    },
                    {
                        key: "setTransform",
                        value: function (t) {
                            var e, n, o, a, s;
                            (t
                                ? ((e = w(this.transform.x)),
                                  (n = w(this.transform.y)),
                                  (o = this.transform.scale),
                                  (this.content = i(
                                      i({}, this.content),
                                      {},
                                      { x: e, y: n, scale: o }
                                  )))
                                : ((e = w(this.content.x)),
                                  (n = w(this.content.y)),
                                  (o =
                                      this.content.scale /
                                      (this.content.width /
                                          this.content.fitWidth)),
                                  (this.content = i(
                                      i({}, this.content),
                                      {},
                                      { x: e, y: n }
                                  ))),
                            this.trigger("beforeTransform"),
                            (e = w(this.content.x)),
                            (n = w(this.content.y)),
                            t && this.option("zoom"))
                                ? ((a = w(this.content.fitWidth * o)),
                                  (s = w(this.content.fitHeight * o)),
                                  (this.content.width = a),
                                  (this.content.height = s),
                                  (this.transform = i(
                                      i({}, this.transform),
                                      {},
                                      { width: a, height: s, scale: o }
                                  )),
                                  Object.assign(this.$content.style, {
                                      width: "".concat(a, "px"),
                                      height: "".concat(s, "px"),
                                      maxWidth: "none",
                                      maxHeight: "none",
                                      transform: "translate3d("
                                          .concat(e, "px, ")
                                          .concat(n, "px, 0) scale(1)"),
                                  }))
                                : (this.$content.style.transform =
                                      "translate3d("
                                          .concat(e, "px, ")
                                          .concat(n, "px, 0) scale(")
                                          .concat(o, ")"));
                            this.trigger("afterTransform");
                        },
                    },
                    {
                        key: "endAnimation",
                        value: function (t) {
                            cancelAnimationFrame(this.rAF),
                                (this.rAF = null),
                                (this.velocity = { x: 0, y: 0, scale: 0 }),
                                this.setTransform(!0),
                                (this.state = "ready"),
                                this.handleCursor(),
                                !0 !== t && this.trigger("endAnimation");
                        },
                    },
                    {
                        key: "handleCursor",
                        value: function () {
                            var t = this.option("draggableClass");
                            t &&
                                this.option("touch") &&
                                (1 == this.option("panOnlyZoomed") &&
                                this.content.width <= this.viewport.width &&
                                this.content.height <= this.viewport.height &&
                                this.transform.scale <= this.option("baseScale")
                                    ? this.$container.classList.remove(t)
                                    : this.$container.classList.add(t));
                        },
                    },
                    {
                        key: "detachEvents",
                        value: function () {
                            this.$content.removeEventListener(
                                "load",
                                this.onLoad
                            ),
                                this.$container.removeEventListener(
                                    "wheel",
                                    this.onWheel,
                                    { passive: !1 }
                                ),
                                this.$container.removeEventListener(
                                    "click",
                                    this.onClick,
                                    { passive: !1 }
                                ),
                                this.pointerTracker &&
                                    (this.pointerTracker.stop(),
                                    (this.pointerTracker = null)),
                                this.resizeObserver &&
                                    (this.resizeObserver.disconnect(),
                                    (this.resizeObserver = null));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            "destroy" !== this.state &&
                                ((this.state = "destroy"),
                                clearTimeout(this.updateTimer),
                                (this.updateTimer = null),
                                cancelAnimationFrame(this.rAF),
                                (this.rAF = null),
                                this.detachEvents(),
                                this.detachPlugins(),
                                this.resetDragPosition());
                        },
                    },
                ]),
                n
            );
        })(L);
    (O.version = "4.0.16"), (O.Plugins = {});
    var z = function (t, e) {
            var i = 0;
            return function () {
                var n = new Date().getTime();
                if (!(n - i < e)) return (i = n), t.apply(void 0, arguments);
            };
        },
        _ = (function () {
            function t(e) {
                o(this, t),
                    (this.$container = null),
                    (this.$prev = null),
                    (this.$next = null),
                    (this.carousel = e),
                    (this.onRefresh = this.onRefresh.bind(this));
            }
            return (
                s(t, [
                    {
                        key: "option",
                        value: function (t) {
                            return this.carousel.option(
                                "Navigation.".concat(t)
                            );
                        },
                    },
                    {
                        key: "createButton",
                        value: function (t) {
                            var e,
                                i = this,
                                n = document.createElement("button");
                            n.setAttribute(
                                "title",
                                this.carousel.localize(
                                    "{{".concat(t.toUpperCase(), "}}")
                                )
                            );
                            var o =
                                this.option("classNames.button") +
                                " " +
                                this.option("classNames.".concat(t));
                            return (
                                (e = n.classList).add.apply(e, p(o.split(" "))),
                                n.setAttribute("tabindex", "0"),
                                (n.innerHTML = this.carousel.localize(
                                    this.option("".concat(t, "Tpl"))
                                )),
                                n.addEventListener("click", function (e) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        i.carousel[
                                            "slide".concat(
                                                "next" === t ? "Next" : "Prev"
                                            )
                                        ]();
                                }),
                                n
                            );
                        },
                    },
                    {
                        key: "build",
                        value: function () {
                            this.$container ||
                                ((this.$container =
                                    document.createElement("div")),
                                this.$container.classList.add(
                                    this.option("classNames.main")
                                ),
                                this.carousel.$container.appendChild(
                                    this.$container
                                )),
                                this.$next ||
                                    ((this.$next = this.createButton("next")),
                                    this.$container.appendChild(this.$next)),
                                this.$prev ||
                                    ((this.$prev = this.createButton("prev")),
                                    this.$container.appendChild(this.$prev));
                        },
                    },
                    {
                        key: "onRefresh",
                        value: function () {
                            var t = this.carousel.pages.length;
                            t <= 1 ||
                            (t > 1 &&
                                this.carousel.elemDimWidth <
                                    this.carousel.wrapDimWidth &&
                                !Number.isInteger(
                                    this.carousel.option("slidesPerPage")
                                ))
                                ? this.cleanup()
                                : (this.build(),
                                  this.$prev.removeAttribute("disabled"),
                                  this.$next.removeAttribute("disabled"),
                                  this.carousel.option(
                                      "infiniteX",
                                      this.carousel.option("infinite")
                                  ) ||
                                      (this.carousel.page <= 0 &&
                                          this.$prev.setAttribute(
                                              "disabled",
                                              ""
                                          ),
                                      this.carousel.page >= t - 1 &&
                                          this.$next.setAttribute(
                                              "disabled",
                                              ""
                                          )));
                        },
                    },
                    {
                        key: "cleanup",
                        value: function () {
                            this.$prev && this.$prev.remove(),
                                (this.$prev = null),
                                this.$next && this.$next.remove(),
                                (this.$next = null),
                                this.$container && this.$container.remove(),
                                (this.$container = null);
                        },
                    },
                    {
                        key: "attach",
                        value: function () {
                            this.carousel.on("refresh change", this.onRefresh);
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.carousel.off("refresh change", this.onRefresh),
                                this.cleanup();
                        },
                    },
                ]),
                t
            );
        })();
    _.defaults = {
        prevTpl:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
            main: "carousel__nav",
            button: "carousel__button",
            next: "is-next",
            prev: "is-prev",
        },
    };
    var M = (function () {
            function t(e) {
                o(this, t),
                    (this.carousel = e),
                    (this.$list = null),
                    (this.events = {
                        change: this.onChange.bind(this),
                        refresh: this.onRefresh.bind(this),
                    });
            }
            return (
                s(t, [
                    {
                        key: "buildList",
                        value: function () {
                            var t = this;
                            if (
                                !(
                                    this.carousel.pages.length <
                                    this.carousel.option("Dots.minSlideCount")
                                )
                            ) {
                                var e = document.createElement("ol");
                                return (
                                    e.classList.add("carousel__dots"),
                                    e.addEventListener("click", function (e) {
                                        if ("page" in e.target.dataset) {
                                            e.preventDefault(),
                                                e.stopPropagation();
                                            var i = parseInt(
                                                    e.target.dataset.page,
                                                    10
                                                ),
                                                n = t.carousel;
                                            i !== n.page &&
                                                (n.pages.length < 3 &&
                                                n.option("infinite")
                                                    ? n[
                                                          0 == i
                                                              ? "slidePrev"
                                                              : "slideNext"
                                                      ]()
                                                    : n.slideTo(i));
                                        }
                                    }),
                                    (this.$list = e),
                                    this.carousel.$container.appendChild(e),
                                    this.carousel.$container.classList.add(
                                        "has-dots"
                                    ),
                                    e
                                );
                            }
                        },
                    },
                    {
                        key: "removeList",
                        value: function () {
                            this.$list &&
                                (this.$list.parentNode.removeChild(this.$list),
                                (this.$list = null)),
                                this.carousel.$container.classList.remove(
                                    "has-dots"
                                );
                        },
                    },
                    {
                        key: "rebuildDots",
                        value: function () {
                            var t = this,
                                e = this.$list,
                                i = !!e,
                                n = this.carousel.pages.length;
                            if (n < 2) i && this.removeList();
                            else {
                                i || (e = this.buildList());
                                var o = this.$list.children.length;
                                if (o > n)
                                    for (var a = n; a < o; a++)
                                        this.$list.removeChild(
                                            this.$list.lastChild
                                        );
                                else {
                                    for (
                                        var s = function (e) {
                                                var i =
                                                    document.createElement(
                                                        "li"
                                                    );
                                                i.classList.add(
                                                    "carousel__dot"
                                                ),
                                                    (i.dataset.page = e),
                                                    i.setAttribute(
                                                        "role",
                                                        "button"
                                                    ),
                                                    i.setAttribute(
                                                        "tabindex",
                                                        "0"
                                                    ),
                                                    i.setAttribute(
                                                        "title",
                                                        t.carousel.localize(
                                                            "{{GOTO}}",
                                                            [["%d", e + 1]]
                                                        )
                                                    ),
                                                    i.addEventListener(
                                                        "keydown",
                                                        function (t) {
                                                            var e,
                                                                n = t.code;
                                                            "Enter" === n ||
                                                            "NumpadEnter" === n
                                                                ? (e = i)
                                                                : "ArrowRight" ===
                                                                  n
                                                                ? (e =
                                                                      i.nextSibling)
                                                                : "ArrowLeft" ===
                                                                      n &&
                                                                  (e =
                                                                      i.previousSibling),
                                                                e && e.click();
                                                        }
                                                    ),
                                                    t.$list.appendChild(i);
                                            },
                                            r = o;
                                        r < n;
                                        r++
                                    )
                                        s(r);
                                    this.setActiveDot();
                                }
                            }
                        },
                    },
                    {
                        key: "setActiveDot",
                        value: function () {
                            if (this.$list) {
                                this.$list.childNodes.forEach(function (t) {
                                    t.classList.remove("is-selected");
                                });
                                var t =
                                    this.$list.childNodes[this.carousel.page];
                                t && t.classList.add("is-selected");
                            }
                        },
                    },
                    {
                        key: "onChange",
                        value: function () {
                            this.setActiveDot();
                        },
                    },
                    {
                        key: "onRefresh",
                        value: function () {
                            this.rebuildDots();
                        },
                    },
                    {
                        key: "attach",
                        value: function () {
                            this.carousel.on(this.events);
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.removeList(),
                                this.carousel.off(this.events),
                                (this.carousel = null);
                        },
                    },
                ]),
                t
            );
        })(),
        I = (function () {
            function t(e) {
                o(this, t),
                    (this.carousel = e),
                    (this.selectedIndex = null),
                    (this.friction = 0),
                    (this.onNavReady = this.onNavReady.bind(this)),
                    (this.onNavClick = this.onNavClick.bind(this)),
                    (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
                    (this.onTargetChange = this.onTargetChange.bind(this));
            }
            return (
                s(t, [
                    {
                        key: "addAsTargetFor",
                        value: function (t) {
                            (this.target = this.carousel),
                                (this.nav = t),
                                this.attachEvents();
                        },
                    },
                    {
                        key: "addAsNavFor",
                        value: function (t) {
                            (this.target = t),
                                (this.nav = this.carousel),
                                this.attachEvents();
                        },
                    },
                    {
                        key: "attachEvents",
                        value: function () {
                            (this.nav.options.initialSlide =
                                this.target.options.initialPage),
                                this.nav.on("ready", this.onNavReady),
                                this.nav.on(
                                    "createSlide",
                                    this.onNavCreateSlide
                                ),
                                this.nav.on("Panzoom.click", this.onNavClick),
                                this.target.on("change", this.onTargetChange),
                                this.target.on(
                                    "Panzoom.afterUpdate",
                                    this.onTargetChange
                                );
                        },
                    },
                    {
                        key: "onNavReady",
                        value: function () {
                            this.onTargetChange(!0);
                        },
                    },
                    {
                        key: "onNavClick",
                        value: function (t, e, i) {
                            var n = i.target.closest(".carousel__slide");
                            if (n) {
                                i.stopPropagation();
                                var o = parseInt(n.dataset.index, 10),
                                    a = this.target.findPageForSlide(o);
                                this.target.page !== a &&
                                    this.target.slideTo(a, {
                                        friction: this.friction,
                                    }),
                                    this.markSelectedSlide(o);
                            }
                        },
                    },
                    {
                        key: "onNavCreateSlide",
                        value: function (t, e) {
                            e.index === this.selectedIndex &&
                                this.markSelectedSlide(e.index);
                        },
                    },
                    {
                        key: "onTargetChange",
                        value: function () {
                            var t =
                                    this.target.pages[this.target.page]
                                        .indexes[0],
                                e = this.nav.findPageForSlide(t);
                            this.nav.slideTo(e), this.markSelectedSlide(t);
                        },
                    },
                    {
                        key: "markSelectedSlide",
                        value: function (t) {
                            (this.selectedIndex = t),
                                p(this.nav.slides).filter(function (t) {
                                    return (
                                        t.$el &&
                                        t.$el.classList.remove(
                                            "is-nav-selected"
                                        )
                                    );
                                });
                            var e = this.nav.slides[t];
                            e &&
                                e.$el &&
                                e.$el.classList.add("is-nav-selected");
                        },
                    },
                    {
                        key: "attach",
                        value: function (t) {
                            var e = t.options.Sync;
                            (e.target || e.nav) &&
                                (e.target
                                    ? this.addAsNavFor(e.target)
                                    : e.nav && this.addAsTargetFor(e.nav),
                                (this.friction = e.friction));
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.nav &&
                                (this.nav.off("ready", this.onNavReady),
                                this.nav.off("Panzoom.click", this.onNavClick),
                                this.nav.off(
                                    "createSlide",
                                    this.onNavCreateSlide
                                )),
                                this.target &&
                                    (this.target.off(
                                        "Panzoom.afterUpdate",
                                        this.onTargetChange
                                    ),
                                    this.target.off(
                                        "change",
                                        this.onTargetChange
                                    ));
                        },
                    },
                ]),
                t
            );
        })();
    I.defaults = { friction: 0.92 };
    var F = { Navigation: _, Dots: M, Sync: I },
        R = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: null,
            initialSlide: null,
            friction: 0.92,
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            prefix: "",
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected",
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d",
            },
        },
        N = (function (t) {
            l(n, t);
            var e = f(n);
            function n(t) {
                var i,
                    a =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                if (
                    (o(this, n),
                    (a = x(!0, {}, R, a)),
                    ((i = e.call(this, a)).state = "init"),
                    (i.$container = t),
                    !(i.$container instanceof HTMLElement))
                )
                    throw new Error("No root element provided");
                return (
                    (i.slideNext = z(i.slideNext.bind(d(i)), 250)),
                    (i.slidePrev = z(i.slidePrev.bind(d(i)), 250)),
                    i.init(),
                    i
                );
            }
            return (
                s(n, [
                    {
                        key: "init",
                        value: function () {
                            (this.pages = []),
                                (this.page = this.pageIndex = null),
                                (this.prevPage = this.prevPageIndex = null),
                                this.attachPlugins(n.Plugins),
                                this.trigger("init"),
                                this.initLayout(),
                                this.initSlides(),
                                this.updateMetrics(),
                                this.$track &&
                                    this.pages.length &&
                                    (this.$track.style.transform =
                                        "translate3d(".concat(
                                            -1 * this.pages[this.page].left,
                                            "px, 0px, 0) scale(1)"
                                        )),
                                this.manageSlideVisiblity(),
                                this.initPanzoom(),
                                (this.state = "ready"),
                                this.trigger("ready");
                        },
                    },
                    {
                        key: "initLayout",
                        value: function () {
                            var t,
                                e,
                                i = this.option("prefix"),
                                n = this.option("classNames");
                            ((this.$viewport =
                                this.option("viewport") ||
                                this.$container.querySelector(
                                    ".".concat(i).concat(n.viewport)
                                )),
                            this.$viewport) ||
                                ((this.$viewport =
                                    document.createElement("div")),
                                this.$viewport.classList.add(i + n.viewport),
                                (t = this.$viewport).append.apply(
                                    t,
                                    p(this.$container.childNodes)
                                ),
                                this.$container.appendChild(this.$viewport));
                            ((this.$track =
                                this.option("track") ||
                                this.$container.querySelector(
                                    ".".concat(i).concat(n.track)
                                )),
                            this.$track) ||
                                ((this.$track = document.createElement("div")),
                                this.$track.classList.add(i + n.track),
                                (e = this.$track).append.apply(
                                    e,
                                    p(this.$viewport.childNodes)
                                ),
                                this.$viewport.appendChild(this.$track));
                        },
                    },
                    {
                        key: "initSlides",
                        value: function () {
                            var t = this;
                            (this.slides = []),
                                this.$viewport
                                    .querySelectorAll(
                                        "."
                                            .concat(this.option("prefix"))
                                            .concat(
                                                this.option("classNames.slide")
                                            )
                                    )
                                    .forEach(function (e) {
                                        var i = { $el: e, isDom: !0 };
                                        t.slides.push(i),
                                            t.trigger(
                                                "createSlide",
                                                i,
                                                t.slides.length
                                            );
                                    }),
                                Array.isArray(this.options.slides) &&
                                    (this.slides = x(
                                        !0,
                                        p(this.slides),
                                        this.options.slides
                                    ));
                        },
                    },
                    {
                        key: "updateMetrics",
                        value: function () {
                            var t,
                                e = this,
                                n = 0,
                                o = [];
                            this.slides.forEach(function (i, a) {
                                var s = i.$el,
                                    r =
                                        i.isDom || !t
                                            ? e.getSlideMetrics(s)
                                            : t;
                                (i.index = a),
                                    (i.width = r),
                                    (i.left = n),
                                    (t = r),
                                    (n += r),
                                    o.push(a);
                            });
                            var a = Math.max(
                                    this.$track.offsetWidth,
                                    w(this.$track.getBoundingClientRect().width)
                                ),
                                s = getComputedStyle(this.$track);
                            (a -=
                                parseFloat(s.paddingLeft) +
                                parseFloat(s.paddingRight)),
                                (this.contentWidth = n),
                                (this.viewportWidth = a);
                            var r = [],
                                l = this.option("slidesPerPage");
                            if (Number.isInteger(l) && n > a)
                                for (var c = 0; c < this.slides.length; c += l)
                                    r.push({
                                        indexes: o.slice(c, c + l),
                                        slides: this.slides.slice(c, c + l),
                                    });
                            else
                                for (
                                    var h = 0, d = 0, u = 0;
                                    u < this.slides.length;
                                    u += 1
                                ) {
                                    var f = this.slides[u];
                                    (!r.length || d + f.width > a) &&
                                        (r.push({ indexes: [], slides: [] }),
                                        (h = r.length - 1),
                                        (d = 0)),
                                        (d += f.width),
                                        r[h].indexes.push(u),
                                        r[h].slides.push(f);
                                }
                            var v = this.option("center"),
                                g = this.option("fill");
                            r.forEach(function (t, i) {
                                (t.index = i),
                                    (t.width = t.slides.reduce(function (t, e) {
                                        return t + e.width;
                                    }, 0)),
                                    (t.left = t.slides[0].left),
                                    v && (t.left += 0.5 * (a - t.width) * -1),
                                    g &&
                                        !e.option(
                                            "infiniteX",
                                            e.option("infinite")
                                        ) &&
                                        n > a &&
                                        ((t.left = Math.max(t.left, 0)),
                                        (t.left = Math.min(t.left, n - a)));
                            });
                            var m,
                                y = [];
                            r.forEach(function (t) {
                                var e = i({}, t);
                                m && e.left === m.left
                                    ? ((m.width += e.width),
                                      (m.slides = [].concat(
                                          p(m.slides),
                                          p(e.slides)
                                      )),
                                      (m.indexes = [].concat(
                                          p(m.indexes),
                                          p(e.indexes)
                                      )))
                                    : ((e.index = y.length),
                                      (m = e),
                                      y.push(e));
                            }),
                                (this.pages = y);
                            var b = this.page;
                            if (null === b) {
                                var x = this.option("initialSlide");
                                (b =
                                    null !== x
                                        ? this.findPageForSlide(x)
                                        : parseInt(
                                              this.option("initialPage", 0),
                                              10
                                          ) || 0),
                                    y[b] ||
                                        (b =
                                            y.length && b > y.length
                                                ? y[y.length - 1].index
                                                : 0),
                                    (this.page = b),
                                    (this.pageIndex = b);
                            }
                            this.updatePanzoom(), this.trigger("refresh");
                        },
                    },
                    {
                        key: "getSlideMetrics",
                        value: function (t) {
                            if (!t) {
                                var e,
                                    i = this.slides[0];
                                if (
                                    (((t =
                                        document.createElement(
                                            "div"
                                        )).dataset.isTestEl = 1),
                                    (t.style.visibility = "hidden"),
                                    t.classList.add(
                                        this.option("prefix") +
                                            this.option("classNames.slide")
                                    ),
                                    i.customClass)
                                )
                                    (e = t.classList).add.apply(
                                        e,
                                        p(i.customClass.split(" "))
                                    );
                                this.$track.prepend(t);
                            }
                            var n = Math.max(
                                    t.offsetWidth,
                                    w(t.getBoundingClientRect().width)
                                ),
                                o =
                                    t.currentStyle ||
                                    window.getComputedStyle(t);
                            return (
                                (n =
                                    n +
                                    (parseFloat(o.marginLeft) || 0) +
                                    (parseFloat(o.marginRight) || 0)),
                                t.dataset.isTestEl && t.remove(),
                                n
                            );
                        },
                    },
                    {
                        key: "findPageForSlide",
                        value: function (t) {
                            t = parseInt(t, 10) || 0;
                            var e = this.pages.find(function (e) {
                                return e.indexes.indexOf(t) > -1;
                            });
                            return e ? e.index : null;
                        },
                    },
                    {
                        key: "slideNext",
                        value: function () {
                            this.slideTo(this.pageIndex + 1);
                        },
                    },
                    {
                        key: "slidePrev",
                        value: function () {
                            this.slideTo(this.pageIndex - 1);
                        },
                    },
                    {
                        key: "slideTo",
                        value: function (t) {
                            var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {},
                                i = e.x,
                                n = void 0 === i ? -1 * this.setPage(t, !0) : i,
                                o = e.y,
                                a = void 0 === o ? 0 : o,
                                s = e.friction,
                                r = void 0 === s ? this.option("friction") : s;
                            (this.Panzoom.content.x === n &&
                                !this.Panzoom.velocity.x &&
                                r) ||
                                (this.Panzoom.panTo({
                                    x: n,
                                    y: a,
                                    friction: r,
                                    ignoreBounds: !0,
                                }),
                                "ready" === this.state &&
                                    "ready" === this.Panzoom.state &&
                                    this.trigger("settle"));
                        },
                    },
                    {
                        key: "initPanzoom",
                        value: function () {
                            var t = this;
                            this.Panzoom && this.Panzoom.destroy();
                            var e = x(
                                !0,
                                {},
                                {
                                    content: this.$track,
                                    wrapInner: !1,
                                    resizeParent: !1,
                                    zoom: !1,
                                    click: !1,
                                    lockAxis: "x",
                                    x: this.pages.length
                                        ? -1 * this.pages[this.page].left
                                        : 0,
                                    centerOnStart: !1,
                                    textSelection: function () {
                                        return t.option("textSelection", !1);
                                    },
                                    panOnlyZoomed: function () {
                                        return (
                                            this.content.width <=
                                            this.viewport.width
                                        );
                                    },
                                },
                                this.option("Panzoom")
                            );
                            (this.Panzoom = new O(this.$container, e)),
                                this.Panzoom.on({
                                    "*": function (e) {
                                        for (
                                            var i = arguments.length,
                                                n = new Array(
                                                    i > 1 ? i - 1 : 0
                                                ),
                                                o = 1;
                                            o < i;
                                            o++
                                        )
                                            n[o - 1] = arguments[o];
                                        return t.trigger.apply(
                                            t,
                                            ["Panzoom.".concat(e)].concat(n)
                                        );
                                    },
                                    afterUpdate: function () {
                                        t.updatePage();
                                    },
                                    beforeTransform:
                                        this.onBeforeTransform.bind(this),
                                    touchEnd: this.onTouchEnd.bind(this),
                                    endAnimation: function () {
                                        t.trigger("settle");
                                    },
                                }),
                                this.updateMetrics(),
                                this.manageSlideVisiblity();
                        },
                    },
                    {
                        key: "updatePanzoom",
                        value: function () {
                            this.Panzoom &&
                                ((this.Panzoom.content = i(
                                    i({}, this.Panzoom.content),
                                    {},
                                    {
                                        fitWidth: this.contentWidth,
                                        origWidth: this.contentWidth,
                                        width: this.contentWidth,
                                    }
                                )),
                                this.pages.length > 1 &&
                                this.option(
                                    "infiniteX",
                                    this.option("infinite")
                                )
                                    ? (this.Panzoom.boundX = null)
                                    : this.pages.length &&
                                      (this.Panzoom.boundX = {
                                          from:
                                              -1 *
                                              this.pages[this.pages.length - 1]
                                                  .left,
                                          to: -1 * this.pages[0].left,
                                      }),
                                this.option(
                                    "infiniteY",
                                    this.option("infinite")
                                )
                                    ? (this.Panzoom.boundY = null)
                                    : (this.Panzoom.boundY = {
                                          from: 0,
                                          to: 0,
                                      }),
                                this.Panzoom.handleCursor());
                        },
                    },
                    {
                        key: "manageSlideVisiblity",
                        value: function () {
                            var t = this,
                                e = this.contentWidth,
                                i = this.viewportWidth,
                                n = this.Panzoom
                                    ? -1 * this.Panzoom.content.x
                                    : this.pages.length
                                    ? this.pages[this.page].left
                                    : 0,
                                o = this.option("preload"),
                                a = this.option(
                                    "infiniteX",
                                    this.option("infinite")
                                ),
                                s = parseFloat(
                                    getComputedStyle(
                                        this.$viewport,
                                        null
                                    ).getPropertyValue("padding-left")
                                ),
                                r = parseFloat(
                                    getComputedStyle(
                                        this.$viewport,
                                        null
                                    ).getPropertyValue("padding-right")
                                );
                            this.slides.forEach(function (l) {
                                var c,
                                    h,
                                    d = 0;
                                (c = n - s),
                                    (h = n + i + r),
                                    (c -= o * (i + s + r)),
                                    (h += o * (i + s + r));
                                var u = l.left + l.width > c && l.left < h;
                                (c = n + e - s),
                                    (h = n + e + i + r),
                                    (c -= o * (i + s + r));
                                var f = a && l.left + l.width > c && l.left < h;
                                (c = n - e - s),
                                    (h = n - e + i + r),
                                    (c -= o * (i + s + r));
                                var v = a && l.left + l.width > c && l.left < h;
                                f || u || v
                                    ? (t.createSlideEl(l),
                                      u && (d = 0),
                                      f && (d = -1),
                                      v && (d = 1),
                                      l.left + l.width > n &&
                                          l.left <= n + i + r &&
                                          (d = 0))
                                    : t.removeSlideEl(l),
                                    (l.hasDiff = d);
                            });
                            var l = 0,
                                c = 0;
                            this.slides.forEach(function (t, i) {
                                var n = 0;
                                t.$el
                                    ? (i !== l || t.hasDiff
                                          ? (n = c + t.hasDiff * e)
                                          : (c = 0),
                                      (t.$el.style.left =
                                          Math.abs(n) > 0.1
                                              ? "".concat(
                                                    c + t.hasDiff * e,
                                                    "px"
                                                )
                                              : ""),
                                      l++)
                                    : (c += t.width);
                            }),
                                this.markSelectedSlides();
                        },
                    },
                    {
                        key: "createSlideEl",
                        value: function (t) {
                            if (t) {
                                if (!t.$el) {
                                    var e,
                                        i = document.createElement("div");
                                    if (
                                        ((i.dataset.index = t.index),
                                        i.classList.add(
                                            this.option("prefix") +
                                                this.option("classNames.slide")
                                        ),
                                        t.customClass)
                                    )
                                        (e = i.classList).add.apply(
                                            e,
                                            p(t.customClass.split(" "))
                                        );
                                    t.html && (i.innerHTML = t.html);
                                    var n = [];
                                    this.slides.forEach(function (t, e) {
                                        t.$el && n.push(e);
                                    });
                                    var o = t.index,
                                        a = null;
                                    if (n.length) {
                                        var s = n.reduce(function (t, e) {
                                            return Math.abs(e - o) <
                                                Math.abs(t - o)
                                                ? e
                                                : t;
                                        });
                                        a = this.slides[s];
                                    }
                                    return (
                                        this.$track.insertBefore(
                                            i,
                                            a && a.$el
                                                ? a.index < t.index
                                                    ? a.$el.nextSibling
                                                    : a.$el
                                                : null
                                        ),
                                        (t.$el = i),
                                        this.trigger("createSlide", t, o),
                                        t
                                    );
                                }
                                var r;
                                (parseInt(t.$el.dataset.index, 10) || 0) !==
                                    t.index &&
                                    ((t.$el.dataset.index = t.index),
                                    t.$el
                                        .querySelectorAll("[data-lazy-srcset]")
                                        .forEach(function (t) {
                                            t.srcset = t.dataset.lazySrcset;
                                        }),
                                    t.$el
                                        .querySelectorAll("[data-lazy-src]")
                                        .forEach(function (t) {
                                            var e = t.dataset.lazySrc;
                                            t instanceof HTMLImageElement
                                                ? (t.src = e)
                                                : (t.style.backgroundImage =
                                                      "url('".concat(e, "')"));
                                        }),
                                    (r = t.$el.dataset.lazySrc) &&
                                        (t.$el.style.backgroundImage =
                                            "url('".concat(r, "')")),
                                    (t.state = "ready"));
                            }
                        },
                    },
                    {
                        key: "removeSlideEl",
                        value: function (t) {
                            t.$el &&
                                !t.isDom &&
                                (this.trigger("removeSlide", t),
                                t.$el.remove(),
                                (t.$el = null));
                        },
                    },
                    {
                        key: "markSelectedSlides",
                        value: function () {
                            var t = this,
                                e = this.option("classNames.slideSelected"),
                                i = "aria-hidden";
                            this.slides.forEach(function (n, o) {
                                var a = n.$el;
                                if (a) {
                                    var s = t.pages[t.page];
                                    s && s.indexes && s.indexes.indexOf(o) > -1
                                        ? (e &&
                                              !a.classList.contains(e) &&
                                              (a.classList.add(e),
                                              t.trigger("selectSlide", n)),
                                          a.removeAttribute(i))
                                        : (e &&
                                              a.classList.contains(e) &&
                                              (a.classList.remove(e),
                                              t.trigger("unselectSlide", n)),
                                          a.setAttribute(i, !0));
                                }
                            });
                        },
                    },
                    {
                        key: "updatePage",
                        value: function () {
                            this.updateMetrics(),
                                this.slideTo(this.page, { friction: 0 });
                        },
                    },
                    {
                        key: "onBeforeTransform",
                        value: function () {
                            this.option("infiniteX", this.option("infinite")) &&
                                this.manageInfiniteTrack(),
                                this.manageSlideVisiblity();
                        },
                    },
                    {
                        key: "manageInfiniteTrack",
                        value: function () {
                            var t = this.contentWidth,
                                e = this.viewportWidth;
                            if (
                                !(
                                    !this.option(
                                        "infiniteX",
                                        this.option("infinite")
                                    ) ||
                                    this.pages.length < 2 ||
                                    t < e
                                )
                            ) {
                                var i = this.Panzoom,
                                    n = !1;
                                return (
                                    i.content.x < -1 * (t - e) &&
                                        ((i.content.x += t),
                                        (this.pageIndex =
                                            this.pageIndex - this.pages.length),
                                        (n = !0)),
                                    i.content.x > e &&
                                        ((i.content.x -= t),
                                        (this.pageIndex =
                                            this.pageIndex + this.pages.length),
                                        (n = !0)),
                                    n &&
                                        "pointerdown" === i.state &&
                                        i.resetDragPosition(),
                                    n
                                );
                            }
                        },
                    },
                    {
                        key: "onTouchEnd",
                        value: function (t, e) {
                            var i = this.option("dragFree");
                            if (
                                !i &&
                                this.pages.length > 1 &&
                                t.dragOffset.time < 350 &&
                                Math.abs(t.dragOffset.y) < 1 &&
                                Math.abs(t.dragOffset.x) > 5
                            )
                                this[
                                    t.dragOffset.x < 0
                                        ? "slideNext"
                                        : "slidePrev"
                                ]();
                            else if (i) {
                                var n = v(
                                    this.getPageFromPosition(
                                        -1 * t.transform.x
                                    ),
                                    2
                                )[1];
                                this.setPage(n);
                            } else this.slideToClosest();
                        },
                    },
                    {
                        key: "slideToClosest",
                        value: function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                e = this.getPageFromPosition(
                                    -1 * this.Panzoom.content.x
                                ),
                                i = v(e, 2),
                                n = i[1];
                            this.slideTo(n, t);
                        },
                    },
                    {
                        key: "getPageFromPosition",
                        value: function (t) {
                            var e = this.pages.length;
                            this.option("center") &&
                                (t += 0.5 * this.viewportWidth);
                            var i = Math.floor(t / this.contentWidth);
                            t -= i * this.contentWidth;
                            var n = this.slides.find(function (e) {
                                return e.left <= t && e.left + e.width > t;
                            });
                            if (n) {
                                var o = this.findPageForSlide(n.index);
                                return [o, o + i * e];
                            }
                            return [0, 0];
                        },
                    },
                    {
                        key: "setPage",
                        value: function (t, e) {
                            var i = 0,
                                n = parseInt(t, 10) || 0,
                                o = this.page,
                                a = this.pageIndex,
                                s = this.pages.length,
                                r = this.contentWidth,
                                l = this.viewportWidth;
                            if (
                                ((t = ((n % s) + s) % s),
                                this.option(
                                    "infiniteX",
                                    this.option("infinite")
                                ) && r > l)
                            ) {
                                var c = Math.floor(n / s) || 0,
                                    h = r;
                                if (
                                    ((i = this.pages[t].left + c * h),
                                    !0 === e && s > 2)
                                ) {
                                    var d = -1 * this.Panzoom.content.x,
                                        u = i - h,
                                        f = i + h,
                                        v = Math.abs(d - i),
                                        p = Math.abs(d - u),
                                        g = Math.abs(d - f);
                                    g < v && g <= p
                                        ? ((i = f), (n += s))
                                        : p < v && p < g && ((i = u), (n -= s));
                                }
                            } else
                                (t = n = Math.max(0, Math.min(n, s - 1))),
                                    (i = this.pages.length
                                        ? this.pages[t].left
                                        : 0);
                            return (
                                (this.page = t),
                                (this.pageIndex = n),
                                null !== o &&
                                    t !== o &&
                                    ((this.prevPage = o),
                                    (this.prevPageIndex = a),
                                    this.trigger("change", t, o)),
                                i
                            );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var t = this;
                            (this.state = "destroy"),
                                this.slides.forEach(function (e) {
                                    t.removeSlideEl(e);
                                }),
                                (this.slides = []),
                                this.Panzoom.destroy(),
                                this.detachPlugins();
                        },
                    },
                ]),
                n
            );
        })(L);
    (N.version = "4.0.16"), (N.Plugins = F);
    var D = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
        ),
        B = null,
        H = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
        ],
        W = function (t) {
            if (t && D) {
                null === B &&
                    document.createElement("div").focus({
                        get preventScroll() {
                            return (B = !0), !1;
                        },
                    });
                try {
                    if (t.setActive) t.setActive();
                    else if (B) t.focus({ preventScroll: !0 });
                    else {
                        var e = window.pageXOffset || document.body.scrollTop,
                            i = window.pageYOffset || document.body.scrollLeft;
                        t.focus(),
                            document.body.scrollTo({
                                top: e,
                                left: i,
                                behavior: "auto",
                            });
                    }
                } catch (t) {}
            }
        },
        j = function t(e) {
            return (
                !!(
                    e &&
                    "object" === n(e) &&
                    e instanceof Element &&
                    e !== document.body
                ) &&
                ((function (t) {
                    var e = getComputedStyle(t)["overflow-y"],
                        i = getComputedStyle(t)["overflow-x"],
                        n =
                            ("scroll" === e || "auto" === e) &&
                            Math.abs(t.scrollHeight - t.clientHeight) > 1,
                        o =
                            ("scroll" === i || "auto" === i) &&
                            Math.abs(t.scrollWidth - t.clientWidth) > 1;
                    return n || o;
                })(e)
                    ? e
                    : t(e.parentNode))
            );
        },
        X = (function () {
            function t(e) {
                o(this, t),
                    (this.fancybox = e),
                    (this.viewport = null),
                    (this.pendingUpdate = null);
                for (
                    var i = 0,
                        n = [
                            "onReady",
                            "onResize",
                            "onTouchstart",
                            "onTouchmove",
                        ];
                    i < n.length;
                    i++
                ) {
                    var a = n[i];
                    this[a] = this[a].bind(this);
                }
            }
            return (
                s(t, [
                    {
                        key: "onReady",
                        value: function () {
                            var t = window.visualViewport;
                            t &&
                                ((this.viewport = t),
                                (this.startY = 0),
                                t.addEventListener("resize", this.onResize),
                                this.updateViewport()),
                                window.addEventListener(
                                    "touchstart",
                                    this.onTouchstart,
                                    { passive: !1 }
                                ),
                                window.addEventListener(
                                    "touchmove",
                                    this.onTouchmove,
                                    { passive: !1 }
                                );
                        },
                    },
                    {
                        key: "onResize",
                        value: function () {
                            this.updateViewport();
                        },
                    },
                    {
                        key: "updateViewport",
                        value: function () {
                            var t = this.fancybox,
                                e = this.viewport,
                                i = e.scale || 1,
                                n = t.$container;
                            if (n) {
                                var o = "",
                                    a = "",
                                    s = "";
                                i - 1 > 0.1 &&
                                    ((o = "".concat(e.width * i, "px")),
                                    (a = "".concat(e.height * i, "px")),
                                    (s = "translate3d("
                                        .concat(e.offsetLeft, "px, ")
                                        .concat(e.offsetTop, "px, 0) scale(")
                                        .concat(1 / i, ")"))),
                                    (n.style.width = o),
                                    (n.style.height = a),
                                    (n.style.transform = s);
                            }
                        },
                    },
                    {
                        key: "onTouchstart",
                        value: function (t) {
                            this.startY = t.touches
                                ? t.touches[0].screenY
                                : t.screenY;
                        },
                    },
                    {
                        key: "onTouchmove",
                        value: function (t) {
                            var e = this.startY,
                                i =
                                    window.innerWidth /
                                    window.document.documentElement.clientWidth;
                            if (
                                t.cancelable &&
                                !(t.touches.length > 1 || 1 !== i)
                            ) {
                                var n = t.target,
                                    o = j(n);
                                if (o) {
                                    var a = window.getComputedStyle(o),
                                        s = parseInt(
                                            a.getPropertyValue("height"),
                                            10
                                        ),
                                        r = t.touches
                                            ? t.touches[0].screenY
                                            : t.screenY,
                                        l = e <= r && 0 === o.scrollTop,
                                        c =
                                            e >= r &&
                                            o.scrollHeight - o.scrollTop === s;
                                    (l || c) && t.preventDefault();
                                } else t.preventDefault();
                            }
                        },
                    },
                    {
                        key: "cleanup",
                        value: function () {
                            this.pendingUpdate &&
                                (cancelAnimationFrame(this.pendingUpdate),
                                (this.pendingUpdate = null));
                            var t = this.viewport;
                            t &&
                                (t.removeEventListener("resize", this.onResize),
                                (this.viewport = null)),
                                window.removeEventListener(
                                    "touchstart",
                                    this.onTouchstart,
                                    !1
                                ),
                                window.removeEventListener(
                                    "touchmove",
                                    this.onTouchmove,
                                    !1
                                );
                        },
                    },
                    {
                        key: "attach",
                        value: function () {
                            this.fancybox.on("initLayout", this.onReady);
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.fancybox.off("initLayout", this.onReady),
                                this.cleanup();
                        },
                    },
                ]),
                t
            );
        })(),
        q = (function () {
            function t(e) {
                o(this, t),
                    (this.fancybox = e),
                    (this.$container = null),
                    (this.state = "init");
                for (
                    var i = 0, n = ["onPrepare", "onClosing", "onKeydown"];
                    i < n.length;
                    i++
                ) {
                    var a = n[i];
                    this[a] = this[a].bind(this);
                }
                this.events = {
                    prepare: this.onPrepare,
                    closing: this.onClosing,
                    keydown: this.onKeydown,
                };
            }
            return (
                s(t, [
                    {
                        key: "onPrepare",
                        value: function () {
                            this.getSlides().length <
                            this.fancybox.option("Thumbs.minSlideCount")
                                ? (this.state = "disabled")
                                : !0 ===
                                      this.fancybox.option(
                                          "Thumbs.autoStart"
                                      ) &&
                                  this.fancybox.Carousel.Panzoom.content
                                      .height >=
                                      this.fancybox.option(
                                          "Thumbs.minScreenHeight"
                                      ) &&
                                  this.build();
                        },
                    },
                    {
                        key: "onClosing",
                        value: function () {
                            this.Carousel &&
                                this.Carousel.Panzoom.detachEvents();
                        },
                    },
                    {
                        key: "onKeydown",
                        value: function (t, e) {
                            e === t.option("Thumbs.key") && this.toggle();
                        },
                    },
                    {
                        key: "build",
                        value: function () {
                            var t = this;
                            if (!this.$container) {
                                var e = document.createElement("div");
                                e.classList.add("fancybox__thumbs"),
                                    this.fancybox.$carousel.parentNode.insertBefore(
                                        e,
                                        this.fancybox.$carousel.nextSibling
                                    ),
                                    (this.Carousel = new N(
                                        e,
                                        x(
                                            !0,
                                            {
                                                Dots: !1,
                                                Navigation: !1,
                                                Sync: { friction: 0 },
                                                infinite: !1,
                                                center: !0,
                                                fill: !0,
                                                dragFree: !0,
                                                slidesPerPage: 1,
                                                preload: 1,
                                            },
                                            this.fancybox.option(
                                                "Thumbs.Carousel"
                                            ),
                                            {
                                                Sync: {
                                                    target: this.fancybox
                                                        .Carousel,
                                                },
                                                slides: this.getSlides(),
                                            }
                                        )
                                    )),
                                    this.Carousel.Panzoom.on(
                                        "wheel",
                                        function (e, i) {
                                            i.preventDefault(),
                                                t.fancybox[
                                                    i.deltaY < 0
                                                        ? "prev"
                                                        : "next"
                                                ]();
                                        }
                                    ),
                                    (this.$container = e),
                                    (this.state = "visible");
                            }
                        },
                    },
                    {
                        key: "getSlides",
                        value: function () {
                            var t,
                                e = [],
                                i = y(this.fancybox.items);
                            try {
                                for (i.s(); !(t = i.n()).done; ) {
                                    var n = t.value,
                                        o = n.thumb;
                                    o &&
                                        e.push({
                                            html: '<div class="fancybox__thumb" style="background-image:url(\''.concat(
                                                o,
                                                "')\"></div>"
                                            ),
                                            customClass:
                                                "has-thumb has-".concat(
                                                    n.type || "image"
                                                ),
                                        });
                                }
                            } catch (t) {
                                i.e(t);
                            } finally {
                                i.f();
                            }
                            return e;
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            "visible" === this.state
                                ? this.hide()
                                : "hidden" === this.state
                                ? this.show()
                                : this.build();
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            "hidden" === this.state &&
                                ((this.$container.style.display = ""),
                                this.Carousel.Panzoom.attachEvents(),
                                (this.state = "visible"));
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            "visible" === this.state &&
                                (this.Carousel.Panzoom.detachEvents(),
                                (this.$container.style.display = "none"),
                                (this.state = "hidden"));
                        },
                    },
                    {
                        key: "cleanup",
                        value: function () {
                            this.Carousel &&
                                (this.Carousel.destroy(),
                                (this.Carousel = null)),
                                this.$container &&
                                    (this.$container.remove(),
                                    (this.$container = null)),
                                (this.state = "init");
                        },
                    },
                    {
                        key: "attach",
                        value: function () {
                            this.fancybox.on(this.events);
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.fancybox.off(this.events), this.cleanup();
                        },
                    },
                ]),
                t
            );
        })();
    q.defaults = {
        minSlideCount: 2,
        minScreenHeight: 500,
        autoStart: !0,
        key: "t",
        Carousel: {},
    };
    var Y = function (t, e) {
            for (
                var i = new URL(t),
                    n = new URLSearchParams(i.search),
                    o = new URLSearchParams(),
                    a = 0,
                    s = [].concat(p(n), p(Object.entries(e)));
                a < s.length;
                a++
            ) {
                var r = v(s[a], 2),
                    l = r[0],
                    c = r[1];
                "t" === l ? o.set("start", parseInt(c)) : o.set(l, c);
            }
            o = o.toString();
            var h = t.match(/#t=((.*)?\d+s)/);
            return h && (o += "#t=".concat(h[1])), o;
        },
        U = {
            video: { autoplay: !0, ratio: 16 / 9 },
            youtube: {
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1,
            },
            vimeo: {
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
            },
            html5video: {
                tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
                format: "",
            },
        },
        V = (function () {
            function t(e) {
                o(this, t), (this.fancybox = e);
                for (
                    var i = 0,
                        n = [
                            "onInit",
                            "onReady",
                            "onCreateSlide",
                            "onRemoveSlide",
                            "onSelectSlide",
                            "onUnselectSlide",
                            "onRefresh",
                            "onMessage",
                        ];
                    i < n.length;
                    i++
                ) {
                    var a = n[i];
                    this[a] = this[a].bind(this);
                }
                this.events = {
                    init: this.onInit,
                    ready: this.onReady,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh,
                };
            }
            return (
                s(t, [
                    {
                        key: "onInit",
                        value: function () {
                            var t,
                                e = y(this.fancybox.items);
                            try {
                                for (e.s(); !(t = e.n()).done; ) {
                                    var i = t.value;
                                    this.processType(i);
                                }
                            } catch (t) {
                                e.e(t);
                            } finally {
                                e.f();
                            }
                        },
                    },
                    {
                        key: "processType",
                        value: function (t) {
                            if (t.html)
                                return (
                                    (t.src = t.html),
                                    (t.type = "html"),
                                    void delete t.html
                                );
                            var e = t.src || "",
                                i = t.type || this.fancybox.options.type,
                                n = null;
                            if (!e || "string" == typeof e) {
                                if (
                                    (n = e.match(
                                        /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
                                    ))
                                ) {
                                    var o = Y(
                                            e,
                                            this.fancybox.option("Html.youtube")
                                        ),
                                        a = encodeURIComponent(n[1]);
                                    (t.videoId = a),
                                        (t.src =
                                            "https://www.youtube-nocookie.com/embed/"
                                                .concat(a, "?")
                                                .concat(o)),
                                        (t.thumb =
                                            t.thumb ||
                                            "https://i.ytimg.com/vi/".concat(
                                                a,
                                                "/mqdefault.jpg"
                                            )),
                                        (t.vendor = "youtube"),
                                        (i = "video");
                                } else if (
                                    (n = e.match(
                                        /^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/
                                    ))
                                ) {
                                    var s = Y(
                                            e,
                                            this.fancybox.option("Html.vimeo")
                                        ),
                                        r = encodeURIComponent(n[1]);
                                    (t.videoId = r),
                                        (t.src =
                                            "https://player.vimeo.com/video/"
                                                .concat(r, "?")
                                                .concat(s)),
                                        (t.vendor = "vimeo"),
                                        (i = "video");
                                } else
                                    (n = e.match(
                                        /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
                                    ))
                                        ? ((t.src = "//maps.google."
                                              .concat(n[1], "/?ll=")
                                              .concat(
                                                  (n[2]
                                                      ? n[2] +
                                                        "&z=" +
                                                        Math.floor(n[3]) +
                                                        (n[4]
                                                            ? n[4].replace(
                                                                  /^\//,
                                                                  "&"
                                                              )
                                                            : "")
                                                      : n[4] + ""
                                                  ).replace(/\?/, "&"),
                                                  "&output="
                                              )
                                              .concat(
                                                  n[4] &&
                                                      n[4].indexOf("layer=c") >
                                                          0
                                                      ? "svembed"
                                                      : "embed"
                                              )),
                                          (i = "map"))
                                        : (n = e.match(
                                              /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
                                          )) &&
                                          ((t.src = "//maps.google."
                                              .concat(n[1], "/maps?q=")
                                              .concat(
                                                  n[2]
                                                      .replace("query=", "q=")
                                                      .replace("api=1", ""),
                                                  "&output=embed"
                                              )),
                                          (i = "map"));
                                i ||
                                    ("#" === e.charAt(0)
                                        ? (i = "inline")
                                        : (n = e.match(
                                              /\.(mp4|mov|ogv|webm)((\?|#).*)?$/i
                                          ))
                                        ? ((i = "html5video"),
                                          (t.format =
                                              t.format ||
                                              "video/" +
                                                  ("ogv" === n[1]
                                                      ? "ogg"
                                                      : n[1])))
                                        : e.match(
                                              /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                                          )
                                        ? (i = "image")
                                        : e.match(/\.(pdf)((\?|#).*)?$/i) &&
                                          (i = "pdf")),
                                    (t.type =
                                        i ||
                                        this.fancybox.option(
                                            "defaultType",
                                            "image"
                                        )),
                                    ("html5video" !== i && "video" !== i) ||
                                        ((t.video = x(
                                            {},
                                            this.fancybox.option("Html.video"),
                                            t.video
                                        )),
                                        t._width && t._height
                                            ? (t.ratio =
                                                  parseFloat(t._width) /
                                                  parseFloat(t._height))
                                            : (t.ratio =
                                                  t.ratio ||
                                                  t.video.ratio ||
                                                  U.video.ratio));
                            }
                        },
                    },
                    {
                        key: "onReady",
                        value: function () {
                            var t = this;
                            this.fancybox.Carousel.slides.forEach(function (e) {
                                e.$el &&
                                    (t.setContent(e),
                                    e.index === t.fancybox.getSlide().index &&
                                        t.playVideo(e));
                            });
                        },
                    },
                    {
                        key: "onCreateSlide",
                        value: function (t, e, i) {
                            "ready" === this.fancybox.state &&
                                this.setContent(i);
                        },
                    },
                    {
                        key: "loadInlineContent",
                        value: function (t) {
                            var e;
                            if (t.src instanceof HTMLElement) e = t.src;
                            else if ("string" == typeof t.src) {
                                var i = t.src.split("#", 2),
                                    n =
                                        2 === i.length && "" === i[0]
                                            ? i[1]
                                            : i[0];
                                e = document.getElementById(n);
                            }
                            if (e) {
                                if ("clone" === t.type || e.$placeHolder) {
                                    var o = (e = e.cloneNode(!0)).getAttribute(
                                        "id"
                                    );
                                    (o = o
                                        ? "".concat(o, "--clone")
                                        : "clone-"
                                              .concat(this.fancybox.id, "-")
                                              .concat(t.index)),
                                        e.setAttribute("id", o);
                                } else {
                                    var a = document.createElement("div");
                                    a.classList.add("fancybox-placeholder"),
                                        e.parentNode.insertBefore(a, e),
                                        (e.$placeHolder = a);
                                }
                                this.fancybox.setContent(t, e);
                            } else
                                this.fancybox.setError(
                                    t,
                                    "{{ELEMENT_NOT_FOUND}}"
                                );
                        },
                    },
                    {
                        key: "loadAjaxContent",
                        value: function (t) {
                            var e = this.fancybox,
                                i = new XMLHttpRequest();
                            e.showLoading(t),
                                (i.onreadystatechange = function () {
                                    i.readyState === XMLHttpRequest.DONE &&
                                        "ready" === e.state &&
                                        (e.hideLoading(t),
                                        200 === i.status
                                            ? e.setContent(t, i.responseText)
                                            : e.setError(
                                                  t,
                                                  404 === i.status
                                                      ? "{{AJAX_NOT_FOUND}}"
                                                      : "{{AJAX_FORBIDDEN}}"
                                              ));
                                }),
                                i.open("GET", t.src),
                                i.setRequestHeader(
                                    "X-Requested-With",
                                    "XMLHttpRequest"
                                ),
                                i.send(t.ajax || null),
                                (t.xhr = i);
                        },
                    },
                    {
                        key: "loadIframeContent",
                        value: function (t) {
                            var e = this,
                                i = this.fancybox,
                                n = document.createElement("iframe");
                            if (
                                ((n.className = "fancybox__iframe"),
                                n.setAttribute(
                                    "id",
                                    "fancybox__iframe_"
                                        .concat(i.id, "_")
                                        .concat(t.index)
                                ),
                                n.setAttribute("allow", "autoplay; fullscreen"),
                                n.setAttribute("scrolling", "auto"),
                                (t.$iframe = n),
                                "iframe" !== t.type || !1 === t.preload)
                            )
                                return (
                                    n.setAttribute("src", t.src),
                                    this.fancybox.setContent(t, n),
                                    void this.resizeIframe(t)
                                );
                            i.showLoading(t);
                            var o = document.createElement("div");
                            (o.style.visibility = "hidden"),
                                this.fancybox.setContent(t, o),
                                o.appendChild(n),
                                (n.onerror = function () {
                                    i.setError(t, "{{IFRAME_ERROR}}");
                                }),
                                (n.onload = function () {
                                    i.hideLoading(t);
                                    var o = !1;
                                    n.isReady || ((n.isReady = !0), (o = !0)),
                                        n.src.length &&
                                            ((n.parentNode.style.visibility =
                                                ""),
                                            e.resizeIframe(t),
                                            o && i.revealContent(t));
                                }),
                                n.setAttribute("src", t.src);
                        },
                    },
                    {
                        key: "setAspectRatio",
                        value: function (t) {
                            var e = t.$content,
                                i = t.ratio;
                            if (e) {
                                var n = t._width,
                                    o = t._height;
                                if (i || (n && o)) {
                                    Object.assign(e.style, {
                                        width: n && o ? "100%" : "",
                                        height: n && o ? "100%" : "",
                                        maxWidth: "",
                                        maxHeight: "",
                                    });
                                    var a = e.offsetWidth,
                                        s = e.offsetHeight;
                                    if (
                                        ((o = o || s),
                                        (n = n || a) > a || o > s)
                                    ) {
                                        var r = Math.min(a / n, s / o);
                                        (n *= r), (o *= r);
                                    }
                                    Math.abs(n / o - i) > 0.01 &&
                                        (i < n / o ? (n = o * i) : (o = n / i)),
                                        Object.assign(e.style, {
                                            width: "".concat(n, "px"),
                                            height: "".concat(o, "px"),
                                        });
                                }
                            }
                        },
                    },
                    {
                        key: "resizeIframe",
                        value: function (t) {
                            var e = t.$iframe;
                            if (e) {
                                var i = t._width || 0,
                                    n = t._height || 0;
                                i && n && (t.autoSize = !1);
                                var o = e.parentNode,
                                    a = o.style;
                                if (!1 !== t.preload && !1 !== t.autoSize)
                                    try {
                                        var s = window.getComputedStyle(o),
                                            r =
                                                parseFloat(s.paddingLeft) +
                                                parseFloat(s.paddingRight),
                                            l =
                                                parseFloat(s.paddingTop) +
                                                parseFloat(s.paddingBottom),
                                            c = e.contentWindow.document,
                                            h =
                                                c.getElementsByTagName(
                                                    "html"
                                                )[0],
                                            d = c.body;
                                        (d.style.overflow = "hidden"),
                                            (i = i || h.scrollWidth + r),
                                            (a.width = "".concat(i, "px")),
                                            (d.style.overflow = ""),
                                            (a.flex = "0 0 auto"),
                                            (a.height = "".concat(
                                                d.scrollHeight,
                                                "px"
                                            )),
                                            (n = h.scrollHeight + l);
                                    } catch (t) {}
                                if (i || n) {
                                    var u = { flex: "0 1 auto" };
                                    i && (u.width = "".concat(i, "px")),
                                        n && (u.height = "".concat(n, "px")),
                                        Object.assign(a, u);
                                }
                            }
                        },
                    },
                    {
                        key: "onRefresh",
                        value: function (t, e) {
                            var i = this;
                            e.slides.forEach(function (t) {
                                t.$el &&
                                    (t.$iframe && i.resizeIframe(t),
                                    t.ratio && i.setAspectRatio(t));
                            });
                        },
                    },
                    {
                        key: "setContent",
                        value: function (t) {
                            if (t && !t.isDom) {
                                switch (t.type) {
                                    case "html":
                                        this.fancybox.setContent(t, t.src);
                                        break;
                                    case "html5video":
                                        this.fancybox.setContent(
                                            t,
                                            this.fancybox
                                                .option("Html.html5video.tpl")
                                                .replace(/\{\{src\}\}/gi, t.src)
                                                .replace(
                                                    "{{format}}",
                                                    t.format ||
                                                        (t.html5video &&
                                                            t.html5video
                                                                .format) ||
                                                        ""
                                                )
                                                .replace(
                                                    "{{poster}}",
                                                    t.poster || t.thumb || ""
                                                )
                                        );
                                        break;
                                    case "inline":
                                    case "clone":
                                        this.loadInlineContent(t);
                                        break;
                                    case "ajax":
                                        this.loadAjaxContent(t);
                                        break;
                                    case "pdf":
                                    case "video":
                                    case "map":
                                        t.preload = !1;
                                    case "iframe":
                                        this.loadIframeContent(t);
                                }
                                t.ratio && this.setAspectRatio(t);
                            }
                        },
                    },
                    {
                        key: "onSelectSlide",
                        value: function (t, e, i) {
                            "ready" === t.state && this.playVideo(i);
                        },
                    },
                    {
                        key: "playVideo",
                        value: function (t) {
                            if ("html5video" === t.type && t.video.autoplay)
                                try {
                                    var e = t.$el.querySelector("video");
                                    if (e) {
                                        var i = e.play();
                                        void 0 !== i &&
                                            i
                                                .then(function () {})
                                                .catch(function (t) {
                                                    (e.muted = !0), e.play();
                                                });
                                    }
                                } catch (t) {}
                            if (
                                "video" === t.type &&
                                t.$iframe &&
                                t.$iframe.contentWindow
                            ) {
                                !(function e() {
                                    if (
                                        "done" === t.state &&
                                        t.$iframe &&
                                        t.$iframe.contentWindow
                                    ) {
                                        var i;
                                        if (t.$iframe.isReady)
                                            return (
                                                t.video &&
                                                    t.video.autoplay &&
                                                    (i =
                                                        "youtube" == t.vendor
                                                            ? {
                                                                  event: "command",
                                                                  func: "playVideo",
                                                              }
                                                            : {
                                                                  method: "play",
                                                                  value: "true",
                                                              }),
                                                void (
                                                    i &&
                                                    t.$iframe.contentWindow.postMessage(
                                                        JSON.stringify(i),
                                                        "*"
                                                    )
                                                )
                                            );
                                        "youtube" === t.vendor &&
                                            ((i = {
                                                event: "listening",
                                                id: t.$iframe.getAttribute(
                                                    "id"
                                                ),
                                            }),
                                            t.$iframe.contentWindow.postMessage(
                                                JSON.stringify(i),
                                                "*"
                                            ));
                                    }
                                    t.poller = setTimeout(e, 250);
                                })();
                            }
                        },
                    },
                    {
                        key: "onUnselectSlide",
                        value: function (t, e, i) {
                            if ("html5video" !== i.type) {
                                var n = !1;
                                "vimeo" == i.vendor
                                    ? (n = { method: "pause", value: "true" })
                                    : "youtube" === i.vendor &&
                                      (n = {
                                          event: "command",
                                          func: "pauseVideo",
                                      }),
                                    n &&
                                        i.$iframe &&
                                        i.$iframe.contentWindow &&
                                        i.$iframe.contentWindow.postMessage(
                                            JSON.stringify(n),
                                            "*"
                                        ),
                                    clearTimeout(i.poller);
                            } else
                                try {
                                    i.$el.querySelector("video").pause();
                                } catch (t) {}
                        },
                    },
                    {
                        key: "onRemoveSlide",
                        value: function (t, e, i) {
                            i.xhr && (i.xhr.abort(), (i.xhr = null)),
                                i.$iframe &&
                                    ((i.$iframe.onload = i.$iframe.onerror =
                                        null),
                                    (i.$iframe.src = "//about:blank"),
                                    (i.$iframe = null));
                            var n = i.$content;
                            "inline" === i.type &&
                                n &&
                                (n.classList.remove("fancybox__content"),
                                "none" !== n.style.display &&
                                    (n.style.display = "none")),
                                i.$closeButton &&
                                    (i.$closeButton.remove(),
                                    (i.$closeButton = null));
                            var o = n && n.$placeHolder;
                            o &&
                                (o.parentNode.insertBefore(n, o),
                                o.remove(),
                                (n.$placeHolder = null));
                        },
                    },
                    {
                        key: "onMessage",
                        value: function (t) {
                            try {
                                var e = JSON.parse(t.data);
                                if ("https://player.vimeo.com" === t.origin) {
                                    if ("ready" === e.event) {
                                        var i,
                                            n = y(
                                                document.getElementsByClassName(
                                                    "fancybox__iframe"
                                                )
                                            );
                                        try {
                                            for (n.s(); !(i = n.n()).done; ) {
                                                var o = i.value;
                                                o.contentWindow === t.source &&
                                                    (o.isReady = 1);
                                            }
                                        } catch (t) {
                                            n.e(t);
                                        } finally {
                                            n.f();
                                        }
                                    }
                                } else
                                    "https://www.youtube-nocookie.com" ===
                                        t.origin &&
                                        "onReady" === e.event &&
                                        (document.getElementById(
                                            e.id
                                        ).isReady = 1);
                            } catch (t) {}
                        },
                    },
                    {
                        key: "attach",
                        value: function () {
                            this.fancybox.on(this.events),
                                window.addEventListener(
                                    "message",
                                    this.onMessage,
                                    !1
                                );
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.fancybox.off(this.events),
                                window.removeEventListener(
                                    "message",
                                    this.onMessage,
                                    !1
                                );
                        },
                    },
                ]),
                t
            );
        })();
    V.defaults = U;
    var Z = (function () {
        function t(e) {
            o(this, t), (this.fancybox = e);
            for (
                var i = 0,
                    n = [
                        "onReady",
                        "onClosing",
                        "onDone",
                        "onPageChange",
                        "onCreateSlide",
                        "onRemoveSlide",
                        "onImageStatusChange",
                    ];
                i < n.length;
                i++
            ) {
                var a = n[i];
                this[a] = this[a].bind(this);
            }
            this.events = {
                ready: this.onReady,
                closing: this.onClosing,
                done: this.onDone,
                "Carousel.change": this.onPageChange,
                "Carousel.createSlide": this.onCreateSlide,
                "Carousel.removeSlide": this.onRemoveSlide,
            };
        }
        return (
            s(t, [
                {
                    key: "onReady",
                    value: function () {
                        var t = this;
                        this.fancybox.Carousel.slides.forEach(function (e) {
                            e.$el && t.setContent(e);
                        });
                    },
                },
                {
                    key: "onDone",
                    value: function (t, e) {
                        this.handleCursor(e);
                    },
                },
                {
                    key: "onClosing",
                    value: function (t) {
                        clearTimeout(this.clickTimer),
                            (this.clickTimer = null),
                            t.Carousel.slides.forEach(function (t) {
                                t.$image && (t.state = "destroy"),
                                    t.Panzoom && t.Panzoom.detachEvents();
                            }),
                            "closing" === this.fancybox.state &&
                                this.canZoom(t.getSlide()) &&
                                this.zoomOut();
                    },
                },
                {
                    key: "onCreateSlide",
                    value: function (t, e, i) {
                        "ready" === this.fancybox.state && this.setContent(i);
                    },
                },
                {
                    key: "onRemoveSlide",
                    value: function (t, e, i) {
                        i.$image &&
                            (i.$el.classList.remove(
                                t.option("Image.canZoomInClass")
                            ),
                            i.$image.remove(),
                            (i.$image = null)),
                            i.Panzoom &&
                                (i.Panzoom.destroy(), (i.Panzoom = null)),
                            i.$el &&
                                i.$el.dataset &&
                                delete i.$el.dataset.imageFit;
                    },
                },
                {
                    key: "setContent",
                    value: function (t) {
                        var e = this;
                        if (
                            !(
                                t.isDom ||
                                t.html ||
                                (t.type && "image" !== t.type) ||
                                t.$image
                            )
                        ) {
                            (t.type = "image"), (t.state = "loading");
                            var i = document.createElement("div");
                            i.style.visibility = "hidden";
                            var n = document.createElement("img");
                            n.addEventListener("load", function (i) {
                                i.stopImmediatePropagation(),
                                    e.onImageStatusChange(t);
                            }),
                                n.addEventListener("error", function () {
                                    e.onImageStatusChange(t);
                                }),
                                (n.src = t.src),
                                (n.alt = ""),
                                (n.draggable = !1),
                                n.classList.add("fancybox__image"),
                                t.srcset && n.setAttribute("srcset", t.srcset),
                                t.sizes && n.setAttribute("sizes", t.sizes),
                                (t.$image = n);
                            var o = this.fancybox.option("Image.wrap");
                            if (o) {
                                var a = document.createElement("div");
                                a.classList.add(
                                    "string" == typeof o
                                        ? o
                                        : "fancybox__image-wrap"
                                ),
                                    a.appendChild(n),
                                    i.appendChild(a),
                                    (t.$wrap = a);
                            } else i.appendChild(n);
                            (t.$el.dataset.imageFit =
                                this.fancybox.option("Image.fit")),
                                this.fancybox.setContent(t, i),
                                n.complete || n.error
                                    ? this.onImageStatusChange(t)
                                    : this.fancybox.showLoading(t);
                        }
                    },
                },
                {
                    key: "onImageStatusChange",
                    value: function (t) {
                        var e = this,
                            i = t.$image;
                        i &&
                            "loading" === t.state &&
                            (i.complete && i.naturalWidth && i.naturalHeight
                                ? (this.fancybox.hideLoading(t),
                                  "contain" ===
                                      this.fancybox.option("Image.fit") &&
                                      this.initSlidePanzoom(t),
                                  t.$el.addEventListener(
                                      "wheel",
                                      function (i) {
                                          return e.onWheel(t, i);
                                      },
                                      { passive: !1 }
                                  ),
                                  t.$content.addEventListener(
                                      "click",
                                      function (i) {
                                          return e.onClick(t, i);
                                      },
                                      { passive: !1 }
                                  ),
                                  this.revealContent(t))
                                : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
                    },
                },
                {
                    key: "initSlidePanzoom",
                    value: function (t) {
                        var e = this;
                        t.Panzoom ||
                            ((t.Panzoom = new O(
                                t.$el,
                                x(
                                    !0,
                                    this.fancybox.option("Image.Panzoom", {}),
                                    {
                                        viewport: t.$wrap,
                                        content: t.$image,
                                        width: t._width,
                                        height: t._height,
                                        wrapInner: !1,
                                        textSelection: !0,
                                        touch: this.fancybox.option(
                                            "Image.touch"
                                        ),
                                        panOnlyZoomed: !0,
                                        click: !1,
                                        wheel: !1,
                                    }
                                )
                            )),
                            t.Panzoom.on("startAnimation", function () {
                                e.fancybox.trigger("Image.startAnimation", t);
                            }),
                            t.Panzoom.on("endAnimation", function () {
                                "zoomIn" === t.state && e.fancybox.done(t),
                                    e.handleCursor(t),
                                    e.fancybox.trigger("Image.endAnimation", t);
                            }),
                            t.Panzoom.on("afterUpdate", function () {
                                e.handleCursor(t),
                                    e.fancybox.trigger("Image.afterUpdate", t);
                            }));
                    },
                },
                {
                    key: "revealContent",
                    value: function (t) {
                        null === this.fancybox.Carousel.prevPage &&
                        t.index === this.fancybox.options.startIndex &&
                        this.canZoom(t)
                            ? this.zoomIn()
                            : this.fancybox.revealContent(t);
                    },
                },
                {
                    key: "getZoomInfo",
                    value: function (t) {
                        var e = t.$thumb.getBoundingClientRect(),
                            i = e.width,
                            n = e.height,
                            o = t.$content.getBoundingClientRect(),
                            a = o.width,
                            s = o.height,
                            r = o.top - e.top,
                            l = o.left - e.left,
                            c = this.fancybox.option("Image.zoomOpacity");
                        return (
                            "auto" === c && (c = Math.abs(i / n - a / s) > 0.1),
                            {
                                top: r,
                                left: l,
                                scale: a && i ? i / a : 1,
                                opacity: c,
                            }
                        );
                    },
                },
                {
                    key: "canZoom",
                    value: function (t) {
                        var e = this.fancybox,
                            i = e.$container;
                        if (
                            window.visualViewport &&
                            1 !== window.visualViewport.scale
                        )
                            return !1;
                        if (t.Panzoom && !t.Panzoom.content.width) return !1;
                        if (
                            !e.option("Image.zoom") ||
                            "contain" !== e.option("Image.fit")
                        )
                            return !1;
                        var n = t.$thumb;
                        if (!n || "loading" === t.state) return !1;
                        i.classList.add("fancybox__no-click");
                        var o,
                            a = n.getBoundingClientRect();
                        if (
                            this.fancybox.option("Image.ignoreCoveredThumbnail")
                        ) {
                            var s =
                                    document.elementFromPoint(
                                        a.left + 1,
                                        a.top + 1
                                    ) === n,
                                r =
                                    document.elementFromPoint(
                                        a.right - 1,
                                        a.bottom - 1
                                    ) === n;
                            o = s && r;
                        } else
                            o =
                                document.elementFromPoint(
                                    a.left + 0.5 * a.width,
                                    a.top + 0.5 * a.height
                                ) === n;
                        return i.classList.remove("fancybox__no-click"), o;
                    },
                },
                {
                    key: "zoomIn",
                    value: function () {
                        var t = this.fancybox,
                            e = t.getSlide(),
                            i = e.Panzoom,
                            n = this.getZoomInfo(e),
                            o = n.top,
                            a = n.left,
                            s = n.scale,
                            r = n.opacity;
                        t.trigger("reveal", e),
                            i.panTo({
                                x: -1 * a,
                                y: -1 * o,
                                scale: s,
                                friction: 0,
                                ignoreBounds: !0,
                            }),
                            (e.$content.style.visibility = ""),
                            (e.state = "zoomIn"),
                            !0 === r &&
                                i.on("afterTransform", function (t) {
                                    ("zoomIn" !== e.state &&
                                        "zoomOut" !== e.state) ||
                                        (t.$content.style.opacity = Math.min(
                                            1,
                                            1 - (1 - t.content.scale) / (1 - s)
                                        ));
                                }),
                            i.panTo({
                                x: 0,
                                y: 0,
                                scale: 1,
                                friction:
                                    this.fancybox.option("Image.zoomFriction"),
                            });
                    },
                },
                {
                    key: "zoomOut",
                    value: function () {
                        var t = this,
                            e = this.fancybox,
                            i = e.getSlide(),
                            n = i.Panzoom;
                        if (n) {
                            (i.state = "zoomOut"),
                                (e.state = "customClosing"),
                                i.$caption &&
                                    (i.$caption.style.visibility = "hidden");
                            var o = this.fancybox.option("Image.zoomFriction"),
                                a = function (e) {
                                    var a = t.getZoomInfo(i),
                                        s = a.top,
                                        r = a.left,
                                        l = a.scale,
                                        c = a.opacity;
                                    e || c || (o *= 0.82),
                                        n.panTo({
                                            x: -1 * r,
                                            y: -1 * s,
                                            scale: l,
                                            friction: o,
                                            ignoreBounds: !0,
                                        }),
                                        (o *= 0.98);
                                };
                            window.addEventListener("scroll", a),
                                n.once("endAnimation", function () {
                                    window.removeEventListener("scroll", a),
                                        e.destroy();
                                }),
                                a();
                        }
                    },
                },
                {
                    key: "handleCursor",
                    value: function (t) {
                        if ("image" === t.type && t.$el) {
                            var e = t.Panzoom,
                                i = this.fancybox.option("Image.click", !1, t),
                                n = this.fancybox.option("Image.touch"),
                                o = t.$el.classList,
                                a = this.fancybox.option(
                                    "Image.canZoomInClass"
                                ),
                                s = this.fancybox.option(
                                    "Image.canZoomOutClass"
                                );
                            if (e && "toggleZoom" === i)
                                e &&
                                1 === e.content.scale &&
                                e.option("maxScale") - e.content.scale > 0.01
                                    ? (o.remove(s), o.add(a))
                                    : e.content.scale > 1 && !n && o.add(s);
                            else "close" === i && o.add(s);
                        }
                    },
                },
                {
                    key: "onWheel",
                    value: function (t, e) {
                        if (
                            "ready" === this.fancybox.state &&
                            !1 !== this.fancybox.trigger("Image.wheel", e)
                        )
                            switch (this.fancybox.option("Image.wheel")) {
                                case "zoom":
                                    t.Panzoom && t.Panzoom.zoomWithWheel(e);
                                    break;
                                case "close":
                                    this.fancybox.close();
                                    break;
                                case "slide":
                                    this.fancybox[
                                        e.deltaY < 0 ? "prev" : "next"
                                    ]();
                            }
                    },
                },
                {
                    key: "onClick",
                    value: function (t, e) {
                        var i = this;
                        if ("ready" === this.fancybox.state) {
                            var n = t.Panzoom;
                            if (
                                !n ||
                                (!n.dragPosition.midPoint &&
                                    0 === n.dragOffset.x &&
                                    0 === n.dragOffset.y &&
                                    1 === n.dragOffset.scale)
                            ) {
                                if (this.fancybox.Carousel.Panzoom.lockAxis)
                                    return !1;
                                var o = function (n) {
                                        switch (n) {
                                            case "toggleZoom":
                                                e.stopPropagation(),
                                                    t.Panzoom &&
                                                        t.Panzoom.zoomWithClick(
                                                            e
                                                        );
                                                break;
                                            case "close":
                                                i.fancybox.close();
                                                break;
                                            case "next":
                                                e.stopPropagation(),
                                                    i.fancybox.next();
                                        }
                                    },
                                    a = this.fancybox.option("Image.click"),
                                    s =
                                        this.fancybox.option(
                                            "Image.doubleClick"
                                        );
                                s
                                    ? this.clickTimer
                                        ? (clearTimeout(this.clickTimer),
                                          (this.clickTimer = null),
                                          o(s))
                                        : (this.clickTimer = setTimeout(
                                              function () {
                                                  (i.clickTimer = null), o(a);
                                              },
                                              300
                                          ))
                                    : o(a);
                            }
                        }
                    },
                },
                {
                    key: "onPageChange",
                    value: function (t, e) {
                        var i = t.getSlide();
                        e.slides.forEach(function (t) {
                            t.Panzoom &&
                                "done" === t.state &&
                                t.index !== i.index &&
                                t.Panzoom.panTo({
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    friction: 0.8,
                                });
                        });
                    },
                },
                {
                    key: "attach",
                    value: function () {
                        this.fancybox.on(this.events);
                    },
                },
                {
                    key: "detach",
                    value: function () {
                        this.fancybox.off(this.events);
                    },
                },
            ]),
            t
        );
    })();
    Z.defaults = {
        canZoomInClass: "can-zoom_in",
        canZoomOutClass: "can-zoom_out",
        zoom: !0,
        zoomOpacity: "auto",
        zoomFriction: 0.82,
        ignoreCoveredThumbnail: !1,
        touch: !0,
        click: "toggleZoom",
        doubleClick: null,
        wheel: "zoom",
        fit: "contain",
        wrap: !1,
        Panzoom: { ratio: 1 },
    };
    var G = function () {
            var t = window.location.hash.substr(1),
                e = t.split("-"),
                i =
                    (e.length > 1 &&
                        /^\+?\d+$/.test(e[e.length - 1]) &&
                        parseInt(e.pop(-1), 10)) ||
                    null;
            return { hash: t, slug: e.join("-"), index: i };
        },
        K = (function () {
            function t(e) {
                o(this, t), (this.fancybox = e);
                for (
                    var i = 0, n = ["onChange", "onClosing"];
                    i < n.length;
                    i++
                ) {
                    var a = n[i];
                    this[a] = this[a].bind(this);
                }
                (this.events = {
                    initCarousel: this.onChange,
                    "Carousel.change": this.onChange,
                    closing: this.onClosing,
                }),
                    (this.hasCreatedHistory = !1),
                    (this.origHash = ""),
                    (this.timer = null);
            }
            return (
                s(
                    t,
                    [
                        {
                            key: "onChange",
                            value: function () {
                                var t = this,
                                    e = this.fancybox,
                                    i = e.Carousel;
                                this.timer && clearTimeout(this.timer);
                                var n = null === i.prevPage,
                                    o = e.getSlide(),
                                    a = o.$trigger && o.$trigger.dataset,
                                    s = window.location.hash.substr(1),
                                    r = !1;
                                if (o.slug) r = o.slug;
                                else {
                                    var l = a && a.fancybox;
                                    l &&
                                        l.length &&
                                        "true" !== l &&
                                        (r =
                                            l +
                                            (i.slides.length > 1
                                                ? "-" + (o.index + 1)
                                                : ""));
                                }
                                n &&
                                    (this.origHash =
                                        s !== r ? this.origHash : ""),
                                    r &&
                                        s !== r &&
                                        (this.timer = setTimeout(function () {
                                            try {
                                                window.history[
                                                    n
                                                        ? "pushState"
                                                        : "replaceState"
                                                ](
                                                    {},
                                                    document.title,
                                                    window.location.pathname +
                                                        window.location.search +
                                                        "#" +
                                                        r
                                                ),
                                                    n &&
                                                        (t.hasCreatedHistory =
                                                            !0);
                                            } catch (t) {}
                                        }, 300));
                            },
                        },
                        {
                            key: "onClosing",
                            value: function () {
                                if (
                                    (this.timer && clearTimeout(this.timer),
                                    !0 !== this.hasSilentClose)
                                ) {
                                    if (!this.hasCreatedHistory)
                                        try {
                                            return void window.history.replaceState(
                                                {},
                                                document.title,
                                                window.location.pathname +
                                                    window.location.search +
                                                    (this.origHash
                                                        ? "#" + this.origHash
                                                        : "")
                                            );
                                        } catch (t) {}
                                    window.history.back();
                                }
                            },
                        },
                        {
                            key: "attach",
                            value: function (t) {
                                t.on(this.events);
                            },
                        },
                        {
                            key: "detach",
                            value: function (t) {
                                t.off(this.events);
                            },
                        },
                    ],
                    [
                        {
                            key: "startFromUrl",
                            value: function () {
                                if (t.Fancybox && !t.Fancybox.getInstance()) {
                                    var e = G(),
                                        i = e.hash,
                                        n = e.slug,
                                        o = e.index;
                                    if (n) {
                                        var a = document.querySelector(
                                            '[data-slug="'.concat(i, '"]')
                                        );
                                        if (
                                            (a &&
                                                a.dispatchEvent(
                                                    new CustomEvent("click", {
                                                        bubbles: !0,
                                                        cancelable: !0,
                                                    })
                                                ),
                                            !t.Fancybox.getInstance())
                                        ) {
                                            var s = document.querySelectorAll(
                                                '[data-fancybox="'.concat(
                                                    n,
                                                    '"]'
                                                )
                                            );
                                            s.length &&
                                                (null === o && 1 === s.length
                                                    ? (a = s[0])
                                                    : o && (a = s[o - 1]),
                                                a &&
                                                    a.dispatchEvent(
                                                        new CustomEvent(
                                                            "click",
                                                            {
                                                                bubbles: !0,
                                                                cancelable: !0,
                                                            }
                                                        )
                                                    ));
                                        }
                                    }
                                }
                            },
                        },
                        {
                            key: "onHashChange",
                            value: function () {
                                var e = G(),
                                    i = e.slug,
                                    n = e.index,
                                    o = t.Fancybox.getInstance();
                                if (o) {
                                    if (i) {
                                        var a,
                                            s = o.Carousel,
                                            r = y(s.slides);
                                        try {
                                            for (r.s(); !(a = r.n()).done; ) {
                                                var l = a.value;
                                                if (l.slug && l.slug === i)
                                                    return s.slideTo(l.index);
                                            }
                                        } catch (t) {
                                            r.e(t);
                                        } finally {
                                            r.f();
                                        }
                                        var c = o.getSlide(),
                                            h =
                                                c.$trigger &&
                                                c.$trigger.dataset;
                                        if (h && h.fancybox === i)
                                            return s.slideTo(n - 1);
                                    }
                                    (o.plugins.Hash.hasSilentClose = !0),
                                        o.close();
                                }
                                t.startFromUrl();
                            },
                        },
                        {
                            key: "create",
                            value: function (e) {
                                function i() {
                                    window.addEventListener(
                                        "hashchange",
                                        t.onHashChange,
                                        !1
                                    ),
                                        t.startFromUrl();
                                }
                                (t.Fancybox = e),
                                    D &&
                                        window.requestAnimationFrame(
                                            function () {
                                                /complete|interactive|loaded/.test(
                                                    document.readyState
                                                )
                                                    ? i()
                                                    : document.addEventListener(
                                                          "DOMContentLoaded",
                                                          i
                                                      );
                                            }
                                        );
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                window.removeEventListener(
                                    "hashchange",
                                    t.onHashChange,
                                    !1
                                );
                            },
                        },
                    ]
                ),
                t
            );
        })(),
        J = {
            pageXOffset: 0,
            pageYOffset: 0,
            element: function () {
                return (
                    document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.webkitFullscreenElement
                );
            },
            activate: function (t) {
                (J.pageXOffset = window.pageXOffset),
                    (J.pageYOffset = window.pageYOffset),
                    t.requestFullscreen
                        ? t.requestFullscreen()
                        : t.mozRequestFullScreen
                        ? t.mozRequestFullScreen()
                        : t.webkitRequestFullscreen
                        ? t.webkitRequestFullscreen()
                        : t.msRequestFullscreen && t.msRequestFullscreen();
            },
            deactivate: function () {
                document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitExitFullscreen &&
                      document.webkitExitFullscreen();
            },
        },
        Q = (function () {
            function t(e) {
                o(this, t),
                    (this.fancybox = e),
                    (this.active = !1),
                    (this.handleVisibilityChange =
                        this.handleVisibilityChange.bind(this));
            }
            return (
                s(t, [
                    {
                        key: "isActive",
                        value: function () {
                            return this.active;
                        },
                    },
                    {
                        key: "setTimer",
                        value: function () {
                            var t = this;
                            if (this.active && !this.timer) {
                                var e = this.fancybox.option(
                                    "slideshow.delay",
                                    3e3
                                );
                                this.timer = setTimeout(function () {
                                    (t.timer = null),
                                        t.fancybox.option("infinite") ||
                                        t.fancybox.getSlide().index !==
                                            t.fancybox.Carousel.slides.length -
                                                1
                                            ? t.fancybox.next()
                                            : t.fancybox.jumpTo(0, {
                                                  friction: 0,
                                              });
                                }, e);
                                var i = this.$progress;
                                i ||
                                    ((i =
                                        document.createElement(
                                            "div"
                                        )).classList.add("fancybox__progress"),
                                    this.fancybox.$carousel.parentNode.insertBefore(
                                        i,
                                        this.fancybox.$carousel
                                    ),
                                    (this.$progress = i),
                                    i.offsetHeight),
                                    (i.style.transitionDuration = "".concat(
                                        e,
                                        "ms"
                                    )),
                                    (i.style.transform = "scaleX(1)");
                            }
                        },
                    },
                    {
                        key: "clearTimer",
                        value: function () {
                            clearTimeout(this.timer),
                                (this.timer = null),
                                this.$progress &&
                                    ((this.$progress.style.transitionDuration =
                                        ""),
                                    (this.$progress.style.transform = ""),
                                    this.$progress.offsetHeight);
                        },
                    },
                    {
                        key: "activate",
                        value: function () {
                            this.active ||
                                ((this.active = !0),
                                this.fancybox.$container.classList.add(
                                    "has-slideshow"
                                ),
                                "done" === this.fancybox.getSlide().state &&
                                    this.setTimer(),
                                document.addEventListener(
                                    "visibilitychange",
                                    this.handleVisibilityChange,
                                    !1
                                ));
                        },
                    },
                    {
                        key: "handleVisibilityChange",
                        value: function () {
                            this.deactivate();
                        },
                    },
                    {
                        key: "deactivate",
                        value: function () {
                            (this.active = !1),
                                this.clearTimer(),
                                this.fancybox.$container.classList.remove(
                                    "has-slideshow"
                                ),
                                document.removeEventListener(
                                    "visibilitychange",
                                    this.handleVisibilityChange,
                                    !1
                                );
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.active
                                ? this.deactivate()
                                : this.fancybox.Carousel.slides.length > 1 &&
                                  this.activate();
                        },
                    },
                ]),
                t
            );
        })(),
        tt = {
            display: [
                "counter",
                "zoom",
                "slideshow",
                "fullscreen",
                "thumbs",
                "close",
            ],
            autoEnable: !0,
            items: {
                counter: {
                    position: "left",
                    type: "div",
                    class: "fancybox__counter",
                    html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                    attr: { tabindex: -1 },
                },
                prev: {
                    type: "button",
                    class: "fancybox__button--prev",
                    label: "PREV",
                    html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                    attr: { "data-fancybox-prev": "" },
                },
                next: {
                    type: "button",
                    class: "fancybox__button--next",
                    label: "NEXT",
                    html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                    attr: { "data-fancybox-next": "" },
                },
                fullscreen: {
                    type: "button",
                    class: "fancybox__button--fullscreen",
                    label: "TOGGLE_FULLSCREEN",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
                    click: function (t) {
                        t.preventDefault(),
                            J.element()
                                ? J.deactivate()
                                : J.activate(this.fancybox.$container);
                    },
                },
                slideshow: {
                    type: "button",
                    class: "fancybox__button--slideshow",
                    label: "TOGGLE_SLIDESHOW",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
                    click: function (t) {
                        t.preventDefault(), this.Slideshow.toggle();
                    },
                },
                zoom: {
                    type: "button",
                    class: "fancybox__button--zoom",
                    label: "TOGGLE_ZOOM",
                    html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                    click: function (t) {
                        t.preventDefault();
                        var e = this.fancybox.getSlide().Panzoom;
                        e && e.toggleZoom();
                    },
                },
                download: {
                    type: "link",
                    label: "DOWNLOAD",
                    class: "fancybox__button--download",
                    html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                    click: function (t) {
                        t.stopPropagation();
                    },
                },
                thumbs: {
                    type: "button",
                    label: "TOGGLE_THUMBS",
                    class: "fancybox__button--thumbs",
                    html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                    click: function (t) {
                        t.stopPropagation();
                        var e = this.fancybox.plugins.Thumbs;
                        e && e.toggle();
                    },
                },
                close: {
                    type: "button",
                    label: "CLOSE",
                    class: "fancybox__button--close",
                    html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                    attr: { "data-fancybox-close": "", tabindex: 0 },
                },
            },
        },
        et = (function () {
            function t(e) {
                var i = this;
                o(this, t),
                    (this.fancybox = e),
                    (this.$container = null),
                    (this.state = "init");
                for (
                    var n = 0,
                        a = [
                            "onInit",
                            "onPrepare",
                            "onDone",
                            "onKeydown",
                            "onClosing",
                            "onChange",
                            "onSettle",
                            "onRefresh",
                        ];
                    n < a.length;
                    n++
                ) {
                    var s = a[n];
                    this[s] = this[s].bind(this);
                }
                this.events = {
                    init: this.onInit,
                    prepare: this.onPrepare,
                    done: this.onDone,
                    keydown: this.onKeydown,
                    closing: this.onClosing,
                    "Carousel.change": this.onChange,
                    "Carousel.settle": this.onSettle,
                    "Carousel.Panzoom.touchStart": function () {
                        return i.onRefresh();
                    },
                    "Image.startAnimation": function (t, e) {
                        return i.onRefresh(e);
                    },
                    "Image.afterUpdate": function (t, e) {
                        return i.onRefresh(e);
                    },
                };
            }
            return (
                s(t, [
                    {
                        key: "onInit",
                        value: function () {
                            if (this.fancybox.option("Toolbar.autoEnable")) {
                                var t,
                                    e = !1,
                                    i = y(this.fancybox.items);
                                try {
                                    for (i.s(); !(t = i.n()).done; ) {
                                        if ("image" === t.value.type) {
                                            e = !0;
                                            break;
                                        }
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                if (!e) return void (this.state = "disabled");
                            }
                            var n,
                                o = y(this.fancybox.option("Toolbar.display"));
                            try {
                                for (o.s(); !(n = o.n()).done; ) {
                                    var a = n.value;
                                    if ("close" === (b(a) ? a.id : a)) {
                                        this.fancybox.options.closeButton = !1;
                                        break;
                                    }
                                }
                            } catch (t) {
                                o.e(t);
                            } finally {
                                o.f();
                            }
                        },
                    },
                    {
                        key: "onPrepare",
                        value: function () {
                            var t = this.fancybox;
                            if (
                                "init" === this.state &&
                                (this.build(),
                                this.update(),
                                (this.Slideshow = new Q(t)),
                                !t.Carousel.prevPage &&
                                    (t.option("slideshow.autoStart") &&
                                        this.Slideshow.activate(),
                                    t.option("fullscreen.autoStart") &&
                                        !J.element()))
                            )
                                try {
                                    J.activate(t.$container);
                                } catch (t) {}
                        },
                    },
                    {
                        key: "onFsChange",
                        value: function () {
                            window.scrollTo(J.pageXOffset, J.pageYOffset);
                        },
                    },
                    {
                        key: "onSettle",
                        value: function () {
                            var t = this.fancybox,
                                e = this.Slideshow;
                            e &&
                                e.isActive() &&
                                (t.getSlide().index !==
                                    t.Carousel.slides.length - 1 ||
                                t.option("infinite")
                                    ? "done" === t.getSlide().state &&
                                      e.setTimer()
                                    : e.deactivate());
                        },
                    },
                    {
                        key: "onChange",
                        value: function () {
                            this.update(),
                                this.Slideshow &&
                                    this.Slideshow.isActive() &&
                                    this.Slideshow.clearTimer();
                        },
                    },
                    {
                        key: "onDone",
                        value: function (t, e) {
                            var i = this.Slideshow;
                            e.index === t.getSlide().index &&
                                (this.update(),
                                i &&
                                    i.isActive() &&
                                    (t.option("infinite") ||
                                    e.index !== t.Carousel.slides.length - 1
                                        ? i.setTimer()
                                        : i.deactivate()));
                        },
                    },
                    {
                        key: "onRefresh",
                        value: function (t) {
                            (t && t.index !== this.fancybox.getSlide().index) ||
                                (this.update(),
                                !this.Slideshow ||
                                    !this.Slideshow.isActive() ||
                                    (t && "done" !== t.state) ||
                                    this.Slideshow.deactivate());
                        },
                    },
                    {
                        key: "onKeydown",
                        value: function (t, e, i) {
                            " " === e &&
                                this.Slideshow &&
                                (this.Slideshow.toggle(), i.preventDefault());
                        },
                    },
                    {
                        key: "onClosing",
                        value: function () {
                            this.Slideshow && this.Slideshow.deactivate(),
                                document.removeEventListener(
                                    "fullscreenchange",
                                    this.onFsChange
                                );
                        },
                    },
                    {
                        key: "createElement",
                        value: function (t) {
                            var e, i;
                            ("div" === t.type
                                ? (e = document.createElement("div"))
                                : (e = document.createElement(
                                      "link" === t.type ? "a" : "button"
                                  )).classList.add("carousel__button"),
                            (e.innerHTML = t.html),
                            e.setAttribute("tabindex", t.tabindex || 0),
                            t.class) &&
                                (i = e.classList).add.apply(
                                    i,
                                    p(t.class.split(" "))
                                );
                            for (var n in t.attr) e.setAttribute(n, t.attr[n]);
                            t.label &&
                                e.setAttribute(
                                    "title",
                                    this.fancybox.localize(
                                        "{{".concat(t.label, "}}")
                                    )
                                ),
                                t.click &&
                                    e.addEventListener(
                                        "click",
                                        t.click.bind(this)
                                    ),
                                "prev" === t.id &&
                                    e.setAttribute("data-fancybox-prev", ""),
                                "next" === t.id &&
                                    e.setAttribute("data-fancybox-next", "");
                            var o = e.querySelector("svg");
                            return (
                                o &&
                                    (o.setAttribute("role", "img"),
                                    o.setAttribute("tabindex", "-1"),
                                    o.setAttribute(
                                        "xmlns",
                                        "http://www.w3.org/2000/svg"
                                    )),
                                e
                            );
                        },
                    },
                    {
                        key: "build",
                        value: function () {
                            var t = this;
                            this.cleanup();
                            var e,
                                i = this.fancybox.option("Toolbar.items"),
                                n = [
                                    { position: "left", items: [] },
                                    { position: "center", items: [] },
                                    { position: "right", items: [] },
                                ],
                                o = this.fancybox.plugins.Thumbs,
                                a = y(this.fancybox.option("Toolbar.display"));
                            try {
                                var s = function () {
                                    var a = e.value,
                                        s = void 0,
                                        r = void 0;
                                    if (
                                        (b(a)
                                            ? ((s = a.id), (r = x({}, i[s], a)))
                                            : (r = i[(s = a)]),
                                        [
                                            "counter",
                                            "next",
                                            "prev",
                                            "slideshow",
                                        ].includes(s) &&
                                            t.fancybox.items.length < 2)
                                    )
                                        return "continue";
                                    if ("fullscreen" === s) {
                                        if (
                                            !document.fullscreenEnabled ||
                                            window.fullScreen
                                        )
                                            return "continue";
                                        document.addEventListener(
                                            "fullscreenchange",
                                            t.onFsChange
                                        );
                                    }
                                    if (
                                        "thumbs" === s &&
                                        (!o || "disabled" === o.state)
                                    )
                                        return "continue";
                                    if (!r) return "continue";
                                    var l = r.position || "right",
                                        c = n.find(function (t) {
                                            return t.position === l;
                                        });
                                    c && c.items.push(r);
                                };
                                for (a.s(); !(e = a.n()).done; ) s();
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            var r = document.createElement("div");
                            r.classList.add("fancybox__toolbar");
                            for (var l = 0, c = n; l < c.length; l++) {
                                var h = c[l];
                                if (h.items.length) {
                                    var d = document.createElement("div");
                                    d.classList.add("fancybox__toolbar__items"),
                                        d.classList.add(
                                            "fancybox__toolbar__items--".concat(
                                                h.position
                                            )
                                        );
                                    var u,
                                        f = y(h.items);
                                    try {
                                        for (f.s(); !(u = f.n()).done; ) {
                                            var v = u.value;
                                            d.appendChild(
                                                this.createElement(v)
                                            );
                                        }
                                    } catch (t) {
                                        f.e(t);
                                    } finally {
                                        f.f();
                                    }
                                    r.appendChild(d);
                                }
                            }
                            this.fancybox.$carousel.parentNode.insertBefore(
                                r,
                                this.fancybox.$carousel
                            ),
                                (this.$container = r);
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var t,
                                e = this.fancybox.getSlide(),
                                i = e.index,
                                n = this.fancybox.items.length,
                                o =
                                    e.downloadSrc ||
                                    ("image" !== e.type || e.error
                                        ? null
                                        : e.src),
                                a = y(
                                    this.fancybox.$container.querySelectorAll(
                                        "a.fancybox__button--download"
                                    )
                                );
                            try {
                                for (a.s(); !(t = a.n()).done; ) {
                                    var s = t.value;
                                    o
                                        ? (s.removeAttribute("disabled"),
                                          s.removeAttribute("tabindex"),
                                          s.setAttribute("href", o),
                                          s.setAttribute("download", o),
                                          s.setAttribute("target", "_blank"))
                                        : (s.setAttribute("disabled", ""),
                                          s.setAttribute("tabindex", -1),
                                          s.removeAttribute("href"),
                                          s.removeAttribute("download"));
                                }
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            var r,
                                l = e.Panzoom,
                                c =
                                    l &&
                                    l.option("maxScale") >
                                        l.option("baseScale"),
                                h = y(
                                    this.fancybox.$container.querySelectorAll(
                                        ".fancybox__button--zoom"
                                    )
                                );
                            try {
                                for (h.s(); !(r = h.n()).done; ) {
                                    var d = r.value;
                                    c
                                        ? d.removeAttribute("disabled")
                                        : d.setAttribute("disabled", "");
                                }
                            } catch (t) {
                                h.e(t);
                            } finally {
                                h.f();
                            }
                            var u,
                                f = y(
                                    this.fancybox.$container.querySelectorAll(
                                        "[data-fancybox-index]"
                                    )
                                );
                            try {
                                for (f.s(); !(u = f.n()).done; ) {
                                    u.value.innerHTML = e.index + 1;
                                }
                            } catch (t) {
                                f.e(t);
                            } finally {
                                f.f();
                            }
                            var v,
                                p = y(
                                    this.fancybox.$container.querySelectorAll(
                                        "[data-fancybox-count]"
                                    )
                                );
                            try {
                                for (p.s(); !(v = p.n()).done; ) {
                                    v.value.innerHTML = n;
                                }
                            } catch (t) {
                                p.e(t);
                            } finally {
                                p.f();
                            }
                            if (!this.fancybox.option("infinite")) {
                                var g,
                                    m = y(
                                        this.fancybox.$container.querySelectorAll(
                                            "[data-fancybox-prev]"
                                        )
                                    );
                                try {
                                    for (m.s(); !(g = m.n()).done; ) {
                                        var b = g.value;
                                        0 === i
                                            ? b.setAttribute("disabled", "")
                                            : b.removeAttribute("disabled");
                                    }
                                } catch (t) {
                                    m.e(t);
                                } finally {
                                    m.f();
                                }
                                var x,
                                    w = y(
                                        this.fancybox.$container.querySelectorAll(
                                            "[data-fancybox-next]"
                                        )
                                    );
                                try {
                                    for (w.s(); !(x = w.n()).done; ) {
                                        var k = x.value;
                                        i === n - 1
                                            ? k.setAttribute("disabled", "")
                                            : k.removeAttribute("disabled");
                                    }
                                } catch (t) {
                                    w.e(t);
                                } finally {
                                    w.f();
                                }
                            }
                        },
                    },
                    {
                        key: "cleanup",
                        value: function () {
                            this.Slideshow &&
                                this.Slideshow.isActive() &&
                                this.Slideshow.clearTimer(),
                                this.$container && this.$container.remove(),
                                (this.$container = null);
                        },
                    },
                    {
                        key: "attach",
                        value: function () {
                            this.fancybox.on(this.events);
                        },
                    },
                    {
                        key: "detach",
                        value: function () {
                            this.fancybox.off(this.events), this.cleanup();
                        },
                    },
                ]),
                t
            );
        })();
    et.defaults = tt;
    var it = {
            ScrollLock: X,
            Thumbs: q,
            Html: V,
            Toolbar: et,
            Image: Z,
            Hash: K,
        },
        nt = {
            startIndex: 0,
            preload: 1,
            infinite: !0,
            showClass: "fancybox-zoomInUp",
            hideClass: "fancybox-fadeOut",
            animated: !0,
            hideScrollbar: !0,
            parentEl: null,
            mainClass: null,
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            click: "close",
            closeButton: "inside",
            dragToClose: !0,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev",
            },
            template: {
                closeButton:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
                spinner:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
                main: null,
            },
            l10n: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download",
            },
        },
        ot = {},
        at = 0,
        st = (function (t) {
            l(i, t);
            var e = f(i);
            function i(t) {
                var n,
                    a =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                return (
                    o(this, i),
                    (n = e.call(this, x(!0, {}, nt, a))).bindHandlers(),
                    (n.state = "init"),
                    n.setItems(t),
                    n.attachPlugins(i.Plugins),
                    n.trigger("init"),
                    !0 === n.option("hideScrollbar") && n.hideScrollbar(),
                    n.initLayout(),
                    n.initCarousel(),
                    n.attachEvents(),
                    (ot[n.id] = d(n)),
                    n.trigger("prepare"),
                    (n.state = "ready"),
                    n.trigger("ready"),
                    n.$container.setAttribute("aria-hidden", "false"),
                    n.option("trapFocus") && n.focus(),
                    n
                );
            }
            return (
                s(
                    i,
                    [
                        {
                            key: "bindHandlers",
                            value: function () {
                                for (
                                    var t = 0,
                                        e = [
                                            "onMousedown",
                                            "onKeydown",
                                            "onClick",
                                            "onFocus",
                                            "onCreateSlide",
                                            "onSettle",
                                            "onTouchMove",
                                            "onTouchEnd",
                                            "onTransform",
                                        ];
                                    t < e.length;
                                    t++
                                ) {
                                    var i = e[t];
                                    this[i] = this[i].bind(this);
                                }
                            },
                        },
                        {
                            key: "attachEvents",
                            value: function () {
                                document.addEventListener(
                                    "mousedown",
                                    this.onMousedown
                                ),
                                    document.addEventListener(
                                        "keydown",
                                        this.onKeydown,
                                        !0
                                    ),
                                    this.option("trapFocus") &&
                                        document.addEventListener(
                                            "focus",
                                            this.onFocus,
                                            !0
                                        ),
                                    this.$container.addEventListener(
                                        "click",
                                        this.onClick
                                    );
                            },
                        },
                        {
                            key: "detachEvents",
                            value: function () {
                                document.removeEventListener(
                                    "mousedown",
                                    this.onMousedown
                                ),
                                    document.removeEventListener(
                                        "keydown",
                                        this.onKeydown,
                                        !0
                                    ),
                                    document.removeEventListener(
                                        "focus",
                                        this.onFocus,
                                        !0
                                    ),
                                    this.$container.removeEventListener(
                                        "click",
                                        this.onClick
                                    );
                            },
                        },
                        {
                            key: "initLayout",
                            value: function () {
                                var t = this;
                                this.$root =
                                    this.option("parentEl") || document.body;
                                var e = this.option("template.main");
                                e &&
                                    (this.$root.insertAdjacentHTML(
                                        "beforeend",
                                        this.localize(e)
                                    ),
                                    (this.$container = this.$root.querySelector(
                                        ".fancybox__container"
                                    ))),
                                    this.$container ||
                                        ((this.$container =
                                            document.createElement("div")),
                                        this.$root.appendChild(
                                            this.$container
                                        )),
                                    (this.$container.onscroll = function () {
                                        return (
                                            (t.$container.scrollLeft = 0), !1
                                        );
                                    }),
                                    Object.entries({
                                        class: "fancybox__container",
                                        role: "dialog",
                                        tabIndex: "-1",
                                        "aria-modal": "true",
                                        "aria-hidden": "true",
                                        "aria-label":
                                            this.localize("{{MODAL}}"),
                                    }).forEach(function (e) {
                                        var i;
                                        return (i =
                                            t.$container).setAttribute.apply(
                                            i,
                                            p(e)
                                        );
                                    }),
                                    this.option("animated") &&
                                        this.$container.classList.add(
                                            "is-animated"
                                        ),
                                    (this.$backdrop =
                                        this.$container.querySelector(
                                            ".fancybox__backdrop"
                                        )),
                                    this.$backdrop ||
                                        ((this.$backdrop =
                                            document.createElement("div")),
                                        this.$backdrop.classList.add(
                                            "fancybox__backdrop"
                                        ),
                                        this.$container.appendChild(
                                            this.$backdrop
                                        )),
                                    (this.$carousel =
                                        this.$container.querySelector(
                                            ".fancybox__carousel"
                                        )),
                                    this.$carousel ||
                                        ((this.$carousel =
                                            document.createElement("div")),
                                        this.$carousel.classList.add(
                                            "fancybox__carousel"
                                        ),
                                        this.$container.appendChild(
                                            this.$carousel
                                        )),
                                    (this.$container.Fancybox = this),
                                    (this.id =
                                        this.$container.getAttribute("id")),
                                    this.id ||
                                        ((this.id = this.options.id || ++at),
                                        this.$container.setAttribute(
                                            "id",
                                            "fancybox-" + this.id
                                        ));
                                var i,
                                    n = this.options.mainClass;
                                n &&
                                    (i = this.$container.classList).add.apply(
                                        i,
                                        p(n.split(" "))
                                    );
                                return (
                                    document.documentElement.classList.add(
                                        "with-fancybox"
                                    ),
                                    this.trigger("initLayout"),
                                    this
                                );
                            },
                        },
                        {
                            key: "setItems",
                            value: function (t) {
                                var e,
                                    i = [],
                                    n = y(t);
                                try {
                                    for (n.s(); !(e = n.n()).done; ) {
                                        var o = e.value,
                                            a = o.$trigger;
                                        if (a) {
                                            var s = a.dataset || {};
                                            (o.src =
                                                s.src ||
                                                a.getAttribute("href") ||
                                                o.src),
                                                (o.type = s.type || o.type),
                                                !o.src &&
                                                    a instanceof
                                                        HTMLImageElement &&
                                                    (o.src =
                                                        a.currentSrc ||
                                                        o.$trigger.src);
                                        }
                                        var r = o.$thumb;
                                        if (!r) {
                                            var l =
                                                o.$trigger &&
                                                o.$trigger.origTarget;
                                            l &&
                                                (r =
                                                    l instanceof
                                                    HTMLImageElement
                                                        ? l
                                                        : l.querySelector(
                                                              "img"
                                                          )),
                                                !r &&
                                                    o.$trigger &&
                                                    (r =
                                                        o.$trigger instanceof
                                                        HTMLImageElement
                                                            ? o.$trigger
                                                            : o.$trigger.querySelector(
                                                                  "img"
                                                              ));
                                        }
                                        o.$thumb = r || null;
                                        var c = o.thumb;
                                        !c &&
                                            r &&
                                            !(c = r.currentSrc || r.src) &&
                                            r.dataset &&
                                            (c =
                                                r.dataset.lazySrc ||
                                                r.dataset.src),
                                            c ||
                                                "image" !== o.type ||
                                                (c = o.src),
                                            (o.thumb = c || null),
                                            (o.caption = o.caption || ""),
                                            i.push(o);
                                    }
                                } catch (t) {
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                                this.items = i;
                            },
                        },
                        {
                            key: "initCarousel",
                            value: function () {
                                var t = this;
                                return (
                                    (this.Carousel = new N(
                                        this.$carousel,
                                        x(
                                            !0,
                                            {},
                                            {
                                                prefix: "",
                                                classNames: {
                                                    viewport:
                                                        "fancybox__viewport",
                                                    track: "fancybox__track",
                                                    slide: "fancybox__slide",
                                                },
                                                textSelection: !0,
                                                preload: this.option("preload"),
                                                friction: 0.88,
                                                slides: this.items,
                                                initialPage:
                                                    this.options.startIndex,
                                                slidesPerPage: 1,
                                                infiniteX:
                                                    this.option("infinite"),
                                                infiniteY: !0,
                                                l10n: this.option("l10n"),
                                                Dots: !1,
                                                Navigation: {
                                                    classNames: {
                                                        main: "fancybox__nav",
                                                        button: "carousel__button",
                                                        next: "is-next",
                                                        prev: "is-prev",
                                                    },
                                                },
                                                Panzoom: {
                                                    textSelection: !0,
                                                    panOnlyZoomed: function () {
                                                        return (
                                                            t.Carousel &&
                                                            t.Carousel.pages &&
                                                            t.Carousel.pages
                                                                .length < 2 &&
                                                            !t.options
                                                                .dragToClose
                                                        );
                                                    },
                                                    lockAxis: function () {
                                                        if (t.Carousel) {
                                                            var e = "x";
                                                            return (
                                                                t.options
                                                                    .dragToClose &&
                                                                    (e += "y"),
                                                                e
                                                            );
                                                        }
                                                    },
                                                },
                                                on: {
                                                    "*": function (e) {
                                                        for (
                                                            var i =
                                                                    arguments.length,
                                                                n = new Array(
                                                                    i > 1
                                                                        ? i - 1
                                                                        : 0
                                                                ),
                                                                o = 1;
                                                            o < i;
                                                            o++
                                                        )
                                                            n[o - 1] =
                                                                arguments[o];
                                                        return t.trigger.apply(
                                                            t,
                                                            [
                                                                "Carousel.".concat(
                                                                    e
                                                                ),
                                                            ].concat(n)
                                                        );
                                                    },
                                                    init: function (e) {
                                                        return (t.Carousel = e);
                                                    },
                                                    createSlide:
                                                        this.onCreateSlide,
                                                    settle: this.onSettle,
                                                },
                                            },
                                            this.option("Carousel")
                                        )
                                    )),
                                    this.option("dragToClose") &&
                                        this.Carousel.Panzoom.on({
                                            touchMove: this.onTouchMove,
                                            afterTransform: this.onTransform,
                                            touchEnd: this.onTouchEnd,
                                        }),
                                    this.trigger("initCarousel"),
                                    this
                                );
                            },
                        },
                        {
                            key: "onCreateSlide",
                            value: function (t, e) {
                                var i = e.caption || "";
                                if (
                                    ("function" ==
                                        typeof this.options.caption &&
                                        (i = this.options.caption.call(
                                            this,
                                            this,
                                            this.Carousel,
                                            e
                                        )),
                                    "string" == typeof i && i.length)
                                ) {
                                    var n = document.createElement("div"),
                                        o = "fancybox__caption_"
                                            .concat(this.id, "_")
                                            .concat(e.index);
                                    (n.className = "fancybox__caption"),
                                        (n.innerHTML = i),
                                        n.setAttribute("id", o),
                                        (e.$caption = e.$el.appendChild(n)),
                                        e.$el.classList.add("has-caption"),
                                        e.$el.setAttribute(
                                            "aria-labelledby",
                                            o
                                        );
                                }
                            },
                        },
                        {
                            key: "onSettle",
                            value: function () {
                                this.option("autoFocus") && this.focus();
                            },
                        },
                        {
                            key: "onFocus",
                            value: function (t) {
                                this.focus(t);
                            },
                        },
                        {
                            key: "onClick",
                            value: function (t) {
                                if (!t.defaultPrevented) {
                                    var e = t.target;
                                    if (e.matches("[data-fancybox-close]"))
                                        return (
                                            t.preventDefault(), void i.close(!1)
                                        );
                                    if (e.matches("[data-fancybox-next]"))
                                        return (
                                            t.preventDefault(), void i.next()
                                        );
                                    if (e.matches("[data-fancybox-prev]"))
                                        return (
                                            t.preventDefault(), void i.prev()
                                        );
                                    if (!e.closest(".fancybox__content"))
                                        if (!getSelection().toString().length)
                                            if (!1 !== this.trigger("click", t))
                                                switch (this.option("click")) {
                                                    case "close":
                                                        this.close();
                                                        break;
                                                    case "next":
                                                        this.next();
                                                }
                                }
                            },
                        },
                        {
                            key: "onTouchMove",
                            value: function () {
                                var t = this.getSlide().Panzoom;
                                return !t || 1 === t.content.scale;
                            },
                        },
                        {
                            key: "onTouchEnd",
                            value: function (t) {
                                var e = t.dragOffset.y;
                                Math.abs(e) >= 150 ||
                                (Math.abs(e) >= 35 && t.dragOffset.time < 350)
                                    ? (this.option("hideClass") &&
                                          (this.getSlide().hideClass =
                                              "fancybox-throwOut".concat(
                                                  t.content.y < 0
                                                      ? "Up"
                                                      : "Down"
                                              )),
                                      this.close())
                                    : "y" === t.lockAxis && t.panTo({ y: 0 });
                            },
                        },
                        {
                            key: "onTransform",
                            value: function (t) {
                                if (this.$backdrop) {
                                    var e = Math.abs(t.content.y),
                                        i =
                                            e < 1
                                                ? ""
                                                : Math.max(
                                                      0.33,
                                                      Math.min(
                                                          1,
                                                          1 -
                                                              (e /
                                                                  t.content
                                                                      .fitHeight) *
                                                                  1.5
                                                      )
                                                  );
                                    this.$container.style.setProperty(
                                        "--fancybox-ts",
                                        i ? "0s" : ""
                                    ),
                                        this.$container.style.setProperty(
                                            "--fancybox-opacity",
                                            i
                                        );
                                }
                            },
                        },
                        {
                            key: "onMousedown",
                            value: function () {
                                "ready" === this.state &&
                                    document.body.classList.add(
                                        "is-using-mouse"
                                    );
                            },
                        },
                        {
                            key: "onKeydown",
                            value: function (t) {
                                if (i.getInstance().id === this.id) {
                                    document.body.classList.remove(
                                        "is-using-mouse"
                                    );
                                    var e = t.key,
                                        n = this.option("keyboard");
                                    if (
                                        n &&
                                        !t.ctrlKey &&
                                        !t.altKey &&
                                        !t.shiftKey
                                    ) {
                                        var o =
                                                document.activeElement &&
                                                document.activeElement
                                                    .classList,
                                            a =
                                                o &&
                                                o.contains("carousel__button");
                                        if ("Escape" !== e && !a)
                                            if (
                                                t.target.isContentEditable ||
                                                -1 !==
                                                    [
                                                        "BUTTON",
                                                        "TEXTAREA",
                                                        "OPTION",
                                                        "INPUT",
                                                        "SELECT",
                                                        "VIDEO",
                                                    ].indexOf(t.target.nodeName)
                                            )
                                                return;
                                        if (
                                            !1 !== this.trigger("keydown", e, t)
                                        ) {
                                            var s = n[e];
                                            "function" == typeof this[s] &&
                                                this[s]();
                                        }
                                    }
                                }
                            },
                        },
                        {
                            key: "getSlide",
                            value: function () {
                                var t = this.Carousel;
                                if (!t) return null;
                                var e =
                                        null === t.page
                                            ? t.option("initialPage")
                                            : t.page,
                                    i = t.pages || [];
                                return i.length && i[e] ? i[e].slides[0] : null;
                            },
                        },
                        {
                            key: "focus",
                            value: function (t) {
                                if (
                                    !(
                                        i.ignoreFocusChange ||
                                        [
                                            "init",
                                            "closing",
                                            "customClosing",
                                            "destroy",
                                        ].indexOf(this.state) > -1
                                    )
                                ) {
                                    t && t.preventDefault(),
                                        (i.ignoreFocusChange = !0);
                                    for (
                                        var e,
                                            n = this.$container,
                                            o = this.getSlide(),
                                            a =
                                                "done" === o.state
                                                    ? o.$el
                                                    : null,
                                            s = [],
                                            r = 0,
                                            l = Array.from(
                                                n.querySelectorAll(H)
                                            );
                                        r < l.length;
                                        r++
                                    ) {
                                        var c = l[r],
                                            h = c.offsetParent,
                                            d = a && a.contains(c),
                                            u =
                                                !this.Carousel.$viewport.contains(
                                                    c
                                                );
                                        h && (d || u)
                                            ? (s.push(c),
                                              void 0 !==
                                                  c.dataset.origTabindex &&
                                                  ((c.tabIndex =
                                                      c.dataset.origTabindex),
                                                  c.removeAttribute(
                                                      "data-orig-tabindex"
                                                  )),
                                              (c.hasAttribute("autoFocus") ||
                                                  (!e &&
                                                      d &&
                                                      !c.classList.contains(
                                                          "carousel__button"
                                                      ))) &&
                                                  (e = c))
                                            : ((c.dataset.origTabindex =
                                                  void 0 ===
                                                  c.dataset.origTabindex
                                                      ? c.getAttribute(
                                                            "tabindex"
                                                        )
                                                      : c.dataset.origTabindex),
                                              (c.tabIndex = -1));
                                    }
                                    t
                                        ? s.indexOf(t.target) > -1
                                            ? (this.lastFocus = t.target)
                                            : this.lastFocus === n
                                            ? W(s[s.length - 1])
                                            : W(n)
                                        : this.option("autoFocus") && e
                                        ? W(e)
                                        : s.indexOf(document.activeElement) <
                                              0 && W(n),
                                        (this.lastFocus =
                                            document.activeElement),
                                        (i.ignoreFocusChange = !1);
                                }
                            },
                        },
                        {
                            key: "hideScrollbar",
                            value: function () {
                                if (D) {
                                    var t =
                                            window.innerWidth -
                                            document.documentElement.getBoundingClientRect()
                                                .width,
                                        e = "fancybox-style-noscroll",
                                        i = document.getElementById(e);
                                    i ||
                                        (t > 0 &&
                                            (((i =
                                                document.createElement(
                                                    "style"
                                                )).id = e),
                                            (i.type = "text/css"),
                                            (i.innerHTML =
                                                ".compensate-for-scrollbar {padding-right: ".concat(
                                                    t,
                                                    "px;}"
                                                )),
                                            document
                                                .getElementsByTagName("head")[0]
                                                .appendChild(i),
                                            document.body.classList.add(
                                                "compensate-for-scrollbar"
                                            )));
                                }
                            },
                        },
                        {
                            key: "revealScrollbar",
                            value: function () {
                                document.body.classList.remove(
                                    "compensate-for-scrollbar"
                                );
                                var t = document.getElementById(
                                    "fancybox-style-noscroll"
                                );
                                t && t.remove();
                            },
                        },
                        {
                            key: "clearContent",
                            value: function (t) {
                                this.Carousel.trigger("removeSlide", t),
                                    t.$content &&
                                        (t.$content.remove(),
                                        (t.$content = null)),
                                    t.$closeButton &&
                                        (t.$closeButton.remove(),
                                        (t.$closeButton = null)),
                                    t._className &&
                                        t.$el.classList.remove(t._className);
                            },
                        },
                        {
                            key: "setContent",
                            value: function (t, e) {
                                var i,
                                    n =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {},
                                    o = t.$el;
                                if (e instanceof HTMLElement)
                                    ["img", "iframe", "video", "audio"].indexOf(
                                        e.nodeName.toLowerCase()
                                    ) > -1
                                        ? (i =
                                              document.createElement(
                                                  "div"
                                              )).appendChild(e)
                                        : (i = e);
                                else {
                                    var a = document
                                        .createRange()
                                        .createContextualFragment(e);
                                    (i =
                                        document.createElement(
                                            "div"
                                        )).appendChild(a);
                                }
                                if (
                                    (t.filter &&
                                        !t.error &&
                                        (i = i.querySelector(t.filter)),
                                    i instanceof Element)
                                )
                                    return (
                                        (t._className = "has-".concat(
                                            n.suffix || t.type || "unknown"
                                        )),
                                        o.classList.add(t._className),
                                        i.classList.add("fancybox__content"),
                                        ("none" !== i.style.display &&
                                            "none" !==
                                                getComputedStyle(
                                                    i
                                                ).getPropertyValue(
                                                    "display"
                                                )) ||
                                            (i.style.display =
                                                t.display ||
                                                this.option("defaultDisplay") ||
                                                "flex"),
                                        t.id && i.setAttribute("id", t.id),
                                        (t.$content = i),
                                        o.prepend(i),
                                        this.manageCloseButton(t),
                                        "loading" !== t.state &&
                                            this.revealContent(t),
                                        i
                                    );
                                this.setError(t, "{{ELEMENT_NOT_FOUND}}");
                            },
                        },
                        {
                            key: "manageCloseButton",
                            value: function (t) {
                                var e = this,
                                    i =
                                        void 0 === t.closeButton
                                            ? this.option("closeButton")
                                            : t.closeButton;
                                if (i && ("top" !== i || !this.$closeButton)) {
                                    var n = document.createElement("button");
                                    n.classList.add(
                                        "carousel__button",
                                        "is-close"
                                    ),
                                        n.setAttribute(
                                            "title",
                                            this.options.l10n.CLOSE
                                        ),
                                        (n.innerHTML = this.option(
                                            "template.closeButton"
                                        )),
                                        n.addEventListener(
                                            "click",
                                            function (t) {
                                                return e.close(t);
                                            }
                                        ),
                                        "inside" === i
                                            ? (t.$closeButton &&
                                                  t.$closeButton.remove(),
                                              (t.$closeButton =
                                                  t.$content.appendChild(n)))
                                            : (this.$closeButton =
                                                  this.$container.insertBefore(
                                                      n,
                                                      this.$container.firstChild
                                                  ));
                                }
                            },
                        },
                        {
                            key: "revealContent",
                            value: function (t) {
                                var e = this;
                                this.trigger("reveal", t),
                                    (t.$content.style.visibility = "");
                                var i = !1;
                                t.error ||
                                    "loading" === t.state ||
                                    null !== this.Carousel.prevPage ||
                                    t.index !== this.options.startIndex ||
                                    (i =
                                        void 0 === t.showClass
                                            ? this.option("showClass")
                                            : t.showClass),
                                    i
                                        ? ((t.state = "animating"),
                                          this.animateCSS(
                                              t.$content,
                                              i,
                                              function () {
                                                  e.done(t);
                                              }
                                          ))
                                        : this.done(t);
                            },
                        },
                        {
                            key: "animateCSS",
                            value: function (t, e, i) {
                                if (
                                    (t &&
                                        t.dispatchEvent(
                                            new CustomEvent("animationend", {
                                                bubbles: !0,
                                                cancelable: !0,
                                            })
                                        ),
                                    t && e)
                                ) {
                                    t.addEventListener(
                                        "animationend",
                                        function n(o) {
                                            o.currentTarget === this &&
                                                (t.removeEventListener(
                                                    "animationend",
                                                    n
                                                ),
                                                i && i(),
                                                t.classList.remove(e));
                                        }
                                    ),
                                        t.classList.add(e);
                                } else "function" == typeof i && i();
                            },
                        },
                        {
                            key: "done",
                            value: function (t) {
                                (t.state = "done"), this.trigger("done", t);
                                var e = this.getSlide();
                                e &&
                                    t.index === e.index &&
                                    this.option("autoFocus") &&
                                    this.focus();
                            },
                        },
                        {
                            key: "setError",
                            value: function (t, e) {
                                (t.error = e),
                                    this.hideLoading(t),
                                    this.clearContent(t);
                                var i = document.createElement("div");
                                i.classList.add("fancybox-error"),
                                    (i.innerHTML = this.localize(
                                        e || "<p>{{ERROR}}</p>"
                                    )),
                                    this.setContent(t, i, { suffix: "error" });
                            },
                        },
                        {
                            key: "showLoading",
                            value: function (t) {
                                var e = this;
                                (t.state = "loading"),
                                    t.$el.classList.add("is-loading");
                                var i =
                                    t.$el.querySelector(".fancybox__spinner");
                                i ||
                                    ((i =
                                        document.createElement(
                                            "div"
                                        )).classList.add("fancybox__spinner"),
                                    (i.innerHTML =
                                        this.option("template.spinner")),
                                    i.addEventListener("click", function () {
                                        e.Carousel.Panzoom.velocity ||
                                            e.close();
                                    }),
                                    t.$el.prepend(i));
                            },
                        },
                        {
                            key: "hideLoading",
                            value: function (t) {
                                var e =
                                    t.$el &&
                                    t.$el.querySelector(".fancybox__spinner");
                                e &&
                                    (e.remove(),
                                    t.$el.classList.remove("is-loading")),
                                    "loading" === t.state &&
                                        (this.trigger("load", t),
                                        (t.state = "ready"));
                            },
                        },
                        {
                            key: "next",
                            value: function () {
                                var t = this.Carousel;
                                t && t.pages.length > 1 && t.slideNext();
                            },
                        },
                        {
                            key: "prev",
                            value: function () {
                                var t = this.Carousel;
                                t && t.pages.length > 1 && t.slidePrev();
                            },
                        },
                        {
                            key: "jumpTo",
                            value: function () {
                                var t;
                                this.Carousel &&
                                    (t = this.Carousel).slideTo.apply(
                                        t,
                                        arguments
                                    );
                            },
                        },
                        {
                            key: "close",
                            value: function (t) {
                                var e = this;
                                if (
                                    (t && t.preventDefault(),
                                    ![
                                        "closing",
                                        "customClosing",
                                        "destroy",
                                    ].includes(this.state) &&
                                        !1 !== this.trigger("shouldClose", t) &&
                                        ((this.state = "closing"),
                                        this.Carousel.Panzoom.destroy(),
                                        this.detachEvents(),
                                        this.trigger("closing", t),
                                        "destroy" !== this.state))
                                ) {
                                    this.$container.setAttribute(
                                        "aria-hidden",
                                        "true"
                                    ),
                                        this.$container.classList.add(
                                            "is-closing"
                                        );
                                    var i = this.getSlide();
                                    if (
                                        (this.Carousel.slides.forEach(function (
                                            t
                                        ) {
                                            t.$content &&
                                                t.index !== i.index &&
                                                e.Carousel.trigger(
                                                    "removeSlide",
                                                    t
                                                );
                                        }),
                                        "closing" === this.state)
                                    ) {
                                        var n =
                                            void 0 === i.hideClass
                                                ? this.option("hideClass")
                                                : i.hideClass;
                                        this.animateCSS(
                                            i.$content,
                                            n,
                                            function () {
                                                e.destroy();
                                            },
                                            !0
                                        );
                                    }
                                }
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                if ("destroy" !== this.state) {
                                    (this.state = "destroy"),
                                        this.trigger("destroy");
                                    var t = this.option("placeFocusBack")
                                        ? this.getSlide().$trigger
                                        : null;
                                    this.Carousel.destroy(),
                                        this.detachPlugins(),
                                        (this.Carousel = null),
                                        (this.options = {}),
                                        (this.events = {}),
                                        this.$container.remove(),
                                        (this.$container =
                                            this.$backdrop =
                                            this.$carousel =
                                                null),
                                        t && W(t),
                                        delete ot[this.id];
                                    var e = i.getInstance();
                                    e
                                        ? e.focus()
                                        : (document.documentElement.classList.remove(
                                              "with-fancybox"
                                          ),
                                          document.body.classList.remove(
                                              "is-using-mouse"
                                          ),
                                          this.revealScrollbar());
                                }
                            },
                        },
                    ],
                    [
                        {
                            key: "show",
                            value: function (t) {
                                var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                return new i(t, e);
                            },
                        },
                        {
                            key: "fromEvent",
                            value: function (t) {
                                var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                if (
                                    !t.defaultPrevented &&
                                    !(
                                        (t.button && 0 !== t.button) ||
                                        t.ctrlKey ||
                                        t.metaKey ||
                                        t.shiftKey
                                    )
                                ) {
                                    var n,
                                        o,
                                        a,
                                        s = t.target;
                                    if (
                                        ((s.matches(
                                            "[data-fancybox-trigger]"
                                        ) ||
                                            (s = s.closest(
                                                "[data-fancybox-trigger]"
                                            ))) &&
                                            (n =
                                                s &&
                                                s.dataset &&
                                                s.dataset.fancyboxTrigger),
                                        n)
                                    ) {
                                        var r = document.querySelectorAll(
                                                '[data-fancybox="'.concat(
                                                    n,
                                                    '"]'
                                                )
                                            ),
                                            l =
                                                parseInt(
                                                    s.dataset.fancyboxIndex,
                                                    10
                                                ) || 0;
                                        s = r.length ? r[l] : s;
                                    }
                                    s || (s = t.target),
                                        Array.from(i.openers.keys())
                                            .reverse()
                                            .some(function (e) {
                                                a = s;
                                                var i = !1;
                                                try {
                                                    a instanceof Element &&
                                                        ("string" == typeof e ||
                                                            e instanceof
                                                                String) &&
                                                        (i =
                                                            a.matches(e) ||
                                                            (a = a.closest(e)));
                                                } catch (t) {}
                                                return (
                                                    !!i &&
                                                    (t.preventDefault(),
                                                    (o = e),
                                                    !0)
                                                );
                                            });
                                    var c = !1;
                                    if (o) {
                                        (e.event = t),
                                            (e.target = a),
                                            (a.origTarget = t.target),
                                            (c = i.fromOpener(o, e));
                                        var h = i.getInstance();
                                        h &&
                                            "ready" === h.state &&
                                            t.detail &&
                                            document.body.classList.add(
                                                "is-using-mouse"
                                            );
                                    }
                                    return c;
                                }
                            },
                        },
                        {
                            key: "fromOpener",
                            value: function (t) {
                                var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {},
                                    n = function (t) {
                                        for (
                                            var e = [
                                                    "false",
                                                    "0",
                                                    "no",
                                                    "null",
                                                    "undefined",
                                                ],
                                                i = ["true", "1", "yes"],
                                                n = Object.assign(
                                                    {},
                                                    t.dataset
                                                ),
                                                o = {},
                                                a = 0,
                                                s = Object.entries(n);
                                            a < s.length;
                                            a++
                                        ) {
                                            var r = v(s[a], 2),
                                                l = r[0],
                                                c = r[1];
                                            if ("fancybox" !== l)
                                                if (
                                                    "width" === l ||
                                                    "height" === l
                                                )
                                                    o["_".concat(l)] = c;
                                                else if (
                                                    "string" == typeof c ||
                                                    c instanceof String
                                                )
                                                    if (e.indexOf(c) > -1)
                                                        o[l] = !1;
                                                    else if (
                                                        i.indexOf(o[l]) > -1
                                                    )
                                                        o[l] = !0;
                                                    else
                                                        try {
                                                            o[l] =
                                                                JSON.parse(c);
                                                        } catch (t) {
                                                            o[l] = c;
                                                        }
                                                else o[l] = c;
                                        }
                                        return (
                                            t instanceof Element &&
                                                (o.$trigger = t),
                                            o
                                        );
                                    },
                                    o = [],
                                    a = e.startIndex || 0,
                                    s = e.target || null,
                                    r =
                                        void 0 !==
                                            (e = x({}, e, i.openers.get(t)))
                                                .groupAll && e.groupAll,
                                    l =
                                        void 0 === e.groupAttr
                                            ? "data-fancybox"
                                            : e.groupAttr,
                                    c =
                                        l && s
                                            ? s.getAttribute("".concat(l))
                                            : "";
                                if (
                                    ((!s || c || r) &&
                                        (o = [].slice.call(
                                            document.querySelectorAll(t)
                                        )),
                                    s &&
                                        !r &&
                                        (o = c
                                            ? o.filter(function (t) {
                                                  return (
                                                      t.getAttribute(
                                                          "".concat(l)
                                                      ) === c
                                                  );
                                              })
                                            : [s]),
                                    !o.length)
                                )
                                    return !1;
                                var h = i.getInstance();
                                return (
                                    !(
                                        h && o.indexOf(h.options.$trigger) > -1
                                    ) &&
                                    ((a = s ? o.indexOf(s) : a),
                                    new i(
                                        (o = o.map(n)),
                                        x({}, e, { startIndex: a, $trigger: s })
                                    ))
                                );
                            },
                        },
                        {
                            key: "bind",
                            value: function (t) {
                                var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                function n() {
                                    document.body.addEventListener(
                                        "click",
                                        i.fromEvent,
                                        !1
                                    );
                                }
                                D &&
                                    (i.openers.size ||
                                        (/complete|interactive|loaded/.test(
                                            document.readyState
                                        )
                                            ? n()
                                            : document.addEventListener(
                                                  "DOMContentLoaded",
                                                  n
                                              )),
                                    i.openers.set(t, e));
                            },
                        },
                        {
                            key: "unbind",
                            value: function (t) {
                                i.openers.delete(t),
                                    i.openers.size || i.destroy();
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                for (var t; (t = i.getInstance()); )
                                    t.destroy();
                                (i.openers = new Map()),
                                    document.body.removeEventListener(
                                        "click",
                                        i.fromEvent,
                                        !1
                                    );
                            },
                        },
                        {
                            key: "getInstance",
                            value: function (t) {
                                return t
                                    ? ot[t]
                                    : Object.values(ot)
                                          .reverse()
                                          .find(function (t) {
                                              return (
                                                  ![
                                                      "closing",
                                                      "customClosing",
                                                      "destroy",
                                                  ].includes(t.state) && t
                                              );
                                          }) || null;
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                for (
                                    var t =
                                            !(
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                            ) || arguments[0],
                                        e = null;
                                    (e = i.getInstance());

                                )
                                    if ((e.close(), !t)) return;
                            },
                        },
                        {
                            key: "next",
                            value: function () {
                                var t = i.getInstance();
                                t && t.next();
                            },
                        },
                        {
                            key: "prev",
                            value: function () {
                                var t = i.getInstance();
                                t && t.prev();
                            },
                        },
                    ]
                ),
                i
            );
        })(L);
    (st.version = "4.0.16"),
        (st.defaults = nt),
        (st.openers = new Map()),
        (st.Plugins = it),
        st.bind("[data-fancybox]");
    for (
        var rt = 0, lt = Object.entries(st.Plugins || {});
        rt < lt.length;
        rt++
    ) {
        var ct = v(lt[rt], 2);
        ct[0];
        var ht = ct[1];
        "function" == typeof ht.create && ht.create(st);
    }
    (t.Carousel = N), (t.Fancybox = st), (t.Panzoom = O);
});

// smooth scrollbar
!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define([], e)
        : "object" == typeof exports
        ? (exports.Scrollbar = e())
        : (t.Scrollbar = e());
})(this, function () {
    return (function (t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t,
                    }),
                    2 & e && "string" != typeof t)
                )
                    for (var o in t)
                        n.d(
                            r,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 67))
        );
    })([
        function (t, e, n) {
            (function (e) {
                var n = function (t) {
                    return t && t.Math == Math && t;
                };
                t.exports =
                    n("object" == typeof globalThis && globalThis) ||
                    n("object" == typeof window && window) ||
                    n("object" == typeof self && self) ||
                    n("object" == typeof e && e) ||
                    Function("return this")();
            }.call(this, n(43)));
        },
        function (t, e, n) {
            var r = n(0),
                o = n(51),
                i = n(3),
                u = n(29),
                c = n(56),
                a = n(76),
                s = o("wks"),
                f = r.Symbol,
                l = a ? f : (f && f.withoutSetter) || u;
            t.exports = function (t) {
                return (
                    i(s, t) ||
                        (c && i(f, t)
                            ? (s[t] = f[t])
                            : (s[t] = l("Symbol." + t))),
                    s[t]
                );
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return "object" == typeof t
                    ? null !== t
                    : "function" == typeof t;
            };
        },
        function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e);
            };
        },
        function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        function (t, e, n) {
            var r = n(6),
                o = n(46),
                i = n(7),
                u = n(25),
                c = Object.defineProperty;
            e.f = r
                ? c
                : function (t, e, n) {
                      if ((i(t), (e = u(e, !0)), i(n), o))
                          try {
                              return c(t, e, n);
                          } catch (t) {}
                      if ("get" in n || "set" in n)
                          throw TypeError("Accessors not supported");
                      return "value" in n && (t[e] = n.value), t;
                  };
        },
        function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1]
                );
            });
        },
        function (t, e, n) {
            var r = n(2);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(String(t) + " is not an object");
                return t;
            };
        },
        function (t, e, n) {
            var r = n(6),
                o = n(5),
                i = n(14);
            t.exports = r
                ? function (t, e, n) {
                      return o.f(t, e, i(1, n));
                  }
                : function (t, e, n) {
                      return (t[e] = n), t;
                  };
        },
        function (t, e, n) {
            var r,
                o,
                i,
                u = n(50),
                c = n(0),
                a = n(2),
                s = n(8),
                f = n(3),
                l = n(27),
                p = n(16),
                h = c.WeakMap;
            if (u) {
                var d = new h(),
                    v = d.get,
                    y = d.has,
                    m = d.set;
                (r = function (t, e) {
                    return m.call(d, t, e), e;
                }),
                    (o = function (t) {
                        return v.call(d, t) || {};
                    }),
                    (i = function (t) {
                        return y.call(d, t);
                    });
            } else {
                var g = l("state");
                (p[g] = !0),
                    (r = function (t, e) {
                        return s(t, g, e), e;
                    }),
                    (o = function (t) {
                        return f(t, g) ? t[g] : {};
                    }),
                    (i = function (t) {
                        return f(t, g);
                    });
            }
            t.exports = {
                set: r,
                get: o,
                has: i,
                enforce: function (t) {
                    return i(t) ? o(t) : r(t, {});
                },
                getterFor: function (t) {
                    return function (e) {
                        var n;
                        if (!a(e) || (n = o(e)).type !== t)
                            throw TypeError(
                                "Incompatible receiver, " + t + " required"
                            );
                        return n;
                    };
                },
            };
        },
        function (t, e, n) {
            var r = n(0);
            t.exports = r;
        },
        function (t, e, n) {
            var r = n(0),
                o = n(8),
                i = n(3),
                u = n(26),
                c = n(48),
                a = n(9),
                s = a.get,
                f = a.enforce,
                l = String(String).split("String");
            (t.exports = function (t, e, n, c) {
                var a = !!c && !!c.unsafe,
                    s = !!c && !!c.enumerable,
                    p = !!c && !!c.noTargetGet;
                "function" == typeof n &&
                    ("string" != typeof e || i(n, "name") || o(n, "name", e),
                    (f(n).source = l.join("string" == typeof e ? e : ""))),
                    t !== r
                        ? (a ? !p && t[e] && (s = !0) : delete t[e],
                          s ? (t[e] = n) : o(t, e, n))
                        : s
                        ? (t[e] = n)
                        : u(e, n);
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && s(this).source) || c(this);
            });
        },
        function (t, e) {
            t.exports = {};
        },
        function (t, e, n) {
            var r = n(0),
                o = n(44).f,
                i = n(8),
                u = n(11),
                c = n(26),
                a = n(70),
                s = n(54);
            t.exports = function (t, e) {
                var n,
                    f,
                    l,
                    p,
                    h,
                    d = t.target,
                    v = t.global,
                    y = t.stat;
                if ((n = v ? r : y ? r[d] || c(d, {}) : (r[d] || {}).prototype))
                    for (f in e) {
                        if (
                            ((p = e[f]),
                            (l = t.noTargetGet
                                ? (h = o(n, f)) && h.value
                                : n[f]),
                            !s(v ? f : d + (y ? "." : "#") + f, t.forced) &&
                                void 0 !== l)
                        ) {
                            if (typeof p == typeof l) continue;
                            a(p, l);
                        }
                        (t.sham || (l && l.sham)) && i(p, "sham", !0),
                            u(n, f, p, t);
                    }
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e,
                };
            };
        },
        function (t, e, n) {
            var r = n(22),
                o = n(24);
            t.exports = function (t) {
                return r(o(t));
            };
        },
        function (t, e) {
            t.exports = {};
        },
        function (t, e, n) {
            var r = n(31),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
        },
        function (t, e, n) {
            var r = n(16),
                o = n(2),
                i = n(3),
                u = n(5).f,
                c = n(29),
                a = n(75),
                s = c("meta"),
                f = 0,
                l =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                p = function (t) {
                    u(t, s, { value: { objectID: "O" + ++f, weakData: {} } });
                },
                h = (t.exports = {
                    REQUIRED: !1,
                    fastKey: function (t, e) {
                        if (!o(t))
                            return "symbol" == typeof t
                                ? t
                                : ("string" == typeof t ? "S" : "P") + t;
                        if (!i(t, s)) {
                            if (!l(t)) return "F";
                            if (!e) return "E";
                            p(t);
                        }
                        return t[s].objectID;
                    },
                    getWeakData: function (t, e) {
                        if (!i(t, s)) {
                            if (!l(t)) return !0;
                            if (!e) return !1;
                            p(t);
                        }
                        return t[s].weakData;
                    },
                    onFreeze: function (t) {
                        return a && h.REQUIRED && l(t) && !i(t, s) && p(t), t;
                    },
                });
            r[s] = !0;
        },
        function (t, e, n) {
            var r = n(77);
            t.exports = function (t, e, n) {
                if ((r(t), void 0 === e)) return t;
                switch (n) {
                    case 0:
                        return function () {
                            return t.call(e);
                        };
                    case 1:
                        return function (n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function (n, r) {
                            return t.call(e, n, r);
                        };
                    case 3:
                        return function (n, r, o) {
                            return t.call(e, n, r, o);
                        };
                }
                return function () {
                    return t.apply(e, arguments);
                };
            };
        },
        function (t, e, n) {
            var r = n(24);
            t.exports = function (t) {
                return Object(r(t));
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(13),
                o = n(0),
                i = n(54),
                u = n(11),
                c = n(18),
                a = n(33),
                s = n(35),
                f = n(2),
                l = n(4),
                p = n(60),
                h = n(36),
                d = n(78);
            t.exports = function (t, e, n) {
                var v = -1 !== t.indexOf("Map"),
                    y = -1 !== t.indexOf("Weak"),
                    m = v ? "set" : "add",
                    g = o[t],
                    b = g && g.prototype,
                    x = g,
                    w = {},
                    S = function (t) {
                        var e = b[t];
                        u(
                            b,
                            t,
                            "add" == t
                                ? function (t) {
                                      return (
                                          e.call(this, 0 === t ? 0 : t), this
                                      );
                                  }
                                : "delete" == t
                                ? function (t) {
                                      return (
                                          !(y && !f(t)) &&
                                          e.call(this, 0 === t ? 0 : t)
                                      );
                                  }
                                : "get" == t
                                ? function (t) {
                                      return y && !f(t)
                                          ? void 0
                                          : e.call(this, 0 === t ? 0 : t);
                                  }
                                : "has" == t
                                ? function (t) {
                                      return (
                                          !(y && !f(t)) &&
                                          e.call(this, 0 === t ? 0 : t)
                                      );
                                  }
                                : function (t, n) {
                                      return (
                                          e.call(this, 0 === t ? 0 : t, n), this
                                      );
                                  }
                        );
                    };
                if (
                    i(
                        t,
                        "function" != typeof g ||
                            !(
                                y ||
                                (b.forEach &&
                                    !l(function () {
                                        new g().entries().next();
                                    }))
                            )
                    )
                )
                    (x = n.getConstructor(e, t, v, m)), (c.REQUIRED = !0);
                else if (i(t, !0)) {
                    var O = new x(),
                        _ = O[m](y ? {} : -0, 1) != O,
                        E = l(function () {
                            O.has(1);
                        }),
                        T = p(function (t) {
                            new g(t);
                        }),
                        A =
                            !y &&
                            l(function () {
                                for (var t = new g(), e = 5; e--; ) t[m](e, e);
                                return !t.has(-0);
                            });
                    T ||
                        (((x = e(function (e, n) {
                            s(e, x, t);
                            var r = d(new g(), e, x);
                            return null != n && a(n, r[m], r, v), r;
                        })).prototype = b),
                        (b.constructor = x)),
                        (E || A) && (S("delete"), S("has"), v && S("get")),
                        (A || _) && S(m),
                        y && b.clear && delete b.clear;
                }
                return (
                    (w[t] = x),
                    r({ global: !0, forced: x != g }, w),
                    h(x, t),
                    y || n.setStrong(x, t, v),
                    x
                );
            };
        },
        function (t, e, n) {
            var r = n(4),
                o = n(23),
                i = "".split;
            t.exports = r(function () {
                return !Object("z").propertyIsEnumerable(0);
            })
                ? function (t) {
                      return "String" == o(t) ? i.call(t, "") : Object(t);
                  }
                : Object;
        },
        function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1);
            };
        },
        function (t, e) {
            t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t;
            };
        },
        function (t, e, n) {
            var r = n(2);
            t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, o;
                if (
                    e &&
                    "function" == typeof (n = t.toString) &&
                    !r((o = n.call(t)))
                )
                    return o;
                if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t))))
                    return o;
                if (
                    !e &&
                    "function" == typeof (n = t.toString) &&
                    !r((o = n.call(t)))
                )
                    return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (t, e, n) {
            var r = n(0),
                o = n(8);
            t.exports = function (t, e) {
                try {
                    o(r, t, e);
                } catch (n) {
                    r[t] = e;
                }
                return e;
            };
        },
        function (t, e, n) {
            var r = n(51),
                o = n(29),
                i = r("keys");
            t.exports = function (t) {
                return i[t] || (i[t] = o(t));
            };
        },
        function (t, e) {
            t.exports = !1;
        },
        function (t, e) {
            var n = 0,
                r = Math.random();
            t.exports = function (t) {
                return (
                    "Symbol(" +
                    String(void 0 === t ? "" : t) +
                    ")_" +
                    (++n + r).toString(36)
                );
            };
        },
        function (t, e, n) {
            var r = n(10),
                o = n(0),
                i = function (t) {
                    return "function" == typeof t ? t : void 0;
                };
            t.exports = function (t, e) {
                return arguments.length < 2
                    ? i(r[t]) || i(o[t])
                    : (r[t] && r[t][e]) || (o[t] && o[t][e]);
            };
        },
        function (t, e) {
            var n = Math.ceil,
                r = Math.floor;
            t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
            };
        },
        function (t, e) {
            t.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
            ];
        },
        function (t, e, n) {
            var r = n(7),
                o = n(55),
                i = n(17),
                u = n(19),
                c = n(57),
                a = n(59),
                s = function (t, e) {
                    (this.stopped = t), (this.result = e);
                };
            (t.exports = function (t, e, n, f, l) {
                var p,
                    h,
                    d,
                    v,
                    y,
                    m,
                    g,
                    b = u(e, n, f ? 2 : 1);
                if (l) p = t;
                else {
                    if ("function" != typeof (h = c(t)))
                        throw TypeError("Target is not iterable");
                    if (o(h)) {
                        for (d = 0, v = i(t.length); v > d; d++)
                            if (
                                (y = f ? b(r((g = t[d]))[0], g[1]) : b(t[d])) &&
                                y instanceof s
                            )
                                return y;
                        return new s(!1);
                    }
                    p = h.call(t);
                }
                for (m = p.next; !(g = m.call(p)).done; )
                    if (
                        "object" == typeof (y = a(p, b, g.value, f)) &&
                        y &&
                        y instanceof s
                    )
                        return y;
                return new s(!1);
            }).stop = function (t) {
                return new s(!0, t);
            };
        },
        function (t, e, n) {
            var r = {};
            (r[n(1)("toStringTag")] = "z"),
                (t.exports = "[object z]" === String(r));
        },
        function (t, e) {
            t.exports = function (t, e, n) {
                if (!(t instanceof e))
                    throw TypeError(
                        "Incorrect " + (n ? n + " " : "") + "invocation"
                    );
                return t;
            };
        },
        function (t, e, n) {
            var r = n(5).f,
                o = n(3),
                i = n(1)("toStringTag");
            t.exports = function (t, e, n) {
                t &&
                    !o((t = n ? t : t.prototype), i) &&
                    r(t, i, { configurable: !0, value: e });
            };
        },
        function (t, e, n) {
            var r,
                o = n(7),
                i = n(80),
                u = n(32),
                c = n(16),
                a = n(81),
                s = n(47),
                f = n(27)("IE_PROTO"),
                l = function () {},
                p = function (t) {
                    return "<script>" + t + "</script>";
                },
                h = function () {
                    try {
                        r = document.domain && new ActiveXObject("htmlfile");
                    } catch (t) {}
                    h = r
                        ? (function (t) {
                              t.write(p("")), t.close();
                              var e = t.parentWindow.Object;
                              return (t = null), e;
                          })(r)
                        : (function () {
                              var t,
                                  e = s("iframe");
                              return (
                                  (e.style.display = "none"),
                                  a.appendChild(e),
                                  (e.src = String("javascript:")),
                                  (t = e.contentWindow.document).open(),
                                  t.write(p("document.F=Object")),
                                  t.close(),
                                  t.F
                              );
                          })();
                    for (var t = u.length; t--; ) delete h.prototype[u[t]];
                    return h();
                };
            (c[f] = !0),
                (t.exports =
                    Object.create ||
                    function (t, e) {
                        var n;
                        return (
                            null !== t
                                ? ((l.prototype = o(t)),
                                  (n = new l()),
                                  (l.prototype = null),
                                  (n[f] = t))
                                : (n = h()),
                            void 0 === e ? n : i(n, e)
                        );
                    });
        },
        function (t, e, n) {
            var r = n(11);
            t.exports = function (t, e, n) {
                for (var o in e) r(t, o, e[o], n);
                return t;
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(13),
                o = n(82),
                i = n(65),
                u = n(61),
                c = n(36),
                a = n(8),
                s = n(11),
                f = n(1),
                l = n(28),
                p = n(12),
                h = n(64),
                d = h.IteratorPrototype,
                v = h.BUGGY_SAFARI_ITERATORS,
                y = f("iterator"),
                m = function () {
                    return this;
                };
            t.exports = function (t, e, n, f, h, g, b) {
                o(n, e, f);
                var x,
                    w,
                    S,
                    O = function (t) {
                        if (t === h && j) return j;
                        if (!v && t in T) return T[t];
                        switch (t) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function () {
                                    return new n(this, t);
                                };
                        }
                        return function () {
                            return new n(this);
                        };
                    },
                    _ = e + " Iterator",
                    E = !1,
                    T = t.prototype,
                    A = T[y] || T["@@iterator"] || (h && T[h]),
                    j = (!v && A) || O(h),
                    P = ("Array" == e && T.entries) || A;
                if (
                    (P &&
                        ((x = i(P.call(new t()))),
                        d !== Object.prototype &&
                            x.next &&
                            (l ||
                                i(x) === d ||
                                (u
                                    ? u(x, d)
                                    : "function" != typeof x[y] && a(x, y, m)),
                            c(x, _, !0, !0),
                            l && (p[_] = m))),
                    "values" == h &&
                        A &&
                        "values" !== A.name &&
                        ((E = !0),
                        (j = function () {
                            return A.call(this);
                        })),
                    (l && !b) || T[y] === j || a(T, y, j),
                    (p[e] = j),
                    h)
                )
                    if (
                        ((w = {
                            values: O("values"),
                            keys: g ? j : O("keys"),
                            entries: O("entries"),
                        }),
                        b)
                    )
                        for (S in w) (!v && !E && S in T) || s(T, S, w[S]);
                    else r({ target: e, proto: !0, forced: v || E }, w);
                return w;
            };
        },
        function (t, e, n) {
            var r = n(34),
                o = n(11),
                i = n(85);
            r || o(Object.prototype, "toString", i, { unsafe: !0 });
        },
        function (t, e, n) {
            "use strict";
            var r = n(86).charAt,
                o = n(9),
                i = n(39),
                u = o.set,
                c = o.getterFor("String Iterator");
            i(
                String,
                "String",
                function (t) {
                    u(this, {
                        type: "String Iterator",
                        string: String(t),
                        index: 0,
                    });
                },
                function () {
                    var t,
                        e = c(this),
                        n = e.string,
                        o = e.index;
                    return o >= n.length
                        ? { value: void 0, done: !0 }
                        : ((t = r(n, o)),
                          (e.index += t.length),
                          { value: t, done: !1 });
                }
            );
        },
        function (t, e, n) {
            var r = n(0),
                o = n(87),
                i = n(88),
                u = n(8),
                c = n(1),
                a = c("iterator"),
                s = c("toStringTag"),
                f = i.values;
            for (var l in o) {
                var p = r[l],
                    h = p && p.prototype;
                if (h) {
                    if (h[a] !== f)
                        try {
                            u(h, a, f);
                        } catch (t) {
                            h[a] = f;
                        }
                    if ((h[s] || u(h, s, l), o[l]))
                        for (var d in i)
                            if (h[d] !== i[d])
                                try {
                                    u(h, d, i[d]);
                                } catch (t) {
                                    h[d] = i[d];
                                }
                }
            }
        },
        function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
        function (t, e, n) {
            var r = n(6),
                o = n(45),
                i = n(14),
                u = n(15),
                c = n(25),
                a = n(3),
                s = n(46),
                f = Object.getOwnPropertyDescriptor;
            e.f = r
                ? f
                : function (t, e) {
                      if (((t = u(t)), (e = c(e, !0)), s))
                          try {
                              return f(t, e);
                          } catch (t) {}
                      if (a(t, e)) return i(!o.f.call(t, e), t[e]);
                  };
        },
        function (t, e, n) {
            "use strict";
            var r = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !r.call({ 1: 2 }, 1);
            e.f = i
                ? function (t) {
                      var e = o(this, t);
                      return !!e && e.enumerable;
                  }
                : r;
        },
        function (t, e, n) {
            var r = n(6),
                o = n(4),
                i = n(47);
            t.exports =
                !r &&
                !o(function () {
                    return (
                        7 !=
                        Object.defineProperty(i("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (t, e, n) {
            var r = n(0),
                o = n(2),
                i = r.document,
                u = o(i) && o(i.createElement);
            t.exports = function (t) {
                return u ? i.createElement(t) : {};
            };
        },
        function (t, e, n) {
            var r = n(49),
                o = Function.toString;
            "function" != typeof r.inspectSource &&
                (r.inspectSource = function (t) {
                    return o.call(t);
                }),
                (t.exports = r.inspectSource);
        },
        function (t, e, n) {
            var r = n(0),
                o = n(26),
                i = r["__core-js_shared__"] || o("__core-js_shared__", {});
            t.exports = i;
        },
        function (t, e, n) {
            var r = n(0),
                o = n(48),
                i = r.WeakMap;
            t.exports = "function" == typeof i && /native code/.test(o(i));
        },
        function (t, e, n) {
            var r = n(28),
                o = n(49);
            (t.exports = function (t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {});
            })("versions", []).push({
                version: "3.6.4",
                mode: r ? "pure" : "global",
                copyright: "?? 2020 Denis Pushkarev (zloirock.ru)",
            });
        },
        function (t, e, n) {
            var r = n(3),
                o = n(15),
                i = n(73).indexOf,
                u = n(16);
            t.exports = function (t, e) {
                var n,
                    c = o(t),
                    a = 0,
                    s = [];
                for (n in c) !r(u, n) && r(c, n) && s.push(n);
                for (; e.length > a; )
                    r(c, (n = e[a++])) && (~i(s, n) || s.push(n));
                return s;
            };
        },
        function (t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        function (t, e, n) {
            var r = n(4),
                o = /#|\.prototype\./,
                i = function (t, e) {
                    var n = c[u(t)];
                    return (
                        n == s ||
                        (n != a && ("function" == typeof e ? r(e) : !!e))
                    );
                },
                u = (i.normalize = function (t) {
                    return String(t).replace(o, ".").toLowerCase();
                }),
                c = (i.data = {}),
                a = (i.NATIVE = "N"),
                s = (i.POLYFILL = "P");
            t.exports = i;
        },
        function (t, e, n) {
            var r = n(1),
                o = n(12),
                i = r("iterator"),
                u = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || u[i] === t);
            };
        },
        function (t, e, n) {
            var r = n(4);
            t.exports =
                !!Object.getOwnPropertySymbols &&
                !r(function () {
                    return !String(Symbol());
                });
        },
        function (t, e, n) {
            var r = n(58),
                o = n(12),
                i = n(1)("iterator");
            t.exports = function (t) {
                if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
            };
        },
        function (t, e, n) {
            var r = n(34),
                o = n(23),
                i = n(1)("toStringTag"),
                u =
                    "Arguments" ==
                    o(
                        (function () {
                            return arguments;
                        })()
                    );
            t.exports = r
                ? o
                : function (t) {
                      var e, n, r;
                      return void 0 === t
                          ? "Undefined"
                          : null === t
                          ? "Null"
                          : "string" ==
                            typeof (n = (function (t, e) {
                                try {
                                    return t[e];
                                } catch (t) {}
                            })((e = Object(t)), i))
                          ? n
                          : u
                          ? o(e)
                          : "Object" == (r = o(e)) &&
                            "function" == typeof e.callee
                          ? "Arguments"
                          : r;
                  };
        },
        function (t, e, n) {
            var r = n(7);
            t.exports = function (t, e, n, o) {
                try {
                    return o ? e(r(n)[0], n[1]) : e(n);
                } catch (e) {
                    var i = t.return;
                    throw (void 0 !== i && r(i.call(t)), e);
                }
            };
        },
        function (t, e, n) {
            var r = n(1)("iterator"),
                o = !1;
            try {
                var i = 0,
                    u = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            o = !0;
                        },
                    };
                (u[r] = function () {
                    return this;
                }),
                    Array.from(u, function () {
                        throw 2;
                    });
            } catch (t) {}
            t.exports = function (t, e) {
                if (!e && !o) return !1;
                var n = !1;
                try {
                    var i = {};
                    (i[r] = function () {
                        return {
                            next: function () {
                                return { done: (n = !0) };
                            },
                        };
                    }),
                        t(i);
                } catch (t) {}
                return n;
            };
        },
        function (t, e, n) {
            var r = n(7),
                o = n(79);
            t.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function () {
                          var t,
                              e = !1,
                              n = {};
                          try {
                              (t = Object.getOwnPropertyDescriptor(
                                  Object.prototype,
                                  "__proto__"
                              ).set).call(n, []),
                                  (e = n instanceof Array);
                          } catch (t) {}
                          return function (n, i) {
                              return (
                                  r(n),
                                  o(i),
                                  e ? t.call(n, i) : (n.__proto__ = i),
                                  n
                              );
                          };
                      })()
                    : void 0);
        },
        function (t, e, n) {
            "use strict";
            var r = n(5).f,
                o = n(37),
                i = n(38),
                u = n(19),
                c = n(35),
                a = n(33),
                s = n(39),
                f = n(84),
                l = n(6),
                p = n(18).fastKey,
                h = n(9),
                d = h.set,
                v = h.getterFor;
            t.exports = {
                getConstructor: function (t, e, n, s) {
                    var f = t(function (t, r) {
                            c(t, f, e),
                                d(t, {
                                    type: e,
                                    index: o(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0,
                                }),
                                l || (t.size = 0),
                                null != r && a(r, t[s], t, n);
                        }),
                        h = v(e),
                        y = function (t, e, n) {
                            var r,
                                o,
                                i = h(t),
                                u = m(t, e);
                            return (
                                u
                                    ? (u.value = n)
                                    : ((i.last = u =
                                          {
                                              index: (o = p(e, !0)),
                                              key: e,
                                              value: n,
                                              previous: (r = i.last),
                                              next: void 0,
                                              removed: !1,
                                          }),
                                      i.first || (i.first = u),
                                      r && (r.next = u),
                                      l ? i.size++ : t.size++,
                                      "F" !== o && (i.index[o] = u)),
                                t
                            );
                        },
                        m = function (t, e) {
                            var n,
                                r = h(t),
                                o = p(e);
                            if ("F" !== o) return r.index[o];
                            for (n = r.first; n; n = n.next)
                                if (n.key == e) return n;
                        };
                    return (
                        i(f.prototype, {
                            clear: function () {
                                for (
                                    var t = h(this), e = t.index, n = t.first;
                                    n;

                                )
                                    (n.removed = !0),
                                        n.previous &&
                                            (n.previous = n.previous.next =
                                                void 0),
                                        delete e[n.index],
                                        (n = n.next);
                                (t.first = t.last = void 0),
                                    l ? (t.size = 0) : (this.size = 0);
                            },
                            delete: function (t) {
                                var e = h(this),
                                    n = m(this, t);
                                if (n) {
                                    var r = n.next,
                                        o = n.previous;
                                    delete e.index[n.index],
                                        (n.removed = !0),
                                        o && (o.next = r),
                                        r && (r.previous = o),
                                        e.first == n && (e.first = r),
                                        e.last == n && (e.last = o),
                                        l ? e.size-- : this.size--;
                                }
                                return !!n;
                            },
                            forEach: function (t) {
                                for (
                                    var e,
                                        n = h(this),
                                        r = u(
                                            t,
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                            3
                                        );
                                    (e = e ? e.next : n.first);

                                )
                                    for (
                                        r(e.value, e.key, this);
                                        e && e.removed;

                                    )
                                        e = e.previous;
                            },
                            has: function (t) {
                                return !!m(this, t);
                            },
                        }),
                        i(
                            f.prototype,
                            n
                                ? {
                                      get: function (t) {
                                          var e = m(this, t);
                                          return e && e.value;
                                      },
                                      set: function (t, e) {
                                          return y(this, 0 === t ? 0 : t, e);
                                      },
                                  }
                                : {
                                      add: function (t) {
                                          return y(
                                              this,
                                              (t = 0 === t ? 0 : t),
                                              t
                                          );
                                      },
                                  }
                        ),
                        l &&
                            r(f.prototype, "size", {
                                get: function () {
                                    return h(this).size;
                                },
                            }),
                        f
                    );
                },
                setStrong: function (t, e, n) {
                    var r = e + " Iterator",
                        o = v(e),
                        i = v(r);
                    s(
                        t,
                        e,
                        function (t, e) {
                            d(this, {
                                type: r,
                                target: t,
                                state: o(t),
                                kind: e,
                                last: void 0,
                            });
                        },
                        function () {
                            for (
                                var t = i(this), e = t.kind, n = t.last;
                                n && n.removed;

                            )
                                n = n.previous;
                            return t.target &&
                                (t.last = n = n ? n.next : t.state.first)
                                ? "keys" == e
                                    ? { value: n.key, done: !1 }
                                    : "values" == e
                                    ? { value: n.value, done: !1 }
                                    : { value: [n.key, n.value], done: !1 }
                                : ((t.target = void 0),
                                  { value: void 0, done: !0 });
                        },
                        n ? "entries" : "values",
                        !n,
                        !0
                    ),
                        f(e);
                },
            };
        },
        function (t, e, n) {
            var r = n(52),
                o = n(32);
            t.exports =
                Object.keys ||
                function (t) {
                    return r(t, o);
                };
        },
        function (t, e, n) {
            "use strict";
            var r,
                o,
                i,
                u = n(65),
                c = n(8),
                a = n(3),
                s = n(1),
                f = n(28),
                l = s("iterator"),
                p = !1;
            [].keys &&
                ("next" in (i = [].keys())
                    ? (o = u(u(i))) !== Object.prototype && (r = o)
                    : (p = !0)),
                null == r && (r = {}),
                f ||
                    a(r, l) ||
                    c(r, l, function () {
                        return this;
                    }),
                (t.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: p,
                });
        },
        function (t, e, n) {
            var r = n(3),
                o = n(20),
                i = n(27),
                u = n(83),
                c = i("IE_PROTO"),
                a = Object.prototype;
            t.exports = u
                ? Object.getPrototypeOf
                : function (t) {
                      return (
                          (t = o(t)),
                          r(t, c)
                              ? t[c]
                              : "function" == typeof t.constructor &&
                                t instanceof t.constructor
                              ? t.constructor.prototype
                              : t instanceof Object
                              ? a
                              : null
                      );
                  };
        },
        function (t, e, n) {
            "use strict";
            (function (t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.a = n;
            }.call(this, n(43)));
        },
        function (t, e, n) {
            t.exports = n(105);
        },
        function (t, e, n) {
            n(69), n(40), n(41), n(42);
            var r = n(10);
            t.exports = r.Map;
        },
        function (t, e, n) {
            "use strict";
            var r = n(21),
                o = n(62);
            t.exports = r(
                "Map",
                function (t) {
                    return function () {
                        return t(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                o
            );
        },
        function (t, e, n) {
            var r = n(3),
                o = n(71),
                i = n(44),
                u = n(5);
            t.exports = function (t, e) {
                for (var n = o(e), c = u.f, a = i.f, s = 0; s < n.length; s++) {
                    var f = n[s];
                    r(t, f) || c(t, f, a(e, f));
                }
            };
        },
        function (t, e, n) {
            var r = n(30),
                o = n(72),
                i = n(53),
                u = n(7);
            t.exports =
                r("Reflect", "ownKeys") ||
                function (t) {
                    var e = o.f(u(t)),
                        n = i.f;
                    return n ? e.concat(n(t)) : e;
                };
        },
        function (t, e, n) {
            var r = n(52),
                o = n(32).concat("length", "prototype");
            e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                    return r(t, o);
                };
        },
        function (t, e, n) {
            var r = n(15),
                o = n(17),
                i = n(74),
                u = function (t) {
                    return function (e, n, u) {
                        var c,
                            a = r(e),
                            s = o(a.length),
                            f = i(u, s);
                        if (t && n != n) {
                            for (; s > f; ) if ((c = a[f++]) != c) return !0;
                        } else
                            for (; s > f; f++)
                                if ((t || f in a) && a[f] === n)
                                    return t || f || 0;
                        return !t && -1;
                    };
                };
            t.exports = { includes: u(!0), indexOf: u(!1) };
        },
        function (t, e, n) {
            var r = n(31),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, e) {
                var n = r(t);
                return n < 0 ? o(n + e, 0) : i(n, e);
            };
        },
        function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
                return Object.isExtensible(Object.preventExtensions({}));
            });
        },
        function (t, e, n) {
            var r = n(56);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        function (t, e) {
            t.exports = function (t) {
                if ("function" != typeof t)
                    throw TypeError(String(t) + " is not a function");
                return t;
            };
        },
        function (t, e, n) {
            var r = n(2),
                o = n(61);
            t.exports = function (t, e, n) {
                var i, u;
                return (
                    o &&
                        "function" == typeof (i = e.constructor) &&
                        i !== n &&
                        r((u = i.prototype)) &&
                        u !== n.prototype &&
                        o(t, u),
                    t
                );
            };
        },
        function (t, e, n) {
            var r = n(2);
            t.exports = function (t) {
                if (!r(t) && null !== t)
                    throw TypeError(
                        "Can't set " + String(t) + " as a prototype"
                    );
                return t;
            };
        },
        function (t, e, n) {
            var r = n(6),
                o = n(5),
                i = n(7),
                u = n(63);
            t.exports = r
                ? Object.defineProperties
                : function (t, e) {
                      i(t);
                      for (var n, r = u(e), c = r.length, a = 0; c > a; )
                          o.f(t, (n = r[a++]), e[n]);
                      return t;
                  };
        },
        function (t, e, n) {
            var r = n(30);
            t.exports = r("document", "documentElement");
        },
        function (t, e, n) {
            "use strict";
            var r = n(64).IteratorPrototype,
                o = n(37),
                i = n(14),
                u = n(36),
                c = n(12),
                a = function () {
                    return this;
                };
            t.exports = function (t, e, n) {
                var s = e + " Iterator";
                return (
                    (t.prototype = o(r, { next: i(1, n) })),
                    u(t, s, !1, !0),
                    (c[s] = a),
                    t
                );
            };
        },
        function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
                function t() {}
                return (
                    (t.prototype.constructor = null),
                    Object.getPrototypeOf(new t()) !== t.prototype
                );
            });
        },
        function (t, e, n) {
            "use strict";
            var r = n(30),
                o = n(5),
                i = n(1),
                u = n(6),
                c = i("species");
            t.exports = function (t) {
                var e = r(t),
                    n = o.f;
                u &&
                    e &&
                    !e[c] &&
                    n(e, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(34),
                o = n(58);
            t.exports = r
                ? {}.toString
                : function () {
                      return "[object " + o(this) + "]";
                  };
        },
        function (t, e, n) {
            var r = n(31),
                o = n(24),
                i = function (t) {
                    return function (e, n) {
                        var i,
                            u,
                            c = String(o(e)),
                            a = r(n),
                            s = c.length;
                        return a < 0 || a >= s
                            ? t
                                ? ""
                                : void 0
                            : (i = c.charCodeAt(a)) < 55296 ||
                              i > 56319 ||
                              a + 1 === s ||
                              (u = c.charCodeAt(a + 1)) < 56320 ||
                              u > 57343
                            ? t
                                ? c.charAt(a)
                                : i
                            : t
                            ? c.slice(a, a + 2)
                            : u - 56320 + ((i - 55296) << 10) + 65536;
                    };
                };
            t.exports = { codeAt: i(!1), charAt: i(!0) };
        },
        function (t, e) {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0,
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(15),
                o = n(89),
                i = n(12),
                u = n(9),
                c = n(39),
                a = u.set,
                s = u.getterFor("Array Iterator");
            (t.exports = c(
                Array,
                "Array",
                function (t, e) {
                    a(this, {
                        type: "Array Iterator",
                        target: r(t),
                        index: 0,
                        kind: e,
                    });
                },
                function () {
                    var t = s(this),
                        e = t.target,
                        n = t.kind,
                        r = t.index++;
                    return !e || r >= e.length
                        ? ((t.target = void 0), { value: void 0, done: !0 })
                        : "keys" == n
                        ? { value: r, done: !1 }
                        : "values" == n
                        ? { value: e[r], done: !1 }
                        : { value: [r, e[r]], done: !1 };
                },
                "values"
            )),
                (i.Arguments = i.Array),
                o("keys"),
                o("values"),
                o("entries");
        },
        function (t, e, n) {
            var r = n(1),
                o = n(37),
                i = n(5),
                u = r("unscopables"),
                c = Array.prototype;
            null == c[u] && i.f(c, u, { configurable: !0, value: o(null) }),
                (t.exports = function (t) {
                    c[u][t] = !0;
                });
        },
        function (t, e, n) {
            n(91), n(40), n(41), n(42);
            var r = n(10);
            t.exports = r.Set;
        },
        function (t, e, n) {
            "use strict";
            var r = n(21),
                o = n(62);
            t.exports = r(
                "Set",
                function (t) {
                    return function () {
                        return t(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                o
            );
        },
        function (t, e, n) {
            n(40), n(93), n(42);
            var r = n(10);
            t.exports = r.WeakMap;
        },
        function (t, e, n) {
            "use strict";
            var r,
                o = n(0),
                i = n(38),
                u = n(18),
                c = n(21),
                a = n(94),
                s = n(2),
                f = n(9).enforce,
                l = n(50),
                p = !o.ActiveXObject && "ActiveXObject" in o,
                h = Object.isExtensible,
                d = function (t) {
                    return function () {
                        return t(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                v = (t.exports = c("WeakMap", d, a));
            if (l && p) {
                (r = a.getConstructor(d, "WeakMap", !0)), (u.REQUIRED = !0);
                var y = v.prototype,
                    m = y.delete,
                    g = y.has,
                    b = y.get,
                    x = y.set;
                i(y, {
                    delete: function (t) {
                        if (s(t) && !h(t)) {
                            var e = f(this);
                            return (
                                e.frozen || (e.frozen = new r()),
                                m.call(this, t) || e.frozen.delete(t)
                            );
                        }
                        return m.call(this, t);
                    },
                    has: function (t) {
                        if (s(t) && !h(t)) {
                            var e = f(this);
                            return (
                                e.frozen || (e.frozen = new r()),
                                g.call(this, t) || e.frozen.has(t)
                            );
                        }
                        return g.call(this, t);
                    },
                    get: function (t) {
                        if (s(t) && !h(t)) {
                            var e = f(this);
                            return (
                                e.frozen || (e.frozen = new r()),
                                g.call(this, t)
                                    ? b.call(this, t)
                                    : e.frozen.get(t)
                            );
                        }
                        return b.call(this, t);
                    },
                    set: function (t, e) {
                        if (s(t) && !h(t)) {
                            var n = f(this);
                            n.frozen || (n.frozen = new r()),
                                g.call(this, t)
                                    ? x.call(this, t, e)
                                    : n.frozen.set(t, e);
                        } else x.call(this, t, e);
                        return this;
                    },
                });
            }
        },
        function (t, e, n) {
            "use strict";
            var r = n(38),
                o = n(18).getWeakData,
                i = n(7),
                u = n(2),
                c = n(35),
                a = n(33),
                s = n(95),
                f = n(3),
                l = n(9),
                p = l.set,
                h = l.getterFor,
                d = s.find,
                v = s.findIndex,
                y = 0,
                m = function (t) {
                    return t.frozen || (t.frozen = new g());
                },
                g = function () {
                    this.entries = [];
                },
                b = function (t, e) {
                    return d(t.entries, function (t) {
                        return t[0] === e;
                    });
                };
            (g.prototype = {
                get: function (t) {
                    var e = b(this, t);
                    if (e) return e[1];
                },
                has: function (t) {
                    return !!b(this, t);
                },
                set: function (t, e) {
                    var n = b(this, t);
                    n ? (n[1] = e) : this.entries.push([t, e]);
                },
                delete: function (t) {
                    var e = v(this.entries, function (e) {
                        return e[0] === t;
                    });
                    return ~e && this.entries.splice(e, 1), !!~e;
                },
            }),
                (t.exports = {
                    getConstructor: function (t, e, n, s) {
                        var l = t(function (t, r) {
                                c(t, l, e),
                                    p(t, { type: e, id: y++, frozen: void 0 }),
                                    null != r && a(r, t[s], t, n);
                            }),
                            d = h(e),
                            v = function (t, e, n) {
                                var r = d(t),
                                    u = o(i(e), !0);
                                return (
                                    !0 === u ? m(r).set(e, n) : (u[r.id] = n), t
                                );
                            };
                        return (
                            r(l.prototype, {
                                delete: function (t) {
                                    var e = d(this);
                                    if (!u(t)) return !1;
                                    var n = o(t);
                                    return !0 === n
                                        ? m(e).delete(t)
                                        : n && f(n, e.id) && delete n[e.id];
                                },
                                has: function (t) {
                                    var e = d(this);
                                    if (!u(t)) return !1;
                                    var n = o(t);
                                    return !0 === n
                                        ? m(e).has(t)
                                        : n && f(n, e.id);
                                },
                            }),
                            r(
                                l.prototype,
                                n
                                    ? {
                                          get: function (t) {
                                              var e = d(this);
                                              if (u(t)) {
                                                  var n = o(t);
                                                  return !0 === n
                                                      ? m(e).get(t)
                                                      : n
                                                      ? n[e.id]
                                                      : void 0;
                                              }
                                          },
                                          set: function (t, e) {
                                              return v(this, t, e);
                                          },
                                      }
                                    : {
                                          add: function (t) {
                                              return v(this, t, !0);
                                          },
                                      }
                            ),
                            l
                        );
                    },
                });
        },
        function (t, e, n) {
            var r = n(19),
                o = n(22),
                i = n(20),
                u = n(17),
                c = n(96),
                a = [].push,
                s = function (t) {
                    var e = 1 == t,
                        n = 2 == t,
                        s = 3 == t,
                        f = 4 == t,
                        l = 6 == t,
                        p = 5 == t || l;
                    return function (h, d, v, y) {
                        for (
                            var m,
                                g,
                                b = i(h),
                                x = o(b),
                                w = r(d, v, 3),
                                S = u(x.length),
                                O = 0,
                                _ = y || c,
                                E = e ? _(h, S) : n ? _(h, 0) : void 0;
                            S > O;
                            O++
                        )
                            if ((p || O in x) && ((g = w((m = x[O]), O, b)), t))
                                if (e) E[O] = g;
                                else if (g)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return m;
                                        case 6:
                                            return O;
                                        case 2:
                                            a.call(E, m);
                                    }
                                else if (f) return !1;
                        return l ? -1 : s || f ? f : E;
                    };
                };
            t.exports = {
                forEach: s(0),
                map: s(1),
                filter: s(2),
                some: s(3),
                every: s(4),
                find: s(5),
                findIndex: s(6),
            };
        },
        function (t, e, n) {
            var r = n(2),
                o = n(97),
                i = n(1)("species");
            t.exports = function (t, e) {
                var n;
                return (
                    o(t) &&
                        ("function" != typeof (n = t.constructor) ||
                        (n !== Array && !o(n.prototype))
                            ? r(n) && null === (n = n[i]) && (n = void 0)
                            : (n = void 0)),
                    new (void 0 === n ? Array : n)(0 === e ? 0 : e)
                );
            };
        },
        function (t, e, n) {
            var r = n(23);
            t.exports =
                Array.isArray ||
                function (t) {
                    return "Array" == r(t);
                };
        },
        function (t, e, n) {
            n(41), n(99);
            var r = n(10);
            t.exports = r.Array.from;
        },
        function (t, e, n) {
            var r = n(13),
                o = n(100);
            r(
                {
                    target: "Array",
                    stat: !0,
                    forced: !n(60)(function (t) {
                        Array.from(t);
                    }),
                },
                { from: o }
            );
        },
        function (t, e, n) {
            "use strict";
            var r = n(19),
                o = n(20),
                i = n(59),
                u = n(55),
                c = n(17),
                a = n(101),
                s = n(57);
            t.exports = function (t) {
                var e,
                    n,
                    f,
                    l,
                    p,
                    h,
                    d = o(t),
                    v = "function" == typeof this ? this : Array,
                    y = arguments.length,
                    m = y > 1 ? arguments[1] : void 0,
                    g = void 0 !== m,
                    b = s(d),
                    x = 0;
                if (
                    (g && (m = r(m, y > 2 ? arguments[2] : void 0, 2)),
                    null == b || (v == Array && u(b)))
                )
                    for (n = new v((e = c(d.length))); e > x; x++)
                        (h = g ? m(d[x], x) : d[x]), a(n, x, h);
                else
                    for (
                        p = (l = b.call(d)).next, n = new v();
                        !(f = p.call(l)).done;
                        x++
                    )
                        (h = g ? i(l, m, [f.value, x], !0) : f.value),
                            a(n, x, h);
                return (n.length = x), n;
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(25),
                o = n(5),
                i = n(14);
            t.exports = function (t, e, n) {
                var u = r(e);
                u in t ? o.f(t, u, i(0, n)) : (t[u] = n);
            };
        },
        function (t, e, n) {
            n(103);
            var r = n(10);
            t.exports = r.Object.assign;
        },
        function (t, e, n) {
            var r = n(13),
                o = n(104);
            r(
                { target: "Object", stat: !0, forced: Object.assign !== o },
                { assign: o }
            );
        },
        function (t, e, n) {
            "use strict";
            var r = n(6),
                o = n(4),
                i = n(63),
                u = n(53),
                c = n(45),
                a = n(20),
                s = n(22),
                f = Object.assign,
                l = Object.defineProperty;
            t.exports =
                !f ||
                o(function () {
                    if (
                        r &&
                        1 !==
                            f(
                                { b: 1 },
                                f(
                                    l({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            l(this, "b", {
                                                value: 3,
                                                enumerable: !1,
                                            });
                                        },
                                    }),
                                    { b: 2 }
                                )
                            ).b
                    )
                        return !0;
                    var t = {},
                        e = {},
                        n = Symbol();
                    return (
                        (t[n] = 7),
                        "abcdefghijklmnopqrst".split("").forEach(function (t) {
                            e[t] = t;
                        }),
                        7 != f({}, t)[n] ||
                            "abcdefghijklmnopqrst" != i(f({}, e)).join("")
                    );
                })
                    ? function (t, e) {
                          for (
                              var n = a(t),
                                  o = arguments.length,
                                  f = 1,
                                  l = u.f,
                                  p = c.f;
                              o > f;

                          )
                              for (
                                  var h,
                                      d = s(arguments[f++]),
                                      v = l ? i(d).concat(l(d)) : i(d),
                                      y = v.length,
                                      m = 0;
                                  y > m;

                              )
                                  (h = v[m++]),
                                      (r && !p.call(d, h)) || (n[h] = d[h]);
                          return n;
                      }
                    : f;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var r = {};
            n.r(r),
                n.d(r, "keyboardHandler", function () {
                    return ot;
                }),
                n.d(r, "mouseHandler", function () {
                    return it;
                }),
                n.d(r, "resizeHandler", function () {
                    return ut;
                }),
                n.d(r, "selectHandler", function () {
                    return ct;
                }),
                n.d(r, "touchHandler", function () {
                    return at;
                }),
                n.d(r, "wheelHandler", function () {
                    return st;
                });
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
            var o = function (t, e) {
                    return (o =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n]);
                        })(t, e);
                },
                i = function () {
                    return (i =
                        Object.assign ||
                        function (t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        o
                                    ) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
            function u(t, e, n, r) {
                var o,
                    i = arguments.length,
                    u =
                        i < 3
                            ? e
                            : null === r
                            ? (r = Object.getOwnPropertyDescriptor(e, n))
                            : r;
                if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                )
                    u = Reflect.decorate(t, e, n, r);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (o = t[c]) &&
                            (u =
                                (i < 3 ? o(u) : i > 3 ? o(e, n, u) : o(e, n)) ||
                                u);
                return i > 3 && u && Object.defineProperty(e, n, u), u;
            }
            n(68), n(90), n(92), n(98), n(102);
            var c = /\s/,
                a = /^\s+/,
                s = function (t) {
                    return t
                        ? t
                              .slice(
                                  0,
                                  (function (t) {
                                      for (
                                          var e = t.length;
                                          e-- && c.test(t.charAt(e));

                                      );
                                      return e;
                                  })(t) + 1
                              )
                              .replace(a, "")
                        : t;
                },
                f = function (t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e);
                },
                l = n(66),
                p =
                    "object" == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                h = l.a || p || Function("return this")(),
                d = h.Symbol,
                v = Object.prototype,
                y = v.hasOwnProperty,
                m = v.toString,
                g = d ? d.toStringTag : void 0,
                b = Object.prototype.toString,
                x = d ? d.toStringTag : void 0,
                w = function (t) {
                    return null == t
                        ? void 0 === t
                            ? "[object Undefined]"
                            : "[object Null]"
                        : x && x in Object(t)
                        ? (function (t) {
                              var e = y.call(t, g),
                                  n = t[g];
                              try {
                                  t[g] = void 0;
                                  var r = !0;
                              } catch (t) {}
                              var o = m.call(t);
                              return r && (e ? (t[g] = n) : delete t[g]), o;
                          })(t)
                        : (function (t) {
                              return b.call(t);
                          })(t);
                },
                S = /^[-+]0x[0-9a-f]+$/i,
                O = /^0b[01]+$/i,
                _ = /^0o[0-7]+$/i,
                E = parseInt,
                T = function (t) {
                    if ("number" == typeof t) return t;
                    if (
                        (function (t) {
                            return (
                                "symbol" == typeof t ||
                                ((function (t) {
                                    return null != t && "object" == typeof t;
                                })(t) &&
                                    "[object Symbol]" == w(t))
                            );
                        })(t)
                    )
                        return NaN;
                    if (f(t)) {
                        var e =
                            "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = f(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = s(t);
                    var n = O.test(t);
                    return n || _.test(t)
                        ? E(t.slice(2), n ? 2 : 8)
                        : S.test(t)
                        ? NaN
                        : +t;
                },
                A = function (t, e, n) {
                    return (
                        void 0 === n && ((n = e), (e = void 0)),
                        void 0 !== n && (n = (n = T(n)) == n ? n : 0),
                        void 0 !== e && (e = (e = T(e)) == e ? e : 0),
                        (function (t, e, n) {
                            return (
                                t == t &&
                                    (void 0 !== n && (t = t <= n ? t : n),
                                    void 0 !== e && (t = t >= e ? t : e)),
                                t
                            );
                        })(T(t), e, n)
                    );
                };
            function j(t, e) {
                return (
                    void 0 === t && (t = -1 / 0),
                    void 0 === e && (e = 1 / 0),
                    function (n, r) {
                        var o = "_" + r;
                        Object.defineProperty(n, r, {
                            get: function () {
                                return this[o];
                            },
                            set: function (n) {
                                Object.defineProperty(this, o, {
                                    value: A(n, t, e),
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                });
                            },
                            enumerable: !0,
                            configurable: !0,
                        });
                    }
                );
            }
            function P(t, e) {
                var n = "_" + e;
                Object.defineProperty(t, e, {
                    get: function () {
                        return this[n];
                    },
                    set: function (t) {
                        Object.defineProperty(this, n, {
                            value: !!t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        });
                    },
                    enumerable: !0,
                    configurable: !0,
                });
            }
            var M = function () {
                    return h.Date.now();
                },
                k = Math.max,
                z = Math.min,
                D = function (t, e, n) {
                    var r,
                        o,
                        i,
                        u,
                        c,
                        a,
                        s = 0,
                        l = !1,
                        p = !1,
                        h = !0;
                    if ("function" != typeof t)
                        throw new TypeError("Expected a function");
                    function d(e) {
                        var n = r,
                            i = o;
                        return (r = o = void 0), (s = e), (u = t.apply(i, n));
                    }
                    function v(t) {
                        var n = t - a;
                        return (
                            void 0 === a || n >= e || n < 0 || (p && t - s >= i)
                        );
                    }
                    function y() {
                        var t = M();
                        if (v(t)) return m(t);
                        c = setTimeout(
                            y,
                            (function (t) {
                                var n = e - (t - a);
                                return p ? z(n, i - (t - s)) : n;
                            })(t)
                        );
                    }
                    function m(t) {
                        return (
                            (c = void 0), h && r ? d(t) : ((r = o = void 0), u)
                        );
                    }
                    function g() {
                        var t = M(),
                            n = v(t);
                        if (((r = arguments), (o = this), (a = t), n)) {
                            if (void 0 === c)
                                return (function (t) {
                                    return (
                                        (s = t),
                                        (c = setTimeout(y, e)),
                                        l ? d(t) : u
                                    );
                                })(a);
                            if (p)
                                return (
                                    clearTimeout(c),
                                    (c = setTimeout(y, e)),
                                    d(a)
                                );
                        }
                        return void 0 === c && (c = setTimeout(y, e)), u;
                    }
                    return (
                        (e = T(e) || 0),
                        f(n) &&
                            ((l = !!n.leading),
                            (i = (p = "maxWait" in n)
                                ? k(T(n.maxWait) || 0, e)
                                : i),
                            (h = "trailing" in n ? !!n.trailing : h)),
                        (g.cancel = function () {
                            void 0 !== c && clearTimeout(c),
                                (s = 0),
                                (r = a = o = c = void 0);
                        }),
                        (g.flush = function () {
                            return void 0 === c ? u : m(M());
                        }),
                        g
                    );
                };
            function L() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return function (e, n, r) {
                    var o = r.value;
                    return {
                        get: function () {
                            return (
                                this.hasOwnProperty(n) ||
                                    Object.defineProperty(this, n, {
                                        value: D.apply(
                                            void 0,
                                            (function () {
                                                for (
                                                    var t = 0,
                                                        e = 0,
                                                        n = arguments.length;
                                                    e < n;
                                                    e++
                                                )
                                                    t += arguments[e].length;
                                                var r = Array(t),
                                                    o = 0;
                                                for (e = 0; e < n; e++)
                                                    for (
                                                        var i = arguments[e],
                                                            u = 0,
                                                            c = i.length;
                                                        u < c;
                                                        u++, o++
                                                    )
                                                        r[o] = i[u];
                                                return r;
                                            })([o], t)
                                        ),
                                    }),
                                this[n]
                            );
                        },
                    };
                };
            }
            var I,
                C = (function () {
                    function t(t) {
                        var e = this;
                        void 0 === t && (t = {}),
                            (this.damping = 0.1),
                            (this.thumbMinSize = 20),
                            (this.renderByPixels = !0),
                            (this.alwaysShowTracks = !1),
                            (this.continuousScrolling = !0),
                            (this.delegateTo = null),
                            (this.plugins = {}),
                            Object.keys(t).forEach(function (n) {
                                e[n] = t[n];
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, "wheelEventTarget", {
                            get: function () {
                                return this.delegateTo;
                            },
                            set: function (t) {
                                console.warn(
                                    "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
                                ),
                                    (this.delegateTo = t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        u([j(0, 1)], t.prototype, "damping", void 0),
                        u([j(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
                        u([P], t.prototype, "renderByPixels", void 0),
                        u([P], t.prototype, "alwaysShowTracks", void 0),
                        u([P], t.prototype, "continuousScrolling", void 0),
                        t
                    );
                })(),
                N = new WeakMap();
            function R() {
                if (void 0 !== I) return I;
                var t = !1;
                try {
                    var e = function () {},
                        n = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0;
                            },
                        });
                    window.addEventListener("testPassive", e, n),
                        window.removeEventListener("testPassive", e, n);
                } catch (t) {}
                return (I = !!t && { passive: !1 });
            }
            function F(t) {
                var e = N.get(t) || [];
                return (
                    N.set(t, e),
                    function (t, n, r) {
                        function o(t) {
                            t.defaultPrevented || r(t);
                        }
                        n.split(/\s+/g).forEach(function (n) {
                            e.push({ elem: t, eventName: n, handler: o }),
                                t.addEventListener(n, o, R());
                        });
                    }
                );
            }
            function H(t) {
                var e = (function (t) {
                    return t.touches ? t.touches[t.touches.length - 1] : t;
                })(t);
                return { x: e.clientX, y: e.clientY };
            }
            function W(t, e) {
                return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                        return t === e;
                    })
                );
            }
            var B = ["webkit", "moz", "ms", "o"],
                G = new RegExp("^-(?!(?:" + B.join("|") + ")-)");
            function U(t, e) {
                (e = (function (t) {
                    var e = {};
                    return (
                        Object.keys(t).forEach(function (n) {
                            if (G.test(n)) {
                                var r = t[n];
                                (n = n.replace(/^-/, "")),
                                    (e[n] = r),
                                    B.forEach(function (t) {
                                        e["-" + t + "-" + n] = r;
                                    });
                            } else e[n] = t[n];
                        }),
                        e
                    );
                })(e)),
                    Object.keys(e).forEach(function (n) {
                        var r = n
                            .replace(/^-/, "")
                            .replace(/-([a-z])/g, function (t, e) {
                                return e.toUpperCase();
                            });
                        t.style[r] = e[n];
                    });
            }
            var X,
                V = (function () {
                    function t(t) {
                        (this.updateTime = Date.now()),
                            (this.delta = { x: 0, y: 0 }),
                            (this.velocity = { x: 0, y: 0 }),
                            (this.lastPosition = { x: 0, y: 0 }),
                            (this.lastPosition = H(t));
                    }
                    return (
                        (t.prototype.update = function (t) {
                            var e = this.velocity,
                                n = this.updateTime,
                                r = this.lastPosition,
                                o = Date.now(),
                                i = H(t),
                                u = { x: -(i.x - r.x), y: -(i.y - r.y) },
                                c = o - n || 16,
                                a = (u.x / c) * 16,
                                s = (u.y / c) * 16;
                            (e.x = 0.9 * a + 0.1 * e.x),
                                (e.y = 0.9 * s + 0.1 * e.y),
                                (this.delta = u),
                                (this.updateTime = o),
                                (this.lastPosition = i);
                        }),
                        t
                    );
                })(),
                Y = (function () {
                    function t() {
                        this._touchList = {};
                    }
                    return (
                        Object.defineProperty(t.prototype, "_primitiveValue", {
                            get: function () {
                                return { x: 0, y: 0 };
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.isActive = function () {
                            return void 0 !== this._activeTouchID;
                        }),
                        (t.prototype.getDelta = function () {
                            var t = this._getActiveTracker();
                            return t ? i({}, t.delta) : this._primitiveValue;
                        }),
                        (t.prototype.getVelocity = function () {
                            var t = this._getActiveTracker();
                            return t ? i({}, t.velocity) : this._primitiveValue;
                        }),
                        (t.prototype.track = function (t) {
                            var e = this,
                                n = t.targetTouches;
                            return (
                                Array.from(n).forEach(function (t) {
                                    e._add(t);
                                }),
                                this._touchList
                            );
                        }),
                        (t.prototype.update = function (t) {
                            var e = this,
                                n = t.touches,
                                r = t.changedTouches;
                            return (
                                Array.from(n).forEach(function (t) {
                                    e._renew(t);
                                }),
                                this._setActiveID(r),
                                this._touchList
                            );
                        }),
                        (t.prototype.release = function (t) {
                            var e = this;
                            delete this._activeTouchID,
                                Array.from(t.changedTouches).forEach(function (
                                    t
                                ) {
                                    e._delete(t);
                                });
                        }),
                        (t.prototype._add = function (t) {
                            if (!this._has(t)) {
                                var e = new V(t);
                                this._touchList[t.identifier] = e;
                            }
                        }),
                        (t.prototype._renew = function (t) {
                            this._has(t) &&
                                this._touchList[t.identifier].update(t);
                        }),
                        (t.prototype._delete = function (t) {
                            delete this._touchList[t.identifier];
                        }),
                        (t.prototype._has = function (t) {
                            return this._touchList.hasOwnProperty(t.identifier);
                        }),
                        (t.prototype._setActiveID = function (t) {
                            this._activeTouchID = t[t.length - 1].identifier;
                        }),
                        (t.prototype._getActiveTracker = function () {
                            return this._touchList[this._activeTouchID];
                        }),
                        t
                    );
                })();
            !(function (t) {
                (t.X = "x"), (t.Y = "y");
            })(X || (X = {}));
            var q = (function () {
                    function t(t, e) {
                        void 0 === e && (e = 0),
                            (this._direction = t),
                            (this._minSize = e),
                            (this.element = document.createElement("div")),
                            (this.displaySize = 0),
                            (this.realSize = 0),
                            (this.offset = 0),
                            (this.element.className =
                                "scrollbar-thumb scrollbar-thumb-" + t);
                    }
                    return (
                        (t.prototype.attachTo = function (t) {
                            t.appendChild(this.element);
                        }),
                        (t.prototype.update = function (t, e, n) {
                            (this.realSize = Math.min(e / n, 1) * e),
                                (this.displaySize = Math.max(
                                    this.realSize,
                                    this._minSize
                                )),
                                (this.offset =
                                    (t / n) *
                                    (e + (this.realSize - this.displaySize))),
                                U(this.element, this._getStyle());
                        }),
                        (t.prototype._getStyle = function () {
                            switch (this._direction) {
                                case X.X:
                                    return {
                                        width: this.displaySize + "px",
                                        "-transform":
                                            "translate3d(" +
                                            this.offset +
                                            "px, 0, 0)",
                                    };
                                case X.Y:
                                    return {
                                        height: this.displaySize + "px",
                                        "-transform":
                                            "translate3d(0, " +
                                            this.offset +
                                            "px, 0)",
                                    };
                                default:
                                    return null;
                            }
                        }),
                        t
                    );
                })(),
                K = (function () {
                    function t(t, e) {
                        void 0 === e && (e = 0),
                            (this.element = document.createElement("div")),
                            (this._isShown = !1),
                            (this.element.className =
                                "scrollbar-track scrollbar-track-" + t),
                            (this.thumb = new q(t, e)),
                            this.thumb.attachTo(this.element);
                    }
                    return (
                        (t.prototype.attachTo = function (t) {
                            t.appendChild(this.element);
                        }),
                        (t.prototype.show = function () {
                            this._isShown ||
                                ((this._isShown = !0),
                                this.element.classList.add("show"));
                        }),
                        (t.prototype.hide = function () {
                            this._isShown &&
                                ((this._isShown = !1),
                                this.element.classList.remove("show"));
                        }),
                        (t.prototype.update = function (t, e, n) {
                            U(this.element, {
                                display: n <= e ? "none" : "block",
                            }),
                                this.thumb.update(t, e, n);
                        }),
                        t
                    );
                })(),
                Q = (function () {
                    function t(t) {
                        this._scrollbar = t;
                        var e = t.options.thumbMinSize;
                        (this.xAxis = new K(X.X, e)),
                            (this.yAxis = new K(X.Y, e)),
                            this.xAxis.attachTo(t.containerEl),
                            this.yAxis.attachTo(t.containerEl),
                            t.options.alwaysShowTracks &&
                                (this.xAxis.show(), this.yAxis.show());
                    }
                    return (
                        (t.prototype.update = function () {
                            var t = this._scrollbar,
                                e = t.size,
                                n = t.offset;
                            this.xAxis.update(
                                n.x,
                                e.container.width,
                                e.content.width
                            ),
                                this.yAxis.update(
                                    n.y,
                                    e.container.height,
                                    e.content.height
                                );
                        }),
                        (t.prototype.autoHideOnIdle = function () {
                            this._scrollbar.options.alwaysShowTracks ||
                                (this.xAxis.hide(), this.yAxis.hide());
                        }),
                        u([L(300)], t.prototype, "autoHideOnIdle", null),
                        t
                    );
                })(),
                $ = new WeakMap();
            function J(t) {
                return Math.pow(t - 1, 3) + 1;
            }
            var Z,
                tt,
                et,
                nt = (function () {
                    function t(t, e) {
                        var n = this.constructor;
                        (this.scrollbar = t),
                            (this.name = n.pluginName),
                            (this.options = i(i({}, n.defaultOptions), e));
                    }
                    return (
                        (t.prototype.onInit = function () {}),
                        (t.prototype.onDestroy = function () {}),
                        (t.prototype.onUpdate = function () {}),
                        (t.prototype.onRender = function (t) {}),
                        (t.prototype.transformDelta = function (t, e) {
                            return i({}, t);
                        }),
                        (t.pluginName = ""),
                        (t.defaultOptions = {}),
                        t
                    );
                })(),
                rt = { order: new Set(), constructors: {} };
            function ot(t) {
                var e = F(t),
                    n = t.containerEl;
                e(n, "keydown", function (e) {
                    var r = document.activeElement;
                    if (
                        (r === n || n.contains(r)) &&
                        !(function (t) {
                            return (
                                !(
                                    "INPUT" !== t.tagName &&
                                    "SELECT" !== t.tagName &&
                                    "TEXTAREA" !== t.tagName &&
                                    !t.isContentEditable
                                ) && !t.disabled
                            );
                        })(r)
                    ) {
                        var o = (function (t, e) {
                            var n = t.size,
                                r = t.limit,
                                o = t.offset;
                            switch (e) {
                                case Z.TAB:
                                    return (function (t) {
                                        requestAnimationFrame(function () {
                                            t.scrollIntoView(
                                                document.activeElement,
                                                {
                                                    offsetTop:
                                                        t.size.container
                                                            .height / 2,
                                                    onlyScrollIfNeeded: !0,
                                                }
                                            );
                                        });
                                    })(t);
                                case Z.SPACE:
                                    return [0, 200];
                                case Z.PAGE_UP:
                                    return [0, 40 - n.container.height];
                                case Z.PAGE_DOWN:
                                    return [0, n.container.height - 40];
                                case Z.END:
                                    return [0, r.y - o.y];
                                case Z.HOME:
                                    return [0, -o.y];
                                case Z.LEFT:
                                    return [-40, 0];
                                case Z.UP:
                                    return [0, -40];
                                case Z.RIGHT:
                                    return [40, 0];
                                case Z.DOWN:
                                    return [0, 40];
                                default:
                                    return null;
                            }
                        })(t, e.keyCode || e.which);
                        if (o) {
                            var i = o[0],
                                u = o[1];
                            t.addTransformableMomentum(i, u, e, function (n) {
                                n
                                    ? e.preventDefault()
                                    : (t.containerEl.blur(),
                                      t.parent && t.parent.containerEl.focus());
                            });
                        }
                    }
                });
            }
            function it(t) {
                var e,
                    n,
                    r,
                    o,
                    i,
                    u = F(t),
                    c = t.containerEl,
                    a = t.track,
                    s = a.xAxis,
                    f = a.yAxis;
                function l(e, n) {
                    var r = t.size,
                        o = t.limit,
                        i = t.offset;
                    if (e === tt.X) {
                        var u =
                            r.container.width +
                            (s.thumb.realSize - s.thumb.displaySize);
                        return A((n / u) * r.content.width, 0, o.x) - i.x;
                    }
                    if (e === tt.Y) {
                        var c =
                            r.container.height +
                            (f.thumb.realSize - f.thumb.displaySize);
                        return A((n / c) * r.content.height, 0, o.y) - i.y;
                    }
                    return 0;
                }
                function p(t) {
                    return W(t, [s.element, s.thumb.element])
                        ? tt.X
                        : W(t, [f.element, f.thumb.element])
                        ? tt.Y
                        : void 0;
                }
                u(c, "click", function (e) {
                    if (!n && W(e.target, [s.element, f.element])) {
                        var r = e.target,
                            o = p(r),
                            i = r.getBoundingClientRect(),
                            u = H(e);
                        if (o === tt.X) {
                            var c = u.x - i.left - s.thumb.displaySize / 2;
                            t.setMomentum(l(o, c), 0);
                        }
                        o === tt.Y &&
                            ((c = u.y - i.top - f.thumb.displaySize / 2),
                            t.setMomentum(0, l(o, c)));
                    }
                }),
                    u(c, "mousedown", function (n) {
                        if (W(n.target, [s.thumb.element, f.thumb.element])) {
                            e = !0;
                            var u = n.target,
                                a = H(n),
                                l = u.getBoundingClientRect();
                            (o = p(u)),
                                (r = { x: a.x - l.left, y: a.y - l.top }),
                                (i = c.getBoundingClientRect()),
                                U(t.containerEl, { "-user-select": "none" });
                        }
                    }),
                    u(window, "mousemove", function (u) {
                        if (e) {
                            n = !0;
                            var c = H(u);
                            if (o === tt.X) {
                                var a = c.x - r.x - i.left;
                                t.setMomentum(l(o, a), 0);
                            }
                            o === tt.Y &&
                                ((a = c.y - r.y - i.top),
                                t.setMomentum(0, l(o, a)));
                        }
                    }),
                    u(window, "mouseup blur", function () {
                        (e = n = !1), U(t.containerEl, { "-user-select": "" });
                    });
            }
            function ut(t) {
                F(t)(window, "resize", D(t.update.bind(t), 300));
            }
            function ct(t) {
                var e,
                    n = F(t),
                    r = t.containerEl,
                    o = t.contentEl,
                    i = !1;
                n(window, "mousemove", function (n) {
                    i &&
                        (cancelAnimationFrame(e),
                        (function n(r) {
                            var o = r.x,
                                i = r.y;
                            if (o || i) {
                                var u = t.offset,
                                    c = t.limit;
                                t.setMomentum(
                                    A(u.x + o, 0, c.x) - u.x,
                                    A(u.y + i, 0, c.y) - u.y
                                ),
                                    (e = requestAnimationFrame(function () {
                                        n({ x: o, y: i });
                                    }));
                            }
                        })(
                            (function (t, e) {
                                var n = t.bounding,
                                    r = n.top,
                                    o = n.right,
                                    i = n.bottom,
                                    u = n.left,
                                    c = H(e),
                                    a = c.x,
                                    s = c.y,
                                    f = { x: 0, y: 0 };
                                return (
                                    (0 === a && 0 === s) ||
                                        (a > o - 20
                                            ? (f.x = a - o + 20)
                                            : a < u + 20 && (f.x = a - u - 20),
                                        s > i - 20
                                            ? (f.y = s - i + 20)
                                            : s < r + 20 && (f.y = s - r - 20),
                                        (f.x *= 2),
                                        (f.y *= 2)),
                                    f
                                );
                            })(t, n)
                        ));
                }),
                    n(o, "selectstart", function (t) {
                        t.stopPropagation(), cancelAnimationFrame(e), (i = !0);
                    }),
                    n(window, "mouseup blur", function () {
                        cancelAnimationFrame(e), (i = !1);
                    }),
                    n(r, "scroll", function (t) {
                        t.preventDefault(), (r.scrollTop = r.scrollLeft = 0);
                    });
            }
            function at(t) {
                var e,
                    n = /Android/.test(navigator.userAgent) ? 3 : 2,
                    r = t.options.delegateTo || t.containerEl,
                    o = new Y(),
                    i = F(t),
                    u = 0;
                i(r, "touchstart", function (n) {
                    o.track(n),
                        t.setMomentum(0, 0),
                        0 === u &&
                            ((e = t.options.damping),
                            (t.options.damping = Math.max(e, 0.5))),
                        u++;
                }),
                    i(r, "touchmove", function (e) {
                        if (!et || et === t) {
                            o.update(e);
                            var n = o.getDelta(),
                                r = n.x,
                                i = n.y;
                            t.addTransformableMomentum(r, i, e, function (n) {
                                n &&
                                    e.cancelable &&
                                    (e.preventDefault(), (et = t));
                            });
                        }
                    }),
                    i(r, "touchcancel touchend", function (r) {
                        var i = o.getVelocity(),
                            c = { x: 0, y: 0 };
                        Object.keys(i).forEach(function (t) {
                            var r = i[t] / e;
                            c[t] = Math.abs(r) < 50 ? 0 : r * n;
                        }),
                            t.addTransformableMomentum(c.x, c.y, r),
                            0 == --u && (t.options.damping = e),
                            o.release(r),
                            (et = null);
                    });
            }
            function st(t) {
                F(t)(
                    t.options.delegateTo || t.containerEl,
                    "onwheel" in window ||
                        document.implementation.hasFeature(
                            "Events.wheel",
                            "3.0"
                        )
                        ? "wheel"
                        : "mousewheel",
                    function (e) {
                        var n = (function (t) {
                                if ("deltaX" in t) {
                                    var e = pt(t.deltaMode);
                                    return {
                                        x: (t.deltaX / ft.STANDARD) * e,
                                        y: (t.deltaY / ft.STANDARD) * e,
                                    };
                                }
                                return "wheelDeltaX" in t
                                    ? {
                                          x: t.wheelDeltaX / ft.OTHERS,
                                          y: t.wheelDeltaY / ft.OTHERS,
                                      }
                                    : { x: 0, y: t.wheelDelta / ft.OTHERS };
                            })(e),
                            r = n.x,
                            o = n.y;
                        t.addTransformableMomentum(r, o, e, function (t) {
                            t && e.preventDefault();
                        });
                    }
                );
            }
            !(function (t) {
                (t[(t.TAB = 9)] = "TAB"),
                    (t[(t.SPACE = 32)] = "SPACE"),
                    (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
                    (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
                    (t[(t.END = 35)] = "END"),
                    (t[(t.HOME = 36)] = "HOME"),
                    (t[(t.LEFT = 37)] = "LEFT"),
                    (t[(t.UP = 38)] = "UP"),
                    (t[(t.RIGHT = 39)] = "RIGHT"),
                    (t[(t.DOWN = 40)] = "DOWN");
            })(Z || (Z = {})),
                (function (t) {
                    (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
                })(tt || (tt = {}));
            var ft = { STANDARD: 1, OTHERS: -3 },
                lt = [1, 28, 500],
                pt = function (t) {
                    return lt[t] || lt[0];
                },
                ht = new Map(),
                dt = (function () {
                    function t(t, e) {
                        var n = this;
                        (this.offset = { x: 0, y: 0 }),
                            (this.limit = { x: 1 / 0, y: 1 / 0 }),
                            (this.bounding = {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }),
                            (this._plugins = []),
                            (this._momentum = { x: 0, y: 0 }),
                            (this._listeners = new Set()),
                            (this.containerEl = t);
                        var r = (this.contentEl =
                            document.createElement("div"));
                        (this.options = new C(e)),
                            t.setAttribute("data-scrollbar", "true"),
                            t.setAttribute("tabindex", "-1"),
                            U(t, { overflow: "hidden", outline: "none" }),
                            window.navigator.msPointerEnabled &&
                                (t.style.msTouchAction = "none"),
                            (r.className = "scroll-content"),
                            Array.from(t.childNodes).forEach(function (t) {
                                r.appendChild(t);
                            }),
                            t.appendChild(r),
                            (this.track = new Q(this)),
                            (this.size = this.getSize()),
                            (this._plugins = (function (t, e) {
                                return Array.from(rt.order)
                                    .filter(function (t) {
                                        return !1 !== e[t];
                                    })
                                    .map(function (n) {
                                        var r = new (0, rt.constructors[n])(
                                            t,
                                            e[n]
                                        );
                                        return (e[n] = r.options), r;
                                    });
                            })(this, this.options.plugins));
                        var o = t.scrollLeft,
                            i = t.scrollTop;
                        (t.scrollLeft = t.scrollTop = 0),
                            this.setPosition(o, i, { withoutCallbacks: !0 });
                        var u = window,
                            c =
                                u.MutationObserver ||
                                u.WebKitMutationObserver ||
                                u.MozMutationObserver;
                        "function" == typeof c &&
                            ((this._observer = new c(function () {
                                n.update();
                            })),
                            this._observer.observe(r, {
                                subtree: !0,
                                childList: !0,
                            })),
                            ht.set(t, this),
                            requestAnimationFrame(function () {
                                n._init();
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, "parent", {
                            get: function () {
                                for (
                                    var t = this.containerEl.parentElement;
                                    t;

                                ) {
                                    var e = ht.get(t);
                                    if (e) return e;
                                    t = t.parentElement;
                                }
                                return null;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "scrollTop", {
                            get: function () {
                                return this.offset.y;
                            },
                            set: function (t) {
                                this.setPosition(this.scrollLeft, t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "scrollLeft", {
                            get: function () {
                                return this.offset.x;
                            },
                            set: function (t) {
                                this.setPosition(t, this.scrollTop);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getSize = function () {
                            return (function (t) {
                                var e = t.containerEl,
                                    n = t.contentEl,
                                    r = getComputedStyle(e),
                                    o = [
                                        "paddingTop",
                                        "paddingBottom",
                                        "paddingLeft",
                                        "paddingRight",
                                    ].map(function (t) {
                                        return r[t] ? parseFloat(r[t]) : 0;
                                    }),
                                    i = o[0] + o[1],
                                    u = o[2] + o[3];
                                return {
                                    container: {
                                        width: e.clientWidth,
                                        height: e.clientHeight,
                                    },
                                    content: {
                                        width:
                                            n.offsetWidth -
                                            n.clientWidth +
                                            n.scrollWidth +
                                            u,
                                        height:
                                            n.offsetHeight -
                                            n.clientHeight +
                                            n.scrollHeight +
                                            i,
                                    },
                                };
                            })(this);
                        }),
                        (t.prototype.update = function () {
                            !(function (t) {
                                var e = t.getSize(),
                                    n = {
                                        x: Math.max(
                                            e.content.width - e.container.width,
                                            0
                                        ),
                                        y: Math.max(
                                            e.content.height -
                                                e.container.height,
                                            0
                                        ),
                                    },
                                    r = t.containerEl.getBoundingClientRect(),
                                    o = {
                                        top: Math.max(r.top, 0),
                                        right: Math.min(
                                            r.right,
                                            window.innerWidth
                                        ),
                                        bottom: Math.min(
                                            r.bottom,
                                            window.innerHeight
                                        ),
                                        left: Math.max(r.left, 0),
                                    };
                                (t.size = e),
                                    (t.limit = n),
                                    (t.bounding = o),
                                    t.track.update(),
                                    t.setPosition();
                            })(this),
                                this._plugins.forEach(function (t) {
                                    t.onUpdate();
                                });
                        }),
                        (t.prototype.isVisible = function (t) {
                            return (function (t, e) {
                                var n = t.bounding,
                                    r = e.getBoundingClientRect(),
                                    o = Math.max(n.top, r.top),
                                    i = Math.max(n.left, r.left),
                                    u = Math.min(n.right, r.right);
                                return (
                                    o < Math.min(n.bottom, r.bottom) && i < u
                                );
                            })(this, t);
                        }),
                        (t.prototype.setPosition = function (t, e, n) {
                            var r = this;
                            void 0 === t && (t = this.offset.x),
                                void 0 === e && (e = this.offset.y),
                                void 0 === n && (n = {});
                            var o = (function (t, e, n) {
                                var r = t.options,
                                    o = t.offset,
                                    u = t.limit,
                                    c = t.track,
                                    a = t.contentEl;
                                return (
                                    r.renderByPixels &&
                                        ((e = Math.round(e)),
                                        (n = Math.round(n))),
                                    (e = A(e, 0, u.x)),
                                    (n = A(n, 0, u.y)),
                                    e !== o.x && c.xAxis.show(),
                                    n !== o.y && c.yAxis.show(),
                                    r.alwaysShowTracks || c.autoHideOnIdle(),
                                    e === o.x && n === o.y
                                        ? null
                                        : ((o.x = e),
                                          (o.y = n),
                                          U(a, {
                                              "-transform":
                                                  "translate3d(" +
                                                  -e +
                                                  "px, " +
                                                  -n +
                                                  "px, 0)",
                                          }),
                                          c.update(),
                                          { offset: i({}, o), limit: i({}, u) })
                                );
                            })(this, t, e);
                            o &&
                                !n.withoutCallbacks &&
                                this._listeners.forEach(function (t) {
                                    t.call(r, o);
                                });
                        }),
                        (t.prototype.scrollTo = function (t, e, n, r) {
                            void 0 === t && (t = this.offset.x),
                                void 0 === e && (e = this.offset.y),
                                void 0 === n && (n = 0),
                                void 0 === r && (r = {}),
                                (function (t, e, n, r, o) {
                                    void 0 === r && (r = 0);
                                    var i = void 0 === o ? {} : o,
                                        u = i.easing,
                                        c = void 0 === u ? J : u,
                                        a = i.callback,
                                        s = t.options,
                                        f = t.offset,
                                        l = t.limit;
                                    s.renderByPixels &&
                                        ((e = Math.round(e)),
                                        (n = Math.round(n)));
                                    var p = f.x,
                                        h = f.y,
                                        d = A(e, 0, l.x) - p,
                                        v = A(n, 0, l.y) - h,
                                        y = Date.now();
                                    cancelAnimationFrame($.get(t)),
                                        (function e() {
                                            var n = Date.now() - y,
                                                o = r
                                                    ? c(Math.min(n / r, 1))
                                                    : 1;
                                            if (
                                                (t.setPosition(
                                                    p + d * o,
                                                    h + v * o
                                                ),
                                                n >= r)
                                            )
                                                "function" == typeof a &&
                                                    a.call(t);
                                            else {
                                                var i =
                                                    requestAnimationFrame(e);
                                                $.set(t, i);
                                            }
                                        })();
                                })(this, t, e, n, r);
                        }),
                        (t.prototype.scrollIntoView = function (t, e) {
                            void 0 === e && (e = {}),
                                (function (t, e, n) {
                                    var r = void 0 === n ? {} : n,
                                        o = r.alignToTop,
                                        i = void 0 === o || o,
                                        u = r.onlyScrollIfNeeded,
                                        c = void 0 !== u && u,
                                        a = r.offsetTop,
                                        s = void 0 === a ? 0 : a,
                                        f = r.offsetLeft,
                                        l = void 0 === f ? 0 : f,
                                        p = r.offsetBottom,
                                        h = void 0 === p ? 0 : p,
                                        d = t.containerEl,
                                        v = t.bounding,
                                        y = t.offset,
                                        m = t.limit;
                                    if (e && d.contains(e)) {
                                        var g = e.getBoundingClientRect();
                                        if (!c || !t.isVisible(e)) {
                                            var b = i
                                                ? g.top - v.top - s
                                                : g.bottom - v.bottom + h;
                                            t.setMomentum(
                                                g.left - v.left - l,
                                                A(b, -y.y, m.y - y.y)
                                            );
                                        }
                                    }
                                })(this, t, e);
                        }),
                        (t.prototype.addListener = function (t) {
                            if ("function" != typeof t)
                                throw new TypeError(
                                    "[smooth-scrollbar] scrolling listener should be a function"
                                );
                            this._listeners.add(t);
                        }),
                        (t.prototype.removeListener = function (t) {
                            this._listeners.delete(t);
                        }),
                        (t.prototype.addTransformableMomentum = function (
                            t,
                            e,
                            n,
                            r
                        ) {
                            this._updateDebounced();
                            var o = this._plugins.reduce(
                                    function (t, e) {
                                        return e.transformDelta(t, n) || t;
                                    },
                                    { x: t, y: e }
                                ),
                                i = !this._shouldPropagateMomentum(o.x, o.y);
                            i && this.addMomentum(o.x, o.y),
                                r && r.call(this, i);
                        }),
                        (t.prototype.addMomentum = function (t, e) {
                            this.setMomentum(
                                this._momentum.x + t,
                                this._momentum.y + e
                            );
                        }),
                        (t.prototype.setMomentum = function (t, e) {
                            0 === this.limit.x && (t = 0),
                                0 === this.limit.y && (e = 0),
                                this.options.renderByPixels &&
                                    ((t = Math.round(t)), (e = Math.round(e))),
                                (this._momentum.x = t),
                                (this._momentum.y = e);
                        }),
                        (t.prototype.updatePluginOptions = function (t, e) {
                            this._plugins.forEach(function (n) {
                                n.name === t && Object.assign(n.options, e);
                            });
                        }),
                        (t.prototype.destroy = function () {
                            var t = this.containerEl,
                                e = this.contentEl;
                            !(function (t) {
                                var e = N.get(t);
                                e &&
                                    (e.forEach(function (t) {
                                        var e = t.elem,
                                            n = t.eventName,
                                            r = t.handler;
                                        e.removeEventListener(n, r, R());
                                    }),
                                    N.delete(t));
                            })(this),
                                this._listeners.clear(),
                                this.setMomentum(0, 0),
                                cancelAnimationFrame(this._renderID),
                                this._observer && this._observer.disconnect(),
                                ht.delete(this.containerEl);
                            for (
                                var n = Array.from(e.childNodes);
                                t.firstChild;

                            )
                                t.removeChild(t.firstChild);
                            n.forEach(function (e) {
                                t.appendChild(e);
                            }),
                                U(t, { overflow: "" }),
                                (t.scrollTop = this.scrollTop),
                                (t.scrollLeft = this.scrollLeft),
                                this._plugins.forEach(function (t) {
                                    t.onDestroy();
                                }),
                                (this._plugins.length = 0);
                        }),
                        (t.prototype._init = function () {
                            var t = this;
                            this.update(),
                                Object.keys(r).forEach(function (e) {
                                    r[e](t);
                                }),
                                this._plugins.forEach(function (t) {
                                    t.onInit();
                                }),
                                this._render();
                        }),
                        (t.prototype._updateDebounced = function () {
                            this.update();
                        }),
                        (t.prototype._shouldPropagateMomentum = function (
                            t,
                            e
                        ) {
                            void 0 === t && (t = 0), void 0 === e && (e = 0);
                            var n = this.options,
                                r = this.offset,
                                o = this.limit;
                            if (!n.continuousScrolling) return !1;
                            0 === o.x && 0 === o.y && this._updateDebounced();
                            var i = A(t + r.x, 0, o.x),
                                u = A(e + r.y, 0, o.y),
                                c = !0;
                            return (
                                (c = (c = c && i === r.x) && u === r.y) &&
                                (r.x === o.x ||
                                    0 === r.x ||
                                    r.y === o.y ||
                                    0 === r.y)
                            );
                        }),
                        (t.prototype._render = function () {
                            var t = this._momentum;
                            if (t.x || t.y) {
                                var e = this._nextTick("x"),
                                    n = this._nextTick("y");
                                (t.x = e.momentum),
                                    (t.y = n.momentum),
                                    this.setPosition(e.position, n.position);
                            }
                            var r = i({}, this._momentum);
                            this._plugins.forEach(function (t) {
                                t.onRender(r);
                            }),
                                (this._renderID = requestAnimationFrame(
                                    this._render.bind(this)
                                ));
                        }),
                        (t.prototype._nextTick = function (t) {
                            var e = this.options,
                                n = this.offset,
                                r = this._momentum,
                                o = n[t],
                                i = r[t];
                            if (Math.abs(i) <= 0.1)
                                return { momentum: 0, position: o + i };
                            var u = i * (1 - e.damping);
                            return (
                                e.renderByPixels && (u |= 0),
                                { momentum: u, position: o + i - u }
                            );
                        }),
                        u(
                            [L(100, { leading: !0 })],
                            t.prototype,
                            "_updateDebounced",
                            null
                        ),
                        t
                    );
                })(),
                vt = "smooth-scrollbar-style",
                yt = !1;
            function mt() {
                if (!yt && "undefined" != typeof window) {
                    var t = document.createElement("style");
                    (t.id = vt),
                        (t.textContent =
                            "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n    padding-right: 0px;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(44, 29, 245, 1);\n  border-radius: 0px;\n   cursor: pointer;\n}\n"),
                        document.head && document.head.appendChild(t),
                        (yt = !0);
                }
            }
            n.d(e, "ScrollbarPlugin", function () {
                return nt;
            });
            var gt = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    (function (t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        o(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    })(e, t),
                    (e.init = function (t, e) {
                        if (!t || 1 !== t.nodeType)
                            throw new TypeError(
                                "expect element to be DOM Element, but got " + t
                            );
                        return mt(), ht.has(t) ? ht.get(t) : new dt(t, e);
                    }),
                    (e.initAll = function (t) {
                        return Array.from(
                            document.querySelectorAll("[data-scrollbar]"),
                            function (n) {
                                return e.init(n, t);
                            }
                        );
                    }),
                    (e.has = function (t) {
                        return ht.has(t);
                    }),
                    (e.get = function (t) {
                        return ht.get(t);
                    }),
                    (e.getAll = function () {
                        return Array.from(ht.values());
                    }),
                    (e.destroy = function (t) {
                        var e = ht.get(t);
                        e && e.destroy();
                    }),
                    (e.destroyAll = function () {
                        ht.forEach(function (t) {
                            t.destroy();
                        });
                    }),
                    (e.use = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return function () {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e] = arguments[e];
                            t.forEach(function (t) {
                                var e = t.pluginName;
                                if (!e)
                                    throw new TypeError(
                                        "plugin name is required"
                                    );
                                rt.order.add(e), (rt.constructors[e] = t);
                            });
                        }.apply(void 0, t);
                    }),
                    (e.attachStyle = function () {
                        return mt();
                    }),
                    (e.detachStyle = function () {
                        return (function () {
                            if (yt && "undefined" != typeof window) {
                                var t = document.getElementById(vt);
                                t &&
                                    t.parentNode &&
                                    (t.parentNode.removeChild(t), (yt = !1));
                            }
                        })();
                    }),
                    (e.version = "8.7.0"),
                    (e.ScrollbarPlugin = nt),
                    e
                );
            })(dt);
            e.default = gt;
        },
    ]).default;
});

// edge easing
("use strict");

var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };
    })();

var EdgeEasingPlugin = /** @class */ (function (_super) {
    __extends(EdgeEasingPlugin, _super);
    function EdgeEasingPlugin() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this._remainMomentum = {
            x: 0,
            y: 0,
        };

        return _this;
    }

    EdgeEasingPlugin.prototype.transformDelta = function (delta) {
        var _a = this.scrollbar,
            limit = _a.limit,
            offset = _a.offset;
        var x = this._remainMomentum.x + delta.x;
        var y = this._remainMomentum.y + delta.y;
        // clamps momentum within [-offset, limit - offset]
        this.scrollbar.setMomentum(
            Math.max(-offset.x, Math.min(x, limit.x - offset.x)),
            Math.max(-offset.y, Math.min(y, limit.y - offset.y))
        );
        return { x: 0, y: 0 };
    };

    EdgeEasingPlugin.prototype.onRender = function (remainMomentum) {
        Object.assign(this._remainMomentum, remainMomentum);
    };

    EdgeEasingPlugin.pluginName = "edgeEasing";
    return EdgeEasingPlugin;
})(Scrollbar.ScrollbarPlugin);

Scrollbar.use(EdgeEasingPlugin);

// hash plugin
class AnchorPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = "anchor";

    onHashChange = () => {
        this.handleHash(location.hash);
    };

    onClick = (event) => {
        const { target } = event;

        if (target.tagName !== "A") {
            return;
        }

        const hash = target.getAttribute("href");

        if (!hash || hash.charAt(0) !== "#") {
            return;
        }

        this.handleHash(hash);
    };

    handleHash = (hash) => {
        console.log("hash:", hash);

        if (!hash) {
            return;
        }

        if (hash === "#inicio") {
            scrollbar.setMomentum(0, -scrollbar.scrollTop);
        } else {
            console.log("scrollTop:", scrollbar.containerEl.scrollTop);

            scrollbar.scrollIntoView(document.querySelector(hash), {
                offsetTop: -scrollbar.containerEl.scrollTop,
            });
        }
    };

    onInit() {
        this.handleHash(location.hash);
        window.addEventListener("hashchange", this.onHashChange);
        this.scrollbar.contentEl.addEventListener("click", this.onClick);
    }

    onDestory() {
        window.removeEventListener("hashchange", this.onHashChange);
        this.scrollbar.contentEl.removeEventListener("click", this.onClick);
    }
}

Scrollbar.use(AnchorPlugin);

// scrollbar init
const scrollbar = Scrollbar.init(document.querySelector("main"), {
    damping: 0.1, // 0.05
    alwaysShowTracks: true,
});

// date
var dateObj = new Date();
var year = dateObj.getFullYear();
newdate = year;
document.getElementById("date").innerHTML = newdate;
