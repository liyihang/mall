/* SVN.committedRevision=1547413 */
(function(v) {
    if (/1\.(0|1|2)\.(0|1|2)/.test(v.fn.jquery) || /^1.1/.test(v.fn.jquery)) {
    }
    v.fn._fadeIn = v.fn.fadeIn;
    var B = function() {
    };
    var u = document.documentMode || 0;
    var z = v.browser.msie && ((v.browser.version < 8 && !u) || u < 8);
    var y = v.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !u;
    v.blockUI = function(a) {
        A(window, a)
    };
    v.unblockUI = function(a) {
        w(window, a)
    };
    v.growlUI = function(a, c, b, e) {
        var d = v('<div class="growlUI"></div>');
        if (a) {
            d.append("<h1>" + a + "</h1>")
        }
        if (c) {
            d.append("<h2>" + c + "</h2>")
        }
        if (b == undefined) {
            b = 3000
        }
        v.blockUI({message: d, fadeIn: 700, fadeOut: 1000, centerY: false, timeout: b, showOverlay: false, onUnblock: e, css: v.blockUI.defaults.growlCSS})
    };
    v.fn.block = function(a) {
        return this.unblock({fadeOut: 0}).each(function() {
            if (v.css(this, "position") == "static") {
                this.style.position = "relative"
            }
            if (v.browser.msie) {
                this.style.zoom = 1
            }
            A(this, a)
        })
    };
    v.fn.unblock = function(a) {
        return this.each(function() {
            w(this, a)
        })
    };
    v.blockUI.version = 2.33;
    v.blockUI.defaults = {message: "<h1>Please wait...</h1>", title: null, draggable: true, theme: false, css: {padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait"}, themedCSS: {width: "30%", top: "40%", left: "35%"}, overlayCSS: {backgroundColor: "#000", opacity: 0.6, cursor: "wait"}, growlCSS: {width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: 0.6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px"}, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: false, baseZ: 1000, centerX: true, centerY: true, allowBodyStretch: true, bindEvents: true, constrainTabKey: true, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: true, focusInput: true, applyPlatformOpacityRules: true, onBlock: null, onUnblock: null, quirksmodeOffsetHack: 4};
    var C = null;
    var x = [];
    function A(U, Q) {
        var Y = (U == window);
        var l = Q && Q.message !== undefined ? Q.message : undefined;
        Q = v.extend({}, v.blockUI.defaults, Q || {});
        Q.overlayCSS = v.extend({}, v.blockUI.defaults.overlayCSS, Q.overlayCSS || {});
        var T = v.extend({}, v.blockUI.defaults.css, Q.css || {});
        var c = v.extend({}, v.blockUI.defaults.themedCSS, Q.themedCSS || {});
        l = l === undefined ? Q.message : l;
        if (Y && C) {
            w(window, {fadeOut: 0})
        }
        if (l && typeof l != "string" && (l.parentNode || l.jquery)) {
            var j = l.jquery ? l[0] : l;
            var a = {};
            v(U).data("blockUI.history", a);
            a.el = j;
            a.parent = j.parentNode;
            a.display = j.style.display;
            a.position = j.style.position;
            if (a.parent) {
                a.parent.removeChild(j)
            }
        }
        var W = Q.baseZ;
        var d = (v.browser.msie || Q.forceIframe) ? v('<iframe class="blockUI" style="z-index:' + (W++) + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + Q.iframeSrc + '"></iframe>') : v('<div class="blockUI" style="display:none"></div>');
        var e = v('<div class="blockUI blockOverlay" style="z-index:' + (W++) + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
        var f, m;
        if (Q.theme && Y) {
            m = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + W + ';display:none;position:fixed"><div class="ui-widget-header ui-dialog-titlebar blockTitle">' + (Q.title || "&nbsp;") + '</div><div class="ui-widget-content ui-dialog-content"></div></div>'
        } else {
            if (Q.theme) {
                m = '<div class="blockUI blockMsg blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + W + ';display:none;position:absolute"><div class="ui-widget-header ui-dialog-titlebar blockTitle">' + (Q.title || "&nbsp;") + '</div><div class="ui-widget-content ui-dialog-content"></div></div>'
            } else {
                if (Y) {
                    m = '<div class="blockUI blockMsg blockPage" style="z-index:' + W + ';display:none;position:fixed"></div>'
                } else {
                    m = '<div class="blockUI blockMsg blockElement" style="z-index:' + W + ';display:none;position:absolute"></div>'
                }
            }
        }
        f = v(m);
        if (l) {
            if (Q.theme) {
                f.css(c);
                f.addClass("ui-widget-content")
            } else {
                f.css(T)
            }
        }
        if (!Q.applyPlatformOpacityRules || !(v.browser.mozilla && /Linux/.test(navigator.platform))) {
            e.css(Q.overlayCSS)
        }
        e.css("position", Y ? "fixed" : "absolute");
        if (v.browser.msie || Q.forceIframe) {
            d.css("opacity", 0)
        }
        var h = [d, e, f], b = Y ? v("body") : v(U);
        v.each(h, function() {
            this.appendTo(b)
        });
        if (Q.theme && Q.draggable && v.fn.draggable) {
            f.draggable({handle: ".ui-dialog-titlebar", cancel: "li"})
        }
        var n = z && (!v.boxModel || v("object,embed", Y ? null : U).length > 0);
        if (y || n) {
            if (Y && Q.allowBodyStretch && v.boxModel) {
                v("html,body").css("height", "100%")
            }
            if ((y || !v.boxModel) && !Y) {
                var R = r(U, "borderTopWidth"), g = r(U, "borderLeftWidth");
                var i = R ? "(0 - " + R + ")" : 0;
                var S = g ? "(0 - " + g + ")" : 0
            }
            v.each([d, e, f], function(F, E) {
                var I = E[0].style;
                I.position = "absolute";
                if (F < 2) {
                    Y ? I.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:" + Q.quirksmodeOffsetHack + ') + "px"') : I.setExpression("height", 'this.parentNode.offsetHeight + "px"');
                    Y ? I.setExpression("width", 'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : I.setExpression("width", 'this.parentNode.offsetWidth + "px"');
                    if (S) {
                        I.setExpression("left", S)
                    }
                    if (i) {
                        I.setExpression("top", i)
                    }
                } else {
                    if (Q.centerY) {
                        if (Y) {
                            I.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')
                        }
                        I.marginTop = 0
                    } else {
                        if (!Q.centerY && Y) {
                            var H = (Q.css && Q.css.top) ? parseInt(Q.css.top) : 0;
                            var G = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + H + ') + "px"';
                            I.setExpression("top", G)
                        }
                    }
                }
            })
        }
        if (l) {
            if (Q.theme) {
                f.find(".ui-widget-content").append(l)
            } else {
                f.append(l)
            }
            if (l.jquery || l.nodeType) {
                v(l).show()
            }
        }
        if ((v.browser.msie || Q.forceIframe) && Q.showOverlay) {
            d.show()
        }
        if (Q.fadeIn) {
            var k = Q.onBlock ? Q.onBlock : B;
            var V = (Q.showOverlay && !l) ? k : B;
            var X = l ? k : B;
            if (Q.showOverlay) {
                e._fadeIn(Q.fadeIn, V)
            }
            if (l) {
                f._fadeIn(Q.fadeIn, X)
            }
        } else {
            if (Q.showOverlay) {
                e.show()
            }
            if (l) {
                f.show()
            }
            if (Q.onBlock) {
                Q.onBlock()
            }
        }
        s(1, U, Q);
        if (Y) {
            C = f[0];
            x = v(":input:enabled:visible", C);
            if (Q.focusInput) {
                setTimeout(p, 20)
            }
        } else {
            D(f[0], Q.centerX, Q.centerY)
        }
        if (Q.timeout) {
            var o = setTimeout(function() {
                Y ? v.unblockUI(Q) : v(U).unblock(Q)
            }, Q.timeout);
            v(U).data("blockUI.timeout", o)
        }
    }
    function w(d, c) {
        var e = (d == window);
        var f = v(d);
        var b = f.data("blockUI.history");
        var a = f.data("blockUI.timeout");
        if (a) {
            clearTimeout(a);
            f.removeData("blockUI.timeout")
        }
        c = v.extend({}, v.blockUI.defaults, c || {});
        s(0, d, c);
        var g;
        if (e) {
            g = v("body").children().filter(".blockUI").add("body > .blockUI")
        } else {
            g = v(".blockUI", d)
        }
        if (e) {
            C = x = null
        }
        if (c.fadeOut) {
            g.fadeOut(c.fadeOut);
            setTimeout(function() {
                t(g, b, c, d)
            }, c.fadeOut)
        } else {
            t(g, b, c, d)
        }
    }
    function t(d, a, b, c) {
        d.each(function(f, e) {
            if (this.parentNode) {
                this.parentNode.removeChild(this)
            }
        });
        if (a && a.el) {
            a.el.style.display = a.display;
            a.el.style.position = a.position;
            if (a.parent) {
                a.parent.appendChild(a.el)
            }
            v(c).removeData("blockUI.history")
        }
        if (typeof b.onUnblock == "function") {
            b.onUnblock(c, b)
        }
    }
    function s(f, b, a) {
        var c = b == window, d = v(b);
        if (!f && (c && !C || !c && !d.data("blockUI.isBlocked"))) {
            return
        }
        if (!c) {
            d.data("blockUI.isBlocked", f)
        }
        if (!a.bindEvents || (f && !a.showOverlay)) {
            return
        }
        var e = "mousedown mouseup keydown keypress";
        f ? v(document).bind(e, a, q) : v(document).unbind(e, q)
    }
    function q(a) {
        if (a.keyCode && a.keyCode == 9) {
            if (C && a.data.constrainTabKey) {
                var b = x;
                var c = !a.shiftKey && a.target == b[b.length - 1];
                var d = a.shiftKey && a.target == b[0];
                if (c || d) {
                    setTimeout(function() {
                        p(d)
                    }, 10);
                    return false
                }
            }
        }
        if (v(a.target).parents("div.blockMsg").length > 0) {
            return true
        }
        return v(a.target).parents().children().filter("div.blockUI").length == 0
    }
    function p(b) {
        if (!x) {
            return
        }
        var a = x[b === true ? x.length - 1 : 0];
        if (a) {
            a.focus()
        }
    }
    function D(b, f, a) {
        var g = b.parentNode, c = b.style;
        var e = ((g.offsetWidth - b.offsetWidth) / 2) - r(g, "borderLeftWidth");
        var d = ((g.offsetHeight - b.offsetHeight) / 2) - r(g, "borderTopWidth");
        if (f) {
            c.left = e > 0 ? (e + "px") : "0"
        }
        if (a) {
            c.top = d > 0 ? (d + "px") : "0"
        }
    }
    function r(b, a) {
        return parseInt(v.css(b, a)) || 0
    }}
)(jQuery);
eval(function(h, d, i, b, g, f) {
    g = function(a) {
        return(a < d ? "" : g(parseInt(a / d))) + ((a = a % d) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (i--) {
            f[g(i)] = b[i] || g(i)
        }
        b = [function(a) {
                return f[a]
            }];
        g = function() {
            return"\\w+"
        };
        i = 1
    }
    while (i--) {
        if (b[i]) {
            h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), b[i])
        }
    }
    return h
}("6(3v.b&&!3v.b.3w){(7(b){9 j=7(s,H,m){5.1g=[];5.1D={};5.2J=u;5.1W={};5.1h={};5.m=b.1i({1X:1b,3x:1x,2K:1b,2L:1b,3y:1x,3z:1x},m);5.1E=(5.m.1E!==D)?(5.m.1E):(R.2g);5.13=(5.m.13!==D)?(5.m.13):(R.3A);5.2h=(5.m.2h!==D)?(5.m.2h):((5.m.1X)?(b.2M):(R.2M));6(s==u){c}5.3B(s,H);6(s){5.1F(5.1h['2i'],H,5.m)}5.1h=u};j.4j='0.8.3';j.J=1b;j.3C=4k;j.1y=0;j.z.3B=7(s,H){9 2N=/\\{#1c *(\\w+) *(.*?) *\\}/g,2j,1G,U,1H=u,2O=[],i;2P((2j=2N.4l(s))!==u){1H=2N.1H;1G=2j[1];U=s.1Y('{#/1c '+1G+'}',1H);6(U===-1){E p V('14: j \"'+1G+'\" 2Q 2k 4m.');}5.1h[1G]=s.1Z(1H,U);2O[1G]=R.2R(2j[2])}6(1H===u){5.1h['2i']=s;c}K(i 2l 5.1h){6(i!=='2i'){5.1W[i]=p j()}}K(i 2l 5.1h){6(i!=='2i'){5.1W[i].1F(5.1h[i],b.1i({},H||{},5.1W||{}),b.1i({},5.m,2O[i]));5.1h[i]=u}}};j.z.1F=7(s,H,m){6(s==D){5.1g.x(p 1p('',1,5));c}s=s.15(/[\\n\\r]/g,'');s=s.15(/\\{\\*.*?\\*\\}/g,'');5.2J=b.1i({},5.1W||{},H||{});5.m=p 2m(m);9 A=5.1g,20=s.1j(/\\{#.*?\\}/g),1d=0,U=0,e,1q=0,i,l;K(i=0,l=(20)?(20.X):(0);i<l;++i){9 Z=20[i];6(1q){U=s.1Y('{#/1I}');6(U===-1){E p V(\"14: 4n 21 3D 1I.\");}6(U>1d){A.x(p 1p(s.1Z(1d,U),1,5))}1d=U+11;1q=0;i=b.4o('{#/1I}',20);22}U=s.1Y(Z,1d);6(U>1d){A.x(p 1p(s.1Z(1d,U),1q,5))}Z.1j(/\\{#([\\w\\/]+).*?\\}/);9 2n=L.$1;2S(2n){B'4p':A.2T(Z);F;B'6':e=p 1z(A,5);e.2T(Z);A.x(e);A=e;F;B'W':A.2U();F;B'/6':B'/K':B'/2V':A=A.2W();F;B'2V':e=p 1A(Z,A,5);A.x(e);A=e;F;B'K':e=3E(Z,A,5);A.x(e);A=e;F;B'22':B'F':A.x(p 16(2n));F;B'2X':A.x(p 2Y(Z,5.2J,5));F;B'h':A.x(p 2Z(Z,5));F;B'9':A.x(p 30(Z,5));F;B'31':A.x(p 32(Z));F;B'4q':A.x(p 1p('{',1,5));F;B'4r':A.x(p 1p('}',1,5));F;B'1I':1q=1;F;B'/1I':6(j.J){E p V(\"14: 4s 33 3D 1I.\");}F;3F:6(j.J){E p V('14: 4t 4u: '+2n+'.');}}1d=U+Z.X}6(s.X>1d){A.x(p 1p(s.3G(1d),1q,5))}};j.z.M=7(d,h,q,I){++I;6(I==1&&q!=D){b.34(q,\"2o\")}9 $T=d,$P,17='';6(5.m.3y){$T=5.1E(d,{2p:(5.m.3x&&I==1),23:5.m.1X},5.13)}6(!5.m.3z){$P=b.1i({},5.1D,h)}W{$P=b.1i({},5.1E(5.1D,{2p:(5.m.2K),23:1b},5.13),5.1E(h,{2p:(5.m.2K&&I==1),23:1b},5.13))}K(9 i=0,l=5.1g.X;i<l;++i){17+=5.1g[i].M($T,$P,q,I)}5.2q=u;--I;c 17};j.z.10=7(){6(5.2q==u){5.2q=p 2r(5)}c 5.2q};j.z.35=7(24,1B){5.1D[24]=1B};R=7(){};R.3A=7(3H){c 3H.15(/&/g,'&4v;').15(/>/g,'&3I;').15(/</g,'&3J;').15(/\"/g,'&4w;').15(/'/g,'&#39;')};R.2g=7(d,1J,13){6(d==u){c d}2S(d.36){B 2m:9 o={};K(9 i 2l d){o[i]=R.2g(d[i],1J,13)}6(!1J.23){6(d.4x(\"37\")){o.37=d.37}}c o;B 4y:9 a=[];K(9 i=0,l=d.X;i<l;++i){a[i]=R.2g(d[i],1J,13)}c a;B 38:c(1J.2p)?(13(d)):(d);B 3K:6(1J.23){6(j.J){E p V(\"14: 4z 4A 2k 4B.\");}W{c D}}}c d};R.2R=7(2s){6(2s===u||2s===D){c{}}9 o=2s.4C(/[= ]/);6(o[0]===''){o.4D()}9 25={};K(9 i=0,l=o.X;i<l;i+=2){25[o[i]]=o[i+1]}c 25};R.2M=7(G){6(1K G!==\"4E\"||!G){c u}1k{c(p 3K(\"c \"+b.3L(G)))()}1l(e){6(j.J){E p V(\"14: 4F 4G\");}c{}}};R.3M=7(26,1y,3a){2P(26!=u){9 d=b.G(26,'2o');6(d!=D&&d.1y==1y&&d.d[3a]!=D){c d.d[3a]}26=26.4H}c u};9 1p=7(3b,1q,1c){5.27=3b;5.3N=1q;5.O=1c};1p.z.M=7(d,h,q,I){6(5.3N){c 5.27}9 s=5.27;9 18=\"\";9 i=-1;9 28=0;9 29=-1;9 1L=0;2P(1x){9 1M=s.1Y(\"{\",i+1);9 1N=s.1Y(\"}\",i+1);6(1M<0&&1N<0){F}6((1M!=-1&&1M<1N)||(1N==-1)){i=1M;6(++28==1){29=1M;18+=s.1Z(1L,i);1L=-1}}W{i=1N;6(--28===0){6(29>=0){18+=5.O.10().3O(d,h,q,s.1Z(29,1N+1));29=-1;1L=i+1}}W 6(28<0){28=0}}}6(1L>-1){18+=s.3G(1L)}c 18};2r=7(t){5.3c=t};2r.z.3O=7($T,$P,$Q,2t){1k{9 18=3d(2t);6(b.4I(18)){6(5.3c.m.1X||!5.3c.m.2L){c''}18=18($T,$P,$Q)}c(18===D)?(\"\"):(38(18))}1l(e){6(j.J){6(e 1C 16){e.1m=\"4J\"}E e;}c\"\"}};2r.z.19=7($T,$P,$Q,2t){c 3d(2t)};9 1z=7(1O,1r){5.2u=1O;5.1P=1r;5.2a=[];5.1g=[];5.1Q=u};1z.z.x=7(e){5.1Q.x(e)};1z.z.2W=7(){c 5.2u};1z.z.2T=7(N){N.1j(/\\{#(?:W)*6 (.*?)\\}/);5.2a.x(L.$1);5.1Q=[];5.1g.x(5.1Q)};1z.z.2U=7(){5.2a.x(1x);5.1Q=[];5.1g.x(5.1Q)};1z.z.M=7(d,h,q,I){9 17='';1k{K(9 2b=0,3P=5.2a.X;2b<3P;++2b){6(5.1P.10().19(d,h,q,5.2a[2b])){9 t=5.1g[2b];K(9 i=0,l=t.X;i<l;++i){17+=t[i].M(d,h,q,I)}c 17}}}1l(e){6(j.J||(e 1C 16)){E e;}}c 17};3E=7(N,1O,1c){6(N.1j(/\\{#K (\\w+?) *= *(\\S+?) +4K +(\\S+?) *(?:1a=(\\S+?))*\\}/)){9 f=p 1A(u,1O,1c);f.C=L.$1;f.Y={'33':(L.$2||0),'21':(L.$3||-1),'1a':(L.$4||1),'y':'$T'};f.3e=(7(i){c i});c f}W{E p V('14: 4L 4M \"3Q\": '+N);}};9 1A=7(N,1O,1c){5.2u=1O;5.O=1c;6(N!=u){N.1j(/\\{#2V +(.+?) +3R +(\\w+?)( .+)*\\}/);5.3S=L.$1;5.C=L.$2;5.Y=L.$3||u;5.Y=R.2R(5.Y)}5.2v=[];5.2w=[];5.3f=5.2v};1A.z.x=7(e){5.3f.x(e)};1A.z.2W=7(){c 5.2u};1A.z.2U=7(){5.3f=5.2w};1A.z.M=7(d,h,q,I){1k{9 1s=(5.3e===D)?(5.O.10().19(d,h,q,5.3S)):(5.3e);6(1s===$){E p V(\"2c: 4N '$' 4O 4P 4Q 3R 3T-7\");}9 2d=[];9 1R=1K 1s;6(1R=='3U'){9 3g=[];b.1t(1s,7(k,v){2d.x(k);3g.x(v)});1s=3g}9 y=(5.Y.y!==D)?(5.O.10().19(d,h,q,5.Y.y)):((d!=u)?(d):({}));6(y==u){y={}}9 s=2e(5.O.10().19(d,h,q,5.Y.33)||0),e;9 1a=2e(5.O.10().19(d,h,q,5.Y.1a)||1);6(1R!='7'){e=1s.X}W{6(5.Y.21===D||5.Y.21===u){e=2e.4R}W{e=2e(5.O.10().19(d,h,q,5.Y.21))+((1a>0)?(1):(-1))}}9 17='';9 i,l;6(5.Y.2f){9 3h=s+2e(5.O.10().19(d,h,q,5.Y.2f));e=(3h>e)?(e):(3h)}6((e>s&&1a>0)||(e<s&&1a<0)){9 1S=0;9 3V=(1R!='7')?(4S.4T((e-s)/1a)):D;9 1u,1n;9 3i=0;K(;((1a>0)?(s<e):(s>e));s+=1a,++1S,++3i){6(j.J&&3i>j.3C){E p V(\"2c: 4U 3T 4V 4W 4X\");}1u=2d[s];6(1R!='7'){1n=1s[s]}W{1n=1s(s);6(1n===D||1n===u){F}}6((1K 1n=='7')&&(5.O.m.1X||!5.O.m.2L)){22}6((1R=='3U')&&(1u 2l 2m)&&(1n===2m[1u])){22}9 3W=y[5.C];y[5.C]=1n;y[5.C+'$3X']=s;y[5.C+'$1S']=1S;y[5.C+'$3Y']=(1S===0);y[5.C+'$3Z']=(s+1a>=e);y[5.C+'$40']=3V;y[5.C+'$2d']=(1u!==D&&1u.36==38)?(5.O.13(1u)):(1u);y[5.C+'$1K']=1K 1n;K(i=0,l=5.2v.X;i<l;++i){1k{17+=5.2v[i].M(y,h,q,I)}1l(1T){6(1T 1C 16){2S(1T.1m){B'22':i=l;F;B'F':i=l;s=e;F;3F:E 1T;}}W{E 1T;}}}1v y[5.C+'$3X'];1v y[5.C+'$1S'];1v y[5.C+'$3Y'];1v y[5.C+'$3Z'];1v y[5.C+'$40'];1v y[5.C+'$2d'];1v y[5.C+'$1K'];1v y[5.C];y[5.C]=3W}}W{K(i=0,l=5.2w.X;i<l;++i){17+=5.2w[i].M(d,h,q,I)}}c 17}1l(e){6(j.J||(e 1C 16)){E e;}c\"\"}};9 16=7(1m){5.1m=1m};16.z=V;16.z.M=7(d){E 5;};9 2Y=7(N,H,1r){N.1j(/\\{#2X (.*?)(?: 4Y=(.*?))?\\}/);5.O=H[L.$1];6(5.O==D){6(j.J){E p V('14: 4Z 3Q 2X: '+L.$1);}}5.41=L.$2;5.42=1r};2Y.z.M=7(d,h,q,I){1k{c 5.O.M(5.42.10().19(d,h,q,5.41),h,q,I)}1l(e){6(j.J||(e 1C 16)){E e;}}c''};9 2Z=7(N,1r){N.1j(/\\{#h 24=(\\w*?) 1B=(.*?)\\}/);5.C=L.$1;5.27=L.$2;5.1P=1r};2Z.z.M=7(d,h,q,I){1k{h[5.C]=5.1P.10().19(d,h,q,5.27)}1l(e){6(j.J||(e 1C 16)){E e;}h[5.C]=D}c''};9 30=7(N,1r){N.1j(/\\{#9 (.*?)\\}/);5.43=L.$1;5.1P=1r};30.z.M=7(d,h,q,I){1k{6(q==D){c\"\"}9 25=5.1P.10().19(d,h,q,5.43);9 1U=b.G(q,\"2o\");6(1U==D){1U={1y:(++j.1y),d:[]}}9 i=1U.d.x(25);b.G(q,\"2o\",1U);c\"(R.3M(5,\"+1U.1y+\",\"+(i-1)+\"))\"}1l(e){6(j.J||(e 1C 16)){E e;}c''}};9 32=7(N){N.1j(/\\{#31 50=(.*?)\\}/);5.3j=3d(L.$1);5.3k=5.3j.X;6(5.3k<=0){E p V('14: 51 52 K 31');}5.3l=0;5.3m=-1};32.z.M=7(d,h,q,I){9 3n=b.G(q,'2x');6(3n!=5.3m){5.3m=3n;5.3l=0}9 i=5.3l++%5.3k;c 5.3j[i]};b.1e.1F=7(s,H,m){c b(5).1t(7(){9 t=(s&&s.36==j)?s:p j(s,H,m);b.G(5,'2c',t);b.G(5,'2x',0)})};b.1e.53=7(1V,H,m){9 s=b.2y({1w:1V,2z:'2A',2B:1b,1m:'44'}).45;c b(5).1F(s,H,m)};b.1e.54=7(3o,H,m){9 s=b('#'+3o).3b();6(s==u){s=b('#'+3o).46();s=s.15(/&3J;/g,\"<\").15(/&3I;/g,\">\")}s=b.3L(s);s=s.15(/^<\\!\\[55\\[([\\s\\S]*)\\]\\]>$/47,'$1');s=s.15(/^<\\!--([\\s\\S]*)-->$/47,'$1');c b(5).1F(s,H,m)};b.1e.56=7(){9 2f=0;b(5).1t(7(){6(b.2C(5)){++2f}});c 2f};b.1e.57=7(){b(5).48();c b(5).1t(7(){b.34(5,'2c')})};b.1e.35=7(24,1B){c b(5).1t(7(){9 t=b.2C(5);6(t!=u){t.35(24,1B)}W 6(j.J){E p V('14: j 2Q 2k 49.');}})};b.1e.3p=7(d,h,1o){c b(5).1t(7(){9 t=b.2C(5);6(t!=u){6(1o!=D&&1o.3q){d=t.2h(d)}b.G(5,'2x',b.G(5,'2x')+1);b(5).46(t.M(d,h,5,0))}W 6(j.J){E p V('14: j 2Q 2k 49.');}})};b.1e.58=7(1V,h,1o){9 12=5;9 o=b.1i({2D:1b},b.59);o=b.1i(o,1o);b.2y({1w:1V,1m:o.1m,G:o.G,4a:o.4a,2B:o.2B,2D:o.2D,4b:o.4b,2z:'2A',4c:7(d){9 r=b(12).3p(d,h,{3q:1x});6(o.2E){o.2E(r)}},5a:o.5b,5c:o.5d});c 5};9 3r=7(1w,h,2F,2G,1f,1o){5.4d=1w;5.1D=h;5.4e=2F;5.4f=2G;5.1f=1f;5.4g=u;5.3s=1o||{};9 12=5;b(1f).1t(7(){b.G(5,'3t',12)});5.3u()};3r.z.3u=7(){5.1f=b.4h(5.1f,7(2H){c(b.5e(5f.5g,2H.5h?2H[0]:2H))});6(5.1f.X===0){c}9 12=5;b.2y({1w:5.4d,2z:'2A',G:5.4f,2D:1b,4c:7(d){1k{9 r=b(12.1f).3p(d,12.1D,{3q:1x});6(12.3s.2E){12.3s.2E(r)}}1l(1T){}}});5.4g=5i(7(){12.3u()},5.4e)};b.1e.5j=7(1w,h,2F,2G,1o){c p 3r(1w,h,2F,2G,5,1o)};b.1e.48=7(){c b(5).1t(7(){9 2I=b.G(5,'3t');6(2I==u){c}9 12=5;2I.1f=b.4h(2I.1f,7(o){c o!=12});b.34(5,'3t')})};b.1i({3w:7(s,H,m){c p j(s,H,m)},5k:7(1V,H,m){9 s=b.2y({1w:1V,2z:'2A',2B:1b,1m:'44'}).45;c p j(s,H,m)},2C:7(q){c b.G(q,'2c')},5l:7(1c,G,4i){c 1c.M(G,4i,D,0)},5m:7(1B){j.J=1B}})})(b)};", 62, 333, "|||||this|if|function||var||jQuery|return|||||param||Template|||settings|||new|element||||null|||push|extData|prototype|node|case|_name|undefined|throw|break|data|includes|deep|DEBUG_MODE|for|RegExp|get|oper|_template|||TemplateUtils|||se|Error|else|length|_option|this_op|getBin||that|f_escapeString|jTemplates|replace|JTException|ret|result|evaluate|step|false|template|ss|fn|objs|_tree|_templates_code|extend|match|try|catch|type|cval|options|TextNode|literalMode|templ|fcount|each|ckey|delete|url|true|guid|opIF|opFOREACH|value|instanceof|_param|f_cloneData|setTemplate|tname|lastIndex|literal|filter|typeof|sExpr|lm|rm|par|_templ|_curr|mode|iteration|ex|refobj|url_|_templates|disallow_functions|indexOf|substring|op|end|continue|noFunc|name|obj|el|_value|nested|sText|_cond|ci|jTemplate|key|Number|count|cloneData|f_parseJSON|MAIN|iter|not|in|Object|op_|jTemplatesRef|escapeData|EvalObj|EvalClass|optionText|__value|_parent|_onTrue|_onFalse|jTemplateSID|ajax|dataType|text|async|getTemplate|cache|on_success|interval|args|elem|updater|_includes|filter_params|runnable_functions|parseJSON|reg|_template_settings|while|is|optionToObject|switch|addCond|switchToElse|foreach|getParent|include|Include|UserParam|UserVariable|cycle|Cycle|begin|removeData|setParam|constructor|toString|String||id|val|__templ|eval|_runFunc|_currentState|arr|tmp|loopCounter|_values|_length|_index|_lastSessionID|sid|elementName|processTemplate|StrToJSON|Updater|_options|jTemplateUpdater|run|window|createTemplate|filter_data|clone_data|clone_params|escapeHTML|splitTemplates|FOREACH_LOOP_LIMIT|of|opFORFactory|default|substr|txt|gt|lt|Function|trim|ReturnRefValue|_literalMode|evaluateContent|cl|find|as|_arg|loop|object|_total|prevValue|index|first|last|total|_root|_mainTempl|_id|GET|responseText|html|im|processTemplateStop|defined|dataFilter|timeout|success|_url|_interval|_args|timer|grep|parameter|version|10000|exec|closed|No|inArray|elseif|ldelim|rdelim|Missing|unknown|tag|amp|quot|hasOwnProperty|Array|Functions|are|allowed|split|shift|string|Invalid|JSON|parentNode|isFunction|subtemplate|to|Operator|failed|Variable|cannot|be|used|MAX_VALUE|Math|ceil|Foreach|limit|was|exceed|root|Cannot|values|no|elements|setTemplateURL|setTemplateElement|CDATA|hasTemplate|removeTemplate|processTemplateURL|ajaxSettings|error|on_error|complete|on_complete|contains|document|body|jquery|setTimeout|processTemplateStart|createTemplateURL|processTemplateToText|jTemplatesDebugMode".split("|"), 0, {}));
var returnUrl = document.location.href;
function checkLogin() {
    if (getCookie("seus")) {
        return true
    } else {
        return false
    }
}
function getCookie(c) {
    var d = document.cookie.split(";");
    for (var b = 0; b < d.length; b++) {
        var a = d[b].split("=");
        if (a[0].replace(/(^\s*)|(\s*$)/g, "") == c) {
            return a[1]
        }
    }
    return""
}
;
var kxtimer;
var KX001 = {appkey: "", receiver: "", timer: "", kxbtn: "", starid: "", ckname: "kx_connect_session_key", curl: "http://www.kaixin001.com/login/connect.php", isIE: (navigator.appVersion.indexOf("MSIE") != -1) ? true : false, init: function(b, c, e, a, d) {
        this.appkey = b;
        this.receiver = c;
        this.kxbtn = document.getElementById("kx001_btn_login");
        if (typeof (e) != "undefined" && e) {
            this.btntext = e
        } else {
            this.btntext = unescape("%u767B%u5F55")
        }
        if (typeof (a) != "undefined" && a) {
            this.btnlogout = a
        } else {
            this.btnlogout = unescape("%u9000%u51FA")
        }
        if (typeof (d) != "undefined" && d) {
            this.nostyle = true
        } else {
            this.nostyle = false
        }
        this.setEvent()
    }, setStarId: function(a) {
        this.starid = a;
        this.kxbtn.href += "&starid=" + escape(a)
    }, getCookie: function() {
        var c = this.getDomain();
        if (c) {
            document.domain = c
        }
        var a, b = new RegExp("(^| )" + this.ckname + "=([^;]*)(;|$)");
        if (a = document.cookie.match(b)) {
            return unescape(a[2])
        } else {
            return null
        }
    }, getDomain: function() {
        var a = window.location.host;
        a = a.split(".");
        var b = "";
        if (a.length == 4) {
            b = a[1] + "." + a[2] + "." + a[3]
        } else {
            if (a.length == 3) {
                b = a[1] + "." + a[2]
            } else {
                if (a.length == 2) {
                    b = a[0] + "." + a[1]
                }
            }
        }
        return b
    }, delCookie: function() {
        var b = this.getDomain();
        if (b) {
            document.domain = b;
            b = ";domain=." + b
        }
        var c = new Date();
        c.setTime(c.getTime() - 1);
        var a = this.getCookie(this.ckname);
        if (a && typeof (a) != "undefined") {
            document.cookie = this.ckname + "='';expires=" + c.toGMTString() + ";path=/" + b
        }
    }, displayCookie: function() {
    }, setEvent: function() {
        ck = this.getCookie();
        if (ck && typeof (ck) != "undefined") {
            this.displayLogout()
        } else {
            this.displayLogin()
        }
        if (this.isIE) {
            this.kxbtn.attachEvent("onclick", this.handleLogout)
        } else {
            this.kxbtn.addEventListener("click", this.handleLogout, false)
        }
    }, handleLogout: function() {
        var a = document.getElementById("kx001_btn_login");
        tip = a.attributes.tip.nodeValue;
        if (tip == "1") {
            KX001.delCookie();
            window.setTimeout("KX001.displayLogin()", 500);
            KX001.kaixinLogout(KX001.appkey, KX001.receiver);
            if (typeof (kx001_onlogout) == "function") {
                window.setTimeout("kx001_onlogout()", 500)
            }
        }
    }, kaixinLogout: function(a, c) {
        url = "http://www.kaixin001.com/login/connect_logout.php?appkey=" + a + "&re=" + c;
        var b = document.createElement("div");
        b.innerHTML = '<iframe id="kxiframeagent" src="' + url + '" scrolling="yes" style="display:none" height="0px" width="0px"></iframe>';
        document.documentElement.appendChild(b.firstChild)
    }, handleLogin: function() {
        ck = this.getCookie();
        if (ck && typeof (ck) != "undefined") {
            this.displayLogout();
            if (typeof (kx001_onlogin) == "function") {
                kx001_onlogin()
            }
        }
    }, displayLogin: function() {
        kxtimer = window.setInterval("KX001.handleLogin()", 1000);
        this.kxbtn.href = this.curl + "?appkey=" + this.appkey + "&re=" + this.receiver + "&t=" + Math.round(Math.random() * 99);
        if (this.starid) {
            this.kxbtn.href += "&starid=" + this.starid
        }
        this.kxbtn.target = "_blank";
        if (this.nostyle) {
            this.kxbtn.innerHTML = this.btntext
        } else {
            this.kxbtn.innerHTML = "<span style='float:left;cursor:pointer;background:url(http://img1.kaixin001.com.cn/i3/platform/rlink_btn.gif) no-repeat 100% 0;padding-right:8px;height:23px;'>" + this.btntext + "</span>";
            this.kxbtn.style.background = "transparent url(http://img1.kaixin001.com.cn/i3/platform/rlink_btn.gif) no-repeat scroll 0 0";
            this.kxbtn.style.color = "#ffffff";
            this.kxbtn.style.paddingLeft = "30px";
            this.kxbtn.style.fontSize = "12px";
            this.kxbtn.style.height = "23px";
            this.kxbtn.style.lineHeight = "23px";
            this.kxbtn.style.textDecoration = "none";
            this.kxbtn.style.overflow = "hidden";
            if (this.isIE) {
                this.kxbtn.style.styleFloat = "left"
            } else {
                this.kxbtn.style.cssFloat = "left"
            }
        }
        this.kxbtn.setAttribute("tip", "0");
        return false
    }, displayLogout: function() {
        clearInterval(kxtimer);
        if (this.nostyle) {
            this.kxbtn.innerHTML = this.btnlogout
        } else {
            this.kxbtn.innerHTML = "<span style='float:left;cursor:pointer;background:url(http://img1.kaixin001.com.cn/i3/platform/rlink_btn.gif) no-repeat 100% 0;padding-right:8px;height:23px;'>" + this.btnlogout + "</span>";
            this.kxbtn.style.background = "transparent url(http://img1.kaixin001.com.cn/i3/platform/rlink_btn.gif) no-repeat scroll 0 0";
            this.kxbtn.style.color = "#ffffff";
            this.kxbtn.style.paddingLeft = "30px";
            this.kxbtn.style.fontSize = "12px";
            this.kxbtn.style.height = "23px";
            this.kxbtn.style.lineHeight = "23px";
            this.kxbtn.style.textDecoration = "none";
            this.kxbtn.style.overflow = "hidden";
            this.kxbtn.target = "_self";
            if (this.isIE) {
                this.kxbtn.style.styleFloat = "left"
            } else {
                this.kxbtn.style.cssFloat = "left"
            }
        }
        this.kxbtn.setAttribute("tip", "1");
        this.kxbtn.href = "javascript:void(0);"
    }, showRestProxyDlg: function(a, f, c, b, g, e) {
        a = a + "&r=" + Math.random();
        var d = "no";
        if (e == 1) {
            d = "yes"
        }
        if (c == 1) {
            var h = (window.screen.height - g) / 2;
            var i = (window.screen.width - b) / 2;
            window.open(a + "&uu=1", "kaixinRestDialog", "width=" + b + "px,height=" + g + "px,location=no,menubar=no,toolbar=no,scrollbars=" + d + ",resizable=no,status=no,top=" + h + "px,left=" + i + "px")
        } else {
            openKxRestWindow(a, b, g, f, e)
        }
    }};
(function() {
    var r = navigator.userAgent.toLowerCase();
    var e = (r.indexOf("opera") != -1);
    var p = "";
    var k = 0;
    var g;
    var c;
    var o;
    var a;
    function b(t) {
        return document.getElementById(t)
    }
    function q(t) {
        return b(t) != null
    }
    function d(u, t) {
        if (q(u)) {
            b(u).innerHTML = t
        }
    }
    function i() {
        if ("function" == typeof (close_dlg_callback)) {
            close_dlg_callback()
        }
        new l().close()
    }
    function l(w, u, t) {
        var v = w;
        var A = u;
        var z = t;
        p = z;
        var x = '      <div id="dialogBox" style="display:none;z-index:1999999;width:' + v + 'px;">       <div class=ts460 style="position:absolute;top:0px;width:' + v + 'px;opacity:0.4;filter:alpha(opacity=40);"><img src="http://img1.kaixin001.com.cn/i/h460_t.gif" width="' + v + '" height="8" /></div>       <div style="position:absolute;height:' + A + 'px;top:8px;" >       <table border="0" cellpadding="0" cellspacing="0">       <tr style="height:' + (A) + 'px;"><td style="background:#000000;width:7px;opacity:0.4;filter:alpha(opacity=40);"></td>       <td style="width:' + (v - 14) + 'px;">        <div style="border:1px solid #565656;">        <table width="100%" border="0" cellpadding="0" cellspacing="0">        ';
        var C = '<a style="color:#F6D2D8;text-decoration:none;" href="javascript:_closeKxRestDialog();"><b>脳</b></a>';
        x += '        <tr height="24" bgcolor="#6795B4">         <td>          <div style="background:#D01E3B none repeat scroll 0 0;border-bottom:1px solid #565656;font-weight:bold;height:25px;" >           <div id="dialogBoxTitle" style="color:#FFFFFF;float:left;font-size:13px;padding:3px 8px;">' + z + '</div>           <div id="dialogClose" style="float:right;padding:2px 3px;">' + C + '</div>          </div>         </td>        </tr>        <tr valign="top">         <td id="dialogBody" style="height:' + (A - 28) + 'px" bgcolor="#ffffff"></td>        </tr>     ';
        x += '        </table>        </div>       </td>       <td style="background:#000000;width:7px;opacity:0.4;filter:alpha(opacity=40);"></td></tr>       </table>       </div>       <div class=ts460 style="position:absolute;top:' + parseInt(A + 8) + "px;width:" + v + 'px;opacity:0.4;filter:alpha(opacity=40);"><img src="http://img1.kaixin001.com.cn/i/h460_b.gif" width="' + v + '" height="8" /></div>      </div><div id="dialogBoxShadow" style="display:none;z-index:19998;"></div>     ';
        var y = '      <iframe id="dialogIframBG" name="dialogIframBG" frameborder="0" marginheight="0" marginwidth="0" hspace="0" vspace="0" scrolling="no" style="position:absolute;z-index:19997;display:none;"></iframe>     ';
        var B = '      <div id="dialogBoxBG" style="position:absolute;top:0px;left:0px;width:100%;height:100%;"></div>     ';
        this.init = function() {
            b("dialogCase") ? b("dialogCase").parentNode.removeChild(b("dialogCase")) : function() {
            };
            var D = document.createElement("span");
            D.id = "dialogCase";
            if (!e) {
                D.innerHTML = B + y + x
            } else {
                D.innerHTML = B + x
            }
            document.body.appendChild(D)
        };
        this.open = function(D) {
            this.show();
            var F = "scrolling='no'";
            if (typeof arguments[1] != "undefined" && arguments[1] == 1) {
                F = 'scrolling="yes" style="overflow:visible;"'
            }
            if (typeof document.body.style.maxHeight === "undefined") {
                var E = "<iframe width='100%' height='100%' name='iframe_parent' id='iframe_parent' frameborder='0' " + F + "></iframe>";
                d("dialogBody", E);
                b("iframe_parent").src = D
            } else {
                var E = "<iframe width='100%' height='100%' name='iframe_parent' id='iframe_parent' src='" + D + "' frameborder='0' " + F + "></iframe>";
                d("dialogBody", E)
            }
        };
        this.show = function() {
            this.middle("dialogBox");
            if (b("dialogIframBG")) {
                b("dialogIframBG").style.top = b("dialogBox").style.top;
                b("dialogIframBG").style.left = b("dialogBox").style.left;
                b("dialogIframBG").style.width = b("dialogBox").offsetWidth + "px";
                b("dialogIframBG").style.height = b("dialogBox").offsetHeight + "px";
                b("dialogIframBG").style.display = "block"
            }
            if (!e) {
                this.shadow()
            }
        };
        this.reset = function() {
            this.close()
        };
        this.close = function() {
            if (window.removeEventListener) {
                window.removeEventListener("resize", this.event_b, false);
                window.removeEventListener("scroll", this.event_b, false)
            } else {
                if (window.detachEvent) {
                    try {
                        window.detachEvent("onresize", this.event_b);
                        window.detachEvent("onscroll", this.event_b)
                    } catch (D) {
                    }
                }
            }
            if (b("dialogIframBG")) {
                b("dialogIframBG").style.display = "none"
            }
            b("dialogBox").style.display = "none";
            b("dialogBoxBG").style.display = "none";
            b("dialogBoxShadow").style.display = "none";
            if (typeof (parent.onDialogClose) == "function") {
                parent.onDialogClose(b("dialogBoxTitle").innerHTML)
            }
        };
        this.set_title = function(D) {
            if (b("dialogBoxTitle")) {
                b("dialogBoxTitle").innerHTML = D
            }
            return this
        };
        this.shadow = function() {
            this.event_b_show();
            if (window.attachEvent) {
                window.attachEvent("onresize", this.event_b);
                window.attachEvent("onscroll", this.event_b)
            } else {
                window.addEventListener("resize", this.event_b, false);
                window.addEventListener("scroll", this.event_b, false)
            }
        };
        this.event_b = function() {
            var D = b("dialogBoxShadow");
            D.style["width"] = document.documentElement.width + "px";
            D.style["height"] = document.documentElement.height + "px";
            if (D.style.display != "none") {
                if (this.event_b_show) {
                    this.event_b_show()
                }
            }
        };
        this.event_b_show = function() {
            var F = b("dialogBoxShadow");
            F.style["position"] = "absolute";
            F.style["display"] = "";
            F.style["opacity"] = "0.2";
            F.style["filter"] = "alpha(opacity=20)";
            F.style["background"] = "#000";
            var E = parent ? parent.document.body.offsetWidth : document.body.offsetWidth;
            var G = parent ? parent.document.body.offsetHeight : document.body.offsetHeight;
            var D = parent ? (parent.document.body.scrollTop + parent.document.documentElement.scrollTop) : (document.body.scrollTop + document.documentElement.scrollTop);
            F.style["top"] = "0px";
            F.style["left"] = "0px";
            F.style["width"] = E + "px";
            F.style["height"] = document.documentElement.height + "px"
        };
        this.middle = function(G) {
            b(G)["style"]["display"] = "";
            b(G)["style"]["position"] = "absolute";
            var F = parent.document.body.clientWidth;
            var I = parent.document.body.clientHeight;
            var E = parent.document.body.scrollTop + parent.document.documentElement.scrollTop;
            var H = (F - b(G).offsetWidth) / 2;
            var J = E + 80;
            var D = J > 0 ? J : 0;
            b(G)["style"]["left"] = H + "px";
            b(G)["style"]["top"] = D + "px"
        };
        this.resize = function(F, G) {
            var E = b("dialogBody");
            var D = b("dialogBox");
            if (!E || !D) {
                return
            }
            if (b("dialogBoxTitle")) {
                E.setStyle({height: (G - 28) + "px"})
            } else {
                E.setStyle({height: (G - 2) + "px"})
            }
            D.setStyle({width: F + "px"}).down(".ts460").setStyle({width: F + "px"}).down().setStyle({width: F + "px"}).up().next(1).setStyle({top: (G + 8) + "px", width: (F) + "px"}).down().setStyle({width: (F) + "px"}).up().previous().setStyle({height: (G) + "px"}).down().down("tr").setStyle({height: (G) + "px"}).down("td", 1).setStyle({width: (F - 14) + "px"});
            return this
        }
    }
    function n(v, u, t, w) {
        var x = new l(u, t, w);
        x.init();
        if (typeof arguments[4] != "undefined") {
            x.open(v, arguments[4])
        } else {
            x.open(v)
        }
    }
    function j(A, x, u, t, w, z, v, y) {
        return h(A, x, u, t, w, z, "", v, y)
    }
    function f(z, w, u, t, v, y) {
        var x = ".rbs1{border:1px solid #d7e7fe; float:left;}\n.rb1-12,.rb2-12{height:23px; color:#fff; font-size:12px; background:#355582; padding:3px 5px; border-left:1px solid #fff; border-top:1px solid #fff; border-right:1px solid #6a6a6a; border-bottom:1px solid #6a6a6a; cursor:pointer;}\n.rb2-12{background:#355582;}\n";
        return h(z, w, u, t, v, y, x)
    }
    function h(A, E, C, x, w, D, B, z, v) {
        var y = new l(C, x, w);
        y.init();
        y.show();
        var t = "iframe_parent_" + k++;
        g = A;
        c = E;
        o = D;
        a = B;
        g_dialog_sButton2 = z;
        g_dialog_sAction2 = v;
        var u = "<iframe width='100%' height='100%' name='" + t + "' id='" + t + "' src='http://" + Kx.Lib.Request.getFullHost() + "/interface/diablank.php' frameborder='0' scrolling='no' onload=\"javascript:_openAlert_write('" + t + "')\"></iframe>";
        d("dialogBody", u)
    }
    function s(t) {
        var x = g;
        var B = c;
        var z = o;
        var w = g_dialog_sButton2;
        var u = g_dialog_sAction2;
        var y = a;
        var v = window.frames[t];
        if (y && y.length) {
            try {
                v.document.getElementsByTagName("head").item(0).innerHTML += "<style>" + y + "</style>"
            } catch (A) {
                var C = v.document.createElement("style");
                C.type = "text/css";
                C.styleSheet.cssText = y;
                v.document.getElementsByTagName("head").item(0).appendChild(C)
            }
        }
        if (z == undefined) {
            z = "new parent.dialog().reset();"
        }
        v.document.body.innerHTML = m(x, B, z, w, u)
    }
    function m(y, v, x, u, w) {
        var t = "";
        var t = '<div class="ts4">       <div class="ts45" style="border-top:none;padding-top:0;">         ' + y + '        <div class="c"></div>       </div>       <div class="ts42 r">        <div class="rbs1"><input type="button" style="width:68px;" value="' + v + '" title="' + v + '" class="rb1-12" onmouseover="this.className=\'rb2-12\';" onmouseout="this.className=\'rb1-12\';" onclick="javascript:' + x + '" /></div>';
        if (typeof (u) != "undefined") {
            if (typeof (w) == "undefined") {
                w = "new parent.dialog().reset();"
            }
            t += '<div class="flw5">&nbsp;</div><div class="rbs1"><input type="button" style="width:68px;" value="' + u + '" title="' + u + '" class="rb1-12" onmouseover="this.className=\'rb2-12\';" onmouseout="this.className=\'rb1-12\';" onclick="javascript:' + w + '" /></div>'
        }
        t += '<div class="c"></div></div>';
        t += "</div>";
        return t
    }
    window.openKxRestWindow = n;
    window._closeKxRestDialog = i
})();
function Map() {
    var b = 0;
    this.entry = new Array();
    this.put = function(a, d) {
        if (!this.containsKey(a)) {
            b++
        }
        this.entry[a] = d
    };
    this.get = function(a) {
        if (this.containsKey(a)) {
            return this.entry[a]
        } else {
            return null
        }
    };
    this.remove = function(a) {
        if (delete this.entry[a]) {
            b--
        }
    };
    this.containsKey = function(a) {
        return(a in this.entry)
    };
    this.containsValue = function(a) {
        for (var d in this.entry) {
            if (this.entry[d] == a) {
                return true
            }
        }
        return false
    };
    this.values = function() {
        var a = new Array(b);
        for (var d in this.entry) {
            a.push(this.entry[d])
        }
        return a
    };
    this.keys = function() {
        var a = new Array(b);
        for (var d in this.entry) {
            a.push(d)
        }
        return a
    };
    this.size = function() {
        return b
    };
    this.clear = function() {
        this.entry = new Array();
        this.size = 0
    }
}
String.prototype.mylength = function() {
    var c = this.match(/[\u00FF-\uFFFF]/gi);
    if (!c || c == null) {
        return this.length
    }
    var d = this.length + c.length;
    return d
};
function setAddressCityback() {
    var b = window.location.href;
    if (b.indexOf("openProvincePage=") != -1) {
        b = b.substring(0, b.indexOf("openProvincePage=") - 1);
        window.location.href = b;
        return
    }
    if (b.indexOf("/cart/cart.do?action=view") != -1) {
        window.location.href = "/cart/cart.do?action=view";
        return
    }
    window.location.reload()
}
function moveToFavorite(i, j, l, k, g) {
    jQuery("#yhd_pop_win").css({width: "auto", height: "auto", position: "absolute"});
    if (!checkLogin()) {
        yhdPublicLogin.showLoginDiv("", false, "2")
    } else {
        executiveLandedCheck();
        var h = URLPrefix.shoping_my + "/member/myNewCollection/addNewFavorite.do?productId=" + l + "&merchantId=" + k + "&callback=?";
        jQuery.getJSON(h, function(a) {
            cartFavoriteResult(a, i, j, l, g)
        })
    }
}
function cartFavoriteResult(i, j, k, l, h) {
    var n = i.code;
    if (n == -1) {
        yhdPublicLogin.showLoginDiv("", false, "2")
    } else {
        if (n == 0) {
            cart3.showFavoriteTips("已添加入收藏夹", j);
            var m = $(j).parent().parent().parent();
            m.addClass("to_be_deleted_item");
            setTimeout(function() {
                doDeleteOk(j, k, l, h)
            }, 1500)
        } else {
            if (n == 1) {
                cart3.showFavoriteTips("您已经收藏过该商品", j)
            }
        }
    }
    setTimeout("cart3.unblockUI(false)", 1500)
}
function redirectIf(h, n) {
    if (h) {
        if (h.indexOf("redirectUrl") >= 0) {
            var l = h.split("=");
            window.location.href = l[1];
            return true
        }
        var k = "result=popLogin";
        var m = "URL=/not_found.do";
        var i = "<head>";
        var j = "cart2ErrorMsgDiv";
        if (h.indexOf(k) != -1) {
            yhdPublicLogin.showLoginDiv("", false, "2");
            return true
        } else {
            if (h.indexOf(m) != -1) {
                window.location.href = "${URLPrefix.shoping_yhd}/not_found.do";
                return true
            } else {
                if (h.indexOf(i) != -1) {
                    window.location.href = "${URLPrefix.shoping_yhd}/";
                    return true
                } else {
                    if (h.indexOf(j) != -1) {
                        jQuery("#cart2ErrorUI").html(h);
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
    } else {
        return false
    }
}
function reqSucceed(f) {
    if (f && f.code) {
        if (f.code == "00000000") {
            return true
        }
        if (f.code.length < 8) {
            showErrorPage();
            return false
        }
        var e = f.code.substring(0, 3);
        var d = f.code.substring(f.code.length - 5, f.code.length);
        if (e == "300" && d == "00001") {
            if (ajaxQueue.confirmFlag) {
                yhdPublicLogin.showLoginDivNone(URLPrefix.shoping_passport, false, "", ajaxQueue.confirm, 2)
            } else {
                yhdPublicLogin.showLoginDiv("", false, "2")
            }
            return false
        }
        if (e == "300" && d == "01005") {
            window.location = f.data;
            return false
        }
        if (f.code == "300011100002") {
            jQuery("#cart2ErrorUI").html(f.data);
            return false
        }
        alertResult(f.msg);
        return false
    }
    showErrorPage();
    return false
}
function isReqSuccess(b) {
    return b && b.code == "00000000"
}
function alertResult(g) {
    jQuery("#optAckInfo").html(g);
    var f = jQuery("#optAck").html();
    YHD.popwin(f, 498, 165);
    var h = ($(window).width() - $("#yhd_pop_win").width()) / 2 + $(window).scrollLeft();
    var e = ($(window).height() - $("#yhd_pop_win").height()) / 2 + $(window).scrollTop();
    jQuery("#yhd_pop_win").css({position: "absolute", left: h, top: e})
}
function showErrorMsg(b) {
    jQuery("#err_popwin").html(b);
    yhdLib.popwin({poptitle: "温馨提示", popcontent: ".error_info_show"})
}
function showErrorPage() {
    var b = jQuery("#errorCartContent");
    jQuery("#cart3_frame").html(b.val())
}
function showPopbox(i) {
    var j = document.documentElement.clientHeight;
    var g = document.documentElement.clientWidth;
    var h = $(document).height();
    var k = $(i).height();
    var l = $(document).scrollTop();
    $(i).css("top", j / 2 - k / 2 + l);
    $("<div class=mask></div>").appendTo($("body"));
    $(".mask").css("height", h);
    if ($.browser.msie && $.browser.version <= 6) {
        $(".mask").after("<iframe class=ifm></iframe>");
        $(".ifm").css({height: h * 0.99, width: g * 0.99})
    }
    $(i).show()
}
function getUserLoggedInPage() {
    var b = -1;
    if (typeof (jQuery("#userLoggedInPage").val()) != "undefined") {
        b = jQuery("#userLoggedInPage").val()
    }
    return b
}
var optMan = new Object();
optMan.map = new Map();
optMan.mergeSelect = function() {
    var f = true;
    for (var e in this.map.entry) {
        var d = this.map.get(e);
        if (d != null && d.stage == 1) {
            d.clearTimeout();
            d.setTimeout();
            f = false;
            break
        }
    }
    return f
};
optMan.mergeDelete = function(g, j, h) {
    var i = true;
    for (var l in this.map.entry) {
        var k = this.map.get(l);
        if (k != null && k.stage == 1) {
            if (k.type == "select") {
                k.clearTimeout();
                optMan.map.remove(l)
            }
            if (k.type == "delete") {
                k.addDeletePost(g, j, h);
                k.clearTimeout();
                k.setTimeout();
                i = false
            }
        }
    }
    return i
};
optMan.mergeNum = function(h, l, i) {
    var j = true;
    for (var g in this.map.entry) {
        var k = this.map.get(g);
        if (k != null && k.stage == 1) {
            if (k.type == "view") {
                k.clearTimeout();
                optMan.map.remove(g)
            }
            if (k.type == "num" && k.productId == l && k.merchantId == i) {
                k.url = h;
                k.clearTimeout();
                k.setTimeout();
                j = false
            }
        }
    }
    return j
};
optMan.mergeLandingNum = function(h, m, j, i) {
    var k = true;
    for (var n in this.map.entry) {
        var l = this.map.get(n);
        if (l != null && l.stage == 1) {
            if (l.type == "view") {
                l.clearTimeout();
                optMan.map.remove(n)
            }
            if (l.type == "landingNum" && l.productId == m && l.merchantId == j && l.promotionId == i) {
                l.url = h;
                l.clearTimeout();
                l.setTimeout();
                k = false
            }
        }
    }
    return k
};
optMan.mergePointProdNum = function(h, l, i) {
    var j = true;
    for (var g in this.map.entry) {
        var k = this.map.get(g);
        if (k != null && k.stage == 1) {
            if (k.type == "view") {
                k.clearTimeout();
                optMan.map.remove(g)
            }
            if (k.type == "pointProdNum" && k.productId == l && k.merchantId == i) {
                k.url = h;
                k.clearTimeout();
                k.setTimeout();
                j = false
            }
        }
    }
    return j
};
optMan.mergeCombineNum = function(g, i) {
    var h = true;
    for (var f in this.map.entry) {
        var j = this.map.get(f);
        if (j != null && j.stage == 1) {
            if (j.type == "view") {
                j.clearTimeout();
                optMan.map.remove(f)
            }
            if (j.type == "combineNum" && j.cartItemVoId == i) {
                j.url = g;
                j.clearTimeout();
                j.setTimeout();
                h = false
            }
        }
    }
    return h
};
optMan.mergeOther = function() {
    for (var d in this.map.entry) {
        var c = this.map.get(d);
        if (c != null && c.stage == 1 && c.type == "select") {
            c.clearTimeout();
            optMan.map.remove(d)
        }
    }
    return true
};
optMan.mergeReq = function(i, j, m, n, k, o, p) {
    if (ajaxQueue.confirmFlag && i != "check") {
        return
    }
    if (this.map.size <= 0) {
        this.buildReq(i, j, m, n, k, o, p);
        return
    }
    var l = true;
    if (i == "select") {
        l = this.mergeSelect()
    }
    if (i == "delete") {
        l = this.mergeDelete(k, o, p)
    }
    if (i == "num") {
        l = this.mergeNum(j, k, o)
    }
    if (i == "landingNum") {
        l = this.mergeLandingNum(j, k, o, p)
    }
    if (i == "pointProdNum") {
        l = this.mergePointProdNum(j, k, o)
    }
    if (i == "combineNum") {
        l = this.mergeCombineNum(j, k)
    }
    if (i == "other") {
        l = this.mergeOther()
    }
    if (l) {
        this.buildReq(i, j, m, n, k, o, p)
    }
};
optMan.buildReq = function(i, j, l, m, k, n, o) {
    var p = new Object();
    p.type = i;
    p.url = j;
    p.showMsg = l;
    p.stage = 0;
    p.timer = null;
    if (i == "num") {
        p.productId = k;
        p.merchantId = n
    } else {
        if (i == "landingNum") {
            p.productId = k;
            p.merchantId = n;
            p.promotionId = o
        } else {
            if (i == "pointProdNum") {
                p.productId = k;
                p.merchantId = n
            } else {
                if (i == "combineNum") {
                    p.cartItemVoId = k
                }
            }
        }
    }
    if (i == "delete") {
        p.deleteRecord = new Map();
        if (o != null) {
            p.deleteRecord.put(o, 1)
        }
        p.deleteId = new Array();
        p.deletePromo = new Array();
        p.addDeletePost = function(a, b, c) {
            switch (b) {
                case 0:
                    this.deleteId.push(a);
                    break;
                case 1:
                    this.deletePromo.push(a);
                    break
            }
            this.deleteRecord.put(c, 1);
            return true
        };
        p.addDeletePost(k, n, o)
    }
    p.getParam = function() {
        var a = $('a[name="cart2Checkbox"]').map(function() {
            return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
        }).get().join(",");
        if (this.type == "delete") {
            var b = {deleteId: this.deleteId.join(","), deletePromo: this.deletePromo.join(","), cart2Checkbox: a, logged: getUserLoggedInPage(), view: ajaxQueue.length <= 0 && !ajaxQueue.confirmFlag ? 1 : 0};
            return b
        } else {
            return{cart2Checkbox: a, logged: getUserLoggedInPage(), view: ajaxQueue.length <= 0 && !ajaxQueue.confirmFlag ? 1 : 0}
        }
    };
    p.getUrl = function() {
        return this.url
    };
    p.post = function() {
        ajaxQueue.add(this)
    };
    p.setTimeout = function() {
        this.timer = setTimeout(function() {
            p.post()
        }, (m == null || m < 0) ? 0 : m);
        this.stage = 1
    };
    p.clearTimeout = function() {
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.stage = 0
    };
    if (p.type == "check") {
        ajaxQueue.add(p)
    } else {
        p.setTimeout()
    }
    this.map.put(p.timer, p)
};
optMan.reloadDelete = function() {
    $("#cart2_content .gray-box.pro-li .clear.list tr").each(function() {
        for (var d in optMan.map.entry) {
            var c = optMan.map.get(d);
            if (c != null && c.type == "delete" && c.stage < 3 && c.deleteRecord.containsKey($(this).attr("id"))) {
                $(this).remove()
            }
        }
    })
};
optMan.anyTimeout = function() {
    for (var d in this.map.entry) {
        var c = this.map.get(d);
        if (c != null && c.stage == 1) {
            return true
        }
    }
    return false
};
var ajaxQueue = new Array();
ajaxQueue.workingFlag = false;
ajaxQueue.confirmFlag = false;
ajaxQueue.showBlockUI = false;
ajaxQueue.timeup = false;
ajaxQueue.go = function() {
    if (ajaxQueue.workingFlag) {
        return
    }
    ajaxQueue.timeup = false;
    ajaxQueue.workingFlag = true;
    if (ajaxQueue.length <= 0) {
        ajaxQueue.workingFlag = false;
        if (ajaxQueue.confirmFlag && !optMan.anyTimeout()) {
            ajaxQueue.confirmFlag = false;
            cart3.unblockUI(false);
            if (ckbMan.anyChecked()) {
                popIfHasFreePromotionInCart()
            }
        }
        return
    }
    var b = ajaxQueue.shift();
    if (b.type == null || b.type == "") {
        b.stage = 3;
        optMan.map.remove(b.timer);
        ajaxQueue.workingFlag = false;
        ajaxQueue.go();
        return
    }
    if (!ajaxQueue.confirmFlag && b.type == "other") {
        cart3.blockUI()
    }
    $.getJSON(b.getUrl(), b.getParam(), function(d) {
        try {
            ckbMan.reset()
        } catch (a) {
        }
        if (ajaxQueue.timeup) {
            return false
        }
        b.stage = 3;
        optMan.map.remove(b.timer);
        ajaxQueue.workingFlag = false;
        if (reqSucceed(d)) {
            ajaxQueue.showBlockUI = ajaxQueue.showBlockUI || b.showMsg;
            if (!ajaxQueue.confirmFlag && ajaxQueue.length <= 0) {
                cart3.unblockUI(ajaxQueue.showBlockUI);
                refreshCart2PageContent(d.data)
            } else {
                ajaxQueue.go()
            }
        } else {
            cart3.unblockUI(false);
            if (ajaxQueue.confirmFlag) {
                ajaxQueue.confirmFlag = false
            }
            ajaxQueue.length = 0
        }
    })
};
ajaxQueue.add = function(b) {
    if (!ajaxQueue.confirmFlag || b.type == "check") {
        b.stage = 2;
        ajaxQueue.push(b);
        ajaxQueue.go()
    }
};
ajaxQueue.confirm = function() {
    cart3.blockUI();
    ajaxQueue.confirmFlag = true;
    var d = jQuery("#needIdentityInfoFor3gCard").val();
//    var c = "/cart/mod/checkBC.do?needIdFor3g=" + d + "&callback=?";
//    optMan.mergeReq("check", c, false)
    location.href='checkout.html';
};
var ckbMan = {map: new Map(), reset: function() {
        var b = new Map();
        $('a[name="cart2Checkbox"]').each(function() {
            var a = $(this).attr("value");
            var d = ckbMan.map.get(a);
            if (d != null) {
                if (d == "yes") {
                    $(this).addClass("cart3_checkbox_checked");
                    $(this).attr("data-checked", "yes")
                } else {
                    if (d == "no") {
                        $(this).removeClass("cart3_checkbox_checked");
                        $(this).attr("data-checked", "no")
                    }
                }
            }
            b.put($(this).attr("value"), $(this).attr("data-checked"))
        });
        ckbMan.map = b
    }, click: function(b) {
        if ($(b).attr("data-checked") == "yes") {
            $(b).attr("data-checked", "no");
            $(b).removeClass("cart3_checkbox_checked")
        } else {
            $(b).attr("data-checked", "yes");
            $(b).addClass("cart3_checkbox_checked")
        }
        this.map.put($(b).attr("value"), $(b).attr("data-checked"))
    }, remove: function(b) {
        this.map.remove($(b).attr("value"))
    }, removeByKey: function(b) {
        this.map.remove(b)
    }, loadStatusFromJs: function() {
        $('a[name="cart2Checkbox"]').each(function() {
            var d = $(this).attr("value");
            var c = ckbMan.map.get(d) == null ? true : ckbMan.map.get(d);
            if (c == "yes") {
                $(this).addClass("cart3_checkbox_checked")
            } else {
                $(this).removeClass("cart3_checkbox_checked")
            }
        });
        refreshCheckbox()
    }, anyChecked: function() {
        var b = false;
        $('a[name="cart2Checkbox"]').each(function() {
            if ($(this).attr("data-checked") == "yes") {
                b = true;
                return false
            }
        });
        if ($('input[type="hidden"][name="XYItem"]').size() > 0) {
            b = true
        }
        return b
    }, alertMap: function() {
        var c = "";
        for (var d in this.map.entry) {
            c += d + "=>" + this.map.get(d) + "\n"
        }
        alert(c)
    }};
var cart3 = {blockUITimer: null, isBlocked: false, ajaxSelect: function(b) {
        optMan.mergeReq("select", "/cart/mod/newMainbody.do?callback=?", false, b)
    }, ajaxDelete: function(e, f, h, g) {
        gotracker("2", "deleteInCart:" + e, null);
        optMan.mergeReq("delete", "/cart/opt/delete.do?callback=?", false, h, e, f, g)
    }, ajaxNum: function(g, i, j, f, h) {
        optMan.mergeReq("num", g, i, j, f, h)
    }, ajaxLandingNum: function(g, j, k, l, i, h) {
        optMan.mergeReq("landingNum", g, j, k, l, i, h)
    }, ajaxPointProdNum: function(g, i, j, f, h) {
        optMan.mergeReq("pointProdNum", g, i, j, f, h)
    }, ajaxCombineNum: function(f, g, h, e) {
        optMan.mergeReq("pointProdNum", f, g, h, e)
    }, ajaxRefresh: function(f, e, g, h) {
        optMan.mergeReq(e == null ? "other" : e, f, g, h)
    }, showBlockUI: function(b) {
        jQuery("#cart2BlockUI").block({message: b, css: {padding: 0, margin: 0, width: "35%", border: "1px solid #FFCC00", opacity: 0.9, backgroundColor: "#FEFFDF"}, overlayCSS: {background: "transparent", opacity: 0.1, cursor: "default"}})
    }, blockUI: function() {
        if (cart3.isBlocked) {
            return
        }
        cart3.isBlocked = true;
        var d = (jQuery(window).width()) / 2 - 400 + jQuery(window).scrollLeft();
        if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
            var c = (jQuery(window).height()) / 2 + jQuery(window).scrollTop();
            d = (jQuery(window).width()) / 2 + jQuery(window).scrollLeft() - 300;
            jQuery("#cart2BlockUI").show().css({position: "absolute", width: "60%", height: "20%", zIndex: "9999", top: c, left: d})
        } else {
            jQuery("#cart2BlockUI").show().css({position: "fixed", width: "60%", height: "20%", zIndex: "9999", top: "200px", left: d})
        }
        cart3.showBlockUI('<table width="100%" border="0" cellspacing="0" cellpadding="0" id="cart2BlockUIMsg"><tr><td width="100%" height="50" align="center" class="font14"><img src="' + URLPrefix.shoping_statics + '/shopping/images/v2/wait_loading.gif"/></td></tr><tr><td height="25" align="center" class="font14">正在处理中,请稍候...</td></tr></table>')
    }, showFavoriteTips: function(j, h) {
        cart3.isBlocked = true;
        var g = jQuery(h).offset().left;
        var i = jQuery(h).offset().top;
        if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
            jQuery("#cart2BlockUI").show().css({position: "absolute", width: "40%", height: "20%", zIndex: "9999", top: i - 32, left: g - 215})
        } else {
            jQuery("#cart2BlockUI").show().css({position: "absolute", width: "31%", height: "50px", zIndex: "9999", top: i - 40, left: g - 230})
        }
        var f = "";
        if (j == "已添加入收藏夹") {
            f = "<i></i>"
        }
        cart3.showBlockUI('<table width="100%" border="0" cellspacing="0" cellpadding="0" id="cart2BlockUIMsg"><tr><td height="25" class="font14 fontIco">' + f + "&nbsp;" + j + "</td></tr></table>")
    }, unblockUI: function(b) {
        cart3.isBlocked = false;
        if (b) {
            cart3.showBlockUI('<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="65" align="center" class="font14">您的操作已成功!</td></tr></table>');
            if (cart3.blockUITimer) {
                clearTimeout(cart3.blockUITimer)
            }
            cart3.blockUITimer = setTimeout(function() {
                jQuery("#cart2BlockUI").unblock().hide()
            }, 1000)
        } else {
            jQuery("#cart2BlockUI").unblock().hide()
        }
    }};
jQuery(function() {
    if ($.browser.msie && $.browser.version <= 6) {
        var b = $(".zr_section").find(".zr_warpper").width();
        if (b < 240) {
            $(".zr_section").find(".zr_warpper").width(240)
        } else {
            if (b > 360) {
                $(".zr_section").find(".zr_warpper").width(360)
            } else {
                $(".zr_section").find(".zr_warpper").width(b)
            }
        }
    }
});
function cartFeedBack2() {
    var b = "lgp_header";
    var c = '<div id="cartFeedBack">';
    c += '<div class="' + b + '">请留下您对购物车的意见和建议<a onclick="closeWin();return false;" href="javascript:void(0);" class=\'close2\'>关闭</a></div>';
    c += '<div class="feedbackcontent"><div>';
    c += '<div style="align:center;height:145px"><input type="hidden" name="feedback.type" value="9"/>';
    c += '<textarea style="margin: 9px; width: 390px; height: 120px; resize: none;" id="feedbackcontent" name="feedback.content"></textarea></div>';
    c += "<p class='verCode' style=\"margin-right:10px\"><label>验证码：</label><input id='vcd' type='text' name='validCode' size='8' class='ipt'><img id='valid_code_pic' class='code' src='/cart/validateCode.do?r=" + Math.random() + "' /><a href='javascript:feedValidCode();'>换一张</a></p>";
    c += '<div class="cartbutton" align="center" style="margin:5px;"><span type="button" class="btn-orange2" name="button" onclick="ajaxCartFeedBack();">提交</span>&nbsp;&nbsp;&nbsp;&nbsp;<span onclick="jQuery(\'#yhd_pop_win\').jqmHide();return false;" type="button" class="btn-gray2" name="reset">取消</span>';
    c += "</div></div>";
    YHD.popwin(c, 410, 238);
    var a = (jQuery(window).width()) / 2 - 200 + jQuery(window).scrollLeft();
    if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
        var d = (jQuery(window).height()) / 2 + jQuery(window).scrollTop() - 120;
        a = (jQuery(window).width()) / 2 + jQuery(window).scrollLeft() - 200;
        jQuery("#yhd_pop_win").css({position: "absolute", top: d, left: a})
    } else {
        jQuery("#yhd_pop_win").css({position: "fixed", top: "120px", left: a})
    }
}
function ajaxCartFeedBack() {
    var d = jQuery("#feedbackcontent").val();
    d = jQuery.trim(d);
    if (d.length > 0) {
        if (jQuery("#vcd").val().length > 0) {
            var c = /['|$|&|"]/;
            if (c.test(d)) {
                alert("请不要输入非法字符");
                jQuery("#feedbackcontent").focus()
            } else {
                if (d.mylength() > 500) {
                    alert("输入的内容请不要超过500个字符或250个汉字");
                    jQuery("#feedbackcontent").focus()
                } else {
                    jQuery("#feedbackcontent .cartbutton").empty();
                    jQuery("#feedbackcontent .cartbutton").html("正在提交中。。。");
                    var b = "/cart/opt/addFeedback.do";
                    var d = jQuery("#feedbackcontent").val();
                    var a = {feedback_type: 9, feedback_content: d, validCode: jQuery("#vcd").val()};
                    jQuery.post(b, a, function(e) {
                        if (isReqSuccess(e)) {
                            jQuery("#cartFeedBack .feedbackcontent").empty();
                            jQuery("#cartFeedBack .feedbackcontent").html('<div style="margin-top:50px;margin-left:20px;height:160px;font-size:13px;"><img src=" ' + URLPrefix.shoping_statics + '/shopping/images/v2/cart2/icon_yes.png"/> &nbsp;感谢您的宝贵意见，您的每个建议都对我们至关重要!</div>');
                            setTimeout("closeWin()", 2000)
                        } else {
                            if (e && e.data == "validCodeError") {
                                alert("验证码错误");
                                feedValidCode();
                                clearInput()
                            } else {
                                alert("建议提交失败");
                                feedValidCode();
                                clearInput()
                            }
                        }
                    }, "json")
                }
            }
        } else {
            alert("请输入验证码")
        }
    } else {
        alert("请输入您的意见和建议")
    }
}
function feedValidCode() {
    jQuery("#valid_code_pic").attr("src", "/cart/validateCode.do?r=" + Math.random())
}
function clearInput() {
    jQuery("#vcd").val("")
}
function closeWin() {
    jQuery("#yhd_pop_win").jqmHide();
    writeHeaderContent();
    if (cart3) {
        cart3.ajaxSelect(0)
    }
}
;
function messageHighLight(a) {
    $("div[id^='sensitive_']").removeClass("highLight");
    $("#sensitive_" + a).addClass("highLight")
}
function messageDisHighLight(a) {
    $("#sensitive_" + a).removeClass("highLight")
}
function messageSelect(a) {
    $("div[id^='sensitive_']").removeClass("selected");
    $("#sensitive_" + a).addClass("selected");
    $("div[id^='product_']").removeClass("product_highlight");
    $("div[id^='product_" + a + "']").addClass("product_highlight")
}
var SensitiveProd = {checkMobile: function() {
        if (!yhdPublicLogin.checkLogin()) {
            yhdPublicLogin.showLoginDiv("", false, "", "", 1);
            return
        }
        initBind();
        var a = this;
        setTimeout(function() {
            a.showMask();
            a.showCheckMobileUi()
        }, 100)
    }, showMask: function() {
        var a = $("#sensitiveProdMaskDiv");
        a.css("width", a.parent().parent().css("width"));
        a.css("height", a.parent().parent().css("height"));
        a.css("z-index", "110");
        a.show()
    }, hideMask: function() {
        $("#sensitiveProdMaskDiv").hide()
    }, showCheckMobileUi: function() {
        var b = $("#checkMobile");
        if (b.size() == 0) {
            b = $("<div/>");
            b.attr("id", "checkMobile");
            b.appendTo("body");
            b.css("width", 765 + "px");
            b.css("left", (document.body.scrollWidth - 765) / 2 + "px");
            b.css("top", "50px")
        }
        var a = $("#closeDiv");
        if (a.size() == 0) {
            a = $("<H3 id='closeDiv' ><a href='javascript:location.reload();'><img onclick=\"location.reload();\" src=\"" + imagePath + '/icon_close.jpg"/>关闭</a></H3>')
        }
        a.appendTo(b);
        $("#bindDiv").appendTo(b);
        $("#bindDiv").show();
        $(".hd_global_top_bar").css("position", "relative");
        $(".hd_global_top_bar").css("z-index", 1)
    }};
$(document).ready(function() {
    var b = $(".sensitiveProdMessage .message:first-child");
    if (b.size() > 0) {
        var a = b.attr("id");
        a = a.replace("sensitive_", "");
        messageSelect(a)
    }
});
function initShowGroupPage() {
    var b = parseInt($("#showGroupNmu").val());
    var c = $("#groupTabs a").length;
    if (c <= (b + 1)) {
        $("#groupPrev").addClass("slider_left_dis");
        $("#groupNext").addClass("slider_right_dis")
    }
    var d = getCurrGroupPageNum();
    $("#groupTabs").data("currGroupPageNum", d);
    var a = $("#redemptionPromotionList");
    a.data("currBuzyType", parseInt($("#currBuzyType").val()));
    a.data("currGroupId", parseInt($("#currGroupId").val()));
    a.data("startIndexNum", parseInt($("#startIndexNum").val()));
    showGroupPage()
}
function getCurrGroupPageNum() {
    var a = parseInt($("#showGroupNmu").val());
    var c = 0;
    var b = 0;
    $("#groupTabs a").each(function(d) {
        if ($(this).hasClass("cur")) {
            b = d
        }
    });
    c = Math.ceil((b / a)) - 1;
    if (c < 0) {
        c = 0
    }
    return c
}
function showGroupPage() {
    var e = $("#groupTabs").data("currGroupPageNum");
    var a = parseInt($("#showGroupNmu").val());
    var c = $("#groupTabs a").length;
    var d = a * e;
    var b = d + a;
    if (b > c) {
        b = c
    }
    if (e == 0) {
        $("#groupPrev").addClass("slider_left_dis");
        if ((a + 1) >= c) {
            $("#groupNext").addClass("slider_right_dis")
        } else {
            $("#groupNext").removeClass("slider_right_dis")
        }
    } else {
        if (b == c) {
            $("#groupPrev").removeClass("slider_left_dis");
            $("#groupNext").addClass("slider_right_dis")
        }
    }
    if (c < 2) {
        $("#redemGroupsMenu").hide();
        return
    }
    $("#groupTabs a").each(function(f) {
        if (f == 0) {
            $(this).show()
        } else {
            if (f > d && f <= b) {
                $(this).show()
            } else {
                $(this).hide()
            }
        }
    })
}
function onGroupClick(b) {
    var a = parseInt($("#showGroupNmu").val());
    var c = $("#groupTabs a").length;
    if (c <= (a + 1)) {
        $("#groupPrev").addClass("slider_left_dis");
        $("#groupNext").addClass("slider_right_dis");
        return
    }
    if ($("#groupPrev").hasClass("slider_left_dis") && b == -1) {
        return
    }
    if ($("#groupNext").hasClass("slider_right_dis") && b == 1) {
        return
    }
    var d = $("#groupTabs").data("currGroupPageNum") + b;
    if (d < 0) {
        return
    }
    $("#groupTabs").data("currGroupPageNum", d);
    showGroupPage()
}
function initRedemptionHoverEvent() {
    jQuery("#redemListUl").find("li").hover(function() {
        jQuery(".info .btn_buy", this).show()
    }, function() {
        jQuery(".info .btn_buy", this).hide()
    })
}
var nextPageNumSpec = 0;
var nextPageNumGuess = 0;
var prevPageNumSpec = 0;
var prevPageNumGuess = 0;
var specStartDisplayIndex = 0;
var guessStartDisplayIndex = 0;
function onRedemNextClick(h) {
    if ($("#redemNext").hasClass("slider_right_dis")) {
        return
    }
    var a = $("#" + h).find("ul li");
    if (a.length < 9) {
        return
    }
    var f = 0;
    var c = 0;
    if (a.length % 8 == 0) {
        c = Math.floor(a.length / 8)
    } else {
        c = Math.floor(a.length / 8) + 1
    }
    if (h == "guess_you_like_content") {
        nextPageNumGuess++;
        if (c == nextPageNumGuess) {
            nextPageNumGuess = 0
        }
        prevPageNumGuess = -nextPageNumGuess;
        f = nextPageNumGuess;
        guessStartDisplayIndex = 8 * f
    } else {
        nextPageNumSpec++;
        if (c == nextPageNumSpec) {
            nextPageNumSpec = 0
        }
        prevPageNumSpec = -nextPageNumSpec;
        f = nextPageNumSpec;
        specStartDisplayIndex = 8 * f
    }
    var d = [];
    for (var b = 0; b < a.length; b++) {
        if ((b >= 8 * f) && (b < 8 * (f + 1))) {
            $(a[b]).show();
            d.push($($(a[b])))
        } else {
            $(a[b]).hide()
        }
    }
    if (h == "guess_you_like_content") {
        try {
            require(["base_observer"], function(e) {
                e.fire("shopping_guessYouLike_adContentTrackerEvent", d)
            })
        } catch (g) {
        }
    } else {
        try {
            require(["base_observer"], function(e) {
                e.fire("shopping_specPriceRedeBuy_adContentTrackerEvent", d)
            })
        } catch (g) {
        }
    }
}
function onRedemPrevClick(h) {
    if ($("#redemPrev").hasClass("slider_left_dis")) {
        return
    }
    var a = $("#" + h).find("ul li");
    if (a.length < 9) {
        return
    }
    var f = 0;
    var c = 0;
    if (a.length % 8 == 0) {
        c = Math.floor(a.length / 8) - 1
    } else {
        c = Math.floor(a.length / 8)
    }
    if (h == "guess_you_like_content") {
        if (0 == prevPageNumGuess) {
            prevPageNumGuess = prevPageNumGuess - c
        } else {
            prevPageNumGuess++
        }
        nextPageNumGuess = -prevPageNumGuess;
        f = prevPageNumGuess;
        guessStartDisplayIndex = 8 * Math.abs(f)
    } else {
        if (0 == prevPageNumSpec) {
            prevPageNumSpec = prevPageNumSpec - c
        } else {
            prevPageNumSpec++
        }
        nextPageNumSpec = -prevPageNumSpec;
        f = prevPageNumSpec;
        specStartDisplayIndex = 8 * Math.abs(f)
    }
    var d = [];
    for (var b = 0; b < a.length; b++) {
        if ((b >= 8 * Math.abs(f)) && (b < 8 * Math.abs(f - 1))) {
            $(a[b]).show();
            d.push($($(a[b])))
        } else {
            $(a[b]).hide()
        }
    }
    if (h == "guess_you_like_content") {
        try {
            require(["base_observer"], function(e) {
                e.fire("shopping_guessYouLike_adContentTrackerEvent", d)
            })
        } catch (g) {
        }
    } else {
        try {
            require(["base_observer"], function(e) {
                e.fire("shopping_specPriceRedeBuy_adContentTrackerEvent", d)
            })
        } catch (g) {
        }
    }
}
function sendRedemptionTracker(a) {
    var b = "yhd";
    if (a && a == 1) {
        b += "_pms_172"
    } else {
        b += "_pms_171"
    }
    gotracker("2", b)
}
function cartToggle(a, c) {
    var b = jQuery("#" + a).attr("showUI");
    if (b == "1") {
        jQuery("#" + a).attr("showUI", "0");
        if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
            jQuery("#" + c).hide()
        } else {
            jQuery("#" + c).slideUp()
        }
        jQuery("#" + a).html("显示")
    } else {
        if (b == "0") {
            jQuery("#" + a).attr("showUI", "1");
            if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
                jQuery("#" + c).show()
            } else {
                jQuery("#" + c).slideDown()
            }
            jQuery("#" + a).html("隐藏")
        }
    }
}
function promotionSlider() {
    var f = jQuery("#top_promotion>dl").size();
    var e = 1;
    var a = 4;
    var c = Math.ceil(f / a);
    var d = jQuery(".promotion-list").width();
    var b = jQuery("#top_promotion");
    if (f <= 4) {
        jQuery("#pronext").removeClass("on");
        jQuery("#pronext,#proprev").hide()
    }
    jQuery("#pronext").click(function() {
        if (e < c) {
            if (e == c - 1) {
                jQuery("#pronext").removeClass("on");
                jQuery("#pronext").addClass("end")
            }
            if (!b.is(":animated")) {
                b.animate({marginLeft: "-=" + d}, "slow");
                e++
            }
        }
        if (e > 1 && !jQuery("#proprev").hasClass("on")) {
            jQuery("#proprev").removeClass("end");
            jQuery("#proprev").addClass("on")
        }
    });
    jQuery("#proprev").click(function() {
        if (e > 1) {
            if (e == 2) {
                jQuery("#proprev").removeClass("on");
                jQuery("#proprev").addClass("end")
            }
            if (!b.is(":animated")) {
                b.animate({marginLeft: "+=" + d}, "slow");
                e--
            }
        }
        if (e < c && !jQuery("#pronext").hasClass("on")) {
            jQuery("#pronext").addClass("on");
            jQuery("#pronext").removeClass("end")
        }
    })
}
function ajaxFreePromotionList() {
    promotionSlider();
    initPromotionListEvent(jQuery("#freePromotionList"));
    initPromotionListEvent(jQuery("#itemList"));
    openSearchUrl()
}
function ajaxRedemptionPromotionList() {
    var b = "/cart/mod/newRedeem.do?callback=?&refreshFlag=1";
    var a = $("#productIds").val();
    $.ajax({type: "POST", dataType: "jsonp", url: b, data: {productIds: a}, success: function(l) {
            if (isReqSuccess(l)) {
                var k = l.data;
                if (k == null || k.length == 0) {
                    isHaveSpecRedmp1Yuan = 0
                } else {
                    isHaveSpecRedmp1Yuan = 1;
                    var g = [];
                    for (var f = 0; f < k.length; f++) {
                        var d = k[f].currBuzyType;
                        if (2 == d) {
                            g.push(k[f])
                        }
                    }
                    if (g.length >= 24) {
                        k = g.slice(0, 24);
                        filltemplate(l)
                    } else {
                        var j = k[0]._1YuanDataSwitch;
                        if (j == 1) {
                            get1yuandata(l)
                        } else {
                            l.data = sort(k);
                            filltemplate(l)
                        }
                    }
                    var c = $("#special_price_content").find("ul li");
                    for (var f = 0; f < c.length; f++) {
                        if ((f >= 0) && (f < 8)) {
                            $(c[f]).show()
                        } else {
                            $(c[f]).hide()
                        }
                    }
                    try {
                        require(["content_tracker_expo"], function(e) {
                            e.run("shopping_specPriceRedeBuy_adContentTrackerEvent", "brain")
                        })
                    } catch (h) {
                    }
                }
            }
        }})
}
function lazyLoadPMSAd01HtmlData() {
    var b = "";
    if (typeof (jQuery("#pmIdsInCart").val()) != "undefined") {
        b = jQuery("#pmIdsInCart").val()
    }
    var a = URLPrefix.shoping_pms + "/shoppingCart/getRelatedProductByCartProductId.do?r=" + Math.random() + "&provinceId=" + currProvinceId + "&pmIdCart=" + b + "&callback=?";
    jQuery.getJSON(a, function(d) {
        var g = d.value;
        if (d && d.success == 1 && g) {
            isHaveGuessYouLike = 1;
            if (g.length > 24) {
                g.length = 24
            }
            d.value = g;
            jQuery("#guess_you_like_content").setTemplateElement("pmsGuessYouLike").processTemplate(d);
            var c = $("#guess_you_like_content").find("ul li");
            for (var f = 0; f < c.length; f++) {
                $(c[f]).hide()
            }
            try {
                require(["content_tracker_expo"], function(e) {
                    e.run("shopping_guessYouLike_adContentTrackerEvent", "brain")
                })
            } catch (h) {
            }
        } else {
            isHaveGuessYouLike = 0
        }
    })
}
var isHaveSpecRedmp1Yuan = 0;
var isHaveGuessYouLike = 0;
function initPmsTab() {
    $("#cart3_pms_tab").show();
    if (isHaveSpecRedmp1Yuan == 1) {
        if (isHaveGuessYouLike == 1) {
            $("#special_price").removeClass("none");
            $("#guess_you_like").removeClass("none");
            $(".cart3_tejia_nav a").each(function() {
                var c = $(".cart3_tejia_nav a").index(this);
                if ($(this).hasClass("nav_cur")) {
                    $(".tabs_content").eq(c).removeClass("none")
                } else {
                    $(".tabs_content").eq(c).addClass("none")
                }
            })
        } else {
            $("#special_price").removeClass("none");
            $("#special_price_content").removeClass("none");
            $("#guess_you_like").addClass("none");
            $("#guess_you_like_content").addClass("none")
        }
    } else {
        if (isHaveGuessYouLike == 1) {
            $("#special_price").addClass("none").removeClass("nav_cur");
            $("#special_price_content").addClass("none");
            $("#guess_you_like").removeClass("none").addClass("nav_cur");
            $("#guess_you_like_content").removeClass("none");
            var a = $("#guess_you_like_content").find("ul li");
            for (var b = 0; b < a.length; b++) {
                if ((b >= 0) && (b < 8)) {
                    $(a[b]).show()
                } else {
                    $(a[b]).hide()
                }
            }
        } else {
            $("#cart3_pms_tab").hide()
        }
    }
}
function initTabsEvent() {
    jQuery(".cart3_tejia_nav a").click(function() {
        $(".cart3_tejia_nav a.nav_cur").removeClass("nav_cur");
        jQuery(this).addClass("nav_cur");
        var b = jQuery(".cart3_tejia_nav a").index(this);
        jQuery(".tabs_content").each(function() {
            $(this).addClass("none")
        });
        jQuery(".tabs_content").eq(b).removeClass("none");
        if (jQuery(".tabs_content").eq(b).attr("id") == "guess_you_like_content") {
            var a = $("#guess_you_like_content").find("ul li");
            for (var b = 0; b < a.length; b++) {
                if ((b >= guessStartDisplayIndex) && (b < guessStartDisplayIndex + 8)) {
                    $(a[b]).show()
                } else {
                    $(a[b]).hide()
                }
            }
        }
        return false
    })
}
function get1yuandata(g) {
    var a = jQuery("#pminfosInCart").val();
    var c = jQuery.parseJSON(a);
    var d = new Array();
    var e = new Array();
    for (var b = 0; b < c.length; b++) {
        d.push(c[b].pmInfoId);
        e.push(c[b].num)
    }
    var f = g.data;
    jQuery.ajax({url: URLPrefix.shoping_try + "/trial/paifa/ajaxGetHuangouProductForCart.do?callback=?", data: {endUserId: $("#userId").val(), provinceId: currProvinceId, pminfoids: d.toString(), nums: e.toString()}, timeout: 1000, dataType: "jsonp", success: function(h) {
            var i = convert1yuanData(h);
            f = f.concat(i);
            g.data = sort(f);
            filltemplate(g)
        }, error: function(i, j, h) {
            g.data = sort(f);
            filltemplate(g)
        }})
}
function convert1yuanData(a) {
    var e = [];
    var d = a.data;
    if (null != d) {
        for (var b = 0; b < d.length; b++) {
            var c = new Object();
            c.currBuzyType = 3;
            c.startIndexNum = 0;
            c.trackerPrefix = "yhd_1yuan";
            c.productId = d[b].productId;
            c.merchantId = d[b].merchantId;
            c.pmInfoId = 0;
            c.promotionPrice = d[b].currentPrice;
            c.productName = d[b].productName;
            c.picture6060URL = d[b].productPicUrl;
            c.isCanBuyFlag = false;
            c.hasSeriesProducts = false;
            c.promotionLevelId = 0;
            c.promotionId = d[b].promotionId;
            c.num = 0;
            e.push(c)
        }
    }
    return e
}
function sort(f) {
    if ((null != f) && (0 != f.length)) {
        var e = [];
        var c = [];
        var d = [];
        for (var b = 0; b < f.length; b++) {
            var a = f[b].currBuzyType;
            if (1 == a) {
                e.push(f[b])
            } else {
                if (2 == a) {
                    c.push(f[b])
                } else {
                    if (3 == a) {
                        d.push(f[b])
                    }
                }
            }
        }
        f = c.concat(d).concat(e);
        if (f.length > 24) {
            f.length = 24
        }
        for (var b = 0; b < f.length; b++) {
            f[b].startIndexNum = b + 1
        }
        return f
    }
}
function filltemplate(b) {
    jQuery("#special_price_content").setTemplateElement("specPrice_redeBuy_1yuan").processTemplate(b);
    var a = $("#redemptionPromotionList");
    a.show("slow")
}
function inShopChoiceProduct(e) {
    var d = jQuery("#" + e).attr("merchantId");
    var b = jQuery("#productId_" + e).val();
    var a = {merchantId: d, productIds: b, logged: getUserLoggedInPage()};
    var c = "/cart/mod/newCoudan.do?callback=?";
    $.getJSON(c, a, function(h) {
        if (isReqSuccess(h)) {
            var f = jQuery("#cart3_pms_yhd_coudan");
            f.html(h.data);
            var g = $(f).find("ul li");
            if (g.length > 0) {
                coudanTotalPage = Math.ceil(g.length / everyPageCount) - 1
            }
            if (coudanTotalPage > 0) {
                $("#inshop_coudan_fenye").removeClass("btn_dis_color")
            }
            currentOprationCoudanDiv = $(f).html();
            $(".cart3_tejia_list", f).css({marginTop: "0px"})
        }
    })
}
function initPromotionDeleteEvent() {
    var a = 200;
    jQuery("div.offTagTeJShCh").hover(function() {
        jQuery(this).addClass("offTagTeJShChshow")
    }, function() {
        jQuery(this).removeClass("offTagTeJShChshow")
    });
    jQuery("a[name='deletePromotion']").bind("click", function() {
        var c = jQuery(this).parent().parent();
        var b = c.attr("id");
        var e = "normal_" + this.id;
        var d = this;
        if (isNotBatchConfirmFlag() == true) {
            c.remove();
            cart3.ajaxDelete(e, 1, a, b);
            cacheDeletedItems(this);
            showUndoDelItemsTips();
            return false
        } else {
            showDelConfirmDiv(jQuery(this).attr("id"), 1);
            jQuery("button", "#productDelConfirm").unbind().bind("click", function() {
                if (jQuery(this).hasClass("cart3_del_ok")) {
                    c.remove();
                    cart3.ajaxDelete(e, 1, a, b);
                    hidDelConfirmDiv();
                    clearUndoDelCache();
                    cacheDeletedItems(d);
                    showUndoDelItemsTips()
                } else {
                    hidDelConfirmDiv()
                }
                return false
            })
        }
    })
}
function initPromotionListEvent(a) {
    jQuery(a).find(".view-detail-btn").click(function() {
        jQuery("#yhd_pop_win").css({width: "auto", position: "absolute"});
        var h = jQuery(this);
        var g = h.attr("pid");
        var c = g.replace("view_detail_btn_", "");
        var i = "view_detail_list_" + c;
        var e = jQuery("#" + i);
        if (e.hasClass("content_redemption")) {
            var b = "/cart/mod/redemDetail.do?idStr=" + c + "&callback=?";
            $.getJSON(b, null, function(o) {
                if (reqSucceed(o)) {
                    var n = o.data;
                    if (n) {
                        e.find("dl").append(n);
                        e.removeClass("content_redemption")
                    }
                    var k = e.html();
                    if (k) {
                        YHD.popwin(k, 950);
                        var l = $(window).width() - $("#yhd_pop_win").width(), m = $(".pop_win").offset().top + 50;
                        jQuery("#yhd_pop_win").css({left: l / 2 + "px", height: "auto", overflow: "hidden", zoom: "1"});
                        $(".pop_win").css("top", m + "px")
                    }
                }
            })
        } else {
            var d = e.html();
            if (d) {
                YHD.popwin(d, 950);
                var f = $(window).width() - $("#yhd_pop_win").width(), j = $(".pop_win").offset().top + 50;
                jQuery("#yhd_pop_win").css({left: f / 2 + "px", height: "auto", overflow: "hidden", zoom: "1"});
                $(".pop_win").css("top", j + "px")
            }
        }
    });
    jQuery("span > .pop_box4", ".sale_list").removeClass("pop_box4").addClass("pop_box5");
    jQuery("span > .pop_box5", ".sale_list").appendTo($(".sale_list"));
    jQuery(".sale_list").find(".zdsp").hover(function() {
        var c = "zd-" + jQuery(this).attr("vn");
        var g = $(this).parents("dl");
        var d = $(".pro-con>dl").index(g);
        var b = d % 4;
        var f = b * 235 + 41;
        jQuery("#" + c).show().css("left", f);
        if ($.browser.msie && $.browser.version <= 6) {
            var e = jQuery("#" + c).find("ul").height();
            if (e < 93) {
                jQuery("#" + c).find("ul").height(93)
            } else {
                if (e > 160) {
                    jQuery("#" + c).find("ul").height(160)
                } else {
                    jQuery("#" + c).find("ul").height(e)
                }
            }
        }
    }, function() {
        $(".sale_list").find(".pop_box5").hide()
    });
    jQuery(".sale_list").find(".pop_box5").hover(function() {
        jQuery(this).show()
    }, function() {
        jQuery(this).hide()
    });
    jQuery(".pop_box5").find(".close").click(function() {
        $(this).parents(".pop_box5").hide();
        return false
    });
    jQuery(".hg_list").find(".zdsp").hover(function() {
        jQuery(this).parent("dt").addClass("pos_reltv");
        var b = "zd-" + jQuery(this).attr("vn");
        jQuery("#" + b).show();
        if (jQuery.browser.msie && $.browser.version <= 6) {
            var c = jQuery("#" + b).find("ul").height();
            if (c < 93) {
                jQuery("#" + b).find("ul").height(93)
            } else {
                if (c > 140) {
                    jQuery("#" + b).find("ul").height(140)
                } else {
                    jQuery("#" + b).find("ul").height(c)
                }
            }
        }
    }, function() {
        var b = "zd-" + jQuery(this).attr("vn");
        jQuery(this).parent("dt").removeClass("pos_reltv");
        jQuery("#" + b).hide()
    });
    jQuery(".pop_box4").find(".close").click(function() {
        $(this).parents(".pop_box4").hide();
        return false
    })
}
function ajaxChooseGift(a, e, f, b, d, g) {
    if (g && g != "" && g != "null") {
        gotracker(g, "cart2ChoiceGiftBtn", b)
    } else {
        gotracker("-" + f, "cart2ChoiceGiftBtn", b)
    }
    var c = "/cart/opt/addPromo.do?promotionIDs=" + a + "&promotionLevelIDs=" + e + "&promotionGiftIDs=" + b + "&promotionGiftMerchantIDs=" + f + "&promotionGiftNum=" + d + "&callback=?";
    cart3.ajaxRefresh(c);
    hideUndoDelItemsTips();
    return false
}
function chooseGift(a, e, f, b, d, g) {
    if (g && g != "" && g != "null") {
        gotracker(g, "cart2ChoiceGiftBtn", b)
    } else {
        gotracker("-" + f, "cart2ChoiceGiftBtn", b)
    }
    var c = "/cart/opt/addPromo.do?promotionIDs=" + a + "&promotionLevelIDs=" + e + "&promotionGiftIDs=" + b + "&promotionGiftMerchantIDs=" + f + "&promotionGiftNum=" + d + "&callback=?";
    cart3.ajaxRefresh(c, "other");
    jQuery("#yhd_pop_win").jqmHide();
    hideUndoDelItemsTips();
    return false
}
function addFreePromotion(a, f, g, b, e, h) {
    if (h && h != "" && h != "null") {
        gotracker(h, "cart2ChoiceGiftBtn", b)
    } else {
        gotracker("-" + g, "cart2ChoiceGiftBtn", b)
    }
    var d = "/cart/opt/addPromo.do?promotionIDs=" + a + "&promotionLevelIDs=" + f + "&promotionGiftIDs=" + b + "&promotionGiftMerchantIDs=" + g + "&promotionGiftNum=" + e + "&callback=?";
    cart3.blockUI();
    var c = $('a[name="cart2Checkbox"]').map(function() {
        return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
    }).get().join(",");
    $.getJSON(d, {cart2Checkbox: c, logged: getUserLoggedInPage()}, function(i) {
        if (reqSucceed(i)) {
            cart3.unblockUI(true);
            popIfHasFreePromotionInCart()
        } else {
            cart3.unblockUI(false)
        }
    });
    hideUndoDelItemsTips()
}
function popIfHasFreePromotionInCart() {
    var b = "/cart/mod/promoBC.do?callback=?";
    var a = $('a[name="cart2Checkbox"]').map(function() {
        return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
    }).get().join(",");
    $.getJSON(b, {proShow: "1", cart2Checkbox: a, logged: getUserLoggedInPage()}, function(d) {
        if (isReqSuccess(d)) {
            if ("empty" == jQuery.trim(d.data) || d.data.indexOf("directPassFlag") >= 0) {
                goToDelivery()
            } else {
                YHD.popwin(d.data, 943, "auto");
                var c = $(window).width() - $("#yhd_pop_win").width();
                jQuery("#yhd_pop_win").css({left: c / 2 + "px", width: "943px", height: "auto", position: "absolute"});
                initPromotionListEvent(jQuery("#promotion-list2"))
            }
        }
    })
}
function buySeriesGift(a, f, g, e, d, h) {
    gotracker("-" + g, "cart2ChoiceGiftBtn", e);
    jQuery("#seriesProduct").hide();
    jQuery("#seriesProduct").empty();
    var c = "/cart/opt/addPromo.do?promotionIDs=" + a + "&promotionLevelIDs=" + f + "&promotionGiftIDs=" + e + "&promotionGiftMerchantIDs=" + g + "&promotionGiftNum=" + d + "&callback=?";
    if (h) {
        cart3.blockUI();
        var b = $('a[name="cart2Checkbox"]').map(function() {
            return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
        }).get().join(",");
        $.getJSON(c, {cart2Checkbox: b, logged: getUserLoggedInPage()}, function(i) {
            if (reqSucceed(i)) {
                cart3.unblockUI(true);
                popIfHasFreePromotionInCart()
            } else {
                cart3.unblockUI(false)
            }
        })
    } else {
        cart3.ajaxRefresh(c)
    }
    if (jQuery("#yhd_pop_win").is(":visible")) {
        jQuery("#yhd_pop_win").jqmHide()
    }
    hideUndoDelItemsTips();
    return false
}
function showOptionalDetailDiv(c, b) {
    var a = jQuery(b).parent().find(".none");
    if (a.size() > 0) {
        if (jQuery.browser.msie) {
            jQuery("#optionalDiv").css("left", c.clientX + document.documentElement.scrollLeft + 20);
            jQuery("#optionalDiv").css("top", c.clientY + document.documentElement.scrollTop - 120)
        } else {
            jQuery("#optionalDiv").css("left", c.pageX + 20);
            jQuery("#optionalDiv").css("top", c.pageY - 120)
        }
        jQuery("#optionalDiv").html(a.html());
        jQuery("#optionalDiv").css("z-index", "9998");
        jQuery("#optionalDiv").css("display", "block")
    }
}
function hideOptionalDetailDiv() {
    jQuery("#optionalDiv").css("display", "none")
}
var floatTheseProductTimeout;
function showFloatTheseProduct(b) {
    clearTimeout(floatTheseProductTimeout);
    jQuery("div[id^='ap_titlebox_']").not("#ap_titlebox_" + b).hide();
    jQuery("#titlemenu_" + b).removeClass();
    jQuery("#titlemenu_" + b).addClass("ap_titlebox_menu_off");
    jQuery("#ap_titlebox_" + b).show();
    var a = document.getElementById("freePromotionListDiv");
    if (a) {
    } else {
        if (jQuery(window).width() - jQuery("#titlemenu_" + b).offset().left < 1000) {
            jQuery("#ap_titlebox_" + b).css("left", jQuery("#titlemenu_" + b).offset().left - 397 + "px");
            jQuery("#ap_titlebox_" + b).css("top", jQuery("#titlemenu_" + b).offset().top + 20 + "px")
        } else {
            jQuery("#ap_titlebox_" + b).css("left", jQuery("#titlemenu_" + b).offset().left + "px");
            jQuery("#ap_titlebox_" + b).css("top", jQuery("#titlemenu_" + b).offset().top + 20 + "px")
        }
    }
}
function hideFloatTheseProduct(a) {
    floatTheseProductTimeout = setTimeout("jQuery('#ap_titlebox_" + a + "').hide()", 100);
    jQuery("#titlemenu_" + a).removeClass();
    jQuery("#titlemenu_" + a).addClass("ap_titlebox_menu_on")
}
function openSearchUrl() {
    jQuery(".promo_title > span[surl]").click(function() {
        var a = jQuery(this).attr("surl");
        window.open(jQuery(this).attr("surl"));
        return false
    })
}
var seriesGift;
function cancelChecked(a) {
    $(a).removeClass("cart3_radio_checked");
    $(a).attr("subGiftID", $(a).attr("promotionGiftID"))
}
function clickGiftChecked(e) {
    if ($(e).hasClass("cart3_radio_checked")) {
        cancelChecked(e);
        return false
    }
    var c = $(e).attr("promotionID");
    var h = $(e).attr("promotionLevelID");
    var d = $(e).attr("promotionGiftID");
    var i = $(e).attr("promotionGiftMerchantID");
    var b = $(e).attr("promotionGiftNum");
    var a = $(e).attr("giftType");
    var g = $(e).attr("selectType");
    var f = $(e).attr("name");
    if (g == 2) {
        $('a[name="' + f + '"]').each(function() {
            cancelChecked($(this))
        })
    }
    $(e).addClass("cart3_radio_checked");
    if ($(e).attr("isSeries") == 1) {
        seriesGift = $(e);
        chooseSeriesGift(c, h, i, d, b, e, 2)
    }
}
function ajaxBatchChooseGift() {
    giftDivClose();
    var b = new Array();
    var a = new Array();
    var e = new Array();
    var g = new Array();
    var f = new Array();
    var d = 0;
    var h = "";
    $(".cart3_zengpin_dialog .cart3_radio_checked").each(function() {
        b[d] = $(this).attr("promotionID");
        a[d] = $(this).attr("promotionLevelID");
        e[d] = $(this).attr("subGiftID");
        g[d] = $(this).attr("promotionGiftMerchantID");
        f[d] = $(this).attr("promotionGiftNum");
        gotracker("-" + $(this).attr("promotionGiftMerchantID"), "cart2ChoiceGiftBtn", $(this).attr("promotionGiftID"));
        h += "&promotionIDs=" + b[d] + "&promotionLevelIDs=" + a[d] + "&promotionGiftIDs=" + e[d] + "&promotionGiftMerchantIDs=" + g[d] + "&promotionGiftNum=" + f[d];
        d++
    });
    if (d == 0) {
        alert("请选择要领取的赠品！");
        return false
    }
    h = h.substring(1, h.length);
    var c = "/cart/opt/addPromo.do?" + h + "&callback=?";
    cart3.ajaxRefresh(c);
    return false
}
;
var warningMsgTimeout = null;
var showMinusTipsTimeout = null;
var showCODAlert = false;
var coudanTotalPage = 0;
var coudanCurrentPage = 0;
var everyPageCount = 8;
var yuanBuyCurrentPage = 0;
var yuanBuyTotalPage = 0;
var yuanBuyPageCount = 4;
var cart_province_id;
var cart_province_name;
var cart_city_id;
var cart_city_name;
var cart_county_id;
var cart_county_name;
var currentOprationCoudanBag;
var currentOprationCoudanDiv;
var UNDO_DEL_CACHE = {normal: [], point: [], optional: [], landing: [], promotion: [], sysGift: [], pointLotteryGift: [], serialCombine: []};
var recentDelTips = {ie6: navigator.appVersion.indexOf("MSIE 6") > -1, the: null, theY: 0, dest: 3000, timer: 0, isFixed: false, init: function() {
        var a = this;
        a.theY = $(".del_tips").offset().top;
        a.hide();
        $(window).scroll(function() {
            if (a.isFixed) {
                a.move()
            }
        });
        $(".del_tips").find("span").bind("click", undoDelCartItems);
        $(".del_tips").find(".tips_close").bind("click", a.hide)
    }, move: function() {
        var b = this;
        b.the = $(".del_tips");
        var a = $(window).scrollTop();
        if (a > b.theY) {
            b.the.addClass("del_tips_on").css({"margin-left": -b.the.outerWidth() / 2});
            if (b.ie6) {
                b.the.css({position: "absolute", top: a})
            }
        } else {
            b.the.removeClass("del_tips_on").css({"margin-left": "10px"});
            b.isFixed = false
        }
    }, show: function() {
        var a = this;
        a.isFixed = true;
        $(".del_tips").show();
        a.move();
        clearInterval(a.timer);
        a.timer = setInterval(function() {
            a.isFixed = false;
            a.the.removeClass("del_tips_on").css({"margin-left": "10px"})
        }, a.dest)
    }, hide: function() {
        $(".del_tips").hide()
    }};
function showUndoDelItemsTips() {
    var e = [];
    for (var c in UNDO_DEL_CACHE) {
        var d = UNDO_DEL_CACHE[c];
        for (var b = 0; b < d.length; b++) {
            e.push(d[b]["cartItemName"])
        }
    }
    if (e.length > 0) {
        var a = "已删除&nbsp;&nbsp;";
        if (e[0].length > 15) {
            a += e[0].substring(0, 15) + "..."
        } else {
            a += e[0]
        }
        if (e.length > 1) {
            a += " 等 " + e.length + "件 商品"
        }
        $(".del_tips .fl span").html(a);
        recentDelTips.show()
    }
}
function hideUndoDelItemsTips() {
    recentDelTips.hide()
}
function clearUndoDelCache() {
    if (UNDO_DEL_CACHE) {
        UNDO_DEL_CACHE.normal = [];
        UNDO_DEL_CACHE.point = [];
        UNDO_DEL_CACHE.optional = [];
        UNDO_DEL_CACHE.landing = [];
        UNDO_DEL_CACHE.promotion = [];
        UNDO_DEL_CACHE.sysGift = [];
        UNDO_DEL_CACHE.pointLotteryGift = [];
        UNDO_DEL_CACHE.serialCombine = []
    }
}
function cacheDeletedItems(k) {
    if (!k) {
        return
    }
    var l = $(k);
    var n = l.attr("id");
    var m = l.attr("cartItemType");
    var b = l.attr("cartItemName");
    switch (m) {
        case"0":
            var e = l.attr("productId");
            var f = l.parent().parent().find("div.num > input[type=hidden]").val();
            if (!f || !e) {
                return
            }
            UNDO_DEL_CACHE.normal.push({productId: e, num: f, cartItemName: b});
            break;
        case"1":
            if (l.attr("productId") && l.attr("merchantId") && l.attr("num")) {
                UNDO_DEL_CACHE.point.push({productId: l.attr("productId"), merchantId: l.attr("merchantId"), num: l.attr("num"), cartItemName: b})
            }
            break;
        case"2":
            var h = l.parents(".cart3_list");
            var a = [];
            var j = [];
            var o = [];
            var g = [];
            var d = [];
            h.find(".mergeTr input[name=promotionIDs]").each(function(p) {
                a.push(this.value)
            });
            h.find(".mergeTr input[name=promotionLevelIDs]").each(function(p) {
                j.push(this.value)
            });
            h.find(".mergeTr input[name=promotionGiftIDs]").each(function(p) {
                o.push(this.value)
            });
            h.find(".mergeTr input[name=promotionGiftMerchantIDs]").each(function(p) {
                g.push(this.value)
            });
            h.find(".mergeTr input[name=promotionGiftNum]").each(function(p) {
                d.push(this.value)
            });
            UNDO_DEL_CACHE.optional.push({promotionIDs: a, promotionLevelIDs: j, promotionGiftIDs: o, promotionGiftMerchantIDs: g, promotionGiftNum: d, cartItemName: b});
            break;
        case"3":
            if (l.attr("productId") && l.attr("merchantId") && l.attr("promotionId") && l.attr("num")) {
                UNDO_DEL_CACHE.landing.push({productId: l.attr("productId"), merchantId: l.attr("merchantId"), promotionId: l.attr("promotionId"), num: l.attr("num"), cartItemName: b, winnerId: l.attr("winnerId")})
            }
            break;
        case"7":
            var i = l.attr("presentId");
            if (i) {
                UNDO_DEL_CACHE.sysGift.push({userPresentID: i, cartItemName: b})
            }
            break;
        case"8":
            var c = l.attr("pointLotteryId");
            if (c) {
                UNDO_DEL_CACHE.pointLotteryGift.push({pointLotteryId: c, cartItemName: b})
            }
            break
        }
}
function undoDelCartItems() {
    if (UNDO_DEL_CACHE) {
        if (UNDO_DEL_CACHE.normal) {
            $.each(UNDO_DEL_CACHE.normal, function(a, b) {
                ajaxAddProductToCart(b.productId, b.num, "")
            });
            UNDO_DEL_CACHE.normal = []
        }
        if (UNDO_DEL_CACHE.point) {
            $.each(UNDO_DEL_CACHE.point, function(a, b) {
                ajaxAddPointProductToCart(b.productId, b.merchantId, b.num, "")
            });
            UNDO_DEL_CACHE.point = []
        }
        if (UNDO_DEL_CACHE.optional) {
            $.each(UNDO_DEL_CACHE.optional, function(a, b) {
                ajaxAddOptional(b.promotionIDs, b.promotionLevelIDs, b.promotionGiftIDs, b.promotionGiftMerchantIDs, b.promotionGiftNum)
            });
            UNDO_DEL_CACHE.optional = []
        }
        if (UNDO_DEL_CACHE.landing) {
            $.each(UNDO_DEL_CACHE.landing, function(a, b) {
                ajaxAddLandingPageToCart(b.productId, b.merchantId, b.promotionId, b.num, b.winnerId)
            });
            UNDO_DEL_CACHE.landing = []
        }
        if (UNDO_DEL_CACHE.promotion) {
            $.each(UNDO_DEL_CACHE.promotion, function(a, b) {
                ajaxAddGift(b.promotionId, b.levelId, b.merchantId, b.giftId, b.promotionGiftNum)
            });
            UNDO_DEL_CACHE.promotion = []
        }
        if (UNDO_DEL_CACHE.sysGift) {
            $.each(UNDO_DEL_CACHE.sysGift, function(a, b) {
                ajaxAddSysGift(b.userPresentID)
            });
            UNDO_DEL_CACHE.sysGift = []
        }
        if (UNDO_DEL_CACHE.pointLotteryGift) {
            $.each(UNDO_DEL_CACHE.pointLotteryGift, function(a, b) {
                ajaxAddPointLotteryGift(b.pointLotteryId)
            });
            UNDO_DEL_CACHE.pointLotteryGift = []
        }
        if (UNDO_DEL_CACHE.serialCombine) {
            $.each(UNDO_DEL_CACHE.serialCombine, function(a, b) {
                ajaxAddSerialCombineToCart(b.mainPmId, b.mainNum, b.subPmIds)
            });
            UNDO_DEL_CACHE.serialCombine = []
        }
    }
    hideUndoDelItemsTips()
}
function ajaxAddOptional(d, a, g, f, c) {
    var b = "/cart/addOptional.do?&isAjax=1&callback=?";
    for (var e = 0;
            e < d.length; e++) {
        b += "&promotionIDs=" + d[e]
    }
    for (var e = 0; e < a.length; e++) {
        b += "&promotionLevelIDs=" + a[e]
    }
    for (var e = 0; e < g.length; e++) {
        b += "&promotionGiftIDs=" + g[e]
    }
    for (var e = 0; e < f.length; e++) {
        b += "&promotionGiftMerchantIDs=" + f[e]
    }
    for (var e = 0; e < c.length; e++) {
        b += "&promotionGiftNum=" + c[e]
    }
    cart3.ajaxRefresh(b)
}
function ajaxAddGift(a, e, f, b, d) {
    var c = "/cart/opt/addPromo.do?promotionIDs=" + a + "&promotionLevelIDs=" + e;
    c = c + "&promotionGiftIDs=" + b + "&promotionGiftMerchantIDs=" + f;
    c = c + "&promotionGiftNum=" + d + "&callback=?";
    cart3.ajaxRefresh(c)
}
function ajaxAddSysGift(b) {
    var a = "/cart/addSysGift.do?userPresentID=" + b + "&isAjax=1&callback=?";
    cart3.ajaxRefresh(a)
}
function ajaxAddPointLotteryGift(b) {
    var a = "/cart/addPointLotteryGift.do?pointLotteryId=" + b + "&isAjax=1&callback=?";
    cart3.ajaxRefresh(a)
}
function ajaxAddSerialCombineToCart(b, d, c) {
    var a = "/cart/opt/addCombine.do?mainPmId=" + b + "&mainNum=" + d + "&subPmIds=" + c + "&callback=?";
    cart3.ajaxRefresh(a)
}
var choosePay = function() {
    $(".hg_cate_list").each(function() {
        var g = $(this).find(".hg_cate_pro");
        var e = g.children(".hg_cate_item");
        var h = e.length;
        g.css({width: (h - 1) * 83 + 170});
        e.bind({mouseenter: function() {
                $(this).addClass("hover").siblings().removeClass("hover")
            }, mouseleave: function() {
                $(this).removeClass("hover")
            }});
        var b = $(this).find(".jspPane");
        var d = $(this).find(".jspArrowRight");
        var f = $(this).find(".jspArrowLeft");
        var c = 0;
        var a = -((h - 5) * 83 + 170);
        f.click(function() {
            var i = b.css("left");
            if (typeof i == "undefined") {
                i = 0
            } else {
                i = parseInt(i)
            }
            var i = i + 83;
            if (i > c) {
                i = c
            }
            b.css({left: i})
        });
        d.click(function() {
            if (h > 5) {
                var i = b.css("left");
                if (typeof i == "undefined") {
                    i = 0
                } else {
                    i = parseInt(i)
                }
                i = i - 83;
                if (i < a + 83) {
                    i = a
                }
                if (i < a) {
                    i = a
                }
                b.css({left: i})
            }
        })
    })
};
function splitCheckout(b) {
    var c = $("#checkoutTypes").val();
    if (typeof c != "undefined" && !!c) {
        var a = c.split(",");
        if (a.length > 1) {
            choosePay();
            $("#hg_cart_dialog .close_tcg").click(function() {
                $("#checkoutTypeContents").hide()
            });
            $("#checkoutTypeContents").show();
            return
        } else {
            if (a.length == 1) {
                goCheckout(a[0])
            }
        }
    }
    b()
}
function goCheckout(e, c) {
    var b = [];
    $('a[name="cart2Checkbox"]').each(function() {
        var h = $(this);
        if (e == h.attr("checkoutType")) {
            b.push(h.attr("value") + "=" + ((h.attr("data-checked") == "yes") ? "1" : "0"))
        }
    });
    b = b.join(",");
    cart3.blockUI();
    var g = URLPrefix.shoping_checkout_self + "/checkoutV3/index.do";
    if (typeof c != "undefined" && c) {
        g += "?splitCheckout=1"
    }
    var f = $("#checkoutForm");
    f.attr("action", g);
    var a = $("#checkoutForm_cart2Checkbox");
    a.val(b);
    var d = $("#cartSuppressList").val();
    if (d && d != "") {
        var a = $("#checkoutForm_cartSuppress");
        a.val(d)
    }
    f.submit()
}
function confirmToPay() {
//    if (!yhdPublicLogin.checkLogin()) {
//        jQuery("#freePromotionPopDiv").hide().empty();
//        gotracker("2", "popLoginWinOnCartPage", null);
//        yhdPublicLogin.showLoginDivNone(URLPrefix.shoping_passport, false, "", ajaxQueue.confirm, 2)
//    } else {
        ajaxQueue.confirm()
//    }
}
function goToDelivery() {
    var a = function() {
        if (!yhdPublicLogin.checkLogin()) {
            jQuery("#freePromotionPopDiv").hide().empty();
            gotracker("2", "popLoginWinOnCartPage", null);
            yhdPublicLogin.showLoginDivNone(URLPrefix.shoping_passport, false, "", doGoToDelivery, 2)
        } else {
            doGoToDelivery()
        }
    };
    splitCheckout(a)
}
function doGoToDelivery() {
    var b = $('a[name="cart2Checkbox"]').map(function() {
        return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
    }).get().join(",");
    cart3.blockUI();
    var e = URLPrefix.shoping_checkout_self + "/checkoutV3/index.do";
    var d = $("#checkoutForm");
    d.attr("action", e);
    var a = $("#checkoutForm_cart2Checkbox");
    a.val(b);
    var c = $("#cartSuppressList").val();
    if (c && c != "") {
        var a = $("#checkoutForm_cartSuppress");
        a.val(c)
    }
    d.submit()
}
function doDelete(c, d, b, a) {
    if (isNotBatchConfirmFlag() == true) {
        doDeleteOk(c, d, b, a)
    } else {
        showDelConfirmDiv(jQuery(c).attr("id"), 1);
        jQuery("button", "#productDelConfirm").unbind().bind("click", function() {
            if (jQuery(this).hasClass("cart3_del_ok")) {
                doDeleteOk(c, d, b, a);
                hidDelConfirmDiv()
            } else {
                hidDelConfirmDiv()
            }
            return false
        })
    }
}
function doDeleteOk(e, f, c, b) {
    var a = $(e).parent().parent().parent().attr("id");
    var d = $(e).parent().parent();
    if (d.hasClass("mergeTr") || d.hasClass("item_group")) {
        d = d.parent()
    } else {
        if (d.find(".line").length < 1) {
            d = d.parent()
        }
    }
    d.remove();
    if ($("#item_tr_more_" + c + "_" + b).size() > 0) {
        $("#item_tr_more_" + c + "_" + b).remove()
    }
    cart3.ajaxDelete(f, 0, 200, a);
    if (isNotBatchConfirmFlag() == false) {
        clearUndoDelCache()
    }
    cacheDeletedItems(e);
    showUndoDelItemsTips()
}
function ajaxDeleteItem(c, d, b, a) {
    doDelete(c, d, b, a)
}
function clearAllCart() {
    showDelConfirmDiv("clearAllCart", 3);
    jQuery("button", "#productDelConfirm").unbind().bind("click", function() {
        if (jQuery(this).hasClass("cart3_del_ok")) {
            var a = "/cart/opt/clear.do?callback=?";
            cart3.ajaxRefresh(a);
            gotracker("2", "clearAllCart", null);
            hidDelConfirmDiv()
        } else {
            hidDelConfirmDiv()
        }
        return false
    })
}
function deleteWarningItems(a) {
    showDelConfirmDiv("deleteAllWarningItems", 4);
    jQuery("button", "#productDelConfirm").unbind().bind("click", function() {
        if (jQuery(this).hasClass("cart3_del_ok")) {
            var b = a.substring(1, a.length - 1);
            var d = b.split(",");
            for (var c = 0; c < d.length; c++) {
                cart3.ajaxDelete(d[c].trim(), 0, 200, "")
            }
            gotracker("2", "deleteWarningItems", null);
            hidDelConfirmDiv()
        } else {
            hidDelConfirmDiv()
        }
        return false
    })
}
function ajaxBatchDelete() {
    var a = "";
    if (!ckbMan.anyChecked()) {
        a = 0
    } else {
        a = 2
    }
    showDelConfirmDiv("batchDelete", a);
    clearUndoDelCache();
    jQuery("button", "#productDelConfirm").unbind().bind("click", function() {
        if (jQuery(this).hasClass("cart3_del_ok")) {
            jQuery("#showBatchConfirmFlag").val(1);
            jQuery('a[name="cart2Checkbox"]').each(function() {
                if ($(this).attr("data-checked") == "yes") {
                    jQuery(this).parent().find(".btn_del").trigger("click")
                }
            });
            jQuery("#showBatchConfirmFlag").val(0);
            hidDelConfirmDiv()
        } else {
            hidDelConfirmDiv()
        }
        return false
    })
}
function isNotBatchConfirmFlag() {
    var a = jQuery("#showBatchConfirmFlag").val();
    if (a == 1 || a == "1") {
        return true
    } else {
        return false
    }
}
function showDelConfirmDiv(g, e) {
    if (isNotBatchConfirmFlag() == true) {
        return
    }
    var b = jQuery("#" + g).offset();
    var a = b.left;
    var f = b.top;
    jQuery("#productDelConfirm .cart3_del_cancel").show();
    if (e == 0) {
        a = a - 68;
        f = f - 120;
        jQuery("#productDelConfirm #tips").html("请选择需要删除的商品。");
        jQuery("#productDelConfirm .cart3_del_cancel").hide()
    } else {
        if (e == 2) {
            a = a - 68;
            f = f - 120;
            jQuery("#productDelConfirm #tips").html("确定从购物车中删除所有选中商品？")
        } else {
            if (e == 3) {
                a = a - 68;
                f = f - 120;
                jQuery("#productDelConfirm #tips").html("确定删除所有商品？")
            } else {
                if (e == 4) {
                    a = a - 68;
                    f = f - 120;
                    jQuery("#productDelConfirm #tips").html("确定删除购物车中所有失效商品？")
                } else {
                    a = a - 166;
                    f = f - 110;
                    var d = $(window).scrollTop();
                    if (d > f) {
                        f = f + (d - f)
                    }
                    jQuery("#productDelConfirm #tips").html("确定从购物车中删除吗？")
                }
            }
        }
    }
    var c = jQuery("#productDelConfirm");
    c.css({left: a});
    c.css({top: f});
    c.fadeIn(500)
}
function hidDelConfirmDiv() {
    jQuery("#productDelConfirm").fadeOut(800)
}
function ajaxDeleteAllWaringItem() {
    var a = "/cart/opt/deleteAllWaringItems.do?callback=?";
    cart3.ajaxRefresh(a)
}
function checkOverLimit(l, h, b) {
    var r = jQuery("#" + l).attr("oriNum");
    var d = parseInt(r);
    var i = jQuery("#" + l).attr("limitArgs");
    var j = itemGroup(jQuery("#" + l).parent().parent());
    var o = i.split("_");
    var q = parseInt(o[0]);
    var s = parseInt(o[1]);
    var n = parseInt(o[2]);
    var f = parseInt(o[3]);
    var g = parseInt(o[4]);
    var e = parseInt(o[5]);
    var m = jQuery("#" + l).attr("presell");
    if (!m) {
        m = "false"
    }
    var p = "";
    var c = h;
    var k = false;
    switch (b) {
        case 0:
            if (q > 0) {
                if (h > q) {
                    p = "该商品库存有限，您最多只能购买" + q + "件";
                    c = q;
                    k = c == d
                } else {
                    if (f > 1 && h < f) {
                        p = "该商品[" + f + "件起购]";
                        c = f;
                        k = c == d
                    } else {
                        if (e == 2) {
                            if (n > 0 && h > n) {
                                p = "该商品[限购" + n + "件],超过则以" + chineseUrl + "价购买"
                            }
                        } else {
                            if (e == 3) {
                                if (h > s && s > 0) {
                                    p = "该商品[每人限购" + s + "件],超过则以" + chineseUrl + "价购买"
                                }
                            } else {
                                if (n > 0 && h > n && (e == 5 || m == "true")) {
                                    p = "该商品[限购" + n + "件]";
                                    c = n;
                                    k = c == d
                                } else {
                                    if (e == 6) {
                                        if (s > 0 && s < n) {
                                            if (h > s) {
                                                p = "该商品[每人限购" + s + "件]"
                                            }
                                        } else {
                                            if (n > 0 && h > n) {
                                                p = "该商品[限购" + n + "件]"
                                            }
                                        }
                                    } else {
                                        if (e == 4) {
                                            if (s > 0 && s < n) {
                                                if (h > s) {
                                                    p = "该商品[每人限购" + s + "件],超过则以" + chineseUrl + "价购买"
                                                }
                                            } else {
                                                if (n > 0 && h > n) {
                                                    p = "该商品[限购" + n + "件],超过则以" + chineseUrl + "价购买"
                                                }
                                            }
                                        } else {
                                            p = ""
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                c = 0;
                p = "该商品已下架或无库存"
            }
            break;
        case 1:
            if (q > 0) {
                if (h > q) {
                    p = "该商品库存有限，您最多只能购买" + q + "件";
                    c = q;
                    k = c == d
                }
            } else {
                c = 0;
                p = "该商品已下架或无库存"
            }
            break;
        case 2:
            if (g > 0 && h > g) {
                p = "该商品为特价商品，您最多只能购买" + g + "件";
                c = g;
                k = c == d
            } else {
                if (f > 1 && h < f) {
                    p = "该商品[" + f + "件起购]";
                    c = f;
                    k = c == d
                }
            }
            break;
        case 3:
            if (q > 0) {
                if (h > q) {
                    p = "该商品库存有限，您最多只能购买" + q + "件";
                    c = q;
                    k = c == d
                }
            } else {
                c = 0;
                p = "该商品已下架或无库存"
            }
            break;
        case 4:
            if (q > 0) {
                if (h > q) {
                    p = "该商品库存有限，您最多只能购买" + q + "件";
                    c = q;
                    k = c == d
                }
            } else {
                c = 0;
                p = "该商品已下架或无库存"
            }
            break
    }
    if (j.find(".tr-error").size() > 0) {
        return true
    }
    if (p && p.length > 0 && c > 0) {
        jQuery("#" + l).val(c);
        j.addClass("tr-error");
        var a = j.find(".tips_2");
        a.html('<strong class="orange">' + p + "</strong>").show();
        if (warningMsgTimeout != null) {
            clearTimeout(warningMsgTimeout)
        }
        warningMsgTimeout = setTimeout(function() {
            a.fadeOut();
            j.removeClass("tr-error")
        }, 3000)
    }
    return k
}
function increment(f, g, e, a) {
    var b = jQuery("#" + f).val();
    var d = /^[1-9]\d{0,2}$/g;
    if (!b.match(d)) {
        alert("输入的数量有误,应为[1-999]");
        jQuery("#" + f).val(1);
        b = 1
    }
    var c = parseInt(b) + 1;
    if (c > 999) {
        c = 999
    }
    jQuery("#" + f).val(c);
    if (e == 2) {
        calLandingTotal(f, g, a)
    } else {
        if (e == 3) {
            calPointProductTotal(f, g)
        } else {
            if (e == 4) {
                calCombineNumTotal(f)
            } else {
                calSubTotal(f, g, e)
            }
        }
    }
}
function decrement(f, g, e, a) {
    var b = jQuery("#" + f).val();
    var d = /^[1-9]\d{0,2}$/g;
    if (!b.match(d)) {
        alert("输入的数量有误,应为[1-999]");
        jQuery("#" + f).val(1);
        b = 1
    }
    var c = parseInt(b) - 1;
    if (c < 1) {
        var h = jQuery("#" + f).parent().parent().find(".btn_del");
        if (jQuery("#" + f).parent().parent().find(".btn_del").length > 0) {
            h.click()
        }
        return false
    }
    jQuery("#" + f).val(c);
    if (e == 2) {
        calLandingTotal(f, g, a)
    } else {
        if (e == 3) {
            calPointProductTotal(f, g)
        } else {
            if (e == 4) {
                calCombineNumTotal(f)
            } else {
                calSubTotal(f, g, e)
            }
        }
    }
}
function calSubTotal(i, h, g) {
    var f = jQuery("#" + i).val();
    var c = /^[1-9]\d{0,2}$/g;
    if (!f.match(c)) {
        alert("输入的数量有误,应为[1-999]");
        jQuery("#" + i).val(1);
        f = 1
    }
    var b = jQuery("#" + i).attr("id");
    var e = b.split("_")[1];
    if (!checkOverLimit(i, f, g)) {
        f = jQuery("#" + i).val();
        showMinusTips(i, f, g, e, h);
        var d = calItemNum(e, h, g, f);
        d = d > 999 ? 999 : d;
        var a = "/cart/opt/editNum.do?productId=" + e + "&num=" + d + "&merchantId=" + h + "&callback=?";
        cart3.ajaxNum(a, false, 500, e, h);
        return true
    }
    return false
}
function showMinusTips(n, g, k, f, m) {
    if (k != 0) {
        return
    }
    var h = jQuery("#" + n).attr("oriNum");
    var e = parseInt(h);
    var i = $("input[type='hidden'][name='num_" + f + "_" + m + "_1']");
    if (g < e && i.size() > 0) {
        var l = jQuery("#" + n).parent().parent();
        var a = jQuery("#" + n).attr("limitArgs");
        var c = a.split("_");
        var d = parseInt(c[1]);
        var j = parseInt(c[2]);
        l.addClass("tr-error");
        var b = l.find(".tips_2");
        b.html('<strong class="orange">该商品[' + (e == d ? "每人" : "") + "限购" + e + "件],优先减去" + chineseUrl + "价商品</strong>").show();
        if (showMinusTipsTimeout != null) {
            clearTimeout(showMinusTipsTimeout)
        }
        showMinusTipsTimeout = setTimeout(function() {
            b.fadeOut();
            l.removeClass("tr-error")
        }, 3000)
    }
}
function calItemNum(e, f, d, c) {
    var b = parseInt(c);
    var a = $("input[type='hidden'][name='num_" + e + "_" + f + "_" + (d == 0 ? 1 : 0) + "']");
    if (a.size() > 0) {
        b += parseInt(a.val())
    }
    return b
}
function calLandingTotal(f, g, a) {
    var c = jQuery("#" + f).val();
    var e = /^[1-9]\d{0,2}$/g;
    if (!c.match(e)) {
        alert("输入的数量有误,应为[1-999]");
        f.value = "1";
        c = 1
    }
    var h = jQuery("#" + f).attr("id");
    var d = h.split("_")[1];
    if (!checkOverLimit(f, c, 2)) {
        c = jQuery("#" + f).val();
        var b = "/cart/opt/editLandingNum.do?productId=" + d + "&num=" + c + "&merchantId=" + g + "&promotionId=" + a + "&callback=?";
        cart3.ajaxLandingNum(b, false, 500, d, g, a)
    }
}
function calCombineNumTotal(d) {
    var b = jQuery("#" + d).val();
    var c = /^[1-9]\d{0,2}$/g;
    if (!b.match(c)) {
        alert("输入的数量有误,应为[1-999]");
        d.value = "1";
        b = 1
    }
    var e = jQuery("#" + d).attr("cartItemVoId");
    if (!checkOverLimit(d, b, 4)) {
        b = jQuery("#" + d).val();
        var a = "/cart/opt/editNum.do?cartItemVoId=" + e + "&num=" + b + "&callback=?";
        cart3.ajaxCombineNum(a, false, 500, e)
    }
}
function calPointProductTotal(e, g) {
    var b = jQuery("#" + e).val();
    var d = /^[1-9]\d{0,2}$/g;
    if (!b.match(d)) {
        alert("输入的数量有误,应为[1-999]");
        e.value = "1";
        b = 1
    }
    var h = jQuery("#" + e).attr("id");
    var c = h.split("_")[1];
    var f = jQuery("#" + e).attr("cartItemVoId");
    if (!checkOverLimit(e, b, 3)) {
        b = jQuery("#" + e).val();
        var a = "/cart/opt/editPointProdNum.do?cartItemVoId=" + f + "&num=" + b + "&callback=?";
        cart3.ajaxPointProdNum(a, false, 500, c, g)
    }
}
function addToCart2(d, c, g, b, a, f) {
    var e = "cart2ChoiceSeriesBtn";
    gotracker("-" + g, e, c);
    addToCart(d, c, g, b, null, e)
}
function addSubProductToCart(d, e, b) {
    var c = "cart2ChoiceSeriesBtn";
    gotracker("-" + e, c, d);
    var a = "/cart/opt/add.do?productId=" + d + "&num=" + b + "&linkPosition=" + c + "&callback=?";
    cart3.ajaxRefresh(a);
    jQuery("#seriesProduct").hide();
    jQuery("#seriesProduct").empty();
    return false
}
function closeSeriesDiv() {
    jQuery("#seriesProduct").hide();
    jQuery("#seriesProduct").empty();
    if (seriesGift.attr("subGiftID") == seriesGift.attr("promotionGiftId")) {
        seriesGift.removeClass("cart3_radio_checked")
    }
    var a = $("#seriesProduct");
    yhdLib.closePopup(a)
}
function refreshCart2PageContent(b) {
    $("#headCartContinueBuy").hide(0);
    var d = jQuery.cookie("cart_num") == null ? 0 : parseInt(jQuery.cookie("cart_num"));
    if (d > 0) {
        $("#headCartContinueBuy").show()
    }
    document.getElementById("cart3_frame").innerHTML = b;
    initCart2PageEvent();
    alertCODInfo();
    var c = $("#percent").val();
    var a = $("#userId").val();
    sendPercent(c, a);
    var e = loli.page.getABExpParam("front-shopping-cart-fee");
    if (e != null && e == "noFee") {
        $("#cartFee").hide();
        $("#cartFeePlus").hide()
    }
    return true
}
function showDeleteAllWaringItemsBtn() {
    if (jQuery("#cart2_content tr.tr-error").size() > 0) {
        jQuery("#btnDeleteAllWaringItems").show()
    } else {
        jQuery("#btnDeleteAllWaringItems").hide()
    }
}
function ajaxAddProductToCart(c, b, e) {
    if (b < 1) {
        b = 1
    }
    var d = "";
    if (typeof (document.referrer) != "undefined") {
        d = encodeURIComponent(document.referrer)
    }
    if (typeof (e) == "undefined") {
        e = ""
    }
    var a = "/cart/opt/add.do?productId=" + c + "&num=" + b + "&callback=?";
    a = a + "&linkPosition=" + e + "&pageReferer=" + d;
    cart3.ajaxRefresh(a);
    hideUndoDelItemsTips()
}
function gotrackerWithSpmData(d, a, c, e) {
    var b = loli.spm.getData(e);
    b.positionTypeId = "4";
    gotracker(d, a, c, b)
}
function ajaxAddLandingPageToCart(e, f, a, d, b) {
    if (d < 1 || d == "") {
        d = 1
    }
    if (e == "" || f == "" || a == "") {
        alert("商品加入购物车失败[lp商品入参错误]");
        return
    }
    gotracker("2", "try_huangou_add_to_cart", null);
    var c = "/cart/opt/addLandingpage.do?promotionIDs=" + a + "&promotionLevelIDs=0&promotionGiftIDs=" + e + "&promotionGiftMerchantIDs=" + f + "&promotionGiftNum=" + d + "&winnerIDs=" + b + "&callback=?";
    cart3.ajaxRefresh(c);
    hideUndoDelItemsTips()
}
function ajaxAddPointProductToCart(c, f, b, e) {
    if (b < 1) {
        b = 1
    }
    var d = "";
    if (typeof (document.referrer) != "undefined") {
        d = encodeURIComponent(document.referrer)
    }
    if (typeof (e) == "undefined") {
        e = ""
    }
    var a = "/cart/opt/addPoint.do?productId=" + c + "&merchantId=" + f + "&num=" + b + "&callback=?";
    a = a + "&linkPosition=" + e + "&pageReferer=" + d;
    cart3.ajaxRefresh(a);
    hideUndoDelItemsTips()
}
var webIM = {_positionId: 5, _mcsite: 3, _domain: "http://webim.yhd.com", show1mallIM: function() {
        var a = 0;
        jQuery("[class=show1mallIM][setted=false]").each(function(c) {
            var d = $(this);
            var e = d.attr("value");
            var b = URLPrefix.shoping_shop + "/interface/show_qq_info_lite.action?r=" + Math.random() + "&merchantId=" + e + "&position=0&limPage=1&limType=small&type=html&jsonpCallback=?";
            jQuery.getJSON(b, function(h) {
                if (h.code == 0) {
                    d.html(h.msg);
                    if (a == 0) {
                        a = 1;
                        var f = $("<link/>");
                        $(f).attr("type", "text/css");
                        $(f).attr("rel", "stylesheet");
                        f.attr("href", h.cssFile);
                        $("head").append(f);
                        var g = document.createElement("script");
                        g.type = "text/javascript";
                        g.src = h.jsFile;
                        document.getElementsByTagName("head")[0].appendChild(g)
                    }
                }
            })
        })
    }, requestNewWebIM: function() {
        var b = this;
        var a = 0;
        jQuery(".show1mallIM").each(function(d) {
            var e = $(this);
            var g = e.attr("value");
            var c = b._domain + "/checkPoint/showPoint/" + g + "/" + b._positionId + "/0/0/" + b._mcsite + ".action";
            var f = "?iconType=small&jsonpCallback=?";
            jQuery.getJSON(c + f, function(i) {
                if (i && isNaN(i)) {
                    var j = "";
                    if (a == 0) {
                        a = 1;
                        j = i
                    } else {
                        var h = jQuery(i).find("#onlineChatSpan");
                        if (h.length > 0) {
                            j = h
                        } else {
                            j = i
                        }
                    }
                    e.html(j)
                } else {
                    e.attr("setted", false);
                    b.show1mallIM()
                }
            })
        })
    }};
function initCart() {
    $("#total_price_top").html($("#total_price_bottom").html());
    optMan.reloadDelete();
    refreshCheckbox();
    bindCheckbox();
    $("table.list").find("tr").hover(function() {
        if ($(this).attr("class").indexOf("ysc_shjTr") < 0) {
            $("table.list").find("tr").removeClass("on");
            var d = $(this);
            if (d.is(".cuxiao,.tr_gift,.ybFwTr,.subtotal")) {
                return
            }
            if (d.hasClass("mergeTr")) {
                var e = itemGroup(d);
                e.addClass("on")
            } else {
                d.addClass("on")
            }
        }
    }, function() {
        var d = $(this);
        if (d.hasClass("mergeTr")) {
            itemGroup(d).removeClass("on")
        } else {
            d.removeClass("on")
        }
    });
    $("#cart2_content div.buyMoreDiv").hover(function() {
        $(this).find("ul").show();
        $(this).css("zIndex", 2)
    }, function() {
        $(this).find("ul").hide();
        $(this).css("zIndex", 0)
    });
    jQuery(".tip_box").hover(function() {
        jQuery(this).find("span").show()
    }, function() {
        jQuery(this).find("span").hide()
    });
    jQuery(".item_total_price_box .cxTagPink").hover(function() {
        jQuery(this).siblings(".price_tips").show()
    }, function() {
        jQuery(this).siblings(".price_tips").hide()
    });
    closeCODTip();
    loadWarningMessage();
    var a = {fn: function() {
            var d = $(".cart3_list .price .rush");
            d.hover(function() {
                $(this).siblings(".cell_txt_tips").show()
            }, function() {
                $(this).siblings(".cell_txt_tips").hide()
            })
        }, main: function() {
            this.fn()
        }};
    a.main();
    var b = {kitchoise: function() {
            var d = $(".kitchoise");
            d.each(function() {
                var e = $(this).height();
                var f = $(this).find(".event_info ").height();
                $(this).find(".cart3_checkbox, .cart3_checkbox_dis").css({top: e / 2 - f});
                $(this).find("li:first").css({zIndex: 99});
                $(this).find(".btn_del").css({top: e / 2 - f - 23, position: "absolute"})
            })
        }, main: function() {
            this.kitchoise()
        }};
    b.main();
    areaInit();
    btnSelect();
    setPostage();
    var c = 1000;
    $("#itemList .cart3_area").each(function() {
        c--;
        $(this).css("z-index", c <= 0 ? 0 : c)
    })
}
function loadWarningMessage() {
    var a = $("#cart3_friend_tips");
    if ($("#cart3_warning_message").html()) {
        if ($("#cart3_warning_message").html().length > 1) {
            a.html($("#cart3_warning_message").html());
            a.parent().addClass("free_none_tip free_top_tip").show()
        } else {
            a.parent().removeClass("free_none_tip free_top_tip").hide()
        }
    }
}
function hightlightLastBuy() {
    var a = $('tr[name="last_buy_anchor"]');
    if (a.size() == 0) {
        return
    }
    var b = itemGroup(a);
    b.addClass("trDeepRed");
    setTimeout(function() {
        b.removeClass("trDeepRed")
    }, 3000)
}
function itemGroup(c) {
    var b = c;
    if (c.hasClass("mergeTr")) {
        var d = c.prev("tr");
        while (d.hasClass("mergeTr")) {
            b = b.add(d);
            d = d.prev("tr")
        }
        var a = c.next("tr");
        while (a.hasClass("mergeTr")) {
            b = b.add(a);
            a = a.next("tr")
        }
    }
    return b
}
function bindCheckbox() {
    var a = $("#all_checked");
    a.bind("click", function() {
        var b = $(this).attr("data-checked");
        $('a[name="cart2Checkbox"]').each(function() {
            if (!$(this).hasClass("cart3_checkbox_dis")) {
                $(this).attr("data-checked", b);
                ckbMan.click(this)
            }
        });
        turnOffCODCheckbox();
        ckbMan.reset();
        refreshCheckbox();
        cart3.ajaxSelect(500)
    });
    $("#all_checked_label").bind("click", function() {
        a.click()
    });
    $("a[name='bagCheckbox']").bind("click", function() {
        var b = $(this).attr("data-checked");
        $(this).parent().parent().parent().find('a[name="cart2Checkbox"]').each(function() {
            if (!$(this).hasClass("cart3_checkbox_dis")) {
                $(this).attr("data-checked", b);
                ckbMan.click(this)
            }
        });
        turnOffCODCheckbox();
        ckbMan.reset();
        refreshCheckbox();
        cart3.ajaxSelect(500)
    });
    $('a[name="cart2Checkbox"]').bind("click", function() {
        if (!$(this).hasClass("cart3_checkbox_dis")) {
            var b = $(this).attr("tag");
            var c = $(this).attr("data-checked");
            if (b) {
                $('a[name="cart2Checkbox"][tag="' + b + '"]').each(function() {
                    $(this).attr("data-checked", c);
                    ckbMan.click(this)
                })
            } else {
                ckbMan.click(this)
            }
            jQuery(this).parent().next().find("a.ew_item").each(function() {
                $(this).attr("data-checked", c);
                ckbMan.click(this)
            });
            jQuery(this).parent().next().find("a.bindingItem_flag").each(function() {
                $(this).attr("data-checked", c);
                ckbMan.click(this)
            });
            turnOffCODCheckbox();
            ckbMan.reset();
            refreshCheckbox();
            cart3.ajaxSelect()
        }
    })
}
function turnOffCODCheckbox() {
    var a = $("#xunzehdfk");
    if (a.attr("data-checked") == "yes") {
        showCODAlert = false;
        a.attr("data-checked", "no");
        a.removeClass("selectCashDevCur")
    }
    alertCODInfo()
}
function clickCODItems() {
    var c = $("#xunzehdfk");
    if (c.size() <= 0) {
        return
    }
    var a = 0;
    if (c.attr("data-checked") != "yes") {
        a = 1;
        var b = $("#yhd_can_cod").val();
        $('a[name="cart2Checkbox"]').each(function() {
            if ($(this).attr("cod") == "1") {
                if (($(this).attr("isyihaodian") == "1" && b == "1") || $(this).attr("isyihaodian") != "1") {
                    $(this).removeClass("cart3_checkbox_checked");
                    $(this).attr("data-checked", "no")
                }
            } else {
                $(this).attr("data-checked", "yes");
                $(this).addClass("cart3_checkbox_checked")
            }
            ckbMan.click(this)
        });
        showCODAlert = true;
        c.attr("data-checked", "yes");
        c.addClass("cart3_checkbox_checked");
        $(".cell_txt_tips").show()
    } else {
        $('a[name="cart2Checkbox"]').each(function() {
            $(this).removeClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "no");
            ckbMan.click(this)
        });
        showCODAlert = false;
        c.attr("data-checked", "no");
        c.removeClass("cart3_checkbox_checked");
        $(".cell_txt_tips").hide()
    }
    alertCODInfo();
    ckbMan.reset();
    refreshCheckbox();
    cart3.ajaxRefresh("/cart/mod/newMainbody.do?clickCOD=" + a + "&callback=?", "select", false)
}
function alertCODInfo() {
    var a = $("#xunzehdfk");
    if (a.size() <= 0) {
        return
    }
    if (a.attr("data-checked") == "1" && showCODAlert) {
        $("#hdfktips").show()
    } else {
        $("#hdfktips").hide()
    }
}
function closeCODTip() {
    $(".cell_txt_tips i").bind("click", function() {
        $(this).parents(".cell_txt_tips").hide()
    })
}
function refreshCheckbox() {
    var a = true;
    var b = true;
    $("a[name='bagCheckbox']").each(function() {
        var c = true;
        var d = true;
        $(this).parent().parent().parent().find('a[name="cart2Checkbox"]').each(function() {
            if (!$(this).hasClass("cart3_checkbox_dis")) {
                if ($(this).attr("data-checked") != "yes") {
                    c = false
                }
                if ($(this).hasClass("cart3_checkbox")) {
                    d = false
                }
            }
        });
        if (c) {
            $(this).addClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "yes")
        } else {
            $(this).removeClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "no")
        }
        if (d) {
            $(this).addClass("cart3_checkbox_dis")
        } else {
            b = false;
            $(this).removeClass("cart3_checkbox_dis")
        }
    });
    $("a[name='cart2Checkbox']").each(function() {
        if (!$(this).hasClass("cart3_checkbox_dis")) {
            if ($(this).attr("data-checked") != "yes") {
                a = false;
                return
            }
        }
    });
    if (a) {
        $("#all_checked").addClass("cart3_checkbox_checked");
        $("#all_checked").attr("data-checked", "yes")
    } else {
        $("#all_checked").removeClass("cart3_checkbox_checked");
        $("#all_checked").attr("data-checked", "no")
    }
    if (b) {
        $("#all_checked").addClass("cart3_checkbox_dis")
    } else {
        $("#all_checked").removeClass("cart3_checkbox_dis")
    }
    $("a[name='cart2Checkbox']").each(function() {
        if (!$(this).hasClass("cart3_checkbox_dis")) {
            var h = $(this).attr("checked");
            if (h == "yes") {
                $(this).parents("tr").addClass("select")
            } else {
                $(this).parents("tr").removeClass("select")
            }
            var e = $(this).parents("tr");
            while (e.hasClass("mergeTr")) {
                if (h) {
                    e.addClass("select")
                } else {
                    e.removeClass("select")
                }
                e = e.next("tr")
            }
            var f = $(this).val().split("_");
            var d = f[1];
            var c = f[3];
            if ($(this).attr("data-checked") == "yes") {
                var g = $(".no_pro.item" + d + "-" + c);
                if (g.size() > 0) {
                    g.removeClass("no_pro");
                    g.addClass("tr-promotion")
                }
            } else {
                var g = $(".tr-promotion.item" + d + "-" + c);
                if (g.size() > 0) {
                    g.removeClass("tr-promotion");
                    g.addClass("no_pro")
                }
            }
        }
    })
}
function initGotoPayButtonXY() {
    var h = $(window).height();
    var d = $(window).scrollTop();
    if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
        $(".fix_btm_bar").addClass("fix_btm_bar2");
        var f = $("#cart2_content").outerHeight(true) + 140 - $("#guaranteeArea").outerHeight(true);
        var b = f - h;
        var a = h - 75;
        if ($(".fix_btm_bar").html() != null && $(".fix_btm_bar").html().indexOf("<SMALL>") > -1) {
            a -= 30
        }
        if (d > b) {
            $(".fix_btm_bar2").css("position", "static");
            $(".fix_btm_bar2").removeClass("shadow")
        } else {
            $(".fix_btm_bar2").css({position: "absolute", top: a + d});
            $(".fix_btm_bar2").addClass("shadow")
        }
    } else {
        var f = $("#cart2_content").outerHeight(true) - $("#guaranteeArea").outerHeight(true);
        var e = $(".fix_btm_bar").outerHeight(true);
        var g = $("#global_top_bar").outerHeight(true);
        var c = $(".headBCST_box").outerHeight(true);
        var b = f + g + c + e - h;
        if (d > b) {
            $(".fix_btm_bar").css("position", "static");
            $(".fix_btm_bar").removeClass("shadow")
        } else {
            $(".fix_btm_bar").css("position", "fixed");
            $(".fix_btm_bar").addClass("shadow")
        }
    }
    if (d > 150) {
        jQuery("#back-to-top").show()
    } else {
        jQuery("#back-to-top").hide()
    }
}
function initGotoNewPayButtonXY() {
    var d = $("#checkout_banner");
    if (d.length > 0) {
        var g = $(".cart3_bott_vhide");
        var f = function() {
            var h = g.offset().top > $(window).scrollTop() + $(window).height() - 84;
            var i = g.offset().top <= $(window).scrollTop() + $(window).height() - 84;
            if ((!d.hasClass("cart3_bott_fixed")) && h) {
                d.addClass("cart3_bott_fixed")
            } else {
                if ((d.hasClass("cart3_bott_fixed")) && i) {
                    d.removeClass("cart3_bott_fixed")
                }
            }
        };
        f();
        $(window).unbind("scroll").bind("scroll", function() {
            f();
            scrollsTop()
        });
        var a = $("#totalPrice").attr("value");
        var b = false;
        var e = 0;
        for (var c = 0; c < a.length; c++) {
            e++;
            if (a.substring(c, c + 1) == ".") {
                b = true;
                break
            }
        }
        if (b) {
            $("#totalPriceFront").html(a.substring(0, e));
            $("#totalPriceBack").html(a.substring(e, a.length))
        } else {
            $("#totalPriceFront").html(a)
        }
    }
}
function scrollsTop() {
    var a = $(window).scrollTop();
    if (a > 150) {
        $("#back-to-top").show()
    } else {
        $("#back-to-top").hide()
    }
    if (typeof (mod_area_select) != "undefined" && mod_area_select.size() > 0) {
        if ($(window).scrollTop() > orgiAreaTop && isModAreaOpen) {
            mod_area_select.css({position: "fixed", top: 5, "margin-left": 70})
        } else {
            mod_area_select.css({position: "relative", top: 0, "margin-left": 0})
        }
    }
}
function onlyTryContClose() {
    var a = $(".cart3_1buy_box .buy_1yuan_cont"), b = $(".cart3_1buy_box");
    b.removeClass("cart3_1buy_hover");
    a.hide()
}
function onlyTry() {
    gotracker("2", "yhdTry", null);
    var m = $(".cart3_1buy_box .buy_1yuan_cont"), e = $(".cart3_1buy_box"), g = $(".cart3_1buy_box .buy_1yuan_tips");
    var a = $(".cart3_1buy_box .buy_1yuan_login");
    if (!m.is(":hidden") || !a.is(":hidden") || !g.is(":hidden")) {
        onlyTryContClose();
        a.hide();
        g.hide();
        return
    }
    e.addClass("cart3_1buy_hover");
    var f = $("#userId").val();
    if (f == "" || f == "0") {
        a.show();
        return
    }
    var c = jQuery("#pminfosInCart").val();
    if (c == "" || typeof (c) == "undefined") {
        g.show();
        return
    }
    var h = jQuery.parseJSON(c);
    var k = new Array();
    var j = new Array();
    for (var d = 0; d < h.length; d++) {
        k.push(h[d].pmInfoId);
        j.push(h[d].num)
    }
    var b = URLPrefix.shoping_try + "/trial/paifa/ajaxGetHuangouProductForCart.do?callback=?";
    var l = {endUserId: f, provinceId: currProvinceId, pminfoids: k.toString(), nums: j.toString()};
    jQuery.getJSON(b, l, function(i) {
        if (i && i.data && i.data.length > 0) {
            m.setTemplateElement("cart3OnlyTryTemplate").processTemplate(i);
            yuanBuyTotalPage = Math.ceil(i.data.length / yuanBuyPageCount) - 1;
            m.show()
        } else {
            g.show()
        }
    })
}
function initCart2PageEvent() {
    ajaxFreePromotionList();
    ajaxRedemptionPromotionList();
    initCart();
    lazyLoadPMSAd01HtmlData();
    setTimeout(initPmsTab, 2500);
    showDeleteAllWaringItemsBtn();
    initGotoNewPayButtonXY();
    initPromotionDeleteEvent();
    hightlightLastBuy();
    webIM.requestNewWebIM();
    initTabsEvent();
    initCoudan();
    autoOpenCoudanDiv();
    initCoupon();
    initSubProductSerialAttr()
}
function yhdCouDan(g) {
    var d = jQuery("#pmsTabs_JsonDeliFeeObject");
    if (d.size() <= 0) {
        return
    }
    d = jQuery.parseJSON(d.val());
    var h = d.normalExceptMoney;
    var e = d.freshExceptMoney;
    if (typeof (h) == "undefined") {
        h = 0
    }
    if (typeof (e) == "undefined") {
        e = 0
    }
    var c = 0, f;
    if (g == 1) {
        c = e;
        f = 1
    } else {
        c = h;
        f = 2
    }
    if (c <= 0) {
        return
    }
    var b = "";
    if (g == 1) {
        if (typeof (jQuery("#freshPminfoIds").val()) != "undefined") {
            b = jQuery("#freshPminfoIds").val()
        }
    } else {
        if (typeof (jQuery("#commonPminfoIds").val()) != "undefined") {
            b = jQuery("#commonPminfoIds").val()
        }
    }
    var a = URLPrefix.shoping_pms + "/shoppingCart/getNewPieceGoods.do?callback=?";
    var i = {price: c, provinceId: currProvinceId, pmIdCart: b, type: f};
    jQuery.getJSON(a, i, function(j) {
        if (j) {
            var m = jQuery("#cart3_pms_yhd_coudan");
            m.setTemplateElement("cart3PmsYhdCouDan").processTemplate(j);
            if (j.value != null) {
                coudanTotalPage = Math.ceil(j.value.length / everyPageCount) - 1
            } else {
                coudanTotalPage = 0
            }
            if (coudanTotalPage > 0) {
                $("#ziying_coudan_fenye").removeClass("btn_dis_color")
            }
            currentOprationCoudanDiv = $(m).html();
            freshCoudanDeliverTips(g);
            var n = $("#cart3_pms_yhd_coudan").find("ul li");
            for (var k = 0; k < n.length; k++) {
                if (k >= 0 && k < everyPageCount) {
                    $(n[k]).show()
                } else {
                    $(n[k]).hide()
                }
            }
            try {
                require(["content_tracker_expo"], function(o) {
                    o.run("shopping_couDan_adContentTrackerEvent", "brain")
                })
            } catch (l) {
            }
        }
    })
}
function initCoudan() {
    $(".cart3_freight_info .cz").each(function() {
        var a = this;
        $(a).parents(".cart3_freight_info").hover(function() {
            $(".tip_see", $(this)).show()
        }, function() {
            $(".tip_see", $(this)).hide()
        })
    })
}
function showCoudanDiv(c, a, e, g) {
    coudanCurrentPage = 0;
    var b = $(c).attr("coudanFlag");
    currentOprationCoudanBag = b;
    $('a[name="hide_coudan"]').each(function() {
        if ($(this).attr("coudanFlag") != b) {
            $(this).css("display", "none").next().css("display", "inline-block")
        }
    });
    $(c).css("display", "none").prev().css("display", "inline-block");
    var d = $("#cart3_pms_yhd_coudan");
    $(d).empty();
    d.slideDown(300);
    if (a == 0) {
        yhdCouDan(e)
    } else {
        if (a == 1) {
            inShopChoiceProduct(g)
        }
    }
    $(d).show();
    var f = $(c).parents(".cart3_freight");
    $(f).before(d)
}
function autoOpenCoudanDiv() {
    var a = true;
    $('a[name="show_coudan_page"]').each(function() {
        if ($(this).attr("coudanFlag") == currentOprationCoudanBag) {
            a = false;
            if ($(this).attr("deliverFee") > 0) {
                $(this).hide().prev().show();
                var b = $(this).parents(".cart3_freight");
                var c = $("#cart3_pms_yhd_coudan");
                $(c).show();
                $(b).before($(c).html(currentOprationCoudanDiv));
                isFresh = $(this).attr("isFresh") == "1" ? true : false;
                freshCoudanDeliverTips(isFresh)
            }
            return
        }
    });
    if (a) {
        currentOprationCoudanBag = ""
    }
}
function freshCoudanDeliverTips(e) {
    var c = jQuery("#pmsTabs_JsonDeliFeeObject");
    if (c.size() <= 0) {
        return
    }
    c = jQuery.parseJSON(c.val());
    var j = c.normalExceptMoney;
    var d = c.freshExceptMoney;
    if (typeof (j) == "undefined") {
        j = 0
    }
    if (typeof (d) == "undefined") {
        d = 0
    }
    var b = 0, h = 0, f = 0, i = "";
    if (e == 1) {
        b = d;
        h = c.freshReduceExceptMoney;
        f = c.freshTotalAmount;
        i = c.freshDeliverFeeDesc4CouDan
    } else {
        b = j;
        h = c.normalReduceExceptMoney;
        f = c.normalTotalAmount;
        i = c.normalDeliverFeeDesc4CouDan
    }
    if (b <= 0) {
        return
    }
    if (!h) {
        h = 0
    }
    if (h > 0) {
        var a = ((f + h) / (f + b)) * 100;
        $("#cart3_pms_yhd_coudan em.p1").css("width", a + "%")
    }
    var g = (f / (f + b)) * 100;
    $("#cart3_pms_yhd_coudan em.p2").css("width", g + "%");
    if (i && $.trim(i) != "") {
        $("#cart3_pms_yhd_coudan span.fee_desc").html(i);
        if (i.toLowerCase().indexOf("<br/>") > -1) {
            $("#cart3_pms_yhd_coudan .my_pro").css({height: "50px"})
        }
    }
}
function showCoudanDivPaging(f, k) {
    var h = 0;
    var l = 0;
    var a = 0;
    var j = 0;
    var b = 0;
    if (k == "only_try_cont") {
        a = yuanBuyCurrentPage;
        j = yuanBuyTotalPage;
        b = yuanBuyPageCount
    } else {
        k = "cart3_pms_yhd_coudan";
        a = coudanCurrentPage;
        j = coudanTotalPage;
        b = everyPageCount
    }
    if ($(f).hasClass("cart3_point_l")) {
        if (a <= 0) {
            $(f).addClass("btn_dis_color");
            return false
        } else {
            if (a - 1 == 0) {
                $(f).addClass("btn_dis_color")
            } else {
                $(f).removeClass("btn_dis_color")
            }
            $(f).next().removeClass("btn_dis_color");
            a -= 1;
            h = a * b;
            l = (a + 1) * b - 1
        }
    }
    if ($(f).hasClass("cart3_point_r")) {
        if (a >= j) {
            $(f).addClass("btn_dis_color");
            return false
        } else {
            if (a + 1 == j) {
                $(f).addClass("btn_dis_color")
            } else {
                $(f).removeClass("btn_dis_color")
            }
            $(f).prev().removeClass("btn_dis_color");
            a += 1;
            h = a * b;
            l = (a + 1) * b - 1
        }
    }
    if (k == "only_try_cont") {
        yuanBuyCurrentPage = a;
        yuanBuyTotalPage = j
    } else {
        k = "cart3_pms_yhd_coudan";
        coudanCurrentPage = a;
        coudanTotalPage = j
    }
    var d = [];
    var m = $("#" + k).find("ul li");
    for (var c = 0; c < m.length; c++) {
        if (c < h || c > l) {
            $(m[c]).hide()
        } else {
            $(m[c]).show();
            d.push($($(m[c])))
        }
    }
    if (k == "cart3_pms_yhd_coudan") {
        currentOprationCoudanDiv = $("#" + k).html()
    }
    try {
        require(["base_observer"], function(e) {
            e.fire("shopping_couDan_adContentTrackerEvent", d)
        })
    } catch (g) {
    }
}
function hideCoudanDiv(a) {
    var b = $(a).attr("data-animate") ? 0 : 300;
    $(a).removeAttr("data-animate");
    $(a).hide().next().show();
    $("#cart3_pms_yhd_coudan").slideUp(b, function() {
        var c = $("#cart3_pms_yhd_coudan");
        $(c).hide()
    });
    currentOprationCoudanBag = ""
}
function hideOtherCoudanDiv(a) {
    $("[name=deliveryFeeTip]").each(function() {
        if (this != $(a)) {
            hideCoudanDiv(this)
        }
    })
}
function clickGiftButton(a) {
    var b = $(".cart3_zengpin_dialog");
    if ($(a).hasClass("cart3_zengpin_cur")) {
        b.hide();
        $(a).removeClass("cart3_zengpin_cur")
    } else {
        $(a).addClass("cart3_zengpin_cur");
        b.show()
    }
    b.css({left: $(a).position().left + 15})
}
function giftDivClose() {
    var a = $(".cart3_zengpin_cur");
    var b = $(".cart3_zengpin_dialog");
    b.hide();
    a.removeClass("cart3_zengpin_cur")
}
function initTabsHoverEvent() {
    jQuery(".cart3_tejia_list li").click(function() {
        $(this).addClass("graybg").siblings().removeClass("graybg")
    })
}
var mod_area_select;
var btn_select;
var tab_box;
var tabs;
var val_text;
var isModAreaOpen = false;
var addStr;
var cityTip;
var countyTip;
var oldProvinceId;
var orgiAreaTop;
function areaInit() {
    cart_province_id = $("#cart_province_id").val();
    if (typeof (cart_province_id) == "undefined") {
        return false
    }
    cart_province_name = $("#cart_province_name").val();
    cart_city_id = $("#cart_city_id").val();
    cart_city_name = $("#cart_city_name").val();
    cart_county_id = $("#cart_county_id").val();
    cart_county_name = $("#cart_county_name").val();
    oldProvinceId = cart_province_id;
    $('dd[name="cart_province"]').each(function() {
        if ($(this).attr("value") == cart_province_id) {
            cart_province_name = $(this).html();
            $(this).addClass("on")
        } else {
            $(this).removeClass("on")
        }
    });
    if (cart_county_name.length > 0) {
        $("#detail_area_name").html(cart_province_name + " | " + cart_city_name + " | " + cart_county_name)
    } else {
        $("#detail_area_name").html(cart_province_name)
    }
    mod_area_select = $(".mod_area_select");
    btn_select = mod_area_select.find(".address");
    tab_box = mod_area_select.find(".tab_box");
    tabs = mod_area_select.find(".tabs span");
    boxs = mod_area_select.find(".area_box .item");
    val_text = mod_area_select.find(".val_text");
    isModAreaOpen = false;
    orgiAreaTop = mod_area_select.offset().top + 32;
    tabs.eq(0).html("<em>" + cart_province_name + "</em><i></i>");
    if (cart_city_name.length > 0) {
        tabs.eq(1).html("<em>" + cart_city_name + "</em><i></i>")
    } else {
        cityTip = "请选择市";
        tabs.eq(1).html("<em>" + cityTip + "</em><i></i>")
    }
    if (cart_county_name.length > 0) {
        tabs.eq(2).html("<em>" + cart_county_name + "</em><i></i>")
    } else {
        countyTip = "请选择区";
        tabs.eq(2).html("<em>" + countyTip + "</em><i></i>")
    }
}
function btnSelect() {
    if (typeof (cart_province_id) == "undefined") {
        return false
    }
    btn_select.unbind("click").click(function() {
        if (!$(this).hasClass("select")) {
            $(this).addClass("select");
            tab_box.show();
            tabSwitch(0);
            isModAreaOpen = true
        } else {
            $(this).removeClass("select");
            tab_box.hide();
            isModAreaOpen = false
        }
    });
    tabs.click(function() {
        var a = $(this).index();
        if (a == 0) {
            tabSwitch(0)
        } else {
            if (a == 1) {
                getAreaById(cart_province_id, 1)
            } else {
                if (a == 2) {
                    if (cityTip == "请选择市") {
                        tabSwitch(a)
                    } else {
                        getAreaById(cart_city_id, 2)
                    }
                }
            }
        }
    });
    $(document).click(function(b) {
        if (!isModAreaOpen) {
            return
        }
        var a = $(b.target);
        if (a.parents(".mod_area_select").length == 0) {
            btn_select.removeClass("select");
            tab_box.hide();
            mod_area_select.css({position: "relative", top: 0});
            isModAreaOpen = false
        }
    });
    mod_area_select.click(function(c) {
        var b = $(c.target);
        if (b.is("dd")) {
            var g = b.parents(".item");
            if (g.hasClass("first_area")) {
                var d = $(b).attr("value");
                cart_province_id = d;
                cart_province_name = $(b).html();
                cityTip = "请选择市";
                countyTip = "请选择区";
                getAreaById(d, 1)
            }
            if (g.hasClass("second_area")) {
                var f = $(b).attr("value");
                cart_city_id = f;
                cart_city_name = $(b).html();
                countyTip = "请选择区";
                cityTip = cart_city_name;
                getAreaById(f, 2)
            }
            if (g.hasClass("third_area")) {
                var a = $(b).attr("value");
                cart_county_id = a;
                cart_county_name = $(b).html();
                countyTip = cart_county_name;
                closeTabs();
                $(mod_area_select).css({position: "relative", top: 0});
                $(mod_area_select).find(".address").removeClass("select");
                $(mod_area_select).find(".tab_box").hide()
            }
            setTabs();
            g.find("dd").removeClass("on");
            b.addClass("on")
        }
    })
}
function tabSwitch(a) {
    tabs.eq(a).addClass("on").siblings().removeClass("on");
    boxs.hide().eq(a).show()
}
var setPostage = function() {
    $(".amount_tips a").click(function(b) {
        b.stopPropagation();
        var a = $(window).scrollTop();
        if (a > $(".mod_area_select").offset().top + 32) {
            $(".mod_area_select").css({position: "fixed", top: 5, "margin-left": 70})
        }
        $(".mod_area_select").find(".address").addClass("select");
        $(".mod_area_select").find(".tab_box").show();
        isModAreaOpen = true
    });
    $(".amount_tips .close").click(function() {
        $(".amount_tips").remove()
    })
};
function closeTabs() {
    btn_select.removeClass("select");
    tab_box.hide();
    if ($("#cart_province_id").val() != cart_province_id) {
        gotracker(2, "changeProvince", null, {eventId: "changeProvince", extField10: cart_province_id})
    }
    var a = cart_province_id + "_" + cart_city_id + "_" + cart_county_id + "_" + cart_province_name + "_" + cart_city_name + "_" + cart_county_name;
    $.cookie("provinceId", cart_province_id, {expires: 365, path: "/", domain: ".yhd.com"});
    $.cookie("detail_yhdareas", a, {expires: 365, path: "/", domain: ".yhd.com"});
    document.location.href = "/cart/cart.do?action=view"
}
function setTabs() {
    tabs.eq(0).find("em").html(cart_province_name);
    tabs.eq(1).find("em").html(cityTip);
    tabs.eq(2).find("em").html(countyTip)
}
function getAreaById(d, a) {
    var c;
    var b;
    if (a == 1) {
        $("#cart_county_area").empty();
        var c = "/cart/opt/getCitysByProvince.do?provinceId=" + d + "&callback=?";
        b = "cart_city"
    } else {
        if (a == 2) {
            var c = "/cart/opt/getCountysByCity.do?cityId=" + d + "&callback=?";
            b = "cart_county"
        }
    }
    $.getJSON(c, null, function(g) {
        if (isReqSuccess(g)) {
            var f = "";
            for (var e = 0; e < g.data.length; e++) {
                if ((a == 1 && cart_city_id == g.data[e].id) || (a == 2 && cart_county_id == g.data[e].id)) {
                    f += '<dd value="' + g.data[e].id + '" class="on" name="' + b + '">' + g.data[e].name + "</dd>"
                } else {
                    f += '<dd value="' + g.data[e].id + '" name="' + b + '">' + g.data[e].name + "</dd>"
                }
            }
            if (a == 1) {
                $("#cart_city_area").html(f)
            } else {
                if (a == 2) {
                    $("#cart_county_area").html(f)
                }
            }
            tabSwitch(a)
        }
    })
}
function ajaxCart2Content() {
//    $.getJSON("/cart/mod/newMainbody.do?callback=?", null, function(b) {
//        if (reqSucceed(b)) {
//            refreshCart2PageContent(b.data);
//            var a = "{}";
//            if (typeof (jQuery("#productIds").val()) != "undefined") {
//                a = jQuery("#productIds").val()
//            }
//            gotracker("2", "cartView:" + a, null)
//        }
//    })
}
function sendPercent(d, h) {
    if (typeof (d) == "undefined") {
        return
    }
    try {
        if (d.length > 0) {
            var a = d.split("?");
            var f = new Array();
            for (var g = 0; g < a.length - 1; g++) {
                var o = a[g];
                var l = o.split(",");
                var k = new Array();
                for (var m = 0; m < l.length - 1; m++) {
                    k[m] = l[m]
                }
                f[g] = k
            }
            window._BFD = window._BFD || {};
            _BFD.client_id = "Cyihaodian";
            _BFD.script = document.createElement("script");
            _BFD.script.type = "text/javascript";
            _BFD.script.async = true;
            _BFD.script.charset = "utf-8";
            _BFD.script.src = (("https:" == document.location.protocol ? "https://ssl-static1" : "http://static1") + ".baifendian.com/service/yihaodian/yihaodian_sc.js ");
            document.getElementsByTagName("head")[0].appendChild(_BFD.script);
            window._BFD = window._BFD || {};
            _BFD.BFD_INFO = {page_type: "shopcart"}
        }
    } catch (j) {
    }
}
function clickCombination(a) {
    if (!$(a).hasClass("btn_up")) {
        $(a).parent().parent().find(".group_buy_list").slideDown(300);
        $(a).addClass("btn_up")
    } else {
        $(a).parent().parent().find(".group_buy_list").slideUp(300);
        $(a).removeClass("btn_up");
        $(a).addClass("btn_down")
    }
}
function openPage() {
    $("#yhd_pop_win").appendTo($("body"));
    ajaxCart2Content();
    $("#back-to-top").hide();
    $(window).scroll(function() {
        scrollsTop()
    });
    ckbMan.reset();
    jQuery("#myYihaodianFloatDiv").css("z-index", 9999);
    if ($.browser.msie && $.browser.version <= 6) {
        var b = 0, a;
        YHD.popwin("");
        a = setInterval(function() {
            ++b;
            if (b == 1) {
                jQuery("#yhd_pop_win").jqmHide()
            } else {
                if (b == 2) {
                    YHD.popwin("")
                } else {
                    if (b == 3) {
                        jQuery("#yhd_pop_win").jqmHide();
                        clearInterval(a)
                    }
                }
            }
        }, 1)
    }
}
var CURR_SCROLL_TOP_POSITION = 0;
var initCoupon = function() {
    var a = [];
    $(".dyq_merchant_id[isCross!='1']").each(function() {
        if (this) {
            a.push(this.value)
        }
    });
    getMerchantCouponList(a)
};
function bindCouponEvent(a) {
    $(".mod_dyq").unbind("click");
    $(".mod_dyq").click(function(b) {
        if (a == "" || a == "0" || a == undefined) {
            yhdPublicLogin.showLoginDiv("", false, "2")
        } else {
            b.stopPropagation();
            if (this.isOpen) {
                $(".mod_dyq").removeClass("select");
                this.isOpen = false
            } else {
                this.isOpen = true
            }
            $(this).addClass("select")
        }
    });
    $(document).click(function(c) {
        c.stopPropagation();
        var b = $(c.target);
        if (b.parents(".mod_dyq").length == 0) {
            $(".mod_dyq").removeClass("select")
        }
    });
    $(".mod_dyq .close_btn").unbind("click");
    $(".mod_dyq .close_btn").click(function(b) {
        $(".mod_dyq").removeClass("select");
        b.stopPropagation()
    });
    $(".mod_dyq .dyq_list .con li .p3 i").unbind("click");
    $(".mod_dyq .dyq_list .con li .p3 i").click(function(c) {
        c.stopPropagation();
        CURR_SCROLL_TOP_POSITION = $(c.target).parents(".con").scrollTop();
        var b = $(c.target).attr("couponActiveNumber");
        var d = $(c.target).attr("merchantId");
        claimCoupon(b, d)
    })
}
function getMerchantCouponList(c, b) {
    if (c.length == 0) {
        return
    }
    var a = "/cart/opt/getCouponAction.do?callback=?";
    var d = $.param({merchantIds: c}, true);
    $.getJSON(a, d, function(f) {
        if (isReqSuccess(f)) {
            var h = f.data.merchantCouponMap;
            var g = f.data.claimedCount;
            var e = f.data.merchantHasActivityCouponNoLogin;
            $(c).each(function(k) {
                var l = {};
                var j = $("#userId").val();
                if (j == "" || j == "0" || j == "undefined") {
                    l = {hascoupons: e[c[k]], userId: "0"}
                } else {
                    if (!h[c[k]]) {
                        return
                    }
                    l = {coupons: h[c[k]], claimedCount: g[c[k]], toClaimCount: h[c[k]].length - g[c[k]], merchantId: c[k], userId: j};
                    if (!l.toClaimCount || l.toClaimCount < 0) {
                        l.toClaimCount = 0
                    }
                }
                jQuery("#dyq_" + c[k]).setTemplateElement("mod_dyq").processTemplate(l);
                bindCouponEvent(j);
                if (b) {
                    b()
                }
            })
        }
    })
}
function claimCoupon(a, b) {
    if (!a || a == "null") {
        showErrorMsg("没有找到有效的抵用券活动，请稍后重试。");
        return
    }
    $.ajax({url: "/cart/opt/claimCouponAction.do?callback=?", type: "POST", dataType: "jsonp", data: {couponActiveNumber: a}, error: function(e, d, c) {
            showErrorMsg("领取商家抵用券出现异常")
        }, success: function(c) {
            if (isReqSuccess(c)) {
                if (c.data.claimResult) {
                    getMerchantCouponList([b], function() {
                        $("#dyq_" + b + " .mod_dyq").click();
                        if (CURR_SCROLL_TOP_POSITION) {
                            $("#dyq_" + b + " .mod_dyq .con").scrollTop(CURR_SCROLL_TOP_POSITION)
                        }
                    });
                    return
                }
            }
            var d = "领取抵用券失败，请稍后再试";
            if (c.data.errMsg) {
                d = c.data.errMsg
            }
            showErrorMsg(d)
        }})
}
function initSubProductSerialAttr() {
    var b = [];
    $(".format .box_line .serialAttrSpan").each(function() {
        var d = $(this).attr("productId");
        b.push(d)
    });
    if (b.length > 0) {
        var a = "/cart/opt/getSubProductSerialAttr.do?callback=?";
        var c = $.param({subProductIds: b}, true);
        $.getJSON(a, c, function(d) {
            if (isReqSuccess(d)) {
                if (d && d.data) {
                    var g = 1000;
                    var e = d.data.subProductIdToAttributeValueMap;
                    var f = d.data.subProductIdToSerialProductIdMap;
                    $(".format .box_line .serialAttrSpan").each(function() {
                        var l = $(this).attr("productId");
                        var j = e[l];
                        var h = f[l];
                        if (null != j) {
                            var m = "";
                            for (var k = 0; k < j.length; k++) {
                                m += j[k].attributeValueAlias + "  "
                            }
                            $(this).html(m);
                            if (m.length > 0) {
                                $(this).parents(".format").siblings(".tit").addClass("inblock_top");
                                g--;
                                $(this).parents(".format").show().css("z-index", g <= 0 ? 0 : g)
                            }
                        }
                        if (null != h) {
                            $(this).attr("serialProductId", h)
                        }
                    })
                }
            }
        })
    }
}
function addSeriesProductToCart(a, g, d, b) {
    gotracker("2", "addSeriesProductToCart", null);
    var f = "2";
    var e = {originalProductId: a, merchantId: g, num: d, addType: f, serialProductId: a, logged: getUserLoggedInPage()};
    var c = "/cart/opt/getMainProductSerialAttr.do?callback=?";
    $.getJSON(c, e, function(i) {
        if (isReqSuccess(i)) {
            var h = "#seriesProduct";
            viewModifySeriesDiv(i.data, a, h, b, f)
        }
    })
}
function buyGoodsForSerialGift() {
    var a = "";
    jQuery("span.seri_attri").each(function() {
        if (!jQuery(this).find("a.seri_attr_value").children("li").hasClass("cur")) {
            a = jQuery(this).attr("attributeName");
            return false
        }
    });
    if (a != "") {
        showErrorMsg("请选择商品的属性");
        return false
    }
    updateProductIdForModify();
    seriesGift.attr("subGiftID", jQuery("[ID='current_product']").val());
    closeSeriesDiv()
}
function chooseSeriesGift(k, i, j, d, c, h, g) {
    gotracker("2", "chooseSeriesGift", null);
    var f = "2";
    var b = g;
    if (b != 2) {
        b = g ? 1 : 0
    }
    var e = {originalProductId: d, merchantId: j, promotionId: k, promotionLevelId: i, serialProductId: d, num: c, addType: f, proShow: b, logged: getUserLoggedInPage()};
    var a = "/cart/opt/getMainProductSerialAttr.do?callback=?";
    $.getJSON(a, e, function(m) {
        if (isReqSuccess(m)) {
            var l = "#seriesProduct";
            viewModifySeriesDiv(m.data, d, l, h, f);
            if (g == 2) {
                yhdLib.dialog({popupName: l, maskLayer: true});
                initSerialScrollEvent()
            }
        }
    })
}
function initSerialScrollEvent() {
    var a = jQuery(".scroll-pane");
    if (a.length >= 1) {
        a.jScrollPane()
    }
}
function getMainProductSerialAttr(b, i, e, f, h) {
    gotracker("2", "initSubProductSerialAttr", null);
    var d = $("#serialAttrId_" + f);
    var j = d.attr("serialProductId");
    var g = "1";
    var c = {originalProductId: b, merchantId: i, num: e, addType: g, identifier: f, serialProductId: j, logged: getUserLoggedInPage()};
    var a = "/cart/opt/getMainProductSerialAttr.do?callback=?";
    $.getJSON(a, c, function(l) {
        if (isReqSuccess(l)) {
            var k = "#serialAttrModifyDiv_" + b + "_" + f;
            viewModifySeriesDiv(l.data, j, k, h, g)
        }
    })
}
function viewModifySeriesDiv(d, i, j, g, f) {
    closeModifySeriesDiv();
    jQuery("#seriesProduct").hide();
    jQuery("#seriesProduct").empty();
    var c = $(j);
    c.html(d);
    if ("1" == f) {
        c.parents(".format").addClass("select")
    } else {
        if ("2" == f) {
            var h;
            var b;
            if (g) {
                h = $(g).offset().top - 80;
                b = $(g).offset().left
            } else {
                h = jQuery("#chooseSeriesProduct_" + i).offset().top - 80;
                b = jQuery("#chooseSeriesProduct_" + i).offset().left
            }
            var a = (jQuery(window).height()) / 2 - 140 + jQuery(window).scrollTop();
            var e = (jQuery(window).width()) / 2 - 280 + jQuery(window).scrollLeft();
            if (h <= 0 || b <= 0) {
                h = a;
                b = e
            } else {
                if (b > 800) {
                    b = b - 400
                } else {
                    b = b + 60
                }
            }
            jQuery("#seriesProduct").css({position: "absolute", "z-index": "9999", top: h, left: b});
            jQuery(window).scroll(function() {
                var l = (jQuery(window).height()) / 2 - 140 + jQuery(window).scrollTop();
                var k = (jQuery(window).width()) / 2 - 280 + jQuery(window).scrollLeft();
                jQuery("#seriesProduct").css({position: "absolute", "z-index": "9999", top: h, left: b})
            });
            jQuery("#seriesProduct").show()
        }
    }
    initSeriesModifyPage()
}
function closeModifySeriesDiv() {
    $(".format").removeClass("select");
    $(".format .box_con2").empty()
}
function initSeriesModifyPage() {
    initserialAttributesForModify();
    refreshSerialAttrStatusForModify();
    jQuery(".seri_attri  a").click(function() {
        if (jQuery(this).children("li").hasClass("dis")) {
            return false
        }
        if (jQuery(this).children("li").hasClass("cur")) {
            jQuery(this).children("li").removeClass("cur")
        } else {
            jQuery(this).children("li").addClass("cur");
            jQuery(this).siblings("a").children("li").removeClass("cur")
        }
        refreshSerialAttrStatusForModify()
    });
    buyGoodsForModify()
}
function initserialAttributesForModify() {
    var a = jQuery("#default_selected_attributes");
    a = a.val().split(",");
    jQuery("span.seri_attri").each(function() {
        var b = jQuery(this).attr("attributeId");
        jQuery(this).find("a.seri_attr_value").each(function() {
            var d = jQuery(this).attr("attributeValueId");
            var e = b + "_" + d;
            for (var c = 0; c < a.length; c++) {
                if (e == a[c]) {
                    jQuery(this).children("li").addClass("cur");
                    break
                }
            }
        })
    })
}
function refreshSerialAttrStatusForModify() {
    var a = jQuery("#all_avaliable_attributes");
    if (!a) {
        return
    }
    a = a.val().split(";");
    if (!a) {
        return
    }
    jQuery("span.seri_attri").each(function() {
        var f = jQuery(this).attr("attributeId");
        var c = a.slice(0);
        jQuery("span.seri_attri").each(function() {
            var k = jQuery(this).attr("attributeId");
            if (k == f) {
                return
            }
            var n = "";
            jQuery(this).find("a.seri_attr_value").each(function() {
                if (jQuery(this).children("li").hasClass("cur")) {
                    n = jQuery(this).attr("attributeValueId");
                    return
                }
            });
            for (var m = 0; m < c.length; m++) {
                if (c[m] == null) {
                    continue
                }
                var o = c[m].split(",");
                for (var l = 0; l < o.length; l++) {
                    var p = o[l].split("_");
                    if (p[0] == k) {
                        if (n != "") {
                            if (p[1] != n) {
                                c[m] = null
                            }
                        }
                        break
                    }
                }
            }
        });
        var b = new Array();
        for (var e = 0; e < c.length; e++) {
            if (null != c[e]) {
                var g = c[e].split(",");
                for (var d = 0; d < g.length; d++) {
                    var h = g[d].split("_");
                    if (h[0] == f) {
                        b.push(h[1]);
                        break
                    }
                }
            }
        }
        jQuery(this).find("a.seri_attr_value").each(function() {
            curAttrValueId = jQuery(this).attr("attributeValueId");
            var k = false;
            for (var j = 0; j < b.length; j++) {
                if (b[j] == curAttrValueId) {
                    k = true;
                    break
                }
            }
            if (k) {
                jQuery(this).children("li").removeClass("dis")
            } else {
                jQuery(this).children("li").addClass("dis")
            }
        })
    })
}
function buyGoodsForModify() {
    jQuery("#seriesPopButton").click(function(event) {
        var noneSelectedAttr = "";
        jQuery("span.seri_attri").each(function() {
            if (!jQuery(this).find("a.seri_attr_value").children("li").hasClass("cur")) {
                noneSelectedAttr = jQuery(this).attr("attributeName");
                return false
            }
        });
        if (noneSelectedAttr != "") {
            showErrorMsg("请选择商品的属性");
            return false
        }
        updateProductIdForModify();
        var currentProductId = $("#current_product").val();
        var original_product = $("#original_product").val();
        if (currentProductId != original_product) {
            var url = jQuery("[ID='product_" + jQuery("[ID='current_product']").val() + "_buttonurl']").val();
            eval(url)
        }
        closeModifySeriesDiv();
        jQuery("#seriesProduct").hide();
        jQuery("#seriesProduct").empty()
    })
}
function updateProductIdForModify() {
    var a = "";
    jQuery("span.seri_attri").each(function() {
        var c = jQuery(this).attr("attributeId");
        c = c + "-" + jQuery(this).find("a.seri_attr_value").children("li.cur").parent().attr("attributeValueId");
        if (a == "") {
            a = a + c
        } else {
            a = a + "_" + c
        }
    });
    var b = "[ID=product_" + a + "]";
    jQuery("[ID='current_product']").val(jQuery(b).val())
}
function chooseAnotherSubProduct(e, d, c, f, b) {
    var a = "/cart/opt/chooseAnotherSubProduct.do?originalProductId=" + e + "&identifier=" + d;
    a = a + "&choosedProductId=" + c + "&merchantId=" + f;
    a = a + "&num=" + b + "&callback=?";
    cart3.ajaxRefresh(a)
}
function reCheckout(a) {
    var d = URLPrefix.shoping_checkout_self + "/checkoutV3/index.do";
    var c = $("#checkoutForm");
    c.attr("action", d);
    var b = $("#checkoutForm_cart2Checkbox");
    b.val(generateNewCheckboxStr(a));
    c.submit()
}
function getOldCheckboxStr() {
    var a = $('a[name="cart2Checkbox"]').map(function() {
        return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
    }).get().join(",");
    return a
}
function getTotalNumCheckout() {
    var b = getOldCheckboxStr();
    var a = b.split(",");
    var e = 0;
    for (var d = a.length - 1; d >= 0; d--) {
        var c = a[d].split("=");
        if (c[1] == "1") {
            e++
        }
    }
    return e
}
function generateNewCheckboxStr(h) {
    var k = h.split(",");
    var f = getOldCheckboxStr();
    var a = f.split(",");
    var b = new Array();
    for (var g = a.length - 1; g >= 0; g--) {
        var d = a[g].split("=");
        if (d[1] == "1") {
            for (var e = k.length - 1; e >= 0; e--) {
                if (d[0].split("_")[0] == k[e]) {
                    d[1] = 0
                }
            }
        }
        b.push(d.join("="))
    }
    var c = b.join(",");
    return c
}
jQuery(document).ready(function() {
    if (typeof (switchProvinceId) != "undefined") {
        var a = jQuery.cookie("provinceId");
        if (switchProvinceId != a) {
            showProvinces()
        }
    }
    $("#headerSelectProvince").html("");
    $("#logout").css({background: "none"});
    $("#headerSelectProvince").attr("class", "");
    openPage();
    recentDelTips.init()
});
function yw_login_submit() {
    var a = jQuery("#un_for_auth").val();
    if (a == "") {
        jQuery("#accountDesc_for_auth").addClass("error_contract");
        jQuery("#accountDesc_for_auth").text("登录账号不能为空");
        jQuery("#un_for_auth").focus();
        return false
    } else {
        if (a.length > 100) {
            jQuery("#accountDesc_for_auth").addClass("error_contract");
            jQuery("#accountDesc_for_auth").text("账号长度不能超过100位");
            jQuery("#un_for_auth").focus();
            return false
        } else {
            if (a.toLowerCase().indexOf("<script") > -1 || a.toLowerCase().indexOf("<\/script") > -1) {
                jQuery("#accountDesc_for_auth").addClass("error_contract");
                jQuery("#accountDesc_for_auth").html("账号中包含非法字符");
                jQuery("#un_for_auth").focus();
                return false
            }
        }
    }
    var b = /\s+/;
    var c = jQuery("#pwd_for_auth").val();
    if (jQuery("#pwd_for_auth").val() == "") {
        jQuery("#pwd_desc_for_auth").addClass("error_contract");
        jQuery("#pwd_desc_for_auth").text("登录密码不能为空");
        jQuery("#pwd_for_auth").focus();
        return false
    } else {
        if (b.test(c)) {
            jQuery("#pwd_desc_for_auth").addClass("error_contract");
            jQuery("#pwd_desc_for_auth").text("登录密码不能有空格");
            jQuery("#pwd_for_auth").focus();
            return false
        }
    }
    if (jQuery("#contract_second").attr("data-checked") == false) {
        jQuery("#contract_second_desc").addClass("error_contract");
        return false
    }
    return true
}
;
function check_email_for_auth() {
    var a = jQuery("#email_for_auth").val();
    if (a == "") {
        return 1
    }
    var b = /^([a-zA-Z0-9_\-|\.])+@([a-zA-Z0-9_\-])+((\.[a-zA-Z0-9_\-]{2,3}){1,2})$/;
    if (!b.test(a)) {
        return 2
    }
    if (a.length >= 40) {
        return 3
    }
    return 0
}
function checkEmailOnBlur_for_auth() {
    var b = check_email_for_auth();
    if (b == 1) {
        jQuery("#email_desc_for_auth").removeClass("authrightInfo");
        jQuery("#email_desc_for_auth").addClass("error_contract");
        jQuery("#email_desc_for_auth").text("Email不能为空");
        jQuery("#email_desc_for_auth").show()
    } else {
        if (b == 2) {
            jQuery("#email_desc_for_auth").removeClass("authrightInfo");
            jQuery("#email_desc_for_auth").addClass("error_contract");
            jQuery("#email_desc_for_auth").html("请输入正确的Email地址");
            jQuery("#email_desc_for_auth").show()
        } else {
            if (b == 3) {
                jQuery("#email_desc_for_auth").removeClass("authrightInfo");
                jQuery("#email_desc_for_auth").addClass("error_contract");
                jQuery("#email_desc_for_auth").html("邮箱长度不能超过40位");
                jQuery("#email_desc_for_auth").show()
            } else {
                var a = "https://passport.111.com.cn/auth/checkEmail.do?";
                var c = "ywUser.email=" + jQuery("#email_for_auth").val();
                a = a + c + "&callback=?";
                jQuery.getJSON(a, function(d) {
                    if (d) {
                        if (d.returnCode == 0) {
                            jQuery("#email_desc_for_auth").removeClass("error_contract");
                            jQuery("#email_desc_for_auth").addClass("authrightInfo");
                            jQuery("#email_desc_for_auth").text("");
                            jQuery("#email_desc_for_auth").show()
                        } else {
                            if (d.returnCode == 1) {
                                jQuery("#email_desc_for_auth").removeClass("authrightInfo");
                                jQuery("#email_desc_for_auth").addClass("error_contract");
                                jQuery("#email_desc_for_auth").html("重复的email")
                            }
                        }
                        jQuery("#email_desc_for_auth").show()
                    }
                })
            }
        }
    }
}
function check_pwd1_for_auth() {
    var a = jQuery("#password_for_auth").val();
    if (a == "") {
        return 1
    }
    if (a.length > 20) {
        return 2
    }
    if (a.length < 6) {
        return 3
    }
    var b = /\s+/;
    if (b.test(a)) {
        return 4
    }
    return 0
}
function checkPasswordOnBlur() {
    var a = check_pwd1_for_auth();
    if (a == 1) {
        jQuery("#password_desc_for_auth").removeClass("authrightInfo");
        jQuery("#password_desc_for_auth").addClass("error_contract");
        jQuery("#password_desc_for_auth").text("密码不能为空")
    } else {
        if (a == 2) {
            jQuery("#password_desc_for_auth").removeClass("authrightInfo");
            jQuery("#password_desc_for_auth").addClass("error_contract");
            jQuery("#password_desc_for_auth").text("密码长度不能超过20")
        } else {
            if (a == 3) {
                jQuery("#password_desc_for_auth").removeClass("authrightInfo");
                jQuery("#password_desc_for_auth").addClass("error_contract");
                jQuery("#password_desc_for_auth").text("密码长度不能少于6")
            } else {
                if (a == 4) {
                    jQuery("#password_desc_for_auth").removeClass("authrightInfo");
                    jQuery("#password_desc_for_auth").addClass("error_contract");
                    jQuery("#password_desc_for_auth").text("密码中不允许有空格")
                } else {
                    jQuery("#password_desc_for_auth").removeClass("error_contract");
                    jQuery("#password_desc_for_auth").addClass("authrightInfo");
                    jQuery("#password_desc_for_auth").text("")
                }
            }
        }
    }
}
function checkPassword2OnBlur_for_auth() {
    var a = check_pwd2_for_auth();
    if (a == 1) {
        jQuery("#password2_desc_for_auth").removeClass("authrightInfo");
        jQuery("#password2_desc_for_auth").addClass("error_contract");
        jQuery("#password2_desc_for_auth").text("重复密码不能为空")
    } else {
        if (a == 2) {
            jQuery("#password2_desc_for_auth").removeClass("authrightInfo");
            jQuery("#password2_desc_for_auth").addClass("error_contract");
            jQuery("#password2_desc_for_auth").text("密码不一致")
        } else {
            jQuery("#password2_desc_for_auth").removeClass("error_contract");
            jQuery("#password2_desc_for_auth").addClass("authrightInfo");
            jQuery("#password2_desc_for_auth").text("")
        }
    }
    jQuery("#password2_desc_for_auth").show()
}
function check_pwd2_for_auth() {
    var a = jQuery("#password_for_auth").val();
    var b = jQuery("#password2_for_auth").val();
    if (b == "") {
        return 1
    }
    if (a != b) {
        return 2
    }
    return 0
}
function beforeRegister() {
    var c = check_email_for_auth();
    if (c == 1) {
        jQuery("#email_desc_for_auth").removeClass("authrightInfo");
        jQuery("#email_desc_for_auth").addClass("error_contract");
        jQuery("#email_desc_for_auth").text("Email不能为空");
        jQuery("#email_for_auth").focus();
        return false
    } else {
        if (c == 2) {
            jQuery("#email_desc_for_auth").removeClass("authrightInfo");
            jQuery("#email_desc_for_auth").addClass("error");
            jQuery("#email_desc_for_auth").html("请输入正确的Email地址");
            jQuery("#email_for_auth").focus();
            return false
        } else {
            if (c == 3) {
                jQuery("#email_desc_for_auth").removeClass("authrightInfo");
                jQuery("#email_desc_for_auth").addClass("error_contract");
                jQuery("#email_desc_for_auth").html("邮箱长度不能超过40位");
                return false
            } else {
                if (jQuery("#email_desc_for_auth").html() == "重复的email") {
                    jQuery("#email_for_auth").focus();
                    return false
                }
            }
        }
    }
    var b = check_pwd1_for_auth();
    if (b == 1) {
        jQuery("#password_desc_for_auth").removeClass("authrightInfo");
        jQuery("#password_desc_for_auth").addClass("error_contract");
        jQuery("#password_desc_for_auth").text("密码不能为空");
        jQuery("#password_for_auth").focus();
        return false
    } else {
        if (b == 2) {
            jQuery("#password_desc_for_auth").removeClass("authrightInfo");
            jQuery("#password_desc_for_auth").addClass("error_contract");
            jQuery("#password_desc_for_auth").text("密码长度不能超过20");
            jQuery("#password_for_auth").focus();
            return false
        } else {
            if (b == 3) {
                jQuery("#password_desc_for_auth").removeClass("authrightInfo");
                jQuery("#password_desc_for_auth").addClass("error_contract");
                jQuery("#password_desc_for_auth").text("密码长度不能少于6");
                jQuery("#password_for_auth").focus();
                return false
            } else {
                if (b == 4) {
                    jQuery("#password_desc_for_auth").removeClass("authrightInfo");
                    jQuery("#password_desc_for_auth").addClass("error_contract");
                    jQuery("#password_desc_for_auth").text("密码中不允许有空格");
                    jQuery("#password_for_auth").focus();
                    return false
                }
            }
        }
    }
    var a = check_pwd2_for_auth();
    if (a == 1) {
        jQuery("#password2_desc_for_auth").removeClass("authrightInfo");
        jQuery("#password2_desc_for_auth").addClass("error_contract");
        jQuery("#password2_desc_for_auth").text("重复密码不能为空");
        jQuery("#password2_for_auth").focus();
        return false
    } else {
        if (a == 2) {
            jQuery("#password2_desc_for_auth").removeClass("authrightInfo");
            jQuery("#password2_desc_for_auth").addClass("error_contract");
            jQuery("#password2_desc_for_auth").text("密码不一致");
            jQuery("#password2_for_auth").focus();
            return false
        }
    }
    if (jQuery("#validCode_for_auth").val() == "") {
        jQuery("#validCode_desc_for_auth").removeClass("authrightInfo");
        jQuery("#validCode_desc_for_auth").addClass("error_contract");
        jQuery("#validCode_desc_for_auth").text("验证码不能为空");
        jQuery("#validCode_for_auth").focus();
        return false
    } else {
        if (jQuery("#validCode_for_auth").val().length != 4) {
            jQuery("#validCode_desc_for_auth").removeClass("authrightInfo");
            jQuery("#validCode_desc_for_auth").addClass("error_contract");
            jQuery("#validCode_desc_for_auth").text("验证码长度必须是4位");
            jQuery("#validCode_for_auth").focus();
            return false
        } else {
            jQuery("#validCode_desc_for_auth").removeClass()
        }
    }
    if (jQuery("#contract_third").attr("data-checked") == false) {
        jQuery("#contract_third_desc").addClass("error_contract");
        return false
    }
    return true
}
;
function yhdGetJSON(c, b, a) {
    yhdAjaxRequst(c, b, a, 1)
}
function yhdAjaxPost(c, b, a) {
    yhdAjaxRequst(c, b, a, 2)
}
function yhdAjaxGet(c, b, a) {
    yhdAjaxRequst(c, b, a, 3)
}
function yhdAjaxRequst(f, e, d, a) {
    var c = new Date().getTime();
    if (f == "" || f == null) {
        alert("无效的地址。");
        return false
    }
    var b = setTimeout(function() {
        ajaxQueue.timeup = true;
        showErrorPage();
        ajaxQueue.workingFlag = false;
        cart3.unblockUI(false);
        if (ajaxQueue.confirmFlag) {
            ajaxQueue.confirmFlag = false
        }
        ajaxQueue.length = 0;
        optMan.map.clear()
    }, 30000);
    var g = function(i) {
        clearTimeout(b);
        if (i && i.code && i.code.length >= 8) {
            var l = i.code.substring(0, 3);
            var h = i.code.substring(i.code.length - 5, i.code.length);
            if (l == "300" && h == "00001") {
                if (ajaxQueue && ajaxQueue.confirmFlag) {
                    yhdPublicLogin.showLoginDivNone(URLPrefix.shoping_passport, false, "", ajaxQueue.confirm, 1)
                } else {
                    yhdPublicLogin.showLoginDiv("", false, 1)
                }
                $(".popGeneral .top_tcgeneral .close_tcg").bind("click", function() {
                    location.reload()
                });
                cart3.unblockUI(false);
                if (ajaxQueue.confirmFlag) {
                    ajaxQueue.confirmFlag = false
                }
                ajaxQueue.length = 0;
                ajaxQueue.workingFlag = false;
                return false
            }
        }
        d(i);
        var j = (new Date()).getTime();
        var k = f + "|" + (j - c);
        recordTrackInfoWithType("2", "shopping_ajax", k)
    };
    if (a == 1) {
        jQuery.post(f, e, g, "json")
    } else {
        if (a == 2) {
            jQuery.post(f, e, g)
        } else {
            if (a == 3) {
                jQuery.get(f, e, g)
            }
        }
    }
}
if (window.jQuery && !window.jQuery.yhd_ajax) {
    jQuery.extend({yhd_ajax: function(a) {
            if (a.url && a.url.indexOf("http") < 0) {
                a.url = URLPrefix.central + a.url
            }
            jQuery.ajax(a)
        }, yhd_load: function(b, c, a) {
            if (b && b.indexOf("http") < 0) {
                b = URLPrefix.central + b
            }
            jQuery.load(b, c, a)
        }, yhd_get: function(c, a, b, d) {
            if (c && c.indexOf("http") < 0) {
                c = URLPrefix.central + c
            }
            jQuery.get(c, a, b, d)
        }, yhd_getJSON: function(b, c, a) {
            if (b && b.indexOf("http") < 0) {
                b = URLPrefix.central + b
            }
            jQuery.getJSON(b, c, a)
        }, yhd_getScript: function(b, c, a) {
            if (b && b.indexOf("http") < 0) {
                b = URLPrefix.central + b
            }
            jQuery.getScript(b, c, a)
        }, yhd_post: function(c, a, b, d) {
            if (c && c.indexOf("http") < 0) {
                c = URLPrefix.central + c
            }
            jQuery.post(c, a, b, d)
        }})
}
;
function showWeBuyList() {
    if (!ckbMan.anyChecked()) {
        alert("请选择要和好友一起购的商品。");
        return
    }
    gotracker("2", "showWeBuyList", null);
    var c = "/cart/info/newShowWeBuyList.do?callback=?";
    var d = $('a[name="cart2Checkbox"]').map(function() {
        return $(this).attr("value") + "=" + (($(this).attr("data-checked") == "yes") ? "1" : "0")
    }).get().join(",");
    $.getJSON(c, {cart2Checkbox: d, logged: getUserLoggedInPage()}, function(a) {
        if (isReqSuccess(a)) {
            var b = $("#togetherBuyList");
            b.html(a.data);
            yhdLib.dialog({popupName: b, maskLayer: true});
            b.find(".close").click(function() {
                yhdLib.closePopup(b)
            });
            bindWeBuyCheckbox()
        } else {
            if (a.code == "300012403020" || a.code == "300012403021") {
                alert(a.msg)
            } else {
                showErrorPage()
            }
        }
    })
}
function popClose() {
    jQuery("#yhd_pop_win").jqmHide()
}
function setShowTotalAmount(b) {
    $("#showTotalAmount").html(b)
}
function bindWeBuyCheckbox() {
    $("#allWeBuyCheckbox").unbind("click").bind("click", function() {
        if ($(this).attr("data-checked") == "yes") {
            $(this).removeClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "no")
        } else {
            $(this).addClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "yes")
        }
        var b = $(this).attr("data-checked");
        $('a[name="weBuyCheckbox"]').each(function() {
            if (b == "yes") {
                $(this).addClass("cart3_checkbox_checked");
                $(this).attr("data-checked", "yes")
            } else {
                $(this).removeClass("cart3_checkbox_checked");
                $(this).attr("data-checked", "no")
            }
        });
        if (b == "yes") {
            setShowTotalAmount($("#totalAmount").val())
        } else {
            setShowTotalAmount(0)
        }
        refreshAllCheck()
    });
    $('a[name="weBuyCheckbox"]').unbind("click").bind("click", function() {
        var c = 0;
        var d = "yes";
        if ($(this).attr("data-checked") == "yes") {
            $(this).removeClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "no")
        } else {
            $(this).addClass("cart3_checkbox_checked");
            $(this).attr("data-checked", "yes")
        }
        $('a[name="weBuyCheckbox"]').each(function() {
            if ($(this).attr("data-checked") == "yes") {
                c = c + parseFloat($(this).next().val()) * 1000
            } else {
                d = "no"
            }
        });
        if (d == "yes") {
            setShowTotalAmount($("#totalAmount").val())
        } else {
            setShowTotalAmount(c / 1000)
        }
        refreshAllCheck()
    });
    $("#allWeBuyCheckbox_label").bind("click", function() {
        $("#allWeBuyCheckbox").click()
    })
}
function isAnySelect() {
    var b = false;
    $('a[name="weBuyCheckbox"]').each(function() {
        if ($(this).attr("data-checked") == "yes") {
            b = true;
            return false
        }
    });
    return b
}
function refreshAllCheck() {
    var b = true;
    $("a[name='weBuyCheckbox']").each(function() {
        if ($(this).attr("data-checked") != "yes") {
            b = false;
            return
        }
    });
    if (b) {
        $("#allWeBuyCheckbox").addClass("cart3_checkbox_checked");
        $("#allWeBuyCheckbox").attr("data-checked", "yes")
    } else {
        $("#allWeBuyCheckbox").removeClass("cart3_checkbox_checked");
        $("#allWeBuyCheckbox").attr("data-checked", "no")
    }
}
function saveWeBuyList() {
    if (!isAnySelect()) {
        alert("请选择要和好友一起购的商品。");
        return
    }
    var e = $("#togetherBuyList");
    yhdLib.closePopup(e);
    gotracker("2", "saveWeBuyList", null);
    var d = "/cart/info/newSaveWeBuyList.do?callback=?";
    var f = "";
    $('a[name="weBuyCheckbox"]').each(function() {
        if ($(this).attr("data-checked") == "yes") {
            if (f != "") {
                f = f + ";"
            }
            f = f + $(this).attr("value")
        }
    });
    cart3.blockUI();
    $.getJSON(d, {cart2Checkbox: f, logged: getUserLoggedInPage()}, function(a) {
        cart3.unblockUI();
        if (isReqSuccess(a)) {
            var b = $("#J_popCopyLink");
            b.html(a.data);
            yhdLib.dialog({popupName: b, maskLayer: true});
            b.find(".close").click(function() {
                yhdLib.closePopup(b)
            });
            initPopLink()
        } else {
            if (a.code == "300012503021") {
                alert(a.msg)
            } else {
                showErrorPage()
            }
        }
    })
}
function initPopLink() {
    if ($.browser.msie && ($.browser.version < "8.0")) {
        $("#showCopyTips").hide()
    } else {
        $("#inputUrl").focus();
        $("#inputUrl").select();
        $(document).keydown(function(b) {
            $("#inputUrl").select();
            if (b.ctrlKey && (b.which == 67 || b.which == 99)) {
                $("#showCopyTips").hide();
                $("#copyUrlTips").show();
                gotracker("2", "copyWeBuyUrl", null)
            }
        })
    }
    $("#inputUrl").attr("readOnly", true)
}
function copyWeBuyUrl() {
    $("#copyUrlTips").hide();
    $("#showCopyTips").hide();
    $("#inputUrl").select();
    if ($.browser.msie && ($.browser.version < "8.0")) {
        window.clipboardData.setData("text", $("#inputUrl").val());
        $("#copyUrlTips").show()
    } else {
        $("#showCopyTips").show()
    }
    gotracker("2", "copyWeBuyUrl", null)
}
function addBatchProduct() {
    gotracker("2", "addFriendListToMyCart", null);
    if (!yhdPublicLogin.checkLogin()) {
        yhdPublicLogin.showLoginDiv(null, false);
        return
    }
    cart3.blockUI();
    var b = "/cart/opt/addBundle.do?callback=?";
    $.getJSON(b, {bundleStr: $("#bundleStr").val()}, function(e) {
        if (isReqSuccess(e)) {
            if (e.data.length > 0) {
                var f = "";
                for (var a = 0; a < e.data.length;
                        a++) {
                    f += "" + e.data[a].msg + "</br>"
                }
                cart3.unblockUI();
                alertWeBuyResult("下列商品没有被加入购物车，原因如下：", f, 498, "auto")
            } else {
                location.href = "/cart/cart.do?action=view";
                cart3.unblockUI()
            }
        } else {
            showErrorPage()
        }
    })
}
function alertWeBuyResult(j, k, n, i) {
    jQuery("#optAck  #title").empty();
    jQuery("#optAckInfo").empty();
    jQuery("#optAck  #title").html(j);
    jQuery("#optAckInfo").html(k);
    var h = jQuery("#optAck").html();
    YHD.popwin(h, n, i);
    var l = ($(window).width() - $("#yhd_pop_win").width()) / 2 + $(window).scrollLeft();
    var m = ($(window).height() - $("#yhd_pop_win").height()) / 2 + $(window).scrollTop();
    jQuery("#yhd_pop_win").css({position: "absolute", left: l, height: "auto", top: m});
    jQuery(".sys_popbox").css("margin-left", "0px");
    jQuery(".sys_popbox").css("position", "static")
}
function closeWeBuyPopAndJump() {
    popClose();
    location.href = "/cart/cart.do?action=view"
}
;
function validateHostName(a) {
    var b = {passed: true, msg: ""};
    var a = $.trim(a);
    if (a.length == 0) {
        b.passed = false;
        b.msg = "姓名不能为空";
        return b
    }
    var c = /[^\u4e00-\u9fa5]/;
    if (c.test(a)) {
        b.passed = false;
        b.msg = "姓名必须是1-10个汉字组成";
        return b
    }
    if (a.length > 10) {
        b.passed = false;
        b.msg = "姓名不能超过10个汉字";
        return b
    }
    return b
}
function validateCredentialsNum(b) {
    var a = {passed: true, msg: ""};
    var b = $.trim(b);
    if (b.length <= 0) {
        a.passed = false;
        a.msg = "身份证号码不能为空";
        return a
    }
    if (!validateIdCardNum(b)) {
        a.passed = false;
        a.msg = "输入的身份证号码不是有效号码";
        return a
    }
    return a
}
function validateIdCardNum(f) {
    var b = {11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"};
    var a = 0;
    var c = "";
    if (f.length == 15) {
        if (!/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(f)) {
            return false
        } else {
            if (b[parseInt(f.substr(0, 2))] == null) {
                return false
            }
            return true
        }
    }
    if (!/^\d{17}(\d|x)$/i.test(f)) {
        return false
    }
    f = f.replace(/x$/i, "a");
    if (b[parseInt(f.substr(0, 2))] == null) {
        return false
    }
    var h = f.substr(6, 4) + "/" + Number(f.substr(10, 2)) + "/" + Number(f.substr(12, 2));
    var e = new Date(h);
    if (h != (e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate())) {
        return false
    }
    for (var g = 17; g >= 0; g--) {
        a += (Math.pow(2, g) % 11) * parseInt(f.charAt(17 - g), 11)
    }
    if (a % 11 != 1) {
        return false
    }
    return true
}
function validateMobilePhone(a) {
    var b = /^1[3|4|5|8][0-9]\d{8}$/;
    if (!a || !b.test(a)) {
        return false
    }
    return true
}
;
function submitIdInfoAndConfirmPay() {
    if (!checkHostNameFor3gCard()) {
        return
    }
    if (!checkCredentialsAddressFor3gCard()) {
        return
    }
    if (!checkCredentialsNumFor3gCard()) {
        return
    }
    var a = "/cart/opt/saveInfoFor3gCard.do?callback=?";
    var b = {hostName: jQuery("#hostName").val(), credentialsAddress: jQuery("#credentialsAddress").val(), credentialsType: 0, credentialsNum: jQuery("#credentialsNum").val()};
    $.getJSON(a, b, function(c) {
        if (isReqSuccess(c)) {
            jQuery("#yhd_pop_win").jqmHide();
            confirmToPay();
            return
        } else {
            alert(c.msg);
            return
        }
    })
}
function checkHostNameFor3gCard() {
    var a = jQuery("#hostName");
    var c = jQuery("#checkHostName");
    var d = jQuery.trim(a.val());
    a.val(d);
    var b = validateHostName(d);
    if (!b.passed) {
        c.html(b.msg);
        a.focus();
        return false
    }
    c.html("");
    return true
}
function checkCredentialsAddressFor3gCard(b) {
    var c = jQuery("#credentialsAddress");
    var a = jQuery.trim(c.val());
    c.val(a);
    if (a.length == 0) {
        jQuery("#checkCredentialsAddress").html("证件地址不能为空");
        c.focus();
        return false
    }
    if (a.length > 30) {
        jQuery("#checkCredentialsAddress").html("证件地址不能长于30个字符");
        c.focus();
        return false
    }
    jQuery("#checkCredentialsAddress").html("");
    return true
}
function checkCredentialsNumFor3gCard() {
    var b = jQuery("#credentialsNum");
    var a = jQuery.trim(b.val());
    b.val(a);
    var c = validateCredentialsNum(a);
    if (!c.passed) {
        jQuery("#checkCredentialsNum").html(c.msg);
        b.focus();
        return false
    }
    jQuery("#checkCredentialsNum").html("");
    return true
}
;
var smsValidate = {init: function(b) {
        if (b) {
            if (b.sendSmsWhenInit != null && b.sendSmsWhenInit != undefined) {
                smsValidate.config.sendSmsWhenInit = b.sendSmsWhenInit
            }
            if (b.errorMsgWhenInit != null && b.errorMsgWhenInit != undefined) {
                smsValidate.config.errorMsgWhenInit = b.errorMsgWhenInit
            }
            if (b.isAccountBind != null && b.isAccountBind != undefined) {
                smsValidate.config.isAccountBind = b.isAccountBind
            }
            if (b.smsSendInfo != null && b.smsSendInfo != undefined) {
                smsValidate.config.smsSendInfo = b.smsSendInfo
            }
        }
    }, config: {sendSmsWhenInit: true, errorMsgWhenInit: "", isAccountBind: true, smsSendInfo: ""}, bindPhone: function() {
        var b = "/checkoutV3/sms/bindMobile.do?rd=" + Math.random();
        jQuery.get(b, function(a) {
            $("body").append(a);
            smsValidate.bindMobibleStep1()
        })
    }, sendSms: function(e, g, h) {
        var f = "";
        if (smsValidate.config.isAccountBind) {
            f = "/checkoutV3/sms/sendValidCodeSMS.do?accountBind=true&rd=" + Math.random()
        } else {
            f = "/checkoutV3/sms/sendValidCodeSMS.do?accountBind=false&smsSendInfo=" + encodeURIComponent(smsValidate.config.smsSendInfo) + "&rd=" + Math.random()
        }
        jQuery.get(f, function(a) {
            var b = $(a);
            $("body").append(b);
            if (b.attr("id") == "mobileCheckPop") {
                smsValidate.validateStep1(e, g)
            } else {
                smsValidate.bindMobibleStep1(h)
            }
        })
    }, mobileInfo: {phoneNo: null}, ieLower: $.browser.msie && Number($.browser.version) == 6, obgSize: function() {
        $(".popGeneral").css("backgroundColor", "transparent");
        var d = smsValidate.ieLower ? $(".oBgBox,.popGeneral") : $(".oBgBox"), c = $(".vipCardPopBox");
        d.css({width: c.outerWidth(true), height: c.outerHeight(true)});
        $(".popCloseIco").unbind("click").bind("click", function() {
            yhdLib.popclose()
        })
    }, bindMobibleStep1: function(c) {
        var d = $(".popGeneral");
        if (d.size() > 0) {
            d.html($("#bindMobileStep1").val())
        } else {
            yhdLib.popwin({popcontentstr: $("#bindMobileStep1").val()});
            d = $(".popGeneral")
        }
        $("#toNext", d).unbind("click").bind("click", function() {
            if (smsValidate.checkMobile()) {
                smsValidate.mobileInfo.phoneNo = $("#mobile", d).val();
                smsValidate.bindMobibleStep2(c)
            }
        });
        $("#mobile", d).focus();
        smsValidate.obgSize()
    }, bindMobibleStep2: function(p) {
        var u = $(".popGeneral");
        u.html($("#bindMobileStep2").val());
        var l = $(".cont p", u).eq(0);
        var n = $(".cont p", u).eq(1);
        var r = smsValidate.mobileInfo.phoneNo;
        $("em", l).html(r.substr(0, 4) + "****" + r.substr(9, 2));
        var s = $(".bindMobileMsg", u);
        var v = $("div.vBts b b.sec", s);
        smsValidate.sendSMSByMyyhd(function() {
            m()
        }, p);
        m();
        function m() {
            var a = 60;
            var b = setInterval(function() {
                v.html(a--);
                if (a == -1) {
                    clearInterval(b);
                    v.parent().parent().removeClass("hadClick");
                    v.html(60);
                    $("div.vBts u", s).unbind("click").bind("click", function() {
                        v.parent().parent().addClass("hadClick");
                        smsValidate.sendSMSByMyyhd(function() {
                            m()
                        }, p)
                    })
                }
            }, 1000)
        }
        smsValidate.obgSize();
        var t = $(".inputMsg", n);
        smsValidate.inputFocus(t, "6位数字");
        $("a", l).unbind("click").bind("click", function() {
            smsValidate.bindMobibleStep1(p)
        });
        var q = $("span", n);
        $(".bindMobileBt .vBts", u).unbind("click").bind("click", function() {
            var a = $.trim(t.val());
            if (a == "" || a == "6位数字") {
                $(q).html('<s class="icoNo_vipCard"></s>请输入验证码');
                q.show();
                t.focus()
            } else {
                if (!/\d{6}/.test(a)) {
                    $(q).html('<s class="icoNo_vipCard"></s>验证码错误，请重新输入');
                    q.show();
                    t.focus()
                } else {
                    q.hide();
                    o()
                }
            }
        });
        function o() {
            var a = URLPrefix.shoping_my + "/member/bind/successBind.do?cellphone=" + smsValidate.mobileInfo.phoneNo + "&smsValidateCode=" + $.trim(t.val()) + "&callback=?";
            $.getJSON(a, function(c) {
                var b = {"cellphone number is null": "您的手机号为空或格式错误", "validateCode is null": "验证码为空", alreadyvalidate: "您已经绑定了手机", "phonenum is exists": "您输入的手机号已经绑定了其他帐号", success: "绑定成功", "update status error": "系统繁忙，请稍候重试", "validate code is expired": "验证码已经过期，请重新获取短信验证码", "wrong times": "您尝试次数太多，请稍候重试", "incorrect code": "您重试的次数过多，请重新获取短信", "incorrect userId": "验证码错误"};
                if (!c) {
                    alert("系统繁忙，请稍候重试")
                } else {
                    if (c.result != "success") {
                        $(q).html('<s class="icoNo_vipCard"></s>' + b[c.result])
                    }
                }
                if (c.result == "success") {
                    smsValidate.bindMobibleStep3(p)
                } else {
                    q.show();
                    t.focus()
                }
            })
        }}
    , bindMobibleStep3: function(f) {
        var d = $(".popGeneral");
        d.html($("#bindMobileStep3").val());
        smsValidate.obgSize();
        var e = smsValidate.mobileInfo.phoneNo;
        $(".bindMobileOkMsg p em", d).html(e.substr(0, 4) + "*****" + e.substr(9, 2));
        $("p.bindMobileBt span.vBts").click(function() {
            yhdLib.popclose();
            f()
        })
    }, validateStep1: function(i, n) {
        yhdLib.popwin({popcontentstr: $("#mobileCheckPop").val()});
        smsValidate.obgSize();
        var o = $(".popGeneral");
        var j = $("#mobileCheckMbt u span", o);
        var p = $("#mobileCheckMbt", o);
        if (smsValidate.config.sendSmsWhenInit) {
            i()
        }
        m();
        function m() {
            var a = 60;
            var b = setInterval(function() {
                j.html(a--);
                if (a == -1) {
                    clearInterval(b);
                    p.removeClass("hadClick");
                    j.html(60);
                    p.unbind("click").bind("click", function() {
                        p.addClass("hadClick");
                        p.unbind("click");
                        i();
                        m()
                    })
                }
            }, 1000)
        }
        var k = $("#validCode_popWin", o);
        smsValidate.inputFocus(k, "请输入");
        var l = $(".mobileCheckErrMsg", o);
        $(".mobileCheckSub .vBts", o).unbind("click").bind("click", function() {
            var a = $.trim(k.val());
            if (a == "" || a == "请输入") {
                smsValidate.showErrorMsg("请输入验证码");
                k.focus()
            } else {
                if (!/\d{6}/.test(a)) {
                    smsValidate.showErrorMsg("验证码错误，请重新输入");
                    k.focus()
                } else {
                    l.hide();
                    n()
                }
            }
        });
        if (smsValidate.config.errorMsgWhenInit) {
            smsValidate.showErrorMsg(smsValidate.config.errorMsgWhenInit)
        }
    }, showErrorMsg: function(f) {
        var e = $(".popGeneral");
        var d = $(".mobileCheckErrMsg", e);
        if ($(".mobileCheckCont").is(":visible")) {
            $(d).html('<s class="icoNo_vipCard"></s>' + f);
            d.show()
        } else {
            alert(f)
        }
    }, checkMobile: function() {
        var d = $(".popGeneral");
        var c = $("#mobile", d).val();
        if (!$.trim(c)) {
            $("#mobileValidMsg", d).show().html('<s class="icoNo_vipCard"></s>请输入手机号码');
            $("#mobile", d).focus();
            return false
        } else {
            if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(c)) {
                $("#mobileValidMsg", d).show().html('<s class="icoNo_vipCard"></s>手机号码不正确');
                $("#mobile", d).focus();
                return false
            } else {
                $("#mobileValidMsg", d).hide();
                return true
            }
        }
    }, sendSMSByMyyhd: function(f, d) {
        var e = URLPrefix.shoping_my + "/member/bind/finishBind.do?cellphone=" + smsValidate.mobileInfo.phoneNo + "&callback=?";
        $.getJSON(e, function(b) {
            var c = {"cellphone number is null": "您的手机号码为空或者格式错误", alreadyvalidate: "您已经绑定了手机，不需要再绑定，请确认", "phonenum is exists": "您输入的手机号已经绑定了其他帐号", "overflow times": "验证码发送次数过多，请明天再尝试。", "too fast": "验证短信已经发出，请注意查收", success: "验证短信已经发出", "update status error": "系统繁忙，请稍候重试"};
            if (!b) {
                alert("系统繁忙，请稍候重试")
            } else {
                if (b.result != "success") {
                    var a = c[b.result];
                    if (a) {
                        alert(a)
                    } else {
                        if (b.result.indexOf("exist_") > -1) {
                            alert(c["phonenum is exists"])
                        }
                    }
                    if (b.result != "too fast") {
                        smsValidate.bindMobibleStep1(d)
                    }
                }
            }
            f()
        })
    }, inputFocus: function(d, c) {
        d.focusin(function() {
            var a = $(this);
            if (a.val() == c) {
                a.val("")
            }
            a.css("color", "#000")
        }).focusout(function() {
            var a = $(this);
            if (!a.val()) {
                a.val(c)
            }
            a.css("color", "")
        })
    }};
var yhdLib = yhdLib || {};
yhdLib.hasOwnProperty("ieLower") || (yhdLib.ieLower = $.browser.msie && $.browser.version == 6 || !1), yhdLib.hasOwnProperty("popArgs") || (yhdLib.popArgs = {popName: !1, popFixed: !1, popDelayTime: !1}), yhdLib.hasOwnProperty("dialog") || (yhdLib.dialog = function(j, m) {
    j = j || {};
    var d = {popupName: "", maskLayer: !1, popupFixed: !1, delayTime: !1, popupFrame: !1, fun: []}, b = $.extend({}, d, j), g = $(b.popupName).outerWidth(), p = $(b.popupName).outerHeight(), c = $(window).scrollTop(), l = $(window).height(), k = $(document).height(), h = (l - p) / 2;
    this.popArgs.popName = b.popupName, this.popArgs.popFixed = b.popupFixed, this.popArgs.popFrame = b.popupFrame, clearTimeout(yhdLib.popArgs.popDelayTime), typeof m != "undefined" && (+m(), p = $(b.popupName).outerHeight(), h = (l - p) / 2), this.popReset(!0), b.maskLayer && ($(b.popupName).after("<div class='popup_win_mask'></div>"), $(".popup_win_mask").css("height", k), yhdLib.ieLower && ($(".popup_win_mask").append("<iframe class='popup_win_iframe' frameborder='0'></iframe>"), $(".popup_win_iframe").css("height", k))), b.delayTime && (this.popArgs.popDelayTime = setTimeout(function() {
        yhdLib.closePopup(b.popupName)
    }, b.delayTime)), $(".popup_btn_close", b.popupName).click(function() {
        yhdLib.closePopup(b.popupName)
    }), b.fun.length && (new Function(b.fun.join("();") + "();"))()
}), yhdLib.hasOwnProperty("closePopup") || (yhdLib.closePopup = function(b, a) {
    $(b).fadeOut(200), $(b).next(".popup_win_mask").remove(), typeof a != "undefined" && +a()
}), yhdLib.hasOwnProperty("popReset") || (yhdLib.popReset = function(j) {
    var m = this.popArgs, d = $(m.popName), b = d.width(), g = d.height(), p = $(window).height(), c = (p - g) / 2, l = $(window).scrollTop(), k = m.popFixed, h = m.popFrame;
    h && (p = $(window.parent.window).height(), l = $(window.parent.window).scrollTop(), c = (p - g) / 2), k ? typeof j != "undefined" ? p >= g ? (d.css({position: "fixed", marginLeft: -(b / 2) + "px", top: c + "px"}).fadeIn(), yhdLib.ieLower && (d.css({position: "absolute", top: c + l + "px"}), $(window).scroll(function() {
        d.css({top: c + $(window).scrollTop()})
    }))) : (d.css({position: "fixed", marginLeft: -(b / 2) + "px", top: "0"}).fadeIn(), yhdLib.ieLower && (d.css({position: "absolute", top: l + "px"}), $(window).scroll(function() {
        d.css({top: $(window).scrollTop()})
    }))) : p >= g ? (d.css({top: c + "px"}), yhdLib.ieLower && (d.css({position: "absolute", top: c + l + "px"}), $(window).scroll(function() {
        d.css({top: c + $(window).scrollTop()})
    }))) : (d.css({top: "0"}), yhdLib.ieLower && (d.css({position: "absolute", top: l + "px"}), $(window).scroll(function() {
        d.css({top: $(window).scrollTop()})
    }))) : typeof j != "undefined" ? p >= g ? d.css({marginLeft: -(b / 2) + "px", top: c + l + "px"}).fadeIn() : d.css({marginLeft: -(b / 2) + "px", top: l + "px"}).fadeIn() : p >= g ? d.css({top: c + l + "px"}) : d.css({top: l + "px"})
});/*
 * jScrollPane - v2.0.19 - 2013-11-16
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(e, d, f) {
    e.fn.jScrollPane = function(b) {
        function a(aJ, aH) {
            function aG(v) {
                var u, t, s, p, o, k, i = !1, g = !1;
                if (aX = v, aV === f) {
                    o = aJ.scrollTop(), k = aJ.scrollLeft(), aJ.css({overflow: "hidden", padding: 0}), aU = aJ.innerWidth() + bg, aT = aJ.innerHeight(), aJ.width(aU), aV = e('<div class="jspPane" />').css("padding", bn).append(aJ.children()), aS = e('<div class="jspContainer" />').css({width: aU + "px", height: aT + "px"}).append(aV).appendTo(aJ)
                } else {
                    if (aJ.css("width", ""), i = aX.stickToBottom && bd(), g = aX.stickToRight && bc(), p = aJ.innerWidth() + bg != aU || aJ.outerHeight() != aT, p && (aU = aJ.innerWidth() + bg, aT = aJ.innerHeight(), aS.css({width: aU + "px", height: aT + "px"})), !p && aK == aR && aV.outerHeight() == aQ) {
                        return aJ.width(aU), void 0
                    }
                    aK = aR, aV.css("width", ""), aJ.width(aU), aS.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                aV.css("overflow", "auto"), aR = v.contentWidth ? v.contentWidth : aV[0].scrollWidth, aQ = aV[0].scrollHeight, aV.css("overflow", ""), aP = aR / aU, aO = aQ / aT, aN = aO > 1, aM = aP > 1, aM || aN ? (aJ.addClass("jspScrollable"), u = aX.maintainPosition && (bi || af), u && (t = bf(), s = be()), aF(), aD(), aA(), u && (ak(g ? aR - aU : t, !1), al(i ? aQ - aT : s, !1)), a6(), ba(), aZ(), aX.enableKeyboardNavigation && a4(), aX.clickOnTrack && av(), a1(), aX.hijackInternalLinks && a0()) : (aJ.removeClass("jspScrollable"), aV.css({top: 0, left: 0, width: aS.width() - bg}), a8(), a5(), a2(), au()), aX.autoReinitialise && !bs ? bs = setInterval(function() {
                    aG(aX)
                }, aX.autoReinitialiseDelay) : !aX.autoReinitialise && bs && clearInterval(bs), o && aJ.scrollTop(0) && al(o, !1), k && aJ.scrollLeft(0) && ak(k, !1), aJ.trigger("jsp-initialised", [aM || aN])
            }
            function aF() {
                aN && (aS.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), aa = aS.find(">.jspVerticalBar"), bp = aa.find(">.jspTrack"), bm = bp.find(">.jspDrag"), aX.showArrows && (ag = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", ay(0, -1)).bind("click.jsp", a7), ac = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", ay(0, 1)).bind("click.jsp", a7), aX.arrowScrollOnHover && (ag.bind("mouseover.jsp", ay(0, -1, ag)), ac.bind("mouseover.jsp", ay(0, 1, ac))), az(bp, aX.verticalArrowPositions, ag, ac)), a3 = aT, aS.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    a3 -= e(this).outerHeight()
                }), bm.hover(function() {
                    bm.addClass("jspHover")
                }, function() {
                    bm.removeClass("jspHover")
                }).bind("mousedown.jsp", function(g) {
                    e("html").bind("dragstart.jsp selectstart.jsp", a7), bm.addClass("jspActive");
                    var h = g.pageY - bm.position().top;
                    return e("html").bind("mousemove.jsp", function(i) {
                        ar(i.pageY - h, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", at), !1
                }), aE())
            }
            function aE() {
                bp.height(a3 + "px"), bi = 0, bj = aX.verticalGutter + bp.outerWidth(), aV.width(aU - bj - bg);
                try {
                    0 === aa.position().left && aV.css("margin-left", bj + "px")
                } catch (g) {
                }
            }
            function aD() {
                aM && (aS.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), br = aS.find(">.jspHorizontalBar"), bl = br.find(">.jspTrack"), aW = bl.find(">.jspDrag"), aX.showArrows && (ah = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", ay(-1, 0)).bind("click.jsp", a7), ad = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", ay(1, 0)).bind("click.jsp", a7), aX.arrowScrollOnHover && (ah.bind("mouseover.jsp", ay(-1, 0, ah)), ad.bind("mouseover.jsp", ay(1, 0, ad))), az(bl, aX.horizontalArrowPositions, ah, ad)), aW.hover(function() {
                    aW.addClass("jspHover")
                }, function() {
                    aW.removeClass("jspHover")
                }).bind("mousedown.jsp", function(g) {
                    e("html").bind("dragstart.jsp selectstart.jsp", a7), aW.addClass("jspActive");
                    var h = g.pageX - aW.position().left;
                    return e("html").bind("mousemove.jsp", function(i) {
                        ap(i.pageX - h, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", at), !1
                }), a9 = aS.innerWidth(), aB())
            }
            function aB() {
                aS.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    a9 -= e(this).outerWidth()
                }), bl.width(a9 + "px"), af = 0
            }
            function aA() {
                if (aM && aN) {
                    var g = bl.outerHeight(), h = bp.outerWidth();
                    a3 -= g, e(br).find(">.jspCap:visible,>.jspArrow").each(function() {
                        a9 += e(this).outerWidth()
                    }), a9 -= h, aT -= h, aU -= g, bl.parent().append(e('<div class="jspCorner" />').css("width", g + "px")), aE(), aB()
                }
                aM && aV.width(aS.outerWidth() - bg + "px"), aQ = aV.outerHeight(), aO = aQ / aT, aM && (aI = Math.ceil(1 / aP * a9), aI > aX.horizontalDragMaxWidth ? aI = aX.horizontalDragMaxWidth : aI < aX.horizontalDragMinWidth && (aI = aX.horizontalDragMinWidth), aW.width(aI + "px"), aw = a9 - aI, ao(af)), aN && (aC = Math.ceil(1 / aO * a3), aC > aX.verticalDragMaxHeight ? aC = aX.verticalDragMaxHeight : aC < aX.verticalDragMinHeight && (aC = aX.verticalDragMinHeight), bm.height(aC + "px"), aL = a3 - aC, aq(bi))
            }
            function az(i, h, n, m) {
                var l, k = "before", j = "after";
                "os" == h && (h = /Mac/.test(navigator.platform) ? "after" : "split"), h == k ? j = h : h == j && (k = h, l = n, n = m, m = l), i[k](n)[j](m)
            }
            function ay(h, g, i) {
                return function() {
                    return ax(h, g, this, i), this.blur(), !1
                }
            }
            function ax(j, q, p, o) {
                p = e(p).addClass("jspActive");
                var n, m, l = !0, k = function() {
                    0 !== j && ai.scrollByX(j * aX.arrowButtonSpeed), 0 !== q && ai.scrollByY(q * aX.arrowButtonSpeed), m = setTimeout(k, l ? aX.initialDelay : aX.arrowRepeatFreq), l = !1
                };
                k(), n = o ? "mouseout.jsp" : "mouseup.jsp", o = o || e("html"), o.bind(n, function() {
                    p.removeClass("jspActive"), m && clearTimeout(m), m = null, o.unbind(n)
                })
            }
            function av() {
                au(), aN && bp.bind("mousedown.jsp", function(k) {
                    if (k.originalTarget === f || k.originalTarget == k.currentTarget) {
                        var r, q = e(this), p = q.offset(), o = k.pageY - p.top - bi, n = !0, m = function() {
                            var g = q.offset(), j = k.pageY - g.top - aC / 2, i = aT * aX.scrollPagePercent, h = aL * i / (aQ - aT);
                            if (0 > o) {
                                bi - h > j ? ai.scrollByY(-i) : ar(j)
                            } else {
                                if (!(o > 0)) {
                                    return l(), void 0
                                }
                                j > bi + h ? ai.scrollByY(i) : ar(j)
                            }
                            r = setTimeout(m, n ? aX.initialDelay : aX.trackClickRepeatFreq), n = !1
                        }, l = function() {
                            r && clearTimeout(r), r = null, e(document).unbind("mouseup.jsp", l)
                        };
                        return m(), e(document).bind("mouseup.jsp", l), !1
                    }
                }), aM && bl.bind("mousedown.jsp", function(k) {
                    if (k.originalTarget === f || k.originalTarget == k.currentTarget) {
                        var r, q = e(this), p = q.offset(), o = k.pageX - p.left - af, n = !0, m = function() {
                            var g = q.offset(), j = k.pageX - g.left - aI / 2, i = aU * aX.scrollPagePercent, h = aw * i / (aR - aU);
                            if (0 > o) {
                                af - h > j ? ai.scrollByX(-i) : ap(j)
                            } else {
                                if (!(o > 0)) {
                                    return l(), void 0
                                }
                                j > af + h ? ai.scrollByX(i) : ap(j)
                            }
                            r = setTimeout(m, n ? aX.initialDelay : aX.trackClickRepeatFreq), n = !1
                        }, l = function() {
                            r && clearTimeout(r), r = null, e(document).unbind("mouseup.jsp", l)
                        };
                        return m(), e(document).bind("mouseup.jsp", l), !1
                    }
                })
            }
            function au() {
                bl && bl.unbind("mousedown.jsp"), bp && bp.unbind("mousedown.jsp")
            }
            function at() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), bm && bm.removeClass("jspActive"), aW && aW.removeClass("jspActive")
            }
            function ar(h, g) {
                aN && (0 > h ? h = 0 : h > aL && (h = aL), g === f && (g = aX.animateScroll), g ? ai.animate(bm, "top", h, aq) : (bm.css("top", h), aq(h)))
            }
            function aq(i) {
                i === f && (i = bm.position().top), aS.scrollTop(0), bi = i;
                var h = 0 === bi, l = bi == aL, k = i / aL, j = -k * (aQ - aT);
                (ae != h || bo != l) && (ae = h, bo = l, aJ.trigger("jsp-arrow-change", [ae, bo, c, bh])), an(h, l), aV.css("top", j), aJ.trigger("jsp-scroll-y", [-j, h, l]).trigger("scroll")
            }
            function ap(h, g) {
                aM && (0 > h ? h = 0 : h > aw && (h = aw), g === f && (g = aX.animateScroll), g ? ai.animate(aW, "left", h, ao) : (aW.css("left", h), ao(h)))
            }
            function ao(i) {
                i === f && (i = aW.position().left), aS.scrollTop(0), af = i;
                var h = 0 === af, l = af == aw, k = i / aw, j = -k * (aR - aU);
                (c != h || bh != l) && (c = h, bh = l, aJ.trigger("jsp-arrow-change", [ae, bo, c, bh])), am(h, l), aV.css("left", j), aJ.trigger("jsp-scroll-x", [-j, h, l]).trigger("scroll")
            }
            function an(h, g) {
                aX.showArrows && (ag[h ? "addClass" : "removeClass"]("jspDisabled"), ac[g ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function am(h, g) {
                aX.showArrows && (ah[h ? "addClass" : "removeClass"]("jspDisabled"), ad[g ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function al(h, g) {
                var i = h / (aQ - aT);
                ar(i * aL, g)
            }
            function ak(h, g) {
                var i = h / (aR - aU);
                ap(i * aw, g)
            }
            function aj(E, D, C) {
                var B, A, z, y, x, w, v, u, t, s = 0, r = 0;
                try {
                    B = e(E)
                } catch (q) {
                    return
                }
                for (A = B.outerHeight(), z = B.outerWidth(), aS.scrollTop(0), aS.scrollLeft(0); !B.is(".jspPane"); ) {
                    if (s += B.position().top, r += B.position().left, B = B.offsetParent(), /^body|html$/i.test(B[0].nodeName)) {
                        return
                    }
                }
                y = be(), w = y + aT, y > s || D ? u = s - aX.horizontalGutter : s + A > w && (u = s - aT + A + aX.horizontalGutter), isNaN(u) || al(u, C), x = bf(), v = x + aU, x > r || D ? t = r - aX.horizontalGutter : r + z > v && (t = r - aU + z + aX.horizontalGutter), isNaN(t) || ak(t, C)
            }
            function bf() {
                return -aV.position().left
            }
            function be() {
                return -aV.position().top
            }
            function bd() {
                var g = aQ - aT;
                return g > 20 && g - be() < 10
            }
            function bc() {
                var g = aR - aU;
                return g > 20 && g - bf() < 10
            }
            function ba() {
                aS.unbind(bk).bind(bk, function(i, h, n, m) {
                    var l = af, k = bi, j = i.deltaFactor || aX.mouseWheelSpeed;
                    return ai.scrollBy(n * j, -m * j, !1), l == af && k == bi
                })
            }
            function a8() {
                aS.unbind(bk)
            }
            function a7() {
                return !1
            }
            function a6() {
                aV.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(g) {
                    aj(g.target, !1)
                })
            }
            function a5() {
                aV.find(":input,a").unbind("focus.jsp")
            }
            function a4() {
                function g() {
                    var l = af, k = bi;
                    switch (j) {
                        case 40:
                            ai.scrollByY(aX.keyboardSpeed, !1);
                            break;
                        case 38:
                            ai.scrollByY(-aX.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            ai.scrollByY(aT * aX.scrollPagePercent, !1);
                            break;
                        case 33:
                            ai.scrollByY(-aT * aX.scrollPagePercent, !1);
                            break;
                        case 39:
                            ai.scrollByX(aX.keyboardSpeed, !1);
                            break;
                        case 37:
                            ai.scrollByX(-aX.keyboardSpeed, !1)
                    }
                    return i = l != af || k != bi
                }
                var j, i, h = [];
                aM && h.push(br[0]), aN && h.push(aa[0]), aV.focus(function() {
                    aJ.focus()
                }), aJ.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(m) {
                    if (m.target === this || h.length && e(m.target).closest(h).length) {
                        var l = af, k = bi;
                        switch (m.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                j = m.keyCode, g();
                                break;
                            case 35:
                                al(aQ - aT), j = null;
                                break;
                            case 36:
                                al(0), j = null
                        }
                        return i = m.keyCode == j && l != af || k != bi, !i
                    }
                }).bind("keypress.jsp", function(k) {
                    return k.keyCode == j && g(), !i
                }), aX.hideFocus ? (aJ.css("outline", "none"), "hideFocus" in aS[0] && aJ.attr("hideFocus", !0)) : (aJ.css("outline", ""), "hideFocus" in aS[0] && aJ.attr("hideFocus", !1))
            }
            function a2() {
                aJ.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }
            function a1() {
                if (location.hash && location.hash.length > 1) {
                    var g, j, i = escape(location.hash.substr(1));
                    try {
                        g = e("#" + i + ', a[name="' + i + '"]')
                    } catch (h) {
                        return
                    }
                    g.length && aV.find(i) && (0 === aS.scrollTop() ? j = setInterval(function() {
                        aS.scrollTop() > 0 && (aj(g, !0), e(document).scrollTop(aS.position().top), clearInterval(j))
                    }, 50) : (aj(g, !0), e(document).scrollTop(aS.position().top)))
                }
            }
            function a0() {
                e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(v) {
                    var u, t, s, r, q, p, o = this.href.substr(0, this.href.indexOf("#")), n = location.href;
                    if (-1 !== location.href.indexOf("#") && (n = location.href.substr(0, location.href.indexOf("#"))), o === n) {
                        u = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            t = e("#" + u + ', a[name="' + u + '"]')
                        } catch (m) {
                            return
                        }
                        t.length && (s = t.closest(".jspScrollable"), r = s.data("jsp"), r.scrollToElement(t, !0), s[0].scrollIntoView && (q = e(d).scrollTop(), p = t.offset().top, (q > p || p > q + e(d).height()) && s[0].scrollIntoView()), v.preventDefault())
                    }
                }))
            }
            function aZ() {
                var h, g, l, k, j, i = !1;
                aS.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(n) {
                    var m = n.originalEvent.touches[0];
                    h = bf(), g = be(), l = m.pageX, k = m.pageY, j = !1, i = !0
                }).bind("touchmove.jsp", function(p) {
                    if (i) {
                        var o = p.originalEvent.touches[0], n = af, m = bi;
                        return ai.scrollTo(h + l - o.pageX, g + k - o.pageY), j = j || Math.abs(l - o.pageX) > 5 || Math.abs(k - o.pageY) > 5, n == af && m == bi
                    }
                }).bind("touchend.jsp", function() {
                    i = !1
                }).bind("click.jsp-touchclick", function() {
                    return j ? (j = !1, !1) : void 0
                })
            }
            function aY() {
                var h = be(), g = bf();
                aJ.removeClass("jspScrollable").unbind(".jsp"), aJ.replaceWith(bq.append(aV.children())), bq.scrollTop(h), bq.scrollLeft(g), bs && clearInterval(bs)
            }
            var aX, aV, aU, aT, aS, aR, aQ, aP, aO, aN, aM, bm, aL, bi, aW, aw, af, aa, bp, bj, a3, aC, ag, ac, br, bl, a9, aI, ah, ad, bs, bn, bg, aK, ai = this, ae = !0, c = !0, bo = !1, bh = !1, bq = aJ.clone(!1, !1).empty(), bk = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === aJ.css("box-sizing") ? (bn = 0, bg = 0) : (bn = aJ.css("paddingTop") + " " + aJ.css("paddingRight") + " " + aJ.css("paddingBottom") + " " + aJ.css("paddingLeft"), bg = (parseInt(aJ.css("paddingLeft"), 10) || 0) + (parseInt(aJ.css("paddingRight"), 10) || 0)), e.extend(ai, {reinitialise: function(g) {
                    g = e.extend({}, aX, g), aG(g)
                }, scrollToElement: function(h, g, i) {
                    aj(h, g, i)
                }, scrollTo: function(h, g, i) {
                    ak(h, i), al(g, i)
                }, scrollToX: function(h, g) {
                    ak(h, g)
                }, scrollToY: function(h, g) {
                    al(h, g)
                }, scrollToPercentX: function(h, g) {
                    ak(h * (aR - aU), g)
                }, scrollToPercentY: function(h, g) {
                    al(h * (aQ - aT), g)
                }, scrollBy: function(h, g, i) {
                    ai.scrollByX(h, i), ai.scrollByY(g, i)
                }, scrollByX: function(h, g) {
                    var j = bf() + Math[0 > h ? "floor" : "ceil"](h), i = j / (aR - aU);
                    ap(i * aw, g)
                }, scrollByY: function(h, g) {
                    var j = be() + Math[0 > h ? "floor" : "ceil"](h), i = j / (aQ - aT);
                    ar(i * aL, g)
                }, positionDragX: function(h, g) {
                    ap(h, g)
                }, positionDragY: function(h, g) {
                    ar(h, g)
                }, animate: function(h, g, k, j) {
                    var i = {};
                    i[g] = k, h.animate(i, {duration: aX.animateDuration, easing: aX.animateEase, queue: !1, step: j})
                }, getContentPositionX: function() {
                    return bf()
                }, getContentPositionY: function() {
                    return be()
                }, getContentWidth: function() {
                    return aR
                }, getContentHeight: function() {
                    return aQ
                }, getPercentScrolledX: function() {
                    return bf() / (aR - aU)
                }, getPercentScrolledY: function() {
                    return be() / (aQ - aT)
                }, getIsScrollableH: function() {
                    return aM
                }, getIsScrollableV: function() {
                    return aN
                }, getContentPane: function() {
                    return aV
                }, scrollToBottom: function(g) {
                    ar(aL, g)
                }, hijackInternalLinks: e.noop, destroy: function() {
                    aY()
                }}), aG(aH)
        }
        return b = e.extend({}, e.fn.jScrollPane.defaults, b), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            b[this] = b[this] || b.speed
        }), this.each(function() {
            var g = e(this), h = g.data("jsp");
            h ? h.reinitialise(b) : (e("script", g).filter('[type="text/javascript"],:not([type])').remove(), h = new a(g, b), g.data("jsp", h))
        })
    }, e.fn.jScrollPane.defaults = {showArrows: !1, maintainPosition: !0, stickToBottom: !1, stickToRight: !1, clickOnTrack: !0, autoReinitialise: !1, autoReinitialiseDelay: 500, verticalDragMinHeight: 0, verticalDragMaxHeight: 99999, horizontalDragMinWidth: 0, horizontalDragMaxWidth: 99999, contentWidth: f, animateScroll: !1, animateDuration: 300, animateEase: "linear", hijackInternalLinks: !1, verticalGutter: 4, horizontalGutter: 4, mouseWheelSpeed: 3, arrowButtonSpeed: 0, arrowRepeatFreq: 50, arrowScrollOnHover: !1, trackClickSpeed: 0, trackClickRepeatFreq: 70, verticalArrowPositions: "split", horizontalArrowPositions: "split", enableKeyboardNavigation: !0, hideFocus: !1, keyboardSpeed: 0, initialDelay: 300, speed: 30, scrollPagePercent: 0.8}
}(jQuery, this);
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