function w() {}

function G(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function k(t) {
    return t()
}

function T() {
    return Object.create(null)
}

function p(t) {
    t.forEach(k)
}

function q(t) {
    return typeof t == "function"
}

function ut(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let g;

function ot(t, e) {
    return g || (g = document.createElement("a")), g.href = e, t === g.href
}

function I(t) {
    return Object.keys(t).length === 0
}

function J(t, ...e) {
    if (t == null) return w;
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function st(t, e, n) {
    t.$$.on_destroy.push(J(e, n))
}

function ft(t, e, n, i) {
    if (t) {
        const r = B(t, e, n, i);
        return t[0](r)
    }
}

function B(t, e, n, i) {
    return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function at(t, e, n, i) {
    if (t[2] && i) {
        const r = t[2](i(n));
        if (e.dirty === void 0) return r;
        if (typeof r == "object") {
            const s = [],
                c = Math.max(e.dirty.length, r.length);
            for (let o = 0; o < c; o += 1) s[o] = e.dirty[o] | r[o];
            return s
        }
        return e.dirty | r
    }
    return e.dirty
}

function _t(t, e, n, i, r, s) {
    if (r) {
        const c = B(e, n, i, s);
        t.p(c, r)
    }
}

function dt(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}
let E = !1;

function K() {
    E = !0
}

function R() {
    E = !1
}

function W(t, e, n, i) {
    for (; t < e;) {
        const r = t + (e - t >> 1);
        n(r) <= i ? t = r + 1 : e = r
    }
    return t
}

function Q(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const l = [];
        for (let u = 0; u < e.length; u++) {
            const a = e[u];
            a.claim_order !== void 0 && l.push(a)
        }
        e = l
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let r = 0;
    for (let l = 0; l < e.length; l++) {
        const u = e[l].claim_order,
            a = (r > 0 && e[n[r]].claim_order <= u ? r + 1 : W(1, r, y => e[n[y]].claim_order, u)) - 1;
        i[l] = n[a] + 1;
        const f = a + 1;
        n[f] = l, r = Math.max(f, r)
    }
    const s = [],
        c = [];
    let o = e.length - 1;
    for (let l = n[r] + 1; l != 0; l = i[l - 1]) {
        for (s.push(e[l - 1]); o >= l; o--) c.push(e[o]);
        o--
    }
    for (; o >= 0; o--) c.push(e[o]);
    s.reverse(), c.sort((l, u) => l.claim_order - u.claim_order);
    for (let l = 0, u = 0; l < c.length; l++) {
        for (; u < s.length && c[l].claim_order >= s[u].claim_order;) u++;
        const a = u < s.length ? s[u] : null;
        t.insertBefore(c[l], a)
    }
}

function U(t, e) {
    if (E) {
        for (Q(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function ht(t, e, n) {
    E && !n ? U(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function V(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function X(t) {
    return document.createElement(t)
}

function Y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function S(t) {
    return document.createTextNode(t)
}

function mt() {
    return S(" ")
}

function pt() {
    return S("")
}

function yt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function Z(t) {
    return Array.from(t.childNodes)
}

function tt(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function H(t, e, n, i, r = !1) {
    tt(t);
    const s = (() => {
        for (let c = t.claim_info.last_index; c < t.length; c++) {
            const o = t[c];
            if (e(o)) {
                const l = n(o);
                return l === void 0 ? t.splice(c, 1) : t[c] = l, r || (t.claim_info.last_index = c), o
            }
        }
        for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
            const o = t[c];
            if (e(o)) {
                const l = n(o);
                return l === void 0 ? t.splice(c, 1) : t[c] = l, r ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = c, o
            }
        }
        return i()
    })();
    return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s
}

function O(t, e, n, i) {
    return H(t, r => r.nodeName === e, r => {
        const s = [];
        for (let c = 0; c < r.attributes.length; c++) {
            const o = r.attributes[c];
            n[o.name] || s.push(o.name)
        }
        s.forEach(c => r.removeAttribute(c))
    }, () => i(e))
}

function gt(t, e, n) {
    return O(t, e, n, X)
}

function xt(t, e, n) {
    return O(t, e, n, Y)
}

function et(t, e) {
    return H(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => S(e), !0)
}

function bt(t) {
    return et(t, " ")
}

function $t(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e)
}

function wt(t, e, n, i) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}

function Et(t, e) {
    const n = [];
    let i = 0;
    for (const r of e.childNodes)
        if (r.nodeType === 8) {
            const s = r.textContent.trim();
            s === `HEAD_${t}_END` ? (i -= 1, n.push(r)) : s === `HEAD_${t}_START` && (i += 1, n.push(r))
        } else i > 0 && n.push(r);
    return n
}

function vt(t, e) {
    return new t(e)
}
let m;

function h(t) {
    m = t
}

function P() {
    if (!m) throw new Error("Function called outside component initialization");
    return m
}

function Nt(t) {
    P().$$.on_mount.push(t)
}

function At(t) {
    P().$$.after_update.push(t)
}
const d = [],
    M = [],
    b = [],
    D = [],
    z = Promise.resolve();
let N = !1;

function F() {
    N || (N = !0, z.then(L))
}

function St() {
    return F(), z
}

function A(t) {
    b.push(t)
}
const v = new Set;
let x = 0;

function L() {
    const t = m;
    do {
        for (; x < d.length;) {
            const e = d[x];
            x++, h(e), nt(e.$$)
        }
        for (h(null), d.length = 0, x = 0; M.length;) M.pop()();
        for (let e = 0; e < b.length; e += 1) {
            const n = b[e];
            v.has(n) || (v.add(n), n())
        }
        b.length = 0
    } while (d.length);
    for (; D.length;) D.pop()();
    N = !1, v.clear(), h(t)
}

function nt(t) {
    if (t.fragment !== null) {
        t.update(), p(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
    }
}
const $ = new Set;
let _;

function jt() {
    _ = {
        r: 0,
        c: [],
        p: _
    }
}

function Ct() {
    _.r || p(_.c), _ = _.p
}

function it(t, e) {
    t && t.i && ($.delete(t), t.i(e))
}

function Tt(t, e, n, i) {
    if (t && t.o) {
        if ($.has(t)) return;
        $.add(t), _.c.push(() => {
            $.delete(t), i && (n && t.d(1), i())
        }), t.o(e)
    } else i && i()
}

function Mt(t) {
    t && t.c()
}

function Dt(t, e) {
    t && t.l(e)
}

function rt(t, e, n, i) {
    const {
        fragment: r,
        after_update: s
    } = t.$$;
    r && r.m(e, n), i || A(() => {
        const c = t.$$.on_mount.map(k).filter(q);
        t.$$.on_destroy ? t.$$.on_destroy.push(...c) : p(c), t.$$.on_mount = []
    }), s.forEach(A)
}

function ct(t, e) {
    const n = t.$$;
    n.fragment !== null && (p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function lt(t, e) {
    t.$$.dirty[0] === -1 && (d.push(t), F(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function kt(t, e, n, i, r, s, c, o = [-1]) {
    const l = m;
    h(t);
    const u = t.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: w,
        not_equal: r,
        bound: T(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (l ? l.$$.context : [])),
        callbacks: T(),
        dirty: o,
        skip_bound: !1,
        root: e.target || l.$$.root
    };
    c && c(u.root);
    let a = !1;
    if (u.ctx = n ? n(t, e.props || {}, (f, y, ...j) => {
            const C = j.length ? j[0] : y;
            return u.ctx && r(u.ctx[f], u.ctx[f] = C) && (!u.skip_bound && u.bound[f] && u.bound[f](C), a && lt(t, f)), y
        }) : [], u.update(), a = !0, p(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
        if (e.hydrate) {
            K();
            const f = Z(e.target);
            u.fragment && u.fragment.l(f), f.forEach(V)
        } else u.fragment && u.fragment.c();
        e.intro && it(t.$$.fragment), rt(t, e.target, e.anchor, e.customElement), R(), L()
    }
    h(l)
}
class qt {
    $destroy() {
        ct(this, 1), this.$destroy = w
    }
    $on(e, n) {
        if (!q(n)) return w;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), () => {
            const r = i.indexOf(n);
            r !== -1 && i.splice(r, 1)
        }
    }
    $set(e) {
        this.$$set && !I(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
export {
    Mt as A, Dt as B, rt as C, ct as D, Nt as E, pt as F, jt as G, Ct as H, At as I, wt as J, M as K, vt as L, St as M, qt as S, mt as a, bt as b, ft as c, V as d, ht as e, at as f, dt as g, Et as h, kt as i, Tt as j, X as k, S as l, gt as m, Z as n, et as o, U as p, $t as q, w as r, ut as s, it as t, _t as u, st as v, yt as w, ot as x, Y as y, xt as z
};