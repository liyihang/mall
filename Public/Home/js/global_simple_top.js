/* SVN.committedRevision=1502297 */
var template = function(b, a) {
    return template[typeof a === "object" ? "render" : "compile"].apply(template, arguments)
};
(function(a, c) {
    a.version = "2.0.1";
    a.openTag = "<!%";
    a.closeTag = "%!>";
    a.isEscape = true;
    a.isCompress = false;
    a.parser = null;
    a.render = function(i, h) {
        var g = f(i);
        if (g === undefined) {
            return d({id: i, name: "Render Error", message: "No Template"})
        }
        return g(h)
    };
    a.compile = function(k, n) {
        var j = arguments;
        var m = j[2];
        var i = "anonymous";
        if (typeof n !== "string") {
            m = j[1];
            n = j[0];
            k = i
        }
        try {
            var l = b(n, m)
        } catch (h) {
            h.id = k || n;
            h.name = "Syntax Error";
            return d(h)
        }
        function g(p) {
            try {
                return new l(p) + ""
            } catch (o) {
                if (!m) {
                    return a.compile(k, n, true)(p)
                }
                o.id = k || n;
                o.name = "Render Error";
                o.source = n;
                return d(o)
            }
        }
        g.prototype = l.prototype;
        g.toString = function() {
            return l.toString()
        };
        if (k !== i) {
            e[k] = g
        }
        return g
    };
    a.helper = function(g, h) {
        a.prototype[g] = h
    };
    a.onerror = function(h) {
        var g = "[template]:\n" + h.id + "\n\n[name]:\n" + h.name;
        if (h.message) {
            g += "\n\n[message]:\n" + h.message
        }
        if (h.line) {
            g += "\n\n[line]:\n" + h.line;
            g += "\n\n[source]:\n" + h.source.split(/\n/)[h.line - 1].replace(/^[\s\t]+/, "")
        }
        if (h.temp) {
            g += "\n\n[temp]:\n" + h.temp
        }
        if (c.console) {
            console.error(g)
        }
    };
    var e = {};
    var f = function(h) {
        var i = e[h];
        if (i === undefined && "document" in c) {
            var j = document.getElementById(h);
            if (j) {
                var g = j.value || j.innerHTML;
                return a.compile(h, g.replace(/^\s*|\s*$/g, ""))
            }
        } else {
            if (e.hasOwnProperty(h)) {
                return i
            }
        }
    };
    var d = function(h) {
        a.onerror(h);
        function g() {
            return g + ""
        }
        g.toString = function() {
            return"{Template Error}"
        };
        return g
    };
    var b = (function() {
        a.prototype = {$render: a.render, $escape: function(p) {
                return typeof p === "string" ? p.replace(/&(?![\w#]+;)|[<>"']/g, function(q) {
                    return{"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}[q]
                }) : p
            }, $string: function(p) {
                if (typeof p === "string" || typeof p === "number") {
                    return p
                } else {
                    if (typeof p === "function") {
                        return p()
                    } else {
                        return""
                    }
                }
            }};
        var n = Array.prototype.forEach || function(r, p) {
            var s = this.length >>> 0;
            for (var q = 0; q < s; q++) {
                if (q in this) {
                    r.call(p, this[q], q, this)
                }
            }
        };
        var i = function(p, q) {
            n.call(p, q)
        };
        var l = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined";
        var k = /\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g;
        var m = /[^\w$]+/g;
        var g = new RegExp(["\\b" + l.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g");
        var h = /\b\d[^,]*/g;
        var j = /^,+|,+$/g;
        var o = function(p) {
            p = p.replace(k, "").replace(m, ",").replace(g, "").replace(h, "").replace(j, "");
            p = p ? p.split(/,+/) : [];
            return p
        };
        return function(I, z) {
            var s = a.openTag;
            var p = a.closeTag;
            var E = a.parser;
            var H = I;
            var A = "";
            var G = 1;
            var w = {$data: true, $helpers: true, $out: true, $line: true};
            var r = a.prototype;
            var J = {};
            var D = "var $helpers=this," + (z ? "$line=0," : "");
            var B = "".trim;
            var t = B ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"];
            var v = B ? "if(content!==undefined){$out+=content;return content}" : "$out.push(content);";
            var K = "function(content){" + v + "}";
            var x = "function(id,data){if(data===undefined){data=$data}var content=$helpers.$render(id,data);" + v + "}";
            i(H.split(s), function(P, O) {
                P = P.split(p);
                var N = P[0];
                var M = P[1];
                if (P.length === 1) {
                    A += F(N)
                } else {
                    A += L(N);
                    if (M) {
                        A += F(M)
                    }
                }
            });
            H = A;
            if (z) {
                H = "try{" + H + "}catch(e){e.line=$line;throw e}"
            }
            H = "'use strict';" + D + t[0] + H + "return new String(" + t[3] + ");";
            try {
                var q = new Function("$data", H);
                q.prototype = J;
                return q
            } catch (y) {
                y.temp = "function anonymous($data) {" + H + "}";
                throw y
            }
            function F(M) {
                G += M.split(/\n/).length - 1;
                if (a.isCompress) {
                    M = M.replace(/[\n\r\t\s]+/g, " ")
                }
                M = M.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
                M = t[1] + "'" + M + "'" + t[2];
                return M + "\n"
            }
            function L(O) {
                var P = G;
                if (E) {
                    O = E(O)
                } else {
                    if (z) {
                        O = O.replace(/\n/g, function() {
                            G++;
                            return"$line=" + G + ";"
                        })
                    }
                }
                if (O.indexOf("=") === 0) {
                    var N = O.indexOf("==") !== 0;
                    O = O.replace(/^=*|[\s;]*$/g, "");
                    if (N && a.isEscape) {
                        var M = O.replace(/\s*\([^\)]+\)/, "");
                        if (!r.hasOwnProperty(M) && !/^(include|print)$/.test(M)) {
                            O = "$escape($string(" + O + "))"
                        }
                    } else {
                        O = "$string(" + O + ")"
                    }
                    O = t[1] + O + t[2]
                }
                if (z) {
                    O = "$line=" + P + ";" + O
                }
                C(O);
                return O + "\n"
            }
            function C(M) {
                M = o(M);
                i(M, function(N) {
                    if (!w.hasOwnProperty(N)) {
                        u(N);
                        w[N] = true
                    }
                })
            }
            function u(M) {
                var N;
                if (M === "print") {
                    N = K
                } else {
                    if (M === "include") {
                        J["$render"] = r["$render"];
                        N = x
                    } else {
                        N = "$data." + M;
                        if (r.hasOwnProperty(M)) {
                            J[M] = r[M];
                            if (M.indexOf("$") === 0) {
                                N = "$helpers." + M
                            } else {
                                N = N + "===undefined?$helpers." + M + ":" + N
                            }
                        }
                    }
                }
                D += M + "=" + N + ","
            }}
    })()
})(template, this);
(function(a) {
    a.fn.bgIframe = a.fn.bgiframe = function(c) {
        if (a.browser.msie && parseInt(a.browser.version) <= 6) {
            c = a.extend({top: "auto", left: "auto", width: "auto", height: "auto", opacity: true, src: "javascript:false;"}, c || {});
            var d = function(e) {
                return e && e.constructor == Number ? e + "px" : e
            }, b = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + c.src + '"style="display:block;position:absolute;z-index:-1;' + (c.opacity !== false ? "filter:Alpha(Opacity='0');" : "") + "top:" + (c.top == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" : d(c.top)) + ";left:" + (c.left == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : d(c.left)) + ";width:" + (c.width == "auto" ? "expression(this.parentNode.offsetWidth+'px')" : d(c.width)) + ";height:" + (c.height == "auto" ? "expression(this.parentNode.offsetHeight+'px')" : d(c.height)) + ';"/>';
            return this.each(function() {
                if (a("> iframe.bgiframe", this).length == 0) {
                    this.insertBefore(document.createElement(b), this.firstChild)
                }
            })
        }
        return this
    };
    if (!a.browser.version) {
        a.browser.version = navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1]
    }
})(jQuery);
(function(j) {
    var k = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], e = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice, d, h;
    if (j.event.fixHooks) {
        for (var l = k.length; l; ) {
            j.event.fixHooks[k[--l]] = j.event.mouseHooks
        }
    }
    var a = j.event.special.mousewheel = {version: "3.1.9", setup: function() {
            if (this.addEventListener) {
                for (var i = e.length; i; ) {
                    this.addEventListener(e[--i], f, false)
                }
            } else {
                this.onmousewheel = f
            }
            j.data(this, "mousewheel-line-height", a.getLineHeight(this));
            j.data(this, "mousewheel-page-height", a.getPageHeight(this))
        }, teardown: function() {
            if (this.removeEventListener) {
                for (var i = e.length; i; ) {
                    this.removeEventListener(e[--i], f, false)
                }
            } else {
                this.onmousewheel = null
            }
        }, getLineHeight: function(i) {
            return parseInt(j(i)["offsetParent" in j.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        }, getPageHeight: function(i) {
            return j(i).height()
        }, settings: {adjustOldDeltas: true}};
    j.fn.extend({mousewheel: function(i) {
            return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
        }, unmousewheel: function(i) {
            return this.unbind("mousewheel", i)
        }});
    function f(t) {
        var m = t || window.event, q = c.call(arguments, 1), s = 0, o = 0, n = 0, p = 0;
        t = j.event.fix(m);
        t.type = "mousewheel";
        if ("detail" in m) {
            n = m.detail * -1
        }
        if ("wheelDelta" in m) {
            n = m.wheelDelta
        }
        if ("wheelDeltaY" in m) {
            n = m.wheelDeltaY
        }
        if ("wheelDeltaX" in m) {
            o = m.wheelDeltaX * -1
        }
        if ("axis" in m && m.axis === m.HORIZONTAL_AXIS) {
            o = n * -1;
            n = 0
        }
        s = n === 0 ? o : n;
        if ("deltaY" in m) {
            n = m.deltaY * -1;
            s = n
        }
        if ("deltaX" in m) {
            o = m.deltaX;
            if (n === 0) {
                s = o * -1
            }
        }
        if (n === 0 && o === 0) {
            return
        }
        if (m.deltaMode === 1) {
            var r = j.data(this, "mousewheel-line-height");
            s *= r;
            n *= r;
            o *= r
        } else {
            if (m.deltaMode === 2) {
                var i = j.data(this, "mousewheel-page-height");
                s *= i;
                n *= i;
                o *= i
            }
        }
        p = Math.max(Math.abs(n), Math.abs(o));
        if (!h || p < h) {
            h = p;
            if (g(m, p)) {
                h /= 40
            }
        }
        if (g(m, p)) {
            s /= 40;
            o /= 40;
            n /= 40
        }
        s = Math[s >= 1 ? "floor" : "ceil"](s / h);
        o = Math[o >= 1 ? "floor" : "ceil"](o / h);
        n = Math[n >= 1 ? "floor" : "ceil"](n / h);
        t.deltaX = o;
        t.deltaY = n;
        t.deltaFactor = h;
        t.deltaMode = 0;
        q.unshift(t, s, o, n);
        if (d) {
            clearTimeout(d)
        }
        d = setTimeout(b, 200);
        return(j.event.dispatch || j.event.handle).apply(this, q)
    }
    function b() {
        h = null
    }
    function g(m, i) {
        return a.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
    }}
)(jQuery);
var YHDOBJECT = {};
YHDOBJECT.Map = function() {
    var a = 0;
    this.entry = {};
    this.put = function(b, c) {
        if (!this.containsKey(b)) {
            a++
        }
        this.entry[b] = c
    };
    this.get = function(b) {
        if (this.containsKey(b)) {
            return this.entry[b]
        } else {
            return null
        }
    };
    this.remove = function(b) {
        if (delete this.entry[b]) {
            a--
        }
    };
    this.containsKey = function(b) {
        return(b in this.entry)
    };
    this.containsValue = function(b) {
        for (var c in this.entry) {
            if (this.entry[c] == b) {
                return true
            }
        }
        return false
    };
    this.values = function() {
        var b = [];
        for (var c in this.entry) {
            b.push(this.entry[c])
        }
        return b
    };
    this.keys = function() {
        var b = new Array(a);
        for (var c in this.entry) {
            b.push(c)
        }
        return b
    };
    this.size = function() {
        return a
    };
    this.clear = function() {
        this.entry = {};
        this.size = 0
    }
};
YHDOBJECT.globalVariable = function() {
    try {
        var b = jQuery("#comParamId").data("globalComParam");
        if (b) {
            return b
        }
        jQuery("#comParamId").data("globalComParam", jQuery.parseJSON(jQuery("#comParamId").attr("data-param")));
        return jQuery("#comParamId").data("globalComParam")
    } catch (a) {
        if (window.console && console.log) {
            console.log(a)
        }
        return{}
    }
};
YHDOBJECT.callBackFunc = function(c) {
    var a = {};
    var b = [];
    if (typeof c.func != "undefined" && c.func) {
        a = c.func
    } else {
        return false
    }
    if (typeof c.args != "undefined" && c.args) {
        b = c.args
    }
    a.apply(this, b)
};
var YHDGLOBAL = YHDGLOBAL || {};
YHDGLOBAL.getCookie = function(c, a) {
    var b = {};
    if (typeof c == "string") {
        c = [c]
    }
    jQuery(c).each(function() {
        b[this] = jQuery.cookie(this)
    });
    if (typeof a == "function") {
        a.apply(b)
    }
};
YHDGLOBAL.sysCookie = function(a, b) {
};
(function(d) {
    d.fn.jqm = function(f) {
        var e = {overlay: 50, overlayClass: "jqmOverlay", closeClass: "jqmClose", trigger: ".jqModal", ajax: o, ajaxP: o, ajaxText: "", target: o, modal: o, toTop: o, onShow: o, onHide: o, onLoad: o};
        return this.each(function() {
            if (this._jqm) {
                return n[this._jqm].c = d.extend({}, n[this._jqm].c, f)
            }
            p++;
            this._jqm = p;
            n[p] = {c: d.extend(e, d.jqm.params, f), a: o, w: d(this).addClass("jqmID" + p), s: p};
            if (e.trigger) {
                d(this).jqmAddTrigger(e.trigger)
            }
        })
    };
    d.fn.jqmAddClose = function(e) {
        return l(this, e, "jqmHide")
    };
    d.fn.jqmAddTrigger = function(e) {
        return l(this, e, "jqmShow")
    };
    d.fn.jqmShow = function(e) {
        return this.each(function() {
            e = e || window.event;
            d.jqm.open(this._jqm, e)
        })
    };
    d.fn.jqmHide = function(e) {
        return this.each(function() {
            e = e || window.event;
            d.jqm.close(this._jqm, e)
        })
    };
    d.jqm = {hash: {}, open: function(e, v) {
            var u = n[e], f = u.c, t = "." + f.closeClass, i = (parseInt(u.w.css("z-index"))), i = (i > 0) ? i : 3000, s = d("<div></div>").css({height: "100%", width: "100%", position: "fixed", left: 0, top: 0, "z-index": i - 1, opacity: f.overlay / 100});
            if (u.a) {
                return o
            }
            u.t = v;
            u.a = true;
            u.w.css("z-index", i);
            if (f.modal) {
                if (!a[0]) {
                    k("bind")
                }
                a.push(e)
            } else {
                if (f.overlay > 0) {
                    u.w.jqmAddClose(s)
                } else {
                    s = o
                }
            }
            u.o = (s) ? s.addClass(f.overlayClass).prependTo("body") : o;
            if (c) {
                d("html,body").css({height: "100%", width: "100%"});
                if (s) {
                    s = s.css({position: "absolute"})[0];
                    for (var m in {Top: 1, Left: 1}) {
                        s.style.setExpression(m.toLowerCase(), "(_=(document.documentElement.scroll" + m + " || document.body.scroll" + m + "))+'px'")
                    }
                }
            }
            if (f.ajax) {
                var r = f.target || u.w, q = f.ajax, r = (typeof r == "string") ? d(r, u.w) : d(r), q = (q.substr(0, 1) == "@") ? d(v).attr(q.substring(1)) : q;
                r.html(f.ajaxText).load(q, f.ajaxP, function() {
                    if (f.onLoad) {
                        f.onLoad.call(this, u)
                    }
                    if (t) {
                        u.w.jqmAddClose(d(t, u.w))
                    }
                    j(u)
                })
            } else {
                if (t) {
                    u.w.jqmAddClose(d(t, u.w))
                }
            }
            if (f.toTop && u.o) {
                u.w.before('<span id="jqmP' + u.w[0]._jqm + '"></span>').insertAfter(u.o)
            }
            (f.onShow) ? f.onShow(u) : u.w.show();
            j(u);
            return o
        }, close: function(f) {
            var e = n[f];
            if (!e.a) {
                return o
            }
            e.a = o;
            if (a[0]) {
                a.pop();
                if (!a[0]) {
                    k("unbind")
                }
            }
            if (e.c.toTop && e.o) {
                d("#jqmP" + e.w[0]._jqm).after(e.w).remove()
            }
            if (e.c.onHide) {
                e.c.onHide(e)
            } else {
                e.w.hide();
                if (e.o) {
                    e.o.remove()
                }
            }
            return o
        }, params: {}};
    var p = 0, n = d.jqm.hash, a = [], c = d.browser.msie && (d.browser.version == "6.0"), o = false, g = d('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity: 0}), j = function(e) {
        if (c) {
            if (e.o) {
                e.o.html('<p style="width:100%;height:100%"/>').prepend(g)
            } else {
                if (!d("iframe.jqm", e.w)[0]) {
                    e.w.prepend(g)
                }
            }
        }
        h(e)
    }, h = function(f) {
        try {
            d(":input:visible", f.w)[0].focus()
        } catch (e) {
        }
    }, k = function(e) {
        d()[e]("keypress", b)[e]("keydown", b)[e]("mousedown", b)
    }, b = function(f) {
        var i = n[a[a.length - 1]], e = (!d(f.target).parents(".jqmID" + i.s)[0]);
        if (e) {
            h(i)
        }
        return !e
    }, l = function(i, e, f) {
        return i.each(function() {
            var m = this._jqm;
            d(e).each(function() {
                if (!this[f]) {
                    this[f] = [];
                    d(this).click(function() {
                        for (var q in {jqmShow: 1, jqmHide: 1}) {
                            for (var r in this[q]) {
                                if (n[this[q][r]]) {
                                    n[this[q][r]].w[q](this)
                                }
                            }
                        }
                        return o
                    })
                }
                this[f].push(m)
            })
        })
    }
})(jQuery);
(function(b) {
    var a = window.loli || (window.loli = {});
    a.delay = function(g, e, c, i, f) {
        var k = "";
        var h = f || 200;
        var j = h - 50;
        var d;
        b(g)[e](function() {
            var n = b(this);
            var m = true;
            if (c) {
                var m = c.call(n)
            }
            if (!(m == false)) {
                d = setTimeout(function() {
                    l.call(n)
                }, h);
                k = new Date().getTime()
            }
        });
        function l() {
            if ((new Date().getTime() - k) >= j) {
                if (i) {
                    i.call(this)
                }
                k = new Date().getTime()
            }
        }}
})(jQuery);
(function(b) {
    var g = window.loli || (window.loli = {});
    var h = null;
    var d = 0;
    var c = new Date().getTime();
    var f = 10 * 60 * 1000;
    var e = [];
    var a = null;
    g.globalCheckLogin = function(l) {
        i(l);
        function i(n) {
            if (!jQuery.cookie("ut") && !jQuery.cookie("aut")) {
                n({result: "0", userName: ""});
                return
            }
            var o = jQuery.cookie("ut");
            if (o != a) {
                d = 0
            }
            a = jQuery.cookie("ut");
            var m = (new Date()).getTime();
            if (m - c > f) {
                d = 0
            }
            if (d == 0) {
                j(n);
                c = new Date().getTime();
                return
            } else {
                if (d == 2) {
                    if (n && h) {
                        n(h)
                    }
                } else {
                    if (n) {
                        e.push(n)
                    }
                }
            }
        }
        function j(n) {
            d = 1;
            var m = URLPrefix.passport + "/publicPassport/isLogin.do?callback=?";
            jQuery.getJSON(m, function(o) {
                k(n, o)
            })
        }
        function k(p, o) {
            d = 2;
            c = (new Date()).getTime();
            if (o) {
                h = o;
                if (p) {
                    p(o)
                }
                var m = e.length;
                for (var n = 0; n < m; n++) {
                    var p = e.shift();
                    p(o)
                }
            }
        }}
})(jQuery);
(function(c) {
    var d = window.loli || (window.loli = {});
    d.scroll = function(j, l) {
        var b = "";
        var a = l || 200;
        var i = a - 20;
        c(window).scroll(function() {
            setTimeout(function() {
                k()
            }, a);
            b = new Date().getTime()
        });
        function k() {
            if ((new Date().getTime() - b) >= i) {
                j();
                b = new Date().getTime()
            }
        }}
})(jQuery);
(function() {
    function c(f) {
        if (f && typeof (f) == "string") {
            return f.replace(/(^\s*)|(\s*$)/g, "")
        } else {
            return f
        }
    }
    function e() {
        if (typeof (localStorage) == "undefined") {
            return false
        }
        if (typeof (webPercent) == "undefined") {
            webPercent = 100
        }
        var f = parseInt(Math.random() * 100);
        try {
            if (localStorage.getItem("_webpPercent")) {
                f = localStorage.getItem("_webpPercent")
            } else {
                localStorage.setItem("_webpPercent", f)
            }
        } catch (g) {
        }
        return webPercent < f ? false : true
    }
    function d() {
        if (typeof (localStorage) == "undefined") {
            return false
        }
        var f = localStorage.getItem("webp");
        if (f) {
            return true
        }
        var g = document.createElement("canvas");
        if (!!(g.getContext && g.getContext("2d"))) {
            var h = g.toDataURL("image/webp").indexOf("data:image/webp") == 0;
            if (h) {
                localStorage.setItem("webp", true)
            }
            return h
        } else {
            return false
        }
    }
    var b = d();
    if (b) {
        b = e()
    }
    function a(g) {
        if (!b || !g) {
            return g
        }
        g = c(g);
        var h = /^(http|https):\/\/(d\d{1,2})/;
        if (g.search(h) == -1) {
            return g
        }
        var f = g.split(".");
        if (f.length > 1) {
            f[f.length - 1] = "webp"
        }
        return f.join(".")
    }
    loli.webp = a
})();
var lazyLoadImageObjArry = lazyLoadImageObjArry || [];
var isBusy = false;
var threadCount = 0;
var imgCountPerTime = 1000;
var lazyLoadDelay = 50;
(function(a) {
    a.YHD = {imgLoad: {objArray: [], loadImg: function(d) {
                if (d && d.length > 0) {
                    for (var c = 0, b = d.length; c < b; c++) {
                        if (a.inArray(d[c], a.YHD.imgLoad.objArray) == -1) {
                            a.YHD.imgLoad.objArray.push(d[c])
                        }
                    }
                }
            }, pageTop: function() {
                return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop)
            }, load: function() {
                if (window.shutdownImgLoad) {
                    return false
                }
                isBusy = true;
                threadCount = 0;
                var k = a.YHD.imgLoad.pageTop();
                for (var d = 0, c = a.YHD.imgLoad.objArray.length; d < c; d++) {
                    var g = a("#" + a.YHD.imgLoad.objArray[d]);
                    if (g) {
                        var f = g.find("img");
                        for (var j = 0, h = f.size(); j < h; j++) {
                            var e = a(f[j]);
                            if (e.offset().top <= k + 100) {
                                var b = e.attr("original");
                                if (b) {
                                    e.attr("src", loli.webp(b)).removeAttr("original");
                                    threadCount++;
                                    if (threadCount >= imgCountPerTime) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    if (threadCount >= imgCountPerTime) {
                        break
                    }
                }
                if (threadCount >= imgCountPerTime) {
                    setTimeout("jQuery.YHD.imgLoad.load()", lazyLoadDelay)
                } else {
                    isBusy = false
                }
            }}}
})(jQuery);
function initImageLoad() {
    if (lazyLoadImageObjArry && lazyLoadImageObjArry.length > 0) {
        jQuery.YHD.imgLoad.loadImg(lazyLoadImageObjArry);
        window.scrollTo(0, 0);
        jQuery(window).bind("scroll", function() {
            if (!isBusy) {
                jQuery.YHD.imgLoad.load()
            } else {
            }
        })
    }
}
jQuery("#footer").ready(function() {
    if (isIndex != 1) {
        initImageLoad()
    }
});
(function(b) {
    var a = function(f) {
        var d = f, e = URLPrefix.busystock ? URLPrefix.busystock : "http://gps.yhd.com", c = "/busystock/restful/truestock";
        _setting = {attr: "productid", busystock_url: e + c, busystockAttr: "productIds", lazyLoadDelay: 500, priceCounter: 30, load: true, maxNum: 200, oneOffLoad: false, indexLoad: false, scrollLoad: true, hfix: 100, callbackHtml: null};
        b.extend(_setting, d);
        this.param = _setting
    };
    a.prototype = {constructor: a, isBusy: false, doc: document, priceArray: [], lazyPrice: function(i, d) {
            var c = this, g = c.param;
            if (d) {
                c.param = b.extend(g, d)
            }
            var h = i, f = g.attr, e = g.busystock_url, j = g.maxNum;
            if (h instanceof b) {
                c.priceArray = i.find("[" + f + "]").get()
            } else {
                if (b.isArray(h)) {
                    c.priceArray = h
                } else {
                    c.priceArray = b(i).find("[" + f + "]").get()
                }
            }
            if (g.oneOffLoad) {
                c._flushPrice(c.priceArray, f, e, g.busystockAttr, j);
                return i
            }
            if (g.indexLoad) {
                c._lazyPrice(c.imgArray, g)
            }
            if (g.scrollLoad) {
                c._iniLazy(function() {
                    if (c.priceArray.length == 0) {
                        return i
                    }
                    c._lazyPrice(c.priceArray, g)
                })
            }
            if (g.load) {
                c._loadPrice()
            }
            return i
        }, _loadPrice: function() {
            var d = this, i = d.param, h = i.attr, c = i.busystock_url, f = i.busystockAttr, g = i.maxNum, j = i.lazyLoadDelay, e = i.priceCounter;
            (function(o, m, n, p, r, l, q) {
                var k = setInterval(function() {
                    if (o.isBusy) {
                        return false
                    }
                    var s = o.priceArray;
                    var t = s.length;
                    if (t > q) {
                        o._priceLoad(s, m, n, p, 0, q, r)
                    } else {
                        if (t > 0) {
                            o._priceLoad(s, m, n, p, 0, t, r)
                        } else {
                            clearInterval(k)
                        }
                    }
                }, l)
            })(d, h, c, f, g, j, e)
        }, _lazyPrice: function(j, h) {
            var i = h.attr, c = j.length, f = h.busystock_url, e = h.busystockAttr, g = h.maxNum, k = this, l = 0;
            k.isBusy = true;
            var d = k._pageTop() + h.hfix;
            k._priceLoad(j, i, f, e, l, c, g, d);
            k.isBusy = false
        }, _priceLoad: function(n, m, p, l, e, h, j, d) {
            var c = this, q = n.length;
            if (q == 0) {
                return
            }
            var g = new Array();
            if (d) {
                for (var k = e;
                        k < h; k++) {
                    var o = b(n[k]);
                    if (o.offset().top < d) {
                        g.push(o);
                        delete n[k]
                    }
                }
            } else {
                for (var k = e; k < h; k++) {
                    var o = b(n[k]);
                    g.push(o);
                    delete n[k]
                }
            }
            c._flushPrice(g, m, p, l, j);
            var f = new Array();
            for (var k = 0; k < n.length; k++) {
                if (n[k] != null) {
                    f.push(n[k])
                }
            }
            c.priceArray = f
        }, _iniLazy: function(c) {
            var d = this;
            window.scrollTo(0, 0);
            b(window).bind("scroll", function() {
                if (!d.isBusy) {
                    c()
                } else {
                }
            })
        }, _pageTop: function() {
            var d = this, c = d.doc, e = c.documentElement;
            return e.clientHeight + Math.max(e.scrollTop, c.body.scrollTop)
        }, _flushPrice: function(c, h, g, t, m) {
            var l = this, w = l.param, k = w.callbackHtml;
            if (c && c.length > 0) {
                var f = c.length, v = 0, x, s = 1;
                if (f < m) {
                    x = f
                } else {
                    s = (f - 1) / m + 1
                }
                var r = jQuery.cookie("provinceId");
                if (!r) {
                    return
                }
                var o = "?mcsite=" + currBsSiteId + "&provinceId=" + r;
                var q = {};
                for (var n = 0; n < s; n++) {
                    if (n > 0) {
                        v = m * n;
                        x = v + m;
                        if (x > f) {
                            x = f
                        }
                    }
                    q = {};
                    for (var p = v;
                            p < x; p++) {
                        var d = jQuery(c[p]);
                        o += "&" + t + "=" + d.attr(h);
                        if (!q[d.attr(h)]) {
                            q[d.attr(h)] = []
                        }
                        q[d.attr(h)].push(d)
                    }
                    try {
                        jQuery.getJSON(g + o + "&callback=?", function(e) {
                            if (e == null || e == "") {
                                return
                            }
                            jQuery.each(e, function(i, j) {
                                var y = q[j.productId];
                                if (y) {
                                    jQuery.each(y, function(A, z) {
                                        if (k) {
                                            jQuery(z).html(k(j, z)).removeAttr(h)
                                        } else {
                                            if (currSiteId == 2) {
                                                jQuery(z).text("¥" + j.productPrice).removeAttr(h)
                                            } else {
                                                if (y) {
                                                    if (globalShowMarketPrice == 1) {
                                                        var B = "<strong>¥" + j.productPrice + "</strong>";
                                                        B += "<del>¥" + j.marketPrice + "</del>";
                                                        jQuery(z).html(B).removeAttr(h)
                                                    } else {
                                                        var B = "<strong>¥" + j.productPrice + "</strong>";
                                                        if (j.curPriceType && j.curPriceType == 2 && j.yhdPrice) {
                                                            B += "<del>¥" + j.yhdPrice + "</del>"
                                                        }
                                                        jQuery(z).html(B).removeAttr(h)
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            })
                        })
                    } catch (u) {
                    }
                }
            }
        }};
    b.fn.extend({lazyPrice: function(d) {
            var c = new a();
            return c.lazyPrice(this, d)
        }})
})(jQuery);
(function(a) {
    var c = function(e) {
        var d = e, f = {lazyImg: {ltime: "2000", lnum: "5", load: true, indexLoad: false, scrollLoad: true, attr: "original", wideAttr: null, hfix: 100}};
        a.extend(f, d);
        this.param = f
    };
    c.prototype = {constructor: c, isBusy: false, doc: document, imgArray: [], wideAttr: null, lazyImg: function(f, d) {
            var e = this, h = e.param.lazyImg, i, g = f;
            if (d) {
                e.param.lazyImg = a.extend(h, d)
            }
            if (g instanceof a) {
                i = g
            } else {
                if (a.isArray(g)) {
                    g = a(g.join(","))
                } else {
                    g = a(g) || a("body")
                }
            }
            if (h.wideAttr) {
                wideAttr = h.wideAttr;
                e.imgArray = g.find("img[" + h.attr + "],img[" + wideAttr + "]")
            } else {
                e.imgArray = g.find("img[" + h.attr + "]")
            }
            if (h.indexLoad) {
                e._lazyImg(e.imgArray, h)
            }
            if (h.scrollLoad) {
                e._iniLazy(function() {
                    if (e.imgArray.length == 0) {
                        return i
                    }
                    e._lazyImg(e.imgArray, h)
                })
            }
            if (h.load) {
                e._loadImg(g)
            }
            return f
        }, _loadImg: function(h) {
            var f = this, e = f.param.lazyImg, d = e.attr, i = e.ltime, g = e.lnum;
            (function(m, n, j, o, l) {
                var k = setInterval(function() {
                    if (m.isBusy) {
                        return false
                    }
                    var q = m.imgArray;
                    var p = q.length;
                    if (p > l) {
                        m._imgLoad(q, 0, l, j)
                    } else {
                        if (p > 0) {
                            m._imgLoad(q, 0, p, j)
                        } else {
                            clearInterval(k)
                        }
                    }
                }, o)
            })(f, h, d, i, g)
        }, _lazyImg: function(k, e) {
            var i = e.attr, h = k.length, g = this, f = 0, j = 1;
            g.isBusy = true;
            var d = g._pageTop();
            g._imgLoad(g.imgArray, f, h, i, d, e.hfix);
            g.isBusy = false
        }, _imgLoad: function(o, e, j, m, h, k) {
            var g = this;
            if (h) {
                for (var n = e; n < j; n++) {
                    var d = a(o[n]);
                    var l = jQuery(window).height() + k;
                    if (d.offset().top < (h + k) && (h - d.offset().top) < l) {
                        g._renderImg(d, m);
                        delete o[n]
                    }
                }
            } else {
                for (var n = e; n < j; n++) {
                    var d = a(o[n]);
                    g._renderImg(d, m);
                    delete o[n]
                }
            }
            var f = new Array();
            for (var n = 0; n < o.length; n++) {
                if (o[n] != null) {
                    f.push(o[n])
                }
            }
            g.imgArray = f
        }, _renderImg: function(d, f) {
            var e = d;
            if (typeof wideAttr != "undefined" && wideAttr != null && e.attr(wideAttr)) {
                e.attr("src", loli.webp(e.attr(wideAttr)));
                e.removeAttr(f)
            } else {
                e.attr("src", loli.webp(e.attr(f)));
                e.removeAttr(f)
            }
        }, _iniLazy: function(d) {
            var e = this;
            loli.delay(window, "scroll", function() {
                if (!e.isBusy) {
                    e.isBusy = true;
                    return true
                } else {
                    return false
                }
            }, function() {
                d()
            }, 50)
        }, _pageTop: function() {
            var e = this, d = e.doc, f = d.documentElement;
            return f.clientHeight + Math.max(f.scrollTop, d.body.scrollTop)
        }, _hashImgUrl: function(d) {
            if (loli && loli.util) {
                return loli.util.hashImgUrl(d)
            }
            return d
        }};
    var b = new c();
    a.fn.extend({lazyImg: function(e) {
            var d = new c();
            return d.lazyImg(this, e)
        }})
})(jQuery);
(function(b) {
    var a = function(d) {
        var c = d, e = {activeLoadTime: 2000, load: true, activeLoadNum: 1, hfix: 100, callback: null, attr: "lazyLoad_textarea", flushPrice: true, flushPriceAttr: "productid", indexLoad: false, scrollLoad: true};
        b.extend(e, c);
        this.param = e
    };
    a.prototype = {constructor: a, doc: document, areaArray: [], lazyDom: function(c, g) {
            var e = this, f = e.param, d = c;
            if (g) {
                e.param = b.extend(f, g)
            }
            e.areaArray = e._getJqueryDomArray(d, f);
            if (f.indexLoad) {
                e._domScrollLoad(e.areaArray, f)
            }
            if (f.scrollLoad) {
                e._loadScrollDom(function() {
                    if (e.areaArray.length == 0) {
                        return
                    }
                    e._domScrollLoad(e.areaArray, f)
                })
            }
            if (f.load) {
                e._loadActiveDom(e.areaArray, f)
            }
        }, _loadActiveDom: function(h, d) {
            var c = this, i = d, f = i.activeLoadTime, g = h;
            var e = setInterval(function() {
                var j = g.length;
                if (j == 0) {
                    clearInterval(e);
                    return
                }
                c._domActiveLoad(g, i)
            }, f)
        }, _loadScrollDom: function(c) {
            loli.scroll(function() {
                c()
            }, 50)
        }, _domScrollLoad: function(d, g) {
            var c = this, g = c.param, j = [];
            for (var f = 0, h = d.length; f < h; f++) {
                var e = c._getJqueryDom(d[f]);
                if (c.isInCurrScreen(e)) {
                    c._rendDom(e, g)
                } else {
                    j.push(e)
                }
            }
            c.areaArray = j
        }, _domActiveLoad: function(d, j) {
            var c = this, h = j, f = d, e = f.length, g = Math.min(h.activeLoadNum, e);
            for (var k = 0; k < g; k++) {
                c._rendDom(c._getJqueryDom(f.shift()), h)
            }
        }, _rendDom: function(k, d) {
            var i = k, f = d, e = f.attr, h = i.attr(e), j = b("#" + h), g = f.flushPrice, c = f.flushPriceAttr;
            if (j.size() > 0) {
                i.html(j.val())
            }
            i.removeAttr(e);
            if (g) {
                i.lazyPrice({attr: c, oneOffLoad: true})
            }
            if (f.callback) {
                f.callback.call(i)
            }
        }, isInCurrScreen: function(f) {
            var h = this, i = f, c = h.doc, j = c.documentElement, g = h.param, d = g.hfix, e = Math.max(j.scrollTop, c.body.scrollTop), k = j.clientHeight + e;
            if (i) {
                return(i.offset().top < k + d) && (i.offset().top > e - d)
            }
            return false
        }, _getJqueryDomArray: function(f, e) {
            var c = [], d = e.attr;
            if (f instanceof b) {
                c = f.find("[" + d + "]").get()
            } else {
                if (b.isArray(f)) {
                    c = f;
                    return c
                } else {
                    f = b(f);
                    c = f.find("[" + d + "]").get()
                }
            }
            if (c.length == 0) {
                if (f.attr(d)) {
                    c.push(f)
                }
            }
            return c
        }, _getJqueryDom: function(c) {
            if (!c) {
                return c
            }
            if (c instanceof b) {
                return c
            }
            return b(c)
        }};
    b.fn.extend({lazyDom: function(d) {
            var c = new a();
            return c.lazyDom(this, d)
        }})
})(jQuery);
jQuery(document).ready(function() {
    if (isIndex == null || isIndex != 1) {
        jQuery("#yhd_pop_win").bgiframe()
    }
});
var YHD = {init: function() {
        if (jQuery("#yhd_pop_win").size() > 0) {
            jQuery("#yhd_pop_win").jqm({overlay: 50, overlayClass: "jqmOverlay", closeClass: "jqmClose", trigger: ".jqModal", ajax: false, ajaxP: false, ajaxText: "", target: false, modal: false, toTop: false, onShow: false, onHide: false, onLoad: false})
        }
    }, initPosition: function(d, g, e, f, c) {
        var a = (g == null ? d.width() : g);
        var i = (e == null ? d.height() : e);
        jQuery(d).width(a).height(i);
        if (f && c) {
            jQuery(d).css({top: f, left: c})
        } else {
            if (f != null) {
                jQuery(d).css({top: f})
            } else {
                if (c != null) {
                    jQuery(d).css({left: c})
                } else {
                    var b = (jQuery(window).width() - d.width()) / 2 + jQuery(window).scrollLeft() + "px";
                    var j = (jQuery(window).height() - d.height()) / 2 + jQuery(window).scrollTop() + "px";
                    jQuery(d).css("left", b).css("top", j)
                }
            }
        }
        if (g != null && e != null) {
            jQuery(d).jqm({onHide: function(h) {
                    h.w.width(0).height(0).hide();
                    if (h.o) {
                        h.o.remove()
                    }
                }})
        }
    }, popwin: function(d, e, f, b, a, g) {
        YHD.init();
        var c = jQuery("#yhd_pop_win");
        if (d != null) {
            jQuery(c).html(d)
        }
        YHD.initPosition(c, e, f, b, a);
        jQuery(c).jqm({overlay: 10, overlayClass: "pop_win_bg", modal: true, toTop: true}).jqmShow().jqmAddClose(".popwinClose");
        jQuery(".pop_win_bg").bgiframe()
    }, popwinId: function(b, a, d, e, g, f) {
        var c = jQuery("#" + b);
        YHD.initPosition(c, d, e, g, f);
        c.css("height", "auto");
        c.css("z-index", "1000");
        c.show();
        if (!a) {
            a = "popwinClose"
        }
        jQuery("." + a, c).bind("click", function() {
            c.hide()
        })
    }, popTitleWin: function(d, g, e, i, c, b, a) {
        var f = '<H3 class="pop_win_title" >' + d + '<img src="' + imagePath + '/icon_close.jpg" class="popwinClose"/></H3>';
        f += '<div class="pop_win_content" class="content">' + g + "</div>";
        f += '<div style="clear:both"></div>';
        YHD.popwin(f, e, i, c, b, a)
    }, alert: function(d, c, e, a, b) {
        var f = '<div class="aptab" style="left: 0px; top: 0px;"><div class="aptab_header"><ul><li class="fl pl10">温馨提示</li><li class="popwinClose fr btn_close mr10"><img src="' + imagePath + '/popwin/icon_close.jpg"></li><li class="popwinClose fr mr5 color_white"><a href="###">关闭</a></li></ul> <div class="clear"></div></div>';
        f += '<div class="aptab_center" align="center"><p class="pt10">' + d + "</p>";
        f += '<p class="pt5"><input name="submit" class="pop_win_button popwinClose" id="pop_win_ok_btn" type="button"   value="确 定" /></p>';
        f += "</div>";
        f += '<div class="aptab_footer"><img src="' + imagePath + '/popwin/aptab_footer.jpg"></div></div>';
        if (e == null) {
            e = 300
        }
        YHD.popwin(f, e, a, null, null, b);
        if (c) {
            jQuery("#pop_win_ok_btn").click(function() {
                c()
            })
        }
    }, alertPrescriotion: function(f, i, b, k, c) {
        var g = "";
        if (f == null) {
            g = ""
        } else {
            if (f == 14) {
                g = "本品为处方药，为了用药安全，已经将您的个人信息进行登记，谢谢配合！如需用药指导帮助请联系在线客服！"
            } else {
                if (f == 16 || f == 17 || f == 18) {
                    g = "本品为处方药，不能网络订购；如需购买，请到药店凭处方购买或咨询客服!"
                } else {
                    g = "本品为处方药,请在提交订单前上传处方,如需用药师指导帮助,请联系在线客服！"
                }
            }
        }
        var e = "确定";
        if (f != null && (f == 16 || f == 17 || f == 18)) {
            e = "关闭"
        }
        var a = '<input name="submit" class="pop_win_button popwinClose fl" id="pop_win_ok_btn" type="button"   value="' + e + '" />';
        var j = '<a href="http://vipwebchat.tq.cn/sendmain.jsp?admiuin=8987730&uin=8987730&tag=call&ltype=1&rand=15214019897292372&iscallback=0&agentid=0&comtimes=48&preuin=8987730&buttonsflag=1010011111111&is_appraise=1&color=6&style=1&isSendPreWords=1&welcome_msg=%C4%FA%BA%C3%A3%A1%CE%D2%CA%C7%C6%BD%B0%B2%D2%A9%CD%F8%B5%C4%D6%B4%D0%D0%D2%A9%CA%A6%A3%AC%C7%EB%CE%CA%C4%FA%D0%E8%D2%AA%CA%B2%C3%B4%B0%EF%D6%FA%A3%BF&tq_right_infocard_url=' + imagePath + "/images/yaowang/v2/tq01.jpg&cp_title=%BB%B6%D3%AD%CA%B9%D3%C3%C6%BD%B0%B2%D2%A9%CD%F8%D4%DA%CF%DF%BD%D3%B4%FD%CF%B5%CD%B3&page=" + imagePath + "/&localurl=" + imagePath + "/channel/15694&spage=" + imagePath + '/&nocache=0.6430502517039929" class="pop_win_button fl" style="display:block;">咨询</a>';
        var d = '<div class="aptab" style="left: 0px; top: 0px;"><div class="aptab_header"><ul><li class="fl pl10">温馨提示</li><li class="popwinClose fr btn_close mr10"><img src="' + imagePath + '/popwin/icon_close.jpg"></li><li class="popwinClose fr mr5 color_white"><a href="###">关闭</a></li></ul> <div class="clear"></div></div>';
        d += '<div class="aptab_center" align="center"><p class="pt10">' + g + "</p>";
        d += '<div class="pt5" style="width:160px;">';
        if (f != null && (f == 16 || f == 17 || f == 18)) {
            d += j;
            d += a
        } else {
            d += a;
            d += j
        }
        d += '<div class="clear"></div></div>';
        d += '<p class="pt10 mb10" style="color:#b00000;font-weight:bold;">免费客服热线:400-007-0958</p></div>';
        d += '<div class="aptab_footer"><img src="' + imagePath + '/popwin/aptab_footer.jpg"></div></div>';
        if (b == null) {
            b = 300
        }
        YHD.popwin(d, b, k, null, null, c);
        if (i) {
            if (f != null && f != 16 && f != 17 && f != 18) {
                jQuery("#pop_win_ok_btn").click(function() {
                    i()
                })
            }
        }
    }, alertForLottery: function(d, c, e, a, b) {
        var f = '<div class="popbox"><div><h2><a href="#" class="popwinClose">关闭</a>温馨提示</h2><dl class="noaward">';
        f += "<dt>" + d + "</dt>";
        f += '</dl><p><button class="btn_go"  id="pop_win_ok_btn">确定</button></p></div></div>';
        if (e == null) {
            e = 300
        }
        YHD.popwin(f, e, a, null, null, b);
        if (c) {
            jQuery("#pop_win_ok_btn").click(function() {
                c()
            })
        }
    }, confirm: function(b, e, d, c, g, a) {
        var f = '<div class="aptab" style="left: 0px; top: 0px;"><div class="aptab_header"><ul><li class="fl pl10">温馨提示</li><li class="popwinClose fr btn_close mr10"><img src="' + imagePath + '/popwin/icon_close.jpg"></li><li class="popwinClose fr mr5 color_white"><a href="###">关闭</a></li></ul> <div class="clear"></div></div>';
        f += '<div class="aptab_center" align="center"><p class="pt10">' + b + "</p>";
        f += '<div align="center"><input name="submit" class="pop_win_button popwinClose" id="pop_win_ok_btn" type="button"   value="确 定" /><input name="submit"   class="pop_win_button popwinClose" type="button" id="pop_win_cancel_btn" value="返回购物车" /></div>';
        f += "</div>";
        f += '<div class="aptab_footer"><img src="' + imagePath + '/popwin/aptab_footer.jpg"></div></div>';
        if (c == null) {
            c = 300
        }
        YHD.popwin(f, c, g, null, null, a);
        if (e) {
            jQuery("#pop_win_ok_btn").click(function() {
                e()
            })
        }
        if (d) {
            jQuery("#pop_win_cancel_btn").click(function() {
                d()
            })
        }
    }, confirmToLottery: function(b, e, d, c, g, a) {
        var f = "" + b + "";
        if (c == null) {
            c = 300
        }
        YHD.popwin(f, c, g, null, null, a);
        if (e) {
            jQuery("#pop_win_ok_btn").click(function() {
                e()
            })
        }
        if (d) {
            jQuery("#pop_win_cancel_btn").click(function() {
                d()
            })
        }
    }, processBar: function(a, b) {
        if (a) {
            YHD.popwin('<img src="' + imagePath + '/loading.gif" />', null, null, null, null, b)
        } else {
            jQuery("#yhd_pop_win").jqmHide()
        }
    }, ajax: function(f, e, b, g) {
        var c = jQuery("#yhd_pop_win");
        c.jqm({ajax: f, ajaxP: e, ajaxText: '<img src="' + imagePath + '/loading.gif" />', onLoad: b, modal: true, toTop: true, closeClass: "popwinClose"}).jqmShow();
        var a = (jQuery(window).width() - c.width()) / 2 + jQuery(window).scrollLeft() + "px";
        var d = (jQuery(window).height() - c.height()) / 2 + jQuery(window).scrollTop() + "px";
        jQuery(c).css("left", a).css("top", d)
    }, ajaxPointAlert: function(f, e, b, g) {
        var c = jQuery("#yhd_pop_win");
        c.jqm({ajax: f, ajaxP: e, ajaxText: '<img src="' + imagePath + '/loading.gif" />', onLoad: b, modal: true, toTop: true, closeClass: "popwinClose"}).jqmShow();
        var a = "436.5px";
        var d = (jQuery(window).height() - c.height()) / 2 + jQuery(window).scrollTop() + "px";
        jQuery(c).css("left", a).css("top", d)
    }, pageX: function(a) {
        a = a || window.event;
        return a.pageX || a.clientX + document.body.scrollLeft
    }, pageY: function(a) {
        a = a || window.event;
        return a.pageY || a.clientY + document.body.scrollTop
    }};
function DrawImage(b, c, a) {
    var d = new Image();
    d.src = b.src;
    if (d.width > 0 && d.height > 0) {
        if (d.width / d.height >= c / a) {
            if (d.width > c) {
                b.width = c;
                b.height = (d.height * c) / d.width
            } else {
                b.width = d.width;
                b.height = d.height
            }
        } else {
            if (d.height > a) {
                b.height = a;
                b.width = (d.width * a) / d.height
            } else {
                b.width = d.width;
                b.height = d.height
            }
        }
    }
}
function switch_btn_img(a, b) {
    if (a != null && b != null) {
        jQuery(a).attr("src", b)
    }
}
;
function addTrackerToEvent(a, b) {
    var c = "tk";
    if (b) {
        c = b
    }
    if (a instanceof jQuery) {
        a.find("a[" + c + "]").click(function() {
            var e = $(this), d = e.attr(c);
            if (d) {
                addTrackPositionToCookie("1", d)
            }
        })
    } else {
        $(a + " a[" + c + "]").each(function(d) {
            var e = this;
            $(e).click(function() {
                addTrackPositionToCookie("1", $(e).attr(c))
            })
        })
    }
}
;
(function(k) {
    var A = window.loli || (window.loli = {});
    var s = A.app = A.app || {};
    var g = A.app.minicart = A.app.minicart || {};
    g.addItemCallback = function(U, T) {
    };
    g.addItemFailback = function(U, T) {
    };
    g.removeItemCallback = function(U, T) {
    };
    g.removeItemFailback = function(U, T) {
    };
    g.updateItemCallback = function(U, T) {
    };
    g.updateItemFailback = function(U, T) {
    };
    g.chooseItemCallback = function(U, T) {
    };
    g.chooseItemFailback = function(U, T) {
    };
    g.errorCallback = function(V, U, T) {
    };
    g.getJSON = function(W, U, T, V, X) {
        if (X == null) {
            X = 3000
        }
        jQuery.ajax({url: W, data: U, dataType: "jsonp", jsonp: "callback", jsonpCallback: "jsonp" + new Date().getTime(), cache: false, timeout: X, success: function(Y) {
                if (T) {
                    T(Y)
                }
            }, error: function(Y, Z, aa) {
                if (V) {
                    V(Y, Z, aa)
                } else {
                    g.errorCallback(Y, Z, aa)
                }
            }})
    };
    var G = k.cookie("provinceId") || 1;
    var i = k.cookie("yihaodian_uid");
    var l = URLPrefix.cartDomain || "http://cart.yhd.com";
    var P = k("#miniCart");
    var q = k("#showMiniCartDetail");
    var J = k("#in_cart_num");
    var e = function() {
        var T = window.navigator.userAgent.toLowerCase();
        var U = /msie ([\d\.]+)/;
        if (U.test(T)) {
            var V = parseInt(U.exec(T)[1]);
            return V
        }
        return 0
    };
    var t = function(T, Y, W) {
        var V = Y || 60;
        var X = W || 60;
        var U = /_\d+x\d+\.([a-zA-Z]+)$/;
        if (T) {
            if (U.test(T)) {
                T = T.replace(U, "_" + V + "x" + X + ".$1")
            } else {
                T = T.substring(0, T.lastIndexOf(".")) + "_" + V + "x" + X + T.substring(T.lastIndexOf("."))
            }
        } else {
            T = "images/defaultproduct_" + V + "x" + X + ".jpg"
        }
        return T
    };
    var m = function(W, U, T, V) {
        k(W).data("lastTime", new Date().getTime());
        if (U) {
            var X = U.call(k(W));
            k(W).data("lastResult", X)
        }
        var Y = setTimeout(function() {
            var ab = k(W).data("lastTime") ? k(W).data("lastTime") : new Date().getTime();
            var Z = (typeof k(W).data("lastResult") == "undefined" || k(W).data("lastResult")) ? true : false;
            var aa = new Date().getTime();
            if (aa - ab >= (V - 50)) {
                if (T && Z) {
                    T.call(k(W))
                }
            }
        }, V)
    };
    var F = [{key: "华北", value: [{id: 2, name: "北京"}, {id: 3, name: "天津"}, {id: 4, name: "河北"}, {id: 32, name: "山西"}, {id: 8, name: "内蒙古"}]}, {key: "华东", value: [{id: 1, name: "上海"}, {id: 5, name: "江苏"}, {id: 6, name: "浙江"}, {id: 13, name: "安徽"}, {id: 14, name: "福建"}, {id: 16, name: "山东"}]}, {key: "华南", value: [{id: 20, name: "广东"}, {id: 21, name: "广西"}, {id: 22, name: "海南"}]}, {key: "华中", value: [{id: 15, name: "江西"}, {id: 17, name: "河南"}, {id: 18, name: "湖北"}, {id: 19, name: "湖南"}]}, {key: "西南", value: [{id: 7, name: "重庆"}, {id: 12, name: "四川"}, {id: 23, name: "贵州"}, {id: 24, name: "云南"}, {id: 25, name: "西藏"}]}, {key: "西北", value: [{id: 26, name: "陕西"}, {id: 27, name: "甘肃"}, {id: 28, name: "青海"}, {id: 30, name: "宁夏"}, {id: 29, name: "新疆"}]}, {key: "东北", value: [{id: 9, name: "辽宁"}, {id: 10, name: "吉林"}, {id: 11, name: "黑龙江"}]}];
    var O = function() {
        var U = jQuery.cookie("cart_num");
        var T = (U && !isNaN(U)) ? parseInt(U) : 0;
        if (T > 0) {
            J.text(T > 999 ? "999+" : T);
            J.show()
        } else {
            J.hide()
        }
    };
    var a = function() {
        var W = k.cookie("detail_yhdareas");
        var Y = [];
        var X = [];
        var V = /([\d]+_[\d]+_[\d]+)_([\S^_]+_[\S^_]+_[\S^_]+)/;
        if (W && V.test(W)) {
            Y = V.exec(W)[1].split("_");
            X = V.exec(W)[2].replace(/\<i\>\<\/i\>/g, "").split("_")
        } else {
            Y = [G];
            for (var U = 0; U < F.length; U++) {
                var Z = F[U].value;
                for (var T = 0; T < Z.length; T++) {
                    if (Z[T].id == G) {
                        X = [Z[T].name];
                        break
                    }
                }
            }
        }
        return[Y, X]
    };
    var K = function(T) {
        if (!T || T.length != 2) {
            return
        }
        var W = T[0];
        var V = T[1];
        var U = W[0] + "_" + W[1] + "_" + W[2] + "_" + V[0] + "_" + V[1] + "_" + V[2];
        k.cookie("provinceId", W[0], {domain: no3wUrl, path: "/", expires: 800});
        k.cookie("detail_yhdareas", U, {domain: no3wUrl, path: "/", expires: 400})
    };
    var o = function() {
        var V = [];
        var W = a();
        var Y = W[0];
        var X = W[1];
        V.push("<div class='yhd_province clearfix'>");
        V.push("<div class='yhd_area_select'>");
        V.push("<div class='yhd_address'>");
        V.push("<span class='hd_val_text' data-value='" + Y.join("_") + "'>" + X.join("|") + "</span>");
        V.push("<i></i>");
        V.push("</div>");
        V.push("<div class='yhd_tab_detail none'>");
        V.push("<div class='yhd_area_tab clearfix'>");
        V.push("<span data-value='" + Y[0] + "' class='yhd_on'><em>" + X[0] + "</em></span>");
        V.push("<span data-value='" + (Y.length > 1 ? Y[1] : "") + "' class=''><em>" + (X.length > 1 ? X[1] : "请选择市") + "</em></span>");
        V.push("<span data-value='" + (Y.length > 2 ? Y[2] : "") + "' class=''><em>" + (X.length > 2 ? X[2] : "请选择区") + "</em></span>");
        V.push("</div>");
        V.push("<div class='yhd_area_box'>");
        V.push("<div class='yhd_item hd_first_area'>");
        for (var U = 0; U < F.length; U++) {
            var Z = F[U].value;
            V.push("<dl class='clearfix'>");
            V.push("<dt>" + F[U].key + "：</dt>");
            for (var T = 0;
                    T < Z.length; T++) {
                V.push("<dd><a data-value='" + Z[T].id + "' class='" + (Y[0] == Z[T].id ? "hd_cart_cur" : "") + "' href='javascript:;'>" + Z[T].name + "</a></dd>")
            }
            V.push("</dl>")
        }
        V.push("</div>");
        V.push("<div class='yhd_item yhd_second_area none'>");
        V.push("</div>");
        V.push("<div class='yhd_item yhd_third_area none' data-tpc='1'>");
        V.push("</div>");
        V.push("</div>");
        V.push("<span class='yhd_close_btn'>×</span>");
        V.push("</div>");
        V.push("</div>");
        V.push("</div>");
        return V.join("")
    };
    var B = function(Y, ae, ab) {
        var af = [];
        var W = t(Y.pic);
        var U = "detail.html?" + Y.pmId;
        var Z = Y.name;
        var ac = Y.checked;
        var ad = Y.amount != null ? Y.amount.money : 0;
        var aa = Y.amount != null ? Y.amount.points : 0;
        var X = "";
        var T = "";
        if (aa > 0) {
            X += aa + "积分"
        }
        if (ad > 0) {
            X += "+¥" + ad
        }
        if (X.indexOf("+") == 0) {
            X = X.substring(1)
        }
        if (X == "") {
            X = "¥0"
        }
        if (ae) {
            ac = false;
            T = "商品无库存或当前区域不销售"
        }
        if (Y.typeValue == 3) {
            ab = false;
            W = URLPrefix.statics + "/global/images/promotion_mix.jpg";
            U = URLPrefix.search + "/p/pt" + Y.promotion.promotionId + "-pl" + Y.promotion.promotionLevelId;
            Z = Y.promotion.title
        }
        if (Y.typeValue == 9) {
            var V = Y.promotion.promotionId;
            U = "detail.html?lp/" + V + "_" + Y.pmId + "_" + G
        }
        af.push("<div class='clearfix hd_cart_wrap'>");
        af.push("<a data-tpc='4' class='hd_select_box " + (ac ? "hd_selected" : "") + "' href='javascript:;' cartItemId='" + Y.id + "'></a>");
        af.push("<a class='hd_pro_img' data-tpc='5' href='" + U + "' target='_blank'><img src='" + W + "' alt=''/></a>");
        af.push("<div class='hd_cart_detail'>");
        af.push("<a class='hd_pro_name' data-tpc='6' href='" + U + "' target='_blank' title='" + Z + "'>" + Z + "</a>");
        af.push("<p class='hd_subcode'></p>");
        af.push("<div class='clearfix'>");
        af.push("<em>" + Y.num + "</em>");
        af.push("<span class='hd_sold_tips'>" + T + "</span>");
        if (ab) {
            af.push("<div class='hd_num_box'>");
            af.push("<a data-tpc='8' class='" + (Y.num > 1 ? "hd_minus" : "hd_minus_disable") + "' href='javascript:;'></a>");
            af.push("<input type='text' name='itemNum' class='hd_minicart_num' value='" + Y.num + "' cartItemId='" + Y.id + "'>");
            af.push("<a class='hd_plus' data-tpc='9' href='javascript:;'></a>");
            af.push("</div>")
        }
        af.push("<b>" + X + "</b>");
        af.push("</div>");
        af.push("</div>");
        af.push("<a class='hd_cart_del' data-tpc='7' href='javascript:;' cartItemId='" + Y.id + "'></a>");
        af.push("<div class='hd_over_tips' style='display: none;'>");
        af.push("<i></i><p></p>");
        af.push("</div>");
        af.push("</div>");
        return af.join("")
    };
    var b = function(au) {
        var W = [];
        if (!au || !au.summary) {
            return""
        }
        for (var ad = 0; ad < au.bags.length; ad++) {
            var ah = au.bags[ad];
            var af = ah.summary.count;
            var ab = ah.yhdMerchant == true ? "1号店" : ah.merchantName;
            var ap = ah.yhdMerchant == true ? "javascript:;" : "http://shop.yhd.com/merchantfront/accessAction.action?merchantId=" + ah.merchantIds[0] + "&siteId=1";
            var Z = true;
            for (var aA = 0; aA < ah.itemGroups.length; aA++) {
                for (var aj = 0; aj < ah.itemGroups[aA].items.length; aj++) {
                    if (!ah.itemGroups[aA].items[aj].checked) {
                        Z = false;
                        break
                    }
                }
            }
            if (ah.itemGroups.length == 0) {
                Z = false
            }
            W.push("<dl>");
            W.push("<dt>");
            W.push("<span class='fr'>共<i>" + af + "</i>件商品</span>");
            W.push("<em class='hd_red_icon'></em>");
            W.push("<a data-tpc='3' class='hd_select_box " + (Z ? "hd_selected" : "") + "' href='javascript:;'></a>");
            W.push("<a href='" + ap + "' " + (ah.yhdMerchant ? "" : "target='_blank'") + "><b>" + ab + "</b></a>");
            W.push("</dt>");
            for (var aA = 0; aA < ah.itemGroups.length; aA++) {
                var X = ah.itemGroups[aA];
                for (var aj = 0; aj < X.items.length; aj++) {
                    var aB = X.items[aj];
                    var an = (aB.typeValue == 12 || aB.typeValue == 11) ? false : true;
                    var U = false;
                    if (aB.typeValue == 3) {
                        an = false
                    }
                    if (aB.typeValue != 2) {
                        W.push("<dd class='hd_cart_cur " + (an ? "hd_num_cur" : "") + "' disable='" + U + "' editable='" + an + "' productId='" + aB.productId + "' pmId='" + aB.pmId + "' cartItemId='" + aB.id + "' parentCartItemId='" + aB.id + "' itemNum='" + aB.num + "' itemType='" + aB.typeValue + "' productType='" + aB.productType + "' checkoutType='" + (aB.checkoutType ? aB.checkoutType : 0) + "' promotionId='" + (aB.promotion ? aB.promotion.promotionId : "") + "' checked='" + aB.checked + "'>");
                        W.push(B(aB, U, an));
                        for (var ao = 0; ao < aB.nestedItems.length; ao++) {
                            var aq = aB.nestedItems[ao];
                            var aw = "detail.html?" + aq.pmId;
                            var az = "¥" + (aq.amount != null ? aq.amount.money : 0);
                            var aa = aq.name;
                            if (aq.typeValue == 10) {
                                W.push("<p class='hd_gift'>");
                                W.push("<span class='fr'>" + az + "</span>");
                                W.push("<em class='hd_extend'>延保</em>");
                                W.push("<a href='" + aw + "' target='_blank' title='" + aa + "'>" + aa + "</a>");
                                W.push("<a href='javascript:void(0);' class='hd_gift_del' cartItemId='" + aq.id + "'></a>");
                                W.push("</p>")
                            } else {
                                if (aq.typeValue == 11) {
                                    W.push("<p class='hd_gift'>");
                                    W.push("<span class='fr'>" + az + "</span>");
                                    W.push("<em>搭售</em>");
                                    W.push("<a href='" + aw + "' target='_blank' title='" + aa + "'>" + aa + "</a>");
                                    W.push("<a href='javascript:void(0);' class='hd_gift_del' cartItemId='" + aq.id + "'></a>");
                                    W.push("</p>")
                                }
                            }
                        }
                    } else {
                        for (var ao = 0; ao < aB.nestedItems.length; ao++) {
                            var aq = aB.nestedItems[ao];
                            W.push("<dd class='hd_cart_cur " + (an ? "hd_num_cur" : "") + "' disable='" + U + "' editable='" + an + "' productId='" + aq.productId + "' pmId='" + aq.pmId + "' cartItemId='" + aq.id + "' parentCartItemId='" + aB.id + "' itemNum='" + aq.num + "' itemType='" + aB.typeValue + "' productType='" + aB.productType + "' checkoutType='" + (aB.checkoutType ? aB.checkoutType : 0) + "' promotionId='" + (aB.promotion ? aB.promotion.promotionId : "") + "' checked='" + aq.checked + "'>");
                            W.push(B(aq, U, an));
                            if (ao != aB.nestedItems.length - 1) {
                                W.push("</dd>")
                            }
                        }
                    }
                    if (aj == X.items.length - 1) {
                        for (var ax = 0; ax < X.gifts.length; ax++) {
                            var ay = X.gifts[ax];
                            var aw = "detail.html?" + ay.pmId;
                            var az = "¥" + ay.price.money;
                            var aa = ay.name;
                            var Y = ay.typeValue == 14 ? "换购" : "赠品";
                            W.push("<p class='hd_gift'>");
                            if (ay.typeValue == 14) {
                                W.push("<span class='fr'>" + az + "</span>")
                            }
                            W.push("<em>" + Y + "</em>");
                            W.push("<a href='" + aw + "' target='_blank' title='" + aa + "'>" + aa + "</a>");
                            W.push("<a href='javascript:void(0);' class='hd_gift_del' cartItemId='" + ay.id + "'></a>");
                            W.push("</p>")
                        }
                    }
                    if (aA == ah.itemGroups.length - 1 && aj == X.items.length - 1) {
                        for (var at = 0; at < ah.gifts.length; at++) {
                            var ay = ah.gifts[at];
                            var aw = "detail.html?" + ay.pmId;
                            var az = "¥" + ay.price.money;
                            var aa = ay.name;
                            W.push("<p class='hd_gift'>");
                            W.push("<em>赠品</em>");
                            W.push("<a href='" + aw + "' target='_blank' title='" + aa + "'>" + aa + "</a>");
                            W.push("<a href='javascript:void(0);' class='hd_gift_del' cartItemId='" + ay.id + "'></a>");
                            W.push("</p>")
                        }
                        for (var al = 0; al < ah.redemptions.length; al++) {
                            var av = ah.redemptions[al];
                            var ai = "detail.html?" + av.pmId;
                            var am = "¥" + av.price.money;
                            var ae = av.name;
                            W.push("<p class='hd_gift'>");
                            W.push("<span class='fr'>" + am + "</span>");
                            W.push("<em>换购</em>");
                            W.push("<a href='" + ai + "' target='_blank' title='" + ae + "'>" + ae + "</a>");
                            W.push("<a href='javascript:void(0);' class='hd_gift_del' cartItemId='" + av.id + "'></a>");
                            W.push("</p>")
                        }
                    }
                    W.push("</dd>")
                }
            }
            for (var al = 0; al < ah.warningItems.length; al++) {
                var V = ah.warningItems[al];
                W.push("<dd class='hd_sold_out hd_cart_cur' disable='true' editable='false'>");
                W.push(B(V, true, false));
                W.push("</dd>")
            }
            var ac = 0;
            var ak = [];
            for (var aA = 0; aA < ah.itemGroups.length; aA++) {
                var X = ah.itemGroups[aA];
                var T = X.pricePromotions;
                ac = ac + T.length;
                for (var ao = 0; ao < T.length; ao++) {
                    ak.push(T[ao].promotion.displayName)
                }
            }
            ac = ac + ah.reductCashes.length;
            for (var ar = 0; ar < ah.reductCashes.length; ar++) {
                ak.push(ah.reductCashes[ar].promotion.displayName)
            }
            W.push("<dd class='clearfix hd_min_sum'>");
            if (ac > 0) {
                W.push("<div class='fl'>");
                W.push("参加" + ac + "项促销，共节约<b>¥" + ah.summary.deduction + "</b><u></u>");
                W.push("<div class='hd_sale_show'>");
                W.push("<i></i>");
                for (var ag = 0; ag < ak.length; ag++) {
                    W.push("<p>" + ak[ag] + "</p>")
                }
                W.push("</div>");
                W.push("</div>")
            }
            W.push("<span class='fr hd_freight'>运费<i>¥" + (ah.summary.deliveryFee != null ? ah.summary.deliveryFee : 0) + "</i></span>");
            if (ah.yhdMerchant == true) {
                W.push("<em class='fr'>" + ah.summary.weight + "KG</em>")
            }
            W.push("</dd>");
            W.push("</dl>")
        }
        return W.join("")
    };
    var n = function(U) {
        var V = [];
        if (U) {
            if (!U.summary) {
                var T = k.cookie("ut");
                if (T) {
                    V.push("<div class='hd_none_tips'>");
                    V.push("<span class='hd_none_icon'></span>");
                    V.push("<p class='hd_none_text'>您的购物车里还没有1号店的商品哦~~</p>");
                    V.push("</div>")
                } else {
                    V.push("<div class='hd_login_tips'>");
                    V.push("<p>登录才能看得到购物车里的商品哦~</p>");
                    V.push("<a href='javascript:void(0);' id='miniCartLogin'>登录</a>");
                    V.push("</div>")
                }
                return
            }
            V.push("<div class='hd_cart_scrollwrap'>");
            V.push(o());
            V.push("<div class='hd_cart_list'>");
            V.push(b(U));
            V.push("</div>");
            V.push("<p class='hd_feedback' data-tpc='11'>");
            V.push("<em></em><a class='blue_link' href='http://yihaodian.sojump.com/jq/5279459.aspx' target='_blank'>意见反馈</a>");
            V.push("</p>");
            V.push("</div>");
            V.push("<div class='hd_bottom_tips' style='display:none;'>");
            V.push("<i></i><em></em><u></u><p></p>");
            V.push("</div>");
            V.push("<div class='hd_total_pro' data-tpc='10'>");
            V.push("<div class='fl'>");
            V.push("<span class='hd_all_select'><a href='javascript:void(0);' class='hd_select_box' id='miniCartSeltAll'></a><i>全选</i></span>");
            V.push("合计<b><em></em></b><p class='hd_point_num'><u></u></p>");
            V.push("</div>");
            V.push("<a class='fr' href='javascript:void(0);' id='miniCartPaybtn'>立即结算</a>");
            V.push("</div>");
            V.push("<div class='hd_area_mask none'></div>");
            V.push("<form method='post' id='miniCartForm' style='display:none;'>");
            V.push("<input name='cart2Checkbox' type='hidden' value=''/>");
            V.push("<input name='cartSuppress' type='hidden' value=''/>");
            V.push("</form>")
        } else {
            var T = k.cookie("ut");
            if (T) {
                V.push("<div class='hd_none_tips'>");
                V.push("<span class='hd_none_icon'></span>");
                V.push("<p class='hd_none_text'>您的购物车里还没有1号店的商品哦~~</p>");
                V.push("</div>")
            } else {
                V.push("<div class='hd_login_tips'>");
                V.push("<p>登录才能看得到购物车里的商品哦~</p>");
                V.push("<a href='javascript:void(0);' id='miniCartLogin'>登录</a>");
                V.push("</div>")
            }
        }
        return V.join("")
    };
    var S = function(T, Z) {
        var X = URLPrefix.pms + "/pms/getRecommProductsByJson.do?callback=?";
        var V = 0;
        var Y = 0;
        var U = function() {
            var ab = k("#addCartPopWin");
            var af = k("a.hd_show_pre", ab);
            var ac = k("a.hd_show_next", ab);
            var ag = ab.find("div.hd_recommend_list ul");
            var ad = ab.find("div.hd_recommend_list").width() + 15;
            var aj = k("div.hd_recommend_list li", ab).size();
            var ai = 4;
            var ae = (aj % ai == 0) ? Math.floor(aj / ai) : Math.floor(aj / ai) + 1;
            var ah = 1;
            if (ae > 1) {
                ac.show();
                af.click(function() {
                    if (ah > 1) {
                        ag.animate({left: "-" + (ah - 2) * ad + "px"}, function() {
                            ah--;
                            if (ah < ae) {
                                ac.show()
                            }
                            if (ah == 1) {
                                af.hide()
                            }
                        })
                    } else {
                        af.hide();
                        ac.show()
                    }
                });
                ac.click(function() {
                    if (ah < ae) {
                        ag.animate({left: "-" + (ah) * ad + "px"}, function() {
                            ah++;
                            if (ah > 1) {
                                af.show()
                            }
                            if (ah == ae) {
                                ac.hide()
                            }
                        })
                    } else {
                        af.show();
                        ac.hide()
                    }
                })
            }
        };
        var W = function(ad) {
            if (V) {
                clearTimeout(V)
            }
            if (Y) {
                return
            }
            var af = [];
            af.push("<div id='addCartPopWin' class='hd_cart_pop'>");
            af.push("<div class='hd_pop_content'>");
            af.push("<span class='hd_colse_btn' onclick='javascript:yhdLib.popclose();'></span>");
            if (T.code == "00000000") {
                af.push("<p class='hd_pop_tips'><i></i>已成功加入购物车</p>");
                af.push("<div class='hd_pop_btn'>");
                af.push("<a href='javascript:addTrackPositionToCookie(\"1\",\"product_popup_jxgw\");yhdLib.popclose();' class='hd_btn_l' data-ref='product_popup_jxgw'>继续购物</a>");
                af.push("<a href='cart.html' class='hd_btn_r' data-ref='product_popup'>查看购物车</a>");
                af.push("</div>")
            } else {
                af.push("<p class='hd_pop_tips'><i class='hd_error_icon'></i>加入购物车失败</p>");
                af.push("<div class='hd_error_tips'>");
                af.push(T.msg);
                af.push("</div>")
            }
            if (ad) {
                af.push("<div class='hd_recommend_wrap'>");
                af.push("<p>更多商品推荐</p>");
                af.push("<div class='hd_recommend_list'>");
                af.push("<ul class='clearfix'>");
                for (var ae = 0; ae < ad.length; ae++) {
                    var ab = ad[ae];
                    var ac = ab.linkUrl;
                    var ag = ab.trackerCode;
                    var ah = t(ab.picUrl, 85, 85);
                    var aj = ab.cnName;
                    var ai = ab.salePrice;
                    af.push("<li>");
                    af.push("<a href='" + ac + "' target='_blank' data-ref='" + ag + "' class='hd_pop_img'><img src='" + ah + "'></a>");
                    af.push("<a href='" + ac + "' target='_blank' data-ref='" + ag + "' class='hd_pop_name'>" + aj + "</a>");
                    af.push("<b class='hd_pop_price'>&yen;" + ai + "</b>");
                    af.push("</li>")
                }
                af.push("</ul>");
                af.push("</div>");
                af.push("<a href='javascript:void(0);' class='hd_show_pre none'></a>");
                af.push("<a href='javascript:void(0);' class='hd_show_next none'></a>");
                af.push("</div>")
            }
            af.push("</div>");
            af.push("</div>");
            yhdLib.popwin({popcontentstr: af.join("")});
            Y = 1;
            U()
        };
        var aa = {currSiteId: currSiteId, provinceId: G, productid: Z.productId, merchantId: Z.merchantId, type: "html"};
        k.getJSON(X, aa, function(ab) {
            if (ab && ab.success == "1") {
                W(ab.value)
            } else {
                W(0)
            }
        });
        var V = setTimeout(function() {
            W(0)
        }, 5 * 1000)
    };
    var Q = function() {
        var W = k("#miniCart div.hd_cart_scrollwrap");
        var U = k(window).height(), T = k(window).scrollTop(), X = q.offset().top, V = U - (X - T) - k("#miniCart div.hd_total_pro").outerHeight();
        W.css("height", V)
    };
    var c = function(U, W) {
        var T = U.find("div.hd_over_tips");
        var V = U.find("div.hd_cart_wrap");
        T.find("p").text(W);
        T.slideDown(500);
        V.css("z-index", 1201);
        setTimeout(function() {
            T.slideUp(500);
            V.css("z-index", 1200)
        }, 3000)
    };
    var d = function(U) {
        var T = k("#miniCart div.hd_bottom_tips");
        T.find("p").html(U);
        T.show()
    };
    var M = function() {
        var V = "http://buy.yhd.com/checkoutV3/index.do";
        var aa = P.find("div.hd_cart_list dd[productId]");
        var ab = 0;
        var W = 0;
        var Y = 0;
        var ac = 0;
        aa.each(function() {
            var ad = k(this);
            var ae = false;
            if (ad.get(0).getAttribute("checked") == "true") {
                ae = true
            }
            Y++;
            if (ad.attr("productType") == 4 && ae && ad.attr("disable") == "false") {
                ab++
            }
            if ((ad.attr("checkoutType") == 2 || ad.attr("checkoutType") == 1) && ae && ad.attr("disable") == "false") {
                W++
            }
            if (ae) {
                ac++
            }
        });
        if ((ab > 0 && W == 0 && ab < ac) || (W > 0 && ab == 0 && W < ac)) {
            d("由于您的结算商品中包含礼品卡/海购商品，请前往<a href='" + l + "/cart/cart.do?action=view' class='blue_link'>购物车</a>分开结算");
            return false
        }
        if (ab > 0 && W > 0) {
            d("由于您的结算商品中包含礼品卡和海购商品，请前往<a href='" + l + "/cart/cart.do?action=view' class='blue_link'>购物车</a>分开结算");
            return false
        }
        if (ac == 0) {
            return false
        }
        var X = P.find("div.hd_cart_list dd a.hd_select_box");
        var U = [];
        X.each(function() {
            var ad = k(this);
            var af = ad.parents("dd").attr("cartItemId");
            var ae = ad.hasClass("hd_selected") ? 1 : 0;
            U.push(af + "=" + ae)
        });
        var T = k("#miniCartForm").get(0);
        T.action = V;
        T.cart2Checkbox.value = U.join(",");
        var Z = function(ad) {
            if (ad.result == 1) {
                T.submit()
            } else {
                if (yhdPublicLogin) {
                    var ae = URLPrefix.passport;
                    yhdPublicLogin.showLoginDivNone(ae, false, "", function(af) {
                        if (af == 0) {
                            k("#miniCartForm").submit()
                        }
                    })
                }
            }
        };
        A.globalCheckLogin(Z)
    };
    var r = function(U, T) {
        if (!U) {
            return
        }
        var V = l + "/cart/opt/getCitysByProvince.do?callback=?";
        var W = function(ad) {
            var Z = [];
            Z.push("<dl class='clearfix'>");
            for (var aa = 0; aa < ad.length; aa++) {
                var Y = ad[aa];
                Z.push("<dd><a data-value='" + Y.id + "' href='javascript:;'>" + Y.name + "</a></dd>")
            }
            Z.push("</dl>");
            var ab = P.find("div.yhd_province div.yhd_area_tab span:eq(1)");
            var ac = P.find("div.yhd_province div.yhd_area_box div.yhd_second_area");
            ac.html(Z.join(""));
            ab.attr("data-loaded", 1);
            if (T) {
                T(ad)
            }
        };
        var X = {provinceId: U};
        k.getJSON(V, X, function(Y) {
            if (Y && Y.code == "00000000") {
                W(Y.data)
            }
        })
    };
    var h = function(U, T) {
        if (!U) {
            return
        }
        var W = l + "/cart/opt/getCountysByCity.do?callback=?";
        var V = function(ad) {
            var Z = [];
            Z.push("<dl class='clearfix'>");
            for (var aa = 0; aa < ad.length; aa++) {
                var Y = ad[aa];
                Z.push("<dd><a data-value='" + Y.id + "' href='javascript:;'>" + Y.name + "</a></dd>")
            }
            Z.push("</dl>");
            var ab = P.find("div.yhd_province div.yhd_area_tab span:eq(2)");
            var ac = P.find("div.yhd_province div.yhd_area_box div.yhd_third_area");
            ac.html(Z.join(""));
            ab.attr("data-loaded", 1);
            if (T) {
                T(ad)
            }
        };
        var X = {cityId: U};
        k.getJSON(W, X, function(Y) {
            if (Y && Y.code == "00000000") {
                V(Y.data)
            }
        })
    };
    var j = function(U) {
        var T = l + "/cart/info/minicart.do?callback=?";
        k.getJSON(T, function(V) {
            if (V && V.code == "00000000") {
                P.data("miniCartData", V.data);
                U(V.data)
            } else {
                U(null)
            }
        })
    };
    var E = function(ac, U, af) {
        if (!ac || ac.productId == null || ac.amount == null) {
            return
        }
        var ad = ac.amount;
        var Y = ac.isFloat;
        var T = ac.merchantId;
        var aa = ac.productId;
        var ah = ac.pmId || "";
        var ab = ac.ybPmIds || "";
        var X = ac.showPrice || "";
        var ae = ac.needTip || "";
        var ag = ac.linkPosition || "";
        var aj = ac.referrer || encodeURIComponent(document.referrer);
        var V = l + "/cart/opt/add.do?callback=?";
        var ai = function(ak) {
            if (Y) {
                m(P, null, function() {
                    N()
                }, 200)
            } else {
                if (!ac.isDeleteNewDiv) {
                    S(ak, ac)
                }
                P.data("cart-item-loaded", 0)
            }
            if (U) {
                U(ak)
            }
            g.addItemCallback(ac, ak)
        };
        var W = function(ak) {
            if (ak && ak.code) {
                var an = ak.code;
                if (an == "300010801005") {
                    var al = ak.data;
                    if (al && al.indexOf("http") == 0) {
                        window.location.href = al
                    } else {
                        window.location.href = currDomain + al
                    }
                } else {
                    if (an == "300010800001") {
                        var am = URLPrefix.passport;
                        yhdPublicLogin.showLoginDivNone(am, false, "", function(ao) {
                            if (ao == 0) {
                                yhdPublicLogin.showTopLoginInfo()
                            }
                        })
                    } else {
                        S(ak, ac)
                    }
                }
            }
            if (af) {
                af(ak)
            }
            g.addItemFailback(ac, ak)
        };
        var Z = {productId: aa, merchantId: T, num: ad, pmId: ah, ybPmIds: ab, showPrice: X, needTip: ae, pageRef: aj, linkPosition: ag};
        g.getJSON(V, Z, function(ak) {
            if (ak && ak.code == "00000000") {
                ai(ak)
            } else {
                W(ak)
            }
        })
    };
    var w = function(V, aa, Y) {
        if (!V || V.productId == null) {
            return
        }
        var U = V.productId;
        var Z = V.merchantId;
        var W = V.ybPmIds;
        var ab = l + "/cart/phone/isContractProduct.do?callback=?";
        var X = function(ad) {
            if (aa) {
                aa(ad)
            }
        };
        var ac = function(ad) {
            if (Y) {
                Y(ad)
            }
        };
        var T = {productId: U, merchantId: Z, ybPmIds: W ? W : ""};
        g.getJSON(ab, T, function(ad) {
            if (ad.ERROR) {
                ac(ad)
            } else {
                X(ad)
            }
        })
    };
    var I = function(X, Z, V) {
        if (!X || X.itemIds == null) {
            return
        }
        var Y = l + "/cart/info/minicartDeleteItem.do?callback=?";
        var T = X.itemIds.join(",");
        var U = function(ab) {
            if (P.data("cart-item-loaded")) {
                j(H)
            }
            if (Z) {
                Z(ab)
            }
            g.removeItemCallback(X, ab)
        };
        var W = function(ac) {
            var ab = P.find("div.hd_cart_list dd[cartItemId='" + X.itemId + "']");
            var ad = ac.msg;
            if (ab.size() > 0) {
                ad = ad.replace("[" + ab.find("a.hd_pro_name").text() + "]", "");
                c(ab, ad)
            }
            if (V) {
                V(ac)
            }
            g.removeItemFailback(X, ac)
        };
        var aa = {deleteId: T};
        g.getJSON(Y, aa, function(ab) {
            if (ab && ab.code == "00000000") {
                U(ab)
            } else {
                W(ab)
            }
        })
    };
    var C = function(V, Y, Z) {
        if (!V || V.itemId == null || V.pmId == null || V.num == null || V.itemType == null) {
            return
        }
        var T = l + "/cart/info/minicartEditNum.do?callback=?";
        if (V.itemType == 10) {
            T = l + "/cart/info/minicartEditPointNum.do?callback=?"
        } else {
            if (V.itemType == 9) {
                T = l + "/cart/info/minicartEditLandingNum.do?callback=?"
            }
        }
        var U = function(aa) {
            if (P.data("cart-item-loaded")) {
                j(H)
            }
            if (Y) {
                Y(aa)
            }
            g.updateItemCallback(V, aa)
        };
        var X = function(ab) {
            var aa = P.find("div.hd_cart_list dd[cartItemId='" + V.itemId + "']");
            var ad = ab.msg;
            ad = ad.replace("[" + aa.find("a.hd_pro_name").text() + "]", "");
            c(aa, ad);
            var ac = aa.find("div.hd_num_box input");
            ac.val(aa.attr("itemNum"));
            if (Z) {
                Z(ab)
            }
            g.updateItemFailback(V, ab)
        };
        var W = {cartItemVoId: V.itemId, pmInfoId: V.pmId, num: V.num};
        if (V.itemType == 9) {
            W.promotionId = V.promotionId
        }
        g.getJSON(T, W, function(aa) {
            if (aa && aa.code == "00000000") {
                U(aa)
            } else {
                X(aa)
            }
        })
    };
    var z = function(aa, W, T) {
        if (!aa || aa.length == 0) {
            return
        }
        var X = l + "/cart/info/minicart.do?callback=?";
        var V = [];
        for (var ab = 0; ab < aa.length; ab++) {
            V.push(aa[ab].itemId + "=" + aa[ab].checked)
        }
        var Y = function(ac) {
            if (P.data("cart-item-loaded")) {
                P.data("miniCartData", ac.data);
                H(ac.data)
            }
            if (W) {
                W(ac)
            }
            g.chooseItemCallback(aa, ac)
        };
        var U = function(ac) {
            if (P.data("cart-item-loaded")) {
                j(H)
            }
            if (T) {
                T(ac)
            }
            g.chooseItemFailback(aa, result)
        };
        var Z = {checkboxStr: V.join(",")};
        g.getJSON(X, Z, function(ac) {
            if (ac && ac.code == "00000000") {
                Y(ac)
            } else {
                U(ac)
            }
        })
    };
    var p = function(X, Y, Z) {
        if (!X || X.productIds == null || X.productIds.length == 0) {
            return
        }
        var U = l + "/cart/opt/getSubProductSerialAttr.do?callback=?";
        var T = function(ad) {
            if (ad.data && ad.data.subProductIdToAttributeValueMap) {
                var aa = ad.data.subProductIdToAttributeValueMap;
                for (var ag = 0; ag < X.productIds.length; ag++) {
                    var ac = P.find("div.hd_cart_list dd[productId='" + X.productIds[ag] + "'] p.hd_subcode");
                    var ae = aa[X.productIds[ag]];
                    if (ac.size() > 0 && ae) {
                        var ab = "";
                        for (var af = 0; af < ae.length; af++) {
                            ab += "<span>" + ae[af].attributeValueAlias + "</span>&nbsp;"
                        }
                        ac.html(ab)
                    }
                }
            }
            if (Y) {
                Y(ad)
            }
        };
        var W = function(aa) {
            if (Z) {
                Z(aa)
            }
        };
        for (var V = 0; V < X.productIds.length; V++) {
            U += "&subProductIds=" + X.productIds[V]
        }
        k.getJSON(U, null, function(aa) {
            if (aa && aa.code == "00000000") {
                T(aa)
            } else {
                W(aa)
            }
        })
    };
    var f = function(Z) {
        if (!Z || !Z.summary) {
            return
        }
        var T = [];
        for (var V = 0; V < Z.bags.length; V++) {
            var X = Z.bags[V];
            for (var W = 0; W < X.itemGroups.length; W++) {
                var aa = X.itemGroups[W];
                for (var U = 0; U < aa.items.length; U++) {
                    var Y = aa.items[U];
                    if (Y.productType == 2) {
                        T.push(Y.productId)
                    }
                }
            }
        }
        p({productIds: T})
    };
    var y = function(ag) {
        if (!ag || !ag.summary) {
            J.hide();
            P.find("div.hd_total_pro span.hd_all_select a").removeClass("hd_selected");
            P.find("div.hd_total_pro a.fr").text("立即结算(0)");
            P.find("div.hd_total_pro div.fl em").text("¥0");
            P.find("div.hd_total_pro div.fl u").text("");
            P.find("div.hd_total_pro").removeClass("hd_has_point");
            return
        }
        var aj = parseInt(ag.summary.count);
        if (aj > 0) {
            J.text(aj > 999 ? "999+" : aj);
            J.show()
        } else {
            J.hide()
        }
        if (aj > 0) {
            k.cookie("cart_num", aj, {domain: no3wUrl, path: "/", expires: 10})
        }
        var ai = 0;
        for (var ab = 0; ab < ag.bags.length; ab++) {
            var ah = ag.bags[ab];
            for (var aa = 0; aa < ah.itemGroups.length; aa++) {
                var af = ah.itemGroups[aa];
                for (var Z = 0; Z < af.items.length; Z++) {
                    var ad = af.items[Z];
                    if (ad.checked) {
                        ai = ai + ad.num
                    }
                    for (var am = 0; am < ad.nestedItems.length; am++) {
                        var V = ad.nestedItems[am];
                        if (V.typeValue == 10 || V.typeValue == 11) {
                            ai += V.num
                        }
                    }
                }
                for (var X = 0; X < af.gifts.length; X++) {
                    var W = af.gifts[X];
                    ai = ai + W.num
                }
            }
            for (var T = 0; T < ah.gifts.length; T++) {
                var W = ah.gifts[T];
                ai = ai + W.num
            }
            for (var an = 0; an < ah.redemptions.length; an++) {
                var ak = ah.redemptions[an];
                ai = ai + ak.num
            }
        }
        var Y = parseFloat(ag.summary.amount.money) + parseFloat(ag.summary.deliveryFee != null ? ag.summary.deliveryFee : 0);
        var ac = parseFloat(ag.summary.amount.points);
        if (Y % 1 > 0) {
            Y = Y.toFixed(2)
        }
        if (ac % 1 > 0) {
            ac = ac.toFixed(2)
        }
        var al = "";
        if (Y > 0) {
            al = "¥" + Y
        } else {
            al = "¥0"
        }
        if (ac > 0) {
            var U = "+" + ac + "积分";
            P.find("div.hd_total_pro").addClass("hd_has_point");
            P.find("div.hd_total_pro div.fl u").text(U)
        } else {
            P.find("div.hd_total_pro").removeClass("hd_has_point");
            P.find("div.hd_total_pro div.fl u").text("")
        }
        P.find("div.hd_total_pro a.fr").text("立即结算(" + ai + ")");
        P.find("div.hd_total_pro div.fl em").text(al);
        if (ai > 0) {
            k("#miniCartPaybtn", P).addClass("hd_pay_btn")
        } else {
            k("#miniCartPaybtn", P).removeClass("hd_pay_btn")
        }
        var ae = true;
        if (ag.bags.length == 0) {
            ae = false
        } else {
            for (var ab = 0; ab < ag.bags.length; ab++) {
                var ah = ag.bags[ab];
                for (var aa = 0; aa < ah.itemGroups.length; aa++) {
                    var af = ah.itemGroups[aa];
                    for (var Z = 0; Z < af.items.length; Z++) {
                        var ad = af.items[Z];
                        if (!ad.checked) {
                            ae = false;
                            break
                        }
                    }
                }
            }
        }
        if (ae && ai > 0) {
            k("#miniCartSeltAll", P).addClass("hd_selected")
        } else {
            k("#miniCartSeltAll", P).removeClass("hd_selected")
        }
    };
    var R = function(U) {
        var T = n(U);
        q.html(T);
        y(U);
        f(U);
        Q()
    };
    var H = function(U) {
        if (!U || !U.summary) {
            R(U);
            return
        }
        var T = b(U);
        q.find("div.hd_cart_list").html(T);
        y(U);
        f(U)
    };
    var N = function() {
        var U = 0;
        var T = function(V) {
            if (P.data("cart-item-loaded")) {
                if (P.find("div.hd_none_tips").size() > 0 || P.find("div.hd_login_tips").size() > 0) {
                    R(V);
                    P.data("cart-item-loaded", 1)
                } else {
                    H(V)
                }
            } else {
                R(V);
                P.data("cart-item-loaded", 1)
            }
            var W = function() {
                if (U) {
                    clearTimeout(U);
                    U = 0
                }
            };
            W();
            k("#showMiniCartDetail").show();
            k("#hdPrismWrap div.hd_prism").removeClass("hd_cur");
            U = setTimeout(function() {
                k("#showMiniCartDetail").hide(1000);
                W()
            }, 2000);
            k("#showMiniCartDetail").mouseenter(W)
        };
        j(T)
    };
    var x = function() {
        var ad = P.find("div.yhd_province div.yhd_address");
        var V = P.find("div.yhd_province div.yhd_tab_detail");
        var T = P.find("div.hd_area_mask");
        var ac = P.find("div.yhd_province div.yhd_area_tab span");
        var aa = P.find("div.yhd_province div.yhd_area_box div.yhd_item");
        if (ad.hasClass("select")) {
            return
        }
        var X = k(ac[0]).attr("data-value");
        var Y = k(ac[1]).attr("data-value");
        var ab = k(ac[2]).attr("data-value");
        var Z = k(ac[1]).attr("data-loaded");
        var W = k(ac[2]).attr("data-loaded");
        if (Y != "" && Z != 1) {
            r(X)
        }
        if (ab != "" && W != 1) {
            h(Y)
        }
        ad.addClass("select");
        V.slideDown();
        T.show();
        var U = k("div.hd_cart_scrollwrap", P).outerHeight();
        if (U > k("div.hd_cart_list", P).height() + k("div.yhd_province", P).outerHeight()) {
            V.css("width", "334px")
        } else {
            V.css("width", "317px")
        }
        k("div.hd_cart_scrollwrap", P).css("position", "static")
    };
    var L = function() {
        var U = P.find("div.yhd_province div.yhd_address");
        var V = P.find("div.yhd_province div.yhd_tab_detail");
        var T = P.find("div.hd_area_mask");
        U.removeClass("select");
        V.slideUp();
        T.hide();
        k("div.hd_cart_scrollwrap", P).css("position", "relative")
    };
    var D = function(X, W, T, Y) {
        var V = function() {
            var Z = /^[1-9]\d{0,2}$/g;
            if (!Z.test(Y.val())) {
                c(X, "输入的数量有误,应为[1-999]");
                Y.val(X.attr("itemNum"));
                return false
            }
            var aa = parseInt(Y.val());
            if (aa > 1) {
                W.removeClass("hd_minus_disable").addClass("hd_minus")
            }
            if (aa >= 999) {
                T.removeClass("hd_plus").addClass("hd_plus_disable")
            }
            if (aa <= 1) {
                W.removeClass("hd_minus").addClass("hd_minus_disable")
            }
            if (aa < 999) {
                T.removeClass("hd_plus_disable").addClass("hd_plus")
            }
            return true
        };
        var U = function() {
            var ab = X.attr("itemType");
            var Z = Y.val();
            if (ab == 2) {
                Z = 0;
                var aa = P.find("div.hd_cart_list dd[parentCartItemId='" + X.attr("parentCartItemId") + "']");
                aa.each(function() {
                    var ac = k(this).find("input.hd_minicart_num");
                    Z = Z + parseInt(ac.val())
                })
            }
            C({itemId: X.attr("cartItemId"), pmId: X.attr("pmId"), itemType: X.attr("itemType"), promotionId: X.attr("promotionId"), num: Z})
        };
        m(k(this), V, U, 500)
    };
    var u = function(T) {
        var U = function(V) {
            var W = parseInt(V.code);
            if (W == 1) {
                if (k("#validateProductId").length > 0) {
                    k("#validateProductId").attr("value", productId)
                }
                if (k.cookie("prompt_flag") == null && k("#buyPromptDiv").length > 0) {
                    YHD.popwinId("buyPromptDiv");
                    k("#validate").bind("click", function() {
                        window.location.href = URLPrefix.productDetailHost + "/product/" + T.productId + "_" + T.merchantId
                    })
                } else {
                    window.location.href = URLPrefix.productDetailHost + "/product/" + T.productId + "_" + T.merchantId
                }
            } else {
                if (k("#validateProductId").length > 0) {
                    k("#validateProductId").attr("value", productId)
                }
                if (k.cookie("prompt_flag") == null && k("#buyPromptDiv").length > 0) {
                    YHD.popwinId("buyPromptDiv", "popwinClose");
                    k("#validate").bind("click", function() {
                        E(T, function() {
                            YHDOBJECT.callBackFunc(T)
                        })
                    })
                } else {
                    E(T, function() {
                        YHDOBJECT.callBackFunc(T)
                    })
                }
            }
        };
        w(T, U)
    };
    var v = function() {
        var T, U;
        P.mouseenter(function() {
            if (U) {
                clearTimeout(U)
            }
            T = setTimeout(function() {
                q.show();
                k("#hdPrismWrap div.hd_prism").removeClass("hd_cur");
                if (!P.data("cart-item-loaded")) {
                    j(R);
                    P.data("cart-item-loaded", 1)
                } else {
                    Q();
                    k("div.hd_cart_list dd div.hd_over_tips", P).hide()
                }
            }, 200)
        });
        P.mouseleave(function() {
            if (T) {
                clearTimeout(T)
            }
            U = setTimeout(function() {
                q.hide()
            }, 200)
        });
        P.delegate("div.hd_cart_scrollwrap", "mousewheel", function(Y, W) {
            var Z = k(this).scrollTop();
            var X = k(this).outerHeight();
            var V = k("#miniCart .yhd_province").outerHeight() + k("#miniCart .hd_cart_list").outerHeight() + k("#miniCart .hd_feedback").outerHeight();
            if (X > V) {
                Y.preventDefault()
            }
            if (Z == 0 && (W > 0)) {
                Y.preventDefault()
            } else {
                if (Z == V - X && (W < 0)) {
                    Y.preventDefault()
                }
            }
        });
        P.delegate("div.hd_total_pro", "mousewheel", function(V, W) {
            V.preventDefault()
        });
        P.delegate("div.hd_area_mask,div.yhd_tab_detail", "mousewheel", function(V, W) {
            V.preventDefault()
        });
        P.delegate("div.yhd_province dd", "mouseenter", function() {
            k(this).addClass("hd_cart_cur")
        });
        P.delegate("div.yhd_province dd", "mouseleave", function() {
            k(this).removeClass("hd_cart_cur")
        });
        P.delegate("p.hd_gift", "mouseenter", function() {
            k(this).addClass("hd_gift_cur")
        });
        P.delegate("p.hd_gift", "mouseleave", function() {
            k(this).removeClass("hd_gift_cur")
        });
        P.delegate("div.hd_cart_list dd.hd_min_sum .fl", "mouseenter", function() {
            k(this).addClass("hd_sale_cur");
            var X = k(this).position().top + 60, W = k("div.hd_cart_scrollwrap", P).scrollTop(), Z = k("div.hd_cart_scrollwrap", P).outerHeight(true), V = k(this).find(".hd_sale_show").outerHeight(true), Y = Z - (X - W);
            if (Y < V) {
                k(this).find(".hd_sale_show").addClass("hd_sale_showup")
            } else {
                k(this).find(".hd_sale_show").attr("class", "hd_sale_show")
            }
        });
        P.delegate("div.hd_cart_list dd.hd_min_sum .fl", "mouseleave", function() {
            k(this).removeClass("hd_sale_cur")
        });
        P.delegate("div.hd_cart_list a.hd_cart_del", "click", function() {
            m(k(this), null, function() {
                var V = k(this).attr("cartItemId");
                I({itemIds: [V]})
            }, 500);
            return false
        });
        P.delegate("div.hd_cart_list a.hd_gift_del", "click", function() {
            m(k(this), null, function() {
                var V = k(this).attr("cartItemId");
                I({itemIds: [V]})
            }, 500);
            return false
        });
        P.delegate("div.hd_cart_list a.hd_plus", "click", function() {
            var X = k(this).parents("dd");
            var W = X.find("div.hd_num_box a:eq(0)");
            var Z = X.find("div.hd_num_box a:eq(1)");
            var Y = X.find("div.hd_num_box input");
            var V = parseInt(Y.val());
            if (V >= 999) {
                V = 999
            } else {
                V = V + 1
            }
            Y.val(V);
            D(X, W, Z, Y);
            return false
        });
        P.delegate("div.hd_cart_list a.hd_minus", "click", function() {
            var X = k(this).parents("dd");
            var W = X.find("div.hd_num_box a:eq(0)");
            var Z = X.find("div.hd_num_box a:eq(1)");
            var Y = X.find("div.hd_num_box input");
            var V = parseInt(Y.val());
            if (V <= 1) {
                V = 1
            } else {
                V = V - 1
            }
            Y.val(V);
            D(X, W, Z, Y);
            return false
        });
        P.delegate("div.hd_cart_list input.hd_minicart_num", "blur", function() {
            var V = k(this).parents("dd");
            var Y = V.find("div.hd_num_box a:eq(0)");
            var X = V.find("div.hd_num_box a:eq(1)");
            var W = V.find("div.hd_num_box input");
            D(V, Y, X, W);
            return false
        });
        P.delegate("div.hd_cart_list input.hd_minicart_num", "keyup", function(V) {
            var Z = k(this).parents("dd");
            var X = Z.find("div.hd_num_box a:eq(0)");
            var W = Z.find("div.hd_num_box a:eq(1)");
            var aa = Z.find("div.hd_num_box input");
            var Y = V.keyCode;
            if (Y == "13") {
                aa.blur()
            }
            return false
        });
        P.delegate("div.hd_cart_list dd a.hd_select_box", "click", function() {
            var V = k(this).parents("dd");
            var W = k(this);
            if (V.attr("disable") == "true") {
                return false
            }
            var Y = function() {
                var Z = W.hasClass("hd_selected") ? 1 : 0;
                if (Z) {
                    W.removeClass("hd_selected")
                } else {
                    W.addClass("hd_selected")
                }
                if (V.attr("itemType") == 2) {
                    var aa = P.find("div.hd_cart_list dd[parentCartItemId='" + V.attr("parentCartItemId") + "']");
                    aa.each(function() {
                        var ab = k(this).find("a.hd_select_box");
                        if (k(this).attr("cartItemId") != V.attr("cartItemId")) {
                            if (Z) {
                                ab.removeClass("hd_selected")
                            } else {
                                ab.addClass("hd_selected")
                            }
                        }
                    })
                }
            };
            var X = function() {
                var Z = P.find("div.hd_cart_list dd a.hd_select_box");
                var aa = [];
                Z.each(function() {
                    var ab = k(this);
                    var ad = ab.parents("dd").attr("parentCartItemId");
                    var ac = ab.hasClass("hd_selected") ? 1 : 0;
                    aa.push({itemId: ad, checked: ac})
                });
                z(aa)
            };
            m(k(this), Y, X, 500);
            return false
        });
        P.delegate("div.hd_cart_list dt a.hd_select_box", "click", function() {
            var W = k(this);
            var V = k(this).parents("dl").find("dd");
            var Y = function() {
                var Z = W.hasClass("hd_selected") ? 1 : 0;
                if (Z) {
                    W.removeClass("hd_selected")
                } else {
                    W.addClass("hd_selected")
                }
                V.each(function(aa, ab) {
                    if (k(ab).attr("disable") != "true") {
                        if (Z) {
                            k(ab).find("a.hd_select_box").removeClass("hd_selected")
                        } else {
                            k(ab).find("a.hd_select_box").addClass("hd_selected")
                        }
                    }
                })
            };
            var X = function() {
                var Z = P.find("div.hd_cart_list dd a.hd_select_box");
                var aa = [];
                Z.each(function() {
                    var ab = k(this);
                    var ad = ab.parents("dd").attr("parentCartItemId");
                    var ac = ab.hasClass("hd_selected") ? 1 : 0;
                    aa.push({itemId: ad, checked: ac})
                });
                z(aa)
            };
            m(k(this), Y, X, 500);
            return false
        });
        P.delegate("div.hd_total_pro #miniCartSeltAll", "click", function() {
            var W = k(this);
            var V = P.find("div.hd_cart_list dd[productId]");
            var Y = function() {
                var Z = W.hasClass("hd_selected") ? 1 : 0;
                if (Z) {
                    W.removeClass("hd_selected")
                } else {
                    W.addClass("hd_selected")
                }
                V.each(function(aa, ab) {
                    if (k(ab).attr("disable") != "true") {
                        if (Z) {
                            k(ab).find("a.hd_select_box").removeClass("hd_selected")
                        } else {
                            k(ab).find("a.hd_select_box").addClass("hd_selected")
                        }
                    }
                });
                P.find("div.hd_cart_list dt a.hd_select_box").each(function() {
                    if (Z) {
                        k(this).removeClass("hd_selected")
                    } else {
                        k(this).addClass("hd_selected")
                    }
                })
            };
            var X = function() {
                var Z = P.find("div.hd_cart_list dd a.hd_select_box");
                var aa = [];
                Z.each(function() {
                    var ab = k(this);
                    var ad = ab.parents("dd").attr("parentCartItemId");
                    var ac = ab.hasClass("hd_selected") ? 1 : 0;
                    aa.push({itemId: ad, checked: ac})
                });
                z(aa)
            };
            m(k(this), Y, X, 500);
            return false
        });
        q.delegate(".hd_bottom_tips u", "click", function() {
            k(this).parents(".hd_bottom_tips").hide()
        });
        P.delegate("div.hd_total_pro #miniCartPaybtn", "click", function() {
            M();
            return false
        });
        P.delegate("div.yhd_province div.yhd_address", "click", function() {
            x();
            return false
        });
        P.delegate("div.yhd_province span.yhd_close_btn", "click", function() {
            L();
            return false
        });
        P.delegate("div.yhd_province div.yhd_area_tab span", "click", function() {
            var V = P.find("div.yhd_province div.yhd_area_tab span");
            var W = P.find("div.yhd_province div.yhd_area_box div.yhd_item");
            var X = k(this).index();
            V.eq(X).addClass("yhd_on").siblings().removeClass("yhd_on");
            W.hide().eq(X).show();
            return false
        });
        P.delegate("div.yhd_province div.hd_first_area dd a", "click", function() {
            var V = k(this).attr("data-value");
            var W = k(this).text();
            var X = function() {
                var Z = P.find("div.yhd_province div.yhd_area_tab span");
                var Y = P.find("div.yhd_province div.yhd_area_box div.yhd_item");
                k(Z[0]).attr("data-value", V);
                k(Z[0]).find("em").text(W);
                Z.eq(1).addClass("yhd_on").siblings().removeClass("yhd_on");
                Y.hide().eq(1).show();
                k(Z[1]).attr("data-value", "");
                k(Z[1]).find("em").text("请选择市");
                k(Z[2]).attr("data-value", "");
                k(Z[2]).find("em").text("请选择区");
                k(Y[2]).html("")
            };
            r(V, X);
            return false
        });
        P.delegate("div.yhd_province div.yhd_second_area dd a", "click", function() {
            var V = k(this).attr("data-value");
            var W = k(this).text();
            var X = function() {
                var Z = P.find("div.yhd_province div.yhd_area_tab span");
                var Y = P.find("div.yhd_province div.yhd_area_box div.yhd_item");
                k(Z[1]).attr("data-value", V);
                k(Z[1]).find("em").text(W);
                Z.eq(2).addClass("yhd_on").siblings().removeClass("yhd_on");
                Y.hide().eq(2).show()
            };
            h(V, X);
            return false
        });
        P.delegate("div.yhd_province div.yhd_third_area dd a", "click", function() {
            var V = P.find("div.yhd_province div.yhd_area_tab span");
            var W = k(this).attr("data-value");
            var X = k(this).text();
            k(V[2]).attr("data-value", W).find("em").text(X);
            var Z = [k(V[0]).attr("data-value"), k(V[1]).attr("data-value"), k(V[2]).attr("data-value")];
            var aa = [k(V[0]).find("em").text(), k(V[1]).find("em").text(), k(V[2]).find("em").text()];
            var Y = P.find("div.yhd_province div.yhd_address span");
            Y.attr("data-value", Z.join("_"));
            Y.text(aa.join("|"));
            K([Z, aa]);
            L();
            if (G != Z[0]) {
                setAddressCity(Z[0])
            }
        });
        P.delegate("#miniCartLogin", "click", function() {
            if (yhdPublicLogin) {
                yhdPublicLogin.showLoginDiv()
            }
        })
    };
    g.initCart = function() {
        if (P.data("cart-num-loaded")) {
            return
        }
        P.data("cart-num-loaded", 1);
        O();
        v()
    };
    g.reloadCart = function() {
        if (P.data("cart-item-loaded")) {
            j(R)
        }
    };
    g.reloadCartItems = function() {
        if (P.data("cart-item-loaded")) {
            j(H)
        }
    };
    g.reloadCartFloat = function() {
        N()
    };
    g.addItem = function(T) {
        u(T)
    };
    g.removeItem = function(T, U, V) {
        I(T, U, V)
    };
    g.updateItem = function(T, U, V) {
        C(T, U, V)
    };
    g.chooseItem = function(T, U, V) {
        z(T, U, V)
    };
    g.changeAddress = function(V) {
        if (!V || V.length != 2) {
            return
        }
        var T = V[0];
        var X = V[1];
        var U = P.find("div.yhd_province div.yhd_address span");
        U.attr("data-value", T.join("_"));
        U.text(X.join("|"));
        var W = P.find("div.yhd_province div.yhd_area_tab span");
        k(W[0]).attr("data-loaded", 0).attr("data-value", T[0]).find("em").text(X[0]);
        k(W[1]).attr("data-loaded", 0).attr("data-value", T[1]).find("em").text(X[1]);
        k(W[2]).attr("data-loaded", 0).attr("data-value", T[2]).find("em").text(X[2]);
        K([T, X]);
        if (G != T[0]) {
            setAddressCity(T[0])
        }
    };
    g.initCart()
})(jQuery);
function addToCart(g, f, b, d, c, a) {
    var e = {};
    e.amount = d;
    e.isFloat = c;
    e.linkPosition = a;
    e.merchantId = b;
    addToCartNew(g, f, e)
}
function addToCartNew(a, c, b) {
    b.productId = c;
    loli.app.minicart.addItem(b)
}
function initAllMiniCart() {
}
function loadMiniCart() {
    loli.app.minicart.reloadCart()
}
function reloadMiniCart() {
    loli.app.minicart.reloadCart()
}
;
(function() {
    var f = window.loli || (window.loli = {});
    var a = window, d = a.document, l, j = "localStorage", g = {};
    g.set = function(e, m) {
    };
    g.get = function(e) {
    };
    g.remove = function(e) {
    };
    g.clear = function() {
    };
    function i() {
        try {
            return(j in a && a[j])
        } catch (e) {
            return false
        }
    }
    if (i()) {
        l = a[j];
        g.set = function(e, m) {
            if (m === undefined) {
                return l.removeItem(e)
            }
            l.setItem(e, m);
            return m
        };
        g.get = function(e) {
            return l.getItem(e)
        };
        g.remove = function(e) {
            l.removeItem(e)
        };
        g.clear = function() {
            l.clear()
        }
    } else {
        if (d.documentElement.addBehavior) {
            var c, k;
            try {
                k = new ActiveXObject("htmlfile");
                k.open();
                k.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>');
                k.close();
                c = k.w.frames[0].document;
                l = c.createElement("div")
            } catch (b) {
                l = d.createElement("div");
                c = d.body
            }
            function h(e) {
                return function() {
                    try {
                        var n = Array.prototype.slice.call(arguments, 0);
                        n.unshift(l);
                        c.appendChild(l);
                        l.addBehavior("#default#userData");
                        l.load(j);
                        var m = e.apply(g, n);
                        c.removeChild(l);
                        return m
                    } catch (o) {
                    }
                }
            }
            g.set = h(function(n, e, m) {
                if (m === undefined) {
                    return g.remove(e)
                }
                n.setAttribute(e, m);
                n.save(j);
                return m
            });
            g.get = h(function(m, e) {
                return m.getAttribute(e)
            });
            g.remove = h(function(m, e) {
                m.removeAttribute(e);
                m.save(j)
            });
            g.clear = h(function(p) {
                var n = p.XMLDocument.documentElement.attributes;
                try {
                    p.load(j)
                } catch (e) {
                }
                for (var o = 0, m; m = n[o]; o++) {
                    p.removeAttribute(m.name)
                }
                p.save(j)
            })
        }
    }
    g.isRoot = function() {
        var e = true;
        var o = document.domain;
        var m = /([^\.]*)\.yhd\.com/;
        if (m.test(o)) {
            var n = m.exec(o)[1];
            if (n != "www") {
                e = false
            }
        }
        return e
    };
    g.isIE = function() {
        var m = window.navigator.userAgent.toLowerCase();
        var n = /msie ([\d\.]+)/;
        if (n.test(m)) {
            var e = parseInt(n.exec(m)[1]);
            return e
        }
        return 0
    };
    g.getDateStr = function() {
        var e = new Date();
        return(e.getYear() + 1900) + "" + (e.getMonth() + 1) + "" + e.getDate()
    };
    g.setFromRoot = function(p, o, s) {
        var q = s || function() {
        };
        if (g.isRoot()) {
            var r = g.set(p, o);
            q({status: 1, key: p, value: r})
        } else {
            if (!window.postMessage || !window.addEventListener) {
                q({status: 0, key: p, value: null});
                return
            }
            var m = "globalLocalStorageAdaptorForSet";
            var t = $("#" + m);
            if (t.size() == 0) {
                var e = document.createElement("iframe");
                e.setAttribute("id", m);
                e.setAttribute("style", "display:none");
                e.setAttribute("src", window.location.protocol + "//www.yhd.com/html/setLocalStorage.html?v=" + g.getDateStr());
                document.body.appendChild(e);
                t = $("#" + m)
            }
            if (t.attr("loaded")) {
                var v = t.get(0).contentWindow;
                var n = window.location.protocol + "//www.yhd.com";
                var u = {key: p, value: o};
                if (g.isIE() == 9) {
                    u = '{"key":"' + p + '", "value":"' + o + '"}'
                }
                v.postMessage(u, n);
                q({status: 1, key: p, value: o})
            } else {
                t.load(function() {
                    $(this).attr("loaded", "1");
                    var y = $(this).get(0).contentWindow;
                    var x = window.location.protocol + "//www.yhd.com";
                    var B = {key: p, value: o};
                    if (g.isIE() == 9) {
                        B = '{"key":"' + p + '", "value":"' + o + '"}'
                    }
                    y.postMessage(B, x);
                    q({status: 1, key: p, value: o})
                })
            }
        }
    };
    g.getFromRoot = function(w, u) {
        var x = u || function() {
        };
        if (g.isRoot()) {
            var e = g.get(w);
            x({status: 1, key: w, value: e})
        } else {
            if (!window.postMessage || !window.addEventListener) {
                x({status: 0, key: w, value: null});
                return
            }
            var s = window["yhd.storage.get.callback"] || (window["yhd.storage.get.callback"] = []);
            s.push(x);
            var q = s.length - 1;
            var o = "globalLocalStorageAdaptorForGet";
            var m = $("#" + o);
            if (m.size() == 0) {
                var p = document.createElement("iframe");
                p.setAttribute("id", o);
                p.setAttribute("style", "display:none");
                p.setAttribute("src", window.location.protocol + "//www.yhd.com/html/getLocalStorage.html?v=" + g.getDateStr());
                document.body.appendChild(p);
                m = $("#" + o)
            }
            if (m.attr("loaded")) {
                var n = m.get(0).contentWindow;
                var t = window.location.protocol + "//www.yhd.com";
                var y = window.location.protocol + "//" + window.location.host;
                var v = {key: w, host: y, version: q};
                if (g.isIE() == 9) {
                    v = '{"key":"' + w + '", "host":"' + y + '", "version":"' + q + '"}'
                }
                n.postMessage(v, t)
            } else {
                m.load(function() {
                    $(this).attr("loaded", "1");
                    var C = $(this).get(0).contentWindow;
                    var A = window.location.protocol + "//www.yhd.com";
                    var B = window.location.protocol + "//" + window.location.host;
                    var z = {key: w, host: B, version: q};
                    if (g.isIE() == 9) {
                        z = '{"key":"' + w + '", "host":"' + B + '", "version":"' + q + '"}'
                    }
                    C.postMessage(z, A)
                })
            }
            var r = function(C) {
                var B = /^http[s]?:\/\/([^\.]*)\.yhd\.com/i;
                if (B.test(C.origin)) {
                    var z = C.data;
                    if (z) {
                        if (typeof z == "string") {
                            z = $.parseJSON(z)
                        }
                        var A = s[z.version];
                        if (A) {
                            A({status: 1, key: z.key, value: z.value})
                        } else {
                            x({status: 1, key: z.key, value: z.value})
                        }
                    }
                }
            };
            if (!window["yhd.storage.get.handler"]) {
                window.addEventListener("message", r);
                window["yhd.storage.get.handler"] = r
            }
        }
    };
    f.yhdStore = g
})();
(function() {
    if ($.fn.bgiframe) {
        return false
    }
    var c = "";
    if (URLPrefix && URLPrefix.statics) {
        c = URLPrefix.statics
    } else {
        if (currSiteId && currSiteId == 2) {
            c = "http://image.111.com.cn/statics"
        } else {
            c = "http://image.yihaodianimg.com/statics"
        }
    }
    var d = document.createElement("script");
    d.setAttribute("type", "text/javascript");
    d.setAttribute("src", c + "/global/js/libs/jquery/jquery.bgiframe.js?" + currVersionNum);
    document.getElementsByTagName("head")[0].appendChild(d)
})();
var yhdLib = window.yhdLib || (window.yhdLib = {});
if (!yhdLib.hasOwnProperty("popwin")) {
    yhdLib.popwin = function(param) {
        var arg = param, tcBox = ".popGeneral", sFun = arg.fun ? arg.fun : [], cTxt = arg.popcontentstr ? arg.popcontentstr : "", popEvent = arg.popevent ? arg.popevent : "click", autoClose = arg.autoclosetime;
        var fixed = typeof (arg.fix) == "undefined" || arg.fix ? true : false;
        var ieLower = /msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1]) <= 6;
        if (arg.clickid) {
            $(arg.clickid).bind(popEvent, function() {
                if ($(".popGeneral").length == 0) {
                    popMask()
                }
            })
        } else {
            if ($(".popGeneral").length == 0) {
                popMask()
            }
        }
        function popMask() {
            var dwidth = "100%", dheight = $(document).height();
            if (ieLower) {
                $("select:visible", ".delivery").each(function(i) {
                    $(this).addClass("selectSjl").hide()
                })
            }
            var popBOX = !fixed ? '<div class="popGeneral" style="position:absolute;" ' : '<div class="popGeneral" ';
            if (arg.poptitle) {
                popBOX += '><div class="top_tcgeneral"><h4>' + arg.poptitle + '</h4><span class="close_tcg">关闭</span></div></div>'
            } else {
                popBOX += "></div>"
            }
            if (arg.mask || arg.mask == null) {
                $('<div class="mask_tcdiv"></div>').appendTo($("body")).css({position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 100001, width: dwidth + "", height: dheight + "px", background: "#000", opacity: 0.4})
            }
            $(popBOX).appendTo($("body"));
            $(".mask_tcdiv").bgiframe();
            loli.scroll(function() {
                $(".mask_tcdiv").height($(document).height())
            });
            if (arg.popwidth) {
                $(".popGeneral").width(arg.popwidth)
            }
            if (arg.popheight) {
                $(".popGeneral").height(arg.popheight)
            }
            var apTxt = cTxt ? $(cTxt) : $(arg.popcontent).clone();
            apTxt.appendTo($(tcBox)).show();
            popPosition();
            for (var funI = sFun.length - 1; funI >= 0; funI--) {
                eval(sFun[funI] + "()")
            }
            return false
        }
        function popPosition() {
            var popwinTop = 0;
            $(window).resize(function() {
                var width = $(tcBox).width(), height = $(tcBox).height() / 2, windWidth = $(window).width(), pLeft = (windWidth - width) / 2;
                $(tcBox).css({left: pLeft, top: "50%", bottom: "auto", marginTop: "-" + height + "px"});
                popwinTop = $(window).height() / 2 - height
            }).trigger("resize");
            if (ieLower && fixed) {
                $(window).scroll(function() {
                    $(tcBox).css({top: popwinTop + $(window).scrollTop() + "px", marginTop: 0})
                }).trigger("scroll")
            }
            $(".close_tcg").click(function() {
                closeTc()
            });
            if (autoClose) {
                setTimeout(function() {
                    closeTc()
                }, autoClose)
            }
            if (arg.outareaclose) {
                $(".mask_tcdiv").click(function() {
                    closeTc()
                })
            }
            $(window).keydown(function(event) {
                if (event.keyCode == 27) {
                    closeTc()
                }
            });
            return false
        }
        function closeTc() {
            $(".popGeneral").remove();
            $(".mask_tcdiv").remove();
            if (ieLower) {
                $("select.selectSjl").each(function() {
                    $(this).removeClass("selectSjl").show()
                })
            }
        }
        return false
    }
}
if (!yhdLib.hasOwnProperty("popclose")) {
    yhdLib.popclose = function() {
        var b = /msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1]) <= 6;
        if (b) {
            $("select.selectSjl").each(function() {
                $(this).removeClass("selectSjl").show()
            })
        }
        $(".popGeneral,.mask_tcdiv").remove()
    }
}
if (!yhdLib.hasOwnProperty("popwinreload")) {
    yhdLib.popwinreload = function() {
        if ($("body > .popGeneral").length) {
            $(window).trigger("resize")
        }
    }
}
if (!yhdLib.hasOwnProperty("ratebox")) {
    yhdLib.ratebox = function(rateboxArgus) {
        var rateArg = rateboxArgus, rateObj = document.getElementById(rateArg.id), rateDg = rateArg.ratedegree;
        if (rateArg.autorate) {
            var rtim = rateArg.ratetime ? rateArg.ratetime : 15, step = rateArg.step ? rateArg.step : 20;
            if (rateDg >= 0) {
                setInterval(function() {
                    rate(rateObj, (rateDg += step) >= 360 ? rateDg = 0 : rateDg);
                    return false
                }, rtim)
            } else {
                if (rateDg < 0) {
                    setInterval(function() {
                        rate(rateObj, (rateDg -= step) <= 0 ? rateDg = 360 : rateDg);
                        return false
                    }, rtim)
                }
            }
        } else {
            rate(rateObj, rateDg)
        }
        function rate(obj, degree) {
            var ST = obj.style;
            if (document.all) {
                var deg = degree * Math.PI / 180, M11 = Math.cos(deg), M12 = -Math.sin(deg), M21 = Math.sin(deg), M22 = Math.cos(deg);
                obj.fw = obj.fw || obj.offsetWidth / 2;
                obj.fh = obj.fh || obj.offsetHeight / 2;
                var adr = (90 - degree % 90) * Math.PI / 180, adp = Math.sin(adr) + Math.cos(adr);
                with (ST) {
                    filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + M11 + ",M12=" + M12 + ",M21=" + M21 + ",M22=" + M22 + ",SizingMethod='auto expand');";
                    top = obj.fh * (1 - adp) + "px";
                    left = obj.fw * (1 - adp) + "px"
                }
            } else {
                var rotate = "rotate(" + degree + "deg)";
                with (ST) {
                    MozTransform = rotate;
                    WebkitTransform = rotate;
                    OTransform = rotate;
                    Transform = rotate
                }
            }
            return false
        }
        return false
    }
}
jQuery.yhdtool = yhdLib;
(function(a) {
    a(function() {
        var c = function() {
            var d = (typeof hideGlobalCookieCheckMsgFlag != "undefined" && hideGlobalCookieCheckMsgFlag == "1") ? 1 : 0;
            if (d) {
                return
            }
            var f = "提示消息";
            var e = [];
            e.push("<div>");
            e.push("<style>");
            e.push(".no_cookie {height:150px;width:500px;text-align:center;padding:20px;font-size:20px;}");
            e.push(".no_cookie a:link,.no_cookie a:visited {color:blue; text-decoration: none;}");
            e.push(".no_cookie a:hover,.no_cookie a:active {color:blue; text-decoration: underline;}");
            e.push("</style>");
            e.push("<div class='no_cookie'>由于您使用的浏览器设置问题可能导致网页运行不正常。请您启用浏览器Cookie功能或更换浏览器。<br/><a href='http://cms.yhd.com/cms/view.do?topicId=24243' target='_blank'>如何启用Cookie？</a></div>");
            e.push("</div>");
            yhdLib.popwin({poptitle: f, popcontentstr: e.join("")})
        };
        if (!window.navigator.cookieEnabled) {
            c()
        } else {
            jQuery.cookie("test_cookie", "1");
            if (jQuery.cookie("test_cookie")) {
                var b = new Date();
                b.setTime(b.getTime() - 10000);
                document.cookie = "test_cookie=;path=;domain=;expires=" + b.toGMTString()
            } else {
                c()
            }
        }
    })
})(jQuery);
var YHDPROVINCE = {};
YHDPROVINCE.getCurentDomain = function() {
    return URLPrefix.central
};
YHDPROVINCE.getOppositeDomain = function() {
    return URLPrefix.central
};
YHDPROVINCE.proviceObj = {p_1: "上海", p_2: "北京", p_3: "天津", p_4: "河北", p_5: "江苏", p_6: "浙江", p_7: "重庆", p_8: "内蒙古", p_9: "辽宁", p_10: "吉林", p_11: "黑龙江", p_12: "四川", p_13: "安徽", p_14: "福建", p_15: "江西", p_16: "山东", p_17: "河南", p_18: "湖北", p_19: "湖南", p_20: "广东", p_21: "广西", p_22: "海南", p_23: "贵州", p_24: "云南", p_25: "西藏", p_26: "陕西", p_27: "甘肃", p_28: "青海", p_29: "新疆", p_30: "宁夏", p_32: "山西"};
YHDPROVINCE.swithAddressCity = function(c, d) {
    provinceSwitchProvince(c, oldProvinceId, paramObj)
};
function setAddressCity(e, g) {
    var h = jQuery.cookie("provinceId");
    var f = {};
    if (g) {
        f.targetUrl = g
    }
    jQuery.cookie("provinceId", e, {domain: no3wUrl, path: "/", expires: 800});
    glaCookieHandler.genGlaCookie({provinceId: e});
    provinceSwitchProvince(e, h, f)
}
function provinceSwitchProvince(d, f, e) {
    moveCartItem(d, f, e)
}
function setAddressCityback(P) {
    var O = null;
    if (P && P.targetUrl) {
        O = P.targetUrl;
        window.location.href = O;
        return
    }
    var Q = window.location.href;
    if (Q.indexOf("merchantID=") != -1) {
        Q = Q.substring(0, Q.indexOf("merchantID=") - 1);
        window.location.href = Q;
        return
    }
    if (Q.indexOf("merchant=") != -1) {
        Q = Q.substring(0, Q.indexOf("merchant=") - 1);
        window.location.href = Q;
        return
    }
    if (Q.indexOf("/tuangou/") != -1) {
        if (Q.indexOf("/tuangou/myGroupon.do") != -1) {
            window.location.href = Q
        }
        return
    }
    if (Q.indexOf("openProvincePage=") != -1) {
        Q = Q.substring(0, Q.indexOf("openProvincePage=") - 1);
        window.location.href = Q;
        return
    }
    if (Q.indexOf("/cart/cart.do?action=view") != -1) {
        window.location.href = "/cart/cart.do?action=view";
        return
    }
    var L = /^\S*product\/\d+_?\d+/;
    if (Q.match(L)) {
        if (Q.indexOf("_") != -1) {
            Q = Q.substring(0, Q.indexOf("_"))
        } else {
            if (Q.indexOf("#") != -1) {
                var J = Q.indexOf("#");
                Q = Q.substring(0, J)
            }
        }
        window.location.href = Q;
        return
    }
    var K = /^(http:\/\/){0,1}([^\/]+\/)[0-9]+\/([^\/]*)$/;
    if (Q.match(K)) {
        Q = Q.replace(K, "$1$2$3");
        var H = jQuery.cookie("provinceId");
        var A = jQuery("#p_" + H);
        loli.spm.refreshPage(Q, A);
        return
    }
    var x = /^(http:\/\/){0,1}([^\/]+\/)([^\/]*)$/;
    if (Q.match(x)) {
        var H = jQuery.cookie("provinceId");
        var A = jQuery("#p_" + H);
        loli.spm.refreshPage(Q, A);
        return
    }
    var B = /^(http:\/\/){0,1}[^\/]+\/channel\/[0-9]+_[0-9]+\/$/;
    if (Q.match(B)) {
        Q = Q.substring(0, Q.lastIndexOf("_"));
        window.location.href = Q;
        return
    }
    var R = /^(http:\/\/){0,1}[^\/]+\/cms\/view.do\?topicId=[0-9]+&merchant=[0-9]+$/;
    if (Q.match(R)) {
        Q = Q.substring(0, Q.lastIndexOf("&merchant"));
        var H = jQuery.cookie("provinceId");
        var A = jQuery("#p_" + H);
        loli.spm.refreshPage(Q, A);
        return
    }
    var C = /^(http:\/\/){0,1}[^\/]+\/brand\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (Q.match(C)) {
        window.location.href = Q;
        return
    }
    var N = /^(http:\/\/){0,1}[^\/]+\/try\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (Q.match(N)) {
        if (Q.lastIndexOf("/") == Q.length - 1) {
            Q = Q.substring(0, Q.lastIndexOf("/"))
        }
        Q = Q.substring(0, Q.lastIndexOf("/"));
        window.location.href = Q;
        return
    }
    var F = /^(http:\/\/){0,1}[^\/]+\/try\/[0-9]+_[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (Q.match(F)) {
        Q = Q.substring(0, Q.lastIndexOf("_")) + "_0/";
        window.location.href = Q;
        return
    }
    var d = /^(http:\/\/){0,1}[^\/]+\/S-theme\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (Q.match(d)) {
        window.location.href = Q;
        return
    }
    var D = /^(http:\/\/){0,1}[^\/]+\/s2\/c([0-9]*)-([^?^\/]*)\/([0-9]*)\/$/;
    var G = /^(http:\/\/){0,1}[^\/]+\/c([0-9]*)-([^?^\/]*)\/([0-9]*)\/$/;
    if (Q.match(D) || Q.match(G)) {
        if (Q.lastIndexOf("/") == Q.length - 1) {
            Q = Q.substring(0, Q.lastIndexOf("/"))
        }
        Q = Q.substring(0, Q.lastIndexOf("/") + 1);
        var H = jQuery.cookie("provinceId");
        var A = jQuery("#p_" + H);
        loli.spm.refreshPage(Q, A);
        return
    }
    var y = /^(http:\/\/){0,1}search.[^\/]+\/c([0-9]*)-([^?^\/]*)\/k([^?^\/]*)\/([0-9]*)\/$/;
    if (Q.match(y)) {
        if (Q.lastIndexOf("/") == Q.length - 1) {
            Q = Q.substring(0, Q.lastIndexOf("/"))
        }
        Q = Q.substring(0, Q.lastIndexOf("/") + 1);
        var H = jQuery.cookie("provinceId");
        var A = jQuery("#p_" + H);
        loli.spm.refreshPage(Q, A);
        return
    }
    var z = /^(http:\/\/){0,1}channel\.[^\/]+\/[^\/^_^\.]+(\/[^\/^\.]+){0,1}\/[0-9]+\/{0,1}(\?[^\/]+){0,1}(#[^\/]+)*$/;
    if (Q.match(z)) {
        if (Q.indexOf("#") != -1) {
            Q = Q.substring(0, Q.indexOf("#"))
        }
        if (Q.indexOf("?") != -1) {
            var M = Q.substring(Q.indexOf("?"));
            var I = Q.substring(0, Q.indexOf("?"));
            if (Q.lastIndexOf("/") == Q.length - 1) {
                I = I.substring(0, I.lastIndexOf("/"));
                M = "/" + M
            }
            I = I.substring(0, I.lastIndexOf("/"));
            Q = I + M
        } else {
            if (Q.lastIndexOf("/") == Q.length - 1) {
                Q = Q.substring(0, Q.lastIndexOf("/"))
            }
            Q = Q.substring(0, Q.lastIndexOf("/"))
        }
        window.location.href = Q;
        return
    }
    if (Q.indexOf("confirmOrder") != -1 && Q.indexOf("saveOrder") != -1) {
        window.location.href = YHDPROVINCE.getCurentDomain();
        return
    }
    var E = URLPrefix.search + "/s/";
    if (Q.substr(0, E.length) == E) {
        var L = /-p\d{0,3}/;
        if (Q.match(L)) {
            Q = Q.replace(L, "-p1");
            var H = jQuery.cookie("provinceId");
            var A = jQuery("#p_" + H);
            loli.spm.refreshPage(Q, A);
            return
        }
    }
    loli.spm.reloadPage(jQuery("#currProvince"))
}
function moveCartItem(k, o, p) {
    var l = 1;
    var i = {};
    var n = {};
    var j = [];
    if (typeof p != "undefined" && p) {
        if (typeof p.isSetAddress != "undefined" && p.isSetAddress) {
            if (p.isSetAddress == 0) {
                l = p.isSetAddress
            }
        }
        if (typeof p.callback != "undefined" && p.callback) {
            i = p.callback;
            if (typeof i.func != "undefined" && i.func) {
                n = i.func
            }
            if (typeof i.args != "undefined" && i.func) {
                j = i.args
            }
        }
    }
    var m = URLPrefix.cartDomain || "http://cart.yhd.com";
    jQuery.getJSON(m + "/cart/opt/switchProvince.do?provinceId=" + k + ((o) ? "&oldProvinceId=" + o : "") + "&timestamp=" + new Date().getTime() + "&callback=?", function(a) {
        if (typeof l != "undefined" && l != 0) {
            setAddressCityback(p)
        }
        if (typeof n != "undefined" && typeof n == "function") {
            n.apply(this, j)
        }
    })
}
function initProvince() {
    var g = jQuery.cookie("provinceId");
    if (g && g > 0) {
        jQuery("#currProvince").text(YHDPROVINCE.proviceObj["p_" + g]).show();
        var e = jQuery("#weibo");
        if (g == 2) {
            e.attr("href", "http://weibo.com/yihaodianbeijing")
        } else {
            if (g == 20) {
                e.attr("href", "http://weibo.com/yihaodianguangzhou")
            } else {
                e.attr("href", "http://weibo.com/yihaodian")
            }
        }
        if (!glaCookieHandler.check2ProvinceIsSame()) {
            glaCookieHandler.genGlaCookie({provinceId: g})
        }
    } else {
        var h = (typeof hideGlobalCookieCheckMsgFlag != "undefined" && hideGlobalCookieCheckMsgFlag == "1") ? 1 : 0;
        if (h) {
            return
        }
        var f = (typeof globalShowProWin != "undefined" && globalShowProWin == "1") ? 1 : 0;
        if (f) {
            return
        }
        if (jQuery("#p_1")[0]) {
            showProvinces()
        } else {
            showProvincesV2()
        }
    }
}
function closeProvinces(d) {
    if (d <= 0) {
        d = 1
    }
    var c = jQuery("#currProvince").text();
    if (c == "") {
        setAddressCity(d)
    } else {
        jQuery("#allProvinces").hide()
    }
}
function showProvinces() {
    var d = YHDPROVINCE.getCurentDomain();
    var c = d + "/header/selectProvincebox.do?timestamp=" + new Date().getTime() + "&callback=?";
//    jQuery.getJSON(c, function(a) {
//        if (a && !a.ERROR && a.value) {
//            jQuery("#provinceboxDiv").html(a.value);
//            jQuery("#allProvinces").jqm({overlay: 50, closeClass: "jqmClose", trigger: ".jqModal", overlayClass: "pop_win_bg", modal: true, toTop: true}).jqmShow().jqmAddClose(".popwinClose")
//        }
//        jQuery.getJSON(d + "/header/cartIsEmpty.do?callback=?", function(f) {
//            if ("no" == f.value) {
//                jQuery("#provincesPoptips").show()
//            } else {
//                jQuery("#provincesPoptips").hide()
//            }
//        });
//        if (jQuery("#allProvinces")) {
//            var b = jQuery("#allProvinces").find("#currentProvinceName");
//            if (b) {
//                YHDPROVINCE.getProvinceName(b.attr("proviceId"))
//            }
//        }
//    })
}
function showProvincesV2() {
    if (jQuery.cookie("provinceId")) {
        YHDPROVINCE.headerSelectProvince();
        return
    }
    var d = YHDPROVINCE.getCurentDomain();
    var c = d + "/header/selectProvinceboxV2.do?timestamp=" + new Date().getTime() + "&callback=?";
    jQuery.getJSON(c, function(a) {
        if (a && !a.ERROR) {
            YHDPROVINCE.processProvince(a)
        }
    })
}
YHDPROVINCE.processProvince = function(b) {
    if (!jQuery.cookie("provinceId")) {
        YHDPROVINCE.chooseProvincePop(b)
    }
};
YHDPROVINCE.getProvinceName = function(b) {
    jQuery("#currentProvinceName").html("<strong>" + jQuery("#p_" + b).text() + "站</strong> >>")
};
YHDPROVINCE.yhdCommonProvinceInfo = function(c, d) {
    d.push('<li>A<a id="p_13" isTrkCustom="1" href="javascript:void(0);">安徽</a></li>');
    d.push('<li>B<a id="p_2" isTrkCustom="1" href="javascript:void(0);">北京</a></li>');
    d.push('<li>C<a id="p_7" isTrkCustom="1" href="javascript:void(0);">重庆</a></li>');
    d.push('<li>G<a id="p_20" isTrkCustom="1" href="javascript:void(0);">广东</a><a id="p_21" isTrkCustom="1" href="javascript:void(0);">广西</a><a isTrkCustom="1" id="p_23" href="javascript:void(0);">贵州</a><a id="p_27" isTrkCustom="1" href="javascript:void(0);">甘肃</a></li>');
    d.push('<li>F<a id="p_14" isTrkCustom="1" href="javascript:void(0);">福建</a></li>');
    d.push('<li>H<a id="p_4" isTrkCustom="1" href="javascript:void(0);">河北</a><a id="p_11" isTrkCustom="1" href="javascript:void(0);">黑龙江</a><a id="p_22" isTrkCustom="1" href="javascript:void(0);">海南</a><a id="p_18" isTrkCustom="1" href="javascript:void(0);">湖北</a><a id="p_19" isTrkCustom="1" href="javascript:void(0);">湖南</a><a id="p_17" isTrkCustom="1" href="javascript:void(0);">河南</a></li>');
    d.push('<li>J<a id="p_5" isTrkCustom="1" href="javascript:void(0);">江苏</a><a id="p_10"  isTrkCustom="1" href="javascript:void(0);">吉林</a><a id="p_15" isTrkCustom="1" href="javascript:void(0);">江西</a></li>');
    d.push('<li>L<a id="p_9" isTrkCustom="1" href="javascript:void(0);">辽宁</a></li>');
    d.push('<li>N<a id="p_8" isTrkCustom="1" href="javascript:void(0);">内蒙古</a><a id="p_30" isTrkCustom="1" href="javascript:void(0);">宁夏</a></li>');
    d.push('<li>Q<a id="p_28" isTrkCustom="1" href="javascript:void(0);">青海</a></li>');
    d.push('<li>S<a id="p_1" isTrkCustom="1" href="javascript:void(0);">上海</a><a id="p_16" isTrkCustom="1" href="javascript:void(0);">山东</a><a id="p_32" isTrkCustom="1" href="javascript:void(0);">山西</a><a id="p_12" isTrkCustom="1" href="javascript:void(0);">四川</a><a id="p_26" isTrkCustom="1"  href="javascript:void(0);">陕西</a></li>');
    d.push('<li>T<a id="p_3" isTrkCustom="1" href="javascript:void(0);">天津</a></li>');
    d.push('<li>X<a id="p_25" isTrkCustom="1" href="javascript:void(0);">西藏</a><a id="p_29" isTrkCustom="1" href="javascript:void(0);">新疆</a></li>');
    d.push('<li>Y<a id="p_24" isTrkCustom="1" href="javascript:void(0);">云南</a></li>');
    d.push('<li>Z<a id="p_6" isTrkCustom="1" href="javascript:void(0);">浙江</a></li>')
};
YHDPROVINCE.headerSelectProvince = function() {
    var d = $("#headerAllProvince"), e = $("#currProvince");
    if ($.trim(d.html()).length == 0) {
        YHDPROVINCE.yhdExistsProvinceInfo(d)
    }
    d.toggle();
    e.toggleClass("fold");
    $("#headerAllPvcClose").click(function() {
        f()
    });
    d.find("a").click(function() {
        f();
        e.text($(this).text());
        var a = $(this).attr("id").split("_")[1];
        setAddressCity(a);
        return false
    });
    function f() {
        e.removeClass("fold");
        d.hide()
    }}
;
YHDPROVINCE.yhdExistsProvinceInfo = function(c) {
    var d = [];
    d.push('<li><h4><i id="headerAllPvcClose"></i>请根据您的收货地址选择</h4></li>');
    YHDPROVINCE.yhdCommonProvinceInfo(null, d);
    c.html(d.join(""))
};
YHDPROVINCE.yhdExistProvinceHoverEvent = function() {
    if (jQuery("#headerSelectProvince")[0] && currSiteId == 1) {
        var b;
        jQuery("#headerSelectProvince").hover(function() {
            b = setTimeout(function() {
                showProvincesV2();
                jQuery("#currProvince").addClass("hd_fold");
                $("#headerSelectProvince").css("z-index", "1211")
            }, 200)
        }, function() {
            if (b) {
                clearTimeout(b)
            }
            var d = jQuery("#headerAllProvince"), a = jQuery("#currProvince");
            a.removeClass("fold");
            a.removeClass("hd_fold");
            d.hide();
            $("#headerSelectProvince").css("z-index", "1201")
        })
    }
};
YHDPROVINCE.yhdNoExistsProvinceInfo = function(c) {
    var d = [];
    d.push('<div class="province_box" id="provinceBox">');
    d.push('<div class="province_title">');
    d.push("<h4>欢迎来到1号店</h4>");
    d.push("<p>目前我们提供31个地区的配送服务,请根据您的收货地址选择站点。</p>");
    d.push("</div>");
    d.push('<div class="province_select">');
    d.push('<div class="province_input">');
    d.push('<div class="province_input_con">');
    d.push('<span id="selectProvince" class="notsure">请选择</span>');
    d.push('<ul id="allProvinceSelect" class="provinceList">');
    YHDPROVINCE.yhdCommonProvinceInfo(c, d);
    d.push("</ul>");
    d.push("送货至");
    d.push("</div>");
    d.push("您的商品将会：");
    d.push("</div>");
    d.push('<p><button id="startShopping" class="disabled">开始购物<span></span></button></p>');
    d.push("</div>");
    d.push("</div>");
    yhdLib.popwin({fix: true, popcontentstr: d.join(""), fun: ["globalChangeTop"]})
};
function globalChangeTop() {
    $(".popGeneral .notsure").click(function() {
        $(".popGeneral .provinceList").show();
        var i = $(window).height(), l = $(".popGeneral .province_box").height() + $(".popGeneral .provinceList").height() - 115, k = i - l, g = $(".popGeneral").offset().top;
        if (g > k) {
            if (l > i) {
                $(".popGeneral").stop().animate({"margin-top": -i / 2}, 300)
            } else {
                var j = parseInt($(".popGeneral").css("margin-top")), h = g - k;
                $(".popGeneral").stop().animate({"margin-top": j - h}, 300)
            }
        }
    })
}
YHDPROVINCE.chooseProvincePop = function(q) {
    $.cookie("search_keyword_history", "", {domain: ".yhd.com", path: "/"});
    YHDPROVINCE.yhdNoExistsProvinceInfo(q);
    var l = q.ipProvinceId ? q.ipProvinceId : "1";
    var p = q.ipProvinceIdStr ? q.ipProvinceIdStr : "上海";
    var m = -1;
    var k = false, o = $("#provinceboxDiv"), r = $("#selectProvince"), n = $("#allProvinceSelect"), t = $("#startShopping");
    function s(a, b) {
        m = a;
        r.removeClass("notsure fold").html(b);
        $("#currProvince").html(b).show();
        n.hide();
        t.removeClass("disabled")
    }
    if (l && p) {
        k = true;
        s(l, p)
    }
    if (!k) {
        r.addClass("notsure");
        t.addClass("disabled")
    }
    r.click(function() {
        var a = $(this);
        if (!a.hasClass("fold")) {
            a.addClass("notsure fold");
            n.show();
            return false
        }
    });
    n.click(function() {
        return false
    });
    n.find("a").click(function() {
        k = true;
        s($(this).attr("id").split("_")[1], $(this).text())
    });
    $("#provinceBox").click(function() {
        if (r.hasClass("fold")) {
            n.hide();
            r.removeClass("fold");
            if (k) {
                r.removeClass("notsure")
            }
        }
    });
    t.click(function() {
        if ($(this).hasClass("disabled")) {
            return
        }
        o.hide();
        if (m != -1) {
            setAddressCity(m)
        }
    })
};
jQuery(document).ready(function() {
    if (isIndex != 1) {
        initProvince()
    }
    YHDPROVINCE.yhdExistProvinceHoverEvent()
});
jQuery(document).ready(function() {
    if (isIndex != 1) {
    }
});
function initPrompt() {
    jQuery("#changeReceiverGoodsCity").click(function() {
        var b = jQuery("#buyPromptDiv");
        var c = parseInt(b.css("top").replace("px", "")) + 75;
        var a = parseInt(b.css("left").replace("px", "")) + 225;
        jQuery("#receiverGoodsCityDiv").css("top", c + "px");
        jQuery("#receiverGoodsCityDiv").css("left", a + "px");
        jQuery(window).scroll(function() {
            var e = parseInt(b.css("top").replace("px", "")) + 75;
            var d = parseInt(b.css("left").replace("px", "")) + 225;
            jQuery("#receiverGoodsCityDiv").css("top", e + "px");
            jQuery("#receiverGoodsCityDiv").css("left", d + "px")
        });
        jQuery("#receiverGoodsCityDiv").show()
    });
    jQuery("#closeReceiverGoodsCity").click(function() {
        jQuery("#receiverGoodsCityDiv").hide()
    });
    jQuery("#validate").click(function() {
        jQuery("#buyPromptDiv").hide();
        setPromptCookie();
        jQuery("#receiverGoodsCityDiv").hide()
    })
}
function changeReceiverGoodsCity(id) {
    jQuery("#selectCity").val(id);
    if (jQuery("#p_" + id)) {
        var city = jQuery("#p_" + id).find("a").text()
    }
    jQuery("#selectCity").text(city);
    jQuery("#cityId").attr("value", id);
    jQuery("#message").text("");
    jQuery("#receiverGoodsCityDiv").hide();
    var productId = jQuery("#validateProductId").val();
    var num = typeof (jQuery("#validateQty").val()) == "undefined" ? 1 : jQuery("#validateQty").val();
    var param = "productID=" + productId + "&productNum=" + num + "&provinceId=" + id;
    var url = URLPrefix.central + "/product/validateProductInProvince.do?productID=" + productId + "&productNum=" + num + "&provinceId=" + id + "&callback=?";
    jQuery.getJSON(url, function(data) {
        if (data.ERROR) {
        } else {
            try {
                html = eval("(" + data.value + ")")
            } catch (e) {
                jQuery("#message").text("系统出错")
            }
            if (html.result == "success") {
                var provinceId = jQuery.cookie("provinceId");
                if (id != provinceId) {
                    jQuery("#validate").unbind("click");
                    jQuery("#validate").bind("click", function() {
                        setPromptCookie();
                        setAddressCity(id)
                    })
                } else {
                }
            } else {
                var value = html["key_" + productId];
                if (value) {
                    jQuery("#message").text(value)
                }
                jQuery("#validate").bind("click", function() {
                    jQuery("#buyPromptDiv").hide()
                })
            }
        }
    })
}
function setPromptCookie() {
    var b;
    if (typeof (promptExpireTime) == "undefined" && !jQuery("#promptExpireTime")) {
        b = 10
    } else {
        b = jQuery("#promptExpireTime").val()
    }
    b = b ? b : 10;
    var a = new Date();
    var c = a.getTime() + b * 24 * 1000 * 3600;
    a.setTime(c);
    document.cookie = "prompt_flag=1;path=/;domain=." + no3wUrl + ";expires=" + a.toGMTString()
}
;
var _indexUrl = URLPrefix.central;
var _my = URLPrefix.my;
function executiveLandedCheck() {
}
function submitFavorite(a, b) {
}
function showFavoriteResult(a) {
}
function submitpTag(a, c, b) {
}
function showEditFavoriteResult(a) {
}
;
var myProductId = "";
var myMerchantId = "";
var myOrderId = "";
function appearExperience(c, d, a) {
    var e = jQuery.cookie("ut");
    if (!e) {
        window.location.href = "/passport/login_input.do?returnUrl=" + window.location.href;
        return
    } else {
        executiveLandedCheck();
        myProductId = c;
        myOrderId = a;
        if (d != null) {
            myMerchantId = d
        }
        var b = URLPrefix.central + "/product/checkItemCount.do?productID=" + c + "&callback=?";
        jQuery.getJSON(b, function(f) {
            if (f.ERROR) {
            } else {
                apperarSuccess(f, c)
            }
        })
    }
}
function apperarSuccess(e, d) {
    if (e.value == -1) {
        YHD.alert("您已经发表过商品评论，不能再次发表.", null, 476, 27);
        return
    }
    if (e.value == 0) {
        var b = jQuery("#ex_prompt");
        YHD.popwin(b.html(), 466, 283);
        return
    }
    var c = URLPrefix.my + "/member/exp/showProductExcerienceDiv.do?productId=" + d + "&callback=?";
    jQuery.getJSON(c, function(a) {
        if (a.ERROR) {
        } else {
            if ((navigator.userAgent.indexOf("MSIE") >= 0) && (navigator.userAgent.indexOf("Opera") < 0)) {
                YHD.popwin(a.value, 460, 415)
            } else {
                YHD.popwin(a.value, 460, 439)
            }
            jQuery(".popbox").bgiframe();
            new Stars("stars1");
            jQuery("[name=experience.submit]").click(function() {
                deployExperience(myProductId, myMerchantId)
            })
        }
    })
}
function deployExperience(h, c) {
    var d = /<[^> ]+>/;
    var k = URLPrefix.central + "/product/deployExperience.do?productID=" + shareProductId + "&merchantID=" + shareMerchantId + "&action=create";
    var f = jQuery("#contentTitle").val();
    if (f && "" != jQuery.trim(f)) {
        f = f.replace(/(^\s*)|(\s*$)/g, "");
        if (f.length > 15) {
            showErrorTitle("errorTitle", "请将您输入的标题字数超出15个字的字数限制!");
            return
        }
        if (d.exec(f)) {
            showErrorTitle("errorTitle", "您输入的格式有误!");
            return
        }
    } else {
        showErrorTitle("errorTitle", "请您填写评论的标题!");
        this.focus();
        return
    }
    k = k + "&title=" + encodeURIComponent(encodeURIComponent(f));
    var j = true;
    jQuery(".ipt3").each(function(o) {
        var m = jQuery(this).attr("nullTitile");
        var n = jQuery(this).attr("categoryTitile");
        var l = jQuery(this).attr("experienceTitle");
        var p = jQuery(this).val().replace(/(^\s*)|(\s*$)/g, "");
        if (p == "") {
            showErrorTitle(m, "请写写这个商品的" + m + "!");
            this.focus();
            j = false;
            return false
        }
        if (p.length > 200) {
            showErrorTitle(m, "请将您输入的" + m + "字数超出200个字的字数限制!");
            j = false;
            return false
        }
        if (d.exec(p)) {
            showErrorTitle(m, m + "您输入的格式有误!");
            j = false;
            return false
        }
        k = k + "&" + n + "=" + encodeURIComponent(encodeURIComponent(p)) + "&" + l + "=" + encodeURIComponent(encodeURIComponent(m))
    });
    if (j) {
        var a = jQuery("#stars1-input");
        var g = "5";
        if (a.val() != "" && a.val() != null) {
            g = a.val()
        }
        var e = "5";
        var i = "5";
        var b = jQuery("#u_realName").text();
        if (b && "" != jQuery.trim(b)) {
            b = b.replace(/(^\s*)|(\s*$)/g, "")
        } else {
            b = jQuery("#userRealName").val();
            if (b && "" != jQuery.trim(b)) {
                b = b.replace(/(^\s*)|(\s*$)/g, "")
            } else {
                showErrorTitle("realNameError", "请填写您的昵称！");
                return
            }
        }
        jQuery("[name=experience.submit]").css("disabled", true);
        k = k + "&qualityRating=" + g + "&deliveryRating=" + e + "&serviceRating=" + i + "&userRealName=" + encodeURIComponent(encodeURIComponent(b)) + "&callback=?";
        jQuery.getJSON(k, function(l) {
            if (l.ERROR) {
            } else {
                showShareDeployPage(l)
            }
        });
        return true
    } else {
        return false
    }
}
function showDeployPage(d) {
    var a = d.value.split("=");
    var c = a[0];
    var b = a[1];
    if (c == 1) {
        jQuery(".popwinClose").click();
        YHD.alert(b, null, 476, 27)
    } else {
        YHD.alert(b, null, 476, 27)
    }
    if (jQuery.trim(jQuery("#categoryAllProducts").html()) != "") {
        loadExpInfo(1)
    }
}
;
var shareProductId = "";
var shareMerchantId = "";
var shareOrderId = "";
var shareContentgood = "";
var shareImage_url = "";
var productname = "";
var urlPrefix = URLPrefix.central;
var urlPrefixComment = URLPrefix.my;
function apperarShareSuccess(e, d) {
    if (e.value == -1) {
        yhdPublicLogin.showLoginDivNone(URLPrefix.passport, false, "", function(a) {
            if (a == 0) {
                yhdPublicLogin.showTopLoginInfo()
            }
        });
        return
    }
    if (e.value == 0) {
        var b = jQuery("#ex_prompt");
        YHD.popwin(b.html(), 466, 283);
        return
    }
    var c = urlPrefixComment + "/member/exp/showProductExcerienceDiv.do?productId=" + d + "&merchantId=" + shareMerchantId + "&soId=" + shareOrderId + "&callback=?";
    jQuery.getJSON(c, function(f) {
        if (f.value == null || f.value == "" || f.ERROR) {
        } else {
            YHD.popwin(f.value);
            YHD.popwin(f.value, jQuery(".popbox").width(), jQuery(".popbox").height());
            jQuery(".popbox").bgiframe();
            new Stars("stars1");
            var a = jQuery("#experience_info").attr("soid");
            if (jQuery("#stars_desc").size() > 0 && jQuery("#stars_atti").size() > 0 && jQuery("#stars_logi").size() > 0) {
                new Stars("stars_desc");
                new Stars("stars_atti");
                new Stars("stars_logi")
            }
            shareMerchantId = jQuery("#experience_info").attr("merchantid");
            jQuery("[name=experience.submit]").click(function() {
                shareMerchantId = jQuery("#experience_info").attr("merchantid");
                deployShareExperience(shareProductId, shareMerchantId, a)
            })
        }
    })
}
function deployShareExperience(m, e, f, j) {
    shareProductId = m;
    shareMerchantId = e;
    var g = /<[^> ]+>/;
    var c = urlPrefix + "/product/deployExperience.do?productID=" + m + "&merchantID=" + e + "&action=create&soId=" + f;
    var k = jQuery("#contentTitle").val();
    if (k && "" != jQuery.trim(k)) {
        k = k.replace(/(^\s*)|(\s*$)/g, "");
        if (k.length > 15) {
            jQuery("span[id='titleDesc']").html("<em class='r'>*超出15个字的字数限制</em>");
            return
        }
        if (k.length < 5) {
            jQuery("span[id='titleDesc']").html("<em class='r'>*内容不少于5个字</em>");
            return
        }
        if (g.exec(k)) {
            jQuery("span[id='titleDesc']").html("<em class='r'>*请填写评论标题(5-15个字)</em>");
            return
        }
    } else {
        jQuery("span[id='titleDesc']").html("<em class='r'>*请填写评论标题(5-15个字)</em>");
        return
    }
    jQuery("span[id='titleDesc']").html("<em class='r'>*</em>请填写评论标题(5-15个字)");
    c = c + "&title=" + encodeURIComponent(encodeURIComponent(k));
    var b = true;
    var i = "#yhd_pop_win .ipt3,#yhd_pop_win .ipt6";
    if (j && j == "publishExperience") {
        i = "#publishExperience .ipt3,#publishExperience .ipt6"
    }
    jQuery(i).each(function(r) {
        var p = jQuery(this).attr("nullTitile");
        var q = jQuery(this).attr("categoryTitile");
        var o = jQuery(this).attr("experienceTitle");
        var n = jQuery(this).val().replace(/(^\s*)|(\s*$)/g, "");
        if (n == "") {
            if (q == "contentGood") {
                jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*请填写评论内容(5-200字)</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "contentFail") {
                jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*请填写评论内容(5-200字)</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "content") {
                jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*请填写评论内容(5-200字)</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)")
        }
        if (n.length > 200) {
            if (q == "contentGood") {
                jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*超出200个字的字数限制</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "contentFail") {
                jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*超出200个字的字数限制</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "content") {
                jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*超出200个字的字数限制</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)")
        }
        if (n.length < 5) {
            if (q == "contentGood") {
                jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*内容不少于5个字</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "contentFail") {
                jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*内容不少于5个字</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "content") {
                jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*内容不少于5个字</em>");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)")
        }
        if (g.exec(n)) {
            if (q == "contentGood") {
                jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*</em>请填写评论内容(5-200个字)");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle1Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "contentFail") {
                jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*</em>请填写评论内容(5-200个字)");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle2Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)");
            if (q == "content") {
                jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*</em>请填写评论内容(5-200个字)");
                b = false;
                return false
            }
            jQuery("span[id='contentTitle3Desc']").html("<em class='r'>*</em>请填写评论内容(5-200字)")
        }
        c = c + "&" + q + "=" + encodeURIComponent(encodeURIComponent(n)) + "&" + o + "=" + encodeURIComponent(encodeURIComponent(p))
    });
    if (b) {
        var l = getStartvalue("#stars1-input");
        var h = 5;
        var a = 5;
        var d = 5;
        if (jQuery("#stars_logi-input").size() > 0 && jQuery("#stars_atti-input").size() > 0 && jQuery("#stars_desc-input").size() > 0) {
            h = getStartvalue("#stars_logi-input");
            a = getStartvalue("#stars_atti-input");
            d = getStartvalue("#stars_desc-input")
        }
        jQuery("[name=experience.submit]").css("disabled", true);
        c = c + "&qualityRating=" + l + "&deliveryRating=5&serviceRating=5&mdeliveryPoint=" + h + "&mservicePoint=" + a + "&mdescriptPoint=" + d + "&callback=?";
        jQuery(".evaBtn").attr("disabled", "disabled");
        jQuery.getJSON(c, function(n) {
            jQuery(".evaBtn").removeAttr("disabled");
            if (n.ERROR) {
            } else {
                jQuery(".popwinClose").click();
                showShareDeployPage(n, j)
            }
        });
        return true
    } else {
        return false
    }
}
function getStartvalue(c) {
    var a = jQuery(c);
    var b = "5";
    if (a && a.val() != "" && a.val() != null) {
        b = a.val()
    }
    return b
}
function showErrorTitle(b, a) {
    jQuery("#" + b).css({color: "#666", display: "inline-block", height: "23px", "line-height": "23px", padding: "0 5px", border: "1px solid #FF8080", "background-color": "#FFF2F2"});
    jQuery("#" + b).html(a);
    setTimeout(function() {
        jQuery("#" + b).removeAttr("style");
        jQuery("#" + b).html("")
    }, 9000)
}
function showShareDeployPage(b, d) {
    var c = b.value.split("=");
    var a = c[0];
    var f = c[1];
    if (a == 1) {
        jQuery(".popwinClose").click();
        window.scrollTo(0, 0);
        var e = '<div class="popup_cont"><div class="prompted"><img src="' + URLPrefix.statics + '/member/images/okay.png"/><h3>提交成功！ </h3><p>' + f + '!</p></div><p class="countdown">3秒后自动关闭</p><a href="javascript:void(0);" class="close">关闭</a></div>';
        popMsg(e, ".popup_cont .close", 378, 120);
        if (jQuery("#categoryAllProducts") && jQuery("#categoryAllProducts").size() > 0) {
            loadExpInfo(1)
        }
        if (jQuery("#noCommentProductsView") && jQuery("#noCommentProductsView").size() > 0) {
            loadNoCommentProductInfo()
        }
        if (jQuery("#myOrderList") && jQuery("#myOrderList").size() > 0) {
            orderListPageInfo(1)
        }
        setTimeout(function() {
            jQuery(".popup_cont .close").click();
            openShare();
            if (d && d == "publishExperience") {
                jQuery("#contentTitle").attr("value", "");
                jQuery(".ipt3, .ipt6").each(function(g) {
                    jQuery(this).attr("value", "")
                })
            }
        }, 3000)
    } else {
        if (a == 2) {
            var e = '<div class="popup_sens"><h3 class="title">提示<span class="close">关闭</span></h3><p class="popup_text">' + f + '</p><p class="btntip"><input type="button" value="确 定" /></p></div>';
            popMsg(e, ".popup_sens .close,.btntip :button", 398, 150, 250);
            jQuery(".popup_sens .close,.btntip :button").click(function() {
                openShare()
            });
            if (jQuery("#categoryAllProducts") && jQuery("#categoryAllProducts").size() > 0) {
                loadExpInfo(1)
            }
            if (jQuery("#noCommentProductsView") && jQuery("#noCommentProductsView").size() > 0) {
                loadNoCommentProductInfo()
            }
            if (jQuery("#myOrderList") && jQuery("#myOrderList").size() > 0) {
                orderListPageInfo(1)
            }
            if (d && d == "publishExperience") {
                jQuery("#contentTitle").attr("value", "");
                jQuery(".ipt3, .ipt6").each(function(g) {
                    jQuery(this).attr("value", "")
                })
            }
        } else {
            var e = '<div class="popup_sens"><h3 class="title">提示<span class="close">关闭</span></h3><p class="popup_text">' + f + '</p><p class="btntip"><input type="button" value="确 定" /></p></div>';
            popMsg(e, ".popup_sens .close,.btntip :button", 398, 150);
            if (d && d == "publishExperience") {
                jQuery("#contentTitle").attr("value", "");
                jQuery(".ipt3, .ipt6").each(function(g) {
                    jQuery(this).attr("value", "")
                })
            }
        }
    }
}
function popMsg(c, f, d, b, e) {
    YHD.init();
    var a = jQuery("#yhd_pop_win");
    if (c != null) {
        jQuery(a).html(c)
    }
    if (e) {
        YHD.initPosition(a, d, b, e)
    } else {
        YHD.initPosition(a, d, b)
    }
    jQuery(a).jqm({overlay: 10, overlayClass: "pop_win_bg", modal: true, toTop: true}).jqmShow().jqmAddClose(f)
}
function appearAndShareExperience(c, d, g, e, b) {
    productname = b;
    var f = jQuery.cookie("ut");
    if (!f) {
        yhdPublicLogin.showLoginDivNone(URLPrefix.passport, false, "", function(h) {
            if (h == 0) {
                yhdPublicLogin.showTopLoginInfo()
            }
        });
        return
    } else {
        executiveLandedCheck();
        shareImage_url = e;
        shareProductId = c;
        if (d != null && d != 0 && g != null && g != 0) {
            shareOrderId = g;
            shareMerchantId = d
        } else {
            g = null;
            d = null
        }
        var a = urlPrefix + "/product/checkItemCount.do?productID=" + c + "&merchantId=" + shareMerchantId + "&soId=" + shareOrderId + "&callback=?";
        jQuery.getJSON(a, function(h) {
            if (h.ERROR) {
            } else {
                apperarShareSuccess(h, c)
            }
        })
    }
}
function openShare() {
    jQuery("#pop_win_ok_btn").click();
    var a = urlPrefixComment + "/member/exp/editShareExcerienceDiv.do?productId=" + shareProductId + "&callback=?";
    jQuery.getJSON(a, function(b) {
        if (b.ERROR) {
        } else {
            if (b.value != "noshare") {
                getSinaUrl(function(c) {
                    YHD.popwin(b.value, 470, 400);
                    jQuery("[name=experience.cancel]").click(function() {
                        jQuery(".popwinClose").click()
                    });
                    if (shareImage_url == "" || productname == "" || shareImage_url == null || productname == null) {
                        try {
                            shareImage_url = jQuery("#mainPic").attr("tag");
                            productname = jQuery("#productMainName").text()
                        } catch (d) {
                        }
                    }
                    jQuery("[name='product_image']").attr("src", shareImage_url);
                    shareContentgood = "我在1号店买了【" + productname.substring(0, 110) + "】 ";
                    jQuery("[name='product_share_experience']").val(shareContentgood + c);
                    jQuery("[name=experience.share]").click(function() {
                        if (jQuery("[name='product_share_experience']").val().length > 140) {
                            jQuery("#shareErrorMsg").html("<p>分享内容不能超过140字</p>")
                        } else {
                            if (jQuery("[name='product_share_experience']").val().length == 0) {
                                jQuery("#shareErrorMsg").html("<p>分享内容不能为空</p>")
                            } else {
                                var e = false;
                                jQuery(":checkbox[name^='share_to_']").each(function(f) {
                                    e = e || jQuery(this).attr("checked")
                                });
                                if (e) {
                                    perpShareExcerience(shareProductId)
                                } else {
                                    jQuery("#shareErrorMsg").html("<p>请选择分享平台</p>")
                                }
                            }
                        }
                    })
                })
            }
        }
    })
}
var sinaUrl = "";
function getSinaUrl(a) {
    if (sinaUrl != "") {
        a(sinaUrl)
    } else {
        getShotURL("sina", a)
    }
}
function getShotURL(a, b) {
    if (a == "sina" && sinaUrl != "") {
        b(sinaUrl)
    } else {
        url = URLPrefix.passport + "/share/shotUrl.do?longUrl=" + escape(URLPrefix.central + "/product/" + shareProductId + "?tarcker_u=" + getpcode(a)) + "&callback=?";
        jQuery.getJSON(url, function(c) {
            b(c.shotUrl);
            if (a == "sina") {
                sinaUrl = c.shotUrl
            }
        })
    }
}
function getpcode(a) {
    if ("sina" == a) {
        return"1047513694"
    }
    if ("qq" == a) {
        return"1057943695"
    }
    if ("kaixin" == a) {
        return"1095733696"
    }
    if ("renren" == a) {
        return"1020853697"
    }
}
var shareMsg = "";
var sig = "";
var exid = "";
function perpShareExcerience(a) {
    shareMsg = encodeURIComponent(encodeURIComponent(jQuery("[name='product_share_experience']").val()));
    sig = jQuery("#shareErrorMsg").attr("sign");
    exid = jQuery("#shareErrorMsg").attr("exid");
    validateShare(a, "sina");
    validateShare(a, "renren");
    validateShare(a, "qq");
    validateShare(a, "kaixin");
    jQuery(".popwinClose").click();
    YHD.alert("评论并且分享成功", null, 476, 27)
}
function validateShare(a, b) {
    if (jQuery(":checkbox[name='share_to_" + b + "']") && jQuery(":checkbox[name='share_to_" + b + "']").attr("checked")) {
        shareExcerience(a, b)
    }
}
function createShareUrl(a, b, c) {
    var d = URLPrefix.passport + "/share/" + b + "/publish.do?sign=" + sig + "&exid=" + exid + "&productId=" + shareProductId + "&pubMessage.content=" + shareMsg + "&pubMessage.title=" + encodeURIComponent(encodeURIComponent("在一号店发布了购买体验")) + "&pubMessage.image=" + escape(shareImage_url) + "&pubMessage.url=" + escape(c) + "&sinaUrl=" + escape(sinaUrl) + "&callback=?";
    return d
}
function shareExcerience(a, b) {
    getShotURL(b, function(c) {
        jQuery.getJSON(createShareUrl(a, b, c), function(d) {
        })
    })
}
;
var Class = {create: function() {
        return function() {
            this.initialize.apply(this, arguments)
        }
    }};
var Extend = function(b, a) {
    for (var c in a) {
        b[c] = a[c]
    }
};
function stopDefault(a) {
    if (a && a.preventDefault) {
        a.preventDefault()
    } else {
        window.event.returnValue = false
    }
    return false
}
var Stars = Class.create();
Stars.prototype = {initialize: function(m, g) {
        this.SetOptions(g);
        var o = 999;
        var j = (document.all) ? true : false;
        var b = document.getElementById(m).getElementsByTagName("a");
        var d = document.getElementById(this.options.Input) || document.getElementById(m + "-input");
        var n = document.getElementById(this.options.Tips) || document.getElementById(m + "-tips");
        var h = " " + this.options.nowClass;
        var f = this.options.tipsTxt;
        var l = b.length;
        for (k = 0; k < l; k++) {
            b[k].value = k;
            b[k].onclick = function(c) {
                stopDefault(c);
                this.className = this.className + h;
                o = this.value;
                d.value = this.getAttribute("star:value");
                n.innerHTML = f[this.value]
            };
            b[k].onmouseover = function() {
                if (o < 999) {
                    var c = RegExp(h, "g");
                    b[o].className = b[o].className.replace(c, "")
                }
            };
            b[k].onmouseout = function() {
                if (o < 999) {
                    b[o].className = b[o].className + h
                }
            }
        }
        if (j) {
            var e = document.getElementById(m).getElementsByTagName("li");
            for (var k = 0, l = e.length; k < l; k++) {
                var a = e[k];
                if (a) {
                    a.className = a.getElementsByTagName("a")[0].className
                }
            }
        }
    }, SetOptions: function(a) {
        this.options = {Input: "", Tips: "", nowClass: "current-rating", tipsTxt: ["1分-很不满意", "2分-不满意", "3分-一般", "4分-满意", "5分-非常满意"]};
        Extend(this.options, a || {})
    }};
function setHomepage() {
    if (document.all) {
        document.body.style.behavior = "url(#default#homepage)";
        document.body.setHomePage(httpUrl)
    } else {
        if (window.sidebar) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (b) {
                    alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                }
            }
            var a = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
            a.setCharPref("browser.startup.homepage", httpUrl)
        }
    }
}
function globalLogoff() {
}
function bookmark() {
    var c;
    var f = /^http{1}s{0,1}:\/\/([a-z0-9_\\-]+\.)+(yihaodian|1mall|111|yhd){1}\.(com|com\.cn){1}\?(.+)+$/;
    if (f.test(httpUrl)) {
        c = "&ref=favorite"
    } else {
        c = "?ref=favorite"
    }
    var d = httpUrl + c;
    var b = /msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1]) <= 6;
    if (b) {
        d = httpUrl
    }
    try {
        if (document.all) {
            window.external.AddFavorite(d, favorite)
        } else {
            try {
                window.sidebar.addPanel(favorite, d, "")
            } catch (a) {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    } catch (a) {
        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
    }
}
function writeHeaderContent() {
    var d = jQuery("#global_login");
    var a = window.loli || (window.loli = {});
    if (d.size() > 0) {
        if (d.attr("data-type") != null) {
            var c = a.app = a.app || {};
            var b = a.app.account = a.app.account || {};
            if (b.showUserInfo) {
                a.globalCheckLogin(b.showUserInfo)
            }
            return
        }
        a.globalCheckLogin(globalInitYhdLoginInfo)
    }
}
function globalInitYhdLoginInfo(d) {
    if (d && d.result && d.userName) {
        var e = d.result;
        var c = d.userName;
        var b = jQuery("#global_login");
        var a = jQuery("#global_unlogin");
        var g = jQuery("#logout");
        if (e == "1") {
            b.show();
            g.show();
            a.hide();
            var f = jQuery.cookie("uname");
            if (f && jQuery.trim(f) != "") {
                jQuery("#user_name").text(f)
            } else {
                jQuery("#user_name").text(c)
            }
            if (d.memberGrade) {
                var h = d.memberGrade;
                if (h == "1" || h == "2" || h == "3") {
                    jQuery("#global_member_grade").removeClass("hd_vip0").addClass("hd_vip" + h)
                }
            }
        }
    }
}
function cutUsername(a) {
    return a
}
function bothSiteLogoutJsonp() {
    var a = URLPrefix.passport;
    jQuery.getJSON(a + "/passport/logoutJsonp.do?timestamp=" + new Date() + "&callback=?", function(b) {
        if (b && b.code == "0") {
            location.href = currDomain
        }
    })
}
function pingan_quit() {
}
function kx001_onlogout() {
}
function hightLightMenu(a, d) {
    var b = jQuery(a);
    var c = location.href;
    b.each(function(f) {
        if (f == 0) {
            return true
        }
        var e = jQuery(this).find("a");
        var j = e.attr("href");
        var h = e.attr("hl");
        var g = false;
        g = (c.indexOf(j) > -1);
        if (!g) {
            if (h) {
                g = (c.indexOf(h) > -1)
            }
        }
        if (!g) {
            g = (c.indexOf("point2channel.do") > -1) && (j.indexOf("/point2/pointIndex.do") > -1)
        }
        if (g) {
            if (f) {
                if (h != null && h.length > 0) {
                    b.eq(0).removeClass("cur");
                    e.parent().addClass("cur")
                }
            }
            return false
        }
    })
}
function initHeader() {
    try {
        writeHeaderContent()
    } catch (a) {
    }
    hightLightMenu("#global_menu li", null)
}
function headNavFixed() {
    var b = $("#headerNav").offset().top;
    var c = jQuery("#headerNav");
    jQuery(window).scroll(function() {
        var d = $(this).scrollTop();
        if (d > b) {
            c.addClass("hd_nav_fixed");
            if (jQuery("#headerNav_box").length == 0) {
                c.after('<p class="headerNav_box" id="headerNav_box"></p>')
            }
        } else {
            jQuery("#headerNav_box").remove();
            c.removeClass("hd_nav_fixed");
            jQuery("#fix_keyword").blur()
        }
    });
    var a = /msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1]) <= 6;
    if (a) {
        $(window).scroll(function() {
            var d = $(this).scrollTop();
            if (d > b) {
                c.addClass("hd_fixed_ie6");
                var e = $("#headerNav_ifm").length;
                if (e == 0) {
                    $('<iframe class=headerNav_ifm id="headerNav_ifm"></iframe>').insertBefore("#headerNav .wrap")
                }
                c.css("top", d)
            } else {
                c.removeClass("hd_fixed_ie6");
                $("#headerNav_ifm").remove();
                c.css("top", "0px");
                jQuery("#fix_keyword").blur()
            }
        })
    }
}
function searchHeadNavFixed() {
    var b = $("#rankOpDiv").size() > 0 ? $("#rankOpDiv").offset().top : $("#headerNav").offset().top;
    var c = jQuery("#headerNav");
    jQuery(window).scroll(function() {
        var d = $(this).scrollTop();
        if (d > b) {
            c.addClass("hd_nav_fixed").addClass("hd_search_fix");
            if (jQuery("#headerNav_box").length == 0) {
                c.after('<p class="headerNav_box" id="headerNav_box"></p>')
            }
        } else {
            jQuery("#headerNav_box").remove();
            c.removeClass("hd_nav_fixed").removeClass("hd_search_fix");
            jQuery("#fix_keyword").blur()
        }
    });
    var a = /msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1]) <= 6;
    if (a) {
        $(window).scroll(function() {
            var d = $(this).scrollTop();
            if (d > b) {
                c.addClass("hd_fixed_ie6").addClass("hd_search_fix");
                var e = $("#headerNav_ifm").length;
                if (e == 0) {
                    $('<iframe class=headerNav_ifm id="headerNav_ifm"></iframe>').insertBefore("#headerNav .wrap")
                }
                c.css("top", d)
            } else {
                c.removeClass("hd_fixed_ie6").removeClass("hd_search_fix");
                $("#headerNav_ifm").remove();
                c.css("top", "0px");
                jQuery("#fix_keyword").blur()
            }
        })
    }
}
var yhdToolKit = window.yhdToolKit = window.yhdToolKit || {};
yhdToolKit.loadMobileAdv = function() {
    var a = $("#glKeHuDuan");
    a.find(".hd_iconfont").click(function() {
        var b = loli.spm.getData(this);
        gotracker("2", "wirelessClick", null, b)
    });
    $("#glKeHuDuan").lazyImg()
};
yhdToolKit.getProductPicByDefaultPic = function(f, a, c) {
    try {
        var g = /^(http|https):\/\/(d\d{1,2})\./;
        if (f && f.search(g) != -1) {
            a = a > 1000 ? 1000 : a;
            c = c > 1000 ? 1000 : c;
            var g = /_(\d{1,4}x\d{1,4})\.\w{3,5}$/;
            if (g.test(f)) {
                return f.replace(/_(\d{1,4}x\d{1,4})\./, "_" + a + "x" + c + ".")
            } else {
                var d = f.lastIndexOf(".");
                if (d > 0 && f.length - d <= 6) {
                    return f.substring(0, d) + "_" + a + "x" + c + f.substring(d)
                }
            }
        } else {
            if (f) {
                return f
            }
        }
        var e = 115;
        if (a < 80) {
            e = 40
        } else {
            if (a > 150) {
                e = 200
            }
        }
        return"images/defaultproduct_" + e + "x" + e + ".jpg"
    } catch (b) {
    }
    return"images/defaultproduct_115x115.jpg"
};
jQuery(document).ready(function() {
    if (isIndex != 1) {
        initHeader()
    }
    if (typeof isFixTopNav != "undefined" && isFixTopNav == true) {
        if (typeof headerType != "undefined" && headerType == "search") {
            searchHeadNavFixed()
        } else {
            headNavFixed()
        }
    }
    jQuery("#footerServiceLinkId").lazyDom({load: false, flushPrice: false, indexLoad: true, callback: function() {
        }});
    yhdToolKit.loadMobileAdv();
    $("#footerQRcode,#footerIcon,#footer").lazyImg()
});
var yhdHead = window.yhdHead = window.yhdHead || {};
yhdHead.topMenuImgLazyLoad = function() {
    jQuery("#wideScreenTabShowID li img").each(function() {
        jQuery(this).attr("src", function() {
            return jQuery(this).attr("original")
        }).removeAttr("original")
    });
    jQuery("#allCategoryHeader ul li h3 img").each(function() {
        jQuery(this).attr("src", function() {
            return jQuery(this).attr("original")
        }).removeAttr("original")
    })
};
yhdHead.newTopTabShow = function(b, a) {
    if (b > a) {
        jQuery("#wideScreenTabShowID li").each(function(c) {
            if (c == a - 1) {
                jQuery(this).addClass("kf")
            }
            if (c > a - 1) {
                jQuery(this).remove()
            }
        })
    }
};
yhdHead.oldTopTabShow = function(b, a) {
    if (b > a) {
        jQuery("#global_menu span").each(function(c) {
            if (c > a - 1) {
                jQuery(this).remove()
            }
        })
    }
};
yhdHead.dealWideNarrowScreen = function() {
    var b = typeof isWidescreen != "undefined" ? isWidescreen : false;
    if (currSiteId == 1) {
        var a = jQuery("#wideScreenTabShowID li").length;
        var c = jQuery("#global_menu span").length;
        if (!b) {
            yhdHead.newTopTabShow(a, 10);
            yhdHead.oldTopTabShow(c, 7)
        } else {
            if (isIndex) {
                if (isIndex == 1) {
                    yhdHead.newTopTabShow(a, 10)
                } else {
                    yhdHead.newTopTabShow(a, 10)
                }
            } else {
                yhdHead.newTopTabShow(a, 10)
            }
            yhdHead.oldTopTabShow(c, 7)
        }
    } else {
        var a = jQuery("#wideScreenTabShowID li").length;
        var c = jQuery("#global_menu span").length;
        if (!b) {
            yhdHead.newTopTabShow(a, 8);
            yhdHead.oldTopTabShow(c, 6)
        } else {
            if (isIndex) {
                if (isIndex == 1) {
                    yhdHead.newTopTabShow(a, 9)
                } else {
                    yhdHead.newTopTabShow(a, 8)
                }
            } else {
                yhdHead.newTopTabShow(a, 8)
            }
            yhdHead.oldTopTabShow(c, 6)
        }
    }
};
yhdHead.topMenuTrackInit = function() {
    jQuery("#wideScreenTabShowID li a[tk]").click(function() {
        var b = $(this), a = b.attr("tk");
        if (a) {
            addTrackPositionToCookie("1", a)
        }
    });
    jQuery("#global_menu span a[tk]").click(function() {
        var b = $(this), a = b.attr("tk");
        if (a) {
            addTrackPositionToCookie("1", a)
        }
    })
};
jQuery(function() {
    yhdHead.topMenuImgLazyLoad();
    yhdHead.topMenuTrackInit()
});
var returnUrl = document.location.href;
var yhdPublicLogin = yhdPublicLogin || {};
var URLPrefix_passport = URLPrefix.passport;
yhdPublicLogin.checkLogin = function() {
    if (yhdPublicLogin.getCookie("ut")) {
        return true
    } else {
        return false
    }
};
yhdPublicLogin.getCookie = function(h) {
    var g = document.cookie.split(";");
    for (var e = 0; e < g.length; e++) {
        var f = g[e].split("=");
        if (f[0].replace(/(^\s*)|(\s*$)/g, "") == h) {
            return f[1]
        }
    }
    return""
};
yhdPublicLogin.loadCssAndJs = function(f, h) {
    var g = "";
    var e = 0;
    if (typeof currVersionNum != "undefined") {
        e = currVersionNum
    }
    if (h == "js") {
        g = document.createElement("script");
        g.setAttribute("type", "text/javascript");
        g.setAttribute("charset", "UTF-8");
        g.setAttribute("src", f + "?" + e)
    } else {
        if (h == "css") {
            g = document.createElement("link");
            g.setAttribute("rel", "stylesheet");
            g.setAttribute("type", "text/css");
            g.setAttribute("href", f + "?" + e)
        }
    }
    if (typeof g != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(g)
    }
};
yhdPublicLogin.showLoginDiv = function(q, o, m) {
    if (o && yhdPublicLogin.checkLogin()) {
        return
    }
    if (q) {
        var p = "";
        if (q.toLowerCase().indexOf("http") < 0) {
            var k = window.location.protocol;
            var j = window.location.host;
            var l = k + "//" + j;
            p = l
        }
        var r = p + q;
        returnUrl = r
    }
    try {
        passportLoginFrame(URLPrefix_passport, null, function(b) {
            try {
                if (returnUrl) {
                    window.location.href = returnUrl
                } else {
                    window.location.reload(true)
                }
            } catch (a) {
            }
        }, m)
    } catch (n) {
    }
};
yhdPublicLogin.showLoginDivNone = function(e, l, i, j, h) {
    if (l && yhdPublicLogin.checkLogin()) {
        return
    }
    try {
        passportLoginFrame(e, i, j, h)
    } catch (k) {
    }
};
yhdPublicLogin.showTopLoginInfo = function() {
    try {
        writeHeaderContent()
    } catch (b) {
    }
};
jQuery(document).ready(function() {
    var b = "";
    if (URLPrefix && URLPrefix.statics) {
        b = URLPrefix.statics
    } else {
        if (currSiteId && currSiteId == 2) {
            b = "http://image.111.com.cn/statics"
        } else {
            b = "http://image.yihaodianimg.com/statics"
        }
    }
    yhdPublicLogin.loadCssAndJs(b + "/global/css/global_yhdLib.css", "css");
    yhdPublicLogin.loadCssAndJs(b + "/global/js/global_yhdLib.js", "js");
    yhdPublicLogin.loadCssAndJs(URLPrefix_passport + "/front-passport/passport/js/login_frame_client.js", "js")
});
var jsTopbarFed = {ieLower: /msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1]) <= 6, isWide: typeof isWidescreen != "undefined" ? isWidescreen : false, maxHeight: function(a, b) {
        if (jsTopbarFed.ieLower) {
            var d = $(a).height();
            var c = parseInt(b);
            if (d > c) {
                $(a).height(c)
            }
        }
    }, userNameMax: function() {
        if (jsTopbarFed.ieLower) {
            var a = jQuery("#user_name");
            var b = a.width();
            if (jsTopbarFed.isWide) {
                if (b > 215) {
                    a.css("width", "215")
                }
            } else {
                if (b > 138) {
                    a.css("width", "138")
                }
            }
        }
    }, bindHoverEvent: function() {
        jQuery("#global_top_bar").delegate("[data-addClass]", "mouseenter", function() {
            var d = jQuery(this);
            var b = d.attr("data-addClass");
            d.addClass(b);
            var c = loli.spm.getData(this);
            gotracker("2", "topbarHover", null, c);
            a(d)
        });
        jQuery("#glWangZhanDaoHang").delegate("a", "click", function() {
            var b = loli.spm.getData(this);
            gotracker("2", "wangzhanDaohangClick", null, b)
        });
        function a(d) {
            var c = d.attr("id");
            if (c == "glKeHuDuan" || c == "shoujiVD") {
                d.lazyImg({indexLoad: true})
            }
            if (d.has(".hd_weixin_show").length) {
                jsTopbarFed.weixinTextMax();
                d.lazyImg({indexLoad: true})
            }
            if (d.has(".hd_fav_num").length) {
                var b = d.outerWidth() - 1;
                d.find("em", ".hd_favorites").css("width", b)
            }
            if (d.has(".hd_favorites").length) {
                jsTopbarFed.maxHeight(".hd_favorites dl", "300")
            }
        }}
    , weixinTextMax: function() {
        if (jsTopbarFed.ieLower) {
            var a = $("p", ".hd_weixin_show").height(), b = 36;
            if (a > b) {
                $("p", ".hd_weixin_show").css("height", b)
            }
        }
    }, bindHoverOutEvent: function() {
        jQuery("#global_top_bar").delegate("[data-addClass]", "mouseleave", function() {
            var b = jQuery(this);
            var a = b.attr("data-addClass");
            b.removeClass(a)
        })
    }, setNoticeTop: function(b) {
        var c = jQuery(b);
        if (c[0] && jQuery("#hd_head_skin")[0]) {
            var a = jQuery("#topbanner");
            if (a[0]) {
                a.find("img").load(function() {
                    c.css("top", a.height())
                })
            } else {
                if (!jQuery("#topCurtain")[0]) {
                    c.css("top", 0)
                }
            }
        }
    }, smallTopBannerHover: function() {
        if (typeof headerType != "undefined" && headerType == "search" && typeof isBigWidescreen != "undefined" && isBigWidescreen) {
            $("#topbanner").remove();
            return
        }
        var a = $("#smallTopBanner");
        if (a.length < 1) {
            a = $("#topbanner").find(".small_topbanner3")
        }
        if (a.length < 1) {
            return
        }
        a.delegate("a", "mouseover", function() {
            $(this).siblings("a").find("u").show()
        });
        a.delegate("a", "mouseout", function() {
            $(this).siblings("a").find("u").hide()
        })
    }, closeNotice: function(a) {
        $("#hd_header_notice").delegate(".hd_notice_close", "click", function() {
            $(this).parents(".hd_header_notice").slideUp()
        })
    }, loadFun: function() {
        jsTopbarFed.bindHoverEvent();
        jsTopbarFed.bindHoverOutEvent();
        jsTopbarFed.smallTopBannerHover();
        jsTopbarFed.closeNotice()
    }, noticeShow: function() {
        if ($("li", "#hd_header_notice").length > 1) {
            var a;
            $("#hd_header_notice").hover(function() {
                if (a) {
                    clearInterval(a)
                }
            }, function() {
                a = setInterval(function() {
                    var c = $("#hd_header_notice ul:first");
                    var b = c.find("li:first").height();
                    c.animate({marginTop: -b + "px"}, 500, function() {
                        c.css({marginTop: 0}).find("li:first").appendTo(c)
                    })
                }, 5000)
            }).trigger("mouseleave")
        }
    }};
jQuery(document).ready(function() {
    jsTopbarFed.userNameMax();
    jsTopbarFed.loadFun();
    jsTopbarFed.noticeShow()
});
(function(b) {
    var a = window.loli || (window.loli = {});
    a.timing = {timeToStr: function(d, f) {
            var e = [];
            for (var c in d) {
                if (d[c].value == -1 || d[c].value >= 3 * 60 * 1000) {
                    continue
                }
                e.push(d[c].name + "_" + d[c].value)
            }
            if (f) {
                e.push(f)
            }
            return(e.join("-"))
        }, basicTime: function(c) {
            if (!window.performance) {
                return
            }
            var e = window.performance, h = e.timing, d = e.navigation, g = {redirectCount: {name: "RDTT", value: d.redirectCount}, redirectTime: {name: "RDTM", value: h.redirectEnd - h.redirectStart}, domainLookupTime: {name: "DMLKT", value: h.domainLookupEnd - h.domainLookupStart}, connectTime: {name: "CONTT", value: h.connectEnd - h.connectStart}, requestTime: {name: "REQT", value: h.responseStart - (h.requestStart || h.responseStart + 1)}, responseTime: {name: "RSPT", func: function() {
                        var i = h.responseEnd - h.responseStart;
                        if (h.domContentLoadedEventStart) {
                            if (i < 0) {
                                i = 0
                            }
                        } else {
                            i = -1
                        }
                        return i
                    }, value: -1}, domParsingTime: {name: "DMPT", func: function() {
                        return h.domContentLoadedEventStart ? h.domInteractive - h.domLoading : -1
                    }, value: -1}, domLoadedTime: {name: "DMLT", func: function() {
                        if (h.loadEventStart) {
                            return h.loadEventStart - h.domInteractive
                        }
                        return h.domComplete ? h.domComplete - h.domInteractive : -1
                    }, value: -1}, winOnLoadTime: {name: "ONLOADT", func: function() {
                        return h.loadEventEnd ? h.loadEventEnd - h.loadEventStart : -1
                    }, value: -1}, pageLoadTime: {name: "PAGET", func: function() {
                        if (h.loadEventStart) {
                            return h.loadEventStart - h.fetchStart
                        }
                        return h.domComplete ? h.domComplete - h.fetchStart : -1
                    }, value: -1}, allLoadTime: {name: "ALLT", func: function() {
                        if (h.loadEventEnd) {
                            return h.loadEventEnd - h.navigationStart
                        }
                        return h.domComplete ? h.domComplete - h.navigationStart : -1
                    }, value: -1}, firstPaintTime: {name: "FPAINTT", func: function() {
                        var i = h.firstPaint || h.msFirstPaint || h.mozFirstPaint || h.webkitFirstPaint || h.oFirstPaint;
                        return i ? i - h.navigationStart : -1
                    }, value: -1}, beforeDomLoadingTime: {name: "BEFDMLT", func: function() {
                        return h.domLoading ? h.domLoading - h.navigationStart : -1
                    }, value: -1}, resourcesLoadedTime: {name: "RESLOADT", func: function() {
                        if (h.loadEventStart) {
                            return h.loadEventStart - h.domLoading
                        }
                        return h.domComplete ? h.domComplete - h.domLoading : -1
                    }, value: -1}, scriptRunTime: {name: "SCRIPTT", func: function() {
                        var i = h.domContentLoadedEventEnd - h.domContentLoadedEventStart;
                        return i > 0 ? i : -1
                    }, value: -1}, customInteractTime: {name: "CINTT", func: function() {
                        var j = window.global || (window.global = {});
                        var k = j.vars = (j.vars || {});
                        var i = j.vars.customInteractTime;
                        if (i) {
                            return i - window.performance.timing.navigationStart
                        } else {
                            return -1
                        }
                    }, value: -1}, interactTime: {name: "INTT", func: function() {
                        if (h.domContentLoadedEventStart) {
                            return h.domContentLoadedEventStart - h.navigationStart
                        }
                        return -1
                    }, value: -1}};
            for (var f in g) {
                if (g[f].value == -1 && typeof g[f].func == "function") {
                    g[f].value = g[f].func()
                }
            }
            return this.timeToStr(g, c)
        }, eventHandleTime: function(h) {
            try {
                var g = [];
                if (typeof h == "undefined") {
                    return false
                } else {
                    if (h instanceof Array) {
                        var f = false;
                        for (var d = 0; d < h.length; d++) {
                            var c = h[d];
                            if (typeof c == "object") {
                                if (typeof c.name == "undefined" || c.endTime == "undefined" || c.startTime == "undefined") {
                                    console.log("data format is wrong! propeties should have name or endTime or startTime ");
                                    continue
                                } else {
                                    if (typeof c.endTime != "number" || typeof c.startTime != "number") {
                                        console.log(" endTime or startTime of " + c.name + "Object is not number type");
                                        continue
                                    } else {
                                        g.push(c.name + "_" + (c.endTime - c.startTime));
                                        f = true
                                    }
                                }
                            } else {
                                console.log("data format of Array is wrong! should be single Object");
                                continue
                            }
                        }
                        if (f) {
                            a.timing.sendTimerTracker(g.join("|"));
                            return true
                        }
                    } else {
                        if (typeof h == "object") {
                            if (typeof h.name == "undefined" || h.startTime == "undefined" || h.endTime == "undefined") {
                                console.log("data format is wrong! propeties should be name and startTime ");
                                return false
                            } else {
                                if (typeof h.startTime != "number" || typeof h.endTime != "number") {
                                    console.log(" startTime of " + h.name + "Object is not number type");
                                    return false
                                }
                                a.timing.sendTimerTracker(h.name + "_" + (h.endTime - h.startTime));
                                return true
                            }
                        } else {
                            return false
                        }
                    }
                }
            } catch (j) {
            }
        }, sendTimerTracker: function(e) {
            if (e && b.trim(e) != "") {
                var d = a.page.getCurrPageInfo();
                if (!d) {
                    recordTrackInfoWithType("2", e);
                    return
                }
                var c = {w_pt: d.pageType, w_pv: d.pageValue};
                recordTrackInfoWithType("2", e, null, null, c)
            }
        }, loadBaseTime: function() {
            if (!window.performance) {
                return
            }
            if (typeof stopGlobalTimingLoadFlag == "undefined") {
                a.timing.sendTimerTracker(a.timing.basicTime())
            }
        }}
})(jQuery);
jQuery(window).load(function() {
    setTimeout(function() {
        loli.timing.loadBaseTime()
    }, 3000)
});
(function(a) {
    a(function() {
        var h = YHDOBJECT.globalVariable().globalPageCode;
        var d = a.cookie("provinceId");
        if (typeof (h) == "undefined" || h == -1) {
            return
        }
        if (!d) {
            return
        }
        if (jQuery("#globalBottomBrowseRelated").length < 1) {
            return
        }
        var l = {currSiteId: currSiteId, currSiteType: 1, provinceId: d, pageCode: h, pmid: a("#productMercantId").val(), merchantId: a("#merchantId").val(), userid: a.cookie("yihaodian_uid"), showWideScreen: (typeof isWidescreen != "undefined" && isWidescreen == true) ? true : false, showBigWideScreen: (typeof isBigWidescreen != "undefined" && isBigWidescreen == true) ? true : false};
        var f = function(p) {
            n("#globalBottomBrowseRelated", function() {
                j(p)
            })
        };
        var j = function(p) {
            o(p);
            b()
        };
        var o = function(p) {
            a.extend(l, p)
        };
        var b = function() {
            var p = URLPrefix.pms + "/pms/bottomRec.do?";
            urlStr = [];
            urlStr.push(p);
            for (var q in l) {
                var r = l[q];
                if (r) {
                    urlStr.push(q + "=" + l[q] + "&")
                }
            }
            urlStr.push("callback=?");
            a.getJSON(urlStr.join(""), function(t) {
                if (t) {
                    var s = t.value[0];
                    if (s && s && s.status == 1) {
                        e(s)
                    }
                }
            })
        };
        var e = function(x) {
            var C = a("#globalBottomBrowseRelated");
            if (C.length < 1) {
                return
            }
            var B = [];
            var D = [];
            var G = x.lTrackerPrefix;
            var p = x.rTrackerPrefix;
            var M = x.sourceObject;
            var I = x.productList;
            var O = x.exposureCode;
            var z = x.promTrackerPrefix;
            var r = x.guideTrackerPrefix;
            B.push('<div class="browse_related">');
            B.push('<div class="clearfix">');
            B.push('<div class="browse_related_left" id="browseHistory">');
            B.push("<h4>浏览记录</h4>");
            B.push('<div class="paging">');
            var K = M.length;
            var t = I.length;
            totalSize = parseInt((K - 1) / 4) + 1;
            B.push('<a class="prev" href="javascript:void(0);"></a><em><b class="cur_page">1</b>/<span>' + totalSize + '</span></em><a class="next" href="javascript:void(0);"></a>');
            B.push("</div>");
            B.push('<div class="paging_wrap browse_history_wrap">');
            B.push('<ul class="browse_history_con clearfix" style="margin-left: 0px;">');
            var L;
            if (K < 1) {
                L = "猜你喜欢的商品";
                B.push('<li><div class="browse_history_none"><dt>尚未浏览商品</dt><dd></dd></div></li>')
            } else {
                L = "与您浏览记录相关的商品";
                for (var q = 0; q < totalSize; q++) {
                    B.push("<li>");
                    var v = (q + 1) * 4 < K ? (q + 1) * 4 : K;
                    for (var F = q * 4; F < v; F++) {
                        var y = M[F];
                        var A = y.samMemberPrice ? 1 : 0;
                        D.push(y.pmId);
                        B.push('<div class="browse_history_list">');
                        B.push('<a href="' + y.linkUrl + '" target="_blank" class="pro_img" data-ref="' + G + "_" + y.productId + "_" + F + '"><img src="' + m.util.hashImgUrl(y.picUrl) + '"></a>');
                        B.push("<div>");
                        B.push('<a title="' + y.cnName + '" href="' + y.linkUrl + '" target="_blank" data-ref="' + G + "_" + y.productId + "_" + F + '">' + y.cnName + "</a>");
                        if (A) {
                            B.push('<p class="sam_price" data-productId="' + y.pmId + '" data-samFlag="1"><b>¥' + y.samMemberPrice + '</b><em class="sam_icon"></em></p>')
                        } else {
                            B.push('<p data-productId="' + y.pmId + '"><b>¥' + y.salePrice + "</b></p>")
                        }
                        B.push("</div>");
                        B.push("</div>")
                    }
                    B.push("</li>")
                }
            }
            B.push("</ul>");
            B.push("</div>");
            B.push("</div>");
            B.push('<div class="browse_related_right">');
            B.push("<h4>" + L + "</h4>");
            B.push('<div class="browse_related_list" id="alsoBuyBox">');
            B.push('<a href="javascript:;" class="prev">上一页</a>');
            B.push('<div class="paging_wrap slide_box">');
            B.push('<ul class="clearfix" style="margin-left: 0px;">');
            for (var q = 0; q < t; q++) {
                var y = I[q];
                var A = y.samMemberPrice ? 1 : 0;
                D.push(y.pmId);
                B.push('<li class="">');
                B.push('<a class="pic" title="' + y.cnName + '" href="' + y.linkUrl + '" target="_blank" data-ref="' + p + "_" + y.productId + "_" + q + '"><img src="' + m.util.hashImgUrl(y.picUrl) + '"></a>');
                B.push('<a title="' + y.cnName + '" href="' + y.linkUrl + '" target="_blank" class="pro_name" data-ref="' + p + "_" + y.productId + "_" + q + '">' + y.cnName + "</a>");
                if (!A) {
                    B.push('<p class="price" data-productId="' + y.pmId + '"><strong>¥' + y.salePrice + "</strong></p>")
                } else {
                    B.push('<p class="price sam_price" data-productId="' + y.pmId + '" data-samFlag="1"><strong>¥' + y.samMemberPrice + "</strong><em></em></p>")
                }
                var w = y.promotions;
                if (w && w.length > 0) {
                    var E = w[0];
                    B.push('<p class="prolist_link"><a target="_blank" href="' + E.linkUrl + '" title="' + E.name + '" data-ref="' + z + "_" + y.productId + "_" + E.id + '">' + E.name + "</a></p>")
                } else {
                    B.push('<p class="prolist_link"><a></a></p>')
                }
                if (y.buttonType == 2 && !A) {
                    var s = 2;
                    if (y.pmId) {
                        s = y.pmId
                    }
                    B.push('<p class="glbtn"><a onclick="gotracker(' + s + ",'" + p + "Btn_" + q + "','" + y.productId + "');addToCart(event,'" + y.productId + "','" + y.merchantId + "','" + y.shoppingCount + "',false,'" + p + "Btn_0');\">加入购物车</a></p>")
                } else {
                    B.push('<p class="glbtn"><a href="' + y.linkUrl + '" target="_blank" data-ref="' + p + "_" + y.productId + "_" + q + '">查看详情</a></p>')
                }
                B.push('<div class="pro_label clearfix">');
                var P = y.guideProperties;
                var J = P.length;
                if (P && J > 0) {
                    for (var F = 0; F < J; F++) {
                        var H = P[F];
                        var u = r + "_" + y.productId + "_" + H.id;
                        B.push('<span><a target="_blank" href="' + H.linkUrl + '" title="' + H.name + '" data-ref="' + u + '">' + H.name + "</a></span>")
                    }
                }
                B.push("</div>");
                B.push("</li>")
            }
            B.push("</ul>");
            B.push("</div>");
            B.push('<a href="javascript:;" class="next" style="display: block;">下一页</a>');
            var N;
            if (l.showBigWideScreen) {
                N = parseInt((t - 1) / 6) + 1
            } else {
                if (l.showWideScreen) {
                    N = parseInt((t - 1) / 5) + 1
                } else {
                    N = parseInt((t - 1) / 4) + 1
                }
            }
            B.push('<em class="page_num"><i class="cur_page">1</i>/<span>' + N + "</span></em>");
            B.push("</div></div></div></div>");
            C.html(B.join(""));
            C.addClass("browse_related_wrap mt");
            g.loadFun(C);
            gotracker("2", O);
            i(D)
        };
        var i = function(s) {
            var u = "";
            var p = URLPrefix.busystock ? URLPrefix.busystock : "http://gps.yhd.com";
            if (s.length < 1) {
                return
            }
            for (var r = 0; r < s.length; r++) {
                u += "&pmIds=" + s[r]
            }
            try {
                var q = p + "/restful/promotion?mcsite=" + currSiteId + "&provinceId=" + d + u + "&callback=?";
                jQuery.getJSON(q, function(v) {
                    if (!v || v.ERROR) {
                        return
                    }
                    jQuery.each(v, function(z, x) {
                        var y = jQuery("#globalBottomBrowseRelated p[data-productId='" + x.pmId + "']");
                        if (y && y.attr("data-samFlag") != "1") {
                            var w = "¥" + x.price;
                            y.find("b").text(w);
                            y.find("strong").text(w)
                        }
                    })
                })
            } catch (t) {
            }
        };
        var n = function(q, s) {
            var p = jQuery(q).offset().top;
            if (k() < p) {
                var r = function() {
                    if (k() >= jQuery(q).offset().top) {
                        s();
                        a(window).unbind("scroll", r)
                    }
                };
                a(window).bind("scroll", r)
            } else {
                s()
            }
        };
        var k = function() {
            var t = document, p = t.documentElement, s = t.body, q = Math.max(p.scrollTop, s.scrollTop), r = p.clientHeight + q;
            return r
        };
        var g = {browseRelatedHover: function() {
                var p = a("#globalBottomBrowseRelated").find(".browse_related_list .slide_box");
                p.delegate("li", "mouseover", function() {
                    a(this).addClass("cur").siblings("li").removeClass("cur")
                });
                p.delegate("li", "mouseout", function() {
                    p.find("li").removeClass("cur")
                })
            }, bottomRecmdSlide: function(p, w) {
                var p = a(p), v = p.find(".prev"), z = p.find(".next"), q = p.find(".cur_page"), y = p.find("ul"), x = y.find("li"), s = Math.ceil(p.find(".paging_wrap").width() / x.outerWidth(true)), B = Math.ceil(x.length / s), u = x.outerWidth(true) * s, A = 0, t = p.find(".turn").find("span"), r;
                if (B > 1) {
                    z.addClass("next_clickable")
                }
                p.delegate(".next_clickable", "click", function() {
                    A++;
                    r(A)
                });
                p.delegate(".prev_clickable", "click", function() {
                    A--;
                    r(A)
                });
                p.delegate(".turn span", "click", function() {
                    var D = a(this), C = D.index();
                    if (!D.hasClass("cur")) {
                        r(C)
                    }
                });
                r = function(C) {
                    q.text(C + 1);
                    t.removeClass("cur");
                    t.eq(C).addClass("cur");
                    if (C == 0) {
                        v.removeClass("prev_clickable");
                        z.addClass("next_clickable")
                    } else {
                        if (C == (B - 1)) {
                            v.addClass("prev_clickable");
                            z.removeClass("next_clickable")
                        } else {
                            v.addClass("prev_clickable");
                            z.addClass("next_clickable")
                        }
                    }
                    y.animate({marginLeft: -u * C}, w)
                }
            }, loadFun: function() {
                g.browseRelatedHover();
                g.bottomRecmdSlide("#browseHistory", 500);
                g.bottomRecmdSlide("#alsoBuyBox", 500)
            }};
        var m = window.loli || (window.loli = {});
        m.app = m.app || {};
        var c = m.app.pms = m.app.pms || {};
        c.loadBottomBrowseRelated = f;
        c.loadBottomBrowseRelated()
    })
})(jQuery);
var glaCookieHandler = {};
(function(n) {
    var w = function(a) {
        var d = document.cookie;
        var c = d.split("; ");
        for (var e = 0; e < c.length; e++) {
            var b = c[e].split("=");
            if (b[0] == a) {
                return b[1]
            }
        }
        return null
    };
    var o = "gla";
    var n = n || {}, z = w("provinceId"), x = w(o);
    var p = {p_1: "-10", p_2: "-20", p_3: "-30", p_4: "25", p_5: "37", p_6: "50", p_7: "-40", p_8: "62", p_9: "75", p_10: "88", p_11: "97", p_12: "111", p_13: "133", p_14: "150", p_15: "159", p_16: "170", p_17: "187", p_18: "205", p_19: "222", p_20: "237", p_21: "258", p_22: "274", p_23: "294", p_24: "303", p_25: "320", p_26: "327", p_27: "337", p_28: "351", p_29: "359", p_30: "377", p_32: "387"};
    function v() {
        var a = u();
        if (a && a.provinceId) {
            return a.provinceId
        } else {
            return z
        }
    }
    function q() {
        var a = u();
        if (a && a.cityId) {
            return a.provinceId
        }
        return null
    }
    function y() {
        var b = false;
        var a = u();
        if (z && a && a.provinceId && a.provinceId == z) {
            b = true
        }
        return b
    }
    function u() {
        if (!x) {
            return null
        }
        var c = {};
        var b = x.split("_");
        var a = b[0].split(".");
        if (a.length < 2) {
            return null
        }
        c.provinceId = a[0];
        c.cityId = a[1];
        c.hasUnionSite = false;
        if (b.length > 1 && b[1] != "0") {
            c.hasUnionSite = true;
            c.unionSiteDomain = b[1]
        }
        c.willingToUnionSite = 1;
        if (b.length > 2 && b[2] == "0") {
            c.willingToUnionSite = 0
        }
        if (b.length > 3 && b[3] == "1") {
            c.isMain = 1
        }
        return c
    }
    function r(c) {
        if (!c || !c.provinceId) {
            return
        }
        if (!c.cityId) {
            c.cityId = p["p_" + c.provinceId]
        }
        var a = [];
        a.push(c.provinceId + "." + c.cityId);
        if (c.unionSiteDomain) {
            a.push(c.unionSiteDomain);
            if (c.willingToUnionSite && c.willingToUnionSite != "0") {
                a.push(1)
            } else {
                a.push(0)
            }
        } else {
            a.push(0)
        }
        if (c.isMain) {
            a.push(1)
        } else {
            a.push(0)
        }
        var b = new Date();
        b.setTime(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
        document.cookie = o + "=" + a.join("_") + ";path=/;domain=." + no3wUrl + ";expires=" + b.toGMTString()
    }
    function t(b) {
        if (!b || !b.provinceId) {
            return
        }
        r(b);
        var a = new Date();
        a.setTime(new Date().getTime() + 800 * 24 * 60 * 60 * 1000);
        document.cookie = "provinceId=" + b.provinceId + ";path=/;domain=." + no3wUrl + ";expires=" + a.toGMTString()
    }
    function s() {
        var b = "";
        if (y()) {
            var a = u();
            if (a && a.unionSiteDomain && a.willingToUnionSite) {
                b = a.unionSiteDomain
            }
        }
        return b
    }
    n.glaCookieKey = o;
    n.defaultCityObj = p;
    n.analysisGla = u;
    n.genGlaCookie = r;
    n.gotoUnionSite = s;
    n.getCookie = w;
    n.check2ProvinceIsSame = y;
    n.resetGlaAndProvinceCookie = t;
    n.getProvinceId = v
})(glaCookieHandler);