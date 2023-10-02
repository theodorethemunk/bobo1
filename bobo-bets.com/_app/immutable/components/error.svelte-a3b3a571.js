import {
    S,
    i as q,
    s as x,
    k as f,
    l as _,
    a as k,
    m as d,
    n as g,
    o as v,
    d as l,
    b as y,
    e as m,
    p as h,
    q as $,
    r as E,
    v as C
} from "../chunks/index-44b72b6b.js";
import {
    s as H
} from "../chunks/singletons-f3b5d5c8.js";
const P = () => {
        const s = H;
        return {
            page: {
                subscribe: s.page.subscribe
            },
            navigating: {
                subscribe: s.navigating.subscribe
            },
            updated: s.updated
        }
    },
    j = {
        subscribe(s) {
            return P().page.subscribe(s)
        }
    };

function w(s) {
    var b;
    let t, r = s[0].status + "",
        o, n, i, p = ((b = s[0].error) == null ? void 0 : b.message) + "",
        u;
    return {
        c() {
            t = f("h1"), o = _(r), n = k(), i = f("p"), u = _(p)
        },
        l(e) {
            t = d(e, "H1", {});
            var a = g(t);
            o = v(a, r), a.forEach(l), n = y(e), i = d(e, "P", {});
            var c = g(i);
            u = v(c, p), c.forEach(l)
        },
        m(e, a) {
            m(e, t, a), h(t, o), m(e, n, a), m(e, i, a), h(i, u)
        },
        p(e, [a]) {
            var c;
            a & 1 && r !== (r = e[0].status + "") && $(o, r), a & 1 && p !== (p = ((c = e[0].error) == null ? void 0 : c.message) + "") && $(u, p)
        },
        i: E,
        o: E,
        d(e) {
            e && l(t), e && l(n), e && l(i)
        }
    }
}

function z(s, t, r) {
    let o;
    return C(s, j, n => r(0, o = n)), [o]
}
let D = class extends S {
    constructor(t) {
        super(), q(this, t, z, w, x, {})
    }
};
export {
    D as
    default
};