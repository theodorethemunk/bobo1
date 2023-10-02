import {
    S as dt,
    i as pt,
    s as ht,
    a as mt,
    F as M,
    b as _t,
    e as W,
    G as _e,
    j as G,
    H as ge,
    t as K,
    d as B,
    I as gt,
    E as Te,
    k as wt,
    m as yt,
    n as bt,
    w as Re,
    J as F,
    l as vt,
    o as Et,
    q as kt,
    K as Ie,
    L as Z,
    A as Q,
    B as De,
    C as x,
    D as ee,
    M as he
} from "./chunks/index-44b72b6b.js";
import {
    S as it,
    a as lt,
    I as V,
    g as xe,
    f as et,
    b as Le,
    c as me,
    s as H,
    i as tt,
    d as re,
    e as X,
    P as nt,
    h as St,
    j as Rt,
    k as It
} from "./chunks/singletons-f3b5d5c8.js";
import {
    _ as Ae
} from "./chunks/preload-helper-41c905a7.js";

function Lt(a, e) {
    return a === "/" || e === "ignore" ? a : e === "never" ? a.endsWith("/") ? a.slice(0, -1) : a : e === "always" && !a.endsWith("/") ? a + "/" : a
}

function At(a) {
    return a.split("%25").map(decodeURI).join("%25")
}

function Pt(a) {
    for (const e in a) a[e] = decodeURIComponent(a[e]);
    return a
}
const Ut = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];

function Ot(a, e) {
    const n = new URL(a);
    for (const o of Ut) {
        let i = n[o];
        Object.defineProperty(n, o, {
            get() {
                return e(), i
            },
            enumerable: !0,
            configurable: !0
        })
    }
    return Nt(n), n
}

function Nt(a) {
    Object.defineProperty(a, "hash", {
        get() {
            throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")
        }
    })
}
const Tt = "/__data.json";

function jt(a) {
    return a.replace(/\/$/, "") + Tt
}

function ct(a) {
    try {
        return JSON.parse(sessionStorage[a])
    } catch {}
}

function at(a, e) {
    const n = JSON.stringify(e);
    try {
        sessionStorage[a] = n
    } catch {}
}

function Dt(...a) {
    let e = 5381;
    for (const n of a)
        if (typeof n == "string") {
            let o = n.length;
            for (; o;) e = e * 33 ^ n.charCodeAt(--o)
        } else if (ArrayBuffer.isView(n)) {
        const o = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
        let i = o.length;
        for (; i;) e = e * 33 ^ o[--i]
    } else throw new TypeError("value must be a string or TypedArray");
    return (e >>> 0).toString(36)
}
const we = window.fetch;
window.fetch = (a, e) => ((a instanceof Request ? a.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && se.delete(Ce(a)), we(a, e));
const se = new Map;

function Ct(a, e) {
    const n = Ce(a, e),
        o = document.querySelector(n);
    if (o != null && o.textContent) {
        const {
            body: i,
            ...u
        } = JSON.parse(o.textContent), t = o.getAttribute("data-ttl");
        return t && se.set(n, {
            body: i,
            init: u,
            ttl: 1e3 * Number(t)
        }), Promise.resolve(new Response(i, u))
    }
    return we(a, e)
}

function $t(a, e, n) {
    if (se.size > 0) {
        const o = Ce(a, n),
            i = se.get(o);
        if (i) {
            if (performance.now() < i.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(i.body, i.init);
            se.delete(o)
        }
    }
    return we(e, n)
}

function Ce(a, e) {
    let o = `script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;
    if (e != null && e.headers || e != null && e.body) {
        const i = [];
        e.headers && i.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && i.push(e.body), o += `[data-hash="${Dt(...i)}"]`
    }
    return o
}
const qt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Vt(a) {
    const e = [];
    return {
        pattern: a === "/" ? /^\/$/ : new RegExp(`^${Ht(a).map(o=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,m)=>{if(m%2){if(h.startsWith("x+"))return Pe(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Pe(String.fromCharCode(...h.slice(2).split("-").map(L=>parseInt(L,16))));const w=qt.exec(h);if(!w)throw new Error(`
            Invalid param: $ {
                h
            }.Params and matcher names can only have underscores and alphanumeric characters.
            `);const[,I,P,R,C]=w;return e.push({name:R,matcher:C,optional:!!I,rest:!!P,chained:P?m===1&&t[0]==="":!1}),P?"(.*?)":I?"([^/]*)?":"([^/]+?)"}return Pe(h)}).join("")}).join("")}/?$`),
        params: e
    }
}

function Ft(a) {
    return !/^\([^)]+\)$/.test(a)
}

function Ht(a) {
    return a.slice(1).split("/").filter(Ft)
}

function Mt(a, e, n) {
    const o = {},
        i = a.slice(1);
    let u = 0;
    for (let t = 0; t < e.length; t += 1) {
        const f = e[t],
            h = i[t - u];
        if (f.chained && f.rest && u) {
            o[f.name] = i.slice(t - u, t + 1).filter(m => m).join("/"), u = 0;
            continue
        }
        if (h === void 0) {
            f.rest && (o[f.name] = "");
            continue
        }
        if (!f.matcher || n[f.matcher](h)) {
            o[f.name] = h;
            continue
        }
        if (f.optional && f.chained) {
            u++;
            continue
        }
        return
    }
    if (!u) return o
}

function Pe(a) {
    return a.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function Gt(a, e, n, o) {
    const i = new Set(e);
    return Object.entries(n).map(([f, [h, m, w]]) => {
        const {
            pattern: I,
            params: P
        } = Vt(f), R = {
            id: f,
            exec: C => {
                const L = I.exec(C);
                if (L) return Mt(L, P, o)
            },
            errors: [1, ...w || []].map(C => a[C]),
            layouts: [0, ...m || []].map(t),
            leaf: u(h)
        };
        return R.errors.length = R.layouts.length = Math.max(R.errors.length, R.layouts.length), R
    });

    function u(f) {
        const h = f < 0;
        return h && (f = ~f), [h, a[f]]
    }

    function t(f) {
        return f === void 0 ? f : [i.has(f), a[f]]
    }
}

function Kt(a) {
    let e, n, o;
    var i = a[1][0];

    function u(t) {
        return {
            props: {
                data: t[3],
                form: t[2]
            }
        }
    }
    return i && (e = Z(i, u(a)), a[12](e)), {
        c() {
            e && Q(e.$$.fragment), n = M()
        },
        l(t) {
            e && De(e.$$.fragment, t), n = M()
        },
        m(t, f) {
            e && x(e, t, f), W(t, n, f), o = !0
        },
        p(t, f) {
            const h = {};
            if (f & 8 && (h.data = t[3]), f & 4 && (h.form = t[2]), i !== (i = t[1][0])) {
                if (e) {
                    _e();
                    const m = e;
                    G(m.$$.fragment, 1, 0, () => {
                        ee(m, 1)
                    }), ge()
                }
                i ? (e = Z(i, u(t)), t[12](e), Q(e.$$.fragment), K(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null
            } else i && e.$set(h)
        },
        i(t) {
            o || (e && K(e.$$.fragment, t), o = !0)
        },
        o(t) {
            e && G(e.$$.fragment, t), o = !1
        },
        d(t) {
            a[12](null), t && B(n), e && ee(e, t)
        }
    }
}

function Bt(a) {
    let e, n, o;
    var i = a[1][0];

    function u(t) {
        return {
            props: {
                data: t[3],
                $$slots: {
                    default: [Jt]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return i && (e = Z(i, u(a)), a[11](e)), {
        c() {
            e && Q(e.$$.fragment), n = M()
        },
        l(t) {
            e && De(e.$$.fragment, t), n = M()
        },
        m(t, f) {
            e && x(e, t, f), W(t, n, f), o = !0
        },
        p(t, f) {
            const h = {};
            if (f & 8 && (h.data = t[3]), f & 8215 && (h.$$scope = {
                    dirty: f,
                    ctx: t
                }), i !== (i = t[1][0])) {
                if (e) {
                    _e();
                    const m = e;
                    G(m.$$.fragment, 1, 0, () => {
                        ee(m, 1)
                    }), ge()
                }
                i ? (e = Z(i, u(t)), t[11](e), Q(e.$$.fragment), K(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null
            } else i && e.$set(h)
        },
        i(t) {
            o || (e && K(e.$$.fragment, t), o = !0)
        },
        o(t) {
            e && G(e.$$.fragment, t), o = !1
        },
        d(t) {
            a[11](null), t && B(n), e && ee(e, t)
        }
    }
}

function Jt(a) {
    let e, n, o;
    var i = a[1][1];

    function u(t) {
        return {
            props: {
                data: t[4],
                form: t[2]
            }
        }
    }
    return i && (e = Z(i, u(a)), a[10](e)), {
        c() {
            e && Q(e.$$.fragment), n = M()
        },
        l(t) {
            e && De(e.$$.fragment, t), n = M()
        },
        m(t, f) {
            e && x(e, t, f), W(t, n, f), o = !0
        },
        p(t, f) {
            const h = {};
            if (f & 16 && (h.data = t[4]), f & 4 && (h.form = t[2]), i !== (i = t[1][1])) {
                if (e) {
                    _e();
                    const m = e;
                    G(m.$$.fragment, 1, 0, () => {
                        ee(m, 1)
                    }), ge()
                }
                i ? (e = Z(i, u(t)), t[10](e), Q(e.$$.fragment), K(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null
            } else i && e.$set(h)
        },
        i(t) {
            o || (e && K(e.$$.fragment, t), o = !0)
        },
        o(t) {
            e && G(e.$$.fragment, t), o = !1
        },
        d(t) {
            a[10](null), t && B(n), e && ee(e, t)
        }
    }
}

function rt(a) {
    let e, n = a[6] && st(a);
    return {
        c() {
            e = wt("div"), n && n.c(), this.h()
        },
        l(o) {
            e = yt(o, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var i = bt(e);
            n && n.l(i), i.forEach(B), this.h()
        },
        h() {
            Re(e, "id", "svelte-announcer"), Re(e, "aria-live", "assertive"), Re(e, "aria-atomic", "true"), F(e, "position", "absolute"), F(e, "left", "0"), F(e, "top", "0"), F(e, "clip", "rect(0 0 0 0)"), F(e, "clip-path", "inset(50%)"), F(e, "overflow", "hidden"), F(e, "white-space", "nowrap"), F(e, "width", "1px"), F(e, "height", "1px")
        },
        m(o, i) {
            W(o, e, i), n && n.m(e, null)
        },
        p(o, i) {
            o[6] ? n ? n.p(o, i) : (n = st(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null)
        },
        d(o) {
            o && B(e), n && n.d()
        }
    }
}

function st(a) {
    let e;
    return {
        c() {
            e = vt(a[7])
        },
        l(n) {
            e = Et(n, a[7])
        },
        m(n, o) {
            W(n, e, o)
        },
        p(n, o) {
            o & 128 && kt(e, n[7])
        },
        d(n) {
            n && B(e)
        }
    }
}

function Yt(a) {
    let e, n, o, i, u;
    const t = [Bt, Kt],
        f = [];

    function h(w, I) {
        return w[1][1] ? 0 : 1
    }
    e = h(a), n = f[e] = t[e](a);
    let m = a[5] && rt(a);
    return {
        c() {
            n.c(), o = mt(), m && m.c(), i = M()
        },
        l(w) {
            n.l(w), o = _t(w), m && m.l(w), i = M()
        },
        m(w, I) {
            f[e].m(w, I), W(w, o, I), m && m.m(w, I), W(w, i, I), u = !0
        },
        p(w, [I]) {
            let P = e;
            e = h(w), e === P ? f[e].p(w, I) : (_e(), G(f[P], 1, 1, () => {
                f[P] = null
            }), ge(), n = f[e], n ? n.p(w, I) : (n = f[e] = t[e](w), n.c()), K(n, 1), n.m(o.parentNode, o)), w[5] ? m ? m.p(w, I) : (m = rt(w), m.c(), m.m(i.parentNode, i)) : m && (m.d(1), m = null)
        },
        i(w) {
            u || (K(n), u = !0)
        },
        o(w) {
            G(n), u = !1
        },
        d(w) {
            f[e].d(w), w && B(o), m && m.d(w), w && B(i)
        }
    }
}

function zt(a, e, n) {
    let {
        stores: o
    } = e, {
        page: i
    } = e, {
        constructors: u
    } = e, {
        components: t = []
    } = e, {
        form: f
    } = e, {
        data_0: h = null
    } = e, {
        data_1: m = null
    } = e;
    gt(o.page.notify);
    let w = !1,
        I = !1,
        P = null;
    Te(() => {
        const k = o.page.subscribe(() => {
            w && (n(6, I = !0), n(7, P = document.title || "untitled page"))
        });
        return n(5, w = !0), k
    });

    function R(k) {
        Ie[k ? "unshift" : "push"](() => {
            t[1] = k, n(0, t)
        })
    }

    function C(k) {
        Ie[k ? "unshift" : "push"](() => {
            t[0] = k, n(0, t)
        })
    }

    function L(k) {
        Ie[k ? "unshift" : "push"](() => {
            t[0] = k, n(0, t)
        })
    }
    return a.$$set = k => {
        "stores" in k && n(8, o = k.stores), "page" in k && n(9, i = k.page), "constructors" in k && n(1, u = k.constructors), "components" in k && n(0, t = k.components), "form" in k && n(2, f = k.form), "data_0" in k && n(3, h = k.data_0), "data_1" in k && n(4, m = k.data_1)
    }, a.$$.update = () => {
        a.$$.dirty & 768 && o.page.set(i)
    }, [t, u, f, h, m, w, I, P, o, i, R, C, L]
}
class Wt extends dt {
    constructor(e) {
        super(), pt(this, e, zt, Yt, ht, {
            stores: 8,
            page: 9,
            constructors: 1,
            components: 0,
            form: 2,
            data_0: 3,
            data_1: 4
        })
    }
}
const Xt = {},
    ye = [() => Ae(() =>
        import ("./chunks/0-8725502e.js"), ["./chunks/0-8725502e.js", "./components/pages/_layout.svelte-18a27ef5.js", "./chunks/index-44b72b6b.js", "./assets/_layout-7d2c88e9.css"],
        import.meta.url), () => Ae(() =>
        import ("./chunks/1-82de85d9.js"), ["./chunks/1-82de85d9.js", "./components/error.svelte-a3b3a571.js", "./chunks/index-44b72b6b.js", "./chunks/singletons-f3b5d5c8.js"],
        import.meta.url), () => Ae(() =>
        import ("./chunks/2-e234db12.js"), ["./chunks/2-e234db12.js", "./components/pages/_page.svelte-b72a9440.js", "./chunks/preload-helper-41c905a7.js", "./chunks/index-44b72b6b.js", "./assets/_page-61b3cfb1.css"],
        import.meta.url)],
    Zt = [],
    Qt = {
        "/": [2]
    },
    xt = {
        handleError: ({
            error: a
        }) => {
            console.error(a)
        }
    };
let oe = class {
        constructor(e, n) {
            this.status = e, typeof n == "string" ? this.body = {
                message: n
            } : n ? this.body = n : this.body = {
                message: `Error: ${e}`
            }
        }
        toString() {
            return JSON.stringify(this.body)
        }
    },
    ot = class {
        constructor(e, n) {
            this.status = e, this.location = n
        }
    };
async function en(a) {
    var e;
    for (const n in a)
        if (typeof((e = a[n]) == null ? void 0 : e.then) == "function") return Object.fromEntries(await Promise.all(Object.entries(a).map(async ([o, i]) => [o, await i])));
    return a
}
const tn = -1,
    nn = -2,
    an = -3,
    rn = -4,
    sn = -5,
    on = -6;

function ln(a, e) {
    if (typeof a == "number") return i(a, !0);
    if (!Array.isArray(a) || a.length === 0) throw new Error("Invalid input");
    const n = a,
        o = Array(n.length);

    function i(u, t = !1) {
        if (u === tn) return;
        if (u === an) return NaN;
        if (u === rn) return 1 / 0;
        if (u === sn) return -1 / 0;
        if (u === on) return -0;
        if (t) throw new Error("Invalid input");
        if (u in o) return o[u];
        const f = n[u];
        if (!f || typeof f != "object") o[u] = f;
        else if (Array.isArray(f))
            if (typeof f[0] == "string") {
                const h = f[0],
                    m = e == null ? void 0 : e[h];
                if (m) return o[u] = m(i(f[1]));
                switch (h) {
                    case "Date":
                        o[u] = new Date(f[1]);
                        break;
                    case "Set":
                        const w = new Set;
                        o[u] = w;
                        for (let R = 1; R < f.length; R += 1) w.add(i(f[R]));
                        break;
                    case "Map":
                        const I = new Map;
                        o[u] = I;
                        for (let R = 1; R < f.length; R += 2) I.set(i(f[R]), i(f[R + 1]));
                        break;
                    case "RegExp":
                        o[u] = new RegExp(f[1], f[2]);
                        break;
                    case "Object":
                        o[u] = Object(f[1]);
                        break;
                    case "BigInt":
                        o[u] = BigInt(f[1]);
                        break;
                    case "null":
                        const P = Object.create(null);
                        o[u] = P;
                        for (let R = 1; R < f.length; R += 2) P[f[R]] = i(f[R + 1]);
                        break;
                    default:
                        throw new Error(`Unknown type ${h}`)
                }
            } else {
                const h = new Array(f.length);
                o[u] = h;
                for (let m = 0; m < f.length; m += 1) {
                    const w = f[m];
                    w !== nn && (h[m] = i(w))
                }
            }
        else {
            const h = {};
            o[u] = h;
            for (const m in f) {
                const w = f[m];
                h[m] = i(w)
            }
        }
        return o[u]
    }
    return i(0)
}

function $e(a) {
    const e = new Set(a);

    function n(o, i) {
        if (o) {
            for (const u in o)
                if (u[0] !== "_" && !e.has(u)) {
                    const t = a.join(", ");
                    throw new Error(`Invalid export '${u}'${i?` in ${i}`:""} (valid exports are ${t}, or anything with a '_' prefix)`)
                }
        }
    }
    return n
}
$e(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
$e(["load", "prerender", "csr", "ssr", "actions", "trailingSlash", "config"]);
$e(["GET", "POST", "PATCH", "PUT", "DELETE", "prerender", "trailingSlash", "config"]);

function cn(a) {
    return a.filter(e => e != null)
}
const Ue = Gt(ye, Zt, Qt, Xt),
    ft = ye[0],
    je = ye[1];
ft();
je();
const z = ct(it) ? ? {},
    ne = ct(lt) ? ? {};

function Oe(a) {
    z[a] = re()
}

function fn({
    target: a
}) {
    var Xe;
    const e = document.documentElement,
        n = [],
        o = [];
    let i = null;
    const u = {
        before_navigate: [],
        after_navigate: []
    };
    let t = {
            branch: [],
            error: null,
            url: null
        },
        f = !1,
        h = !1,
        m = !0,
        w = !1,
        I = !1,
        P = !1,
        R = !1,
        C, L = (Xe = history.state) == null ? void 0 : Xe[V];
    L || (L = Date.now(), history.replaceState({ ...history.state,
        [V]: L
    }, "", location.href));
    const k = z[L];
    k && (history.scrollRestoration = "manual", scrollTo(k.x, k.y));
    let J, qe, ie;
    async function Ve() {
        ie = ie || Promise.resolve(), await ie, ie = null;
        const r = new URL(location.href),
            s = fe(r, !0);
        i = null, await Ge(s, r, [])
    }

    function Fe(r) {
        o.some(s => s == null ? void 0 : s.snapshot) && (ne[r] = o.map(s => {
            var c;
            return (c = s == null ? void 0 : s.snapshot) == null ? void 0 : c.capture()
        }))
    }

    function He(r) {
        var s;
        (s = ne[r]) == null || s.forEach((c, l) => {
            var p, d;
            (d = (p = o[l]) == null ? void 0 : p.snapshot) == null || d.restore(c)
        })
    }
    async function be(r, {
        noScroll: s = !1,
        replaceState: c = !1,
        keepFocus: l = !1,
        state: p = {},
        invalidateAll: d = !1
    }, g, _) {
        return typeof r == "string" && (r = new URL(r, xe(document))), de({
            url: r,
            scroll: s ? re() : null,
            keepfocus: l,
            redirect_chain: g,
            details: {
                state: p,
                replaceState: c
            },
            nav_token: _,
            accepted: () => {
                d && (R = !0)
            },
            blocked: () => {},
            type: "goto"
        })
    }
    async function Me(r) {
        const s = fe(r, !1);
        if (!s) throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);
        return i = {
            id: s.id,
            promise: Je(s).then(c => (c.type === "loaded" && c.state.error && (i = null), c))
        }, i.promise
    }
    async function le(...r) {
        const c = Ue.filter(l => r.some(p => l.exec(p))).map(l => Promise.all([...l.layouts, l.leaf].map(p => p == null ? void 0 : p[1]())));
        await Promise.all(c)
    }
    async function Ge(r, s, c, l, p, d = {}, g) {
        var b, v;
        qe = d;
        let _ = r && await Je(r);
        if (_ || (_ = await We(s, {
                id: null
            }, await ae(new Error(`Not found: ${s.pathname}`), {
                url: s,
                params: {},
                route: {
                    id: null
                }
            }), 404)), s = (r == null ? void 0 : r.url) || s, qe !== d) return !1;
        if (_.type === "redirect")
            if (c.length > 10 || c.includes(s.pathname)) _ = await ce({
                status: 500,
                error: await ae(new Error("Redirect loop"), {
                    url: s,
                    params: {},
                    route: {
                        id: null
                    }
                }),
                url: s,
                route: {
                    id: null
                }
            });
            else return be(new URL(_.location, s).href, {}, [...c, s.pathname], d), !1;
        else((v = (b = _.props) == null ? void 0 : b.page) == null ? void 0 : v.status) >= 400 && await H.updated.check() && await pe(s);
        if (n.length = 0, R = !1, w = !0, l && (Oe(l), Fe(l)), p && p.details) {
            const {
                details: E
            } = p, U = E.replaceState ? 0 : 1;
            if (E.state[V] = L += U, history[E.replaceState ? "replaceState" : "pushState"](E.state, "", s), !E.replaceState) {
                let N = L + 1;
                for (; ne[N] || z[N];) delete ne[N], delete z[N], N += 1
            }
        }
        if (i = null, h ? (t = _.state, _.props.page && (_.props.page.url = s), C.$set(_.props)) : Ke(_), p) {
            const {
                scroll: E,
                keepfocus: U
            } = p, {
                activeElement: N
            } = document;
            await he();
            const A = document.activeElement !== N && document.activeElement !== document.body;
            if (!U && !A && await Ne(), m) {
                const y = s.hash && document.getElementById(decodeURIComponent(s.hash.slice(1)));
                E ? scrollTo(E.x, E.y) : y ? y.scrollIntoView() : scrollTo(0, 0)
            }
        } else await he();
        m = !0, _.props.page && (J = _.props.page), g && g(), w = !1
    }

    function Ke(r) {
        var l;
        t = r.state;
        const s = document.querySelector("style[data-sveltekit]");
        s && s.remove(), J = r.props.page, C = new Wt({
            target: a,
            props: { ...r.props,
                stores: H,
                components: o
            },
            hydrate: !0
        }), He(L);
        const c = {
            from: null,
            to: {
                params: t.params,
                route: {
                    id: ((l = t.route) == null ? void 0 : l.id) ? ? null
                },
                url: new URL(location.href)
            },
            willUnload: !1,
            type: "enter"
        };
        u.after_navigate.forEach(p => p(c)), h = !0
    }
    async function te({
        url: r,
        params: s,
        branch: c,
        status: l,
        error: p,
        route: d,
        form: g
    }) {
        let _ = "never";
        for (const A of c)(A == null ? void 0 : A.slash) !== void 0 && (_ = A.slash);
        r.pathname = Lt(r.pathname, _), r.search = r.search;
        const b = {
            type: "loaded",
            state: {
                url: r,
                params: s,
                branch: c,
                error: p,
                route: d
            },
            props: {
                constructors: cn(c).map(A => A.node.component)
            }
        };
        g !== void 0 && (b.props.form = g);
        let v = {},
            E = !J,
            U = 0;
        for (let A = 0; A < Math.max(c.length, t.branch.length); A += 1) {
            const y = c[A],
                j = t.branch[A];
            (y == null ? void 0 : y.data) !== (j == null ? void 0 : j.data) && (E = !0), y && (v = { ...v,
                ...y.data
            }, E && (b.props[`data_${U}`] = v), U += 1)
        }
        return (!t.url || r.href !== t.url.href || t.error !== p || g !== void 0 && g !== J.form || E) && (b.props.page = {
            error: p,
            params: s,
            route: {
                id: (d == null ? void 0 : d.id) ? ? null
            },
            status: l,
            url: new URL(r),
            form: g ? ? null,
            data: E ? v : J.data
        }), b
    }
    async function ve({
        loader: r,
        parent: s,
        url: c,
        params: l,
        route: p,
        server_data_node: d
    }) {
        var v, E, U;
        let g = null;
        const _ = {
                dependencies: new Set,
                params: new Set,
                parent: !1,
                route: !1,
                url: !1
            },
            b = await r();
        if ((v = b.universal) != null && v.load) {
            let N = function(...y) {
                for (const j of y) {
                    const {
                        href: $
                    } = new URL(j, c);
                    _.dependencies.add($)
                }
            };
            const A = {
                route: {
                    get id() {
                        return _.route = !0, p.id
                    }
                },
                params: new Proxy(l, {
                    get: (y, j) => (_.params.add(j), y[j])
                }),
                data: (d == null ? void 0 : d.data) ? ? null,
                url: Ot(c, () => {
                    _.url = !0
                }),
                async fetch(y, j) {
                    let $;
                    y instanceof Request ? ($ = y.url, j = {
                        body: y.method === "GET" || y.method === "HEAD" ? void 0 : await y.blob(),
                        cache: y.cache,
                        credentials: y.credentials,
                        headers: y.headers,
                        integrity: y.integrity,
                        keepalive: y.keepalive,
                        method: y.method,
                        mode: y.mode,
                        redirect: y.redirect,
                        referrer: y.referrer,
                        referrerPolicy: y.referrerPolicy,
                        signal: y.signal,
                        ...j
                    }) : $ = y;
                    const q = new URL($, c);
                    return N(q.href), q.origin === c.origin && ($ = q.href.slice(c.origin.length)), h ? $t($, q.href, j) : Ct($, j)
                },
                setHeaders: () => {},
                depends: N,
                parent() {
                    return _.parent = !0, s()
                }
            };
            g = await b.universal.load.call(null, A) ? ? null, g = g ? await en(g) : null
        }
        return {
            node: b,
            loader: r,
            server: d,
            universal: (E = b.universal) != null && E.load ? {
                type: "data",
                data: g,
                uses: _
            } : null,
            data: g ? ? (d == null ? void 0 : d.data) ? ? null,
            slash: ((U = b.universal) == null ? void 0 : U.trailingSlash) ? ? (d == null ? void 0 : d.slash)
        }
    }

    function Be(r, s, c, l, p) {
        if (R) return !0;
        if (!l) return !1;
        if (l.parent && r || l.route && s || l.url && c) return !0;
        for (const d of l.params)
            if (p[d] !== t.params[d]) return !0;
        for (const d of l.dependencies)
            if (n.some(g => g(new URL(d)))) return !0;
        return !1
    }

    function Ee(r, s) {
        return (r == null ? void 0 : r.type) === "data" ? {
            type: "data",
            data: r.data,
            uses: {
                dependencies: new Set(r.uses.dependencies ? ? []),
                params: new Set(r.uses.params ? ? []),
                parent: !!r.uses.parent,
                route: !!r.uses.route,
                url: !!r.uses.url
            },
            slash: r.slash
        } : (r == null ? void 0 : r.type) === "skip" ? s ? ? null : null
    }
    async function Je({
        id: r,
        invalidating: s,
        url: c,
        params: l,
        route: p
    }) {
        if ((i == null ? void 0 : i.id) === r) return i.promise;
        const {
            errors: d,
            layouts: g,
            leaf: _
        } = p, b = [...g, _];
        d.forEach(S => S == null ? void 0 : S().catch(() => {})), b.forEach(S => S == null ? void 0 : S[1]().catch(() => {}));
        let v = null;
        const E = t.url ? r !== t.url.pathname + t.url.search : !1,
            U = t.route ? p.id !== t.route.id : !1;
        let N = !1;
        const A = b.map((S, D) => {
            var Y;
            const O = t.branch[D],
                T = !!(S != null && S[0]) && ((O == null ? void 0 : O.loader) !== S[1] || Be(N, U, E, (Y = O.server) == null ? void 0 : Y.uses, l));
            return T && (N = !0), T
        });
        if (A.some(Boolean)) {
            try {
                v = await un(c, A)
            } catch (S) {
                return ce({
                    status: S instanceof oe ? S.status : 500,
                    error: await ae(S, {
                        url: c,
                        params: l,
                        route: {
                            id: p.id
                        }
                    }),
                    url: c,
                    route: p
                })
            }
            if (v.type === "redirect") return v
        }
        const y = v == null ? void 0 : v.nodes;
        let j = !1;
        const $ = b.map(async (S, D) => {
            var ke;
            if (!S) return;
            const O = t.branch[D],
                T = y == null ? void 0 : y[D];
            if ((!T || T.type === "skip") && S[1] === (O == null ? void 0 : O.loader) && !Be(j, U, E, (ke = O.universal) == null ? void 0 : ke.uses, l)) return O;
            if (j = !0, (T == null ? void 0 : T.type) === "error") throw T;
            return ve({
                loader: S[1],
                url: c,
                params: l,
                route: p,
                parent: async () => {
                    var Qe;
                    const Ze = {};
                    for (let Se = 0; Se < D; Se += 1) Object.assign(Ze, (Qe = await $[Se]) == null ? void 0 : Qe.data);
                    return Ze
                },
                server_data_node: Ee(T === void 0 && S[0] ? {
                    type: "skip"
                } : T ? ? null, O == null ? void 0 : O.server)
            })
        });
        for (const S of $) S.catch(() => {});
        const q = [];
        for (let S = 0; S < b.length; S += 1)
            if (b[S]) try {
                q.push(await $[S])
            } catch (D) {
                if (D instanceof ot) return {
                    type: "redirect",
                    location: D.location
                };
                let O = 500,
                    T;
                if (y != null && y.includes(D)) O = D.status ? ? O, T = D.error;
                else if (D instanceof oe) O = D.status, T = D.body;
                else {
                    if (await H.updated.check()) return await pe(c);
                    T = await ae(D, {
                        params: l,
                        url: c,
                        route: {
                            id: p.id
                        }
                    })
                }
                const Y = await Ye(S, q, d);
                return Y ? await te({
                    url: c,
                    params: l,
                    branch: q.slice(0, Y.idx).concat(Y.node),
                    status: O,
                    error: T,
                    route: p
                }) : await We(c, {
                    id: p.id
                }, T, O)
            } else q.push(void 0);
        return await te({
            url: c,
            params: l,
            branch: q,
            status: 200,
            error: null,
            route: p,
            form: s ? void 0 : null
        })
    }
    async function Ye(r, s, c) {
        for (; r--;)
            if (c[r]) {
                let l = r;
                for (; !s[l];) l -= 1;
                try {
                    return {
                        idx: l + 1,
                        node: {
                            node: await c[r](),
                            loader: c[r],
                            data: {},
                            server: null,
                            universal: null
                        }
                    }
                } catch {
                    continue
                }
            }
    }
    async function ce({
        status: r,
        error: s,
        url: c,
        route: l
    }) {
        const p = {},
            g = await ve({
                loader: ft,
                url: c,
                params: p,
                route: l,
                parent: () => Promise.resolve({}),
                server_data_node: Ee(null)
            }),
            _ = {
                node: await je(),
                loader: je,
                universal: null,
                server: null,
                data: null
            };
        return await te({
            url: c,
            params: p,
            branch: [g, _],
            status: r,
            error: s,
            route: null
        })
    }

    function fe(r, s) {
        if (tt(r, X)) return;
        const c = ue(r);
        for (const l of Ue) {
            const p = l.exec(c);
            if (p) return {
                id: r.pathname + r.search,
                invalidating: s,
                route: l,
                params: Pt(p),
                url: r
            }
        }
    }

    function ue(r) {
        return At(r.pathname.slice(X.length) || "/")
    }

    function ze({
        url: r,
        type: s,
        intent: c,
        delta: l
    }) {
        var _, b;
        let p = !1;
        const d = {
            from: {
                params: t.params,
                route: {
                    id: ((_ = t.route) == null ? void 0 : _.id) ? ? null
                },
                url: t.url
            },
            to: {
                params: (c == null ? void 0 : c.params) ? ? null,
                route: {
                    id: ((b = c == null ? void 0 : c.route) == null ? void 0 : b.id) ? ? null
                },
                url: r
            },
            willUnload: !c,
            type: s
        };
        l !== void 0 && (d.delta = l);
        const g = { ...d,
            cancel: () => {
                p = !0
            }
        };
        return I || u.before_navigate.forEach(v => v(g)), p ? null : d
    }
    async function de({
        url: r,
        scroll: s,
        keepfocus: c,
        redirect_chain: l,
        details: p,
        type: d,
        delta: g,
        nav_token: _,
        accepted: b,
        blocked: v
    }) {
        const E = fe(r, !1),
            U = ze({
                url: r,
                type: d,
                delta: g,
                intent: E
            });
        if (!U) {
            v();
            return
        }
        const N = L;
        b(), I = !0, h && H.navigating.set(U), await Ge(E, r, l, N, {
            scroll: s,
            keepfocus: c,
            details: p
        }, _, () => {
            I = !1, u.after_navigate.forEach(A => A(U)), H.navigating.set(null)
        })
    }
    async function We(r, s, c, l) {
        return r.origin === location.origin && r.pathname === location.pathname && !f ? await ce({
            status: l,
            error: c,
            url: r,
            route: s
        }) : await pe(r)
    }

    function pe(r) {
        return location.href = r.href, new Promise(() => {})
    }

    function ut() {
        let r;
        e.addEventListener("mousemove", d => {
            const g = d.target;
            clearTimeout(r), r = setTimeout(() => {
                l(g, 2)
            }, 20)
        });

        function s(d) {
            l(d.composedPath()[0], 1)
        }
        e.addEventListener("mousedown", s), e.addEventListener("touchstart", s, {
            passive: !0
        });
        const c = new IntersectionObserver(d => {
            for (const g of d) g.isIntersecting && (le(ue(new URL(g.target.href))), c.unobserve(g.target))
        }, {
            threshold: 0
        });

        function l(d, g) {
            const _ = et(d, e);
            if (!_) return;
            const {
                url: b,
                external: v
            } = Le(_, X);
            if (v) return;
            const E = me(_);
            E.reload || (g <= E.preload_data ? Me(b) : g <= E.preload_code && le(ue(b)))
        }

        function p() {
            c.disconnect();
            for (const d of e.querySelectorAll("a")) {
                const {
                    url: g,
                    external: _
                } = Le(d, X);
                if (_) continue;
                const b = me(d);
                b.reload || (b.preload_code === nt.viewport && c.observe(d), b.preload_code === nt.eager && le(ue(g)))
            }
        }
        u.after_navigate.push(p), p()
    }
    return {
        after_navigate: r => {
            Te(() => (u.after_navigate.push(r), () => {
                const s = u.after_navigate.indexOf(r);
                u.after_navigate.splice(s, 1)
            }))
        },
        before_navigate: r => {
            Te(() => (u.before_navigate.push(r), () => {
                const s = u.before_navigate.indexOf(r);
                u.before_navigate.splice(s, 1)
            }))
        },
        disable_scroll_handling: () => {
            (w || !h) && (m = !1)
        },
        goto: (r, s = {}) => be(r, s, []),
        invalidate: r => {
            if (typeof r == "function") n.push(r);
            else {
                const {
                    href: s
                } = new URL(r, location.href);
                n.push(c => c.href === s)
            }
            return Ve()
        },
        invalidateAll: () => (R = !0, Ve()),
        preload_data: async r => {
            const s = new URL(r, xe(document));
            await Me(s)
        },
        preload_code: le,
        apply_action: async r => {
            if (r.type === "error") {
                const s = new URL(location.href),
                    {
                        branch: c,
                        route: l
                    } = t;
                if (!l) return;
                const p = await Ye(t.branch.length, c, l.errors);
                if (p) {
                    const d = await te({
                        url: s,
                        params: t.params,
                        branch: c.slice(0, p.idx).concat(p.node),
                        status: r.status ? ? 500,
                        error: r.error,
                        route: l
                    });
                    t = d.state, C.$set(d.props), he().then(Ne)
                }
            } else if (r.type === "redirect") be(r.location, {
                invalidateAll: !0
            }, []);
            else {
                const s = {
                    form: r.data,
                    page: { ...J,
                        form: r.data,
                        status: r.status
                    }
                };
                C.$set(s), r.type === "success" && he().then(Ne)
            }
        },
        _start_router: () => {
            var r;
            history.scrollRestoration = "manual", addEventListener("beforeunload", s => {
                var l;
                let c = !1;
                if (!I) {
                    const p = {
                        from: {
                            params: t.params,
                            route: {
                                id: ((l = t.route) == null ? void 0 : l.id) ? ? null
                            },
                            url: t.url
                        },
                        to: null,
                        willUnload: !0,
                        type: "leave",
                        cancel: () => c = !0
                    };
                    u.before_navigate.forEach(d => d(p))
                }
                c ? (s.preventDefault(), s.returnValue = "") : history.scrollRestoration = "auto"
            }), addEventListener("visibilitychange", () => {
                document.visibilityState === "hidden" && (Oe(L), at(it, z), Fe(L), at(lt, ne))
            }), (r = navigator.connection) != null && r.saveData || ut(), e.addEventListener("click", s => {
                if (s.button || s.which !== 1 || s.metaKey || s.ctrlKey || s.shiftKey || s.altKey || s.defaultPrevented) return;
                const c = et(s.composedPath()[0], e);
                if (!c) return;
                const {
                    url: l,
                    external: p,
                    target: d
                } = Le(c, X);
                if (!l) return;
                if (d === "_parent" || d === "_top") {
                    if (window.parent !== window) return
                } else if (d && d !== "_self") return;
                const g = me(c);
                if (!(c instanceof SVGAElement) && l.protocol !== location.protocol && !(l.protocol === "https:" || l.protocol === "http:")) return;
                if (p || g.reload) {
                    ze({
                        url: l,
                        type: "link"
                    }) || s.preventDefault(), I = !0;
                    return
                }
                const [b, v] = l.href.split("#");
                if (v !== void 0 && b === location.href.split("#")[0]) {
                    P = !0, Oe(L), t.url = l, H.page.set({ ...J,
                        url: l
                    }), H.page.notify();
                    return
                }
                de({
                    url: l,
                    scroll: g.noscroll ? re() : null,
                    keepfocus: !1,
                    redirect_chain: [],
                    details: {
                        state: {},
                        replaceState: l.href === location.href
                    },
                    accepted: () => s.preventDefault(),
                    blocked: () => s.preventDefault(),
                    type: "link"
                })
            }), e.addEventListener("submit", s => {
                if (s.defaultPrevented) return;
                const c = HTMLFormElement.prototype.cloneNode.call(s.target),
                    l = s.submitter;
                if (((l == null ? void 0 : l.formMethod) || c.method) !== "get") return;
                const d = new URL((l == null ? void 0 : l.hasAttribute("formaction")) && (l == null ? void 0 : l.formAction) || c.action);
                if (tt(d, X)) return;
                const g = s.target,
                    {
                        noscroll: _,
                        reload: b
                    } = me(g);
                if (b) return;
                s.preventDefault(), s.stopPropagation();
                const v = new FormData(g),
                    E = l == null ? void 0 : l.getAttribute("name");
                E && v.append(E, (l == null ? void 0 : l.getAttribute("value")) ? ? ""), d.search = new URLSearchParams(v).toString(), de({
                    url: d,
                    scroll: _ ? re() : null,
                    keepfocus: !1,
                    redirect_chain: [],
                    details: {
                        state: {},
                        replaceState: !1
                    },
                    nav_token: {},
                    accepted: () => {},
                    blocked: () => {},
                    type: "form"
                })
            }), addEventListener("popstate", async s => {
                var c;
                if ((c = s.state) != null && c[V]) {
                    if (s.state[V] === L) return;
                    const l = z[s.state[V]];
                    if (t.url.href.split("#")[0] === location.href.split("#")[0]) {
                        z[L] = re(), L = s.state[V], scrollTo(l.x, l.y);
                        return
                    }
                    const p = s.state[V] - L;
                    let d = !1;
                    await de({
                        url: new URL(location.href),
                        scroll: l,
                        keepfocus: !1,
                        redirect_chain: [],
                        details: null,
                        accepted: () => {
                            L = s.state[V]
                        },
                        blocked: () => {
                            history.go(-p), d = !0
                        },
                        type: "popstate",
                        delta: p
                    }), d || He(L)
                }
            }), addEventListener("hashchange", () => {
                P && (P = !1, history.replaceState({ ...history.state,
                    [V]: ++L
                }, "", location.href))
            });
            for (const s of document.querySelectorAll("link")) s.rel === "icon" && (s.href = s.href);
            addEventListener("pageshow", s => {
                s.persisted && H.navigating.set(null)
            })
        },
        _hydrate: async ({
            status: r = 200,
            error: s,
            node_ids: c,
            params: l,
            route: p,
            data: d,
            form: g
        }) => {
            f = !0;
            const _ = new URL(location.href);
            ({
                params: l = {},
                route: p = {
                    id: null
                }
            } = fe(_, !1) || {});
            let b;
            try {
                const v = c.map(async (E, U) => {
                    const N = d[U];
                    return ve({
                        loader: ye[E],
                        url: _,
                        params: l,
                        route: p,
                        parent: async () => {
                            const A = {};
                            for (let y = 0; y < U; y += 1) Object.assign(A, (await v[y]).data);
                            return A
                        },
                        server_data_node: Ee(N)
                    })
                });
                b = await te({
                    url: _,
                    params: l,
                    branch: await Promise.all(v),
                    status: r,
                    error: s,
                    form: g,
                    route: Ue.find(({
                        id: E
                    }) => E === p.id) ? ? null
                })
            } catch (v) {
                if (v instanceof ot) {
                    await pe(new URL(v.location, location.href));
                    return
                }
                b = await ce({
                    status: v instanceof oe ? v.status : 500,
                    error: await ae(v, {
                        url: _,
                        params: l,
                        route: p
                    }),
                    url: _,
                    route: p
                })
            }
            Ke(b)
        }
    }
}
async function un(a, e) {
    var u;
    const n = new URL(a);
    n.pathname = jt(a.pathname), n.searchParams.append("x-sveltekit-invalidated", e.map(t => t ? "1" : "").join("_"));
    const o = await we(n.href),
        i = await o.json();
    if (!o.ok) throw new oe(o.status, i);
    return (u = i.nodes) == null || u.forEach(t => {
        (t == null ? void 0 : t.type) === "data" && (t.data = ln(t.data), t.uses = {
            dependencies: new Set(t.uses.dependencies ? ? []),
            params: new Set(t.uses.params ? ? []),
            parent: !!t.uses.parent,
            route: !!t.uses.route,
            url: !!t.uses.url
        })
    }), i
}

function ae(a, e) {
    return a instanceof oe ? a.body : xt.handleError({
        error: a,
        event: e
    }) ? ? {
        message: e.route.id != null ? "Internal Error" : "Not Found"
    }
}

function Ne() {
    const a = document.querySelector("[autofocus]");
    if (a) a.focus();
    else {
        const e = document.body,
            n = e.getAttribute("tabindex");
        return e.tabIndex = -1, e.focus({
            preventScroll: !0
        }), n !== null ? e.setAttribute("tabindex", n) : e.removeAttribute("tabindex"), new Promise(o => {
            setTimeout(() => {
                var i;
                o((i = getSelection()) == null ? void 0 : i.removeAllRanges())
            })
        })
    }
}
async function gn({
    assets: a,
    env: e,
    hydrate: n,
    target: o,
    version: i
}) {
    Rt(a), It(i);
    const u = fn({
        target: o
    });
    St({
        client: u
    }), n ? await u._hydrate(n) : u.goto(location.href, {
        replaceState: !0
    }), u._start_router()
}
export {
    gn as start
};