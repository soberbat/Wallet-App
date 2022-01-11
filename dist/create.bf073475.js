!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t();
}(this, function() {
    "use strict";
    const t1 = "SweetAlert2:", o1 = (e)=>e.charAt(0).toUpperCase() + e.slice(1)
    , a1 = (e)=>Array.prototype.slice.call(e)
    , r1 = (e)=>{
        console.warn("".concat(t1, " ").concat("object" == typeof e ? e.join(" ") : e));
    }, s1 = (e)=>{
        console.error("".concat(t1, " ").concat(e));
    }, n1 = [], i1 = (e, t)=>{
        t = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), n1.includes(t) || (n1.push(t), r1(t));
    }, c1 = (e)=>"function" == typeof e ? e() : e
    , l = (e)=>e && "function" == typeof e.toPromise
    , u = (e)=>l(e) ? e.toPromise() : Promise.resolve(e)
    , d = (e)=>e && Promise.resolve(e) === e
    , p = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {
        },
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {
        },
        inputAutoTrim: !0,
        inputAttributes: {
        },
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
    }, m = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose"
    ], g = {
    }, h = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture"
    ], f = (e)=>Object.prototype.hasOwnProperty.call(p, e)
    , b = (e)=>-1 !== m.indexOf(e)
    , y = (e)=>g[e]
    , v = (e)=>{
        !e.backdrop && e.allowOutsideClick && r1('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for(const o in e)n = o, f(n) || r1('Unknown parameter "'.concat(n, '"')), e.toast && (t = o, h.includes(t) && r1('The parameter "'.concat(t, '" is incompatible with toasts'))), t = o, y(t) && i1(t, y(t));
        var t, n;
    };
    var e1 = (e)=>{
        const t = {
        };
        for(const n in e)t[e[n]] = "swal2-" + e[n];
        return t;
    };
    const w = e1([
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error"
    ]), C = e1([
        "success",
        "warning",
        "info",
        "question",
        "error"
    ]), k = ()=>document.body.querySelector(".".concat(w.container))
    , A = (e)=>{
        const t = k();
        return t ? t.querySelector(e) : null;
    }, P = (e)=>A(".".concat(e))
    , B = ()=>P(w.popup)
    , x = ()=>P(w.icon)
    , E = ()=>P(w.title)
    , S = ()=>P(w["html-container"])
    , T = ()=>P(w.image)
    , L = ()=>P(w["progress-steps"])
    , O = ()=>P(w["validation-message"])
    , j = ()=>A(".".concat(w.actions, " .").concat(w.confirm))
    , M = ()=>A(".".concat(w.actions, " .").concat(w.deny))
    ;
    const D = ()=>A(".".concat(w.loader))
    , H = ()=>A(".".concat(w.actions, " .").concat(w.cancel))
    , I = ()=>P(w.actions)
    , q = ()=>P(w.footer)
    , V = ()=>P(w["timer-progress-bar"])
    , N = ()=>P(w.close)
    , R = ()=>{
        const e2 = a1(B().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e, t)=>{
            e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex"));
            return t < e ? 1 : e < t ? -1 : 0;
        });
        var t2 = a1(B().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((e)=>"-1" !== e.getAttribute("tabindex")
        );
        return ((t)=>{
            const n = [];
            for(let e = 0; e < t.length; e++)-1 === n.indexOf(t[e]) && n.push(t[e]);
            return n;
        })(e2.concat(t2)).filter((e)=>ae(e)
        );
    }, F = ()=>!K(document.body, w["toast-shown"]) && !K(document.body, w["no-backdrop"])
    , U = ()=>B() && K(B(), w.toast)
    ;
    function W(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        const n = V();
        ae(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(()=>{
            n.style.transition = "width ".concat(e / 1000, "s linear"), n.style.width = "0%";
        }, 10));
    }
    const z = {
        previousBodyPadding: null
    }, _ = (t, e3)=>{
        if (t.textContent = "", e3) {
            const n = new DOMParser, o = n.parseFromString(e3, "text/html");
            a1(o.querySelector("head").childNodes).forEach((e)=>{
                t.appendChild(e);
            }), a1(o.querySelector("body").childNodes).forEach((e)=>{
                t.appendChild(e);
            });
        }
    }, K = (t, e)=>{
        if (!e) return !1;
        var n = e.split(/\s+/);
        for(let e4 = 0; e4 < n.length; e4++)if (!t.classList.contains(n[e4])) return !1;
        return !0;
    }, Y = (e5, t, n)=>{
        var o, i;
        if (o = e5, i = t, a1(o.classList).forEach((e)=>{
            Object.values(w).includes(e) || Object.values(C).includes(e) || Object.values(i.showClass).includes(e) || o.classList.remove(e);
        }), t.customClass && t.customClass[n]) {
            if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return r1("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
            $(e5, t.customClass[n]);
        }
    }, Z = (e, t)=>{
        if (!t) return null;
        switch(t){
            case "select":
            case "textarea":
            case "file":
                return e.querySelector(".".concat(w.popup, " > .").concat(w[t]));
            case "checkbox":
                return e.querySelector(".".concat(w.popup, " > .").concat(w.checkbox, " input"));
            case "radio":
                return e.querySelector(".".concat(w.popup, " > .").concat(w.radio, " input:checked")) || e.querySelector(".".concat(w.popup, " > .").concat(w.radio, " input:first-child"));
            case "range":
                return e.querySelector(".".concat(w.popup, " > .").concat(w.range, " input"));
            default:
                return e.querySelector(".".concat(w.popup, " > .").concat(w.input));
        }
    }, J = (e)=>{
        var t;
        e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t);
    }, X = (e6, t3, n)=>{
        e6 && t3 && (t3 = "string" == typeof t3 ? t3.split(/\s+/).filter(Boolean) : t3).forEach((t)=>{
            Array.isArray(e6) ? e6.forEach((e)=>{
                n ? e.classList.add(t) : e.classList.remove(t);
            }) : n ? e6.classList.add(t) : e6.classList.remove(t);
        });
    }, $ = (e, t)=>{
        X(e, t, !0);
    }, G = (e, t)=>{
        X(e, t, !1);
    }, Q = (e, t)=>{
        var n = a1(e.childNodes);
        for(let e7 = 0; e7 < n.length; e7++)if (K(n[e7], t)) return n[e7];
    }, ee = (e, t, n)=>{
        (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t);
    }, te = function(e) {
        e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
    }, ne = (e)=>{
        e.style.display = "none";
    }, oe = (e, t, n, o)=>{
        const i = e.querySelector(t);
        i && (i.style[n] = o);
    }, ie = (e, t, n)=>{
        t ? te(e, n) : ne(e);
    }, ae = (e)=>!(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
    , re = ()=>!ae(j()) && !ae(M()) && !ae(H())
    , se = (e)=>!!(e.scrollHeight > e.clientHeight)
    , ce = (e)=>{
        const t = window.getComputedStyle(e);
        var n = parseFloat(t.getPropertyValue("animation-duration") || "0"), e = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < e;
    }, le = ()=>"undefined" == typeof window || "undefined" == typeof document
    , ue = 100, de = {
    }, pe = ()=>{
        de.previousActiveElement && de.previousActiveElement.focus ? (de.previousActiveElement.focus(), de.previousActiveElement = null) : document.body && document.body.focus();
    }, me = (o)=>new Promise((e)=>{
            if (!o) return e();
            var t = window.scrollX, n = window.scrollY;
            de.restoreFocusTimeout = setTimeout(()=>{
                pe(), e();
            }, ue), window.scrollTo(t, n);
        })
    , ge = '\n <div aria-labelledby="'.concat(w.title, '" aria-describedby="').concat(w["html-container"], '" class="').concat(w.popup, '" tabindex="-1">\n   <button type="button" class="').concat(w.close, '"></button>\n   <ul class="').concat(w["progress-steps"], '"></ul>\n   <div class="').concat(w.icon, '"></div>\n   <img class="').concat(w.image, '" />\n   <h2 class="').concat(w.title, '" id="').concat(w.title, '"></h2>\n   <div class="').concat(w["html-container"], '" id="').concat(w["html-container"], '"></div>\n   <input class="').concat(w.input, '" />\n   <input type="file" class="').concat(w.file, '" />\n   <div class="').concat(w.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(w.select, '"></select>\n   <div class="').concat(w.radio, '"></div>\n   <label for="').concat(w.checkbox, '" class="').concat(w.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(w.label, '"></span>\n   </label>\n   <textarea class="').concat(w.textarea, '"></textarea>\n   <div class="').concat(w["validation-message"], '" id="').concat(w["validation-message"], '"></div>\n   <div class="').concat(w.actions, '">\n     <div class="').concat(w.loader, '"></div>\n     <button type="button" class="').concat(w.confirm, '"></button>\n     <button type="button" class="').concat(w.deny, '"></button>\n     <button type="button" class="').concat(w.cancel, '"></button>\n   </div>\n   <div class="').concat(w.footer, '"></div>\n   <div class="').concat(w["timer-progress-bar-container"], '">\n     <div class="').concat(w["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""), he = ()=>{
        const e = k();
        return !!e && (e.remove(), G([
            document.documentElement,
            document.body
        ], [
            w["no-backdrop"],
            w["toast-shown"],
            w["has-column"]
        ]), !0);
    }, fe = ()=>{
        de.currentInstance.resetValidationMessage();
    }, be = ()=>{
        const e = B(), t = Q(e, w.input), n = Q(e, w.file), o = e.querySelector(".".concat(w.range, " input")), i = e.querySelector(".".concat(w.range, " output")), a = Q(e, w.select), r = e.querySelector(".".concat(w.checkbox, " input")), s = Q(e, w.textarea);
        t.oninput = fe, n.onchange = fe, a.onchange = fe, r.onchange = fe, s.oninput = fe, o.oninput = ()=>{
            fe(), i.value = o.value;
        }, o.onchange = ()=>{
            fe(), o.nextSibling.value = o.value;
        };
    }, ye = (e)=>"string" == typeof e ? document.querySelector(e) : e
    , ve = (e)=>{
        const t = B();
        t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
    }, we = (e)=>{
        "rtl" === window.getComputedStyle(e).direction && $(k(), w.rtl);
    }, Ce = (e8, t4)=>{
        e8 instanceof HTMLElement ? t4.appendChild(e8) : "object" == typeof e8 ? ((e, t)=>{
            if (e.jquery) ke(t, e);
            else _(t, e.toString());
        })(e8, t4) : e8 && _(t4, e8);
    }, ke = (t, n)=>{
        if (t.textContent = "", 0 in n) for(let e = 0; (e in n); e++)t.appendChild(n[e].cloneNode(!0));
        else t.appendChild(n.cloneNode(!0));
    }, Ae = (()=>{
        if (le()) return !1;
        var e = document.createElement("div"), t = {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend"
        };
        for(const n in t)if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
        return !1;
    })(), Pe = (e9, t5)=>{
        var n2, o2, i, a, r, s = I(), c = D();
        (t5.showConfirmButton || t5.showDenyButton || t5.showCancelButton ? te : ne)(s), Y(s, t5, "actions"), n2 = s, o2 = c, i = t5, a = j(), r = M(), s = H(), Be(a, "confirm", i), Be(r, "deny", i), Be(s, "cancel", i), (function(e, t, n, o) {
            if (!o.buttonsStyling) return G([
                e,
                t,
                n
            ], w.styled);
            $([
                e,
                t,
                n
            ], w.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, $(e, w["default-outline"]));
            o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, $(t, w["default-outline"]));
            o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, $(n, w["default-outline"]));
        })(a, r, s, i), i.reverseButtons && (i.toast ? (n2.insertBefore(s, a), n2.insertBefore(r, a)) : (n2.insertBefore(s, o2), n2.insertBefore(r, o2), n2.insertBefore(a, o2))), _(c, t5.loaderHtml), Y(c, t5, "loader");
    };
    function Be(e, t, n) {
        ie(e, n["show".concat(o1(t), "Button")], "inline-block"), _(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = w[t], Y(e, n, "".concat(t, "Button")), $(e, n["".concat(t, "ButtonClass")]);
    }
    const xe = (e, t)=>{
        var n, o, i = k();
        i && (o = i, "string" == typeof (n = t.backdrop) ? o.style.background = n : n || $([
            document.documentElement,
            document.body
        ], w["no-backdrop"]), o = i, (n = t.position) in w ? $(o, w[n]) : (r1('The "position" parameter is not valid, defaulting to "center"'), $(o, w.center)), n = i, !(o = t.grow) || "string" != typeof o || (o = "grow-".concat(o)) in w && $(n, w[o]), Y(i, t, "container"));
    };
    var Ee = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const Se = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea"
    ], Te = (e10, o3)=>{
        const i = B();
        e10 = Ee.innerParams.get(e10);
        const a = !e10 || o3.input !== e10.input;
        Se.forEach((e11)=>{
            var t6 = w[e11];
            const n3 = Q(i, t6);
            ((e, t)=>{
                const n = Z(B(), e);
                if (n) {
                    Le(n);
                    for(const o in t)n.setAttribute(o, t[o]);
                }
            })(e11, o3.inputAttributes), n3.className = t6, a && ne(n3);
        }), o3.input && (a && ((e)=>{
            if (!De[e.input]) return s1('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
            const t = Me(e.input), n = De[e.input](t, e);
            te(n), setTimeout(()=>{
                J(n);
            });
        })(o3), ((e)=>{
            const t = Me(e.input);
            if (e.customClass) $(t, e.customClass.input);
        })(o3));
    }, Le = (t)=>{
        for(let e = 0; e < t.attributes.length; e++){
            var n = t.attributes[e].name;
            [
                "type",
                "value",
                "style"
            ].includes(n) || t.removeAttribute(n);
        }
    }, Oe = (e, t)=>{
        e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder);
    }, je = (e, t, n)=>{
        if (n.inputLabel) {
            e.id = w.input;
            const i = document.createElement("label");
            var o = w["input-label"];
            i.setAttribute("for", e.id), i.className = o, $(i, n.customClass.inputLabel), i.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", i);
        }
    }, Me = (e)=>{
        e = w[e] || w.input;
        return Q(B(), e);
    }, De = {
    };
    De.text = De.email = De.password = De.number = De.tel = De.url = (e, t)=>("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : d(t.inputValue) || r1('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), je(e, e, t), Oe(e, t), e.type = t.input, e)
    , De.file = (e, t)=>(je(e, e, t), Oe(e, t), e)
    , De.range = (e, t)=>{
        const n = e.querySelector("input"), o = e.querySelector("output");
        return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, je(n, e, t), e;
    }, De.select = (e, t)=>{
        if (e.textContent = "", t.inputPlaceholder) {
            const n = document.createElement("option");
            _(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n);
        }
        return je(e, e, t), e;
    }, De.radio = (e)=>(e.textContent = "", e)
    , De.checkbox = (e, t)=>{
        const n = Z(B(), "checkbox");
        n.value = "1", n.id = w.checkbox, n.checked = Boolean(t.inputValue);
        var o = e.querySelector("span");
        return _(o, t.inputPlaceholder), e;
    }, De.textarea = (n, e12)=>{
        n.value = e12.inputValue, Oe(n, e12), je(n, n, e12);
        return setTimeout(()=>{
            if ("MutationObserver" in window) {
                const t = parseInt(window.getComputedStyle(B()).width);
                new MutationObserver(()=>{
                    var e, e = n.offsetWidth + (e = n, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
                    e > t ? B().style.width = "".concat(e, "px") : B().style.width = null;
                }).observe(n, {
                    attributes: !0,
                    attributeFilter: [
                        "style"
                    ]
                });
            }
        }), n;
    };
    const He = (e, t)=>{
        const n = S();
        Y(n, t, "htmlContainer"), t.html ? (Ce(t.html, n), te(n, "block")) : t.text ? (n.textContent = t.text, te(n, "block")) : ne(n), Te(e, t);
    }, Ie = (e, t)=>{
        var n = q();
        ie(n, t.footer), t.footer && Ce(t.footer, n), Y(n, t, "footer");
    }, qe = (e, t)=>{
        const n = N();
        _(n, t.closeButtonHtml), Y(n, t, "closeButton"), ie(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
    }, Ve = (e, t)=>{
        var n = Ee.innerParams.get(e), e = x();
        return n && t.icon === n.icon ? (Fe(e, t), void Ne(e, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(C).indexOf(t.icon) ? (s1('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), ne(e)) : (te(e), Fe(e, t), Ne(e, t), void $(e, t.showClass.icon)) : ne(e);
    }, Ne = (e, t)=>{
        for(const n in C)t.icon !== n && G(e, C[n]);
        $(e, C[t.icon]), Ue(e, t), Re(), Y(e, t, "icon");
    }, Re = ()=>{
        const e = B();
        var t = window.getComputedStyle(e).getPropertyValue("background-color");
        const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for(let e13 = 0; e13 < n.length; e13++)n[e13].style.backgroundColor = t;
    }, Fe = (e, t)=>{
        var n;
        e.textContent = "", t.iconHtml ? _(e, We(t.iconHtml)) : "success" === t.icon ? _(e, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === t.icon ? _(e, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : (n = {
            question: "?",
            warning: "!",
            info: "i"
        }, _(e, We(n[t.icon])));
    }, Ue = (e, t)=>{
        if (t.iconColor) {
            e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
            for (const n of [
                ".swal2-success-line-tip",
                ".swal2-success-line-long",
                ".swal2-x-mark-line-left",
                ".swal2-x-mark-line-right"
            ])oe(e, n, "backgroundColor", t.iconColor);
            oe(e, ".swal2-success-ring", "borderColor", t.iconColor);
        }
    }, We = (e)=>'<div class="'.concat(w["icon-content"], '">').concat(e, "</div>")
    , ze = (e, t)=>{
        const n = T();
        if (!t.imageUrl) return ne(n);
        te(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), ee(n, "width", t.imageWidth), ee(n, "height", t.imageHeight), n.className = w.image, Y(n, t, "image");
    }, _e = (e14, o)=>{
        const i = L();
        if (!o.progressSteps || 0 === o.progressSteps.length) return ne(i);
        te(i), i.textContent = "", o.currentProgressStep >= o.progressSteps.length && r1("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach((e15, t7)=>{
            var n, e15 = (n = e15, e15 = document.createElement("li"), $(e15, w["progress-step"]), _(e15, n), e15);
            i.appendChild(e15), t7 === o.currentProgressStep && $(e15, w["active-progress-step"]), t7 !== o.progressSteps.length - 1 && (t7 = ((e)=>{
                const t = document.createElement("li");
                return $(t, w["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t;
            })(o), i.appendChild(t7));
        });
    }, Ke = (e, t)=>{
        const n = E();
        ie(n, t.title || t.titleText, "block"), t.title && Ce(t.title, n), t.titleText && (n.innerText = t.titleText), Y(n, t, "title");
    }, Ye = (e16, t8)=>{
        var n = k();
        const o = B();
        t8.toast ? (ee(n, "width", t8.width), o.style.width = "100%", o.insertBefore(D(), x())) : ee(o, "width", t8.width), ee(o, "padding", t8.padding), t8.color && (o.style.color = t8.color), t8.background && (o.style.background = t8.background), ne(O()), ((e, t)=>{
            if (e.className = "".concat(w.popup, " ").concat(ae(e) ? t.showClass.popup : ""), t.toast) {
                $([
                    document.documentElement,
                    document.body
                ], w["toast-shown"]);
                $(e, w.toast);
            } else $(e, w.modal);
            if (Y(e, t, "popup"), typeof t.customClass === "string") $(e, t.customClass);
            if (t.icon) $(e, w["icon-".concat(t.icon)]);
        })(o, t8);
    }, Ze = (e, t)=>{
        Ye(e, t), xe(e, t), _e(e, t), Ve(e, t), ze(e, t), Ke(e, t), qe(e, t), He(e, t), Pe(e, t), Ie(e, t), "function" == typeof t.didRender && t.didRender(B());
    }, Je = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    }), Xe = ()=>{
        const e17 = a1(document.body.children);
        e17.forEach((e)=>{
            e === k() || e.contains(k()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"));
        });
    }, $e = ()=>{
        const e18 = a1(document.body.children);
        e18.forEach((e)=>{
            e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden");
        });
    }, Ge = [
        "swal-title",
        "swal-html",
        "swal-footer"
    ], Qe = (e19)=>{
        const n = {
        };
        return a1(e19.querySelectorAll("swal-param")).forEach((e)=>{
            rt(e, [
                "name",
                "value"
            ]);
            var t = e.getAttribute("name"), e = e.getAttribute("value");
            "boolean" == typeof p[t] && "false" === e && (n[t] = !1), "object" == typeof p[t] && (n[t] = JSON.parse(e));
        }), n;
    }, et = (e20)=>{
        const n = {
        };
        return a1(e20.querySelectorAll("swal-button")).forEach((e)=>{
            rt(e, [
                "type",
                "color",
                "aria-label"
            ]);
            var t = e.getAttribute("type");
            n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(o1(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"));
        }), n;
    }, tt = (e)=>{
        const t = {
        }, n = e.querySelector("swal-image");
        return n && (rt(n, [
            "src",
            "width",
            "height",
            "alt"
        ]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
    }, nt = (e)=>{
        const t = {
        }, n = e.querySelector("swal-icon");
        return n && (rt(n, [
            "type",
            "color"
        ]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
    }, ot = (e21)=>{
        const n = {
        }, t = e21.querySelector("swal-input");
        t && (rt(t, [
            "type",
            "label",
            "placeholder",
            "value"
        ]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
        e21 = e21.querySelectorAll("swal-input-option");
        return e21.length && (n.inputOptions = {
        }, a1(e21).forEach((e)=>{
            rt(e, [
                "value"
            ]);
            var t = e.getAttribute("value"), e = e.innerHTML;
            n.inputOptions[t] = e;
        })), n;
    }, it = (e, t)=>{
        const n = {
        };
        for(const o in t){
            const i = t[o], a = e.querySelector(i);
            a && (rt(a, []), n[i.replace(/^swal-/, "")] = a.innerHTML.trim());
        }
        return n;
    }, at = (e22)=>{
        const t = Ge.concat([
            "swal-param",
            "swal-button",
            "swal-image",
            "swal-icon",
            "swal-input",
            "swal-input-option"
        ]);
        a1(e22.children).forEach((e)=>{
            e = e.tagName.toLowerCase();
            -1 === t.indexOf(e) && r1("Unrecognized element <".concat(e, ">"));
        });
    }, rt = (t, n)=>{
        a1(t.attributes).forEach((e)=>{
            -1 === n.indexOf(e.name) && r1([
                'Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."),
                "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")
            ]);
        });
    };
    var st = {
        email: (e, t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address")
        ,
        url: (e, t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function ct(e23) {
        var t9, n4;
        (t9 = e23).inputValidator || Object.keys(st).forEach((e)=>{
            t9.input === e && (t9.inputValidator = st[e]);
        }), e23.showLoaderOnConfirm && !e23.preConfirm && r1("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n4 = e23).target && ("string" != typeof n4.target || document.querySelector(n4.target)) && ("string" == typeof n4.target || n4.target.appendChild) || (r1('Target parameter is not valid, defaulting to "body"'), n4.target = "body"), "string" == typeof e23.title && (e23.title = e23.title.split("\n").join("<br />")), ((e)=>{
            var t = he();
            if (le()) s1("SweetAlert2 requires document to initialize");
            else {
                const n = document.createElement("div");
                n.className = w.container, t && $(n, w["no-transition"]), _(n, ge);
                const o = ye(e.target);
                o.appendChild(n), ve(e), we(o), be();
            }
        })(e23);
    }
    class lt {
        constructor(e, t){
            this.callback = e, this.remaining = t, this.running = !1, this.start();
        }
        start() {
            return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining;
        }
        stop() {
            return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining;
        }
        increase(e) {
            var t = this.running;
            return t && this.stop(), this.remaining += e, t && this.start(), this.remaining;
        }
        getTimerLeft() {
            return this.running && (this.stop(), this.start()), this.remaining;
        }
        isRunning() {
            return this.running;
        }
    }
    const ut = ()=>{
        null === z.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (z.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(z.previousBodyPadding + (()=>{
            const e = document.createElement("div");
            e.className = w["scrollbar-measure"], document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
        })(), "px"));
    }, dt = ()=>{
        null !== z.previousBodyPadding && (document.body.style.paddingRight = "".concat(z.previousBodyPadding, "px"), z.previousBodyPadding = null);
    }, pt = ()=>{
        var e24;
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !K(document.body, w.iosfix) && (e24 = document.body.scrollTop, document.body.style.top = "".concat(-1 * e24, "px"), $(document.body, w.iosfix), (()=>{
            const e25 = k();
            let t;
            e25.ontouchstart = (e)=>{
                t = mt(e);
            }, e25.ontouchmove = (e)=>{
                if (t) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            };
        })(), (()=>{
            const e = navigator.userAgent, t = !!e.match(/iPad/i) || !!e.match(/iPhone/i), n = !!e.match(/WebKit/i), o = t && n && !e.match(/CriOS/i);
            if (o) {
                const i = 44;
                if (B().scrollHeight > window.innerHeight - i) k().style.paddingBottom = "".concat(i, "px");
            }
        })());
    }, mt = (e)=>{
        var t, n = e.target, o = k();
        return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || e.touches && 1 < e.touches.length) && (n === o || !(se(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || se(S()) && S().contains(n)));
    }, gt = ()=>{
        var e;
        K(document.body, w.iosfix) && (e = parseInt(document.body.style.top, 10), G(document.body, w.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e);
    }, ht = 10, ft = (e)=>{
        const t = B();
        if (e.target === t) {
            const n = k();
            t.removeEventListener(Ae, ft), n.style.overflowY = "auto";
        }
    }, bt = (e, t)=>{
        Ae && ce(t) ? (e.style.overflowY = "hidden", t.addEventListener(Ae, ft)) : e.style.overflowY = "auto";
    }, yt = (e, t, n)=>{
        pt(), t && "hidden" !== n && ut(), setTimeout(()=>{
            e.scrollTop = 0;
        });
    }, vt = (e, t, n)=>{
        $(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), te(t, "grid"), setTimeout(()=>{
            $(t, n.showClass.popup), t.style.removeProperty("opacity");
        }, ht), $([
            document.documentElement,
            document.body
        ], w.shown), n.heightAuto && n.backdrop && !n.toast && $([
            document.documentElement,
            document.body
        ], w["height-auto"]);
    }, wt = (e26)=>{
        let t10 = B();
        t10 || new fn, t10 = B();
        var n5 = D();
        U() ? ne(x()) : ((e, t)=>{
            const n = I(), o = D();
            if (!t && ae(j())) t = j();
            if (te(n), t) {
                ne(t);
                o.setAttribute("data-button-to-replace", t.className);
            }
            o.parentNode.insertBefore(o, t), $([
                e,
                n
            ], w.loading);
        })(t10, e26), te(n5), t10.setAttribute("data-loading", !0), t10.setAttribute("aria-busy", !0), t10.focus();
    }, Ct = (t, n)=>{
        const o = B(), i = (e)=>At[n.input](o, Pt(e), n)
        ;
        l(n.inputOptions) || d(n.inputOptions) ? (wt(j()), u(n.inputOptions).then((e)=>{
            t.hideLoading(), i(e);
        })) : "object" == typeof n.inputOptions ? i(n.inputOptions) : s1("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions));
    }, kt = (t, n)=>{
        const o = t.getInput();
        ne(o), u(n.inputValue).then((e)=>{
            o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), te(o), o.focus(), t.hideLoading();
        }).catch((e)=>{
            s1("Error in inputValue promise: ".concat(e)), o.value = "", te(o), o.focus(), t.hideLoading();
        });
    }, At = {
        select: (e27, t11, i)=>{
            const a = Q(e27, w.select), r = (e, t, n)=>{
                const o = document.createElement("option");
                o.value = n, _(o, t), o.selected = Bt(n, i.inputValue), e.appendChild(o);
            };
            t11.forEach((e28)=>{
                var t = e28[0];
                const n = e28[1];
                if (Array.isArray(n)) {
                    const o = document.createElement("optgroup");
                    o.label = t, o.disabled = !1, a.appendChild(o), n.forEach((e)=>r(o, e[1], e[0])
                    );
                } else r(a, n, t);
            }), a.focus();
        },
        radio: (e29, t12, a)=>{
            const r = Q(e29, w.radio);
            t12.forEach((e)=>{
                var t = e[0], e = e[1];
                const n = document.createElement("input"), o = document.createElement("label");
                n.type = "radio", n.name = w.radio, n.value = t, Bt(t, a.inputValue) && (n.checked = !0);
                const i = document.createElement("span");
                _(i, e), i.className = w.label, o.appendChild(n), o.appendChild(i), r.appendChild(o);
            });
            const n6 = r.querySelectorAll("input");
            n6.length && n6[0].focus();
        }
    }, Pt = (n7)=>{
        const o = [];
        return "undefined" != typeof Map && n7 instanceof Map ? n7.forEach((e, t)=>{
            let n = e;
            "object" == typeof n && (n = Pt(n)), o.push([
                t,
                n
            ]);
        }) : Object.keys(n7).forEach((e)=>{
            let t = n7[e];
            "object" == typeof t && (t = Pt(t)), o.push([
                e,
                t
            ]);
        }), o;
    }, Bt = (e, t)=>t && t.toString() === e.toString()
    , xt = (e30, t13)=>{
        var n8 = Ee.innerParams.get(e30), o4 = ((e, t)=>{
            const n = e.getInput();
            if (!n) return null;
            switch(t.input){
                case "checkbox":
                    return n.checked ? 1 : 0;
                case "radio":
                    return (o = n).checked ? o.value : null;
                case "file":
                    return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;
                default:
                    return t.inputAutoTrim ? n.value.trim() : n.value;
            }
            var o;
        })(e30, n8);
        n8.inputValidator ? ((t, n, o)=>{
            const e31 = Ee.innerParams.get(t);
            t.disableInput();
            const i = Promise.resolve().then(()=>u(e31.inputValidator(n, e31.validationMessage))
            );
            i.then((e)=>{
                t.enableButtons();
                t.enableInput();
                if (e) t.showValidationMessage(e);
                else if (o === "deny") Et(t, n);
                else Lt(t, n);
            });
        })(e30, o4, t13) : e30.getInput().checkValidity() ? ("deny" === t13 ? Et : Lt)(e30, o4) : (e30.enableButtons(), e30.showValidationMessage(n8.validationMessage));
    }, Et = (t, n)=>{
        const e32 = Ee.innerParams.get(t || void 0);
        if (e32.showLoaderOnDeny && wt(M()), e32.preDeny) {
            Ee.awaitingPromise.set(t || void 0, !0);
            const o = Promise.resolve().then(()=>u(e32.preDeny(n, e32.validationMessage))
            );
            o.then((e)=>{
                !1 === e ? t.hideLoading() : t.closePopup({
                    isDenied: !0,
                    value: void 0 === e ? n : e
                });
            }).catch((e)=>Tt(t || void 0, e)
            );
        } else t.closePopup({
            isDenied: !0,
            value: n
        });
    }, St = (e, t)=>{
        e.closePopup({
            isConfirmed: !0,
            value: t
        });
    }, Tt = (e, t)=>{
        e.rejectPromise(t);
    }, Lt = (t, n)=>{
        const e33 = Ee.innerParams.get(t || void 0);
        if (e33.showLoaderOnConfirm && wt(), e33.preConfirm) {
            t.resetValidationMessage(), Ee.awaitingPromise.set(t || void 0, !0);
            const o = Promise.resolve().then(()=>u(e33.preConfirm(n, e33.validationMessage))
            );
            o.then((e)=>{
                ae(O()) || !1 === e ? t.hideLoading() : St(t, void 0 === e ? n : e);
            }).catch((e)=>Tt(t || void 0, e)
            );
        } else St(t, n);
    }, Ot = (n, e34, o)=>{
        e34.popup.onclick = ()=>{
            var e, t = Ee.innerParams.get(n);
            t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o(Je.close);
        };
    };
    let jt = !1;
    const Mt = (t)=>{
        t.popup.onmousedown = ()=>{
            t.container.onmouseup = function(e) {
                t.container.onmouseup = void 0, e.target === t.container && (jt = !0);
            };
        };
    }, Dt = (t)=>{
        t.container.onmousedown = ()=>{
            t.popup.onmouseup = function(e) {
                t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (jt = !0);
            };
        };
    }, Ht = (n, o, i)=>{
        o.container.onclick = (e)=>{
            var t = Ee.innerParams.get(n);
            jt ? jt = !1 : e.target === o.container && c1(t.allowOutsideClick) && i(Je.backdrop);
        };
    };
    const It = ()=>j() && j().click()
    ;
    const qt = (e, t, n)=>{
        const o = R();
        if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
        B().focus();
    }, Vt = [
        "ArrowRight",
        "ArrowDown"
    ], Nt = [
        "ArrowLeft",
        "ArrowUp"
    ], Rt = (e36, t14, n9)=>{
        var o5, i2, a2 = Ee.innerParams.get(e36);
        a2 && (a2.stopKeydownPropagation && t14.stopPropagation(), "Enter" === t14.key ? (o5 = e36, i2 = a2, (e36 = t14).isComposing || e36.target && o5.getInput() && e36.target.outerHTML === o5.getInput().outerHTML && ([
            "textarea",
            "file"
        ].includes(i2.input) || (It(), e36.preventDefault()))) : "Tab" === t14.key ? ((e, t)=>{
            const n = e.target, o = R();
            let i = -1;
            for(let e35 = 0; e35 < o.length; e35++)if (n === o[e35]) {
                i = e35;
                break;
            }
            if (!e.shiftKey) qt(t, i, 1);
            else qt(t, i, -1);
            e.stopPropagation(), e.preventDefault();
        })(t14, a2) : [
            ...Vt,
            ...Nt
        ].includes(t14.key) ? ((e)=>{
            const t = j(), n = M(), o = H();
            if ([
                t,
                n,
                o
            ].includes(document.activeElement)) {
                var i = Vt.includes(e) ? "nextElementSibling" : "previousElementSibling";
                const a = document.activeElement[i];
                a instanceof HTMLElement && a.focus();
            }
        })(t14.key) : "Escape" === t14.key && ((e, t, n)=>{
            if (c1(t.allowEscapeKey)) {
                e.preventDefault();
                n(Je.esc);
            }
        })(t14, a2, n9));
    }, Ft = (e)=>"object" == typeof e && e.jquery
    , Ut = (e)=>e instanceof Element || Ft(e)
    ;
    const Wt = ()=>{
        if (de.timeout) return (()=>{
            const e = V();
            var t = parseInt(window.getComputedStyle(e).width);
            e.style.removeProperty("transition"), e.style.width = "100%";
            t = t / parseInt(window.getComputedStyle(e).width) * 100;
            e.style.removeProperty("transition"), e.style.width = "".concat(t, "%");
        })(), de.timeout.stop();
    }, zt = ()=>{
        if (de.timeout) {
            var e = de.timeout.start();
            return W(e), e;
        }
    };
    let _t = !1;
    const Kt = {
    };
    const Yt = (t)=>{
        for(let e = t.target; e && e !== document; e = e.parentNode)for(const o in Kt){
            var n = e.getAttribute(o);
            if (n) return void Kt[o].fire({
                template: n
            });
        }
    };
    var Zt = Object.freeze({
        isValidParameter: f,
        isUpdatableParameter: b,
        isDeprecatedParameter: y,
        argsToParams: (n)=>{
            const o = {
            };
            return "object" != typeof n[0] || Ut(n[0]) ? [
                "title",
                "html",
                "icon"
            ].forEach((e, t)=>{
                t = n[t];
                "string" == typeof t || Ut(t) ? o[e] = t : void 0 !== t && s1("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t));
            }) : Object.assign(o, n[0]), o;
        },
        isVisible: ()=>ae(B())
        ,
        clickConfirm: It,
        clickDeny: ()=>M() && M().click()
        ,
        clickCancel: ()=>H() && H().click()
        ,
        getContainer: k,
        getPopup: B,
        getTitle: E,
        getHtmlContainer: S,
        getImage: T,
        getIcon: x,
        getInputLabel: ()=>P(w["input-label"])
        ,
        getCloseButton: N,
        getActions: I,
        getConfirmButton: j,
        getDenyButton: M,
        getCancelButton: H,
        getLoader: D,
        getFooter: q,
        getTimerProgressBar: V,
        getFocusableElements: R,
        getValidationMessage: O,
        isLoading: ()=>B().hasAttribute("data-loading")
        ,
        fire: function() {
            for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
            return new this(...t);
        },
        mixin: function(n) {
            class e37 extends this {
                _main(e, t) {
                    return super._main(e, Object.assign({
                    }, n, t));
                }
            }
            return e37;
        },
        showLoading: wt,
        enableLoading: wt,
        getTimerLeft: ()=>de.timeout && de.timeout.getTimerLeft()
        ,
        stopTimer: Wt,
        resumeTimer: zt,
        toggleTimer: ()=>{
            var e = de.timeout;
            return e && (e.running ? Wt : zt)();
        },
        increaseTimer: (e)=>{
            if (de.timeout) {
                e = de.timeout.increase(e);
                return W(e, !0), e;
            }
        },
        isTimerRunning: ()=>de.timeout && de.timeout.isRunning()
        ,
        bindClickHandler: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
            Kt[e] = this, _t || (document.body.addEventListener("click", Yt), _t = !0);
        }
    });
    function Jt() {
        var e38 = Ee.innerParams.get(this);
        if (e38) {
            const t15 = Ee.domCache.get(this);
            ne(t15.loader), U() ? e38.icon && te(x()) : ((e)=>{
                const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
                if (t.length) te(t[0], "inline-block");
                else if (re()) ne(e.actions);
            })(t15), G([
                t15.popup,
                t15.actions
            ], w.loading), t15.popup.removeAttribute("aria-busy"), t15.popup.removeAttribute("data-loading"), t15.confirmButton.disabled = !1, t15.denyButton.disabled = !1, t15.cancelButton.disabled = !1;
        }
    }
    var Xt = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
    };
    function $t(e, t, n, o) {
        U() ? tn(e, o) : (me(n).then(()=>tn(e, o)
        ), de.keydownTarget.removeEventListener("keydown", de.keydownHandler, {
            capture: de.keydownListenerCapture
        }), de.keydownHandlerAdded = !1), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), F() && (dt(), gt(), $e()), G([
            document.documentElement,
            document.body
        ], [
            w.shown,
            w["height-auto"],
            w["no-backdrop"],
            w["toast-shown"]
        ]);
    }
    function Gt(e39) {
        e39 = void 0 !== (n10 = e39) ? Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, n10) : {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        };
        const t17 = Xt.swalPromiseResolve.get(this);
        var n10 = ((e)=>{
            const t = B();
            if (!t) return false;
            const n = Ee.innerParams.get(e);
            if (!n || K(t, n.hideClass.popup)) return false;
            G(t, n.showClass.popup), $(t, n.hideClass.popup);
            const o = k();
            return G(o, n.showClass.backdrop), $(o, n.hideClass.backdrop), en(e, t, n), true;
        })(this);
        this.isAwaitingPromise() ? e39.isDismissed || (Qt(this), t17(e39)) : n10 && t17(e39);
    }
    const Qt = (e)=>{
        e.isAwaitingPromise() && (Ee.awaitingPromise.delete(e), Ee.innerParams.get(e) || e._destroy());
    }, en = (e40, t, n)=>{
        var o, i, a, r = k(), s = Ae && ce(t);
        "function" == typeof n.willClose && n.willClose(t), s ? (o = e40, i = t, a = r, s = n.returnFocus, t = n.didClose, de.swalCloseEventFinishedCallback = $t.bind(null, o, a, s, t), i.addEventListener(Ae, function(e) {
            e.target === i && (de.swalCloseEventFinishedCallback(), delete de.swalCloseEventFinishedCallback);
        })) : $t(e40, r, n.returnFocus, n.didClose);
    }, tn = (e, t)=>{
        setTimeout(()=>{
            "function" == typeof t && t.bind(e.params)(), e._destroy();
        });
    };
    function nn(e, t, n) {
        const o = Ee.domCache.get(e);
        t.forEach((e)=>{
            o[e].disabled = n;
        });
    }
    function on(e, t) {
        if (!e) return !1;
        if ("radio" === e.type) {
            const n = e.parentNode.parentNode, o = n.querySelectorAll("input");
            for(let e41 = 0; e41 < o.length; e41++)o[e41].disabled = t;
        } else e.disabled = t;
    }
    const an = (e)=>{
        e.isAwaitingPromise() ? (rn(Ee, e), Ee.awaitingPromise.set(e, !0)) : (rn(Xt, e), rn(Ee, e));
    }, rn = (e, t)=>{
        for(const n in e)e[n].delete(t);
    };
    e1 = Object.freeze({
        hideLoading: Jt,
        disableLoading: Jt,
        getInput: function(e) {
            var t = Ee.innerParams.get(e || this);
            return (e = Ee.domCache.get(e || this)) ? Z(e.popup, t.input) : null;
        },
        close: Gt,
        isAwaitingPromise: function() {
            return !!Ee.awaitingPromise.get(this);
        },
        rejectPromise: function(e) {
            const t = Xt.swalPromiseReject.get(this);
            Qt(this), t && t(e);
        },
        closePopup: Gt,
        closeModal: Gt,
        closeToast: Gt,
        enableButtons: function() {
            nn(this, [
                "confirmButton",
                "denyButton",
                "cancelButton"
            ], !1);
        },
        disableButtons: function() {
            nn(this, [
                "confirmButton",
                "denyButton",
                "cancelButton"
            ], !0);
        },
        enableInput: function() {
            return on(this.getInput(), !1);
        },
        disableInput: function() {
            return on(this.getInput(), !0);
        },
        showValidationMessage: function(e) {
            const t = Ee.domCache.get(this);
            var n = Ee.innerParams.get(this);
            _(t.validationMessage, e), t.validationMessage.className = w["validation-message"], n.customClass && n.customClass.validationMessage && $(t.validationMessage, n.customClass.validationMessage), te(t.validationMessage);
            const o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", w["validation-message"]), J(o), $(o, w.inputerror));
        },
        resetValidationMessage: function() {
            var e = Ee.domCache.get(this);
            e.validationMessage && ne(e.validationMessage);
            const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), G(t, w.inputerror));
        },
        getProgressSteps: function() {
            return Ee.domCache.get(this).progressSteps;
        },
        update: function(t) {
            var e42 = B(), n = Ee.innerParams.get(this);
            if (!e42 || K(e42, n.hideClass.popup)) return r1("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const o = {
            };
            Object.keys(t).forEach((e)=>{
                b(e) ? o[e] = t[e] : r1('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'));
            }), n = Object.assign({
            }, n, o), Ze(this, n), Ee.innerParams.set(this, n), Object.defineProperties(this, {
                params: {
                    value: Object.assign({
                    }, this.params, t),
                    writable: !1,
                    enumerable: !0
                }
            });
        },
        _destroy: function() {
            var e = Ee.domCache.get(this);
            const t = Ee.innerParams.get(this);
            t ? (e.popup && de.swalCloseEventFinishedCallback && (de.swalCloseEventFinishedCallback(), delete de.swalCloseEventFinishedCallback), de.deferDisposalTimer && (clearTimeout(de.deferDisposalTimer), delete de.deferDisposalTimer), "function" == typeof t.didDestroy && t.didDestroy(), e = this, an(e), delete e.params, delete de.keydownHandler, delete de.keydownTarget, delete de.currentInstance) : an(this);
        }
    });
    let sn;
    class cn {
        constructor(){
            if ("undefined" != typeof window) {
                sn = this;
                for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
                var o = Object.freeze(this.constructor.argsToParams(t));
                Object.defineProperties(this, {
                    params: {
                        value: o,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                o = this._main(this.params);
                Ee.promise.set(this, o);
            }
        }
        _main(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
            };
            v(Object.assign({
            }, t, e)), de.currentInstance && (de.currentInstance._destroy(), F() && $e()), de.currentInstance = this;
            e = un(e, t);
            ct(e), Object.freeze(e), de.timeout && (de.timeout.stop(), delete de.timeout), clearTimeout(de.restoreFocusTimeout);
            t = dn(this);
            return Ze(this, e), Ee.innerParams.set(this, e), ln(this, t, e);
        }
        then(e) {
            const t = Ee.promise.get(this);
            return t.then(e);
        }
        finally(e) {
            const t = Ee.promise.get(this);
            return t.finally(e);
        }
    }
    const ln = (r, s, c)=>new Promise((e43, t18)=>{
            const n11 = (e)=>{
                r.closePopup({
                    isDismissed: !0,
                    dismiss: e
                });
            };
            var o6, i, a;
            Xt.swalPromiseResolve.set(r, e43), Xt.swalPromiseReject.set(r, t18), s.confirmButton.onclick = ()=>((e)=>{
                    var t = Ee.innerParams.get(e);
                    e.disableButtons(), t.input ? xt(e, "confirm") : Lt(e, !0);
                })(r)
            , s.denyButton.onclick = ()=>((e)=>{
                    var t = Ee.innerParams.get(e);
                    e.disableButtons(), t.returnInputValueOnDeny ? xt(e, "deny") : Et(e, !1);
                })(r)
            , s.cancelButton.onclick = ()=>((e, t)=>{
                    e.disableButtons(), t(Je.cancel);
                })(r, n11)
            , s.closeButton.onclick = ()=>n11(Je.close)
            , o6 = r, e43 = s, t18 = n11, Ee.innerParams.get(o6).toast ? Ot(o6, e43, t18) : (Mt(e43), Dt(e43), Ht(o6, e43, t18)), i = r, e43 = de, t18 = c, a = n11, e43.keydownTarget && e43.keydownHandlerAdded && (e43.keydownTarget.removeEventListener("keydown", e43.keydownHandler, {
                capture: e43.keydownListenerCapture
            }), e43.keydownHandlerAdded = !1), t18.toast || (e43.keydownHandler = (e)=>Rt(i, e, a)
            , e43.keydownTarget = t18.keydownListenerCapture ? window : B(), e43.keydownListenerCapture = t18.keydownListenerCapture, e43.keydownTarget.addEventListener("keydown", e43.keydownHandler, {
                capture: e43.keydownListenerCapture
            }), e43.keydownHandlerAdded = !0), t18 = r, "select" === (e43 = c).input || "radio" === e43.input ? Ct(t18, e43) : [
                "text",
                "email",
                "number",
                "tel",
                "textarea"
            ].includes(e43.input) && (l(e43.inputValue) || d(e43.inputValue)) && (wt(j()), kt(t18, e43)), ((e)=>{
                const t = k(), n = B();
                "function" == typeof e.willOpen && e.willOpen(n);
                var o = window.getComputedStyle(document.body).overflowY;
                vt(t, n, e), setTimeout(()=>{
                    bt(t, n);
                }, ht), F() && (yt(t, e.scrollbarPadding, o), Xe()), U() || de.previousActiveElement || (de.previousActiveElement = document.activeElement), "function" == typeof e.didOpen && setTimeout(()=>e.didOpen(n)
                ), G(t, w["no-transition"]);
            })(c), pn(de, c, n11), mn(s, c), setTimeout(()=>{
                s.container.scrollTop = 0;
            });
        })
    , un = (e44, t)=>{
        var n = ((e)=>{
            e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
            if (!e) return {
            };
            e = e.content;
            return at(e), Object.assign(Qe(e), et(e), tt(e), nt(e), ot(e), it(e, Ge));
        })(e44);
        const o = Object.assign({
        }, p, t, n, e44);
        return o.showClass = Object.assign({
        }, p.showClass, o.showClass), o.hideClass = Object.assign({
        }, p.hideClass, o.hideClass), o;
    }, dn = (e)=>{
        var t = {
            popup: B(),
            container: k(),
            actions: I(),
            confirmButton: j(),
            denyButton: M(),
            cancelButton: H(),
            loader: D(),
            closeButton: N(),
            validationMessage: O(),
            progressSteps: L()
        };
        return Ee.domCache.set(e, t), t;
    }, pn = (e, t, n)=>{
        var o = V();
        ne(o), t.timer && (e.timeout = new lt(()=>{
            n("timer"), delete e.timeout;
        }, t.timer), t.timerProgressBar && (te(o), setTimeout(()=>{
            e.timeout && e.timeout.running && W(t.timer);
        })));
    }, mn = (e, t)=>{
        if (!t.toast) return c1(t.allowEnterKey) ? void (gn(e, t) || qt(t, -1, 1)) : hn();
    }, gn = (e, t)=>t.focusDeny && ae(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && ae(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !ae(e.confirmButton)) && (e.confirmButton.focus(), !0)
    , hn = ()=>{
        document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
    };
    Object.assign(cn.prototype, e1), Object.assign(cn, Zt), Object.keys(e1).forEach((e)=>{
        cn[e] = function() {
            if (sn) return sn[e](...arguments);
        };
    }), cn.DismissReason = Je, cn.version = "11.3.4";
    const fn = cn;
    return fn.default = fn, fn;
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && (function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t;
    } catch (e45) {
        n.innerText = t;
    }
})(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

//# sourceMappingURL=create.bf073475.js.map
