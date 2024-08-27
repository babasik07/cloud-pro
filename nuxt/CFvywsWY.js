import { _ as Fe } from "./Qu9TemJM.js";
import { I as Te } from "./BK49Amkq.js";
import { X as kr, o as pt, c as ht, F as ue, l as ce, a as v, d as Nt, t as ot, b as ft, w as le, g as ut, Y as Yt, k as Ct, Z as qt, B as Dt, N as Cr, P as Ar, Q as yt, _ as Nr, A as Vr, y as Ot, C as Xt, h as jr, i as Lr, $ as Mr } from "./DkmPUy5X.js";
import { _ as $r } from "./DlAUqK2U.js";
import { _ as Fr } from "./I81M9Kyj.js";
import { u as Tr } from "./DH0SFBRw.js";
import { u as Dr } from "./CfuTB1_-.js";
import { u as Ur } from "./weCuNnw3.js";
import { P as Or } from "./lkGBfNza.js";
import { R as zr } from "./DavNGxsQ.js";
import "./DxEWXAgR.js";
const Br = { class: "w-full pb-2 md:mt-7 md:rounded-lg md:border md:border-solid md:border-border-main md:pb-0" },
    Ir = Yt('<div class="hidden w-full rounded-t-lg bg-grey-map md:flex md:justify-between"><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Memory</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">vCPUs</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Bandwidth</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Storage</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Connection</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Monthly Price</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Hourly Price</span><span class="mr-7 flex h-[50px] w-10 items-center justify-center text-subtitle1 text-text-primary"></span></div>', 1),
    Rr = ["id", "href"],
    Hr = { class: "flex h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:w-[7.3rem] md:justify-center md:text-body1" },
    qr = v("span", { class: "hidden whitespace-pre md:inline" }, " GB", -1),
    Xr = v("span", { class: "pl-1 md:hidden md:pl-0" }, " GB Memory", -1),
    Gr = { class: "flex h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:w-[7.3rem] md:justify-center md:text-body1" },
    Yr = v("span", { class: "hidden whitespace-pre md:inline" }, " vCPU", -1),
    Wr = v("span", { class: "pl-1 md:hidden md:pl-0" }, " vCPUs", -1),
    Kr = { class: "flex h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:w-[7.3rem] md:justify-center md:text-body1" },
    Zr = v("span", { class: "hidden whitespace-pre md:inline" }, " TB", -1),
    Jr = v("span", { class: "pl-1 md:hidden md:pl-0" }, " TB Bandwidth", -1),
    Qr = { class: "flex h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:w-[7.3rem] md:justify-center md:text-body1" },
    ti = v("span", { class: "hidden whitespace-pre md:inline" }, " GB", -1),
    ei = v("span", { class: "pl-1 md:hidden md:pl-0" }, " GB Storage", -1),
    ri = v("div", { class: "flex h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:w-[7.3rem] md:justify-center md:text-body1" }, [Nt(" 10"), v("span", { class: "hidden whitespace-pre md:inline" }, " Gbps"), v("span", { class: "pl-1 md:hidden md:pl-0" }, " Gbps Connection")], -1),
    ii = v("div", { class: "my-3 h-px w-full bg-grey-200 md:hidden" }, null, -1),
    ni = { class: "flex h-[50px] w-[112px] items-center text-subtitle1 text-text-primary transition group-hover:text-primary-dark sm:w-[126px] md:w-[7.3rem] md:justify-center md:text-text-secondary" },
    si = { key: 0, class: "flex flex-col" },
    oi = { class: "text-secondary-dark" },
    ai = { class: "text-center text-caption text-grey-400" },
    li = { key: 1 },
    di = { class: "flex h-[50px] w-[112px] items-center text-subtitle1 text-text-primary transition group-hover:text-primary-dark sm:w-[126px] md:w-[7.3rem] md:justify-center md:text-text-secondary" },
    ui = { key: 0, class: "flex flex-col" },
    ci = { class: "text-body1" },
    pi = { class: "text-center text-caption text-grey-400" },
    mi = { key: 1, class: "flex h-[50px] w-[112px] items-center text-body2 text-text-primary text-text-secondary transition group-hover:text-primary-dark sm:w-[126px] md:w-[7.3rem] md:justify-center md:text-body1 md:text-text-secondary" },
    fi = { class: "ml-auto flex h-10 w-10 items-center justify-center rounded bg-primary-light text-primary-main transition group-hover:bg-primary-dark group-hover:text-white-default md:ml-0 md:mr-7 md:grow-0" },
    hi = { __name: "PricingTable", props: ["products", "region", "os"], setup(C) { const x = C,
                p = K => K.priceItems.find(N => N.id === "BASE_PRICE"); return (K, N) => { const at = kr("strike"); return pt(), ht("div", Br, [Ir, (pt(!0), ht(ue, null, ce(x.products, P => (pt(), ht("a", { id: p(P).monthlyPrice.toFixed(2), key: P.id, target: "_blank", href: `cart/createvps?region=${x.region.id}&ram=${P.plan.specification.ram}&osId=${x.os.id}&osFamily=${x.os.family}`, class: "pricingPageCTAs hover:bg-primary-contrastText group flex flex-wrap items-center rounded-lg border-0 border-solid border-border-main px-4 py-3 text-inherit no-underline shadow-0.5 transition hover:text-primary-dark max-md:mt-2 md:flex-nowrap md:justify-between md:rounded-none md:border-0 md:border-b md:px-0 md:shadow-none md:last:border-none", draggable: "true" }, [v("div", Hr, [Nt(ot(P.plan.specification.ram), 1), qr, Xr]), v("div", Gr, [Nt(ot(P.plan.specification.cpu), 1), Yr, Wr]), v("div", Kr, [Nt(ot(P.plan.specification.bandwidthInTB), 1), Zr, Jr]), v("div", Qr, [Nt(ot(P.plan.specification.storage), 1), ti, ei]), ri, ii, v("span", ni, [P.discountPercent ? (pt(), ht("span", si, [v("span", oi, " $" + ot(p(P).monthlyPrice.toFixed(2)) + " /m", 1), v("span", ai, [ft(at, null, { default: le(() => [Nt(" $ " + ot(p(P).monthlyPriceWithoutDiscount.toFixed(2)), 1)]), _: 2 }, 1024)])])) : (pt(), ht("span", li, "$" + ot(p(P).monthlyPrice.toFixed(2)) + " /m", 1))]), v("span", di, [P.discountPercent ? (pt(), ht("span", ui, [v("span", ci, "$ " + ot(p(P).hourlyPrice.toFixed(4)) + " /h", 1), v("span", pi, [ft(at, null, { default: le(() => [Nt("$ " + ot(p(P).hourlyPriceWithoutDiscount.toFixed(4)) + "/h ", 1)]), _: 2 }, 1024)])])) : (pt(), ht("span", mi, "$" + ot(p(P).hourlyPrice.toFixed(2)) + " /h", 1))]), v("div", fi, [ft(ut(Te))])], 8, Rr))), 128))]) } } },
    xi = { class: "w-full pb-2 md:mt-7 md:rounded-lg md:border md:border-solid md:border-border-main md:pb-0" },
    vi = Yt('<div class="hidden w-full rounded-t-lg bg-grey-map md:flex md:justify-between"><span class="flex h-[50px] w-[4rem] items-center justify-center text-subtitle1 text-text-primary"></span><span class="flex h-[50px] w-[7.3rem] items-center text-subtitle1 text-text-primary">Applications</span><span class="flex h-[50px] w-[13rem] items-center text-subtitle1 text-text-primary">Operating Systems</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Category</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary"></span></div>', 1),
    gi = ["id", "href"],
    yi = { class: "flex h-8 w-1/2 items-center justify-start text-subtitle1 text-text-secondary transition group-hover:text-primary-dark md:hidden md:w-[4rem] md:justify-end" },
    bi = { class: "hidden h-8 w-1/2 items-center justify-start text-body2 text-text-secondary transition group-hover:text-primary-dark md:flex md:w-[4rem] md:justify-end md:text-body1" },
    wi = { class: "hidden h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:flex md:w-[7.3rem] md:text-body1" },
    _i = { class: "hidden h-8 w-1/2 items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:flex md:w-[15rem] md:text-body1" },
    Si = v("div", { class: "my-3 h-px w-full bg-grey-200 md:hidden" }, null, -1),
    Pi = { class: "flex h-[50px] w-[112px] items-center justify-start text-body1 capitalize text-text-primary transition group-hover:text-primary-dark sm:w-[126px] md:w-[8rem] md:text-text-secondary" },
    Ei = { class: "ml-auto flex h-10 w-10 items-center justify-center rounded bg-primary-light text-primary-main transition group-hover:bg-primary-dark group-hover:text-white-default md:ml-0 md:mr-7 md:grow-0" },
    ki = { __name: "AppsTable", props: ["region", "apps"], setup(C) { const x = C,
                p = [{ name: "WordPress", oses: "Ubuntu 18.04, 20.04, 22.04", category: "CMS", appVersion: "6.0.3", image: { src: "/pricing-static/apps/wordpress.png", alt: "wordpress" } }, { name: "Metatrader5", oses: "Windows 2012", appVersion: "5.0.3", category: "financial tools", image: { src: "/pricing-static/apps/metatrader5.png", alt: "metatrader 5" } }],
                K = Ct(() => p.map(N => ({...N, data: x.apps.find(at => N.name === at.name) }))); return (N, at) => { const P = Fe; return pt(), ht("div", xi, [vi, (pt(!0), ht(ue, null, ce(ut(K), E => (pt(), ht("a", { id: E.name, key: E.name + E.oses, target: "_blank", href: `cart/createvps?region=${x.region.id}&ram=4&osFamily=${E.data.osFamily}&appName=${E.name.toLowerCase()}`, class: "pricingPageCTAs hover:bg-primary-contrastText group flex flex-wrap items-center rounded-lg border-0 border-solid border-border-main px-4 py-3 text-inherit no-underline shadow-0.5 transition hover:text-primary-dark max-md:mt-2 md:flex-nowrap md:justify-between md:rounded-none md:border-0 md:border-b md:px-0 md:shadow-none md:last:border-none", draggable: "true" }, [v("div", yi, [ft(P, { src: E.image.src, alt: E.image.alt, width: "32", class: "mr-4" }, null, 8, ["src", "alt"]), Nt(" " + ot(E.name), 1)]), v("div", bi, [ft(P, { src: E.image.src, alt: E.image.alt, width: "32" }, null, 8, ["src", "alt"])]), v("div", wi, ot(E.name), 1), v("div", _i, ot(E.oses), 1), Si, v("span", Pi, ot(E.category), 1), v("div", Ei, [ft(ut(Te))])], 8, gi))), 128))]) } } },
    Ci = {},
    Ai = { class: "w-full pb-2 md:mt-7 md:rounded-lg md:border md:border-solid md:border-border-main md:pb-0" },
    Ni = Yt('<div class="hidden w-full rounded-t-lg bg-grey-map px-8 md:flex md:justify-between"><span class="flex h-[50px] w-[8rem] items-center text-subtitle1 text-text-primary">IP Type</span><span class="flex h-[50px] w-[15rem] items-center text-subtitle1 text-text-primary">Location</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">IPs per Account</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">IPs per Month</span><span class="flex h-[50px] w-[7.3rem] items-center justify-center text-subtitle1 text-text-primary">Monthly Price</span></div><a target="_blank" draggable="true" class="mx-8 block"><div class="hover:bg-primary-contrastText group flex flex-wrap items-center rounded-lg border-0 border-solid border-border-main py-3 text-inherit no-underline shadow-0.5 transition hover:text-primary-dark max-md:mt-2 md:flex-nowrap md:justify-between md:rounded-none md:border-0 md:border-b md:px-0 md:shadow-none md:last:border-none"><div class="flex h-8 w-[8rem] items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:text-body1"> IPv4 - Public </div><div class="flex h-8 w-[15rem] items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:justify-center md:text-body1"> Every available region in Cloudzy </div><div class="flex h-8 w-[7.3rem] items-center text-body2 text-text-secondary transition group-hover:text-primary-dark md:justify-center md:text-body1"> 10 </div><div class="flex h-8 w-[7.3rem] items-center justify-center text-body1 text-text-secondary transition group-hover:text-primary-dark"> 30 </div><div class="flex h-8 w-[7.3rem] items-center justify-center pr-8 text-subtitle1 text-text-secondary transition group-hover:text-primary-dark"> $ 1.5 /IP </div></div></a>', 2),
    Vi = [Ni];

function ji(C, x) { return pt(), ht("div", Ai, Vi) }
const Li = $r(Ci, [
    ["render", ji]
]);

function Gt(C) { return [null, void 0, !1].indexOf(C) !== -1 }

function Mi(C) { return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C }

function De(C) { var x = { exports: {} }; return C(x, x.exports), x.exports }
var Me = De(function(C, x) { C.exports = function() { var p = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

            function K(d) { return d.split("").reverse().join("") }

            function N(d, h) { return d.substring(0, h.length) === h }

            function at(d, h) { return d.slice(-1 * h.length) === h }

            function P(d, h, f) { if ((d[h] || d[f]) && d[h] === d[f]) throw new Error(h) }

            function E(d) { return typeof d == "number" && isFinite(d) }

            function Z(d, h) { return d = d.toString().split("e"), (+((d = (d = Math.round(+(d[0] + "e" + (d[1] ? +d[1] + h : h)))).toString().split("e"))[0] + "e" + (d[1] ? +d[1] - h : -h))).toFixed(h) }

            function Q(d, h, f, A, k, bt, xt, j, lt, Y, z, w) { var wt, U, dt, vt = w,
                    it = "",
                    S = ""; return bt && (w = bt(w)), !!E(w) && (d !== !1 && parseFloat(w.toFixed(d)) === 0 && (w = 0), w < 0 && (wt = !0, w = Math.abs(w)), d !== !1 && (w = Z(w, d)), (w = w.toString()).indexOf(".") !== -1 ? (dt = (U = w.split("."))[0], f && (it = f + U[1])) : dt = w, h && (dt = K(dt).match(/.{1,3}/g), dt = K(dt.join(K(h)))), wt && j && (S += j), A && (S += A), wt && lt && (S += lt), S += dt, S += it, k && (S += k), Y && (S = Y(S, vt)), S) }

            function rt(d, h, f, A, k, bt, xt, j, lt, Y, z, w) { var wt, U = ""; return z && (w = z(w)), !(!w || typeof w != "string") && (j && N(w, j) && (w = w.replace(j, ""), wt = !0), A && N(w, A) && (w = w.replace(A, "")), lt && N(w, lt) && (w = w.replace(lt, ""), wt = !0), k && at(w, k) && (w = w.slice(0, -1 * k.length)), h && (w = w.split(h).join("")), f && (w = w.replace(f, ".")), wt && (U += "-"), (U = (U += w).replace(/[^0-9\.\-.]/g, "")) !== "" && (U = Number(U), xt && (U = xt(U)), !!E(U) && U)) }

            function M(d) { var h, f, A, k = {}; for (d.suffix === void 0 && (d.suffix = d.postfix), h = 0; h < p.length; h += 1)
                    if ((A = d[f = p[h]]) === void 0) f !== "negative" || k.negativeBefore ? f === "mark" && k.thousand !== "." ? k[f] = "." : k[f] = !1 : k[f] = "-";
                    else if (f === "decimals") { if (!(A >= 0 && A < 8)) throw new Error(f);
                    k[f] = A } else if (f === "encoder" || f === "decoder" || f === "edit" || f === "undo") { if (typeof A != "function") throw new Error(f);
                    k[f] = A } else { if (typeof A != "string") throw new Error(f);
                    k[f] = A } return P(k, "mark", "thousand"), P(k, "prefix", "negative"), P(k, "prefix", "negativeBefore"), k }

            function F(d, h, f) { var A, k = []; for (A = 0; A < p.length; A += 1) k.push(d[p[A]]); return k.push(f), h.apply("", k) }

            function D(d) { if (!(this instanceof D)) return new D(d);
                typeof d == "object" && (d = M(d), this.to = function(h) { return F(d, Q, h) }, this.from = function(h) { return F(d, rt, h) }) } return D }() }),
    $i = Mi(De(function(C, x) {
        (function(p) {
            function K(r) { return N(r) && typeof r.from == "function" }

            function N(r) { return typeof r == "object" && typeof r.to == "function" }

            function at(r) { r.parentElement.removeChild(r) }

            function P(r) { return r != null }

            function E(r) { r.preventDefault() }

            function Z(r) { return r.filter(function(t) { return !this[t] && (this[t] = !0) }, {}) }

            function Q(r, t) { return Math.round(r / t) * t }

            function rt(r, t) { var o = r.getBoundingClientRect(),
                    m = r.ownerDocument,
                    l = m.documentElement,
                    y = bt(m); return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (y.x = 0), t ? o.top + y.y - l.clientTop : o.left + y.x - l.clientLeft }

            function M(r) { return typeof r == "number" && !isNaN(r) && isFinite(r) }

            function F(r, t, o) { o > 0 && (f(r, t), setTimeout(function() { A(r, t) }, o)) }

            function D(r) { return Math.max(Math.min(r, 100), 0) }

            function d(r) { return Array.isArray(r) ? r : [r] }

            function h(r) { var t = (r = String(r)).split("."); return t.length > 1 ? t[1].length : 0 }

            function f(r, t) { r.classList && !/\s/.test(t) ? r.classList.add(t) : r.className += " " + t }

            function A(r, t) { r.classList && !/\s/.test(t) ? r.classList.remove(t) : r.className = r.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") }

            function k(r, t) { return r.classList ? r.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(r.className) }

            function bt(r) { var t = window.pageXOffset !== void 0,
                    o = (r.compatMode || "") === "CSS1Compat"; return { x: t ? window.pageXOffset : o ? r.documentElement.scrollLeft : r.body.scrollLeft, y: t ? window.pageYOffset : o ? r.documentElement.scrollTop : r.body.scrollTop } }

            function xt() { return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" } }

            function j() { var r = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { r = !0 } });
                    window.addEventListener("test", null, t) } catch {} return r }

            function lt() { return window.CSS && CSS.supports && CSS.supports("touch-action", "none") }

            function Y(r, t) { return 100 / (t - r) }

            function z(r, t, o) { return 100 * t / (r[o + 1] - r[o]) }

            function w(r, t) { return z(r, r[0] < 0 ? t + Math.abs(r[0]) : t - r[0], 0) }

            function wt(r, t) { return t * (r[1] - r[0]) / 100 + r[0] }

            function U(r, t) { for (var o = 1; r >= t[o];) o += 1; return o }

            function dt(r, t, o) { if (o >= r.slice(-1)[0]) return 100; var m = U(o, r),
                    l = r[m - 1],
                    y = r[m],
                    L = t[m - 1],
                    q = t[m]; return L + w([l, y], o) / Y(L, q) }

            function vt(r, t, o) { if (o >= 100) return r.slice(-1)[0]; var m = U(o, t),
                    l = r[m - 1],
                    y = r[m],
                    L = t[m - 1]; return wt([l, y], (o - L) * Y(L, t[m])) }

            function it(r, t, o, m) { if (m === 100) return m; var l = U(m, r),
                    y = r[l - 1],
                    L = r[l]; return o ? m - y > (L - y) / 2 ? L : y : t[l - 1] ? r[l - 1] + Q(m - r[l - 1], t[l - 1]) : m } var S, J;
            p.PipsMode = void 0, (J = p.PipsMode || (p.PipsMode = {})).Range = "range", J.Steps = "steps", J.Positions = "positions", J.Count = "count", J.Values = "values", p.PipsType = void 0, (S = p.PipsType || (p.PipsType = {}))[S.None = -1] = "None", S[S.NoValue = 0] = "NoValue", S[S.LargeValue = 1] = "LargeValue", S[S.SmallValue = 2] = "SmallValue"; var Vt = function() {
                    function r(t, o, m) { var l;
                        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [m || !1], this.xNumSteps = [!1], this.snap = o; var y = []; for (Object.keys(t).forEach(function(L) { y.push([d(t[L]), L]) }), y.sort(function(L, q) { return L[0][0] - q[0][0] }), l = 0; l < y.length; l++) this.handleEntryPoint(y[l][1], y[l][0]); for (this.xNumSteps = this.xSteps.slice(0), l = 0; l < this.xNumSteps.length; l++) this.handleStepPoint(l, this.xNumSteps[l]) } return r.prototype.getDistance = function(t) { for (var o = [], m = 0; m < this.xNumSteps.length - 1; m++) o[m] = z(this.xVal, t, m); return o }, r.prototype.getAbsoluteDistance = function(t, o, m) { var l, y = 0; if (t < this.xPct[this.xPct.length - 1])
                            for (; t > this.xPct[y + 1];) y++;
                        else t === this.xPct[this.xPct.length - 1] && (y = this.xPct.length - 2);
                        m || t !== this.xPct[y + 1] || y++, o === null && (o = []); var L = 1,
                            q = o[y],
                            B = 0,
                            St = 0,
                            tt = 0,
                            b = 0; for (l = m ? (t - this.xPct[y]) / (this.xPct[y + 1] - this.xPct[y]) : (this.xPct[y + 1] - t) / (this.xPct[y + 1] - this.xPct[y]); q > 0;) B = this.xPct[y + 1 + b] - this.xPct[y + b], o[y + b] * L + 100 - 100 * l > 100 ? (St = B * l, L = (q - 100 * l) / o[y + b], l = 1) : (St = o[y + b] * B / 100 * L, L = 0), m ? (tt -= St, this.xPct.length + b >= 1 && b--) : (tt += St, this.xPct.length - b >= 1 && b++), q = o[y + b] * L; return t + tt }, r.prototype.toStepping = function(t) { return t = dt(this.xVal, this.xPct, t) }, r.prototype.fromStepping = function(t) { return vt(this.xVal, this.xPct, t) }, r.prototype.getStep = function(t) { return t = it(this.xPct, this.xSteps, this.snap, t) }, r.prototype.getDefaultStep = function(t, o, m) { var l = U(t, this.xPct); return (t === 100 || o && t === this.xPct[l - 1]) && (l = Math.max(l - 1, 1)), (this.xVal[l] - this.xVal[l - 1]) / m }, r.prototype.getNearbySteps = function(t) { var o = U(t, this.xPct); return { stepBefore: { startValue: this.xVal[o - 2], step: this.xNumSteps[o - 2], highestStep: this.xHighestCompleteStep[o - 2] }, thisStep: { startValue: this.xVal[o - 1], step: this.xNumSteps[o - 1], highestStep: this.xHighestCompleteStep[o - 1] }, stepAfter: { startValue: this.xVal[o], step: this.xNumSteps[o], highestStep: this.xHighestCompleteStep[o] } } }, r.prototype.countStepDecimals = function() { var t = this.xNumSteps.map(h); return Math.max.apply(null, t) }, r.prototype.hasNoSize = function() { return this.xVal[0] === this.xVal[this.xVal.length - 1] }, r.prototype.convert = function(t) { return this.getStep(this.toStepping(t)) }, r.prototype.handleEntryPoint = function(t, o) { var m; if (!M(m = t === "min" ? 0 : t === "max" ? 100 : parseFloat(t)) || !M(o[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                        this.xPct.push(m), this.xVal.push(o[0]); var l = Number(o[1]);
                        m ? this.xSteps.push(!isNaN(l) && l) : isNaN(l) || (this.xSteps[0] = l), this.xHighestCompleteStep.push(0) }, r.prototype.handleStepPoint = function(t, o) { if (o)
                            if (this.xVal[t] !== this.xVal[t + 1]) { this.xSteps[t] = z([this.xVal[t], this.xVal[t + 1]], o, 0) / Y(this.xPct[t], this.xPct[t + 1]); var m = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
                                    l = Math.ceil(Number(m.toFixed(3)) - 1),
                                    y = this.xVal[t] + this.xNumSteps[t] * l;
                                this.xHighestCompleteStep[t] = y } else this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t] }, r }(),
                At = { to: function(r) { return r === void 0 ? "" : r.toFixed(2) }, from: Number },
                nt = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" },
                H = { tooltips: ".__tooltips", aria: ".__aria" };

            function gt(r, t) { if (!M(t)) throw new Error("noUiSlider: 'step' is not numeric.");
                r.singleStep = t }

            function _t(r, t) { if (!M(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
                r.keyboardPageMultiplier = t }

            function jt(r, t) { if (!M(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
                r.keyboardMultiplier = t }

            function Lt(r, t) { if (!M(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
                r.keyboardDefaultStep = t }

            function st(r, t) { if (typeof t != "object" || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object."); if (t.min === void 0 || t.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
                r.spectrum = new Vt(t, r.snap || !1, r.singleStep) }

            function g(r, t) { if (t = d(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider: 'start' option is incorrect.");
                r.handles = t.length, r.start = t }

            function O(r, t) { if (typeof t != "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
                r.snap = t }

            function pe(r, t) { if (typeof t != "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
                r.animate = t }

            function Ue(r, t) { if (typeof t != "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
                r.animationDuration = t }

            function Oe(r, t) { var o, m = [!1]; if (t === "lower" ? t = [!0, !1] : t === "upper" && (t = [!1, !0]), t === !0 || t === !1) { for (o = 1; o < r.handles; o++) m.push(t);
                    m.push(!1) } else { if (!Array.isArray(t) || !t.length || t.length !== r.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                    m = t }
                r.connect = m }

            function ze(r, t) { switch (t) {
                    case "horizontal":
                        r.ort = 0; break;
                    case "vertical":
                        r.ort = 1; break;
                    default:
                        throw new Error("noUiSlider: 'orientation' option is invalid.") } }

            function me(r, t) { if (!M(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
                t !== 0 && (r.margin = r.spectrum.getDistance(t)) }

            function Be(r, t) { if (!M(t)) throw new Error("noUiSlider: 'limit' option must be numeric."); if (r.limit = r.spectrum.getDistance(t), !r.limit || r.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.") }

            function Ie(r, t) { var o; if (!M(t) && !Array.isArray(t)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."); if (Array.isArray(t) && t.length !== 2 && !M(t[0]) && !M(t[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."); if (t !== 0) { for (Array.isArray(t) || (t = [t, t]), r.padding = [r.spectrum.getDistance(t[0]), r.spectrum.getDistance(t[1])], o = 0; o < r.spectrum.xNumSteps.length - 1; o++)
                        if (r.padding[0][o] < 0 || r.padding[1][o] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                    var m = t[0] + t[1],
                        l = r.spectrum.xVal[0]; if (m / (r.spectrum.xVal[r.spectrum.xVal.length - 1] - l) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.") } }

            function Re(r, t) { switch (t) {
                    case "ltr":
                        r.dir = 0; break;
                    case "rtl":
                        r.dir = 1; break;
                    default:
                        throw new Error("noUiSlider: 'direction' option was not recognized.") } }

            function He(r, t) { if (typeof t != "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options."); var o = t.indexOf("tap") >= 0,
                    m = t.indexOf("drag") >= 0,
                    l = t.indexOf("fixed") >= 0,
                    y = t.indexOf("snap") >= 0,
                    L = t.indexOf("hover") >= 0,
                    q = t.indexOf("unconstrained") >= 0,
                    B = t.indexOf("drag-all") >= 0,
                    St = t.indexOf("smooth-steps") >= 0; if (l) { if (r.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                    me(r, r.start[1] - r.start[0]) } if (q && (r.margin || r.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
                r.events = { tap: o || y, drag: m, dragAll: B, smoothSteps: St, fixed: l, snap: y, hover: L, unconstrained: q } }

            function qe(r, t) { if (t !== !1)
                    if (t === !0 || N(t)) { r.tooltips = []; for (var o = 0; o < r.handles; o++) r.tooltips.push(t) } else { if ((t = d(t)).length !== r.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                        t.forEach(function(m) { if (typeof m != "boolean" && !N(m)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.") }), r.tooltips = t } }

            function Xe(r, t) { if (t.length !== r.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
                r.handleAttributes = t }

            function Ge(r, t) { if (!N(t)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
                r.ariaFormat = t }

            function Ye(r, t) { if (!K(t)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
                r.format = t }

            function We(r, t) { if (typeof t != "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
                r.keyboardSupport = t }

            function Ke(r, t) { r.documentElement = t }

            function Ze(r, t) { if (typeof t != "string" && t !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
                r.cssPrefix = t }

            function Je(r, t) { if (typeof t != "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
                typeof r.cssPrefix == "string" ? (r.cssClasses = {}, Object.keys(t).forEach(function(o) { r.cssClasses[o] = r.cssPrefix + t[o] })) : r.cssClasses = t }

            function fe(r) { var t = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: At, format: At },
                    o = { step: { r: !1, t: gt }, keyboardPageMultiplier: { r: !1, t: _t }, keyboardMultiplier: { r: !1, t: jt }, keyboardDefaultStep: { r: !1, t: Lt }, start: { r: !0, t: g }, connect: { r: !0, t: Oe }, direction: { r: !0, t: Re }, snap: { r: !1, t: O }, animate: { r: !1, t: pe }, animationDuration: { r: !1, t: Ue }, range: { r: !0, t: st }, orientation: { r: !1, t: ze }, margin: { r: !1, t: me }, limit: { r: !1, t: Be }, padding: { r: !1, t: Ie }, behaviour: { r: !0, t: He }, ariaFormat: { r: !1, t: Ge }, format: { r: !1, t: Ye }, tooltips: { r: !1, t: qe }, keyboardSupport: { r: !0, t: We }, documentElement: { r: !1, t: Ke }, cssPrefix: { r: !0, t: Ze }, cssClasses: { r: !0, t: Je }, handleAttributes: { r: !1, t: Xe } },
                    m = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: nt, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
                r.format && !r.ariaFormat && (r.ariaFormat = r.format), Object.keys(o).forEach(function(B) { if (P(r[B]) || m[B] !== void 0) o[B].t(t, P(r[B]) ? r[B] : m[B]);
                    else if (o[B].r) throw new Error("noUiSlider: '" + B + "' is required.") }), t.pips = r.pips; var l = document.createElement("div"),
                    y = l.style.msTransform !== void 0,
                    L = l.style.transform !== void 0;
                t.transformRule = L ? "transform" : y ? "msTransform" : "webkitTransform"; var q = [
                    ["left", "top"],
                    ["right", "bottom"]
                ]; return t.style = q[t.dir][t.ort], t }

            function Qe(r, t, o) { var m, l, y, L, q, B = xt(),
                    St = lt() && j(),
                    tt = r,
                    b = t.spectrum,
                    Pt = [],
                    I = [],
                    mt = [],
                    Wt = 0,
                    Et = {},
                    Ft = r.ownerDocument,
                    zt = t.documentElement || Ft.documentElement,
                    Bt = Ft.body,
                    er = Ft.dir === "rtl" || t.ort === 1 ? 0 : 100;

                function kt(e, i) { var n = Ft.createElement("div"); return i && f(n, i), e.appendChild(n), n }

                function rr(e, i) { var n = kt(e, t.cssClasses.origin),
                        s = kt(n, t.cssClasses.handle); if (kt(s, t.cssClasses.touchArea), s.setAttribute("data-handle", String(i)), t.keyboardSupport && (s.setAttribute("tabindex", "0"), s.addEventListener("keydown", function(a) { return xr(a, i) })), t.handleAttributes !== void 0) { var u = t.handleAttributes[i];
                        Object.keys(u).forEach(function(a) { s.setAttribute(a, u[a]) }) } return s.setAttribute("role", "slider"), s.setAttribute("aria-orientation", t.ort ? "vertical" : "horizontal"), i === 0 ? f(s, t.cssClasses.handleLower) : i === t.handles - 1 && f(s, t.cssClasses.handleUpper), n }

                function xe(e, i) { return !!i && kt(e, t.cssClasses.connect) }

                function ir(e, i) { var n = kt(i, t.cssClasses.connects);
                    l = [], (y = []).push(xe(n, e[0])); for (var s = 0; s < t.handles; s++) l.push(rr(i, s)), mt[s] = s, y.push(xe(n, e[s + 1])) }

                function nr(e) { return f(e, t.cssClasses.target), t.dir === 0 ? f(e, t.cssClasses.ltr) : f(e, t.cssClasses.rtl), t.ort === 0 ? f(e, t.cssClasses.horizontal) : f(e, t.cssClasses.vertical), f(e, getComputedStyle(e).direction === "rtl" ? t.cssClasses.textDirectionRtl : t.cssClasses.textDirectionLtr), kt(e, t.cssClasses.base) }

                function sr(e, i) { return !(!t.tooltips || !t.tooltips[i]) && kt(e.firstChild, t.cssClasses.tooltip) }

                function ve() { return tt.hasAttribute("disabled") }

                function Kt(e) { return l[e].hasAttribute("disabled") }

                function Zt() { q && (Ut("update" + H.tooltips), q.forEach(function(e) { e && at(e) }), q = null) }

                function ge() { Zt(), q = l.map(sr), re("update" + H.tooltips, function(e, i, n) { if (q && t.tooltips && q[i] !== !1) { var s = e[i];
                            t.tooltips[i] !== !0 && (s = t.tooltips[i].to(n[i])), q[i].innerHTML = s } }) }

                function or() { Ut("update" + H.aria), re("update" + H.aria, function(e, i, n, s, u) { mt.forEach(function(a) { var _ = l[a],
                                c = It(I, a, 0, !0, !0, !0),
                                G = It(I, a, 100, !0, !0, !0),
                                R = u[a],
                                $ = String(t.ariaFormat.to(n[a]));
                            c = b.fromStepping(c).toFixed(1), G = b.fromStepping(G).toFixed(1), R = b.fromStepping(R).toFixed(1), _.children[0].setAttribute("aria-valuemin", c), _.children[0].setAttribute("aria-valuemax", G), _.children[0].setAttribute("aria-valuenow", R), _.children[0].setAttribute("aria-valuetext", $) }) }) }

                function ar(e) { if (e.mode === p.PipsMode.Range || e.mode === p.PipsMode.Steps) return b.xVal; if (e.mode === p.PipsMode.Count) { if (e.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'."); for (var i = e.values - 1, n = 100 / i, s = []; i--;) s[i] = i * n; return s.push(100), ye(s, e.stepped) } return e.mode === p.PipsMode.Positions ? ye(e.values, e.stepped) : e.mode === p.PipsMode.Values ? e.stepped ? e.values.map(function(u) { return b.fromStepping(b.getStep(b.toStepping(u))) }) : e.values : [] }

                function ye(e, i) { return e.map(function(n) { return b.fromStepping(i ? b.getStep(n) : n) }) }

                function lr(e) {
                    function i(R, $) { return Number((R + $).toFixed(7)) } var n = ar(e),
                        s = {},
                        u = b.xVal[0],
                        a = b.xVal[b.xVal.length - 1],
                        _ = !1,
                        c = !1,
                        G = 0; return (n = Z(n.slice().sort(function(R, $) { return R - $ })))[0] !== u && (n.unshift(u), _ = !0), n[n.length - 1] !== a && (n.push(a), c = !0), n.forEach(function(R, $) { var T, V, et, ct, W, Ae, se, Ne, Ve, je, oe = R,
                            Tt = n[$ + 1],
                            Le = e.mode === p.PipsMode.Steps; for (Le && (T = b.xNumSteps[$]), T || (T = Tt - oe), Tt === void 0 && (Tt = oe), T = Math.max(T, 1e-7), V = oe; V <= Tt; V = i(V, T)) { for (Ne = (W = (ct = b.toStepping(V)) - G) / (e.density || 1), je = W / (Ve = Math.round(Ne)), et = 1; et <= Ve; et += 1) s[(Ae = G + et * je).toFixed(5)] = [b.fromStepping(Ae), 0];
                            se = n.indexOf(V) > -1 ? p.PipsType.LargeValue : Le ? p.PipsType.SmallValue : p.PipsType.NoValue, !$ && _ && V !== Tt && (se = 0), V === Tt && c || (s[ct.toFixed(5)] = [V, se]), G = ct } }), s }

                function dr(e, i, n) { var s, u, a = Ft.createElement("div"),
                        _ = ((s = {})[p.PipsType.None] = "", s[p.PipsType.NoValue] = t.cssClasses.valueNormal, s[p.PipsType.LargeValue] = t.cssClasses.valueLarge, s[p.PipsType.SmallValue] = t.cssClasses.valueSub, s),
                        c = ((u = {})[p.PipsType.None] = "", u[p.PipsType.NoValue] = t.cssClasses.markerNormal, u[p.PipsType.LargeValue] = t.cssClasses.markerLarge, u[p.PipsType.SmallValue] = t.cssClasses.markerSub, u),
                        G = [t.cssClasses.valueHorizontal, t.cssClasses.valueVertical],
                        R = [t.cssClasses.markerHorizontal, t.cssClasses.markerVertical];

                    function $(V, et) { var ct = et === t.cssClasses.value,
                            W = ct ? _ : c; return et + " " + (ct ? G : R)[t.ort] + " " + W[V] }

                    function T(V, et, ct) { if ((ct = i ? i(et, ct) : ct) !== p.PipsType.None) { var W = kt(a, !1);
                            W.className = $(ct, t.cssClasses.marker), W.style[t.style] = V + "%", ct > p.PipsType.NoValue && ((W = kt(a, !1)).className = $(ct, t.cssClasses.value), W.setAttribute("data-value", String(et)), W.style[t.style] = V + "%", W.innerHTML = String(n.to(et))) } } return f(a, t.cssClasses.pips), f(a, t.ort === 0 ? t.cssClasses.pipsHorizontal : t.cssClasses.pipsVertical), Object.keys(e).forEach(function(V) { T(V, e[V][0], e[V][1]) }), a }

                function Jt() { L && (at(L), L = null) }

                function Qt(e) { Jt(); var i = lr(e),
                        n = e.filter,
                        s = e.format || { to: function(u) { return String(Math.round(u)) } }; return L = tt.appendChild(dr(i, n, s)) }

                function be() { var e = m.getBoundingClientRect(),
                        i = "offset" + ["Width", "Height"][t.ort]; return t.ort === 0 ? e.width || m[i] : e.height || m[i] }

                function Mt(e, i, n, s) { var u = function(_) { var c = ur(_, s.pageOffset, s.target || i); return !!c && !(ve() && !s.doNotReject) && !(k(tt, t.cssClasses.tap) && !s.doNotReject) && !(e === B.start && c.buttons !== void 0 && c.buttons > 1) && (!s.hover || !c.buttons) && (St || c.preventDefault(), c.calcPoint = c.points[t.ort], void n(c, s)) },
                        a = []; return e.split(" ").forEach(function(_) { i.addEventListener(_, u, !!St && { passive: !0 }), a.push([_, u]) }), a }

                function ur(e, i, n) { var s = e.type.indexOf("touch") === 0,
                        u = e.type.indexOf("mouse") === 0,
                        a = e.type.indexOf("pointer") === 0,
                        _ = 0,
                        c = 0; if (e.type.indexOf("MSPointer") === 0 && (a = !0), e.type === "mousedown" && !e.buttons && !e.touches) return !1; if (s) { var G = function(T) { var V = T.target; return V === n || n.contains(V) || e.composed && e.composedPath().shift() === n }; if (e.type === "touchstart") { var R = Array.prototype.filter.call(e.touches, G); if (R.length > 1) return !1;
                            _ = R[0].pageX, c = R[0].pageY } else { var $ = Array.prototype.find.call(e.changedTouches, G); if (!$) return !1;
                            _ = $.pageX, c = $.pageY } } return i = i || bt(Ft), (u || a) && (_ = e.clientX + i.x, c = e.clientY + i.y), e.pageOffset = i, e.points = [_, c], e.cursor = u || a, e }

                function we(e) { var i = 100 * (e - rt(m, t.ort)) / be(); return i = D(i), t.dir ? 100 - i : i }

                function cr(e) { var i = 100,
                        n = !1; return l.forEach(function(s, u) { if (!Kt(u)) { var a = I[u],
                                _ = Math.abs(a - e);
                            (_ < i || _ <= i && e > a || _ === 100 && i === 100) && (n = u, i = _) } }), n }

                function pr(e, i) { e.type === "mouseout" && e.target.nodeName === "HTML" && e.relatedTarget === null && te(e, i) }

                function mr(e, i) { if (navigator.appVersion.indexOf("MSIE 9") === -1 && e.buttons === 0 && i.buttonsProperty !== 0) return te(e, i); var n = (t.dir ? -1 : 1) * (e.calcPoint - i.startCalcPoint);
                    _e(n > 0, 100 * n / i.baseSize, i.locations, i.handleNumbers, i.connect) }

                function te(e, i) { i.handle && (A(i.handle, t.cssClasses.active), Wt -= 1), i.listeners.forEach(function(n) { zt.removeEventListener(n[0], n[1]) }), Wt === 0 && (A(tt, t.cssClasses.drag), ne(), e.cursor && (Bt.style.cursor = "", Bt.removeEventListener("selectstart", E))), t.events.smoothSteps && (i.handleNumbers.forEach(function(n) { $t(n, I[n], !0, !0, !1, !1) }), i.handleNumbers.forEach(function(n) { X("update", n) })), i.handleNumbers.forEach(function(n) { X("change", n), X("set", n), X("end", n) }) }

                function ee(e, i) { if (!i.handleNumbers.some(Kt)) { var n;
                        i.handleNumbers.length === 1 && (n = l[i.handleNumbers[0]].children[0], Wt += 1, f(n, t.cssClasses.active)), e.stopPropagation(); var s = [],
                            u = Mt(B.move, zt, mr, { target: e.target, handle: n, connect: i.connect, listeners: s, startCalcPoint: e.calcPoint, baseSize: be(), pageOffset: e.pageOffset, handleNumbers: i.handleNumbers, buttonsProperty: e.buttons, locations: I.slice() }),
                            a = Mt(B.end, zt, te, { target: e.target, handle: n, listeners: s, doNotReject: !0, handleNumbers: i.handleNumbers }),
                            _ = Mt("mouseout", zt, pr, { target: e.target, handle: n, listeners: s, doNotReject: !0, handleNumbers: i.handleNumbers });
                        s.push.apply(s, u.concat(a, _)), e.cursor && (Bt.style.cursor = getComputedStyle(e.target).cursor, l.length > 1 && f(tt, t.cssClasses.drag), Bt.addEventListener("selectstart", E, !1)), i.handleNumbers.forEach(function(c) { X("start", c) }) } }

                function fr(e) { e.stopPropagation(); var i = we(e.calcPoint),
                        n = cr(i);
                    n !== !1 && (t.events.snap || F(tt, t.cssClasses.tap, t.animationDuration), $t(n, i, !0, !0), ne(), X("slide", n, !0), X("update", n, !0), t.events.snap ? ee(e, { handleNumbers: [n] }) : (X("change", n, !0), X("set", n, !0))) }

                function hr(e) { var i = we(e.calcPoint),
                        n = b.getStep(i),
                        s = b.fromStepping(n);
                    Object.keys(Et).forEach(function(u) { u.split(".")[0] === "hover" && Et[u].forEach(function(a) { a.call(Ht, s) }) }) }

                function xr(e, i) { if (ve() || Kt(i)) return !1; var n = ["Left", "Right"],
                        s = ["Down", "Up"],
                        u = ["PageDown", "PageUp"],
                        a = ["Home", "End"];
                    t.dir && !t.ort ? n.reverse() : t.ort && !t.dir && (s.reverse(), u.reverse()); var _, c = e.key.replace("Arrow", ""),
                        G = c === u[0],
                        R = c === u[1],
                        $ = c === s[0] || c === n[0] || G,
                        T = c === s[1] || c === n[1] || R,
                        V = c === a[0],
                        et = c === a[1]; if (!($ || T || V || et)) return !0; if (e.preventDefault(), T || $) { var ct = $ ? 0 : 1,
                            W = Ce(i)[ct]; if (W === null) return !1;
                        W === !1 && (W = b.getDefaultStep(I[i], $, t.keyboardDefaultStep)), W *= R || G ? t.keyboardPageMultiplier : t.keyboardMultiplier, W = Math.max(W, 1e-7), W *= $ ? -1 : 1, _ = Pt[i] + W } else _ = et ? t.spectrum.xVal[t.spectrum.xVal.length - 1] : t.spectrum.xVal[0]; return $t(i, b.toStepping(_), !0, !0), X("slide", i), X("update", i), X("change", i), X("set", i), !1 }

                function vr(e) { e.fixed || l.forEach(function(i, n) { Mt(B.start, i.children[0], ee, { handleNumbers: [n] }) }), e.tap && Mt(B.start, m, fr, {}), e.hover && Mt(B.move, m, hr, { hover: !0 }), e.drag && y.forEach(function(i, n) { if (i !== !1 && n !== 0 && n !== y.length - 1) { var s = l[n - 1],
                                u = l[n],
                                a = [i],
                                _ = [s, u],
                                c = [n - 1, n];
                            f(i, t.cssClasses.draggable), e.fixed && (a.push(s.children[0]), a.push(u.children[0])), e.dragAll && (_ = l, c = mt), a.forEach(function(G) { Mt(B.start, G, ee, { handles: _, handleNumbers: c, connect: i }) }) } }) }

                function re(e, i) { Et[e] = Et[e] || [], Et[e].push(i), e.split(".")[0] === "update" && l.forEach(function(n, s) { X("update", s) }) }

                function gr(e) { return e === H.aria || e === H.tooltips }

                function Ut(e) { var i = e && e.split(".")[0],
                        n = i ? e.substring(i.length) : e;
                    Object.keys(Et).forEach(function(s) { var u = s.split(".")[0],
                            a = s.substring(u.length);
                        i && i !== u || n && n !== a || gr(a) && n !== a || delete Et[s] }) }

                function X(e, i, n) { Object.keys(Et).forEach(function(s) { var u = s.split(".")[0];
                        e === u && Et[s].forEach(function(a) { a.call(Ht, Pt.map(t.format.to), i, Pt.slice(), n || !1, I.slice(), Ht) }) }) }

                function It(e, i, n, s, u, a, _) { var c; return l.length > 1 && !t.events.unconstrained && (s && i > 0 && (c = b.getAbsoluteDistance(e[i - 1], t.margin, !1), n = Math.max(n, c)), u && i < l.length - 1 && (c = b.getAbsoluteDistance(e[i + 1], t.margin, !0), n = Math.min(n, c))), l.length > 1 && t.limit && (s && i > 0 && (c = b.getAbsoluteDistance(e[i - 1], t.limit, !1), n = Math.min(n, c)), u && i < l.length - 1 && (c = b.getAbsoluteDistance(e[i + 1], t.limit, !0), n = Math.max(n, c))), t.padding && (i === 0 && (c = b.getAbsoluteDistance(0, t.padding[0], !1), n = Math.max(n, c)), i === l.length - 1 && (c = b.getAbsoluteDistance(100, t.padding[1], !0), n = Math.min(n, c))), _ || (n = b.getStep(n)), !((n = D(n)) === e[i] && !a) && n }

                function ie(e, i) { var n = t.ort; return (n ? i : e) + ", " + (n ? e : i) }

                function _e(e, i, n, s, u) { var a = n.slice(),
                        _ = s[0],
                        c = t.events.smoothSteps,
                        G = [!e, e],
                        R = [e, !e];
                    s = s.slice(), e && s.reverse(), s.length > 1 ? s.forEach(function(T, V) { var et = It(a, T, a[T] + i, G[V], R[V], !1, c);
                        et === !1 ? i = 0 : (i = et - a[T], a[T] = et) }) : G = R = [!0]; var $ = !1;
                    s.forEach(function(T, V) { $ = $t(T, n[T] + i, G[V], R[V], !1, c) || $ }), $ && (s.forEach(function(T) { X("update", T), X("slide", T) }), u != null && X("drag", _)) }

                function Se(e, i) { return t.dir ? 100 - e - i : e }

                function yr(e, i) { I[e] = i, Pt[e] = b.fromStepping(i); var n = "translate(" + ie(Se(i, 0) - er + "%", "0") + ")";
                    l[e].style[t.transformRule] = n, Pe(e), Pe(e + 1) }

                function ne() { mt.forEach(function(e) { var i = I[e] > 50 ? -1 : 1,
                            n = 3 + (l.length + i * e);
                        l[e].style.zIndex = String(n) }) }

                function $t(e, i, n, s, u, a) { return u || (i = It(I, e, i, n, s, !1, a)), i !== !1 && (yr(e, i), !0) }

                function Pe(e) { if (y[e]) { var i = 0,
                            n = 100;
                        e !== 0 && (i = I[e - 1]), e !== y.length - 1 && (n = I[e]); var s = n - i,
                            u = "translate(" + ie(Se(i, s) + "%", "0") + ")",
                            a = "scale(" + ie(s / 100, "1") + ")";
                        y[e].style[t.transformRule] = u + " " + a } }

                function Ee(e, i) { return e === null || e === !1 || e === void 0 ? I[i] : (typeof e == "number" && (e = String(e)), (e = t.format.from(e)) !== !1 && (e = b.toStepping(e)), e === !1 || isNaN(e) ? I[i] : e) }

                function Rt(e, i, n) { var s = d(e),
                        u = I[0] === void 0;
                    i = i === void 0 || i, t.animate && !u && F(tt, t.cssClasses.tap, t.animationDuration), mt.forEach(function(c) { $t(c, Ee(s[c], c), !0, !1, n) }); var a = mt.length === 1 ? 0 : 1; if (u && b.hasNoSize() && (n = !0, I[0] = 0, mt.length > 1)) { var _ = 100 / (mt.length - 1);
                        mt.forEach(function(c) { I[c] = c * _ }) } for (; a < mt.length; ++a) mt.forEach(function(c) { $t(c, I[c], !0, !0, n) });
                    ne(), mt.forEach(function(c) { X("update", c), s[c] !== null && i && X("set", c) }) }

                function br(e) { Rt(t.start, e) }

                function wr(e, i, n, s) { if (!((e = Number(e)) >= 0 && e < mt.length)) throw new Error("noUiSlider: invalid handle number, got: " + e);
                    $t(e, Ee(i, e), !0, !0, s), X("update", e), n && X("set", e) }

                function ke(e) { if (e === void 0 && (e = !1), e) return Pt.length === 1 ? Pt[0] : Pt.slice(0); var i = Pt.map(t.format.to); return i.length === 1 ? i[0] : i }

                function _r() { for (Ut(H.aria), Ut(H.tooltips), Object.keys(t.cssClasses).forEach(function(e) { A(tt, t.cssClasses[e]) }); tt.firstChild;) tt.removeChild(tt.firstChild);
                    delete tt.noUiSlider }

                function Ce(e) { var i = I[e],
                        n = b.getNearbySteps(i),
                        s = Pt[e],
                        u = n.thisStep.step,
                        a = null; if (t.snap) return [s - n.stepBefore.startValue || null, n.stepAfter.startValue - s || null];
                    u !== !1 && s + u > n.stepAfter.startValue && (u = n.stepAfter.startValue - s), a = s > n.thisStep.startValue ? n.thisStep.step : n.stepBefore.step !== !1 && s - n.stepBefore.highestStep, i === 100 ? u = null : i === 0 && (a = null); var _ = b.countStepDecimals(); return u !== null && u !== !1 && (u = Number(u.toFixed(_))), a !== null && a !== !1 && (a = Number(a.toFixed(_))), [a, u] }

                function Sr() { return mt.map(Ce) }

                function Pr(e, i) { var n = ke(),
                        s = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                    s.forEach(function(a) { e[a] !== void 0 && (o[a] = e[a]) }); var u = fe(o);
                    s.forEach(function(a) { e[a] !== void 0 && (t[a] = u[a]) }), b = u.spectrum, t.margin = u.margin, t.limit = u.limit, t.padding = u.padding, t.pips ? Qt(t.pips) : Jt(), t.tooltips ? ge() : Zt(), I = [], Rt(P(e.start) ? e.start : n, i) }

                function Er() { m = nr(tt), ir(t.connect, m), vr(t.events), Rt(t.start), t.pips && Qt(t.pips), t.tooltips && ge(), or() }
                Er(); var Ht = { destroy: _r, steps: Sr, on: re, off: Ut, get: ke, set: Rt, setHandle: wr, reset: br, __moveHandles: function(e, i, n) { _e(e, i, I, n) }, options: o, updateOptions: Pr, target: tt, removePips: Jt, removeTooltips: Zt, getPositions: function() { return I.slice() }, getTooltips: function() { return q }, getOrigins: function() { return l }, pips: Qt }; return Ht }

            function he(r, t) { if (!r || !r.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + r); if (r.noUiSlider) throw new Error("noUiSlider: Slider was already initialized."); var o = Qe(r, fe(t), t); return r.noUiSlider = o, o } var tr = { __spectrum: Vt, cssClasses: nt, create: he };
            p.create = he, p.cssClasses = nt, p.default = tr, Object.defineProperty(p, "__esModule", { value: !0 }) })(x) }));

function $e(C, x) { if (!Array.isArray(C) || !Array.isArray(x)) return !1; const p = x.slice().sort(); return C.length === x.length && C.slice().sort().every(function(K, N) { return K === p[N] }) }
var de = { name: "Slider", emits: ["input", "update:modelValue", "start", "slide", "drag", "update", "change", "set", "end"], props: { value: { validator: function(C) { return x => typeof x == "number" || x instanceof Array || x == null || x === !1 }, required: !1 }, modelValue: { validator: function(C) { return x => typeof x == "number" || x instanceof Array || x == null || x === !1 }, required: !1 }, id: { type: [String, Number], required: !1 }, disabled: { type: Boolean, required: !1, default: !1 }, min: { type: Number, required: !1, default: 0 }, max: { type: Number, required: !1, default: 100 }, step: { type: Number, required: !1, default: 1 }, orientation: { type: String, required: !1, default: "horizontal" }, direction: { type: String, required: !1, default: "ltr" }, tooltips: { type: Boolean, required: !1, default: !0 }, options: { type: Object, required: !1, default: () => ({}) }, merge: { type: Number, required: !1, default: -1 }, format: { type: [Object, Function, Boolean], required: !1, default: null }, classes: { type: Object, required: !1, default: () => ({}) }, showTooltip: { type: String, required: !1, default: "always" }, tooltipPosition: { type: String, required: !1, default: null }, lazy: { type: Boolean, required: !1, default: !0 }, ariaLabelledby: { type: String, required: !1, default: void 0 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(C, x) { const p = function(P, E, Z) { const { value: Q, modelValue: rt, min: M } = qt(P); let F = rt && rt.value !== void 0 ? rt : Q; const D = Dt(F.value); if (Gt(F.value) && (F = Dt(M.value)), Array.isArray(F.value) && F.value.length == 0) throw new Error("Slider v-model must not be an empty array"); return { value: F, initialValue: D } }(C),
            K = function(P, E, Z) { const { classes: Q, showTooltip: rt, tooltipPosition: M, orientation: F } = qt(P), D = Ct(() => ({ target: "slider-target", focused: "slider-focused", tooltipFocus: "slider-tooltip-focus", tooltipDrag: "slider-tooltip-drag", ltr: "slider-ltr", rtl: "slider-rtl", horizontal: "slider-horizontal", vertical: "slider-vertical", textDirectionRtl: "slider-txt-dir-rtl", textDirectionLtr: "slider-txt-dir-ltr", base: "slider-base", connects: "slider-connects", connect: "slider-connect", origin: "slider-origin", handle: "slider-handle", handleLower: "slider-handle-lower", handleUpper: "slider-handle-upper", touchArea: "slider-touch-area", tooltip: "slider-tooltip", tooltipTop: "slider-tooltip-top", tooltipBottom: "slider-tooltip-bottom", tooltipLeft: "slider-tooltip-left", tooltipRight: "slider-tooltip-right", tooltipHidden: "slider-tooltip-hidden", active: "slider-active", draggable: "slider-draggable", tap: "slider-state-tap", drag: "slider-state-drag", pips: "slider-pips", pipsHorizontal: "slider-pips-horizontal", pipsVertical: "slider-pips-vertical", marker: "slider-marker", markerHorizontal: "slider-marker-horizontal", markerVertical: "slider-marker-vertical", markerNormal: "slider-marker-normal", markerLarge: "slider-marker-large", markerSub: "slider-marker-sub", value: "slider-value", valueHorizontal: "slider-value-horizontal", valueVertical: "slider-value-vertical", valueNormal: "slider-value-normal", valueLarge: "slider-value-large", valueSub: "slider-value-sub", ...Q.value })); return { classList: Ct(() => { const d = {...D.value }; return Object.keys(d).forEach(h => { d[h] = Array.isArray(d[h]) ? d[h].filter(f => f !== null).join(" ") : d[h] }), rt.value !== "always" && (d.target += ` ${rt.value==="drag"?d.tooltipDrag:d.tooltipFocus}`), F.value === "horizontal" && (d.tooltip += M.value === "bottom" ? ` ${d.tooltipBottom}` : ` ${d.tooltipTop}`), F.value === "vertical" && (d.tooltip += M.value === "right" ? ` ${d.tooltipRight}` : ` ${d.tooltipLeft}`), d }) } }(C),
            N = function(P, E, Z) { const { format: Q, step: rt } = qt(P), M = Z.value, F = Z.classList, D = Ct(() => Q && Q.value ? typeof Q.value == "function" ? { to: Q.value } : Me({...Q.value }) : Me({ decimals: rt.value >= 0 ? 0 : 2 })), d = Ct(() => Array.isArray(M.value) ? M.value.map(h => D.value) : D.value); return { tooltipFormat: D, tooltipsFormat: d, tooltipsMerge: (h, f, A) => { var k = getComputedStyle(h).direction === "rtl",
                            bt = h.noUiSlider.options.direction === "rtl",
                            xt = h.noUiSlider.options.orientation === "vertical",
                            j = h.noUiSlider.getTooltips(),
                            lt = h.noUiSlider.getOrigins();
                        j.forEach(function(Y, z) { Y && lt[z].appendChild(Y) }), h.noUiSlider.on("update", function(Y, z, w, wt, U) { var dt = [
                                    []
                                ],
                                vt = [
                                    []
                                ],
                                it = [
                                    []
                                ],
                                S = 0;
                            j[0] && (dt[0][0] = 0, vt[0][0] = U[0], it[0][0] = D.value.to(parseFloat(Y[0]))); for (var J = 1; J < Y.length; J++)(!j[J] || Y[J] - Y[J - 1] > f) && (dt[++S] = [], it[S] = [], vt[S] = []), j[J] && (dt[S].push(J), it[S].push(D.value.to(parseFloat(Y[J]))), vt[S].push(U[J]));
                            dt.forEach(function(Vt, At) { for (var nt = Vt.length, H = 0; H < nt; H++) { var gt = Vt[H]; if (H === nt - 1) { var _t = 0;
                                        vt[At].forEach(function(g) { _t += 1e3 - g }); var jt = xt ? "bottom" : "right",
                                            Lt = bt ? 0 : nt - 1,
                                            st = 1e3 - vt[At][Lt];
                                        _t = (k && !xt ? 100 : 0) + _t / nt - st, j[gt].innerHTML = it[At].join(A), j[gt].style.display = "block", j[gt].style[jt] = _t + "%", F.value.tooltipHidden.split(" ").forEach(g => { j[gt].classList.contains(g) && j[gt].classList.remove(g) }) } else j[gt].style.display = "none", F.value.tooltipHidden.split(" ").forEach(g => { j[gt].classList.add(g) }) } }) }) } } }(C, 0, { value: p.value, classList: K.classList }),
            at = function(P, E, Z) { const { orientation: Q, direction: rt, tooltips: M, step: F, min: D, max: d, merge: h, id: f, disabled: A, options: k, classes: bt, format: xt, lazy: j, ariaLabelledby: lt, aria: Y } = qt(P), z = Z.value, w = Z.initialValue, wt = Z.tooltipsFormat, U = Z.tooltipsMerge, dt = Z.tooltipFormat, vt = Z.classList, it = Dt(null), S = Dt(null), J = Dt(!1), Vt = Ct(() => { let g = { cssPrefix: "", cssClasses: vt.value, orientation: Q.value, direction: rt.value, tooltips: !!M.value && wt.value, connect: "lower", start: Gt(z.value) ? D.value : z.value, range: { min: D.value, max: d.value } }; if (F.value > 0 && (g.step = F.value), Array.isArray(z.value) && (g.connect = !0), lt && lt.value || Y && Object.keys(Y.value).length) { let O = Array.isArray(z.value) ? z.value : [z.value];
                        g.handleAttributes = O.map(pe => Object.assign({}, Y.value, lt && lt.value ? { "aria-labelledby": lt.value } : {})) } return xt.value && (g.ariaFormat = dt.value), g }), At = Ct(() => { let g = { id: f && f.value ? f.value : void 0 }; return A.value && (g.disabled = !0), g }), nt = Ct(() => Array.isArray(z.value)), H = () => { let g = S.value.get(); return Array.isArray(g) ? g.map(O => parseFloat(O)) : parseFloat(g) }, gt = function(g) { let O = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                    S.value.set(g, O) }, _t = g => { E.emit("input", g), E.emit("update:modelValue", g), E.emit("update", g) }, jt = () => { S.value = $i.create(it.value, Object.assign({}, Vt.value, k.value)), M.value && nt.value && h.value >= 0 && U(it.value, h.value, " - "), S.value.on("set", () => { const g = H();
                        E.emit("change", g), E.emit("set", g), j.value && _t(g) }), S.value.on("update", () => { if (!J.value) return; const g = H();
                        nt.value && $e(z.value, g) || !nt.value && z.value == g ? E.emit("update", g) : j.value || _t(g) }), S.value.on("start", () => { E.emit("start", H()) }), S.value.on("end", () => { E.emit("end", H()) }), S.value.on("slide", () => { E.emit("slide", H()) }), S.value.on("drag", () => { E.emit("drag", H()) }), it.value.querySelectorAll("[data-handle]").forEach(g => { g.onblur = () => { it.value && vt.value.focused.split(" ").forEach(O => { it.value.classList.remove(O) }) }, g.onfocus = () => { vt.value.focused.split(" ").forEach(O => { it.value.classList.add(O) }) } }), J.value = !0 }, Lt = () => { S.value.off(), S.value.destroy(), S.value = null }, st = (g, O) => { J.value = !1, Lt(), jt() }; return Cr(jt), Ar(Lt), yt(nt, st, { immediate: !1 }), yt(D, st, { immediate: !1 }), yt(d, st, { immediate: !1 }), yt(F, st, { immediate: !1 }), yt(Q, st, { immediate: !1 }), yt(rt, st, { immediate: !1 }), yt(M, st, { immediate: !1 }), yt(h, st, { immediate: !1 }), yt(xt, st, { immediate: !1, deep: !0 }), yt(k, st, { immediate: !1, deep: !0 }), yt(bt, st, { immediate: !1, deep: !0 }), yt(z, (g, O) => { O && (typeof O == "object" && typeof g == "object" && g && Object.keys(O) > Object.keys(g) || typeof O == "object" && typeof g != "object" || Gt(g)) && st() }, { immediate: !1 }), yt(z, g => { if (Gt(g)) return void gt(D.value, !1); let O = H();
                    nt.value && !Array.isArray(O) && (O = [O]), (nt.value && !$e(g, O) || !nt.value && g != O) && gt(g, !1) }, { deep: !0 }), { slider: it, slider$: S, isRange: nt, sliderProps: At, init: jt, destroy: Lt, refresh: st, update: gt, reset: () => { _t(w.value) } } }(C, x, { value: p.value, initialValue: p.initialValue, tooltipFormat: N.tooltipFormat, tooltipsFormat: N.tooltipsFormat, tooltipsMerge: N.tooltipsMerge, classList: K.classList }); return {...K, ...N, ...at } } };
de.render = function(C, x, p, K, N, at) { return pt(), ht("div", Nr(C.sliderProps, { ref: "slider" }), null, 16) }, de.__file = "src/Slider.vue";
const ae = { CLOUD_VPS: { name: "Cloud VPS", to: "#cloud-vps", id: "cloud-vps" }, ONE_CLICK_APPS: { name: "One-Click Apps", to: "#oca", id: "oca" }, FLOATING_IP: { name: "Floating IP", to: "#floating-ip", id: "floating-ip" }, ADDITIONAL_BANDWIDTH: { name: "Additional Bandwidth", to: "#additional-bandwidth", id: "additional-bandwidth" } },
    Fi = Yt('<div class="mb-10 flex h-64 flex-col items-center justify-center bg-gradient-to-br from-[#373A4D] via-[#061D43] to-[#263A5B] px-8 text-center md:h-[300px]"><h1 class="text-body1 text-white-80">Cloudzy VPS Plans and Pricing</h1><h2 class="mt-4 text-h4 text-white-default sm:text-h3 md:text-h2 lg:text-h1"> The Only <span class="text-secondary-main">Cloud VPS</span> You’ll Ever Need </h2><span class="mt-4 flex text-body2 text-white-80 sm:text-body1">Find out all about Cloudzy’s services and Cloud VPS prices to choose the VPS best suited for your needs!</span></div>', 1),
    Ti = { class: "flex" },
    Di = { id: "pricing", class: "mb-4 flex items-center" },
    Ui = v("h2", { class: "text-h5 text-text-primary md:text-h3" }, "Cloud VPS", -1),
    Oi = v("p", { class: "text-body1 text-text-secondary" }, " Every detail you need about our Cloud virtual private servers is right here. Find out all about Cloudzy’s Cloud VPS pricing and information. ", -1),
    zi = { class: "mb-20 flex flex-col" },
    Bi = ["id"],
    Ii = v("h2", { class: "text-h5 text-text-primary md:text-h3" }, "One-Click Apps", -1),
    Ri = v("p", { class: "mb-7 text-body1 text-text-secondary" }, " Explore a diverse range of applications to meet your specific needs with no additional fee. From financial tools to content management systems, find the right solution for your requirements. ", -1),
    Hi = ["id"],
    qi = v("h2", { class: "text-h5 text-text-primary md:text-h3" }, "Floating IP", -1),
    Xi = v("p", { class: "mb-7 text-body1 text-text-secondary" }, " Assign Floating IPs to your account for allocation within your chosen region. These Floating IPs operate on a subscription basis and it's important to note that they are non-refundable. Please refer to our detailed KB guide for manual configuration on your VPS, as these IPs remain unconfigured until setup. ", -1),
    Gi = ["id"],
    Yi = v("h2", { class: "text-h5 text-text-primary md:text-h3" }, " Additional Bandwidth ", -1),
    Wi = v("p", { class: "mb-7 text-body1 text-text-secondary" }, " You can add up to 10TB of additional bandwidth to each VPS instance at any time. Our flexible bandwidth options allow you to scale your resources according to your needs, whether it's a temporary spike in traffic or consistent high bandwidth requirements. ", -1),
    Ki = { class: "mb-16 flex flex-col p-6 text-text-primary sm:shadow-1" },
    Zi = { class: "mb-4 flex justify-between text-h5" },
    Ji = { class: "mt-2 flex w-full justify-between text-grey-300" },
    Qi = v("div", { class: "h-2 w-[2px] bg-grey-300" }, null, -1),
    pn = { __name: "pricing", async setup(C) { let x, p; const { isDesktop: K } = Tr(), N = Dt(1), at = Vr().public.ZPANEL_API_URL, { fetchData: P } = Dr(), { data: E } = ([x, p] = Ot(() => P(`/pages/${Or.Static}/${zr.Pricing}`)), x = await x, p(), x);
            Ur(E.data.seo); const { data: Z } = ([x, p] = Ot(() => Xt("/api/regions", "$9Xnnh6fopE")), x = await x, p(), x), { data: Q } = ([x, p] = Ot(() => Xt(`/api/products?regionId=${Z.value[0].id}`, "$Kvzijv0JqD")), x = await x, p(), x), { data: rt } = ([x, p] = Ot(() => Xt(`${at+"/applications"}`, "$lstRjxXYvv")), x = await x, p(), x), M = { Ubuntu: "ubuntu" }, { data: F } = ([x, p] = Ot(() => Xt(`${at+"/os?action=CREATE"}`, "$EllXCTkF4u")), x = await x, p(), x), D = Ct(() => F.value.os.find(d => d.family === M.Ubuntu)); return (d, h) => { const f = Fe,
                    A = hi,
                    k = ki,
                    bt = Li,
                    xt = Fr; return pt(), ht("div", null, [Fi, v("div", Ti, [ft(xt, null, { default: le(() => [v("div", Di, [ft(f, { src: "/pricing-static/cloud-vps.svg", width: "48", height: "48", class: "mr-4" }), Ui]), Oi, ft(A, { region: ut(Z)[0], products: ut(Q), os: ut(D), class: "mb-10" }, null, 8, ["region", "products", "os"]), v("div", zi, [v("div", { id: ut(ae).ONE_CLICK_APPS.id, class: "mb-4 flex items-center" }, [ft(f, { src: "/pricing-static/one-click-apps.svg", width: "48", height: "48", class: "mr-4" }), Ii], 8, Bi), Ri, ft(k, { region: ut(Z)[0], apps: ut(rt) }, null, 8, ["region", "apps"])]), v("div", { id: ut(ae).FLOATING_IP.id, class: "mb-4 flex items-center" }, [ft(f, { src: "/pricing-static/floating-ip.svg", width: "48", height: "48", class: "mr-4" }), qi], 8, Hi), Xi, ut(K) ? (pt(), jr(bt, { key: 0, class: "mb-20" })) : Lr("", !0), v("div", { id: ut(ae).ADDITIONAL_BANDWIDTH.id, class: "mb-4 flex items-center" }, [ft(f, { src: "/pricing-static/additional-bandwidth.svg", width: "48", height: "48", class: "mr-4" }), Yi], 8, Gi), Wi, v("div", Ki, [v("div", Zi, [v("span", null, ot(ut(N)) + " TB", 1), v("span", null, "$ " + ot(ut(N) * 5), 1)]), ft(ut(de), { modelValue: ut(N), "onUpdate:modelValue": h[0] || (h[0] = j => Mr(N) ? N.value = j : null), step: 1, min: 1, max: 10, "show-tooltip": "drage", "aria-labelledby": "arai" }, null, 8, ["modelValue"]), v("div", Ji, [(pt(), ht(ue, null, ce(10, j => v("div", { key: j, class: "flex flex-col items-center" }, [Qi, v("div", null, ot(j), 1)])), 64))])])]), _: 1 })])]) } } };
export { pn as default };