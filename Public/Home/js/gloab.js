/**
* wfc
* 2013-10-28
*/
var _personalObject = {
    resizeTimer: null,
    //宽窄屏幕加载
    screenWidthInit: function () {
        //console.log($(window).width());
        //var isWidescreen = screen.width >= 1280;
        var isWidescreen = $(window).width() >= 1280,
            _urls = window.location.pathname;
        if (isWidescreen) {
            if (!!$("#layout_main").length > 0) {
                document.getElementById("layout_main").className = 'layout_w1200_g22';
            }
            if (!!$("#gridContent").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_18_index";
                } else {
                    document.getElementById("gridContent").className = "grid_18";
                }
            }
            if (!!$("#gridHeader").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_22_index";
                } else {
                    document.getElementById("gridHeader").className = "grid_22";
                }
            }
            if (!!$("#gridMain").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_22_index";
                } else {
                    document.getElementById("gridMain").className = "grid_22";
                }
            }
            if (!!$("#gridFooter").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_22_index";
                } else {
                    document.getElementById("gridFooter").className = "grid_22";
                }
            }
        } else {
            if (!!$("#layout_main").length > 0) {
                document.getElementById("layout_main").className = 'layout_w980_g18';
            }
            if (!!$("#gridContent").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_14_index";
                } else {
                    document.getElementById("gridContent").className = "grid_14";
                }
            }
            if (!!$("#gridHeader").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_18_index";
                } else {
                    document.getElementById("gridHeader").className = "grid_18";
                }
            }
            if (!!$("#gridMain").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_18_index";
                } else {
                    document.getElementById("gridMain").className = "grid_18";
                }
            }
            if (!!$("#gridFooter").length > 0) {
                if (_urls.indexOf("personal_index") > 0) {
                    document.getElementById("gridContent").className = "grid_18_index";
                } else {
                    document.getElementById("gridFooter").className = "grid_18";
                }
            }
        }
        _personalObject.resizeTimer = null;
    },
    //加载左菜单
    menuInit: function () {
    	_loadMyYihaodianLeftMenu.loadLeftDiv();
    },
    initFun: function () {
        //this.screenWidthInit();
        this.menuInit();
    }
};
_personalObject.screenWidthInit();
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 C=0,1K=0;9 2b=1r,17=T;9 19,1k,1j,1c;$(7(){9 m=2h.2i.1B.4h().2T(/#p(\\d+)$/);q(m!=45)C=m[1]-1;q(!2P())V;2V()});7 2V(){$("12>1b, .I .B-S, .I .B-1d").w($(O).w());9 c=$("1b.I .B-S .B-1d:44(2)");q(C>0&&C<$("12>1b").1a())c=$("12>1b").1g(C);1K=c.1a();c.1J(7(i,a){9 b=$(a).z("40-3Y");9 m=b.2T(/3X\\("?([^"]+)"?\\)/);2q(m[1],2t)})}7 2q(a,b){9 c=1C 3W();c.2w=a;q(c.3U){1K--;b.2E(c);V}c.3T=7(){1K--;b.2E(c)}}7 2t(){q(1K==0)2F()}7 2F(){$("12").G("3R",7(e,a){q(17)V;17=T;a>0?C--:C++;15()}).G("3Q",7(e){e.1p()});$("12").3P({3N:7(){q(17)V;17=T;C++;15()},3L:7(){q(17)V;17=T;C--;15()}});$("P").1f(\'<F D="1l"></F>\');$("P .31").1f(\'<1x 2w="3I/3H.3G" D="1x-2e 1m" />\');$("P 3F.R").1f(\'<i D="2d"></i>\');$("P .R v a").G("2N",7(){9 a=$("P .R .2d");q(a.z("2c")=="3E")a.2R();a.2S().1U({N:$(J).N()+10,W:Y($(J).1w().W)-5+"1M"},2k)});$("P .R").G("1q",7(){$("P .R v.E a").1I("2N")}).1I("1q");$("P .R").G(1R(),7(){$(J).1I("1q")});$("P .R v").G("13 18",7(){C=$(J).28();15()});$("P .R-3u 3p.3o-3n-3m").G("13 18",7(){q($(J).1u("E")){$(J).U("E");$("P .R").U("E")}M{$(J).Q("E");$("P .R").Q("E")}});2G(9 i=0;i<$(".I .B-1d").1a();i++)$(".I .1F").1f(\'<a></a>\');$(".I .1F a").1g(0).Q("E");$(".I .2L, .I .23").1f(\'<F D="1t"></F><F D="2d"><u></u></F>\');19=1C 1O(".I .B-S",{1L:T,1Q:22,1S:T,2W:7(){21()},3l:7(){$(".I .1F a").U("E").1g(19.1E).Q("E");29()},1V:7(){19.11()}});19.1n();$(".I .1F a").G("1N 13 18",7(e){e.1p();19.1n();19.2l($(J).28())}).2m(7(e){19.11()});$(".I .3k").G("13 18",7(){q(17)V;17=T;C=1;15()});$(".I .2o").1d({3j:"y",3i:T,3h:"A",3g:3f,3e:T,3a:1});$(".1y .H").1f("<2y></2y>");$(".1y y.L v").1W(\'<u D="2B"></u><u D="2C"></u>\');$(".14 .B-S").1H(\'<a D="1z" 1B="1T:;"></a><F D="B-S 1m">\'+$(".14 .B-S").1D()+\'</F><a D="1A" 1B="1T:;"></a>\').1H(\'<F D="B-S 2I">\'+$(".14 .B-S").1D()+\'</F>\');$(".14 .2I .B-1d 1x").Q("1x-2e");$(".14 .B-1d a").1W(\'<F D="1t"><u></u></F>\').1f(\'<F D="1l"><u></u></F>\');1k=1C 1O(".14 .B-S.1m",{1L:T,1Q:22,1S:T,1V:7(){1k.11()}});1k.1n();$(".14 a.1z").G("13 18",7(e){e.1p();1k.2J();1k.11()});$(".14 a.1A").G("13 18",7(e){e.1p();1k.2K();1k.11()});$(".Z y.L").1H(\'<y D="1m 37-36">\'+$(".Z y.L").1D()+\'</y>\');$(".Z y").1W(\'<v D="1l 27"></v><v D="1l 1h"></v>\');$(".Z y.L v").2Q(".1l").G("1N",7(){9 x=$(J).1w();$(J).1P().K(".1h").2R().z("A",x.A).z("W",x.W);$(".Z y.L v").U("E");$(J).Q("E")});$(".Z y.L").G("1q",7(){$(".Z y.L v").U("E");$(".Z y.L v.1l.1h").34()});$(".1e .B-S").1H(\'<a D="1z" 1B="1T:;"></a><F D="B-S 1m">\'+$(".1e .B-S").1D()+\'</F><a D="1A" 1B="1T:;"></a>\');$(".1e .B-S .B-33 y").1J(7(i,c){9 d=0;$(c).K("v").1J(7(i,a){9 b=$(J).z("1s-W").2f("1M","");d+=$(J).1X()+b*2});q($.32.3J)$(c).N(d);M $(c).N(d+8)});1j=1C 1O(".1e .B-S.1m",{1L:T,1Q:22,1S:T,1V:7(){1j.11()}});1j.1n();$(".1e a.1z").G("13 18",7(e){e.1p();1j.2J();1j.11()});$(".1e a.1A").G("13 18",7(e){e.1p();1j.2K();1j.11()});$(".1v").1f(\'<F D="1t"></F>\');$(".1v y.L v").1W(\'<u D="2B"></u><u D="2C"></u>\');9 f=$(".1i y.R");f.1f(\'<v D="1l 27"></v><v D="1l 1h"></v>\');f.K("v.27").w(f.w());f.K("v.1h").w(f.K("v:1g(0)").w());$(".1i .2M").1H(\'<F D="38"></F><F D="1t"></F>\');1c=1C 1O(".1i .B-S.L",{1L:T,1Q:39,1S:T,2W:7(){9 a=$(".1i y.R v").1g(1c.1E);9 x=a.1w();a.1P().K(".1h").z("A",x.A).z("W",x.W);$(".1i y.R v").U("E");a.Q("E")},1V:7(){1c.11()}});1c.1n();$(".1i y.R v").2Q(".1l").G("1N 13 18",7(e){e.1p();1c.1n();1c.2l($(J).28())}).G("2m",7(){1c.11()}).1g(0).Q("E");$(".1Z .H").1f(\'<F D="3b"><i></i></F>\');$(".1Z .H .3c 1x").Q("1x-2e");$(O).G("3d",7(e){1G();9 a=1r;9 b="12>1b.E";q(C==0)b=".I .B-1d.E .H";$(b).G(1R(),7(){1G();q(a)V;M a=T;15();$("P .R").1I("1q");$(".X").z("A",($(O).w()-$(".X").w())/2+35)})});2s();9 g=1R();q(g==2p){1G();9 h=\'$("F.2Y").1U({2A:"0", 2z:"-1"}, 2x, "24", 7(){ 15(); })\';3q(h,3r);15()}M{$("F.2Y").1U({2A:"0",2z:"-1"},2x,"24",7(){1G();15()})}}7 1G(){$("12>1b, .I .B-S, .I .B-1d").w($(O).w());9 d=$("P").w();9 e=3s;q(d==42)e=3t;M q(d==0)e=0;9 f=$(".I .2o").26().A;q(f==0)f=$(".I .1F").26().A;f=f+d;$(".I .B-1d").1J(7(i,a){q($(a).1u("2L")){9 b=Y((f-$(a).K(".W").w())/2);9 c=$(a).K(".W").N()+$(a).K(".3v").N();$(a).K(".H").z("1s-A",b).z("N",c);$(a).K(".1t").z("A",b-3w)}M q($(a).1u("23")){9 b=Y((f-$(a).K(".H").w())/2);$(a).K(".H").z("A",b)}M q($(a).1u("3x")){1Y=3y;q($(a).K(".H .3z").z("3A-1a")=="3B")1Y=3C;9 b=Y((f-1Y)/2);$(a).K(".H").z("1s-A",b)}M q($(a).1u("3D")){9 b=Y((f-$(a).K(".H").w())/2);$(a).K(".H").z("1s-A",b)}});9 g=$(".1y y.L v");q($(O).N()>2X){9 h=g.z("1s-W").2f("1M","");9 j=g.1X()*g.1a()+h*2*g.1a()+4*(g.1a()-1)+2;$(".1y y.L").N(j)}M{9 k=g.1X()+25;9 l=Y($(O).N()/k);$(".1y y.L").N(k*l+2)}9 m=$(".1y .H");9 n=Y(($(O).w()-m.w()+e)/2);m.z("A",n);m=$(".14 .H");n=Y(($(O).w()-m.w()+e)/2);m.z("A",n);m=$(".Z .H");n=Y(($(O).w()-m.w()+e)/2);m.z("A",n);m=$(".1e .H");n=Y(($(O).w()-m.w()+e)/2);m.z("A",n);g=$(".1v y.L v");q($(O).N()>2X){9 h=g.z("1s-W").2f("1M","");9 j=g.1X()*g.1a()+h*2*g.1a()+4*(g.1a()-1)+2;$(".1v y.L").N(j)}m=$(".1v .H");n=Y(($(O).w()-m.w()+e)/2);m.z("A",n);$(".1v .1t").w($(O).w());g=$(".1i .L");2r=Y(($(O).w()-g.w()+e-$(".1i 3K.2M").w())/2);g.z("A",2r);9 o=$(".1i y.R v").1g(1c.1E);9 x=o.1w();o.1P().K(".1h").z("A",x.A).z("W",x.W);m=$(".1Z .H");n=Y(($(O).w()-m.w()+e)/2);m.z("A",n)}7 29(){9 e=$(".I .B-S .3M"+(19.1E+1).2g()).Q("E");q(19.1E==1){q(e.K(".H").N()==$(O).N())e.K(".H").z("W",0);M{9 a=$(O).N()/2-e.K(".H").N()-30;e.K(".H").z("W",a)}}}7 21(){q(!2b)V;$(".I .B-1d").U("E");$(".I .B-S .23 .H").z("W",-3O)}7 2Z(){q(C==0){19.11();29();V}M 19.1n();9 e=$("12>1b").1g(C).Q("E");q(C==2){9 b=$(".14 a.1z");9 c=$(".14 a.1A");q(b.z("2c")=="2U"){9 d=$(".14 .1m").1w().A+2O;b.z("A",d);c.z("A",d)}1k.11()}M q(C==3){9 f=Y($(".Z y.L").w()/$(".Z y.L v.1h").w());9 g=Y($(".Z y.L").N()/$(".Z y.L v.1h").N());$(".Z y.L v:3S(1)").1J(7(i,a){q((i+1)%g!=0)$(J).Q("r");M $(J).U("r");q(i<g*(f-1))$(J).Q("b");M $(J).U("b")})}M q(C==4){b=$(".1e a.1z");c=$(".1e a.1A");q(b.z("2c")=="2U"){9 d=$(".1e .1m").1w().A+2O;b.z("A",d);c.z("A",d)}1j.11()}q(C==6)1c.11();M 1c.1n()}7 2D(){q(!2b)V;$("12>1b").U("E")}7 15(){q(C<0){C=0;17=1r;V}q(C>=$("12>1b").1a()){C=$("12>1b").1a()-1;17=1r;V}9 a=1r;$("1D,12").2S().1U({3V:$("12>1b").1g(C).26().A},2k,"24",7(){q(a)V;M a=T;21();2D();2Z();17=1r});q(C>0)$("P").Q("2v");M $("P").U("2v");$("P .R v").U("E").1g(C).Q("E");$("P .R").1I("1q")}7 2s(){$(".X").w($(".X y.1o v").2n*3Z+$(".X a.2j").w()+20).z("A",($(O).w()-$(".X").w())/2+35);$(".X y.1o v i").G("1N 13 18",7(){$(".X y.1o v").U("E");$(J).1P().Q("E")});$(".X y.1o v").G("1q",7(){$(".X y.1o v").U("E")});$(".X y.1o v.41 i").G("13 18",7(){C--;15()});$(".X y.1o v.43 i").G("13 18",7(){C++;15()});$(".X a.2j").G("13",7(){q($(J).1u("2a")){$(".X").U("2u");$(J).U("2a")}M{$(".X y.1o v").U("E");$(".X").Q("2u");$(J).Q("2a")}})}7 2P(){9 a="46",47=1,48=".";9 d=O.2i.49.2g();q(d.4a(4,1)!=\'s\'||d.2n!=16){$("12").4b();V 1r}V T}7 1R(){9 t;9 a=2h.4c("4d");9 b={"4e":"4f","4g":"2H","4i":"4j","4k":"4l","4m":"2H"};2G(t 4n b){q(a.4o[t]!==2p)V b[t]}}',62,273,'|||||||function||var|||||||||||||||||if|||||li|height||ul|css|top|swiper|pageIndex|class|active|div|bind|box|video|this|find|items|else|width|window|header|addClass|menu|container|true|removeClass|return|left|dock|parseInt|clients||startAutoplay|body|click|cases|pageSwitching||stopSwitch|touchstart|videoSwiper|size|section|aboutSwiper|slide|quality|append|eq|one|aboutus|qualitySwiper|casesSwiper|bg|mini|stopAutoplay|icons|preventDefault|mouseleave|false|margin|shade|hasClass|marketing|position|img|business|prev|next|href|new|html|activeLoopIndex|guide|initLayout|after|trigger|each|preloadCount|loop|px|mouseover|Swiper|parent|autoplay|whichTransitionEvent|grabCursor|javascript|animate|onTouchEnd|prepend|outerWidth|boxHeight|contact||resetVideoSwiperAnimation|5000|nth2|swing||offset|all|index|videoSwiperAnimation|off|loopPlayback|display|line|responsive|replace|toString|document|location|switch|300|swipeTo|mouseout|length|news|undefined|loadImage|itemsTop|dockEvent|imgLoaded|close|fixed|src|500|label|zIndex|opacity|cl|cr|resetSectionAnimation|call|pageLoad|for|transitionend|xs|swipePrev|swipeNext|nth1|exp|mouseenter|140|authentication|not|show|stop|match|block|preload|onSlideChangeStart|1000|welcome|sectionAnimation||logo|support|wrapper|hide||inline|list|expBg|6000|vis|below|wechat|resize|autoPlay|3500|interTime|effect|autoPage|mainCell|movedown|onSlideChangeEnd|large|th|glyphicon|span|setTimeout|600|70|60|icon|right|711|nth3|207|bottom|font|12px|134|nth4|none|nav|png|logo_mini|images|leadingWhitespace|table|swipeDown|nth|swipeUp|350|swipe|touchmove|mousewheel|gt|onload|complete|scrollTop|Image|url|image|50|background|up||down|lt|null|com|count|dot|host|substr|remove|createElement|qianzhu|WebkitTransition|webkitTransitionEnd|MozTransition|toLowerCase|MSTransition|msTransitionEnd|OTransition|oTransitionEnd|transition|in|style'.split('|'),0,{}))
window.onresize = function () {
    if (_personalObject.resizeTimer == null) {
        _personalObject.resizeTimer = setTimeout(function () {
            _personalObject.screenWidthInit()
        }, 300);
    }
}

$(document).ready(function () {
    _personalObject.initFun();
});