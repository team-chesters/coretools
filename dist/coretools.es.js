const xe = "1.0.2";
function Ge(e) {
  let t = /* @__PURE__ */ new Set();
  for (const n of e)
    t.add(n);
  return Array.from(t);
}
function ae(e) {
  return Array.isArray(e);
}
function Ye(e, ...t) {
  let n = Array.from(t);
  for (let r of n)
    if (e === r)
      return !0;
  return !1;
}
function ie(e, t) {
  if (Array.isArray(t)) {
    for (let n of t)
      if (e == n)
        return !0;
  }
  return !1;
}
function ke(e, ...t) {
  let n = Array.from(t);
  for (let r of n)
    if (e == r)
      return !1;
  return !0;
}
function oe(e, t) {
  if (Array.isArray(t)) {
    for (let n of t)
      if (e == n)
        return !1;
  }
  return !0;
}
function B(e) {
  return Array.isArray(e) || typeof e == "string" ? e.length : 0;
}
function Ee(e, t) {
  return Array.isArray(e) && t >= 0 && B(e) > t;
}
const x = {
  GetUnique: Ge,
  isArray: ae,
  isIn: Ye,
  isInArray: ie,
  isNotIn: ke,
  isNotInArray: oe,
  isValidIndex: Ee
};
function We(e, ...t) {
  typeof e == "function" && e(...t);
}
function Ie(e) {
  return new Promise((t) => setTimeout(t, e));
}
const se = {
  ExecuteCallbackWithParams: We,
  Sleep: Ie
};
function u(e, ...t) {
  if (e == null)
    return !0;
  let n = e;
  if (t.length > 0) {
    if (!Object.prototype.hasOwnProperty.call(e, t[0]))
      return !0;
    n = e[t[0]];
  }
  if (Array.isArray(n)) {
    if (n.length == 0)
      return !0;
  } else
    switch (typeof n) {
      case "string":
        return !n || n.length === 0;
      case "boolean":
        return n == !1;
      case "number":
        return n == 0;
    }
  return !1;
}
function Fe(e, t) {
  return u(e) || u(t) ? !1 : e.toUpperCase() == t.toUpperCase();
}
const Ae = {
  isSameColor: Fe
};
function ue(e) {
  return e.toString(16).padStart(2, "0");
}
function p(e) {
  return typeof e == "number" ? e - e === 0 : typeof e == "string" && e.trim() !== "" ? Number.isFinite ? Number.isFinite(+e) : isFinite(+e) : !1;
}
function k(e) {
  return u(e) || !p(e) ? null : Math.sign(e) === -1;
}
function ve(e, t, n) {
  if (u(e))
    return "Empty Hue";
  if (u(t))
    return "Empty Saturation";
  if (u(n))
    return "Empty Lightness";
  e /= 360, t /= 100, n /= 100;
  let r, a, o;
  const s = (d, h, m) => (m < 0 && (m += 1), m > 1 && (m -= 1), m < 1 / 6 ? d + (h - d) * 6 * m : m < 1 / 2 ? h : m < 2 / 3 ? d + (h - d) * (2 / 3 - m) * 6 : d);
  if (t === 0)
    r = a = o = n;
  else {
    const d = n < 0.5 ? n * (1 + t) : n + t - n * t, h = 2 * n - d;
    r = s(h, d, e + 1 / 3), a = s(h, d, e), o = s(h, d, e - 1 / 3);
  }
  if (isNaN(r) || isNaN(a) || isNaN(o) || k(r) || k(a) || k(o))
    return "Invalid Parameter";
  const f = (d) => {
    const h = Math.round(d * 255).toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  return `#${f(r)}${f(a)}${f(o)}`;
}
const ce = {
  ConvertDecimalToHex: ue,
  ConvertHSLToHex: ve
};
function P(e, t = "00:00", n = "00") {
  e = e + "", t = t + "";
  let r;
  try {
    r = /* @__PURE__ */ new Date(
      e.replace(/(\d{4})-{0,1}(\d{2})-{0,1}(\d{2})/g, "$1-$2-$3") + " " + t.replace(/(\d{2}):{0,1}(\d{2})/g, "$1:$2") + ":" + n
    );
  } catch {
    r = /* @__PURE__ */ new Date("1980-01-01 00:00:00");
  }
  return r;
}
function Ce(e) {
  if (e == null || e == null || (e = "" + e, e.length != 6 && e.length != 8))
    return 0;
  if (e.length == 6) {
    let o = parseInt(e.substring(0, 2), 10), s = (/* @__PURE__ */ new Date()).getFullYear() % 100;
    o > s ? e = "19" + e : e = "20" + e;
  }
  const t = /* @__PURE__ */ new Date(), n = P(e, "12:00");
  let r = t.getFullYear() - n.getFullYear();
  const a = t.getMonth() - n.getMonth();
  return (a < 0 || a === 0 && t.getDate() < n.getDate()) && r--, r > 150 && (r = 0), Number.isNaN(r) ? 0 : r;
}
function M(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function y(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function O(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const fe = 6048e5, Re = 864e5;
let He = {};
function L() {
  return He;
}
function v(e, t) {
  var f, d, h, m;
  const n = L(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((m = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, a = y(e), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function H(e) {
  return v(e, { weekStartsOn: 1 });
}
function le(e) {
  const t = y(e), n = t.getFullYear(), r = O(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = H(r), o = O(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = H(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function j(e) {
  const t = y(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Z(e) {
  const t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Be(e, t) {
  const n = j(e), r = j(t), a = n.getTime() - Z(n), o = r.getTime() - Z(r);
  return Math.round((a - o) / Re);
}
function Le(e) {
  const t = le(e), n = O(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), H(n);
}
function de(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function _e(e) {
  if (!de(e) && typeof e != "number")
    return !1;
  const t = y(e);
  return !isNaN(Number(t));
}
function qe(e) {
  const t = y(e), n = O(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Ue = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ke = (e, t, n) => {
  let r;
  const a = Ue[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function q(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const $e = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Qe = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ve = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xe = {
  date: q({
    formats: $e,
    defaultWidth: "full"
  }),
  time: q({
    formats: Qe,
    defaultWidth: "full"
  }),
  dateTime: q({
    formats: Ve,
    defaultWidth: "full"
  })
}, Je = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, je = (e, t, n, r) => Je[e];
function F(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, f = n != null && n.width ? String(n.width) : s;
      a = e.formattingValues[f] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, f = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[f] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const Ze = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ze = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, et = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
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
    "December"
  ]
}, tt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, nt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, rt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, at = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, it = {
  ordinalNumber: at,
  era: F({
    values: Ze,
    defaultWidth: "wide"
  }),
  quarter: F({
    values: ze,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: F({
    values: et,
    defaultWidth: "wide"
  }),
  day: F({
    values: tt,
    defaultWidth: "wide"
  }),
  dayPeriod: F({
    values: nt,
    defaultWidth: "wide",
    formattingValues: rt,
    defaultFormattingWidth: "wide"
  })
};
function A(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const s = o[0], f = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(f) ? st(f, (b) => b.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      ot(f, (b) => b.test(s))
    );
    let h;
    h = e.valueCallback ? e.valueCallback(d) : d, h = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(h)
    ) : h;
    const m = t.slice(s.length);
    return { value: h, rest: m };
  };
}
function ot(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function st(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ut(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const f = t.slice(a.length);
    return { value: s, rest: f };
  };
}
const ct = /^(\d+)(th|st|nd|rd)?/i, ft = /\d+/i, lt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, dt = {
  any: [/^b/i, /^(a|c)/i]
}, ht = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, mt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Dt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, pt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Mt = {
  ordinalNumber: ut({
    matchPattern: ct,
    parsePattern: ft,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: A({
    matchPatterns: lt,
    defaultMatchWidth: "wide",
    parsePatterns: dt,
    defaultParseWidth: "any"
  }),
  quarter: A({
    matchPatterns: ht,
    defaultMatchWidth: "wide",
    parsePatterns: mt,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: A({
    matchPatterns: gt,
    defaultMatchWidth: "wide",
    parsePatterns: wt,
    defaultParseWidth: "any"
  }),
  day: A({
    matchPatterns: Dt,
    defaultMatchWidth: "wide",
    parsePatterns: yt,
    defaultParseWidth: "any"
  }),
  dayPeriod: A({
    matchPatterns: bt,
    defaultMatchWidth: "any",
    parsePatterns: pt,
    defaultParseWidth: "any"
  })
}, St = {
  code: "en-US",
  formatDistance: Ke,
  formatLong: Xe,
  formatRelative: je,
  localize: it,
  match: Mt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Nt(e) {
  const t = y(e);
  return Be(t, qe(t)) + 1;
}
function Tt(e) {
  const t = y(e), n = H(t).getTime() - Le(t).getTime();
  return Math.round(n / fe) + 1;
}
function he(e, t) {
  var m, b, W, I;
  const n = y(e), r = n.getFullYear(), a = L(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((b = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : b.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((I = (W = a.locale) == null ? void 0 : W.options) == null ? void 0 : I.firstWeekContainsDate) ?? 1, s = O(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const f = v(s, t), d = O(e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const h = v(d, t);
  return n.getTime() >= f.getTime() ? r + 1 : n.getTime() >= h.getTime() ? r : r - 1;
}
function Pt(e, t) {
  var f, d, h, m;
  const n = L(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((m = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, a = he(e, t), o = O(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), v(o, t);
}
function Ot(e, t) {
  const n = y(e), r = v(n, t).getTime() - Pt(n, t).getTime();
  return Math.round(r / fe) + 1;
}
function l(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const N = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return l(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : l(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return l(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return l(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return l(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return l(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return l(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.floor(
      r * Math.pow(10, n - 3)
    );
    return l(a, t.length);
  }
}, Y = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, xt = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return N.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = he(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = o % 100;
      return l(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : l(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = le(e);
    return l(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return l(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return l(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return l(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return N.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return l(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Ot(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : l(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Tt(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : l(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : N.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Nt(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : l(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return l(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return l(o, t.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return l(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Y.noon : r === 0 ? a = Y.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Y.evening : r >= 12 ? a = Y.afternoon : r >= 4 ? a = Y.morning : a = Y.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return N.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : N.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : l(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : l(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : N.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : N.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return N.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return ee(o);
      case "XXXX":
      case "XX":
        return T(o);
      case "XXXXX":
      case "XXX":
      default:
        return T(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "x":
        return ee(o);
      case "xxxx":
      case "xx":
        return T(o);
      case "xxxxx":
      case "xxx":
      default:
        return T(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + z(o, ":");
      case "OOOO":
      default:
        return "GMT" + T(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + z(o, ":");
      case "zzzz":
      default:
        return "GMT" + T(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n, r) {
    const a = r._originalDate || e, o = Math.floor(a.getTime() / 1e3);
    return l(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n, r) {
    const o = (r._originalDate || e).getTime();
    return l(o, t.length);
  }
};
function z(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + l(o, 2);
}
function ee(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + l(Math.abs(e) / 60, 2) : T(e, t);
}
function T(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = l(Math.floor(r / 60), 2), o = l(r % 60, 2);
  return n + a + t + o;
}
const te = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, me = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Gt = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return te(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", te(r, t)).replace("{{time}}", me(a, t));
}, Yt = {
  p: me,
  P: Gt
}, kt = ["D", "DD"], Et = ["YY", "YYYY"];
function Wt(e) {
  return kt.indexOf(e) !== -1;
}
function It(e) {
  return Et.indexOf(e) !== -1;
}
function ne(e, t, n) {
  if (e === "YYYY")
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${t}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
  if (e === "YY")
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${t}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
  if (e === "D")
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${t}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
  if (e === "DD")
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${t}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
}
const Ft = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, At = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vt = /^'([^]*?)'?$/, Ct = /''/g, Rt = /[a-zA-Z]/;
function Ht(e, t, n) {
  var m, b, W, I, Q, V, X, J;
  const r = L(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? St, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((b = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : b.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((I = (W = r.locale) == null ? void 0 : W.options) == null ? void 0 : I.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((V = (Q = n == null ? void 0 : n.locale) == null ? void 0 : Q.options) == null ? void 0 : V.weekStartsOn) ?? r.weekStartsOn ?? ((J = (X = r.locale) == null ? void 0 : X.options) == null ? void 0 : J.weekStartsOn) ?? 0, f = y(e);
  if (!_e(f))
    throw new RangeError("Invalid time value");
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a,
    _originalDate: f
  };
  return t.match(At).map(function(g) {
    const S = g[0];
    if (S === "p" || S === "P") {
      const C = Yt[S];
      return C(g, a.formatLong);
    }
    return g;
  }).join("").match(Ft).map(function(g) {
    if (g === "''")
      return "'";
    const S = g[0];
    if (S === "'")
      return Bt(g);
    const C = xt[S];
    if (C)
      return !(n != null && n.useAdditionalWeekYearTokens) && It(g) && ne(g, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Wt(g) && ne(g, t, String(e)), C(
        f,
        g,
        a.localize,
        d
      );
    if (S.match(Rt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return g;
  }).join("");
}
function Bt(e) {
  const t = e.match(vt);
  return t ? t[1].replace(Ct, "'") : e;
}
function Lt(e) {
  return M(e) ? Number.parseInt(Ht(e, "yyyyMMdd")) : -1;
}
function _t(e) {
  if (u(e))
    return "parameter is empty";
  let t = /* @__PURE__ */ new Date();
  return t.setDate((/* @__PURE__ */ new Date()).getDate() - e), t.setHours(0, 0, 0, 0), [new Date(t), /* @__PURE__ */ new Date()];
}
function qt(e) {
  if (u(e))
    return "parameter is empty";
  let t = /* @__PURE__ */ new Date();
  t.setDate((/* @__PURE__ */ new Date()).getDate() - e + 1), t.setHours(0, 0, 0, 0);
  let n = /* @__PURE__ */ new Date();
  return n.setHours(23, 59, 59, 0), {
    start: new Date(t),
    end: new Date(n)
  };
}
function Ut(e, t) {
  if (u(e) && u(t))
    return "All parameters are empty";
  if (u(e) || u(t))
    return "Some of range parameter are empty";
  let n = [], r = new Date(e);
  r.setHours(0, 0, 0, 0);
  let a = new Date(t);
  a.setHours(23, 59, 59, 0);
  for (let o = r; o <= a; o.setDate(o.getDate() + 1))
    n.push(new Date(o));
  return n;
}
function Kt(e, t = /* @__PURE__ */ new Date()) {
  if (u(e))
    return "Number of days value is empty";
  const n = new Date(t.getTime());
  return n.setDate(t.getDate() - e), n.setHours(0, 0, 0, 0), n;
}
const ge = 24 * 3600 * 1e3, we = 1e3 * 60 * 60 * 24, $t = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "/",
  "`": "&#x60;",
  "=": "&#x3D;"
}, R = {
  ASCII: "ascii",
  UNICODE: "unicode"
}, Qt = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
function Vt(e, t) {
  const n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.floor((r - n) / we);
}
function Xt(e) {
  if (u(e))
    return "Parameter is empty";
  let t = new Date(e * 1e3), n = new Date(
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    0,
    0,
    0,
    0
  ), r = /* @__PURE__ */ new Date(), a = new Date(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    0,
    0,
    0,
    0
  );
  return Number.parseInt(
    (n.getTime() - a.getTime()) / ge
  );
}
function Jt(e = /* @__PURE__ */ new Date()) {
  let t = new Date(e);
  return t.setHours(23, 59, 59, 0), t;
}
function jt(e = /* @__PURE__ */ new Date()) {
  let t = new Date(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Zt(e) {
  if (u(e))
    return "parameter is empty";
  const t = P(e), n = t.getDay(), r = t.getDate() + (6 - n);
  let a = new Date(t.setDate(r));
  return a.setHours(23, 59, 59, 0), a;
}
const zt = () => navigator.language || navigator.userLanguage, en = (e, t) => e.toLocaleDateString(
  t,
  {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
);
function tn(e) {
  if (u(e))
    return e;
  const t = zt();
  let n = P(e);
  return en(n, t);
}
function nn(e) {
  if (u(e))
    return "parameter is empty";
  let t = new Date(e), n = t.getDay(), r = t.getDate() - n, a = new Date(t.setDate(r));
  return a.setHours(0, 0, 0, 0), a;
}
function rn(e, t) {
  let n = (t.getFullYear() - e.getFullYear()) * 12;
  return n -= e.getMonth(), n += t.getMonth(), n <= 0 ? 0 : n;
}
function De(e) {
  let t = new Date(e.getFullYear(), e.getMonth(), 1), n = new Date(e.getFullYear(), e.getMonth() + 1, 0);
  return t.setHours(0, 0, 0, 0), n.setHours(23, 59, 59, 0), {
    start: t,
    end: n
  };
}
function an(e = /* @__PURE__ */ new Date()) {
  let t = new Date(e.getFullYear(), e.getMonth() + 1, 1);
  t.setHours(0, 0, 0, 0);
  let n = new Date(e.getFullYear(), e.getMonth() + 2, 0);
  return n.setHours(23, 59, 59, 0), {
    start: t,
    end: n
  };
}
function on(e, t, n) {
  if (!M(e))
    return /* @__PURE__ */ new Date();
  let r = new Date(e.getFullYear() + t, e.getMonth() + n + 1, 0), a = Math.min(e.getDate(), r.getDate());
  return new Date(e.getFullYear() + t, e.getMonth() + n, a, e.getHours(), e.getMinutes(), e.getSeconds());
}
function sn(e = /* @__PURE__ */ new Date()) {
  let t = new Date(e);
  t.setDate(0), t.setDate(1), t.setHours(0, 0, 0, 0);
  let n = new Date(e);
  return n.setDate(0), n.setHours(23, 59, 59, 0), {
    start: t,
    end: n
  };
}
function un(e) {
  if (u(e))
    return "parameter is empty";
  const t = P(e), n = t.getDay(), r = t.getDate() - n + (n === 0 ? -6 : 1);
  let a = new Date(t.setDate(r));
  return a.setHours(0, 0, 0, 0), a;
}
function cn() {
  return De(/* @__PURE__ */ new Date());
}
function fn(e = /* @__PURE__ */ new Date()) {
  const n = e.getTime() + we;
  return new Date(n);
}
function ln(e = /* @__PURE__ */ new Date()) {
  return new Date(e.getTime() - 864e5);
}
function K(e, t, ...n) {
  return e === null || e === void 0 ? !1 : n.length == 0 && Object.prototype.hasOwnProperty.call(e, t) ? e[t] != null : K(e[t], ...n);
}
function ye(e, ...t) {
  if (t.length == 0)
    return !1;
  for (const n of t)
    if (!K(e, n))
      return !1;
  return !0;
}
function U(e) {
  return ye(e, "start", "end") && M(e.start) && M(e.end);
}
function dn(e, t, n) {
  if (u(e) || u(t) || u(n))
    return !1;
  let r;
  if (M(e))
    r = e.getTime();
  else if (p(e) && e.length === 10)
    r = e * 1e3;
  else if (p(e) && e.length === 13)
    r = e;
  else
    return !1;
  return t.getTime() <= r && r <= n.getTime();
}
function hn(e, t) {
  return !M(e) || !M(t) ? !1 : Math.abs(e - t) < ge && e.getDay() === t.getDay();
}
function mn(e, t) {
  return U(e) && U(t) ? e.start.getTime() == t.start.getTime() && e.end.getTime() == t.end.getTime() : !1;
}
function gn(e, t = /* @__PURE__ */ new Date()) {
  if (!de(t))
    return null;
  const n = new Date(t);
  return n.setMonth(n.getMonth() - e), n;
}
function wn(e, t = /* @__PURE__ */ new Date()) {
  return t.setFullYear(t.getFullYear() - e), t;
}
function Dn(e) {
  e = e + "";
  let t = e.split(" ");
  return B(t) >= 2 ? P(t[0], t[1]) : P(t[0]);
}
function be(e) {
  if (!p(e) || k(e) || e == null || String(e).length === 0)
    return null;
  let t = Number.parseInt(e / 2), n = e % 2 == 0 ? 0 : 30;
  return (t > 9 ? t : "0" + t) + ":" + (n > 9 ? n : "0" + n);
}
function yn(e, t) {
  e = e + "";
  let n;
  try {
    n = /* @__PURE__ */ new Date(
      e.replace(/(\d{4})-{0,1}(\d{2})-{0,1}(\d{2})/g, "$1-$2-$3") + " " + be(t)
    );
  } catch {
    n = /* @__PURE__ */ new Date("1980-01-01 00:00");
  }
  return n;
}
const c = {
  GetAge: Ce,
  GetDateInt: Lt,
  GetDateRangeToNow: _t,
  GetDateRangeToNowStartEnd: qt,
  GetDatesBetween: Ut,
  GetDayAgo: Kt,
  GetDayDiffBetween: Vt,
  GetDayDiffNow: Xt,
  GetDayEnd: Jt,
  GetDayStart: jt,
  GetEndOfWeek: Zt,
  GetFormattedDate: tn,
  GetLastSunday: nn,
  GetMonthDiff: rn,
  GetMonthRange: De,
  GetNextMonth: an,
  GetNextYearMonth: on,
  GetPrevMonth: sn,
  GetStartOfWeek: un,
  GetThisMonthRange: cn,
  GetTomorrow: fn,
  GetYesterday: ln,
  isDate: M,
  isDateRangeSet: U,
  isInDateRange: dn,
  isSameDate: hn,
  isSameDateRange: mn,
  SubtractMonths: gn,
  SubtractYears: wn,
  ymdhhmmToDate: Dn,
  ymdSlotNoToDate: yn,
  ymdToDate: P
};
function bn(e) {
  return e += "", e.slice(
    (Math.max(0, e.lastIndexOf(".")) || 1 / 0) + 1
  );
}
function pn(e, t = "/") {
  const n = t || "/";
  return e = e.map((r, a) => (typeof r == "string" && (a && (r = r.replace(new RegExp("^" + n), "")), a !== e.length - 1 && (r = r.replace(new RegExp(n + "$"), ""))), r)), e.join(n);
}
const pe = {
  GetFileExtension: bn,
  MakePath: pn
};
function Mn(e, t = 2) {
  if (k(e))
    return "Invalid Bytes";
  if (e === 0)
    return "0 Bytes";
  const n = 1024, r = t < 0 ? 0 : t, a = Qt, o = Math.floor(Math.log(e) / Math.log(n));
  return parseFloat((e / Math.pow(n, o)).toFixed(r)) + " " + a[o];
}
function Sn(e) {
  return u(e) ? "Parameter is empty" : String(e).split(".").length === 1 ? Number.parseInt(e) : Number.parseFloat(e.toFixed(1));
}
function Nn(e, t) {
  return Math.abs(e - t) < Number.EPSILON;
}
function Tn(e) {
  if (u(e) || !p(e))
    return null;
  const t = Math.floor(Number(e));
  return Math.sign(t) === 1;
}
function Pn(e) {
  return typeof e == "object" || typeof e == "string" || Array.isArray(e) || e === "" || e === null || e === void 0 ? null : Math.sign(e) === 0 || Math.sign(e) === -0;
}
const G = {
  FormatBytes: Mn,
  GetDecimalPoint: Sn,
  isApproxEqual: Nn,
  isNumber: p,
  isNumberNegative: k,
  isNumberPositive: Tn,
  isZero: Pn
};
function On(e, t) {
  const n = {};
  for (const r of t)
    e[r] !== null && e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function xn(e, t, ...n) {
  return e === null || e === void 0 || !Object.prototype.hasOwnProperty.call(e, t) ? !1 : n.length == 0 ? e[t] != null : oe(e[t], n);
}
function Gn(e, t, ...n) {
  return e === null || e === void 0 || !Object.prototype.hasOwnProperty.call(e, t) ? !1 : n.length == 0 ? e[t] != null : ie(e[t], n);
}
function Me(e, t, ...n) {
  return e === null || e === void 0 ? !1 : n.length == 0 && Object.prototype.hasOwnProperty.call(e, t) ? e[t] == null ? !1 : !u(e[t]) : Me(e[t], ...n);
}
function Se(e, t, ...n) {
  const r = e != null;
  if (r && n.length === 0 && Object.prototype.hasOwnProperty.call(e, t)) {
    const a = e[t];
    return typeof a == "number" && a > 0;
  }
  return r && Se(e[t], ...n);
}
function Ne(e) {
  const t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Yn(e, t) {
  return Object.assign({}, e, t);
}
function kn(e, t, n) {
  e.hasOwnProperty(t) && (e[n] = e[t], delete e[t]);
}
const D = {
  FilterJsonWithoutEmptyKey: On,
  hasKey: K,
  hasKeyAll: ye,
  hasKeyButNotIn: xn,
  hasKeyIn: Gn,
  hasKeyNonEmpty: Me,
  hasKeyNumberPositive: Se,
  isEmpty: u,
  isObject: Ne,
  MergeJson: Yn,
  RenameObjectProperty: kn
};
function En() {
  return ("10000000-1000-4000-8000" + -1e11).replace(
    /[018]/g,
    (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
  );
}
function Wn(e = 20) {
  let t = Math.max(Math.floor(e), 1);
  const n = t % 2 === 0 ? t / 2 : (t + 1) / 2, r = new Uint8Array(n), a = [];
  if (window.crypto && window.crypto.getRandomValues)
    window.crypto.getRandomValues(r);
  else
    return "This browser does not support crypto API.";
  let o = 0;
  for (const s of r)
    u(s) ? o += 1 : a.push(s);
  if (o !== 0) {
    const s = new Uint8Array(o);
    for (let f = 0; f < o; f++)
      window.crypto.getRandomValues(s), u(s[f]) || a.push(s[f]);
  }
  return Array.from(a, ue).join("");
}
function In(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e;
}
const $ = {
  GenerateGUID: En,
  GenerateRandomBytes: Wn,
  GenerateRandomNumberInRange: In
};
function Te(e, t) {
  if (typeof e == "string") {
    let n = 0;
    for (let r = 0; r < e.length; r++)
      if (n += e.charCodeAt(r) > 128 ? 2 : 1, n > t)
        return e.substring(0, r);
    return e;
  }
}
function Pe(e) {
  let t = 0, n = B(e);
  for (let r = 0; r < n; r++)
    e.charCodeAt(r) > 127 && t++, t++;
  return t;
}
function Fn(e, t) {
  return typeof e == "string" ? Pe(e) > t ? Te(e, t) + "..." : e : "";
}
function An(e) {
  const t = $t;
  return String(e).replace(/[&<>"'`=]/g, function(n) {
    return t[n];
  });
}
function vn(e, t, n = "") {
  return Array(t).fill(e).join(n);
}
function Cn(e) {
  return u(e) ? !1 : /^[0-9a-zA-Z \!\@\#\$\%\^\&\*\(\)]+$/.test(e);
}
const Oe = function(e, t, n = R.ASCII) {
  if (u(e) || u(t))
    return !1;
  if (n === R.ASCII)
    return t.some((r) => e >= r.start && e <= r.end);
  if (n === R.UNICODE) {
    const r = e.charCodeAt(0);
    return t.some((a) => r >= a.start && r <= a.end);
  }
  return !1;
}, Rn = [
  { start: 44032, end: 55203 }
  // 한글 유니코드 범위
], Hn = function(e) {
  return Oe(e, Rn, R.UNICODE);
};
function Bn(e) {
  return e.map((n) => "#" + n.trim()).join(" ");
}
function Ln(e, t, n) {
  return n = n || "0", e = "" + e, e.length >= t ? e : new Array(t - e.length + 1).join(n) + e;
}
function _n(e, t) {
  let n = t || 2;
  return n <= 0 && (n = 2), (new Array(n).join("0") + e).slice(-n);
}
function qn(e) {
  if (u(e))
    return [];
  let t = e.split("#").slice(1);
  for (let n in t)
    t[n] = t[n].trim();
  return t;
}
const w = {
  Cut: Te,
  CutW: Fn,
  EscapeHTML: An,
  GetRepeatString: vn,
  isAlphaNumeric: Cn,
  isCharInRange: Oe,
  isKoreanChar: Hn,
  Len: B,
  LenByte: Pe,
  MergeTagString: Bn,
  pad: Ln,
  padZero: _n,
  SplitTagString: qn
};
function Un(e) {
  return e ? e.match(/(\d{2}):{0,1}(\d{2})/i) : null;
}
function Kn(e) {
  if (u(e))
    return 0;
  const t = Un(e);
  return Array.isArray(t) ? Number.parseInt(t[1]) * 60 + Number.parseInt(t[2]) : 0;
}
function $n(e) {
  if (e == null)
    return -1;
  let t = e.match(/(\d{2}):{0,1}(\d{2})/i);
  if (t == null)
    return -1;
  let n = Number.parseInt(t[1]) * 4;
  return n += Number.parseInt(Number.parseInt(t[2]) / 15) % 4, n;
}
function Qn(e) {
  if (e == null)
    return -1;
  let t = e.match(/(\d{2}):{0,1}(\d{2})/i);
  if (t == null)
    return -1;
  let n = Number.parseInt(t[1]) * 2;
  return Number.parseInt(t[2]) != 0 && n++, n;
}
function Vn(e, t) {
  if (e == null)
    return -1;
  let n = e.match(/(\d{2}):{0,1}(\d{2})/i);
  if (n == null)
    return -1;
  let r = Number.parseInt(60 / t), a = Number.parseInt(n[1]) * r;
  return a += Number.parseInt(Number.parseInt(n[2]) / t), a;
}
function Xn(e) {
  if (u(e))
    return 0;
  let t = e.match(/(\d{2}):{0,1}(\d{2})/i);
  return t == null ? 0 : {
    hh: Number.parseInt(t[1]),
    mm: Number.parseInt(t[2])
  };
}
const E = {
  hhmm2min: Kn,
  hhmm2slotNo15min: $n,
  hhmm2slotNo30min: Qn,
  hhmm2slotNoByDuration: Vn,
  hhmmSplit: Xn,
  slotNo2hhmm: be
};
function Jn(e) {
  if (u(e) || !p(e))
    return !1;
  if (String(e).length !== 13)
    return e;
  const t = new Date(e), n = t.getFullYear(), r = t.getMonth(), a = t.getDate();
  return new Date(n, r, a, 0, 0, 0, 0);
}
function jn(e) {
  if (u(e) || !p(e))
    return !1;
  if (String(e).length !== 10)
    return e;
  const t = e * 1e3, n = new Date(t), r = n.getFullYear(), a = n.getMonth(), o = n.getDate();
  return new Date(r, a, o, 0, 0, 0, 0);
}
function Zn(e) {
  return u(e) ? 0 : M(e) ? Number.parseInt(e.getTime() / 1e3) : 0;
}
function zn(e) {
  if (!p(e))
    return !1;
  const t = new Date(e * 1e3);
  return !Number.isNaN(t.getTime()) && t.getTime() === e * 1e3;
}
const _ = {
  GetDateFromMs: Jn,
  GetDateFromTs: jn,
  GetUnix: Zn,
  isTimestamp: zn
};
function er(e) {
  return typeof e == "function";
}
const tr = {
  isFunction: er
};
function nr() {
}
class re {
  constructor(t) {
    this.__wrapped__ = t, this.__actions__ = [];
  }
  value() {
    return this.__wrapped__;
  }
}
function i(e) {
  return Ne(e) && !ae(e) && e instanceof re ? e : new re(e);
}
i.prototype = nr.prototype;
i.prototype.constructor = i;
i.GetUnique = x.GetUnique;
i.isArray = x.isArray;
i.isIn = x.isIn;
i.isInArray = x.isInArray;
i.isNotIn = x.isNotIn;
i.isNotInArray = x.isNotInArray;
i.isValidIndex = x.isValidIndex;
i.ExecuteCallbackWithParams = se.ExecuteCallbackWithParams;
i.Sleep = se.Sleep;
i.isSameColor = Ae.isSameColor;
i.ConvertDecimalToHex = ce.ConvertDecimalToHex;
i.ConvertHSLToHex = ce.ConvertHSLToHex;
i.GetAge = c.GetAge;
i.GetDateInt = c.GetDateInt;
i.GetDateRangeToNow = c.GetDateRangeToNow;
i.GetDateRangeToNowStartEnd = c.GetDateRangeToNowStartEnd;
i.GetDatesBetween = c.GetDatesBetween;
i.GetDayAgo = c.GetDayAgo;
i.GetDayDiffBetween = c.GetDayDiffBetween;
i.GetDayDiffNow = c.GetDayDiffNow;
i.GetDayEnd = c.GetDayEnd;
i.GetDayStart = c.GetDayStart;
i.GetEndOfWeek = c.GetEndOfWeek;
i.GetFormattedDate = c.GetFormattedDate;
i.GetLastSunday = c.GetLastSunday;
i.GetMonthDiff = c.GetMonthDiff;
i.GetMonthRange = c.GetMonthRange;
i.GetNextMonth = c.GetNextMonth;
i.GetNextYearMonth = c.GetNextYearMonth;
i.GetPrevMonth = c.GetPrevMonth;
i.GetStartOfWeek = c.GetStartOfWeek;
i.GetThisMonthRange = c.GetThisMonthRange;
i.GetTomorrow = c.GetTomorrow;
i.GetYesterday = c.GetYesterday;
i.isDate = c.isDate;
i.isDateRangeSet = c.isDateRangeSet;
i.isInDateRange = c.isInDateRange;
i.isSameDate = c.isSameDate;
i.isSameDateRange = c.isSameDateRange;
i.SubtractMonths = c.SubtractMonths;
i.SubtractYears = c.SubtractYears;
i.ymdhhmmToDate = c.ymdhhmmToDate;
i.ymdSlotNoToDate = c.ymdSlotNoToDate;
i.ymdToDate = c.ymdToDate;
i.GetFileExtension = pe.GetFileExtension;
i.MakePath = pe.MakePath;
i.FormatBytes = G.FormatBytes;
i.GetDecimalPoint = G.GetDecimalPoint;
i.isApproxEqual = G.isApproxEqual;
i.isNumber = G.isNumber;
i.isNumberNegative = G.isNumberNegative;
i.isNumberPositive = G.isNumberPositive;
i.isZero = G.isZero;
i.FilterJsonWithoutEmptyKey = D.FilterJsonWithoutEmptyKey;
i.hasKey = D.hasKey;
i.hasKeyAll = D.hasKeyAll;
i.hasKeyButNotIn = D.hasKeyButNotIn;
i.hasKeyIn = D.hasKeyIn;
i.hasKeyNonEmpty = D.hasKeyNonEmpty;
i.hasKeyNumberPositive = D.hasKeyNumberPositive;
i.isEmpty = D.isEmpty;
i.isObject = D.isObject;
i.MergeJson = D.MergeJson;
i.RenameObjectProperty = D.RenameObjectProperty;
i.GenerateGUID = $.GenerateGUID;
i.GenerateRandomBytes = $.GenerateRandomBytes;
i.GenerateRandomNumberInRange = $.GenerateRandomNumberInRange;
i.Cut = w.Cut;
i.CutW = w.CutW;
i.EscapeHTML = w.EscapeHTML;
i.GetRepeatString = w.GetRepeatString;
i.isAlphaNumeric = w.isAlphaNumeric;
i.isCharInRange = w.isCharInRange;
i.isKoreanChar = w.isKoreanChar;
i.Len = w.Len;
i.LenByte = w.LenByte;
i.MergeTagString = w.MergeTagString;
i.pad = w.pad;
i.padZero = w.padZero;
i.SplitTagString = w.SplitTagString;
i.hhmm2min = E.hhmm2min;
i.hhmm2slotNo15min = E.hhmm2slotNo15min;
i.hhmm2slotNo30min = E.hhmm2slotNo30min;
i.hhmm2slotNoByDuration = E.hhmm2slotNoByDuration;
i.hhmmSplit = E.hhmmSplit;
i.slotNo2hhmm = E.slotNo2hhmm;
i.GetDateFromMs = _.GetDateFromMs;
i.GetDateFromTs = _.GetDateFromTs;
i.GetUnix = _.GetUnix;
i.isTimestamp = _.isTimestamp;
i.isFunction = tr.isFunction;
i.version = xe;
export {
  i as default
};
