/* SVN.committedRevision=1559019 */
var _personalObject = {
    resizeTimer: null,
    screenWidthInit: function() {
        var b = $(window).width() >= 1280;
        if (b) {
            document.getElementById("layout_main").className = "layout_w1200_g22";
            if ( !! $("#gridContent").length > 0) {
                document.getElementById("gridContent").className = "grid_18"
            }
            if ( !! $("#gridHeader").length > 0) {
                document.getElementById("gridHeader").className = "grid_22"
            }
            if ( !! $("#gridMain").length > 0) {
                document.getElementById("gridMain").className = "grid_22"
            }
            if ( !! $("#gridFooter").length > 0) {
                document.getElementById("gridFooter").className = "grid_22"
            }
            document.getElementsByTagName("body")[0].className = "w1200";
            if (document.getElementById("order_top_bannel")) {
                var a = document.getElementById("order_top_bannel").getAttribute("advImageUrlWide");
                document.getElementById("order_top_bannel").setAttribute("src", a)
            }
            if (jQuery(".order_item_wideScreen_list").length > 0 && jQuery(".order_item_narrowScreen_list").length > 0) {
                jQuery(".order_item_wideScreen_list").show();
                jQuery(".order_item_narrowScreen_list").hide()
            }
        } else {
            document.getElementById("layout_main").className = "layout_w980_g18";
            if ( !! $("#gridContent").length > 0) {
                document.getElementById("gridContent").className = "grid_14"
            }
            if ( !! $("#gridHeader").length > 0) {
                document.getElementById("gridHeader").className = "grid_18"
            }
            if ( !! $("#gridMain").length > 0) {
                document.getElementById("gridMain").className = "grid_18"
            }
            if ( !! $("#gridFooter").length > 0) {
                document.getElementById("gridFooter").className = "grid_18"
            }
            document.getElementsByTagName("body")[0].className = "w980";
            if (document.getElementById("order_top_bannel")) {
                var a = document.getElementById("order_top_bannel").getAttribute("advImageUrl");
                document.getElementById("order_top_bannel").setAttribute("src", a)
            }
            if (jQuery(".order_item_wideScreen_list").length > 0 && jQuery(".order_item_narrowScreen_list").length > 0) {
                jQuery(".order_item_wideScreen_list").hide();
                jQuery(".order_item_narrowScreen_list").show()
            }
        }
        _personalObject.resizeTimer = null
    }
};
_personalObject.screenWidthInit();
window.onresize = function() {
    if (_personalObject.resizeTimer == null) {
        _personalObject.resizeTimer = setTimeout(function() {
            _personalObject.screenWidthInit()
        },
        300)
    }
};
$(document).ready(function() {
    if ($(window).width() >= 1280) {
        document.getElementsByTagName("body")[0].className = "w1200"
    }
});
var _myOrderCancelObject = {
    oActiv: "",
    borderOb: "",
    checkFlag: "",
    orderListHover: function() {
        $(".border_dl").bind("mouseenter",
        function() {
            if ($(this).hasClass("border_bt")) {
                _myOrderCancelObject.borderOb = true;
                $(this).removeClass("border_bt").addClass("border_dl_hover")
            } else {
                $(this).addClass("border_dl_hover")
            }
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#cfcfcf")
            }
        });
        $(".border_dl").bind("mouseleave",
        function() {
            if (_myOrderCancelObject.borderOb) {
                if ($(this).index() !== ($(".border_dl").length - 1)) {
                    $(this).addClass("border_bt").removeClass("border_dl_hover");
                    $(this).css("border-color", "");
                    return
                }
            }
            $(this).removeClass("border_dl_hover");
            if ($(this).hasClass("border_all")) {
                if ($.browser.msie && parseInt($.browser.version) < 9) {
                    $(this).css("border-color", "#EAEAEA")
                }
            } else {
                $(this).css("border-color", "")
            }
        })
    },
    reasonDl: function() {
        $(".reason dd a").live("click",
        function() {
            $(".reason dd a").removeClass("selected");
            $(".reason dd a").removeClass("cancel_reason_Mark_sel");
            $(this).addClass("selected");
            $(this).addClass("cancel_reason_Mark_sel");
            jQuery("#cancel_reason_sel_msg").html("")
        })
    },
    checkboxClick: function() {
        $(".border_dl a.input").bind("click",
        function() {
            var c = "";
            if ($(this).attr("name") === "checkbox") {
                if ($(this).hasClass("checkbox_c")) {
                    $(this).removeClass("checkbox_c").addClass("checkbox_c_sed")
                } else {
                    if ($(this).hasClass("checkbox_c_sed")) {
                        $(this).removeClass("checkbox_c_sed").addClass("checkbox_c")
                    }
                }
                for (var d = 0; d < $(".border_dl a.checkbox_c_sed").length; d++) {
                    c += "," + $(".border_dl a.checkbox_c_sed").eq(d).attr("id")
                }
            } else {
                if ($(this).attr("name") === "radio") {
                    if ($(this).hasClass("radio_c")) {
                        jQuery("#cancel_order_sel_msg").html("");
                        $(".border_dl a.input").removeClass("radio_c_sed").addClass("radio_c");
                        $(".border_dl a.input").removeClass("cancel_sub_order_sel");
                        $(this).removeClass("radio_c").addClass("radio_c_sed");
                        if (!$(this).hasClass("radio_c_disbled")) {
                            $(this).addClass("cancel_sub_order_sel")
                        }
                    }
                }
            }
        })
    },
    initFun: function() {
        this.orderListHover();
        this.reasonDl();
        this.checkboxClick()
    }
};
function popWinOrderCancel(c) {
    var d = "/order/popWinOrderCancel.do?orderCode=" + c;
    jQuery.ajax({
        type: "post",
        url: d,
        success: function(a) {
            if (a.indexOf("notLogin") >= 0) {
                yhdLogin();
                return false
            }
            yhdLib.popwin({
                popcontentstr: a
            });
            _myOrderCancelObject.initFun()
        }
    })
}
function submitOrderCancel(l) {
    var q = "/order/submitAllOrderCancel.do";
    var o = jQuery("#cancel_orderCode").val();
    var k = "orderCode=" + o;
    var r = jQuery(".cancel_reason_Mark_sel").attr("reasonId");
    var j = jQuery(".cancel_reason_Mark_sel").attr("reasonMark");
    if (!r || !r) {
        jQuery("#cancel_reason_sel_msg").html("<div class='tip_msg'><span>请选择取消原因。</span></div>");
        return
    } else {
        k = k + "&cancelReasonId=" + r + "&cancelReasonStr=" + j
    }
    if (l == 1) {
        var m = jQuery("#cancel_orderType").val();
        k = k + "&chooseType=" + m;
        jQuery.ajax({
            type: "post",
            url: q,
            data: k,
            success: function(a) {
                if (a.indexOf("notLogin") >= 0) {
                    yhdLogin();
                    return false
                }
                yhdLib.popwin({
                    popcontentstr: a
                })
            }
        });
        jQuery(".cancel_order_pop_close").click()
    } else {
        var p = jQuery(".cancel_sub_order_sel").attr("id");
        if (p) {
            var n = jQuery("#" + p + "_orderClub").val();
            k = k + "&chooseType=" + n;
            jQuery("." + p + "_orderCode").each(function(a) {
                k = k + "&orderCodes=" + this.value
            });
            jQuery.ajax({
                type: "post",
                url: q,
                data: k,
                success: function(a) {
                    if (a.indexOf("notLogin") >= 0) {
                        yhdLogin();
                        return false
                    }
                    yhdLib.popwin({
                        popcontentstr: a
                    })
                }
            });
            jQuery(".cancel_order_pop_close").click()
        } else {
            jQuery("#cancel_order_sel_msg").html("<div class='tip_msg'><span>请选择您要取消的包裹。</span></div>")
        }
    }
}
function finishOrderCancel() {
    window.location.reload()
};
var seqCode;
function loadBindOperate(b) {
    var c = $(window).width() >= 1280;
    if (c) {
        var a = jQuery("#order_top_bannel");
        if (a) {
            var d = jQuery("#order_top_bannel").attr("advImageUrlWide");
            jQuery("#order_top_bannel").attr("src", d)
        }
        jQuery(".order_item_wideScreen_list").show();
        jQuery(".order_item_narrowScreen_list").hide()
    } else {
        jQuery(".order_item_wideScreen_list").hide();
        jQuery(".order_item_narrowScreen_list").show()
    }
    jQuery("#gridContent img").each(function() {
        if (jQuery(this).offset().top <= pageTop()) {
            var e = jQuery(this).attr("original");
            if (e) {
                jQuery(this).attr("src", e).removeAttr("original")
            }
        }
    });
    jQuery(".netPayButton").click(function() {
        var h = jQuery(this).attr("alreadyTimeOut");
        if (typeof h != "undefined" && h == "1") {
            return
        }
        var e = jQuery(this).attr("oId");
        var f = jQuery(this).attr("oCode");
        var g = jQuery(this).attr("state");
        if (g && g == 1) {
            popWinPaymentList(e)
        } else {
            window.open("/order/finishOrder.do?orderCode=" + f)
        }
    });
    jQuery(".affirmPaymentButton").click(function() {
        var e = jQuery(this).attr("oId");
        var g = "/order/displayAffirmPaymentCode.do";
        var f = "orderId=" + e + "&from=2";
        jQuery.ajax({
            type: "post",
            url: g,
            data: f,
            success: function(h) {
                if ("ajax302" == h.status) {
                    window.location.reload()
                } else {
                    showAffirmPaymentCodePage(h)
                }
            },
            error: function() {
                window.location.reload()
            }
        })
    });
    $(".showAffirmPaymentButtonInfo").click(function() {
        var e = jQuery(this).attr("oId");
        var g = "/order/showAffirmPaymentCodeInfo.do";
        var f = "orderId=" + e + "&from=2";
        jQuery.ajax({
            type: "post",
            url: g,
            data: f,
            success: function(h) {
                if ("ajax302" == h.status) {
                    window.location.reload()
                } else {
                    yhdLib.popwin({
                        popcontentstr: h
                    })
                }
            },
            error: function() {
                window.location.reload()
            }
        })
    });
    jQuery(".orderListAgain").click(function() {
        var f = jQuery(this).attr("formAgainId");
        var j = [];
        jQuery("#" + f).find("input[name='productID']").each(function() {
            var i = jQuery.trim($(this).val());
            if (i.length > 0) {
                j.push(i)
            }
        });
        var e = [];
        jQuery("#" + f).find("input[name='productNum']").each(function() {
            var i = jQuery.trim($(this).val());
            if (i.length > 0) {
                e.push(i)
            }
        });
        var k = "?";
        if (j.length > 0 && e.length > 0) {
            for (var h = 0; h < j.length; h++) {
                if (h == 0) {
                    k += "productID=" + j[h] + "&productNum=" + e[h]
                } else {
                    k += "&productID=" + j[h] + "&productNum=" + e[h]
                }
            }
        }
        if (k != "?") {
            k += "&callback=?"
        }
        var g = URLPrefix.shoping_cart_self + "/cart/batchAddJson.do" + k;
        jQuery.getJSON(g,
        function(l) {
            if (l && l.code == "00000000") {
                if (l.data.length > 0) {
                    var n = [];
                    n = l.data;
                    var o = '<div class="mod_my_orders_buy"><div class="dialog_orders_buy"><h3 class="cell_h3">友情提醒:</h3><a class="close_window close_tcg" href="javascript:void(0);" data-tpa="MYYHD_PC_ORDER_LIST_CART_CLOSE">关闭</a><div class="dia_top_border"></div><div class="dia_main">';
                    for (var m = 0; m < n.length; m++) {
                        o += '<p class="pic_info">' + n[m].resultMessage + "</p>"
                    }
                    o += "<br></br>";
                    o += '<p class="btn_layout"><a data-tpa="MYYHD_PC_ORDER_LIST_CART" href="' + URLPrefix.shoping_cart_self + '/cart/cart.do?action=view" target="_blank" class="btn_sub">去购物车</a></p></div></div></div>';
                    yhdLib.popwin({
                        popcontentstr: o
                    })
                } else {
                    window.location = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view"
                }
            } else {
                YHD.alert("<div>未能加入购物车,请稍候重试!</div>");
                return
            }
        })
    });
    jQuery(".clildOrderListAgain").click(function() {
        var g = jQuery(this).attr("childFormAgainId");
        var j = [];
        jQuery("#" + g).find("input[name='productID']").each(function() {
            var i = jQuery.trim($(this).val());
            if (i.length > 0) {
                j.push(i)
            }
        });
        var e = [];
        jQuery("#" + g).find("input[name='productNum']").each(function() {
            var i = jQuery.trim($(this).val());
            if (i.length > 0) {
                e.push(i)
            }
        });
        var k = "?";
        if (j.length > 0 && e.length > 0) {
            for (var h = 0; h < j.length; h++) {
                if (h == 0) {
                    k += "productID=" + j[h] + "&productNum=" + e[h]
                } else {
                    k += "&productID=" + j[h] + "&productNum=" + e[h]
                }
            }
        }
        if (k != "?") {
            k += "&callback=?"
        }
        var f = URLPrefix.shoping_cart_self + "/cart/batchAddJson.do" + k;
        jQuery.getJSON(f,
        function(l) {
            if (l && l.code == "00000000") {
                if (l.data.length > 0) {
                    var n = [];
                    n = l.data;
                    var o = '<div class="mod_my_orders_buy"><div class="dialog_orders_buy"><h3 class="cell_h3">友情提醒:</h3><a class="close_window close_tcg" href="javascript:void(0);">关闭</a><div class="dia_top_border"></div><div class="dia_main">';
                    for (var m = 0; m < n.length; m++) {
                        o += '<p class="pic_info">' + n[m].resultMessage + "</p>"
                    }
                    o += "<br></br>";
                    o += '<p class="btn_layout"><a href="' + URLPrefix.shoping_cart_self + '/cart/cart.do?action=view" target="_blank" class="btn_sub">去购物车</a></p></div></div></div>';
                    yhdLib.popwin({
                        popcontentstr: o
                    })
                } else {
                    window.location = URLPrefix.shoping_cart_self + "/cart/cart.do?action=view"
                }
            } else {
                YHD.alert("<div>未能加入购物车,请稍候重试!</div>");
                return
            }
        })
    });
    jQuery(".openLock").click(function() {
        var e = jQuery(this).attr("oId");
        var h = "orderId=" + e + "&versionNo=" + jQuery("#versionNo_" + e).val();
        var g = jQuery("input[id^=subVersionNo_" + e + "]");
        if (g && g.length > 0) {
            var f = g.map(function() {
                return "subVersionNos=" + jQuery(this).val()
            }).get().join("&");
            h = h + "&" + f
        }
        unlockOrder(e, h)
    });
    _myOrderObject.initFun();
    live800_Context.requestWebIm()
}
function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function unlockOrder(a, c) {
    var b = "/order/unLockOrder.do";
    jQuery.ajax({
        type: "post",
        url: b,
        data: c,
        complete: function(d) {
            window.location = "member_order.html"
        }
    })
}
function searchOrderDown(a) {
    if (a.keyCode == 13) {
        searchOrder(1, "", "")
    }
}
function searchOrder(b, a, d) {
    var c = "";
    if (a != "") {
        c = a
    } else {
        var c = jQuery("#orderSearchKey").val();
        if (trim(c) == "") {
            return
        } else {
            if (/\/|\\|=|\&|\$|%|\^/g.test(c) == true) {
                alert("您的搜索条件中存在非法字符！");
                return
            }
        }
    }
    gotracker("2", "", "", loli.spm.getData($(".search_button"), "button"));
    jQuery.ajax({
        type: "post",
        url: "/order/orderMySearch.do",
        data: "orderSearchKey=" + c + "&searchYear=" + d + "&pageNum=" + b,
        async: false,
        success: function(f) {
            var e = new Date();
            if ("ajax302" == f) {
                window.location = URLPrefix.passport + "/passport/login_input.do?returnUrl=" + window.location.href;
                return
            }
            jQuery("#gridContent").html(f);
            jQuery(".leftMilliseconds").each(function() {
                jQuery(this).countDown(function(h) {
                    var g = $(h).parent().find(".netPayButton");
                    if (g) {
                        g.attr("alreadyTimeOut", "1");
                        g.css("color", "gray");
                        g.removeClass("input_btn").addClass("input_rep_btn")
                    }
                })
            });
            loadBindOperate(e);
            jQuery.ajax({
                type: "post",
                url: "/order/isAjaxOrderListFunctionByConfig.do",
                async: false,
                success: function(g) {
                    if (g && g.result == 1) {
                        lazyLoadModifyOrCancelButton(1)
                    }
                }
            })
        }
    })
}
function pageTop() {
    return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop)
}
function displayMask() {
    var a = document.body.clientWidth;
    var b = document.body.clientHeight;
    jQuery("<div id='maskDiv'/>").width(a).height(b + document.body.scrollHeight / 8).css("background", "#000").css("position", "absolute").css("top", "0px").css("left", "0px").css("opacity", "0.1").css("filter", "Alpha(Opacity=10)").css("z-index", 1000).appendTo("body").fadeIn(200)
}
function closeDiv() {
    jQuery("#deployDiv").remove();
    jQuery("#maskdiv").remove()
}
function myOrderChooseRange(a) {
    jQuery("#gridContent").html(jQuery("#myoderLoadingDiv").html());
    if (a == 1) {
        gotracker("2", "MYYHD_PC_ORDER_LIST_HISTORY", "", loli.spm.getData($("#myOrderChooseRangeHistory"), "p"));
        ajaxOrderDetailListHistory(1)
    } else {
        gotracker("2", "MYYHD_PC_ORDER_LIST_RECENTLY", "", loli.spm.getData($("#myOrderChooseRangeRecently"), "p"));
        ajaxOrderDetailList(1, 0)
    }
}
function orderListPageInfo(b) {
    var a = jQuery("#orderSearchKeyHidden").val();
    if (trim(a) != "") {
        var c = jQuery("#searchYear").val();
        searchOrder(b, a, c)
    } else {
        var e = jQuery("#isHistoryDataInOrderList").val();
        var d = jQuery("#chooseType").val();
        jQuery("#gridContent").html(jQuery("#myoderLoadingDiv").html());
        if (e == 0) {
            ajaxOrderDetailList(b, d)
        } else {
            if (e == 1) {
                ajaxOrderDetailListHistory(b)
            } else {
                jQuery("#gridContent").html("")
            }
        }
    }
    window.scroll(0, 0)
}
function ajaxOrderDetailList(a, c) {
    return false;
    var b = new Date();
    jQuery("#gridContent").html(jQuery("#myoderLoadingDiv").html());
    jQuery.ajax({
        type: "post",
        url: "/order/orderMyList.do",
        data: "chooseType=" + c + "&pageNum=" + a + "&seqCode=" + seqCode,
        success: function(d) {
            if ("ajax302" == d) {
                window.location = URLPrefix.passport + "/passport/login_input.do?returnUrl=" + window.location.href;
                return
            }
            jQuery("#gridContent").html(d);
            jQuery(".leftMilliseconds").each(function() {
                jQuery(this).countDown(function(f) {
                    var e = $(f).parent().find(".netPayButton");
                    if (e) {
                        e.attr("alreadyTimeOut", "1");
                        e.css("color", "gray");
                        e.removeClass("input_btn").addClass("input_rep_btn")
                    }
                })
            });
            loadBindOperate(b);
            jQuery.ajax({
                type: "post",
                url: "/order/isAjaxOrderListFunctionByConfig.do",
                success: function(e) {
                    if (e && e.result == 1) {
                        lazyLoadOtherButton();
                        lazyLoadModifyOrCancelButton()
                    }
                }
            })
        }
    })
}
function ajaxOrderDetailListHistory(a) {
    var b = new Date();
    jQuery.ajax({
        type: "post",
        url: "/order/orderMyListHistory.do",
        data: "pageNum=" + a + "&seqCode=" + seqCode,
        success: function(c) {
            if ("ajax302" == c) {
                window.location = URLPrefix.passport + "/passport/login_input.do?returnUrl=" + window.location.href;
                return
            }
            jQuery("#gridContent").html(c);
            loadBindOperate(b)
        }
    })
}
jQuery(document).ready(function() {
    _loadMyYihaodianLeftMenu.loadLeftDiv();
    _myOrderObject.initFun();
    seqCode = jQuery("#seqCode").val();
    var b = jQuery("#userOrderNum").val();
    var c = jQuery("#userOrderHistoryNum").val();
    var a = jQuery("#chooseType").val();
    if (b > 0) {
        ajaxOrderDetailList(1, a)
    } else {
        if (c > 0) {
            ajaxOrderDetailListHistory(1)
        } else {
            jQuery("#gridContent").html(jQuery("#myyhd_no_order_defaul").html())
        }
    }
    initPicLazy();
    if ($(window).width() >= 1280) {
        jQuery(".wideScreen").show();
        jQuery(".screen").hide();
        document.getElementsByTagName("body")[0].className = "w1200"
    } else {
        jQuery(".wideScreen").hide();
        jQuery(".screen").show()
    }
});
function initPicLazy() {
    var a = function() {
        jQuery("#gridContent img").each(function() {
            if (jQuery(this).offset().top <= pageTop()) {
                var b = jQuery(this).attr("original");
                if (b) {
                    jQuery(this).attr("src", b).removeAttr("original")
                }
            }
        })
    };
    jQuery(window).bind("scroll",
    function() {
        a()
    })
}
function showAffirmPaymentCodePage(a) {
    yhdLib.popwin({
        popcontentstr: a
    });
    jQuery(".affirmPaymentEnter").click(updatePayment)
}
function changeAffirmPaymentInfo() {
    var b = jQuery("#paymentName").text();
    var a = jQuery("#paymentDate").text();
    var c = jQuery("#paymentAmount").text();
    $(".order_pop_btn").replaceWith("<div class='order_pop_btn'><a href='javascript:;'><input id='qiut_btn' type='button' value='取消' class='close_tcg qiut_btn' onclick='cancelChangeAffirmPaymentInfo()'/></a><a href='javascript:;'><input id='affirmPaymentEnter' type='button' value='确定' class='sure_btn affirmPaymentEnter' onclick='updateChangeAffirmPaymentInfo()'/></a></div>");
    $("#paymentName").before("<input id='paymentName' type='text' class='paymentName'/>");
    $("#paymentDate").before("<input id='paymentDate' type='text' class='bdate paymentDate' onClick='WdatePicker()'/>");
    $("#paymentAmount").before("<input id='paymentAmount' type='text' class='paymentAmount'/>");
    $("blockquote > span").hide();
    $(".paymentName").val(b);
    $(".paymentDate").val(a);
    $(".paymentAmount").val(c);
    $("#changeAffirmPaymentInfo").hide()
}
function updateChangeAffirmPaymentInfo() {
    jQuery(".affirmPaymentEnter").click(updatePayment())
}
function cancelChangeAffirmPaymentInfo() {
    jQuery(".close_tcg").trigger("click")
}
function updatePayment() {
    var g = jQuery.trim(jQuery("#paymentType").val());
    var e = "";
    var d = jQuery.trim(jQuery("#paymentName:visible").val());
    var f = jQuery.trim(jQuery("#paymentDate:visible").val());
    var a = jQuery.trim(jQuery("#paymentAmount:visible").val());
    var c = jQuery.trim(jQuery("#orderId").val());
    if (d == "") {
        alert("汇款人不能为空");
        return false
    }
    if (d.length > 100) {
        alert("汇款人姓名过长");
        return false
    }
    if (f == "") {
        alert("汇款日期不能为空");
        return false
    }
    if (a == "") {
        alert("汇款金额不能为空");
        return false
    }
    if (a.length > 22) {
        alert("汇款金额输入过长");
        return false
    }
    var h = /^-?\d+(\.\d+)?$/;
    if (!h.test(a) || a <= 0) {
        alert("汇款金额填写有误");
        return false
    }
    var b = "/order/updatePaymentCodeFromMyIndex.do";
    var i = "";
    if (g == 3) {
        i = "orderId=" + c + "&paymentType=" + g + "&paymentName=" + d + "&paymentDate=" + f + "&paymentCode=" + e + "&paymentAmount=" + a
    } else {
        i = "orderId=" + c + "&paymentType=" + g + "&paymentName=" + d + "&paymentDate=" + f + "&paymentAmount=" + a
    }
    jQuery.ajax({
        type: "post",
        url: b,
        data: i,
        success: function(j) {
            if (j.notlogin == "notlogin") {
                yhdLogin();
                return false
            }
            if (j.update_success == "update_success") {
                jQuery("#err_popwin").html("更新成功!");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                orderListPageInfo(jQuery(".latestnewcurrentpage").html())
            }
            if (j.update_error == "update_error") {
                jQuery("#err_popwin").html("更新失败!");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                orderListPageInfo(jQuery(".latestnewcurrentpage").html())
            }
        }
    });
    jQuery(".close_tcg").trigger("click")
}
function lazyLoadModifyOrCancelButton(c) {
    var a = [];
    jQuery("input[title='orderId']").each(function() {
        var e = jQuery.trim($(this).val());
        if (e.length > 0) {
            a.push(e)
        }
    });
    var d = "";
    if (a.length > 0) {
        d = a.join(",")
    }
    var b = "/order/isShowModifyOrCancelButton.do";
    if (d.length > 0) {
        b += "?orderIds=" + d
    }
    jQuery.ajax({
        type: "post",
        url: b,
        async: false,
        success: function(h) {
            var j = h.result;
            var m = j.length;
            var n = jQuery("#commentLinkUrl").val();
            if (m > 0) {
                for (var k = 0; k < m; k++) {
                    var f = j[k];
                    var e = jQuery("#orderId_" + f.orderId).val();
                    if (c == 1) {
                        if (f.cancelButton) {
                            jQuery("#order_" + f.orderId).after("<a data-tpa='MYYHD_PC_ORDER_LIST_DELETE_SEARCH'  class=\"gray_line\" href=\"javascript:popWinOrderCancel('" + e + "');\" onclick=\"gotracker('2','My_OrderList_CancelOrder');\">取消订单</a>")
                        }
                        if (f.userAuthButton) {
                            jQuery("#order_" + f.orderId).after('<a data-tpa=\'MYYHD_PC_ORDER_LIST_USERINFO_SEARCH\' class="blue_line" href="/member/userinfo/editinfo.do?u=1"  target="_blank" >实名认证</a>')
                        }
                        if (f.updateButton) {
                            jQuery("#order_" + f.orderId).after("<a data-tpa='MYYHD_PC_ORDER_LIST_MODIFIY_SEARCH' class=\"blue_line\" onclick=\"javascript:addTrackPositionToCookie('1','My_OrderList_EditOrder');\" href=\"/order/orderDetail.do?orderCode=" + e + '" target="_blank">修改订单</a>')
                        }
                        if (f.rechargeButton) {
                            jQuery("#recharge_" + f.orderId).after('<a data-tpa=\'MYYHD_PC_ORDER_LIST_CARD_SEARCH\' class="activation" target="_blank" href="' + URLPrefix.b2bManagerUrl + "/gift-cards/displayGiftCardAddMoney.do\" onclick=\"gotracker('1','My_OrderList_RechargeOrder');\">激活充值礼品卡</a>")
                        }
                    } else {
                        if (f.cancelButton) {
                            jQuery("#order_" + f.orderId).after("<a data-tpa='MYYHD_PC_ORDER_LIST_DELETE'  class=\"gray_line\" href=\"javascript:popWinOrderCancel('" + e + "');\" onclick=\"gotracker('2','My_OrderList_CancelOrder');\">取消订单</a>")
                        }
                        if (f.userAuthButton) {
                            jQuery("#order_" + f.orderId).after('<a data-tpa=\'MYYHD_PC_ORDER_LIST_USERINFO\' class="blue_line" href="/member/userinfo/editinfo.do?u=1"  target="_blank" >实名认证</a>')
                        }
                        if (f.updateButton) {
                            jQuery("#order_" + f.orderId).after("<a data-tpa='MYYHD_PC_ORDER_LIST_MODIFIY' class=\"blue_line\" onclick=\"javascript:addTrackPositionToCookie('1','My_OrderList_EditOrder');\" href=\"/order/orderDetail.do?orderCode=" + e + '" target="_blank">修改订单</a>')
                        }
                        if (f.rechargeButton) {
                            jQuery("#recharge_" + f.orderId).after('<a data-tpa=\'MYYHD_PC_ORDER_LIST_CARD\' class="activation" target="_blank" href="' + URLPrefix.b2bManagerUrl + "/gift-cards/displayGiftCardAddMoney.do\" onclick=\"gotracker('1','My_OrderList_RechargeOrder');\">激活充值礼品卡</a>")
                        }
                    }
                    if (f.commentStatus.commentButton) {
                        if (f.commentStatus.confirmOrderAfterComment == 1) {
                            if (c == 1) {
                                var l = '<a data-tpa="MYYHD_PC_ORDER_SEARCH_CONFIRM" href="javascript:popWinOrderConfirm(' + f.orderId + ',\'1\');" class="input_ping_btn2">'
                            } else {
                                var l = '<a href="javascript:popWinOrderConfirm(' + f.orderId + ',\'1\');" class="input_ping_btn2">'
                            }
                            if (f.commentStatus.commentShowStr && f.commentStatus.commentShowStr.length > 0) {
                                l += f.commentStatus.commentShowStr
                            } else {
                                l += "确认收货并评论"
                            }
                            if (f.commentStatus.isShowCommentSubscript) {
                                var g = f.commentStatus.commentTitleStr;
                                if (g || g.length == 0) {
                                    g = ""
                                }
                                if (f.commentStatus.subscriptType == 1) {
                                    l += '<i class="liwu_icon" title="' + g + '"></i>'
                                }
                                if (f.commentStatus.subscriptType == 2) {
                                    l += '<i class="pri_icon" title="' + g + '"></i>'
                                }
                            }
                            l += "</a>";
                            jQuery("#comment_" + f.orderId).after(l)
                        } else {
                            if (c == 1) {
                                var l = '<a data-tpa=\'MYYHD_PC_ORDER_SEARCH_COMMENT\' class="input_ping_btn" href="' + n + "/pe/orderProductExperience!"
                            } else {
                                var l = '<a data-tpa=\'MYYHD_PC_ORDER_LIST_COMMENT\' class="input_ping_btn" href="' + n + "/pe/orderProductExperience!"
                            }
                            if (f.commentStatus.commentIsZuijia) {
                                l += "orderAppendProductExperience.do"
                            } else {
                                l += "orderProductExperience.do"
                            }
                            l += "?soId=" + f.orderId + "&userId=" + f.commentStatus.userId + "&soType=" + f.commentStatus.commentSoType + "&hasCommented=" + f.commentStatus.commentIsHasFinish;
                            l += '"  onclick="addTrackPositionToCookie(\'1\',\'O_L_COMMENT_FINISH\')" target="_blank">';
                            if (f.commentStatus.commentShowStr && f.commentStatus.commentShowStr.length > 0) {
                                l += f.commentStatus.commentShowStr
                            } else {
                                l += "发表评论"
                            }
                            if (f.commentStatus.isShowCommentSubscript) {
                                var g = f.commentStatus.commentTitleStr;
                                if (g || g.length == 0) {
                                    g = ""
                                }
                                if (f.commentStatus.subscriptType == 1) {
                                    l += '<i class="liwu_icon" title="' + g + '"></i>'
                                }
                                if (f.commentStatus.subscriptType == 2) {
                                    l += '<i class="pri_icon" title="' + g + '"></i>'
                                }
                            }
                            l += "</a>";
                            jQuery("#comment_" + f.orderId).after(l)
                        }
                    }
                }
            }
        }
    })
}
function lazyLoadOtherButton() {
    var a = [];
    jQuery("input[title='orderId']").each(function() {
        var d = jQuery.trim($(this).val());
        if (d.length > 0) {
            a.push(d)
        }
    });
    var c = "";
    if (a.length > 0) {
        c = a.join(",")
    }
    var b = "/order/isShowOtherButton.do";
    if (c.length > 0) {
        b += "?orderIds=" + c
    }
    jQuery.ajax({
        type: "post",
        url: b,
        success: function(k) {
            var j = k.result;
            var l = j.length;
            var f = jQuery("#opinionLinkUrl").val();
            var e = jQuery("#returnLinkUrl").val();
            if (l > 0) {
                for (var h = 0; h < l; h++) {
                    var d = j[h];
                    if (d.opinion) {
                        jQuery("#opinion_" + d.subid).html('<a data-tpa=\'MYYHD_PC_ORDER_LIST_OPINION\' class="black_line_w75" href="' + f + "/opinion/applyOpinion.do?soOrderCode=" + d.orderCode + '" onclick="addTrackPositionToCookie(\'1\',\'My_OrderList_Complaint\')" target="_blank">在线投诉</a>').addClass("select_list")
                    } else {
                        jQuery("#opinion_" + d.subid).remove()
                    }
                    if (d.applyPresale) {
                        jQuery("#applypresale_" + d.subid).html('<a data-tpa=\'MYYHD_PC_ORDER_LIST_PRESALE\' class="black_line_w75" href="' + f + "/dpsale/applyInit.do?soOrderCode=" + d.orderCode + '"onclick="addTrackPositionToCookie(\'1\',\'My_OrderList_Dpsale\')" target="_blank">申请预售赔付</a>').addClass("select_list")
                    } else {
                        jQuery("#applypresale_" + d.subid).remove()
                    }
                    if (d.isCanPress) {
                        jQuery("#isCanPress_" + d.subid).html('<a data-tpa=\'MYYHD_PC_ORDER_LIST_PRESS\' class="black_line_w75"  href="javascript:doPressGoods(' + d.subid + ')">催商家发货</a>').addClass("select_list")
                    } else {
                        jQuery("#isCanPress_" + d.subid).remove()
                    }
                    if (d.isCanReturn) {
                        var g = e + "/return/applyInitRequest.do?soOrderCode=" + d.orderCode;
                        jQuery("#return_" + d.subid).html('<a data-tpa=\'MYYHD_PC_ORDER_LIST_RETURN\' class="black_line_w75"  href="' + g + '" target="_blank">申请退换货</a>').addClass("select_list")
                    } else {
                        jQuery("#return_" + d.subid).remove()
                    }
                    jQuery("#lastOrderStauts_" + d.subid).text(d.lastOrderStatusLogDis)
                }
            }
        }
    })
}
function doPressGoods(c) {
    var b = "/order/doPressGoods.do";
    var a = "orderId=" + c;
    jQuery.ajax({
        type: "post",
        url: b,
        data: a,
        timeout: 2000,
        success: function(d) {
            jQuery("#isCanPress_" + c).remove();
            alert("已经催促商家发货,请耐心等待!")
        }
    })
}
var _myOrderObject = {
    oActiv: "",
    orderListHover: function() {
        for (var a = 0; a < $(".border_li").length; a++) {
            $(".li_p").eq(a).height($(".border_li").eq(a).height())
        }
        $(".mod_my_order_list .border_li").bind("mouseenter",
        function() {
            var b = $(this).index(".border_li");
            $(this).addClass("border_li_hover");
            $(".list_radio").eq(b).addClass("list_radio_checked");
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#cfcfcf")
            }
        });
        $(".mod_my_order_list .border_li").bind("mouseleave",
        function() {
            var b = $(this).index(".border_li");
            $(this).removeClass("border_li_hover");
            $(".list_radio").eq(b).removeClass("list_radio_checked");
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#EAEAEA")
            }
        })
    },
    orderLiHover: function() {
        $(".orderList li").bind("mouseenter",
        function() {
            var d = $(this).index() + 1,
            b = $(this).width() - 1,
            a = parseInt(d * b) + 155,
            c = $(this).parent().width();
            if (a > c) {
                $(this).find(".puv").addClass("puv_rit_hover");
                $(this).find(".puvA").addClass("puvA_rit_hover");
                $(this).find(".orderV").addClass("orderV_rit_hover");
                $(this).find(".orderPai").addClass("orderPai_rit_hover");
                $(this).find(".orderV").css("left", "");
                $(this).find(".orderV").css("right", (c - (parseInt((d - 1) * b)) - 9) + "px");
                $(this).find(".icon_tuan").addClass("hide");
                $(this).find(".orderV").stop(true, false).animate({
                    width: "155px",
                    display: "block"
                },
                "fast")
            } else {
                $(this).find(".puv").addClass("puv_hover");
                $(this).find(".puvA").addClass("puvA_hover");
                $(this).find(".orderV").css("right", "");
                $(this).find(".orderV").css("left", parseInt(d * b) + "px");
                $(this).find(".icon_tuan").addClass("hide");
                $(this).find(".orderV").stop(true, false).animate({
                    width: "155px",
                    display: "block"
                },
                "fast")
            }
        });
        $(".orderList li").bind("mouseleave",
        function() {
            var d = $(this).index() + 1,
            b = $(this).width() - 1,
            a = parseInt(d * b) + 155,
            c = $(this).parent().width();
            if (a > c) {
                $(this).find(".puv").removeClass("puv_rit_hover");
                $(this).find(".puvA").removeClass("puvA_rit_hover");
                $(this).find(".orderV").removeClass("orderV_rit_hover");
                $(this).find(".orderPai").removeClass("orderPai_rit_hover");
                $(this).find(".icon_tuan").removeClass("hide")
            } else {
                $(this).find(".puv").removeClass("puv_hover");
                $(this).find(".puvA").removeClass("puvA_hover");
                $(this).find(".icon_tuan").removeClass("hide")
            }
            $(this).find(".orderV").stop().css("width", "0px").hide()
        })
    },
    selectClick: function() {
        var a = $(".hd_order_menu"),
        b = $(".hd_order_list"),
        c = $(document);
        a.removeClass("hover");
        b.addClass("hide");
        c.click(function(e) {
            var d = $(e.target);
            if ($(".hd_order_menu").is(":visible") && d.attr("class") != "hd_order_list") {
                _myOrderObject.oActiv = "";
                b.addClass("hide");
                a.removeClass("hover")
            }
        });
        a.unbind("click").bind("click",
        function(d) {
            b.addClass("hide");
            a.removeClass("hover");
            $(this).addClass("hover");
            $(this).parent().find("div").addClass("hd_order_listHover");
            $(this).parent().find("div").removeClass("hide");
            d.stopPropagation();
            if (_myOrderObject.oActiv == "") {
                _myOrderObject.oActiv = $(this).attr("_dateId");
                $(this).addClass("hover");
                $(this).parent().find("div").addClass("hd_order_listHover");
                $(this).parent().find("div").removeClass("hide");
                d.stopPropagation()
            } else {
                if (_myOrderObject.oActiv == $(this).attr("_dateId")) {
                    _myOrderObject.oActiv = "";
                    b.addClass("hide");
                    a.removeClass("hover")
                } else {
                    _myOrderObject.oActiv = $(this).attr("_dateId");
                    $(this).addClass("hover");
                    $(this).parent().find("div").addClass("hd_order_listHover");
                    $(this).parent().find("div").removeClass("hide");
                    d.stopPropagation()
                }
            }
        });
        b.unbind("click").bind("click",
        function(d) {
            b.addClass("hide");
            a.removeClass("hover");
            $(this).removeClass("hd_order_listHover");
            $(this).parent().find("a").removeClass("hover");
            $(this).parent().find("a").removeClass("selected");
            $(this).addClass("hide");
            d.stopPropagation()
        })
    },
    selectChange: function() {
        var b = $(".hd_order_list p"),
        a = $(".hd_returns_list p");
        b.unbind("click").bind("click",
        function(c) {
            _myOrderObject.oActiv = "";
            $(this).addClass("hover").siblings().removeClass("hover");
            $(this).parent().parent().find("div").addClass("hide");
            $(this).parent().parent().find("a").removeClass("selected");
            $(this).parent().parent().find("a").removeClass("hover");
            $(this).parent().parent().find("span").text($.trim($(this).text()));
            c.stopPropagation()
        });
        a.unbind("click").bind("click",
        function(c) {
            _myOrderObject.oActiv = "";
            $(this).parent().parent().find(".hd_returns_menu span").text($.trim($(this).text()));
            c.stopPropagation()
        })
    },
    selectReturnsChange: function() {
        var a = $(".hd_returns_menu");
        _flag = false,
        _hdVoucherTypeList = $(".hd_returns_list");
        a.live("mouseenter",
        function(b) {
            _flag = true;
            $(this).parent().find("div").addClass("hd_returns_listHover");
            $(this).parent().find("div").removeClass("hide");
            b.stopPropagation()
        });
        a.live("mouseleave",
        function(b) {
            if (_flag) {
                $(this).parent().find("div").removeClass("hd_returns_listHover");
                $(this).parent().find("div").addClass("hide")
            }
            b.stopPropagation()
        });
        _hdVoucherTypeList.live("mouseenter",
        function(b) {
            _flag = true;
            if (_flag) {
                $(this).addClass("hd_returns_listHover");
                $(this).parent().find("a").addClass("hover");
                $(this).parent().find("a").addClass("selected");
                $(this).removeClass("hide")
            }
            b.stopPropagation()
        });
        _hdVoucherTypeList.live("mouseleave",
        function(b) {
            _flag = false;
            $(this).removeClass("hd_returns_listHover");
            $(this).parent().find("a").removeClass("hover");
            $(this).parent().find("a").removeClass("selected");
            $(this).addClass("hide");
            b.stopPropagation()
        })
    },
    initFun: function() {
        this.orderListHover();
        this.orderLiHover();
        this.selectClick();
        this.selectChange();
        this.selectReturnsChange()
    }
};
var _myOrderObject = {
    oActiv: "",
    orderListHover: function() {
        for (var a = 0; a < $(".border_li").length; a++) {
            if ($(".border_li").eq(a).height() < 186) {
                $(".li_right").eq(a).height(186);
                $(".li_p").eq(a).height(186)
            }
            $(".li_p").eq(a).height($(".border_li").eq(a).height())
        }
        $(".mod_my_order_list .border_li").bind("mouseenter",
        function() {
            var b = $(this).index(".border_li");
            $(this).addClass("border_li_hover");
            $(".list_radio").eq(b).addClass("list_radio_checked");
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#cfcfcf")
            }
            $(this).find(".li_p_del").css("display", "block")
        });
        $(".mod_my_order_list .border_li").bind("mouseleave",
        function() {
            var b = $(this).index(".border_li");
            $(this).removeClass("border_li_hover");
            $(".list_radio").eq(b).removeClass("list_radio_checked");
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#EAEAEA")
            }
            $(this).find(".li_p_del").css("display", "none");
            $(this).find(".del_con").css({
                display: "none",
                width: "0",
                opacity: "0"
            })
        });
        $(".mod_my_order_list").delegate(".li_p_del", "click",
        function() {
            $(this).next().show().animate({
                width: "227px",
                right: "0",
                opacity: "1"
            },
            "fast")
        });
        $(".mod_my_order_list").delegate(".close_window", "click",
        function() {
            $(this).parents(".li_p").find(".del_con").show().animate({
                width: "0",
                right: "0",
                opacity: "0"
            },
            "fast")
        });
        $(".tip_massage").delegate(".close_window", "click",
        function() {
            $(".tip_massage").slideToggle()
        })
    },
    orderLiHover: function() {
        $(".orderList li").bind("mouseenter",
        function() {
            var d = $(this).index() + 1,
            b = $(this).width() - 1,
            a = parseInt(d * b) + 155,
            c = $(this).parent().width();
            if (a > c) {
                $(this).find(".puv").addClass("puv_rit_hover");
                $(this).find(".puvA").addClass("puvA_rit_hover");
                $(this).find(".orderV").addClass("orderV_rit_hover");
                $(this).find(".orderPai").addClass("orderPai_rit_hover");
                $(this).find(".orderV").css("left", "");
                $(this).find(".orderV").css("right", (c - (parseInt((d - 1) * b)) - 9) + "px");
                $(this).find(".orderV").stop(true, false).show().animate({
                    width: "155px"
                },
                "fast")
            } else {
                $(this).find(".puv").addClass("puv_hover");
                $(this).find(".puvA").addClass("puvA_hover");
                $(this).find(".orderV").css("right", "");
                $(this).find(".orderV").css("left", parseInt(d * b) + "px");
                $(this).find(".orderV").stop(true, false).show().animate({
                    width: "155px"
                },
                "fast")
            }
        });
        $(".orderList li").bind("mouseleave",
        function() {
            var d = $(this).index() + 1,
            b = $(this).width() - 1,
            a = parseInt(d * b) + 155,
            c = $(this).parent().width();
            if (a > c) {
                $(this).find(".puv").removeClass("puv_rit_hover");
                $(this).find(".puvA").removeClass("puvA_rit_hover");
                $(this).find(".orderV").removeClass("orderV_rit_hover");
                $(this).find(".orderPai").removeClass("orderPai_rit_hover")
            } else {
                $(this).find(".puv").removeClass("puv_hover");
                $(this).find(".puvA").removeClass("puvA_hover")
            }
            $(this).find(".orderV").stop().css("width", "0px").hide()
        })
    },
    selectClick: function() {
        var a = $(".hd_order_menu"),
        b = $(".hd_order_list"),
        c = $(document);
        a.removeClass("hover");
        b.addClass("hide");
        c.click(function(e) {
            var d = $(e.target);
            if ($(".hd_order_menu").is(":visible") && d.attr("class") != "hd_order_list") {
                _myOrderObject.oActiv = "";
                b.addClass("hide");
                a.removeClass("hover")
            }
        });
        a.unbind("click").bind("click",
        function(d) {
            b.addClass("hide");
            a.removeClass("hover");
            $(this).addClass("hover");
            $(this).parent().find("div").addClass("hd_order_listHover");
            $(this).parent().find("div").removeClass("hide");
            d.stopPropagation();
            if (_myOrderObject.oActiv == "" || $(this).hasClass("orderListSelChoose")) {
                $(this).removeClass("orderListSelChoose");
                _myOrderObject.oActiv = $(this).attr("_dateId");
                $(this).addClass("hover");
                $(this).parent().find("div").addClass("hd_order_listHover");
                $(this).parent().find("div").removeClass("hide");
                d.stopPropagation()
            } else {
                if (_myOrderObject.oActiv == $(this).attr("_dateId")) {
                    _myOrderObject.oActiv = "";
                    b.addClass("hide");
                    a.removeClass("hover")
                } else {
                    _myOrderObject.oActiv = $(this).attr("_dateId");
                    $(this).addClass("hover");
                    $(this).parent().find("div").addClass("hd_order_listHover");
                    $(this).parent().find("div").removeClass("hide");
                    d.stopPropagation()
                }
            }
        });
        b.unbind("click").bind("click",
        function(d) {
            b.addClass("hide");
            a.removeClass("hover");
            $(this).removeClass("hd_order_listHover");
            $(this).parent().find("a").removeClass("hover");
            $(this).parent().find("a").removeClass("selected");
            $(this).addClass("hide");
            d.stopPropagation()
        })
    },
    selectChange: function() {
        var b = $(".hd_order_list p"),
        a = $(".hd_returns_list p");
        b.unbind("click").bind("click",
        function(c) {
            _myOrderObject.oActiv = "";
            $(this).addClass("hover").siblings().removeClass("hover");
            $(this).parent().parent().find("div").addClass("hide");
            $(this).parent().parent().find("a").removeClass("selected");
            $(this).parent().parent().find("a").removeClass("hover");
            $(this).parent().parent().find("span").text($.trim($(this).text()));
            c.stopPropagation()
        });
        a.unbind("click").bind("click",
        function(c) {
            _myOrderObject.oActiv = "";
            $(this).parent().parent().find(".hd_returns_menu span").text($.trim($(this).text()));
            c.stopPropagation()
        })
    },
    selectReturnsChange: function() {
        var a = $(".hd_returns_menu");
        _flag = false,
        _hdVoucherTypeList = $(".hd_returns_list");
        a.live("mouseenter",
        function(b) {
            _flag = true;
            $(this).parent().find("div").addClass("hd_returns_listHover");
            $(this).parent().find("div").removeClass("hide");
            b.stopPropagation()
        });
        a.live("mouseleave",
        function(b) {
            if (_flag) {
                $(this).parent().find("div").removeClass("hd_returns_listHover");
                $(this).parent().find("div").addClass("hide")
            }
            b.stopPropagation()
        });
        _hdVoucherTypeList.live("mouseenter",
        function(b) {
            _flag = true;
            if (_flag) {
                $(this).addClass("hd_returns_listHover");
                $(this).parent().find("a").addClass("hover");
                $(this).parent().find("a").addClass("selected");
                $(this).removeClass("hide")
            }
            b.stopPropagation()
        });
        _hdVoucherTypeList.live("mouseleave",
        function(b) {
            _flag = false;
            $(this).removeClass("hd_returns_listHover");
            $(this).parent().find("a").removeClass("hover");
            $(this).parent().find("a").removeClass("selected");
            $(this).addClass("hide");
            b.stopPropagation()
        })
    },
    track_packages: function() {
        var a = $(".mod_my_order_list");
        a.delegate(".genzhong", "mouseenter",
        function() {
            $(".two_dimensional_code").css({
                display: "block",
                left: ($(this).offset().left - 68) + "px",
                top: ($(this).offset().top + 80) + "px"
            })
        });
        a.delegate(".genzhong", "mouseleave",
        function() {
            $(".two_dimensional_code").css({
                display: "none",
                left: ($(this).offset().left + 50) + "px",
                top: ($(this).offset().top + 80) + "px"
            })
        })
    },
    initFun: function() {
        this.orderListHover();
        this.orderLiHover();
        this.selectClick();
        this.selectChange();
        this.selectReturnsChange();
        this.track_packages()
    }
};
$(document).ready(function() {});
function popWinOrderConfirm(e, f) {
    var d = "/order/popWinOrderConfirm.do?orderId=" + e + "&confirmType=" + f;
    jQuery.ajax({
        type: "post",
        url: d,
        success: function(a) {
            if (a.indexOf("notLogin") >= 0) {
                yhdLogin();
                return false
            }
            yhdLib.popwin({
                popcontentstr: a
            })
        }
    })
}
function popWinOrderDeleteConfirm(b) {
    $("#delete_" + b).animate({
        width: "0",
        right: "0",
        opacity: "0"
    },
    "fast")
}
function deleteOrderFinish(f, g) {
    var e = $("#currPage").val();
    var h = "/order/orderDetele.do?orderId=" + f + "&currPage=" + e + "&orderCode=" + g;
    jQuery.getJSON(h,
    function(a) {
        if (a && a.code) {
            if (a.code == -4) {
                yhdLogin();
                return false
            }
            jQuery("#mod_confirmReceipt_form_close").click();
            var b = a.code;
            if (b == 1) {
                orderListPageInfo(e)
            } else {
                jQuery("#err_popwin").html("订单暂时无法更新，请稍后再试！");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    })
}
function upateOrderFinish(e, f) {
    var d = "/order/upateOrderFinish.do?orderId=" + e;
    jQuery.getJSON(d,
    function(a) {
        if (a && a.code) {
            jQuery("#mod_confirmReceipt_form_close").click();
            var b = a.code;
            if (b == 1) {
                jQuery("#orderConfirm_" + e).hide();
                if (f == 1) {
                    window.location = URLPrefix.commentZoneYhd + "/pe/orderProductExperience!orderProductExperience.do?soId=" + e + "&soType=" + a.soType
                }
            } else {
                jQuery("#err_popwin").html("订单暂时无法更新，请稍后再试！");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    })
};
var live800_Context = {
    _jsSrc: null,
    _cssSrc: null,
    _request_counter: 0,
    _interval_ID: null,
    _all_merchantIds: new Array(),
    _support800_merchantIds: new Array(),
    _new_point_loaded: false,
    _live800_loaded: false,
    uniqueArrays: function(e) {
        var d = new Array();
        for (var f = 0; f < e.length; f++) {
            if (!this.contains(d, e[f])) {
                d.length += 1;
                d[d.length - 1] = e[f]
            }
        }
        return d
    },
    contains: function(e, f) {
        for (var d = 0; d < e.length; d++) {
            if (f == e[d]) {
                return true
            }
        }
        return false
    },
    copyLive800Components: function(merchantArray, flag) {
        jQuery.each(merchantArray,
        function(i, n) {
            var settedDIV = jQuery("[id=live800DIV_" + n + "][setted=true]");
            if (flag) {
                jQuery("[id=live800DIV_" + n + "][setted!=true]").each(function(idx, value) {
                    var orderCode = eval("(" + $(this).attr("param") + ")").order;
                    var div = $(settedDIV).find("#onlineChatSpan").clone();
                    $(this).html($(div).attr("ordercode", orderCode))
                })
            } else {
                jQuery("[id=live800DIV_" + n + "][setted!=true]").html(settedDIV.html())
            }
        })
    },
    initLive800Components: function() {
        if (this._request_counter > 0 && this._request_counter == this._all_merchantIds.length) {
            this._request_counter = 0;
            this.loadLive800StaticFiles();
            clearInterval(this._interval_ID);
            this.copyLive800Components(this._support800_merchantIds)
        }
    },
    loadLive800StaticFiles: function() {
        if (this._cssSrc) {
            var d = $("<link/>").attr("type", "text/css").attr("rel", "stylesheet").attr("href", this._cssSrc);
            $("head").append(d)
        }
        if (this._jsSrc) {
            var c = document.createElement("script");
            c.type = "text/javascript";
            c.src = this._jsSrc;
            document.getElementsByTagName("head")[0].appendChild(c)
        }
    },
    requestLive800: function() {
        this._all_merchantIds = this.uniqueArrays(jQuery(".live800DIV").map(function() {
            return jQuery(this).attr("merchantId")
        }).get());
        if (this._all_merchantIds.length > 0) {
            this._interval_ID = setInterval("live800_Context.initLive800Components()", 1000);
            jQuery.each(this._all_merchantIds,
            function(i, n) {
                var param = eval("(" + jQuery("#live800DIV_" + n).attr("param") + ")");
                var paramStr = "limPage=" + param.limPage;
                if (param.limType) {
                    paramStr += "&limType=" + param.limType
                }
                paramStr += "&position=" + param.position;
                var url = URLPrefix.shop + "/interface/show_qq_info_lite.action?merchantId=" + n + "&" + paramStr + "&jsonpCallback=live800_Context.inshopCustomerServiceCallback";
                jQuery.getScript(url)
            })
        }
    },
    requestLive800Single: function(merchantId) {
        var param = eval("(" + jQuery("#live800DIV_" + merchantId).attr("param") + ")");
        var paramStr = "limPage=" + param.limPage;
        if (param.limType) {
            paramStr += "&limType=" + param.limType
        }
        paramStr += "&position=" + param.position;
        var url = URLPrefix.shop + "/interface/show_qq_info_lite.action?merchantId=" + merchantId + "&" + paramStr + "&jsonpCallback=live800_Context.inshopCustomerServiceCallback";
        jQuery.getScript(url)
    },
    inshopCustomerServiceCallback: function(data) {
        if (data && data.code == 0) {
            var container = jQuery("#live800DIV_" + data.merchantId);
            var param = eval("(" + container.attr("param") + ")");
            var htmlStr = data.msg;
            if (param && param.position == 3) {
                htmlStr = jQuery(data.msg).html()
            }
            container.attr("setted", true).html(htmlStr);
            this._jsSrc = data.jsFile;
            this._cssSrc = data.cssFile;
            if (!this._live800_loaded) {
                this.loadLive800StaticFiles()
            }
            this._live800_loaded = true;
            var idArray = new Array();
            idArray.push(data.merchantId);
            this.copyLive800Components(idArray)
        }
    },
    requestWebIm: function() {
        $(".DSVPOINTS").each(function(t) {
            var _t = $(this);
            var param = eval("(" + _t.attr("param") + ")");
            var paramStr = "limPage=" + param.limPage;
            if (param.limType) {
                paramStr += "&limType=" + param.limType
            }
            if (!param.order) {
                param.order = 0
            }
            if (param.iconType) {
                paramStr += "&iconType=" + param.iconType
            }
            var url = "http://webim.yhd.com/checkPoint/showDSVPoint/" + param.position + "/" + param.order + ".action?" + paramStr + "&jsonpCallback=?";
            try {
                jQuery.getJSON(url,
                function(data) {
                    if (/^[0-9]*$/.test(data)) {
                        return false
                    }
                    try {
                        _t.html(data)
                    } catch(e) {}
                })
            } catch(e1) {}
        });
        var _this = this;
        live800_Context._new_point_loaded = false;
        live800_Context._live800_loaded = false;
        this._all_merchantIds = this.uniqueArrays(jQuery(".live800DIV").map(function() {
            return jQuery(this).attr("merchantId")
        }).get());
        if (this._all_merchantIds.length > 0) {
            jQuery.each(this._all_merchantIds,
            function(i, n) {
                var param = eval("(" + jQuery("#live800DIV_" + n).attr("param") + ")");
                var paramStr = "limPage=" + param.limPage;
                if (param.limType) {
                    paramStr += "&limType=" + param.limType
                }
                if (!param.order) {
                    param.order = 0
                }
                if (param.iconType) {
                    paramStr += "&iconType=" + param.iconType
                }
                var url = "http://webim.yhd.com/checkPoint/showPoint/" + n + "/" + param.position + "/0/" + param.order + "/3.action?" + paramStr + "&jsonpCallback=?";
                jQuery.getJSON(url,
                function(data) {
                    if (data && isNaN(data)) {
                        var merchantId;
                        if (live800_Context._new_point_loaded) {
                            data = jQuery(jQuery(data).find("#onlineChatSpan"));
                            merchantId = jQuery(data).attr("merchantid")
                        } else {
                            live800_Context._new_point_loaded = true;
                            merchantId = jQuery(data).find("#onlineChatSpan").attr("merchantid")
                        }
                        var container = jQuery("#live800DIV_" + merchantId);
                        container.attr("setted", true).html(data);
                        var idArray = new Array();
                        idArray.push(merchantId);
                        _this.copyLive800Components(idArray, 1)
                    } else {
                        _this.requestLive800Single(data)
                    }
                })
            })
        }
    }
}; (function(d) {
    function e(a) {
        if (typeof countDownKey != "undefined") {
            clearInterval(a)
        }
    }
    function f(a) {
        try {
            if (typeof a == "undefined") {
                return 0
            }
            return parseInt(a)
        } catch(b) {
            return 0
        }
    }
    d.fn.countDown = function(j) {
        var l;
        var a = 60 * 60 * 1000;
        e(l);
        var k = f(d(this).attr("leftMilliseconds"));
        if (typeof k == "undefined" || k > 99 * a) {
            return
        }
        if (typeof k != "undefined" && k <= 0) {
            j(this);
            return
        }
        var b = Math.floor(k / 1000);
        var c = this;
        l = setInterval(function() {
            if (b < 0) {
                e(l);
                j(c);
                return
            }
            b = b - 1;
            var i = Math.floor(b / (60 * 60));
            var g = Math.floor((b % (60 * 60)) / 60);
            var h = b % 60;
            if (i < 10) {
                i = "0" + i
            }
            if (g < 10) {
                g = "0" + g
            }
            if (h < 10) {
                h = "0" + h
            }
            d(c).html(i + ":" + g + ":" + h)
        },
        1000)
    };
    d.fn.stopCountDown = e
} (jQuery));
function popWinPaymentList(d) {
    var c = "/order/popWinPaymentList.do?orderId=" + d;
    jQuery.ajax({
        type: "post",
        url: c,
        success: function(a) {
            yhdLib.popwin({
                popcontentstr: a
            });
            _orderEditPayment.initFun()
        }
    })
}
function changeOrderPayment(f) {
    var g = $(".edit_order_payment_sel").attr("gatewayId");
    var h = $(".edit_order_payment_sel").attr("gatewayName");
    if (!g) {
        alert("尊敬的用户,您需要选择一个支付平台或网银!")
    }
    var e = "/order/changePaymentForFinishOrder.do?gatewayId=" + g + "&orderId=" + f;
    jQuery.getJSON(e,
    function(a) {
        if (a) {
            if (a.rCode == 1) {
                $("#editPayment_cancel").click();
                jQuery("#err_popwin").html("修改支付方式成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                jQuery("#orderDetail_payment_str").html("网上支付(" + h + ")");
                jQuery("#editOrder_payment_pay_" + f).attr("state", "0")
            } else {
                $("#editPayment_cancel").click();
                jQuery("#err_popwin").html("订单暂时无法编辑，请稍后再试！");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    })
}
var _orderEditPayment = {
    hoverPay: function() {
        $(".pay_conf a").bind("mouseenter",
        function() {
            $(this).find("u").addClass("selected")
        });
        $(".pay_conf a").bind("mouseleave",
        function() {
            $(this).find("u").removeClass("selected")
        })
    },
    clickPay: function() {
        $(".pay_conf a").bind("click",
        function() {
            $(".pay_conf a").removeClass("selected").find("u").css("display", "none");
            $(".pay_conf a").removeClass("edit_order_payment_sel");
            $(this).addClass("selected").find("u").css("display", "block");
            $(this).addClass("edit_order_payment_sel")
        })
    },
    initFun: function() {
        this.hoverPay();
        this.clickPay()
    }
};
function yhdLogin() {
    yhdPublicLogin.showLoginDivNone(URLPrefix.passport, false, false,
    function() {
        location.reload()
    })
};
$(document).ready(function() {
    var a = URLPrefix.my + "/order/getMyyhdOrderListTopBanner.do?callback=?";
    jQuery.getJSON(a,
    function(i) {
        if (i && i.isAjax == 0) {
            var d = "<div class='mt mb' align='center'>";
            d = d + "<a target='_blank' data-tc='" + i.tc + "' data-tce='" + i.tcExt + "' data-recordTracker='1' data-tpa='MYYHD_PC_ORDER_LIST_AD' href='" + i.advLinkUrl + "' onclick=\"addTrackPositionToCookie('1', '" + i.addTrackKey + "');\">";
            if ($(window).width() >= 1280) {
                if ($.trim(i.advImageUrlWide) != "") {
                    d = d + "<img src='" + i.advImageUrlWide + "'/>";
                    d = d + "</a>";
                    d = d + "</div>";
                    $("#myyhdOrderTopAdBanner").html(d)
                }
            } else {
                if ($.trim(i.advImageUrl) != "") {
                    d = d + "<img  src='" + i.advImageUrl + "'/>";
                    d = d + "</a>";
                    d = d + "</div>";
                    $("#myyhdOrderTopAdBanner").html(d)
                }
            }
        } else {
            if (i && i.isAjax == 1) {
                var b = i.provinceId;
                var g = i.myyhdOrderListTopAdCode;
                var f = 1;
                if ($(window).width() >= 1280) {
                    f = 1
                } else {
                    f = 2
                }
                var c = "http://p4p.yhd.com/advdolphin/external/saleTypeWeightAd?mcSiteId=1&provinceId=" + b + "&codes=" + g + "&screenType=" + f + "&callback=?";
                jQuery.ajax({
                    url: c,
                    dataType: "jsonp",
                    jsonp: "callback",
                    timeout: 2000,
                    success: function(k) {
                        if (k && k.status == 1 && k.value && k.value.MYYIHAODIAN_SCATTERED_MYORDER_UPBANNER && k.value.MYYIHAODIAN_SCATTERED_MYORDER_UPBANNER.length > 0) {
                            var j = k.value.MYYIHAODIAN_SCATTERED_MYORDER_UPBANNER[0];
                            var e = "<div class='mt mb' align='center'>";
                            e = e + "<a target='_blank' data-tc='" + j.tc + "' data-tce='" + j.tc_ext + "' data-recordTracker='1' href='" + j.landingPage + "'>";
                            if ($.trim(j.commonScreenImgUrl) != "") {
                                e = e + "<img  src='" + j.commonScreenImgUrl + "'/>";
                                e = e + "</a>";
                                e = e + "</div>";
                                $("#myyhdOrderTopAdBanner").html(e)
                            }
                        } else {
                            if ($(window).width() >= 1280) {
                                if ($.trim(i.advImageUrlWide) != "") {
                                    var e = "<div class='mt mb' align='center'>";
                                    e = e + "<a target='_blank' data-tpa='MYYHD_PC_ORDER_LIST_AD'  data-tc='" + i.tc + "' data-tce='" + i.tcExt + "' data-recordTracker='1' href='" + i.advLinkUrl + "' onclick=\"addTrackPositionToCookie('1', '" + i.addTrackKey + "');\">";
                                    e = e + "<img  src='" + i.advImageUrlWide + "'/>";
                                    e = e + "</a>";
                                    e = e + "</div>";
                                    $("#myyhdOrderTopAdBanner").html(e)
                                }
                            } else {
                                if ($.trim(i.advImageUrl) != "") {
                                    var e = "<div class='mt mb' align='center'>";
                                    e = e + "<a target='_blank' data-tpa='MYYHD_PC_ORDER_LIST_AD'  data-tc='" + i.tc + "' data-tce='" + i.tcExt + "' data-recordTracker='1' href='" + i.advLinkUrl + "' onclick=\"addTrackPositionToCookie('1', '" + i.addTrackKey + "');\">";
                                    e = e + "<img  src='" + i.advImageUrl + "'/>";
                                    e = e + "</a>";
                                    e = e + "</div>";
                                    $("#myyhdOrderTopAdBanner").html(e)
                                }
                            }
                        }
                    }
                })
            }
        }
        try {
            require(["content_tracker_expo"],
            function(e) {
                e.run("myyhdordertopad", "ad.dolphin.bidding")
            })
        } catch(h) {}
    })
});