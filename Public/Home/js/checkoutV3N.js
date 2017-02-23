/* SVN.committedRevision=1547413 */
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
}("6(3v.b&&!3v.b.3w){(7(b){9 j=7(s,H,m){5.1g=[];5.1D={};5.2J=u;5.1W={};5.1h={};5.m=b.1i({1X:1b,3x:1x,2K:1b,2L:1b,3y:1x,3z:1x},m);5.1E=(5.m.1E!==D)?(5.m.1E):(R.2g);5.13=(5.m.13!==D)?(5.m.13):(R.3A);5.2h=(5.m.2h!==D)?(5.m.2h):((5.m.1X)?(b.2M):(R.2M));6(s==u){c}5.3B(s,H);6(s){5.1F(5.1h['2i'],H,5.m)}5.1h=u};j.4j='0.8.3';j.J=1b;j.3C=4k;j.1y=0;j.z.3B=7(s,H){9 2N=/\\{#1c *(\\w+) *(.*?) *\\}/g,2j,1G,U,1H=u,2O=[],i;2P((2j=2N.4l(s))!==u){1H=2N.1H;1G=2j[1];U=s.1Y('{#/1c '+1G+'}',1H);6(U===-1){E p V('14: j \"'+1G+'\" 2Q 2k 4m.');}5.1h[1G]=s.1Z(1H,U);2O[1G]=R.2R(2j[2])}6(1H===u){5.1h['2i']=s;c}K(i 2l 5.1h){6(i!=='2i'){5.1W[i]=p j()}}K(i 2l 5.1h){6(i!=='2i'){5.1W[i].1F(5.1h[i],b.1i({},H||{},5.1W||{}),b.1i({},5.m,2O[i]));5.1h[i]=u}}};j.z.1F=7(s,H,m){6(s==D){5.1g.x(p 1p('',1,5));c}s=s.15(/[\\n\\r]/g,'');s=s.15(/\\{\\*.*?\\*\\}/g,'');5.2J=b.1i({},5.1W||{},H||{});5.m=p 2m(m);9 A=5.1g,20=s.1j(/\\{#.*?\\}/g),1d=0,U=0,e,1q=0,i,l;K(i=0,l=(20)?(20.X):(0);i<l;++i){9 Z=20[i];6(1q){U=s.1Y('{#/1I}');6(U===-1){E p V(\"14: 4n 21 3D 1I.\");}6(U>1d){A.x(p 1p(s.1Z(1d,U),1,5))}1d=U+11;1q=0;i=b.4o('{#/1I}',20);22}U=s.1Y(Z,1d);6(U>1d){A.x(p 1p(s.1Z(1d,U),1q,5))}Z.1j(/\\{#([\\w\\/]+).*?\\}/);9 2n=L.$1;2S(2n){B'4p':A.2T(Z);F;B'6':e=p 1z(A,5);e.2T(Z);A.x(e);A=e;F;B'W':A.2U();F;B'/6':B'/K':B'/2V':A=A.2W();F;B'2V':e=p 1A(Z,A,5);A.x(e);A=e;F;B'K':e=3E(Z,A,5);A.x(e);A=e;F;B'22':B'F':A.x(p 16(2n));F;B'2X':A.x(p 2Y(Z,5.2J,5));F;B'h':A.x(p 2Z(Z,5));F;B'9':A.x(p 30(Z,5));F;B'31':A.x(p 32(Z));F;B'4q':A.x(p 1p('{',1,5));F;B'4r':A.x(p 1p('}',1,5));F;B'1I':1q=1;F;B'/1I':6(j.J){E p V(\"14: 4s 33 3D 1I.\");}F;3F:6(j.J){E p V('14: 4t 4u: '+2n+'.');}}1d=U+Z.X}6(s.X>1d){A.x(p 1p(s.3G(1d),1q,5))}};j.z.M=7(d,h,q,I){++I;6(I==1&&q!=D){b.34(q,\"2o\")}9 $T=d,$P,17='';6(5.m.3y){$T=5.1E(d,{2p:(5.m.3x&&I==1),23:5.m.1X},5.13)}6(!5.m.3z){$P=b.1i({},5.1D,h)}W{$P=b.1i({},5.1E(5.1D,{2p:(5.m.2K),23:1b},5.13),5.1E(h,{2p:(5.m.2K&&I==1),23:1b},5.13))}K(9 i=0,l=5.1g.X;i<l;++i){17+=5.1g[i].M($T,$P,q,I)}5.2q=u;--I;c 17};j.z.10=7(){6(5.2q==u){5.2q=p 2r(5)}c 5.2q};j.z.35=7(24,1B){5.1D[24]=1B};R=7(){};R.3A=7(3H){c 3H.15(/&/g,'&4v;').15(/>/g,'&3I;').15(/</g,'&3J;').15(/\"/g,'&4w;').15(/'/g,'&#39;')};R.2g=7(d,1J,13){6(d==u){c d}2S(d.36){B 2m:9 o={};K(9 i 2l d){o[i]=R.2g(d[i],1J,13)}6(!1J.23){6(d.4x(\"37\")){o.37=d.37}}c o;B 4y:9 a=[];K(9 i=0,l=d.X;i<l;++i){a[i]=R.2g(d[i],1J,13)}c a;B 38:c(1J.2p)?(13(d)):(d);B 3K:6(1J.23){6(j.J){E p V(\"14: 4z 4A 2k 4B.\");}W{c D}}}c d};R.2R=7(2s){6(2s===u||2s===D){c{}}9 o=2s.4C(/[= ]/);6(o[0]===''){o.4D()}9 25={};K(9 i=0,l=o.X;i<l;i+=2){25[o[i]]=o[i+1]}c 25};R.2M=7(G){6(1K G!==\"4E\"||!G){c u}1k{c(p 3K(\"c \"+b.3L(G)))()}1l(e){6(j.J){E p V(\"14: 4F 4G\");}c{}}};R.3M=7(26,1y,3a){2P(26!=u){9 d=b.G(26,'2o');6(d!=D&&d.1y==1y&&d.d[3a]!=D){c d.d[3a]}26=26.4H}c u};9 1p=7(3b,1q,1c){5.27=3b;5.3N=1q;5.O=1c};1p.z.M=7(d,h,q,I){6(5.3N){c 5.27}9 s=5.27;9 18=\"\";9 i=-1;9 28=0;9 29=-1;9 1L=0;2P(1x){9 1M=s.1Y(\"{\",i+1);9 1N=s.1Y(\"}\",i+1);6(1M<0&&1N<0){F}6((1M!=-1&&1M<1N)||(1N==-1)){i=1M;6(++28==1){29=1M;18+=s.1Z(1L,i);1L=-1}}W{i=1N;6(--28===0){6(29>=0){18+=5.O.10().3O(d,h,q,s.1Z(29,1N+1));29=-1;1L=i+1}}W 6(28<0){28=0}}}6(1L>-1){18+=s.3G(1L)}c 18};2r=7(t){5.3c=t};2r.z.3O=7($T,$P,$Q,2t){1k{9 18=3d(2t);6(b.4I(18)){6(5.3c.m.1X||!5.3c.m.2L){c''}18=18($T,$P,$Q)}c(18===D)?(\"\"):(38(18))}1l(e){6(j.J){6(e 1C 16){e.1m=\"4J\"}E e;}c\"\"}};2r.z.19=7($T,$P,$Q,2t){c 3d(2t)};9 1z=7(1O,1r){5.2u=1O;5.1P=1r;5.2a=[];5.1g=[];5.1Q=u};1z.z.x=7(e){5.1Q.x(e)};1z.z.2W=7(){c 5.2u};1z.z.2T=7(N){N.1j(/\\{#(?:W)*6 (.*?)\\}/);5.2a.x(L.$1);5.1Q=[];5.1g.x(5.1Q)};1z.z.2U=7(){5.2a.x(1x);5.1Q=[];5.1g.x(5.1Q)};1z.z.M=7(d,h,q,I){9 17='';1k{K(9 2b=0,3P=5.2a.X;2b<3P;++2b){6(5.1P.10().19(d,h,q,5.2a[2b])){9 t=5.1g[2b];K(9 i=0,l=t.X;i<l;++i){17+=t[i].M(d,h,q,I)}c 17}}}1l(e){6(j.J||(e 1C 16)){E e;}}c 17};3E=7(N,1O,1c){6(N.1j(/\\{#K (\\w+?) *= *(\\S+?) +4K +(\\S+?) *(?:1a=(\\S+?))*\\}/)){9 f=p 1A(u,1O,1c);f.C=L.$1;f.Y={'33':(L.$2||0),'21':(L.$3||-1),'1a':(L.$4||1),'y':'$T'};f.3e=(7(i){c i});c f}W{E p V('14: 4L 4M \"3Q\": '+N);}};9 1A=7(N,1O,1c){5.2u=1O;5.O=1c;6(N!=u){N.1j(/\\{#2V +(.+?) +3R +(\\w+?)( .+)*\\}/);5.3S=L.$1;5.C=L.$2;5.Y=L.$3||u;5.Y=R.2R(5.Y)}5.2v=[];5.2w=[];5.3f=5.2v};1A.z.x=7(e){5.3f.x(e)};1A.z.2W=7(){c 5.2u};1A.z.2U=7(){5.3f=5.2w};1A.z.M=7(d,h,q,I){1k{9 1s=(5.3e===D)?(5.O.10().19(d,h,q,5.3S)):(5.3e);6(1s===$){E p V(\"2c: 4N '$' 4O 4P 4Q 3R 3T-7\");}9 2d=[];9 1R=1K 1s;6(1R=='3U'){9 3g=[];b.1t(1s,7(k,v){2d.x(k);3g.x(v)});1s=3g}9 y=(5.Y.y!==D)?(5.O.10().19(d,h,q,5.Y.y)):((d!=u)?(d):({}));6(y==u){y={}}9 s=2e(5.O.10().19(d,h,q,5.Y.33)||0),e;9 1a=2e(5.O.10().19(d,h,q,5.Y.1a)||1);6(1R!='7'){e=1s.X}W{6(5.Y.21===D||5.Y.21===u){e=2e.4R}W{e=2e(5.O.10().19(d,h,q,5.Y.21))+((1a>0)?(1):(-1))}}9 17='';9 i,l;6(5.Y.2f){9 3h=s+2e(5.O.10().19(d,h,q,5.Y.2f));e=(3h>e)?(e):(3h)}6((e>s&&1a>0)||(e<s&&1a<0)){9 1S=0;9 3V=(1R!='7')?(4S.4T((e-s)/1a)):D;9 1u,1n;9 3i=0;K(;((1a>0)?(s<e):(s>e));s+=1a,++1S,++3i){6(j.J&&3i>j.3C){E p V(\"2c: 4U 3T 4V 4W 4X\");}1u=2d[s];6(1R!='7'){1n=1s[s]}W{1n=1s(s);6(1n===D||1n===u){F}}6((1K 1n=='7')&&(5.O.m.1X||!5.O.m.2L)){22}6((1R=='3U')&&(1u 2l 2m)&&(1n===2m[1u])){22}9 3W=y[5.C];y[5.C]=1n;y[5.C+'$3X']=s;y[5.C+'$1S']=1S;y[5.C+'$3Y']=(1S===0);y[5.C+'$3Z']=(s+1a>=e);y[5.C+'$40']=3V;y[5.C+'$2d']=(1u!==D&&1u.36==38)?(5.O.13(1u)):(1u);y[5.C+'$1K']=1K 1n;K(i=0,l=5.2v.X;i<l;++i){1k{17+=5.2v[i].M(y,h,q,I)}1l(1T){6(1T 1C 16){2S(1T.1m){B'22':i=l;F;B'F':i=l;s=e;F;3F:E 1T;}}W{E 1T;}}}1v y[5.C+'$3X'];1v y[5.C+'$1S'];1v y[5.C+'$3Y'];1v y[5.C+'$3Z'];1v y[5.C+'$40'];1v y[5.C+'$2d'];1v y[5.C+'$1K'];1v y[5.C];y[5.C]=3W}}W{K(i=0,l=5.2w.X;i<l;++i){17+=5.2w[i].M(d,h,q,I)}}c 17}1l(e){6(j.J||(e 1C 16)){E e;}c\"\"}};9 16=7(1m){5.1m=1m};16.z=V;16.z.M=7(d){E 5;};9 2Y=7(N,H,1r){N.1j(/\\{#2X (.*?)(?: 4Y=(.*?))?\\}/);5.O=H[L.$1];6(5.O==D){6(j.J){E p V('14: 4Z 3Q 2X: '+L.$1);}}5.41=L.$2;5.42=1r};2Y.z.M=7(d,h,q,I){1k{c 5.O.M(5.42.10().19(d,h,q,5.41),h,q,I)}1l(e){6(j.J||(e 1C 16)){E e;}}c''};9 2Z=7(N,1r){N.1j(/\\{#h 24=(\\w*?) 1B=(.*?)\\}/);5.C=L.$1;5.27=L.$2;5.1P=1r};2Z.z.M=7(d,h,q,I){1k{h[5.C]=5.1P.10().19(d,h,q,5.27)}1l(e){6(j.J||(e 1C 16)){E e;}h[5.C]=D}c''};9 30=7(N,1r){N.1j(/\\{#9 (.*?)\\}/);5.43=L.$1;5.1P=1r};30.z.M=7(d,h,q,I){1k{6(q==D){c\"\"}9 25=5.1P.10().19(d,h,q,5.43);9 1U=b.G(q,\"2o\");6(1U==D){1U={1y:(++j.1y),d:[]}}9 i=1U.d.x(25);b.G(q,\"2o\",1U);c\"(R.3M(5,\"+1U.1y+\",\"+(i-1)+\"))\"}1l(e){6(j.J||(e 1C 16)){E e;}c''}};9 32=7(N){N.1j(/\\{#31 50=(.*?)\\}/);5.3j=3d(L.$1);5.3k=5.3j.X;6(5.3k<=0){E p V('14: 51 52 K 31');}5.3l=0;5.3m=-1};32.z.M=7(d,h,q,I){9 3n=b.G(q,'2x');6(3n!=5.3m){5.3m=3n;5.3l=0}9 i=5.3l++%5.3k;c 5.3j[i]};b.1e.1F=7(s,H,m){c b(5).1t(7(){9 t=(s&&s.36==j)?s:p j(s,H,m);b.G(5,'2c',t);b.G(5,'2x',0)})};b.1e.53=7(1V,H,m){9 s=b.2y({1w:1V,2z:'2A',2B:1b,1m:'44'}).45;c b(5).1F(s,H,m)};b.1e.54=7(3o,H,m){9 s=b('#'+3o).3b();6(s==u){s=b('#'+3o).46();s=s.15(/&3J;/g,\"<\").15(/&3I;/g,\">\")}s=b.3L(s);s=s.15(/^<\\!\\[55\\[([\\s\\S]*)\\]\\]>$/47,'$1');s=s.15(/^<\\!--([\\s\\S]*)-->$/47,'$1');c b(5).1F(s,H,m)};b.1e.56=7(){9 2f=0;b(5).1t(7(){6(b.2C(5)){++2f}});c 2f};b.1e.57=7(){b(5).48();c b(5).1t(7(){b.34(5,'2c')})};b.1e.35=7(24,1B){c b(5).1t(7(){9 t=b.2C(5);6(t!=u){t.35(24,1B)}W 6(j.J){E p V('14: j 2Q 2k 49.');}})};b.1e.3p=7(d,h,1o){c b(5).1t(7(){9 t=b.2C(5);6(t!=u){6(1o!=D&&1o.3q){d=t.2h(d)}b.G(5,'2x',b.G(5,'2x')+1);b(5).46(t.M(d,h,5,0))}W 6(j.J){E p V('14: j 2Q 2k 49.');}})};b.1e.58=7(1V,h,1o){9 12=5;9 o=b.1i({2D:1b},b.59);o=b.1i(o,1o);b.2y({1w:1V,1m:o.1m,G:o.G,4a:o.4a,2B:o.2B,2D:o.2D,4b:o.4b,2z:'2A',4c:7(d){9 r=b(12).3p(d,h,{3q:1x});6(o.2E){o.2E(r)}},5a:o.5b,5c:o.5d});c 5};9 3r=7(1w,h,2F,2G,1f,1o){5.4d=1w;5.1D=h;5.4e=2F;5.4f=2G;5.1f=1f;5.4g=u;5.3s=1o||{};9 12=5;b(1f).1t(7(){b.G(5,'3t',12)});5.3u()};3r.z.3u=7(){5.1f=b.4h(5.1f,7(2H){c(b.5e(5f.5g,2H.5h?2H[0]:2H))});6(5.1f.X===0){c}9 12=5;b.2y({1w:5.4d,2z:'2A',G:5.4f,2D:1b,4c:7(d){1k{9 r=b(12.1f).3p(d,12.1D,{3q:1x});6(12.3s.2E){12.3s.2E(r)}}1l(1T){}}});5.4g=5i(7(){12.3u()},5.4e)};b.1e.5j=7(1w,h,2F,2G,1o){c p 3r(1w,h,2F,2G,5,1o)};b.1e.48=7(){c b(5).1t(7(){9 2I=b.G(5,'3t');6(2I==u){c}9 12=5;2I.1f=b.4h(2I.1f,7(o){c o!=12});b.34(5,'3t')})};b.1i({3w:7(s,H,m){c p j(s,H,m)},5k:7(1V,H,m){9 s=b.2y({1w:1V,2z:'2A',2B:1b,1m:'44'}).45;c p j(s,H,m)},2C:7(q){c b.G(q,'2c')},5l:7(1c,G,4i){c 1c.M(G,4i,D,0)},5m:7(1B){j.J=1B}})})(b)};", 62, 333, "|||||this|if|function||var||jQuery|return|||||param||Template|||settings|||new|element||||null|||push|extData|prototype|node|case|_name|undefined|throw|break|data|includes|deep|DEBUG_MODE|for|RegExp|get|oper|_template|||TemplateUtils|||se|Error|else|length|_option|this_op|getBin||that|f_escapeString|jTemplates|replace|JTException|ret|result|evaluate|step|false|template|ss|fn|objs|_tree|_templates_code|extend|match|try|catch|type|cval|options|TextNode|literalMode|templ|fcount|each|ckey|delete|url|true|guid|opIF|opFOREACH|value|instanceof|_param|f_cloneData|setTemplate|tname|lastIndex|literal|filter|typeof|sExpr|lm|rm|par|_templ|_curr|mode|iteration|ex|refobj|url_|_templates|disallow_functions|indexOf|substring|op|end|continue|noFunc|name|obj|el|_value|nested|sText|_cond|ci|jTemplate|key|Number|count|cloneData|f_parseJSON|MAIN|iter|not|in|Object|op_|jTemplatesRef|escapeData|EvalObj|EvalClass|optionText|__value|_parent|_onTrue|_onFalse|jTemplateSID|ajax|dataType|text|async|getTemplate|cache|on_success|interval|args|elem|updater|_includes|filter_params|runnable_functions|parseJSON|reg|_template_settings|while|is|optionToObject|switch|addCond|switchToElse|foreach|getParent|include|Include|UserParam|UserVariable|cycle|Cycle|begin|removeData|setParam|constructor|toString|String||id|val|__templ|eval|_runFunc|_currentState|arr|tmp|loopCounter|_values|_length|_index|_lastSessionID|sid|elementName|processTemplate|StrToJSON|Updater|_options|jTemplateUpdater|run|window|createTemplate|filter_data|clone_data|clone_params|escapeHTML|splitTemplates|FOREACH_LOOP_LIMIT|of|opFORFactory|default|substr|txt|gt|lt|Function|trim|ReturnRefValue|_literalMode|evaluateContent|cl|find|as|_arg|loop|object|_total|prevValue|index|first|last|total|_root|_mainTempl|_id|GET|responseText|html|im|processTemplateStop|defined|dataFilter|timeout|success|_url|_interval|_args|timer|grep|parameter|version|10000|exec|closed|No|inArray|elseif|ldelim|rdelim|Missing|unknown|tag|amp|quot|hasOwnProperty|Array|Functions|are|allowed|split|shift|string|Invalid|JSON|parentNode|isFunction|subtemplate|to|Operator|failed|Variable|cannot|be|used|MAX_VALUE|Math|ceil|Foreach|limit|was|exceed|root|Cannot|values|no|elements|setTemplateURL|setTemplateElement|CDATA|hasTemplate|removeTemplate|processTemplateURL|ajaxSettings|error|on_error|complete|on_complete|contains|document|body|jquery|setTimeout|processTemplateStart|createTemplateURL|processTemplateToText|jTemplatesDebugMode".split("|"), 0, {}));/*
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
}(jQuery, this);/* Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function(c) {
    var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], k = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice, j, b;
    if (c.event.fixHooks) {
        for (var e = d.length; e; ) {
            c.event.fixHooks[d[--e]] = c.event.mouseHooks
        }
    }
    var f = c.event.special.mousewheel = {version: "3.1.9", setup: function() {
            if (this.addEventListener) {
                for (var m = k.length; m; ) {
                    this.addEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = l
            }
            c.data(this, "mousewheel-line-height", f.getLineHeight(this));
            c.data(this, "mousewheel-page-height", f.getPageHeight(this))
        }, teardown: function() {
            if (this.removeEventListener) {
                for (var m = k.length;
                        m; ) {
                    this.removeEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = null
            }
        }, getLineHeight: function(i) {
            return parseInt(c(i)["offsetParent" in c.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        }, getPageHeight: function(i) {
            return c(i).height()
        }, settings: {adjustOldDeltas: true}};
    c.fn.extend({mousewheel: function(i) {
            return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
        }, unmousewheel: function(i) {
            return this.unbind("mousewheel", i)
        }});
    function l(i) {
        var n = i || window.event, r = h.call(arguments, 1), t = 0, p = 0, o = 0, q = 0;
        i = c.event.fix(n);
        i.type = "mousewheel";
        if ("detail" in n) {
            o = n.detail * -1
        }
        if ("wheelDelta" in n) {
            o = n.wheelDelta
        }
        if ("wheelDeltaY" in n) {
            o = n.wheelDeltaY
        }
        if ("wheelDeltaX" in n) {
            p = n.wheelDeltaX * -1
        }
        if ("axis" in n && n.axis === n.HORIZONTAL_AXIS) {
            p = o * -1;
            o = 0
        }
        t = o === 0 ? p : o;
        if ("deltaY" in n) {
            o = n.deltaY * -1;
            t = o
        }
        if ("deltaX" in n) {
            p = n.deltaX;
            if (o === 0) {
                t = p * -1
            }
        }
        if (o === 0 && p === 0) {
            return
        }
        if (n.deltaMode === 1) {
            var s = c.data(this, "mousewheel-line-height");
            t *= s;
            o *= s;
            p *= s
        } else {
            if (n.deltaMode === 2) {
                var m = c.data(this, "mousewheel-page-height");
                t *= m;
                o *= m;
                p *= m
            }
        }
        q = Math.max(Math.abs(o), Math.abs(p));
        if (!b || q < b) {
            b = q;
            if (a(n, q)) {
                b /= 40
            }
        }
        if (a(n, q)) {
            t /= 40;
            p /= 40;
            o /= 40
        }
        t = Math[t >= 1 ? "floor" : "ceil"](t / b);
        p = Math[p >= 1 ? "floor" : "ceil"](p / b);
        o = Math[o >= 1 ? "floor" : "ceil"](o / b);
        i.deltaX = p;
        i.deltaY = o;
        i.deltaFactor = b;
        i.deltaMode = 0;
        r.unshift(i, t, p, o);
        if (j) {
            clearTimeout(j)
        }
        j = setTimeout(g, 200);
        return(c.event.dispatch || c.event.handle).apply(this, r)
    }
    function g() {
        b = null
    }
    function a(m, i) {
        return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
    }}
)(jQuery);
var isDetailaddressModify = false;
var YHDPlaceSelector = {init: function() {
        var b = '<select id="province" name="province" onclick="gotracker(\'2\',\'province\', null);"><option value="0">请选择省</option></select>';
        b += '<select id="city"  name="city" onclick="gotracker(\'2\',\'city\', null);"><option value="0">请选择市/区</option></select>';
        b += '<select id="county" name="county" onclick="gotracker(\'2\',\'county\', null);"><option value="0">请选择区/县</option></select>';
        jQuery("#placeSelector").html(b);
        jQuery("#city,#county").hide();
        jQuery("#province").change(function() {
            var f = jQuery(this);
            var e = f.val();
            jQuery(".addressBt>.PromptInfo").css("display", "none");
            if (e != 0) {
                var a = {paraProvinceID: e, paraChgProName: "", paraOperFlag: "provinceChange"};
                checkPopChgProvince(a)
            }
            jQuery("#county,#cityTip,#countyTip").empty().hide();
            jQuery("#postCode").val("");
            if (e == 0) {
                jQuery("#provinceTip,#city").empty().hide()
            } else {
                YHDPlaceSelector.refresh("#city", 2, e);
                jQuery("#provinceTip").html(f.find(":selected").text() + "&nbsp;&nbsp;").show()
            }
            setColorForPlaceSelectEach("province")
        });
        jQuery("#city").change(function() {
            var a = jQuery(this);
            var d = a.val();
            jQuery("#countyTip").empty().hide();
            jQuery("#postCode").val("");
            if (d == 0) {
                jQuery("#cityTip,#county").empty().hide()
            } else {
                YHDPlaceSelector.refresh("#county", 3, d);
                jQuery("#cityTip").html(a.find(":selected").text() + "&nbsp;&nbsp;").show()
            }
            setColorForPlaceSelectEach("city")
        });
        jQuery("#county").change(function() {
            setColorForPlaceSelectEach("county")
        })
    }, refresh: function(g, k, h, j) {
        if ((j == 0) && k == 4) {
            jQuery(g).empty().hide();
            return
        } else {
            var l = "/checkoutV3/address/ajaxGetPlaceList.do";
            var i = {id: h, type: k};
            jQuery.post(l, i, function(a) {
                if (a.message == "success" && a.data != null && a.data.length > 0) {
                    YHDPlaceSelector.showUI(g, k, h, j, a.data);
                    if (k == 2 && a.data != null && a.data.length == 1) {
                        jQuery(g).get(0).selectedIndex = 1;
                        jQuery("#city").trigger("change")
                    }
                }
            }, "json")
        }
    }, showUI: function(o, m, p, l, k) {
        var j = "请选择";
        if (m == 1) {
            j = "请选择省"
        } else {
            if (m == 2) {
                j = "请选择市/区"
            } else {
                if (m == 3) {
                    j = "请选择区/县"
                } else {
                    if (m == 4) {
                        j = "请选择四级区域"
                    }
                }
            }
        }
        if ((l == 0) && m == 4 && map_load != 2) {
            jQuery(o).empty().hide();
            jQuery(o + "Tip").hide();
            return
        } else {
            if (k != null && k.length > 0) {
                jQuery(o).empty();
                var n = '<option value="0">' + j + "</option>";
                var i = 0;
                jQuery(k).each(function(a) {
                    if (a == 0) {
                        i = this.id
                    }
                    if (p == this.id && m == 4) {
                    } else {
                        if (this.id == l) {
                            n += '<option style ="color:#333333;" value="' + this.id + '" postcode="' + this.postcode + '" selected>' + this.name + "</option>"
                        } else {
                            if (m == 4 && k.length == 1 && jQuery("#county").find(":selected").text() == this.name) {
                                n = '<option style ="color:#333333;" value="' + this.id + '" postcode="' + this.postcode + '" selected>' + this.name + "</option>"
                            } else {
                                n += '<option style ="color:#333333;" value="' + this.id + '" postcode="' + this.postcode + '">' + this.name + "</option>"
                            }
                        }
                    }
                });
                jQuery(o).html(n);
                if (l != null) {
                    if ((p == l) && m == 4) {
                    } else {
                        jQuery(o).attr("value", l)
                    }
                    if (l != 0) {
                        if ((p == l) && m == 4) {
                            jQuery(o + "Tip").hide()
                        } else {
                            jQuery(o + "Tip").html(jQuery(o).find(":selected").text() + "&nbsp;&nbsp;").show()
                        }
                    }
                }
                if (p == i && k.length == 1 && m == 4) {
                    jQuery(o).empty().hide();
                    jQuery(o + "Tip").hide()
                } else {
                    if (k.length == 1 && m == 4 && jQuery("#county").find(":selected").text() == k[0].name) {
                        jQuery(o).hide()
                    } else {
                        jQuery(o).show()
                    }
                }
            } else {
                jQuery(o).empty().hide()
            }
        }
        setColorForPlaceSelect()
    }, updateDefaultCheckedStatus: function(j, i, h, k) {
        var g = "/checkoutV3/address/ajaxGetFourPlaceLists.do";
        var l = {provinceId: j, cityId: i, countyId: h};
        jQuery.post(g, l, function(e) {
            if (e && e.message == "success") {
                var c = e.data.provinceList;
                var b = e.data.cityList;
                var a = e.data.countyList;
                var d = e.data.areaList;
                if (j != null && j != 0) {
                    YHDPlaceSelector.showUI("#province", 1, 1, j, c);
                    YHDPlaceSelector.showUI("#city", 2, j, i, b);
                    YHDPlaceSelector.showUI("#county", 3, i, h, a)
                } else {
                    YHDPlaceSelector.showUI("#province", 1, 1, 0, c)
                }
            } else {
                alert("网络出现异常,请稍后重试!")
            }
        }, "json")
    }, initDefaultCheckedStatus: function() {
        YHDPlaceSelector.init();
        var h = jQuery("#placeSelector").attr("provinceId");
        var g = jQuery("#placeSelector").attr("cityId");
        var f = jQuery("#placeSelector").attr("countyId");
        var e = jQuery("#placeSelector").attr("areaId");
        YHDPlaceSelector.updateDefaultCheckedStatus(h, g, f, e);
        setTimeout(function() {
            if (jQuery("#city").size() > 0 && jQuery("#city option").size() == 2 && f < 1) {
                jQuery("#city").get(0).selectedIndex = 1;
                jQuery("#city").trigger("change")
            }
        }, 180)
    }, clearDefaultCheckedStatus: function() {
        jQuery("#province").attr("value", 0);
        jQuery("#city,#county").empty().hide();
        jQuery("#provinceTip,#cityTip,#countyTip").empty().hide()
    }};
var manyFourPlace = 0;
var countyChange = 0;
function isBigCity() {
    var b = jQuery("#province").val();
    if (b == 1 || b == 2) {
        return true
    } else {
        return false
    }
}
function setColorForPlaceSelectEach(d) {
    var c = "#" + d;
    if (jQuery(c).val() == 0) {
        jQuery(c).css("color", "#999999");
        jQuery(c).find("option[value='0']").css("color", "#999999")
    } else {
        jQuery(c).css("color", "#333333");
        jQuery(c).find("option[value='0']").css("color", "#999999")
    }
}
function setColorForPlaceSelect() {
    setColorForPlaceSelectEach("province");
    setColorForPlaceSelectEach("city");
    setColorForPlaceSelectEach("county");
    setColorForPlaceSelectEach("area")
}
function toggleAddressModel() {
    $(".uPostCodeBt").remove();
    var f = jQuery("#province").val();
    var d = jQuery("#city").val();
    var e = jQuery("#county").val();
    jQuery("#placeSelector").attr("provinceId", f);
    jQuery("#placeSelector").attr("cityId", d);
    if (e == null || e == "") {
        jQuery("#placeSelector").attr("countyId", 0)
    } else {
        jQuery("#placeSelector").attr("countyId", e)
    }
    YHDPlaceSelector.initDefaultCheckedStatus()
}
function cancelWarn() {
    jQuery("#addrError2").removeClass().addClass("none")
}
function refreshPlace(f, h, j, i, g) {
    YHDPlaceSelector.updateDefaultCheckedStatus(f, h, j, i);
    jQuery("#postCode").val(formatToString(g))
}
function formatToString(b) {
    if (b != null && b != "null" && b != undefined && b != "" && b.length > 0) {
        return b
    } else {
        return""
    }
}
;
jQuery.yhdtool = yhdLib = {popwin: function(param) {
        var arg = param, tcBox = ".popGeneral", sFun = arg.fun ? arg.fun : [], cTxt = arg.popcontentstr ? arg.popcontentstr : "", popEvent = arg.popevent ? arg.popevent : "click", autoClose = arg.autoclosetime;
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
            var dwidth = $(window).width(), dheight = $(document).height();
            if ($.browser.msie && $.browser.version == 6) {
                $("select:visible", ".delivery").each(function(i) {
                    $(this).addClass("selectSjl").hide()
                })
            }
            if (arg.poptitle) {
                var popBOX = '<div class="popGeneral"><div class="top_tcgeneral"><h4>' + arg.poptitle + '</h4><span class="close_tcg">关闭</span></div></div>'
            } else {
                var popBOX = '<div class="popGeneral"></div>'
            }
            if (arg.mask || arg.mask == null) {
                $('<div class="mask_tcdiv"></div>').appendTo($("body")).css({position: "absolute", top: 0, right: 0, bottom: 0, left: 0, Zindex: 9998, width: dwidth + "px", height: dheight + "px", background: "#000", opacity: 0.4})
            }
            $(popBOX).appendTo($("body"));
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
            if ($.browser.msie && $.browser.version == 6) {
                $(window).scroll(function() {
                    $(tcBox).css({top: popwinTop + $(window).scrollTop() + "px", marginTop: 0})
                })
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
            if ($.browser.msie && $.browser.version == 6) {
                $("select.selectSjl").each(function() {
                    $(this).removeClass("selectSjl").show()
                })
            }
        }
        return false
    }, popclose: function() {
        if ($.browser.msie && $.browser.version == 6) {
            $("select.selectSjl").each(function() {
                $(this).removeClass("selectSjl").show()
            })
        }
        $(".popGeneral,.mask_tcdiv").remove()
    }, popwinreload: function() {
        if ($("body > .popGeneral").length) {
            $(window).trigger("resize")
        }
    }, ratebox: function(rateboxArgus) {
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
    }};
(function(a) {
})(jQuery);
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
String.prototype.mylength = function() {
    var c = this.match(/[\u00FF-\uFFFF]/gi);
    if (!c || c == null) {
        return this.length
    }
    var d = this.length + c.length;
    return d
};
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "")
};
function len(f) {
    var h = 0;
    var a = f.split("");
    for (var g = 0; g < a.length; g++) {
        if (a[g].charCodeAt(0) < 299) {
            h++
        } else {
            h += 2
        }
    }
    return h
}
Number.prototype.add = function(e) {
    var i, j, g;
    try {
        i = this.toString().split(".")[1].length
    } catch (h) {
        i = 0
    }
    try {
        j = e.toString().split(".")[1].length
    } catch (h) {
        j = 0
    }
    g = Math.pow(10, Math.max(i, j));
    return(Math.round(this * g + e * g)) / g
};
Number.prototype.sub = function(b) {
    return this.add(-b)
};
function getCookie(h) {
    var g = document.cookie.split("; ");
    for (var e = 0; e < g.length; e++) {
        var f = g[e].split("=");
        if (f[0] == h) {
            return unescape(f[1])
        }
    }
}
var gUseFed = {load: function(f) {
        var e = $(f.box), g, h;
        g = "loadingYhd";
        if ($("#loadFunBox").length == 0) {
            h = $('<div id="loadFunBox" class="loadFunBox"><iframe class="loadFunMarsk" width="2000" height="' + $(document).height() + '" border="0"></iframe><div id="loadIcoFun" class="loadIcoFun ' + g + '"></div></div>').appendTo("body").show();
            h.find("iframe").css("opacity", 0)
        }
        $("#loadFunBox").css({paddingBottom: $(document).height(), marginBottom: $(document).height()});
        $("#loadIcoFun").css({top: (e.offset().top + (e.outerHeight() / 2)) + "px"}).show();
        return
    }, removeLoad: function() {
        $("#loadFunBox").remove()
    }};
function loadAD() {
    jQuery("#receiverAD").setTemplateElement("adTemplate");
    jQuery("#deliveryAD").setTemplateElement("adTemplate");
    jQuery("#paymentAD").setTemplateElement("adTemplate");
    jQuery("#confirmAD").setTemplateElement("adTemplate");
    function c(d) {
        if (!d || d.status != 1 || d.value.messageType != 1 || !d.value.sourceList || d.value.sourceList.length < 1) {
            return
        }
        var f = d.value.sourceList[0];
        if (f.advertiseRegionalCode == "CHECKOUTV3_RECEIVER_BUFFER_YHD") {
            $("#receiverAD").processTemplate(e(f, 60));
            $("#receiverAD").show()
        }
        if (f.advertiseRegionalCode == "CHECKOUTV3_DELIVERY_BUFFER_YHD") {
            $("#deliveryAD").processTemplate(e(f, 38));
            $("#deliveryAD").show()
        }
        if (f.advertiseRegionalCode == "CHECKOUTV3_PAYMENT_BUFFER_YHD") {
            $("#paymentAD").processTemplate(e(f, 36));
            $("#paymentAD").show()
        }
        if (f.advertiseRegionalCode == "CHECKOUTV3_GOODS_BUFFER_YHD") {
            $("#confirmAD").processTemplate(e(f, 60));
            $("#confirmAD").show()
        }
        function e(g, h) {
            if (g.displayTitle > h) {
                g.displayTitle = g.displayTitle.substring(0, h)
            }
            return g
        }}
    var a = URLPrefix.shopping_gemini + "/external/normalAdServe?mcSiteId=1&provinceId=" + currProvinceId + "&type=0&level=4&isUserLike=0&code=";
    var b = "&callback=?";
    $.getJSON(a + "CHECKOUTV3_RECEIVER_BUFFER_YHD" + b, c);
    $.getJSON(a + "CHECKOUTV3_DELIVERY_BUFFER_YHD" + b, c);
    $.getJSON(a + "CHECKOUTV3_PAYMENT_BUFFER_YHD" + b, c);
    $.getJSON(a + "CHECKOUTV3_GOODS_BUFFER_YHD" + b, c)
}
;
var map_load = 0;
var google_timeout = false;
function checkoutInit() {
    
      $(".mask_tcdiv,.loadingA").hide();
                $(".mask_tcdiv,.loadingA").remove();
}
function loadCheckoutHead(a) {
    if (a.flashOutputVo != null) {
        flashOutputVo = a.flashOutputVo
    }
    if (flashOutputVo != null || isFastBuyFlag()) {
        var b = jQuery("#checkoutV3HeadDiv");
        b.setParam("getIsFlashFastBuy", getIsFlashFastBuy);
        b.setParam("getProductByPmId", getProductByPmId);
        b.processTemplate(flashOutputVo)
    }
}
function getIsFlashFastBuy() {
    if (flashOutputVo != null && flashOutputVo.pmId != null) {
        return true
    }
    return false
}
function commBackCart() {
    YHD.popwin(jQuery("#errorTemplate").text(), null, null, "200px", "400px");
    if (isFastBuyFlag()) {
        var b = jQuery("#linkRtnToCartBySessionInvalid");
        b.hide();
        var a = jQuery("#linkRtnToHomeBySessionInvalid");
        a.show()
    }
    jQuery(window).scroll(function() {
        jQuery("#yhd_pop_win").css({top: jQuery(document).scrollTop() + jQuery(window).height() - jQuery("#yhd_pop_win").height() - 500})
    })
}
var cart2 = undefined;
function isFastBuyFlag() {
    var a = 0;
    if (typeof (jQuery("#fastBuyFlag").val()) != "undefined") {
        a = jQuery("#fastBuyFlag").val()
    }
    if (a == 1) {
        return true
    }
    return false
}
function getOperateFlag() {
    var a = "0";
    if (typeof (jQuery("#operateFlag").val()) != "undefined") {
        a = jQuery("#operateFlag").val()
    }
    return a
}
function isNewContractPhone() {
    if (getOperateFlag() == "2") {
        return true
    }
    return false
}
function isOldContractPhone() {
    if (getOperateFlag() == "1") {
        return true
    }
    return false
}
function goAlipayHelp(b) {
    var a = !!b ? b : "http://cms.yhd.com/sale/173601";
    window.open(a, "_blank")
}
;
var products;
var globalOrder = {};
var confirmStatues = {isConfirmReceiver: false, isConfirmDelivery: false, isConfirmPayment: false, isConfirmInvoice: false};
var newUser = 0;
var hasClickOpen = false;
var isEditFlag = 0;
var deliveryErrorOrder;
var provinceIdCookie;
var cityIdCookie;
var countyIdCookie;
var flashOutputVo;
var contractInfoDisplayVo;
var globalSelfFetchReveiver;
jQuery(document).ready(function() {
    window.onerror = function(c, b, a) {
        gotracker("2", "checkout_page_error:{msg:" + c + ",url:" + b + ",line:" + a + "}", null)
    };
    $.ajaxSetup({timeout: 90000, error: function(c, b, a) {
            if (b && b == "timeout") {
                gotracker("2", "checkout_page_ajaxTimeout:{url:" + this.url + "}", null)
            }
        }});
    registerTemplate();
    yhdLib.popwin({mask: 1});
    $('<div class="loadingA"></div>').appendTo("body").siblings(".popGeneral").remove();
    sellCountFixBox();
    checkoutInit()
});
function globalRender(s) {
    newUser = 0;
    deliveryErrorOrder = "";
    if (s.productsMap != null) {
        products = s.productsMap
    }
    if (s.isContainPreSellProduct != null) {
        globalOrder.isContainPreSellProduct = s.isContainPreSellProduct
    }
    if (s.isContainCard != undefined && s.isContainCard != null) {
        globalOrder.isContainCard = s.isContainCard
    }
    if (s.selfPickUp != undefined && s.selfPickUp != null) {
        globalOrder.selfPickUp = s.selfPickUp
    }
    if (s.contain1mallProduct != undefined && s.contain1mallProduct != null) {
        globalOrder.contain1mallProduct = s.contain1mallProduct
    }
    if (s.containYhdProduct != undefined && s.containYhdProduct != null) {
        globalOrder.containYhdProduct = s.containYhdProduct
    }
    if (s.containYhdCommProduct != undefined && s.containYhdCommProduct != null) {
        globalOrder.containYhdCommProduct = s.containYhdCommProduct
    }
    if (s.isContainBookedPreSellProduct != undefined && s.isContainBookedPreSellProduct != null && s.isContainBookedPreSellProduct) {
        globalOrder.containBookedPreSellProduct = s.isContainBookedPreSellProduct;
        if (s.bookedPreSellVo != undefined && s.bookedPreSellVo != null) {
            globalOrder.bookedAmount = s.bookedPreSellVo.orderBookedAmount
        } else {
            globalOrder.bookedAmount = 0
        }
    }
    if (s.contains3gCard != undefined && s.contains3gCard != null) {
        globalOrder.contains3gCard = s.contains3gCard
    }
    if (isNewContractPhone() && s.contractInfoDisplayVo) {
        globalOrder.contractInfoDisplayVo = s.contractInfoDisplayVo
    }
    if (s.haigouFlag == 1) {
        if (s.merchantList) {
            var h = s.merchantList.merchants;
            var j = 0;
            for (var t = 0; t < h.length; t++) {
                j = j + h[t].totalPackages
            }
            if (j > 1) {
                jQuery("#haigouSplitMsg").processTemplate(j)
            }
        }
        globalOrder.haigouFlag = s.haigouFlag
    }
    if (s.ext && s.ext.authType && s.ext.authType != "NONE") {
        if (!globalOrder.ext) {
            globalOrder.ext = new Object()
        }
        globalOrder.ext.authType = s.ext.authType
    }
    if (s.ext && s.ext.totalPostTax && s.ext.totalPostTax > 0) {
        if (!globalOrder.ext) {
            globalOrder.ext = new Object()
        }
        globalOrder.ext.totalPostTax = s.ext.totalPostTax
    }
    if (s.ext && s.ext.authType && s.ext.authType == "SAMCARD") {
        globalOrder.samCardFlag = s.samCardFlag;
        if (!globalOrder.ext) {
            globalOrder.ext = new Object()
        }
        globalOrder.ext.authType = s.ext.authType;
        jQuery("#samCardUserInfo").show();
        $("#samCardDealHref").removeAttr("href");
        $.ajax({type: "POST", url: "/checkoutV3/other/getSamCardLinkUrl.do", dataType: "json", success: function(d) {
                if (!d) {
                    $("#samCardDealHref").removeAttr("href");
                    return
                }
                var i = d.code;
                var p = d.msg;
                var m = d.data;
                if (i == 0) {
                    if (m == null) {
                        $("#samCardDealHref").removeAttr("href");
                        return
                    } else {
                        $("#samCardDealHref").attr("href", m);
                        return
                    }
                }
            }})
    }
    c(s);
    if (isAppearError(s)) {
        return
    }
    if (s.splitTip && globalOrder.haigouFlag != 1) {
        if (typeof (s.ext) == "undefined" || s.ext.authType != "OVERSEAS") {
            jQuery("#splitMsg").processTemplate(s.splitTip)
        }
    }
    n(s);
    saveInforLoading("saveAll");
    if (isNewContractPhone()) {
        if (globalOrder.contractInfoDisplayVo) {
            contractInfoDisplayVo = globalOrder.contractInfoDisplayVo
        }
        jQuery("#contractPhoneDisplayDiv").processTemplate(contractInfoDisplayVo);
        jQuery("#contractPhoneDisplayUI").show();
        jQuery("#contractPhoneUserInfo").show();
        if (contractInfoDisplayVo.phoneNo) {
            $("#contractPhoneUserInfo #mobilePhoneNoShowDiv").show();
            $("#contractPhoneUserInfo #mobilePhoneNoShowDiv .info_idCard").html(contractInfoDisplayVo.phoneNo);
            $("#contractPhoneUserInfo #mobilePhoneNoDiv").hide();
            $("#contractPhoneUserInfo #verifyCodeDiv").hide()
        } else {
            $("#contractPhoneUserInfo #mobilePhoneNoShowDiv").hide();
            $("#contractPhoneUserInfo #mobilePhoneNoDiv").show();
            if (contractInfoDisplayVo.online) {
                $("#contractPhoneUserInfo #sendVerifyCode").show();
                $("#contractPhoneUserInfo #verifyCodeDiv").show();
                $("#contractPhoneUserInfo .redMsg").remove();
                $("#contractPhoneUserInfo #mobilePhoneNoDiv").after("<p class='redMsg'>所填号码即为办理套餐号码</p>")
            }
            if (contractInfoDisplayVo.mobileOperator == 2 && currProvinceId == 20) {
                $("#contractPhoneUserInfo #notice").show()
            }
            if (contractInfoDisplayVo.mobileOperator == 2 && currProvinceId == 1) {
                $("#contractPhoneUserInfo #shanghaiNotice").show()
            }
        }
        if (contractInfoDisplayVo.mobileNetwokDealName && contractInfoDisplayVo.mobileNetwokDealUrl) {
            $("#contractPhoneUserInfo #mobileNetwokDealDiv").show();
            $("#contractPhoneUserInfo #mobileNetwokDeal").next("a").attr("href", contractInfoDisplayVo.mobileNetwokDealUrl).text("《" + contractInfoDisplayVo.mobileNetwokDealName + "》")
        }
    } else {
        if (isOldContractPhone()) {
            jQuery("#iphoneDisplayUI").show();
            jQuery("#iphoneDisplayDiv").processTemplate(s.iPhoneDisplayVo)
        }
    }
    if (globalOrder.contains3gCard) {
        jQuery("#contractPhoneUserInfo").show()
    }
    var f;
    var e = s.merchantList;
    var w = e ? e.merchants.length : 0;
    var j = 0;
    for (var q = 0; e && q < e.merchants.length; q++) {
        var o = e.merchants[q];
        for (var u = 0; u < o.deliveryGroups.length; u++) {
            var b = o.deliveryGroups[u];
            j += b.packages.length;
            for (var k = 0; k < b.packages.length; k++) {
                var r = b.packages[k];
                var v = false;
                var g = "";
                for (var a = 0; a < r.supportedDeliverys.length; a++) {
                    var l = r.supportedDeliverys[a];
                    if (l.id == 20001) {
                        v = true
                    }
                    g = g + l.id + ",";
                    if (l.id == 30003 || l.id == 30004) {
                        f = true
                    }
                }
                if (v && r.supportedDeliverys.length > 1) {
                    recordTrackInfoWithType("1", "0.0.delivery." + g.substring(0, g.length - 1) + ".1", "cart.checkout.delivery", null, null)
                }
            }
        }
    }
    if (f) {
        globalOrder.contain1MallHaigou = true;
        if (w == 1 && j > 1) {
            jQuery("#1mallHaigouSplitMsg").processTemplate()
        }
    }
    if (s.ext && s.ext.authType && s.ext.authType != "NONE" && s.ext.authType != "SAMCARD") {
        if (s.ext.authType == "OVERSEAS" || s.ext.authType == "OVERSEASYHD") {
            simpleUserAuthFacade.init(s.ext.authType)
        } else {
            userAuthFacade.init(s.ext.authType)
        }
        if (!globalOrder.ext) {
            globalOrder.ext = new Object()
        }
        globalOrder.ext.authType = s.ext.authType
    }
    refeshstatistics();
    function c(d) {
        if (d.showDeliveryTip) {
            jQuery("#deliveryInfoTip").show()
        } else {
            jQuery("#deliveryInfoTip").hide()
        }
        if (d.showPaymentTip) {
            jQuery("#paymentInfoTip").show()
        } else {
            jQuery("#paymentInfoTip").hide()
        }
        if (d.receiverDTOList != null) {
            var i = d.receiverDTOList.receiverDTO;
            if (!i) {
                $("#invoiceModify").hide()
            }
            var m = d.receiverDTOList.receiverDTOs;
            if (i && i.selfPickUp > 0 && m.length == 0) {
                globalSelfFetchReveiver = i;
                m = globalOrder.receiverDTOList.receiverDTOs;
                if (m.length > 0 && m[0].selfPickUp > 0) {
                    m.shift()
                }
                if (globalSelfFetchReveiver) {
                    m.unshift(globalSelfFetchReveiver)
                }
                d.receiverDTOList.receiverDTOs = m
            }
            globalOrder.receiverDTOList = d.receiverDTOList;
            desplaySelectedReceiverNew(d);
            if (d.receiverDTOList.receiverDTO != null) {
                confirmStatues.isConfirmReceiver = true
            } else {
                confirmStatues.isConfirmReceiver = false
            }
            provinceIdCookie = d.receiverDTOList.provinceIdCookie;
            cityIdCookie = d.receiverDTOList.cityIdCookie;
            countyIdCookie = d.receiverDTOList.countyIdCookie
        }
        if (d.merchantList != null) {
            globalOrder.merchantList = d.merchantList;
            displayOrderDelivery(d.merchantList);
            refeshGoods();
            confirmStatues.isConfirmDelivery = true;
            jQuery("#deliveryUI>h2>span").removeClass("none")
        }
        if (d.paymentList != null && d.paymentList.selectedPayment != null && d.currentStep != "CONFIRMING_PAYMENT") {
            if (globalOrder.paymentList == null) {
                globalOrder.paymentList = {}
            }
            if (d.paymentList.paymentCoupon != null && globalOrder.haigouFlag != 1) {
                globalOrder.paymentList.paymentCoupon = d.paymentList.paymentCoupon;
                jQuery("#coupon_payment").processTemplate(d.paymentList.paymentCoupon)
            }
            if (d.v3UserActivityOnTimeCouponInfo) {
                globalOrder.v3UserActivityOnTimeCouponInfo = d.v3UserActivityOnTimeCouponInfo
            }
            if (globalOrder.v3UserActivityOnTimeCouponInfo && d.drawOnTimeCouponResult) {
                globalOrder.drawOnTimeCouponResult = d.drawOnTimeCouponResult;
                if (globalOrder.drawOnTimeCouponResult) {
                    globalOrder.paymentList = d.paymentList;
                    showPaymentEditLayout(globalOrder.paymentList);
                    v3UserAutoSelectOnTimeCoupon()
                }
            }
            if (d.paymentList.paymentAccount != null && globalOrder.haigouFlag != 1) {
                if (typeof (globalOrder.ext) != "undefined" && globalOrder.ext.authType == "OVERSEAS") {
                } else {
                    globalOrder.paymentList.paymentAccount = d.paymentList.paymentAccount;
                    jQuery("#account_payment").processTemplate(d.paymentList.paymentAccount)
                }
            }
            if (d.paymentList.payments && d.paymentList.payments.length > 0) {
                globalOrder.paymentList.payments = d.paymentList.payments
            }
            globalOrder.paymentList.selectedPayment = d.paymentList.selectedPayment;
            if (d.paymentList.selectedPayment && d.paymentList.selectedPayment.payment) {
                showPaymentEditLayout(globalOrder.paymentList);
                confirmStatues.isConfirmPayment = true
            }
            if (d.paymentList.paymentPrivilege && globalOrder.haigouFlag != 1) {
                globalOrder.paymentList.paymentPrivilege = d.paymentList.paymentPrivilege;
                if (d.paymentList.paymentPrivilege.userPrivilege) {
                    jQuery("#paymentPrivilegeDiv").setParam("privilegeMonth", getPrivilegeMonth(d.paymentList.paymentPrivilege.userPrivilege.createTime))
                }
                jQuery("#paymentPrivilegeDiv").processTemplate(d.paymentList.paymentPrivilege)
            } else {
                jQuery("#paymentPrivilegeDiv").html("")
            }
        }
        if (d.invoiceDTO != null && d.invoiceDTO.invoices != null && d.currentStep != "CONFIRMING_INVOICE") {
            globalOrder.invoiceDTO = d.invoiceDTO;
            showInvoiceDisplayLayout(globalOrder.invoiceDTO);
            if (d.invoiceDTO.orderRundomString) {
                globalOrder.orderRandomString = d.invoiceDTO.orderRundomString
            }
        }
    }
    function n(d) {
        if (d.currentStep != null) {
            globalOrder.currentStep = d.currentStep;
            if (d.currentStep == "CONFIRMING_RECEIVER") {
                if (d.receiverDTOList.receiverDTOs.length == 0) {
                    delNewUser()
                }
                jQuery("#deliveryUI>h2>span").addClass("none");
                jQuery("#paymentUI>h2>span").addClass("none");
                jQuery("#invoiceUI>h2>span").addClass("none");
                confirmStatues.isConfirmReceiver = false
            } else {
                if (d.currentStep == "CONFIRMING_DELIVERY") {
                    d.currentStep = "CONFIRMING_INVOICE";
                    n(d)
                } else {
                    if (d.currentStep == "CONFIRMING_PAYMENT") {
                        showPaymentNotEditableLayout();
                        if (d.paymentList.payments.length == 0 && globalOrder.paymentList.payments != null) {
                            d.paymentList.payments = globalOrder.paymentList.payments
                        }
                        globalOrder.paymentList = d.paymentList;
                        confirmStatues.isConfirmPayment = false;
                        refreshPayment();
                        jQuery("#paymentUI>h2>span").addClass("none")
                    } else {
                        if (d.currentStep == "CONFIRMING_INVOICE") {
                            globalOrder.invoiceDTO = d.invoiceDTO;
                            showInvoiceEditLayout(globalOrder.invoiceDTO);
                            confirmStatues.isConfirmInvoice = false
                        } else {
                            if (d.currentStep == "SUBBMITING_ORDER") {
                                refreshPayment()
                            }
                        }
                    }
                }
            }
        }
    }
    sellCountFixBox()
}
function saveInforLoading(b, a) {
    if (b == "save") {
        $(a).before('<span id="loadingSaveInfoMsg"><i></i>正在保存信息...</span>');
        $(a).hide()
    } else {
        if (b == "ok") {
            var c = $("#loadingSaveInfoMsg").parents(".checkInforBox").attr("id");
            $(a).show();
            $("#loadingSaveInfoMsg").remove();
            if (c != "paymentUI") {
                $("#SellCountFixBox").hide();
                setTimeout(function() {
                    $(window).trigger("scroll")
                }, 0)
            } else {
                location.hash = c;
                setTimeout(function() {
                    $("#SellCountFixBox").hide()
                }, 0)
            }
        } else {
            if (b == "check") {
                $("#loadingSaveInfoMsg").remove().siblings("button").show()
            } else {
                if (b == "saveAll") {
                    $(".noboxbd").removeClass("noboxbd");
                    $(".bt_yrt6").show();
                    $("#loadingSaveInfoMsg").remove()
                }
            }
        }
    }
    return false
}
function sellCountFixBox() {
    if ($.browser.msie && $.browser.version == 6) {
        $("#SellCountFixBox").hide()
    } else {
        scrollFuntion();
        $(window).unbind();
        $(window).scroll(scrollFuntion)
    }
}
function scrollFuntion() {
    if (d()) {
        var e = $(window).height(), a = $("#statisticsUI").offset().top;
        if (a < e - 80) {
            $("#SellCountFixBox").hide();
            return false
        }
        var b = e - $("#SellCountFixBox").height() - 180, c = a - e + 60;
        if ($(window).scrollTop() > c) {
            $("#SellCountFixBox").hide()
        } else {
            $("#SellCountFixBox").show()
        }
    } else {
        $("#SellCountFixBox").hide()
    }
    return false;
    function d() {
        var j = false;
        if (globalOrder.paymentList) {
            if (globalOrder.paymentList.selectedPayment.amountNeed2Pay == 0) {
                j = true
            } else {
                var i = globalOrder.paymentList.selectedPayment.payment;
                if (i) {
                    j = true
                } else {
                    j = false
                }
            }
        }
        if (j && f() && g() && h()) {
            return true
        } else {
            return false
        }
        function f() {
            if ($("form.editAddressForm").length > 0) {
                return false
            }
            if (globalOrder.receiverDTOList != null) {
                if (globalOrder.receiverDTOList.receiverDTO != null) {
                    return true
                }
            }
            return false
        }
        function g() {
            if (globalOrder.merchantList != null) {
                if (globalOrder.isContainCard && globalOrder.currentStep == "CONFIRMING_DELIVERY") {
                    return false
                }
                return true
            }
            return false
        }
        function h() {
            if (globalOrder.invoiceDTO != null) {
                if (globalOrder.invoiceDTO.invoices != null) {
                    return true
                }
            }
            return false
        }}
}
function registerTemplate() {
    jQuery("#checkoutV3HeadDiv").setTemplateElement("checkoutV3HeadTemplate");
    jQuery("#haigouSplitMsg").setTemplateElement("haigouSplitMsgTemplate", null, {filter_data: false});
    jQuery("#1mallHaigouSplitMsg").setTemplateElement("1mallHaigouSplitMsgTemplate", null, {filter_data: false});
    jQuery("#splitMsg").setTemplateElement("splitMsgTemplate", null, {filter_data: false});
    jQuery("#inputUI_payment").setTemplateElement("PaymentEditTemp");
    jQuery("#DeliveryDisplayDiv").setTemplateElement("DeliveryDisplayTemp", null, {filter_data: false});
    jQuery("#coupon_payment").setTemplateElement("CouponTemplate", null, {filter_data: false});
    jQuery("#account_payment").setTemplateElement("AccountEditTemplate");
    jQuery("#statisticsUI").setTemplateElement("statisticsTemplate");
    jQuery("#SellCountFixBox").setTemplateElement("SellCountFixBoxTemplate");
    jQuery("#InvoiceEditDiv").setTemplateElement("InvoiceEditTemplate");
    jQuery("#showNeedProductDetail").setTemplateElement("showNeedProductDetailTemplate");
    jQuery("#InvoiceDisplayDiv").setTemplateElement("InvoiceDisplayTemplate");
    jQuery("#iphoneDisplayDiv").setTemplateElement("iphoneDisplayDivTemplate");
    jQuery("#contractPhoneDisplayDiv").setTemplateElement("contractPhoneDisplayDivTemplate");
    jQuery("#paymentPrivilegeDiv").setTemplateElement("paymentPrivilegeTemplete")
}
function getProduct(a) {
    return products[a]
}
function getMulProdQuantity(c) {
    var b = products[c].id;
    var a = products[c].quantity;
    for (key in products) {
        if (products[key].id == b && key != c) {
            a += products[key].quantity
        }
    }
    return a
}
function getFirstProduct() {
    if (products != null) {
        return products[0]
    }
    return null
}
function getRtnToDetailUrl() {
    var b = getQueryString("returnUrl");
    if (b) {
        return b
    }
    var a = getFirstProduct();
    if (a != null) {
        b = URLPrefix.shoping_detail + "/item/" + a.pmId
    }
    return b
}
function getQueryString(a) {
    var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
    var c = window.location.search.substr(1).match(b);
    if (c != null) {
        return unescape(c[2])
    }
    return null
}
function initPageModeContent() {
    jQuery("#paymentUI>h2>span").addClass("none");
    jQuery("#invoiceUI>h2>span").addClass("none");
    confirmStatues.isConfirmDelivery = false;
    confirmStatues.isConfirmPayment = false;
    confirmStatues.isConfirmInvoice = false;
    jQuery("#deliveryUI").removeClass("beEdit");
    jQuery("#invoiceUI").removeClass("beEdit");
    jQuery("#DeliveryDisplayDiv").html('请先确认"收货信息"');
    jQuery("#InvoiceDisplayDiv").html('请先确认"配送信息"');
    showPaymentNotEditableLayout()
}
function getIsOrderContainPreSellProduct() {
    return globalOrder.isContainPreSellProduct
}
function getIsContainBookdPreSellProduct() {
    return globalOrder.containBookedPreSellProduct
}
function popLoginWin() {
    yhdPublicLogin.showLoginDiv("", false, "1")
}
function getContain1mallProduct() {
    if (globalOrder.contain1mallProduct) {
        return true
    }
    return false
}
function getContainYhdProduct() {
    if (globalOrder.containYhdProduct) {
        return true
    }
    return false
}
function getContainYhdCommProduct() {
    if (globalOrder.containYhdCommProduct) {
        return true
    }
    return false
}
function hasInvalidChars(b) {
    var a = /[`#^&]/im;
    return a.test(b)
}
function hasOnTimeCoupon(c) {
    var f = c.couponGroups;
    for (var d = 0; d < f.length; d++) {
        var e = f[d].mutexCouponList;
        for (var b = 0; b < e.length; b++) {
            var a = e[b].defineType;
            if (a == 8) {
                return true
            }
        }
    }
    return false
}
function hasOnTimeDelivery(b) {
    var l = new Object();
    for (var f = 0; f < b.merchants.length; f++) {
        var h = b.merchants[f].deliveryGroups;
        for (var c = 0; c < h.length; c++) {
            var g = h[c].packages;
            for (var e = 0; e < g.length; e++) {
                var d = $($(g[e].supportedDeliverys).filter(function() {
                    return this.id == 10005
                }).attr("deliveryPeriodGroup")).filter(function() {
                    return this.id != 0
                });
                if (d.length > 0) {
                    l.isSupportOnTimeDelivery = true;
                    var a = d[0].deliveryPeriods.length > 0 && d[0].deliveryPeriods[0].fee != 0;
                    if (a) {
                        l.isOnTimeDeliveryHasFee = true;
                        break
                    }
                }
            }
        }
    }
    return l
}
function showOnTimeFeeCouponNotice() {
    var b = $("#DeliveryDisplayDiv .freeTips .text span");
    if (!b.hasClass("onTimeFree")) {
        var a = hasOnTimeDelivery(globalOrder.merchantList);
        if (hasOnTimeCoupon(globalOrder.paymentList.paymentCoupon)) {
            $("#DeliveryDisplayDiv .freeTips").removeClass("freeTipsYellow");
            if (a.isSupportOnTimeDelivery) {
                b.text("你有可用的免准时达券");
                b.addClass("hasOnTimeCoupon");
                jQuery("#DeliveryDisplayDiv .freeTips .text a").remove();
                jQuery("#DeliveryDisplayDiv .freeTips").show();
                if (a.isOnTimeDeliveryHasFee) {
                    jQuery("#DeliveryDisplayDiv .freeTips .text").append("<a class='un' href='#zsd' onclick='hideDataPicker();event.stopPropagation();'>使用</a>")
                } else {
                    jQuery("#DeliveryDisplayDiv .freeTips .text").append("<a href='javascript:void(0);'>使用</a>")
                }
            }
        }
        if (a.isSupportOnTimeDelivery) {
            if (a.isOnTimeDeliveryHasFee) {
                if (globalOrder.v3UserActivityOnTimeCouponInfo) {
                    b.text("V3用户可免费使用一次准时达服务");
                    b.addClass("hasOnTimeCoupon");
                    jQuery("#DeliveryDisplayDiv .freeTips .text a").remove();
                    jQuery("#DeliveryDisplayDiv .freeTips").show()
                }
            }
        }
    }
    $.each($("#DeliveryDisplayDiv .freeTips"), function(c, d) {
        if (c != 0) {
            $(this).hide()
        }
    })
}
;
function addAlipayAddree(d, c, g, b, a, f, e) {
    jQuery("#receiverName").val(c);
    jQuery("#detailAddress").val(d);
    jQuery("#mobile").val(g);
    setTimeout(function() {
        $("option:contains('" + a.replace("省", "") + "')", "#province").attr("selected", "selected");
        $("#province").change();
        var h = setInterval(function() {
            var j = $("option:contains('" + f + "')", "#city");
            if (j.length || a == f.replace("市", "")) {
                clearInterval(h);
                j.attr("selected", "selected");
                $("#city").change()
            }
        }, 200);
        var i = setInterval(function() {
            var j = $("option:contains('" + e + "')", "#county");
            if (j.length || a == f.replace("市", "")) {
                clearInterval(i);
                j.attr("selected", "selected");
                $("#county").change()
            }
        }, 300)
    }, 1000);
    setTimeout(function() {
        settlementFed.emptyAddressInput()
    }, 200)
}
function showSendReference(a) {
    gotracker("2", "deliveryinfo", null);
    setTimeout(function() {
        var c = jQuery("#province").val() ? jQuery("#province").val() : 0;
        var d = jQuery("#city").val() ? jQuery("#city").val() : 0;
        var b = jQuery("#county").val() ? jQuery("#county").val() : 0;
        window.open("http://www.yhd.com/marketing/deliveryinfo/deliveryInfo.do?provinceId=" + c + "&cityId=" + d + "&countyId=" + b)
    }, 100)
}
function checkTextValid(c) {
    if (c == null || c.length == 0) {
        return false
    }
    var b = /[\"\'（）\\]/gi;
    var d = c.replace(b, "");
    d = d.replace(/\s/g, "");
    var a = /[\"\'<>\/&*^%$@!?\\]/;
    if (d == null || d.length == 0) {
        return false
    } else {
        if (a.exec(c)) {
            return false
        } else {
            return true
        }
    }
}
function returnToEdit() {
    var a = globalOrder.receiverDTOList.receiverDTO;
    if (a.selfPickUp > 0) {
        settlementFed.popSelfPickupForm()
    } else {
        $(".slt .editBt", "#addressList").trigger("click")
    }
}
function addMobileEvent() {
    $("#mobile").blur(function() {
        var a = $(this).val();
        if ((a == "" || a == $(this).attr("defaultvalue")) && !!$(this).attr("dfvValue")) {
            $(this).val($(this).attr("dfvValue"))
        }
    });
    $("#mobile").focus(function() {
        var a = $(this).val();
        if (!!!$(this).attr("dfvValue") && a.indexOf("*****") >= 0) {
            $(this).attr("dfvValue", a)
        }
        if (a == $(this).attr("dfvValue")) {
            $(this).val("")
        }
    })
}
var settlementFed = {idForSaveAddressBtnFlag: false, isDelAddressPop: 0, timeoutIdForSelectSave: "", oldLiBoxIndex: -1, isEditFlag: 0, initFourNewAddress: function() {
        YHDPlaceSelector.initDefaultCheckedStatus()
    }, callSaveMapNewaddress: function() {
        if (settlementFed.idForSaveAddressBtnFlag) {
            return
        }
        settlementFed.idForSaveAddressBtnFlag = true;
        var a = getReceiverParamStr(-1);
        saveInforLoading("save", ".saveEditAddress");
        jQuery.post("/checkoutV3/receiver/saveReceiver.do", a, afterSaveOrUpdateLocation)
    }, backSelectOldaddress: function() {
        $(".selectLoading", "#addressList").remove();
        $("li", "#addressList").removeClass();
        $("li:eq(" + settlementFed.oldLiBoxIndex + ")", "#addressList").addClass("slt")
    }, emptyAddressInput: function() {
        $("input:text", "form.editAddressForm").each(function() {
            var b = $(this).val(), a = $(this).attr("defaultvalue");
            if (b == "" || b == a) {
                $(this).css("color", "#ccc").val(a)
            } else {
                $(this).css("color", "#333")
            }
        })
    }, checkAddressBeforeSave: function() {
        if (receiverNameCheck() && fourAdressCheck() && detailAddressCheck(0) && mobilePhoneCheck()) {
            return true
        } else {
            return false
        }
    }, removeAddressForm: function() {
        if (newUser == 1) {
            $("#addressForm").remove()
        } else {
            $("#addressForm,#maskBoxPop").remove()
        }
    }, changeCityPopWhenSave: function(b) {
        gotracker("2", "changeCityPopSave", null);
        $("#chgTiptext").text("选择" + b.changeProName + "地址后，您购买的商品及价格会发生变化。");
        $(".configRechage").show();
        if (isFastBuyFlag()) {
            $("#linkRtnToCartByChangePvce").hide();
            $("#linkRtnToDetailByChangePvce").show();
            $(".chgEditeAddress", ".btChangeCity").unbind("click").bind("click", function() {
                gotracker("2", "goBackToDetailOnPop", null);
                setAddressCity(b.changeProId, getRtnToDetailUrl())
            })
        } else {
            $(".chgEditeAddress", ".btChangeCity").unbind("click").bind("click", function() {
                var c = getReceiverParamStr(-1);
                c = c + "&onlySave=1&onlySaveAndNeedReturnDTO=1";
                jQuery.post("/checkoutV3/receiver/saveReceiver.do", c, a)
            })
        }
        function a() {
            gotracker("2", "goBackToCartOnPop", null);
            window.location.href = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view&openProvincePage=0"
        }
        $(".cancelEditAddress", ".btChangeCity").unbind("click").bind("click", function() {
            $(".configRechage").hide()
        })
    }, changeCityPop: function(b) {
        gotracker("2", "changeCityPopSelect", null);
        if (isFastBuyFlag()) {
            yhdLib.popwin({poptitle: "温馨提示", popcontentstr: '<div id="changeAtCity" class="changeAtCity"><p class="cityPrompt"><s class="exclMarky"></s>您目前在<em>' + b.currentProName + "站</em>，选择<em>" + b.changeProName + '站</em>地址后，您购买的商品及价格会发生变化。</p><p class="cityPromptBt"><span class="Bt Bty">返回详情页<s></s></span><span class="Bt Btw">取消<s></s></span></p></div>'});
            $(".Bty", "#changeAtCity").unbind("click").bind("click", function() {
                gotracker("2", "goBackToDetailOnPop", null);
                yhdLib.popclose();
                setAddressCity(b.changeProId, getRtnToDetailUrl())
            })
        } else {
            yhdLib.popwin({poptitle: "温馨提示", popcontentstr: '<div id="changeAtCity" class="changeAtCity"><p class="cityPrompt"><s class="exclMarky"></s>您目前在<em>' + b.currentProName + "站</em>，选择<em>" + b.changeProName + '站</em>地址后，您购买的商品及价格会发生变化。</p><p class="cityPromptBt"><span class="Bt Bty">切换站点<s></s></span><span class="Bt Btw">取消<s></s></span></p></div>'});
            $(".Bty", "#changeAtCity").unbind("click").bind("click", function() {
                if (b.paraOperFlag == "saveNew") {
                    var d = getReceiverParamStr(-1);
                    d = d + "&onlySave=1";
                    jQuery.post("/checkoutV3/receiver/saveReceiver.do", d, c)
                } else {
                    var e = $("ul li.slt", "#addressList");
                    var h;
                    if (e) {
                        h = e.attr("addressid")
                    }
                    var g = false;
                    if (h) {
                        jQuery.ajax({type: "POST", async: false, url: "/checkoutV3/receiver/changeReceiver.do", data: {receiverId: h}, success: function(i) {
                                g = true;
                                var j = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view";
                                if ("warn" == i) {
                                    setAddressCity(b.changeProId, j)
                                } else {
                                    window.location.href = j;
                                    yhdLib.popclose()
                                }
                            }})
                    }
                    if (false == g) {
                        var f = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view&openProvincePage=0";
                        setAddressCity(b.changeProId, f)
                    }
                }
                function c() {
                    gotracker("2", "goBackToCartOnPop", null);
                    window.location.href = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view&openProvincePage=1";
                    yhdLib.popclose()
                }}
            )
        }
        $(".Btw", "#changeAtCity").unbind("click").bind("click", a);
        $(".close_tcg").unbind("click").bind("click", a);
        function a() {
            var c = $("li:eq(" + settlementFed.oldLiBoxIndex + ")", "#addressList");
            c.addClass("slt").siblings().removeClass();
            if (c.length < 1) {
                thisObj.removeClass();
                thisObj.siblings().removeClass()
            }
            $(".selectLoading", "#addressList").remove();
            $("#marskPageBox").css("display", "none");
            yhdLib.popclose()
        }}
    , addressPopFun: function(c) {
        settlementFed.isEditFlag = c;
        function b() {
            var f = $(".slt", "#addressList");
            var d = f.attr("addressid");
            var e = (d == 0 || d == "");
            if (($("#addressForm").hasClass("newAddressPop") || e) && $("li", "#addressList").length >= 20) {
                $("form.editAddressForm>.setDafAddr").hide();
                $(".addressBt > .PromptInfo").css("display", "inline-block").text("您的地址库中已保存了20条收货地址，无法保存新地址，但您本次可以使用新地址下单")
            } else {
                $("form.editAddressForm>.setDafAddr").show()
            }
        }
        function a(e) {
            var k = currProvinceId;
            var j = 0;
            var d = 0;
            if (e == 1) {
                var h = $("#addressForm").data("index");
                var g = $("#addressList").data("RecievAddrListHidden");
                var f = (g)[h];
                $("#receiverName").val(f.name);
                $("#detailAddress").val(f.address);
                var m = f.phoneNum ? f.phoneNum : "";
                var l = f.mobileNum ? f.mobileNum : "";
                if (m.indexOf("-") > 0) {
                    var i = m.split("-");
                    if (i.length > 2) {
                        $("#phone1").val(i[0]);
                        $("#phone2").val(i[1]);
                        $("#phone3").val(i[2])
                    } else {
                        if (i[0].length >= 7) {
                            $("#phone2").val(i[0]);
                            $("#phone3").val(i[1])
                        } else {
                            $("#phone1").val(i[0]);
                            $("#phone2").val(i[1])
                        }
                    }
                } else {
                    $("#phone2").val(m)
                }
                $("#mobile").val(l);
                $("#receiverID").val(f.id);
                $("input:text", "#addressForm").css("color", "#333");
                if (f.defaultAddr != "") {
                    $("#daily_address").prop("checked", "checked")
                } else {
                    $("#daily_address").prop("checked", "")
                }
                k = f.provinceId ? f.provinceId : currProvinceId;
                j = f.cityId;
                d = f.countyId
            } else {
                if (provinceIdCookie != "" && provinceIdCookie != null && provinceIdCookie == currProvinceId) {
                    k = provinceIdCookie;
                    j = cityIdCookie;
                    d = countyIdCookie
                }
            }
            $("#placeSelector").attr({countyid: d, cityid: j, provinceid: k});
            settlementFed.initFourNewAddress();
            settlementFed.emptyAddressInput()
        }
        $("#saveEditAddress").unbind("click").bind("click", function() {
            if (settlementFed.isEditFlag == 1) {
                gotracker("2", "save_adress_modify", null)
            } else {
                gotracker("2", "save_adress_add", null)
            }
            if (!settlementFed.checkAddressBeforeSave()) {
                return false
            }
            var g = jQuery("#province").val();
            if (g != "" && g != "0" && g != currProvinceId) {
                var e = jQuery("#province").find("option:selected").text();
                if (e != "") {
                    e = e.substr(1)
                }
                var f = "save";
                if (newUser == 1) {
                    f = "saveNew"
                }
                var d = {paraProvinceID: g, paraChgProName: e, paraOperFlag: f};
                if (!checkPopChgProvince(d)) {
                    return false
                }
            }
            settlementFed.callSaveMapNewaddress();
            return false
        });
        $("#cancleEditAddress").unbind("click").bind("click", function() {
            isDetailaddressModify = false;
            settlementFed.removeAddressForm();
            isAppearError(deliveryErrorOrder);
            return false
        });
        b();
        a(c);
        checkShowAlipay();
        InputValideNew();
        sellCountFixBox();
        addMobileEvent()
    }, setDefaultAddress: function(b) {
        gotracker("2", "setDefaultAddr", null);
        var a = b.parent().parent().attr("addressid"), c = {"receiver.id": a, rd: Math.random()};
        jQuery.post("/checkoutV3/receiver/ajaxDefaultAddress.do", c, function(d) {
            if (isAppearError(d)) {
                return
            }
            globalOrder.receiverDTOList = d.receiverDTOList;
            desplaySelectedReceiverNew(d)
        });
        return false
    }, deletAddress: function(b) {
        gotracker("2", "delAddr", null);
        settlementFed.isDelAddressPop = 1;
        var a = '<div class="addressMsg delMsg"><s class="opacityBg"></s><div class="msgCont"><p>确定删除该收货地址吗?</p><p><span class="Bt Bty2">确定<s></s></span><span class="Bt Btw2">取消<s></s></span></p></div></div>', c = b.parents("li").append(a);
        $(".opacityBg").css("opacity", 0.5);
        $(".Bty2", c).unbind("click").bind("click", function() {
            gotracker("2", "confirmDelAddr", null);
            settlementFed.isDelAddressPop = 0;
            settlementFed.isEditFlag = 3;
            var g = $(this).parents("li"), e = g.attr("addressid");
            var f = $("li", "#addressList").length;
            $(".delMsg", "li").remove();
            var d = {"receiver.id": e, rd: Math.random()};
            jQuery.post("/checkoutV3/receiver/delUserReceiver.do", d, afterSaveOrUpdateLocation);
            return false
        }).siblings().unbind("click").bind("click", function() {
            gotracker("2", "cancalDelAddr", null);
            settlementFed.isDelAddressPop = 0;
            $(this).parents(".addressMsg").remove();
            return false
        })
    }, addressInfoOperat: function() {
        $(".setDefaulteAddr").unbind("click").bind("click", function() {
            if (settlementFed.isDelAddressPop == 1) {
                return false
            }
            settlementFed.setDefaultAddress($(this))
        });
        $(".closeSTB", "#addressList").unbind("click").bind("click", function() {
            if (settlementFed.isDelAddressPop == 1) {
                return false
            }
            settlementFed.deletAddress($(this));
            return false
        });
        $("li", "#addressList").unbind("click").bind("click", function() {
            if (settlementFed.isDelAddressPop == 1) {
                return false
            }
            if ($(this).hasClass("slt")) {
                return false
            }
            var b = $(this);
            $("#SellCountFixBox").hide();
            $(this).addClass("slt");
            $(this).siblings().removeClass();
            var a = $("li", "#addressList").index(this);
            settlementFed.isEditFlag = 2;
            clearTimeout(settlementFed.timeoutIdForSelectSave);
            settlementFed.timeoutIdForSelectSave = setTimeout(function() {
                $(".closeSTB", b).show();
                $("#marskPageBox").css({height: $(document).height() + "px", display: "block"});
                b.append('<s class="selectLoading"></s>');
                var e = getReceiverParam(a);
                if (e.provinceID != currProvinceId) {
                    var d = {paraProvinceID: e.provinceID, paraChgProName: e.provinceName, paraOperFlag: "select"};
                    if (!checkPopChgProvince(d)) {
                        return false
                    }
                }
                gotracker("2", "chooseAddr", null);
                var c = getReceiverParamStr(a);
                jQuery.post("/checkoutV3/receiver/saveReceiver.do", c, afterSaveOrUpdateLocation)
            }, 500);
            return false
        }).hover(function() {
            if (settlementFed.isDelAddressPop == 1) {
                return false
            }
            $(".closeSTB", this).show();
            if ($(this).hasClass("slt")) {
                $(".operaNav", this).addClass("operaNavCur")
            } else {
                $(this).addClass("liHover")
            }
        }, function() {
            $(".closeSTB", this).hide();
            $(this).removeClass("liHover");
            $(".operaNav", this).removeClass("operaNavCur")
        });
        $(".editBt", ".operaNav").unbind("click").bind("click", function() {
            if (settlementFed.isDelAddressPop == 1) {
                return false
            }
            gotracker("2", "address_modify", null);
            var b = $(".editBt", "#addressList").index(this);
            var a = getReceiverParam(b);
            if (a.selfFetch > 0) {
                settlementFed.popSelfPickupForm()
            } else {
                settlementFed.popAddressForm({isEditFlag: 1, index: b})
            }
            return false
        });
        $(".Btw2", "#addAddressOperatBt").unbind("click").bind("click", function() {
            gotracker("2", "addNewAddr", null);
            settlementFed.popAddressForm({isEditFlag: 0});
            $("#addressForm").addClass("newAddressPop");
            return false
        });
        $("span", "#showAddressOperatBt").unbind("click").bind("click", function() {
            if (!hasClickOpen) {
                gotracker("2", "select_other_adress", null)
            }
            hasClickOpen = true;
            var a = $("li", "#addressList").length;
            if (a > 4) {
                $("#addressList").animate({height: "246px"}, 160)
            }
            if (a > 8) {
                var b;
                if (a % 4 == 0) {
                    b = ($.browser.msie && $.browser.version < 8) ? 128 * a / 4 : 128 * a / 4 - 14
                } else {
                    var c = Math.floor(a / 4) + 1;
                    b = ($.browser.msie && $.browser.version < 8) ? 128 * c : 128 * c - 14
                }
                $("p", "#scrollBarMap").height(b);
                $("#addressList").removeClass("showRow1")
            }
            setTimeout(function() {
                $("#scrollBarMap").scrollTop(0)
            }, 10);
            $("#showAddressOperatBt").hide()
        });
        $("#scrollBarMap").scroll(function() {
            var a = $(this).scrollTop();
            $("ul", "#addressList").css({marginTop: "-" + a + "px"})
        });
        delShowBtnAllAddress();
        checkShowAlipay();
        checkShowSelfPickUp()
    }, popAddressForm: function(a) {
        if ($("form.addressForm").length > 0) {
            return false
        }
        var b = $("#tempAddressForm").val();
        $("body").append(b);
        if (typeof a.index != "undefined") {
            $("#addressForm").data("index", a.index);
            $(".useNewAddress", "#addressForm").text("修改地址")
        }
        $('<div id="maskBoxPop"></div>').appendTo($("body")).css({width: $(window).width() + "px", height: $(document).height() + "px", opacity: 0.4, display: "block"});
        $(".closeSTB", "#addressForm").unbind("click").bind("click", function() {
            isDetailaddressModify = false;
            settlementFed.removeAddressForm();
            isAppearError(deliveryErrorOrder)
        });
        if ($.browser.msie && $.browser.version == 6) {
            $(window).unbind("scroll").bind("scroll", function() {
                $("#addressForm").css("top", 220 + $(window).scrollTop() + "px")
            })
        }
        if (a.isEditFlag == 0) {
            $("#addressForm").addClass("newAddressPop")
        }
        settlementFed.addressPopFun(a.isEditFlag)
    }, popSelfPickupForm: function(a) {
        if ($("#selfPickupForm").length > 0) {
            return false
        }
        var b = $("#tempSelfPickupForm").val();
        $("body").append(b);
        $('<div id="maskBoxPop"></div>').appendTo($("body")).css({width: $(window).width() + "px", height: $(document).height() + "px", opacity: 0.4, display: "block"});
        $(".btn_close", "#selfPickupForm").unbind("click").bind("click", function() {
            settlementFed.removeSelfPickupForm()
        });
        if ($.browser.msie && $.browser.version == 6) {
            $(window).unbind("scroll").bind("scroll", function() {
                $("#selfPickupForm").css("top", 220 + $(window).scrollTop() + "px")
            })
        }
        settlementFed.selfPickupPopFun(a);
        addMobileEvent()
    }, removeSelfPickupForm: function() {
        $("#selfPickupForm,#maskBoxPop").remove()
    }, selfPickupPopFun: function(e) {
        var f = new BMap.Map("pickUpRight");
        f.enableScrollWheelZoom();
        f.enableContinuousZoom();
        var c = new BMap.LocalSearch(f, {renderOptions: {map: f}});
        $("#SellCountFixBox").hide();
        $("#searchSlefPickup").keyup(function() {
            $("#pickUpLeft li").each(function() {
                $(this).removeClass("addressHide")
            });
            $("#pickUpLeft").removeHighlight();
            if ($(this).val() != "") {
                $("#pickUpLeft").highlight($(this).val());
                $("#pickUpLeft li").each(function() {
                    var h = false;
                    $(this).find("span").each(function() {
                        if ($(this).hasClass("highlight")) {
                            h = true
                        }
                    });
                    if (!h) {
                        $(this).addClass("addressHide")
                    }
                })
            }
        });
        function a() {
            if (!fourAdressCheck()) {
                return false
            }
            if (jQuery("#pickUpLeft>li").filter(".on").length != 1) {
                $(".btn_submit").siblings(".error").css("display", "inline").html("<s></s>请选择自提站点");
                return false
            }
            var o = $("#receiverName");
            var j = $.trim(o.val());
            var m = o.attr("defaultvalue");
            if (j == "" || j == m) {
                $(".btn_submit").siblings(".error").css("display", "inline").html("<s></s>请输入收货人姓名");
                return false
            } else {
                if (j.length > 20) {
                    $(".btn_submit").siblings(".error").css("display", "inline").html("<s></s>收货人姓名 不能超过20个字符");
                    return false
                } else {
                    if (checkTextValid(j) == false) {
                        $(".btn_submit").siblings(".error").css("display", "inline").html("<s></s>收货人姓名不能为空,并且不能包含特殊字符!");
                        return false
                    }
                }
            }
            var h;
            h = $("#mobile");
            var i = $.trim(h.val());
            var n = h.attr("defaultvalue");
            var l = /^1[3|4|5|7|8][0-9]\d{8}$/;
            var k = /^1[3|4|5|7|8]\d{2}\*{5}\d{2}$/;
            if (i == "") {
                h.css("color", "#ccc").val(n);
                i = n
            }
            if (!i || i == n) {
                h.css("color", "#ccc").val(n);
                $(".btn_submit").siblings(".error").css("display", "inline").html("<s></s>请填写您的手机号码!");
                return false
            }
            if (i != n && !l.test(i) && !k.test(i)) {
                $(".btn_submit").siblings(".error").css("display", "inline").html("<s></s>手机号码格式不正确，请确认!");
                return false
            }
            return true
        }
        $("#savePickUpAddress").unbind("click").bind("click", function() {
            var l = $(this);
            if (!a()) {
                return false
            }
            var j = jQuery("#pickUpLeft>li").filter(".on");
            var i = $(".p2", j).text();
            var k = getReceiverParam(-1);
            var h = "";
            h += "&receiver.id=" + j.attr("id") + "&receiver.receiverName=" + encodeURIComponent(k.receiverName) + "&receiver.detailAddress=" + encodeURIComponent(i) + "&receiver.phone=" + k.phone + "&receiver.mobile=" + k.mobile + "&receiver.provinceID=" + k.provinceID + "&receiver.cityID=" + k.cityID + "&receiver.countyID=" + k.countyID;
            h += "&receiver.selfPickUp=" + j.attr("serviceType") + "&rd=" + Math.random();
            l.after('<span id="loadingSaveInfoMsg"><i></i>正在保存信息...</span>');
            l.remove();
            jQuery.post("/checkoutV3/receiver/saveReceiver.do", h, afterSaveOrUpdateLocation);
            return false
        });
        var d = globalOrder.receiverDTOList ? globalOrder.receiverDTOList.receiverDTO : null;
        $("#placeSelector").attr({countyid: (d ? d.countyId : 0), cityid: (d ? d.cityId : 0), provinceid: currProvinceId});
        settlementFed.initFourNewAddress();
        $("#province").attr("disabled", "true");
        $("#receiverName").css("color", "#333");
        $("#mobile").css("color", "#333");
        $("input:text", ".editAddressForm").focus(function() {
            $(this).css("color", "#333");
            if ($(this).attr("defaultvalue") == $(this).val()) {
                $(this).val("")
            }
        });
        jQuery("#city").change(function() {
            f.clearOverlays();
            jQuery("#pickUpLeft").html("<li>请选择区域</li>");
            jQuery("#pickUpInput").hide();
            $(".scroll-pane").jScrollPane()
        });
        function b(i) {
            jQuery.post("/checkoutV3/receiver/ajaxGetSelfPickUpList.do", i, function(k) {
                if (k != null && k.selfFetchAddrs != null && k.selfFetchAddrs.length > 0) {
                    jQuery("#searchSlefPickup").show();
                    var j = "";
                    jQuery(k.selfFetchAddrs).each(function(m) {
                        var l = this.workTime;
                        if (l == null || l == "null") {
                            l = ""
                        }
                        j = j + '<li x="' + this.pointLng + '" y="' + this.pointLat + '"  serviceType="' + this.serviceType + '" id="' + this.id + '" t="' + l + '"><div class="con"><i class="radio"></i><p class="p1">' + this.name + '</p><p class="p2">' + this.address + '</p><p class="p3">电话：<span>' + this.phoneNo + '</span></p><p class="p4">营业时间：<span>' + l + "</span></p></div></li>"
                    });
                    jQuery("#pickUpLeft").html(j);
                    $(".scroll-pane").jScrollPane()
                } else {
                    jQuery("#pickUpLeft").html("<li class='disabled'>当前区域暂没有自提点</li>");
                    jQuery("#pickUpInput").hide();
                    jQuery("#searchSlefPickup").hide();
                    $(".scroll-pane").jScrollPane()
                }
                $(".area_list li").unbind("click").bind("click", function() {
                    var r = $(this);
                    if (r.hasClass("disabled")) {
                        return
                    }
                    r.addClass("on").siblings().removeClass("on");
                    jQuery("#pickUpInput").show();
                    var l = $(".p2", r);
                    f.clearOverlays();
                    var u = $(".p1", r).text();
                    var q = $(".p2", r).text();
                    var t = r.attr("x");
                    var s = r.attr("y");
                    var o = $(".p3>span", r).text();
                    var p = $(".p4>span", r).text();
                    if (p == null || p == "null") {
                        p = ""
                    }
                    f.centerAndZoom(new BMap.Point(t, s), 18);
                    var n = new BMap.Marker(new BMap.Point(t, s));
                    f.addOverlay(n);
                    var m = new BMap.InfoWindow('<div style="font-size:12px"><h3 style="color:#CC5522">' + u + "</h3>地址：" + q + "<br/>电话：" + o + "<br/>营业时间：" + p + "</div>");
                    n.openInfoWindow(m);
                    n.addEventListener("click", function() {
                        this.openInfoWindow(m)
                    });
                    $("#pickUpInput #receiverName").val(d ? d.name : "");
                    $("#pickUpInput #mobile").val(d ? d.mobileNum : "")
                })
            });
            f.clearOverlays();
            setTimeout(function() {
                h(jQuery("#county").find("option:selected").text())
            }, 10);
            function h(j) {
                var k = new BMap.Boundary();
                k.get(j, function(l) {
                    f.clearOverlays();
                    var n = l.boundaries.length;
                    for (var m = 0; m < n; m++) {
                        var o = new BMap.Polygon(l.boundaries[m], {strokeWeight: 2, fillOpacity: "0.4", strokeColor: "#ff0000"});
                        f.addOverlay(o);
                        f.setViewport(o.getPath())
                    }
                })
            }}
        jQuery("#county").change(function() {
            jQuery("#placeSelector").siblings(".error").css("display", "none");
            var i = jQuery(this);
            var j = i.val();
            if (j == 0) {
                jQuery("#pickUpLeft").html("<li>请选择区域</li>");
                jQuery("#pickUpInput").hide();
                $(".scroll-pane").jScrollPane()
            } else {
                var h = {provinceId: $("#province").val(), cityId: $("#city").val(), countyId: $("#county").val(), rd: Math.random()};
                b(h)
            }
        });
        setTimeout(function() {
            var h = jQuery("#province").find("option:selected").text();
            if (h != "") {
                h = h.substr(1);
                f.centerAndZoom(h, 15)
            }
        }, 500);
        var g = {provinceId: currProvinceId, cityId: (d ? d.cityId : 0), countyId: (d ? d.countyId : 0), rd: Math.random()};
        b(g)
    }};
function InputValideNew() {
    $("input:text", ".editAddressForm").focus(function() {
        $(this).css("color", "#333");
        if ($(this).attr("defaultvalue") == $(this).val()) {
            $(this).val("")
        }
    });
    $("#receiverName").unbind("blur").bind("blur", function() {
        receiverNameCheck()
    });
    $("#detailAddress").unbind("change").bind("change", function() {
        detailAddressCheck(1)
    });
    $("#mobile").unbind("blur").bind("blur", function() {
        mobilePhoneCheck()
    });
    $("#phone1").unbind("blur").bind("blur", function() {
        mobilePhoneCheck()
    });
    $("#phone2").unbind("blur").bind("blur", function() {
        mobilePhoneCheck()
    });
    $("#phone3").unbind("blur").bind("blur", function() {
        mobilePhoneCheck()
    })
}
function showYN(c, a) {
    var b = $("#mobile");
    var d = b.siblings(".ok");
    var e = b.siblings(".error");
    if (c == 1) {
        d.css("display", "inline-block");
        e.css("display", "none")
    } else {
        if (c == 0) {
            d.css("display", "none");
            e.html("<s></s>" + a).css("display", "inline")
        }
    }
    if (c != 0 && c != 1) {
        d.css("display", "none");
        e.css("display", "none")
    }
}
function receiverNameCheck() {
    var c = $("#receiverName");
    var a = $.trim(c.val());
    var b = c.attr("defaultvalue");
    c.siblings(".ok").css("display", "none");
    if (a == "" || a == b) {
        c.siblings(".error").css("display", "inline").html("<s></s>请输入收货人姓名");
        return false
    } else {
        if (a.length > 20) {
            c.siblings(".error").css("display", "inline").html("<s></s>收货人姓名 不能超过20个字符");
            return false
        } else {
            if (checkTextValid(a) == false) {
                c.siblings(".error").css("display", "inline").html("<s></s>收货人姓名不能为空,并且不能包含特殊字符!");
                return false
            } else {
                c.siblings(".error").css("display", "none");
                c.siblings(".ok").css("display", "inline-block");
                return true
            }
        }
    }
}
function checkPopChgProvince(c) {
    var b = -1;
    var a = "上海";
    var d = "/checkoutV3/address/ajaxGetIsProvinceCanCovered.do";
    jQuery.ajax({type: "POST", async: false, url: d, data: "provinceId=" + c.paraProvinceID, success: function(e) {
            b = e.code;
            a = e.data
        }});
    if (b == 0) {
        if (c.paraOperFlag == "select" || c.paraOperFlag == "saveNew") {
            settlementFed.changeCityPop({currentProName: a, changeProName: c.paraChgProName, changeProId: c.paraProvinceID, paraOperFlag: c.paraOperFlag})
        } else {
            if (c.paraOperFlag == "save") {
                settlementFed.changeCityPopWhenSave({currentProName: a, changeProName: c.paraChgProName, changeProId: c.paraProvinceID})
            } else {
                jQuery(".addressBt>.PromptInfo").html("您目前在" + a + "站，选择地址后，您购买的商品及价格发生变化").css("display", "inline-block")
            }
        }
        return false
    } else {
        if (b == -1) {
            alert("网络异常");
            return false
        }
    }
    return true
}
function fourAdressCheck() {
    jQuery("#placeSelector").siblings(".error").css("display", "none");
    var c = jQuery("#city").val();
    var b = jQuery("#province").val();
    var a = jQuery("#county").val();
    if (!(b > 0 && c > 0)) {
        jQuery("#placeSelector").siblings(".error").css("display", "inline").html("<s></s>请选择地区.");
        inputFocusNew("province");
        return false
    }
    if (!jQuery("#county").is(":visible") || !(a > 0)) {
        if (c > 0 && !jQuery("#county").is(":visible")) {
            jQuery("#city").trigger("change")
        }
        jQuery("#placeSelector").siblings(".error").css("display", "inline").html("<s></s>请选择地区.");
        inputFocusNew("province");
        return false
    }
    return true
}
function detailAddressCheck(a) {
    var d = $("#detailAddress");
    var b = $.trim(d.val());
    var c = d.attr("defaultvalue");
    d.siblings(".ok").css("display", "none");
    if (b == "" || b == c) {
        d.siblings(".error").css("display", "inline").html("<s></s>请输入收货地址");
        return false
    } else {
        if (b.length > 50) {
            d.siblings(".error").css("display", "inline").html("<s></s>收货地址 不能超过50个字符");
            return false
        } else {
            if (checkTextValid(b) == false) {
                d.siblings(".error").css("display", "inline").html("<s></s>收货地址不能为空,并且不能包含特殊字符!");
                return false
            } else {
                d.siblings(".error").css("display", "none");
                d.siblings(".ok").css("display", "inline-block")
            }
        }
    }
    return true
}
function mobilePhoneCheck() {
    var n, b, a, r;
    n = $("#mobile");
    var p = n.val();
    if ((p == "" || p == n.attr("defaultvalue")) && !!n.attr("dfvValue")) {
        n.val(n.attr("dfvValue"))
    }
    b = $("#phone1");
    a = $("#phone2");
    r = $("#phone3");
    var m = $.trim(b.val());
    var l = $.trim(a.val());
    var j = $.trim(r.val());
    var d = $.trim(n.val());
    var f = n.attr("defaultvalue");
    var i = b.attr("defaultvalue");
    var o = a.attr("defaultvalue");
    var q = r.attr("defaultvalue");
    var e = /^[0]\d{2,3}$/;
    var g = /^\d{7,8}$/;
    var k = /^\d{1,6}$/;
    var c = /^1[3|4|5|7|8][0-9]\d{8}$/;
    var h = /^1[3|4|5|7|8]\d{2}\*{5}\d{2}$/;
    showYN(2);
    if (d == "") {
        n.css("color", "#ccc").val(f);
        d = f
    }
    if (m == "") {
        b.css("color", "#ccc").val(i);
        m = i
    }
    if (l == "") {
        a.css("color", "#ccc").val(o);
        l = o
    }
    if (j == "") {
        r.css("color", "#ccc").val(q);
        j = q
    }
    if (!d && !m && !l && !j) {
        b.css("color", "#ccc").val(i);
        a.css("color", "#ccc").val(o);
        r.css("color", "#ccc").val(q);
        n.css("color", "#ccc").val(f);
        showYN(0, "请填写您的联系方式：手机或电话");
        return false
    }
    if (d == f && m == i && l == o && j == q) {
        showYN(0, "请填写您的联系方式：手机或电话");
        return false
    }
    if (d != f && (!c.test(d) && !h.test(d))) {
        showYN(0, "手机号码格式不正确，请确认");
        return false
    }
    if (m != i && !e.test(m)) {
        showYN(0, "固定电话格式错误(区号)，请参考021-12345678");
        return false
    }
    if (l != o && !g.test(l)) {
        showYN(0, "固定电话格式错误(电话号码)，请参考021-12345678");
        return false
    }
    if (j != q && !k.test(j)) {
        showYN(0, "固定电话格式错误(分机号)，请参考021-12345678");
        return false
    }
    if ((m != i || j != q) && l == o) {
        showYN(0, "固定电话部分(电话号码)不能为空");
        return false
    }
    return true
}
function checkShowAlipay() {
    if (jQuery.cookie("ucocode") && jQuery.cookie("ucocode") == "alipay") {
        $(".usingAlipayAddressCss").css("display", "inline-block");
        $(".usingAlipayAddressCss").unbind("click").click(function() {
            if ($(".usingAlipayAddressCss").attr("id") == "usingAlipaySpecial") {
                $(".Btw2", "#addAddressOperatBt").not("#usingSelfPickup").click()
            }
            jQuery.post("/checkoutV3/alipay/alipayAddress.do", {nowUrl: document.location.href}, function(a) {
                window.open(a)
            })
        })
    } else {
        if (newUser == 1) {
            $(".usingAlipayAddressCss").parent().hide()
        } else {
            $(".usingAlipayAddressCss").css("display", "none")
        }
    }
}
function delShowBtnAllAddress() {
    if ($("li", "#addressList").length < 5) {
        $("#addressList").removeAttr("style");
        $("#showAddressOperatBt").hide()
    } else {
        setTimeout(function() {
            $("#showAddressOperatBt").show();
            if (hasClickOpen) {
                $("span", "#showAddressOperatBt").click()
            }
        }, 0)
    }
}
function checkShowSelfPickUp() {
    if ($("#usingSelfPickup").length && globalOrder.haigouFlag != 1) {
        if (globalOrder.selfPickUp != null && globalOrder.selfPickUp > 0) {
            $("#usingSelfPickup_tip").addClass("msgBx");
            $("#usingSelfPickup").show();
            $("#usingSelfPickup_tip").show();
            $("#usingSelfPickup").unbind("click").click(function() {
                settlementFed.popSelfPickupForm()
            })
        } else {
            $("#usingSelfPickup").hide();
            $("#usingSelfPickup_tip").hide()
        }
    }
}
function desplaySelectedReceiverNew(a) {
    $("ul", "#addressList").setTemplateElement("tempAddress").setParam("getShortName", getShortName).processTemplate(a.receiverDTOList);
    $("#addressList").data("RecievAddrListHidden", a.receiverDTOList.receiverDTOs);
    $("#addAddressOperatBt").show();
    settlementFed.addressInfoOperat();
    settlementFed.oldLiBoxIndex = $("li", "#addressList").index($("li.slt", "#addressList"));
    if (a.isContainBookedPreSellProduct && a.receiverDTOList.receiverDTOs.length > 0) {
        if (!$("#bookedPreSell").is(":visible")) {
            var b = a.receiverDTOList.receiverDTO.mobileNum;
            if (b == null || b.length < 1) {
                b = ""
            }
            $("#bookedPreSell").setTemplateElement("tempBookedPreSell").setParam("defaultPhone", b).processTemplate(a);
            $("#bookedPreSell").show();
            if (b.length < 1) {
                $("#bookedPreSellPhoneTips").text("请输入正确的手机号码");
                $("#bookedPreSellPhone").focus()
            }
            $("#bookedPreSellPhone").blur(function() {
                var d = $(this).val();
                if ((d == "" || d == $(this).attr("defaultvalue")) && !!$(this).attr("dfvValue")) {
                    $(this).val($(this).attr("dfvValue"))
                }
                var e = /^1[3|4|5|7|8][0-9]\d{8}$/;
                var c = /^1[3|4|5|7|8]\d{2}\*{5}\d{2}$/;
                d = $(this).val();
                if (!e.test(d) && !c.test(d)) {
                    $("#bookedPreSellPhoneTips").text("请输入正确的手机号码");
                    $("#bookedPreSellPhone").focus()
                } else {
                    $("#bookedPreSellPhoneTips").empty()
                }
            });
            $("#bookedPreSellPhone").focus(function() {
                var c = $(this).val();
                if (!!!$(this).attr("dfvValue") && c.indexOf("*****") >= 0) {
                    $(this).attr("dfvValue", c)
                }
                if (c == $(this).attr("dfvValue")) {
                    $(this).val("")
                }
            })
        }
    } else {
        $("#bookedPreSell").hide()
    }
}
function getShortName(a) {
    if (a != "" && a.length > 13) {
        a = a.substring(0, 13)
    }
    return a
}
function delNewUser() {
    gotracker("2", "shownewadress", null);
    newUser = 1;
    $("#ReceiptInfo").append($("#tempAddressForm").val());
    $("#ReceiptInfo").addClass("newUser");
    $("#addAddressOperatBt,#showAddressOperatBt,#cancleEditAddress").hide();
    settlementFed.addressPopFun(0)
}
function inputFocusNew(a) {
    $("#" + a).focus()
}
function getReceiverParamStr(b) {
    var c = getReceiverParam(b);
    var a = "";
    if (c.receiverid) {
        a += "&receiver.id=" + c.receiverid
    }
    a += "&receiver.receiverName=" + encodeURIComponent(c.receiverName) + "&receiver.detailAddress=" + encodeURIComponent(c.detailAddress) + "&receiver.phone=" + c.phone + "&receiver.mobile=" + c.mobile + "&receiver.provinceID=" + c.provinceID + "&receiver.cityID=" + c.cityID + "&receiver.countyID=" + c.countyID;
    a += "&receiver.defaultReceiver=" + c.isDefault + "&receiver.selfPickUp=" + c.selfFetch;
    a += "&rd=" + Math.random();
    return a.substr(1)
}
function getReceiverParam(l) {
    var s = "";
    var p = "";
    var n = "";
    var g = "";
    var b = "";
    var h = "";
    var e = "";
    var f = "";
    var m = "";
    var o = 0;
    var a = 0;
    if (l == -1) {
        s = jQuery("#receiverID").val();
        p = d("receiverName");
        n = d("detailAddress");
        var k = d("phone1");
        var j = d("phone2");
        var i = d("phone3");
        b = d("mobile");
        h = jQuery("#city").val();
        e = jQuery("#province").val();
        m = jQuery("#county").val();
        if (k != "") {
            g = k + "-"
        }
        if (j != "") {
            g = g + j
        }
        if (i != "") {
            g = g + "-" + i
        }
        if (jQuery("#daily_address").prop("checked")) {
            o = 1
        }
    } else {
        var r = $("#addressList").data("RecievAddrListHidden");
        var q = (r)[l];
        s = q.id;
        p = q.name;
        n = q.address;
        g = q.phoneNum ? q.phoneNum : "";
        b = q.mobileNum ? q.mobileNum : "";
        if (q.defaultAddr != "") {
            o = 1
        }
        e = q.provinceId;
        f = q.provinceName;
        h = q.cityId;
        m = q.countyId;
        a = q.selfPickUp
    }
    function d(u) {
        var t = $("input#" + u), w = t.attr("defaultValue"), v = $.trim(t.val());
        if (w == v) {
            return""
        } else {
            return v
        }
    }
    var c = {};
    c.receiverid = s;
    c.receiverName = p;
    c.detailAddress = n;
    c.phone = g;
    c.mobile = b;
    c.provinceID = e;
    c.provinceName = f;
    c.cityID = h;
    c.countyID = m;
    c.isDefault = o;
    c.selfFetch = a;
    return c
}
function afterSaveOrUpdateLocation(d) {
    settlementFed.removeSelfPickupForm();
    if (typeof (d) == "string") {
        if (d.indexOf("checkoutAjaxErrorFlg") != -1) {
            commBackCart();
            return
        }
    }
    var g = '<div class="addressMsg editMsg"><s class="opacityBg"></s><div class="msgCont"><p><span class="ok"></span>编辑成功！</p></div></div>';
    var b = newUser;
    settlementFed.isDelAddressPop = 0;
    settlementFed.idForSaveAddressBtnFlag = false;
    isDetailaddressModify = false;
    if (settlementFed.isEditFlag == 2) {
        $("#marskPageBox").css("display", "none")
    }
    if (settlementFed.isEditFlag == 0 || settlementFed.isEditFlag == 1) {
        $(".saveEditAddress", ".addressBt").show();
        $("#loadingSaveInfoMsg", ".addressBt").remove()
    }
    if (d.checkoutError != null) {
        var c = getShowErrorCode(d.checkoutError.code);
        if (c == "400002" || c == "400005") {
            popChekcoutErrorWithoutProduct("电话号码或手机号码错误。");
            settlementFed.backSelectOldaddress();
            return
        } else {
            if (c == "400010" || c == "400008" || c == "400001" || c == "400006" || c == "400007") {
                popChekcoutErrorWithoutProduct("收货人信息为空或者无效,请重新刷新页面后再试。");
                settlementFed.backSelectOldaddress();
                return
            } else {
                if (c == "400009") {
                    popChekcoutErrorWithoutProduct("商品无法配送到选择的收货地址,请选择其他收货地址。");
                    settlementFed.backSelectOldaddress();
                    return
                } else {
                    if (c == "400004") {
                        popChekcoutErrorWithoutProduct("详细地址中必须包含汉字。");
                        settlementFed.backSelectOldaddress();
                        return
                    } else {
                        if (c == "400003") {
                            popChekcoutErrorWithoutProduct("无效的收货人名。");
                            settlementFed.backSelectOldaddress();
                            return
                        }
                    }
                }
            }
        }
    }
    if (settlementFed.isEditFlag == 0 || settlementFed.isEditFlag == 1) {
        settlementFed.removeAddressForm()
    }
    globalRender(d);
    if (b == 1) {
        $("#ReceiptInfo").removeClass("newUser")
    } else {
        if (settlementFed.isEditFlag == 0) {
        } else {
            if (settlementFed.isEditFlag == 1) {
                var e = $(".slt", "#addressList");
                e.append(g);
                $(".opacityBg").css("opacity", 0.5);
                setTimeout(function() {
                    $(".addressMsg").remove()
                }, 1000)
            }
        }
    }
    var a = $("li", "#addressList").length;
    if (a < 1 || settlementFed.oldLiBoxIndex == -1) {
        confirmStatues = {isConfirmReceiver: false, isConfirmDelivery: false, isConfirmPayment: false, isConfirmInvoice: false};
        jQuery("#deliveryUI").removeClass("beEdit");
        jQuery("#invoiceUI").removeClass("beEdit");
        jQuery("#DeliveryDisplayDiv").html('请先确认"收货信息"');
        jQuery("#InvoiceDisplayDiv").html('请先确认"配送信息"');
        jQuery("#invoiceModify").hide();
        showPaymentNotEditableLayout()
    } else {
        jQuery("#invoiceModify").show();
        var f = Math.ceil(($(".slt", "#addressList").prevAll().length + 1) / 4) - 2;
        setTimeout(function() {
            $("#scrollBarMap").scrollTop(f * 130)
        }, 200)
    }
    sellCountFixBox()
}
jQuery.fn.highlight = function(b) {
    function a(e, j) {
        var l = 0;
        if (e.nodeType == 3) {
            var k = e.data.toUpperCase().indexOf(j);
            if (k >= 0) {
                var h = document.createElement("span");
                h.className = "highlight";
                var f = e.splitText(k);
                var c = f.splitText(j.length);
                var d = f.cloneNode(true);
                h.appendChild(d);
                f.parentNode.replaceChild(h, f);
                l = 1
            }
        } else {
            if (e.nodeType == 1 && e.childNodes && !/(script|style)/i.test(e.tagName)) {
                for (var g = 0; g < e.childNodes.length;
                        ++g) {
                    g += a(e.childNodes[g], j)
                }
            }
        }
        return l
    }
    return this.each(function() {
        a(this, b.toUpperCase())
    })
};
jQuery.fn.removeHighlight = function() {
    return this.find("span.highlight").each(function() {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize()
        }
    }).end()
};
var showDeliveryTips = false;
function displayOrderDelivery(a) {
    jQuery("#DeliveryDisplayDiv").setParam("getProduct", getProduct);
    jQuery("#DeliveryDisplayDiv").setParam("getConfig", getConfig);
    jQuery("#DeliveryDisplayDiv").setParam("showPhoneNoPrice", showPhoneNoPrice);
    jQuery("#DeliveryDisplayDiv").setParam("getHaiGouFlag", getHaiGouFlag);
    jQuery("#DeliveryDisplayDiv").processTemplate(a);
    registerDeliveryDisplay(a);
    refeshGoods()
}
function registerDeliveryDisplay(e) {
    $("th > div.pz > label", ".distrInfo").click(function() {
        var j = $("th > div.pz > label", ".distrInfo").index(this), i = $("input:radio", this);
        if (j % 2 == 0) {
            splitOrderDelivery(i.val())
        } else {
            unitOrderDelivery(i.val())
        }
        setTimeout(function() {
            i.prop("checked", "checked")
        }, 0);
        return false
    });
    showPackageProdInfo();
    var h = getDatePickerData(e);
    buildDatePicker(h);
    remarkFun();
    $(".deliverMethod input[type='radio']").click(function() {
        var i = $(this);
        if (i.val() == "10005" || i.hasClass("hidden")) {
            return false
        }
        saveOrderDelivery({deliveryMethodId: i.val(), receiverDate: "", receiverPeriod: "", orderMark: i.attr("name")})
    });
    $(".delayDeliverySelector").click(function() {
        var i = $(this);
        saveOrderDelivery({deliveryMethodId: 10007, receiverDate: "", receiverPeriod: "", orderMark: "", selected: i.is(":checked")})
    });
    $(".slow_service .slow_box").hover(function() {
        $(this).find(".slow_tips_box").show()
    }, function() {
        $(this).find(".slow_tips_box").hide()
    });
    var c = $("#deliveryUI .timedDelivery_btn_input").get(0);
    if (c && !showDeliveryTips) {
        var f = getPackageByOrderMark($(c).attr("ordermark"));
        var b = $($(f.supportedDeliverys).filter(function() {
            return this.id == 10005
        }).attr("deliveryPeriodGroup")).filter(function() {
            return this.id != 0
        });
        var g = b.length > 0 && b[0].deliveryPeriods.length > 0 && b[0].deliveryPeriods[0].fee == 0;
        var d = jQuery("#DeliveryDisplayDiv .freeTips .text span");
        if (g) {
            jQuery("#DeliveryDisplayDiv .freeTips").addClass("freeTipsYellow");
            d.html('<span class="link">点击这里</span><strong class="p1">免费选择一次准时达</strong>')
        } else {
            d.text("点击这里选择收货时间")
        }
        var a = $(".freeTips", $(c));
        a.show();
        d.addClass("onTimeFee");
        $(c).bind("click", function() {
            var i = jQuery("#DeliveryDisplayDiv .freeTips .text span");
            if (i.length && !i.hasClass("hasOnTimeCoupon")) {
                a.fadeOut()
            }
        });
        showDeliveryTips = true
    }
    $(".mod_selectDate").bgiframe();
    $(".DeliveryInfoBox").bgiframe();
    $("body").unbind("click", hidePopDiv).bind("click", hidePopDiv)
}
function saveOrderDelivery(h) {
    var n = getDeliveryGroupByOrderMark(h.orderMark);
    var d = getMerchantByOrderMark(h.orderMark);
    var j = false;
    if (h.deliveryMethodId == 10007) {
        j = false
    } else {
        if (n.packages.length > 1) {
            j = true
        }
        if (!d.isYhd && d.totalPackages > 0 && !d.isDeliveryByYhd) {
            j = true
        }
    }
    var b = new Array();
    var k = $("input.remarkInput[orderMark='" + h.orderMark + "']");
    var l = k.size() < 1 ? "" : k.val() == k.attr("msg") ? "" : k.val();
    h.remarks = l == undefined ? "" : l;
    if (j) {
        for (var c = 0; c < n.packages.length; c++) {
            var m = n.packages[c];
            var l = "";
            if (d.isYhd && m.isContainCard || !d.isYhd && m.sbyType == -1) {
                l = h.remarks
            }
            b.push({deliveryMethodId: h.deliveryMethodId, receiverDate: h.receiverDate ? h.receiverDate : "", receiverPeriod: h.receiverPeriod, orderMark: m.orderMark, remarks: l, onTimeFee: h.onTimeFee})
        }
    } else {
        b.push(h)
    }
    var g = "";
    for (var f = 0; f < b.length; f++) {
        g += (g ? "&" : "");
        g += ("deliveryList[" + f + "].orderMark=" + b[f].orderMark + "&deliveryList[" + f + "].deliveryMethodId=" + b[f].deliveryMethodId + "&deliveryList[" + f + "].receiverDate=" + b[f].receiverDate + "&deliveryList[" + f + "].receiverPeriod=" + b[f].receiverPeriod + "&deliveryList[" + f + "].remarks=" + encodeURIComponent(b[f].remarks) + "&deliveryList[" + f + "].selected=" + ((b[f].selected == undefined || b[f].selected == null) ? false : b[f].selected) + "&deliveryList[" + f + "].onTimeFee=" + encodeURIComponent((b[f].onTimeFee == undefined ? 0 : b[f].onTimeFee)))
    }
    var a = "/checkoutV3/delivery/saveDelivery.do?rd=" + Math.random();
    gUseFed.load({box: "#deliveryUI"});
    jQuery.post(a, g, function(i) {
        e(i)
    });
    function e(i) {
        gUseFed.removeLoad();
        if (!isAppearError(i)) {
            if (i.merchantList != null) {
                globalRender(i)
            }
        }
    }
    return false
}
function unitOrderDelivery(b) {
    gotracker("2", "unitOrderShip", null);
    var a = "/checkoutV3/delivery/unitOrderShip.do?rd=" + Math.random();
    gUseFed.load({box: "#deliveryUI"});
    jQuery.get(a, {orderMarks: b}, function(c) {
        gUseFed.removeLoad();
        globalRender(c)
    })
}
function splitOrderDelivery(b) {
    gotracker("2", "splitOrderShip", null);
    var a = "/checkoutV3/delivery/splitOrderShip.do?rd=" + Math.random();
    gUseFed.load({box: "#deliveryUI"});
    jQuery.get(a, {orderMarks: b}, function(c) {
        gUseFed.removeLoad();
        globalRender(c)
    })
}
function getDatePickerData(e) {
    var j = new Array();
    for (var f = 0; f < e.merchants.length;
            f++) {
        var c = e.merchants[f];
        for (var i = 0; i < c.deliveryGroups.length; i++) {
            var l = c.deliveryGroups[i];
            for (var b = 0; b < l.packages.length; b++) {
                var k = l.packages[b];
                for (var h = 0; h < k.supportedDeliverys.length; h++) {
                    var a = k.supportedDeliverys[h];
                    if (a.id == 10005) {
                        j.push(a);
                        break
                    }
                }
            }
        }
    }
    var g = {packages: j};
    return g
}
function showPackageProdInfo() {
    $(".DeliveryShowBox>i").bind("click", function() {
        $(".cur", "#DeliveryDisplayDiv").removeClass("cur");
        $(this).parents("td").addClass("cur");
        gotracker("2", "packagecontent", null);
        return false
    });
    $(".closeDeliveryPop").bind("click", function() {
        $(this).parents("td").removeClass("cur");
        return false
    })
}
function buildDatePicker(c) {
    if (c.packages.length <= 0) {
        return
    }
    var b = c.packages[0], d = b.orderMark, a = b.deliveryDate;
    if (deliveryDateShow(a, d, b.id)) {
        c.packages.shift();
        buildDatePicker(c)
    }
}
function supportDeliverys(e) {
    var g = false;
    var c = false;
    var b = false;
    var f = false;
    var j = getPackageByOrderMark(e);
    for (var d = 0; d < j.supportedDeliverys.length; d++) {
        var a = j.supportedDeliverys[d];
        if (a.id == "10001") {
            g = true
        }
        if (a.id == "10003") {
            c = true
        }
        if (a.id == "10004") {
            b = true
        }
        if (a.id == "10005") {
            var h = $(a.deliveryPeriodGroup).filter(function() {
                return this.id != 0
            });
            if (h && h.length > 0) {
                f = true
            }
        }
    }
    return{commonDeliveryEnabled: g, weekDayEnabled: c, weekEndEnabled: b, timedDeliveryEnabled: f}
}
function hideDataPicker() {
    $("div.sel_list_box").hide();
    $("div.timedDelivery_btn_input").removeClass("open")
}
function deliveryDateShow(e, j) {
    var c = $('div.timedDelivery_btn_input[ordermark="' + j + '"]');
    if (c.length < 1) {
        return true
    }
    var o = $('<div class="sel_list_box clearfix none"/>').insertAfter(c);
    var a = $("<ul/>").appendTo(o).wrap($('<div class="sel_list sel1"/>').append($('<div class="ul_box scroll-pane"/>')));
    var k, n, m, h;
    var b = supportDeliverys(j);
    if (b.commonDeliveryEnabled) {
        k = $("<li/>").html('任意日期<i class="icon free"></i>').appendTo(a)
    }
    if (b.weekDayEnabled) {
        n = $("<li/>").html('工作日送<i class="icon free"></i>').appendTo(a)
    }
    if (b.weekEndEnabled) {
        m = $("<li/>").html('周末送货<i class="icon free"></i>').appendTo(a)
    }
    h = new Array();
    for (var g = 0; g < e.length; g++) {
        var l = e[g];
        var p = l.dateDesc.split("|"), f = p[0].split("-");
        var d = $("<li/>").addClass("t").html(p[1] + "<span>" + f[1] + "-" + f[2] + '<i class="icon right_arrow"></i></span>').appendTo(a);
        if (l.disabled) {
            d.addClass("dis")
        }
        d.data("date", p[0]);
        d.data("week", p[1]);
        d.data("disabledPeriod", l.disabledPeriods);
        h.push(d)
    }
    c.click(function() {
        var i = $(this);
        if (i.hasClass("open")) {
            hideDataPicker()
        } else {
            hideDataPicker();
            i.addClass("open");
            o.show();
            scrollDeliveryPanel(o);
            loadDeliveryTime(j, o)
        }
    });
    if (b.commonDeliveryEnabled) {
        $.each(h, function() {
            var i = $(this);
            i.click(function() {
                if (i.hasClass("dis")) {
                    return
                }
                var q = buildDeliveryPeriodGroup(i, j);
                $("div.sel2", o).remove();
                o.children().not(":first").remove();
                o.append(q);
                scrollDeliveryPanel(q)
            })
        })
    }
    panelHover(a);
    if (k) {
        k.click(function() {
            c.removeClass("open").find("span").html("任意日期<em>（普通快递）</em>");
            hideDataPicker();
            saveOrderDelivery({deliveryMethodId: "10001", receiverDate: "", receiverPeriod: "", orderMark: j});
            gotracker("2", "deliveryTypeNormal", null)
        })
    }
    if (n) {
        n.click(function() {
            c.removeClass("open").find("span").html("工作日送<em>（免费） </em>");
            hideDataPicker();
            saveOrderDelivery({deliveryMethodId: "10003", receiverDate: "", receiverPeriod: "", orderMark: j});
            gotracker("2", "deliveryTypeWeekday", null)
        })
    }
    if (m) {
        m.click(function() {
            c.removeClass("open").find("span").html("周末送货<em>（免费） </em> ");
            hideDataPicker();
            saveOrderDelivery({deliveryMethodId: "10004", receiverDate: "", receiverPeriod: "", orderMark: j});
            gotracker("2", "deliveryTypeWeekend", null)
        })
    }
    if (!b.commonDeliveryEnabled && h && h.length > 0) {
        $.each(h, function() {
            var i = $(this);
            i.click(function() {
                if (!i.hasClass("dis")) {
                    saveTimedDelivery({date: i.data("date"), period: 0, orderMark: j})
                }
            })
        })
    }
    return true
}
function panelHover(a) {
    a.children().each(function() {
        var b = $(this);
        b.hover(function() {
            if (!b.hasClass("dis")) {
                $(this).addClass("hover")
            }
        }, function() {
            if (!b.hasClass("dis")) {
                $(this).removeClass("hover")
            }
        }).click(function() {
            if (!b.hasClass("dis")) {
                $(this).addClass("cur").siblings().removeClass("cur")
            }
        })
    })
}
function loadDeliveryTime(e, i) {
    if ($(".sel2", i).size() > 0) {
        return
    }
    var f = getSelectedDeliveryByOrderMark(e);
    var c = getTimedDeliveryByOrderMark(e);
    if (f.deliveryMethodId != 10005) {
        i.find("div.sel1").find("ul>li.t").not(".dis").first().click();
        i.find("div.sel2").find("ul>li").filter(function() {
            return $.trim($(this).text()) != "任意时段"
        }).first().click()
    } else {
        var b = supportDeliverys(e);
        var h = i.find("div.sel1").find("ul>li.t").not(".dis").filter(function() {
            return $("span", this).text() == f.receiverDateDesc
        });
        if (!b.commonDeliveryEnabled) {
            h.addClass("cur");
            return
        } else {
            h.click()
        }
        var a = getPeriodGroupById(c.deliveryPeriodGroup, f.receiverPeriod);
        var k = i.find("div.sel2").find("ul>li").filter(function() {
            return a && $(this).text() == a.startTime
        });
        if (k) {
            k.click();
            var g;
            for (var d = 0; d < a.deliveryPeriods.length; d++) {
                if (a.deliveryPeriods[d].id == f.receiverPeriod) {
                    g = a.deliveryPeriods[d].endTime + "¥" + a.deliveryPeriods[d].fee
                }
            }
            i.find("div.sel3").find("ul>li").filter(function() {
                return g == $(this).text() && !$(this).hasClass("dis")
            }).addClass("cur")
        }
    }
}
function getPeriodGroupById(d, e) {
    for (var c = 0;
            d && c < d.length; c++) {
        var b = d[c];
        if (b.id == e) {
            return d[c]
        }
        for (var a = 0; a < b.deliveryPeriods.length; a++) {
            if (b.deliveryPeriods[a].id == e) {
                return d[c]
            }
        }
    }
    return null
}
function buildDeliveryPeriodGroup(l, h) {
    var m = $('<div class="sel_list sel2 sel_list2"/>').css("display", "block");
    var d = $('<i class="icon clock"/>').appendTo(m).wrap('<div class="timeto"/>').wrap('<div class="timecon"/>').before("开始于");
    var b = $("<ul/>").appendTo(m).wrap('<div class="ul_box scroll-pane"/>');
    var n = new Array();
    var r = l.data("disabledPeriod");
    deliveryPeriodGroup = getTimedDeliveryByOrderMark(h).deliveryPeriodGroup;
    for (var g = 0; g < deliveryPeriodGroup.length; g++) {
        var q = deliveryPeriodGroup[g];
        var p = true;
        var o;
        var c = new Array();
        for (var f = 0; r && f < r.length; f++) {
            var e = r[f];
            if (e.periodGroupId == q.id) {
                if (e.periodGroupId == 0 || e.disabled) {
                    p = false
                }
                c = e.periodIdList;
                break
            }
        }
        var k = q.id == 0;
        var a = $("<li/>").html(k ? '任意时段<i class="icon free"></i>' : q.startTime).appendTo(b);
        if (!p) {
            a.addClass("dis")
        }
        a.data("group", q);
        a.data("unsupportPeriodId", c);
        n.push(a)
    }
    panelHover(b);
    $.each(n, function() {
        var i = $(this);
        i.click(function() {
            var s = i.data("group");
            if (i.hasClass("dis")) {
                return
            }
            d.html(s.startTime);
            if (s.id == 0) {
                saveTimedDelivery({date: l.data("date"), period: 0, orderMark: h})
            } else {
                var j = buildDeliveryPeriod(l, i, h);
                m.next().remove();
                j.insertAfter(m);
                scrollDeliveryPanel(j)
            }
        })
    });
    return m
}
function buildDeliveryPeriod(j, a, g) {
    var m = $('<div class="sel_list sel3 sel_list2"/>');
    var h = $('<i class="icon clock"/>').appendTo(m).wrap('<div class="timeto"/>').wrap('<div class="timecon"/>').before("至");
    var b = $("<ul/>").appendTo(m).wrap('<div class="ul_box scroll-pane"/>');
    var k = new Array();
    var n = a.data("group");
    var c = a.data("unsupportPeriodId");
    for (var f = 0; f < n.deliveryPeriods.length; f++) {
        var l = n.deliveryPeriods[f];
        var d = $("<li/>").append(l.endTime).append('<i class="price_icon">¥' + l.fee + "</i>").appendTo(b);
        var e = j.data("date").substr(8, 2);
        if ($.inArray(l.id, c) > -1) {
            d.addClass("dis")
        }
        d.data("period", l);
        k.push(d)
    }
    panelHover(b);
    $.each(k, function() {
        var i = $(this);
        if (i.hasClass("dis")) {
            return
        }
        i.click(function() {
            var o = i.data("period");
            h.html(o.endTime);
            saveTimedDelivery({date: j.data("date"), period: o.id, orderMark: g, onTimeFee: o.fee})
        })
    });
    return m
}
function saveTimedDelivery(b) {
    var a = $('div.timedDelivery_btn_input[ordermark="' + b.orderMark + '"]');
    a.removeClass("open");
    hideDataPicker();
    saveOrderDelivery({deliveryMethodId: "10005", receiverDate: b.date, receiverPeriod: b.period, orderMark: b.orderMark, onTimeFee: b.onTimeFee});
    if (b.id == 0) {
        gotracker("2", "deliveryTypeReserved", null)
    } else {
        gotracker("2", "deliveryTypeOntime", null)
    }
}
function remarkFun() {
    $(".remarkInput").focus(function() {
        var b = $(this).val(), a = $(this).attr("msg");
        if (b == a) {
            $(this).val("")
        }
        $(this).css("color", "#333")
    }).blur(function() {
        var b = $(this).val(), a = $(this).attr("msg");
        if (b == a || !b.replace(/\s+/g, "").length) {
            $(this).val(a)
        }
        $(this).css("color", "#999")
    }).change(function() {
        gotracker("2", "deliveryRemark", null);
        var b = $(this).attr("ordermark");
        if (hasInvalidChars($(this).val())) {
            alert("提示：备注中请不要输入特殊字符");
            $(this).focus();
            return false
        }
        var a = getSelectedDeliveryByOrderMark(b);
        if (!a) {
            alert("包裹信息出错")
        } else {
            saveOrderDelivery({deliveryMethodId: a.deliveryMethodId, receiverDate: a.receiverDate ? a.receiverDate : "", receiverPeriod: a.receiverPeriod, orderMark: b})
        }
    });
    $(".remark>p").click(function() {
        var a = $(this);
        setTimeout(function() {
            a.children(":radio").prop("checked", true)
        });
        return false
    })
}
function getSelectedDeliveryByOrderMark(e) {
    var b = globalOrder.merchantList.merchants;
    for (var a = 0; a < b.length; a++) {
        var g = b[a];
        for (var h = 0; h < g.deliveryGroups.length; h++) {
            var c = g.deliveryGroups[h];
            for (var f = 0; f < c.packages.length; f++) {
                if (c.packages[f].orderMark == e) {
                    return c.packages[f].selectedDelivery
                }
            }
        }
    }
    return null
}
function getDeliveryGroupByOrderMark(e) {
    var b = globalOrder.merchantList.merchants;
    for (var a = 0; a < b.length; a++) {
        var g = b[a];
        for (var h = 0; h < g.deliveryGroups.length; h++) {
            var c = g.deliveryGroups[h];
            for (var f = 0; f < c.packages.length; f++) {
                if (c.packages[f].orderMark == e) {
                    return c
                }
            }
        }
    }
    return null
}
function getMerchantByOrderMark(e) {
    var b = globalOrder.merchantList.merchants;
    for (var a = 0; a < b.length; a++) {
        var g = b[a];
        for (var h = 0;
                h < g.deliveryGroups.length; h++) {
            var c = g.deliveryGroups[h];
            for (var f = 0; f < c.packages.length; f++) {
                if (c.packages[f].orderMark == e) {
                    return g
                }
            }
        }
    }
    return null
}
function getPackageByOrderMark(e) {
    var b = globalOrder.merchantList.merchants;
    for (var a = 0; a < b.length; a++) {
        var g = b[a];
        for (var h = 0; h < g.deliveryGroups.length; h++) {
            var c = g.deliveryGroups[h];
            for (var f = 0; f < c.packages.length; f++) {
                if (c.packages[f].orderMark == e) {
                    return c.packages[f]
                }
            }
        }
    }
    return null
}
function getTimedDeliveryByOrderMark(a) {
    var b = getPackageByOrderMark(a);
    var c = $(b.supportedDeliverys).filter(function() {
        return this.id == 10005
    }).get(0);
    return c
}
function showDeliveryFeeReference() {
    yhdLib.popwin({poptitle: "配送说明", popcontent: ".deliSumDescript"})
}
function hidePopDiv(d) {
    var b = $("#deliveryUI .showInfoOrder");
    var d = d || window.event;
    var c = d.target || d.srcElement;
    if ($(c).parents(".mod_selectDate").length == 0) {
        var f = $(this);
        $("div.timedDelivery_btn_input", b).removeClass("open");
        $("div.sel_list_box", b).hide(100)
    }
    var a = $(".DeliveryInfoBox", b);
    if ($(c).parents(".DeliveryInfoBox").length == 0) {
        a.parents("td").removeClass("cur")
    }
}
function scrollDeliveryPanel(a) {
    $(".scroll-pane", a).jScrollPane();
    var b;
    if (a.hasClass("sel_list")) {
        b = a
    } else {
        b = $(".sel_list", a)
    }
    b.find(".jspVerticalBar").hide();
    b.bind({mouseenter: function() {
            $(this).find(".jspVerticalBar").show(300)
        }, mouseleave: function() {
            $(this).find(".jspVerticalBar").hide(300)
        }})
}
function showPhoneNoPrice(a) {
    if (isNewContractPhone()) {
        var b = globalOrder.contractInfoDisplayVo;
        if (b.phoneNoPrice && b.phoneNoPrice > 0) {
            if (a == b.simProductId) {
                return"(包含靓号费用" + b.phoneNoPrice + "元)"
            }
        }
    }
    return""
}
function getHaiGouFlag() {
    return globalOrder.haigouFlag
}
;
$(function() {
    $("#saveOrderPayment").click(function() {
        saveOrderPayment();
        return false
    })
});
var amountNeedToPayTemp = 0;
function updateConfirmPaymentStatus() {
    confirmStatues.isConfirmPayment = false;
    var a = jQuery("input[name='payment']:checked");
    if (a.size() == 1) {
        if (a.attr("methodtype") == 1) {
            var b = getSelectedGatewayId();
            if (!b || b == "-1") {
            } else {
                confirmStatues.isConfirmPayment = true
            }
        } else {
            confirmStatues.isConfirmPayment = true
        }
    }
}
function clearPaymentRadio() {
    jQuery("input[name='pay_bank_radio']").prop("checked", null);
    $("label.cur", "#inputUI_payment > #pNet").removeClass("cur");
    jQuery("input[name='payment']").prop("checked", null)
}
function showPaymentEditLayout(c) {
    jQuery("#paymentDisplayLayout").hide();
    var b = jQuery("#coupon_payment");
    var a = jQuery("#account_payment");
    var d = jQuery("#inputUI_payment");
    d.show();
    if (c.paymentCoupon && c.paymentCoupon != null && globalOrder.haigouFlag != 1) {
        b.show();
        b.setParam("jTypeOf", jTypeOf);
        b.processTemplate(c.paymentCoupon);
        showOnTimeFeeCouponNotice();
        couponFacade.load()
    }
    if (c.paymentAccount && c.paymentAccount != null && globalOrder.haigouFlag != 1) {
        a.show();
        a.setParam("getConfig", getConfig);
        a.setParam("getContainCard", getContainCard);
        a.setParam("getIsOrderContainPreSellProduct", getIsOrderContainPreSellProduct);
        a.setParam("getIsContainBookdPreSellProduct", getIsContainBookdPreSellProduct);
        a.setParam("getPaidByCashAccount", getPaidByCashAccount);
        a.processTemplate(c.paymentAccount);
        refreshAccountPaymentDisplay({showCardAmount: c.paymentAccount.useableCardAmount > 0, showCashAmount: c.paymentAccount.useableCashAmount > 0})
    }
    d.setParam("getProduct", getProduct);
    d.setParam("getMulProdQuantity", getMulProdQuantity);
    d.setParam("getConfig", getConfig);
    d.setParam("getContain1mallProduct", getContain1mallProduct);
    d.processTemplate(c);
    updatePaymentEditLayout(c.selectedPayment);
    registerPayment();
    if (c.paymentAccount && c.paymentAccount != null) {
        if (jQuery("#radio_money").attr("disabled") && jQuery("#radio_pos").attr("disabled") && c.selectedPayment.amountNeed2Pay > 0 && $("#inputUI_payment > .radio_select > input:radio:checked").length == 0 && c.paymentAccount.useableAmount <= 0) {
            $("#pNet").trigger("click")
        }
    }
}
function showPaymentNotEditableLayout() {
    jQuery("#paymentDisplayLayout").show();
    jQuery("#coupon_payment").hide();
    jQuery("#account_payment").hide();
    jQuery("#inputUI_payment").hide();
    if (!confirmStatues.isConfirmInvoice) {
        jQuery("#InvoiceDisplayDiv").html('请先确认"支付信息"')
    }
}
function getConfig(expression) {
    return eval("(" + expression + ")")
}
var save_click = false;
function saveOrderPayment() {
    if (!validatePaymentMethod()) {
        return false
    }
    var b = "/checkoutV3/payment/savePayment.do";
    var c = {paymentMethodID: jQuery("input[name='payment']:checked").attr("methodid"), rd: Math.random()};
    if (save_click) {
        return
    } else {
        save_click = true
    }
    gUseFed.load({box: "#inputUI_payment"});
    jQuery.post(b, c, a);
    gotracker("2", "doSavePaymentButton{paymentMethodID:" + c.paymentMethodID + ",paymentGatewayID:" + c.paymentGatewayID + "}", null);
    function a(d) {
        save_click = false;
        gUseFed.removeLoad();
        saveInforLoading("ok", "#saveOrderPayment");
        if (!isAppearError(d)) {
            globalRender(d);
            refeshstatistics()
        } else {
            showPaymentNotEditableLayout();
            jQuery("#paymentUI>h2>span").addClass("none");
            if (globalOrder.paymentList.selectedPayment.payment) {
                globalOrder.paymentList.selectedPayment.payment = null
            }
            if (globalOrder.paymentList.selectedPayment.selectedBank) {
                globalOrder.paymentList.selectedPayment.selectedBank = null
            }
            clearPaymentRadio()
        }
    }}
function validatePaymentMethod() {
    if (globalOrder.paymentList != null && globalOrder.paymentList.selectedPayment != null && globalOrder.paymentList.selectedPayment.amountNeed2Pay != null && globalOrder.paymentList.selectedPayment.amountNeed2Pay == 0) {
        return true
    }
    var a = jQuery("input[name='payment']:checked");
    if (a.size() != 1) {
        submitTip("请选择付款方式");
        return false
    }
    return true
}
function registerPayment() {
    $("#inputUI_payment > .radio_select").unbind("click").bind("click", function() {
        var c = $(this), a = $(this).attr("id"), b = $(this).attr("class");
        if ((/not_support/g.test(b))) {
            return false
        }
        c.children("input:radio").prop("checked", "checked");
        setTimeout(function() {
            c.children("input:radio").prop("checked", "checked")
        }, 0);
        saveOrderPayment();
        return false
    });
    $("#pSand,#pCod,#pPos,#pNet,#pBank,#pAlipay").hover(function() {
        $(this).addClass("on_hover")
    }, function() {
        $(this).removeClass("on_hover")
    });
    $("em", ".text_sorry").hover(function() {
        $(this).parent().addClass("product_on_hover");
        $(this).next(".product_win").css({display: "block"});
        $(this).addClass("on_hover")
    }, function() {
        $(this).next(".product_win").hide();
        $(this).parent().removeClass("product_on_hover");
        $(this).removeClass("on_hover")
    });
    $(".region", ".text_sorry").hover(function() {
        $(this).parent().css({position: "relative", zIndex: 3});
        $(this).children("span").show()
    }, function() {
        $(this).children("span").hide();
        $(this).parent().removeAttr("style")
    });
    $(".product_win", ".text_sorry").hover(function() {
        $(this).css({display: "block"});
        $(this).prev("em").addClass("on_hover");
        $(this).parent().addClass("product_on_hover")
    }, function() {
        $(this).hide();
        $(this).prev("em").removeClass("on_hover");
        $(this).parent().removeClass("product_on_hover")
    });
    $("#inputUI_payment > .radio_select > input:radio:checked").parent().addClass("on_click").siblings().removeClass("on_click")
}
function refreshPayment() {
    var c = ".btSubOrder1";
    var a = "noOrderSubmit1";
    if (confirmStatues.isConfirmPayment) {
        jQuery(c).removeClass(a)
    } else {
        jQuery(c).addClass(a);
        var b = "payInfo_modify";
        showPaymentEditLayout(globalOrder.paymentList);
        confirmStatues.isConfirmReceiver = true;
        confirmStatues.isConfirmDelivery = true;
        confirmStatues.isConfirmInvoice = true;
        confirmStatues.isConfirmPayment = false;
        gotracker("2", b, null);
        if (newUser) {
            jQuery("#paymentUI").addClass("firstComeIn")
        }
    }
}
function refreshCouponPaymentDisplay(a) {
    if (a) {
        $("#coupon_payment>p").addClass("cur").nextAll().not("#qtPopdyq,.none,#lpk").css("display", "block")
    }
}
function refreshAccountPaymentDisplay(a) {
    if (a) {
        if (globalOrder.isContainPreSellProduct) {
            return
        }
        if (a.showCardAmount && !getContainCard()) {
            refreshCardAccountDisplay()
        }
        if (a.showCashAmount) {
            refreshCashAccountDisplay()
        }
    }
}
function refreshCardAccountDisplay() {
    if (!globalOrder.isContainPreSellProduct) {
        if (typeof ($("#paidByCardAccount").attr("confirmed")) == "undefined" || $("#paidByCardAccount").attr("confirmed") == "false") {
            $("#zh_card").show();
            $("#lpkDisplay").hide()
        } else {
            $("#zh_card").hide();
            $("#lpkDisplay").show()
        }
    } else {
        $("#zh_card").show();
        $("#lpkDisplay").hide()
    }
    return false
}
function refreshCashAccountDisplay() {
    if (!globalOrder.isContainPreSellProduct) {
        if (typeof ($("#paidByCashAccount").attr("confirmed")) == "undefined" || $("#paidByCashAccount").attr("confirmed") == "false") {
            $("#zh").show();
            $("#zhDisplay").hide()
        } else {
            $("#zh").hide();
            $("#zhDisplay").show()
        }
    } else {
        $("#zh").show();
        $("#zhDisplay").hide()
    }
    return false
}
function savePaidByAccount(e, d, g) {
    var h = g == "card" ? "#paidByCardAccount" : "#paidByCashAccount";
    var b = jQuery(h).val().trim();
    if (b == "") {
        submitTip("请输入账户支付金额");
        jQuery(h).val("");
        jQuery(h).focus();
        return false
    }
    if (!b.match(/^\d+\.?\d*$/g)) {
        submitTip("请输入有效金额");
        jQuery(h).val("");
        jQuery(h).focus();
        return false
    }
    if (!b.match(/^\d+\.?\d{0,2}$/g)) {
        submitTip("输入的数值须在两位小数点以内");
        jQuery(h).focus();
        return false
    }
    var j = parseFloat(b);
    if (j <= 0) {
        if (g == "card") {
            if (globalOrder != null && globalOrder.paymentList != null && globalOrder.paymentList.paymentAccount != null && globalOrder.paymentList.paymentAccount.paidByCard != null && globalOrder.paymentList.paymentAccount.paidByCard > 0) {
            } else {
                submitTip("请输入有效金额");
                jQuery(h).focus();
                return false
            }
        } else {
            if (globalOrder != null && globalOrder.paymentList != null && globalOrder.paymentList.paymentAccount != null && getPaidByCashAccount(globalOrder.paymentList.paymentAccount) > 0) {
            } else {
                submitTip("请输入有效金额");
                jQuery(h).focus();
                return false
            }
        }
    }
    if (j > e) {
        submitTip("您的账户可用余额不足");
        jQuery(h).focus();
        return false
    }
    var a = d;
    if (amountNeedToPayTemp > d) {
        a = amountNeedToPayTemp
    }
    if (j > a) {
        submitTip("输入的账号支付金额(" + j + ")不能大于应付金额(" + a + ").");
        jQuery("#payByAccount").focus();
        return false
    }
    var f = "/checkoutV3/payment/sendAccountVerifyCode.do";
    var i = "amount=" + b;
    jQuery.post(f, i, c);
    function c(k) {
        if (isAppearError(k)) {
            return
        }
        var l = k.accountSmsSendResult;
        if (l.code == 1 || l.code == 3 || l.code == 4) {
            smsValidate.init({sendSmsWhenInit: false});
            smsValidate.sendSms(function() {
                var n = "/checkoutV3/payment/sendAccountVerifyCode.do";
                var m = "amount=" + b;
                jQuery.post(n, m, function(o) {
                    if (!isAppearError(o)) {
                        var p = o.accountSmsSendResult;
                        if (p.code == 4) {
                            alert("请稍后!每次发送间隔不能小于一分钟。")
                        }
                    }
                });
                gotracker("2", "sendSMS", null)
            }, function() {
                gotracker("2", "submitSMS", null);
                submitPaidByAccount(1, g)
            }, function() {
                gotracker("2", "submitSMS_Bind", null);
                submitPaidByAccount(0, g)
            })
        } else {
            if (l.code == 2) {
                submitPaidByAccount(0, g)
            }
        }
    }}
function submitPaidByAccount(c, d) {
    var b = d == "card" ? "#paidByCardAccount" : "#paidByCashAccount";
    var e = $("#validCode_popWin").val();
    if ((jQuery.trim(e) == "" || jQuery.trim(e) == "效验码是6位数字") && c != "0") {
        jQuery("#mobileValidError").show().html("请输入验证码");
        return
    }
    var h = jQuery(b).val().trim();
    var a = "amount=" + h + "&vaildCode=" + e + "&accountType=" + d;
    var f = "/checkoutV3/payment/savePaybyAccount.do";
    gUseFed.load({box: "#account_payment"});
    jQuery.post(f, a, g);
    function g(i) {
        gUseFed.removeLoad();
        if (isAppearError(i)) {
            return
        }
        showPaymentNotEditableLayout();
        globalRender(i);
        yhdLib.popclose()
    }}
function getPaidByCashAccount(a) {
    return parseFloat(a.paidByAccount + a.paidByRebate).toFixed(2)
}
function showPaidByAccountButton(a) {
    if (a == "card") {
        jQuery("#zh_card").show();
        jQuery("#lpkDisplay>a").hide()
    } else {
        jQuery("#zh").show();
        jQuery("#zhDisplay>a").hide()
    }
}
function hidePaidByAccountButton(a) {
    if (a == "card") {
        jQuery("#zh_card").hide();
        jQuery("#lpkDisplay>a").show()
    } else {
        jQuery("#zh").hide();
        jQuery("#zhDisplay>a").show()
    }
}
function updatePaymentEditLayout(c) {
    if (c.amountNeed2Pay == 0) {
        jQuery("#inputUI_payment").hide();
        var b = jQuery("#fully_paid");
        b.show();
        b.children("p").text("已使用" + a(c) + "支付订单")
    } else {
        jQuery("#inputUI_payment").show();
        jQuery("#fully_paid").hide()
    }
    function a(d) {
        var e = "";
        if (d.paidByCoupon > 0) {
            e = "抵用券"
        }
        if (d.paidByDeliveryFeeCoupon > 0) {
            e += (e ? "+" : "") + "免邮券"
        }
        if (d.paidByCardAccount > 0) {
            e += (e ? "+" : "") + "礼品卡账户余额"
        }
        if (d.paidByCashAccount > 0) {
            e += (e ? "+" : "") + "现金账户余额"
        }
        return e
    }}
function popNetPayHelp() {
    jQuery("#temp").load("/checkoutV3/payment/netPayHelp.do", {}, function() {
        yhdLib.popwin({poptitle: "银行支付限额", popcontent: ".payCountPop", mask: 1})
    })
}
function popGiftcard() {
    var a = "/checkoutV3/payment/getUserGiftCard.do";
    var b = {};
    jQuery.ajax({type: "get", async: false, url: a, data: b, success: function(e) {
            if (typeof (e) != "string") {
                if (isAppearError(e)) {
                    return
                }
            }
            jQuery(".rechange_pop").html(e);
            yhdLib.popwin({poptitle: "为账户激活充值", popcontent: ".rechange_pop", fun: ["rechageConfig"], mask: 1});
            d(jQuery(".popGeneral .rechangeP .Inputtext"));
            jQuery(".popGeneral .rechangeP button[class=bt_yt2]").click(function() {
                jQuery(".popGeneral span[id=rechargePrompt]").html("");
                var h = jQuery(".msgSmall > span", ".popGeneral");
                h.text("").parent().hide();
                var i = jQuery.trim(jQuery(".popGeneral input[class=Inputtext]").val());
                var f = jQuery.trim(jQuery(".popGeneral input[class=Inputtext]").attr("promptValue"));
                if (i == f || !i || i == "") {
                    h.text("卡密不能为空，请重新输入！").parent().show();
                    return
                }
                if ((/[\u4e00-\u9fa5]+/g).test(i)) {
                    h.text("卡密错误，请重新输入！").parent().show();
                    return
                }
                var g = URLPrefix.b2beam + "/gift-cards/checkUserInputPassCode.do?password=" + i + "&callback=?";
                jQuery.getJSON(g, function(k) {
                    if (k.result == 1) {
                        var j = URLPrefix.b2beam + "/gift-cards/remoteUsePassCodeRecharge.do?password=" + i + "&callback=?";
                        jQuery.getJSON(j, function(m) {
                            var l = m.result;
                            if (l.code == 1) {
                                h.text("卡密不能为空，请重新输入！").parent().show()
                            } else {
                                if (l.code == 2) {
                                    h.text("您一天之内填写激活充值密码错误超过十次！").parent().show()
                                } else {
                                    if (l.code == 3) {
                                        h.text("卡不存在！").parent().show()
                                    } else {
                                        if (l.code == 4) {
                                            jQuery(".popGeneral span[id=rechargePrompt]").html("激活成功　金额<b>¥" + l.amount + "</b>");
                                            refeshAccount();
                                            gotracker("2", "useCardSuccess", null);
                                            jQuery(".popGeneral .Inputtext").val("")
                                        } else {
                                            if (l.code == 9) {
                                                h.text("您使用的是电子卡密码激活充值，但电子礼品卡订单还没有支付！").parent().show()
                                            } else {
                                                if (l.code == 12) {
                                                    h.text("礼品卡尚未被激活，请重新输入！").parent().show()
                                                } else {
                                                    if (l.code == 14) {
                                                        h.text("礼品卡已经被激活充值，请重新输入！").parent().show()
                                                    } else {
                                                        if (l.code == 20) {
                                                            h.text("卡密已被使用，请重新输入！").parent().show()
                                                        } else {
                                                            h.text("网络错误！").parent().show()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    } else {
                        if (k.result == 21) {
                            alert("请先绑定手机");
                            window.location.href = URLPrefix.my + "/member/bind/bind.do"
                        } else {
                            h.text("卡密错误，请重新输入！").parent().show()
                        }
                    }
                })
            });
            jQuery(".popGeneral .configRechage button[class=bt_yt2]").click(function() {
                var g = jQuery(this).attr("cardId");
                var f = URLPrefix.b2beam + "/gift-cards/remoteUseCardIdRecharge.do?cardId=" + g + "&callback=?";
                jQuery.getJSON(f, function(j) {
                    var i = jQuery(".rechangedHad > b", ".popGeneral");
                    var h = j.result;
                    if (h == 1) {
                        jQuery(".popGeneral .configRechage").hide();
                        alert("激活充值数据有误!")
                    } else {
                        if (h == 2) {
                            jQuery(".popGeneral td input[value=" + g + "]").parent("td").parent("tr").find("td").eq(3).find("button").html("已激活").unbind().attr("class", "bt_wt3");
                            refeshAccount();
                            gotracker("2", "useCardSuccess", null);
                            jQuery(".popGeneral .configRechage").hide();
                            i.text("激活充值成功！").parent().show()
                        } else {
                            if (h == 3) {
                                jQuery(".popGeneral .configRechage").hide();
                                i.text("没有支付！").parent().show()
                            } else {
                                if (h == 10) {
                                    jQuery(".popGeneral .configRechage").hide();
                                    i.text("返回数据已经作废！").parent().show()
                                } else {
                                    if (h == 20) {
                                        jQuery(".popGeneral .configRechage").hide();
                                        i.text("该礼品卡已被激活充值！").parent().show()
                                    } else {
                                        if (j.result == 21) {
                                            alert("请先绑定手机");
                                            window.location.href = URLPrefix.my + "/member/bind/bind.do"
                                        } else {
                                            jQuery(".popGeneral .configRechage").hide();
                                            i.text("网络错误！").parent().show()
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            })
        }});
    function d(e) {
        e.each(function() {
            var f = $(this).attr("promptValue").trim();
            if ($(this).val().trim() == "") {
                $(this).val($(this).attr("promptValue").trim()).css("color", "#ccc")
            } else {
                if ($(this).val().trim() != $(this).attr("promptValue").trim()) {
                    $(this).css("color", "#333333")
                }
            }
            $(this).focus(function() {
                $(this).css("color", "#333333");
                if ($(this).val().trim() == f) {
                    $(this).val("")
                }
            }).blur(function() {
                if ($(this).val().trim() == "") {
                    $(this).val(f).css("color", "#ccc")
                }
            })
        })
    }
    function c(e) {
        e.each(function() {
            var f = $(this).attr("promptValue").trim();
            if ($(this).val().trim() == f) {
                $(this).val("").css("color", "#666")
            }
        })
    }}
function refeshAccount() {
    var a = "/checkoutV3/payment/refeshAccount.do";
    jQuery.post(a, {rd: Math.random()}, function(b) {
        if (globalOrder.paymentList == null) {
            globalOrder.paymentList = {}
        }
        globalOrder.paymentList.paymentAccount = b.paymentList.paymentAccount;
        jQuery("#account_payment").processTemplate(b.paymentList.paymentAccount);
        refreshAccountPaymentDisplay({showCardAmount: b.paymentList.paymentAccount.paidByCard > 0 || b.paymentList.paymentAccount.useableCardAmount > 0, showCashAmount: getPaidByCashAccount(b.paymentList.paymentAccount) > 0})
    })
}
function rechageConfig() {
    $("td > button.bt_yt2", ".rechange_pop").click(function() {
        var b = $(this).position().top;
        $(".configRechage").css({top: (b - 76) + "px"}).show();
        var a = jQuery(this).parent("td").parent("tr").find("td").eq(1).find("input").val();
        jQuery(".popGeneral .configRechage button[class=bt_yt2]").attr("cardId", a)
    });
    $(".configRechage > p > button.bt_wt2").click(function() {
        $(this).parents(".configRechage").hide()
    });
    if ($("tr", ".rechange_popcont").length > 16) {
        $(".rechange_popcont").css({height: "244px", overflowY: "scroll"});
        $(".popGeneral").css({top: ($(window).height() - $(".popGeneral").height()) / 2 + "px", marginTop: 0})
    }
    $(".popGeneral .rechangedHad s").click(function() {
        $(this).parents(".rechangedHad").hide()
    })
}
;
var couponFacade = {toggleView: function() {
        $("#coupon_payment .ico_ocVoucher").click(function() {
            $("#vouchers").toggleClass("voucherListHide")
        })
    }, toggleDescDetail: function() {
        $(".speciBrannd").hover(function() {
            $(this).addClass("curSpBrand")
        }, function() {
            $(this).removeClass("curSpBrand")
        })
    }, selectCoupon: function() {
        $("#vouchers input").each(function() {
            var a = $(this);
            var c = a.parents("tr");
            var b = function() {
                if (a.is(":enabled")) {
                    a.prop("checked", !a.is(":checked"));
                    gUseFed.load({box: '#coupon_payment tr[couponnumber="' + c.attr("couponnumber") + '"]'});
                    savePaidByCoupon(c.attr("couponnumber"), a)
                }
            };
            if (a.attr("type") == "radio") {
                if (!a.is(":checked") && !c.hasClass("trdisable")) {
                    a.bind("click", function() {
                        a.prop("checked", !a.is(":checked"));
                        setTimeout(function() {
                            b()
                        }, 5);
                        return false
                    })
                } else {
                    a.bind("click", function() {
                        return false
                    })
                }
            } else {
                a.bind("click", function() {
                    a.prop("checked", !a.is(":checked"));
                    b();
                    return false
                })
            }
            c.bind("click", function() {
                if (!$(this).hasClass("trdisable")) {
                    b()
                }
            });
            $(".speciBrannd").hover(function() {
                c.unbind("click")
            }, function() {
                c.bind("click", b)
            });
            if (a.is(":checked")) {
                c.addClass("addNewVoucherCur");
                c.prev().addClass("addNewVoucherCurTop")
            }
            if (a.is(":disabled")) {
                c.addClass("trdisable")
            }
        })
    }, addCoupon: function() {
        $("#addVoucherBt").bind("click", function() {
            yhdLib.popwin({popcontentstr: $("#couponAddTemplate").html()});
            couponFacade.clearErrorMsg();
            var b = $(".addVoucherBx").filter(":visible");
            $(".closeSTB", b).unbind("click").bind("click", function() {
                yhdLib.popclose()
            });
            var a = $("#couponNumberInput", b);
            a.unbind("focus").bind("focus", function() {
                var e = $(this), d = e.attr("msg"), c = e.val();
                if (c == d) {
                    e.val("").css("color", "#333")
                }
            }).unbind("blur").bind("blur", function() {
                var e = $(this), d = e.attr("msg"), c = e.val();
                if (c == "") {
                    e.val(d).css("color", "")
                }
            });
            $("#addCouponBtn", b).click(function() {
                couponFacade.clearErrorMsg();
                if (!checkCouponNumber(a)) {
                    return false
                }
                var c = $("<input/>").prop("checked", true);
                savePaidByCoupon(a.val(), c)
            })
        })
    }, showErrorMsg: function(a) {
        if ($("#addVoucherBx .errorMsg").is(":visible")) {
            $("#addVoucherBx .errorMsg").html("<s></s>" + a)
        } else {
            popChekcoutErrorWithoutProduct(a)
        }
    }, clearErrorMsg: function(a) {
        if ($("#addVoucherBx .errorMsg").is(":visible")) {
            $("#addVoucherBx .errorMsg").empty()
        }
    }, load: function() {
        this.toggleView();
        this.toggleDescDetail();
        this.selectCoupon();
        this.addCoupon()
    }};
function checkCouponNumber(b) {
    var a = b.val() == b.attr("msg") ? "" : b.val();
    if (!a) {
        couponFacade.showErrorMsg("请输入要使用的抵用券号码。");
        b.focus();
        return false
    }
    var c = new RegExp("^\\w{1,20}$");
    if (!c.test(a)) {
        couponFacade.showErrorMsg("您输入的抵用券号码格式不正确，请重新输入。");
        b.focus();
        return false
    }
    return true
}
var currentCouponNumber;
function savePaidByCoupon(b, a) {
    var d = a.is(":checked");
    currentCouponNumber = b;
    var c;
    if (d) {
        c = "/checkoutV3/payment/addCoupon.do"
    } else {
        c = "/checkoutV3/payment/removeCoupon.do"
    }
    var e = "couponNumber=" + b;
    $.post(c + "?" + Math.random(), e, function(f) {
        gUseFed.removeLoad();
        if (!isAppearError(f)) {
            globalRender(f);
            if ($("#addVoucherBx .errorMsg").is(":visible")) {
                yhdLib.popclose();
                yhdLib.popwin({popcontentstr: '<div class="addressMsg editMsg none" id="voucherAddMsg"><s class="opacityBg" style="opacity: 0.5;"></s><div class="msgCont"><p><span class="ok"></span>已添加并使用该抵用券。</p></div></div>'});
                $(".popGeneral").addClass("popAddToucherOk");
                $(window).trigger("resize");
                setTimeout(function() {
                    yhdLib.popclose()
                }, 2000)
            }
            if (d) {
                jQuery("#DeliveryDisplayDiv .freeTips").hide()
            }
        } else {
            if (d) {
                a.prop("checked", false)
            } else {
                a.prop("checked", true)
            }
        }
    })
}
function jTypeOf(a) {
    return typeof a
}
function couponSendSms(e, d) {
    var c = "/checkoutV3/payment/sendCouponSms.do?" + Math.random();
    var b = "type=" + e;
    jQuery.post(c, b, function(i) {
        if (isAppearError(i)) {
            return
        }
        var g = i.couponSmsSendResult;
        if (g.code == 1) {
            alert("提示：需要接收短信验证码的手机号码不存在，请刷新页面后重试")
        } else {
            if (g.code == 2) {
                smsValidate.bindPhone()
            } else {
                isAccountBind = e == "accountBind";
                var f = "";
                if (!isAccountBind) {
                    d = d + "";
                    f = "该抵用券需用手机<b>" + d.substr(0, 4) + "*****" + d.substr(9, 2) + "</b>进行验证，请获取短信验证码"
                }
                var h = "";
                if (g.code == 4) {
                    h = "提示：您当前账户一天只能验证3次，请明天再试"
                } else {
                    if (g.code == 5) {
                        h = "提示：您的手机号码一天只能验证3次，请明天再试"
                    }
                }
                smsValidate.init({sendSmsWhenInit: false, isAccountBind: isAccountBind, smsSendInfo: f, errorMsgWhenInit: h});
                smsValidate.sendSms(function() {
                    var k = "/checkoutV3/payment/sendCouponSms.do?" + Math.random();
                    var j = "type=" + e;
                    jQuery.post(k, j, function(l) {
                        if (!isAppearError(l)) {
                            a(l.couponSmsSendResult.code)
                        }
                    });
                    gotracker("2", "sendCouponSMS", null)
                }, function() {
                    verifyCouponSms();
                    gotracker("2", "submitCouponSMS", null)
                })
            }
        }
    });
    function a(f) {
        if (f == 3) {
            smsValidate.showErrorMsg("提示：您当前账户一天只能验证3次，请明天再试")
        } else {
            if (f == 4) {
                smsValidate.showErrorMsg("提示：您当前账户一天只能验证3次，请明天再试")
            } else {
                if (f == 5) {
                    smsValidate.showErrorMsg("提示：您的手机号码一天只能验证3次，请明天再试")
                }
            }
        }
    }
    gotracker("2", "sendCouponSMS", null)
}
function verifyCouponSms() {
    var c = "/checkoutV3/payment/verifyCouponSms.do?" + Math.random();
    var a = "couponNumber=" + currentCouponNumber + "&validCode=" + $("#validCode_popWin").val();
    gUseFed.load({box: "#validCode_popWin"});
    jQuery.post(c, a, function(e) {
        gUseFed.removeLoad();
        if (!isAppearError(e)) {
            var d = e.couponSmsVerifyResult.code;
            if (d == 0) {
                yhdLib.popclose();
                globalDto4Test = e;
                globalRender(e)
            } else {
                b(d)
            }
        }
    });
    function b(d) {
        if (d == 1) {
            smsValidate.showErrorMsg("提示：验证码错误，请重新输入")
        } else {
            if (d == 2) {
                smsValidate.showErrorMsg("提示：验证码已失效，需要重新获取验证码")
            } else {
                if (d == 3) {
                    smsValidate.showErrorMsg("提示：验证码输错3次，需要重新获取验证码")
                }
            }
        }
    }}
function v3UserAutoSelectOnTimeCoupon() {
    $("#vouchers input").each(function() {
        var a = $(this);
        var b = a.parents("tr");
        if (a.parents("td").next().children().hasClass("zsd") && a.is(":enabled")) {
            a.prop("checked", !a.is(":checked"));
            gUseFed.load({box: '#coupon_payment tr[couponnumber="' + b.attr("couponnumber") + '"]'});
            savePaidByCoupon(b.attr("couponnumber"), a)
        }
    })
}
function activeCoupon(a) {
    yhdLib.popwin({poptitle: "手机验证", popcontent: ".dyqTc"});
    $(".popGeneral #active_coupon_check").val(a)
}
function verifyCheckCodeHandleActive(a) {
    if (a == null || typeof (a.code) == "undefined") {
        jQuery(".popGeneral small[id=showContent]").html("页面访问错误，请退出后重新访问该页面完成激活。");
        jQuery(".popGeneral .checkCode").val("")
    } else {
        if (a.code == 1) {
            doActiveCoupon()
        } else {
            if (a.data == "1") {
                jQuery(".popGeneral small[id=showContent]").html("您还没有登录，请先登录再试。")
            } else {
                if (a.data == "2") {
                    jQuery(".popGeneral small[id=showContent]").html("您输入的手机验证码不正确，请重新输入。")
                } else {
                    if (a.data == "3") {
                        jQuery(".popGeneral small[id=showContent]").html("同一个用户一天只能验证3次，请您明天再试。")
                    } else {
                        if (a.data == "4") {
                            jQuery(".popGeneral small[id=showContent]").html("同一个手机号一天只能验证3次，请您明天再试。")
                        } else {
                            if (a.data == "5") {
                                jQuery(".popGeneral small[id=showContent]").html("您输入的手机验证码已失效，请重新获取验证码。")
                            } else {
                                jQuery(".popGeneral small[id=showContent]").html("该页面访问错误，请稍后再试。")
                            }
                        }
                    }
                }
            }
            jQuery("#checkCode").val("")
        }
    }
}
function verifyCheckCodeActive() {
    var c = jQuery.trim(jQuery(".popGeneral .verifyMobile").val());
    var a = jQuery.trim(jQuery(".popGeneral .checkCode").val());
    var b = jQuery.trim(jQuery(".popGeneral #active_coupon_check").val());
    if (!checkMobile(c)) {
        return false
    }
    if (a == null || a == "") {
        jQuery(".popGeneral small[id=showContent]").html("您输入的手机验证码不正确，请重新输入。");
        return false
    }
    if (b == null || b == "") {
        jQuery(".popGeneral small[id=showContent]").html("您输入的抵用券激活码不正确，请重新输入。");
        return false
    }
    jQuery.post(URLPrefix.coupon_url + "/SMSVerify/verifyCheckCode.do", {checkCode: a, SMSType: "ActiveCoupon"}, verifyCheckCodeHandleActive)
}
function doActiveCoupon() {
    var a = jQuery.trim(jQuery(".popGeneral .active_coupon_check").val());
    a = a.toUpperCase();
    jQuery.post(URLPrefix.coupon_url + "/coupon/activeCoupon.do", {coupon_number: a}, activeCouponHandle)
}
function getCheckCodeActive() {
    var a = jQuery(".popGeneral .verifyMobile").val();
    if (!checkMobile(a)) {
        return false
    }
    jQuery.post(URLPrefix.coupon_url + "/SMSVerify/getCheckCode.do", {mobile: a, SMSType: "ActiveCoupon"}, getCheckCodeHandleActive)
}
function activeCouponHandle(a) {
    if (a == null || typeof (a.code) == "undefined") {
        jQuery(".popGeneral small[id=showContent]").html("页面访问错误，请退出后重新访问该页面完成激活。");
        jQuery(".popGeneral .checkCode").val("")
    } else {
        if (a.code == 1) {
            if (a.data == "1") {
                var b = $(".popGeneral #active_coupon_check").val();
                yhdLib.popclose();
                savePaidByCoupon(b, $("<input/>").prop("checked", true))
            } else {
                if (a.data == "2") {
                    var b = $(".popGeneral #active_coupon_check").val();
                    yhdLib.popclose();
                    savePaidByCoupon(b, $("<input/>").prop("checked", true))
                } else {
                    jQuery(".popGeneral small[id=showContent]").html("该页面访问错误，请稍后再试！")
                }
            }
        } else {
            if (a.data == "1") {
                jQuery(".popGeneral small[id=showContent]").html("您还没有登录，请先登录再试。")
            } else {
                if (a.data == "2") {
                    jQuery(".popGeneral small[id=showContent]").html("您的手机验证已过期，请您重新获取验证码验证。")
                } else {
                    if (a.data == "3") {
                        jQuery(".popGeneral small[id=showContent]").html("您输入的抵用券激活码不正确，请重新输入。")
                    } else {
                        if (a.data == "4") {
                            jQuery(".popGeneral small[id=showContent]").html("您要激活的抵用券类型错误，请重新输入。")
                        } else {
                            if (a.data == "5") {
                                jQuery(".popGeneral small[id=showContent]").html("您要激活的抵用券是已被激活的，请重新输入。")
                            } else {
                                if (a.data == "6") {
                                    jQuery(".popGeneral small[id=showContent]").html("您要激活的抵用券活动还未开始，请等待活动开始后再来激活。")
                                } else {
                                    if (a.data == "7") {
                                        jQuery(".popGeneral small[id=showContent]").html("您要激活的抵用券活动已结束，敬请期待下次活动。")
                                    } else {
                                        if (a.data == "8") {
                                            jQuery(".popGeneral small[id=showContent]").html("请输入该套券的首张激活码，验证通过后整套券将发放至您的账号中。")
                                        } else {
                                            if (a.data == "9") {
                                                jQuery(".popGeneral small[id=showContent]").html("您的账号已达到本活动激活抵用券的上限 ，敬请期待下次活动 。")
                                            } else {
                                                if (a.data == "10") {
                                                    jQuery(".popGeneral small[id=showContent]").html("您的手机号码已达到本活动激活抵用券的上限 ，敬请期待下次活动 。")
                                                } else {
                                                    if (a.data == "12") {
                                                        jQuery(".popGeneral small[id=showContent]").html("您输入的是抵用券激活码，请至<a href='" + URLPrefix.coupon_url + "/active' target='_blank'>" + URLPrefix.shoping_yhd + "/active</a>完成激活。")
                                                    } else {
                                                        if (a.data == "13") {
                                                            jQuery(".popGeneral small[id=showContent]").html("您输入的是抵用券激活码，请至<a href='" + URLPrefix.coupon_url + "/active' target='_blank'>" + URLPrefix.shoping_yhd + "/active</a>完成激活。")
                                                        } else {
                                                            jQuery(".popGeneral small[id=showContent]").html("该页面访问错误，请稍后再试。")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            jQuery(".popGeneral .checkCode").val("")
        }
    }
}
function getCheckCodeHandleActive(a) {
    if (a == null || typeof (a.code) == "undefined") {
        jQuery(".popGeneral small[id=showContent]").html("页面访问错误，请退出后重新访问该页面完成激活。")
    } else {
        if (a.code == 1) {
            jQuery(".popGeneral small[id=showContent]").html("验证码已经发送到您的手机。")
        } else {
            if (a.data == "1") {
                jQuery(".popGeneral small[id=showContent]").html("您还没有登录，请先登录再试。")
            } else {
                if (a.data == "2") {
                    jQuery(".popGeneral small[id=showContent]").html("您输入的手机号码格式不正确，请重新输入。")
                } else {
                    if (a.data == "3") {
                        jQuery(".popGeneral small[id=showContent]").html("同一个用户一天只能验证3次，请您明天再试。")
                    } else {
                        if (a.data == "4") {
                            jQuery(".popGeneral small[id=showContent]").html("同一个手机号一天只能验证3次，请您明天再试。")
                        } else {
                            if (a.data == "5") {
                                jQuery(".popGeneral small[id=showContent]").html("每次验证需间隔5分钟，请您稍后再试。")
                            } else {
                                jQuery(".popGeneral small[id=showContent]").html("该页面访问错误，请稍后再试。")
                            }
                        }
                    }
                }
            }
        }
    }
}
function checkMobile(a) {
    var b = new RegExp("^1[0-9]{10}$");
    if (!b.test(a)) {
        jQuery(".popGeneral small[id=showContent]").html("您输入的手机号码格式不正确，请重新输入。");
        return false
    }
    return true
}
;
var clickSaveInvoiceBtn = false;
function showInvoiceEditLayout(d) {
    gotracker("2", "showinvoice", null);
    $("#invoiceUI").addClass("beEdit");
    jQuery("#InvoiceEditDiv").setParam("getReceiver", getReceiver);
    jQuery("#InvoiceEditDiv").setParam("getConfig", getConfig);
    jQuery("#InvoiceEditDiv").setParam("getCommonInvoiceContent", getCommonInvoiceContent);
    jQuery("#InvoiceEditDiv").setParam("getContainCard", getContainCard);
    jQuery("#InvoiceEditDiv").setParam("getAllInvoiceRequiredProduct", getAllInvoiceRequiredProduct);
    jQuery("#InvoiceEditDiv").setParam("getUnspportVatProduct", getUnspportVatProduct);
    jQuery("#InvoiceEditDiv").setParam("get1mallProduct", get1mallProduct);
    jQuery("#InvoiceEditDiv").setParam("getContain1mallProduct", getContain1mallProduct);
    jQuery("#InvoiceEditDiv").setParam("getContainYhdProduct", getContainYhdProduct);
    jQuery("#InvoiceEditDiv").setParam("getContainYhdCommProduct", getContainYhdCommProduct);
    jQuery("#InvoiceEditDiv").setParam("getProduct", getProduct);
    d.displayAllProducts = products;
    jQuery("#InvoiceEditDiv").processTemplate(d);
    $("input[name=invoiceContentType]").change(function() {
        var g = jQuery("input[name=invoiceContentType]:checked").val();
        if (g == 1) {
            $("#invoiceContent").addClass("disabled");
            $("#invoiceContent").siblings(".checkForm").css("display", "none");
            $("#needProductDetail").removeAttr("checked");
            $("#needProductDetail").attr("disabled", "disabled")
        } else {
            $("#invoiceContent").removeClass("disabled");
            $("#needProductDetail").removeAttr("disabled");
            if ($.trim($("#invoiceContent span").text()) == "明细发票") {
                $("#invoiceContent span").text("请选择发票内容")
            }
        }
    });
    mutiSelect();
    jQuery("#headType").val(d.invoicesCommDisplay.titleType);
    if (d.invoicesCommDisplay.electronic) {
        jQuery("#electronicType").val(d.invoicesCommDisplay.electronic);
        if (d.invoicesCommDisplay.electronic == 1) {
            jQuery("#electronicTipId").show();
            $("#electronicMobile").show();
            $("#electronicEmail").show()
        } else {
            $("#electronicMobile").hide();
            $("#electronicEmail").hide()
        }
    }
    chooseHead();
    if (!jQuery("#invoiceContent").hasClass("disabled")) {
        if (d.invoicesCommDisplay.content == null) {
            jQuery("#invoiceContent span").text("请选择发票内容")
        } else {
            jQuery("#invoiceContent span").text(d.invoicesCommDisplay.content)
        }
    }
    if (globalOrder.isContainCard && d.invoices && d.invoices.needSinglePostInvoice == 1) {
        jQuery("#needSinglePostInvoiceChk").prop("checked", "checked");
        $(".getInvoiceInfo").attr("id", "singlePostDiv");
        var a = d.invoices.invoiceReceivePhone;
        if (a != "") {
            if (a.indexOf("-") > 0) {
                var c = a.split("-");
                if (c.length > 2) {
                    $("#inv_tela").val(c[0]);
                    $("#inv_telb").val(c[1]);
                    $("#inv_telc").val(c[2])
                } else {
                    if (c[0].length >= 7) {
                        $("#inv_telb").val(c[0]);
                        $("#inv_telc").val(c[1])
                    } else {
                        $("#inv_tela").val(c[0]);
                        $("#inv_telb").val(c[1])
                    }
                }
            } else {
                $("#inv_telb").val(a)
            }
        }
    }
    registerInvoice();
    if (d.invoices && d.invoices != null) {
        if (d.invoices.invoiceType == 3) {
            var e = jQuery("input[name=invoiceType]:eq(1)");
            if (!e.attr("disabled")) {
                e.click()
            }
        }
    }
    if (d.invoicesCommDisplay && d.invoicesCommDisplay.needCommon == true) {
        jQuery("#otherInvProd").prop("checked", "checked");
        otherCheckClickShow()
    } else {
        jQuery("#otherInvProd").removeAttr("checked");
        otherCheckClickHide()
    }
    var b = globalOrder.invoiceDTO.invoices.needDetail;
    var f = globalOrder.invoiceDTO.invoices.needProductDetail;
    if (b == 1) {
        jQuery("#needDetailContent").prop("checked", "checked");
        $("#needProductDetail").removeAttr("checked");
        $("#needProductDetail").attr("disabled", "disabled")
    } else {
        jQuery("#needCategoryContent").prop("checked", "checked");
        jQuery("#invoiceContent").removeClass("disabled");
        if (f == 1) {
            jQuery("#needProductDetail").prop("checked", "checked")
        } else {
            $("#needProductDetail").removeAttr("checked")
        }
    }
    chooseElectronicType()
}
function chooseElectronicType() {
    $("#invoiceContent").siblings(".checkForm").css("display", "none");
    var b = jQuery("#electronicType option:selected").val();
    if (b == 1) {
        jQuery("#headType").val(0);
        jQuery("#needSinglePostInvoiceChk").removeAttr("checked");
        jQuery("#needSinglePost").hide();
        jQuery("#normal_head").hide();
        $(".getInvoiceInfo").removeAttr("id");
        jQuery("#electronicTipId").show();
        $("#electronicMobile").show();
        $("#electronicEmail").show();
        if ($("#invoiceContent span").text() == "明细发票") {
            $("#invoiceContent span").text("请选择发票内容")
        }
        if ($("#editInvoiceElectronic").length < 1) {
            var a = "<p class='mt5' id='editInvoiceElectronic'> 电子发票是税务局认可的有效付款凭证，支持企业报销，请先确认所属公司是否支持。</p>";
            $(a).insertAfter($("#editInvoiceNormalNotice"))
        }
    } else {
        jQuery("#needDetailContent").removeAttr("disabled");
        jQuery("#needDetailContent").prop("checked", "checked");
        jQuery("#invoiceContent").addClass("disabled");
        jQuery("#headType").removeAttr("disabled");
        jQuery("#needSinglePost").show();
        jQuery("#normal_head").show();
        jQuery("#electronicTipId").hide();
        $("#electronicMobile").hide();
        $("#electronicEmail").hide();
        $("#needProductDetail").prop("checked", false);
        $("#needProductDetail").attr("disabled", "disabled");
        if ($("#editInvoiceElectronic").length) {
            $("#editInvoiceElectronic").remove()
        }
    }
    chooseHead()
}
function showInvoiceDisplayLayout(a) {
    jQuery("#InvoiceDisplayDiv").setParam("getConfig", getConfig);
    jQuery("#InvoiceDisplayDiv").setParam("getContainCard", getContainCard);
    jQuery("#InvoiceDisplayDiv").setParam("getAllInvoiceRequiredProduct", getAllInvoiceRequiredProduct);
    jQuery("#InvoiceDisplayDiv").setParam("getContain1mallProduct", getContain1mallProduct);
    jQuery("#InvoiceDisplayDiv").setParam("get1mallProduct", get1mallProduct);
    jQuery("#InvoiceDisplayDiv").processTemplate(a);
    $("#invoiceUI").removeClass("beEdit");
    if (globalOrder.haigouFlag == 1) {
        $("#invoiceModify").empty()
    } else {
        $("#invoiceModify").unbind("click").bind("click", function() {
            gotracker("2", "invoice_modify", null);
            var b = $(this).parents(".checkInforBox"), c = "beEdit";
            $(".noboxbd").removeClass("noboxbd");
            b.siblings("." + c).removeClass(c);
            b.addClass(c).prev(".checkInforBox").addClass("noboxbd");
            if (globalOrder.invoiceDTO.invoiceShowVo.isContainComm && !globalOrder.invoiceDTO.invoiceShowVo.isContainMust) {
                globalOrder.invoiceDTO.invoicesCommDisplay.needCommon = true
            }
            showInvoiceEditLayout(globalOrder.invoiceDTO);
            confirmStatues.isConfirmReceiver = true;
            confirmStatues.isConfirmDelivery = true;
            confirmStatues.isConfirmInvoice = false;
            return false
        })
    }
    confirmStatues.isConfirmInvoice = true;
    if (a.invoices.electronic == 1 && a.invoices.electronicInvoiceMobile == null) {
        $("#invoiceModify").click()
    }
    registerInvoice()
}
function getContainCard() {
    return globalOrder.isContainCard
}
function getReceiver() {
    return globalOrder.receiverDTOList.receiverDTO
}
function getCommonInvoiceContent() {
    var a = globalOrder.invoiceDTO.invoiceContentStr;
    if (a != null) {
        return a.split(",")
    } else {
        return["酒", "食品", "饮料", "玩具", "日用品", "装修材料", "化妆品", "办公用品", "学生用品", "家居用品", "饰品", "服装", "箱包", "精品", "家电", "劳防用品", "耗材", "电脑配件"]
    }
}
function chooseHead(d) {
    var a = jQuery("#headType option:selected").attr("defaultInfo");
    var b = $("#electronicType").val();
    var c = jQuery("#headType option:selected").val();
    if (b == 1) {
        $("#normal_head").val(a)
    } else {
        jQuery("#normal_head").val(a)
    }
    jQuery("#normal_head").css("color", "#999");
    if (c == "0") {
        jQuery("#normal_head").hide()
    } else {
        jQuery("#normal_head").show()
    }
    $("#normal_head").siblings(".checkForm").css("display", "none")
}
function clickNormalHead(c) {
    var a = jQuery("#headType option:selected").attr("defaultinfo");
    var b = jQuery("#normal_head").val();
    if (b == a && a == "单位名称") {
        jQuery(c).val("")
    }
    jQuery(c).css("color", "#333")
}
function getInvoiceReceiverVal(b) {
    var a = $("input#" + b), d = a.attr("defaultvalue"), c = $.trim(a.val());
    if (d == c) {
        return""
    } else {
        return c
    }
}
function saveInvoice(i) {
    var a = "";
    var v = 0;
    var l = jQuery("input[name=invoiceType]:checked").val();
    var n = /^[0-9]*$/;
    var d = /^\d{6}$/;
    var g = /^[0]\d{2,3}$/;
    var m = /^\d{7,8}$/;
    var s = /^\d{1,6}$/;
    var b = /^1[3|4|5|7|8][0-9]\d{8}$/;
    var q = /^1[3|4|5|7|8]\d{2}\*{5}\d{2}$/;
    if (i) {
        if (l == 2 && i) {
            var w = jQuery("#invoiceContent span").text();
            var E = jQuery("#normal_head").val();
            var j = jQuery("#headType option:selected").val();
            var y = $("#electronicType").val();
            var o = 0;
            if (jQuery("#otherInvProd").prop("checked") || jQuery("#otherInvProd").length <= 0) {
                o = 1
            }
            var e = 0;
            if (jQuery("#needSinglePostInvoiceChk").prop("checked")) {
                e = 1
            }
            var p = getInvoiceReceiverVal("invoiceReceiveName");
            var C = getInvoiceReceiverVal("invoiceReceiveAddress");
            var u = getInvoiceReceiverVal("inv_tela");
            var t = getInvoiceReceiverVal("inv_telb");
            var r = getInvoiceReceiverVal("inv_telc");
            var c = getInvoiceReceiverVal("invoiceReceiveMobile");
            var h = getInvoiceReceiverVal("invoiceReceivePost");
            $("#normal_head").siblings(".checkForm").css("display", "none");
            $("#invoiceContent").siblings(".checkForm").css("display", "none");
            $("#invoiceReceiveName").siblings(".checkForm").css("display", "none");
            $("#invoiceReceiveAddress").siblings(".checkForm").css("display", "none");
            $("#invoiceReceiveMobile").siblings(".checkForm").css("display", "none");
            $("#invoiceReceivePost").siblings(".checkForm").css("display", "none");
            $("#electronicInvoiceMobile").siblings(".checkForm").css("display", "none");
            var B = $("li#electronicMobile #electronicInvoiceMobile");
            var k = 0;
            if (jQuery("input[name=invoiceContentType]").length < 1) {
                k = 1
            } else {
                if (jQuery("input[name=invoiceContentType]:checked").val() == 1) {
                    k = 1
                }
            }
            var z = 0;
            if ($("#needProductDetail").length < 1 && y == 1) {
                z = 1
            } else {
                if ($("#needProductDetail").prop("checked")) {
                    z = 1
                }
            }
            if (j == "1" && (jQuery.trim(E) == "" || jQuery.trim(E) == "单位名称")) {
                $("#normal_head").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>请输入发票的抬头");
                return false
            } else {
                if (E.length > 40) {
                    $("#normal_head").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>发票抬头不能超过40个字符");
                    jQuery("#normal_head").focus();
                    return false
                }
                if (hasInvalidChars(E)) {
                    $("#normal_head").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>发票抬头中不能包含特殊字符");
                    jQuery("#normal_head").focus();
                    return false
                }
                if (o == 1 && k == 0 && w == "请选择发票内容") {
                    $("#invoiceContent").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>请选择发票的内容");
                    return false
                }
                if (o == 0) {
                    e = 0;
                    w = ""
                }
                if (y && y == 1) {
                    if (e == 1) {
                        alert("提示：电子发票不能单独寄送");
                        return false
                    }
                    if (!B || !b.test(B.val()) && !q.test(B.val())) {
                        B.siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>请输入正确的手机号码");
                        B.focus();
                        return false
                    }
                }
                if (o == 1 && e == 1) {
                    if (jQuery.trim(p) == "") {
                        $("#invoiceReceiveName").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>请输入收件人名称");
                        return false
                    }
                    if (jQuery.trim(p).length > 25) {
                        $("#invoiceReceiveName").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>发票收件人不能超过25个字符");
                        return false
                    }
                    if (jQuery.trim(C) == "") {
                        $("#invoiceReceiveAddress").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>请输入详细地址");
                        return false
                    }
                    if (jQuery.trim(C).length > 60) {
                        $("#invoiceReceiveAddress").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>发票详细地址不能超过60个字符");
                        return false
                    }
                    if (c == "" && u == "" && t == "" && r == "") {
                        $("#invoiceReceiveMobile").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>请填写您的联系方式：手机或电话");
                        return false
                    }
                    if (c != "" && (!b.test(c) && !q.test(c))) {
                        $("#invoiceReceiveMobile").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>手机号码格式不正确，请输入11位数字");
                        return false
                    }
                    if (u != "" && !g.test(u)) {
                        $("#invoiceReceiveMobile").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>固定电话格式错误");
                        return false
                    }
                    if (t != "" && !m.test(t)) {
                        $("#invoiceReceiveMobile").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>固定电话格式错误");
                        return false
                    }
                    if (r != "" && !s.test(r)) {
                        $("#invoiceReceiveMobile").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>固定电话格式错误");
                        return false
                    }
                    if ((u != "" || r != "") && t == "") {
                        $("#invoiceReceiveMobile").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>固定电话格式错误");
                        return false
                    }
                    if (jQuery.trim(h) == "") {
                        $("#invoiceReceivePost").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>邮编不能为空");
                        return false
                    }
                    if (!d.test(jQuery.trim(h))) {
                        $("#invoiceReceivePost").siblings(".checkForm").addClass("cEr").css("display", "inline").html("<s></s>邮编格式不对");
                        return false
                    }
                }
                if (w == undefined || w == "") {
                    w = "";
                    if (!getContainYhdCommProduct() && getContain1mallProduct()) {
                        if (o == 1) {
                            w = "由商家直接开具"
                        }
                    } else {
                        if (k == 1) {
                            w = "明细发票"
                        }
                    }
                }
                var A = 0;
                if (jQuery("#electronicType option:selected").val()) {
                    A = jQuery("#electronicType option:selected").val()
                }
                v = 1;
                var f = "";
                if (u != "") {
                    f = u + "-"
                }
                if (t != "") {
                    f = f + t
                }
                if (r != "") {
                    f = f + "-" + r
                }
                a += "&needInvoice=" + v + "&invoiceTitle=" + encodeURI(E.trim()) + "&invoiceContent=" + encodeURI(w) + "&needCommInvoice=" + o + "&needDetail=" + k + "&needProductDetail=" + z + "&electronic=" + A + "&invoiceType=2&headType=" + j;
                if (B.size() > 0 && B.val()) {
                    a += "&electronicInvoiceMobile=" + encodeURI(B.val())
                }
                if (e == 1 && A != 1) {
                    a += "&needSinglePostInvoice=" + e + "&invoiceReceiveName=" + encodeURI(p) + "&invoiceReceiveAddress=" + encodeURI(C) + "&invoiceReceiveMobile=" + encodeURI(c) + "&invoiceReceivePhone=" + encodeURI(f) + "&invoiceReceivePost=" + encodeURI(h)
                }
            }
        } else {
            if (l == 3 && i) {
                v = 1;
                a += "&needInvoice=" + v + "&invoiceType=3"
            } else {
                alert("请选择发票类型");
                return false
            }
        }
        gotracker("2", "saveinvoice", null)
    } else {
        gotracker("2", "withoutinvoice", null)
    }
    clickSaveInvoiceBtn = true;
    saveInforLoading("save", "#saveInvoice");
    a += "&rd=" + Math.random();
    jQuery.post("/checkoutV3/invoice/saveInvoice.do", a, D);
    function x(F) {
        if (F.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
            return true
        } else {
            return false
        }
    }
    function D(F) {
        $("#loadingSaveInfoMsg", ".btInvoice").remove();
        $("#saveInvoice").show();
        globalRender(F)
    }}
function registerInvoice() {
    var b = $("input:radio", ".invoiceForm > .invoiceType").index($("input:radio:checked", ".invoiceForm > .invoiceType"));
    $(".invoiceForm > .warm_prompt_div").eq(b).show().siblings(".warm_prompt_div").hide();
    $(".invoiceForm  .invoiceType  label").click(function() {
        if ($("input[type='radio']", $(this)).attr("disabled")) {
            return
        }
        var c = $(".invoiceForm  .invoiceType  label").index(this);
        var e = $("input:radio", ".invoiceForm > .invoiceType").eq(c);
        if (!e.attr("disabled")) {
            $(".invoiceForm > .warm_prompt_div").eq(c).show().siblings(".warm_prompt_div").hide();
            setTimeout(function() {
                $("input:radio", ".invoiceForm > .invoiceType").eq(c).prop("checked", "checked")
            }, 0)
        }
        if (c == 1) {
            gotracker("2", "valueaddinvoice", null);
            jQuery("#has3cInfo").hide();
            jQuery(".invoiceCheckboxBx").hide();
            jQuery("#otherInvProd").attr("disabled", "true");
            if ($("#editInvoiceElectronic").length) {
                $("#editInvoiceElectronic").addClass("hide")
            }
            if ($("#editInvoice3c").length) {
                $("#editInvoice3c").addClass("hide")
            }
        } else {
            gotracker("2", "nomalinvoice", null);
            jQuery("#has3cInfo").show();
            jQuery(".invoiceCheckboxBx").show();
            jQuery("#otherInvProd").removeAttr("disabled");
            var d = jQuery("#otherInvProd").prop("checked");
            if (d || d == undefined) {
                otherCheckClickShow()
            } else {
                otherCheckClickHide()
            }
            if ($("#editInvoiceElectronic").length) {
                $("#editInvoiceElectronic").removeClass("hide")
            }
            if ($("#editInvoice3c").length) {
                $("#editInvoice3c").removeClass("hide")
            }
        }
    });
    $("input:text", ".getInvoiceInfo").each(function() {
        c($(this));
        $(this).unbind("blur").bind("blur", function() {
            c($(this));
            $(this).siblings(".checkForm").addClass("cEr").css("display", "none")
        });
        function c(e) {
            var f = e.val(), d = e.attr("defaultvalue");
            if (f == "" || f == d) {
                e.css("color", "#ccc").val(d)
            } else {
                e.css("color", "#333")
            }
        }}
    );
    $("input:text", ".getInvoiceInfo").focus(function() {
        $(this).css("color", "#333");
        if ($(this).attr("defaultvalue") == $(this).val()) {
            $(this).val("")
        }
    });
    jQuery("#needSinglePostInvoiceChk").click(function() {
        gotracker("2", "lipinka_invoice", null);
        if (jQuery("#needSinglePostInvoiceChk").prop("checked")) {
            $(".getInvoiceInfo").attr("id", "singlePostDiv")
        } else {
            $(".getInvoiceInfo").removeAttr("id")
        }
    });
    jQuery("#otherInvProdLabel").click(function() {
        gotracker("2", "addnormalinvoice", null);
        if (jQuery("#otherInvProd").prop("checked")) {
            otherCheckClickShow()
        } else {
            otherCheckClickHide()
        }
    });
    jQuery("#saveInvoice").click(function() {
        saveInvoice(true);
        setTimeout(function() {
            $("#SellCountFixBox").hide()
        }, 0);
        return false
    });
    jQuery("#saveNoInvoice").click(function() {
        saveInvoice(false);
        setTimeout(function() {
            $("#SellCountFixBox").hide()
        }, 0);
        return false
    });
    function a() {
        var c = null;
        $(".DownMenuListPro").addClass(function() {
            return $(this).find("dl").length > 4 ? "DownMenuListProScroll" : ""
        });
        $(".DownMenuList").hover(function() {
            var d = $(this);
            if (c != null) {
                clearTimeout(c);
                c = null
            }
            d.addClass("DownMenuListCur");
            d.siblings(".DownMenuListPro").css("left", d.position().left).show().parent().css("zIndex", 10)
        }, function() {
            var d = $(this);
            c = setTimeout(function() {
                d.removeClass("DownMenuListCur").siblings(".DownMenuListPro").hide().parent().css("zIndex", 1);
                c = null
            }, 1)
        });
        $(".DownMenuListPro").hover(function() {
            clearTimeout(c);
            c = null
        }, function() {
            var d = $(this);
            c = setTimeout(function() {
                d.hide().siblings(".DownMenuListCur").removeClass("DownMenuListCur").parent().css("zIndex", 1);
                c = null
            }, 1)
        })
    }
    a();
    chooseHead();
    addElectronicInvoiceMobileEvent()
}
function otherCheckClickShow() {
    jQuery("#invoiceContentLi").show();
    jQuery("#needSinglePost").show();
    if (jQuery("#needSinglePostInvoiceChk").prop("checked")) {
        $(".getInvoiceInfo").attr("id", "singlePostDiv")
    } else {
        $(".getInvoiceInfo").removeAttr("id")
    }
}
function otherCheckClickHide() {
    jQuery("#invoiceContentLi").hide();
    jQuery("#needSinglePost").hide();
    $(".getInvoiceInfo").removeAttr("id")
}
function getAllInvoiceRequiredProduct() {
    var h = new Array();
    var k = new Array();
    var d = 0;
    var j = 0;
    var b = false;
    var a = false;
    try {
        for (prodkey in products) {
            b = false;
            a = false;
            var f = products[prodkey].childProducts;
            if (f) {
                for (prodChildkey in f) {
                    if (f[prodChildkey].is3C || f[prodChildkey].invoiceRequired == 1) {
                        a = true;
                        break
                    }
                }
            }
            if (products[prodkey].is3C || products[prodkey].invoiceRequired == 1 || a) {
                for (prod in h) {
                    if (products[prodkey].pmId == prod.pmId) {
                        b = true;
                        break
                    }
                }
                if (!b) {
                    var c = new Object();
                    h[d] = c;
                    c.pmId = products[prodkey].pmId;
                    c.name = products[prodkey].name;
                    c.imgURL4040 = products[prodkey].imgURL4040;
                    d++
                }
            }
        }
    } catch (g) {
    }
    return h
}
function getUnspportVatProduct() {
    var b = new Array();
    var g = new Array();
    var c = 0;
    var a = false;
    try {
        for (prodkey in products) {
            a = false;
            if (products[prodkey].isVTA != 1) {
                for (prod in b) {
                    if (products[prodkey].pmId == prod.pmId) {
                        a = true;
                        break
                    }
                }
                if (!a) {
                    var f = new Object();
                    b[c] = f;
                    f.pmId = products[prodkey].pmId;
                    f.name = products[prodkey].name;
                    f.imgURL4040 = products[prodkey].imgURL4040;
                    c++
                }
            }
        }
    } catch (d) {
    }
    return b
}
function get1mallProduct() {
    var b = new Array();
    var g = new Array();
    var c = 0;
    var a = false;
    try {
        for (prodkey in products) {
            a = false;
            if (!products[prodkey].yhd) {
                for (prod in b) {
                    if (products[prodkey].pmId == prod.pmId) {
                        a = true;
                        break
                    }
                }
                if (!a) {
                    var f = new Object();
                    b[c] = f;
                    f.pmId = products[prodkey].pmId;
                    f.name = products[prodkey].name;
                    f.imgURL4040 = products[prodkey].imgURL4040;
                    c++
                }
            }
        }
    } catch (d) {
    }
    return b
}
function mutiSelect() {
    var d = $(".select_checkbox");
    var c = 3;
    d.click(function() {
        if (!d.hasClass("checked") && !d.hasClass("disabled")) {
            d.addClass("checked")
        }
    });
    $(document).click(function(g) {
        var f = $(g.target);
        if (f.parents(".select_checkbox").length == 0) {
            d.removeClass("checked")
        }
    });
    d.find("label").change(function(f) {
        if (b() > c) {
            alert("最多只能选择3项");
            $(this).find("input").removeAttr("checked")
        }
        e()
    });
    function b() {
        var f = 0;
        d.find("input").each(function() {
            if ($(this).prop("checked")) {
                f++
            }
        });
        return f
    }
    function a() {
        var f = "";
        d.find("input").each(function() {
            if ($(this).prop("checked")) {
                f += "，" + $(this).attr("data-val")
            }
        });
        if (f.length > 0) {
            f = f.substr(1, f.length)
        }
        return f
    }
    function e() {
        var f;
        if (a()) {
            f = a()
        } else {
            if ($.trim($("#invoiceContent span").text()).length < 1) {
                f = "请选择发票内容"
            }
        }
        $("#invoiceContent").siblings(".checkForm").css("display", "none");
        d.find(".text_val").text(f)
    }
    e()
}
function addElectronicInvoiceMobileEvent() {
    $("#electronicInvoiceMobile").blur(function() {
        var a = $(this).val();
        if (a == "") {
            $(this).val(this.defaultValue)
        }
    });
    $("#electronicInvoiceMobile").focus(function() {
        var a = $(this).val();
        if (!this.defaultValue && a.indexOf("*****") >= 0) {
            this.defaultValue = a
        }
        if (a == this.defaultValue) {
            $(this).val("")
        }
    })
}
;
var isLockSubmitButton = false;
function verifyAuthorizerReceiver() {
    var a = $("#addressList .slt b[name=receiverName]").text();
    var b = $("label.authorizedName").text();
    if (typeof a == "string" && typeof b == "string") {
        a = a.replace(/\s/g, "");
        b = b.replace(/\s/g, "");
        if (b.length > 0 && a.length > 0) {
            if (b != a) {
                return true
            }
        }
    }
    return true
}
function bindAction() {
    var a = ".btSubOrder1";
    jQuery(a).unbind();
    jQuery(a).bind("click", function() {
        verifyAuthorizerReceiver();
        if (globalOrder.paymentList.selectedPayment.amountNeed2Pay == 0) {
            confirmStatues.isConfirmPayment = true
        } else {
            var b = globalOrder.paymentList.selectedPayment.payment;
            if (b) {
                confirmStatues.isConfirmPayment = true
            } else {
                confirmStatues.isConfirmPayment = false
            }
        }
        if (!confirmStatues.isConfirmReceiver) {
            gotracker("2", "clickSubmitWithNoReceiver", null);
            submitTip('请保存"收货信息"')
        } else {
            if (!confirmStatues.isConfirmDelivery) {
                gotracker("2", "clickSubmitWithNoDelivery", null);
                submitTip('请保存"配送信息"')
            } else {
                if (!confirmStatues.isConfirmInvoice) {
                    gotracker("2", "clickSubmitWithNoInvoice", null);
                    submitTip('请保存"发票信息"')
                } else {
                    if (!validatePaymentMethod()) {
                    } else {
                        if (!confirmStatues.isConfirmPayment) {
                            gotracker("2", "clickSubmitWithNoPayment", null);
                            submitTip('请选择"支付信息"')
                        } else {
                            if (!isLockSubmitButton) {
                                submitOrder()
                            }
                        }
                    }
                }
            }
        }
    });
    $("#statisticsUI .userPrivilege .cb").click(function() {
        saveUserPrivilege(this)
    });
    $("#SellCountFixBox .userPrivilege .cb").click(function() {
        saveUserPrivilege(this)
    })
}
function refeshGoods() {
    jQuery("#confirmUI").setTemplateElement("confirmGoodsTemplate");
    jQuery("#confirmUI").setParam("getProduct", getProduct);
    jQuery("#confirmUI").setParam("showPhoneNoPrice", showPhoneNoPrice);
    jQuery("#confirmUI").processTemplate(globalOrder.merchantList)
}
function refeshGoodsWithoutSplit(d) {
    var b = "";
    for (var c in d) {
        b += "," + c
    }
    if (b.length > 1) {
        var a = b.substr(1).split(",");
        jQuery("#confirmUI").setTemplateElement("confirmGoodsTemplateWithoutSplit");
        jQuery("#confirmUI").setParam("getProduct", getProduct);
        jQuery("#confirmUI").setParam("showPhoneNoPrice", showPhoneNoPrice);
        jQuery("#confirmUI").processTemplate(a)
    }
}
function refeshstatistics() {
    jQuery("#statisticsUI").setParam("getTotalPostTax", getTotalPostTax);
    jQuery("#statisticsUI").setParam("getOrderStatistics", getOrderStatistics);
    jQuery("#statisticsUI").setParam("getReceiver", getReceiver);
    jQuery("#statisticsUI").processTemplate(globalOrder.paymentList.selectedPayment);
    jQuery("#SellCountFixBox").setParam("isNeedCheckCode", globalOrder.isNeedCheckCode);
    jQuery("#SellCountFixBox").setParam("getReceiver", getReceiver);
    jQuery("#SellCountFixBox").setParam("getOrderStatistics", getOrderStatistics);
    jQuery("#SellCountFixBox").processTemplate(globalOrder.paymentList.selectedPayment);
    if (globalOrder.ext && globalOrder.ext.authType && globalOrder.ext.authType != "NONE") {
        var a = $(".mod_1mallxieyi .cb");
        a.click(function() {
            if (a.hasClass("select")) {
                a.removeClass("select")
            } else {
                $(".mod_1mallxieyi span").hide();
                a.addClass("select")
            }
        })
    }
    var d = ".btSubOrder1";
    var c = "noOrderSubmit1";
    if (confirmStatues.isConfirmReceiver && confirmStatues.isConfirmDelivery && confirmStatues.isConfirmPayment && confirmStatues.isConfirmInvoice && globalOrder.orderRandomString != null) {
        jQuery(d).removeClass(c)
    } else {
        jQuery(d).addClass(c)
    }
    if (globalOrder.containBookedPreSellProduct) {
        $(".money_tips").show();
        $(".money_tips em").text(globalOrder.bookedAmount);
        $("[name = bookedPay]:checkbox").change(function() {
            $(".money_tips .tips_txt").empty();
            var e = $(this).prop("checked");
            $("[name = bookedPay]:checkbox").each(function() {
                $(this).prop("checked", e)
            })
        })
    }
    var b = $("#paymentPrivilegeDiv").html();
    $("#statisticsUI .userPrivilege").html(b);
    $("#SellCountFixBox .userPrivilege").html(b);
    bindAction()
}
function getNewResponseText(h) {
    var j = h.indexOf("删除并下单</button>");
    if (j == -1) {
        return h
    }
    var g = "reCheckout('";
    var k = h.indexOf(g);
    var f = h.substring(k + g.length, j - 5);
    if (getTotalNumCheckout() > (f.split(",").length - 1)) {
        return h
    }
    var i = h.length;
    var e = "删除并下单</button>";
    var b = h.indexOf('<button class="btn1 popwinClose"');
    var d = h.substring(0, b);
    var c = h.substring(j + e.length, i);
    var a = d + c;
    return a
}
function getOrderStatistics() {
    var a = {packageNum: 0, weightNum: 0};
    for (var b = 0; b < globalOrder.merchantList.merchants.length; b++) {
        var c = globalOrder.merchantList.merchants[b];
        a.packageNum += c.totalPackages;
        a.weightNum = ((a.weightNum * 1).add(c.totalWeight)).toFixed(3)
    }
    return a
}
function getTotalPostTax() {
    var a = 0;
    if (typeof globalOrder.ext != "undefined" && globalOrder.ext) {
        if (typeof globalOrder.ext.totalPostTax != "undefined" && globalOrder.ext.totalPostTax) {
            a = globalOrder.ext.totalPostTax
        }
    }
    return a
}
function submitOrder() {
    yhdLib.popwin({popcontentstr: '<div class="submitOrderLoading"><p>您的订单正在处理中,请稍候...</p></div>'});
    if (globalOrder.contains3gCard) {
        if (!check3gCard()) {
            return
        }
    }
    if (isNewContractPhone()) {
        if (!checkContractUserInfo()) {
            return
        }
    }
    if (globalOrder.isContainCard) {
        licenseAgreement();
        return
    }
    if (globalOrder.containBookedPreSellProduct) {
        if (!$("[name = bookedPay]:checkbox").is(":checked")) {
            yhdLib.popclose();
            $(".money_tips .tips_txt").text("请同意支付定金");
            return
        }
    }
    if (globalOrder.ext && globalOrder.ext.authType && globalOrder.ext.authType != "NONE" && globalOrder.ext.authType != "SAMCARD") {
        if (!$(".mod_1mallxieyi .cb").hasClass("select")) {
            yhdLib.popclose();
            $(".mod_1mallxieyi .tips").show();
            return
        }
    }
    if (globalOrder.ext && globalOrder.ext.authType && globalOrder.ext.authType == "SAMCARD") {
        if (!checkSamCardUserInfo()) {
            return
        }
    }
    toSumitUrl();
    gotracker("2", "placeOrderButton", null);
    isLockSubmitButton = false;
    return false
}
function toSumitUrl() {
    isLockSubmitButton = true;
    var g = 0;
    if ($("#displayNeedProductDetail").length) {
        g = $("#displayNeedProductDetail").val()
    }
    var f = $("#__yct_str__").val();
    var d = $("#validCode").val();
    var c = $("#validCodeSig").val();
    var b = "/checkoutV3/confirm/confirmOrder.do?orderID=1&rdCheck=" + globalOrder.orderRandomString + "&rd=" + Math.random() + "&needProductDetail=" + g;
    if (typeof (d) != "undefined" && typeof (c) != "undefined") {
        b += "&validCode=" + d + "&validCodeSig=" + c
    }
    if (isNewContractPhone()) {
        b += "&mobilePhoneNo=" + jQuery("#mobilePhoneNo").val() + "&verifyCode=" + jQuery("#verifyCode").val() + "&cardNum=" + jQuery("#cardNum").val() + "&hostName=" + encodeURIComponent($("#hostName").val()) + "&credentialsAddress=" + encodeURIComponent($("#credentialsAddress").val())
    }
    if (globalOrder.contains3gCard) {
        b += "&cardNum=" + jQuery("#cardNum").val() + "&hostName=" + encodeURIComponent($("#hostName").val()) + "&credentialsAddress=" + encodeURIComponent($("#credentialsAddress").val())
    }
    if ($("#bookedPreSell").is(":visible")) {
        b += "&bookedContactPhone=" + $("#bookedPreSellPhone").val()
    }
    if (globalOrder.ext && globalOrder.ext.authType && globalOrder.ext.authType == "SAMCARD") {
        b += "&samCardMobile=" + jQuery("#samCardMobilePhoneNo").val() + "&samCardMemberName=" + encodeURIComponent(jQuery("#samCardHostName").val()) + "&samCardValidCode=" + jQuery("#samCardVerifyCode").val() + "&samCardIdNo=" + jQuery("#samCardCardNum").val()
    }
    var a = $("#splitCheckout").val();
    if (typeof a == "undefined" || a == null) {
        a = 0
    }
    if (a != "0" && a != "1") {
        a = 0
    }
    var e = {userBehavior: f};
    jQuery.post(b, e, h);
    function h(k) {
        yhdLib.popclose();
        var i = typeof k;
        if (i == "string") {
            var l = getNewResponseText(k.trim());
            yhdLib.popwin({poptitle: "温馨提示", popcontentstr: l, mask: 1});
            if (isOldContractPhone()) {
                $(".sys_popbox .pop_content .pop_btns .btn_sure").removeAttr("onclick").bind("click", function() {
                    yhdLib.popclose();
                    window.location.href = URLPrefix.shoping_detail + "/item/" + $("#operateFlag").attr("phonePmId")
                })
            }
        } else {
            if (i == "object") {
                if (isAppearError(k)) {
                    return false
                }
                var j = URLPrefix.shoping_my + "/order/finishOrder.do?orderCode=" + k.orderCode + "&splitCheckout=" + a;
                if (isFastBuyFlag()) {
                    j = j + "&fastBuyFlag=1"
                }
                window.location.href = j
            } else {
                alert("系统异常")
            }
        }
    }}
function checkContractUserInfo() {
    if (!checkMobilePhoneNo() || !checkVerifyCode() || !checkCardNum() || !checkHostName() || !checkCardAddress() || !checkMobileNetwokDeal()) {
        yhdLib.popclose();
        return false
    }
    return true
}
function check3gCard() {
    if (!checkCardNum() || !checkHostName() || !checkCardAddress()) {
        yhdLib.popclose();
        return false
    }
    return true
}
function checkSamCardUserInfo() {
    if (!samCardCheckHostName() || !samCardCheckMobilePhoneNo() || !samCardCheckVerifyCode() || !samCardCheckCardNum() || !checkSamCardDeal()) {
        yhdLib.popclose();
        return false
    }
    return true
}
function licenseAgreement() {
    var a = "/checkoutV3/other/checkUserGiftCardLicenseAgreement.do?rd=" + Math.random();
    $.post(a, function(b) {
        if (!b) {
            alert("提示：网络异常，请刷新页面后重试！");
            yhdLib.popclose();
            return
        }
        if (b.agree) {
            toSumitUrl()
        } else {
            yhdLib.popclose();
            $.get("/checkoutV3/other/showGiftCardLicenseAgreement.do", function(c) {
                yhdLib.popwin({poptitle: "温馨提示", popcontentstr: c, mask: 1})
            })
        }
    })
}
function saveUserGiftCardAgreement() {
    var a = "/checkoutV3/other/saveUserGiftCardLicenseAgreement.do?rd=" + Math.random();
    $.post(a, function(b) {
        if (b.result == "success") {
            toSumitUrl()
        } else {
            if (b && b.message) {
                YHD.alert(b.message)
            } else {
                alert("提示：网络异常，请刷新页面后重试！");
                yhdLib.popclose()
            }
        }
    })
}
function submitTip(a) {
    yhdLib.popwin({poptitle: "温馨提示", popcontentstr: "<div class='msgErrorTc'><strong>" + a + "</strong><button id='msgErrorButton' class='bt_ykt2' type='button' onclick='yhdLib.popclose();'>确 定</button></div>"})
}
function checkoutUserAuth() {
    if ($("#userAuthDiv .computer").is(":visible")) {
        popChekcoutErrorWithoutProduct('海购商品需要实名认证，请<a target="_blank" href="' + URLPrefix.shoping_my + '/member/userinfo/editinfo.do?u=1">填写 &gt;&gt;&gt;</a>，填写完记得刷新页面噢。');
        return false
    }
    return true
}
(function() {
    var a = function() {
        var d = $(".cart3_saleout_dialog").find(".list");
        var e = d.children(".c_list");
        var c = e.find("li");
        d.addClass("scroll");
        var b = c.length;
        if (b >= 5) {
            e.css({height: 5 * 28});
            $(".scroll .c_list").jScrollPane()
        } else {
            e.css({height: b * 28})
        }
    };
    $(".cart3_saleout_dialog").find(".more").click(function() {
        a()
    })
})(window);
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
function isAppearError(e) {
    if (e.code) {
        var a = false;
        if (e.code == 1) {
            alert("订单还未创建！");
            a = true
        }
        if (e.code == 2) {
            alert("订单内容丢失！");
            a = true
        }
        if (e.code == 41) {
            alert("系统异常，促销错误。");
            a = true
        } else {
            if (e.code == 42) {
                alert("系统异常，促销错误...");
                a = true
            }
        }
        if (a) {
            gotracker("2", "globalRender_errCode:" + e.code, null)
        }
        return a
    }
    if (e.checkoutError || e.checkoutWarning) {
        var c = getShowErrorCode(e.checkoutError ? e.checkoutError.code : e.checkoutWarning.code);
        gotracker("2", "globalRender_checkoutError:" + c, null);
        var f = e.checkoutError ? e.checkoutError.data : e.checkoutWarning.data;
        if (c == "999999" || c == "300008" || c == "300031" || c == "300035") {
            initPageModeContent();
            popChekcoutErrorWithoutProduct("系统开小差了，请稍后重试。")
        } else {
            if (c == "000001") {
                yhdLib.popclose();
                popLoginWin()
            } else {
                if (c == "000002" || c == "000003" || c == "600002") {
                    popChekcoutErrorWithoutProduct("订单信息已过期，请刷新页面后重试！")
                } else {
                    if (c == "000006") {
                        popChekcoutErrorWithoutProduct("您输入的内容中包含非法字符，请删除后重试")
                    } else {
                        if (c == "300001" || c == "300010") {
                            popChekcoutErrorWithoutProduct("您的购物车为空，请返回购物车添加商品。", {backToCart: 1})
                        } else {
                            if (c == "300002") {
                                popChekcoutErrorWithProduct(e, "您购买的下列商品存在错误，请返回购物车删除。")
                            } else {
                                if (c == "200077") {
                                    popChekcoutErrorWithoutProduct("此商品，目前没有预约预售活动", {backToCart: 1})
                                } else {
                                    if (c == "200078") {
                                        popChekcoutErrorWithoutProduct("此活动仅对预约顾客开放，您没有预约，不能参加此活动", {backToCart: 1})
                                    } else {
                                        if (c == "200079") {
                                            popChekcoutErrorWithoutProduct("计算剩余次数异常", {backToCart: 1})
                                        } else {
                                            if (c == "200080") {
                                                popChekcoutErrorWithoutProduct("您已参加过此活动，不能再重复参加", {backToCart: 1})
                                            } else {
                                                if (c == "200081") {
                                                    popChekcoutErrorWithoutProduct("更新购买次数异常", {backToCart: 1})
                                                } else {
                                                    if (c == "200082") {
                                                        popChekcoutErrorWithoutProduct("调用产品查询活动信息接口异常", {backToCart: 1})
                                                    } else {
                                                        if (c == "200083") {
                                                            popChekcoutErrorWithoutProduct("取消购买次数异常", {backToCart: 1})
                                                        } else {
                                                            if (c == "200084") {
                                                                popChekcoutErrorWithoutProduct("活动尚未开始或已结束", {backToCart: 1})
                                                            } else {
                                                                if (c == "200085") {
                                                                    popChekcoutErrorWithoutProduct("活动尚未开始或已结束", {backToCart: 1})
                                                                } else {
                                                                    if (c == "200086") {
                                                                        popChekcoutErrorWithoutProduct("获取用户预售信息返回为空", {backToCart: 1})
                                                                    } else {
                                                                        if (c == "200087") {
                                                                            popChekcoutErrorWithoutProduct("获取用户预售信息返回未知信息", {backToCart: 1})
                                                                        } else {
                                                                            if (c == "200088") {
                                                                                popChekcoutErrorWithoutProduct("获取用户预售信息返回异常", {backToCart: 1})
                                                                            } else {
                                                                                if (c == "200089") {
                                                                                    popChekcoutErrorWithoutProduct("获取用户预售活动ID失败", {backToCart: 1})
                                                                                } else {
                                                                                    if (c == "200090") {
                                                                                        popChekcoutErrorWithoutProduct("您的购买数量超过本商品预售限购数量", {backToCart: 1})
                                                                                    } else {
                                                                                        if (c == "200091") {
                                                                                            popChekcoutErrorWithoutProduct("更新预售商品数量失败", {backToCart: 1})
                                                                                        } else {
                                                                                            if (c == "210048") {
                                                                                                showPromotionError("促销活动已过期")
                                                                                            } else {
                                                                                                if (c == "210049") {
                                                                                                    showPromotionError("促销活动次数超过限制")
                                                                                                } else {
                                                                                                    if (c == "210050") {
                                                                                                        showPromotionError("部分促销活动不能重复参加")
                                                                                                    } else {
                                                                                                        if (c == "210051") {
                                                                                                            showPromotionError("部分促销商品库存不足")
                                                                                                        } else {
                                                                                                            if (c == "210052") {
                                                                                                                showPromotionError("不满足活动参加条件")
                                                                                                            } else {
                                                                                                                if (c == "210053") {
                                                                                                                    showPromotionError("只有新用户才能参加")
                                                                                                                } else {
                                                                                                                    if (c == "210054") {
                                                                                                                        showPromotionError("只能老用户才能参加")
                                                                                                                    } else {
                                                                                                                        if (c == "210055") {
                                                                                                                            showPromotionError("部分促销活动不能同时参加")
                                                                                                                        } else {
                                                                                                                            if (c == "210056") {
                                                                                                                                showPromotionError("此活动仅限【合作伙伴名称】用户参加，您当前不能参加")
                                                                                                                            } else {
                                                                                                                                if (c == "210057") {
                                                                                                                                    showPromotionError("系统异常(缺少参数)")
                                                                                                                                } else {
                                                                                                                                    if (c == "210058") {
                                                                                                                                        showPromotionError("此活动商家没有覆盖当前省份")
                                                                                                                                    } else {
                                                                                                                                        if (c == "210059") {
                                                                                                                                            showPromotionError("赠品已赠完")
                                                                                                                                        } else {
                                                                                                                                            if (c == "210060") {
                                                                                                                                                showPromotionError("购买商品不属于该促销")
                                                                                                                                            } else {
                                                                                                                                                if (c == "210061") {
                                                                                                                                                    showPromotionError("landing主品购买数量限制")
                                                                                                                                                } else {
                                                                                                                                                    if (c == "210062") {
                                                                                                                                                        showPromotionError("landing主品购买种类限制")
                                                                                                                                                    } else {
                                                                                                                                                        if (c == "210063") {
                                                                                                                                                            showPromotionError("landing 购买总销售限制")
                                                                                                                                                        } else {
                                                                                                                                                            if (c == "210064") {
                                                                                                                                                                showPromotionError("landing 购买总销售日销售限制")
                                                                                                                                                            } else {
                                                                                                                                                                if (c == "210065") {
                                                                                                                                                                    showPromotionError("landing 购买含point商品未登录")
                                                                                                                                                                } else {
                                                                                                                                                                    if (c == "210066") {
                                                                                                                                                                        showPromotionError("landing 购买含point商品积分不够")
                                                                                                                                                                    } else {
                                                                                                                                                                        if (c == "210067") {
                                                                                                                                                                            showPromotionError("试用中心landingpage活动一个订单只能参加一个")
                                                                                                                                                                        } else {
                                                                                                                                                                            if (c == "210068") {
                                                                                                                                                                                showPromotionError("活动参加失败，勋章级别不符")
                                                                                                                                                                            } else {
                                                                                                                                                                                if (c == "210071") {
                                                                                                                                                                                    showPromotionError("参加勋章landingpage活动未登录")
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (c == "210072") {
                                                                                                                                                                                        showPromotionError("参加会员landingpage活动未登录")
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (c == "210073") {
                                                                                                                                                                                            showPromotionError("活动参加失败，会员等级不符")
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (c == "210074") {
                                                                                                                                                                                                showPromotionError("活动参加失败，无线专享促销仅能在无线端使用")
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (c == "210075") {
                                                                                                                                                                                                    showPromotionError("企业用户专享landingpage活动参加失败，请先登录")
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (c == "210076") {
                                                                                                                                                                                                        showPromotionError("此商品为企业用户专享，您不能购买")
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (c == "210079") {
                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("您购买的商品价格已经发生变化，请重新结算", {backToCart: true})
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (c == "200094") {
                                                                                                                                                                                                                popChekcoutErrorWithoutProduct(e.checkoutError.msg, {backToCart: true})
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (c == "220401") {
                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("抽奖商品已失效")
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (c == "220403") {
                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("更新奖品状态失败")
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (c == "210098") {
                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("您领取的赠品已被抢完，点击关闭继续下单或返回购物车", {backToCart: true});
                                                                                                                                                                                                                            return false
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (c == "300012") {
                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("商品信息已过期，请重新选择商品。")
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (c == "220400") {
                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("由于您的账户问题，积分扣减失败，请稍后重试")
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (c == "300013") {
                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("当前省份下商品信息有误，请重新选择商品。")
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (c == "300014") {
                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("您选择的商品太多，少买一些吧。")
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (c == "300015") {
                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("商品信息有误，请刷新重试。")
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (c == "300016") {
                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("商品超出每单最大购买数量。")
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (c == "300017") {
                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("不能购买处方药。")
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (c == "300019") {
                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("商品为电子凭证商品，不能下单。")
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (c == "300020" || c == "300025") {
                                                                                                                                                                                                                                                                popChekcoutErrorWithProduct(e, "您购买的下列商品库存不足，请重新选择。")
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (c == "300021") {
                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("不足N件起购数量。")
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (c == "300022") {
                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("您当前的积分不足，请重新选择积分商品。")
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (c == "300023") {
                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("超过敏感商品每日限额。")
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (c == "300024") {
                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("超过敏感商品每周限额。")
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (c == "300026") {
                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("预售商品不能作为促销/积分/抽奖/赠品。")
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (c == "300027") {
                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("预售未开始或已过期。")
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (c == "300028") {
                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("超过预售商品每单最大/最小值。")
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                            if (c == "300029" || c == "300030") {
                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("促销活动已过期，请重新选择。")
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                if (c == "300032") {
                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("购买“号卡类”产品需要提交身份信息，请返回购物车重新下单。", 1)
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                    if (c == "300033") {
                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("根据商务部对《单用途商业预付卡管理办法》的规定，单次购买实体卡或健康卡金额不能超过9999元，请重新选择。")
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                        if (c == "300034") {
                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("合规检查不通过。")
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            if (c == "300036") {
                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithProduct(e, "您购买的下列商品在该省份下不销售，请返回购物车删除。")
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                if (c == "300037") {
                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithProduct(e, "您购买的下列积分商品超过每单限购数量，请返回购物车修改。")
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                    if (c == "300038") {
                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithProduct(e, "您购买的下列积分商品超过总限购数量，请返回购物车修改。")
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                        if (c == "300039") {
                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithProduct(e, "以下商品不能被特价抢购，详见活动页规则说明。")
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                            if (c == "310022") {
                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithProduct(e, "无线专享促销请在移动端参加。")
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                if (c == "310023" || c == "310024" || c == "310025") {
                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithProduct(e, "促销信息发生变化，请回购物车查看。")
                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                    if (c == "300040") {
                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("实体礼品卡不能和其他商品一起购买。")
                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                        if (c == "300042") {
                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("合约机信息不完整,请返回商品详情页重新选择。")
                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                            if (c == "300044") {
                                                                                                                                                                                                                                                                                                                                                showWaiting()
                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                if (c == "300046") {
                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("平台类型（2c,分销）和商品类型不一致，不能生成订单", {backToCart: 1})
                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                    if (c == "300047") {
                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("您购买的商品中含定金预售商品，不能和普通商品一起下单")
                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                        if (c == "400010" || c == "400008" || c == "400009" || c == "400001" || c == "400006" || c == "400007" || c == "400011" || c == "400012") {
                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("收货地址有误，请再次确认。")
                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                            if (c == "400002") {
                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("亲爱的用户，您的手机或电话号码格式不正确!")
                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                if (c == "400003") {
                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("收货人姓名不能为空,不能包含特殊字符且不能超过20个字符!")
                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                    if (c == "400004") {
                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("详细地址中必须包含汉字。")
                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                        if (c == "400005") {
                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("亲爱的用户，您的收货人电话号码长度超长。")
                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                            if (c == "500001") {
                                                                                                                                                                                                                                                                                                                                                                                initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("包裹拆分错误，请稍候重试。")
                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                if (c == "500002") {
                                                                                                                                                                                                                                                                                                                                                                                    initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("运费计算有误，请稍候重试。")
                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                    if (c == "500003") {
                                                                                                                                                                                                                                                                                                                                                                                        initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("支付方式计算有误，请稍候重试。")
                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                        if (c == "500004") {
                                                                                                                                                                                                                                                                                                                                                                                            initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                            showOrderItemError(e.checkoutError.data, "以下商品暂时无法购买，请稍后再试。")
                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                            if (c == "500006") {
                                                                                                                                                                                                                                                                                                                                                                                                initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                deliveryErrorOrder = e;
                                                                                                                                                                                                                                                                                                                                                                                                showOrderItemError(e.checkoutError.data, "以下商品暂时无法购买，请重新选择。")
                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                if (c == "500005") {
                                                                                                                                                                                                                                                                                                                                                                                                    initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                    deliveryErrorOrder = e;
                                                                                                                                                                                                                                                                                                                                                                                                    showOrderItemError(e.checkoutError.data, "您购买的商品库存不足，请重新选择。")
                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "500007" || c == "500016") {
                                                                                                                                                                                                                                                                                                                                                                                                        initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                        deliveryErrorOrder = e;
                                                                                                                                                                                                                                                                                                                                                                                                        if (e.checkoutError && e.checkoutError.data) {
                                                                                                                                                                                                                                                                                                                                                                                                            showOrderItemError(e.checkoutError.data, "您购买的以下商品无法配送至您的购买地址。")
                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("您购买的商品无法配送至您的收货地址")
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "500008") {
                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("您选择的配送方式目前无法送达，请选择其他日期或时段。")
                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "500010") {
                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("您提交的配送方式有误，请刷新页面重试")
                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "500009") {
                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("您选择的配送方式当前时刻不支持，请选择其他配送方式")
                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "500011") {
                                                                                                                                                                                                                                                                                                                                                                                                                        initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("自提配送服务异常(" + e.checkoutError.data + ")，请稍后重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "500012") {
                                                                                                                                                                                                                                                                                                                                                                                                                            initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("订单中包含入驻商家商品，不支持自提服务。")
                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "500013") {
                                                                                                                                                                                                                                                                                                                                                                                                                                initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct('您的部分包裹因金额、重量或体积超过限制，当前自提点暂不支持自提服务。<a href="http://cms.yhd.com/cms/view.do?topicId=24483" target="_blank">自提规则介绍&gt;&gt;</a>')
                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "500014") {
                                                                                                                                                                                                                                                                                                                                                                                                                                    initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                    deliveryErrorOrder = e;
                                                                                                                                                                                                                                                                                                                                                                                                                                    showOrderItemError(e.checkoutError.data, "抱歉，您购买的以下商品在当前自提点不支持自提服务。")
                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "510001" || c == "510002" || c == "510003") {
                                                                                                                                                                                                                                                                                                                                                                                                                                        initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                        deliveryErrorOrder = e;
                                                                                                                                                                                                                                                                                                                                                                                                                                        showOrderItemError(e.checkoutError.data, "抱歉，部分商品数据有误，请删除以下商品后重试")
                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "510004") {
                                                                                                                                                                                                                                                                                                                                                                                                                                            initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("抱歉，订单金额计算不正确，请刷新页面重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "510005" || c == "510006") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("您的收货地址不存在，请再次确认。")
                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "510101") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                    initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                                    deliveryErrorOrder = e;
                                                                                                                                                                                                                                                                                                                                                                                                                                                    showOrderItemError(e.checkoutError.data, "选择该收货地址，您购买的商品的库存或价格会发生变化。<br/>是否确认使用该地址并返回购物车？", {isAreaPrice: true})
                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "700007") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("金额限制导致不可使用货到付现金，货到刷卡。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "700005") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("金额限制导致不可使用银行转账。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "700010") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("支付方式参数错误。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "700011") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("订单的应付金额为负数，请修改账户支付或抵用券支付金额。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "700012") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("预售商品只支持网上支付！")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "700013") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("不可使用的支付方式。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "700014") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("不可使用货到付现金。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "700015") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("不可使用货到刷卡。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "700016") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("不可使用银行转账。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "700017") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("礼品卡订单不可使用万里通。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "700018") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("礼品卡订单只能用直连银行支付。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "700019") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("只有杉德用户才能用杉德网关。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "700020") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("闪购商品只支持网上支付！")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "700022") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("二手品商品只支持网上支付！")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "700023") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("代售商品只支持网上支付！")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "700025") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("定金预售商品只支持网上支付！")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "700101") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("入驻商家不支持货到刷卡。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "700102") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("入驻商家订单，账户余额与货到付款不能同时使用。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "710001") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("提交的账户支付信息错误，请刷新页面后重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "710002") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("入驻商家商品不能使用礼品卡余额。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "710003") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("您的订单中含有礼品卡，无法使用礼品卡余额支付。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "710004") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("您的账户余额不足，请确认。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "710005") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("您支付金额超出需要支付金额，请确认。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "710101") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("入驻商家订单，账户余额与货到付款不能同时使用。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "710006") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        smsValidate.bindPhone()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "710007" || c == "710008") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            smsValidate.showErrorMsg("验证码有误，请重新输入")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "710009") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("提示：一分钟内只能发送一次短信验证码")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "710010" || c == "710011") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("提示：短信发送失败，请稍后重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "710012") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("购买礼品卡时，不能用返利金额支付，请确认。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "710015") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("保存支付方式失败，请刷新页面重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720001") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("提示：抵用券保存参数错误，请刷新页面重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720002") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("该抵用券不能用，是不是输错啦")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720003") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg('您输入的是抵用券激活码，请至<a href="' + URLPrefix.coupon_url + '/active" target="_blank">抵用券激活页面</a>激活后再使用。')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720004") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("您输入的抵用券激活码已激活，请直接输入抵用券号码并使用。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720005") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("该抵用券" + f.beginTime + "才生效哦")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720006") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("该抵用券已于" + f.expiredTime + "过期")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720007") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("该抵用券已被使用，一张券只能用一次哦")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720008") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("该抵用券已被使用，请您重新输入抵用券号码")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720009") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("该抵用券已经作废，请您重新输入抵用券号码")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720010") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("您的订单中已经用过这张抵用券咯")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720011") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("本活动中您已经超过抵用券使用上限次数，请期待下次活动")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720012") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("您不是首次下单，不能使用新会员抵用券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720013") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("该券要购物次数满足1次 ，您不满足条件无法使用")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720014") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("您当前的收货地址不能使用该抵用券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720019") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("仅购买礼品卡或积分商品不能使用抵用券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720020") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("系列抵用券需上一张抵用券" + f.preCoupon + "使用成功后（订单完成），才可使用。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720021") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg('您输入的是抵用券激活码，请至<a href="' + URLPrefix.coupon_url + '/active" target="_blank">抵用券激活页面</a>激活后再使用。')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720022") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("该抵用券将于前一张券订单完成后第二天激活，请您明天再来使用")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720023") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("您当前不能使用该抵用券，要在特定网盟下才能使用")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720024") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("系列券只能同一个用户使用")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720025") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("一笔订单只能使用一张产品券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720026") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("一号店同一活动只能使用一张产品券或品牌券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720027") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("一笔订单只能使用一张产品券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720028") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("一件指定商品仅可使用一张产品券哦")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720029") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("您所购买的商品还没有达到该抵用券使用条件：购买需满足" + f.needAmount + "元")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720030") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("抵用券要求" + f.description)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720031") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("购买闪购券需要求" + f.description)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720032") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("购买团购商品需要求" + f.description)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720033") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg('"团购券要求"' + f.description)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720034") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    yhdLib.popclose();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponSendSms("accountBind")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720035") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        yhdLib.popclose();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponSendSms("getCoupon", f.mobile)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720036") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("同一个用户一天只能验证3次")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720037") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("同一个手机号一天只能验证3次")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720038") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("该抵用券手机订单专享。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720039") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        var b = $(".popGeneral #couponNumberInput").val();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        yhdLib.popclose();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        activeCoupon(b)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720040") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("需要短信验证的手机号码不存在")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720041") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                smsValidate.bindPhone()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720042") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("验证码发送间隔不能超过1分钟")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720043") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("验证码错误")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720044") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg("验证码已失效，需要重新获取验证码")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720045") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("验证码输错3次，需要重新获取验证码")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720046") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("您的订单运费为0，不需要使用免邮抵用券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "720047") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        couponFacade.showErrorMsg("您的订单中包含二手商品，不能使用免邮抵用券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "720048") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            couponFacade.showErrorMsg('本券与您已选中的抵用券适用条件冲突。<a href="' + URLPrefix.shoping_yhd + '/cms/view.do?topicId=24104" target="_blank">查看抵用券使用规则</a>')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "720051") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                couponFacade.showErrorMsg("商城平台券每次下单只能使用一张")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "720050") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    couponFacade.showErrorMsg("一个订单同一商家只能使用一张抵用券")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "730002") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("您没有获取免邮权益或者您的权益已使用，请刷新页面后重试。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "600001") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("发票保存失败，请刷新页面后再试一次。")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "600003") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("保存发票失败，请先确认收货地址")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "600004") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("保存发票失败，自营海购商品不支持开具发票")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "900002") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        initPageModeContent();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        showOrderItemError(e.checkoutError.data, "抱歉，以下商品信息有误，请删除后重新下单")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "510102") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var g = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (e.returnUrl) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                g = e.returnUrl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var d = "<div class='mod_bombBox'>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "<div class='mod_dialogText'>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "<i class='pointIcon'></i>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "<p class='p1'>您购买的商品数量已超出限额，请返回修改商品数量。</p>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "<p class='p2'>1、监管部门对海购（多件商品）的单笔限额1000元。</p>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "<p class='p2'>2、每批次最多支持5笔订单。</p>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "<a href='" + g + "' class='btn'>确定</a>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "</div>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d += "</div>";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            yhdLib.popwin({popcontentstr: d})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "800073") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("您的订单中包含快拍商品，不能下单，请点击确定按钮返回购物车确认。", {backToCart: 1})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "800083") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    getUserServiceValidCode()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "800082") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("验证码不正确，请重新输入");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        refreshValidCode();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        putValidCodeInputValue()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "800081") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("验证码不正确，请重新输入");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            putValidCodeInputValue()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "800112") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorNewContractPhone(e)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "800088") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    getFlowsetMeals()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "800085") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorContractPhone()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "800086") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorContractPhone()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "800087") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorContractPhone()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "800089") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorContractPhoneMutex()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "800095") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("支付方式异常，请重新选择支付方式")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "800092") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("订单总金额为0,下单异常")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "800093") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("拆单订单金额为0,下单异常")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (c == "910003") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    popChekcoutErrorWithoutProduct("合约机结算页中不包括合约机商品信息,请返回详情页重新下单")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (c == "910004") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        popChekcoutErrorWithoutProduct("非合约机结算页中包括合约机信息,请返回详情页重新下单")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (c == "510106") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            popChekcoutErrorWithoutProduct("哇咔，你买太多宝贝了，飞机飞不动啦", {backToCart: 1})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (c == "2205001") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("普通商品、1号海购、商家海购不能一起下单，请返回购物车重新下单", {backToCart: 1})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                popChekcoutErrorWithoutProduct("系统开小差了，请稍后重试")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return true
    }
    return false
}
function showOrderItemError(f, c, h) {
    yhdLib.popclose();
    var g = "";
    if (f) {
        for (var d = 0; d < f.length; d++) {
            g = g + (g ? "," : "") + f[d].cartItemIndex
        }
    }
    var b = {message: c, items: f, deleteId: g};
    var e = jQuery.createTemplate($("#orderItemErrorTemplate").text(), null, {filter_data: false});
    e.setParam("getProductByPmId", getProductByPmId);
    if (h && h.isAreaPrice) {
        e.setParam("isAreaPrice", true)
    } else {
        if (isFastBuyFlag()) {
            e.setParam("fastBuyFlag", 1);
            e.setParam("rtnUrl", getRtnToDetailUrl(false))
        }
    }
    var a = jQuery.processTemplateToText(e, b);
    YHD.popwin(a, null, null, "200px", "400px")
}
function popChekcoutErrorWithProduct(e, d) {
    yhdLib.popclose();
    var c = e.checkoutError;
    var b = jQuery.createTemplate($("#errorCommTemplateWithProduct").text());
    b.setParam("errorMsg", d);
    if (isFastBuyFlag()) {
        b.setParam("fastBuyFlag", 1)
    }
    var a = jQuery.processTemplateToText(b, c);
    YHD.popwin(a, null, "auto", "200px", "400px")
}
function popChekcoutErrorWithoutProduct(c, d) {
    yhdLib.popclose();
    var b = jQuery.createTemplate($("#errorCommTemplateWithoutProduct").text());
    b.setParam("errorMsg", c);
    if (isFastBuyFlag()) {
        b.setParam("fastBuyFlag", 1)
    }
    var a = jQuery.processTemplateToText(b, null);
    setTimeout(function() {
        yhdLib.popwin({poptitle: "温馨提示", popcontentstr: a, mask: 1});
        if (d && d.backToCart == 1) {
            if (isFastBuyFlag()) {
                $("#linkRtnToHomeBySessionInvalid").show()
            } else {
                $("#linkRtnToCartBySessionInvalid").show()
            }
        }
    }, 5)
}
function popChekcoutErrorNewContractPhone(d) {
    yhdLib.popclose();
    var c = jQuery.createTemplate($("#errorCommTemplateNewContractPhone").text());
    var b = {message: d.checkoutError.msg};
    var a = jQuery.processTemplateToText(c, b);
    yhdLib.popwin({poptitle: "温馨提示", popcontentstr: a, mask: 1})
}
function popChekcoutErrorContractPhone() {
    yhdLib.popclose();
    var b = jQuery.createTemplate($("#errorCommTemplateContractPhone").text());
    var a = jQuery.processTemplateToText(b, null);
    yhdLib.popwin({poptitle: "温馨提示", popcontentstr: a, mask: 1})
}
function popChekcoutErrorContractPhoneMutex() {
    yhdLib.popclose();
    var b = jQuery.createTemplate($("#errorMutexCommTemplateContractPhone").text());
    var a = jQuery.processTemplateToText(b, null);
    yhdLib.popwin({poptitle: "温馨提示", popcontentstr: a, mask: 1})
}
function popChekcoutFlowsetMealContractPhone(c) {
    yhdLib.popclose();
    var b = jQuery.createTemplate($("#contractPhoneSlectFlowsetMeal").text());
    var a = jQuery.processTemplateToText(b, c);
    yhdLib.popwin({popcontentstr: a, mask: 1})
}
function showPromotionError(a) {
    popChekcoutErrorWithoutProduct("您参加的促销活动中有如下错误：" + a + "，请返回购物车", {backToCart: true})
}
function getShowErrorCode(a) {
    if (a != "") {
        return a.substr(6)
    } else {
        return""
    }
}
function getProductByPmId(b) {
    for (var a in products) {
        if (products[a].pmId == b) {
            return products[a]
        }
    }
    return null
}
function deleteItemFromCheckout(b) {
    var a = URLPrefix.shoping_cart_self + "/cart/opt/delete.do?callback=?";
    var c = {deleteId: b};
    $.getJSON(a, c, function(d) {
        if (d.code == "00000000") {
            location.href = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view"
        } else {
            alert("删除失败，请重试")
        }
    })
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
    var a = document.getElementById("cart2Checkbox").value;
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
function areaPriceBackToCart() {
    var b = globalOrder.receiverDTOList.receiverDTO;
    var a = b.provinceId + "_" + b.cityId + "_" + b.countyId + "_" + b.provinceName + "_" + b.cityName + "_" + b.countyName;
    $.cookie("provinceId", b.provinceId, {expires: 365, path: "/", domain: ".yhd.com"});
    $.cookie("detail_yhdareas", a, {expires: 365, path: "/", domain: ".yhd.com"});
    window.location.href = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view"
}
function showWaiting() {
    yhdLib.popwin({mask: 1});
    $('<div class="loadingA"></div>').appendTo("body").siblings(".popGeneral").remove();
    setTimeout(function() {
        checkoutInit()
    }, 3000)
}
function getUserServiceValidCode() {
    $.ajax({type: "GET", dataType: "jsonp", jsonp: "callback", url: "https://captcha.yhd.com/public/getsig.do?t=" + Math.random(), success: function(b) {
            $("#validCodeSig").val(b.sig);
            var a = "";
            a += '<div class="clearfix">';
            a += '<div class="veri-column">';
            a += '<div class="clearfix veri-code">';
            a += '<a class="vc-btn" href="javascript:void(0)" onclick="refreshValidCode()">换一张</a> ';
            a += '<img class="vc-img" name="validCodePic" src="https://captcha.yhd.com/public/getgif.do?sig=' + b.sig + '"/>';
            a += '<div class="vc-input">';
            a += '<input class="gray" type="input" id="validCode" name="validCode" maxlength="4" data-word="输入验证码" onkeyup="putValidCodeInputValue(this.value)"/>';
            a += '<em class="vc-icon"></em>';
            a += "</div>";
            a += "</div>";
            a += "</div>";
            a += "</div>";
            $("div.submitOrderValidCode").html(a)
        }, error: function(b, a, c) {
        }})
}
function checkValidCode(a) {
    $("[name='validCode']").each(function() {
        $(this).val(a)
    })
}
function refreshValidCode() {
    $.ajax({type: "GET", dataType: "jsonp", jsonp: "callback", url: "https://captcha.yhd.com/public/getsig.do?t=" + Math.random(), success: function(a) {
            $("#validCodeSig").val(a.sig);
            $("[name='validCodePic']").each(function() {
                $(this).attr("src", "https://captcha.yhd.com/public/getgif.do?sig=" + a.sig)
            })
        }, error: function(b, a, c) {
        }})
}
function putValidCodeInputValue(a) {
    $("[name='validCode']").each(function() {
        $(this).val(a)
    })
}
function contractPopTipClose() {
    yhdLib.popclose();
    var a = "detail.html?" + globalOrder.contractInfoDisplayVo.pmInfoId;
    location.href = a
}
function getFlowsetMeals() {
    var a = "/checkoutV3/phone/ajaxGetFlowsetMeals.do";
    var b = {contractId: globalOrder.contractInfoDisplayVo.contractId};
    $.ajax({type: "POST", url: a, data: b, success: function(c) {
            if (!c) {
                alert("网络出现异常,请稍后重试!");
                return
            }
            if (c.code == "1") {
                popChekcoutFlowsetMealContractPhone(c);
                initMealInfo()
            } else {
                alert("网络出现异常,请稍后重试!")
            }
        }, error: function(d, c, e) {
            alert("网络出现异常,请稍后重试!")
        }})
}
function bindingFlowsetMeal() {
    var d = "/checkoutV3/phone/ajaxBindingFlowset.do";
    var c = $("#4G_contractId").val();
    var f = $("#mobilePhoneNo").val();
    var a = $("#cardNum").val();
    var b = $("#4G_offerId").val();
    if (f == "") {
        alert("请填写手机号码")
    }
    if (a == "") {
        alert("请填写身份证号码")
    }
    var e = {contractId: c, billId: f, certId: a, offerId: b};
    $.ajax({type: "POST", url: d, data: e, success: function(g) {
            if (!g.data) {
                $("#4G_contractId").val("");
                $("#4G_offerId").val("");
                popChekcoutErrorBindingContractPhone()
            }
        }, error: function(h, g, i) {
            alert("网络出现异常,请稍后重试!")
        }})
}
function popChekcoutErrorBindingContractPhone() {
    yhdLib.popclose();
    var b = jQuery.createTemplate($("#errorbindingCommTemplateContractPhone").text());
    var a = jQuery.processTemplateToText(b, null);
    yhdLib.popwin({poptitle: "温馨提示", popcontentstr: a, mask: 1})
}
function initMealInfo() {
    var b = $(".sub-title").children("em");
    var a = $(".sub-list").children("li");
    a.bind({click: function() {
            $(this).addClass("act").siblings().removeClass();
            b.text($(this).text());
            $("#4G_contractId").val($(this).attr("contractId"));
            $("#4G_offerId").val($(this).attr("offerId"))
        }, mouseenter: function() {
            $(this).addClass("cur")
        }, mouseleave: function() {
            $(this).removeClass("cur")
        }})
}
function confirmFlowsetMeal() {
    if ($("#4G_contractId").val() == "" || $("#4G_offerId").val() == "") {
        alert("请选择流量套餐")
    } else {
        yhdLib.popclose();
        bindingFlowsetMeal()
    }
}
;
function onSendVerifyCode() {
    var c = jQuery("#mobilePhoneNo").val();
    if (!checkMobilePhoneNo()) {
        return false
    }
    var b = jQuery("#verifyCode");
    b.val("");
    var a = "/checkoutV3/other/sendContractPhoneVerifyCode.do?mobilePhoneNo=" + c + "&rd=" + Math.random();
    $.post(a, function(d) {
        if (!d) {
            mobilePhoneNoTips.showSysError();
            return false
        }
        if (!d.contractPhoneSmsSendResult) {
            mobilePhoneNoTips.showSysError();
            return false
        }
        if (d.contractPhoneSmsSendResult.code == 3) {
            mobilePhoneNoTips.waitSixtySecond()
        } else {
            if (d.contractPhoneSmsSendResult.code == 1) {
                mobilePhoneNoTips.showIsNullError()
            } else {
                if (d.contractPhoneSmsSendResult.code == 4) {
                    mobilePhoneNoTips.showErrorMsg(d.contractPhoneSmsSendResult.message)
                } else {
                    mobilePhoneNoTips.showSysError()
                }
            }
        }
    })
}
function checkMobilePhoneNo() {
    var b = jQuery("#mobilePhoneNo");
    if (b.is(":visible") == false) {
        return true
    }
    var a = jQuery.trim(b.val());
    b.val(a);
    if (a == "") {
        mobilePhoneNoTips.showIsNullError();
        return false
    }
    if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(a)) {
        mobilePhoneNoTips.showInputError();
        return false
    }
    return true
}
var sixtySecond = 60;
var contractInterval;
function countDownSixty() {
    if (sixtySecond <= -1) {
        clearInterval(contractInterval);
        mobilePhoneNoTips.init();
        sixtySecond = 60
    }
    jQuery("#waitSixtySecond #sixtySecond").html(sixtySecond + "s");
    sixtySecond--
}
var mobilePhoneNoTips = {init: function() {
        jQuery("#sendVerifyCode").show();
        jQuery("#mobilePhoneNoErrorDiv").hide();
        jQuery("#waitSixtySecond").hide();
        jQuery("#mobilePhoneNo").removeClass("error_color")
    }, waitSixtySecond: function() {
        jQuery("#sendVerifyCode").hide();
        jQuery("#mobilePhoneNoErrorDiv").hide();
        jQuery("#waitSixtySecond").show();
        jQuery("#mobilePhoneNo").removeClass("error_color");
        contractInterval = setInterval("countDownSixty()", 1000)
    }, showSysError: function() {
        mobilePhoneNoTips.showErrorMsg("网络异常，请稍后重试")
    }, showIsNullError: function() {
        mobilePhoneNoTips.showErrorMsg("手机号码不能为空")
    }, showInputError: function() {
        mobilePhoneNoTips.showErrorMsg("手机号码输入有误，请重新输入")
    }, showErrorMsg: function(a) {
        jQuery("#mobilePhoneNo").addClass("error_color");
        jQuery("#mobilePhoneNoErrorDiv").show();
        jQuery("#mobilePhoneNoErrorDiv span").text(a);
        jQuery("#waitSixtySecond").hide();
        jQuery("#mobilePhoneNo").focus()
    }};
var contractVerifyCodeTips = {init: function() {
        jQuery("#verifyCodeInitDiv").show();
        jQuery("#verifyCodeErrorDiv").hide();
        jQuery("#verifyCode").removeClass("error_color")
    }, showSysError: function() {
        contractVerifyCodeTips.showErrorMsg("网络异常，请稍后重试")
    }, showIsNullError: function() {
        contractVerifyCodeTips.showErrorMsg("验证码不能为空")
    }, showInputError: function() {
        contractVerifyCodeTips.showErrorMsg("验证码输入有误，请仔细核对手机短信")
    }, showErrorMsg: function(a) {
        jQuery("#verifyCode").addClass("error_color");
        jQuery("#verifyCodeErrorDiv span").text(a);
        jQuery("#verifyCodeErrorDiv").show();
        jQuery("#verifyCodeInitDiv").hide();
        jQuery("#verifyCode").focus()
    }};
function checkVerifyCode() {
    var b = jQuery("#verifyCode");
    if (b.is(":visible") == false) {
        return true
    }
    var e = jQuery.trim(b.val());
    b.val(e);
    if (e == "") {
        contractVerifyCodeTips.showIsNullError();
        return false
    }
    if (e.length != 6) {
        contractVerifyCodeTips.showInputError();
        return false
    }
    if (isNaN(e)) {
        contractVerifyCodeTips.showInputError();
        return false
    }
    contractVerifyCodeTips.init();
    if (!checkMobilePhoneNo()) {
        return false
    }
    var d = jQuery("#mobilePhoneNo");
    var c = jQuery.trim(d.val());
    var f = {mobilePhoneNo: c, validCode: e};
    var a = "/checkoutV3/other/getContractPhoneAccessToken.do";
    $.post(a, f, function(g) {
        if (!g) {
            contractVerifyCodeTips.showSysError();
            return false
        }
        if (!g.contractPhoneAccessTokenResult) {
            contractVerifyCodeTips.showSysError();
            return false
        }
        if (g.contractPhoneAccessTokenResult.code == 4 || g.contractPhoneAccessTokenResult.code == 5) {
            return true
        } else {
            contractVerifyCodeTips.showErrorMsg(g.contractPhoneAccessTokenResult.message);
            return false
        }
    });
    return true
}
var contractCardNumTips = {init: function() {
        jQuery("#cardNum").removeClass("error_color");
        jQuery("#cardNumErrorDiv").hide()
    }, showIsNullError: function() {
        contractCardNumTips.showErrorMsg("身份证号码不能为空")
    }, showInputError: function() {
        contractCardNumTips.showErrorMsg("身份证号码有误，请重新输入")
    }, showErrorMsg: function(a) {
        jQuery("#cardNum").addClass("error_color");
        jQuery("#cardNumErrorDiv span").text(a);
        jQuery("#cardNumErrorDiv").show();
        jQuery("#cardNum").focus()
    }};
function checkCardNum() {
    var c = jQuery("#cardNum");
    var b = jQuery.trim(c.val());
    c.val(b);
    if (b == "") {
        contractCardNumTips.showIsNullError();
        return false
    }
    var a = validateCredentialsNum(b);
    if (!a.passed) {
        contractCardNumTips.showInputError();
        return false
    }
    contractCardNumTips.init();
    return true
}
function checkCardAddress() {
    var a = $("#credentialsAddress");
    var c = $.trim(a.val());
    a.val(c);
    var d = $("#credentialsAddressError");
    if (c.length == 0) {
        return b("请输入证件地址")
    }
    if (c.length > 30) {
        return b("证件地址有误，请重新输入")
    }
    function b(e) {
        d.show();
        $("span", d).html(e);
        a.addClass("error_color");
        return false
    }
    d.hide();
    a.removeClass("error_color");
    return true
}
function checkHostName() {
    var b = $("#hostName");
    var e = $.trim(b.val());
    b.val(e);
    var d = $("#hostNameError");
    if (e.length == 0) {
        return a("请输入机主姓名")
    }
    var c = validateHostName(e);
    if (!c.passed) {
        return a("机主姓名有误，请重新输入")
    }
    function a(f) {
        d.show();
        $("span", d).html(f);
        b.addClass("error_color");
        return false
    }
    d.hide();
    b.removeClass("error_color");
    return true
}
function checkMobileNetwokDeal() {
    mobileNetwokDeal;
    if (!$("#mobileNetwokDeal").is(":checked")) {
        $("#mobileNetwokDealError").show();
        return false
    }
    return true
}
var userAuthFacade = {init: function(a) {
        $.get("/checkoutV3/other/getUserAuth.do?r=" + Math.random(), function(b) {
            var c = b.code;
            if (c == 0) {
                popLoginWin()
            } else {
                if (c == 1) {
                } else {
                    if (c == 2 || c == 3) {
                        b.authType = a;
                        $("#userAuthDiv").setTemplateElement("userAuthTemplate");
                        $("#userAuthDiv").processTemplate(b);
                        $("#userAuthDiv").show();
                        userAuthFacade.regEvent(c)
                    }
                }
            }
        })
    }, regEvent: function(c) {
        if (c == 2) {
            var b = $.cookie("yihaodian_uid");
            var a = URLPrefix.shoping_yhd + "/smrz?u=" + b;
            $("#userAuthDiv .dimensions").attr("src", URLPrefix.shoping_cart_self + "/cart/QRCode.do?width=70&height=70&content=" + encodeURIComponent(a))
        }
        $("#userAuthDiv .refresh").click(function() {
            location.reload();
            return false
        });
        var d = null;
        $("#userAuthDiv .icon_tele").hover(function() {
            $(".id_card", $(this)).show();
            clearTimeout(d)
        }, function() {
            var e = $(this);
            d = setTimeout(function() {
                $(".id_card", e).hide()
            }, 500)
        })
    }};
var simpleUserAuthFacade = {init: function() {
        $.get("/checkoutV3/other/getUserAuth.do?r=" + Math.random(), function(a) {
            var b = a.code;
            if (b == 0) {
                popLoginWin()
            } else {
                if (b == 1) {
                } else {
                    if (b == 2 || b == 3) {
                        simpleUserAuthFacade.processTemplate(a)
                    }
                }
            }
        })
    }, processTemplate: function(a) {
        var b = $("#userAuthDiv");
        b.setTemplateElement("simpleUserAuthTemplate");
        b.processTemplate(a);
        b.show();
        simpleUserAuthFacade.regEvent(a)
    }, save: function() {
        var c = $("#userAuthDiv");
        var b = $("#realName", c).val();
        var a = $("#idCard", c).val();
        if (!b) {
            simpleUserAuthFacade.showError("请输入用户姓名");
            return
        }
        if (!a) {
            simpleUserAuthFacade.showError("请输入身份证号码");
            return
        }
        var e = $(".submit", c);
        var d = $('<span id="loadingSaveInfoMsg"><i></i>正在保存信息...</span>');
        e.hide();
        e.before(d);
        $.post("/checkoutV3/other/saveUserAuth.do", {realName: b, idCard: a}, function(f) {
            var g = f.code;
            if (g == 0) {
                popLoginWin()
            } else {
                if (g == 1) {
                    setTimeout(function() {
                        simpleUserAuthFacade.init()
                    }, 500)
                } else {
                    if (g == 2) {
                        simpleUserAuthFacade.showError(f.msg);
                        e.show();
                        d.hide()
                    }
                }
            }
        })
    }, regEvent: function(a) {
        if (a.code == 3) {
            $("#userAuthDiv #userAuthModify").click(function() {
                a.code = 2;
                simpleUserAuthFacade.processTemplate(a)
            })
        }
        if (a.code == 2) {
            $("#userAuthDiv .submit").click(function() {
                simpleUserAuthFacade.save()
            });
            var b = $("#userAuthDiv #idCard");
            var c = b.val();
            b.focusin(function() {
                var d = b.val();
                var e = d.replace(/\s/ig, "");
                if (/^\d{3}\*{11}\d{3}(\d|x|X)$/.test(e)) {
                    b.val("")
                }
            }).focusout(function() {
                if (!b.val()) {
                    b.val(c)
                }
            })
        }
    }, showError: function(a) {
        $("#userAuthDiv .info_tip").show();
        $("#userAuthDiv .info_tip span").html(a)
    }};
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
function saveUserPrivilege(d) {
    var f;
    var e = $(d);
    if (e.hasClass("select")) {
        e.removeClass("select");
        f = "cancel"
    } else {
        f = "use";
        e.addClass("select")
    }
    var a = "";
    if ($("#SellCountFixBox").is(":visible")) {
        a = "#SellCountFixBox"
    } else {
        a = "#statisticsUI"
    }
    gUseFed.load({box: a});
    var c = "/checkoutV3/payment/privilegeSave.do?action=" + f;
    jQuery.post(c, b);
    function b(g) {
        gUseFed.removeLoad();
        if (isAppearError(g)) {
            return
        }
        showPaymentNotEditableLayout();
        globalRender(g);
        yhdLib.popclose()
    }}
function getPrivilegeMonth(a) {
    if (a) {
        return a.substr(5, 2) * 1 + "月份"
    } else {
        return""
    }
}
;
function samCardOnSendVerifyCode() {
    var c = jQuery("#samCardMobilePhoneNo").val();
    if (!samCardCheckMobilePhoneNo()) {
        return false
    }
    var b = jQuery("#verifyCode");
    b.val("");
    var a = "/checkoutV3/other/sendContractPhoneVerifyCode.do?mobilePhoneNo=" + c + "&rd=" + Math.random();
    $.post(a, function(d) {
        if (!d) {
            samCardMobilePhoneNoTips.showSysError();
            return false
        }
        if (!d.contractPhoneSmsSendResult) {
            samCardMobilePhoneNoTips.showSysError();
            return false
        }
        if (d.contractPhoneSmsSendResult.code == 3) {
            samCardMobilePhoneNoTips.waitSixtySecond()
        } else {
            if (d.contractPhoneSmsSendResult.code == 1) {
                samCardMobilePhoneNoTips.showIsNullError()
            } else {
                if (d.contractPhoneSmsSendResult.code == 4) {
                    samCardMobilePhoneNoTips.showErrorMsg(d.contractPhoneSmsSendResult.message)
                } else {
                    samCardMobilePhoneNoTips.showSysError()
                }
            }
        }
    })
}
function samCardCheckMobilePhoneNo() {
    var b = jQuery("#samCardMobilePhoneNo");
    var a = jQuery.trim(b.val());
    b.val(a);
    if (a == "") {
        samCardMobilePhoneNoTips.showIsNullError();
        return false
    }
    if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(a)) {
        samCardMobilePhoneNoTips.showInputError();
        return false
    }
    samCardMobilePhoneNoTips.init();
    return true
}
var samCardMobilePhoneNoTips = {init: function() {
        jQuery("#samCardMobilePhoneNoErrorDiv").hide();
        jQuery("#samCardMobilePhoneNo").removeClass("error_color")
    }, afterCountDown: function() {
        jQuery("#samCardSendVerifyCode").show();
        jQuery("#samCardMobilePhoneNoErrorDiv").hide();
        jQuery("#samCardWaitSixtySecond").hide();
        jQuery("#samCardMobilePhoneNo").removeClass("error_color")
    }, waitSixtySecond: function() {
        jQuery("#samCardSendVerifyCode").hide();
        jQuery("#samCardMobilePhoneNoErrorDiv").hide();
        jQuery("#samCardWaitSixtySecond").show();
        jQuery("#samCardMobilePhoneNo").removeClass("error_color");
        samCardContractInterval = setInterval("samCardCountDownSixty()", 1000)
    }, showSysError: function() {
        samCardMobilePhoneNoTips.showErrorMsg("网络异常，请稍后重试")
    }, showIsNullError: function() {
        samCardMobilePhoneNoTips.showErrorMsg("手机号码不能为空")
    }, showInputError: function() {
        samCardMobilePhoneNoTips.showErrorMsg("手机号码输入有误，请重新输入")
    }, showErrorMsg: function(a) {
        jQuery("#samCardMobilePhoneNo").addClass("error_color");
        jQuery("#samCardMobilePhoneNoErrorDiv").show();
        jQuery("#samCardMobilePhoneNoErrorDiv span").text(a);
        jQuery("#samCardWaitSixtySecond").hide();
        jQuery("#samCardMobilePhoneNo").focus()
    }};
var samCardSixtySecond = 60;
var samCardContractInterval;
function samCardCountDownSixty() {
    if (samCardSixtySecond <= -1) {
        clearInterval(samCardContractInterval);
        samCardMobilePhoneNoTips.afterCountDown();
        samCardSixtySecond = 60
    }
    jQuery("#samCardWaitSixtySecond #samCardSixtySecond").html(samCardSixtySecond + "s");
    samCardSixtySecond--
}
var samCardVerifyCodeTips = {init: function() {
        jQuery("#samCardVerifyCodeInitDiv").show();
        jQuery("#samCardVerifyCodeErrorDiv").hide();
        jQuery("#samCardVerifyCode").removeClass("error_color")
    }, showSysError: function() {
        samCardVerifyCodeTips.showErrorMsg("网络异常，请稍后重试")
    }, showIsNullError: function() {
        samCardVerifyCodeTips.showErrorMsg("验证码不能为空")
    }, showInputError: function() {
        samCardVerifyCodeTips.showErrorMsg("验证码输入有误，请仔细核对手机短信")
    }, showErrorMsg: function(a) {
        jQuery("#samCardVerifyCode").addClass("error_color");
        jQuery("#samCardVerifyCodeErrorDiv span").text(a);
        jQuery("#samCardVerifyCodeErrorDiv").show();
        jQuery("#samCardVerifyCodeInitDiv").hide();
        jQuery("#samCardVerifyCode").focus()
    }};
function samCardCheckVerifyCode() {
    var b = jQuery("#samCardVerifyCode");
    var e = jQuery.trim(b.val());
    b.val(e);
    if (e == "") {
        samCardVerifyCodeTips.showIsNullError();
        return false
    }
    if (e.length != 6) {
        samCardVerifyCodeTips.showInputError();
        return false
    }
    if (isNaN(e)) {
        samCardVerifyCodeTips.showInputError();
        return false
    }
    samCardVerifyCodeTips.init();
    if (!samCardCheckMobilePhoneNo()) {
        return false
    }
    var d = jQuery("#samCardMobilePhoneNo");
    var c = jQuery.trim(d.val());
    var f = {mobilePhoneNo: c, validCode: e};
    var a = "/checkoutV3/other/getContractPhoneAccessToken.do";
    $.post(a, f, function(g) {
        if (!g) {
            samCardVerifyCodeTips.showSysError();
            return false
        }
        if (!g.contractPhoneAccessTokenResult) {
            samCardVerifyCodeTips.showSysError();
            return false
        }
        if (g.contractPhoneAccessTokenResult.code == 4 || g.contractPhoneAccessTokenResult.code == 5) {
            return true
        } else {
            samCardVerifyCodeTips.showErrorMsg(g.contractPhoneAccessTokenResult.message);
            return false
        }
    });
    return true
}
var samCardContractCardNumTips = {init: function() {
        jQuery("#samCardCardNum").removeClass("error_color");
        jQuery("#samCardCardNumErrorDiv").hide()
    }, showIsNullError: function() {
        samCardContractCardNumTips.showErrorMsg("身份证号码不能为空")
    }, showInputError: function() {
        samCardContractCardNumTips.showErrorMsg("身份证号码有误，请重新输入")
    }, showErrorMsg: function(a) {
        jQuery("#samCardCardNum").addClass("error_color");
        jQuery("#samCardCardNumErrorDiv span").text(a);
        jQuery("#samCardCardNumErrorDiv").show();
        jQuery("#samCardCardNum").focus()
    }};
function samCardCheckCardNum() {
    var c = jQuery("#samCardCardNum");
    var b = jQuery.trim(c.val());
    c.val(b);
    if (b == "") {
        samCardContractCardNumTips.showIsNullError();
        return false
    }
    var a = validateCredentialsNum(b);
    if (!a.passed) {
        samCardContractCardNumTips.showInputError();
        return false
    }
    samCardContractCardNumTips.init();
    return true
}
function samCardCheckHostName() {
    var b = $("#samCardHostName");
    var e = $.trim(b.val());
    b.val(e);
    var d = $("#samCardHostNameError");
    if (e.length == 0) {
        return a("请输入会员姓名")
    }
    var c = validateHostName(e);
    if (!c.passed) {
        return a("会员姓名有误，请重新输入")
    }
    function a(f) {
        d.show();
        $("span", d).html(f);
        b.addClass("error_color");
        return false
    }
    d.hide();
    b.removeClass("error_color");
    return true
}
function checkSamCardDeal() {
    if (!$("#samCardDeal").is(":checked")) {
        $("#samCardDealError").show();
        return false
    }
    return true
}
;