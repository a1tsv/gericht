(() => {
  var e = {
      448: (e) => {
        window,
          (e.exports = (function (e) {
            var t = {};
            function s(n) {
              if (t[n]) return t[n].exports;
              var a = (t[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(a.exports, a, a.exports, s), (a.l = !0), a.exports
              );
            }
            return (
              (s.m = e),
              (s.c = t),
              (s.d = function (e, t, n) {
                s.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: n });
              }),
              (s.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var n = Object.create(null);
                if (
                  (s.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var a in e)
                    s.d(
                      n,
                      a,
                      function (t) {
                        return e[t];
                      }.bind(null, a)
                    );
                return n;
              }),
              (s.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return s.d(t, "a", t), t;
              }),
              (s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (s.p = ""),
              s((s.s = 0))
            );
          })([
            function (e, t, s) {
              "use strict";
              s.r(t);
              var n = [],
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                i = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                r = {
                  t: "top",
                  r: "right",
                  b: "bottom",
                  l: "left",
                  c: "centered",
                };
              function l() {}
              var o = ["click", "focusin", "keydown", "input"];
              function c(e) {
                o.forEach(function (t) {
                  e.addEventListener(t, e === document ? _ : A);
                });
              }
              function d(e) {
                return Array.isArray(e)
                  ? e.map(d)
                  : "[object Object]" === L(e)
                  ? Object.keys(e).reduce(function (t, s) {
                      return (t[s] = d(e[s])), t;
                    }, {})
                  : e;
              }
              function u(e, t) {
                var s = e.calendar.querySelector(".qs-overlay"),
                  n = s && !s.classList.contains("qs-hidden");
                (t = t || new Date(e.currentYear, e.currentMonth)),
                  (e.calendar.innerHTML = [
                    p(t, e, n),
                    h(t, e, n),
                    f(e, n),
                  ].join("")),
                  n &&
                    window.requestAnimationFrame(function () {
                      T(!0, e);
                    });
              }
              function p(e, t, s) {
                return [
                  '<div class="qs-controls' + (s ? " qs-blur" : "") + '">',
                  '<div class="qs-arrow qs-left"></div>',
                  '<div class="qs-month-year">',
                  '<span class="qs-month">' +
                    t.months[e.getMonth()] +
                    "</span>",
                  '<span class="qs-year">' + e.getFullYear() + "</span>",
                  "</div>",
                  '<div class="qs-arrow qs-right"></div>',
                  "</div>",
                ].join("");
              }
              function h(e, t, s) {
                var n = t.currentMonth,
                  a = t.currentYear,
                  i = t.dateSelected,
                  r = t.maxDate,
                  l = t.minDate,
                  o = t.showAllDates,
                  c = t.days,
                  d = t.disabledDates,
                  u = t.startDay,
                  p = t.weekendIndices,
                  h = t.events,
                  f = t.getRange ? t.getRange() : {},
                  m = +f.start,
                  g = +f.end,
                  v = S(new Date(e).setDate(1)),
                  b = v.getDay() - u,
                  y = b < 0 ? 7 : 0;
                v.setMonth(v.getMonth() + 1), v.setDate(0);
                var w = v.getDate(),
                  C = [],
                  E = y + 7 * (((b + w) / 7) | 0);
                E += (b + w) % 7 ? 7 : 0;
                for (var T = 1; T <= E; T++) {
                  var x = (T - 1) % 7,
                    L = c[x],
                    M = T - (b >= 0 ? b : 7 + b),
                    _ = new Date(a, n, M),
                    A = h[+_],
                    $ = M < 1 || M > w,
                    k = $ ? (M < 1 ? -1 : 1) : 0,
                    P = $ && !o,
                    O = P ? "" : _.getDate(),
                    D = +_ == +i,
                    I = x === p[0] || x === p[1],
                    q = m !== g,
                    z = "qs-square " + L;
                  A && !P && (z += " qs-event"),
                    $ && (z += " qs-outside-current-month"),
                    (!o && $) || (z += " qs-num"),
                    D && (z += " qs-active"),
                    (d[+_] ||
                      t.disabler(_) ||
                      (I && t.noWeekends) ||
                      (l && +_ < +l) ||
                      (r && +_ > +r)) &&
                      !P &&
                      (z += " qs-disabled"),
                    +S(new Date()) == +_ && (z += " qs-current"),
                    +_ === m && g && q && (z += " qs-range-start"),
                    +_ > m && +_ < g && (z += " qs-range-middle"),
                    +_ === g && m && q && (z += " qs-range-end"),
                    P && ((z += " qs-empty"), (O = "")),
                    C.push(
                      '<div class="' +
                        z +
                        '" data-direction="' +
                        k +
                        '">' +
                        O +
                        "</div>"
                    );
                }
                var N = c
                  .map(function (e) {
                    return '<div class="qs-square qs-day">' + e + "</div>";
                  })
                  .concat(C);
                return (
                  N.unshift(
                    '<div class="qs-squares' + (s ? " qs-blur" : "") + '">'
                  ),
                  N.push("</div>"),
                  N.join("")
                );
              }
              function f(e, t) {
                var s = e.overlayPlaceholder,
                  n = e.overlayButton;
                return [
                  '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">',
                  "<div>",
                  '<input class="qs-overlay-year" placeholder="' +
                    s +
                    '" inputmode="numeric" />',
                  '<div class="qs-close">&#10005;</div>',
                  "</div>",
                  '<div class="qs-overlay-month-container">' +
                    e.overlayMonths
                      .map(function (e, t) {
                        return (
                          '<div class="qs-overlay-month" data-month-num="' +
                          t +
                          '">' +
                          e +
                          "</div>"
                        );
                      })
                      .join("") +
                    "</div>",
                  '<div class="qs-submit qs-disabled">' + n + "</div>",
                  "</div>",
                ].join("");
              }
              function m(e, t, s) {
                var n = t.el,
                  a = t.calendar.querySelector(".qs-active"),
                  i = e.textContent,
                  r = t.sibling;
                ((n.disabled || n.readOnly) && t.respectDisabledReadOnly) ||
                  ((t.dateSelected = s
                    ? void 0
                    : new Date(t.currentYear, t.currentMonth, i)),
                  a && a.classList.remove("qs-active"),
                  s || e.classList.add("qs-active"),
                  v(n, t, s),
                  s || C(t),
                  r &&
                    (g({ instance: t, deselect: s }),
                    t.first &&
                      !r.dateSelected &&
                      ((r.currentYear = t.currentYear),
                      (r.currentMonth = t.currentMonth),
                      (r.currentMonthName = t.currentMonthName)),
                    u(t),
                    u(r)),
                  t.onSelect(t, s ? void 0 : new Date(t.dateSelected)));
              }
              function g(e) {
                var t = e.instance.first ? e.instance : e.instance.sibling,
                  s = t.sibling;
                t === e.instance
                  ? e.deselect
                    ? ((t.minDate = t.originalMinDate),
                      (s.minDate = s.originalMinDate))
                    : (s.minDate = t.dateSelected)
                  : e.deselect
                  ? ((s.maxDate = s.originalMaxDate),
                    (t.maxDate = t.originalMaxDate))
                  : (t.maxDate = s.dateSelected);
              }
              function v(e, t, s) {
                if (!t.nonInput)
                  return s
                    ? (e.value = "")
                    : t.formatter !== l
                    ? t.formatter(e, t.dateSelected, t)
                    : void (e.value = t.dateSelected.toDateString());
              }
              function b(e, t, s, n) {
                s || n
                  ? (s && (t.currentYear = +s), n && (t.currentMonth = +n))
                  : ((t.currentMonth += e.contains("qs-right") ? 1 : -1),
                    12 === t.currentMonth
                      ? ((t.currentMonth = 0), t.currentYear++)
                      : -1 === t.currentMonth &&
                        ((t.currentMonth = 11), t.currentYear--)),
                  (t.currentMonthName = t.months[t.currentMonth]),
                  u(t),
                  t.onMonthChange(t);
              }
              function y(e) {
                if (!e.noPosition) {
                  var t = e.position.top,
                    s = e.position.right;
                  if (e.position.centered)
                    return e.calendarContainer.classList.add("qs-centered");
                  var n = e.positionedEl.getBoundingClientRect(),
                    a = e.el.getBoundingClientRect(),
                    i = e.calendarContainer.getBoundingClientRect(),
                    r = a.top - n.top + (t ? -1 * i.height : a.height) + "px",
                    l = a.left - n.left + (s ? a.width - i.width : 0) + "px";
                  e.calendarContainer.style.setProperty("top", r),
                    e.calendarContainer.style.setProperty("left", l);
                }
              }
              function w(e) {
                return (
                  "[object Date]" === L(e) && "Invalid Date" !== e.toString()
                );
              }
              function S(e) {
                if (w(e) || ("number" == typeof e && !isNaN(e))) {
                  var t = new Date(+e);
                  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                }
              }
              function C(e) {
                e.disabled ||
                  (!e.calendarContainer.classList.contains("qs-hidden") &&
                    !e.alwaysShow &&
                    ("overlay" !== e.defaultView && T(!0, e),
                    e.calendarContainer.classList.add("qs-hidden"),
                    e.onHide(e)));
              }
              function E(e) {
                e.disabled ||
                  (e.calendarContainer.classList.remove("qs-hidden"),
                  "overlay" === e.defaultView && T(!1, e),
                  y(e),
                  e.onShow(e));
              }
              function T(e, t) {
                var s = t.calendar,
                  n = s.querySelector(".qs-overlay"),
                  a = n.querySelector(".qs-overlay-year"),
                  i = s.querySelector(".qs-controls"),
                  r = s.querySelector(".qs-squares");
                e
                  ? (n.classList.add("qs-hidden"),
                    i.classList.remove("qs-blur"),
                    r.classList.remove("qs-blur"),
                    (a.value = ""))
                  : (n.classList.remove("qs-hidden"),
                    i.classList.add("qs-blur"),
                    r.classList.add("qs-blur"),
                    a.focus());
              }
              function x(e, t, s, n) {
                var a = isNaN(+new Date().setFullYear(t.value || void 0)),
                  i = a ? null : t.value;
                13 === e.which || 13 === e.keyCode || "click" === e.type
                  ? n
                    ? b(null, s, i, n)
                    : a || t.classList.contains("qs-disabled") || b(null, s, i)
                  : s.calendar.contains(t) &&
                    s.calendar
                      .querySelector(".qs-submit")
                      .classList[a ? "add" : "remove"]("qs-disabled");
              }
              function L(e) {
                return {}.toString.call(e);
              }
              function M(e) {
                n.forEach(function (t) {
                  t !== e && C(t);
                });
              }
              function _(e) {
                if (!e.__qs_shadow_dom) {
                  var t = e.which || e.keyCode,
                    s = e.type,
                    a = e.target,
                    r = a.classList,
                    l = n.filter(function (e) {
                      return e.calendar.contains(a) || e.el === a;
                    })[0],
                    o = l && l.calendar.contains(a);
                  if (!(l && l.isMobile && l.disableMobile))
                    if ("click" === s) {
                      if (!l) return n.forEach(C);
                      if (l.disabled) return;
                      var c = l.calendar,
                        d = l.calendarContainer,
                        p = l.disableYearOverlay,
                        h = l.nonInput,
                        f = c.querySelector(".qs-overlay-year"),
                        g = !!c.querySelector(".qs-hidden"),
                        v = c.querySelector(".qs-month-year").contains(a),
                        y = a.dataset.monthNum;
                      if (l.noPosition && !o)
                        (d.classList.contains("qs-hidden") ? E : C)(l);
                      else if (r.contains("qs-arrow")) b(r, l);
                      else if (v || r.contains("qs-close")) p || T(!g, l);
                      else if (y) x(e, f, l, y);
                      else {
                        if (r.contains("qs-disabled")) return;
                        if (r.contains("qs-num")) {
                          var w = a.textContent,
                            S = +a.dataset.direction,
                            L = new Date(l.currentYear, l.currentMonth + S, w);
                          if (S) {
                            (l.currentYear = L.getFullYear()),
                              (l.currentMonth = L.getMonth()),
                              (l.currentMonthName = i[l.currentMonth]),
                              u(l);
                            for (
                              var _,
                                A = l.calendar.querySelectorAll(
                                  '[data-direction="0"]'
                                ),
                                $ = 0;
                              !_;

                            ) {
                              var k = A[$];
                              k.textContent === w && (_ = k), $++;
                            }
                            a = _;
                          }
                          return void (+L == +l.dateSelected
                            ? m(a, l, !0)
                            : a.classList.contains("qs-disabled") || m(a, l));
                        }
                        r.contains("qs-submit")
                          ? x(e, f, l)
                          : h && a === l.el && (E(l), M(l));
                      }
                    } else if ("focusin" === s && l) E(l), M(l);
                    else if ("keydown" === s && 9 === t && l) C(l);
                    else if ("keydown" === s && l && !l.disabled) {
                      var P = !l.calendar
                        .querySelector(".qs-overlay")
                        .classList.contains("qs-hidden");
                      13 === t && P && o
                        ? x(e, a, l)
                        : 27 === t && P && o && T(!0, l);
                    } else if ("input" === s) {
                      if (!l || !l.calendar.contains(a)) return;
                      var O = l.calendar.querySelector(".qs-submit"),
                        D = a.value
                          .split("")
                          .reduce(function (e, t) {
                            return e || "0" !== t
                              ? e + (t.match(/[0-9]/) ? t : "")
                              : "";
                          }, "")
                          .slice(0, 4);
                      (a.value = D),
                        O.classList[4 === D.length ? "remove" : "add"](
                          "qs-disabled"
                        );
                    }
                }
              }
              function A(e) {
                _(e), (e.__qs_shadow_dom = !0);
              }
              function $(e, t) {
                o.forEach(function (s) {
                  e.removeEventListener(s, t);
                });
              }
              function k() {
                E(this);
              }
              function P() {
                C(this);
              }
              function O(e, t) {
                var s = S(e),
                  n = this.currentYear,
                  a = this.currentMonth,
                  i = this.sibling;
                if (null == e)
                  return (
                    (this.dateSelected = void 0),
                    v(this.el, this, !0),
                    i && (g({ instance: this, deselect: !0 }), u(i)),
                    u(this),
                    this
                  );
                if (!w(e))
                  throw new Error("`setDate` needs a JavaScript Date object.");
                if (
                  this.disabledDates[+s] ||
                  s < this.minDate ||
                  s > this.maxDate
                )
                  throw new Error(
                    "You can't manually set a date that's disabled."
                  );
                (this.dateSelected = s),
                  t &&
                    ((this.currentYear = s.getFullYear()),
                    (this.currentMonth = s.getMonth()),
                    (this.currentMonthName = this.months[s.getMonth()])),
                  v(this.el, this),
                  i && (g({ instance: this }), u(i));
                var r = n === s.getFullYear() && a === s.getMonth();
                return (
                  r || t ? u(this, s) : r || u(this, new Date(n, a, 1)), this
                );
              }
              function D(e) {
                return q(this, e, !0);
              }
              function I(e) {
                return q(this, e);
              }
              function q(e, t, s) {
                var n = e.dateSelected,
                  a = e.first,
                  i = e.sibling,
                  r = e.minDate,
                  l = e.maxDate,
                  o = S(t),
                  c = s ? "Min" : "Max";
                function d() {
                  return "original" + c + "Date";
                }
                function p() {
                  return c.toLowerCase() + "Date";
                }
                function h() {
                  return "set" + c;
                }
                function f() {
                  throw new Error("Out-of-range date passed to " + h());
                }
                if (null == t)
                  (e[d()] = void 0),
                    i
                      ? ((i[d()] = void 0),
                        s
                          ? ((a && !n) || (!a && !i.dateSelected)) &&
                            ((e.minDate = void 0), (i.minDate = void 0))
                          : ((a && !i.dateSelected) || (!a && !n)) &&
                            ((e.maxDate = void 0), (i.maxDate = void 0)))
                      : (e[p()] = void 0);
                else {
                  if (!w(t)) throw new Error("Invalid date passed to " + h());
                  i
                    ? (((a && s && o > (n || l)) ||
                        (a && !s && o < (i.dateSelected || r)) ||
                        (!a && s && o > (i.dateSelected || l)) ||
                        (!a && !s && o < (n || r))) &&
                        f(),
                      (e[d()] = o),
                      (i[d()] = o),
                      ((s && ((a && !n) || (!a && !i.dateSelected))) ||
                        (!s && ((a && !i.dateSelected) || (!a && !n)))) &&
                        ((e[p()] = o), (i[p()] = o)))
                    : (((s && o > (n || l)) || (!s && o < (n || r))) && f(),
                      (e[p()] = o));
                }
                return i && u(i), u(e), e;
              }
              function z() {
                var e = this.first ? this : this.sibling,
                  t = e.sibling;
                return { start: e.dateSelected, end: t.dateSelected };
              }
              function N() {
                var e = this.shadowDom,
                  t = this.positionedEl,
                  s = this.calendarContainer,
                  a = this.sibling,
                  i = this;
                this.inlinePosition &&
                  (n.some(function (e) {
                    return e !== i && e.positionedEl === t;
                  }) ||
                    t.style.setProperty("position", null)),
                  s.remove(),
                  (n = n.filter(function (e) {
                    return e !== i;
                  })),
                  a && delete a.sibling,
                  n.length || $(document, _);
                var r = n.some(function (t) {
                  return t.shadowDom === e;
                });
                for (var l in (e && !r && $(e, A), this)) delete this[l];
                n.length ||
                  o.forEach(function (e) {
                    document.removeEventListener(e, _);
                  });
              }
              function B(e, t) {
                var s = new Date(e);
                if (!w(s)) throw new Error("Invalid date passed to `navigate`");
                (this.currentYear = s.getFullYear()),
                  (this.currentMonth = s.getMonth()),
                  u(this),
                  t && this.onMonthChange(this);
              }
              function j() {
                var e = !this.calendarContainer.classList.contains("qs-hidden"),
                  t = !this.calendarContainer
                    .querySelector(".qs-overlay")
                    .classList.contains("qs-hidden");
                e && T(t, this);
              }
              t.default = function (e, t) {
                var s = (function (e, t) {
                  var s,
                    o,
                    c = (function (e) {
                      var t = d(e);
                      t.events &&
                        (t.events = t.events.reduce(function (e, t) {
                          if (!w(t))
                            throw new Error(
                              '"options.events" must only contain valid JavaScript Date objects.'
                            );
                          return (e[+S(t)] = !0), e;
                        }, {})),
                        [
                          "startDate",
                          "dateSelected",
                          "minDate",
                          "maxDate",
                        ].forEach(function (e) {
                          var s = t[e];
                          if (s && !w(s))
                            throw new Error(
                              '"options.' +
                                e +
                                '" needs to be a valid JavaScript Date object.'
                            );
                          t[e] = S(s);
                        });
                      var s = t.position,
                        i = t.maxDate,
                        o = t.minDate,
                        c = t.dateSelected,
                        u = t.overlayPlaceholder,
                        p = t.overlayButton,
                        h = t.startDay,
                        f = t.id;
                      if (
                        ((t.startDate = S(t.startDate || c || new Date())),
                        (t.disabledDates = (t.disabledDates || []).reduce(
                          function (e, t) {
                            var s = +S(t);
                            if (!w(t))
                              throw new Error(
                                'You supplied an invalid date to "options.disabledDates".'
                              );
                            if (s === +S(c))
                              throw new Error(
                                '"disabledDates" cannot contain the same date as "dateSelected".'
                              );
                            return (e[s] = 1), e;
                          },
                          {}
                        )),
                        t.hasOwnProperty("id") && null == f)
                      )
                        throw new Error("`id` cannot be `null` or `undefined`");
                      if (null != f) {
                        var m = n.filter(function (e) {
                          return e.id === f;
                        });
                        if (m.length > 1)
                          throw new Error(
                            "Only two datepickers can share an id."
                          );
                        m.length
                          ? ((t.second = !0), (t.sibling = m[0]))
                          : (t.first = !0);
                      }
                      var g = ["tr", "tl", "br", "bl", "c"].some(function (e) {
                        return s === e;
                      });
                      if (s && !g)
                        throw new Error(
                          '"options.position" must be one of the following: tl, tr, bl, br, or c.'
                        );
                      function v(e) {
                        throw new Error(
                          '"dateSelected" in options is ' +
                            (e ? "less" : "greater") +
                            ' than "' +
                            (e || "max") +
                            'Date".'
                        );
                      }
                      if (
                        ((t.position = (function (e) {
                          var t = e[0],
                            s = e[1],
                            n = {};
                          return (n[r[t]] = 1), s && (n[r[s]] = 1), n;
                        })(s || "bl")),
                        i < o)
                      )
                        throw new Error(
                          '"maxDate" in options is less than "minDate".'
                        );
                      if (
                        (c && (o > c && v("min"), i < c && v()),
                        [
                          "onSelect",
                          "onShow",
                          "onHide",
                          "onMonthChange",
                          "formatter",
                          "disabler",
                        ].forEach(function (e) {
                          "function" != typeof t[e] && (t[e] = l);
                        }),
                        [
                          "customDays",
                          "customMonths",
                          "customOverlayMonths",
                        ].forEach(function (e, s) {
                          var n = t[e],
                            a = s ? 12 : 7;
                          if (n) {
                            if (
                              !Array.isArray(n) ||
                              n.length !== a ||
                              n.some(function (e) {
                                return "string" != typeof e;
                              })
                            )
                              throw new Error(
                                '"' +
                                  e +
                                  '" must be an array with ' +
                                  a +
                                  " strings."
                              );
                            t[
                              s ? (s < 2 ? "months" : "overlayMonths") : "days"
                            ] = n;
                          }
                        }),
                        h && h > 0 && h < 7)
                      ) {
                        var b = (t.customDays || a).slice(),
                          y = b.splice(0, h);
                        (t.customDays = b.concat(y)),
                          (t.startDay = +h),
                          (t.weekendIndices = [b.length - 1, b.length]);
                      } else (t.startDay = 0), (t.weekendIndices = [6, 0]);
                      "string" != typeof u && delete t.overlayPlaceholder,
                        "string" != typeof p && delete t.overlayButton;
                      var C = t.defaultView;
                      if (C && "calendar" !== C && "overlay" !== C)
                        throw new Error(
                          'options.defaultView must either be "calendar" or "overlay".'
                        );
                      return (t.defaultView = C || "calendar"), t;
                    })(
                      t || {
                        startDate: S(new Date()),
                        position: "bl",
                        defaultView: "calendar",
                      }
                    ),
                    u = e;
                  if ("string" == typeof u)
                    u =
                      "#" === u[0]
                        ? document.getElementById(u.slice(1))
                        : document.querySelector(u);
                  else {
                    if ("[object ShadowRoot]" === L(u))
                      throw new Error(
                        "Using a shadow DOM as your selector is not supported."
                      );
                    for (var p, h = u.parentNode; !p; ) {
                      var f = L(h);
                      "[object HTMLDocument]" === f
                        ? (p = !0)
                        : "[object ShadowRoot]" === f
                        ? ((p = !0), (s = h), (o = h.host))
                        : (h = h.parentNode);
                    }
                  }
                  if (!u) throw new Error("No selector / element found.");
                  if (
                    n.some(function (e) {
                      return e.el === u;
                    })
                  )
                    throw new Error(
                      "A datepicker already exists on that element."
                    );
                  var m = u === document.body,
                    g = s
                      ? u.parentElement || s
                      : m
                      ? document.body
                      : u.parentElement,
                    b = s ? u.parentElement || o : g,
                    y = document.createElement("div"),
                    C = document.createElement("div");
                  (y.className = "qs-datepicker-container qs-hidden"),
                    (C.className = "qs-datepicker");
                  var T = {
                    shadowDom: s,
                    customElement: o,
                    positionedEl: b,
                    el: u,
                    parent: g,
                    nonInput: "INPUT" !== u.nodeName,
                    noPosition: m,
                    position: !m && c.position,
                    startDate: c.startDate,
                    dateSelected: c.dateSelected,
                    disabledDates: c.disabledDates,
                    minDate: c.minDate,
                    maxDate: c.maxDate,
                    noWeekends: !!c.noWeekends,
                    weekendIndices: c.weekendIndices,
                    calendarContainer: y,
                    calendar: C,
                    currentMonth: (c.startDate || c.dateSelected).getMonth(),
                    currentMonthName: (c.months || i)[
                      (c.startDate || c.dateSelected).getMonth()
                    ],
                    currentYear: (c.startDate || c.dateSelected).getFullYear(),
                    events: c.events || {},
                    defaultView: c.defaultView,
                    setDate: O,
                    remove: N,
                    setMin: D,
                    setMax: I,
                    show: k,
                    hide: P,
                    navigate: B,
                    toggleOverlay: j,
                    onSelect: c.onSelect,
                    onShow: c.onShow,
                    onHide: c.onHide,
                    onMonthChange: c.onMonthChange,
                    formatter: c.formatter,
                    disabler: c.disabler,
                    months: c.months || i,
                    days: c.customDays || a,
                    startDay: c.startDay,
                    overlayMonths:
                      c.overlayMonths ||
                      (c.months || i).map(function (e) {
                        return e.slice(0, 3);
                      }),
                    overlayPlaceholder: c.overlayPlaceholder || "4-digit year",
                    overlayButton: c.overlayButton || "Submit",
                    disableYearOverlay: !!c.disableYearOverlay,
                    disableMobile: !!c.disableMobile,
                    isMobile: "ontouchstart" in window,
                    alwaysShow: !!c.alwaysShow,
                    id: c.id,
                    showAllDates: !!c.showAllDates,
                    respectDisabledReadOnly: !!c.respectDisabledReadOnly,
                    first: c.first,
                    second: c.second,
                  };
                  if (c.sibling) {
                    var x = c.sibling,
                      M = T,
                      _ = x.minDate || M.minDate,
                      A = x.maxDate || M.maxDate;
                    (M.sibling = x),
                      (x.sibling = M),
                      (x.minDate = _),
                      (x.maxDate = A),
                      (M.minDate = _),
                      (M.maxDate = A),
                      (x.originalMinDate = _),
                      (x.originalMaxDate = A),
                      (M.originalMinDate = _),
                      (M.originalMaxDate = A),
                      (x.getRange = z),
                      (M.getRange = z);
                  }
                  c.dateSelected && v(u, T);
                  var $ = getComputedStyle(b).position;
                  m ||
                    ($ && "static" !== $) ||
                    ((T.inlinePosition = !0),
                    b.style.setProperty("position", "relative"));
                  var q = n.filter(function (e) {
                    return e.positionedEl === T.positionedEl;
                  });
                  return (
                    q.some(function (e) {
                      return e.inlinePosition;
                    }) &&
                      ((T.inlinePosition = !0),
                      q.forEach(function (e) {
                        e.inlinePosition = !0;
                      })),
                    y.appendChild(C),
                    g.appendChild(y),
                    T.alwaysShow && E(T),
                    T
                  );
                })(e, t);
                if (
                  (n.length || c(document),
                  s.shadowDom &&
                    (n.some(function (e) {
                      return e.shadowDom === s.shadowDom;
                    }) ||
                      c(s.shadowDom)),
                  n.push(s),
                  s.second)
                ) {
                  var o = s.sibling;
                  g({ instance: s, deselect: !s.dateSelected }),
                    g({ instance: o, deselect: !o.dateSelected }),
                    u(o);
                }
                return (
                  u(s, s.startDate || s.dateSelected), s.alwaysShow && y(s), s
                );
              };
            },
          ]).default);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            a = t && "classList" in document.createElement("p"),
            i = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, r, t);
            },
            o = function (e, t) {
              var s,
                n = "LazyLoad::Initialized",
                a = new e(t);
              try {
                s = new CustomEvent(n, { detail: { instance: a } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: a }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            w = "data-",
            S = "ll-status",
            C = function (e, t) {
              return e.getAttribute(w + t);
            },
            E = function (e) {
              return C(e, S);
            },
            T = function (e, t) {
              return (function (e, t, s) {
                var n = "data-ll-status";
                null !== s ? e.setAttribute(n, s) : e.removeAttribute(n);
              })(e, 0, t);
            },
            x = function (e) {
              return T(e, null);
            },
            L = function (e) {
              return null === E(e);
            },
            M = function (e) {
              return E(e) === y;
            },
            _ = [m, g, v, b],
            A = function (e, t, s, n) {
              e &&
                (void 0 === n ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, n));
            },
            $ = function (e, t) {
              a
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              a
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            D = function (e, t) {
              e && (e.loadingCount += t);
            },
            I = function (e, t) {
              e && (e.toLoadCount = t);
            },
            q = function (e) {
              for (var t, s = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            z = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && q(s).forEach(t);
            },
            N = function (e, t) {
              q(e).forEach(t);
            },
            B = [c],
            j = [c, p],
            G = [c, d, u],
            H = [f],
            F = function (e) {
              return !!e[h];
            },
            W = function (e) {
              return e[h];
            },
            R = function (e) {
              return delete e[h];
            },
            V = function (e, t) {
              if (!F(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            Y = function (e, t) {
              if (F(e)) {
                var s = W(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              $(e, t.class_applied),
                T(e, v),
                s &&
                  (t.unobserve_completed && O(e, t),
                  A(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              $(e, t.class_loading),
                T(e, m),
                s && (D(s, 1), A(t.callback_loading, e, s));
            },
            J = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Z = function (e, t) {
              J(e, u, C(e, t.data_sizes)),
                J(e, d, C(e, t.data_srcset)),
                J(e, c, C(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                z(e, function (e) {
                  V(e, G), Z(e, t);
                }),
                  V(e, G),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                V(e, B), J(e, c, C(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  V(e, B), J(e, c, C(e, t.data_src));
                }),
                  V(e, j),
                  J(e, p, C(e, t.data_poster)),
                  J(e, c, C(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, H), J(e, f, C(e, t.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                A(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ne = function (e) {
              return !!e.llEvLisnrs;
            },
            ae = function (e) {
              if (ne(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var n = t[s];
                  se(e, s, n);
                }
                delete e.llEvLisnrs;
              }
            },
            ie = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                D(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                k(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            re = function (e, t, s) {
              var n = P(e) || e;
              ne(n) ||
                (function (e, t, s) {
                  ne(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, n, t), te(e, "error", s);
                })(
                  n,
                  function (a) {
                    !(function (e, t, s, n) {
                      var a = M(t);
                      ie(t, s, n),
                        $(t, s.class_loaded),
                        T(t, g),
                        A(s.callback_loaded, t, n),
                        a || ee(s, n);
                    })(0, e, t, s),
                      ae(n);
                  },
                  function (a) {
                    !(function (e, t, s, n) {
                      var a = M(t);
                      ie(t, s, n),
                        $(t, s.class_error),
                        T(t, b),
                        A(s.callback_error, t, n),
                        s.restore_on_error && Y(t, G),
                        a || ee(s, n);
                    })(0, e, t, s),
                      ae(n);
                  }
                );
            },
            le = function (e, t, s) {
              !(function (e) {
                return K.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      re(e, t, s),
                      (function (e) {
                        F(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var n = C(e, t.data_bg),
                          a = C(e, t.data_bg_hidpi),
                          r = i && a ? a : n;
                        r &&
                          ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                          P(e).setAttribute(c, r),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var n = C(e, t.data_bg_multi),
                          a = C(e, t.data_bg_multi_hidpi),
                          r = i && a ? a : n;
                        r && ((e.style.backgroundImage = r), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var n = C(e, t.data_bg_set);
                        if (n) {
                          var a = n.split("|"),
                            i = a.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = i.join()),
                            "" === e.style.backgroundImage &&
                              ((i = a.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = i.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    re(e, t, s),
                      (function (e, t, s) {
                        var n = Q[e.tagName];
                        n && (n(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              z(e, function (e) {
                Y(e, G);
              }),
                Y(e, G);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                Y(e, B);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  Y(e, B);
                }),
                  Y(e, j),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, H);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (F(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    M(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                x(e),
                R(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, n) {
                      var a = (function (e) {
                        return _.indexOf(E(e)) >= 0;
                      })(e);
                      T(e, "entered"),
                        $(e, s.class_entered),
                        k(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, n),
                        A(s.callback_enter, e, t, n),
                        a || le(e, s, n);
                    })(e.target, e, t, s)
                  : (function (e, t, s, n) {
                      L(e) ||
                        ($(e, s.class_exited),
                        (function (e, t, s, n) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ae(e),
                            (function (e) {
                              z(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ce(e),
                            k(e, s.class_loading),
                            D(n, -1),
                            x(e),
                            A(s.callback_cancel, e, t, n));
                        })(e, t, s, n),
                        A(s.callback_exit, e, t, n));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return E(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(L);
              })(e || ge(t));
            },
            ye = function (e, s) {
              var a = l(e);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(a, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), me(s).filter(ve)).forEach(function (t) {
                          k(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(a, this),
                this.update(s);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  a,
                  i = this._settings,
                  r = be(e, i);
                I(this, r.length),
                  !s && n
                    ? he(i)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, s),
                                  (function (e, t) {
                                    var s = Q[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  T(e, y);
                              })(e, t, s);
                          }),
                            I(s, 0);
                        })(r, i, this)
                      : ((a = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, a))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    R(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  O(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var s = l(t);
              le(e, s);
            }),
            (ye.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, n = 0; (s = t[n]); n += 1) o(e, s);
                  else o(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function s(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n].call(i.exports, i, i.exports, s), i.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          n = {};
        (n.element = t),
          (n.parent = t.parentNode),
          (n.destination = document.querySelector(s[0].trim())),
          (n.breakpoint = s[1] ? s[1].trim() : "767"),
          (n.place = s[2] ? s[2].trim() : "last"),
          (n.index = this.indexInParent(n.parent, n.element)),
          this.оbjects.push(n);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          n = String.prototype.split.call(s, ","),
          a = window.matchMedia(n[0]),
          i = n[1],
          r = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === i;
          });
        a.addListener(function () {
          e.mediaHandler(a, r);
        }),
          this.mediaHandler(a, r);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      a = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      i = (e, t = 500) => (e.hidden ? a(e, t) : n(e, t)),
      r = !0,
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const n = {},
            a = s.dataset[t].split(",");
          (n.value = a[0]),
            (n.type = a[1] ? a[1].trim() : "max"),
            (n.item = s),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = d(n);
        const a = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const s = t.split(","),
                n = s[1],
                i = s[2],
                r = window.matchMedia(s[0]),
                l = e.filter(function (e) {
                  if (e.value === n && e.type === i) return !0;
                });
              a.push({ itemsArray: l, matchMedia: r });
            }),
            a
          );
      }
    }
    let p = (e, t = !1, s = 500, n = 0) => {
      const a = document.querySelector(e);
      if (a) {
        let i = "",
          r = 0;
        t &&
          ((i = "header.header"), (r = document.querySelector(i).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: i,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (l(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", o);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: r ? e - r : e, behavior: "smooth" });
        }
        c(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class h {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let n = document.createElement("div");
        if (
          (n.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(n, e),
          n.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          n.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            n,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const n = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            a = this.getSelectElement(n).originalSelect;
          if ("click" === s) {
            if (!a.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(n, a, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(n);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(n, a, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? n.classList.add(this.selectClasses.classSelectFocus)
                  : n.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          i(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          n = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        n && n.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let n = "";
        return (
          (n += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (n += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (n += t ? s : ""),
          (n += t ? "</span>" : ""),
          (n += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (n += e.textContent),
          (n += t ? "</span>" : ""),
          (n += t ? "</span>" : ""),
          n
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          n = Array.from(e.options);
        if (n.length > 0) {
          let a = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (n = n.filter((e) => e.value)),
            (a += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            n.forEach((t) => {
              a += this.getOption(t, e);
            }),
            (a += t ? "</div>" : ""),
            a
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          n =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          a = e.dataset.class ? ` ${e.dataset.class}` : "",
          i = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let l = "";
        return (
          (l += i
            ? `<a ${r} ${n} href="${i}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${s}">`
            : `<button ${n} class="${this.selectClasses.classSelectOption}${a}${s}" data-value="${e.value}" type="button">`),
          (l += this.getSelectElementContent(e)),
          (l += i ? "</a>" : "</button>"),
          l
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && m.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          n = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          a = this;
        t.addEventListener("input", function () {
          n.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && a.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c(`[select]: ${e}`);
      }
    }
    const f = { inputMaskModule: null, selectModule: null };
    let m = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                m.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (f.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  f.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function g(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function v(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : g(t[s]) && g(e[s]) && Object.keys(t[s]).length > 0 && v(e[s], t[s]);
      });
    }
    const b = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function y() {
      const e = "undefined" != typeof document ? document : {};
      return v(e, b), e;
    }
    const w = {
      document: b,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function S() {
      const e = "undefined" != typeof window ? window : {};
      return v(e, w), e;
    }
    class C extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function E(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...E(e)) : t.push(e);
        }),
        t
      );
    }
    function T(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function x(e, t) {
      const s = S(),
        n = y();
      let a = [];
      if (!t && e instanceof C) return e;
      if (!e) return new C(a);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            a.push(t.childNodes[e]);
        } else
          a = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) a.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof C) return e;
        a = e;
      }
      return new C(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(a)
      );
    }
    x.fn = C.prototype;
    const L = "resize scroll".split(" ");
    function M(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            L.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : x(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    M("click"),
      M("blur"),
      M("focus"),
      M("focusin"),
      M("focusout"),
      M("keyup"),
      M("keydown"),
      M("keypress"),
      M("submit"),
      M("change"),
      M("mousedown"),
      M("mousemove"),
      M("mouseup"),
      M("mouseenter"),
      M("mouseleave"),
      M("mouseout"),
      M("mouseover"),
      M("touchstart"),
      M("touchend"),
      M("touchmove"),
      M("resize"),
      M("scroll");
    const _ = {
      addClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        return (
          T(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, a] = e;
        function i(e) {
          const t = e.target;
          if (!t) return;
          const a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), x(t).is(s))) n.apply(t, a);
          else {
            const e = x(t).parents();
            for (let t = 0; t < e.length; t += 1)
              x(e[t]).is(s) && n.apply(e[t], a);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, a] = e), (s = void 0)),
          a || (a = !1);
        const l = t.split(" ");
        let o;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: i }),
                t.addEventListener(e, i, a);
            }
          else
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, a);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, a] = e;
        "function" == typeof e[1] && (([t, n, a] = e), (s = void 0)),
          a || (a = !1);
        const i = t.split(" ");
        for (let e = 0; e < i.length; e += 1) {
          const t = i[e];
          for (let e = 0; e < this.length; e += 1) {
            const i = this[e];
            let r;
            if (
              (!s && i.dom7Listeners
                ? (r = i.dom7Listeners[t])
                : s && i.dom7LiveListeners && (r = i.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (i.removeEventListener(t, s.proxyListener, a),
                    r.splice(e, 1))
                  : n ||
                    (i.removeEventListener(t, s.proxyListener, a),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = S(),
          s = e[0].split(" "),
          n = e[1];
        for (let a = 0; a < s.length; a += 1) {
          const i = s[a];
          for (let s = 0; s < this.length; s += 1) {
            const a = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(i, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (a.dom7EventData = e.filter((e, t) => t > 0)),
                a.dispatchEvent(s),
                (a.dom7EventData = []),
                delete a.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = S();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = S(),
            t = y(),
            s = this[0],
            n = s.getBoundingClientRect(),
            a = t.body,
            i = s.clientTop || a.clientTop || 0,
            r = s.clientLeft || a.clientLeft || 0,
            l = s === e ? e.scrollY : s.scrollTop,
            o = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + l - i, left: n.left + o - r };
        }
        return null;
      },
      css: function (e, t) {
        const s = S();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = S(),
          s = y(),
          n = this[0];
        let a, i;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (a = x(e), i = 0; i < a.length; i += 1) if (a[i] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof C) {
          for (a = e.nodeType ? [e] : e, i = 0; i < a.length; i += 1)
            if (a[i] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return x([]);
        if (e < 0) {
          const s = t + e;
          return x(s < 0 ? [] : [this[s]]);
        }
        return x([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = y();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof C)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = y();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const a = t.createElement("div");
            for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(a.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof C)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && x(this[0].nextElementSibling).is(e)
              ? x([this[0].nextElementSibling])
              : x([])
            : this[0].nextElementSibling
            ? x([this[0].nextElementSibling])
            : x([])
          : x([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return x([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? x(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return x(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && x(t.previousElementSibling).is(e)
              ? x([t.previousElementSibling])
              : x([])
            : t.previousElementSibling
            ? x([t.previousElementSibling])
            : x([]);
        }
        return x([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return x([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? x(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return x(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? x(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return x(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? x(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return x(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? x([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return x(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !x(n[s]).is(e)) || t.push(n[s]);
        }
        return x(t);
      },
      filter: function (e) {
        return x(T(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(_).forEach((e) => {
      Object.defineProperty(x.fn, e, { value: _[e], writable: !0 });
    });
    const A = x;
    function $(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function k() {
      return Date.now();
    }
    function P(e, t) {
      void 0 === t && (t = "x");
      const s = S();
      let n, a, i;
      const r = (function (e) {
        const t = S();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((a = r.transform || r.webkitTransform),
            a.split(",").length > 6 &&
              (a = a
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (i = new s.WebKitCSSMatrix("none" === a ? "" : a)))
          : ((i =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = i.toString().split(","))),
        "x" === t &&
          (a = s.WebKitCSSMatrix
            ? i.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (a = s.WebKitCSSMatrix
            ? i.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        a || 0
      );
    }
    function O(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function D(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function I() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != n && !D(n)) {
          const s = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, a = s.length; t < a; t += 1) {
            const a = s[t],
              i = Object.getOwnPropertyDescriptor(n, a);
            void 0 !== i &&
              i.enumerable &&
              (O(e[a]) && O(n[a])
                ? n[a].__swiper__
                  ? (e[a] = n[a])
                  : I(e[a], n[a])
                : !O(e[a]) && O(n[a])
                ? ((e[a] = {}), n[a].__swiper__ ? (e[a] = n[a]) : I(e[a], n[a]))
                : (e[a] = n[a]));
          }
        }
      }
      return e;
    }
    function q(e, t, s) {
      e.style.setProperty(t, s);
    }
    function z(e) {
      let { swiper: t, targetPosition: s, side: n } = e;
      const a = S(),
        i = -t.translate;
      let r,
        l = null;
      const o = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        a.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > i ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (r = new Date().getTime()), null === l && (l = r);
          const e = Math.max(Math.min((r - l) / o, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = i + c * (s - i);
          if ((d(p, s) && (p = s), t.wrapperEl.scrollTo({ [n]: p }), d(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [n]: p });
              }),
              void a.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = a.requestAnimationFrame(u);
        };
      u();
    }
    let N, B, j;
    function G() {
      return (
        N ||
          (N = (function () {
            const e = S(),
              t = y();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        N
      );
    }
    function H(e) {
      return (
        void 0 === e && (e = {}),
        B ||
          (B = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = G(),
              n = S(),
              a = n.navigator.platform,
              i = t || n.navigator.userAgent,
              r = { ios: !1, android: !1 },
              l = n.screen.width,
              o = n.screen.height,
              c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = i.match(/(iPad).*OS\s([\d_]+)/);
            const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === a;
            let f = "MacIntel" === a;
            return (
              !d &&
                f &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${o}`) >= 0 &&
                ((d = i.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !h && ((r.os = "android"), (r.android = !0)),
              (d || p || u) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        B
      );
    }
    function F() {
      return (
        j ||
          (j = (function () {
            const e = S();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        j
      );
    }
    const W = {
      on(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const a = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][a](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function a() {
          n.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
          for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
            i[r] = arguments[r];
          t.apply(n, i);
        }
        return (a.__emitterProxy = t), n.on(e, a, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, a) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(a, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, n;
        for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
          i[r] = arguments[r];
        "string" == typeof i[0] || Array.isArray(i[0])
          ? ((t = i[0]), (s = i.slice(1, i.length)), (n = e))
          : ((t = i[0].events), (s = i[0].data), (n = i[0].context || e)),
          s.unshift(n);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(n, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(n, s);
                });
          }),
          e
        );
      },
    };
    const R = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: a, size: i, rtlTranslate: r, wrongRTL: l } = e,
          o = e.virtual && n.virtual.enabled,
          c = o ? e.virtual.slides.length : e.slides.length,
          d = a.children(`.${e.params.slideClass}`),
          u = o ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = n.spaceBetween,
          w = -m,
          S = 0,
          C = 0;
        if (void 0 === i) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * i),
          (e.virtualSize = -y),
          r
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (q(e.wrapperEl, "--swiper-centered-offset-before", ""),
            q(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = n.grid && n.grid.rows > 1 && e.grid;
        let T;
        E && e.grid.initSlides(u);
        const x =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let a = 0; a < u; a += 1) {
          T = 0;
          const r = d.eq(a);
          if (
            (E && e.grid.updateSlide(a, r, u, t), "none" !== r.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              x && (d[a].style[t("width")] = "");
              const i = getComputedStyle(r[0]),
                l = r[0].style.transform,
                o = r[0].style.webkitTransform;
              if (
                (l && (r[0].style.transform = "none"),
                o && (r[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                T = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = s(i, "width"),
                  t = s(i, "padding-left"),
                  n = s(i, "padding-right"),
                  a = s(i, "margin-left"),
                  l = s(i, "margin-right"),
                  o = i.getPropertyValue("box-sizing");
                if (o && "border-box" === o) T = e + a + l;
                else {
                  const { clientWidth: s, offsetWidth: i } = r[0];
                  T = e + t + n + a + l + (i - s);
                }
              }
              l && (r[0].style.transform = l),
                o && (r[0].style.webkitTransform = o),
                n.roundLengths && (T = Math.floor(T));
            } else
              (T = (i - (n.slidesPerView - 1) * y) / n.slidesPerView),
                n.roundLengths && (T = Math.floor(T)),
                d[a] && (d[a].style[t("width")] = `${T}px`);
            d[a] && (d[a].swiperSlideSize = T),
              f.push(T),
              n.centeredSlides
                ? ((w = w + T / 2 + S / 2 + y),
                  0 === S && 0 !== a && (w = w - i / 2 - y),
                  0 === a && (w = w - i / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  n.roundLengths && (w = Math.floor(w)),
                  C % n.slidesPerGroup == 0 && p.push(w),
                  h.push(w))
                : (n.roundLengths && (w = Math.floor(w)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  h.push(w),
                  (w = w + T + y)),
              (e.virtualSize += T + y),
              (S = T),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + g),
          r &&
            l &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            a.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            a.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(T, p, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let a = p[s];
            n.roundLengths && (a = Math.floor(a)),
              p[s] <= e.virtualSize - i && t.push(a);
          }
          (p = t),
            Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - i);
        }
        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
            [s]: `${y}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - i;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < i)
          ) {
            const t = (i - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          q(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            q(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(o || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          u <= n.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let a,
          i = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || A([])).each((e) => {
              s.push(e);
            });
          else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
              const e = t.activeIndex + a;
              if (e > t.slides.length && !n) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (a = 0; a < s.length; a += 1)
          if (void 0 !== s[a]) {
            const e = s[a].offsetHeight;
            i = e > i ? e : i;
          }
        (i || 0 === i) && t.$wrapperEl.css("height", `${i}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: a, snapGrid: i } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        a && (r = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const l = n[e];
          let o = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= n[0].swiperSlideOffset);
          const c =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            d =
              (r - i[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            u = -(r - o),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (l.progress = a ? -c : c),
            (l.originalProgress = a ? -d : d);
        }
        t.visibleSlides = A(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: i, isEnd: r } = t;
        const l = i,
          o = r;
        0 === n
          ? ((a = 0), (i = !0), (r = !0))
          : ((a = (e - t.minTranslate()) / n), (i = a <= 0), (r = a >= 1)),
          Object.assign(t, { progress: a, isBeginning: i, isEnd: r }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          i && !l && t.emit("reachBeginning toEdge"),
          r && !o && t.emit("reachEnd toEdge"),
          ((l && !i) || (o && !r)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: a,
            realIndex: i,
          } = e,
          r = e.virtual && s.virtual.enabled;
        let l;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (l = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${a}"]`
              )
            : t.eq(a)),
          l.addClass(s.slideActiveClass),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${i}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${i}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === o.length &&
          ((o = t.eq(0)), o.addClass(s.slideNextClass));
        let c = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: a,
            params: i,
            activeIndex: r,
            realIndex: l,
            snapIndex: o,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : s >= n[e] && s < n[e + 1] && (d = e + 1)
              : s >= n[e] && (d = e);
          i.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (a.indexOf(s) >= 0) c = a.indexOf(s);
        else {
          const e = Math.min(i.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / i.slidesPerGroup);
        }
        if ((c >= a.length && (c = a.length - 1), d === r))
          return void (
            c !== o && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: r,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = A(e).closest(`.${s.slideClass}`)[0];
        let a,
          i = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (i = !0), (a = e);
              break;
            }
        if (!n || !i)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                A(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = a),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const V = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: a,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let i = P(a[0], e);
        return s && (i = -i), i || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: a,
            $wrapperEl: i,
            wrapperEl: r,
            progress: l,
          } = s;
        let o,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = n ? -e : e) : (d = e),
          a.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          a.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : a.virtualTranslate ||
              i.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (o = 0 === u ? 0 : (e - s.minTranslate()) / u),
          o !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, n, a) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === n && (n = !0);
        const i = this,
          { params: r, wrapperEl: l } = i;
        if (i.animating && r.preventInteractionOnTransition) return !1;
        const o = i.minTranslate(),
          c = i.maxTranslate();
        let d;
        if (
          ((d = n && e > o ? o : n && e < c ? c : e),
          i.updateProgress(d),
          r.cssMode)
        ) {
          const e = i.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!i.support.smoothScroll)
              return (
                z({ swiper: i, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (i.setTransition(0),
              i.setTranslate(d),
              s &&
                (i.emit("beforeTransitionStart", t, a),
                i.emit("transitionEnd")))
            : (i.setTransition(t),
              i.setTranslate(d),
              s &&
                (i.emit("beforeTransitionStart", t, a),
                i.emit("transitionStart")),
              i.animating ||
                ((i.animating = !0),
                i.onTranslateToWrapperTransitionEnd ||
                  (i.onTranslateToWrapperTransitionEnd = function (e) {
                    i &&
                      !i.destroyed &&
                      e.target === this &&
                      (i.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        i.onTranslateToWrapperTransitionEnd
                      ),
                      i.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        i.onTranslateToWrapperTransitionEnd
                      ),
                      (i.onTranslateToWrapperTransitionEnd = null),
                      delete i.onTranslateToWrapperTransitionEnd,
                      s && i.emit("transitionEnd"));
                  }),
                i.$wrapperEl[0].addEventListener(
                  "transitionend",
                  i.onTranslateToWrapperTransitionEnd
                ),
                i.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  i.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function Y(e) {
      let { swiper: t, runCallbacks: s, direction: n, step: a } = e;
      const { activeIndex: i, previousIndex: r } = t;
      let l = n;
      if (
        (l || (l = i > r ? "next" : i < r ? "prev" : "reset"),
        t.emit(`transition${a}`),
        s && i !== r)
      ) {
        if ("reset" === l) return void t.emit(`slideResetTransition${a}`);
        t.emit(`slideChangeTransition${a}`),
          "next" === l
            ? t.emit(`slideNextTransition${a}`)
            : t.emit(`slidePrevTransition${a}`);
      }
    }
    const X = {
      slideTo: function (e, t, s, n, a) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const i = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = i;
        if (
          (i.animating && l.preventInteractionOnTransition) ||
          (!f && !n && !a)
        )
          return !1;
        const m = Math.min(i.params.slidesPerGroupSkip, r);
        let g = m + Math.floor((r - m) / i.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1),
          (u || l.initialSlide || 0) === (d || 0) &&
            s &&
            i.emit("beforeSlideChangeStart");
        const v = -o[g];
        if ((i.updateProgress(v), l.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (r = e)
                : t >= s && t < n && (r = e + 1)
              : t >= s && (r = e);
          }
        if (i.initialized && r !== u) {
          if (!i.allowSlideNext && v < i.translate && v < i.minTranslate())
            return !1;
          if (
            !i.allowSlidePrev &&
            v > i.translate &&
            v > i.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          ((b = r > u ? "next" : r < u ? "prev" : "reset"),
          (p && -v === i.translate) || (!p && v === i.translate))
        )
          return (
            i.updateActiveIndex(r),
            l.autoHeight && i.updateAutoHeight(),
            i.updateSlidesClasses(),
            "slide" !== l.effect && i.setTranslate(v),
            "reset" !== b && (i.transitionStart(s, b), i.transitionEnd(s, b)),
            !1
          );
        if (l.cssMode) {
          const e = i.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = i.virtual && i.params.virtual.enabled;
            t &&
              ((i.wrapperEl.style.scrollSnapType = "none"),
              (i._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (i.wrapperEl.style.scrollSnapType = ""),
                    (i._swiperImmediateVirtual = !1);
                });
          } else {
            if (!i.support.smoothScroll)
              return (
                z({ swiper: i, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          i.setTransition(t),
          i.setTranslate(v),
          i.updateActiveIndex(r),
          i.updateSlidesClasses(),
          i.emit("beforeTransitionStart", t, n),
          i.transitionStart(s, b),
          0 === t
            ? i.transitionEnd(s, b)
            : i.animating ||
              ((i.animating = !0),
              i.onSlideToWrapperTransitionEnd ||
                (i.onSlideToWrapperTransitionEnd = function (e) {
                  i &&
                    !i.destroyed &&
                    e.target === this &&
                    (i.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    (i.onSlideToWrapperTransitionEnd = null),
                    delete i.onSlideToWrapperTransitionEnd,
                    i.transitionEnd(s, b));
                }),
              i.$wrapperEl[0].addEventListener(
                "transitionend",
                i.onSlideToWrapperTransitionEnd
              ),
              i.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                i.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const a = this;
        let i = e;
        return a.params.loop && (i += a.loopedSlides), a.slideTo(i, t, s, n);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          { animating: a, enabled: i, params: r } = n;
        if (!i) return n;
        let l = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const o = n.activeIndex < r.slidesPerGroupSkip ? 1 : l;
        if (r.loop) {
          if (a && r.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return r.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          {
            params: a,
            animating: i,
            snapGrid: r,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: c,
          } = n;
        if (!c) return n;
        if (a.loop) {
          if (i && a.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(o ? n.translate : -n.translate),
          p = r.map((e) => d(e));
        let h = r[p.indexOf(u) - 1];
        if (void 0 === h && a.cssMode) {
          let e;
          r.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = l.indexOf(h)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          a.rewind && n.isBeginning)
        ) {
          const a =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(a, e, t, s);
        }
        return n.slideTo(f, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, n) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === n && (n = 0.5);
        const a = this;
        let i = a.activeIndex;
        const r = Math.min(a.params.slidesPerGroupSkip, i),
          l = r + Math.floor((i - r) / a.params.slidesPerGroup),
          o = a.rtlTranslate ? a.translate : -a.translate;
        if (o >= a.snapGrid[l]) {
          const e = a.snapGrid[l];
          o - e > (a.snapGrid[l + 1] - e) * n && (i += a.params.slidesPerGroup);
        } else {
          const e = a.snapGrid[l - 1];
          o - e <= (a.snapGrid[l] - e) * n && (i -= a.params.slidesPerGroup);
        }
        return (
          (i = Math.max(i, 0)),
          (i = Math.min(i, a.slidesGrid.length - 1)),
          a.slideTo(i, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let a,
          i = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (a = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? i < e.loopedSlides - n / 2 ||
                i > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (i = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  $(() => {
                    e.slideTo(i);
                  }))
                : e.slideTo(i)
              : i > e.slides.length - n
              ? (e.loopFix(),
                (i = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                $(() => {
                  e.slideTo(i);
                }))
              : e.slideTo(i);
        } else e.slideTo(i);
      },
    };
    const U = {
      loopCreate: function () {
        const e = this,
          t = y(),
          { params: s, $wrapperEl: n } = e,
          a = n.children().length > 0 ? A(n.children()[0].parentNode) : n;
        a.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let i = a.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (i.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = A(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              a.append(e);
            }
            i = a.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = i.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > i.length && (e.loopedSlides = i.length);
        const r = [],
          l = [];
        i.each((t, s) => {
          const n = A(t);
          s < e.loopedSlides && l.push(t),
            s < i.length && s >= i.length - e.loopedSlides && r.push(t),
            n.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < l.length; e += 1)
          a.append(A(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          a.prepend(A(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: a,
          allowSlideNext: i,
          snapGrid: r,
          rtlTranslate: l,
        } = e;
        let o;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -r[t] - e.getTranslate();
        if (t < n) {
          (o = s.length - 3 * n + t), (o += n);
          e.slideTo(o, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((l ? -e.translate : e.translate) - c);
        } else if (t >= s.length - n) {
          (o = -s.length + t + n), (o += n);
          e.slideTo(o, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((l ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = a), (e.allowSlideNext = i), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function J(e) {
      const t = this,
        s = y(),
        n = S(),
        a = t.touchEventsData,
        { params: i, touches: r, enabled: l } = t;
      if (!l) return;
      if (t.animating && i.preventInteractionOnTransition) return;
      !t.animating && i.cssMode && i.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let c = A(o.target);
      if ("wrapper" === i.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((a.isTouchEvent = "touchstart" === o.type),
        !a.isTouchEvent && "which" in o && 3 === o.which)
      )
        return;
      if (!a.isTouchEvent && "button" in o && o.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      !!i.noSwipingClass &&
        "" !== i.noSwipingClass &&
        o.target &&
        o.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = A(e.path[0]));
      const d = i.noSwipingSelector
          ? i.noSwipingSelector
          : `.${i.noSwipingClass}`,
        u = !(!o.target || !o.target.shadowRoot);
      if (
        i.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === y() || s === S()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const n = s.closest(e);
                  return n || s.getRootNode
                    ? n || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(d, c[0])
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (i.swipeHandler && !c.closest(i.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
        (r.currentY =
          "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
      const p = r.currentX,
        h = r.currentY,
        f = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
        m = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
      if (f && (p <= m || p >= n.innerWidth - m)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = p),
        (r.startY = h),
        (a.touchStartTime = k()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        i.threshold > 0 && (a.allowThresholdMove = !1),
        "touchstart" !== o.type)
      ) {
        let e = !0;
        c.is(a.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (a.isTouched = !1)),
          s.activeElement &&
            A(s.activeElement).is(a.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && i.touchStartPreventDefault;
        (!i.touchStartForcePreventDefault && !n) ||
          c[0].isContentEditable ||
          o.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !i.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function Z(e) {
      const t = y(),
        s = this,
        n = s.touchEventsData,
        { params: a, touches: i, rtlTranslate: r, enabled: l } = s;
      if (!l) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      if (n.isTouchEvent && "touchmove" !== o.type) return;
      const c =
          "touchmove" === o.type &&
          o.targetTouches &&
          (o.targetTouches[0] || o.changedTouches[0]),
        d = "touchmove" === o.type ? c.pageX : o.pageX,
        u = "touchmove" === o.type ? c.pageY : o.pageY;
      if (o.preventedByNestedSwiper) return (i.startX = d), void (i.startY = u);
      if (!s.allowTouchMove)
        return (
          A(o.target).is(n.focusableElements) || (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(i, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (n.touchStartTime = k()))
          )
        );
      if (n.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
        if (s.isVertical()) {
          if (
            (u < i.startY && s.translate <= s.maxTranslate()) ||
            (u > i.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (d < i.startX && s.translate <= s.maxTranslate()) ||
          (d > i.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        o.target === t.activeElement &&
        A(o.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (i.currentX = d), (i.currentY = u);
      const p = i.currentX - i.startX,
        h = i.currentY - i.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && i.currentY === i.startY) ||
        (s.isVertical() && i.currentX === i.startX)
          ? (n.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > a.touchAngle
              : 90 - e > a.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === n.startMoving &&
          ((i.currentX === i.startX && i.currentY === i.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !a.cssMode && o.cancelable && o.preventDefault(),
        a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
        n.isMoved ||
          (a.loop && !a.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !a.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o)),
        s.emit("sliderMove", o),
        (n.isMoved = !0);
      let f = s.isHorizontal() ? p : h;
      (i.diff = f),
        (f *= a.touchRatio),
        r && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (n.currentTranslate = f + n.startTranslate);
      let m = !0,
        g = a.resistanceRatio;
      if (
        (a.touchReleaseOnEdges && (g = 0),
        f > 0 && n.currentTranslate > s.minTranslate()
          ? ((m = !1),
            a.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + f) ** g))
          : f < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            a.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - f) ** g)),
        m && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        a.threshold > 0)
      ) {
        if (!(Math.abs(f) > a.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (i.startX = i.currentX),
            (i.startY = i.currentY),
            (n.currentTranslate = n.startTranslate),
            void (i.diff = s.isHorizontal()
              ? i.currentX - i.startX
              : i.currentY - i.startY)
          );
      }
      a.followFinger &&
        !a.cssMode &&
        (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
          a.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          a.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function Q(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: a,
          rtlTranslate: i,
          slidesGrid: r,
          enabled: l,
        } = t;
      if (!l) return;
      let o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = k(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((e && e[0]) || o.target),
          t.emit("tap click", o),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", o);
      }
      if (
        ((s.lastClickTime = k()),
        $(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === a.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = n.followFinger
          ? i
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== r[e + t]
          ? u >= r[e] && u < r[e + t] && ((p = e), (h = r[e + t] - r[e]))
          : u >= r[e] && ((p = e), (h = r[r.length - 1] - r[r.length - 2]));
      }
      let f = null,
        m = null;
      n.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - r[p]) / h,
        v = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? f : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - n.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
          ? o.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function K() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: a, snapGrid: i } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = a),
        (e.allowSlideNext = n),
        e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
    }
    function ee(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function te() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let a;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const i = e.maxTranslate() - e.minTranslate();
      (a = 0 === i ? 0 : (e.translate - e.minTranslate()) / i),
        a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let se = !1;
    function ne() {}
    const ae = (e, t) => {
      const s = y(),
        {
          params: n,
          touchEvents: a,
          el: i,
          wrapperEl: r,
          device: l,
          support: o,
        } = e,
        c = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (o.touch) {
        const t = !(
          "touchstart" !== a.start ||
          !o.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        i[d](a.start, e.onTouchStart, t),
          i[d](
            a.move,
            e.onTouchMove,
            o.passiveListener ? { passive: !1, capture: c } : c
          ),
          i[d](a.end, e.onTouchEnd, t),
          a.cancel && i[d](a.cancel, e.onTouchEnd, t);
      } else
        i[d](a.start, e.onTouchStart, !1),
          s[d](a.move, e.onTouchMove, c),
          s[d](a.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        i[d]("click", e.onClick, !0),
        n.cssMode && r[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[u](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0
            )
          : e[u]("observerUpdate", K, !0);
    };
    const ie = {
        attachEvents: function () {
          const e = this,
            t = y(),
            { params: s, support: n } = e;
          (e.onTouchStart = J.bind(e)),
            (e.onTouchMove = Z.bind(e)),
            (e.onTouchEnd = Q.bind(e)),
            s.cssMode && (e.onScroll = te.bind(e)),
            (e.onClick = ee.bind(e)),
            n.touch && !se && (t.addEventListener("touchstart", ne), (se = !0)),
            ae(e, "on");
        },
        detachEvents: function () {
          ae(this, "off");
        },
      },
      re = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const le = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: a,
            $el: i,
          } = e,
          r = a.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        const o = (l in r ? r[l] : void 0) || e.originalParams,
          c = re(e, a),
          d = re(e, o),
          u = a.enabled;
        c && !d
          ? (i.removeClass(
              `${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (i.addClass(`${a.containerModifierClass}grid`),
            ((o.grid.fill && "column" === o.grid.fill) ||
              (!o.grid.fill && "column" === a.grid.fill)) &&
              i.addClass(`${a.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const s = a[t] && a[t].enabled,
              n = o[t] && o[t].enabled;
            s && !n && e[t].disable(), !s && n && e[t].enable();
          });
        const p = o.direction && o.direction !== a.direction,
          h = a.loop && (o.slidesPerView !== a.slidesPerView || p);
        p && s && e.changeDirection(), I(e.params, o);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = l),
          e.emit("_beforeBreakpoint", o),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", o);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let n = !1;
        const a = S(),
          i = "window" === t ? a.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: i * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: i, value: l } = r[e];
          "window" === t
            ? a.matchMedia(`(min-width: ${l}px)`).matches && (n = i)
            : l <= s.clientWidth && (n = i);
        }
        return n || "max";
      },
    };
    const oe = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: a,
            device: i,
            support: r,
          } = e,
          l = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: i.android },
              { ios: i.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...l), a.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ce = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function de(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const n = Object.keys(s)[0],
          a = s[n];
        "object" == typeof a && null !== a
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in a
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                I(t, s))
              : I(t, s))
          : I(t, s);
      };
    }
    const ue = {
        eventsEmitter: W,
        update: R,
        translate: V,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              Y({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                Y({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: X,
        loop: U,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ie,
        breakpoints: le,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: oe,
        images: {
          loadImage: function (e, t, s, n, a, i) {
            const r = S();
            let l;
            function o() {
              i && i();
            }
            A(e).parent("picture")[0] || (e.complete && a)
              ? o()
              : t
              ? ((l = new r.Image()),
                (l.onload = o),
                (l.onerror = o),
                n && (l.sizes = n),
                s && (l.srcset = s),
                t && (l.src = t))
              : o();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      pe = {};
    class he {
      constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
          n[a] = arguments[a];
        if (
          (1 === n.length &&
          n[0].constructor &&
          "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
            ? (t = n[0])
            : ([e, t] = n),
          t || (t = {}),
          (t = I({}, t)),
          e && !t.el && (t.el = e),
          t.el && A(t.el).length > 1)
        ) {
          const e = [];
          return (
            A(t.el).each((s) => {
              const n = I({}, t, { el: s });
              e.push(new he(n));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = G()),
          (i.device = H({ userAgent: t.userAgent })),
          (i.browser = F()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          t.modules && Array.isArray(t.modules) && i.modules.push(...t.modules);
        const r = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: de(t, r),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const l = I({}, ce, r);
        return (
          (i.params = I({}, l, pe, t)),
          (i.originalParams = I({}, i.params)),
          (i.passedParams = I({}, t)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = A),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: e,
            classNames: [],
            slides: A(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: k(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          a = (s.maxTranslate() - n) * e + n;
        s.translateTo(a, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: n,
          slidesGrid: a,
          slidesSizesGrid: i,
          size: r,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = n[l].swiperSlideSize;
          for (let s = l + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (o += 1), t > r && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < n.length; e += 1) {
            (t ? a[e] + i[e] - a[l] < r : a[e] - a[l] < r) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            a[l] - a[e] < r && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let a;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((a =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              a || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = A(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = A(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children ? s.children(n()) : A(s).children(n());
        })();
        if (0 === a.length && t.params.createElements) {
          const e = y().createElement("div");
          (a = A(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              a.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: a,
            wrapperEl: a[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === a.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: n, $el: a, $wrapperEl: i, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              a.removeAttr("style"),
              i.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        I(pe, e);
      }
      static get extendedDefaults() {
        return pe;
      }
      static get defaults() {
        return ce;
      }
      static installModule(e) {
        he.prototype.__modules__ || (he.prototype.__modules__ = []);
        const t = he.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => he.installModule(e)), he)
          : (he.installModule(e), he);
      }
    }
    Object.keys(ue).forEach((e) => {
      Object.keys(ue[e]).forEach((t) => {
        he.prototype[t] = ue[e][t];
      });
    }),
      he.use([
        function (e) {
          let { swiper: t, on: s, emit: n } = e;
          const a = S();
          let i = null,
            r = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (n("beforeResize"), n("resize"));
            },
            o = () => {
              t && !t.destroyed && t.initialized && n("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== a.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((i = new ResizeObserver((e) => {
                  r = a.requestAnimationFrame(() => {
                    const { width: s, height: n } = t;
                    let a = s,
                      i = n;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: n, target: r } = e;
                      (r && r !== t.el) ||
                        ((a = n ? n.width : (s[0] || s).inlineSize),
                        (i = n ? n.height : (s[0] || s).blockSize));
                    }),
                      (a === s && i === n) || l();
                  });
                })),
                i.observe(t.el))
              : (a.addEventListener("resize", l),
                a.addEventListener("orientationchange", o));
          }),
            s("destroy", () => {
              r && a.cancelAnimationFrame(r),
                i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                a.removeEventListener("resize", l),
                a.removeEventListener("orientationchange", o);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: n, emit: a } = e;
          const i = [],
            r = S(),
            l = function (e, t) {
              void 0 === t && (t = {});
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void a("observerUpdate", e[0]);
                  const t = function () {
                    a("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.$el[0], { childList: t.params.observeSlideChildren }),
                  l(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const fe = he;
    function me(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function ge(e) {
      let { swiper: t, extendParams: s, on: n, emit: a } = e;
      const i = "swiper-pagination";
      let r;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
          paginationDisabledClass: `${i}-disabled`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: n } = t.params.pagination;
        e[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
      }
      function d() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let d;
        const u = t.params.loop
          ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > n - 1 - 2 * t.loopedSlides && (d -= n - 2 * t.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let a, o, u;
          if (
            (s.dynamicBullets &&
              ((r = n
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              i.css(
                t.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((l += d - (t.previousIndex - t.loopedSlides || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (a = Math.max(d - l, 0)),
              (o = a + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (u = (o + a) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            i.length > 1)
          )
            n.each((e) => {
              const t = A(e),
                n = t.index();
              n === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (n >= a &&
                    n <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  n === a && c(t, "prev"),
                  n === o && c(t, "next"));
            });
          else {
            const e = n.eq(d),
              i = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = n.eq(a),
                r = n.eq(o);
              for (let e = a; e <= o; e += 1)
                n.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (i >= n.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                  n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(r, "next");
              else c(e, "prev"), c(r, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(n.length, s.dynamicMainBullets + 4),
              i = (r * a - r) / 2 - u * r,
              l = e ? "right" : "left";
            n.css(t.isHorizontal() ? l : "top", `${i}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (i.find(me(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            i.find(me(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (d + 1) / u;
          let a = 1,
            r = 1;
          "horizontal" === e ? (a = n) : (r = n),
            i
              .find(me(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${r})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (i.html(s.renderCustom(t, d + 1, u)), a("paginationRender", i[0]))
          : a("paginationUpdate", i[0]),
          t.params.watchOverflow &&
            t.enabled &&
            i[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          n = t.pagination.$el;
        let i = "";
        if ("bullets" === e.type) {
          let a = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            a > s &&
            (a = s);
          for (let s = 0; s < a; s += 1)
            e.renderBullet
              ? (i += e.renderBullet.call(t, s, e.bulletClass))
              : (i += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          n.html(i), (t.pagination.bullets = n.find(me(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((i = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          n.html(i)),
          "progressbar" === e.type &&
            ((i = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            n.html(i)),
          "custom" !== e.type && a("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = (function (e, t, s, n) {
          const a = y();
          return (
            e.params.createElements &&
              Object.keys(n).forEach((i) => {
                if (!s[i] && !0 === s.auto) {
                  let r = e.$el.children(`.${n[i]}`)[0];
                  r ||
                    ((r = a.createElement("div")),
                    (r.className = n[i]),
                    e.$el.append(r)),
                    (s[i] = r),
                    (t[i] = r);
                }
              }),
            s
          );
        })(t, t.originalParams.pagination, t.params.pagination, {
          el: "swiper-pagination",
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let s = A(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => A(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (l = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", me(e.bulletClass), function (e) {
              e.preventDefault();
              let s = A(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function h() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", me(e.bulletClass));
      }
      n("init", () => {
        !1 === t.params.pagination.enabled ? f() : (p(), u(), d());
      }),
        n("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        n("snapIndexChange", () => {
          t.params.loop || d();
        }),
        n("slidesLengthChange", () => {
          t.params.loop && (u(), d());
        }),
        n("snapGridLengthChange", () => {
          t.params.loop || (u(), d());
        }),
        n("destroy", () => {
          h();
        }),
        n("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          d();
        }),
        n("click", (e, s) => {
          const n = s.target,
            { $el: i } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            i.length > 0 &&
            !A(n).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && n === t.navigation.nextEl) ||
                (t.navigation.prevEl && n === t.navigation.prevEl))
            )
              return;
            const e = i.hasClass(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"),
              i.toggleClass(t.params.pagination.hiddenClass);
          }
        });
      const f = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.addClass(
              t.params.pagination.paginationDisabledClass
            ),
          h();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.removeClass(
                t.params.pagination.paginationDisabledClass
              ),
            p(),
            u(),
            d();
        },
        disable: f,
        render: u,
        update: d,
        init: p,
        destroy: h,
      });
    }
    function ve(e) {
      let { swiper: t, extendParams: s, on: n, emit: a } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (t.lazy = {});
      let i = !1,
        r = !1;
      function l(e, s) {
        void 0 === s && (s = !0);
        const n = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          r = i.find(
            `.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`
          );
        !i.hasClass(n.elementClass) ||
          i.hasClass(n.loadedClass) ||
          i.hasClass(n.loadingClass) ||
          r.push(i[0]),
          0 !== r.length &&
            r.each((e) => {
              const r = A(e);
              r.addClass(n.loadingClass);
              const o = r.attr("data-background"),
                c = r.attr("data-src"),
                d = r.attr("data-srcset"),
                u = r.attr("data-sizes"),
                p = r.parent("picture");
              t.loadImage(r[0], c || o, d, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (o
                      ? (r.css("background-image", `url("${o}")`),
                        r.removeAttr("data-background"))
                      : (d &&
                          (r.attr("srcset", d), r.removeAttr("data-srcset")),
                        u && (r.attr("sizes", u), r.removeAttr("data-sizes")),
                        p.length &&
                          p.children("source").each((e) => {
                            const t = A(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        c && (r.attr("src", c), r.removeAttr("data-src"))),
                    r.addClass(n.loadedClass).removeClass(n.loadingClass),
                    i.find(`.${n.preloaderClass}`).remove(),
                    t.params.loop && s)
                  ) {
                    const e = i.attr("data-swiper-slide-index");
                    if (i.hasClass(t.params.slideDuplicateClass)) {
                      l(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      l(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  a("lazyImageReady", i[0], r[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                a("lazyImageLoad", i[0], r[0]);
            });
      }
      function o() {
        const { $wrapperEl: e, params: s, slides: n, activeIndex: a } = t,
          i = t.virtual && s.virtual.enabled,
          o = s.lazy;
        let c = s.slidesPerView;
        function d(t) {
          if (i) {
            if (
              e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (n[t]) return !0;
          return !1;
        }
        function u(e) {
          return i ? A(e).attr("data-swiper-slide-index") : A(e).index();
        }
        if (
          ("auto" === c && (c = 0), r || (r = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${s.slideVisibleClass}`).each((e) => {
            l(i ? A(e).attr("data-swiper-slide-index") : A(e).index());
          });
        else if (c > 1) for (let e = a; e < a + c; e += 1) d(e) && l(e);
        else l(a);
        if (o.loadPrevNext)
          if (c > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            const e = o.loadPrevNextAmount,
              t = Math.ceil(c),
              s = Math.min(a + t + Math.max(e, t), n.length),
              i = Math.max(a - Math.max(t, e), 0);
            for (let e = a + t; e < s; e += 1) d(e) && l(e);
            for (let e = i; e < a; e += 1) d(e) && l(e);
          } else {
            const t = e.children(`.${s.slideNextClass}`);
            t.length > 0 && l(u(t));
            const n = e.children(`.${s.slidePrevClass}`);
            n.length > 0 && l(u(n));
          }
      }
      function c() {
        const e = S();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement
            ? A(t.params.lazy.scrollingElement)
            : A(e),
          n = s[0] === e,
          a = n ? e.innerWidth : s[0].offsetWidth,
          r = n ? e.innerHeight : s[0].offsetHeight,
          l = t.$el.offset(),
          { rtlTranslate: d } = t;
        let u = !1;
        d && (l.left -= t.$el[0].scrollLeft);
        const p = [
          [l.left, l.top],
          [l.left + t.width, l.top],
          [l.left, l.top + t.height],
          [l.left + t.width, l.top + t.height],
        ];
        for (let e = 0; e < p.length; e += 1) {
          const t = p[e];
          if (t[0] >= 0 && t[0] <= a && t[1] >= 0 && t[1] <= r) {
            if (0 === t[0] && 0 === t[1]) continue;
            u = !0;
          }
        }
        const h = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        u
          ? (o(), s.off("scroll", c, h))
          : i || ((i = !0), s.on("scroll", c, h));
      }
      n("beforeInit", () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        n("init", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : o());
        }),
        n("scroll", () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            o();
        }),
        n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : o());
        }),
        n("transitionStart", () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !r)) &&
            (t.params.lazy.checkInView ? c() : o());
        }),
        n("transitionEnd", () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? c() : o());
        }),
        n("slideChange", () => {
          const {
            lazy: e,
            cssMode: s,
            watchSlidesProgress: n,
            touchReleaseOnEdges: a,
            resistanceRatio: i,
          } = t.params;
          e.enabled && (s || (n && (a || 0 === i))) && o();
        }),
        n("destroy", () => {
          t.$el &&
            t.$el
              .find(`.${t.params.lazy.loadingClass}`)
              .removeClass(t.params.lazy.loadingClass);
        }),
        Object.assign(t.lazy, { load: o, loadInSlide: l });
    }
    function be(e) {
      let t,
        { swiper: s, extendParams: n, on: a, emit: i } = e;
      function r() {
        const e = s.slides.eq(s.activeIndex);
        let n = s.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (n = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
          clearTimeout(t),
          (t = $(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  i("autoplay"))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((e = s.slideTo(
                      s.slides.length - 1,
                      s.params.speed,
                      !0,
                      !0
                    )),
                    i("autoplay"))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), i("autoplay"))
              : s.params.loop
              ? (s.loopFix(),
                (e = s.slideNext(s.params.speed, !0, !0)),
                i("autoplay"))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? o()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), i("autoplay"))
              : ((e = s.slideNext(s.params.speed, !0, !0)), i("autoplay")),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && r();
          }, n));
      }
      function l() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), i("autoplayStart"), r(), !0)
        );
      }
      function o() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          i("autoplayStop"),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, u);
                })
              : ((s.autoplay.paused = !1), r())));
      }
      function d() {
        const e = y();
        "hidden" === e.visibilityState && s.autoplay.running && c(),
          "visible" === e.visibilityState &&
            s.autoplay.paused &&
            (r(), (s.autoplay.paused = !1));
      }
      function u(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? r() : o());
      }
      function p() {
        s.params.autoplay.disableOnInteraction
          ? o()
          : (i("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function h() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), i("autoplayResume"), r());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        a("init", () => {
          if (s.params.autoplay.enabled) {
            l();
            y().addEventListener("visibilitychange", d),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on("mouseenter", p), s.$el.on("mouseleave", h));
          }
        }),
        a("beforeTransitionStart", (e, t, n) => {
          s.autoplay.running &&
            (n || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : o());
        }),
        a("sliderFirstMove", () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? o() : c());
        }),
        a("touchEnd", () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            r();
        }),
        a("destroy", () => {
          s.$el.off("mouseenter", p),
            s.$el.off("mouseleave", h),
            s.autoplay.running && o();
          y().removeEventListener("visibilitychange", d);
        }),
        Object.assign(s.autoplay, { pause: c, run: r, start: l, stop: o });
    }
    function ye(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function we(e) {
      let { swiper: t, extendParams: s, on: n } = e;
      s({ fadeEffect: { crossFade: !1, transformEl: null } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: n,
          setTranslate: a,
          setTransition: i,
          overwriteParams: r,
          perspective: l,
          recreateShadows: o,
          getEffectParams: c,
        } = e;
        let d;
        n("beforeInit", () => {
          if (s.params.effect !== t) return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l &&
              l() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = r ? r() : {};
          Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
          n("setTranslate", () => {
            s.params.effect === t && a();
          }),
          n("setTransition", (e, n) => {
            s.params.effect === t && i(n);
          }),
          n("transitionEnd", () => {
            if (s.params.effect === t && o) {
              if (!c || !c().slideShadows) return;
              s.slides.each((e) => {
                s.$(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .remove();
              }),
                o();
            }
          }),
          n("virtualUpdate", () => {
            s.params.effect === t &&
              (s.slides.length || (d = !0),
              requestAnimationFrame(() => {
                d && s.slides && s.slides.length && (a(), (d = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: t,
        on: n,
        setTranslate: () => {
          const { slides: e } = t,
            s = t.params.fadeEffect;
          for (let n = 0; n < e.length; n += 1) {
            const e = t.slides.eq(n);
            let a = -e[0].swiperSlideOffset;
            t.params.virtualTranslate || (a -= t.translate);
            let i = 0;
            t.isHorizontal() || ((i = a), (a = 0));
            const r = t.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(e[0].progress), 0)
              : 1 + Math.min(Math.max(e[0].progress, -1), 0);
            ye(s, e)
              .css({ opacity: r })
              .transform(`translate3d(${a}px, ${i}px, 0px)`);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.fadeEffect;
          (s ? t.slides.find(s) : t.slides).transition(e),
            (function (e) {
              let { swiper: t, duration: s, transformEl: n, allSlides: a } = e;
              const { slides: i, activeIndex: r, $wrapperEl: l } = t;
              if (t.params.virtualTranslate && 0 !== s) {
                let e,
                  s = !1;
                (e = a ? (n ? i.find(n) : i) : n ? i.eq(r).find(n) : i.eq(r)),
                  e.transitionEnd(() => {
                    if (s) return;
                    if (!t || t.destroyed) return;
                    (s = !0), (t.animating = !1);
                    const e = ["webkitTransitionEnd", "transitionend"];
                    for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
                  });
              }
            })({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    }
    function Se() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      Se(),
        document.querySelector(".slider-main__slider") &&
          new fe(".slider-main__slider", {
            modules: [we, ge, ve, be],
            effect: "fade",
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            preventClicks: !1,
            preventClicksPropagation: !1,
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: !1,
            speed: 1e3,
            loop: !0,
            preloadImages: !1,
            lazy: { loadPrevNext: !0 },
            pagination: { el: ".slider-main__control", clickable: !0 },
            navigation: {
              nextEl: ".about__more .more__item_next",
              prevEl: ".about__more .more__item_prev",
            },
            on: {
              init: function () {
                document
                  .querySelectorAll(
                    ".slider-main__control .swiper-pagination-bullet"
                  )
                  .forEach((e, t) => {
                    let s;
                    t < 10 && (s = 0), (e.innerHTML = `${s}${t + 1}`);
                  });
              },
            },
          }),
        document.querySelector(".gallery__slider") &&
          new fe(".gallery__slider", {
            modules: [ve, be],
            effect: "fade",
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: "auto",
            spaceBetween: 32,
            autoHeight: !1,
            speed: 2e3,
            loop: !0,
            preloadImages: !1,
            lazy: { loadPrevNext: !0 },
            breakpoints: {
              320: { spaceBetween: 10 },
              768: { slidesPerView: "auto", spaceBetween: 20 },
              1330: { spaceBetween: 30 },
            },
          });
    });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class Ce {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            d(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                n = { root: s[0], margin: s[1], threshold: s[2] },
                a = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    a = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(s) === n.margin &&
                    String(a) === n.threshold
                  )
                    return e;
                }),
                i = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(a, i);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          "prx" === e.threshold)
        ) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    }
    let Ee = !1;
    setTimeout(() => {
      if (Ee) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var Te = s(448);
    window.addEventListener("load", function (e) {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div class="main-bg"></div>'
      );
      Te("[data-datepicker]");
      if (document.querySelector(".video-block")) {
        const e = document.querySelector(".video-block");
        e.addEventListener("click", function (t) {
          e.classList.contains("_init")
            ? (e.querySelector("video").paused
                ? e.querySelector("video").play()
                : e.querySelector("video").pause(),
              e.classList.toggle("_active"))
            : (e.classList.add("_active"),
              e.classList.add("_init"),
              e.querySelector("video").play(),
              (e.querySelector("video").muted = !1));
        }),
          e.querySelector("video").addEventListener("ended", function (t) {
            e.classList.remove("_active");
          });
      }
    }),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      t.any() && document.documentElement.classList.add("touch"),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            r &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? l(e)
                  : o(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const n = location.hash.replace("#", "");
          n.startsWith("tab-") && (t = n.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", i),
                (function (e) {
                  const s = e.querySelectorAll("[data-tabs-titles]>*"),
                    n = e.querySelectorAll("[data-tabs-body]>*"),
                    a = e.dataset.tabsIndex,
                    i = t[0] == a;
                  if (i) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  n.length > 0 &&
                    n.forEach((e, n) => {
                      s[n].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        i && n == t[1] && s[n].classList.add("_tab-active"),
                        s[n].classList.contains("_tab-active")
                          ? e.classList.add("_acitve")
                          : e.classList.remove("_acitve");
                    });
                })(e);
            });
          let a = u(e, "tabs");
          a &&
            a.length &&
            a.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            const s = (e = e.item).querySelector("[data-tabs-titles]"),
              n = e.querySelectorAll("[data-tabs-title]"),
              a = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((i, r) => {
              t.matches
                ? (a.append(n[r]), a.append(i), e.classList.add("_tab-spoller"))
                : (s.append(n[r]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function i(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelectorAll("._slide").length
            ) {
              const e = i.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    s = e.querySelectorAll("[data-tabs-item]"),
                    i = e.dataset.tabsIndex,
                    r = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].classList.contains("_tab-active")
                        ? (r ? a(e, r) : e.classList.add("_acitve"),
                          e.closest(".popup") ||
                            (location.hash = `tab-${i}-${s}`))
                        : r
                        ? n(e, r)
                        : e.classList.remove("_acitve");
                    });
                })(i);
            }
            e.preventDefault();
          }
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              m.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && m.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                m.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? m.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                a = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                i = new FormData(t);
              t.classList.add("_sending");
              const r = await fetch(e, { method: a, body: i });
              if (r.ok) {
                await r.json();
                t.classList.remove("_sending"), n(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), n(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && p(e, !0, 1e3);
          }
        }
        function n(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            m.formClean(e),
            c(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (f.selectModule = new h({})),
      new Ce({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                n = s.dataset.goto ? s.dataset.goto : "",
                a = !!s.hasAttribute("data-goto-header"),
                i = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              p(n, a, i), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                n =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? n && n.classList.add("_navigator-active")
                : n && n.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        Ee = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          n = e.dataset.scroll ? e.dataset.scroll : 1;
        let a,
          i = 0;
        document.addEventListener("windowScroll", function (r) {
          const l = window.scrollY;
          clearTimeout(a),
            l >= n
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (l > i
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (a = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (i = l <= 0 ? 0 : l);
        });
      })();
  })();
})();
