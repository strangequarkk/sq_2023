function mg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var gg =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function vl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Of = { exports: {} },
  Sl = {},
  Pf = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ti = Symbol.for("react.element"),
  yg = Symbol.for("react.portal"),
  vg = Symbol.for("react.fragment"),
  Sg = Symbol.for("react.strict_mode"),
  wg = Symbol.for("react.profiler"),
  Eg = Symbol.for("react.provider"),
  kg = Symbol.for("react.context"),
  _g = Symbol.for("react.forward_ref"),
  xg = Symbol.for("react.suspense"),
  bg = Symbol.for("react.memo"),
  Cg = Symbol.for("react.lazy"),
  Nc = Symbol.iterator;
function Tg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nc && e[Nc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rf = Object.assign,
  Lf = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || Nf);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Af() {}
Af.prototype = xr.prototype;
function tu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || Nf);
}
var nu = (tu.prototype = new Af());
nu.constructor = tu;
Rf(nu, xr.prototype);
nu.isPureReactComponent = !0;
var Rc = Array.isArray,
  Mf = Object.prototype.hasOwnProperty,
  ru = { current: null },
  Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Mf.call(t, r) && !Df.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Ti,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: ru.current,
  };
}
function Og(e, t) {
  return {
    $$typeof: Ti,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function iu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ti;
}
function Pg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lc = /\/+/g;
function ts(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pg("" + e.key)
    : t.toString(36);
}
function Eo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ti:
          case yg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + ts(l, 0) : r),
      Rc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Lc, "$&/") + "/"),
          Eo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (iu(i) &&
            (i = Og(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Lc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Rc(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + ts(o, s);
      l += Eo(o, t, n, a, i);
    }
  else if (((a = Tg(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + ts(o, s++)), (l += Eo(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Eo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ng(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var $e = { current: null },
  ko = { transition: null },
  Rg = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: ko,
    ReactCurrentOwner: ru,
  };
Q.Children = {
  map: Bi,
  forEach: function (e, t, n) {
    Bi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!iu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = xr;
Q.Fragment = vg;
Q.Profiler = wg;
Q.PureComponent = tu;
Q.StrictMode = Sg;
Q.Suspense = xg;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rg;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Rf({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = ru.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Mf.call(t, a) &&
        !Df.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ti, type: e.type, key: i, ref: o, props: r, _owner: l };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: kg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Eg, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = jf;
Q.createFactory = function (e) {
  var t = jf.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: _g, render: e };
};
Q.isValidElement = iu;
Q.lazy = function (e) {
  return { $$typeof: Cg, _payload: { _status: -1, _result: e }, _init: Ng };
};
Q.memo = function (e, t) {
  return { $$typeof: bg, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = ko.transition;
  ko.transition = {};
  try {
    e();
  } finally {
    ko.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return $e.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
Q.useId = function () {
  return $e.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return $e.current.useRef(e);
};
Q.useState = function (e) {
  return $e.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return $e.current.useTransition();
};
Q.version = "18.2.0";
Pf.exports = Q;
var _ = Pf.exports;
const H = vl(_),
  Lg = mg({ __proto__: null, default: H }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ag = _,
  Mg = Symbol.for("react.element"),
  Dg = Symbol.for("react.fragment"),
  jg = Object.prototype.hasOwnProperty,
  Ig = Ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fg = { key: !0, ref: !0, __self: !0, __source: !0 };
function If(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) jg.call(t, r) && !Fg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Mg,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ig.current,
  };
}
Sl.Fragment = Dg;
Sl.jsx = If;
Sl.jsxs = If;
Of.exports = Sl;
var E = Of.exports,
  Ws = {},
  Ff = { exports: {} },
  at = {},
  zf = { exports: {} },
  Uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, R) {
    var $ = L.length;
    L.push(R);
    e: for (; 0 < $; ) {
      var B = ($ - 1) >>> 1,
        ie = L[B];
      if (0 < i(ie, R)) (L[B] = R), (L[$] = ie), ($ = B);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var R = L[0],
      $ = L.pop();
    if ($ !== R) {
      L[0] = $;
      e: for (var B = 0, ie = L.length, G = ie >>> 1; B < G; ) {
        var Ce = 2 * (B + 1) - 1,
          vt = L[Ce],
          Ot = Ce + 1,
          Qt = L[Ot];
        if (0 > i(vt, $))
          Ot < ie && 0 > i(Qt, vt)
            ? ((L[B] = Qt), (L[Ot] = $), (B = Ot))
            : ((L[B] = vt), (L[Ce] = $), (B = Ce));
        else if (Ot < ie && 0 > i(Qt, $)) (L[B] = Qt), (L[Ot] = $), (B = Ot);
        else break e;
      }
    }
    return R;
  }
  function i(L, R) {
    var $ = L.sortIndex - R.sortIndex;
    return $ !== 0 ? $ : L.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    w = !1,
    y = !1,
    g = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= L)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function k(L) {
    if (((g = !1), m(L), !y))
      if (n(a) !== null) (y = !0), ne(C);
      else {
        var R = n(u);
        R !== null && re(k, R.startTime - L);
      }
  }
  function C(L, R) {
    (y = !1), g && ((g = !1), h(T), (T = -1)), (w = !0);
    var $ = f;
    try {
      for (
        m(R), c = n(a);
        c !== null && (!(c.expirationTime > R) || (L && !D()));

      ) {
        var B = c.callback;
        if (typeof B == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var ie = B(c.expirationTime <= R);
          (R = e.unstable_now()),
            typeof ie == "function" ? (c.callback = ie) : c === n(a) && r(a),
            m(R);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var G = !0;
      else {
        var Ce = n(u);
        Ce !== null && re(k, Ce.startTime - R), (G = !1);
      }
      return G;
    } finally {
      (c = null), (f = $), (w = !1);
    }
  }
  var A = !1,
    M = null,
    T = -1,
    V = 5,
    j = -1;
  function D() {
    return !(e.unstable_now() - j < V);
  }
  function W() {
    if (M !== null) {
      var L = e.unstable_now();
      j = L;
      var R = !0;
      try {
        R = M(!0, L);
      } finally {
        R ? q() : ((A = !1), (M = null));
      }
    } else A = !1;
  }
  var q;
  if (typeof p == "function")
    q = function () {
      p(W);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      ke = N.port2;
    (N.port1.onmessage = W),
      (q = function () {
        ke.postMessage(null);
      });
  } else
    q = function () {
      b(W, 0);
    };
  function ne(L) {
    (M = L), A || ((A = !0), q());
  }
  function re(L, R) {
    T = b(function () {
      L(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), ne(C));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var $ = f;
      f = R;
      try {
        return L();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, R) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = f;
      f = L;
      try {
        return R();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, R, $) {
      var B = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? B + $ : B))
          : ($ = B),
        L)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = $ + ie),
        (L = {
          id: d++,
          callback: R,
          priorityLevel: L,
          startTime: $,
          expirationTime: ie,
          sortIndex: -1,
        }),
        $ > B
          ? ((L.sortIndex = $),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (g ? (h(T), (T = -1)) : (g = !0), re(k, $ - B)))
          : ((L.sortIndex = ie), t(a, L), y || w || ((y = !0), ne(C))),
        L
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (L) {
      var R = f;
      return function () {
        var $ = f;
        f = R;
        try {
          return L.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Uf);
zf.exports = Uf;
var zg = zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bf = _,
  st = zg;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wf = new Set(),
  oi = {};
function In(e, t) {
  gr(e, t), gr(e + "Capture", t);
}
function gr(e, t) {
  for (oi[e] = t, e = 0; e < t.length; e++) Wf.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hs = Object.prototype.hasOwnProperty,
  Ug =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ac = {},
  Mc = {};
function Bg(e) {
  return Hs.call(Mc, e)
    ? !0
    : Hs.call(Ac, e)
    ? !1
    : Ug.test(e)
    ? (Mc[e] = !0)
    : ((Ac[e] = !0), !1);
}
function Wg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hg(e, t, n, r) {
  if (t === null || typeof t > "u" || Wg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ve(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ou = /[\-:]([a-z])/g;
function lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, lu);
    Re[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, lu);
    Re[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ou, lu);
  Re[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function su(e, t, n, r) {
  var i = Re.hasOwnProperty(t) ? Re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hg(t, n, i, r) && (n = null),
    r || i === null
      ? Bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wi = Symbol.for("react.element"),
  Qn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  au = Symbol.for("react.strict_mode"),
  $s = Symbol.for("react.profiler"),
  Hf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  uu = Symbol.for("react.forward_ref"),
  Vs = Symbol.for("react.suspense"),
  qs = Symbol.for("react.suspense_list"),
  cu = Symbol.for("react.memo"),
  Jt = Symbol.for("react.lazy"),
  Vf = Symbol.for("react.offscreen"),
  Dc = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dc && e[Dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  ns;
function Vr(e) {
  if (ns === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ns = (t && t[1]) || "";
    }
  return (
    `
` +
    ns +
    e
  );
}
var rs = !1;
function is(e, t) {
  if (!e || rs) return "";
  rs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (rs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function $g(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = is(e.type, !1)), e;
    case 11:
      return (e = is(e.type.render, !1)), e;
    case 1:
      return (e = is(e.type, !0)), e;
    default:
      return "";
  }
}
function Ks(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Qn:
      return "Portal";
    case $s:
      return "Profiler";
    case au:
      return "StrictMode";
    case Vs:
      return "Suspense";
    case qs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $f:
        return (e.displayName || "Context") + ".Consumer";
      case Hf:
        return (e._context.displayName || "Context") + ".Provider";
      case uu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case cu:
        return (
          (t = e.displayName || null), t !== null ? t : Ks(e.type) || "Memo"
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return Ks(e(t));
        } catch {}
    }
  return null;
}
function Vg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ks(t);
    case 8:
      return t === au ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qg(e) {
  var t = qf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hi(e) {
  e._valueTracker || (e._valueTracker = qg(e));
}
function Kf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Uo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ys(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yf(e, t) {
  (t = t.checked), t != null && su(e, "checked", t, !1);
}
function Gs(e, t) {
  Yf(e, t);
  var n = gn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Qs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Qs(e, t.type, gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ic(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || Uo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qr = Array.isArray;
function ur(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (qr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gn(n) };
}
function Gf(e, t) {
  var n = gn(t.value),
    r = gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var $i,
  Xf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        $i = $i || document.createElement("div"),
          $i.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $i.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function li(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function (e) {
  Kg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]);
  });
});
function Zf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Jf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Zf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Yg = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Js(e, t) {
  if (t) {
    if (Yg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function ea(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ta = null;
function du(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var na = null,
  cr = null,
  dr = null;
function Uc(e) {
  if ((e = Ni(e))) {
    if (typeof na != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = xl(t)), na(e.stateNode, e.type, t));
  }
}
function ep(e) {
  cr ? (dr ? dr.push(e) : (dr = [e])) : (cr = e);
}
function tp() {
  if (cr) {
    var e = cr,
      t = dr;
    if (((dr = cr = null), Uc(e), t)) for (e = 0; e < t.length; e++) Uc(t[e]);
  }
}
function np(e, t) {
  return e(t);
}
function rp() {}
var os = !1;
function ip(e, t, n) {
  if (os) return e(t, n);
  os = !0;
  try {
    return np(e, t, n);
  } finally {
    (os = !1), (cr !== null || dr !== null) && (rp(), tp());
  }
}
function si(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var ra = !1;
if (Vt)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", {
      get: function () {
        ra = !0;
      },
    }),
      window.addEventListener("test", Ar, Ar),
      window.removeEventListener("test", Ar, Ar);
  } catch {
    ra = !1;
  }
function Gg(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Qr = !1,
  Bo = null,
  Wo = !1,
  ia = null,
  Qg = {
    onError: function (e) {
      (Qr = !0), (Bo = e);
    },
  };
function Xg(e, t, n, r, i, o, l, s, a) {
  (Qr = !1), (Bo = null), Gg.apply(Qg, arguments);
}
function Zg(e, t, n, r, i, o, l, s, a) {
  if ((Xg.apply(this, arguments), Qr)) {
    if (Qr) {
      var u = Bo;
      (Qr = !1), (Bo = null);
    } else throw Error(O(198));
    Wo || ((Wo = !0), (ia = u));
  }
}
function Fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function op(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bc(e) {
  if (Fn(e) !== e) throw Error(O(188));
}
function Jg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Bc(i), e;
        if (o === r) return Bc(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function lp(e) {
  return (e = Jg(e)), e !== null ? sp(e) : null;
}
function sp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ap = st.unstable_scheduleCallback,
  Wc = st.unstable_cancelCallback,
  ey = st.unstable_shouldYield,
  ty = st.unstable_requestPaint,
  ye = st.unstable_now,
  ny = st.unstable_getCurrentPriorityLevel,
  fu = st.unstable_ImmediatePriority,
  up = st.unstable_UserBlockingPriority,
  Ho = st.unstable_NormalPriority,
  ry = st.unstable_LowPriority,
  cp = st.unstable_IdlePriority,
  wl = null,
  Mt = null;
function iy(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : sy,
  oy = Math.log,
  ly = Math.LN2;
function sy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((oy(e) / ly) | 0)) | 0;
}
var Vi = 64,
  qi = 4194304;
function Kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $o(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = Kr(s)) : ((o &= l), o !== 0 && (r = Kr(o)));
  } else (l = n & ~i), l !== 0 ? (r = Kr(l)) : o !== 0 && (r = Kr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - _t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ay(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - _t(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = ay(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dp() {
  var e = Vi;
  return (Vi <<= 1), !(Vi & 4194240) && (Vi = 64), e;
}
function ls(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Oi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - _t(t)),
    (e[t] = n);
}
function cy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - _t(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function pu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var te = 0;
function fp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pp,
  hu,
  hp,
  mp,
  gp,
  la = !1,
  Ki = [],
  sn = null,
  an = null,
  un = null,
  ai = new Map(),
  ui = new Map(),
  tn = [],
  dy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      ai.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ui.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ni(t)), t !== null && hu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function fy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (sn = Mr(sn, e, t, n, r, i)), !0;
    case "dragenter":
      return (an = Mr(an, e, t, n, r, i)), !0;
    case "mouseover":
      return (un = Mr(un, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ai.set(o, Mr(ai.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ui.set(o, Mr(ui.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function yp(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = op(n)), t !== null)) {
          (e.blockedOn = t),
            gp(e.priority, function () {
              hp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ta = r), n.target.dispatchEvent(r), (ta = null);
    } else return (t = Ni(n)), t !== null && hu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $c(e, t, n) {
  _o(e) && n.delete(t);
}
function py() {
  (la = !1),
    sn !== null && _o(sn) && (sn = null),
    an !== null && _o(an) && (an = null),
    un !== null && _o(un) && (un = null),
    ai.forEach($c),
    ui.forEach($c);
}
function Dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    la ||
      ((la = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, py)));
}
function ci(e) {
  function t(i) {
    return Dr(i, e);
  }
  if (0 < Ki.length) {
    Dr(Ki[0], e);
    for (var n = 1; n < Ki.length; n++) {
      var r = Ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && Dr(sn, e),
      an !== null && Dr(an, e),
      un !== null && Dr(un, e),
      ai.forEach(t),
      ui.forEach(t),
      n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
    yp(n), n.blockedOn === null && tn.shift();
}
var fr = Gt.ReactCurrentBatchConfig,
  Vo = !0;
function hy(e, t, n, r) {
  var i = te,
    o = fr.transition;
  fr.transition = null;
  try {
    (te = 1), mu(e, t, n, r);
  } finally {
    (te = i), (fr.transition = o);
  }
}
function my(e, t, n, r) {
  var i = te,
    o = fr.transition;
  fr.transition = null;
  try {
    (te = 4), mu(e, t, n, r);
  } finally {
    (te = i), (fr.transition = o);
  }
}
function mu(e, t, n, r) {
  if (Vo) {
    var i = sa(e, t, n, r);
    if (i === null) gs(e, t, r, qo, n), Hc(e, r);
    else if (fy(i, e, t, n, r)) r.stopPropagation();
    else if ((Hc(e, r), t & 4 && -1 < dy.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ni(i);
        if (
          (o !== null && pp(o),
          (o = sa(e, t, n, r)),
          o === null && gs(e, t, r, qo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else gs(e, t, r, null, n);
  }
}
var qo = null;
function sa(e, t, n, r) {
  if (((qo = null), (e = du(r)), (e = Tn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = op(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qo = e), null;
}
function vp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ny()) {
        case fu:
          return 1;
        case up:
          return 4;
        case Ho:
        case ry:
          return 16;
        case cp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null,
  gu = null,
  xo = null;
function Sp() {
  if (xo) return xo;
  var e,
    t = gu,
    n = t.length,
    r,
    i = "value" in rn ? rn.value : rn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (xo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function bo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yi() {
  return !0;
}
function Vc() {
  return !1;
}
function ut(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Yi
        : Vc),
      (this.isPropagationStopped = Vc),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yi));
      },
      persist: function () {},
      isPersistent: Yi,
    }),
    t
  );
}
var br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yu = ut(br),
  Pi = he({}, br, { view: 0, detail: 0 }),
  gy = ut(Pi),
  ss,
  as,
  jr,
  El = he({}, Pi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== jr &&
            (jr && e.type === "mousemove"
              ? ((ss = e.screenX - jr.screenX), (as = e.screenY - jr.screenY))
              : (as = ss = 0),
            (jr = e)),
          ss);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : as;
    },
  }),
  qc = ut(El),
  yy = he({}, El, { dataTransfer: 0 }),
  vy = ut(yy),
  Sy = he({}, Pi, { relatedTarget: 0 }),
  us = ut(Sy),
  wy = he({}, br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = ut(wy),
  ky = he({}, br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  _y = ut(ky),
  xy = he({}, br, { data: 0 }),
  Kc = ut(xy),
  by = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Cy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ty = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Oy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ty[e]) ? !!t[e] : !1;
}
function vu() {
  return Oy;
}
var Py = he({}, Pi, {
    key: function (e) {
      if (e.key) {
        var t = by[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = bo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Cy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vu,
    charCode: function (e) {
      return e.type === "keypress" ? bo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? bo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ny = ut(Py),
  Ry = he({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yc = ut(Ry),
  Ly = he({}, Pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vu,
  }),
  Ay = ut(Ly),
  My = he({}, br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dy = ut(My),
  jy = he({}, El, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Iy = ut(jy),
  Fy = [9, 13, 27, 32],
  Su = Vt && "CompositionEvent" in window,
  Xr = null;
Vt && "documentMode" in document && (Xr = document.documentMode);
var zy = Vt && "TextEvent" in window && !Xr,
  wp = Vt && (!Su || (Xr && 8 < Xr && 11 >= Xr)),
  Gc = String.fromCharCode(32),
  Qc = !1;
function Ep(e, t) {
  switch (e) {
    case "keyup":
      return Fy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zn = !1;
function Uy(e, t) {
  switch (e) {
    case "compositionend":
      return kp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qc = !0), Gc);
    case "textInput":
      return (e = t.data), e === Gc && Qc ? null : e;
    default:
      return null;
  }
}
function By(e, t) {
  if (Zn)
    return e === "compositionend" || (!Su && Ep(e, t))
      ? ((e = Sp()), (xo = gu = rn = null), (Zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return wp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wy[e.type] : t === "textarea";
}
function _p(e, t, n, r) {
  ep(r),
    (t = Ko(t, "onChange")),
    0 < t.length &&
      ((n = new yu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zr = null,
  di = null;
function Hy(e) {
  Mp(e, 0);
}
function kl(e) {
  var t = tr(e);
  if (Kf(t)) return e;
}
function $y(e, t) {
  if (e === "change") return t;
}
var xp = !1;
if (Vt) {
  var cs;
  if (Vt) {
    var ds = "oninput" in document;
    if (!ds) {
      var Zc = document.createElement("div");
      Zc.setAttribute("oninput", "return;"),
        (ds = typeof Zc.oninput == "function");
    }
    cs = ds;
  } else cs = !1;
  xp = cs && (!document.documentMode || 9 < document.documentMode);
}
function Jc() {
  Zr && (Zr.detachEvent("onpropertychange", bp), (di = Zr = null));
}
function bp(e) {
  if (e.propertyName === "value" && kl(di)) {
    var t = [];
    _p(t, di, e, du(e)), ip(Hy, t);
  }
}
function Vy(e, t, n) {
  e === "focusin"
    ? (Jc(), (Zr = t), (di = n), Zr.attachEvent("onpropertychange", bp))
    : e === "focusout" && Jc();
}
function qy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(di);
}
function Ky(e, t) {
  if (e === "click") return kl(t);
}
function Yy(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function Gy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : Gy;
function fi(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Hs.call(t, i) || !bt(e[i], t[i])) return !1;
  }
  return !0;
}
function ed(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function td(e, t) {
  var n = ed(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ed(n);
  }
}
function Cp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tp() {
  for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Uo(e.document);
  }
  return t;
}
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qy(e) {
  var t = Tp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = td(n, o));
        var l = td(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Xy = Vt && "documentMode" in document && 11 >= document.documentMode,
  Jn = null,
  aa = null,
  Jr = null,
  ua = !1;
function nd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ua ||
    Jn == null ||
    Jn !== Uo(r) ||
    ((r = Jn),
    "selectionStart" in r && wu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Jr && fi(Jr, r)) ||
      ((Jr = r),
      (r = Ko(aa, "onSelect")),
      0 < r.length &&
        ((t = new yu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jn))));
}
function Gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var er = {
    animationend: Gi("Animation", "AnimationEnd"),
    animationiteration: Gi("Animation", "AnimationIteration"),
    animationstart: Gi("Animation", "AnimationStart"),
    transitionend: Gi("Transition", "TransitionEnd"),
  },
  fs = {},
  Op = {};
Vt &&
  ((Op = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete er.animationend.animation,
    delete er.animationiteration.animation,
    delete er.animationstart.animation),
  "TransitionEvent" in window || delete er.transitionend.transition);
function _l(e) {
  if (fs[e]) return fs[e];
  if (!er[e]) return e;
  var t = er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Op) return (fs[e] = t[n]);
  return e;
}
var Pp = _l("animationend"),
  Np = _l("animationiteration"),
  Rp = _l("animationstart"),
  Lp = _l("transitionend"),
  Ap = new Map(),
  rd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, t) {
  Ap.set(e, t), In(t, [e]);
}
for (var ps = 0; ps < rd.length; ps++) {
  var hs = rd[ps],
    Zy = hs.toLowerCase(),
    Jy = hs[0].toUpperCase() + hs.slice(1);
  vn(Zy, "on" + Jy);
}
vn(Pp, "onAnimationEnd");
vn(Np, "onAnimationIteration");
vn(Rp, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Lp, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
In(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
In(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
In(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
In(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ev = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function id(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zg(r, t, void 0, e), (e.currentTarget = null);
}
function Mp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          id(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          id(i, s, u), (o = a);
        }
    }
  }
  if (Wo) throw ((e = ia), (Wo = !1), (ia = null), e);
}
function se(e, t) {
  var n = t[ha];
  n === void 0 && (n = t[ha] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Dp(t, e, 2, !1), n.add(r));
}
function ms(e, t, n) {
  var r = 0;
  t && (r |= 4), Dp(n, e, r, t);
}
var Qi = "_reactListening" + Math.random().toString(36).slice(2);
function pi(e) {
  if (!e[Qi]) {
    (e[Qi] = !0),
      Wf.forEach(function (n) {
        n !== "selectionchange" && (ev.has(n) || ms(n, !1, e), ms(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qi] || ((t[Qi] = !0), ms("selectionchange", !1, t));
  }
}
function Dp(e, t, n, r) {
  switch (vp(t)) {
    case 1:
      var i = hy;
      break;
    case 4:
      i = my;
      break;
    default:
      i = mu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ra ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function gs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Tn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ip(function () {
    var u = o,
      d = du(n),
      c = [];
    e: {
      var f = Ap.get(e);
      if (f !== void 0) {
        var w = yu,
          y = e;
        switch (e) {
          case "keypress":
            if (bo(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ny;
            break;
          case "focusin":
            (y = "focus"), (w = us);
            break;
          case "focusout":
            (y = "blur"), (w = us);
            break;
          case "beforeblur":
          case "afterblur":
            w = us;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = vy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ay;
            break;
          case Pp:
          case Np:
          case Rp:
            w = Ey;
            break;
          case Lp:
            w = Dy;
            break;
          case "scroll":
            w = gy;
            break;
          case "wheel":
            w = Iy;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = _y;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Yc;
        }
        var g = (t & 4) !== 0,
          b = !g && e === "scroll",
          h = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              h !== null && ((k = si(p, h)), k != null && g.push(hi(p, k, m)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((f = new w(f, y, null, n, d)), c.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ta &&
            (y = n.relatedTarget || n.fromElement) &&
            (Tn(y) || y[qt]))
        )
          break e;
        if (
          (w || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = u),
              (y = y ? Tn(y) : null),
              y !== null &&
                ((b = Fn(y)), y !== b || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = u)),
          w !== y)
        ) {
          if (
            ((g = qc),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Yc),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (b = w == null ? f : tr(w)),
            (m = y == null ? f : tr(y)),
            (f = new g(k, p + "leave", w, n, d)),
            (f.target = b),
            (f.relatedTarget = m),
            (k = null),
            Tn(d) === u &&
              ((g = new g(h, p + "enter", y, n, d)),
              (g.target = m),
              (g.relatedTarget = b),
              (k = g)),
            (b = k),
            w && y)
          )
            t: {
              for (g = w, h = y, p = 0, m = g; m; m = Kn(m)) p++;
              for (m = 0, k = h; k; k = Kn(k)) m++;
              for (; 0 < p - m; ) (g = Kn(g)), p--;
              for (; 0 < m - p; ) (h = Kn(h)), m--;
              for (; p--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = Kn(g)), (h = Kn(h));
              }
              g = null;
            }
          else g = null;
          w !== null && od(c, f, w, g, !1),
            y !== null && b !== null && od(c, b, y, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? tr(u) : window),
          (w = f.nodeName && f.nodeName.toLowerCase()),
          w === "select" || (w === "input" && f.type === "file"))
        )
          var C = $y;
        else if (Xc(f))
          if (xp) C = Yy;
          else {
            C = qy;
            var A = Vy;
          }
        else
          (w = f.nodeName) &&
            w.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Ky);
        if (C && (C = C(e, u))) {
          _p(c, C, n, d);
          break e;
        }
        A && A(e, f, u),
          e === "focusout" &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === "number" &&
            Qs(f, "number", f.value);
      }
      switch (((A = u ? tr(u) : window), e)) {
        case "focusin":
          (Xc(A) || A.contentEditable === "true") &&
            ((Jn = A), (aa = u), (Jr = null));
          break;
        case "focusout":
          Jr = aa = Jn = null;
          break;
        case "mousedown":
          ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ua = !1), nd(c, n, d);
          break;
        case "selectionchange":
          if (Xy) break;
        case "keydown":
        case "keyup":
          nd(c, n, d);
      }
      var M;
      if (Su)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Zn
          ? Ep(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (wp &&
          n.locale !== "ko" &&
          (Zn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Zn && (M = Sp())
            : ((rn = d),
              (gu = "value" in rn ? rn.value : rn.textContent),
              (Zn = !0))),
        (A = Ko(u, T)),
        0 < A.length &&
          ((T = new Kc(T, e, null, n, d)),
          c.push({ event: T, listeners: A }),
          M ? (T.data = M) : ((M = kp(n)), M !== null && (T.data = M)))),
        (M = zy ? Uy(e, n) : By(e, n)) &&
          ((u = Ko(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Kc("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = M)));
    }
    Mp(c, t);
  });
}
function hi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ko(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = si(e, n)),
      o != null && r.unshift(hi(e, o, i)),
      (o = si(e, t)),
      o != null && r.push(hi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function od(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = si(n, o)), a != null && l.unshift(hi(n, a, s)))
        : i || ((a = si(n, o)), a != null && l.push(hi(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var tv = /\r\n?/g,
  nv = /\u0000|\uFFFD/g;
function ld(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tv,
      `
`
    )
    .replace(nv, "");
}
function Xi(e, t, n) {
  if (((t = ld(t)), ld(e) !== t && n)) throw Error(O(425));
}
function Yo() {}
var ca = null,
  da = null;
function fa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pa = typeof setTimeout == "function" ? setTimeout : void 0,
  rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sd = typeof Promise == "function" ? Promise : void 0,
  iv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sd < "u"
      ? function (e) {
          return sd.resolve(null).then(e).catch(ov);
        }
      : pa;
function ov(e) {
  setTimeout(function () {
    throw e;
  });
}
function ys(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ci(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ci(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ad(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cr = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + Cr,
  mi = "__reactProps$" + Cr,
  qt = "__reactContainer$" + Cr,
  ha = "__reactEvents$" + Cr,
  lv = "__reactListeners$" + Cr,
  sv = "__reactHandles$" + Cr;
function Tn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qt] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ad(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = ad(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ni(e) {
  return (
    (e = e[Lt] || e[qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function xl(e) {
  return e[mi] || null;
}
var ma = [],
  nr = -1;
function Sn(e) {
  return { current: e };
}
function ae(e) {
  0 > nr || ((e.current = ma[nr]), (ma[nr] = null), nr--);
}
function le(e, t) {
  nr++, (ma[nr] = e.current), (e.current = t);
}
var yn = {},
  Fe = Sn(yn),
  Qe = Sn(!1),
  Ln = yn;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Go() {
  ae(Qe), ae(Fe);
}
function ud(e, t, n) {
  if (Fe.current !== yn) throw Error(O(168));
  le(Fe, t), le(Qe, n);
}
function jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, Vg(e) || "Unknown", i));
  return he({}, n, r);
}
function Qo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (Ln = Fe.current),
    le(Fe, e),
    le(Qe, Qe.current),
    !0
  );
}
function cd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = jp(e, t, Ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Qe),
      ae(Fe),
      le(Fe, e))
    : ae(Qe),
    le(Qe, n);
}
var Ut = null,
  bl = !1,
  vs = !1;
function Ip(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function av(e) {
  (bl = !0), Ip(e);
}
function wn() {
  if (!vs && Ut !== null) {
    vs = !0;
    var e = 0,
      t = te;
    try {
      var n = Ut;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (bl = !1);
    } catch (i) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), ap(fu, wn), i);
    } finally {
      (te = t), (vs = !1);
    }
  }
  return null;
}
var rr = [],
  ir = 0,
  Xo = null,
  Zo = 0,
  ct = [],
  dt = 0,
  An = null,
  Bt = 1,
  Wt = "";
function xn(e, t) {
  (rr[ir++] = Zo), (rr[ir++] = Xo), (Xo = e), (Zo = t);
}
function Fp(e, t, n) {
  (ct[dt++] = Bt), (ct[dt++] = Wt), (ct[dt++] = An), (An = e);
  var r = Bt;
  e = Wt;
  var i = 32 - _t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - _t(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Bt = (1 << (32 - _t(t) + i)) | (n << i) | r),
      (Wt = o + e);
  } else (Bt = (1 << o) | (n << i) | r), (Wt = e);
}
function Eu(e) {
  e.return !== null && (xn(e, 1), Fp(e, 1, 0));
}
function ku(e) {
  for (; e === Xo; )
    (Xo = rr[--ir]), (rr[ir] = null), (Zo = rr[--ir]), (rr[ir] = null);
  for (; e === An; )
    (An = ct[--dt]),
      (ct[dt] = null),
      (Wt = ct[--dt]),
      (ct[dt] = null),
      (Bt = ct[--dt]),
      (ct[dt] = null);
}
var lt = null,
  ot = null,
  ue = !1,
  kt = null;
function zp(e, t) {
  var n = ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function dd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (ot = cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = An !== null ? { id: Bt, overflow: Wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ya(e) {
  if (ue) {
    var t = ot;
    if (t) {
      var n = t;
      if (!dd(e, t)) {
        if (ga(e)) throw Error(O(418));
        t = cn(n.nextSibling);
        var r = lt;
        t && dd(e, t)
          ? zp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (lt = e));
      }
    } else {
      if (ga(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (lt = e);
    }
  }
}
function fd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function Zi(e) {
  if (e !== lt) return !1;
  if (!ue) return fd(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fa(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (ga(e)) throw (Up(), Error(O(418)));
    for (; t; ) zp(e, t), (t = cn(t.nextSibling));
  }
  if ((fd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = lt ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Up() {
  for (var e = ot; e; ) e = cn(e.nextSibling);
}
function vr() {
  (ot = lt = null), (ue = !1);
}
function _u(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var uv = Gt.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Jo = Sn(null),
  el = null,
  or = null,
  xu = null;
function bu() {
  xu = or = el = null;
}
function Cu(e) {
  var t = Jo.current;
  ae(Jo), (e._currentValue = t);
}
function va(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pr(e, t) {
  (el = e),
    (xu = or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (xu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
      if (el === null) throw Error(O(308));
      (or = e), (el.dependencies = { lanes: 0, firstContext: e });
    } else or = or.next = e;
  return t;
}
var On = null;
function Tu(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Bp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Tu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Ou(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Tu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function Co(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pu(e, n);
  }
}
function pd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function tl(e, t, n, r) {
  var i = e.updateQueue;
  en = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var c = i.baseState;
    (l = 0), (d = u = a = null), (s = o);
    do {
      var f = s.lane,
        w = s.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            g = s;
          switch (((f = t), (w = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                c = y.call(w, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (f = typeof y == "function" ? y.call(w, c, f) : y),
                f == null)
              )
                break e;
              c = he({}, c, f);
              break e;
            case 2:
              en = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        (w = {
          eventTime: w,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = w), (a = c)) : (d = d.next = w),
          (l |= f);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = c),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function hd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var Hp = new Bf.Component().refs;
function Sa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = pn(e),
      o = Ht(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (xt(t, e, i, r), Co(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = pn(e),
      o = Ht(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (xt(t, e, i, r), Co(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = pn(e),
      i = Ht(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = dn(e, i, r)),
      t !== null && (xt(t, e, r, n), Co(t, e, r));
  },
};
function md(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fi(n, r) || !fi(i, o)
      : !0
  );
}
function $p(e, t, n) {
  var r = !1,
    i = yn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = mt(o))
      : ((i = Xe(t) ? Ln : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? yr(e, i) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function gd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function wa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Hp), Ou(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = mt(o))
    : ((o = Xe(t) ? Ln : Fe.current), (i.context = yr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Sa(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Cl.enqueueReplaceState(i, i.state, null),
      tl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === Hp && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function yd(e) {
  var t = e._init;
  return t(e._payload);
}
function Vp(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = hn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, m, k) {
    return p === null || p.tag !== 6
      ? ((p = bs(m, h.mode, k)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function a(h, p, m, k) {
    var C = m.type;
    return C === Xn
      ? d(h, p, m.props.children, k, m.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Jt &&
            yd(C) === p.type))
      ? ((k = i(p, m.props)), (k.ref = Ir(h, p, m)), (k.return = h), k)
      : ((k = Lo(m.type, m.key, m.props, null, h.mode, k)),
        (k.ref = Ir(h, p, m)),
        (k.return = h),
        k);
  }
  function u(h, p, m, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Cs(m, h.mode, k)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function d(h, p, m, k, C) {
    return p === null || p.tag !== 7
      ? ((p = Rn(m, h.mode, k, C)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function c(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = bs("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Wi:
          return (
            (m = Lo(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = Ir(h, null, p)),
            (m.return = h),
            m
          );
        case Qn:
          return (p = Cs(p, h.mode, m)), (p.return = h), p;
        case Jt:
          var k = p._init;
          return c(h, k(p._payload), m);
      }
      if (qr(p) || Lr(p))
        return (p = Rn(p, h.mode, m, null)), (p.return = h), p;
      Ji(h, p);
    }
    return null;
  }
  function f(h, p, m, k) {
    var C = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : s(h, p, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wi:
          return m.key === C ? a(h, p, m, k) : null;
        case Qn:
          return m.key === C ? u(h, p, m, k) : null;
        case Jt:
          return (C = m._init), f(h, p, C(m._payload), k);
      }
      if (qr(m) || Lr(m)) return C !== null ? null : d(h, p, m, k, null);
      Ji(h, m);
    }
    return null;
  }
  function w(h, p, m, k, C) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), s(p, h, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Wi:
          return (h = h.get(k.key === null ? m : k.key) || null), a(p, h, k, C);
        case Qn:
          return (h = h.get(k.key === null ? m : k.key) || null), u(p, h, k, C);
        case Jt:
          var A = k._init;
          return w(h, p, m, A(k._payload), C);
      }
      if (qr(k) || Lr(k)) return (h = h.get(m) || null), d(p, h, k, C, null);
      Ji(p, k);
    }
    return null;
  }
  function y(h, p, m, k) {
    for (
      var C = null, A = null, M = p, T = (p = 0), V = null;
      M !== null && T < m.length;
      T++
    ) {
      M.index > T ? ((V = M), (M = null)) : (V = M.sibling);
      var j = f(h, M, m[T], k);
      if (j === null) {
        M === null && (M = V);
        break;
      }
      e && M && j.alternate === null && t(h, M),
        (p = o(j, p, T)),
        A === null ? (C = j) : (A.sibling = j),
        (A = j),
        (M = V);
    }
    if (T === m.length) return n(h, M), ue && xn(h, T), C;
    if (M === null) {
      for (; T < m.length; T++)
        (M = c(h, m[T], k)),
          M !== null &&
            ((p = o(M, p, T)), A === null ? (C = M) : (A.sibling = M), (A = M));
      return ue && xn(h, T), C;
    }
    for (M = r(h, M); T < m.length; T++)
      (V = w(M, h, T, m[T], k)),
        V !== null &&
          (e && V.alternate !== null && M.delete(V.key === null ? T : V.key),
          (p = o(V, p, T)),
          A === null ? (C = V) : (A.sibling = V),
          (A = V));
    return (
      e &&
        M.forEach(function (D) {
          return t(h, D);
        }),
      ue && xn(h, T),
      C
    );
  }
  function g(h, p, m, k) {
    var C = Lr(m);
    if (typeof C != "function") throw Error(O(150));
    if (((m = C.call(m)), m == null)) throw Error(O(151));
    for (
      var A = (C = null), M = p, T = (p = 0), V = null, j = m.next();
      M !== null && !j.done;
      T++, j = m.next()
    ) {
      M.index > T ? ((V = M), (M = null)) : (V = M.sibling);
      var D = f(h, M, j.value, k);
      if (D === null) {
        M === null && (M = V);
        break;
      }
      e && M && D.alternate === null && t(h, M),
        (p = o(D, p, T)),
        A === null ? (C = D) : (A.sibling = D),
        (A = D),
        (M = V);
    }
    if (j.done) return n(h, M), ue && xn(h, T), C;
    if (M === null) {
      for (; !j.done; T++, j = m.next())
        (j = c(h, j.value, k)),
          j !== null &&
            ((p = o(j, p, T)), A === null ? (C = j) : (A.sibling = j), (A = j));
      return ue && xn(h, T), C;
    }
    for (M = r(h, M); !j.done; T++, j = m.next())
      (j = w(M, h, T, j.value, k)),
        j !== null &&
          (e && j.alternate !== null && M.delete(j.key === null ? T : j.key),
          (p = o(j, p, T)),
          A === null ? (C = j) : (A.sibling = j),
          (A = j));
    return (
      e &&
        M.forEach(function (W) {
          return t(h, W);
        }),
      ue && xn(h, T),
      C
    );
  }
  function b(h, p, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Xn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Wi:
          e: {
            for (var C = m.key, A = p; A !== null; ) {
              if (A.key === C) {
                if (((C = m.type), C === Xn)) {
                  if (A.tag === 7) {
                    n(h, A.sibling),
                      (p = i(A, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  A.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Jt &&
                    yd(C) === A.type)
                ) {
                  n(h, A.sibling),
                    (p = i(A, m.props)),
                    (p.ref = Ir(h, A, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, A);
                break;
              } else t(h, A);
              A = A.sibling;
            }
            m.type === Xn
              ? ((p = Rn(m.props.children, h.mode, k, m.key)),
                (p.return = h),
                (h = p))
              : ((k = Lo(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = Ir(h, p, m)),
                (k.return = h),
                (h = k));
          }
          return l(h);
        case Qn:
          e: {
            for (A = m.key; p !== null; ) {
              if (p.key === A)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Cs(m, h.mode, k)), (p.return = h), (h = p);
          }
          return l(h);
        case Jt:
          return (A = m._init), b(h, p, A(m._payload), k);
      }
      if (qr(m)) return y(h, p, m, k);
      if (Lr(m)) return g(h, p, m, k);
      Ji(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = bs(m, h.mode, k)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return b;
}
var Sr = Vp(!0),
  qp = Vp(!1),
  Ri = {},
  Dt = Sn(Ri),
  gi = Sn(Ri),
  yi = Sn(Ri);
function Pn(e) {
  if (e === Ri) throw Error(O(174));
  return e;
}
function Pu(e, t) {
  switch ((le(yi, t), le(gi, e), le(Dt, Ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zs(t, e));
  }
  ae(Dt), le(Dt, t);
}
function wr() {
  ae(Dt), ae(gi), ae(yi);
}
function Kp(e) {
  Pn(yi.current);
  var t = Pn(Dt.current),
    n = Zs(t, e.type);
  t !== n && (le(gi, e), le(Dt, n));
}
function Nu(e) {
  gi.current === e && (ae(Dt), ae(gi));
}
var ce = Sn(0);
function nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ss = [];
function Ru() {
  for (var e = 0; e < Ss.length; e++)
    Ss[e]._workInProgressVersionPrimary = null;
  Ss.length = 0;
}
var To = Gt.ReactCurrentDispatcher,
  ws = Gt.ReactCurrentBatchConfig,
  Mn = 0,
  pe = null,
  we = null,
  xe = null,
  rl = !1,
  ei = !1,
  vi = 0,
  cv = 0;
function Me() {
  throw Error(O(321));
}
function Lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Au(e, t, n, r, i, o) {
  if (
    ((Mn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (To.current = e === null || e.memoizedState === null ? hv : mv),
    (e = n(r, i)),
    ei)
  ) {
    o = 0;
    do {
      if (((ei = !1), (vi = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (xe = we = null),
        (t.updateQueue = null),
        (To.current = gv),
        (e = n(r, i));
    } while (ei);
  }
  if (
    ((To.current = il),
    (t = we !== null && we.next !== null),
    (Mn = 0),
    (xe = we = pe = null),
    (rl = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Mu() {
  var e = vi !== 0;
  return (vi = 0), e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (pe.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function gt() {
  if (we === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = xe === null ? pe.memoizedState : xe.next;
  if (t !== null) (xe = t), (we = e);
  else {
    if (e === null) throw Error(O(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      xe === null ? (pe.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function Si(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Es(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = o;
    do {
      var d = u.lane;
      if ((Mn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = c), (l = r)) : (a = a.next = c),
          (pe.lanes |= d),
          (Dn |= d);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      bt(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (pe.lanes |= o), (Dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ks(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    bt(o, t.memoizedState) || (Ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Yp() {}
function Gp(e, t) {
  var n = pe,
    r = gt(),
    i = t(),
    o = !bt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ge = !0)),
    (r = r.queue),
    Du(Zp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wi(9, Xp.bind(null, n, r, i, t), void 0, null),
      be === null)
    )
      throw Error(O(349));
    Mn & 30 || Qp(n, t, i);
  }
  return i;
}
function Qp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jp(t) && eh(e);
}
function Zp(e, t, n) {
  return n(function () {
    Jp(t) && eh(e);
  });
}
function Jp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function eh(e) {
  var t = Kt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function vd(e) {
  var t = Rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Si,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pv.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function wi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function th() {
  return gt().memoizedState;
}
function Oo(e, t, n, r) {
  var i = Rt();
  (pe.flags |= e),
    (i.memoizedState = wi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Tl(e, t, n, r) {
  var i = gt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var l = we.memoizedState;
    if (((o = l.destroy), r !== null && Lu(r, l.deps))) {
      i.memoizedState = wi(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = wi(1 | t, n, o, r));
}
function Sd(e, t) {
  return Oo(8390656, 8, e, t);
}
function Du(e, t) {
  return Tl(2048, 8, e, t);
}
function nh(e, t) {
  return Tl(4, 2, e, t);
}
function rh(e, t) {
  return Tl(4, 4, e, t);
}
function ih(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function oh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Tl(4, 4, ih.bind(null, t, e), n)
  );
}
function ju() {}
function lh(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sh(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ah(e, t, n) {
  return Mn & 21
    ? (bt(n, t) || ((n = dp()), (pe.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function dv(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ws.transition;
  ws.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (ws.transition = r);
  }
}
function uh() {
  return gt().memoizedState;
}
function fv(e, t, n) {
  var r = pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ch(e))
  )
    dh(t, n);
  else if (((n = Bp(e, t, n, r)), n !== null)) {
    var i = We();
    xt(n, e, r, i), fh(n, t, r);
  }
}
function pv(e, t, n) {
  var r = pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ch(e)) dh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), bt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Tu(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bp(e, t, i, r)),
      n !== null && ((i = We()), xt(n, e, r, i), fh(n, t, r));
  }
}
function ch(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function dh(e, t) {
  ei = rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pu(e, n);
  }
}
var il = {
    readContext: mt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  hv = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Sd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Oo(4194308, 4, ih.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Oo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = fv.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vd,
    useDebugValue: ju,
    useDeferredValue: function (e) {
      return (Rt().memoizedState = e);
    },
    useTransition: function () {
      var e = vd(!1),
        t = e[0];
      return (e = dv.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = Rt();
      if (ue) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(O(349));
        Mn & 30 || Qp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Sd(Zp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        wi(9, Xp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rt(),
        t = be.identifierPrefix;
      if (ue) {
        var n = Wt,
          r = Bt;
        (n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mv = {
    readContext: mt,
    useCallback: lh,
    useContext: mt,
    useEffect: Du,
    useImperativeHandle: oh,
    useInsertionEffect: nh,
    useLayoutEffect: rh,
    useMemo: sh,
    useReducer: Es,
    useRef: th,
    useState: function () {
      return Es(Si);
    },
    useDebugValue: ju,
    useDeferredValue: function (e) {
      var t = gt();
      return ah(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Es(Si)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yp,
    useSyncExternalStore: Gp,
    useId: uh,
    unstable_isNewReconciler: !1,
  },
  gv = {
    readContext: mt,
    useCallback: lh,
    useContext: mt,
    useEffect: Du,
    useImperativeHandle: oh,
    useInsertionEffect: nh,
    useLayoutEffect: rh,
    useMemo: sh,
    useReducer: ks,
    useRef: th,
    useState: function () {
      return ks(Si);
    },
    useDebugValue: ju,
    useDeferredValue: function (e) {
      var t = gt();
      return we === null ? (t.memoizedState = e) : ah(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ks(Si)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yp,
    useSyncExternalStore: Gp,
    useId: uh,
    unstable_isNewReconciler: !1,
  };
function Er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $g(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function _s(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yv = typeof WeakMap == "function" ? WeakMap : Map;
function ph(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ll || ((ll = !0), (Ra = r)), Ea(e, t);
    }),
    n
  );
}
function hh(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ea(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ea(e, t),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function wd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Rv.bind(null, e, t, n)), t.then(e, e));
}
function Ed(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ht(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vv = Gt.ReactCurrentOwner,
  Ge = !1;
function Be(e, t, n, r) {
  t.child = e === null ? qp(t, null, n, r) : Sr(t, e.child, n, r);
}
function _d(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    pr(t, i),
    (r = Au(e, t, n, r, o, i)),
    (n = Mu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (ue && n && Eu(t), (t.flags |= 1), Be(e, t, r, i), t.child)
  );
}
function xd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$u(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mh(e, t, o, r, i))
      : ((e = Lo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fi), n(l, r) && e.ref === t.ref)
    )
      return Yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (fi(o, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Yt(e, t, i);
  }
  return ka(e, t, n, r, i);
}
function gh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(sr, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(sr, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(sr, rt),
        (rt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(sr, rt),
      (rt |= r);
  return Be(e, t, i, n), t.child;
}
function yh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ka(e, t, n, r, i) {
  var o = Xe(n) ? Ln : Fe.current;
  return (
    (o = yr(t, o)),
    pr(t, i),
    (n = Au(e, t, n, r, o, i)),
    (r = Mu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (ue && r && Eu(t), (t.flags |= 1), Be(e, t, n, i), t.child)
  );
}
function bd(e, t, n, r, i) {
  if (Xe(n)) {
    var o = !0;
    Qo(t);
  } else o = !1;
  if ((pr(t, i), t.stateNode === null))
    Po(e, t), $p(t, n, r), wa(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Xe(n) ? Ln : Fe.current), (u = yr(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && gd(t, l, r, u)),
      (en = !1);
    var f = t.memoizedState;
    (l.state = f),
      tl(t, r, l, i),
      (a = t.memoizedState),
      s !== r || f !== a || Qe.current || en
        ? (typeof d == "function" && (Sa(t, n, d, r), (a = t.memoizedState)),
          (s = en || md(t, n, s, r, f, a, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Wp(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : wt(t.type, s)),
      (l.props = u),
      (c = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = mt(a))
        : ((a = Xe(n) ? Ln : Fe.current), (a = yr(t, a)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== c || f !== a) && gd(t, l, r, a)),
      (en = !1),
      (f = t.memoizedState),
      (l.state = f),
      tl(t, r, l, i);
    var y = t.memoizedState;
    s !== c || f !== y || Qe.current || en
      ? (typeof w == "function" && (Sa(t, n, w, r), (y = t.memoizedState)),
        (u = en || md(t, n, u, r, f, y, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _a(e, t, n, r, o, i);
}
function _a(e, t, n, r, i, o) {
  yh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && cd(t, n, !1), Yt(e, t, o);
  (r = t.stateNode), (vv.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Sr(t, e.child, null, o)), (t.child = Sr(t, null, s, o)))
      : Be(e, t, s, o),
    (t.memoizedState = r.state),
    i && cd(t, n, !0),
    t.child
  );
}
function vh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ud(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ud(e, t.context, !1),
    Pu(e, t.containerInfo);
}
function Cd(e, t, n, r, i) {
  return vr(), _u(i), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ba(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    i = ce.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    le(ce, i & 1),
    e === null)
  )
    return (
      ya(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Nl(l, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ba(n)),
              (t.memoizedState = xa),
              e)
            : Iu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Sv(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = hn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = hn(s, o)) : ((o = Rn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ba(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = xa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Iu(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function eo(e, t, n, r) {
  return (
    r !== null && _u(r),
    Sr(t, e.child, null, n),
    (e = Iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sv(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _s(Error(O(422)))), eo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Rn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sr(t, e.child, null, l),
        (t.child.memoizedState = ba(l)),
        (t.memoizedState = xa),
        o);
  if (!(t.mode & 1)) return eo(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(O(419))), (r = _s(o, r, void 0)), eo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ge || s)) {
    if (((r = be), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Kt(e, i), xt(r, e, i, -1));
    }
    return Hu(), (r = _s(Error(O(421)))), eo(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ot = cn(i.nextSibling)),
      (lt = t),
      (ue = !0),
      (kt = null),
      e !== null &&
        ((ct[dt++] = Bt),
        (ct[dt++] = Wt),
        (ct[dt++] = An),
        (Bt = e.id),
        (Wt = e.overflow),
        (An = t)),
      (t = Iu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Td(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), va(e.return, t, n);
}
function xs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function wh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Be(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Td(e, n, t);
        else if (e.tag === 19) Td(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && nl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          xs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && nl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        xs(t, !0, n, null, o);
        break;
      case "together":
        xs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Po(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wv(e, t, n) {
  switch (t.tag) {
    case 3:
      vh(t), vr();
      break;
    case 5:
      Kp(t);
      break;
    case 1:
      Xe(t.type) && Qo(t);
      break;
    case 4:
      Pu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      le(Jo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sh(e, t, n)
          : (le(ce, ce.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      le(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        le(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gh(e, t, n);
  }
  return Yt(e, t, n);
}
var Eh, Ca, kh, _h;
Eh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ca = function () {};
kh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pn(Dt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ys(e, i)), (r = Ys(e, r)), (o = []);
        break;
      case "select":
        (i = he({}, i, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Xs(e, i)), (r = Xs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yo);
    }
    Js(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (oi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (oi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && se("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_h = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ev(e, t, n) {
  var r = t.pendingProps;
  switch ((ku(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return De(t), null;
    case 1:
      return Xe(t.type) && Go(), De(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wr(),
        ae(Qe),
        ae(Fe),
        Ru(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (Ma(kt), (kt = null)))),
        Ca(e, t),
        De(t),
        null
      );
    case 5:
      Nu(t);
      var i = Pn(yi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return De(t), null;
        }
        if (((e = Pn(Dt.current)), Zi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Lt] = t), (r[mi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Yr.length; i++) se(Yr[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              jc(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              Fc(r, o), se("invalid", r);
          }
          Js(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xi(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xi(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : oi.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Hi(r), Ic(r, o, !0);
              break;
            case "textarea":
              Hi(r), zc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Lt] = t),
            (e[mi] = r),
            Eh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ea(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Yr.length; i++) se(Yr[i], e);
                i = r;
                break;
              case "source":
                se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (i = r);
                break;
              case "details":
                se("toggle", e), (i = r);
                break;
              case "input":
                jc(e, r), (i = Ys(e, r)), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = he({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                Fc(e, r), (i = Xs(e, r)), se("invalid", e);
                break;
              default:
                i = r;
            }
            Js(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? Jf(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Xf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && li(e, a)
                    : typeof a == "number" && li(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (oi.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && se("scroll", e)
                      : a != null && su(e, o, a, l));
              }
            switch (n) {
              case "input":
                Hi(e), Ic(e, r, !1);
                break;
              case "textarea":
                Hi(e), zc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ur(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ur(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Yo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return De(t), null;
    case 6:
      if (e && t.stateNode != null) _h(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Pn(yi.current)), Pn(Dt.current), Zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (o = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return De(t), null;
    case 13:
      if (
        (ae(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && ot !== null && t.mode & 1 && !(t.flags & 128))
          Up(), vr(), (t.flags |= 98560), (o = !1);
        else if (((o = Zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[Lt] = t;
          } else
            vr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          De(t), (o = !1);
        } else kt !== null && (Ma(kt), (kt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Ee === 0 && (Ee = 3) : Hu())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        wr(), Ca(e, t), e === null && pi(t.stateNode.containerInfo), De(t), null
      );
    case 10:
      return Cu(t.type._context), De(t), null;
    case 17:
      return Xe(t.type) && Go(), De(t), null;
    case 19:
      if ((ae(ce), (o = t.memoizedState), o === null)) return De(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Fr(o, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = nl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Fr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > kr &&
            ((t.flags |= 128), (r = !0), Fr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = nl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !ue)
            )
              return De(t), null;
          } else
            2 * ye() - o.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = ce.current),
          le(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function kv(e, t) {
  switch ((ku(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && Go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wr(),
        ae(Qe),
        ae(Fe),
        Ru(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nu(t), null;
    case 13:
      if (
        (ae(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        vr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(ce), null;
    case 4:
      return wr(), null;
    case 10:
      return Cu(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var to = !1,
  je = !1,
  _v = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function Ta(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Od = !1;
function xv(e, t) {
  if (((ca = Vo), (e = Tp()), wu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var w;
              c !== n || (i !== 0 && c.nodeType !== 3) || (s = l + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (a = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (f = c), (c = w);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === i && (s = l),
                f === o && ++d === r && (a = l),
                (w = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (da = { focusedElem: e, selectionRange: n }, Vo = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    b = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : wt(t.type, g),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (k) {
          me(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (y = Od), (Od = !1), y;
}
function ti(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ta(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function xh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[mi], delete t[ha], delete t[lv], delete t[sv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Yo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pa(e, t, n), e = e.sibling; e !== null; ) Pa(e, t, n), (e = e.sibling);
}
function Na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Na(e, t, n), e = e.sibling; e !== null; ) Na(e, t, n), (e = e.sibling);
}
var Te = null,
  Et = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) Ch(e, t, n), (n = n.sibling);
}
function Ch(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || lr(n, t);
    case 6:
      var r = Te,
        i = Et;
      (Te = null),
        Xt(e, t, n),
        (Te = r),
        (Et = i),
        Te !== null &&
          (Et
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (Et
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? ys(e.parentNode, n)
              : e.nodeType === 1 && ys(e, n),
            ci(e))
          : ys(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (i = Et),
        (Te = n.stateNode.containerInfo),
        (Et = !0),
        Xt(e, t, n),
        (Te = r),
        (Et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Ta(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          me(n, t, s);
        }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Xt(e, t, n), (je = r))
        : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function Nd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _v()),
      t.forEach(function (r) {
        var i = Av.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Te = s.stateNode), (Et = !1);
              break e;
            case 3:
              (Te = s.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Te = s.stateNode.containerInfo), (Et = !0);
              break e;
          }
          s = s.return;
        }
        if (Te === null) throw Error(O(160));
        Ch(o, l, i), (Te = null), (Et = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        me(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Th(t, e), (t = t.sibling);
}
function Th(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), Pt(e), r & 4)) {
        try {
          ti(3, e, e.return), Ol(3, e);
        } catch (g) {
          me(e, e.return, g);
        }
        try {
          ti(5, e, e.return);
        } catch (g) {
          me(e, e.return, g);
        }
      }
      break;
    case 1:
      St(t, e), Pt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (St(t, e),
        Pt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          li(i, "");
        } catch (g) {
          me(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Yf(i, o),
              ea(s, l);
            var u = ea(s, o);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                c = a[l + 1];
              d === "style"
                ? Jf(i, c)
                : d === "dangerouslySetInnerHTML"
                ? Xf(i, c)
                : d === "children"
                ? li(i, c)
                : su(i, d, c, u);
            }
            switch (s) {
              case "input":
                Gs(i, o);
                break;
              case "textarea":
                Gf(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? ur(i, !!o.multiple, w, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ur(i, !!o.multiple, o.defaultValue, !0)
                      : ur(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[mi] = o;
          } catch (g) {
            me(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((St(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          me(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ci(t.containerInfo);
        } catch (g) {
          me(e, e.return, g);
        }
      break;
    case 4:
      St(t, e), Pt(e);
      break;
    case 13:
      St(t, e),
        Pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Uu = ye())),
        r & 4 && Nd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || d), St(t, e), (je = u)) : St(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (I = e, d = e.child; d !== null; ) {
            for (c = I = d; I !== null; ) {
              switch (((f = I), (w = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ti(4, f, f.return);
                  break;
                case 1:
                  lr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      me(r, n, g);
                    }
                  }
                  break;
                case 5:
                  lr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ld(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = f), (I = w)) : Ld(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = c.stateNode),
                      (a = c.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Zf("display", l)));
              } catch (g) {
                me(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (g) {
                me(e, e.return, g);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      St(t, e), Pt(e), r & 4 && Nd(e);
      break;
    case 21:
      break;
    default:
      St(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (li(i, ""), (r.flags &= -33));
          var o = Pd(e);
          Na(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Pd(e);
          Pa(e, s, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bv(e, t, n) {
  (I = e), Oh(e);
}
function Oh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || to;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || je;
        s = to;
        var u = je;
        if (((to = l), (je = a) && !u))
          for (I = i; I !== null; )
            (l = I),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ad(i)
                : a !== null
                ? ((a.return = l), (I = a))
                : Ad(i);
        for (; o !== null; ) (I = o), Oh(o), (o = o.sibling);
        (I = i), (to = s), (je = u);
      }
      Rd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (I = o)) : Rd(e);
  }
}
function Rd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && hd(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hd(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && ci(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        je || (t.flags & 512 && Oa(t));
      } catch (f) {
        me(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Ld(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Ad(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ol(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, i, a);
            }
          }
          var o = t.return;
          try {
            Oa(t);
          } catch (a) {
            me(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Oa(t);
          } catch (a) {
            me(t, l, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (I = s);
      break;
    }
    I = t.return;
  }
}
var Cv = Math.ceil,
  ol = Gt.ReactCurrentDispatcher,
  Fu = Gt.ReactCurrentOwner,
  pt = Gt.ReactCurrentBatchConfig,
  J = 0,
  be = null,
  ve = null,
  Pe = 0,
  rt = 0,
  sr = Sn(0),
  Ee = 0,
  Ei = null,
  Dn = 0,
  Pl = 0,
  zu = 0,
  ni = null,
  Ye = null,
  Uu = 0,
  kr = 1 / 0,
  zt = null,
  ll = !1,
  Ra = null,
  fn = null,
  no = !1,
  on = null,
  sl = 0,
  ri = 0,
  La = null,
  No = -1,
  Ro = 0;
function We() {
  return J & 6 ? ye() : No !== -1 ? No : (No = ye());
}
function pn(e) {
  return e.mode & 1
    ? J & 2 && Pe !== 0
      ? Pe & -Pe
      : uv.transition !== null
      ? (Ro === 0 && (Ro = dp()), Ro)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vp(e.type))),
        e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < ri) throw ((ri = 0), (La = null), Error(O(185)));
  Oi(e, n, r),
    (!(J & 2) || e !== be) &&
      (e === be && (!(J & 2) && (Pl |= n), Ee === 4 && nn(e, Pe)),
      Ze(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((kr = ye() + 500), bl && wn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  uy(e, t);
  var r = $o(e, e === be ? Pe : 0);
  if (r === 0)
    n !== null && Wc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wc(n), t === 1))
      e.tag === 0 ? av(Md.bind(null, e)) : Ip(Md.bind(null, e)),
        iv(function () {
          !(J & 6) && wn();
        }),
        (n = null);
    else {
      switch (fp(r)) {
        case 1:
          n = fu;
          break;
        case 4:
          n = up;
          break;
        case 16:
          n = Ho;
          break;
        case 536870912:
          n = cp;
          break;
        default:
          n = Ho;
      }
      n = jh(n, Ph.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ph(e, t) {
  if (((No = -1), (Ro = 0), J & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = $o(e, e === be ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var o = Rh();
    (be !== e || Pe !== t) && ((zt = null), (kr = ye() + 500), Nn(e, t));
    do
      try {
        Pv();
        break;
      } catch (s) {
        Nh(e, s);
      }
    while (1);
    bu(),
      (ol.current = o),
      (J = i),
      ve !== null ? (t = 0) : ((be = null), (Pe = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = oa(e)), i !== 0 && ((r = i), (t = Aa(e, i)))), t === 1)
    )
      throw ((n = Ei), Nn(e, 0), nn(e, r), Ze(e, ye()), n);
    if (t === 6) nn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Tv(i) &&
          ((t = al(e, r)),
          t === 2 && ((o = oa(e)), o !== 0 && ((r = o), (t = Aa(e, o)))),
          t === 1))
      )
        throw ((n = Ei), Nn(e, 0), nn(e, r), Ze(e, ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          bn(e, Ye, zt);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((t = Uu + 500 - ye()), 10 < t))
          ) {
            if ($o(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = pa(bn.bind(null, e, Ye, zt), t);
            break;
          }
          bn(e, Ye, zt);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - _t(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Cv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pa(bn.bind(null, e, Ye, zt), r);
            break;
          }
          bn(e, Ye, zt);
          break;
        case 5:
          bn(e, Ye, zt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ze(e, ye()), e.callbackNode === n ? Ph.bind(null, e) : null;
}
function Aa(e, t) {
  var n = ni;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && Ma(t)),
    e
  );
}
function Ma(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function Tv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!bt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nn(e, t) {
  for (
    t &= ~zu,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - _t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Md(e) {
  if (J & 6) throw Error(O(327));
  hr();
  var t = $o(e, 0);
  if (!(t & 1)) return Ze(e, ye()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = oa(e);
    r !== 0 && ((t = r), (n = Aa(e, r)));
  }
  if (n === 1) throw ((n = Ei), Nn(e, 0), nn(e, t), Ze(e, ye()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    bn(e, Ye, zt),
    Ze(e, ye()),
    null
  );
}
function Bu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((kr = ye() + 500), bl && wn());
  }
}
function jn(e) {
  on !== null && on.tag === 0 && !(J & 6) && hr();
  var t = J;
  J |= 1;
  var n = pt.transition,
    r = te;
  try {
    if (((pt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (pt.transition = n), (J = t), !(J & 6) && wn();
  }
}
function Wu() {
  (rt = sr.current), ae(sr);
}
function Nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rv(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((ku(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Go();
          break;
        case 3:
          wr(), ae(Qe), ae(Fe), Ru();
          break;
        case 5:
          Nu(r);
          break;
        case 4:
          wr();
          break;
        case 13:
          ae(ce);
          break;
        case 19:
          ae(ce);
          break;
        case 10:
          Cu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ve = e = hn(e.current, null)),
    (Pe = rt = t),
    (Ee = 0),
    (Ei = null),
    (zu = Pl = Dn = 0),
    (Ye = ni = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function Nh(e, t) {
  do {
    var n = ve;
    try {
      if ((bu(), (To.current = il), rl)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        rl = !1;
      }
      if (
        ((Mn = 0),
        (xe = we = pe = null),
        (ei = !1),
        (vi = 0),
        (Fu.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (Ei = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = Pe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = Ed(l);
          if (w !== null) {
            (w.flags &= -257),
              kd(w, l, s, o, t),
              w.mode & 1 && wd(o, u, t),
              (t = w),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              wd(o, u, t), Hu();
              break e;
            }
            a = Error(O(426));
          }
        } else if (ue && s.mode & 1) {
          var b = Ed(l);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              kd(b, l, s, o, t),
              _u(Er(a, s));
            break e;
          }
        }
        (o = a = Er(a, s)),
          Ee !== 4 && (Ee = 2),
          ni === null ? (ni = [o]) : ni.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = ph(o, a, t);
              pd(o, h);
              break e;
            case 1:
              s = a;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (fn === null || !fn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = hh(o, s, t);
                pd(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ah(n);
    } catch (C) {
      (t = C), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Rh() {
  var e = ol.current;
  return (ol.current = il), e === null ? il : e;
}
function Hu() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    be === null || (!(Dn & 268435455) && !(Pl & 268435455)) || nn(be, Pe);
}
function al(e, t) {
  var n = J;
  J |= 2;
  var r = Rh();
  (be !== e || Pe !== t) && ((zt = null), Nn(e, t));
  do
    try {
      Ov();
      break;
    } catch (i) {
      Nh(e, i);
    }
  while (1);
  if ((bu(), (J = n), (ol.current = r), ve !== null)) throw Error(O(261));
  return (be = null), (Pe = 0), Ee;
}
function Ov() {
  for (; ve !== null; ) Lh(ve);
}
function Pv() {
  for (; ve !== null && !ey(); ) Lh(ve);
}
function Lh(e) {
  var t = Dh(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ah(e) : (ve = t),
    (Fu.current = null);
}
function Ah(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = kv(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (ve = null);
        return;
      }
    } else if (((n = Ev(n, t, rt)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function bn(e, t, n) {
  var r = te,
    i = pt.transition;
  try {
    (pt.transition = null), (te = 1), Nv(e, t, n, r);
  } finally {
    (pt.transition = i), (te = r);
  }
  return null;
}
function Nv(e, t, n, r) {
  do hr();
  while (on !== null);
  if (J & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (cy(e, o),
    e === be && ((ve = be = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      no ||
      ((no = !0),
      jh(Ho, function () {
        return hr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = pt.transition), (pt.transition = null);
    var l = te;
    te = 1;
    var s = J;
    (J |= 4),
      (Fu.current = null),
      xv(e, n),
      Th(n, e),
      Qy(da),
      (Vo = !!ca),
      (da = ca = null),
      (e.current = n),
      bv(n),
      ty(),
      (J = s),
      (te = l),
      (pt.transition = o);
  } else e.current = n;
  if (
    (no && ((no = !1), (on = e), (sl = i)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    iy(n.stateNode),
    Ze(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ll) throw ((ll = !1), (e = Ra), (Ra = null), e);
  return (
    sl & 1 && e.tag !== 0 && hr(),
    (o = e.pendingLanes),
    o & 1 ? (e === La ? ri++ : ((ri = 0), (La = e))) : (ri = 0),
    wn(),
    null
  );
}
function hr() {
  if (on !== null) {
    var e = fp(sl),
      t = pt.transition,
      n = te;
    try {
      if (((pt.transition = null), (te = 16 > e ? 16 : e), on === null))
        var r = !1;
      else {
        if (((e = on), (on = null), (sl = 0), J & 6)) throw Error(O(331));
        var i = J;
        for (J |= 4, I = e.current; I !== null; ) {
          var o = I,
            l = o.child;
          if (I.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (I = u; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(8, d, o);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (I = c);
                  else
                    for (; I !== null; ) {
                      d = I;
                      var f = d.sibling,
                        w = d.return;
                      if ((xh(d), d === u)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = w), (I = f);
                        break;
                      }
                      I = w;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var b = g.sibling;
                    (g.sibling = null), (g = b);
                  } while (g !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (I = l);
          else
            e: for (; I !== null; ) {
              if (((o = I), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ti(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (I = h);
                break e;
              }
              I = o.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          l = I;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (I = m);
          else
            e: for (l = p; I !== null; ) {
              if (((s = I), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ol(9, s);
                  }
                } catch (C) {
                  me(s, s.return, C);
                }
              if (s === l) {
                I = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (I = k);
                break e;
              }
              I = s.return;
            }
        }
        if (
          ((J = i), wn(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        )
          try {
            Mt.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (pt.transition = t);
    }
  }
  return !1;
}
function Dd(e, t, n) {
  (t = Er(n, t)),
    (t = ph(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = We()),
    e !== null && (Oi(e, 1, t), Ze(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Dd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Dd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = Er(n, e)),
            (e = hh(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = We()),
            t !== null && (Oi(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Pe & n) === n &&
      (Ee === 4 || (Ee === 3 && (Pe & 130023424) === Pe && 500 > ye() - Uu)
        ? Nn(e, 0)
        : (zu |= n)),
    Ze(e, t);
}
function Mh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qi), (qi <<= 1), !(qi & 130023424) && (qi = 4194304))
      : (t = 1));
  var n = We();
  (e = Kt(e, t)), e !== null && (Oi(e, t, n), Ze(e, n));
}
function Lv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mh(e, n);
}
function Av(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Mh(e, n);
}
var Dh;
Dh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), wv(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), ue && t.flags & 1048576 && Fp(t, Zo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Po(e, t), (e = t.pendingProps);
      var i = yr(t, Fe.current);
      pr(t, n), (i = Au(null, t, r, e, i, n));
      var o = Mu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((o = !0), Qo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ou(t),
            (i.updater = Cl),
            (t.stateNode = i),
            (i._reactInternals = t),
            wa(t, r, e, n),
            (t = _a(null, t, r, !0, o, n)))
          : ((t.tag = 0), ue && o && Eu(t), Be(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Po(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Dv(r)),
          (e = wt(r, e)),
          i)
        ) {
          case 0:
            t = ka(null, t, r, e, n);
            break e;
          case 1:
            t = bd(null, t, r, e, n);
            break e;
          case 11:
            t = _d(null, t, r, e, n);
            break e;
          case 14:
            t = xd(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        ka(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        bd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((vh(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Wp(e, t),
          tl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Er(Error(O(423)), t)), (t = Cd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Er(Error(O(424)), t)), (t = Cd(e, t, r, n, i));
            break e;
          } else
            for (
              ot = cn(t.stateNode.containerInfo.firstChild),
                lt = t,
                ue = !0,
                kt = null,
                n = qp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vr(), r === i)) {
            t = Yt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kp(t),
        e === null && ya(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        fa(r, i) ? (l = null) : o !== null && fa(r, o) && (t.flags |= 32),
        yh(e, t),
        Be(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ya(t), null;
    case 13:
      return Sh(e, t, n);
    case 4:
      return (
        Pu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sr(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        _d(e, t, r, i, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          le(Jo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (bt(o.value, l)) {
            if (o.children === i.children && !Qe.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ht(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      va(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  va(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Be(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        pr(t, n),
        (i = mt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = wt(r, t.pendingProps)),
        (i = wt(r.type, i)),
        xd(e, t, r, i, n)
      );
    case 15:
      return mh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Po(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), Qo(t)) : (e = !1),
        pr(t, n),
        $p(t, r, i),
        wa(t, r, i, n),
        _a(null, t, r, !0, e, n)
      );
    case 19:
      return wh(e, t, n);
    case 22:
      return gh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function jh(e, t) {
  return ap(e, t);
}
function Mv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, n, r) {
  return new Mv(e, t, n, r);
}
function $u(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dv(e) {
  if (typeof e == "function") return $u(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uu)) return 11;
    if (e === cu) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Lo(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) $u(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Xn:
        return Rn(n.children, i, o, t);
      case au:
        (l = 8), (i |= 8);
        break;
      case $s:
        return (
          (e = ft(12, n, t, i | 2)), (e.elementType = $s), (e.lanes = o), e
        );
      case Vs:
        return (e = ft(13, n, t, i)), (e.elementType = Vs), (e.lanes = o), e;
      case qs:
        return (e = ft(19, n, t, i)), (e.elementType = qs), (e.lanes = o), e;
      case Vf:
        return Nl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hf:
              l = 10;
              break e;
            case $f:
              l = 9;
              break e;
            case uu:
              l = 11;
              break e;
            case cu:
              l = 14;
              break e;
            case Jt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rn(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = Vf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bs(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function Cs(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ls(0)),
    (this.expirationTimes = ls(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ls(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Vu(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new jv(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ft(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ou(o),
    e
  );
}
function Iv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ih(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return jp(e, n, t);
  }
  return t;
}
function Fh(e, t, n, r, i, o, l, s, a) {
  return (
    (e = Vu(n, r, !0, e, i, o, l, s, a)),
    (e.context = Ih(null)),
    (n = e.current),
    (r = We()),
    (i = pn(n)),
    (o = Ht(r, i)),
    (o.callback = t ?? null),
    dn(n, o, i),
    (e.current.lanes = i),
    Oi(e, i, r),
    Ze(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var i = t.current,
    o = We(),
    l = pn(i);
  return (
    (n = Ih(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(i, t, l)),
    e !== null && (xt(e, i, l, o), Co(e, i, l)),
    l
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qu(e, t) {
  jd(e, t), (e = e.alternate) && jd(e, t);
}
function Fv() {
  return null;
}
var zh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ku(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Ku.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Rl(e, t, null, null);
};
Ll.prototype.unmount = Ku.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function () {
      Rl(null, e, null, null);
    }),
      (t[qt] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && yp(e);
  }
};
function Yu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Al(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Id() {}
function zv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ul(l);
        o.call(u);
      };
    }
    var l = Fh(t, r, e, 0, null, !1, !1, "", Id);
    return (
      (e._reactRootContainer = l),
      (e[qt] = l.current),
      pi(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = ul(a);
      s.call(u);
    };
  }
  var a = Vu(e, 0, !1, null, null, !1, !1, "", Id);
  return (
    (e._reactRootContainer = a),
    (e[qt] = a.current),
    pi(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Rl(t, a, n, r);
    }),
    a
  );
}
function Ml(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = ul(l);
        s.call(a);
      };
    }
    Rl(t, l, e, i);
  } else l = zv(n, t, e, i, r);
  return ul(l);
}
pp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kr(t.pendingLanes);
        n !== 0 &&
          (pu(t, n | 1), Ze(t, ye()), !(J & 6) && ((kr = ye() + 500), wn()));
      }
      break;
    case 13:
      jn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var i = We();
          xt(r, e, 1, i);
        }
      }),
        qu(e, 1);
  }
};
hu = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = We();
      xt(t, e, 134217728, n);
    }
    qu(e, 134217728);
  }
};
hp = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = We();
      xt(n, e, t, r);
    }
    qu(e, t);
  }
};
mp = function () {
  return te;
};
gp = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
na = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Gs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = xl(r);
            if (!i) throw Error(O(90));
            Kf(r), Gs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Gf(e, n);
      break;
    case "select":
      (t = n.value), t != null && ur(e, !!n.multiple, t, !1);
  }
};
np = Bu;
rp = jn;
var Uv = { usingClientEntryPoint: !1, Events: [Ni, tr, xl, ep, tp, Bu] },
  zr = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Bv = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Fv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ro.isDisabled && ro.supportsFiber)
    try {
      (wl = ro.inject(Bv)), (Mt = ro);
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uv;
at.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yu(t)) throw Error(O(200));
  return Iv(e, t, null, n);
};
at.createRoot = function (e, t) {
  if (!Yu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = zh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Vu(e, 1, !1, null, null, n, !1, r, i)),
    (e[qt] = t.current),
    pi(e.nodeType === 8 ? e.parentNode : e),
    new Ku(t)
  );
};
at.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = lp(t)), (e = e === null ? null : e.stateNode), e;
};
at.flushSync = function (e) {
  return jn(e);
};
at.hydrate = function (e, t, n) {
  if (!Al(t)) throw Error(O(200));
  return Ml(null, e, t, !0, n);
};
at.hydrateRoot = function (e, t, n) {
  if (!Yu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = zh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Fh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[qt] = t.current),
    pi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ll(t);
};
at.render = function (e, t, n) {
  if (!Al(t)) throw Error(O(200));
  return Ml(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
  if (!Al(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (jn(function () {
        Ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qt] = null);
        });
      }),
      !0)
    : !1;
};
at.unstable_batchedUpdates = Bu;
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Al(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ml(e, t, n, !1, r);
};
at.version = "18.2.0-next-9e3b772b8-20220608";
function Uh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh);
    } catch (e) {
      console.error(e);
    }
}
Uh(), (Ff.exports = at);
var Bh = Ff.exports,
  Fd = Bh;
(Ws.createRoot = Fd.createRoot), (Ws.hydrateRoot = Fd.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ki() {
  return (
    (ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ki.apply(this, arguments)
  );
}
var ln;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ln || (ln = {}));
const zd = "popstate";
function Wv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: s } = r.location;
    return Da(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : cl(i);
  }
  return $v(t, n, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Gu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Hv() {
  return Math.random().toString(36).substr(2, 8);
}
function Ud(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Da(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ki(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Tr(t) : t,
      { state: n, key: (t && t.key) || r || Hv() }
    )
  );
}
function cl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Tr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function $v(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = ln.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), l.replaceState(ki({}, l.state, { idx: u }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function c() {
    s = ln.Pop;
    let b = d(),
      h = b == null ? null : b - u;
    (u = b), a && a({ action: s, location: g.location, delta: h });
  }
  function f(b, h) {
    s = ln.Push;
    let p = Da(g.location, b, h);
    n && n(p, b), (u = d() + 1);
    let m = Ud(p, u),
      k = g.createHref(p);
    try {
      l.pushState(m, "", k);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(k);
    }
    o && a && a({ action: s, location: g.location, delta: 1 });
  }
  function w(b, h) {
    s = ln.Replace;
    let p = Da(g.location, b, h);
    n && n(p, b), (u = d());
    let m = Ud(p, u),
      k = g.createHref(p);
    l.replaceState(m, "", k),
      o && a && a({ action: s, location: g.location, delta: 0 });
  }
  function y(b) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof b == "string" ? b : cl(b);
    return (
      ge(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(b) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(zd, c),
        (a = b),
        () => {
          i.removeEventListener(zd, c), (a = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: y,
    encodeLocation(b) {
      let h = y(b);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: w,
    go(b) {
      return l.go(b);
    },
  };
  return g;
}
var Bd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Bd || (Bd = {}));
function Vv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Tr(t) : t,
    i = _i(r.pathname || "/", n);
  if (i == null) return null;
  let o = Wh(e);
  qv(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s) l = t0(o[s], r0(i));
  return l;
}
function Wh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (ge(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = mn([r, a.relativePath]),
      d = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (ge(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Wh(o.children, t, d, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Jv(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let a of Hh(o.path)) i(o, l, a);
    }),
    t
  );
}
function Hh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Hh(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function qv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : e0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Kv = /^:\w+$/,
  Yv = 3,
  Gv = 2,
  Qv = 1,
  Xv = 10,
  Zv = -2,
  Wd = (e) => e === "*";
function Jv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Wd) && (r += Zv),
    t && (r += Gv),
    n
      .filter((i) => !Wd(i))
      .reduce((i, o) => i + (Kv.test(o) ? Yv : o === "" ? Qv : Xv), r)
  );
}
function e0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function t0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      d = ja(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let c = s.route;
    o.push({
      params: r,
      pathname: mn([i, d.pathname]),
      pathnameBase: s0(mn([i, d.pathnameBase])),
      route: c,
    }),
      d.pathnameBase !== "/" && (i = mn([i, d.pathnameBase]));
  }
  return o;
}
function ja(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = n0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: f, isOptional: w } = d;
      if (f === "*") {
        let g = s[c] || "";
        l = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[c];
      return w && !y ? (u[f] = void 0) : (u[f] = i0(y || "", f)), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function n0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Gu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function r0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Gu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function i0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Gu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function _i(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function o0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Tr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : l0(n, t)) : t,
    search: a0(r),
    hash: u0(i),
  };
}
function l0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ts(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $h(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Vh(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Tr(e))
    : ((i = ki({}, e)),
      ge(
        !i.pathname || !i.pathname.includes("?"),
        Ts("?", "pathname", "search", i)
      ),
      ge(
        !i.pathname || !i.pathname.includes("#"),
        Ts("#", "pathname", "hash", i)
      ),
      ge(!i.search || !i.search.includes("#"), Ts("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let c = t.length - 1;
    if (l.startsWith("..")) {
      let f = l.split("/");
      for (; f[0] === ".."; ) f.shift(), (c -= 1);
      i.pathname = f.join("/");
    }
    s = c >= 0 ? t[c] : "/";
  }
  let a = o0(i, s),
    u = l && l !== "/" && l.endsWith("/"),
    d = (o || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  s0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  a0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  u0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function c0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qh = ["post", "put", "patch", "delete"];
new Set(qh);
const d0 = ["get", ...qh];
new Set(d0);
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dl() {
  return (
    (dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dl.apply(this, arguments)
  );
}
const Dl = _.createContext(null),
  Kh = _.createContext(null),
  zn = _.createContext(null),
  jl = _.createContext(null),
  Un = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Yh = _.createContext(null);
function f0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Li() || ge(!1);
  let { basename: r, navigator: i } = _.useContext(zn),
    { hash: o, pathname: l, search: s } = Il(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : mn([r, l])),
    i.createHref({ pathname: a, search: s, hash: o })
  );
}
function Li() {
  return _.useContext(jl) != null;
}
function Ai() {
  return Li() || ge(!1), _.useContext(jl).location;
}
function Gh(e) {
  _.useContext(zn).static || _.useLayoutEffect(e);
}
function p0() {
  let { isDataRoute: e } = _.useContext(Un);
  return e ? C0() : h0();
}
function h0() {
  Li() || ge(!1);
  let e = _.useContext(Dl),
    { basename: t, navigator: n } = _.useContext(zn),
    { matches: r } = _.useContext(Un),
    { pathname: i } = Ai(),
    o = JSON.stringify($h(r).map((a) => a.pathnameBase)),
    l = _.useRef(!1);
  return (
    Gh(() => {
      l.current = !0;
    }),
    _.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let d = Vh(a, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : mn([t, d.pathname])),
          (u.replace ? n.replace : n.push)(d, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
function Il(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = _.useContext(Un),
    { pathname: i } = Ai(),
    o = JSON.stringify($h(r).map((l) => l.pathnameBase));
  return _.useMemo(() => Vh(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function m0(e, t) {
  return g0(e, t);
}
function g0(e, t, n) {
  Li() || ge(!1);
  let { navigator: r } = _.useContext(zn),
    { matches: i } = _.useContext(Un),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Ai(),
    u;
  if (t) {
    var d;
    let g = typeof t == "string" ? Tr(t) : t;
    s === "/" || ((d = g.pathname) != null && d.startsWith(s)) || ge(!1),
      (u = g);
  } else u = a;
  let c = u.pathname || "/",
    f = s === "/" ? c : c.slice(s.length) || "/",
    w = Vv(e, { pathname: f }),
    y = E0(
      w &&
        w.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, l, g.params),
            pathname: mn([
              s,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : mn([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && y
    ? _.createElement(
        jl.Provider,
        {
          value: {
            location: dl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: ln.Pop,
          },
        },
        y
      )
    : y;
}
function y0() {
  let e = b0(),
    t = c0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: i }, n) : null,
    o
  );
}
const v0 = _.createElement(y0, null);
class S0 extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? _.createElement(
          Un.Provider,
          { value: this.props.routeContext },
          _.createElement(Yh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function w0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(Dl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Un.Provider, { value: t }, r)
  );
}
function E0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let s = o.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id])
    );
    s >= 0 || ge(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
  }
  return o.reduceRight((s, a, u) => {
    let d = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      c = null;
    n && (c = a.route.errorElement || v0);
    let f = t.concat(o.slice(0, u + 1)),
      w = () => {
        let y;
        return (
          d
            ? (y = c)
            : a.route.Component
            ? (y = _.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = s),
          _.createElement(w0, {
            match: a,
            routeContext: { outlet: s, matches: f, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? _.createElement(S0, {
          location: n.location,
          revalidation: n.revalidation,
          component: c,
          error: d,
          children: w(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var Qh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qh || {}),
  fl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(fl || {});
function k0(e) {
  let t = _.useContext(Dl);
  return t || ge(!1), t;
}
function _0(e) {
  let t = _.useContext(Kh);
  return t || ge(!1), t;
}
function x0(e) {
  let t = _.useContext(Un);
  return t || ge(!1), t;
}
function Xh(e) {
  let t = x0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ge(!1), n.route.id;
}
function b0() {
  var e;
  let t = _.useContext(Yh),
    n = _0(fl.UseRouteError),
    r = Xh(fl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function C0() {
  let { router: e } = k0(Qh.UseNavigateStable),
    t = Xh(fl.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Gh(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, dl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Zh(e) {
  ge(!1);
}
function T0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = ln.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  Li() && ge(!1);
  let s = t.replace(/^\/*/, "/"),
    a = _.useMemo(() => ({ basename: s, navigator: o, static: l }), [s, o, l]);
  typeof r == "string" && (r = Tr(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: c = "",
      state: f = null,
      key: w = "default",
    } = r,
    y = _.useMemo(() => {
      let g = _i(u, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: d, hash: c, state: f, key: w },
            navigationType: i,
          };
    }, [s, u, d, c, f, w, i]);
  return y == null
    ? null
    : _.createElement(
        zn.Provider,
        { value: a },
        _.createElement(jl.Provider, { children: n, value: y })
      );
}
function O0(e) {
  let { children: t, location: n } = e;
  return m0(Ia(t), n);
}
new Promise(() => {});
function Ia(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (r, i) => {
      if (!_.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === _.Fragment) {
        n.push.apply(n, Ia(r.props.children, o));
        return;
      }
      r.type !== Zh && ge(!1), !r.props.index || !r.props.children || ge(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Ia(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
function Jh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function P0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function N0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !P0(e);
}
const R0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  L0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  A0 = _.createContext({ isTransitioning: !1 }),
  M0 = "startTransition",
  Hd = Lg[M0];
function D0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = _.useRef();
  o.current == null && (o.current = Wv({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, a] = _.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    d = _.useCallback(
      (c) => {
        u && Hd ? Hd(() => a(c)) : a(c);
      },
      [a, u]
    );
  return (
    _.useLayoutEffect(() => l.listen(d), [l, d]),
    _.createElement(T0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
const j0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  I0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  em = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = t,
      f = Jh(t, R0),
      { basename: w } = _.useContext(zn),
      y,
      g = !1;
    if (typeof u == "string" && I0.test(u) && ((y = u), j0))
      try {
        let m = new URL(window.location.href),
          k = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          C = _i(k.pathname, w);
        k.origin === m.origin && C != null
          ? (u = C + k.search + k.hash)
          : (g = !0);
      } catch {}
    let b = f0(u, { relative: i }),
      h = z0(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: c,
      });
    function p(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return _.createElement(
      "a",
      pl({}, f, { href: y || b, onClick: g || o ? r : p, ref: n, target: a })
    );
  }),
  tm = _.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: l = !1,
        style: s,
        to: a,
        unstable_viewTransition: u,
        children: d,
      } = t,
      c = Jh(t, L0),
      f = Il(a, { relative: c.relative }),
      w = Ai(),
      y = _.useContext(Kh),
      { navigator: g } = _.useContext(zn),
      b = y != null && U0(f) && u === !0,
      h = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
      p = w.pathname,
      m =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    i ||
      ((p = p.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (h = h.toLowerCase()));
    let k = p === h || (!l && p.startsWith(h) && p.charAt(h.length) === "/"),
      C =
        m != null &&
        (m === h || (!l && m.startsWith(h) && m.charAt(h.length) === "/")),
      A = { isActive: k, isPending: C, isTransitioning: b },
      M = k ? r : void 0,
      T;
    typeof o == "function"
      ? (T = o(A))
      : (T = [
          o,
          k ? "active" : null,
          C ? "pending" : null,
          b ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let V = typeof s == "function" ? s(A) : s;
    return _.createElement(
      em,
      pl({}, c, {
        "aria-current": M,
        className: T,
        ref: n,
        style: V,
        to: a,
        unstable_viewTransition: u,
      }),
      typeof d == "function" ? d(A) : d
    );
  });
var Fa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Fa || (Fa = {}));
var $d;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($d || ($d = {}));
function F0(e) {
  let t = _.useContext(Dl);
  return t || ge(!1), t;
}
function z0(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = p0(),
    u = Ai(),
    d = Il(e, { relative: l });
  return _.useCallback(
    (c) => {
      if (N0(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : cl(u) === cl(d);
        a(e, {
          replace: f,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [u, a, d, r, i, n, e, o, l, s]
  );
}
function U0(e, t) {
  t === void 0 && (t = {});
  let n = _.useContext(A0);
  n == null && ge(!1);
  let { basename: r } = F0(Fa.useViewTransitionState),
    i = Il(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = _i(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = _i(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ja(i.pathname, l) != null || ja(i.pathname, o) != null;
}
var nm = { exports: {} },
  B0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  W0 = B0,
  H0 = W0;
function rm() {}
function im() {}
im.resetWarningCache = rm;
var $0 = function () {
  function e(r, i, o, l, s, a) {
    if (a !== H0) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: im,
    resetWarningCache: rm,
  };
  return (n.PropTypes = n), n;
};
nm.exports = $0();
var V0 = nm.exports;
const K = vl(V0);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var za =
  function () {
    return (
      (za =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      za.apply(this, arguments)
    );
  };
function q0(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
var mr = "",
  ii = null,
  Ao = null,
  om = null;
function Qu() {
  (mr = ""),
    ii !== null && ii.disconnect(),
    Ao !== null && (window.clearTimeout(Ao), (Ao = null));
}
function Vd(e) {
  var t = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"],
    n = ["A", "AREA"];
  return (
    (t.includes(e.tagName) && !e.hasAttribute("disabled")) ||
    (n.includes(e.tagName) && e.hasAttribute("href"))
  );
}
function qd() {
  var e = null;
  if (mr === "#") e = document.body;
  else {
    var t = mr.replace("#", "");
    (e = document.getElementById(t)),
      e === null && mr === "#top" && (e = document.body);
  }
  if (e !== null) {
    om(e);
    var n = e.getAttribute("tabindex");
    return (
      n === null && !Vd(e) && e.setAttribute("tabindex", -1),
      e.focus({ preventScroll: !0 }),
      n === null && !Vd(e) && (e.blur(), e.removeAttribute("tabindex")),
      Qu(),
      !0
    );
  }
  return !1;
}
function K0(e) {
  window.setTimeout(function () {
    qd() === !1 &&
      (ii === null && (ii = new MutationObserver(qd)),
      ii.observe(document, { attributes: !0, childList: !0, subtree: !0 }),
      (Ao = window.setTimeout(function () {
        Qu();
      }, e || 1e4)));
  }, 0);
}
function lm(e) {
  return H.forwardRef(function (t, n) {
    var r = "";
    typeof t.to == "string" && t.to.includes("#")
      ? (r = "#" + t.to.split("#").slice(1).join("#"))
      : typeof t.to == "object" &&
        typeof t.to.hash == "string" &&
        (r = t.to.hash);
    var i = {};
    e === tm &&
      (i.isActive = function (s, a) {
        return s && s.isExact && a.hash === r;
      });
    function o(s) {
      Qu(),
        (mr = t.elementId ? "#" + t.elementId : r),
        t.onClick && t.onClick(s),
        mr !== "" &&
          !s.defaultPrevented &&
          s.button === 0 &&
          (!t.target || t.target === "_self") &&
          !(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey) &&
          ((om =
            t.scroll ||
            function (a) {
              return t.smooth
                ? a.scrollIntoView({ behavior: "smooth" })
                : a.scrollIntoView();
            }),
          K0(t.timeout));
    }
    var l = q0(t, ["scroll", "smooth", "timeout", "elementId"]);
    return H.createElement(e, za({}, i, l, { onClick: o, ref: n }), t.children);
  });
}
var Y0 = lm(em);
lm(tm);
const sm = ({ sections: e, currentSection: t, setCurrentSection: n }) =>
  E.jsx("nav", {
    className: "navbar font-nav",
    children: e.map((r) => {
      const i = t === r ? "active" : "";
      return E.jsx(
        Y0,
        {
          smooth: !0,
          to: "/#" + r,
          className: "nav-link " + i,
          onClick: () => n(r),
          children: r,
        },
        r
      );
    }),
  });
sm.propTypes = {
  sections: K.array,
  currentSection: K.string,
  setCurrentSection: K.func,
};
const Fl = (e, t = window) => {
    _.useEffect(() => {
      const n = () => {
        const r =
          t.scrollY || t.scrollY === 0
            ? t.scrollY
            : -t.firstChild.getBoundingClientRect().top;
        e(r);
      };
      return (
        t.removeEventListener("scroll", n),
        t.addEventListener("scroll", n),
        () => t.removeEventListener("scroll", n)
      );
    }, [t, e]);
  },
  G0 = "/assets/strange-quark-logo-blackhole-light.svg",
  Q0 = "/assets/strange-quark-logo-blackhole-dark.svg";
const am = ({ speed: e, themeIsDark: t, refContainer: n }) => {
  const [r, i] = _.useState(360),
    [o, l] = _.useState({ transform: "rotate(" + r + "deg)" }),
    s = t ? Q0 : G0;
  return (
    Fl(() => {
      let a = r == 0 ? 359.5 : r - e;
      i(a);
    }, n),
    _.useEffect(() => {
      l({ transform: "rotate(" + r + "deg)" });
    }, [r]),
    E.jsx("img", { id: "logo", src: s, style: o, alt: "" })
  );
};
am.propTypes = { speed: K.number, themeIsDark: K.bool, refContainer: K.object };
const X0 = () =>
  E.jsxs("section", {
    id: "intro",
    children: [
      E.jsx("div", {
        className: "title-wrap",
        children: E.jsxs("h1", {
          className: "font-heading",
          children: [
            "Kae",
            E.jsx("br", {}),
            E.jsx("span", {
              className: "font-heading",
              children: "Unterseher",
            }),
          ],
        }),
      }),
      E.jsxs("h2", {
        className: "font-heading",
        children: [
          "Full-Stack",
          E.jsx("br", {}),
          E.jsx("span", {
            className: "font-heading line-2",
            children: "Developer",
          }),
          E.jsx("span", { className: "font-fancy", children: "&" }),
          E.jsx("span", {
            className: "font-heading leading-[1.2rem] block",
            children: "Tutor",
          }),
        ],
      }),
    ],
  });
var um = { exports: {} };
(function (e, t) {
  (function (r, i) {
    e.exports = i(_, Bh);
  })(gg, function (n, r) {
    return (function (i) {
      var o = {};
      function l(s) {
        if (o[s]) return o[s].exports;
        var a = (o[s] = { i: s, l: !1, exports: {} });
        return i[s].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
      }
      return (
        (l.m = i),
        (l.c = o),
        (l.d = function (s, a, u) {
          l.o(s, a) || Object.defineProperty(s, a, { enumerable: !0, get: u });
        }),
        (l.r = function (s) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(s, "__esModule", { value: !0 });
        }),
        (l.t = function (s, a) {
          if (
            (a & 1 && (s = l(s)),
            a & 8 || (a & 4 && typeof s == "object" && s && s.__esModule))
          )
            return s;
          var u = Object.create(null);
          if (
            (l.r(u),
            Object.defineProperty(u, "default", { enumerable: !0, value: s }),
            a & 2 && typeof s != "string")
          )
            for (var d in s)
              l.d(
                u,
                d,
                function (c) {
                  return s[c];
                }.bind(null, d)
              );
          return u;
        }),
        (l.n = function (s) {
          var a =
            s && s.__esModule
              ? function () {
                  return s.default;
                }
              : function () {
                  return s;
                };
          return l.d(a, "a", a), a;
        }),
        (l.o = function (s, a) {
          return Object.prototype.hasOwnProperty.call(s, a);
        }),
        (l.p = ""),
        l((l.s = 4))
      );
    })([
      function (i, o, l) {
        i.exports = l(5)();
      },
      function (i, o) {
        i.exports = n;
      },
      function (i, o) {
        i.exports = r;
      },
      function (i, o) {
        i.exports = function (l, s, a) {
          var u = l.direction,
            d = l.value;
          switch (u) {
            case "top":
              return (
                a.top + d < s.top &&
                a.bottom > s.bottom &&
                a.left < s.left &&
                a.right > s.right
              );
            case "left":
              return (
                a.left + d < s.left &&
                a.bottom > s.bottom &&
                a.top < s.top &&
                a.right > s.right
              );
            case "bottom":
              return (
                a.bottom - d > s.bottom &&
                a.left < s.left &&
                a.right > s.right &&
                a.top < s.top
              );
            case "right":
              return (
                a.right - d > s.right &&
                a.left < s.left &&
                a.top < s.top &&
                a.bottom > s.bottom
              );
          }
        };
      },
      function (i, o, l) {
        l.r(o),
          l.d(o, "default", function () {
            return j;
          });
        var s = l(1),
          a = l.n(s),
          u = l(2),
          d = l.n(u),
          c = l(0),
          f = l.n(c),
          w = l(3),
          y = l.n(w);
        function g(D) {
          return (
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? (g = function (q) {
                  return typeof q;
                })
              : (g = function (q) {
                  return q &&
                    typeof Symbol == "function" &&
                    q.constructor === Symbol &&
                    q !== Symbol.prototype
                    ? "symbol"
                    : typeof q;
                }),
            g(D)
          );
        }
        function b(D, W) {
          if (!(D instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(D, W) {
          for (var q = 0; q < W.length; q++) {
            var N = W[q];
            (N.enumerable = N.enumerable || !1),
              (N.configurable = !0),
              "value" in N && (N.writable = !0),
              Object.defineProperty(D, N.key, N);
          }
        }
        function p(D, W, q) {
          return W && h(D.prototype, W), q && h(D, q), D;
        }
        function m(D, W) {
          return W && (g(W) === "object" || typeof W == "function") ? W : C(D);
        }
        function k(D) {
          return (
            (k = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (q) {
                  return q.__proto__ || Object.getPrototypeOf(q);
                }),
            k(D)
          );
        }
        function C(D) {
          if (D === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return D;
        }
        function A(D, W) {
          if (typeof W != "function" && W !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (D.prototype = Object.create(W && W.prototype, {
            constructor: { value: D, writable: !0, configurable: !0 },
          })),
            W && M(D, W);
        }
        function M(D, W) {
          return (
            (M =
              Object.setPrototypeOf ||
              function (N, ke) {
                return (N.__proto__ = ke), N;
              }),
            M(D, W)
          );
        }
        function T(D, W, q) {
          return (
            W in D
              ? Object.defineProperty(D, W, {
                  value: q,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (D[W] = q),
            D
          );
        }
        function V(D) {
          return (
            D.width === void 0 && (D.width = D.right - D.left),
            D.height === void 0 && (D.height = D.bottom - D.top),
            D
          );
        }
        var j = (function (D) {
          A(W, D);
          function W(q) {
            var N;
            return (
              b(this, W),
              (N = m(this, k(W).call(this, q))),
              T(C(N), "getContainer", function () {
                return N.props.containment || window;
              }),
              T(C(N), "addEventListener", function (ke, ne, re, L) {
                N.debounceCheck || (N.debounceCheck = {});
                var R,
                  $,
                  B = function () {
                    (R = null), N.check();
                  };
                L > -1
                  ? ($ = function () {
                      R || (R = setTimeout(B, L || 0));
                    })
                  : ($ = function () {
                      clearTimeout(R), (R = setTimeout(B, re || 0));
                    });
                var ie = {
                  target: ke,
                  fn: $,
                  getLastTimeout: function () {
                    return R;
                  },
                };
                ke.addEventListener(ne, ie.fn), (N.debounceCheck[ne] = ie);
              }),
              T(C(N), "startWatching", function () {
                N.debounceCheck ||
                  N.interval ||
                  (N.props.intervalCheck &&
                    (N.interval = setInterval(N.check, N.props.intervalDelay)),
                  N.props.scrollCheck &&
                    N.addEventListener(
                      N.getContainer(),
                      "scroll",
                      N.props.scrollDelay,
                      N.props.scrollThrottle
                    ),
                  N.props.resizeCheck &&
                    N.addEventListener(
                      window,
                      "resize",
                      N.props.resizeDelay,
                      N.props.resizeThrottle
                    ),
                  !N.props.delayedCall && N.check());
              }),
              T(C(N), "stopWatching", function () {
                if (N.debounceCheck) {
                  for (var ke in N.debounceCheck)
                    if (N.debounceCheck.hasOwnProperty(ke)) {
                      var ne = N.debounceCheck[ke];
                      clearTimeout(ne.getLastTimeout()),
                        ne.target.removeEventListener(ke, ne.fn),
                        (N.debounceCheck[ke] = null);
                    }
                }
                (N.debounceCheck = null),
                  N.interval && (N.interval = clearInterval(N.interval));
              }),
              T(C(N), "check", function () {
                var ke = N.node,
                  ne,
                  re;
                if (!ke) return N.state;
                if (
                  ((ne = V(N.roundRectDown(ke.getBoundingClientRect()))),
                  N.props.containment)
                ) {
                  var L = N.props.containment.getBoundingClientRect();
                  re = {
                    top: L.top,
                    left: L.left,
                    bottom: L.bottom,
                    right: L.right,
                  };
                } else re = { top: 0, left: 0, bottom: window.innerHeight || document.documentElement.clientHeight, right: window.innerWidth || document.documentElement.clientWidth };
                var R = N.props.offset || {},
                  $ = g(R) === "object";
                $ &&
                  ((re.top += R.top || 0),
                  (re.left += R.left || 0),
                  (re.bottom -= R.bottom || 0),
                  (re.right -= R.right || 0));
                var B = {
                    top: ne.top >= re.top,
                    left: ne.left >= re.left,
                    bottom: ne.bottom <= re.bottom,
                    right: ne.right <= re.right,
                  },
                  ie = ne.height > 0 && ne.width > 0,
                  G = ie && B.top && B.left && B.bottom && B.right;
                if (ie && N.props.partialVisibility) {
                  var Ce =
                    ne.top <= re.bottom &&
                    ne.bottom >= re.top &&
                    ne.left <= re.right &&
                    ne.right >= re.left;
                  typeof N.props.partialVisibility == "string" &&
                    (Ce = B[N.props.partialVisibility]),
                    (G = N.props.minTopValue
                      ? Ce && ne.top <= re.bottom - N.props.minTopValue
                      : Ce);
                }
                typeof R.direction == "string" &&
                  typeof R.value == "number" &&
                  (console.warn(
                    "[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",
                    R.direction,
                    R.value
                  ),
                  (G = y()(R, ne, re)));
                var vt = N.state;
                return (
                  N.state.isVisible !== G &&
                    ((vt = { isVisible: G, visibilityRect: B }),
                    N.setState(vt),
                    N.props.onChange && N.props.onChange(G)),
                  vt
                );
              }),
              (N.state = { isVisible: null, visibilityRect: {} }),
              N
            );
          }
          return (
            p(W, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.node = d.a.findDOMNode(this)),
                    this.props.active && this.startWatching();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.stopWatching();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (N) {
                  (this.node = d.a.findDOMNode(this)),
                    this.props.active && !N.active
                      ? (this.setState({ isVisible: null, visibilityRect: {} }),
                        this.startWatching())
                      : this.props.active || this.stopWatching();
                },
              },
              {
                key: "roundRectDown",
                value: function (N) {
                  return {
                    top: Math.floor(N.top),
                    left: Math.floor(N.left),
                    bottom: Math.floor(N.bottom),
                    right: Math.floor(N.right),
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children instanceof Function
                    ? this.props.children({
                        isVisible: this.state.isVisible,
                        visibilityRect: this.state.visibilityRect,
                      })
                    : a.a.Children.only(this.props.children);
                },
              },
            ]),
            W
          );
        })(a.a.Component);
        T(j, "defaultProps", {
          active: !0,
          partialVisibility: !1,
          minTopValue: 0,
          scrollCheck: !1,
          scrollDelay: 250,
          scrollThrottle: -1,
          resizeCheck: !1,
          resizeDelay: 250,
          resizeThrottle: -1,
          intervalCheck: !0,
          intervalDelay: 100,
          delayedCall: !1,
          offset: {},
          containment: null,
          children: a.a.createElement("span", null),
        }),
          T(j, "propTypes", {
            onChange: f.a.func,
            active: f.a.bool,
            partialVisibility: f.a.oneOfType([
              f.a.bool,
              f.a.oneOf(["top", "right", "bottom", "left"]),
            ]),
            delayedCall: f.a.bool,
            offset: f.a.oneOfType([
              f.a.shape({
                top: f.a.number,
                left: f.a.number,
                bottom: f.a.number,
                right: f.a.number,
              }),
              f.a.shape({
                direction: f.a.oneOf(["top", "right", "bottom", "left"]),
                value: f.a.number,
              }),
            ]),
            scrollCheck: f.a.bool,
            scrollDelay: f.a.number,
            scrollThrottle: f.a.number,
            resizeCheck: f.a.bool,
            resizeDelay: f.a.number,
            resizeThrottle: f.a.number,
            intervalCheck: f.a.bool,
            intervalDelay: f.a.number,
            containment:
              typeof window < "u" ? f.a.instanceOf(window.Element) : f.a.any,
            children: f.a.oneOfType([f.a.element, f.a.func]),
            minTopValue: f.a.number,
          });
      },
      function (i, o, l) {
        var s = l(6);
        function a() {}
        function u() {}
        (u.resetWarningCache = a),
          (i.exports = function () {
            function d(w, y, g, b, h, p) {
              if (p !== s) {
                var m = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((m.name = "Invariant Violation"), m);
              }
            }
            d.isRequired = d;
            function c() {
              return d;
            }
            var f = {
              array: d,
              bool: d,
              func: d,
              number: d,
              object: d,
              string: d,
              symbol: d,
              any: d,
              arrayOf: c,
              element: d,
              elementType: d,
              instanceOf: c,
              node: d,
              objectOf: c,
              oneOf: c,
              oneOfType: c,
              shape: c,
              exact: c,
              checkPropTypes: u,
              resetWarningCache: a,
            };
            return (f.PropTypes = f), f;
          });
      },
      function (i, o, l) {
        var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        i.exports = s;
      },
    ]);
  });
})(um);
var Z0 = um.exports;
const Mi = vl(Z0),
  cm = ({ setCurrentSection: e }) =>
    E.jsx(Mi, {
      onChange: (t) => {
        t && e("about");
      },
      children: E.jsxs("section", {
        id: "about",
        children: [
          E.jsx("h2", { className: "font-heading", children: "About" }),
          E.jsx("p", {
            children:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Risus nec feugiat in fermentum posuere urna. Pretium fusce id velit ut tortor pretium. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Non odio euismod lacinia at quis risus sed vulputate.",
          }),
          E.jsx("h3", { children: "Contact:" }),
          E.jsx("p", {
            children:
              "Fermentum iaculis eu non diam phasellus vestibulum lorem. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Auctor urna nunc id cursus metus aliquam eleifend. Adipiscing bibendum est ultricies integer quis. Aliquam purus sit amet luctus. Sit amet facilisis magna etiam tempor orci. Quam nulla porttitor massa id neque. Convallis a cras semper auctor neque vitae tempus quam pellentesque. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
          }),
        ],
      }),
    });
cm.propTypes = { setCurrentSection: K.func };
const J0 = (e, t) => {
    window.onclick = (n) => {
      n.target != e && t();
    };
  },
  e1 = (e, t) => {
    if (e > window.innerWidth) {
      const n = e - window.innerWidth,
        r = parseInt(window.getComputedStyle(t).left) - n;
      t.style.left = `${parseInt(r)}px`;
    }
  },
  dm = ({ skill: e, builtWith: t }) => {
    const [n, r] = _.useState(!1),
      i = _.useRef(""),
      o = _.useRef(!1),
      l = _.useRef(),
      s = _.useRef(),
      [a, u] = _.useState(""),
      d = _.useCallback(
        (b) => {
          const h = b ? "0px" : i.current,
            p = b ? "hidden" : "shown";
          (l.current.style.width = h), u(p);
        },
        [i, l]
      ),
      c = _.useCallback(() => {
        d(!0), r(!1);
      }, [d]),
      f = () => {
        d(n), r(!n);
      };
    _.useEffect(() => {
      if (l.current && !o.current) {
        const b = l.current.getBoundingClientRect();
        (i.current = parseInt(b.width) + "px"),
          e1(b.right, l.current),
          u("hidden"),
          J0(s.current, c),
          (o.current = !0);
      }
    }, [l, s, o, a, d, n, c]);
    const w = E.jsx("li", {
        className: "skill-item",
        children: E.jsx("p", { children: e }),
      }),
      y = E.jsx("li", {
        className: "skill-item special",
        children: E.jsxs("p", {
          ref: s,
          onClick: f,
          onMouseEnter: f,
          onMouseLeave: c,
          children: [
            e,
            E.jsxs("span", {
              ref: l,
              className: a + " tooltip",
              children: ["This site was built with ", e, "!"],
            }),
          ],
        }),
      }),
      g = t ? y : w;
    return E.jsx(E.Fragment, { children: g });
  };
dm.propTypes = { skill: K.string, builtWith: K.bool };
const Xu = ({ skill: e, subItems: t }) => {
  const n = t.length ? t.map((o) => E.jsx(dm, { ...o }, o.skill)) : [],
    r = t.length
      ? E.jsx("ul", { className: "subskill-list", children: n })
      : "",
    i = t.length ? "has-subs" : "";
  return E.jsxs("li", {
    className: " skill " + i,
    children: [E.jsx("h4", { children: e }), r],
  });
};
Xu.propTypes = { skill: K.string, subItems: K.array };
Xu.defaultProps = { subItems: [] };
function fm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: t1 } = Object.prototype,
  { getPrototypeOf: Zu } = Object,
  zl = ((e) => (t) => {
    const n = t1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  jt = (e) => ((e = e.toLowerCase()), (t) => zl(t) === e),
  Ul = (e) => (t) => typeof t === e,
  { isArray: Or } = Array,
  xi = Ul("undefined");
function n1(e) {
  return (
    e !== null &&
    !xi(e) &&
    e.constructor !== null &&
    !xi(e.constructor) &&
    ht(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const pm = jt("ArrayBuffer");
function r1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && pm(e.buffer)),
    t
  );
}
const i1 = Ul("string"),
  ht = Ul("function"),
  hm = Ul("number"),
  Bl = (e) => e !== null && typeof e == "object",
  o1 = (e) => e === !0 || e === !1,
  Mo = (e) => {
    if (zl(e) !== "object") return !1;
    const t = Zu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  l1 = jt("Date"),
  s1 = jt("File"),
  a1 = jt("Blob"),
  u1 = jt("FileList"),
  c1 = (e) => Bl(e) && ht(e.pipe),
  d1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ht(e.append) &&
          ((t = zl(e)) === "formdata" ||
            (t === "object" &&
              ht(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  f1 = jt("URLSearchParams"),
  p1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Di(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Or(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = o.length;
    let s;
    for (r = 0; r < l; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function mm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const gm = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  ym = (e) => !xi(e) && e !== gm;
function Ua() {
  const { caseless: e } = (ym(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && mm(t, i)) || i;
      Mo(t[o]) && Mo(r)
        ? (t[o] = Ua(t[o], r))
        : Mo(r)
        ? (t[o] = Ua({}, r))
        : Or(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Di(arguments[r], n);
  return t;
}
const h1 = (e, t, n, { allOwnKeys: r } = {}) => (
    Di(
      t,
      (i, o) => {
        n && ht(i) ? (e[o] = fm(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  m1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  g1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  y1 = (e, t, n, r) => {
    let i, o, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (l = i[o]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && Zu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  v1 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  S1 = (e) => {
    if (!e) return null;
    if (Or(e)) return e;
    let t = e.length;
    if (!hm(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  w1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Zu(Uint8Array)),
  E1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  k1 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  _1 = jt("HTMLFormElement"),
  x1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Kd = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  b1 = jt("RegExp"),
  vm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Di(n, (i, o) => {
      let l;
      (l = t(i, o, e)) !== !1 && (r[o] = l || i);
    }),
      Object.defineProperties(e, r);
  },
  C1 = (e) => {
    vm(e, (t, n) => {
      if (ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ht(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  T1 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Or(e) ? r(e) : r(String(e).split(t)), n;
  },
  O1 = () => {},
  P1 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Os = "abcdefghijklmnopqrstuvwxyz",
  Yd = "0123456789",
  Sm = { DIGIT: Yd, ALPHA: Os, ALPHA_DIGIT: Os + Os.toUpperCase() + Yd },
  N1 = (e = 16, t = Sm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function R1(e) {
  return !!(
    e &&
    ht(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const L1 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Bl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Or(r) ? [] : {};
            return (
              Di(r, (l, s) => {
                const a = n(l, i + 1);
                !xi(a) && (o[s] = a);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  A1 = jt("AsyncFunction"),
  M1 = (e) => e && (Bl(e) || ht(e)) && ht(e.then) && ht(e.catch),
  x = {
    isArray: Or,
    isArrayBuffer: pm,
    isBuffer: n1,
    isFormData: d1,
    isArrayBufferView: r1,
    isString: i1,
    isNumber: hm,
    isBoolean: o1,
    isObject: Bl,
    isPlainObject: Mo,
    isUndefined: xi,
    isDate: l1,
    isFile: s1,
    isBlob: a1,
    isRegExp: b1,
    isFunction: ht,
    isStream: c1,
    isURLSearchParams: f1,
    isTypedArray: w1,
    isFileList: u1,
    forEach: Di,
    merge: Ua,
    extend: h1,
    trim: p1,
    stripBOM: m1,
    inherits: g1,
    toFlatObject: y1,
    kindOf: zl,
    kindOfTest: jt,
    endsWith: v1,
    toArray: S1,
    forEachEntry: E1,
    matchAll: k1,
    isHTMLForm: _1,
    hasOwnProperty: Kd,
    hasOwnProp: Kd,
    reduceDescriptors: vm,
    freezeMethods: C1,
    toObjectSet: T1,
    toCamelCase: x1,
    noop: O1,
    toFiniteNumber: P1,
    findKey: mm,
    global: gm,
    isContextDefined: ym,
    ALPHABET: Sm,
    generateString: N1,
    isSpecCompliantForm: R1,
    toJSONObject: L1,
    isAsyncFn: A1,
    isThenable: M1,
  };
function Z(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
x.inherits(Z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const wm = Z.prototype,
  Em = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Em[e] = { value: e };
});
Object.defineProperties(Z, Em);
Object.defineProperty(wm, "isAxiosError", { value: !0 });
Z.from = (e, t, n, r, i, o) => {
  const l = Object.create(wm);
  return (
    x.toFlatObject(
      e,
      l,
      function (a) {
        return a !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    Z.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
const D1 = null;
function Ba(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function km(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gd(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = km(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function j1(e) {
  return x.isArray(e) && !e.some(Ba);
}
const I1 = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Wl(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, b) {
        return !x.isUndefined(b[g]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    o = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
  if (!x.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (x.isDate(y)) return y.toISOString();
    if (!a && x.isBlob(y))
      throw new Z("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y)
      ? a && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, g, b) {
    let h = y;
    if (y && !b && typeof y == "object") {
      if (x.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (x.isArray(y) && j1(y)) ||
        ((x.isFileList(y) || x.endsWith(g, "[]")) && (h = x.toArray(y)))
      )
        return (
          (g = km(g)),
          h.forEach(function (m, k) {
            !(x.isUndefined(m) || m === null) &&
              t.append(
                l === !0 ? Gd([g], k, o) : l === null ? g : g + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return Ba(y) ? !0 : (t.append(Gd(b, g, o), u(y)), !1);
  }
  const c = [],
    f = Object.assign(I1, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Ba,
    });
  function w(y, g) {
    if (!x.isUndefined(y)) {
      if (c.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(y),
        x.forEach(y, function (h, p) {
          (!(x.isUndefined(h) || h === null) &&
            i.call(t, h, x.isString(p) ? p.trim() : p, g, f)) === !0 &&
            w(h, g ? g.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function Qd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ju(e, t) {
  (this._pairs = []), e && Wl(e, this, t);
}
const _m = Ju.prototype;
_m.append = function (t, n) {
  this._pairs.push([t, n]);
};
_m.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Qd);
      }
    : Qd;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function F1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function xm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || F1,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = x.isURLSearchParams(t) ? t.toString() : new Ju(t, n).toString(r)),
    o)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class z1 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Xd = z1,
  bm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  U1 = typeof URLSearchParams < "u" ? URLSearchParams : Ju,
  B1 = typeof FormData < "u" ? FormData : null,
  W1 = typeof Blob < "u" ? Blob : null,
  H1 = {
    isBrowser: !0,
    classes: { URLSearchParams: U1, FormData: B1, Blob: W1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Cm = typeof window < "u" && typeof document < "u",
  $1 = ((e) => Cm && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  V1 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  q1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Cm,
        hasStandardBrowserEnv: $1,
        hasStandardBrowserWebWorkerEnv: V1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  At = { ...q1, ...H1 };
function K1(e, t) {
  return Wl(
    e,
    new At.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return At.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Y1(e) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function G1(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Tm(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    const s = Number.isFinite(+l),
      a = o >= n.length;
    return (
      (l = !l && x.isArray(i) ? i.length : l),
      a
        ? (x.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !s)
        : ((!i[l] || !x.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], o) && x.isArray(i[l]) && (i[l] = G1(i[l])),
          !s)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (r, i) => {
        t(Y1(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Q1(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ec = {
  transitional: bm,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = x.isObject(t);
      if ((o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
        return i && i ? JSON.stringify(Tm(t)) : t;
      if (
        x.isArrayBuffer(t) ||
        x.isBuffer(t) ||
        x.isStream(t) ||
        x.isFile(t) ||
        x.isBlob(t)
      )
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return K1(t, this.formSerializer).toString();
        if ((s = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Wl(
            s ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), Q1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ec.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && x.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === "SyntaxError"
              ? Z.from(s, Z.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: At.classes.FormData, Blob: At.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ec.headers[e] = {};
});
const tc = ec,
  X1 = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Z1 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && X1[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Zd = Symbol("internals");
function Ur(e) {
  return e && String(e).trim().toLowerCase();
}
function Do(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Do) : String(e);
}
function J1(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const eS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ps(e, t, n, r, i) {
  if (x.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!x.isString(t))) {
    if (x.isString(r)) return t.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(t);
  }
}
function tS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function nS(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0,
    });
  });
}
class Hl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(s, a, u) {
      const d = Ur(a);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = x.findKey(i, d);
      (!c || i[c] === void 0 || u === !0 || (u === void 0 && i[c] !== !1)) &&
        (i[c || a] = Do(s));
    }
    const l = (s, a) => x.forEach(s, (u, d) => o(u, d, a));
    return (
      x.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : x.isString(t) && (t = t.trim()) && !eS(t)
        ? l(Z1(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Ur(t)), t)) {
      const r = x.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return J1(i);
        if (x.isFunction(n)) return n.call(this, i, r);
        if (x.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ur(t)), t)) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ps(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (((l = Ur(l)), l)) {
        const s = x.findKey(r, l);
        s && (!n || Ps(r, r[s], s, n)) && (delete r[s], (i = !0));
      }
    }
    return x.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ps(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (i, o) => {
        const l = x.findKey(r, o);
        if (l) {
          (n[l] = Do(i)), delete n[o];
          return;
        }
        const s = t ? tS(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = Do(i)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && x.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Zd] = this[Zd] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(l) {
      const s = Ur(l);
      r[s] || (nS(i, l), (r[s] = !0));
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Hl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.reduceDescriptors(Hl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
x.freezeMethods(Hl);
const $t = Hl;
function Ns(e, t) {
  const n = this || tc,
    r = t || n,
    i = $t.from(r.headers);
  let o = r.data;
  return (
    x.forEach(e, function (s) {
      o = s.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Om(e) {
  return !!(e && e.__CANCEL__);
}
function ji(e, t, n) {
  Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
x.inherits(ji, Z, { __CANCEL__: !0 });
function rS(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Z(
          "Request failed with status code " + n.status,
          [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const iS = At.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, o) {
        const l = [e + "=" + encodeURIComponent(t)];
        x.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
          x.isString(r) && l.push("path=" + r),
          x.isString(i) && l.push("domain=" + i),
          o === !0 && l.push("secure"),
          (document.cookie = l.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function oS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lS(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pm(e, t) {
  return e && !oS(t) ? lS(e, t) : t;
}
const sS = At.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let l = o;
        return (
          t && (n.setAttribute("href", l), (l = n.href)),
          n.setAttribute("href", l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (l) {
          const s = x.isString(l) ? i(l) : l;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function aS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function uS(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        d = r[o];
      l || (l = u), (n[i] = a), (r[i] = u);
      let c = o,
        f = 0;
      for (; c !== i; ) (f += n[c++]), (c = c % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - l < t)) return;
      const w = d && u - d;
      return w ? Math.round((f * 1e3) / w) : void 0;
    }
  );
}
function Jd(e, t) {
  let n = 0;
  const r = uS(50, 250);
  return (i) => {
    const o = i.loaded,
      l = i.lengthComputable ? i.total : void 0,
      s = o - n,
      a = r(s),
      u = o <= l;
    n = o;
    const d = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: s,
      rate: a || void 0,
      estimated: a && l && u ? (l - o) / a : void 0,
      event: i,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const cS = typeof XMLHttpRequest < "u",
  dS =
    cS &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = $t.from(e.headers).normalize();
        let { responseType: l, withXSRFToken: s } = e,
          a;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        let d;
        if (x.isFormData(i)) {
          if (At.hasStandardBrowserEnv || At.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((d = o.getContentType()) !== !1) {
            const [g, ...b] = d
              ? d
                  .split(";")
                  .map((h) => h.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([g || "multipart/form-data", ...b].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(g + ":" + b));
        }
        const f = Pm(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), xm(f, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function w() {
          if (!c) return;
          const g = $t.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            h = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: e,
              request: c,
            };
          rS(
            function (m) {
              n(m), u();
            },
            function (m) {
              r(m), u();
            },
            h
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = w)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(w);
              }),
          (c.onabort = function () {
            c &&
              (r(new Z("Request aborted", Z.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new Z("Network Error", Z.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let b = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = e.transitional || bm;
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              r(
                new Z(
                  b,
                  h.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          At.hasStandardBrowserEnv &&
            (s && x.isFunction(s) && (s = s(e)), s || (s !== !1 && sS(f))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && iS.read(e.xsrfCookieName);
          g && o.set(e.xsrfHeaderName, g);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            x.forEach(o.toJSON(), function (b, h) {
              c.setRequestHeader(h, b);
            }),
          x.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          l && l !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Jd(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Jd(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (g) => {
              c &&
                (r(!g || g.type ? new ji(null, e, c) : g),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const y = aS(f);
        if (y && At.protocols.indexOf(y) === -1) {
          r(new Z("Unsupported protocol " + y + ":", Z.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  Wa = { http: D1, xhr: dS };
x.forEach(Wa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ef = (e) => `- ${e}`,
  fS = (e) => x.isFunction(e) || e === null || e === !1,
  Nm = {
    getAdapter: (e) => {
      e = x.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let l;
        if (
          ((r = n),
          !fS(n) && ((r = Wa[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Z(`Unknown adapter '${l}'`);
        if (r) break;
        i[l || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([s, a]) =>
            `adapter ${s} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? o.length > 1
            ? `since :
` +
              o.map(ef).join(`
`)
            : " " + ef(o[0])
          : "as no adapter specified";
        throw new Z(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Wa,
  };
function Rs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ji(null, e);
}
function tf(e) {
  return (
    Rs(e),
    (e.headers = $t.from(e.headers)),
    (e.data = Ns.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Nm.getAdapter(e.adapter || tc.adapter)(e).then(
      function (r) {
        return (
          Rs(e),
          (r.data = Ns.call(e, e.transformResponse, r)),
          (r.headers = $t.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Om(r) ||
            (Rs(e),
            r &&
              r.response &&
              ((r.response.data = Ns.call(e, e.transformResponse, r.response)),
              (r.response.headers = $t.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const nf = (e) => (e instanceof $t ? e.toJSON() : e);
function _r(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c) {
    return x.isPlainObject(u) && x.isPlainObject(d)
      ? x.merge.call({ caseless: c }, u, d)
      : x.isPlainObject(d)
      ? x.merge({}, d)
      : x.isArray(d)
      ? d.slice()
      : d;
  }
  function i(u, d, c) {
    if (x.isUndefined(d)) {
      if (!x.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, d, c);
  }
  function o(u, d) {
    if (!x.isUndefined(d)) return r(void 0, d);
  }
  function l(u, d) {
    if (x.isUndefined(d)) {
      if (!x.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function s(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (u, d) => i(nf(u), nf(d), !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = a[d] || i,
        f = c(e[d], t[d], d);
      (x.isUndefined(f) && c !== s) || (n[d] = f);
    }),
    n
  );
}
const Rm = "1.6.2",
  nc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    nc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const rf = {};
nc.transitional = function (t, n, r) {
  function i(o, l) {
    return (
      "[Axios v" +
      Rm +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (o, l, s) => {
    if (t === !1)
      throw new Z(
        i(l, " has been removed" + (n ? " in " + n : "")),
        Z.ERR_DEPRECATED
      );
    return (
      n &&
        !rf[l] &&
        ((rf[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, s) : !0
    );
  };
};
function pS(e, t, n) {
  if (typeof e != "object")
    throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      l = t[o];
    if (l) {
      const s = e[o],
        a = s === void 0 || l(s, o, e);
      if (a !== !0)
        throw new Z("option " + o + " must be " + a, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Z("Unknown option " + o, Z.ERR_BAD_OPTION);
  }
}
const Ha = { assertOptions: pS, validators: nc },
  Zt = Ha.validators;
class hl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Xd(), response: new Xd() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = _r(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Ha.assertOptions(
        r,
        {
          silentJSONParsing: Zt.transitional(Zt.boolean),
          forcedJSONParsing: Zt.transitional(Zt.boolean),
          clarifyTimeoutError: Zt.transitional(Zt.boolean),
        },
        !1
      ),
      i != null &&
        (x.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Ha.assertOptions(
              i,
              { encode: Zt.function, serialize: Zt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = o && x.merge(o.common, o[n.method]);
    o &&
      x.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete o[y];
        }
      ),
      (n.headers = $t.concat(l, o));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d,
      c = 0,
      f;
    if (!a) {
      const y = [tf.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, u),
          f = y.length,
          d = Promise.resolve(n);
        c < f;

      )
        d = d.then(y[c++], y[c++]);
      return d;
    }
    f = s.length;
    let w = n;
    for (c = 0; c < f; ) {
      const y = s[c++],
        g = s[c++];
      try {
        w = y(w);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      d = tf.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = _r(this.defaults, t);
    const n = Pm(t.baseURL, t.url);
    return xm(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function (t) {
  hl.prototype[t] = function (n, r) {
    return this.request(
      _r(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
x.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, l, s) {
      return this.request(
        _r(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (hl.prototype[t] = n()), (hl.prototype[t + "Form"] = n(!0));
});
const jo = hl;
class rc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const l = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(o);
          }),
          l
        );
      }),
      t(function (o, l, s) {
        r.reason || ((r.reason = new ji(o, l, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new rc(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const hS = rc;
function mS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function gS(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const $a = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries($a).forEach(([e, t]) => {
  $a[t] = e;
});
const yS = $a;
function Lm(e) {
  const t = new jo(e),
    n = fm(jo.prototype.request, t);
  return (
    x.extend(n, jo.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Lm(_r(e, i));
    }),
    n
  );
}
const Se = Lm(tc);
Se.Axios = jo;
Se.CanceledError = ji;
Se.CancelToken = hS;
Se.isCancel = Om;
Se.VERSION = Rm;
Se.toFormData = Wl;
Se.AxiosError = Z;
Se.Cancel = Se.CanceledError;
Se.all = function (t) {
  return Promise.all(t);
};
Se.spread = mS;
Se.isAxiosError = gS;
Se.mergeConfig = _r;
Se.AxiosHeaders = $t;
Se.formToJSON = (e) => Tm(x.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = Nm.getAdapter;
Se.HttpStatusCode = yS;
Se.default = Se;
const $l = Se,
  vS = "http://localhost:8000/api",
  SS = (e) => {
    $l.get(`${vS}/skills/`)
      .then((t) => {
        e(t.data);
      })
      .catch((t) => {
        console.error(t);
      });
  };
const Am = ({ setCurrentSection: e }) => {
  const [t, n] = _.useState([]);
  _.useEffect(() => {
    SS(n);
  }, []);
  const r = t
    ? t.map((i) =>
        E.jsx(
          Xu,
          {
            skill: i.name,
            subItems: i.subskills.map((o) => ({
              skill: o.name,
              builtWith: o.built_with,
              order: o.display_order,
            })),
          },
          i.name
        )
      )
    : E.jsx("p", { children: "no items to show" });
  return E.jsx(Mi, {
    onChange: (i) => {
      i && e("skills");
    },
    children: E.jsxs("section", {
      id: "skills",
      className: "pt-12 max-w-[650px] mx-auto",
      children: [
        E.jsx("h2", {
          className: "font-heading text-3xl pb-3",
          children: "Skills",
        }),
        E.jsxs("article", {
          className: "pb-4",
          children: [
            E.jsx("h3", {
              className: "font-nav pb-3",
              children: "Languages, libraries, & frameworks:",
            }),
            E.jsx("ul", { className: "px-4", children: r }),
          ],
        }),
      ],
    }),
  });
};
Am.propTypes = { setCurrentSection: K.func };
const wS = "http://localhost:8000/api",
  ES = (e) => {
    $l.get(`${wS}/resume/`)
      .then((t) => {
        e(t.data);
      })
      .catch((t) => {
        console.error(t);
      });
  },
  Mm = ({
    title: e,
    employer: t,
    description: n,
    start_date: r,
    end_date: i,
  }) => {
    const o = r.split("-")[0],
      l = i.split("-")[0];
    return E.jsxs("div", {
      className: "resume-list-item",
      children: [
        E.jsx("h3", { children: t }),
        E.jsxs("p", {
          className: "date-span",
          children: [
            E.jsx("span", { children: o }),
            " - ",
            E.jsx("span", { children: l }),
          ],
        }),
        E.jsx("h4", { children: e }),
        E.jsx("p", { className: "description", children: n }),
      ],
    });
  };
Mm.propTypes = {
  id: K.number,
  title: K.string,
  employer: K.string,
  description: K.string,
  start_date: K.string,
  end_date: K.string,
};
const Dm = ({ setCurrentSection: e }) => {
  const [t, n] = _.useState([]);
  _.useEffect(() => {
    ES(n);
  }, []);
  const r = t
    ? t.map((i) => E.jsx(Mm, { ...i }, i.id))
    : E.jsx("p", { children: "no items to show" });
  return E.jsx(Mi, {
    onChange: (i) => {
      i && e("experience");
    },
    children: E.jsxs("section", {
      id: "experience",
      children: [
        E.jsx("h2", { className: "font-heading", children: "Experience" }),
        r,
      ],
    }),
  });
};
Dm.propTypes = { setCurrentSection: K.func };
/*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE */ const {
  entries: jm,
  setPrototypeOf: of,
  isFrozen: kS,
  getPrototypeOf: _S,
  getOwnPropertyDescriptor: ic,
} = Object;
let { freeze: He, seal: Ct, create: Im } = Object,
  { apply: Va, construct: qa } = typeof Reflect < "u" && Reflect;
He ||
  (He = function (t) {
    return t;
  });
Ct ||
  (Ct = function (t) {
    return t;
  });
Va ||
  (Va = function (t, n, r) {
    return t.apply(n, r);
  });
qa ||
  (qa = function (t, n) {
    return new t(...n);
  });
const io = yt(Array.prototype.forEach),
  lf = yt(Array.prototype.pop),
  Br = yt(Array.prototype.push),
  Io = yt(String.prototype.toLowerCase),
  Ls = yt(String.prototype.toString),
  xS = yt(String.prototype.match),
  Wr = yt(String.prototype.replace),
  bS = yt(String.prototype.indexOf),
  CS = yt(String.prototype.trim),
  tt = yt(RegExp.prototype.test),
  Hr = TS(TypeError);
function yt(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    return Va(e, t, r);
  };
}
function TS(e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return qa(e, n);
  };
}
function Y(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Io;
  of && of(e, null);
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const o = n(i);
      o !== i && (kS(t) || (t[r] = o), (i = o));
    }
    e[i] = !0;
  }
  return e;
}
function OS(e) {
  for (let t = 0; t < e.length; t++) ic(e, t) === void 0 && (e[t] = null);
  return e;
}
function Cn(e) {
  const t = Im(null);
  for (const [n, r] of jm(e))
    ic(e, n) !== void 0 &&
      (Array.isArray(r)
        ? (t[n] = OS(r))
        : r && typeof r == "object" && r.constructor === Object
        ? (t[n] = Cn(r))
        : (t[n] = r));
  return t;
}
function oo(e, t) {
  for (; e !== null; ) {
    const r = ic(e, t);
    if (r) {
      if (r.get) return yt(r.get);
      if (typeof r.value == "function") return yt(r.value);
    }
    e = _S(e);
  }
  function n(r) {
    return console.warn("fallback value for", r), null;
  }
  return n;
}
const sf = He([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  As = He([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  Ms = He([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  PS = He([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  Ds = He([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  NS = He([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  af = He(["#text"]),
  uf = He([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "xmlns",
    "slot",
  ]),
  js = He([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  cf = He([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  lo = He(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  RS = Ct(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  LS = Ct(/<%[\w\W]*|[\w\W]*%>/gm),
  AS = Ct(/\${[\w\W]*}/gm),
  MS = Ct(/^data-[\-\w.\u00B7-\uFFFF]/),
  DS = Ct(/^aria-[\-\w]+$/),
  Fm = Ct(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  jS = Ct(/^(?:\w+script|data):/i),
  IS = Ct(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  zm = Ct(/^html$/i);
var df = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: RS,
  ERB_EXPR: LS,
  TMPLIT_EXPR: AS,
  DATA_ATTR: MS,
  ARIA_ATTR: DS,
  IS_ALLOWED_URI: Fm,
  IS_SCRIPT_OR_DATA: jS,
  ATTR_WHITESPACE: IS,
  DOCTYPE_NAME: zm,
});
const FS = function () {
    return typeof window > "u" ? null : window;
  },
  zS = function (t, n) {
    if (typeof t != "object" || typeof t.createPolicy != "function")
      return null;
    let r = null;
    const i = "data-tt-policy-suffix";
    n && n.hasAttribute(i) && (r = n.getAttribute(i));
    const o = "dompurify" + (r ? "#" + r : "");
    try {
      return t.createPolicy(o, {
        createHTML(l) {
          return l;
        },
        createScriptURL(l) {
          return l;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + o + " could not be created."),
        null
      );
    }
  };
function Um() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : FS();
  const t = (U) => Um(U);
  if (
    ((t.version = "3.0.8"),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== 9)
  )
    return (t.isSupported = !1), t;
  let { document: n } = e;
  const r = n,
    i = r.currentScript,
    {
      DocumentFragment: o,
      HTMLTemplateElement: l,
      Node: s,
      Element: a,
      NodeFilter: u,
      NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: c,
      DOMParser: f,
      trustedTypes: w,
    } = e,
    y = a.prototype,
    g = oo(y, "cloneNode"),
    b = oo(y, "nextSibling"),
    h = oo(y, "childNodes"),
    p = oo(y, "parentNode");
  if (typeof l == "function") {
    const U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  let m,
    k = "";
  const {
      implementation: C,
      createNodeIterator: A,
      createDocumentFragment: M,
      getElementsByTagName: T,
    } = n,
    { importNode: V } = r;
  let j = {};
  t.isSupported =
    typeof jm == "function" &&
    typeof p == "function" &&
    C &&
    C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: W,
    TMPLIT_EXPR: q,
    DATA_ATTR: N,
    ARIA_ATTR: ke,
    IS_SCRIPT_OR_DATA: ne,
    ATTR_WHITESPACE: re,
  } = df;
  let { IS_ALLOWED_URI: L } = df,
    R = null;
  const $ = Y({}, [...sf, ...As, ...Ms, ...Ds, ...af]);
  let B = null;
  const ie = Y({}, [...uf, ...js, ...cf, ...lo]);
  let G = Object.seal(
      Im(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    Ce = null,
    vt = null,
    Ot = !0,
    Qt = !0,
    ac = !1,
    uc = !0,
    Bn = !1,
    En = !1,
    Kl = !1,
    Yl = !1,
    Wn = !1,
    Ii = !1,
    Fi = !1,
    cc = !0,
    dc = !1;
  const lg = "user-content-";
  let Gl = !0,
    Pr = !1,
    Hn = {},
    $n = null;
  const fc = Y({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let pc = null;
  const hc = Y({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ql = null;
  const mc = Y({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    zi = "http://www.w3.org/1998/Math/MathML",
    Ui = "http://www.w3.org/2000/svg",
    It = "http://www.w3.org/1999/xhtml";
  let Vn = It,
    Xl = !1,
    Zl = null;
  const sg = Y({}, [zi, Ui, It], Ls);
  let Nr = null;
  const ag = ["application/xhtml+xml", "text/html"],
    ug = "text/html";
  let _e = null,
    qn = null;
  const cg = n.createElement("form"),
    gc = function (v) {
      return v instanceof RegExp || v instanceof Function;
    },
    Jl = function () {
      let v =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(qn && qn === v)) {
        if (
          ((!v || typeof v != "object") && (v = {}),
          (v = Cn(v)),
          (Nr =
            ag.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? ug : v.PARSER_MEDIA_TYPE),
          (_e = Nr === "application/xhtml+xml" ? Ls : Io),
          (R = "ALLOWED_TAGS" in v ? Y({}, v.ALLOWED_TAGS, _e) : $),
          (B = "ALLOWED_ATTR" in v ? Y({}, v.ALLOWED_ATTR, _e) : ie),
          (Zl =
            "ALLOWED_NAMESPACES" in v ? Y({}, v.ALLOWED_NAMESPACES, Ls) : sg),
          (Ql =
            "ADD_URI_SAFE_ATTR" in v ? Y(Cn(mc), v.ADD_URI_SAFE_ATTR, _e) : mc),
          (pc =
            "ADD_DATA_URI_TAGS" in v ? Y(Cn(hc), v.ADD_DATA_URI_TAGS, _e) : hc),
          ($n = "FORBID_CONTENTS" in v ? Y({}, v.FORBID_CONTENTS, _e) : fc),
          (Ce = "FORBID_TAGS" in v ? Y({}, v.FORBID_TAGS, _e) : {}),
          (vt = "FORBID_ATTR" in v ? Y({}, v.FORBID_ATTR, _e) : {}),
          (Hn = "USE_PROFILES" in v ? v.USE_PROFILES : !1),
          (Ot = v.ALLOW_ARIA_ATTR !== !1),
          (Qt = v.ALLOW_DATA_ATTR !== !1),
          (ac = v.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (uc = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (Bn = v.SAFE_FOR_TEMPLATES || !1),
          (En = v.WHOLE_DOCUMENT || !1),
          (Wn = v.RETURN_DOM || !1),
          (Ii = v.RETURN_DOM_FRAGMENT || !1),
          (Fi = v.RETURN_TRUSTED_TYPE || !1),
          (Yl = v.FORCE_BODY || !1),
          (cc = v.SANITIZE_DOM !== !1),
          (dc = v.SANITIZE_NAMED_PROPS || !1),
          (Gl = v.KEEP_CONTENT !== !1),
          (Pr = v.IN_PLACE || !1),
          (L = v.ALLOWED_URI_REGEXP || Fm),
          (Vn = v.NAMESPACE || It),
          (G = v.CUSTOM_ELEMENT_HANDLING || {}),
          v.CUSTOM_ELEMENT_HANDLING &&
            gc(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (G.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          v.CUSTOM_ELEMENT_HANDLING &&
            gc(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (G.attributeNameCheck =
              v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          v.CUSTOM_ELEMENT_HANDLING &&
            typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (G.allowCustomizedBuiltInElements =
              v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          Bn && (Qt = !1),
          Ii && (Wn = !0),
          Hn &&
            ((R = Y({}, af)),
            (B = []),
            Hn.html === !0 && (Y(R, sf), Y(B, uf)),
            Hn.svg === !0 && (Y(R, As), Y(B, js), Y(B, lo)),
            Hn.svgFilters === !0 && (Y(R, Ms), Y(B, js), Y(B, lo)),
            Hn.mathMl === !0 && (Y(R, Ds), Y(B, cf), Y(B, lo))),
          v.ADD_TAGS && (R === $ && (R = Cn(R)), Y(R, v.ADD_TAGS, _e)),
          v.ADD_ATTR && (B === ie && (B = Cn(B)), Y(B, v.ADD_ATTR, _e)),
          v.ADD_URI_SAFE_ATTR && Y(Ql, v.ADD_URI_SAFE_ATTR, _e),
          v.FORBID_CONTENTS &&
            ($n === fc && ($n = Cn($n)), Y($n, v.FORBID_CONTENTS, _e)),
          Gl && (R["#text"] = !0),
          En && Y(R, ["html", "head", "body"]),
          R.table && (Y(R, ["tbody"]), delete Ce.tbody),
          v.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Hr(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Hr(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (m = v.TRUSTED_TYPES_POLICY), (k = m.createHTML(""));
        } else
          m === void 0 && (m = zS(w, i)),
            m !== null && typeof k == "string" && (k = m.createHTML(""));
        He && He(v), (qn = v);
      }
    },
    yc = Y({}, ["mi", "mo", "mn", "ms", "mtext"]),
    vc = Y({}, ["foreignobject", "desc", "title", "annotation-xml"]),
    dg = Y({}, ["title", "style", "font", "a", "script"]),
    Sc = Y({}, [...As, ...Ms, ...PS]),
    wc = Y({}, [...Ds, ...NS]),
    fg = function (v) {
      let P = p(v);
      (!P || !P.tagName) && (P = { namespaceURI: Vn, tagName: "template" });
      const z = Io(v.tagName),
        oe = Io(P.tagName);
      return Zl[v.namespaceURI]
        ? v.namespaceURI === Ui
          ? P.namespaceURI === It
            ? z === "svg"
            : P.namespaceURI === zi
            ? z === "svg" && (oe === "annotation-xml" || yc[oe])
            : !!Sc[z]
          : v.namespaceURI === zi
          ? P.namespaceURI === It
            ? z === "math"
            : P.namespaceURI === Ui
            ? z === "math" && vc[oe]
            : !!wc[z]
          : v.namespaceURI === It
          ? (P.namespaceURI === Ui && !vc[oe]) ||
            (P.namespaceURI === zi && !yc[oe])
            ? !1
            : !wc[z] && (dg[z] || !Sc[z])
          : !!(Nr === "application/xhtml+xml" && Zl[v.namespaceURI])
        : !1;
    },
    kn = function (v) {
      Br(t.removed, { element: v });
      try {
        v.parentNode.removeChild(v);
      } catch {
        v.remove();
      }
    },
    es = function (v, P) {
      try {
        Br(t.removed, { attribute: P.getAttributeNode(v), from: P });
      } catch {
        Br(t.removed, { attribute: null, from: P });
      }
      if ((P.removeAttribute(v), v === "is" && !B[v]))
        if (Wn || Ii)
          try {
            kn(P);
          } catch {}
        else
          try {
            P.setAttribute(v, "");
          } catch {}
    },
    Ec = function (v) {
      let P = null,
        z = null;
      if (Yl) v = "<remove></remove>" + v;
      else {
        const Ae = xS(v, /^[\r\n\t ]+/);
        z = Ae && Ae[0];
      }
      Nr === "application/xhtml+xml" &&
        Vn === It &&
        (v =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          v +
          "</body></html>");
      const oe = m ? m.createHTML(v) : v;
      if (Vn === It)
        try {
          P = new f().parseFromString(oe, Nr);
        } catch {}
      if (!P || !P.documentElement) {
        P = C.createDocument(Vn, "template", null);
        try {
          P.documentElement.innerHTML = Xl ? k : oe;
        } catch {}
      }
      const Le = P.body || P.documentElement;
      return (
        v &&
          z &&
          Le.insertBefore(n.createTextNode(z), Le.childNodes[0] || null),
        Vn === It
          ? T.call(P, En ? "html" : "body")[0]
          : En
          ? P.documentElement
          : Le
      );
    },
    kc = function (v) {
      return A.call(
        v.ownerDocument || v,
        v,
        u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT,
        null
      );
    },
    pg = function (v) {
      return (
        v instanceof c &&
        (typeof v.nodeName != "string" ||
          typeof v.textContent != "string" ||
          typeof v.removeChild != "function" ||
          !(v.attributes instanceof d) ||
          typeof v.removeAttribute != "function" ||
          typeof v.setAttribute != "function" ||
          typeof v.namespaceURI != "string" ||
          typeof v.insertBefore != "function" ||
          typeof v.hasChildNodes != "function")
      );
    },
    _c = function (v) {
      return typeof s == "function" && v instanceof s;
    },
    Ft = function (v, P, z) {
      j[v] &&
        io(j[v], (oe) => {
          oe.call(t, P, z, qn);
        });
    },
    xc = function (v) {
      let P = null;
      if ((Ft("beforeSanitizeElements", v, null), pg(v))) return kn(v), !0;
      const z = _e(v.nodeName);
      if (
        (Ft("uponSanitizeElement", v, { tagName: z, allowedTags: R }),
        v.hasChildNodes() &&
          !_c(v.firstElementChild) &&
          tt(/<[/\w]/g, v.innerHTML) &&
          tt(/<[/\w]/g, v.textContent))
      )
        return kn(v), !0;
      if (!R[z] || Ce[z]) {
        if (
          !Ce[z] &&
          Cc(z) &&
          ((G.tagNameCheck instanceof RegExp && tt(G.tagNameCheck, z)) ||
            (G.tagNameCheck instanceof Function && G.tagNameCheck(z)))
        )
          return !1;
        if (Gl && !$n[z]) {
          const oe = p(v) || v.parentNode,
            Le = h(v) || v.childNodes;
          if (Le && oe) {
            const Ae = Le.length;
            for (let qe = Ae - 1; qe >= 0; --qe)
              oe.insertBefore(g(Le[qe], !0), b(v));
          }
        }
        return kn(v), !0;
      }
      return (v instanceof a && !fg(v)) ||
        ((z === "noscript" || z === "noembed" || z === "noframes") &&
          tt(/<\/no(script|embed|frames)/i, v.innerHTML))
        ? (kn(v), !0)
        : (Bn &&
            v.nodeType === 3 &&
            ((P = v.textContent),
            io([D, W, q], (oe) => {
              P = Wr(P, oe, " ");
            }),
            v.textContent !== P &&
              (Br(t.removed, { element: v.cloneNode() }), (v.textContent = P))),
          Ft("afterSanitizeElements", v, null),
          !1);
    },
    bc = function (v, P, z) {
      if (cc && (P === "id" || P === "name") && (z in n || z in cg)) return !1;
      if (!(Qt && !vt[P] && tt(N, P))) {
        if (!(Ot && tt(ke, P))) {
          if (!B[P] || vt[P]) {
            if (
              !(
                (Cc(v) &&
                  ((G.tagNameCheck instanceof RegExp &&
                    tt(G.tagNameCheck, v)) ||
                    (G.tagNameCheck instanceof Function &&
                      G.tagNameCheck(v))) &&
                  ((G.attributeNameCheck instanceof RegExp &&
                    tt(G.attributeNameCheck, P)) ||
                    (G.attributeNameCheck instanceof Function &&
                      G.attributeNameCheck(P)))) ||
                (P === "is" &&
                  G.allowCustomizedBuiltInElements &&
                  ((G.tagNameCheck instanceof RegExp &&
                    tt(G.tagNameCheck, z)) ||
                    (G.tagNameCheck instanceof Function && G.tagNameCheck(z))))
              )
            )
              return !1;
          } else if (!Ql[P]) {
            if (!tt(L, Wr(z, re, ""))) {
              if (
                !(
                  (P === "src" || P === "xlink:href" || P === "href") &&
                  v !== "script" &&
                  bS(z, "data:") === 0 &&
                  pc[v]
                )
              ) {
                if (!(ac && !tt(ne, Wr(z, re, "")))) {
                  if (z) return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    },
    Cc = function (v) {
      return v.indexOf("-") > 0;
    },
    Tc = function (v) {
      Ft("beforeSanitizeAttributes", v, null);
      const { attributes: P } = v;
      if (!P) return;
      const z = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: B,
      };
      let oe = P.length;
      for (; oe--; ) {
        const Le = P[oe],
          { name: Ae, namespaceURI: qe, value: _n } = Le,
          Rr = _e(Ae);
        let Ke = Ae === "value" ? _n : CS(_n);
        if (
          ((z.attrName = Rr),
          (z.attrValue = Ke),
          (z.keepAttr = !0),
          (z.forceKeepAttr = void 0),
          Ft("uponSanitizeAttribute", v, z),
          (Ke = z.attrValue),
          z.forceKeepAttr || (es(Ae, v), !z.keepAttr))
        )
          continue;
        if (!uc && tt(/\/>/i, Ke)) {
          es(Ae, v);
          continue;
        }
        Bn &&
          io([D, W, q], (Pc) => {
            Ke = Wr(Ke, Pc, " ");
          });
        const Oc = _e(v.nodeName);
        if (bc(Oc, Rr, Ke)) {
          if (
            (dc &&
              (Rr === "id" || Rr === "name") &&
              (es(Ae, v), (Ke = lg + Ke)),
            m &&
              typeof w == "object" &&
              typeof w.getAttributeType == "function" &&
              !qe)
          )
            switch (w.getAttributeType(Oc, Rr)) {
              case "TrustedHTML": {
                Ke = m.createHTML(Ke);
                break;
              }
              case "TrustedScriptURL": {
                Ke = m.createScriptURL(Ke);
                break;
              }
            }
          try {
            qe ? v.setAttributeNS(qe, Ae, Ke) : v.setAttribute(Ae, Ke),
              lf(t.removed);
          } catch {}
        }
      }
      Ft("afterSanitizeAttributes", v, null);
    },
    hg = function U(v) {
      let P = null;
      const z = kc(v);
      for (Ft("beforeSanitizeShadowDOM", v, null); (P = z.nextNode()); )
        Ft("uponSanitizeShadowNode", P, null),
          !xc(P) && (P.content instanceof o && U(P.content), Tc(P));
      Ft("afterSanitizeShadowDOM", v, null);
    };
  return (
    (t.sanitize = function (U) {
      let v =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        P = null,
        z = null,
        oe = null,
        Le = null;
      if (((Xl = !U), Xl && (U = "<!-->"), typeof U != "string" && !_c(U)))
        if (typeof U.toString == "function") {
          if (((U = U.toString()), typeof U != "string"))
            throw Hr("dirty is not a string, aborting");
        } else throw Hr("toString is not a function");
      if (!t.isSupported) return U;
      if (
        (Kl || Jl(v), (t.removed = []), typeof U == "string" && (Pr = !1), Pr)
      ) {
        if (U.nodeName) {
          const _n = _e(U.nodeName);
          if (!R[_n] || Ce[_n])
            throw Hr("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (U instanceof s)
        (P = Ec("<!---->")),
          (z = P.ownerDocument.importNode(U, !0)),
          (z.nodeType === 1 && z.nodeName === "BODY") || z.nodeName === "HTML"
            ? (P = z)
            : P.appendChild(z);
      else {
        if (!Wn && !Bn && !En && U.indexOf("<") === -1)
          return m && Fi ? m.createHTML(U) : U;
        if (((P = Ec(U)), !P)) return Wn ? null : Fi ? k : "";
      }
      P && Yl && kn(P.firstChild);
      const Ae = kc(Pr ? U : P);
      for (; (oe = Ae.nextNode()); )
        xc(oe) || (oe.content instanceof o && hg(oe.content), Tc(oe));
      if (Pr) return U;
      if (Wn) {
        if (Ii)
          for (Le = M.call(P.ownerDocument); P.firstChild; )
            Le.appendChild(P.firstChild);
        else Le = P;
        return (
          (B.shadowroot || B.shadowrootmode) && (Le = V.call(r, Le, !0)), Le
        );
      }
      let qe = En ? P.outerHTML : P.innerHTML;
      return (
        En &&
          R["!doctype"] &&
          P.ownerDocument &&
          P.ownerDocument.doctype &&
          P.ownerDocument.doctype.name &&
          tt(zm, P.ownerDocument.doctype.name) &&
          (qe =
            "<!DOCTYPE " +
            P.ownerDocument.doctype.name +
            `>
` +
            qe),
        Bn &&
          io([D, W, q], (_n) => {
            qe = Wr(qe, _n, " ");
          }),
        m && Fi ? m.createHTML(qe) : qe
      );
    }),
    (t.setConfig = function () {
      let U =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Jl(U), (Kl = !0);
    }),
    (t.clearConfig = function () {
      (qn = null), (Kl = !1);
    }),
    (t.isValidAttribute = function (U, v, P) {
      qn || Jl({});
      const z = _e(U),
        oe = _e(v);
      return bc(z, oe, P);
    }),
    (t.addHook = function (U, v) {
      typeof v == "function" && ((j[U] = j[U] || []), Br(j[U], v));
    }),
    (t.removeHook = function (U) {
      if (j[U]) return lf(j[U]);
    }),
    (t.removeHooks = function (U) {
      j[U] && (j[U] = []);
    }),
    (t.removeAllHooks = function () {
      j = {};
    }),
    t
  );
}
var US = Um();
const BS = "http://localhost:8000/api",
  WS = (e) => {
    $l.get(`${BS}/projects/`)
      .then((t) => {
        const n = t.data.map((r) => ({
          ...r,
          description: US.sanitize(r.description),
        }));
        e(n);
      })
      .catch((t) => {
        console.error(t);
      });
  },
  oc = ({
    title: e,
    link: t,
    description: n,
    cover_image: r,
    cover_video: i,
    project_skills: o,
    gallery_images: l,
  }) => {
    const [s, a] = _.useState(!1),
      u = o.length
        ? o.map((h) =>
            E.jsxs(
              "span",
              { className: "skill", children: [h.skill, " "] },
              h.skill
            )
          )
        : "",
      d = i.length ? E.jsx("video", { src: i }) : "",
      c = l.length ? l.map((h) => E.jsx("img", { src: h.image }, h.image)) : "",
      f = { __html: n },
      w = { backgroundImage: `url(${r})` },
      y = (h) => {
        h.preventDefault(), a(!s);
      },
      g = s ? "Close" : "View project details",
      b = s ? "open" : "";
    return E.jsxs("article", {
      onClick: y,
      className: "project-card",
      children: [
        E.jsxs("div", {
          className: "cover-image",
          style: w,
          children: [
            E.jsx("h3", {
              className: "font-nav",
              children: E.jsx("a", { href: t, children: e }),
            }),
            E.jsxs("div", {
              className: "built-with",
              children: [
                E.jsx("h4", { children: "Built with:" }),
                E.jsx("p", { className: "project-skills", children: u }),
              ],
            }),
          ],
        }),
        d,
        E.jsxs("details", {
          open: b,
          children: [
            E.jsx("summary", { onClick: y, children: g }),
            E.jsx("div", { dangerouslySetInnerHTML: f }),
            E.jsx("div", { children: c }),
          ],
        }),
      ],
    });
  };
oc.propTypes = {
  title: K.string,
  link: K.string,
  description: K.string,
  cover_image: K.string,
  cover_video: K.string,
  project_skills: K.array,
  gallery_images: K.array,
};
oc.defaultProps = {
  cover_image: "",
  cover_video: "",
  project_skills: [],
  gallery_images: [],
};
const Bm = ({ setCurrentSection: e }) => {
  const [t, n] = _.useState([]);
  _.useEffect(() => {
    WS(n);
  }, []);
  const r =
    t.length > 0
      ? t.map((i) => {
          const o = {};
          return (
            Object.keys(i).forEach((l) => {
              o[l] = i[l] ? i[l] : "";
            }),
            E.jsx(oc, { ...o }, i.title)
          );
        })
      : E.jsx("p", { children: "no items to show" });
  return E.jsx(Mi, {
    partialVisibility: !0,
    minTopValue: 400,
    onChange: (i) => {
      i && e("portfolio");
    },
    children: E.jsxs("section", {
      id: "portfolio",
      children: [
        E.jsx("h2", { className: "font-heading", children: "Portfolio" }),
        E.jsx("div", { className: "project-wrapper", children: r }),
      ],
    }),
  });
};
Bm.propTypes = { setCurrentSection: K.func };
const HS = "http://localhost:8000/api",
  $S = (e) => {
    $l.get(`${HS}/reviews/`)
      .then((t) => {
        e(t.data);
      })
      .catch((t) => {
        console.error(t);
      });
  },
  Wm = ({ title: e, student: t, message: n, lessons: r }) =>
    E.jsxs("blockquote", {
      className: "review-card",
      children: [
        E.jsxs("div", {
          children: [E.jsx("h4", { children: e }), E.jsx("p", { children: n })],
        }),
        E.jsxs("cite", { children: [t, ", ", r, " lessons"] }),
      ],
    });
Wm.propTypes = {
  title: K.string,
  student: K.string,
  message: K.string,
  lessons: K.number,
};
function ff(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ff(Object(n), !0).forEach(function (r) {
          ee(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ff(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ze(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Ue(e, t, n) {
  return (
    t && pf(e.prototype, t),
    n && pf(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ee(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function de() {
  return (de = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
function Je(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Hm(e, t);
}
function Ka(e) {
  return (Ka = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(e);
}
function Hm(e, t) {
  return (Hm = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (n, r) {
        return (n.__proto__ = r), n;
      })(e, t);
}
function VS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function qS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i;
}
function Ne(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qS(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function X(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function KS(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return X(e);
}
function et(e) {
  var t = VS();
  return function () {
    var n,
      r = Ka(e);
    if (t) {
      var i = Ka(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return KS(this, n);
  };
}
function Is(e) {
  return YS(e) || GS(e) || QS(e) || XS();
}
function YS(e) {
  if (Array.isArray(e)) return Ya(e);
}
function GS(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function QS(e, t) {
  if (e) {
    if (typeof e == "string") return Ya(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? Ya(e, t)
        : void 0
    );
  }
}
function Ya(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function XS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $m(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
function Vm() {}
function qm() {}
function fe(e) {
  return e
    .map(function (t) {
      return t === !1 ? null : t;
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
function hf(e, t) {
  return ((100 / e) * t) / t;
}
function mf(e, t) {
  return (100 * e) / t;
}
function it(e) {
  return "".concat(e, "%");
}
function Vl(e, t, n) {
  if (e === t) return !0;
  var r = nt[Qa(e)],
    i = nt[Qa(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function gf(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, o = r.length; (i = r[--o]); )
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function ZS(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--; ) if (!Vl(e[r], t[r], n)) return !1;
  return !0;
}
function JS(e, t, n) {
  if (typeof e.equal == "function") return n.push([e, t]), e.equal(t, n);
  var r = yf(e),
    i = yf(t),
    o = r.length;
  if (o !== i.length) return !1;
  for (r.sort(), i.sort(); o--; ) if (r[o] !== i[o]) return !1;
  for (n.push([e, t]), o = r.length; o--; ) {
    var l = r[o];
    if (!Vl(e[l], t[l], n)) return !1;
  }
  return !0;
}
function yf(e) {
  var t = [];
  for (var n in e) n !== "constructor" && t.push(n);
  return t;
}
function ew(e) {
  return !!e && typeof e == "object";
}
function tw(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || nw(e);
}
function nw(e) {
  return e.$$typeof === pw;
}
function rw(e) {
  return Array.isArray(e) ? [] : {};
}
function ml(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? bi(rw(e), e, t) : e;
}
function iw(e, t, n) {
  return e.concat(t).map(function (r) {
    return ml(r, n);
  });
}
function ow(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Object.keys(e).forEach(function (i) {
        r[i] = ml(e[i], n);
      }),
    Object.keys(t).forEach(function (i) {
      n.isMergeableObject(t[i]) && e[i]
        ? (r[i] = bi(e[i], t[i], n))
        : (r[i] = ml(t[i], n));
    }),
    r
  );
}
function bi(e, t, n) {
  ((n = n || {}).arrayMerge = n.arrayMerge || iw),
    (n.isMergeableObject = n.isMergeableObject || dw);
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : ow(e, t, n)
    : ml(t, n);
}
function Tt(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return {};
          },
    n = (function (r) {
      function i(l, s) {
        var a;
        return (
          ze(this, i),
          (a = o.call(this, l, s)),
          (a.state = t(ar({}, s.state))),
          (a.updateStateProps = a.updateStateProps.bind(X(a))),
          a
        );
      }
      Je(i, r);
      var o = et(i);
      return (
        Ue(i, [
          {
            key: "componentDidMount",
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: "shouldComponentUpdate",
            value: function (l, s) {
              return !wf(s, this.state) || !wf(l, this.props);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.context.unsubscribe(this.updateStateProps);
            },
          },
          {
            key: "updateStateProps",
            value: function () {
              this.setState(t(ar({}, this.context.state)));
            },
          },
          {
            key: "render",
            value: function () {
              var l = this,
                s = zo(this.state, this.props);
              return H.createElement(
                e,
                de(
                  {
                    ref: function (a) {
                      l.instance = a;
                    },
                  },
                  s,
                  {
                    carouselStore: {
                      getStoreState: this.context.getStoreState,
                      masterSpinnerError: this.context.masterSpinnerError,
                      masterSpinnerSuccess: this.context.masterSpinnerSuccess,
                      setStoreState: this.context.setStoreState,
                      subscribeMasterSpinner:
                        this.context.subscribeMasterSpinner,
                      unsubscribeAllMasterSpinner:
                        this.context.unsubscribeAllMasterSpinner,
                      unsubscribeMasterSpinner:
                        this.context.unsubscribeMasterSpinner,
                    },
                  }
                ),
                this.props.children
              );
            },
          },
        ]),
        i
      );
    })(H.Component);
  return (
    ee(n, "contextType", lc),
    ee(n, "propTypes", { children: Ie.children }),
    ee(n, "defaultProps", { children: null }),
    n
  );
}
var lw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  sw = lw;
qm.resetWarningCache = Vm;
var aw = function () {
    function e(r, i, o, l, s, a) {
      if (a !== sw) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((u.name = "Invariant Violation"), u);
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: qm,
      resetWarningCache: Vm,
    };
    return (n.PropTypes = n), n;
  },
  S = $m(function (e) {
    e.exports = aw();
  }),
  Fs = "loading",
  vf = "success",
  Sf = "error",
  Ie = {
    children: S.oneOfType([S.arrayOf(S.node), S.node]),
    direction: S.oneOf(["forward", "backward"]),
    height: function (e, t) {
      var n = e[t];
      return e.orientation !== "vertical" ||
        (n !== null && typeof n == "number")
        ? null
        : new Error(
            "Missing required property '".concat(
              t,
              "' when orientation is vertical.  You must supply a number representing the height in pixels"
            )
          );
    },
    orientation: S.oneOf(["horizontal", "vertical"]),
    isBgImage: function (e, t) {
      return e[t] === !0 && e.tag === "img"
        ? new Error(
            "HTML img elements should not have a backgroundImage.  Please use ".concat(
              t,
              " for other block-level HTML tags, like div, a, section, etc..."
            )
          )
        : null;
    },
  },
  Fo = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  uw = { buttonBack: "buttonBack___1mlaL" },
  cw = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "step",
    "totalSlides",
    "visibleSlides",
    "infinite",
  ],
  Ga = (function (e) {
    function t(r) {
      var i;
      return (
        ze(this, t),
        (i = n.call(this, r)),
        (i.handleOnClick = i.handleOnClick.bind(X(i))),
        i
      );
    }
    Je(t, e);
    var n = et(t);
    return (
      Ue(
        t,
        [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                o = i.carouselStore,
                l = i.currentSlide,
                s = i.onClick,
                a = i.step,
                u = i.infinite,
                d = i.visibleSlides,
                c = i.totalSlides - d,
                f = Math.max(l - a, 0);
              u && (f = l === 0 ? c : f),
                o.setStoreState(
                  { currentSlide: f, isPlaying: !1 },
                  s !== null && s.call(this, r)
                );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.className),
                o =
                  (r.currentSlide,
                  r.disabled,
                  r.onClick,
                  r.step,
                  r.totalSlides,
                  r.visibleSlides,
                  r.infinite),
                l = Ne(r, cw),
                s = fe([uw.buttonBack, "carousel__back-button", i]),
                a = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  o
                );
              return H.createElement(
                "button",
                de(
                  {
                    type: "button",
                    "aria-label": "previous",
                    className: s,
                    onClick: this.handleOnClick,
                    disabled: a,
                  },
                  l
                ),
                this.props.children
              );
            },
          },
        ],
        [
          {
            key: "setDisabled",
            value: function (r, i, o) {
              return r !== null ? r : i === 0 && !o;
            },
          },
        ]
      ),
      t
    );
  })(H.Component);
ee(Ga, "propTypes", {
  carouselStore: S.object.isRequired,
  children: Ie.children.isRequired,
  className: S.string,
  currentSlide: S.number.isRequired,
  disabled: S.bool,
  onClick: S.func,
  step: S.number.isRequired,
  totalSlides: S.number.isRequired,
  visibleSlides: S.number.isRequired,
  infinite: S.bool,
}),
  ee(Ga, "defaultProps", {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  });
var Qa = $m(function (e, t) {
  var n = {}.toString,
    r = typeof window < "u" ? window.Node : Function;
  e.exports = t = function (o) {
    var l = typeof o;
    if (l != "object") return l;
    if (((l = i[n.call(o)]), l == "object"))
      return o instanceof Map ? "map" : o instanceof Set ? "set" : "object";
    if (l) return l;
    if (o instanceof r)
      switch (o.nodeType) {
        case 1:
          return "element";
        case 3:
          return "text-node";
        case 9:
          return "document";
        case 11:
          return "document-fragment";
        default:
          return "dom-node";
      }
  };
  var i = (t.types = {
    "[object Function]": "function",
    "[object Date]": "date",
    "[object RegExp]": "regexp",
    "[object Arguments]": "arguments",
    "[object Array]": "array",
    "[object Set]": "set",
    "[object String]": "string",
    "[object Null]": "null",
    "[object Undefined]": "undefined",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object Object]": "object",
    "[object Map]": "map",
    "[object Text]": "text-node",
    "[object Uint8Array]": "bit-array",
    "[object Uint16Array]": "bit-array",
    "[object Uint32Array]": "bit-array",
    "[object Uint8ClampedArray]": "bit-array",
    "[object Error]": "error",
    "[object FormData]": "form-data",
    "[object File]": "file",
    "[object Blob]": "blob",
  });
});
Qa.types;
var nt = {};
(nt.number = function (e, t) {
  return e !== e && t !== t;
}),
  (nt.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      nt.object(e, t, n) &&
      Vl(e.prototype, t.prototype)
    );
  }),
  (nt.date = function (e, t) {
    return +e == +t;
  }),
  (nt.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  (nt.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  (nt.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  (nt.arguments = nt["bit-array"] = nt.array = gf(ZS)),
  (nt.object = gf(JS));
var wf = Vl,
  dw = function (e) {
    return ew(e) && !tw(e);
  },
  fw = typeof Symbol == "function" && Symbol.for,
  pw = fw ? Symbol.for("react.element") : 60103;
bi.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (n, r) {
    return bi(n, r, t);
  }, {});
};
var zo = bi,
  lc = H.createContext(),
  Ef = function e(t) {
    return (
      Object.freeze(t),
      Object.getOwnPropertyNames(t).forEach(function (n) {
        !t.hasOwnProperty(n) ||
          t[n] === null ||
          (typeof t[n] != "object" && typeof t[n] != "function") ||
          Object.isFrozen(t[n]) ||
          e(t[n]);
      }),
      t
    );
  },
  hw = { masterSpinnerFinished: !1 },
  mw = (function () {
    function e(t) {
      ze(this, e),
        (this.state = Ef(zo(hw, t))),
        (this.subscriptions = []),
        (this.masterSpinnerSubscriptions = {}),
        (this.setStoreState = this.setStoreState.bind(this)),
        (this.getStoreState = this.getStoreState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.unsubscribe = this.unsubscribe.bind(this)),
        (this.updateSubscribers = this.updateSubscribers.bind(this)),
        (this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(this)),
        (this.unsubscribeMasterSpinner =
          this.unsubscribeMasterSpinner.bind(this)),
        (this.unsubscribeAllMasterSpinner =
          this.unsubscribeAllMasterSpinner.bind(this)),
        (this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this)),
        (this.masterSpinnerError = this.masterSpinnerError.bind(this));
    }
    return (
      Ue(e, [
        {
          key: "setStoreState",
          value: function (t, n) {
            (this.state = Ef(zo(this.state, t))), this.updateSubscribers(n);
          },
        },
        {
          key: "getStoreState",
          value: function () {
            return zo({}, this.state);
          },
        },
        {
          key: "subscribe",
          value: function (t) {
            this.subscriptions.push(t);
          },
        },
        {
          key: "unsubscribe",
          value: function (t) {
            var n = this.subscriptions.indexOf(t);
            n !== -1 && this.subscriptions.splice(n, 1);
          },
        },
        {
          key: "updateSubscribers",
          value: function (t) {
            this.subscriptions.forEach(function (n) {
              return n();
            }),
              typeof t == "function" && t(this.getStoreState());
          },
        },
        {
          key: "subscribeMasterSpinner",
          value: function (t) {
            Object.keys(this.masterSpinnerSubscriptions).indexOf(t) === -1 &&
              (this.masterSpinnerSubscriptions[t] = {
                success: !1,
                error: !1,
                complete: !1,
              });
          },
        },
        {
          key: "unsubscribeMasterSpinner",
          value: function (t) {
            return (
              Object.keys(this.masterSpinnerSubscriptions).indexOf(t) !== -1 &&
              (this.setMasterSpinnerFinished(),
              delete this.masterSpinnerSubscriptions[t])
            );
          },
        },
        {
          key: "unsubscribeAllMasterSpinner",
          value: function () {
            (this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: "masterSpinnerSuccess",
          value: function (t) {
            (this.masterSpinnerSubscriptions[t].success = !0),
              (this.masterSpinnerSubscriptions[t].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: "masterSpinnerError",
          value: function (t) {
            (this.masterSpinnerSubscriptions[t].error = !0),
              (this.masterSpinnerSubscriptions[t].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: "setMasterSpinnerFinished",
          value: function () {
            this.setStoreState({
              masterSpinnerFinished: this.isMasterSpinnerFinished(),
            });
          },
        },
        {
          key: "isMasterSpinnerFinished",
          value: function () {
            var t = this;
            return (
              Object.keys(this.masterSpinnerSubscriptions).filter(function (n) {
                return t.masterSpinnerSubscriptions[n].complete !== !0;
              }).length === 0
            );
          },
        },
      ]),
      e
    );
  })(),
  gw = [
    "children",
    "className",
    "currentSlide",
    "disableAnimation",
    "disableKeyboard",
    "hasMasterSpinner",
    "interval",
    "isPageScrollLocked",
    "isPlaying",
    "lockOnWindowScroll",
    "naturalSlideHeight",
    "naturalSlideWidth",
    "orientation",
    "playDirection",
    "step",
    "dragStep",
    "tag",
    "totalSlides",
    "touchEnabled",
    "dragEnabled",
    "visibleSlides",
    "infinite",
    "isIntrinsicHeight",
  ],
  so,
  yw =
    ((so = (function (e) {
      function t(r) {
        var i;
        if (
          (ze(this, t),
          (i = n.call(this, r)),
          r.isIntrinsicHeight && r.orientation !== "horizontal")
        )
          throw Error(
            'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.'
          );
        var o = {
          currentSlide: r.currentSlide,
          disableAnimation: r.disableAnimation,
          disableKeyboard: r.disableKeyboard,
          hasMasterSpinner: r.hasMasterSpinner,
          imageErrorCount: 0,
          imageSuccessCount: 0,
          interval: r.interval,
          isPageScrollLocked: r.isPageScrollLocked,
          isPlaying: r.isPlaying,
          lockOnWindowScroll: r.lockOnWindowScroll,
          masterSpinnerThreshold: 0,
          naturalSlideHeight: r.naturalSlideHeight,
          naturalSlideWidth: r.naturalSlideWidth,
          orientation: r.orientation,
          playDirection: r.playDirection,
          privateUnDisableAnimation: !1,
          slideSize: hf(r.totalSlides, r.visibleSlides),
          slideTraySize: mf(r.totalSlides, r.visibleSlides),
          step: r.step,
          dragStep: r.dragStep,
          totalSlides: r.totalSlides,
          touchEnabled: r.touchEnabled,
          dragEnabled: r.dragEnabled,
          visibleSlides: r.visibleSlides,
          infinite: r.infinite,
          isIntrinsicHeight: r.isIntrinsicHeight,
        };
        return (i.carouselStore = new mw(o)), i;
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "componentDidUpdate",
            value: function (r) {
              var i = this,
                o = {};
              [
                "currentSlide",
                "disableAnimation",
                "disableKeyboard",
                "hasMasterSpinner",
                "interval",
                "isPlaying",
                "naturalSlideHeight",
                "naturalSlideWidth",
                "lockOnWindowScroll",
                "orientation",
                "playDirection",
                "step",
                "dragStep",
                "totalSlides",
                "touchEnabled",
                "dragEnabled",
                "visibleSlides",
              ].forEach(function (l) {
                r[l] !== i.props[l] && (o[l] = i.props[l]);
              }),
                this.props.currentSlide !== r.currentSlide &&
                  !this.props.disableAnimation &&
                  ((o.disableAnimation = !0),
                  (o.privateUnDisableAnimation = !0)),
                (this.props.totalSlides === r.totalSlides &&
                  this.props.visibleSlides === r.visibleSlides) ||
                  ((o.slideSize = hf(
                    this.props.totalSlides,
                    this.props.visibleSlides
                  )),
                  (o.slideTraySize = mf(
                    this.props.totalSlides,
                    this.props.visibleSlides
                  ))),
                this.carouselStore.state.currentSlide >=
                  this.props.totalSlides &&
                  (o.currentSlide = Math.max(this.props.totalSlides - 1, 0)),
                Object.keys(o).length > 0 &&
                  this.carouselStore.setStoreState(o);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.carouselStore.unsubscribeAllMasterSpinner();
            },
          },
          {
            key: "getStore",
            value: function () {
              return this.carouselStore;
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i =
                  (r.children,
                  r.className,
                  r.currentSlide,
                  r.disableAnimation,
                  r.disableKeyboard,
                  r.hasMasterSpinner,
                  r.interval,
                  r.isPageScrollLocked,
                  r.isPlaying,
                  r.lockOnWindowScroll,
                  r.naturalSlideHeight,
                  r.naturalSlideWidth,
                  r.orientation,
                  r.playDirection,
                  r.step,
                  r.dragStep,
                  r.tag),
                o =
                  (r.totalSlides,
                  r.touchEnabled,
                  r.dragEnabled,
                  r.visibleSlides,
                  r.infinite,
                  r.isIntrinsicHeight,
                  Ne(r, gw)),
                l = fe(["carousel", this.props.className]);
              return H.createElement(
                i,
                de({ className: l }, o),
                H.createElement(
                  lc.Provider,
                  { value: this.carouselStore },
                  this.props.children
                )
              );
            },
          },
        ]),
        t
      );
    })(H.Component)),
    ee(so, "propTypes", {
      children: Ie.children.isRequired,
      className: S.string,
      currentSlide: S.number,
      disableAnimation: S.bool,
      disableKeyboard: S.bool,
      hasMasterSpinner: S.bool,
      interval: S.number,
      isPageScrollLocked: S.bool,
      isPlaying: S.bool,
      lockOnWindowScroll: S.bool,
      naturalSlideHeight: S.number.isRequired,
      naturalSlideWidth: S.number.isRequired,
      orientation: Ie.orientation,
      playDirection: Ie.direction,
      step: S.number,
      dragStep: S.number,
      tag: S.string,
      totalSlides: S.number.isRequired,
      touchEnabled: S.bool,
      dragEnabled: S.bool,
      visibleSlides: S.number,
      infinite: S.bool,
      isIntrinsicHeight: S.bool,
    }),
    ee(so, "defaultProps", {
      className: null,
      currentSlide: 0,
      disableAnimation: !1,
      disableKeyboard: !1,
      hasMasterSpinner: !1,
      interval: 5e3,
      isPageScrollLocked: !1,
      isPlaying: !1,
      lockOnWindowScroll: !1,
      orientation: "horizontal",
      playDirection: "forward",
      step: 1,
      dragStep: 1,
      tag: "div",
      touchEnabled: !0,
      dragEnabled: !0,
      visibleSlides: 1,
      infinite: !1,
      isIntrinsicHeight: !1,
    }),
    so);
lc.Consumer;
var vw = Tt(Ga, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  Sw = { buttonFirst: "buttonFirst___2rhFr" },
  ww = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "totalSlides",
  ],
  ao,
  Ew =
    ((ao = (function (e) {
      function t() {
        var r;
        return (
          ze(this, t),
          (r = n.call(this)),
          (r.handleOnClick = r.handleOnClick.bind(X(r))),
          r
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                o = i.carouselStore,
                l = i.onClick;
              o.setStoreState(
                { currentSlide: 0, isPlaying: !1 },
                l !== null && l.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.className),
                o = r.currentSlide,
                l = r.disabled,
                s = (r.onClick, r.totalSlides, Ne(r, ww)),
                a = fe([Sw.buttonFirst, "carousel__first-button", i]),
                u = l !== null ? l : o === 0;
              return H.createElement(
                "button",
                de(
                  {
                    type: "button",
                    "aria-label": "first",
                    className: a,
                    onClick: this.handleOnClick,
                    disabled: u,
                  },
                  s
                ),
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(H.Component)),
    ee(ao, "propTypes", {
      carouselStore: S.object.isRequired,
      children: Ie.children.isRequired,
      className: S.string,
      currentSlide: S.number.isRequired,
      disabled: S.bool,
      onClick: S.func,
      totalSlides: S.number.isRequired,
    }),
    ee(ao, "defaultProps", { className: null, disabled: null, onClick: null }),
    ao);
Tt(Ew, function (e) {
  return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
});
var kw = { buttonNext: "buttonNext___2mOCa" },
  _w = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "step",
    "totalSlides",
    "visibleSlides",
    "infinite",
  ],
  uo,
  xw =
    ((uo = (function (e) {
      function t(r) {
        var i;
        return (
          ze(this, t),
          (i = n.call(this, r)),
          (i.handleOnClick = i.handleOnClick.bind(X(i))),
          i
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(
          t,
          [
            {
              key: "handleOnClick",
              value: function (r) {
                var i = this.props,
                  o = i.currentSlide,
                  l = i.onClick,
                  s = i.step,
                  a = i.carouselStore,
                  u = i.infinite,
                  d = i.totalSlides - i.visibleSlides,
                  c = s + o,
                  f = Math.min(c, d);
                u && (f = d === o ? 0 : f),
                  a.setStoreState(
                    { currentSlide: f, isPlaying: !1 },
                    l !== null && l.call(this, r)
                  );
              },
            },
            {
              key: "render",
              value: function () {
                var r = this.props,
                  i = (r.carouselStore, r.className),
                  o = r.currentSlide,
                  l = r.disabled,
                  s = (r.onClick, r.step, r.totalSlides),
                  a = r.visibleSlides,
                  u = r.infinite,
                  d = Ne(r, _w),
                  c = fe([kw.buttonNext, "carousel__next-button", i]),
                  f = t.setDisabled(l, o, a, s, u);
                return H.createElement(
                  "button",
                  de(
                    {
                      type: "button",
                      "aria-label": "next",
                      className: c,
                      onClick: this.handleOnClick,
                      disabled: f,
                    },
                    d
                  ),
                  this.props.children
                );
              },
            },
          ],
          [
            {
              key: "setDisabled",
              value: function (r, i, o, l, s) {
                return r !== null ? r : i >= l - o && !s;
              },
            },
          ]
        ),
        t
      );
    })(H.PureComponent)),
    ee(uo, "propTypes", {
      carouselStore: S.object.isRequired,
      children: Ie.children.isRequired,
      className: S.string,
      currentSlide: S.number.isRequired,
      disabled: S.bool,
      onClick: S.func,
      step: S.number.isRequired,
      totalSlides: S.number.isRequired,
      visibleSlides: S.number.isRequired,
      infinite: S.bool,
    }),
    ee(uo, "defaultProps", {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    uo),
  bw = Tt(xw, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  Cw = { buttonLast: "buttonLast___2yuh0" },
  Tw = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "totalSlides",
    "visibleSlides",
  ],
  co,
  Ow =
    ((co = (function (e) {
      function t() {
        var r;
        return (
          ze(this, t),
          (r = n.call(this)),
          (r.handleOnClick = r.handleOnClick.bind(X(r))),
          r
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                o = i.carouselStore,
                l = i.onClick,
                s = i.totalSlides,
                a = i.visibleSlides;
              o.setStoreState(
                { currentSlide: s - a, isPlaying: !1 },
                l !== null && l.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.className),
                o = r.currentSlide,
                l = r.disabled,
                s = (r.onClick, r.totalSlides),
                a = r.visibleSlides,
                u = Ne(r, Tw),
                d = fe([Cw.buttonLast, "carousel__last-button", i]),
                c = l !== null ? l : o >= s - a;
              return H.createElement(
                "button",
                de(
                  {
                    type: "button",
                    "aria-label": "last",
                    className: d,
                    onClick: this.handleOnClick,
                    disabled: c,
                  },
                  u
                ),
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(H.Component)),
    ee(co, "propTypes", {
      carouselStore: S.object.isRequired,
      children: Ie.children.isRequired,
      className: S.string,
      currentSlide: S.number.isRequired,
      disabled: S.bool,
      onClick: S.func,
      totalSlides: S.number.isRequired,
      visibleSlides: S.number.isRequired,
    }),
    ee(co, "defaultProps", { className: null, disabled: null, onClick: null }),
    co);
Tt(Ow, function (e) {
  return {
    currentSlide: e.currentSlide,
    totalSlides: e.totalSlides,
    visibleSlides: e.visibleSlides,
  };
});
var Pw = { buttonNext: "buttonNext___3Lm3s" },
  Nw = [
    "carouselStore",
    "children",
    "childrenPaused",
    "childrenPlaying",
    "className",
    "isPlaying",
    "onClick",
  ],
  fo,
  Rw =
    ((fo = (function (e) {
      function t(r) {
        var i;
        return (
          ze(this, t),
          (i = n.call(this, r)),
          (i.handleOnClick = i.handleOnClick.bind(X(i))),
          i
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props.onClick;
              this.props.carouselStore.setStoreState(
                { isPlaying: !this.props.isPlaying },
                i !== null && i.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.children, r.childrenPaused),
                o = r.childrenPlaying,
                l = r.className,
                s = r.isPlaying,
                a = (r.onClick, Ne(r, Nw)),
                u = fe([Pw.buttonNext, "carousel__play-button", l]);
              return H.createElement(
                "button",
                de(
                  {
                    type: "button",
                    "aria-label": "play",
                    className: u,
                    onClick: this.handleOnClick,
                  },
                  a
                ),
                s && o,
                !s && i,
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(H.PureComponent)),
    ee(fo, "propTypes", {
      carouselStore: S.object.isRequired,
      children: S.node,
      childrenPaused: S.node,
      childrenPlaying: S.node,
      className: S.string,
      isPlaying: S.bool.isRequired,
      onClick: S.func,
    }),
    ee(fo, "defaultProps", {
      children: null,
      childrenPaused: null,
      childrenPlaying: null,
      className: null,
      onClick: null,
    }),
    fo);
Tt(Rw, function (e) {
  return { isPlaying: e.isPlaying };
});
var kf = { dot: "dot___3c3SI" },
  Lw = [
    "carouselStore",
    "children",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "selected",
    "slide",
    "totalSlides",
    "visibleSlides",
  ],
  po,
  Aw =
    ((po = (function (e) {
      function t(r) {
        var i;
        return (
          ze(this, t),
          (i = n.call(this, r)),
          (i.handleOnClick = i.handleOnClick.bind(X(i))),
          i
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                o = i.carouselStore,
                l = i.onClick,
                s = i.slide,
                a = i.totalSlides,
                u = i.visibleSlides,
                d = s >= a - u ? a - u : s;
              o.setStoreState(
                { currentSlide: d, isPlaying: !1 },
                l !== null && l.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.children, r.className),
                o = r.currentSlide,
                l = r.disabled,
                s = (r.onClick, r.selected),
                a = r.slide,
                u = (r.totalSlides, r.visibleSlides),
                d = Ne(r, Lw),
                c = a >= o && a < o + u,
                f = typeof s == "boolean" ? s : c,
                w = c === !0,
                y = typeof l == "boolean" ? l : w,
                g = fe([
                  kf.dot,
                  f && kf.dotSelected,
                  "carousel__dot",
                  "carousel__dot--".concat(a),
                  f && "carousel__dot--selected",
                  i,
                ]);
              return H.createElement(
                "button",
                de(
                  {
                    "aria-label": "slide dot",
                    type: "button",
                    onClick: this.handleOnClick,
                    className: g,
                    disabled: y,
                  },
                  d
                ),
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(H.Component)),
    ee(po, "propTypes", {
      carouselStore: S.object.isRequired,
      children: Ie.children,
      className: S.string,
      currentSlide: S.number.isRequired,
      disabled: S.bool,
      onClick: S.func,
      selected: S.bool,
      slide: S.number.isRequired,
      totalSlides: S.number.isRequired,
      visibleSlides: S.number.isRequired,
    }),
    ee(po, "defaultProps", {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    po),
  Mw = Tt(Aw, function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  }),
  Dw = {},
  jw = ["renderDots"],
  Iw = [
    "carouselStore",
    "children",
    "className",
    "currentSlide",
    "dotNumbers",
    "totalSlides",
    "visibleSlides",
    "disableActiveDots",
    "showAsSelectedForCurrentSlideOnly",
    "renderDots",
  ],
  ho,
  Fw =
    ((ho = (function (e) {
      function t() {
        return ze(this, t), n.apply(this, arguments);
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "renderDots",
            value: function () {
              var r = this.props,
                i = r.currentSlide,
                o = r.totalSlides,
                l = r.visibleSlides,
                s = r.disableActiveDots,
                a = r.showAsSelectedForCurrentSlideOnly,
                u = r.renderDots;
              if (u) {
                var d = this.props;
                return d.renderDots, u(Ne(d, jw));
              }
              for (var c = [], f = 0; f < o; f += 1) {
                var w = f >= i && f < i + l,
                  y = f === i,
                  g = a ? y : w,
                  b = f >= o - l ? o - l : f;
                c.push(
                  H.createElement(
                    Mw,
                    { key: f, slide: b, selected: g, disabled: !!s && g },
                    H.createElement(
                      "span",
                      { className: fe["carousel__dot-group-dot"] },
                      this.props.dotNumbers && f + 1
                    )
                  )
                );
              }
              return c;
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.children),
                o = r.className,
                l =
                  (r.currentSlide,
                  r.dotNumbers,
                  r.totalSlides,
                  r.visibleSlides,
                  r.disableActiveDots,
                  r.showAsSelectedForCurrentSlideOnly,
                  r.renderDots,
                  Ne(r, Iw)),
                s = fe([Dw.DotGroup, "carousel__dot-group", o]);
              return H.createElement(
                "div",
                de({ className: s }, l),
                this.renderDots(),
                i
              );
            },
          },
        ]),
        t
      );
    })(H.Component)),
    ee(ho, "propTypes", {
      children: Ie.children,
      className: S.string,
      currentSlide: S.number.isRequired,
      carouselStore: S.object.isRequired,
      totalSlides: S.number.isRequired,
      visibleSlides: S.number.isRequired,
      dotNumbers: S.bool,
      disableActiveDots: S.bool,
      showAsSelectedForCurrentSlideOnly: S.bool,
      renderDots: S.func,
    }),
    ee(ho, "defaultProps", {
      children: null,
      className: null,
      dotNumbers: !1,
      disableActiveDots: !0,
      showAsSelectedForCurrentSlideOnly: !1,
      renderDots: null,
    }),
    ho),
  zw = Tt(Fw, function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  }),
  $r = { image: "image___xtQGH" },
  Uw = ["src", "alt"],
  Bw = [
    "carouselStore",
    "children",
    "className",
    "hasMasterSpinner",
    "isBgImage",
    "onError",
    "onLoad",
    "renderError",
    "renderLoading",
    "style",
    "tag",
  ],
  Xa = (function (e) {
    function t(r) {
      var i;
      return (
        ze(this, t),
        (i = n.call(this, r)),
        (i.state = { imageStatus: Fs }),
        (i.handleImageLoad = i.handleImageLoad.bind(X(i))),
        (i.handleImageError = i.handleImageError.bind(X(i))),
        (i.image = null),
        i
      );
    }
    Je(t, e);
    var n = et(t);
    return (
      Ue(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              t.subscribeMasterSpinner(this.props), this.initImage();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (r) {
              r.src !== this.props.src &&
                (t.unsubscribeMasterSpinner(r),
                t.subscribeMasterSpinner(this.props),
                this.initImage());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              t.unsubscribeMasterSpinner(this.props),
                this.image.removeEventListener("load", this.handleImageLoad),
                this.image.removeEventListener("error", this.handleImageError),
                (this.image = null);
            },
          },
          {
            key: "initImage",
            value: function () {
              if (
                (this.setState({ imageStatus: Fs }),
                (this.image = document.createElement("img")),
                this.image.addEventListener("load", this.handleImageLoad, !1),
                this.image.addEventListener("error", this.handleImageError, !1),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var r = this.image.src;
                (this.image.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                  (this.image.src = r);
              }
            },
          },
          {
            key: "handleImageLoad",
            value: function (r) {
              this.setState({ imageStatus: vf }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(r);
            },
          },
          {
            key: "handleImageError",
            value: function (r) {
              this.setState({ imageStatus: Sf }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerError(this.props.src),
                this.props.onError && this.props.onError(r);
            },
          },
          {
            key: "tempTag",
            value: function () {
              return this.props.tag === "img" ? "div" : this.props.tag;
            },
          },
          {
            key: "customRender",
            value: function (r) {
              return typeof this.props[r] == "function"
                ? this.props[r]()
                : this.props.children;
            },
          },
          {
            key: "renderLoading",
            value: function (r) {
              var i = this.tempTag(),
                o = fe([
                  $r.image,
                  $r.imageLoading,
                  "carousel__image",
                  this.props.isBgImage && "carousel__image--with-background",
                  "carousel__image--loading",
                  this.props.className,
                ]);
              return H.createElement(
                i,
                de({ className: o }, r),
                this.customRender("renderLoading")
              );
            },
          },
          {
            key: "renderError",
            value: function (r) {
              var i = this.tempTag(),
                o = fe([
                  $r.image,
                  $r.imageError,
                  "carousel__image",
                  this.props.isBgImage && "carousel__image--with-background",
                  "carousel__image--error",
                  this.props.className,
                ]);
              return H.createElement(
                i,
                de({ className: o }, r),
                this.customRender("renderError")
              );
            },
          },
          {
            key: "renderSuccess",
            value: function (r) {
              var i = this.props,
                o = i.style,
                l = i.tag,
                s = fe([
                  $r.image,
                  "carousel__image",
                  this.props.isBgImage && "carousel__image--with-background",
                  "carousel__image--success",
                  this.props.className,
                ]),
                a = de({}, o),
                u = r;
              if (l !== "img") {
                var d = r.src;
                r.alt,
                  (u = Ne(r, Uw)),
                  (a = de({}, o, {
                    backgroundImage: 'url("'.concat(d, '")'),
                    backgroundSize: "cover",
                  }));
              }
              return H.createElement(
                l,
                de({ className: s, style: a }, u),
                this.props.children
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i =
                  (r.carouselStore,
                  r.children,
                  r.className,
                  r.hasMasterSpinner,
                  r.isBgImage,
                  r.onError,
                  r.onLoad,
                  r.renderError,
                  r.renderLoading,
                  r.style,
                  r.tag,
                  Ne(r, Bw));
              switch (this.state.imageStatus) {
                case Fs:
                  return this.renderLoading(i);
                case vf:
                  return this.renderSuccess(i);
                case Sf:
                  return this.renderError(i);
                default:
                  throw new Error("unknown value for this.state.imageStatus");
              }
            },
          },
        ],
        [
          {
            key: "subscribeMasterSpinner",
            value: function (r) {
              r.hasMasterSpinner &&
                r.carouselStore.subscribeMasterSpinner(r.src);
            },
          },
          {
            key: "unsubscribeMasterSpinner",
            value: function (r) {
              r.hasMasterSpinner &&
                r.carouselStore.unsubscribeMasterSpinner(r.src);
            },
          },
        ]
      ),
      t
    );
  })(H.Component);
ee(Xa, "propTypes", {
  alt: S.string,
  carouselStore: S.object.isRequired,
  children: Ie.children,
  className: S.string,
  hasMasterSpinner: S.bool.isRequired,
  isBgImage: Ie.isBgImage,
  onError: S.func,
  onLoad: S.func,
  renderError: S.func,
  renderLoading: S.func,
  src: S.string.isRequired,
  style: S.object,
  tag: S.string,
}),
  ee(Xa, "defaultProps", {
    alt: "",
    children: null,
    className: null,
    isBgImage: !1,
    onError: null,
    onLoad: null,
    renderError: null,
    renderLoading: null,
    style: null,
    tag: "img",
  });
var _f = Tt(Xa, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  Ww = { spinner: "spinner___27VUp", spin: "spin___S3UuE" },
  Hw = ["className"],
  mo,
  Km =
    ((mo = (function (e) {
      function t() {
        return ze(this, t), n.apply(this, arguments);
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.className,
                o = Ne(r, Hw),
                l = fe([Ww.spinner, "carousel__spinner", i]);
              return H.createElement("div", de({ className: l }, o));
            },
          },
        ]),
        t
      );
    })(H.PureComponent)),
    ee(mo, "propTypes", { className: S.string }),
    ee(mo, "defaultProps", { className: null }),
    mo),
  Yn = {
    container: "container___2O72F",
    overlay: "overlay___IV4qY",
    hover: "hover___MYy31",
    zoom: "zoom___3kqYk",
    loading: "loading___1pvNI",
    imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
  },
  $w = [
    "alt",
    "bgImageProps",
    "bgImageTag",
    "carouselStore",
    "className",
    "imageClassName",
    "overlayClassName",
    "isPinchZoomEnabled",
    "spinner",
    "src",
    "srcZoomed",
    "tag",
  ],
  go,
  Vw = 2,
  qw = 3,
  Kw =
    ((go = (function (e) {
      function t(r) {
        var i;
        return (
          ze(this, t),
          (i = n.call(this, r)),
          (i.state = {
            isImageLoading: !0,
            isHovering: !1,
            isZooming: !1,
            x: null,
            y: null,
            scale: 1,
          }),
          (i.tpCache = {}),
          (i.handleImageComplete = i.handleImageComplete.bind(X(i))),
          (i.handleOnMouseMove = i.handleOnMouseMove.bind(X(i))),
          (i.handleOnMouseOut = i.handleOnMouseOut.bind(X(i))),
          (i.handleOnMouseOver = i.handleOnMouseOver.bind(X(i))),
          (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(X(i))),
          (i.handleOnTouchMove = i.handleOnTouchMove.bind(X(i))),
          (i.handleOnTouchStart = i.handleOnTouchStart.bind(X(i))),
          i
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(
          t,
          [
            {
              key: "componentDidUpdate",
              value: function (r, i) {
                i.isZooming === !1 &&
                  this.state.isZooming === !0 &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !0,
                  }),
                  i.isZooming === !0 &&
                    this.state.isZooming === !1 &&
                    this.props.carouselStore.setStoreState({
                      isPageScrollLocked: !1,
                    });
              },
            },
            {
              key: "handleImageComplete",
              value: function () {
                this.setState({ isImageLoading: !1 });
              },
            },
            {
              key: "handleOnMouseOver",
              value: function () {
                this.state.isZooming ||
                  this.setState({ isHovering: !0, scale: Vw });
              },
            },
            {
              key: "handleOnMouseOut",
              value: function () {
                this.state.isZooming ||
                  this.setState({ isHovering: !1, scale: 1 });
              },
            },
            {
              key: "handleOnMouseMove",
              value: function (r) {
                if (!this.state.isZooming) {
                  var i = it(
                      (r.nativeEvent.offsetX / r.target.offsetWidth) * 100
                    ),
                    o = it(
                      (r.nativeEvent.offsetY / r.target.offsetHeight) * 100
                    );
                  this.setState({ x: i, y: o });
                }
              },
            },
            {
              key: "handleOnTouchStart",
              value: function (r) {
                var i = this;
                this.props.isPinchZoomEnabled &&
                  (Is(r.targetTouches).forEach(function (o) {
                    i.tpCache[o.identifier] = {
                      clientX: o.clientX,
                      clientY: o.clientY,
                    };
                  }),
                  this.setState(function (o) {
                    return {
                      isZooming:
                        o.isZooming || Object.keys(i.tpCache).length > 1,
                    };
                  }));
              },
            },
            {
              key: "handleOnTouchMove",
              value: function (r) {
                var i = this;
                if (this.state.isZooming) {
                  r.persist();
                  var o = Is(r.targetTouches)
                    .filter(function (b) {
                      return i.tpCache[b.identifier];
                    })
                    .slice(0, 2);
                  if (o.length === 2) {
                    r.stopPropagation();
                    var l = r.target.getBoundingClientRect(),
                      s = o[0].identifier,
                      a = o[1].identifier,
                      u = {
                        x1: this.tpCache[s].clientX,
                        y1: this.tpCache[s].clientY,
                        x2: this.tpCache[a].clientX,
                        y2: this.tpCache[a].clientY,
                      };
                    u.distance = t.distanceBetweenTwoTouches(ar({}, u));
                    var d = t.midpointBetweenTwoTouches(ar({}, u));
                    (u.cx = d.x), (u.cy = d.y);
                    var c = {
                      x1: o[0].clientX,
                      y1: o[0].clientY,
                      x2: o[1].clientX,
                      y2: o[1].clientY,
                    };
                    c.distance = t.distanceBetweenTwoTouches(ar({}, c));
                    var f = t.midpointBetweenTwoTouches(ar({}, c));
                    (c.cx = f.x), (c.cy = f.y);
                    var w = it(
                        Fo({
                          min: 0,
                          max: 100,
                          x: ((c.cx - l.left) / l.width) * 100,
                        })
                      ),
                      y = it(
                        Fo({
                          min: 0,
                          max: 100,
                          x: ((c.cy - l.top) / l.height) * 100,
                        })
                      ),
                      g = function (b) {
                        return Fo({
                          min: 1,
                          max: qw,
                          x: b.scale + (c.distance - u.distance) / 100,
                        });
                      };
                    this.setState(function (b) {
                      return { isZooming: g(b) !== 1, scale: g(b), x: w, y };
                    });
                  }
                }
              },
            },
            {
              key: "handleOnTouchEnd",
              value: function (r) {
                var i = this;
                this.props.isPinchZoomEnabled &&
                  (Is(r.changedTouches).forEach(function (o) {
                    delete i.tpCache[o.identifier];
                  }),
                  Object.keys(this.tpCache).length === 0 &&
                    this.setState({ isZooming: !1 }));
              },
            },
            {
              key: "renderLoading",
              value: function () {
                if (this.state.isImageLoading) {
                  var r = this.props.spinner;
                  return H.createElement(
                    "div",
                    {
                      className: fe([
                        Yn.imageLoadingSpinnerContainer,
                        "carousel__image-loading-spinner-container",
                      ]),
                    },
                    r && r(),
                    !r && H.createElement(Km, null)
                  );
                }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var r = this.props,
                  i = r.alt,
                  o = r.bgImageProps,
                  l = r.bgImageTag,
                  s = (r.carouselStore, r.className),
                  a = r.imageClassName,
                  u = r.overlayClassName,
                  d = (r.isPinchZoomEnabled, r.spinner, r.src),
                  c = r.srcZoomed,
                  f = r.tag,
                  w = Ne(r, $w),
                  y = fe([Yn.container, s]),
                  g = fe([Yn.image, "carousel__zoom-image", a]),
                  b = fe([
                    Yn.overlay,
                    "carousel__zoom-image-overlay",
                    this.state.isHovering && Yn.hover,
                    this.state.isZooming && Yn.zoom,
                    this.state.isHovering &&
                      "carousel__zoom-image-overlay--hovering",
                    this.state.isZooming &&
                      "carousel__zoom-image-overlay--zooming",
                    u,
                  ]),
                  h = {};
                return (
                  (this.state.isHovering || this.state.isZooming) &&
                    ((h.transformOrigin = ""
                      .concat(this.state.x, " ")
                      .concat(this.state.y)),
                    (h.transform = "scale(".concat(this.state.scale, ")"))),
                  H.createElement(
                    f,
                    de({ className: y }, w),
                    H.createElement(
                      _f,
                      de(
                        {
                          alt: i,
                          className: g,
                          tag: l,
                          src: d,
                          onLoad: this.handleImageComplete,
                          onError: this.handleImageComplete,
                        },
                        o
                      )
                    ),
                    H.createElement(_f, {
                      className: b,
                      tag: "div",
                      src: c || d,
                      style: h,
                      isBgImage: !0,
                      onFocus: this.handleOnMouseOver,
                      onMouseOver: this.handleOnMouseOver,
                      onBlur: this.handleOnMouseOut,
                      onMouseOut: this.handleOnMouseOut,
                      onMouseMove: this.handleOnMouseMove,
                      onTouchStart: this.handleOnTouchStart,
                      onTouchEnd: this.handleOnTouchEnd,
                      onTouchMove: this.handleOnTouchMove,
                    }),
                    this.renderLoading()
                  )
                );
              },
            },
          ],
          [
            {
              key: "midpointBetweenTwoTouches",
              value: function (r) {
                var i = r.x1,
                  o = r.y1;
                return { x: (i + r.x2) / 2, y: (o + r.y2) / 2 };
              },
            },
            {
              key: "distanceBetweenTwoTouches",
              value: function (r) {
                var i = r.x1,
                  o = r.y1,
                  l = r.x2,
                  s = r.y2;
                return Math.sqrt(Math.pow(l - i, 2) + Math.pow(s - o, 2));
              },
            },
          ]
        ),
        t
      );
    })(H.Component)),
    ee(go, "propTypes", {
      alt: S.string,
      bgImageProps: S.object,
      bgImageTag: S.string,
      carouselStore: S.object.isRequired,
      className: S.string,
      imageClassName: S.string,
      overlayClassName: S.string,
      spinner: S.func,
      src: S.string.isRequired,
      srcZoomed: S.string,
      tag: S.string,
      isPinchZoomEnabled: S.bool,
    }),
    ee(go, "defaultProps", {
      alt: void 0,
      bgImageProps: {},
      bgImageTag: "div",
      className: null,
      imageClassName: null,
      overlayClassName: null,
      isPinchZoomEnabled: !0,
      spinner: null,
      srcZoomed: null,
      tag: "div",
    }),
    go);
Tt(Kw, function () {
  return {};
});
var yo = {
    slide: "slide___3-Nqo",
    slideHorizontal: "slideHorizontal___1NzNV",
    slideInner: "slideInner___2mfX9",
    focusRing: "focusRing___1airF",
  },
  Yw = [
    "ariaLabel",
    "carouselStore",
    "children",
    "className",
    "classNameHidden",
    "classNameVisible",
    "currentSlide",
    "index",
    "innerClassName",
    "innerTag",
    "naturalSlideHeight",
    "naturalSlideWidth",
    "onBlur",
    "onFocus",
    "orientation",
    "slideSize",
    "style",
    "tabIndex",
    "tag",
    "totalSlides",
    "visibleSlides",
    "isIntrinsicHeight",
  ],
  vo,
  Gw =
    ((vo = (function (e) {
      function t(r) {
        var i;
        return (
          ze(this, t),
          (i = n.call(this, r)),
          (i.handleOnFocus = i.handleOnFocus.bind(X(i))),
          (i.handleOnBlur = i.handleOnBlur.bind(X(i))),
          (i.state = { focused: !1 }),
          i
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(t, [
          {
            key: "isVisible",
            value: function () {
              var r = this.props,
                i = r.currentSlide,
                o = r.index,
                l = r.visibleSlides;
              return o >= i && o < i + l;
            },
          },
          {
            key: "handleOnFocus",
            value: function (r) {
              var i = this,
                o = this.props.onFocus;
              this.setState({ focused: !0 }, function () {
                o !== null && o.call(i, r);
              });
            },
          },
          {
            key: "handleOnBlur",
            value: function (r) {
              var i = this,
                o = this.props.onBlur;
              this.setState({ focused: !1 }, function () {
                o !== null && o.call(i, r);
              });
            },
          },
          {
            key: "renderFocusRing",
            value: function () {
              return this.state.focused
                ? H.createElement("div", {
                    className: [
                      yo.focusRing,
                      "carousel__slide-focus-ring",
                    ].join(" "),
                  })
                : null;
            },
          },
          {
            key: "render",
            value: function () {
              var r = this,
                i = this.props,
                o = i.ariaLabel,
                l = (i.carouselStore, i.children, i.className),
                s = i.classNameHidden,
                a = i.classNameVisible,
                u = (i.currentSlide, i.index, i.innerClassName),
                d = i.innerTag,
                c = i.naturalSlideHeight,
                f = i.naturalSlideWidth,
                w = (i.onBlur, i.onFocus, i.orientation),
                y = i.slideSize,
                g = i.style,
                b = i.tabIndex,
                h = i.tag,
                p = i.totalSlides,
                m = (i.visibleSlides, i.isIntrinsicHeight),
                k = Ne(i, Yw),
                C = {};
              w === "horizontal"
                ? ((C.width = it(y)),
                  (C.paddingBottom = it((100 * c) / (f * p))))
                : ((C.width = it(100)), (C.paddingBottom = it((100 * c) / f)));
              var A = {};
              m &&
                (w === "horizontal"
                  ? (C.height = "unset")
                  : (C.width = "unset"),
                (C.paddingBottom = "unset"),
                (A.position = "unset"));
              var M = de({}, C, g),
                T = this.isVisible(),
                V = fe([
                  yo.slide,
                  w === "horizontal" && yo.slideHorizontal,
                  "carousel__slide",
                  this.state.focused && "carousel__slide--focused",
                  T && a,
                  T && "carousel__slide--visible",
                  !T && s,
                  !T && "carousel__slide--hidden",
                  l,
                ]),
                j = fe([yo.slideInner, "carousel__inner-slide", u]),
                D = this.isVisible() ? 0 : -1,
                W = typeof b == "number" ? b : D;
              return H.createElement(
                h,
                de(
                  {
                    ref: function (q) {
                      r.tagRef = q;
                    },
                    tabIndex: W,
                    "aria-selected": this.isVisible(),
                    "aria-label": o,
                    role: "option",
                    onFocus: this.handleOnFocus,
                    onBlur: this.handleOnBlur,
                    className: V,
                    style: M,
                  },
                  k
                ),
                H.createElement(
                  d,
                  {
                    ref: function (q) {
                      r.innerTagRef = q;
                    },
                    className: j,
                    style: A,
                  },
                  this.props.children,
                  this.renderFocusRing()
                )
              );
            },
          },
        ]),
        t
      );
    })(H.PureComponent)),
    ee(vo, "propTypes", {
      ariaLabel: S.string,
      carouselStore: S.object,
      children: Ie.children,
      className: S.string,
      classNameHidden: S.string,
      classNameVisible: S.string,
      currentSlide: S.number.isRequired,
      index: S.number.isRequired,
      innerClassName: S.string,
      innerTag: S.string,
      naturalSlideHeight: S.number.isRequired,
      naturalSlideWidth: S.number.isRequired,
      onBlur: S.func,
      onFocus: S.func,
      orientation: Ie.orientation.isRequired,
      slideSize: S.number.isRequired,
      style: S.object,
      tabIndex: S.number,
      tag: S.string,
      totalSlides: S.number.isRequired,
      visibleSlides: S.number.isRequired,
      isIntrinsicHeight: S.bool,
    }),
    ee(vo, "defaultProps", {
      ariaLabel: "slide",
      carouselStore: null,
      children: null,
      className: null,
      classNameHidden: null,
      classNameVisible: null,
      innerClassName: null,
      innerTag: "div",
      onBlur: null,
      onFocus: null,
      style: {},
      tabIndex: null,
      tag: "div",
      isIntrinsicHeight: !1,
    }),
    vo),
  Qw = Tt(Gw, function (e) {
    return {
      currentSlide: e.currentSlide,
      naturalSlideHeight: e.naturalSlideHeight,
      naturalSlideWidth: e.naturalSlideWidth,
      orientation: e.orientation,
      slideSize: e.slideSize,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      isIntrinsicHeight: e.isIntrinsicHeight,
    };
  }),
  Xw = (function () {
    function e() {
      ze(this, e);
    }
    return (
      Ue(
        e,
        [
          {
            key: "parents",
            value: function (t, n) {
              return t.parentNode === null
                ? n
                : this.parents(t.parentNode, n.concat([t]));
            },
          },
          {
            key: "scrollParent",
            value: function (t) {
              for (
                var n = this.parents(t.parentNode, []), r = 0;
                r < n.length;
                r += 1
              )
                if (e.scroll(n[r])) return n[r];
              return document.scrollingElement || document.documentElement;
            },
          },
          {
            key: "getScrollParent",
            value: function (t) {
              return e.isNodeValid(t) ? this.scrollParent(t) : null;
            },
          },
        ],
        [
          {
            key: "style",
            value: function (t, n) {
              return getComputedStyle(t, null).getPropertyValue(n);
            },
          },
          {
            key: "overflow",
            value: function (t) {
              return (
                e.style(t, "overflow") +
                e.style(t, "overflow-y") +
                e.style(t, "overflow-x")
              );
            },
          },
          {
            key: "scroll",
            value: function (t) {
              return /(auto|scroll)/.test(e.overflow(t));
            },
          },
          {
            key: "isNodeValid",
            value: function (t) {
              return t instanceof HTMLElement || t instanceof SVGElement;
            },
          },
        ]
      ),
      e
    );
  })(),
  Nt = {
    horizontalSlider: "horizontalSlider___281Ls",
    horizontalSliderTray: "horizontalSliderTray___1L-0W",
    verticalSlider: "verticalSlider___34ZFD",
    verticalSliderTray: "verticalSliderTray___267D8",
    verticalTray: "verticalTray___12Key",
    verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
    sliderTray: "sliderTray___-vHFQ",
    sliderAnimation: "sliderAnimation___300FY",
    masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
  },
  Zw = [
    "ariaLabel",
    "carouselStore",
    "children",
    "className",
    "classNameAnimation",
    "classNameTray",
    "classNameTrayWrap",
    "currentSlide",
    "disableAnimation",
    "disableKeyboard",
    "dragEnabled",
    "hasMasterSpinner",
    "interval",
    "isPageScrollLocked",
    "isPlaying",
    "lockOnWindowScroll",
    "masterSpinnerFinished",
    "moveThreshold",
    "naturalSlideHeight",
    "naturalSlideWidth",
    "onMasterSpinner",
    "orientation",
    "playDirection",
    "privateUnDisableAnimation",
    "slideSize",
    "slideTraySize",
    "spinner",
    "style",
    "tabIndex",
    "totalSlides",
    "touchEnabled",
    "trayProps",
    "trayTag",
    "visibleSlides",
    "isIntrinsicHeight",
  ],
  Jw = [
    "dragStep",
    "step",
    "infinite",
    "preventVerticalScrollOnTouch",
    "preventingVerticalScroll",
    "horizontalPixelThreshold",
    "verticalPixelThreshold",
  ],
  eE = [
    "className",
    "onClickCapture",
    "onMouseDown",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "ref",
    "style",
  ],
  So,
  tE =
    ((So = (function (e) {
      function t(r) {
        var i;
        return (
          ze(this, t),
          (i = n.call(this, r)),
          (i.getSliderRef = i.getSliderRef.bind(X(i))),
          (i.handleDocumentScroll = i.handleDocumentScroll.bind(X(i))),
          (i.handleOnClickCapture = i.handleOnClickCapture.bind(X(i))),
          (i.handleOnKeyDown = i.handleOnKeyDown.bind(X(i))),
          (i.handleOnMouseDown = i.handleOnMouseDown.bind(X(i))),
          (i.handleOnMouseMove = i.handleOnMouseMove.bind(X(i))),
          (i.handleOnMouseUp = i.handleOnMouseUp.bind(X(i))),
          (i.handleOnTouchCancel = i.handleOnTouchCancel.bind(X(i))),
          (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(X(i))),
          (i.handleOnTouchMove = i.handleOnTouchMove.bind(X(i))),
          (i.handleOnTouchStart = i.handleOnTouchStart.bind(X(i))),
          (i.playBackward = i.playBackward.bind(X(i))),
          (i.playForward = i.playForward.bind(X(i))),
          (i.callCallback = i.callCallback.bind(X(i))),
          (i.blockWindowScroll = i.blockWindowScroll.bind(X(i))),
          (i.state = {
            cancelNextClick: !1,
            deltaX: 0,
            deltaY: 0,
            isBeingMouseDragged: !1,
            isBeingTouchDragged: !1,
            preventingVerticalScroll: !1,
            startX: 0,
            startY: 0,
          }),
          (i.interval = null),
          (i.isDocumentScrolling = null),
          (i.moveTimer = null),
          (i.originalOverflow = null),
          (i.scrollParent = null),
          (i.scrollStopTimer = null),
          i
        );
      }
      Je(t, e);
      var n = et(t);
      return (
        Ue(
          t,
          [
            {
              key: "componentDidMount",
              value: function () {
                this.props.lockOnWindowScroll &&
                  window.addEventListener(
                    "scroll",
                    this.handleDocumentScroll,
                    !1
                  ),
                  (this.props.touchEnabled ||
                    this.props.preventVerticalScrollOnTouch) &&
                    window.addEventListener(
                      "touchmove",
                      this.blockWindowScroll,
                      !1
                    ),
                  document.documentElement.addEventListener(
                    "mouseleave",
                    this.handleOnMouseUp,
                    !1
                  ),
                  document.documentElement.addEventListener(
                    "mousemove",
                    this.handleOnMouseMove,
                    !1
                  ),
                  document.documentElement.addEventListener(
                    "mouseup",
                    this.handleOnMouseUp,
                    !1
                  ),
                  this.props.isPlaying && this.play();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (r) {
                !r.isPlaying && this.props.isPlaying && this.play(),
                  r.isPlaying && !this.props.isPlaying && this.stop(),
                  !r.isPageScrollLocked &&
                    this.props.isPageScrollLocked &&
                    this.lockScroll(),
                  r.isPageScrollLocked &&
                    !this.props.isPageScrollLocked &&
                    this.unlockScroll(),
                  r.privateUnDisableAnimation === !1 &&
                    this.props.privateUnDisableAnimation === !0 &&
                    this.props.carouselStore.setStoreState({
                      privateUnDisableAnimation: !1,
                      disableAnimation: !1,
                    });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.documentElement.removeEventListener(
                  "mouseleave",
                  this.handleOnMouseUp,
                  !1
                ),
                  document.documentElement.removeEventListener(
                    "mousemove",
                    this.handleOnMouseMove,
                    !1
                  ),
                  document.documentElement.removeEventListener(
                    "mouseup",
                    this.handleOnMouseUp,
                    !1
                  ),
                  window.removeEventListener(
                    "scroll",
                    this.handleDocumentScroll,
                    !1
                  ),
                  window.removeEventListener(
                    "touchmove",
                    this.blockWindowScroll,
                    !1
                  ),
                  this.stop(),
                  window.cancelAnimationFrame.call(window, this.moveTimer),
                  window.clearTimeout(this.scrollStopTimer),
                  (this.isDocumentScrolling = null),
                  (this.moveTimer = null),
                  (this.scrollStopTimer = null);
              },
            },
            {
              key: "getSliderRef",
              value: function (r) {
                this.sliderTrayElement = r;
              },
            },
            {
              key: "fakeOnDragStart",
              value: function (r) {
                var i = r.screenX,
                  o = r.screenY,
                  l = r.touchDrag,
                  s = l !== void 0 && l,
                  a = r.mouseDrag,
                  u = a !== void 0 && a;
                this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                  window.cancelAnimationFrame.call(window, this.moveTimer),
                  this.props.orientation === "vertical" &&
                    this.props.carouselStore.setStoreState({
                      isPageScrollLocked: !0,
                    }),
                  this.setState({
                    isBeingTouchDragged: s,
                    isBeingMouseDragged: u,
                    startX: i,
                    startY: o,
                  });
              },
            },
            {
              key: "fakeOnDragMove",
              value: function (r, i) {
                var o = this;
                this.moveTimer = window.requestAnimationFrame.call(
                  window,
                  function () {
                    o.setState(function (l) {
                      return {
                        deltaX: r - l.startX,
                        deltaY: i - l.startY,
                        preventingVerticalScroll:
                          Math.abs(i - l.startY) <=
                            o.props.verticalPixelThreshold &&
                          Math.abs(r - l.startX) >=
                            o.props.horizontalPixelThreshold,
                      };
                    });
                  }
                );
              },
            },
            {
              key: "fakeOnDragEnd",
              value: function () {
                window.cancelAnimationFrame.call(window, this.moveTimer),
                  this.computeCurrentSlide(),
                  this.props.orientation === "vertical" &&
                    this.props.carouselStore.setStoreState({
                      isPageScrollLocked: !1,
                    }),
                  this.setState({
                    deltaX: 0,
                    deltaY: 0,
                    isBeingTouchDragged: !1,
                    isBeingMouseDragged: !1,
                  }),
                  (this.isDocumentScrolling =
                    !this.props.lockOnWindowScroll && null);
              },
            },
            {
              key: "callCallback",
              value: function (r, i) {
                var o = this.props.trayProps;
                o && typeof o[r] == "function" && (i.persist(), o[r](i));
              },
            },
            {
              key: "handleOnMouseDown",
              value: function (r) {
                if (!this.props.dragEnabled)
                  return void this.callCallback("onMouseDown", r);
                r.preventDefault(),
                  this.fakeOnDragStart({
                    screenX: r.screenX,
                    screenY: r.screenY,
                    mouseDrag: !0,
                  }),
                  this.callCallback("onMouseDown", r);
              },
            },
            {
              key: "handleOnMouseMove",
              value: function (r) {
                this.state.isBeingMouseDragged &&
                  (this.setState({ cancelNextClick: !0 }),
                  r.preventDefault(),
                  this.fakeOnDragMove(r.screenX, r.screenY));
              },
            },
            {
              key: "handleOnMouseUp",
              value: function (r) {
                this.state.isBeingMouseDragged &&
                  (r.preventDefault(), this.fakeOnDragEnd());
              },
            },
            {
              key: "handleOnClickCapture",
              value: function (r) {
                if (!this.state.cancelNextClick)
                  return void this.callCallback("onClickCapture", r);
                r.preventDefault(),
                  this.setState({ cancelNextClick: !1 }),
                  this.callCallback("onClickCapture", r);
              },
            },
            {
              key: "handleOnTouchStart",
              value: function (r) {
                if (!this.props.touchEnabled)
                  return void this.callCallback("onTouchStart", r);
                this.props.orientation === "vertical" && r.preventDefault();
                var i = r.targetTouches[0];
                this.fakeOnDragStart({
                  screenX: i.screenX,
                  screenY: i.screenY,
                  touchDrag: !0,
                }),
                  this.callCallback("onTouchStart", r);
              },
            },
            {
              key: "handleDocumentScroll",
              value: function () {
                var r = this;
                this.props.touchEnabled &&
                  ((this.isDocumentScrolling = !0),
                  window.clearTimeout(this.scrollStopTimer),
                  (this.scrollStopTimer = window.setTimeout(function () {
                    r.isDocumentScrolling = !1;
                  }, 66)));
              },
            },
            {
              key: "handleOnTouchMove",
              value: function (r) {
                if (
                  !this.props.touchEnabled ||
                  (this.props.lockOnWindowScroll && this.isDocumentScrolling)
                )
                  return void this.callCallback("onTouchMove", r);
                window.cancelAnimationFrame.call(window, this.moveTimer);
                var i = r.targetTouches[0];
                i &&
                  (this.fakeOnDragMove(i.screenX, i.screenY),
                  this.callCallback("onTouchMove", r));
              },
            },
            {
              key: "forward",
              value: function () {
                var r = this.props,
                  i = r.currentSlide,
                  o = r.step,
                  l = r.totalSlides,
                  s = r.visibleSlides;
                return Math.min(i + o, l - s);
              },
            },
            {
              key: "backward",
              value: function () {
                var r = this.props,
                  i = r.currentSlide,
                  o = r.step;
                return Math.max(i - o, 0);
              },
            },
            {
              key: "handleOnKeyDown",
              value: function (r) {
                var i = r.keyCode,
                  o = this.props,
                  l = o.carouselStore,
                  s = o.currentSlide,
                  a = o.disableKeyboard,
                  u = o.totalSlides,
                  d = o.visibleSlides,
                  c = {};
                a === !0 ||
                  u <= d ||
                  (i === 37 &&
                    (r.preventDefault(),
                    this.focus(),
                    (c.currentSlide = Math.max(0, s - 1)),
                    (c.isPlaying = !1)),
                  i === 39 &&
                    (r.preventDefault(),
                    this.focus(),
                    (c.currentSlide = Math.min(u - d, s + 1)),
                    (c.isPlaying = !1)),
                  l.setStoreState(c));
              },
            },
            {
              key: "playForward",
              value: function () {
                var r = this.props,
                  i = r.carouselStore,
                  o = r.currentSlide;
                i.setStoreState({
                  currentSlide: this.forward() === o ? 0 : this.forward(),
                });
              },
            },
            {
              key: "playBackward",
              value: function () {
                var r = this.props,
                  i = r.carouselStore,
                  o = r.currentSlide,
                  l = r.totalSlides,
                  s = r.visibleSlides;
                i.setStoreState({
                  currentSlide: this.backward() === o ? l - s : this.backward(),
                });
              },
            },
            {
              key: "play",
              value: function () {
                var r = this.props.playDirection;
                this.interval = setInterval(
                  r === "forward" ? this.playForward : this.playBackward,
                  this.props.interval
                );
              },
            },
            {
              key: "stop",
              value: function () {
                window.clearInterval(this.interval), (this.interval = null);
              },
            },
            {
              key: "lockScroll",
              value: function () {
                var r = new Xw();
                (this.scrollParent = r.getScrollParent(this.sliderTrayElement)),
                  this.scrollParent &&
                    ((this.originalOverflow =
                      this.originalOverflow ||
                      this.scrollParent.style.overflow),
                    (this.scrollParent.style.overflow = "hidden"));
              },
            },
            {
              key: "unlockScroll",
              value: function () {
                this.scrollParent &&
                  ((this.scrollParent.style.overflow = this.originalOverflow),
                  (this.originalOverflow = null),
                  (this.scrollParent = null));
              },
            },
            {
              key: "blockWindowScroll",
              value: function (r) {
                this.state.preventingVerticalScroll &&
                  (r.preventDefault(), r.stopImmediatePropagation());
              },
            },
            {
              key: "computeCurrentSlide",
              value: function () {
                var r = t.slideSizeInPx(
                    this.props.orientation,
                    this.sliderTrayElement.clientWidth,
                    this.sliderTrayElement.clientHeight,
                    this.props.totalSlides
                  ),
                  i = t.slidesMoved(
                    this.props.moveThreshold,
                    this.props.orientation,
                    this.state.deltaX,
                    this.state.deltaY,
                    r,
                    this.props.dragStep
                  ),
                  o =
                    this.props.totalSlides -
                    Math.min(this.props.totalSlides, this.props.visibleSlides),
                  l = Fo({ min: 0, max: o, x: this.props.currentSlide + i });
                this.props.infinite &&
                  (this.props.currentSlide >= o && i > 0 && (l = 0),
                  this.props.currentSlide === 0 && i < 0 && (l = o)),
                  this.props.carouselStore.setStoreState({ currentSlide: l });
              },
            },
            {
              key: "focus",
              value: function () {
                this.sliderElement.focus();
              },
            },
            {
              key: "handleOnTouchEnd",
              value: function (r) {
                this.endTouchMove(), this.callCallback("onTouchEnd", r);
              },
            },
            {
              key: "handleOnTouchCancel",
              value: function (r) {
                this.endTouchMove(), this.callCallback("onTouchCancel", r);
              },
            },
            {
              key: "endTouchMove",
              value: function () {
                this.props.touchEnabled && this.fakeOnDragEnd();
              },
            },
            {
              key: "renderMasterSpinner",
              value: function () {
                var r = this.props,
                  i = r.hasMasterSpinner,
                  o = r.masterSpinnerFinished,
                  l = r.spinner;
                return i && !o
                  ? (typeof this.props.onMasterSpinner == "function" &&
                      this.props.onMasterSpinner(),
                    H.createElement(
                      "div",
                      {
                        className: fe([
                          Nt.masterSpinnerContainer,
                          "carousel__master-spinner-container",
                        ]),
                      },
                      l && l(),
                      !l && H.createElement(Km, null)
                    ))
                  : null;
              },
            },
            {
              key: "render",
              value: function () {
                var r = this,
                  i = this.props,
                  o = i.ariaLabel,
                  l = (i.carouselStore, i.children),
                  s = i.className,
                  a = i.classNameAnimation,
                  u = i.classNameTray,
                  d = i.classNameTrayWrap,
                  c = i.currentSlide,
                  f = i.disableAnimation,
                  w =
                    (i.disableKeyboard,
                    i.dragEnabled,
                    i.hasMasterSpinner,
                    i.interval,
                    i.isPageScrollLocked,
                    i.isPlaying,
                    i.lockOnWindowScroll,
                    i.masterSpinnerFinished,
                    i.moveThreshold,
                    i.naturalSlideHeight),
                  y = i.naturalSlideWidth,
                  g = (i.onMasterSpinner, i.orientation),
                  b =
                    (i.playDirection, i.privateUnDisableAnimation, i.slideSize),
                  h = i.slideTraySize,
                  p = (i.spinner, i.style),
                  m = i.tabIndex,
                  k = (i.totalSlides, i.touchEnabled, i.trayProps),
                  C = i.trayTag,
                  A = i.visibleSlides,
                  M = i.isIntrinsicHeight,
                  T = Ne(i, Zw),
                  V = de({}, p),
                  j = {};
                g === "vertical" &&
                  ((j.height = 0),
                  (j.paddingBottom = it((100 * w * A) / y)),
                  (j.width = it(100)));
                var D = {},
                  W = it(b * c * -1);
                (this.state.isBeingTouchDragged ||
                  this.state.isBeingMouseDragged ||
                  f) &&
                  (D.transition = "none"),
                  M && ((D.display = "flex"), (D.alignItems = "stretch")),
                  g === "vertical"
                    ? ((D.transform = "translateY("
                        .concat(W, ") translateY(")
                        .concat(this.state.deltaY, "px)")),
                      (D.width = it(100)),
                      (D.flexDirection = "column"))
                    : ((D.width = it(h)),
                      (D.transform = "translateX("
                        .concat(W, ") translateX(")
                        .concat(this.state.deltaX, "px)")),
                      (D.flexDirection = "row"));
                var q = fe([
                    g === "vertical" ? Nt.verticalSlider : Nt.horizontalSlider,
                    "carousel__slider",
                    g === "vertical"
                      ? "carousel__slider--vertical"
                      : "carousel__slider--horizontal",
                    s,
                  ]),
                  N = fe([
                    Nt.sliderTrayWrap,
                    "carousel__slider-tray-wrapper",
                    g === "vertical"
                      ? Nt.verticalSlideTrayWrap
                      : Nt.horizontalTrayWrap,
                    g === "vertical"
                      ? "carousel__slider-tray-wrap--vertical"
                      : "carousel__slider-tray-wrap--horizontal",
                    d,
                  ]),
                  ke = fe([
                    Nt.sliderTray,
                    a || Nt.sliderAnimation,
                    "carousel__slider-tray",
                    g === "vertical" ? Nt.verticalTray : Nt.horizontalTray,
                    g === "vertical"
                      ? "carousel__slider-tray--vertical"
                      : "carousel__slider-tray--horizontal",
                    u,
                  ]),
                  ne = m !== null ? m : 0,
                  re =
                    (T.dragStep,
                    T.step,
                    T.infinite,
                    T.preventVerticalScrollOnTouch,
                    T.preventingVerticalScroll,
                    T.horizontalPixelThreshold,
                    T.verticalPixelThreshold,
                    Ne(T, Jw)),
                  L =
                    (k.className,
                    k.onClickCapture,
                    k.onMouseDown,
                    k.onTouchCancel,
                    k.onTouchEnd,
                    k.onTouchMove,
                    k.onTouchStart,
                    k.ref,
                    k.style,
                    Ne(k, eE));
                return H.createElement(
                  "div",
                  de(
                    {
                      ref: function (R) {
                        r.sliderElement = R;
                      },
                      className: q,
                      "aria-live": "polite",
                      "aria-label": o,
                      style: V,
                      tabIndex: ne,
                      onKeyDown: this.handleOnKeyDown,
                      role: "listbox",
                    },
                    re
                  ),
                  H.createElement(
                    "div",
                    { className: N, style: j },
                    H.createElement(
                      C,
                      de(
                        {
                          ref: this.getSliderRef,
                          className: ke,
                          style: D,
                          onTouchStart: this.handleOnTouchStart,
                          onTouchMove: this.handleOnTouchMove,
                          onTouchEnd: this.handleOnTouchEnd,
                          onTouchCancel: this.handleOnTouchCancel,
                          onMouseDown: this.handleOnMouseDown,
                          onClickCapture: this.handleOnClickCapture,
                        },
                        L
                      ),
                      l
                    ),
                    this.renderMasterSpinner()
                  )
                );
              },
            },
          ],
          [
            {
              key: "slideSizeInPx",
              value: function (r, i, o, l) {
                return (r === "horizontal" ? i : o) / l;
              },
            },
            {
              key: "slidesMoved",
              value: function (r, i, o, l, s, a) {
                var u = i === "horizontal" ? o : l,
                  d = Math.abs(Math.round(u / s)),
                  c = Math.abs(u) >= s * r ? a : 0,
                  f = Math.max(c, d);
                if (u < 0) return f;
                var w = -f;
                return w === 0 ? 0 : w;
              },
            },
          ]
        ),
        t
      );
    })(H.Component)),
    ee(So, "propTypes", {
      ariaLabel: S.string,
      carouselStore: S.object.isRequired,
      children: S.node.isRequired,
      className: S.string,
      classNameAnimation: S.string,
      classNameTray: S.string,
      classNameTrayWrap: S.string,
      currentSlide: S.number.isRequired,
      disableAnimation: S.bool,
      disableKeyboard: S.bool,
      dragEnabled: S.bool.isRequired,
      dragStep: S.number,
      hasMasterSpinner: S.bool.isRequired,
      infinite: S.bool,
      interval: S.number.isRequired,
      isPageScrollLocked: S.bool.isRequired,
      isPlaying: S.bool.isRequired,
      lockOnWindowScroll: S.bool.isRequired,
      preventVerticalScrollOnTouch: S.bool,
      horizontalPixelThreshold: S.number,
      verticalPixelThreshold: S.number,
      masterSpinnerFinished: S.bool.isRequired,
      moveThreshold: S.number,
      naturalSlideHeight: S.number.isRequired,
      naturalSlideWidth: S.number.isRequired,
      onMasterSpinner: S.func,
      orientation: Ie.orientation.isRequired,
      playDirection: Ie.direction.isRequired,
      privateUnDisableAnimation: S.bool,
      slideSize: S.number.isRequired,
      slideTraySize: S.number.isRequired,
      spinner: S.func,
      step: S.number.isRequired,
      style: S.object,
      tabIndex: S.number,
      totalSlides: S.number.isRequired,
      touchEnabled: S.bool.isRequired,
      trayProps: S.shape({
        className: S.string,
        onClickCapture: S.func,
        onMouseDown: S.func,
        onTouchCancel: S.func,
        onTouchEnd: S.func,
        onTouchMove: S.func,
        onTouchStart: S.func,
        ref: S.shape({}),
        style: S.string,
      }),
      trayTag: S.string,
      visibleSlides: S.number,
      isIntrinsicHeight: S.bool,
    }),
    ee(So, "defaultProps", {
      ariaLabel: "slider",
      className: null,
      classNameAnimation: null,
      classNameTray: null,
      classNameTrayWrap: null,
      disableAnimation: !1,
      disableKeyboard: !1,
      dragStep: 1,
      infinite: !1,
      preventVerticalScrollOnTouch: !0,
      horizontalPixelThreshold: 15,
      verticalPixelThreshold: 10,
      moveThreshold: 0.1,
      onMasterSpinner: null,
      privateUnDisableAnimation: !1,
      spinner: null,
      style: {},
      tabIndex: null,
      trayProps: {},
      trayTag: "div",
      visibleSlides: 1,
      isIntrinsicHeight: !1,
    }),
    So),
  nE = Tt(tE, function (e) {
    return {
      currentSlide: e.currentSlide,
      disableAnimation: e.disableAnimation,
      privateUnDisableAnimation: e.privateUnDisableAnimation,
      disableKeyboard: e.disableKeyboard,
      dragEnabled: e.dragEnabled,
      hasMasterSpinner: e.hasMasterSpinner,
      infinite: e.infinite,
      interval: e.interval,
      isPageScrollLocked: e.isPageScrollLocked,
      isPlaying: e.isPlaying,
      lockOnWindowScroll: e.lockOnWindowScroll,
      preventingVerticalScroll: e.preventingVerticalScroll,
      masterSpinnerFinished: e.masterSpinnerFinished,
      naturalSlideHeight: e.naturalSlideHeight,
      naturalSlideWidth: e.naturalSlideWidth,
      orientation: e.orientation,
      playDirection: e.playDirection,
      slideSize: e.slideSize,
      slideTraySize: e.slideTraySize,
      step: e.step,
      dragStep: e.dragStep,
      totalSlides: e.totalSlides,
      touchEnabled: e.touchEnabled,
      visibleSlides: e.visibleSlides,
      isIntrinsicHeight: e.isIntrinsicHeight,
    };
  });
const rE = "/assets/arrow-chevron-left.svg",
  iE = "/assets/arrow-chevron-right.svg",
  oE = "/assets/arrow-chevron-left-light.svg",
  lE = "/assets/arrow-chevron-right-light.svg";
const Ym = ({ containerWidth: e, themeIsDark: t, setCurrentSection: n }) => {
  const [r, i] = _.useState({}),
    o = e / 400 < 1 ? 1 : e / 400,
    [l, s] = _.useState(o),
    a = t ? oE : rE,
    u = t ? lE : iE;
  _.useEffect(() => {
    $S(i);
  }, []),
    _.useEffect(() => {
      s(o);
    }, [e, o]);
  const d =
    r.length > 0
      ? r.map((c) =>
          E.jsx(
            Qw,
            {
              className: " flex",
              innerClassName: "flex",
              children: E.jsx(Wm, { ...c }),
            },
            c.title
          )
        )
      : E.jsx("p", { children: "no reviews found" });
  return E.jsx(Mi, {
    onChange: (c) => {
      c && n("reviews");
    },
    children: E.jsxs("section", {
      id: "reviews",
      children: [
        E.jsx("h2", { className: "font-heading", children: "Reviews" }),
        E.jsx("br", {}),
        E.jsxs(yw, {
          naturalSlideWidth: 0,
          naturalSlideHeight: 0,
          totalSlides: r.length,
          visibleSlides: l,
          children: [
            E.jsx(zw, { dotNumbers: !0, className: "dot-group" }),
            E.jsxs("div", {
              className: "relative",
              children: [
                E.jsx(vw, {
                  children: E.jsx("span", {
                    className: "carouselButton",
                    children: E.jsx("img", { src: a, alt: "Back" }),
                  }),
                }),
                E.jsx(bw, {
                  children: E.jsx("span", {
                    className: "carouselButton",
                    children: E.jsx("img", { src: u, alt: "Next" }),
                  }),
                }),
                E.jsx(nE, { classNameTray: "flex", children: d }),
              ],
            }),
          ],
        }),
        E.jsx("a", {
          href: "wyzant.com/Tutors/KaeTutorsCS",
          className: "source-link",
          children: "Check out my Wyzant profile for more student reviews!",
        }),
      ],
    }),
  });
};
Ym.propTypes = {
  containerWidth: K.number,
  themeIsDark: K.bool,
  setCurrentSection: K.func,
};
var sE = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
};
const Ci = sE,
  Gm = {};
for (const e of Object.keys(Ci)) Gm[Ci[e]] = e;
const F = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] },
};
var Qm = F;
for (const e of Object.keys(F)) {
  if (!("channels" in F[e])) throw new Error("missing channels property: " + e);
  if (!("labels" in F[e]))
    throw new Error("missing channel labels property: " + e);
  if (F[e].labels.length !== F[e].channels)
    throw new Error("channel and label counts mismatch: " + e);
  const { channels: t, labels: n } = F[e];
  delete F[e].channels,
    delete F[e].labels,
    Object.defineProperty(F[e], "channels", { value: t }),
    Object.defineProperty(F[e], "labels", { value: n });
}
F.rgb.hsl = function (e) {
  const t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255,
    i = Math.min(t, n, r),
    o = Math.max(t, n, r),
    l = o - i;
  let s, a;
  o === i
    ? (s = 0)
    : t === o
    ? (s = (n - r) / l)
    : n === o
    ? (s = 2 + (r - t) / l)
    : r === o && (s = 4 + (t - n) / l),
    (s = Math.min(s * 60, 360)),
    s < 0 && (s += 360);
  const u = (i + o) / 2;
  return (
    o === i ? (a = 0) : u <= 0.5 ? (a = l / (o + i)) : (a = l / (2 - o - i)),
    [s, a * 100, u * 100]
  );
};
F.rgb.hsv = function (e) {
  let t, n, r, i, o;
  const l = e[0] / 255,
    s = e[1] / 255,
    a = e[2] / 255,
    u = Math.max(l, s, a),
    d = u - Math.min(l, s, a),
    c = function (f) {
      return (u - f) / 6 / d + 1 / 2;
    };
  return (
    d === 0
      ? ((i = 0), (o = 0))
      : ((o = d / u),
        (t = c(l)),
        (n = c(s)),
        (r = c(a)),
        l === u
          ? (i = r - n)
          : s === u
          ? (i = 1 / 3 + t - r)
          : a === u && (i = 2 / 3 + n - t),
        i < 0 ? (i += 1) : i > 1 && (i -= 1)),
    [i * 360, o * 100, u * 100]
  );
};
F.rgb.hwb = function (e) {
  const t = e[0],
    n = e[1];
  let r = e[2];
  const i = F.rgb.hsl(e)[0],
    o = (1 / 255) * Math.min(t, Math.min(n, r));
  return (
    (r = 1 - (1 / 255) * Math.max(t, Math.max(n, r))), [i, o * 100, r * 100]
  );
};
F.rgb.cmyk = function (e) {
  const t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255,
    i = Math.min(1 - t, 1 - n, 1 - r),
    o = (1 - t - i) / (1 - i) || 0,
    l = (1 - n - i) / (1 - i) || 0,
    s = (1 - r - i) / (1 - i) || 0;
  return [o * 100, l * 100, s * 100, i * 100];
};
function aE(e, t) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
F.rgb.keyword = function (e) {
  const t = Gm[e];
  if (t) return t;
  let n = 1 / 0,
    r;
  for (const i of Object.keys(Ci)) {
    const o = Ci[i],
      l = aE(e, o);
    l < n && ((n = l), (r = i));
  }
  return r;
};
F.keyword.rgb = function (e) {
  return Ci[e];
};
F.rgb.xyz = function (e) {
  let t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255;
  (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
    (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
    (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92);
  const i = t * 0.4124 + n * 0.3576 + r * 0.1805,
    o = t * 0.2126 + n * 0.7152 + r * 0.0722,
    l = t * 0.0193 + n * 0.1192 + r * 0.9505;
  return [i * 100, o * 100, l * 100];
};
F.rgb.lab = function (e) {
  const t = F.rgb.xyz(e);
  let n = t[0],
    r = t[1],
    i = t[2];
  (n /= 95.047),
    (r /= 100),
    (i /= 108.883),
    (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
    (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
    (i = i > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116);
  const o = 116 * r - 16,
    l = 500 * (n - r),
    s = 200 * (r - i);
  return [o, l, s];
};
F.hsl.rgb = function (e) {
  const t = e[0] / 360,
    n = e[1] / 100,
    r = e[2] / 100;
  let i, o, l;
  if (n === 0) return (l = r * 255), [l, l, l];
  r < 0.5 ? (i = r * (1 + n)) : (i = r + n - r * n);
  const s = 2 * r - i,
    a = [0, 0, 0];
  for (let u = 0; u < 3; u++)
    (o = t + (1 / 3) * -(u - 1)),
      o < 0 && o++,
      o > 1 && o--,
      6 * o < 1
        ? (l = s + (i - s) * 6 * o)
        : 2 * o < 1
        ? (l = i)
        : 3 * o < 2
        ? (l = s + (i - s) * (2 / 3 - o) * 6)
        : (l = s),
      (a[u] = l * 255);
  return a;
};
F.hsl.hsv = function (e) {
  const t = e[0];
  let n = e[1] / 100,
    r = e[2] / 100,
    i = n;
  const o = Math.max(r, 0.01);
  (r *= 2), (n *= r <= 1 ? r : 2 - r), (i *= o <= 1 ? o : 2 - o);
  const l = (r + n) / 2,
    s = r === 0 ? (2 * i) / (o + i) : (2 * n) / (r + n);
  return [t, s * 100, l * 100];
};
F.hsv.rgb = function (e) {
  const t = e[0] / 60,
    n = e[1] / 100;
  let r = e[2] / 100;
  const i = Math.floor(t) % 6,
    o = t - Math.floor(t),
    l = 255 * r * (1 - n),
    s = 255 * r * (1 - n * o),
    a = 255 * r * (1 - n * (1 - o));
  switch (((r *= 255), i)) {
    case 0:
      return [r, a, l];
    case 1:
      return [s, r, l];
    case 2:
      return [l, r, a];
    case 3:
      return [l, s, r];
    case 4:
      return [a, l, r];
    case 5:
      return [r, l, s];
  }
};
F.hsv.hsl = function (e) {
  const t = e[0],
    n = e[1] / 100,
    r = e[2] / 100,
    i = Math.max(r, 0.01);
  let o, l;
  l = (2 - n) * r;
  const s = (2 - n) * i;
  return (
    (o = n * i),
    (o /= s <= 1 ? s : 2 - s),
    (o = o || 0),
    (l /= 2),
    [t, o * 100, l * 100]
  );
};
F.hwb.rgb = function (e) {
  const t = e[0] / 360;
  let n = e[1] / 100,
    r = e[2] / 100;
  const i = n + r;
  let o;
  i > 1 && ((n /= i), (r /= i));
  const l = Math.floor(6 * t),
    s = 1 - r;
  (o = 6 * t - l), l & 1 && (o = 1 - o);
  const a = n + o * (s - n);
  let u, d, c;
  switch (l) {
    default:
    case 6:
    case 0:
      (u = s), (d = a), (c = n);
      break;
    case 1:
      (u = a), (d = s), (c = n);
      break;
    case 2:
      (u = n), (d = s), (c = a);
      break;
    case 3:
      (u = n), (d = a), (c = s);
      break;
    case 4:
      (u = a), (d = n), (c = s);
      break;
    case 5:
      (u = s), (d = n), (c = a);
      break;
  }
  return [u * 255, d * 255, c * 255];
};
F.cmyk.rgb = function (e) {
  const t = e[0] / 100,
    n = e[1] / 100,
    r = e[2] / 100,
    i = e[3] / 100,
    o = 1 - Math.min(1, t * (1 - i) + i),
    l = 1 - Math.min(1, n * (1 - i) + i),
    s = 1 - Math.min(1, r * (1 - i) + i);
  return [o * 255, l * 255, s * 255];
};
F.xyz.rgb = function (e) {
  const t = e[0] / 100,
    n = e[1] / 100,
    r = e[2] / 100;
  let i, o, l;
  return (
    (i = t * 3.2406 + n * -1.5372 + r * -0.4986),
    (o = t * -0.9689 + n * 1.8758 + r * 0.0415),
    (l = t * 0.0557 + n * -0.204 + r * 1.057),
    (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
    (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
    (l = l > 0.0031308 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92),
    (i = Math.min(Math.max(0, i), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (l = Math.min(Math.max(0, l), 1)),
    [i * 255, o * 255, l * 255]
  );
};
F.xyz.lab = function (e) {
  let t = e[0],
    n = e[1],
    r = e[2];
  (t /= 95.047),
    (n /= 100),
    (r /= 108.883),
    (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
    (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
    (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116);
  const i = 116 * n - 16,
    o = 500 * (t - n),
    l = 200 * (n - r);
  return [i, o, l];
};
F.lab.xyz = function (e) {
  const t = e[0],
    n = e[1],
    r = e[2];
  let i, o, l;
  (o = (t + 16) / 116), (i = n / 500 + o), (l = o - r / 200);
  const s = o ** 3,
    a = i ** 3,
    u = l ** 3;
  return (
    (o = s > 0.008856 ? s : (o - 16 / 116) / 7.787),
    (i = a > 0.008856 ? a : (i - 16 / 116) / 7.787),
    (l = u > 0.008856 ? u : (l - 16 / 116) / 7.787),
    (i *= 95.047),
    (o *= 100),
    (l *= 108.883),
    [i, o, l]
  );
};
F.lab.lch = function (e) {
  const t = e[0],
    n = e[1],
    r = e[2];
  let i;
  (i = (Math.atan2(r, n) * 360) / 2 / Math.PI), i < 0 && (i += 360);
  const l = Math.sqrt(n * n + r * r);
  return [t, l, i];
};
F.lch.lab = function (e) {
  const t = e[0],
    n = e[1],
    i = (e[2] / 360) * 2 * Math.PI,
    o = n * Math.cos(i),
    l = n * Math.sin(i);
  return [t, o, l];
};
F.rgb.ansi16 = function (e, t = null) {
  const [n, r, i] = e;
  let o = t === null ? F.rgb.hsv(e)[2] : t;
  if (((o = Math.round(o / 50)), o === 0)) return 30;
  let l =
    30 +
    ((Math.round(i / 255) << 2) |
      (Math.round(r / 255) << 1) |
      Math.round(n / 255));
  return o === 2 && (l += 60), l;
};
F.hsv.ansi16 = function (e) {
  return F.rgb.ansi16(F.hsv.rgb(e), e[2]);
};
F.rgb.ansi256 = function (e) {
  const t = e[0],
    n = e[1],
    r = e[2];
  return t === n && n === r
    ? t < 8
      ? 16
      : t > 248
      ? 231
      : Math.round(((t - 8) / 247) * 24) + 232
    : 16 +
        36 * Math.round((t / 255) * 5) +
        6 * Math.round((n / 255) * 5) +
        Math.round((r / 255) * 5);
};
F.ansi16.rgb = function (e) {
  let t = e % 10;
  if (t === 0 || t === 7)
    return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
  const n = (~~(e > 50) + 1) * 0.5,
    r = (t & 1) * n * 255,
    i = ((t >> 1) & 1) * n * 255,
    o = ((t >> 2) & 1) * n * 255;
  return [r, i, o];
};
F.ansi256.rgb = function (e) {
  if (e >= 232) {
    const o = (e - 232) * 10 + 8;
    return [o, o, o];
  }
  e -= 16;
  let t;
  const n = (Math.floor(e / 36) / 5) * 255,
    r = (Math.floor((t = e % 36) / 6) / 5) * 255,
    i = ((t % 6) / 5) * 255;
  return [n, r, i];
};
F.rgb.hex = function (e) {
  const n = (
    ((Math.round(e[0]) & 255) << 16) +
    ((Math.round(e[1]) & 255) << 8) +
    (Math.round(e[2]) & 255)
  )
    .toString(16)
    .toUpperCase();
  return "000000".substring(n.length) + n;
};
F.hex.rgb = function (e) {
  const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t) return [0, 0, 0];
  let n = t[0];
  t[0].length === 3 &&
    (n = n
      .split("")
      .map((s) => s + s)
      .join(""));
  const r = parseInt(n, 16),
    i = (r >> 16) & 255,
    o = (r >> 8) & 255,
    l = r & 255;
  return [i, o, l];
};
F.rgb.hcg = function (e) {
  const t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255,
    i = Math.max(Math.max(t, n), r),
    o = Math.min(Math.min(t, n), r),
    l = i - o;
  let s, a;
  return (
    l < 1 ? (s = o / (1 - l)) : (s = 0),
    l <= 0
      ? (a = 0)
      : i === t
      ? (a = ((n - r) / l) % 6)
      : i === n
      ? (a = 2 + (r - t) / l)
      : (a = 4 + (t - n) / l),
    (a /= 6),
    (a %= 1),
    [a * 360, l * 100, s * 100]
  );
};
F.hsl.hcg = function (e) {
  const t = e[1] / 100,
    n = e[2] / 100,
    r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n);
  let i = 0;
  return r < 1 && (i = (n - 0.5 * r) / (1 - r)), [e[0], r * 100, i * 100];
};
F.hsv.hcg = function (e) {
  const t = e[1] / 100,
    n = e[2] / 100,
    r = t * n;
  let i = 0;
  return r < 1 && (i = (n - r) / (1 - r)), [e[0], r * 100, i * 100];
};
F.hcg.rgb = function (e) {
  const t = e[0] / 360,
    n = e[1] / 100,
    r = e[2] / 100;
  if (n === 0) return [r * 255, r * 255, r * 255];
  const i = [0, 0, 0],
    o = (t % 1) * 6,
    l = o % 1,
    s = 1 - l;
  let a = 0;
  switch (Math.floor(o)) {
    case 0:
      (i[0] = 1), (i[1] = l), (i[2] = 0);
      break;
    case 1:
      (i[0] = s), (i[1] = 1), (i[2] = 0);
      break;
    case 2:
      (i[0] = 0), (i[1] = 1), (i[2] = l);
      break;
    case 3:
      (i[0] = 0), (i[1] = s), (i[2] = 1);
      break;
    case 4:
      (i[0] = l), (i[1] = 0), (i[2] = 1);
      break;
    default:
      (i[0] = 1), (i[1] = 0), (i[2] = s);
  }
  return (
    (a = (1 - n) * r),
    [(n * i[0] + a) * 255, (n * i[1] + a) * 255, (n * i[2] + a) * 255]
  );
};
F.hcg.hsv = function (e) {
  const t = e[1] / 100,
    n = e[2] / 100,
    r = t + n * (1 - t);
  let i = 0;
  return r > 0 && (i = t / r), [e[0], i * 100, r * 100];
};
F.hcg.hsl = function (e) {
  const t = e[1] / 100,
    r = (e[2] / 100) * (1 - t) + 0.5 * t;
  let i = 0;
  return (
    r > 0 && r < 0.5
      ? (i = t / (2 * r))
      : r >= 0.5 && r < 1 && (i = t / (2 * (1 - r))),
    [e[0], i * 100, r * 100]
  );
};
F.hcg.hwb = function (e) {
  const t = e[1] / 100,
    n = e[2] / 100,
    r = t + n * (1 - t);
  return [e[0], (r - t) * 100, (1 - r) * 100];
};
F.hwb.hcg = function (e) {
  const t = e[1] / 100,
    r = 1 - e[2] / 100,
    i = r - t;
  let o = 0;
  return i < 1 && (o = (r - i) / (1 - i)), [e[0], i * 100, o * 100];
};
F.apple.rgb = function (e) {
  return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
};
F.rgb.apple = function (e) {
  return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
};
F.gray.rgb = function (e) {
  return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
};
F.gray.hsl = function (e) {
  return [0, 0, e[0]];
};
F.gray.hsv = F.gray.hsl;
F.gray.hwb = function (e) {
  return [0, 100, e[0]];
};
F.gray.cmyk = function (e) {
  return [0, 0, 0, e[0]];
};
F.gray.lab = function (e) {
  return [e[0], 0, 0];
};
F.gray.hex = function (e) {
  const t = Math.round((e[0] / 100) * 255) & 255,
    r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
F.rgb.gray = function (e) {
  return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
};
const gl = Qm;
function uE() {
  const e = {},
    t = Object.keys(gl);
  for (let n = t.length, r = 0; r < n; r++)
    e[t[r]] = { distance: -1, parent: null };
  return e;
}
function cE(e) {
  const t = uE(),
    n = [e];
  for (t[e].distance = 0; n.length; ) {
    const r = n.pop(),
      i = Object.keys(gl[r]);
    for (let o = i.length, l = 0; l < o; l++) {
      const s = i[l],
        a = t[s];
      a.distance === -1 &&
        ((a.distance = t[r].distance + 1), (a.parent = r), n.unshift(s));
    }
  }
  return t;
}
function dE(e, t) {
  return function (n) {
    return t(e(n));
  };
}
function fE(e, t) {
  const n = [t[e].parent, e];
  let r = gl[t[e].parent][e],
    i = t[e].parent;
  for (; t[i].parent; )
    n.unshift(t[i].parent), (r = dE(gl[t[i].parent][i], r)), (i = t[i].parent);
  return (r.conversion = n), r;
}
var pE = function (e) {
  const t = cE(e),
    n = {},
    r = Object.keys(t);
  for (let i = r.length, o = 0; o < i; o++) {
    const l = r[o];
    t[l].parent !== null && (n[l] = fE(l, t));
  }
  return n;
};
const Za = Qm,
  hE = pE,
  Gn = {},
  mE = Object.keys(Za);
function gE(e) {
  const t = function (...n) {
    const r = n[0];
    return r == null ? r : (r.length > 1 && (n = r), e(n));
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
function yE(e) {
  const t = function (...n) {
    const r = n[0];
    if (r == null) return r;
    r.length > 1 && (n = r);
    const i = e(n);
    if (typeof i == "object")
      for (let o = i.length, l = 0; l < o; l++) i[l] = Math.round(i[l]);
    return i;
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
mE.forEach((e) => {
  (Gn[e] = {}),
    Object.defineProperty(Gn[e], "channels", { value: Za[e].channels }),
    Object.defineProperty(Gn[e], "labels", { value: Za[e].labels });
  const t = hE(e);
  Object.keys(t).forEach((r) => {
    const i = t[r];
    (Gn[e][r] = yE(i)), (Gn[e][r].raw = gE(i));
  });
});
var vE = Gn;
const Ja = vl(vE),
  xf = "\b(?:\\d{2}|[1-9]?\\d|100)\\b",
  zs = "\\b(?:1\\d{2}|2[0-4]\\d|[1-9]?\\d|25[0-5])\\b",
  SE = "\\b(?:[1-2]\\d{2}|3[0-5]\\d|[1-9]?\\d|360)\\b",
  wE = /^#[0-9A-F]{6}$/i,
  EE = new RegExp(`^rgb\\(${zs},${zs},${zs}\\)`),
  kE = new RegExp(`^hsl\\(${SE},${xf},${xf}\\)`),
  _E = (e) =>
    wE.test(e)
      ? "hex"
      : EE.test(e)
      ? "rgb"
      : kE.test(e)
      ? "hsl"
      : (console.log("no match"), !1),
  bf = (e, t) => e.split(t)[1].replace(/[()]/g, "").split(","),
  xE = (e) => {
    const t = _E(e);
    let [n, r, i] = [0, 0, 0],
      o = [];
    switch (t) {
      case "hex":
        return ([n, r, i] = Ja.hex.hsl(e)), { h: n, s: r, l: i };
      case "rgb":
        return (
          (o = bf(e, t)), ([n, r, i] = Ja.rgb.hsl(o)), { h: n, s: r, l: i }
        );
      case "hsl":
        return ([n, r, i] = bf(e, t)), { h: parseInt(n), s: r, l: i };
    }
  },
  yl = (e, t, n, r) => {
    const [i, o, l] = Ja.hsl.rgb(e, t, n);
    return `rgba(${i},${o},${l}, ${r})`;
  },
  Us = (e, t) => {
    let n = Math.floor(t.h - e / 20) % 360;
    const r = yl(n, t.s, t.l, 1),
      i = yl(n, t.s, t.l, 0);
    return [r, i];
  };
const Xm = ({ themeIsDark: e, refContainer: t, themeClass: n }) => {
  const r = _.useCallback(() => xE(e ? "#14332b" : "#D6F8F1"), [e]),
    [i, o] = _.useState(r()),
    l = t ? "270deg" : "to bottom",
    [s, a] = _.useState(Us(0, i)),
    u = (y, g) => `linear-gradient( ${y}, ${g} 40%, transparent)`,
    [d, c] = _.useState({ backgroundImage: u(l, yl(i)) }),
    [f, w] = _.useState({ backgroundColor: yl(i) });
  return (
    Fl((y) => {
      const g = Us(y, i);
      a(g), c({ backgroundImage: u(l, g[0]) }), w({ backgroundColor: g[0] });
    }, t),
    _.useEffect(() => {
      c({ backgroundImage: u(t ? "270deg" : "to bottom", s[0]) });
    }, [t, s]),
    _.useEffect(() => {
      const y = r();
      o(y);
      const g = Us(scrollY, y);
      a(g), c({ backgroundImage: u(l, g[0]) }), w({ backgroundColor: g[0] });
    }, [e, r, l]),
    E.jsxs(E.Fragment, {
      children: [
        E.jsx("div", { id: "main-bg-shifter", className: n, style: f }),
        E.jsx("div", { id: "nav-bg-shifter", className: n, style: d }),
      ],
    })
  );
};
Xm.propTypes = {
  themeIsDark: K.bool,
  refContainer: K.object,
  themeClass: K.string,
};
const bE = "/assets/handwave.svg",
  CE = "/assets/handwave-light.svg",
  TE = "/assets/icon-close-circle.svg",
  OE = "/assets/icon-close-circle-light.svg";
const Zm = ({ refContainer: e, themeIsDark: t }) => {
  const [n, r] = _.useState("open"),
    [i, o] = _.useState(""),
    [l, s] = _.useState(!1),
    a = t ? OE : TE,
    u = t ? CE : bE,
    d = () => {
      s(!0), f();
      const g = setTimeout(() => {
        s(!1), clearTimeout(g);
      }, 200);
      r(n ? "" : "open");
    },
    c = () => {
      !i && !l && o("waveActive");
    },
    f = () => {
      i && o("");
    };
  Fl((g) => {
    const b = e
      ? e.scrollHeight +
        e.firstChild.getBoundingClientRect().top -
        e.getBoundingClientRect().height -
        e.firstChild.getBoundingClientRect().top
      : document.documentElement.scrollHeight - document.body.scrollHeight;
    g >= b - 5 ? o("waveActive") : i && o("");
  }, e);
  const w = n
      ? E.jsx("svg", {
          viewBox: "0 0 24 24",
          width: "30px",
          children: E.jsx("use", { xlinkHref: a + "#icon" }),
        })
      : "Let's get in touch!",
    y = n ? "close" : "cta";
  return E.jsxs("aside", {
    id: "hire",
    className: n + " " + i + "-parent",
    children: [
      n
        ? E.jsxs(E.Fragment, {
            children: [
              E.jsx("h2", { children: "Hire me!" }),
              E.jsx("p", {
                children: E.jsx("a", {
                  className: "underline",
                  href: "mailto:kae.unterseher@gmail.com?subject=Let's Work Together!",
                  children: "kae.unterseher@gmail.com",
                }),
              }),
              E.jsx("p", { children: "(509) 308-5094" }),
              E.jsxs("p", {
                children: [
                  "Bluesky:",
                  " ",
                  E.jsx("a", {
                    className: "underline",
                    href: "bsky.app/untercurrent",
                    children: "@untercurrent",
                  }),
                ],
              }),
            ],
          })
        : E.jsx(E.Fragment, {
            children: E.jsx("button", {
              type: "button",
              "aria-label": "Open",
              onClick: d,
              onMouseEnter: c,
              onMouseLeave: f,
              children: E.jsx("svg", {
                viewBox: "0 0 131 131",
                width: "50px",
                className: i,
                children: E.jsx("use", { xlinkHref: u + "#hand" }),
              }),
            }),
          }),
      E.jsx("button", {
        type: "button",
        className: y,
        "aria-label": "Close",
        onClick: d,
        children: w,
      }),
    ],
  });
};
Zm.propTypes = { refContainer: K.object, themeIsDark: K.bool };
const PE = (e = window) => {
    const [t, n] = _.useState([0, 0]);
    return (
      _.useLayoutEffect(() => {
        function r() {
          const i =
              e.innerWidth != null
                ? e.innerWidth
                : e.getBoundingClientRect().width,
            o =
              e.innerHeight != null
                ? e.innerHeight
                : e.getBoundingClientRect().height;
          n([i, o]);
        }
        return (
          e.addEventListener("resize", r),
          r(),
          () => e.removeEventListener("resize", r)
        );
      }, [e]),
      t
    );
  },
  NE = (e) => {
    _.useEffect(() => {
      const t = () => {},
        n = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        n.removeEventListener("change", t),
        n.addEventListener("change", t),
        () => n.removeEventListener("change", t)
      );
    });
  };
function Oe() {
  return (
    (Oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oe.apply(this, arguments)
  );
}
function Jm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function RE(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function LE({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: i } = _.useRef(e !== void 0),
    [o, l] = _.useState(t),
    s = i ? e : o,
    a = _.useCallback((u) => {
      i || l(u);
    }, []);
  return [s, a];
}
function eg(...e) {
  return _.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              RE(n, t);
            });
          },
    e
  );
}
class sc {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new sc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
let ql = !0,
  eu = !1;
const AE = new sc(),
  ME = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function DE(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && ME[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function jE(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ql = !0);
}
function Bs() {
  ql = !1;
}
function IE() {
  this.visibilityState === "hidden" && eu && (ql = !0);
}
function FE(e) {
  e.addEventListener("keydown", jE, !0),
    e.addEventListener("mousedown", Bs, !0),
    e.addEventListener("pointerdown", Bs, !0),
    e.addEventListener("touchstart", Bs, !0),
    e.addEventListener("visibilitychange", IE, !0);
}
function zE(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return ql || DE(t);
}
function UE() {
  const e = _.useCallback((i) => {
      i != null && FE(i.ownerDocument);
    }, []),
    t = _.useRef(!1);
  function n() {
    return t.current
      ? ((eu = !0),
        AE.start(100, () => {
          eu = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(i) {
    return zE(i) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function BE(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((i) => {
      r[i] = e[i]
        .reduce((o, l) => {
          if (l) {
            const s = t(l);
            s !== "" && o.push(s), n && n[l] && o.push(n[l]);
          }
          return o;
        }, [])
        .join(" ");
    }),
    r
  );
}
const WE = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function HE(e) {
  const {
      checked: t,
      defaultChecked: n,
      disabled: r,
      onBlur: i,
      onChange: o,
      onFocus: l,
      onFocusVisible: s,
      readOnly: a,
      required: u,
    } = e,
    [d, c] = LE({
      controlled: t,
      default: !!n,
      name: "Switch",
      state: "checked",
    }),
    f = (T) => (V) => {
      var j;
      V.nativeEvent.defaultPrevented ||
        (c(V.target.checked),
        o == null || o(V),
        (j = T.onChange) == null || j.call(T, V));
    },
    { isFocusVisibleRef: w, onBlur: y, onFocus: g, ref: b } = UE(),
    [h, p] = _.useState(!1);
  r && h && p(!1),
    _.useEffect(() => {
      w.current = h;
    }, [h, w]);
  const m = _.useRef(null),
    k = (T) => (V) => {
      var j;
      m.current || (m.current = V.currentTarget),
        g(V),
        w.current === !0 && (p(!0), s == null || s(V)),
        l == null || l(V),
        (j = T.onFocus) == null || j.call(T, V);
    },
    C = (T) => (V) => {
      var j;
      y(V),
        w.current === !1 && p(!1),
        i == null || i(V),
        (j = T.onBlur) == null || j.call(T, V);
    },
    A = eg(b, m);
  return {
    checked: d,
    disabled: !!r,
    focusVisible: h,
    getInputProps: (T = {}) =>
      Oe(
        {
          checked: t,
          defaultChecked: n,
          disabled: r,
          readOnly: a,
          ref: A,
          required: u,
          type: "checkbox",
          role: "switch",
          "aria-checked": t,
        },
        T,
        { onChange: f(T), onFocus: k(T), onBlur: C(T) }
      ),
    inputRef: A,
    readOnly: !!a,
  };
}
function $E(e) {
  return typeof e == "string";
}
function VE(e, t, n) {
  return e === void 0 || $E(e)
    ? t
    : Oe({}, t, { ownerState: Oe({}, t.ownerState, n) });
}
const qE = { disableDefaultClasses: !1 },
  KE = _.createContext(qE);
function YE(e) {
  const { disableDefaultClasses: t } = _.useContext(KE);
  return (n) => (t ? "" : e(n));
}
function GE(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function QE(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function tg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = tg(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Cf() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = tg(e)) && (r && (r += " "), (r += t));
  return r;
}
function Tf(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function XE(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const w = Cf(
        n == null ? void 0 : n.className,
        o,
        i == null ? void 0 : i.className,
        r == null ? void 0 : r.className
      ),
      y = Oe(
        {},
        n == null ? void 0 : n.style,
        i == null ? void 0 : i.style,
        r == null ? void 0 : r.style
      ),
      g = Oe({}, n, i, r);
    return (
      w.length > 0 && (g.className = w),
      Object.keys(y).length > 0 && (g.style = y),
      { props: g, internalRef: void 0 }
    );
  }
  const l = GE(Oe({}, i, r)),
    s = Tf(r),
    a = Tf(i),
    u = t(l),
    d = Cf(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      o,
      i == null ? void 0 : i.className,
      r == null ? void 0 : r.className
    ),
    c = Oe(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      i == null ? void 0 : i.style,
      r == null ? void 0 : r.style
    ),
    f = Oe({}, u, n, a, s);
  return (
    d.length > 0 && (f.className = d),
    Object.keys(c).length > 0 && (f.style = c),
    { props: f, internalRef: u.ref }
  );
}
const ZE = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function wo(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: i,
      skipResolvingSlotProps: o = !1,
    } = e,
    l = Jm(e, ZE),
    s = o ? {} : QE(r, i),
    { props: a, internalRef: u } = XE(Oe({}, l, { externalSlotProps: s })),
    d = eg(
      u,
      s == null ? void 0 : s.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return VE(n, Oe({}, a, { ref: d }), i);
}
const ng = "base";
function JE(e) {
  return `${ng}--${e}`;
}
function ek(e, t) {
  return `${ng}-${e}-${t}`;
}
function rg(e, t) {
  const n = WE[t];
  return n ? JE(n) : ek(e, t);
}
function tk(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = rg(e, r);
    }),
    n
  );
}
const ig = "Switch";
function nk(e) {
  return rg(ig, e);
}
tk(ig, [
  "root",
  "input",
  "track",
  "thumb",
  "checked",
  "disabled",
  "focusVisible",
  "readOnly",
]);
const rk = [
    "checked",
    "defaultChecked",
    "disabled",
    "onBlur",
    "onChange",
    "onFocus",
    "onFocusVisible",
    "readOnly",
    "required",
    "slotProps",
    "slots",
  ],
  ik = (e) => {
    const { checked: t, disabled: n, focusVisible: r, readOnly: i } = e;
    return BE(
      {
        root: [
          "root",
          t && "checked",
          n && "disabled",
          r && "focusVisible",
          i && "readOnly",
        ],
        thumb: ["thumb"],
        input: ["input"],
        track: ["track"],
      },
      YE(nk)
    );
  },
  ok = _.forwardRef(function (t, n) {
    var r, i, o, l;
    const { slotProps: s = {}, slots: a = {} } = t,
      u = Jm(t, rk),
      {
        getInputProps: d,
        checked: c,
        disabled: f,
        focusVisible: w,
        readOnly: y,
      } = HE(t),
      g = Oe({}, t, { checked: c, disabled: f, focusVisible: w, readOnly: y }),
      b = ik(g),
      h = (r = a.root) != null ? r : "span",
      p = wo({
        elementType: h,
        externalSlotProps: s.root,
        externalForwardedProps: u,
        additionalProps: { ref: n },
        ownerState: g,
        className: b.root,
      }),
      m = (i = a.thumb) != null ? i : "span",
      k = wo({
        elementType: m,
        externalSlotProps: s.thumb,
        ownerState: g,
        className: b.thumb,
      }),
      C = (o = a.input) != null ? o : "input",
      A = wo({
        elementType: C,
        getSlotProps: d,
        externalSlotProps: s.input,
        ownerState: g,
        className: b.input,
      }),
      M = a.track === null ? () => null : (l = a.track) != null ? l : "span",
      T = wo({
        elementType: M,
        externalSlotProps: s.track,
        ownerState: g,
        className: b.track,
      });
    return E.jsxs(
      h,
      Oe({}, p, {
        children: [
          E.jsx(M, Oe({}, T)),
          E.jsx(m, Oe({}, k)),
          E.jsx(C, Oe({}, A)),
        ],
      })
    );
  });
const og = ({ themeIsDark: e, toggleDarkMode: t, refContainer: n }) => {
  const [r, i] = _.useState(0),
    [o, l] = _.useState(!0);
  Fl((a) => {
    const u = a - r < 0;
    l(u), i(a);
  }, n);
  const s = o ? "" : "disappear";
  return E.jsxs("div", {
    id: "darkModeSwitch",
    className: s,
    children: [
      E.jsx("label", { children: "Light" }),
      " ",
      E.jsx(ok, {
        checked: e,
        onChange: t,
        inputProps: { "aria-label": "controlled" },
      }),
      E.jsx("label", { children: "Dark" }),
    ],
  });
};
og.propTypes = {
  toggleDarkMode: K.func,
  themeIsDark: K.bool,
  refContainer: K.object,
};
const lk = new URL(
  "/assets/strange-quark-logo-blackhole-dark.svg",
  self.location
).href;
document.querySelector("link[rel='icon']").href = lk;
function sk() {
  const e = _.useRef(["about", "skills", "experience", "reviews", "portfolio"]),
    [t, n] = _.useState(""),
    r = _.useRef(),
    i = 1210,
    o = PE()[0],
    [l, s] = _.useState(o),
    [a, u] = _.useState(void 0),
    d = window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : !1,
    [c, f] = _.useState(d),
    w = () => {
      f(!c);
    };
  NE();
  const y = c ? "dark" : "light";
  return (
    _.useEffect(() => {
      const g = o >= i ? r.current : void 0,
        b = g ? g.clientWidth : o;
      u(g), s(b);
    }, [o]),
    E.jsxs(E.Fragment, {
      children: [
        E.jsx(Xm, { themeIsDark: c, refContainer: a, themeClass: y }),
        E.jsx("header", {
          className: y,
          children: E.jsx(sm, {
            sections: e.current,
            currentSection: t,
            setCurrentSection: n,
          }),
        }),
        E.jsxs("main", {
          className: y,
          children: [
            E.jsx(og, { themeIsDark: c, toggleDarkMode: w, refContainer: a }),
            E.jsx(am, { speed: 0.5, themeIsDark: c, refContainer: a }),
            E.jsx(O0, {
              children: E.jsx(Zh, {
                exact: !0,
                path: "/",
                element: E.jsxs("div", {
                  className: "content-all",
                  children: [
                    E.jsx(X0, {}),
                    E.jsxs("div", {
                      className: "scrolling-content",
                      ref: r,
                      children: [
                        E.jsx(cm, { setCurrentSection: n }),
                        E.jsx(Am, { setCurrentSection: n }),
                        E.jsx(Dm, { setCurrentSection: n }),
                        E.jsx(Ym, {
                          containerWidth: l,
                          themeIsDark: c,
                          setCurrentSection: n,
                        }),
                        E.jsx(Bm, { setCurrentSection: n }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            E.jsx(Zm, { themeIsDark: c, refContainer: a }),
          ],
        }),
      ],
    })
  );
}
Ws.createRoot(document.getElementById("root")).render(
  E.jsx(H.StrictMode, { children: E.jsx(D0, { children: E.jsx(sk, {}) }) })
);
