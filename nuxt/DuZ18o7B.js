import { _ as P } from "./BEsmpgYe.js";
import { _ as D } from "./Dd5D4KLK.js";
import { _ as E } from "./ziA4Pi5N.js";
import { _ as R } from "./I81M9Kyj.js";
import { _ as V } from "./B9LdsyXf.js";
import { f as k, o as l, h as b, w as y, b as g, a as r, t as f, c as m, l as w, d as Q, F as T, k as h, u as W, B as q, H as U, N as G, L as $, i as v, g as x, s as z, a0 as F } from "./DkmPUy5X.js";
import { u as J, a as K, b as j, m as X, g as Y, _ as Z } from "./Qu9TemJM.js";
import { u as O } from "./CyLbGF9c.js";
import { _ as ee } from "./DlAUqK2U.js";
import { a as te, _ as se } from "./DLlB40F_.js";
import { S as ae } from "./D6krPanI.js";
const ne = { class: "mb-8 flex flex-col text-center lg:mb-0 lg:w-1/2 lg:justify-center lg:text-left" },
    le = { class: "mb-4 text-subtitle1 text-text-secondary lg:mb-5 xl:text-caption" },
    oe = ["innerHTML"],
    ie = { class: "mx-auto mb-[42px] max-w-[497px] text-center text-body1 text-text-secondary lg:mx-[initial] lg:text-left" },
    re = { class: "flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start" },
    Ne = k({ __name: "HeroStartup", props: { data: {} }, setup(s) { const e = s; return (o, _) => { const u = P,
                    p = D,
                    c = E,
                    a = R,
                    n = V; return l(), b(n, { class: "bg-no-repeat md:bg-[url('static/about-heroe-mask-94974ee7df9a4f8812054b61b22b1488.png')] md:py-[67px] xl:py-[90px]" }, { default: y(() => [g(a, { class: "flex flex-col justify-center lg:flex-row" }, { default: y(() => [r("div", ne, [r("h1", le, f(e.data.subtitle), 1), r("h2", { class: "mb-6 text-h4 text-text-primary sm:text-h1", innerHTML: e.data.title }, null, 8, oe), r("p", ie, f(e.data.description), 1), r("div", re, [(l(!0), m(T, null, w(e.data.actionButtons, i => (l(), b(p, { key: i.content, "navigation-object": { link: i.link }, "no-end-slash": i.noEndSlash }, { default: y(() => [g(u, { mode: i.mode, class: "flex w-[238px] min-w-[185px] justify-center sm:w-auto" }, { default: y(() => [Q(f(i.content), 1)]), _: 2 }, 1032, ["mode"])]), _: 2 }, 1032, ["navigation-object", "no-end-slash"]))), 128))])]), g(c, { class: "lg:w-1/2", "img-style": "sm:h-[474px] sm:w-[439px]", image: e.data.image, features: e.data.features }, null, 8, ["image", "features"])]), _: 1 })]), _: 1 }) } } }),
    ce = {...j, legacyFormat: { type: String, default: null }, imgAttrs: { type: Object, default: null } },
    me = k({ name: "NuxtPicture", props: ce, emits: ["load", "error"], setup: (s, e) => { var B, A; const o = J(),
                _ = K(s),
                u = h(() => Y(s.src)),
                p = h(() => ["png", "webp", "gif", "svg"].includes(u.value)),
                c = h(() => s.legacyFormat ? s.legacyFormat : p.value ? "png" : "jpeg"),
                a = h(() => { var L, S; const t = ((L = s.format) == null ? void 0 : L.split(",")) || (u.value === "svg" ? ["svg"] : (S = o.options.format) != null && S.length ? [...o.options.format] : ["webp"]); return t[0] === "svg" ? [{ src: s.src }] : (t.includes(c.value) && t.splice(t.indexOf(c.value), 1), t.push(c.value), t.map(H => { const { srcset: N, sizes: I, src: M } = o.getSizes(s.src, {..._.options.value, sizes: s.sizes || o.options.screens, densities: s.densities, modifiers: {..._.modifiers.value, format: H } }); return { src: M, type: `image/${H}`, sizes: I, srcset: N } })) }),
                n = h(() => a.value.length - 1); if (s.preload) { const t = { rel: "preload", as: "image", imagesrcset: a.value[0].srcset, nonce: s.nonce, ...typeof s.preload != "boolean" && s.preload.fetchPriority ? { fetchpriority: s.preload.fetchPriority } : {} };
                (A = (B = a.value) == null ? void 0 : B[0]) != null && A.sizes && (t.imagesizes = a.value[0].sizes), W({ link: [t] }) } const i = {...s.imgAttrs, "data-nuxt-pic": "" }; for (const t in e.attrs) t in j && !(t in i) && (i[t] = e.attrs[t]); const d = q(),
                C = U().isHydrating; return G(() => { d.value && (d.value.complete && C && (d.value.getAttribute("data-error") ? e.emit("error", new Event("error")) : e.emit("load", new Event("load"))), d.value.onload = t => { e.emit("load", t) }, d.value.onerror = t => { e.emit("error", t) }, X("nuxt-picture")) }), () => $("picture", null, [...a.value.slice(0, -1).map(t => $("source", { type: t.type, sizes: t.sizes, srcset: t.srcset })), $("img", { ref: d, ..._.attrs.value, ...i, src: a.value[n.value].src, sizes: a.value[n.value].sizes, srcset: a.value[n.value].srcset })]) } }),
    ue = { class: "flex flex-col" },
    de = { key: 0, class: "text-center text-h4 text-text-primary sm:text-h3 md:text-h2" },
    pe = { key: 1, class: "text-center text-h4 text-text-primary sm:text-h3 md:text-h2" },
    fe = { class: "mt-6 flex flex-col md:mt-8 lg:flex-row" },
    _e = { class: "mt-8 w-full lg:ml-5 lg:w-1/2" },
    xe = { key: 0, class: "mb-8 text-h4 text-text-primary sm:text-h3 md:text-h2" },
    ge = ["innerHTML"],
    he = { key: 1, class: "mt-4 flex w-full flex-col flex-wrap sm:flex-row md:mt-6" },
    ye = ["innerHTML"],
    ve = k({ __name: "LandingIntroduction", props: { isTitleOnTop: { type: Boolean, default: !1 }, data: {} }, setup(s) { const { data: e } = s; return (o, _) => { const u = me,
                    p = Z; return l(), m("div", ue, [e.features ? (l(), m("h2", de, f(e.title), 1)) : v("", !0), !e.features && o.isTitleOnTop ? (l(), m("h2", pe, f(e.title), 1)) : v("", !0), r("div", fe, [g(u, { src: ("useReplaceDomain" in o ? o.useReplaceDomain : x(O))(e.image.src), alt: e.image.alt, class: "ml-auto mr-auto", width: "637px", height: "100%" }, null, 8, ["src", "alt"]), r("div", _e, [!e.features && !o.isTitleOnTop ? (l(), m("h2", xe, f(e.title), 1)) : v("", !0), r("p", { class: "text-body1 text-text-secondary", innerHTML: e.description }, null, 8, ge), e.features ? (l(), m("ul", he, [(l(!0), m(T, null, w(e.features, c => { var a, n; return l(), m("li", { key: c, class: "mt-1 flex w-full items-center text-subtitle2 text-text-primary sm:w-1/2 md:w-1/3 lg:w-full" }, [g(p, { width: "16", height: "16", src: ("useReplaceDomain" in o ? o.useReplaceDomain : x(O))((a = e.featureIcon) == null ? void 0 : a.src), alt: (n = e.featureIcon) == null ? void 0 : n.alt, class: "mr-2" }, null, 8, ["src", "alt"]), r("span", { innerHTML: c }, null, 8, ye)]) }), 128))])) : v("", !0)])])]) } } }),
    Ie = ee(ve, [
        ["__scopeId", "data-v-1d833800"]
    ]),
    be = { class: "mt-10 flex flex-col" },
    we = { class: "w-full lg:mr-6" },
    Te = { class: "w-full" },
    Me = k({ __name: "LandingFAQ", props: { data: {}, breakInTwoColumnOnLg: { type: Boolean, default: !0 }, centerTitle: { type: Boolean, default: !0 }, titleFontSize: { default: "text-h4 sm:text-h3 md:text-h2" }, accordionTitleFontSize: { default: "text-subtitle1 lg:text-h6" } }, setup(s) { const e = s; return (o, _) => { const u = se,
                    p = te; return l(), m("div", be, [r("h2", { class: z([
                        [{ "text-center": e.centerTitle }, e.titleFontSize], "mb-11 text-text-primary sm:mb-8"
                    ]) }, f(e.data.title), 3), g(p, { "open-first-item": !0, items: e.data.items }, { default: y(({ toggle: c, accordionItems: a }) => [r("div", { class: z(["flex flex-col", { "lg:flex-row": e.breakInTwoColumnOnLg }]) }, [r("div", we, [(l(!0), m(T, null, w(a.slice(0, x(F)(a)), (n, i) => (l(), b(u, { key: n.title, class: z(["mb-2 inline-block w-full lg:mb-4", x(ae).FAQAccordion]), "is-open": n.isOpen, "icon-type": e.data.iconType, title: n.title, description: n.description, "title-class": `${e.accordionTitleFontSize} text-text-primary`, onToggle: d => c(i) }, null, 8, ["class", "is-open", "icon-type", "title", "description", "title-class", "onToggle"]))), 128))]), r("div", Te, [(l(!0), m(T, null, w(a.slice(x(F)(a), a.length), (n, i) => (l(), b(u, { key: n.title, class: "faqAccordion mb-2 inline-block w-full lg:mb-4", "icon-type": e.data.iconType, "is-open": n.isOpen, title: n.title, description: n.description, "title-class": `${e.accordionTitleFontSize} text-text-primary`, onToggle: d => c(i + x(F)(a)) }, null, 8, ["icon-type", "is-open", "title", "description", "title-class", "onToggle"]))), 128))])], 2)]), _: 1 }, 8, ["items"])]) } } });
export { Ne as _, Ie as a, Me as b };