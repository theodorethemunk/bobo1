import {
    S as u,
    i as r,
    s as c,
    c as f,
    a as _,
    h as d,
    d as i,
    b as p,
    e as h,
    u as m,
    g as $,
    f as g,
    t as b,
    j as v
} from "../../chunks/index-44b72b6b.js";

function y(o) {
    let s, a;
    const l = o[1].default,
        t = f(l, o, o[0], null);
    return {
        c() {
            s = _(), t && t.c(), this.h()
        },
        l(e) {
            d("svelte-megzen", document.head).forEach(i), s = p(e), t && t.l(e), this.h()
        },
        h() {
            document.title = "Find Bobo"
        },
        m(e, n) {
            h(e, s, n), t && t.m(e, n), a = !0
        },
        p(e, [n]) {
            t && t.p && (!a || n & 1) && m(t, l, e, e[0], a ? g(l, e[0], n, null) : $(e[0]), null)
        },
        i(e) {
            a || (b(t, e), a = !0)
        },
        o(e) {
            v(t, e), a = !1
        },
        d(e) {
            e && i(s), t && t.d(e)
        }
    }
}

function S(o, s, a) {
    let {
        $$slots: l = {},
        $$scope: t
    } = s;
    return o.$$set = e => {
        "$$scope" in e && a(0, t = e.$$scope)
    }, [t, l]
}
class q extends u {
    constructor(s) {
        super(), r(this, s, S, y, c, {})
    }
}
export {
    q as
    default
};