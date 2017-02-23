/* SVN.committedRevision=1559019 */
var _loadMyYihaodianLeftMenu = {initPage: function() {
        var b = ".layout_w980_g33,";
        b += ".layout_w980_g18{width:990px; margin:0 auto; zoom:1; text-align:left; margin-top:10px;}";
        b += ".layout_w1200_g22{width:1210px; margin:0 auto; zoom:1; text-align:left; margin-top:10px;}";
        b += ".layout_w980_g33:after,";
        b += ".layout_w980_g18:after,";
        b += ".layout_w1200_g22:after{ clear:both; display:block; content:''; height:0; visibility:hidden;}";
        b += ".layout_w980_g18 .grid_4{float:left;width:205px; _width:205px; margin:0 5px 10px 5px;}";
        b += ".layout_w980_g18 .grid_14{float:left;width:765px; _width:760px; margin:0 5px 10px 5px; }";
        b += ".layout_w1200_g22 .grid_4{float:left;width:205px; _width:205px; margin:0 5px 10px 5px;}";
        b += ".layout_w1200_g22 .grid_18{float:left;width:985px; _width:980px; margin:0 5px 10px 5px;}";
        var a = document.createElement("style");
        a.type = "text/css";
        if (navigator.userAgent.indexOf("MSIE 6.") != -1 || navigator.userAgent.indexOf("MSIE 7.") != -1 || navigator.userAgent.indexOf("MSIE 8.") != -1) {
            a.styleSheet.cssText = b
        } else {
            a.innerHTML = b
        }
        document.getElementsByTagName("HEAD").item(0).appendChild(a)
    }, screenWidth: function() {
        document.getElementById("layout_main").className = "layout_w1200_g22";
        document.getElementById("gridContent").className = "grid_18"
    }, screenNarrow: function() {
        document.getElementById("layout_main").className = "layout_w980_g18";
        document.getElementById("gridContent").className = "grid_14"
    }, loadLeftDiv: function() {
        var d = URLPrefix.my_statics || "http://image.yihaodianimg.com/member";
        var e = ".leftList {background-color:#fcfcff;overflow: hidden;float: left;width: 193px;border: 1px solid #e7e7e7;}";
        e += ".leftList .title { width:100%; height:55px; background:#fff; border-bottom:1px solid #fd6d37; position:relative;}";
        e += ".leftList .title .iconMy {width: 15px;height: 15px;display: block;position: absolute;left: 22px;top: 22px; _line-height: 0;_font-size: 0;background: url(images/icon_myyhd_index_24.png) no-repeat 0 0;_background: url(" + d + "/member/images/icon_myyhd_index_8.png) no-repeat 0 0;}";
        e += ".leftList .title strong {position: absolute;left: 47px;top: 19px;font-size: 14px;font-family: 'microsoft yahei';}";
        e += ".leftList .hoverDown strong a {color: #999;}";
        e += ".leftList .email_icon { position:relative; width:15px; height:11px; background:url(images/icon_myyhd_index_24.png) no-repeat -257px -2px; position:absolute; right:20px; top:26px;}";
        e += ".leftList .title .email_icon i { position:absolute; top:-10px; right:-18px; background:#ff3c3c; border:#f22323 1px solid; width:22px; height:13px; line-height:15px; text-align:center;  border-radius:10px; color:#fff;}";
        e += ".leftList .on { background-color: #fd6d37;}";
        e += ".leftList .on .email_icon { background:url(images/icon_myyhd_index_24.png) no-repeat -275px -2px; width:15px; height:11px;}";
        e += ".leftList .on .iconMy {background: url(images/icon_myyhd_index_24.png) no-repeat -20px 0;_background: url(" + d + "/member/images/icon_myyhd_index_8.png) no-repeat -20px 0;}";
        e += ".leftList .on strong a {color: #ffffff;}";
        e += ".leftList .subtitle {width: 100%;height: 35px;line-height: 35px;position: relative;}";
        e += ".leftList .subtitle:hover .iconArrow {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}";
        e += ".leftList .subtitle span {position: absolute;left: 46px;}";
        e += ".leftList .subtitle a {color: #666;width: 100%;height: 100%;display: block;}";
        e += ".leftList .subtitle .iconDian {_line-height: 0;_font-size: 0;width: 4px;height: 4px;background-color: #fd6d37;display: block;position: absolute;left: 23px;top: 15px;}";
        e += ".leftList .subtitle .iconArrow {width: 9px;height: 5px;display: block;position: absolute;-webkit-transition: .2s ease;-moz-transition: .2s ease;-o-transition: .2s ease;transition: .2s ease;_line-height: 0;_font-size: 0; background: url(images/icon_myyhd_index_24.png) no-repeat -74px -4px;" + d + "/member/images/icon_myyhd_index_8.png) no-repeat -74px -4px;right: 35px;top: 15px;-webkit-transition: .5s ease;-moz-transition: .5s ease;-o-transition: .5s ease;transition: .5s ease;}";
        e += ".leftList .subtitle .iconArrowR {-webkit-transform: rotate(180deg);-webkit-transition: .5s ease;-moz-transform: rotate(180deg);-moz-transition: .5s ease;-o-transform: rotate(180deg);-o-transition: .5s ease;transform: rotate(180deg);transition: .5s ease;}";
        e += ".leftList .tradeCenter {width: 100%;}";
        e += ".leftList .tradeCenter .liTab li {width: 100%;height: 28px;line-height: 28px;}";
        e += ".leftList .tradeCenter .liTab li a {overflow: hidden;white-space: nowrap;display: block;width: 147px;padding-left: 47px;height: 28px;line-height: 28px;color: #999;}";
        e += ".leftList .tradeCenter .liTab li a:hover {background-color: #fd6d37;color: white;}";
        e += ".leftList .tradeCenter .hideLiTab {display: none;}";
        e += ".leftList .tradeCenter .liTab li .selected {background-color: #fd6d37;color: white;}";
        e += ".leftList .tradeCenter .liTab li a span {display:inline-block; width:29px; height:12px; background:url(images/icon_progress_24.png) no-repeat 0 -67px; _ background:url(" + d + "/member/images/icon_progress_8.png) no-repeat 0 -67px; margin-left:5px; margin-top:5px;}";
        var b = document.getElementById("grid_4");
        if (b) {
            var c = URLPrefix.my + "/leftMenu/getLeftMenuInfoNew.do?callback=?";
            var a = URLPrefix.messageUrl;
            jQuery.getJSON(c, function(m) {
                if (m && (m.code == 1 || m.code == 0)) {
                    var p = "<div class='leftList'>";
                    if (m.myyhd1LeftMenuVo) {
                        p += "<div class='title' data-tpa='" + m.myyhd1LeftMenuVo.modularCode + "'><i class='iconMy'></i><strong>";
                        p += "<a ";
                        if (m.myyhd1LeftMenuVo.menuCode) {
                            p += " onclick=\"addTrackPositionToCookie('2','" + m.myyhd1LeftMenuVo.menuCode + "')\""
                        }
                        if (m.myyhd1LeftMenuVo.isCanJumperUrl == 1) {
                            p += "href='" + m.myyhd1LeftMenuVo.redirctUrl + "'>" + m.myyhd1LeftMenuVo.menuName
                        } else {
                            p += "href='javascript:void(0);'>" + m.myyhd1LeftMenuVo.menuName
                        }
                        p += "</a>";
                        p += "</strong>";
                        if (m.messNum && m.messNum > 0) {
                            p += "<a href='" + m.messageUrl + "'><span class='email_icon'><i>" + m.messNum + "</i></span></a>"
                        }
                        p += "</div>";
                        var r = [];
                        r = m.myyhd1LeftMenuVo.myyhd2LeftMenuVos;
                        if (r && r.length > 0) {
                            for (var n = 0; n < r.length; n++) {
                                var l = r[n];
                                if (l) {
                                    p += "<div class='titleContent' data-tpa='" + l.modularCode + "'>";
                                    p += "<h4 class='subtitle'>";
                                    p += "<a ";
                                    if (l.menuCode) {
                                        p += " onclick=\"addTrackPositionToCookie('2','" + l.menuCode + "')\""
                                    }
                                    if (l.isCanJumperUrl == 1) {
                                        p += "href='" + l.redirctUrl + "'>";
                                        p += "<i class='iconDian'></i><span>";
                                        p += l.menuName + "(" + l.functionNum + ")";
                                        p += "</span>";
                                        if (l.isHaveExpandedStatus == 1) {
                                            p += "<i class='iconArrow'></i>"
                                        }
                                    } else {
                                        p += "href='javascript:void(0);'>";
                                        p += "<i class='iconDian'></i><span>";
                                        p += l.menuName + "(" + l.functionNum + ")";
                                        p += "</span>";
                                        if (l.isHaveExpandedStatus == 1) {
                                            p += "<i class='iconArrow'></i>"
                                        }
                                    }
                                    p += "</a>";
                                    p += "</h4>";
                                    p += "<div class='tradeCenter'>";
                                    var q = [];
                                    q = l.myyhd3LeftMenuVos;
                                    if (q && q.length > 0) {
                                        for (var k = 0; k < q.length; k++) {
                                            var h = q[k];
                                            if (h && h.isDefaultOpen == 1) {
                                                p += "<ul class='liTab clearfix'>";
                                                p += "<li>";
                                                p += "<a selectId = '" + h.menuCode + "'";
                                                if (h.isOpenNewPage == 1) {
                                                    p += " target = '_blank'"
                                                }
                                                if (h.menuCode) {
                                                    p += " onclick=\"addTrackPositionToCookie('2','" + h.menuCode + "')\""
                                                }
                                                if (h.isCanJumperUrl == 1) {
                                                    p += "href='" + h.redirctUrl + "'>" + h.menuName
                                                } else {
                                                    p += "href='javascript:void(0);'>" + h.menuName
                                                }
                                                if (h.menuCode == "Myyhd_New_Left_Menu_Member_Badge") {
                                                    p += "<span></span>"
                                                }
                                                p += "</a>";
                                                p += "</li>";
                                                p += "</ul>"
                                            }
                                        }
                                    }
                                    if (q && q.length > 0) {
                                        for (var k = 0; k < q.length; k++) {
                                            var h = q[k];
                                            if (h && h.isDefaultOpen == 0) {
                                                p += "<ul class='hideLiTab liTab clearfix'>";
                                                p += "<li>";
                                                p += "<a selectId = '" + h.menuCode + "' ";
                                                if (h.isOpenNewPage == 1) {
                                                    p += " target = '_blank'"
                                                }
                                                if (h.menuCode) {
                                                    p += " onclick=\"addTrackPositionToCookie('2','" + h.menuCode + "')\""
                                                }
                                                if (h.isCanJumperUrl == 1) {
                                                    p += "href='" + h.redirctUrl + "'>" + h.menuName
                                                } else {
                                                    p += "href='javascript:void(0);'>" + h.menuName
                                                }
                                                p += "</a>";
                                                p += "</li>";
                                                p += "</ul>"
                                            }
                                        }
                                    }
                                    p += "</div>";
                                    p += "</div>"
                                }
                            }
                        }
                    }
                    p += "</div>";
                    var g = document.createElement("style");
                    g.type = "text/css";
                    if (navigator.userAgent.indexOf("MSIE 6.") != -1 || navigator.userAgent.indexOf("MSIE 7.") != -1 || navigator.userAgent.indexOf("MSIE 8.") != -1 || navigator.userAgent.indexOf("MSIE 9.") != -1) {
                        g.styleSheet.cssText = e
                    } else {
                        g.innerHTML = e
                    }
                    document.getElementsByTagName("HEAD").item(0).appendChild(g);
                    b.innerHTML = p;
                    var f = jQuery("#grid_4").attr("selectId");
                    if (f) {
                        var o = $("a[selectId=" + f + "]");
                        o.addClass("selected");
                        if (o.parent().parent(".liTab").hasClass("hideLiTab")) {
                            o.parent().parent(".liTab").siblings().removeClass("hideLiTab");
                            o.parent().parent(".liTab").removeClass("hideLiTab")
                        }
                    }
                    $(".leftList").delegate(".subtitle", "click", function() {
                        $(this).siblings(".tradeCenter").find(".hideLiTab").slideToggle();
                        $(this).find(".iconArrow").toggleClass("iconArrowR")
                    });
                    $(".leftList").find(".title").hover(function() {
                        $(this).toggleClass("on")
                    });
                    $(".leftList").delegate(".titleContent", "hover", function() {
                        $(this).siblings(".title").toggleClass("hoverDown")
                    })
                }
            })
        }
    }};
_loadMyYihaodianLeftMenu.initPage();