/* SVN.committedRevision=1559019 */
jQuery(document).ready(function() {
    $("#idCard").val($("#idCard").attr("_valueBackup"));
    var a = $(".mod_vs_one__tab"),
    l = 0;
    a.on("click", "li",
    function() {
        var i = $(this);
        l = i.index();
        i.addClass("title_li_active").siblings().removeClass("title_li_active");
        $(".mod_vs_one__content .mod_person_edit").hide();
        $(".mod_vs_one__content .mod_person_edit").eq(l).show()
    });
    _loadMyYihaodianLeftMenu.loadLeftDiv();
    if ($("#emailBind").length) {
        $("#emailBind").click(function() {
            gotracker("2", "", "", loli.spm.getData($(".bind_email"), "button"));
            if ("立即绑定" != $("#emailBind").text()) {
                return
            }
            var m;
            var i = /^\w[\w\$\^\(\)\[\]\{\}\.\-\+,]{0,100}@([a-zA-Z0-9][\w\-]*\.)+[a-zA-Z]{2,6}$/;
            if (jQuery("input[name='userInfo.email']").length) {
                var n = jQuery("input[name='userInfo.email']").val();
                m = "/activate/sendEmail.do?userEmail=" + n + "&callback=?";
                if ($.trim(n) == null || $.trim(n) == "" || $.trim(n) == "绑定邮箱，送100积分，可兑各种抵用券") {
                    jQuery("#err_popwin").html("邮箱为空，请输入您要绑定的邮箱！");
                    yhdLib.popwin({
                        poptitle: "温馨提示",
                        popcontent: ".error_info_show"
                    });
                    $("#userEmail").focus(function() {
                        jQuery("#userEmail").val("").css("color", "#333")
                    });
                    return
                } else {
                    if (!i.test(n)) {
                        jQuery("#err_popwin").html("您输入的邮箱格式不正确，请重新输入！");
                        yhdLib.popwin({
                            poptitle: "温馨提示",
                            popcontent: ".error_info_show"
                        });
                        $("#userEmail").focus(function() {
                            jQuery("#userEmail").val("").css("color", "#333")
                        });
                        return
                    }
                }
            } else {
                m = "/activate/sendEmail.do?callback=?"
            }
            $.getJSON(m,
            function(o) {
                if (o.code == 0) {
                    jQuery("#err_popwin").html("验证邮件已经发送至您的邮箱，请登录邮箱进行验证！");
                    disableBtnCountDown();
                    yhdLib.popwin({
                        poptitle: "温馨提示",
                        popcontent: ".error_info_show"
                    })
                } else {
                    if (o.code == 2) {
                        clearDisableBtnCountDown();
                        jQuery("#err_popwin").html("您输入的邮箱格式不正确，请重新输入！");
                        yhdLib.popwin({
                            poptitle: "温馨提示",
                            popcontent: ".error_info_show"
                        });
                        $("#userEmail").focus(function() {
                            jQuery("#userEmail").val("").css("color", "#333")
                        })
                    } else {
                        if (o.code == 5) {
                            clearDisableBtnCountDown();
                            jQuery("#err_popwin").html("该邮箱已存在，请换个邮箱绑定！");
                            yhdLib.popwin({
                                poptitle: "温馨提示",
                                popcontent: ".error_info_show"
                            });
                            $("#userEmail").focus(function() {
                                jQuery("#userEmail").val("").css("color", "#333")
                            })
                        } else {
                            if (o.code == 6) {
                                jQuery("#err_popwin").html("发送邮件太频繁了,请1分钟后重试！");
                                yhdLib.popwin({
                                    poptitle: "温馨提示",
                                    popcontent: ".error_info_show"
                                })
                            } else {
                                clearDisableBtnCountDown();
                                jQuery("#err_popwin").html("验证邮件发送失败，请重试！");
                                yhdLib.popwin({
                                    poptitle: "温馨提示",
                                    popcontent: ".error_info_show"
                                })
                            }
                        }
                    }
                }
            })
        })
    }
    jQuery(document).ready(function() {
        var i = $("#utype").val();
        if (i == 1) {
            $(".checked_real_name").show();
            $(".person_info").hide()
        } else {
            $(".checked_real_name").hide();
            $(".person_info").show()
        }
    });
    $("#sfzbutton").click(function() {
        gotracker("2", "MYYHD_PC_USERINFO_SFZ_EIDT", "", loli.spm.getData($("#sfzbutton")));
        $("#sfzbutton").hide();
        $("#idCard").attr("class", "");
        $("#idCard").attr("disabled", false);
        $("#idCard").val("")
    });
    $("#idCard").blur(function() {
        var i = $.trim($(this).val());
        var n = i.length;
        if (n < 18) {
            $("#tipinfo").html('<i class="icon_wrong"></i><span class="warn_box"><i class="icon_warn"></i><span>请正确输入18位二代身份证号码</span></span>');
            return false
        }
        var m = /(^\d{17}(\d|X|x)$)/;
        if (! (m.test(i) && isValid18(i))) {
            $("#tipinfo").html('<i class="icon_wrong"></i><span class="warn_box"><i class="icon_warn"></i><span>请正确输入您的身份证号码</span></span>');
            return false
        }
        $("#tipinfo").html('<i class="icon_right"></i>');
        return true
    });
    $(".container_id_card").hover(function() {
        var i = $(this).find(".small_pic").attr("src");
        if ($.trim(i).length > 0) {
            $(this).find(".bigger_id_card").html('<img src="' + i + '"/>');
            $(this).find(".hover_container").show()
        }
    },
    function() {
        $(this).find(".hover_container").hide()
    });
    $("#mobileBind").click(function() {
        window.location = "/member/safecenter/index.do"
    });
    $("#btnSubmit").click(function() {
        gotracker("2", "MYYHD_PC_USERINFO_SURE", "", loli.spm.getData($("#btnSubmit")));
        if (jQuery("input[name='userInfo.email']").length) {
            var m = jQuery.trim(jQuery("input[name='userInfo.email']").val());
            if (m != "" && m != "绑定邮箱，送100积分，可兑各种抵用券") {
                var n = /^\w[\w\$\^\(\)\[\]\{\}\.\-\+,]{0,100}@([a-zA-Z0-9][\w\-]*\.)+[a-zA-Z]{2,6}$/;
                if (!n.test(m)) {
                    jQuery("#err_popwin").html("请填写正确的邮箱地址。");
                    yhdLib.popwin({
                        poptitle: "温馨提示",
                        popcontent: ".error_info_show"
                    });
                    return false
                }
                if (m != filterScripts(m)) {
                    jQuery("#err_popwin").html("请填写正确邮箱地址。");
                    yhdLib.popwin({
                        poptitle: "温馨提示",
                        popcontent: ".error_info_show"
                    });
                    return false
                }
                var i = "/activate/checkEmailIsExist.do?userEmail=" + m + "&callback=?";
                $.getJSON(i,
                function(o) {
                    if (o.code == 1) {
                        if (!checkOtherNoEmail()) {
                            return false
                        }
                        jQuery("#updateBaseInfoSubmit").submit()
                    } else {
                        jQuery("#err_popwin").html("该邮箱已存在，请换个邮箱绑定！");
                        yhdLib.popwin({
                            poptitle: "温馨提示",
                            popcontent: ".error_info_show"
                        });
                        return false
                    }
                })
            } else {
                jQuery("input[name='userInfo.email']").val("")
            }
        }
        if (!checkOtherNoEmail()) {
            return false
        } else {
            jQuery("#updateBaseInfoSubmit").submit()
        }
    });
    if (jQuery("input[name='userInfo.email']").length) {
        $("#userEmail").focus(function() {
            if ($(this).val() == "绑定邮箱，送100积分，可兑各种抵用券") {
                $(this).val("").css("color", "#333")
            } else {
                $(this).css("color", "#333")
            }
        }).blur(function() {
            if (!$(this).val().replace(/\s/gi, "")) {
                $(this).val("绑定邮箱，送100积分，可兑各种抵用券").css("color", "#ccc")
            }
        })
    }
    var c = new Date();
    var j = c.getFullYear();
    if (jQuery("select[name='birthYear']").attr("alt") != "") {
        var d = jQuery("select[name='birthYear']").attr("alt");
        for (var f = 0; f < 80; f++) {
            if ((j - f) == d) {
                jQuery("select[name='birthYear']").append("<option value='" + (j - f) + "' selected>" + (j - f) + "</option>")
            } else {
                jQuery("select[name='birthYear']").append("<option value='" + (j - f) + "'>" + (j - f) + "</option>")
            }
        }
    } else {
        jQuery("select[name='birthYear']").prepend("<option value='0' selected='selected'>选择年</option>");
        for (var f = 0; f < 80; f++) {
            jQuery("select[name='birthYear']").append("<option value='" + (j - f) + "'>" + (j - f) + "</option>")
        }
    }
    if (jQuery("select[name='birthMonth']").attr("alt") != "") {
        var b = jQuery("select[name='birthMonth']").attr("alt");
        for (var f = 1; f <= 12; f++) {
            if (f == b) {
                jQuery("select[name='birthMonth']").append("<option value='" + f + "' selected>" + f + "</option>")
            } else {
                jQuery("select[name='birthMonth']").append("<option value='" + f + "'>" + f + "</option>")
            }
        }
    } else {
        jQuery("select[name='birthMonth']").prepend("<option value='0' selected='selected'>选择月</option>");
        for (var f = 1; f <= 12; f++) {
            jQuery("select[name='birthMonth']").append("<option value='" + f + "'>" + f + "</option>")
        }
    }
    var k = 31;
    if (jQuery("select[name='birthYear']").attr("alt") !== "" && jQuery("select[name='birthMonth']").attr("alt") != "") {
        k = g(jQuery("select[name='birthYear']").attr("alt"), jQuery("select[name='birthMonth']").attr("alt"))
    }
    if (jQuery("select[name='birthDate']").attr("alt") != "") {
        var b = jQuery("select[name='birthDate']").attr("alt");
        for (var f = 1; f <= k; f++) {
            if (f == b) {
                jQuery("select[name='birthDate']").append("<option value='" + f + "' selected>" + f + "</option>")
            } else {
                jQuery("select[name='birthDate']").append("<option value='" + f + "'>" + f + "</option>")
            }
        }
    } else {
        jQuery("select[name='birthDate']").prepend("<option value='0' selected='selected'>选择日</option>");
        for (var f = 1; f <= k; f++) {
            jQuery("select[name='birthDate']").append("<option value='" + f + "'>" + f + "</option>")
        }
    }
    jQuery("select[name='birthYear']").click(function() {
        if (jQuery("select[name='birthYear']").val() != "0") {
            jQuery("select[name='birthYear'] option[value='" + jQuery("select[name='birthYear']").val() + "']").attr("select", true)
        } else {
            jQuery("select[name='birthYear']").val(j - 20)
        }
        jQuery("select[name='birthYear'] option[value='0']").remove()
    });
    jQuery("select[name='birthMonth']").click(function() {
        if (jQuery("select[name='birthMonth']").val() != "0") {
            jQuery("select[name='birthMonth'] option[value='" + jQuery("select[name='birthMonth']").val() + "']").attr("select", true)
        }
        jQuery("select[name='birthMonth'] option[value='0']").remove()
    });
    jQuery("select[name='birthDate']").click(function() {
        if (jQuery("select[name='birthDate']").val() != "0") {
            jQuery("select[name='birthDate'] option[value='" + jQuery("select[name='birthDate']").val() + "']").attr("select", true)
        }
        jQuery("select[name='birthDate'] option[value='0']").remove()
    });
    jQuery("select[name='birthYear']").change(function() {
        e()
    });
    jQuery("select[name='birthMonth']").change(function() {
        e()
    });
    jQuery("select[name='birthDate']").change(function() {
        e()
    });
    function e() {
        var o = jQuery("select[name='birthDate']").val();
        var m = jQuery("select[name='birthDate'] option[value='0']").length;
        jQuery("select[name='birthDate']").empty();
        if (m) {
            jQuery("select[name='birthDate']").append("<option value='0' selected='selected'>选择日</option>")
        }
        k = g(jQuery("select[name='birthYear']").val(), jQuery("select[name='birthMonth']").val());
        if (o > k) {
            o = k
        }
        for (var n = 1; n <= k; n++) {
            if (n == o) {
                jQuery("select[name='birthDate']").append("<option value='" + n + "' selected='selected'>" + n + "</option>")
            } else {
                jQuery("select[name='birthDate']").append("<option value='" + n + "'>" + n + "</option>")
            }
        }
    }
    function g(i, m) {
        if (m == 4 || m == 6 || m == 9 || m == 11) {
            return 30
        } else {
            if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
                return 31
            } else {
                if ((i % 4 == 0 && i % 100 != 0) || (i % 100 == 0 && i % 400 == 0)) {
                    return 29
                } else {
                    return 28
                }
            }
        }
    }
    jQuery("#editp button").click(function() {
        jQuery.get("/member/userinfo/alterImage.do?userInfo.userPic=" + encodeURIComponent(jQuery("#userface").attr("src")),
        function() {
            jQuery("#editp").css("display", "none")
        });
        return false
    });
    var h = new Array(6);
    h[0] = URLPrefix.statics + "/member/images/peopleicon_01.gif";
    h[1] = URLPrefix.statics + "/member/images/peopleicon_02.gif";
    h[2] = URLPrefix.statics + "/member/images/peopleicon_03.gif";
    h[3] = URLPrefix.statics + "/member/images/peopleicon_04.gif";
    h[4] = URLPrefix.statics + "/member/images/peopleicon_05.gif";
    h[5] = URLPrefix.statics + "/member/images/peopleicon_06.gif";
    jQuery("#editp a img").each(function(i) {
        jQuery(this).attr("src", h[i]);
        jQuery(this).click(function() {
            jQuery("#userface").attr("src", jQuery(this).attr("src"));
            jQuery(":hidden[name='userInfo.userPic']").val(jQuery(this).attr("src"))
        })
    })
});
var intervalKey = undefined;
var disableBtnCountDown = function() {
    if (intervalKey) {
        clearInterval(intervalKey)
    }
    var a = jQuery("#emailBind");
    var b = 60;
    intervalKey = setInterval(function() {
        a.text(b + "秒重发");
        b--;
        if (b <= 0) {
            a.text("立即绑定");
            clearDisableBtnCountDown()
        }
    },
    1000)
};
var clearDisableBtnCountDown = function() {
    if (intervalKey) {
        clearInterval(intervalKey)
    }
};
var MY_YHD = new
function() {
    this.alert = function(a) {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/6./i) == "6.") {
            jQuery("select").css("display", "none");
            YHD.alert(a,
            function() {
                jQuery("select").css("display", "")
            })
        } else {
            YHD.alert(a)
        }
    }
};
function filterScripts(a) {
    var b = "";
    b = decodeURIComponent(a);
    b = b.replace(/<script(.|\n)*\/script>\s*/ig, "").replace(/<javascript(.|\n)*\/javascript>\s*/ig, "").replace(/<[^>]+/ig,
    function(c) {
        return c.replace(/\s*on\w+=[^ ]+/ig, "")
    });
    return b
}
function checkOtherNoEmail() {
    var d = jQuery(":text[name='userInfo.nick']").val();
    if (d == "") {
        jQuery("#err_popwin").html("请输入您的昵称");
        yhdLib.popwin({
            poptitle: "温馨提示",
            popcontent: ".error_info_show"
        });
        return false
    }
    if (d != "") {
        if (d.length > 40) {
            jQuery("#err_popwin").html("请填写昵称，不超过40个字。");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        if (d != filterScripts(d)) {
            jQuery("#err_popwin").html("您填写的内容包含非法信息。");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
    }
    var a = jQuery("#end_user_real_realname_1").val();
    if (a == "") {
        jQuery("#err_popwin").html("请输入您的真实姓名");
        yhdLib.popwin({
            poptitle: "温馨提示",
            popcontent: ".error_info_show"
        });
        return false
    }
    if (a != "") {
        if (a.length > 40) {
            jQuery("#err_popwin").html("请填写姓名，不超过40个字。");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        if (a != filterScripts(a)) {
            jQuery("#err_popwin").html("您填写的内容包含非法信息。");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
    }
    var c = jQuery('input:radio[id="male"]:checked').val();
    var b = jQuery('input:radio[id="female"]:checked').val();
    if (! (c === "0" || b === "1")) {
        jQuery("#err_popwin").html("请选择性别");
        yhdLib.popwin({
            poptitle: "温馨提示",
            popcontent: ".error_info_show"
        });
        return false
    }
    var f = jQuery("select[name='birthYear']").find("option:selected").val();
    var g = jQuery("select[name='birthMonth']").find("option:selected").val();
    var e = jQuery("select[name='birthDate']").find("option:selected").val();
    if (f == 0 || e == 0 || g == 0) {
        jQuery("#err_popwin").html("请选择生日的年、月、日");
        yhdLib.popwin({
            poptitle: "温馨提示",
            popcontent: ".error_info_show"
        });
        return false
    }
    return true
}
$(function() {
    var enduserId = $("#userId").val();
    var ut = jQuery.cookie("ut");
    initCardFront(enduserId, ut);
    $("#card_front_again").uploadify({
        swf: "js/uploadify.swf",
        uploader: "/member/userAuth/frontCardUpload.do?endUserId=" + enduserId + "&ut=" + ut,
        multi: false,
        buttonText: "重新上传",
        buttonClass: "btn_click_submit",
        height: "26px",
        width: "80px",
        fileSizeLimit: "8192k",
        fileTypeExts: "*.jpg;*.jpeg;*.png",
        fileObjName: "frontCard",
        queueID: "frond_card_queue",
        removeTimeout: "1",
        onFallback: function() {
            var fls = flashChecker();
            if (fls.f) {
                if (fls.v < 9) {
                    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
                    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
                }
            } else {
                var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
                jQuery("#flashPlayInstallEditinfoCheck").html(msg)
            }
        },
        onSelectError: function(file, errorCode, errorMsg) {
            switch (errorCode) {
            case - 110 : jQuery("#err_popwin").html("您上传的图片大于8MB，请处理至8MB以下再次上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break;
            case - 120 : break;
            case - 130 : jQuery("#err_popwin").html("请选择jpg、png、jpeg格式的图片文件进行上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break
            }
        },
        onUploadSuccess: function(file, data, response) {
            var obj = eval("(" + data + ")");
            var result = obj.result;
            if (result == 1) {
                $("#f_hidden").val(obj.fronturl);
                jQuery("#err_popwin").html("身份证正面图片上传成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            } else {
                $("#idCardFront").attr("_isupload", false);
                $("#idCardFront").html('<i class="icon_add"></i>添加照片<div class="file_add_pic"><input type="file" id="card_front" name="frontCard"/></div><div id="frond_card_queue_pic"></div>');
                var enduserId = $("#userId").val();
                var ut = jQuery.cookie("ut");
                initCardFront(enduserId, ut);
                $("#btnFrontUploadAgain").css("display", "none");
                jQuery("#err_popwin").html("身份证正面图片上传失败");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    });
    initCardBack(enduserId, ut);
    $("#card_back_again").uploadify({
        swf: "js/uploadify.swf",
        uploader: "/member/userAuth/backCardUpload.do?endUserId=" + enduserId + "&ut=" + ut,
        multi: false,
        buttonText: "重新上传",
        buttonClass: "btn_click_submit",
        height: "26px",
        width: "80px",
        fileSizeLimit: "8192k",
        fileTypeExts: "*.jpg;*.jpeg;*.png",
        fileObjName: "backCard",
        queueID: "back_card_queue",
        removeTimeout: "1",
        onFallback: function() {
            var fls = flashChecker();
            if (fls.f) {
                if (fls.v < 9) {
                    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
                    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
                }
            } else {
                var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
                jQuery("#flashPlayInstallEditinfoCheck").html(msg)
            }
        },
        onSelectError: function(file, errorCode, errorMsg) {
            switch (errorCode) {
            case - 110 : jQuery("#err_popwin").html("您上传的图片大于8MB，请处理至8MB以下再次上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break;
            case - 120 : break;
            case - 130 : jQuery("#err_popwin").html("请选择jpg、png、jpeg格式的图片文件进行上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break
            }
        },
        onUploadSuccess: function(file, data, response) {
            var obj = eval("(" + data + ")");
            var result = obj.result;
            if (result == 1) {
                $("#b_hidden").val(obj.backurl);
                jQuery("#err_popwin").html("身份证背面图片上传成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            } else {
                $("#idCardBack").attr("_isupload", false);
                $("#idCardBack").html('<i class="icon_add"></i>添加照片<div class="file_add_pic"><div id="card_back" name="backCard"></div></div><div id="back_card_queue_pic"></div>');
                var enduserId = $("#userId").val();
                var ut = jQuery.cookie("ut");
                initCardBack(enduserId, ut);
                $("#btnBackUploadAgain").css("display", "none");
                jQuery("#err_popwin").html("身份证背面图片上传失败");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    });
    initHandWithCard(enduserId, ut);
    $("#handWith_card_again").uploadify({
        swf: "js/uploadify.swf",
        uploader: "/member/userAuth/handWithIdCardUpload.do?endUserId=" + enduserId + "&ut=" + ut,
        multi: false,
        buttonText: "重新上传",
        buttonClass: "btn_click_submit",
        height: "26px",
        width: "80px",
        fileSizeLimit: "8192k",
        fileTypeExts: "*.jpg;*.jpeg;*.png",
        fileObjName: "withIdCard",
        queueID: "handWith_card_queue",
        removeTimeout: "1",
        onFallback: function() {
            var fls = flashChecker();
            if (fls.f) {
                if (fls.v < 9) {
                    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
                    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
                }
            } else {
                var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
                jQuery("#flashPlayInstallEditinfoCheck").html(msg)
            }
        },
        onSelectError: function(file, errorCode, errorMsg) {
            switch (errorCode) {
            case - 110 : jQuery("#err_popwin").html("您上传的图片大于8MB，请处理至8MB以下再次上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break;
            case - 120 : break;
            case - 130 : jQuery("#err_popwin").html("请选择jpg、png、jpeg格式的图片文件进行上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break
            }
        },
        onUploadSuccess: function(file, data, response) {
            var obj = eval("(" + data + ")");
            var result = obj.result;
            if (result == 1) {
                $("#w_hidden").val(obj.withIDCardUrl);
                jQuery("#err_popwin").html("手持身份证图片上传成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            } else {
                $("#idCardHand").attr("_isupload", false);
                $("#idCardHand").html('<i class="icon_add"></i>添加照片<div class="file_add_pic"><div id="handWith_card" name="withIdCard"></div></div><div id="handWith_card_queue_pic"></div>');
                var enduserId = $("#userId").val();
                var ut = jQuery.cookie("ut");
                initHandWithCard(enduserId, ut);
                $("#btnHandUploadAgain").css("display", "none");
                jQuery("#err_popwin").html("手持身份证图片上传失败");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    });
    $("#saveIdCardBtn").click(function() {
        gotracker("2", "MYYHD_PC_USERINFOPIC_SURE", "", loli.spm.getData($("#saveIdCardBtn")));
        var userRealRealName = jQuery("#end_user_real_realname_2").val();
        if (userRealRealName == "") {
            jQuery("#err_popwin").html("请输入您的真实姓名");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        if (userRealRealName != "") {
            if (userRealRealName.length > 40) {
                jQuery("#err_popwin").html("请填写姓名，不超过40个字。");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                return false
            }
            if (userRealRealName != filterScripts(userRealRealName)) {
                jQuery("#err_popwin").html("您填写的内容包含非法信息。");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                return false
            }
        }
        var idCardValue = $("#idCard").val();
        var idCardLength = $.trim(idCardValue).length;
        if (idCardLength < 18) {
            $("#tipinfo").html('<i class="icon_wrong"></i><span class="warn_box"><i class="icon_warn"></i><span>请正确输入18位二代身份证号码</span></span>');
            jQuery("#err_popwin").html("请正确输入18位二代身份证号码。");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        var reg = /(^\d{17}(\d|X|x)$)/;
        if (! (reg.test(idCardValue) && isValid18(idCardValue)) && idCardValue.substring(12, 18) != "******") {
            $("#tipinfo").html('<i class="icon_wrong"></i><span class="warn_box"><i class="icon_warn"></i><span>请正确输入您的身份证号码</span></span>');
            jQuery("#err_popwin").html("请正确输入您的身份证号码。");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        var isUploadFront = $("#idCardFront").attr("_isUpload");
        if (isUploadFront == "false") {
            jQuery("#err_popwin").html("请上传身份证正面图片");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        var isUploadBack = $("#idCardBack").attr("_isUpload");
        if (isUploadBack == "false") {
            jQuery("#err_popwin").html("请上传身份证背面图片");
            yhdLib.popwin({
                poptitle: "温馨提示",
                popcontent: ".error_info_show"
            });
            return false
        }
        $.ajax({
            type: "post",
            url: "/member/userAuth/updateUserAuth.do",
            data: {
                endUserId: enduserId,
                ut: ut,
                "userInfo.endUserRealRealName": $("#end_user_real_realname_2").val(),
                "userInfo.idCard": $("#idCard").val(),
                "userInfo.fronthidden": $("#f_hidden").val(),
                "userInfo.backhidden": $("#b_hidden").val(),
                "userInfo.withCardhidden": $("#w_hidden").val()
            },
            cache: false,
            success: function(data) {
                var result = data.result;
                if (result == 1) {
                    jQuery("#err_popwin").html("实名认证信息保存成功");
                    $("#end_user_real_realname_1").val($("#end_user_real_realname_2").val());
                    yhdLib.popwin({
                        poptitle: "温馨提示",
                        popcontent: ".error_info_show"
                    })
                } else {
                    jQuery("#err_popwin").html("实名认证信息保存失败");
                    yhdLib.popwin({
                        poptitle: "温馨提示",
                        popcontent: ".error_info_show"
                    })
                }
            }
        });
        return true
    })
});
function isValid18(e) {
    var h = new Array("7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2");
    var g = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var e = e + "";
    var d = e.substr(0, 17);
    var f = e.substr(17).toUpperCase();
    var a = 0;
    for (var c = 0; c < 17; c++) {
        a += parseInt(d.charAt(c)) * parseInt(h[c])
    }
    var b = parseInt(a) % 11;
    if (g[b] == f) {
        return true
    }
    return false
}
function initCardFront(enduserId, ut) {
    $("#card_front").uploadify({
        swf: "js/uploadify.swf",
        uploader: "/member/userAuth/frontCardUpload.do?endUserId=" + enduserId + "&ut=" + ut,
        multi: false,
        buttonText: "点击上传",
        buttonClass: "btn_click_submit",
        height: "120px",
        width: "120px",
        fileSizeLimit: "8192k",
        fileTypeExts: "*.jpg;*.jpeg;*.png",
        fileObjName: "frontCard",
        queueID: "frond_card_queue_pic",
        removeTimeout: "1",
        buttonCursor: "hand",
        onFallback: function() {
            var fls = flashChecker();
            if (fls.f) {
                if (fls.v < 9) {
                    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
                    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
                }
            } else {
                var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
                jQuery("#flashPlayInstallEditinfoCheck").html(msg)
            }
        },
        onSelectError: function(file, errorCode, errorMsg) {
            switch (errorCode) {
            case - 110 : jQuery("#err_popwin").html("您上传的图片大于8MB，请处理至8MB以下再次上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break;
            case - 120 : break;
            case - 130 : jQuery("#err_popwin").html("请选择jpg、png、jpeg格式的图片文件进行上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break
            }
        },
        onUploadSuccess: function(file, data, response) {
            var obj = eval("(" + data + ")");
            var result = obj.result;
            if (result == 1) {
                $("#f_hidden").val(obj.fronturl);
                $("#idCardFront").attr("_isupload", true);
                $("#idCardFront").attr("class", "upload_success_cursor");
                $("#idCardFront").html('<i class="icon_upload_success"></i>上传成功');
                $("#btnFrontUploadAgain").css("display", "block");
                jQuery("#err_popwin").html("身份证正面图片上传成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            } else {
                jQuery("#err_popwin").html("身份证正面图片上传失败");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    })
}
function initCardBack(enduserId, ut) {
    $("#card_back").uploadify({
        swf: "js/uploadify.swf",
        uploader: "/member/userAuth/backCardUpload.do?endUserId=" + enduserId + "&ut=" + ut,
        multi: false,
        buttonText: "点击上传",
        buttonClass: "btn_click_submit",
        height: "120px",
        width: "120px",
        fileSizeLimit: "8192k",
        fileTypeExts: "*.jpg;*.jpeg;*.png",
        fileObjName: "backCard",
        queueID: "back_card_queue_pic",
        removeTimeout: "1",
        onFallback: function() {
            var fls = flashChecker();
            if (fls.f) {
                if (fls.v < 9) {
                    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
                    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
                }
            } else {
                var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
                jQuery("#flashPlayInstallEditinfoCheck").html(msg)
            }
        },
        onSelectError: function(file, errorCode, errorMsg) {
            switch (errorCode) {
            case - 110 : jQuery("#err_popwin").html("您上传的图片大于8MB，请处理至8MB以下再次上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break;
            case - 120 : break;
            case - 130 : jQuery("#err_popwin").html("请选择jpg、png、jpeg格式的图片文件进行上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break
            }
        },
        onUploadSuccess: function(file, data, response) {
            var obj = eval("(" + data + ")");
            var result = obj.result;
            if (result == 1) {
                $("#b_hidden").val(obj.backurl);
                $("#idCardBack").attr("_isupload", true);
                $("#idCardBack").attr("class", "upload_success_cursor");
                $("#idCardBack").html('<i class="icon_upload_success"></i>上传成功');
                $("#btnBackUploadAgain").css("display", "block");
                jQuery("#err_popwin").html("身份证背面图片上传成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            } else {
                jQuery("#err_popwin").html("身份证背面图片上传失败");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    })
}
function initHandWithCard(enduserId, ut) {
    $("#handWith_card").uploadify({
        swf: "js/uploadify.swf",
        uploader: "/member/userAuth/handWithIdCardUpload.do?endUserId=" + enduserId + "&ut=" + ut,
        multi: false,
        buttonText: "点击上传",
        buttonClass: "btn_click_submit",
        height: "120px",
        width: "120px",
        fileSizeLimit: "8192k",
        fileTypeExts: "*.jpg;*.jpeg;*.png",
        fileObjName: "withIdCard",
        queueID: "handWith_card_queue_pic",
        removeTimeout: "1",
        onFallback: function() {
            var fls = flashChecker();
            if (fls.f) {
                if (fls.v < 9) {
                    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
                    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
                }
            } else {
                var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
                jQuery("#flashPlayInstallEditinfoCheck").html(msg)
            }
        },
        onSelectError: function(file, errorCode, errorMsg) {
            switch (errorCode) {
            case - 110 : jQuery("#err_popwin").html("您上传的图片大于8MB，请处理至8MB以下再次上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break;
            case - 120 : break;
            case - 130 : jQuery("#err_popwin").html("请选择jpg、png、jpeg格式的图片文件进行上传");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                });
                break
            }
        },
        onUploadSuccess: function(file, data, response) {
            var obj = eval("(" + data + ")");
            var result = obj.result;
            if (result == 1) {
                $("#w_hidden").val(obj.withIDCardUrl);
                $("#idCardHand").attr("_isupload", true);
                $("#idCardHand").attr("class", "upload_success_cursor");
                $("#idCardHand").html('<i class="icon_upload_success"></i>上传成功');
                $("#btnHandUploadAgain").css("display", "block");
                jQuery("#err_popwin").html("手持身份证图片上传成功");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            } else {
                jQuery("#err_popwin").html("手持身份证图片上传失败");
                yhdLib.popwin({
                    poptitle: "温馨提示",
                    popcontent: ".error_info_show"
                })
            }
        }
    })
}; (function(e) {
    var b = Math.abs,
    a = Math.max,
    d = Math.min,
    c = Math.round;
    function f() {
        return e("<div/>")
    }
    e.imgAreaSelect = function(s, X) {
        var az = e(s),
        Z,
        av = f(),
        ai = f(),
        K = f().add(f()).add(f()).add(f()),
        ab = f().add(f()).add(f()).add(f()),
        O = e([]),
        V,
        n,
        q,
        aC = {
            left: 0,
            top: 0
        },
        Q,
        j,
        C,
        P = {
            left: 0,
            top: 0
        },
        D = 0,
        ag = "absolute",
        T,
        S,
        ad,
        ac,
        L,
        E,
        U,
        W,
        am,
        Y,
        N,
        A,
        aD,
        z,
        aB,
        y = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        },
        p = document.documentElement,
        l,
        au,
        ap,
        aj,
        af,
        aq,
        x;
        function J(h) {
            return h + aC.left - P.left
        }
        function I(h) {
            return h + aC.top - P.top
        }
        function H(h) {
            return h - aC.left + P.left
        }
        function B(h) {
            return h - aC.top + P.top
        }
        function ao(h) {
            return h.pageX - P.left
        }
        function al(h) {
            return h.pageY - P.top
        }
        function G(h) {
            var o = h || ad,
            i = h || ac;
            return {
                x1: c(y.x1 * o),
                y1: c(y.y1 * i),
                x2: c(y.x2 * o),
                y2: c(y.y2 * i),
                width: c(y.x2 * o) - c(y.x1 * o),
                height: c(y.y2 * i) - c(y.y1 * i)
            }
        }
        function ah(i, w, h, o, aE) {
            var aG = aE || ad,
            aF = aE || ac;
            y = {
                x1: c(i / aG || 0),
                y1: c(w / aF || 0),
                x2: c(h / aG || 0),
                y2: c(o / aF || 0)
            };
            y.width = y.x2 - y.x1;
            y.height = y.y2 - y.y1
        }
        function ar() {
            if (!az.width()) {
                return
            }
            aC = {
                left: c(az.offset().left),
                top: c(az.offset().top)
            };
            Q = az.innerWidth();
            j = az.innerHeight();
            aC.top += (az.outerHeight() - j) >> 1;
            aC.left += (az.outerWidth() - Q) >> 1;
            E = c(X.minWidth / ad) || 0;
            U = c(X.minHeight / ac) || 0;
            W = c(d(X.maxWidth / ad || 1 << 24, Q));
            am = c(d(X.maxHeight / ac || 1 << 24, j));
            if (e().jquery == "1.3.2" && ag == "fixed" && !p.getBoundingClientRect) {
                aC.top += a(document.body.scrollTop, p.scrollTop);
                aC.left += a(document.body.scrollLeft, p.scrollLeft)
            }
            P = /absolute|relative/.test(C.css("position")) ? {
                left: c(C.offset().left) - C.scrollLeft(),
                top: c(C.offset().top) - C.scrollTop()
            }: ag == "fixed" ? {
                left: e(document).scrollLeft(),
                top: e(document).scrollTop()
            }: {
                left: 0,
                top: 0
            };
            n = J(0);
            q = I(0);
            if (y.x2 > Q || y.y2 > j) {
                ay()
            }
        }
        function aa(h) {
            if (!N) {
                return
            }
            av.css({
                left: J(y.x1),
                top: I(y.y1)
            }).add(ai).width(af = y.width).height(aq = y.height);
            ai.add(K).add(O).css({
                left: 0,
                top: 0
            });
            K.width(a(af - K.outerWidth() + K.innerWidth(), 0)).height(a(aq - K.outerHeight() + K.innerHeight(), 0));
            e(ab[0]).css({
                left: n,
                top: q,
                width: y.x1,
                height: j
            });
            e(ab[1]).css({
                left: n + y.x1,
                top: q,
                width: af,
                height: y.y1
            });
            e(ab[2]).css({
                left: n + y.x2,
                top: q,
                width: Q - y.x2,
                height: j
            });
            e(ab[3]).css({
                left: n + y.x1,
                top: q + y.y2,
                width: af,
                height: j - y.y2
            });
            af -= O.outerWidth();
            aq -= O.outerHeight();
            switch (O.length) {
            case 8:
                e(O[4]).css({
                    left:
                    af >> 1
                });
                e(O[5]).css({
                    left: af,
                    top: aq >> 1
                });
                e(O[6]).css({
                    left: af >> 1,
                    top: aq
                });
                e(O[7]).css({
                    top: aq >> 1
                });
            case 4:
                O.slice(1, 3).css({
                    left: af
                });
                O.slice(2, 4).css({
                    top: aq
                })
            }
            if (h !== false) {
                if (e.imgAreaSelect.keyPress != aw) {
                    e(document).unbind(e.imgAreaSelect.keyPress, e.imgAreaSelect.onKeyPress)
                }
                if (X.keys) {
                    e(document)[e.imgAreaSelect.keyPress](e.imgAreaSelect.onKeyPress = aw)
                }
            }
            if (e.browser.msie && K.outerWidth() - K.innerWidth() == 2) {
                K.css("margin", 0);
                setTimeout(function() {
                    K.css("margin", "auto")
                },
                0)
            }
        }
        function u(h) {
            ar();
            aa(h);
            A = J(y.x1);
            aD = I(y.y1);
            z = J(y.x2);
            aB = I(y.y2)
        }
        function ak(h, i) {
            X.fadeSpeed ? h.fadeOut(X.fadeSpeed, i) : h.hide()
        }
        function F(i) {
            var h = H(ao(i)) - y.x1,
            o = B(al(i)) - y.y1;
            if (!x) {
                ar();
                x = true;
                av.one("mouseout",
                function() {
                    x = false
                })
            }
            L = "";
            if (X.resizable) {
                if (o <= X.resizeMargin) {
                    L = "n"
                } else {
                    if (o >= y.height - X.resizeMargin) {
                        L = "s"
                    }
                }
                if (h <= X.resizeMargin) {
                    L += "w"
                } else {
                    if (h >= y.width - X.resizeMargin) {
                        L += "e"
                    }
                }
            }
            av.css("cursor", L ? L + "-resize": X.movable ? "move": "");
            if (V) {
                V.toggle()
            }
        }
        function an(h) {
            e("body").css("cursor", "");
            if (X.autoHide || y.width * y.height == 0) {
                ak(av.add(ab),
                function() {
                    e(this).hide()
                })
            }
            e(document).unbind("mousemove", ae);
            av.mousemove(F);
            X.onSelectEnd(s, G())
        }
        function t(h) {
            if (h.which != 1) {
                return false
            }
            ar();
            if (L) {
                e("body").css("cursor", L + "-resize");
                A = J(y[/w/.test(L) ? "x2": "x1"]);
                aD = I(y[/n/.test(L) ? "y2": "y1"]);
                e(document).mousemove(ae).one("mouseup", an);
                av.unbind("mousemove", F)
            } else {
                if (X.movable) {
                    T = n + y.x1 - ao(h);
                    S = q + y.y1 - al(h);
                    av.unbind("mousemove", F);
                    e(document).mousemove(g).one("mouseup",
                    function() {
                        X.onSelectEnd(s, G());
                        e(document).unbind("mousemove", g);
                        av.mousemove(F)
                    })
                } else {
                    az.mousedown(h)
                }
            }
            return false
        }
        function r(h) {
            if (Y) {
                if (h) {
                    z = a(n, d(n + Q, A + b(aB - aD) * Y * (z > A || -1)));
                    aB = c(a(q, d(q + j, aD + b(z - A) / Y * (aB > aD || -1))));
                    z = c(z)
                } else {
                    aB = a(q, d(q + j, aD + b(z - A) / Y * (aB > aD || -1)));
                    z = c(a(n, d(n + Q, A + b(aB - aD) * Y * (z > A || -1))));
                    aB = c(aB)
                }
            }
        }
        function ay() {
            A = d(A, n + Q);
            aD = d(aD, q + j);
            if (b(z - A) < E) {
                z = A - E * (z < A || -1);
                if (z < n) {
                    A = n + E
                } else {
                    if (z > n + Q) {
                        A = n + Q - E
                    }
                }
            }
            if (b(aB - aD) < U) {
                aB = aD - U * (aB < aD || -1);
                if (aB < q) {
                    aD = q + U
                } else {
                    if (aB > q + j) {
                        aD = q + j - U
                    }
                }
            }
            z = a(n, d(z, n + Q));
            aB = a(q, d(aB, q + j));
            r(b(z - A) < b(aB - aD) * Y);
            if (b(z - A) > W) {
                z = A - W * (z < A || -1);
                r()
            }
            if (b(aB - aD) > am) {
                aB = aD - am * (aB < aD || -1);
                r(true)
            }
            y = {
                x1: H(d(A, z)),
                x2: H(a(A, z)),
                y1: B(d(aD, aB)),
                y2: B(a(aD, aB)),
                width: b(z - A),
                height: b(aB - aD)
            };
            aa();
            X.onSelectChange(s, G())
        }
        function ae(h) {
            z = /w|e|^$/.test(L) || Y ? ao(h) : J(y.x2);
            aB = /n|s|^$/.test(L) || Y ? al(h) : I(y.y2);
            ay();
            return false
        }
        function R(h, i) {
            z = (A = h) + y.width;
            aB = (aD = i) + y.height;
            e.extend(y, {
                x1: H(A),
                y1: B(aD),
                x2: H(z),
                y2: B(aB)
            });
            aa();
            X.onSelectChange(s, G())
        }
        function g(h) {
            A = a(n, d(T + ao(h), n + Q - y.width));
            aD = a(q, d(S + al(h), q + j - y.height));
            R(A, aD);
            h.preventDefault();
            return false
        }
        function aA() {
            e(document).unbind("mousemove", aA);
            ar();
            z = A;
            aB = aD;
            ay();
            L = "";
            if (!ab.is(":visible")) {
                av.add(ab).hide().fadeIn(X.fadeSpeed || 0)
            }
            N = true;
            e(document).unbind("mouseup", at).mousemove(ae).one("mouseup", an);
            av.unbind("mousemove", F);
            X.onSelectStart(s, G())
        }
        function at() {
            e(document).unbind("mousemove", aA).unbind("mouseup", at);
            ak(av.add(ab));
            ah(H(A), B(aD), H(A), B(aD));
            if (!this instanceof e.imgAreaSelect) {
                X.onSelectChange(s, G());
                X.onSelectEnd(s, G())
            }
        }
        function m(h) {
            if (h.which != 1 || ab.is(":animated")) {
                return false
            }
            ar();
            T = A = ao(h);
            S = aD = al(h);
            e(document).mousemove(aA).mouseup(at);
            return false
        }
        function v() {
            u(false)
        }
        function ax() {
            Z = true;
            M(X = e.extend({
                classPrefix: "imgareaselect",
                movable: true,
                parent: "body",
                resizable: true,
                resizeMargin: 10,
                onInit: function() {},
                onSelectStart: function() {},
                onSelectChange: function() {},
                onSelectEnd: function() {}
            },
            X));
            av.add(ab).css({
                visibility: ""
            });
            if (X.show) {
                N = true;
                ar();
                aa();
                av.add(ab).hide().fadeIn(X.fadeSpeed || 0)
            }
            setTimeout(function() {
                X.onInit(s, G())
            },
            0)
        }
        var aw = function(w) {
            var h = X.keys,
            aE, o, i = w.keyCode;
            aE = !isNaN(h.alt) && (w.altKey || w.originalEvent.altKey) ? h.alt: !isNaN(h.ctrl) && w.ctrlKey ? h.ctrl: !isNaN(h.shift) && w.shiftKey ? h.shift: !isNaN(h.arrows) ? h.arrows: 10;
            if (h.arrows == "resize" || (h.shift == "resize" && w.shiftKey) || (h.ctrl == "resize" && w.ctrlKey) || (h.alt == "resize" && (w.altKey || w.originalEvent.altKey))) {
                switch (i) {
                case 37:
                    aE = -aE;
                case 39:
                    o = a(A, z);
                    A = d(A, z);
                    z = a(o + aE, A);
                    r();
                    break;
                case 38:
                    aE = -aE;
                case 40:
                    o = a(aD, aB);
                    aD = d(aD, aB);
                    aB = a(o + aE, aD);
                    r(true);
                    break;
                default:
                    return
                }
                ay()
            } else {
                A = d(A, z);
                aD = d(aD, aB);
                switch (i) {
                case 37:
                    R(a(A - aE, n), aD);
                    break;
                case 38:
                    R(A, a(aD - aE, q));
                    break;
                case 39:
                    R(A + d(aE, Q - H(z)), aD);
                    break;
                case 40:
                    R(A, aD + d(aE, j - B(aB)));
                    break;
                default:
                    return
                }
            }
            return false
        };
        function k(h, i) {
            for (option in i) {
                if (X[option] !== undefined) {
                    h.css(i[option], X[option])
                }
            }
        }
        function M(h) {
            if (h.parent) { (C = e(h.parent)).append(av.add(ab))
            }
            e.extend(X, h);
            ar();
            if (h.handles != null) {
                O.remove();
                O = e([]);
                ap = h.handles ? h.handles == "corners" ? 4 : 8 : 0;
                while (ap--) {
                    O = O.add(f())
                }
                O.addClass(X.classPrefix + "-handle").css({
                    position: "absolute",
                    fontSize: 0,
                    zIndex: D + 1 || 1
                });
                if (!parseInt(O.css("width")) >= 0) {
                    O.width(5).height(5)
                }
                if (aj = X.borderWidth) {
                    O.css({
                        borderWidth: aj,
                        borderStyle: "solid"
                    })
                }
                k(O, {
                    borderColor1: "border-color",
                    borderColor2: "background-color",
                    borderOpacity: "opacity"
                })
            }
            ad = X.imageWidth / Q || 1;
            ac = X.imageHeight / j || 1;
            if (h.x1 != null) {
                ah(h.x1, h.y1, h.x2, h.y2);
                h.show = !h.hide
            }
            if (h.keys) {
                X.keys = e.extend({
                    shift: 1,
                    ctrl: "resize"
                },
                h.keys)
            }
            av.addClass(X.classPrefix + "-imgdiv");
            ab.addClass(X.classPrefix + "-outer");
            ai.addClass(X.classPrefix + "-selection");
            for (ap = 0; ap++<4;) {
                e(K[ap - 1]).addClass(X.classPrefix + "-border" + ap)
            }
            k(ai, {
                selectionColor: "background-color",
                selectionOpacity: "opacity"
            });
            k(K, {
                borderOpacity: "opacity",
                borderWidth: "border-width"
            });
            k(ab, {
                outerColor: "background-color",
                outerOpacity: "opacity"
            });
            if (aj = X.borderColor1) {
                e(K[0]).css({
                    borderStyle: "solid",
                    borderColor: aj
                })
            }
            if (aj = X.borderColor2) {
                e(K[1]).css({
                    borderStyle: "dashed",
                    borderColor: aj
                })
            }
            av.append(ai.add(K).add(V).add(O));
            if (e.browser.msie) {
                if (aj = ab.css("filter").match(/opacity=(\d+)/)) {
                    ab.css("opacity", aj[1] / 100)
                }
                if (aj = K.css("filter").match(/opacity=(\d+)/)) {
                    K.css("opacity", aj[1] / 100)
                }
            }
            if (h.hide) {
                ak(av.add(ab))
            } else {
                if (h.show && Z) {
                    N = true;
                    av.add(ab).fadeIn(X.fadeSpeed || 0);
                    u()
                }
            }
            Y = (au = (X.aspectRatio || "").split(/:/))[0] / au[1];
            az.add(ab).unbind("mousedown", m);
            if (X.disable || X.enable === false) {
                av.unbind("mousemove", F).unbind("mousedown", t);
                e(window).unbind("resize", v)
            } else {
                if (X.enable || X.disable === false) {
                    if (X.resizable || X.movable) {
                        av.mousemove(F).mousedown(t)
                    }
                    e(window).resize(v)
                }
                if (!X.persistent) {
                    az.add(ab).mousedown(m)
                }
            }
            X.enable = X.disable = undefined
        }
        this.remove = function() {
            M({
                disable: true
            });
            av.add(ab).remove()
        };
        this.getOptions = function() {
            return X
        };
        this.setOptions = M;
        this.getSelection = G;
        this.setSelection = ah;
        this.cancelSelection = at;
        this.update = u;
        l = az;
        while (l.length) {
            D = a(D, !isNaN(l.css("z-index")) ? l.css("z-index") : D);
            if (l.css("position") == "fixed") {
                ag = "fixed"
            }
            l = l.parent(":not(body)")
        }
        D = X.zIndex || D;
        if (e.browser.msie) {
            az.attr("unselectable", "on")
        }
        e.imgAreaSelect.keyPress = e.browser.msie || e.browser.safari ? "keydown": "keypress";
        if (e.browser.opera) {
            V = f().css({
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: D + 2 || 2
            })
        }
        av.add(ab).css({
            visibility: "hidden",
            position: ag,
            overflow: "hidden",
            zIndex: D || "0"
        });
        av.css({
            zIndex: D + 2 || 2
        });
        ai.add(K).css({
            position: "absolute",
            fontSize: 0
        });
        s.complete || s.readyState == "complete" || !az.is("img") ? ax() : az.one("load", ax);
        if (e.browser.msie && e.browser.version >= 7) {
            s.src = s.src
        }
    };
    e.fn.imgAreaSelect = function(g) {
        g = g || {};
        this.each(function() {
            if (e(this).data("imgAreaSelect")) {
                if (g.remove) {
                    e(this).data("imgAreaSelect").remove();
                    e(this).removeData("imgAreaSelect")
                } else {
                    e(this).data("imgAreaSelect").setOptions(g)
                }
            } else {
                if (!g.remove) {
                    if (g.enable === undefined && g.disable === undefined) {
                        g.enable = true
                    }
                    e(this).data("imgAreaSelect", new e.imgAreaSelect(this, g))
                }
            }
        });
        if (g.instance) {
            return e(this).data("imgAreaSelect")
        }
        return this
    }
})(jQuery);
function FileProgress(c, a) {
    this.fileProgressID = c.id;
    this.opacity = 100;
    this.height = 0;
    this.fileProgressWrapper = document.getElementById(this.fileProgressID);
    if (!this.fileProgressWrapper) {
        this.fileProgressWrapper = document.createElement("div");
        this.fileProgressWrapper.className = "progressWrapper";
        this.fileProgressWrapper.id = this.fileProgressID;
        this.fileProgressElement = document.createElement("div");
        this.fileProgressElement.className = "progressContainer";
        var f = document.createElement("a");
        f.className = "progressCancel";
        f.href = "#";
        f.style.visibility = "hidden";
        f.appendChild(document.createTextNode(" "));
        var b = document.createElement("div");
        b.className = "progressName";
        b.appendChild(document.createTextNode(c.name));
        var e = document.createElement("div");
        e.className = "progressBarInProgress";
        var d = document.createElement("div");
        d.className = "progressBarStatus";
        d.innerHTML = "&nbsp;";
        this.fileProgressElement.appendChild(f);
        this.fileProgressElement.appendChild(b);
        this.fileProgressElement.appendChild(d);
        this.fileProgressElement.appendChild(e);
        this.fileProgressWrapper.appendChild(this.fileProgressElement);
        document.getElementById(a).appendChild(this.fileProgressWrapper)
    } else {
        this.fileProgressElement = this.fileProgressWrapper.firstChild;
        this.reset()
    }
    this.height = this.fileProgressWrapper.offsetHeight;
    this.setTimer(null)
}
FileProgress.prototype.setTimer = function(a) {
    this.fileProgressElement.FP_TIMER = a
};
FileProgress.prototype.getTimer = function(a) {
    return this.fileProgressElement.FP_TIMER || null
};
FileProgress.prototype.reset = function() {
    this.fileProgressElement.className = "progressContainer";
    this.fileProgressElement.childNodes[2].innerHTML = "&nbsp;";
    this.fileProgressElement.childNodes[2].className = "progressBarStatus";
    this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
    this.fileProgressElement.childNodes[3].style.width = "0%";
    this.appear()
};
FileProgress.prototype.setProgress = function(a) {
    this.fileProgressElement.className = "progressContainer green";
    this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
    this.fileProgressElement.childNodes[3].style.width = a + "%";
    this.appear()
};
FileProgress.prototype.setComplete = function() {
    this.fileProgressElement.className = "progressContainer blue";
    this.fileProgressElement.childNodes[3].className = "progressBarComplete";
    this.fileProgressElement.childNodes[3].style.width = "";
    var a = this;
    this.setTimer(setTimeout(function() {
        a.disappear()
    },
    10000))
};
FileProgress.prototype.setError = function() {
    this.fileProgressElement.className = "progressContainer red";
    this.fileProgressElement.childNodes[3].className = "progressBarError";
    this.fileProgressElement.childNodes[3].style.width = "";
    var a = this;
    this.setTimer(setTimeout(function() {
        a.disappear()
    },
    5000))
};
FileProgress.prototype.setCancelled = function() {
    this.fileProgressElement.className = "progressContainer";
    this.fileProgressElement.childNodes[3].className = "progressBarError";
    this.fileProgressElement.childNodes[3].style.width = "";
    var a = this;
    this.setTimer(setTimeout(function() {
        a.disappear()
    },
    2000))
};
FileProgress.prototype.setStatus = function(a) {
    this.fileProgressElement.childNodes[2].innerHTML = a
};
FileProgress.prototype.toggleCancel = function(b, c) {
    this.fileProgressElement.childNodes[0].style.visibility = b ? "visible": "hidden";
    if (c) {
        var a = this.fileProgressID;
        this.fileProgressElement.childNodes[0].onclick = function() {
            c.cancelUpload(a);
            return false
        }
    }
};
FileProgress.prototype.appear = function() {
    if (this.getTimer() !== null) {
        clearTimeout(this.getTimer());
        this.setTimer(null)
    }
    if (this.fileProgressWrapper.filters) {
        try {
            this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = 100
        } catch(a) {
            this.fileProgressWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)"
        }
    } else {
        this.fileProgressWrapper.style.opacity = 1
    }
    this.fileProgressWrapper.style.height = "";
    this.height = this.fileProgressWrapper.offsetHeight;
    this.opacity = 100;
    this.fileProgressWrapper.style.display = ""
};
FileProgress.prototype.disappear = function() {
    var f = 15;
    var c = 4;
    var b = 30;
    if (this.opacity > 0) {
        this.opacity -= f;
        if (this.opacity < 0) {
            this.opacity = 0
        }
        if (this.fileProgressWrapper.filters) {
            try {
                this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = this.opacity
            } catch(d) {
                this.fileProgressWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.opacity + ")"
            }
        } else {
            this.fileProgressWrapper.style.opacity = this.opacity / 100
        }
    }
    if (this.height > 0) {
        this.height -= c;
        if (this.height < 0) {
            this.height = 0
        }
        this.fileProgressWrapper.style.height = this.height + "px"
    }
    if (this.height > 0 || this.opacity > 0) {
        var a = this;
        this.setTimer(setTimeout(function() {
            a.disappear()
        },
        b))
    } else {
        this.fileProgressWrapper.style.display = "none";
        this.setTimer(null)
    }
};
function cancelQueue(a) {
    document.getElementById(a.customSettings.cancelButtonId).disabled = true;
    a.stopUpload();
    var b;
    do {
        b = a.getStats();
        a.cancelUpload()
    } while ( b . files_queued !== 0 )
}
function preLoad() {
    if (!this.support.loading) {
        alert("You need the Flash Player 9.028 or above to use SWFUpload.");
        return false
    }
}
function loadFailed() {
    alert("Something went wrong while loading SWFUpload. If this were a real application we'd clean up and then give you an alternative")
}
function fileDialogStart() {}
function mouseClick() {
    DialogLogin.execute(function() {
        upload2.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES)
    })
}
function fileQueued(c) {
    try {
        var a = new FileProgress(c, this.customSettings.progressTarget);
        a.setStatus("Pending...");
        a.toggleCancel(true, this)
    } catch(b) {
        this.debug(b)
    }
}
function fileQueueError(c, e, d) {
    try {
        if (e == SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT) {
            alert(c.name + "文件过大,最多不能超过5MB！");
            return
        }
        if (e == SWFUpload.QUEUE_ERROR.INVALID_FILETYPE) {
            alert("只能上传jpg,png,jpeg格式的文件");
            return
        }
        var a = new FileProgress(c, this.customSettings.progressTarget);
        a.setError();
        a.toggleCancel(false);
        switch (e) {
        case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
            a.setStatus("File is too big.");
            this.debug("Error Code: File too big, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
            a.setStatus("Cannot upload Zero Byte files.");
            this.debug("Error Code: Zero byte file, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
            a.setStatus("Invalid File Type.");
            this.debug("Error Code: Invalid File Type, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
            alert("You have selected too many files.  " + (d > 1 ? "You may only add " + d + " more files": "You cannot add any more files."));
            break;
        default:
            if (c !== null) {
                a.setStatus("Unhandled Error")
            }
            this.debug("Error Code: " + e + ", File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break
        }
    } catch(b) {
        this.debug(b)
    }
}
function fileDialogComplete(a, c) {
    try {
        if (this.getStats().files_queued > 0) {
            document.getElementById(this.customSettings.cancelButtonId).disabled = false
        }
        jQuery("#image_count_to_upload").text(this.getStats().files_queued + "张图片准备上传");
        jQuery(".image_preview").fadeIn();
        jQuery(".success_uploading").attr({
            disabled: false
        });
        this.startUpload()
    } catch(b) {
        this.debug(b)
    }
}
function uploadStart(c) {
    try {
        var a = new FileProgress(c, this.customSettings.progressTarget);
        a.setStatus("Uploading...");
        a.toggleCancel(true, this)
    } catch(b) {}
    return true
}
function uploadProgress(c, f, e) {
    try {
        var d = Math.ceil((f / e) * 100);
        var a = new FileProgress(c, this.customSettings.progressTarget);
        a.setProgress(d);
        a.setStatus("Uploading...")
    } catch(b) {
        this.debug(b)
    }
}
function uploadSuccess(d, b) {
    try {
        var a = new FileProgress(d, this.customSettings.progressTarget);
        a.setComplete();
        a.setStatus("Complete.");
        a.toggleCancel(false)
    } catch(c) {
        this.debug(c)
    }
}
function uploadComplete(b) {
    try {
        if (this.getStats().files_queued === 0) {
            document.getElementById(this.customSettings.cancelButtonId).disabled = true
        } else {
            this.startUpload()
        }
    } catch(a) {
        this.debug(a)
    }
}
function uploadError(c, e, d) {
    try {
        var a = new FileProgress(c, this.customSettings.progressTarget);
        a.setError();
        a.toggleCancel(false);
        switch (e) {
        case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
            a.setStatus("Upload Error: " + d);
            this.debug("Error Code: HTTP Error, File name: " + c.name + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
            a.setStatus("Configuration Error");
            this.debug("Error Code: No backend file, File name: " + c.name + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
            a.setStatus("Upload Failed.");
            this.debug("Error Code: Upload Failed, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.IO_ERROR:
            a.setStatus("Server (IO) Error");
            this.debug("Error Code: IO Error, File name: " + c.name + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
            a.setStatus("Security Error");
            this.debug("Error Code: Security Error, File name: " + c.name + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
            a.setStatus("Upload limit exceeded.");
            this.debug("Error Code: Upload Limit Exceeded, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
            a.setStatus("File not found.");
            this.debug("Error Code: The file was not found, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
            a.setStatus("Failed Validation.  Upload skipped.");
            this.debug("Error Code: File Validation Failed, File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break;
        case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
            if (this.getStats().files_queued === 0) {
                document.getElementById(this.customSettings.cancelButtonId).disabled = true
            }
            a.setStatus("Cancelled");
            a.setCancelled();
            break;
        case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
            a.setStatus("Stopped");
            break;
        default:
            a.setStatus("Unhandled Error: " + error_code);
            this.debug("Error Code: " + e + ", File name: " + c.name + ", File size: " + c.size + ", Message: " + d);
            break
        }
    } catch(b) {
        this.debug(b)
    }
};
var SWFUpload;
if (typeof(SWFUpload) === "function") {
    SWFUpload.queue = {};
    SWFUpload.prototype.initSettings = (function(a) {
        return function(b) {
            if (typeof(a) === "function") {
                a.call(this, b)
            }
            this.queueSettings = {};
            this.queueSettings.queue_cancelled_flag = false;
            this.queueSettings.queue_upload_count = 0;
            this.queueSettings.user_upload_complete_handler = this.settings.upload_complete_handler;
            this.queueSettings.user_upload_start_handler = this.settings.upload_start_handler;
            this.settings.upload_complete_handler = SWFUpload.queue.uploadCompleteHandler;
            this.settings.upload_start_handler = SWFUpload.queue.uploadStartHandler;
            this.settings.queue_complete_handler = b.queue_complete_handler || null
        }
    })(SWFUpload.prototype.initSettings);
    SWFUpload.prototype.startUpload = function(a) {
        this.queueSettings.queue_cancelled_flag = false;
        this.callFlash("StartUpload", [a])
    };
    SWFUpload.prototype.cancelQueue = function() {
        this.queueSettings.queue_cancelled_flag = true;
        this.stopUpload();
        var a = this.getStats();
        while (a.files_queued > 0) {
            this.cancelUpload();
            a = this.getStats()
        }
    };
    SWFUpload.queue.uploadStartHandler = function(a) {
        var b;
        if (typeof(this.queueSettings.user_upload_start_handler) === "function") {
            b = this.queueSettings.user_upload_start_handler.call(this, a)
        }
        b = (b === false) ? false: true;
        this.queueSettings.queue_cancelled_flag = !b;
        return b
    };
    SWFUpload.queue.uploadCompleteHandler = function(b) {
        var c = this.queueSettings.user_upload_complete_handler;
        var d;
        if (b.filestatus === SWFUpload.FILE_STATUS.COMPLETE) {
            this.queueSettings.queue_upload_count++
        }
        if (typeof(c) === "function") {
            d = (c.call(this, b) === false) ? false: true
        } else {
            if (b.filestatus === SWFUpload.FILE_STATUS.QUEUED) {
                d = false
            } else {
                d = true
            }
        }
        if (d) {
            var a = this.getStats();
            if (a.files_queued > 0 && this.queueSettings.queue_cancelled_flag === false) {
                this.startUpload()
            } else {
                if (this.queueSettings.queue_cancelled_flag === false) {
                    this.queueEvent("queue_complete_handler", [this.queueSettings.queue_upload_count]);
                    this.queueSettings.queue_upload_count = 0
                } else {
                    this.queueSettings.queue_cancelled_flag = false;
                    this.queueSettings.queue_upload_count = 0
                }
            }
        }
    }
};
var SWFUpload;
if (SWFUpload == undefined) {
    SWFUpload = function(a) {
        this.initSWFUpload(a)
    }
}
SWFUpload.prototype.initSWFUpload = function(b) {
    try {
        this.customSettings = {};
        this.settings = b;
        this.eventQueue = [];
        this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
        this.movieElement = null;
        SWFUpload.instances[this.movieName] = this;
        this.initSettings();
        this.loadFlash();
        this.displayDebugInfo()
    } catch(a) {
        delete SWFUpload.instances[this.movieName];
        throw a
    }
};
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {
    QUEUE_LIMIT_EXCEEDED: -100,
    FILE_EXCEEDS_SIZE_LIMIT: -110,
    ZERO_BYTE_FILE: -120,
    INVALID_FILETYPE: -130
};
SWFUpload.UPLOAD_ERROR = {
    HTTP_ERROR: -200,
    MISSING_UPLOAD_URL: -210,
    IO_ERROR: -220,
    SECURITY_ERROR: -230,
    UPLOAD_LIMIT_EXCEEDED: -240,
    UPLOAD_FAILED: -250,
    SPECIFIED_FILE_ID_NOT_FOUND: -260,
    FILE_VALIDATION_FAILED: -270,
    FILE_CANCELLED: -280,
    UPLOAD_STOPPED: -290
};
SWFUpload.FILE_STATUS = {
    QUEUED: -1,
    IN_PROGRESS: -2,
    ERROR: -3,
    COMPLETE: -4,
    CANCELLED: -5
};
SWFUpload.BUTTON_ACTION = {
    SELECT_FILE: -100,
    SELECT_FILES: -110,
    START_UPLOAD: -120
};
SWFUpload.CURSOR = {
    ARROW: -1,
    HAND: -2
};
SWFUpload.WINDOW_MODE = {
    WINDOW: "window",
    TRANSPARENT: "transparent",
    OPAQUE: "opaque"
};
SWFUpload.completeURL = function(a) {
    return a
};
SWFUpload.prototype.initSettings = function() {
    this.ensureDefault = function(b, a) {
        this.settings[b] = (this.settings[b] == undefined) ? a: this.settings[b]
    };
    this.ensureDefault("upload_url", "");
    this.ensureDefault("preserve_relative_urls", false);
    this.ensureDefault("file_post_name", "Filedata");
    this.ensureDefault("post_params", {});
    this.ensureDefault("use_query_string", false);
    this.ensureDefault("requeue_on_error", false);
    this.ensureDefault("http_success", []);
    this.ensureDefault("assume_success_timeout", 0);
    this.ensureDefault("file_types", "*.*");
    this.ensureDefault("file_types_description", "All Files");
    this.ensureDefault("file_size_limit", 0);
    this.ensureDefault("file_upload_limit", 0);
    this.ensureDefault("file_queue_limit", 0);
    this.ensureDefault("flash_url", "swfupload.swf");
    this.ensureDefault("prevent_swf_caching", true);
    this.ensureDefault("button_image_url", "");
    this.ensureDefault("button_width", 1);
    this.ensureDefault("button_height", 1);
    this.ensureDefault("button_text", "");
    this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
    this.ensureDefault("button_text_top_padding", 0);
    this.ensureDefault("button_text_left_padding", 0);
    this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
    this.ensureDefault("button_disabled", false);
    this.ensureDefault("button_placeholder_id", "");
    this.ensureDefault("button_placeholder", null);
    this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
    this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
    this.ensureDefault("debug", false);
    this.settings.debug_enabled = this.settings.debug;
    this.settings.return_upload_start_handler = this.returnUploadStart;
    this.ensureDefault("swfupload_loaded_handler", null);
    this.ensureDefault("file_dialog_start_handler", null);
    this.ensureDefault("file_queued_handler", null);
    this.ensureDefault("file_queue_error_handler", null);
    this.ensureDefault("file_dialog_complete_handler", null);
    this.ensureDefault("upload_start_handler", null);
    this.ensureDefault("upload_progress_handler", null);
    this.ensureDefault("upload_error_handler", null);
    this.ensureDefault("upload_success_handler", null);
    this.ensureDefault("upload_complete_handler", null);
    this.ensureDefault("debug_handler", this.debugMessage);
    this.ensureDefault("custom_settings", {});
    this.customSettings = this.settings.custom_settings;
    if ( !! this.settings.prevent_swf_caching) {
        this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?": "&") + "preventswfcaching=" + new Date().getTime()
    }
    if (!this.settings.preserve_relative_urls) {
        this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
        this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)
    }
    delete this.ensureDefault
};
SWFUpload.prototype.loadFlash = function() {
    var a, b;
    if (document.getElementById(this.movieName) !== null) {
        throw "ID " + this.movieName + " is already in use. The Flash Object could not be added"
    }
    a = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
    if (a == undefined) {
        throw "Could not find the placeholder element: " + this.settings.button_placeholder_id
    }
    b = document.createElement("div");
    b.innerHTML = this.getFlashHTML();
    a.parentNode.replaceChild(b.firstChild, a);
    if (window[this.movieName] == undefined) {
        window[this.movieName] = this.getMovieElement()
    }
};
SWFUpload.prototype.getFlashHTML = function() {
    return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
};
SWFUpload.prototype.getFlashVars = function() {
    var b = this.buildParamString();
    var a = this.settings.http_success.join(",");
    return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(a), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(b), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
};
SWFUpload.prototype.getMovieElement = function() {
    if (this.movieElement == undefined) {
        this.movieElement = document.getElementById(this.movieName)
    }
    if (this.movieElement === null) {
        throw "Could not find Flash element"
    }
    return this.movieElement
};
SWFUpload.prototype.buildParamString = function() {
    var a = this.settings.post_params;
    var c = [];
    if (typeof(a) === "object") {
        for (var b in a) {
            if (a.hasOwnProperty(b)) {
                c.push(encodeURIComponent(b.toString()) + "=" + encodeURIComponent(a[b].toString()))
            }
        }
    }
    return c.join("&amp;")
};
SWFUpload.prototype.destroy = function() {
    try {
        this.cancelUpload(null, false);
        var d = null;
        d = this.getMovieElement();
        if (d && typeof(d.CallFunction) === "unknown") {
            for (var a in d) {
                try {
                    if (typeof(d[a]) === "function") {
                        d[a] = null
                    }
                } catch(c) {}
            }
            try {
                d.parentNode.removeChild(d)
            } catch(e) {}
        }
        window[this.movieName] = null;
        SWFUpload.instances[this.movieName] = null;
        delete SWFUpload.instances[this.movieName];
        this.movieElement = null;
        this.settings = null;
        this.customSettings = null;
        this.eventQueue = null;
        this.movieName = null;
        return true
    } catch(b) {
        return false
    }
};
SWFUpload.prototype.displayDebugInfo = function() {
    this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "\t", "upload_url:               ", this.settings.upload_url, "\n", "\t", "flash_url:                ", this.settings.flash_url, "\n", "\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "\t", "http_success:             ", this.settings.http_success.join(", "), "\n", "\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "\t", "file_post_name:           ", this.settings.file_post_name, "\n", "\t", "post_params:              ", this.settings.post_params.toString(), "\n", "\t", "file_types:               ", this.settings.file_types, "\n", "\t", "file_types_description:   ", this.settings.file_types_description, "\n", "\t", "file_size_limit:          ", this.settings.file_size_limit, "\n", "\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "\t", "debug:                    ", this.settings.debug.toString(), "\n", "\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set": "Not Set"), "\n", "\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "\t", "button_width:             ", this.settings.button_width.toString(), "\n", "\t", "button_height:            ", this.settings.button_height.toString(), "\n", "\t", "button_text:              ", this.settings.button_text.toString(), "\n", "\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "\t", "button_action:            ", this.settings.button_action.toString(), "\n", "\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n", "\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n", "\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n", "\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n", "\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n", "\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n", "\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n", "\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n", "\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n", "\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"].join(""))
};
SWFUpload.prototype.addSetting = function(c, a, b) {
    if (a == undefined) {
        return (this.settings[c] = b)
    } else {
        return (this.settings[c] = a)
    }
};
SWFUpload.prototype.getSetting = function(a) {
    if (this.settings[a] != undefined) {
        return this.settings[a]
    }
    return ""
};
SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
    argumentArray = argumentArray || [];
    var movieElement = this.getMovieElement();
    var returnValue, returnString;
    try {
        returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>");
        returnValue = eval(returnString)
    } catch(ex) {
        throw "Call to " + functionName + " failed"
    }
    if (returnValue != undefined && typeof returnValue.post === "object") {
        returnValue = this.unescapeFilePostParams(returnValue)
    }
    return returnValue
};
SWFUpload.prototype.selectFile = function() {
    this.callFlash("SelectFile")
};
SWFUpload.prototype.selectFiles = function() {
    this.callFlash("SelectFiles")
};
SWFUpload.prototype.startUpload = function(a) {
    this.callFlash("StartUpload", [a])
};
SWFUpload.prototype.cancelUpload = function(a, b) {
    if (b !== false) {
        b = true
    }
    this.callFlash("CancelUpload", [a, b])
};
SWFUpload.prototype.stopUpload = function() {
    this.callFlash("StopUpload")
};
SWFUpload.prototype.getStats = function() {
    return this.callFlash("GetStats")
};
SWFUpload.prototype.setStats = function(a) {
    this.callFlash("SetStats", [a])
};
SWFUpload.prototype.getFile = function(a) {
    if (typeof(a) === "number") {
        return this.callFlash("GetFileByIndex", [a])
    } else {
        return this.callFlash("GetFile", [a])
    }
};
SWFUpload.prototype.addFileParam = function(b, c, a) {
    return this.callFlash("AddFileParam", [b, c, a])
};
SWFUpload.prototype.removeFileParam = function(a, b) {
    this.callFlash("RemoveFileParam", [a, b])
};
SWFUpload.prototype.setUploadURL = function(a) {
    this.settings.upload_url = a.toString();
    this.callFlash("SetUploadURL", [a])
};
SWFUpload.prototype.setPostParams = function(a) {
    this.settings.post_params = a;
    this.callFlash("SetPostParams", [a])
};
SWFUpload.prototype.addPostParam = function(a, b) {
    this.settings.post_params[a] = b;
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.removePostParam = function(a) {
    delete this.settings.post_params[a];
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.setFileTypes = function(a, b) {
    this.settings.file_types = a;
    this.settings.file_types_description = b;
    this.callFlash("SetFileTypes", [a, b])
};
SWFUpload.prototype.setFileSizeLimit = function(a) {
    this.settings.file_size_limit = a;
    this.callFlash("SetFileSizeLimit", [a])
};
SWFUpload.prototype.setFileUploadLimit = function(a) {
    this.settings.file_upload_limit = a;
    this.callFlash("SetFileUploadLimit", [a])
};
SWFUpload.prototype.setFileQueueLimit = function(a) {
    this.settings.file_queue_limit = a;
    this.callFlash("SetFileQueueLimit", [a])
};
SWFUpload.prototype.setFilePostName = function(a) {
    this.settings.file_post_name = a;
    this.callFlash("SetFilePostName", [a])
};
SWFUpload.prototype.setUseQueryString = function(a) {
    this.settings.use_query_string = a;
    this.callFlash("SetUseQueryString", [a])
};
SWFUpload.prototype.setRequeueOnError = function(a) {
    this.settings.requeue_on_error = a;
    this.callFlash("SetRequeueOnError", [a])
};
SWFUpload.prototype.setHTTPSuccess = function(a) {
    if (typeof a === "string") {
        a = a.replace(" ", "").split(",")
    }
    this.settings.http_success = a;
    this.callFlash("SetHTTPSuccess", [a])
};
SWFUpload.prototype.setAssumeSuccessTimeout = function(a) {
    this.settings.assume_success_timeout = a;
    this.callFlash("SetAssumeSuccessTimeout", [a])
};
SWFUpload.prototype.setDebugEnabled = function(a) {
    this.settings.debug_enabled = a;
    this.callFlash("SetDebugEnabled", [a])
};
SWFUpload.prototype.setButtonImageURL = function(a) {
    if (a == undefined) {
        a = ""
    }
    this.settings.button_image_url = a;
    this.callFlash("SetButtonImageURL", [a])
};
SWFUpload.prototype.setButtonDimensions = function(a, b) {
    this.settings.button_width = a;
    this.settings.button_height = b;
    var c = this.getMovieElement();
    if (c != undefined) {
        c.style.width = a + "px";
        c.style.height = b + "px"
    }
    this.callFlash("SetButtonDimensions", [a, b])
};
SWFUpload.prototype.setButtonText = function(a) {
    this.settings.button_text = a;
    this.callFlash("SetButtonText", [a])
};
SWFUpload.prototype.setButtonTextPadding = function(b, a) {
    this.settings.button_text_top_padding = a;
    this.settings.button_text_left_padding = b;
    this.callFlash("SetButtonTextPadding", [b, a])
};
SWFUpload.prototype.setButtonTextStyle = function(a) {
    this.settings.button_text_style = a;
    this.callFlash("SetButtonTextStyle", [a])
};
SWFUpload.prototype.setButtonDisabled = function(a) {
    this.settings.button_disabled = a;
    this.callFlash("SetButtonDisabled", [a])
};
SWFUpload.prototype.setButtonAction = function(a) {
    this.settings.button_action = a;
    this.callFlash("SetButtonAction", [a])
};
SWFUpload.prototype.setButtonCursor = function(a) {
    this.settings.button_cursor = a;
    this.callFlash("SetButtonCursor", [a])
};
SWFUpload.prototype.queueEvent = function(c, a) {
    if (a == undefined) {
        a = []
    } else {
        if (! (a instanceof Array)) {
            a = [a]
        }
    }
    var b = this;
    if (typeof this.settings[c] === "function") {
        this.eventQueue.push(function() {
            this.settings[c].apply(this, a)
        });
        setTimeout(function() {
            b.executeNextEvent()
        },
        0)
    } else {
        if (this.settings[c] !== null) {
            throw "Event handler " + c + " is unknown or is not a function"
        }
    }
};
SWFUpload.prototype.executeNextEvent = function() {
    var a = this.eventQueue ? this.eventQueue.shift() : null;
    if (typeof(a) === "function") {
        a.apply(this)
    }
};
SWFUpload.prototype.unescapeFilePostParams = function(a) {
    var c = /[$]([0-9a-f]{4})/i;
    var d = {};
    var b;
    if (a != undefined) {
        for (var e in a.post) {
            if (a.post.hasOwnProperty(e)) {
                b = e;
                var f;
                while ((f = c.exec(b)) !== null) {
                    b = b.replace(f[0], String.fromCharCode(parseInt("0x" + f[1], 16)))
                }
                d[b] = a.post[e]
            }
        }
        a.post = d
    }
    return a
};
SWFUpload.prototype.testExternalInterface = function() {
    try {
        return this.callFlash("TestExternalInterface")
    } catch(a) {
        return false
    }
};
SWFUpload.prototype.flashReady = function() {
    var a = this.getMovieElement();
    if (!a) {
        this.debug("Flash called back ready but the flash movie can't be found.");
        return
    }
    this.cleanUp(a);
    this.queueEvent("swfupload_loaded_handler")
};
SWFUpload.prototype.cleanUp = function(c) {
    try {
        if (this.movieElement && typeof(c.CallFunction) === "unknown") {
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for (var a in c) {
                try {
                    if (typeof(c[a]) === "function") {
                        c[a] = null
                    }
                } catch(d) {}
            }
        }
    } catch(b) {}
    window.__flash__removeCallback = function(g, e) {
        try {
            if (g) {
                g[e] = null
            }
        } catch(f) {}
    }
};
SWFUpload.prototype.fileDialogStart = function() {
    this.queueEvent("file_dialog_start_handler")
};
SWFUpload.prototype.fileQueued = function(a) {
    a = this.unescapeFilePostParams(a);
    this.queueEvent("file_queued_handler", a)
};
SWFUpload.prototype.fileQueueError = function(b, a, c) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("file_queue_error_handler", [b, a, c])
};
SWFUpload.prototype.fileDialogComplete = function(c, a, b) {
    this.queueEvent("file_dialog_complete_handler", [c, a, b])
};
SWFUpload.prototype.uploadStart = function(a) {
    a = this.unescapeFilePostParams(a);
    this.queueEvent("return_upload_start_handler", a)
};
SWFUpload.prototype.returnUploadStart = function(a) {
    var b;
    if (typeof this.settings.upload_start_handler === "function") {
        a = this.unescapeFilePostParams(a);
        b = this.settings.upload_start_handler.call(this, a)
    } else {
        if (this.settings.upload_start_handler != undefined) {
            throw "upload_start_handler must be a function"
        }
    }
    if (b === undefined) {
        b = true
    }
    b = !!b;
    this.callFlash("ReturnUploadStart", [b])
};
SWFUpload.prototype.uploadProgress = function(b, a, c) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("upload_progress_handler", [b, a, c])
};
SWFUpload.prototype.uploadError = function(b, a, c) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("upload_error_handler", [b, a, c])
};
SWFUpload.prototype.uploadSuccess = function(c, b, a) {
    c = this.unescapeFilePostParams(c);
    this.queueEvent("upload_success_handler", [c, b, a])
};
SWFUpload.prototype.uploadComplete = function(a) {
    a = this.unescapeFilePostParams(a);
    this.queueEvent("upload_complete_handler", a)
};
SWFUpload.prototype.debug = function(a) {
    this.queueEvent("debug_handler", a)
};
SWFUpload.prototype.debugMessage = function(a) {
    if (this.settings.debug) {
        var c, b = [];
        if (typeof a === "object" && typeof a.name === "string" && typeof a.message === "string") {
            for (var d in a) {
                if (a.hasOwnProperty(d)) {
                    b.push(d + ": " + a[d])
                }
            }
            c = b.join("\n") || "";
            b = c.split("\n");
            c = "EXCEPTION: " + b.join("\nEXCEPTION: ");
            SWFUpload.Console.writeLine(c)
        } else {
            SWFUpload.Console.writeLine(a)
        }
    }
};
SWFUpload.Console = {};
SWFUpload.Console.writeLine = function(b) {
    var d, c;
    try {
        d = document.getElementById("SWFUpload_Console");
        if (!d) {
            c = document.createElement("form");
            document.getElementsByTagName("body")[0].appendChild(c);
            d = document.createElement("textarea");
            d.id = "SWFUpload_Console";
            d.style.fontFamily = "monospace";
            d.setAttribute("wrap", "off");
            d.wrap = "off";
            d.style.overflow = "auto";
            d.style.width = "700px";
            d.style.height = "350px";
            d.style.margin = "5px";
            c.appendChild(d)
        }
        d.value += b + "\n";
        d.scrollTop = d.scrollHeight - d.clientHeight
    } catch(a) {
        alert("Exception: " + a.name + " Message: " + a.message)
    }
};
function flashChecker() {
    var f = 0;
    var g = 0;
    var b = !-[1, ];
    if (b) {
        try {
            var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (a) {
                f = 1;
                VSwf = a.GetVariable("$version");
                g = parseInt(VSwf.split(" ")[1].split(",")[0])
            }
        } catch(c) {}
    } else {
        if (navigator.plugins && navigator.plugins.length > 0) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a) {
                f = 1;
                var d = a.description.split(" ");
                for (var h = 0; h < d.length; ++h) {
                    if (isNaN(parseInt(d[h]))) {
                        continue
                    }
                    g = parseInt(d[h])
                }
            }
        }
    }
    return {
        f: f,
        v: g
    }
};
var fls = flashChecker();
var s = "";
if (fls.f) {
    if (fls.v < 9) {
        var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>更新</a>";
        jQuery("#flashPlayInstallEditinfoCheck").html(msg)
    }
} else {
    var msg = "<span style='color:red;'>&nbsp;&nbsp;您需要安装并启用最新的Adobe flash，才可以上传图片</span>  <a style='color:blue;' target='_blank' href='http://www.adobe.com/go/getflashplayer'>下载</a>";
    jQuery("#flashPlayInstallEditinfoCheck").html(msg)
}
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var isUpload = false;
var picType = "1";
var urlPrefixEditUserInfo = currSiteType == 1 ? URLPrefix.my: URLPrefix.mymall;
jQuery(document).ready(function() {
    var e = jQuery.cookie("ut");
    var d = jQuery("#upload_pic img").attr("width");
    var a = jQuery("#upload_pic img").attr("height");
    if (d == 0) {
        d = 238
    }
    if (a == 0) {
        a = 238
    }
    var c = jQuery("input[name='userId']").val();
    var b = new SWFUpload({
        upload_url: urlPrefixEditUserInfo + "/member/userinfo/uploadPic.do",
        flash_url: URLPrefix.statics + "/member/swf/swfupload.swf",
        post_params: {
            ut: e,
            endUserId: c,
            width: d,
            height: a
        },
        file_size_limit: "5120",
        file_upload_limit: "0",
        file_queue_limit: "0",
        file_types: "*.jpg;*.png;*.jpeg",
        file_types_description: "Image Files",
        file_queue_error_handler: function(g, i, h) {
            try {
                if (i == SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT) {
                    YHD.alert("图片大小不能超过5MB，请重新上传");
                    return
                }
                if (i == SWFUpload.QUEUE_ERROR.INVALID_FILETYPE) {
                    YHD.alert("图片仅支持JPG、JPEG、PNG格式，请重新上传");
                    return
                }
            } catch(f) {
                this.debug(f)
            }
        },
        file_dialog_complete_handler: function(f, h) {
            try {
                b.startUpload()
            } catch(g) {
                this.debug(g)
            }
        },
        upload_progress_handler: function(f, h, g) {
            jQuery("#fsUploadProgress").show()
        },
        upload_error_handler: uploadError,
        upload_success_handler: function(h, f) {
            var j = new Function("return" + f)();
            if (j.needLogin) {
                cancelUpload();
                var k = jQuery("#editinfo").val();
                if (k == 1) {
                    yhdPublicLogin.showLoginDiv("/member/userinfo/editinfo.do", false)
                } else {
                    yhdPublicLogin.showLoginDiv("/member/my.do", false)
                }
            } else {
                if (j.outnumber) {
                    YHD.alert("超过每天最大上传次数10次");
                    return
                } else {
                    if (j.fail == 1) {
                        YHD.alert("头像上传失败，请检查网络或稍后再试!");
                        return
                    } else {
                        isUpload = true;
                        var i = j.newWidth;
                        var g = j.newHeight;
                        jQuery("#upload_pic").css({
                            width: i + "px",
                            height: g + "px"
                        });
                        jQuery("#upload_pic img").attr("width", i);
                        jQuery("#upload_pic img").attr("height", g);
                        jQuery("#upload_pic img").attr("src", j.picUrl);
                        jQuery("#size1 img").attr("src", j.picUrl);
                        jQuery("#size2 img").attr("src", j.picUrl);
                        jQuery("#size3 img").attr("src", j.picUrl);
                        jQuery("#size4 img").attr("src", j.picUrl);
                        selectImg(i, g);
                        previewImg
                    }
                }
            }
        },
        upload_complete_handler: function(f) {
            jQuery("#fsUploadProgress").hide()
        },
        button_image_url: URLPrefix.statics + "/member/images/swf.jpg",
        button_placeholder_id: "userPicUpload",
        button_width: 60,
        button_height: 24,
        button_text: "<span class='btn-txt'>选择图片</span>",
        button_text_style: ".btn-txt{color:#ffffff;margin-right: 10px;vertical-align: middle;font-weight:bold}",
        button_text_top_padding: 3,
        button_text_left_padding: 3,
        button_cursor: SWFUpload.CURSOR.HAND,
        button_action: SWFUpload.BUTTON_ACTION.SELECT_FILE,
        flash_color: "#FFffff",
        custom_settings: {
            progressTarget: "fsUploadProgress"
        },
        debug: false
    })
});
function showUploadPopbox() {
    var b = document.body.clientWidth;
    var d = document.body.clientHeight;
    jQuery("<div id='maskDivDeatil'/>").width(b).height(d + document.body.scrollHeight / 8).css("background", "#000").css("position", "absolute").css("top", "0px").css("left", "0px").css("opacity", "0.1").css("filter", "Alpha(Opacity=10)").css("z-index", 8000).appendTo("body").fadeIn(200);
    jQuery("<iframe id='maskIframe'/>").width(b).height(d + document.body.scrollHeight / 8).css("background", "#000").css("position", "absolute").css("top", "0px").css("left", "0px").css("opacity", "0.1").css("filter", "Alpha(Opacity=10)").css("z-index", 7800).appendTo("body").fadeIn(200);
    YHD.popwinId("popbox_editpic");
    jQuery("#popbox_editpic").css("z-index", 9000).css("top", 150).css("left", 650).css("width", 580).css("height", 480);
    var a = jQuery(".user_pic img").attr("src").toString();
    var c = new Array(6);
    c[0] = URLPrefix.statics + "/member/images/peopleicon_01.gif";
    c[1] = URLPrefix.statics + "/member/images/peopleicon_02.gif";
    c[2] = URLPrefix.statics + "/member/images/peopleicon_03.gif";
    c[3] = URLPrefix.statics + "/member/images/peopleicon_04.gif";
    c[4] = URLPrefix.statics + "/member/images/peopleicon_05.gif";
    c[5] = URLPrefix.statics + "/member/images/peopleicon_06.gif";
    jQuery("#sys_pic_box .select_pic img").each(function(f) {
        jQuery(this).attr("src", c[f]);
        if (c[f] === a) {
            jQuery(this).click();
            jQuery("#sys_pic_box .preview").find("img").attr("src", c[f])
        }
    });
    jQuery("#upload_pic img").attr("width", 238);
    jQuery("#upload_pic img").attr("height", 238);
    jQuery("#upload_pic img").attr("src", a);
    jQuery("#size1 img").attr("src", a);
    jQuery("#size2 img").attr("src", a);
    jQuery("#size3 img").attr("src", a);
    jQuery("#size4 img").attr("src", a);
    jQuery("#user_pic_box").show();
    jQuery("#sys_pic_box").hide();
    jQuery(".select_way").find("a").removeClass("cur_edit");
    jQuery("#user_pic_sel").addClass("cur_edit");
    jQuery("#upload_pic").css({
        width: 238 + "px",
        height: 238 + "px"
    });
    selectImg(238, 238);
    return false
}
function cancelUpload() {
    jQuery("#maskDivDeatil").remove();
    jQuery("#maskIframe").remove();
    jQuery("#popbox_editpic").hide();
    jQuery(".imgareaselect-imgdiv").hide();
    jQuery(".imgareaselect-outer").hide();
    if ($.browser.msie && $.browser.version <= 6) {
        jQuery(".ifm").hide()
    }
    if (isUpload) {
        var b = "picUrl=" + jQuery("#upload_pic img").attr("src").toString();
        var a = urlPrefixEditUserInfo + "/member/userinfo/cancelUpload.do";
        jQuery.ajax({
            type: "post",
            url: a,
            data: b,
            success: function(c) {}
        })
    }
    return false
}
function closePromptPopbox() {
    jQuery(".popGeneral").remove();
    jQuery(".mask_tcdiv").remove();
    return false
}
function saveUpload() {
    var h = jQuery(".select_way .cur_edit").attr("id");
    if (h == "user_pic_sel") {
        picType = "1"
    } else {
        picType = "2"
    }
    var g = "";
    var d = jQuery("input[name='userId']").val();
    if (picType === "1") {
        g = jQuery("#upload_pic img").attr("src").toString()
    } else {
        if (picType === "2") {
            g = jQuery("#sys_pic_box").find(".size1").attr("src").toString()
        }
    }
    var c = "";
    var f = jQuery.cookie("ut");
    if (picType === "1") {
        var e = jQuery("#upload_pic img").attr("width");
        var a = jQuery("#upload_pic img").attr("height");
        c = "picUrl=" + g + "&picType=" + picType + "&ut=" + f + "&endUserId=" + d + "&x1=" + x1 + "&y1=" + y1 + "&x2=" + x2 + "&y2=" + y2 + "&width=" + e + "&height=" + a
    } else {
        if (picType === "2") {
            c = "picUrl=" + g + "&picType=" + picType + "&ut=" + f + "&endUserId=" + d
        }
    }
    var b = urlPrefixEditUserInfo + "/member/userinfo/saveUpload.do";
    jQuery.ajax({
        type: "post",
        url: b,
        data: c,
        success: function(i) {
            if (i.needLogin) {
                cancelUpload();
                yhdPublicLogin.showLoginDiv("/member/my.do", false)
            } else {
                if (i.badUrl) {
                    YHD.alert("请选择正确的头像图片！")
                } else {
                    jQuery(".user_pic img").attr("src", i.picUrl);
                    jQuery("#maskDivDeatil").remove();
                    jQuery("#maskIframe").remove();
                    jQuery("#popbox_editpic").hide();
                    jQuery(".imgareaselect-imgdiv").hide();
                    jQuery(".imgareaselect-outer").hide();
                    if ($.browser.msie && $.browser.version <= 6) {
                        jQuery(".ifm").hide()
                    }
                    if (picType === "1") {
                        yhdLib.popwin({
                            popcontent: ".prompt",
                            mask: 1
                        })
                    }
                }
            }
        }
    })
}
function changePicType(b) {
    jQuery(".pic_editbox").hide();
    jQuery(".select_way").find("a").removeClass("cur_edit");
    jQuery(b).addClass("cur_edit");
    var a = jQuery(".select_way").find("a").index(b);
    jQuery(".pic_editbox").eq(a).show();
    if (a === 1) {
        picType = "2";
        jQuery(".imgareaselect-imgdiv").css("display", "none");
        jQuery(".imgareaselect-outer").css("display", "none")
    } else {
        if (a === 0) {
            picType = "1";
            jQuery(".imgareaselect-imgdiv").css("display", "block");
            jQuery(".imgareaselect-outer").css("display", "block")
        }
    }
    return false
}
function selectSysPic(b) {
    jQuery("#sys_pic_box .select_pic").find("dd").removeClass("cur");
    jQuery(b).parent("dd").addClass("cur");
    var a = jQuery(b).attr("src");
    jQuery("#sys_pic_box .preview ").find("img").attr("src", a);
    return false
}
var tempWidth;
var tempHeight;
function selectImg(c, a) {
    tempWidth = c;
    tempHeight = a;
    var b = c / 2 < a / 2 ? c / 2 : a / 2;
    jQuery("#upload_pic").imgAreaSelect({
        x1: 0,
        x2: b,
        y1: 0,
        y2: b,
        aspectRatio: "1:1",
        handles: true,
        minHeight: 30,
        minWidth: 30,
        onSelectChange: previewImg
    })
}
function previewImg(d, g) {
    var j = 150 / (g.width || 1);
    var h = 150 / (g.height || 1);
    jQuery("#size1 img").css({
        width: Math.round(j * tempWidth) + "px",
        height: Math.round(h * tempHeight) + "px",
        marginLeft: "-" + Math.round(j * g.x1) + "px",
        marginTop: "-" + Math.round(h * g.y1) + "px"
    });
    var c = 50 / (g.width || 1);
    var i = 50 / (g.height || 1);
    jQuery("#size2 img").css({
        width: Math.round(c * tempWidth) + "px",
        height: Math.round(i * tempHeight) + "px",
        marginLeft: "-" + Math.round(c * g.x1) + "px",
        marginTop: "-" + Math.round(i * g.y1) + "px"
    });
    var b = 80 / (g.width || 1);
    var f = 80 / (g.height || 1);
    jQuery("#size3 img").css({
        width: Math.round(b * tempWidth) + "px",
        height: Math.round(f * tempHeight) + "px",
        marginLeft: "-" + Math.round(b * g.x1) + "px",
        marginTop: "-" + Math.round(f * g.y1) + "px"
    });
    var a = 30 / (g.width || 1);
    var e = 30 / (g.height || 1);
    jQuery("#size4 img").css({
        width: Math.round(a * tempWidth) + "px",
        height: Math.round(e * tempHeight) + "px",
        marginLeft: "-" + Math.round(a * g.x1) + "px",
        marginTop: "-" + Math.round(e * g.y1) + "px"
    });
    x1 = g.x1;
    x2 = g.x2;
    y1 = g.y1;
    y2 = g.y2
};
var swfobject = function() {
    var l = "undefined",
    T = "object",
    A = "Shockwave Flash",
    e = "ShockwaveFlash.ShockwaveFlash",
    S = "application/x-shockwave-flash",
    z = "SWFObjectExprInst",
    f = "onreadystatechange",
    w = window,
    L = document,
    V = navigator,
    B = false,
    a = [J],
    Q = [],
    v = [],
    q = [],
    N,
    y,
    m,
    j,
    r = false,
    C = false,
    P,
    o,
    O = true,
    u = function() {
        var ah = typeof L.getElementById != l && typeof L.getElementsByTagName != l && typeof L.createElement != l,
        ad = V.userAgent.toLowerCase(),
        af = V.platform.toLowerCase(),
        aa = af ? /win/.test(af) : /win/.test(ad),
        Y = af ? /mac/.test(af) : /mac/.test(ad),
        ab = /webkit/.test(ad) ? parseFloat(ad.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
        ae = !+"\v1",
        ac = [0, 0, 0],
        X = null;
        if (typeof V.plugins != l && typeof V.plugins[A] == T) {
            X = V.plugins[A].description;
            if (X && !(typeof V.mimeTypes != l && V.mimeTypes[S] && !V.mimeTypes[S].enabledPlugin)) {
                B = true;
                ae = false;
                X = X.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                ac[0] = parseInt(X.replace(/^(.*)\..*$/, "$1"), 10);
                ac[1] = parseInt(X.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                ac[2] = /[a-zA-Z]/.test(X) ? parseInt(X.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof w.ActiveXObject != l) {
                try {
                    var Z = new ActiveXObject(e);
                    if (Z) {
                        X = Z.GetVariable("$version");
                        if (X) {
                            ae = true;
                            X = X.split(" ")[1].split(",");
                            ac = [parseInt(X[0], 10), parseInt(X[1], 10), parseInt(X[2], 10)]
                        }
                    }
                } catch(ag) {}
            }
        }
        return {
            w3: ah,
            pv: ac,
            wk: ab,
            ie: ae,
            win: aa,
            mac: Y
        }
    } (),
    M = function() {
        if (!u.w3) {
            return
        }
        if ((typeof L.readyState != l && L.readyState == "complete") || (typeof L.readyState == l && (L.getElementsByTagName("body")[0] || L.body))) {
            H()
        }
        if (!r) {
            if (typeof L.addEventListener != l) {
                L.addEventListener("DOMContentLoaded", H, false)
            }
            if (u.ie && u.win) {
                L.attachEvent(f,
                function() {
                    if (L.readyState == "complete") {
                        L.detachEvent(f, arguments.callee);
                        H()
                    }
                });
                if (w == top) { (function() {
                        if (r) {
                            return
                        }
                        try {
                            L.documentElement.doScroll("left")
                        } catch(X) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        H()
                    })()
                }
            }
            if (u.wk) { (function() {
                    if (r) {
                        return
                    }
                    if (!/loaded|complete/.test(L.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    H()
                })()
            }
            U(H)
        }
    } ();
    function H() {
        if (r) {
            return
        }
        try {
            var X = L.getElementsByTagName("body")[0].appendChild(k("span"));
            X.parentNode.removeChild(X)
        } catch(Y) {
            return
        }
        r = true;
        var Z = a.length;
        for (var aa = 0; aa < Z; aa++) {
            a[aa]()
        }
    }
    function s(X) {
        if (r) {
            X()
        } else {
            a[a.length] = X
        }
    }
    function U(Y) {
        if (typeof w.addEventListener != l) {
            w.addEventListener("load", Y, false)
        } else {
            if (typeof L.addEventListener != l) {
                L.addEventListener("load", Y, false)
            } else {
                if (typeof w.attachEvent != l) {
                    K(w, "onload", Y)
                } else {
                    if (typeof w.onload == "function") {
                        var X = w.onload;
                        w.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        w.onload = Y
                    }
                }
            }
        }
    }
    function J() {
        if (B) {
            c()
        } else {
            p()
        }
    }
    function c() {
        var Z = L.getElementsByTagName("body")[0];
        var X = k(T);
        X.setAttribute("type", S);
        var Y = Z.appendChild(X);
        if (Y) {
            var aa = 0; (function() {
                if (typeof Y.GetVariable != l) {
                    var ab = Y.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        u.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (aa < 10) {
                        aa++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                Z.removeChild(X);
                Y = null;
                p()
            })()
        } else {
            p()
        }
    }
    function p() {
        var ac = Q.length;
        if (ac > 0) {
            for (var ab = 0; ab < ac; ab++) {
                var ag = Q[ab].id;
                var X = Q[ab].callbackFn;
                var ai = {
                    success: false,
                    id: ag
                };
                if (u.pv[0] > 0) {
                    var aa = E(ag);
                    if (aa) {
                        if (n(Q[ab].swfVersion) && !(u.wk && u.wk < 312)) {
                            d(ag, true);
                            if (X) {
                                ai.success = true;
                                ai.ref = h(ag);
                                X(ai)
                            }
                        } else {
                            if (Q[ab].expressInstall && i()) {
                                var ae = {};
                                ae.data = Q[ab].expressInstall;
                                ae.width = aa.getAttribute("width") || "0";
                                ae.height = aa.getAttribute("height") || "0";
                                if (aa.getAttribute("class")) {
                                    ae.styleclass = aa.getAttribute("class")
                                }
                                if (aa.getAttribute("align")) {
                                    ae.align = aa.getAttribute("align")
                                }
                                var ad = {};
                                var af = aa.getElementsByTagName("param");
                                var Y = af.length;
                                for (var Z = 0; Z < Y; Z++) {
                                    if (af[Z].getAttribute("name").toLowerCase() != "movie") {
                                        ad[af[Z].getAttribute("name")] = af[Z].getAttribute("value")
                                    }
                                }
                                x(ae, ad, ag, X)
                            } else {
                                R(aa);
                                if (X) {
                                    X(ai)
                                }
                            }
                        }
                    }
                } else {
                    d(ag, true);
                    if (X) {
                        var ah = h(ag);
                        if (ah && typeof ah.SetVariable != l) {
                            ai.success = true;
                            ai.ref = ah
                        }
                        X(ai)
                    }
                }
            }
        }
    }
    function h(X) {
        var Z = null;
        var aa = E(X);
        if (aa && aa.nodeName == "OBJECT") {
            if (typeof aa.SetVariable != l) {
                Z = aa
            } else {
                var Y = aa.getElementsByTagName(T)[0];
                if (Y) {
                    Z = Y
                }
            }
        }
        return Z
    }
    function i() {
        return ! C && n("6.0.65") && (u.win || u.mac) && !(u.wk && u.wk < 312)
    }
    function x(ab, ad, Z, ac) {
        C = true;
        m = ac || null;
        j = {
            success: false,
            id: Z
        };
        var Y = E(Z);
        if (Y) {
            if (Y.nodeName == "OBJECT") {
                N = I(Y);
                y = null
            } else {
                N = Y;
                y = Z
            }
            ab.id = z;
            if (typeof ab.width == l || (!/%$/.test(ab.width) && parseInt(ab.width, 10) < 310)) {
                ab.width = "310"
            }
            if (typeof ab.height == l || (!/%$/.test(ab.height) && parseInt(ab.height, 10) < 137)) {
                ab.height = "137"
            }
            L.title = L.title.slice(0, 47) + " - Flash Player Installation";
            var X = u.ie && u.win ? "ActiveX": "PlugIn",
            ae = "MMredirectURL=" + w.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + X + "&MMdoctitle=" + L.title;
            if (typeof ad.flashvars != l) {
                ad.flashvars += "&" + ae
            } else {
                ad.flashvars = ae
            }
            if (u.ie && u.win && Y.readyState != 4) {
                var aa = k("div");
                Z += "SWFObjectNew";
                aa.setAttribute("id", Z);
                Y.parentNode.insertBefore(aa, Y);
                Y.style.display = "none"; (function() {
                    if (Y.readyState == 4) {
                        Y.parentNode.removeChild(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            W(ab, ad, Z)
        }
    }
    function R(Y) {
        if (u.ie && u.win && Y.readyState != 4) {
            var X = k("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(I(Y), X);
            Y.style.display = "none"; (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(I(Y), Y)
        }
    }
    function I(X) {
        var ab = k("div");
        if (u.win && u.ie) {
            ab.innerHTML = X.innerHTML
        } else {
            var aa = X.getElementsByTagName(T)[0];
            if (aa) {
                var Y = aa.childNodes;
                if (Y) {
                    var Z = Y.length;
                    for (var ac = 0; ac < Z; ac++) {
                        if (! (Y[ac].nodeType == 1 && Y[ac].nodeName == "PARAM") && !(Y[ac].nodeType == 8)) {
                            ab.appendChild(Y[ac].cloneNode(true))
                        }
                    }
                }
            }
        }
        return ab
    }
    function W(ae, ac, ag) {
        var af, ai = E(ag);
        if (u.wk && u.wk < 312) {
            return af
        }
        if (ai) {
            if (typeof ae.id == l) {
                ae.id = ag
            }
            if (u.ie && u.win) {
                var ad = "";
                for (var aa in ae) {
                    if (ae[aa] != Object.prototype[aa]) {
                        if (aa.toLowerCase() == "data") {
                            ac.movie = ae[aa]
                        } else {
                            if (aa.toLowerCase() == "styleclass") {
                                ad += ' class="' + ae[aa] + '"'
                            } else {
                                if (aa.toLowerCase() != "classid") {
                                    ad += " " + aa + '="' + ae[aa] + '"'
                                }
                            }
                        }
                    }
                }
                var ab = "";
                for (var Z in ac) {
                    if (ac[Z] != Object.prototype[Z]) {
                        ab += '<param name="' + Z + '" value="' + ac[Z] + '" />'
                    }
                }
                ai.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ad + ">" + ab + "</object>";
                v[v.length] = ae.id;
                af = E(ae.id)
            } else {
                var ah = k(T);
                ah.setAttribute("type", S);
                for (var Y in ae) {
                    if (ae[Y] != Object.prototype[Y]) {
                        if (Y.toLowerCase() == "styleclass") {
                            ah.setAttribute("class", ae[Y])
                        } else {
                            if (Y.toLowerCase() != "classid") {
                                ah.setAttribute(Y, ae[Y])
                            }
                        }
                    }
                }
                for (var X in ac) {
                    if (ac[X] != Object.prototype[X] && X.toLowerCase() != "movie") {
                        G(ah, X, ac[X])
                    }
                }
                ai.parentNode.replaceChild(ah, ai);
                af = ah
            }
        }
        return af
    }
    function G(X, Z, aa) {
        var Y = k("param");
        Y.setAttribute("name", Z);
        Y.setAttribute("value", aa);
        X.appendChild(Y)
    }
    function g(Y) {
        var X = E(Y);
        if (X && X.nodeName == "OBJECT") {
            if (u.ie && u.win) {
                X.style.display = "none"; (function() {
                    if (X.readyState == 4) {
                        D(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }
    function D(Y) {
        var X = E(Y);
        if (X) {
            for (var Z in X) {
                if (typeof X[Z] == "function") {
                    X[Z] = null
                }
            }
            X.parentNode.removeChild(X)
        }
    }
    function E(Y) {
        var Z = null;
        try {
            Z = L.getElementById(Y)
        } catch(X) {}
        return Z
    }
    function k(X) {
        return L.createElement(X)
    }
    function K(Y, Z, X) {
        Y.attachEvent(Z, X);
        q[q.length] = [Y, Z, X]
    }
    function n(Y) {
        var X = u.pv,
        Z = Y.split(".");
        Z[0] = parseInt(Z[0], 10);
        Z[1] = parseInt(Z[1], 10) || 0;
        Z[2] = parseInt(Z[2], 10) || 0;
        return (X[0] > Z[0] || (X[0] == Z[0] && X[1] > Z[1]) || (X[0] == Z[0] && X[1] == Z[1] && X[2] >= Z[2])) ? true: false
    }
    function b(X, aa, Y, ad) {
        if (u.ie && u.mac) {
            return
        }
        var ab = L.getElementsByTagName("head")[0];
        if (!ab) {
            return
        }
        var Z = (Y && typeof Y == "string") ? Y: "screen";
        if (ad) {
            P = null;
            o = null
        }
        if (!P || o != Z) {
            var ac = k("style");
            ac.setAttribute("type", "text/css");
            ac.setAttribute("media", Z);
            P = ab.appendChild(ac);
            if (u.ie && u.win && typeof L.styleSheets != l && L.styleSheets.length > 0) {
                P = L.styleSheets[L.styleSheets.length - 1]
            }
            o = Z
        }
        if (u.ie && u.win) {
            if (P && typeof P.addRule == T) {
                P.addRule(X, aa)
            }
        } else {
            if (P && typeof L.createTextNode != l) {
                P.appendChild(L.createTextNode(X + " {" + aa + "}"))
            }
        }
    }
    function d(Y, Z) {
        if (!O) {
            return
        }
        var X = Z ? "visible": "hidden";
        if (r && E(Y)) {
            E(Y).style.visibility = X
        } else {
            b("#" + Y, "visibility:" + X)
        }
    }
    function t(X) {
        var Y = /[\\\"<>\.;]/;
        var Z = Y.exec(X) != null;
        return Z && typeof encodeURIComponent != l ? encodeURIComponent(X) : X
    }
    var F = function() {
        if (u.ie && u.win) {
            window.attachEvent("onunload",
            function() {
                var Y = q.length;
                for (var X = 0; X < Y; X++) {
                    q[X][0].detachEvent(q[X][1], q[X][2])
                }
                var ab = v.length;
                for (var ac = 0; ac < ab; ac++) {
                    g(v[ac])
                }
                for (var aa in u) {
                    u[aa] = null
                }
                u = null;
                for (var Z in swfobject) {
                    swfobject[Z] = null
                }
                swfobject = null
            })
        }
    } ();
    return {
        registerObject: function(Y, Z, ab, X) {
            if (u.w3 && Y && Z) {
                var aa = {};
                aa.id = Y;
                aa.swfVersion = Z;
                aa.expressInstall = ab;
                aa.callbackFn = X;
                Q[Q.length] = aa;
                d(Y, false)
            } else {
                if (X) {
                    X({
                        success: false,
                        id: Y
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (u.w3) {
                return h(X)
            }
        },
        embedSWF: function(X, ad, aa, ac, af, ah, ag, Z, ab, Y) {
            var ae = {
                success: false,
                id: ad
            };
            if (u.w3 && !(u.wk && u.wk < 312) && X && ad && aa && ac && af) {
                d(ad, false);
                s(function() {
                    aa += "";
                    ac += "";
                    var ak = {};
                    if (ab && typeof ab === T) {
                        for (var am in ab) {
                            ak[am] = ab[am]
                        }
                    }
                    ak.data = X;
                    ak.width = aa;
                    ak.height = ac;
                    var an = {};
                    if (Z && typeof Z === T) {
                        for (var al in Z) {
                            an[al] = Z[al]
                        }
                    }
                    if (ag && typeof ag === T) {
                        for (var aj in ag) {
                            if (typeof an.flashvars != l) {
                                an.flashvars += "&" + aj + "=" + ag[aj]
                            } else {
                                an.flashvars = aj + "=" + ag[aj]
                            }
                        }
                    }
                    if (n(af)) {
                        var ai = W(ak, an, ad);
                        if (ak.id == ad) {
                            d(ad, true)
                        }
                        ae.success = true;
                        ae.ref = ai
                    } else {
                        if (ah && i()) {
                            ak.data = ah;
                            x(ak, an, ad, Y);
                            return
                        } else {
                            d(ad, true)
                        }
                    }
                    if (Y) {
                        Y(ae)
                    }
                })
            } else {
                if (Y) {
                    Y(ae)
                }
            }
        },
        switchOffAutoHideShow: function() {
            O = false
        },
        ua: u,
        getFlashPlayerVersion: function() {
            return {
                major: u.pv[0],
                minor: u.pv[1],
                release: u.pv[2]
            }
        },
        hasFlashPlayerVersion: n,
        createSWF: function(Y, X, Z) {
            if (u.w3) {
                return W(Y, X, Z)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(X, Y, Z, aa) {
            if (u.w3 && i()) {
                x(X, Y, Z, aa)
            }
        },
        removeSWF: function(X) {
            if (u.w3) {
                g(X)
            }
        },
        createCSS: function(X, Y, aa, Z) {
            if (u.w3) {
                b(X, Y, aa, Z)
            }
        },
        addDomLoadEvent: s,
        addLoadEvent: U,
        getQueryParamValue: function(X) {
            var Y = L.location.search || L.location.hash;
            if (Y) {
                if (/\?/.test(Y)) {
                    Y = Y.split("?")[1]
                }
                if (X == null) {
                    return t(Y)
                }
                var aa = Y.split("&");
                for (var Z = 0; Z < aa.length; Z++) {
                    if (aa[Z].substring(0, aa[Z].indexOf("=")) == X) {
                        return t(aa[Z].substring((aa[Z].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (C) {
                var X = E(z);
                if (X && N) {
                    X.parentNode.replaceChild(N, X);
                    if (y) {
                        d(y, true);
                        if (u.ie && u.win) {
                            N.style.display = "block"
                        }
                    }
                    if (m) {
                        m(j)
                    }
                }
                C = false
            }
        }
    }
} ();
var SWFUpload;
if (SWFUpload == undefined) {
    SWFUpload = function(a) {
        this.initSWFUpload(a)
    }
}
SWFUpload.prototype.initSWFUpload = function(b) {
    try {
        this.customSettings = {};
        this.settings = b;
        this.eventQueue = [];
        this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
        this.movieElement = null;
        SWFUpload.instances[this.movieName] = this;
        this.initSettings();
        this.loadFlash();
        this.displayDebugInfo()
    } catch(a) {
        delete SWFUpload.instances[this.movieName];
        throw a
    }
};
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {
    QUEUE_LIMIT_EXCEEDED: -100,
    FILE_EXCEEDS_SIZE_LIMIT: -110,
    ZERO_BYTE_FILE: -120,
    INVALID_FILETYPE: -130
};
SWFUpload.UPLOAD_ERROR = {
    HTTP_ERROR: -200,
    MISSING_UPLOAD_URL: -210,
    IO_ERROR: -220,
    SECURITY_ERROR: -230,
    UPLOAD_LIMIT_EXCEEDED: -240,
    UPLOAD_FAILED: -250,
    SPECIFIED_FILE_ID_NOT_FOUND: -260,
    FILE_VALIDATION_FAILED: -270,
    FILE_CANCELLED: -280,
    UPLOAD_STOPPED: -290
};
SWFUpload.FILE_STATUS = {
    QUEUED: -1,
    IN_PROGRESS: -2,
    ERROR: -3,
    COMPLETE: -4,
    CANCELLED: -5
};
SWFUpload.BUTTON_ACTION = {
    SELECT_FILE: -100,
    SELECT_FILES: -110,
    START_UPLOAD: -120
};
SWFUpload.CURSOR = {
    ARROW: -1,
    HAND: -2
};
SWFUpload.WINDOW_MODE = {
    WINDOW: "window",
    TRANSPARENT: "transparent",
    OPAQUE: "opaque"
};
SWFUpload.completeURL = function(b) {
    if (typeof(b) !== "string" || b.match(/^https?:\/\//i) || b.match(/^\//)) {
        return b
    }
    var a = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port: "");
    var c = window.location.pathname.lastIndexOf("/");
    if (c <= 0) {
        path = "/"
    } else {
        path = window.location.pathname.substr(0, c) + "/"
    }
    return path + b
};
SWFUpload.prototype.initSettings = function() {
    this.ensureDefault = function(b, a) {
        this.settings[b] = (this.settings[b] == undefined) ? a: this.settings[b]
    };
    this.ensureDefault("upload_url", "");
    this.ensureDefault("preserve_relative_urls", false);
    this.ensureDefault("file_post_name", "Filedata");
    this.ensureDefault("post_params", {});
    this.ensureDefault("use_query_string", false);
    this.ensureDefault("requeue_on_error", false);
    this.ensureDefault("http_success", []);
    this.ensureDefault("assume_success_timeout", 0);
    this.ensureDefault("file_types", "*.*");
    this.ensureDefault("file_types_description", "All Files");
    this.ensureDefault("file_size_limit", 0);
    this.ensureDefault("file_upload_limit", 0);
    this.ensureDefault("file_queue_limit", 0);
    this.ensureDefault("flash_url", "swfupload.swf");
    this.ensureDefault("prevent_swf_caching", true);
    this.ensureDefault("button_image_url", "");
    this.ensureDefault("button_width", 1);
    this.ensureDefault("button_height", 1);
    this.ensureDefault("button_text", "");
    this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
    this.ensureDefault("button_text_top_padding", 0);
    this.ensureDefault("button_text_left_padding", 0);
    this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
    this.ensureDefault("button_disabled", false);
    this.ensureDefault("button_placeholder_id", "");
    this.ensureDefault("button_placeholder", null);
    this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
    this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
    this.ensureDefault("debug", false);
    this.settings.debug_enabled = this.settings.debug;
    this.settings.return_upload_start_handler = this.returnUploadStart;
    this.ensureDefault("swfupload_loaded_handler", null);
    this.ensureDefault("file_dialog_start_handler", null);
    this.ensureDefault("file_queued_handler", null);
    this.ensureDefault("file_queue_error_handler", null);
    this.ensureDefault("file_dialog_complete_handler", null);
    this.ensureDefault("upload_start_handler", null);
    this.ensureDefault("upload_progress_handler", null);
    this.ensureDefault("upload_error_handler", null);
    this.ensureDefault("upload_success_handler", null);
    this.ensureDefault("upload_complete_handler", null);
    this.ensureDefault("debug_handler", this.debugMessage);
    this.ensureDefault("custom_settings", {});
    this.customSettings = this.settings.custom_settings;
    if ( !! this.settings.prevent_swf_caching) {
        this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?": "&") + "preventswfcaching=" + new Date().getTime()
    }
    if (!this.settings.preserve_relative_urls) {
        this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
        this.settings.button_image_url = this.settings.button_image_url ? SWFUpload.completeURL(this.settings.button_image_url) : this.settings.button_image_url
    }
    delete this.ensureDefault
};
SWFUpload.prototype.loadFlash = function() {
    var a, b;
    if (document.getElementById(this.movieName) !== null) {
        throw "ID " + this.movieName + " is already in use. The Flash Object could not be added"
    }
    a = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
    if (a == undefined) {
        throw "Could not find the placeholder element: " + this.settings.button_placeholder_id
    }
    b = document.createElement("div");
    b.innerHTML = this.getFlashHTML();
    a.parentNode.replaceChild(b.firstChild, a);
    if (window[this.movieName] == undefined) {
        window[this.movieName] = this.getMovieElement()
    }
};
SWFUpload.prototype.getFlashHTML = function() {
    return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
};
SWFUpload.prototype.getFlashVars = function() {
    var b = this.buildParamString();
    var a = this.settings.http_success.join(",");
    return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(a), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(b), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
};
SWFUpload.prototype.getMovieElement = function() {
    if (this.movieElement == undefined) {
        this.movieElement = document.getElementById(this.movieName)
    }
    if (this.movieElement === null) {
        throw "Could not find Flash element"
    }
    return this.movieElement
};
SWFUpload.prototype.buildParamString = function() {
    var a = this.settings.post_params;
    var c = [];
    if (typeof(a) === "object") {
        for (var b in a) {
            if (a.hasOwnProperty(b)) {
                c.push(encodeURIComponent(b.toString()) + "=" + encodeURIComponent(a[b].toString()))
            }
        }
    }
    return c.join("&amp;")
};
SWFUpload.prototype.destroy = function() {
    try {
        this.cancelUpload(null, false);
        var d = null;
        d = this.getMovieElement();
        if (d && typeof(d.CallFunction) === "unknown") {
            for (var a in d) {
                try {
                    if (typeof(d[a]) === "function") {
                        d[a] = null
                    }
                } catch(c) {}
            }
            try {
                d.parentNode.removeChild(d)
            } catch(e) {}
        }
        window[this.movieName] = null;
        SWFUpload.instances[this.movieName] = null;
        delete SWFUpload.instances[this.movieName];
        this.movieElement = null;
        this.settings = null;
        this.customSettings = null;
        this.eventQueue = null;
        this.movieName = null;
        return true
    } catch(b) {
        return false
    }
};
SWFUpload.prototype.displayDebugInfo = function() {
    this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "\t", "upload_url:               ", this.settings.upload_url, "\n", "\t", "flash_url:                ", this.settings.flash_url, "\n", "\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "\t", "http_success:             ", this.settings.http_success.join(", "), "\n", "\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "\t", "file_post_name:           ", this.settings.file_post_name, "\n", "\t", "post_params:              ", this.settings.post_params.toString(), "\n", "\t", "file_types:               ", this.settings.file_types, "\n", "\t", "file_types_description:   ", this.settings.file_types_description, "\n", "\t", "file_size_limit:          ", this.settings.file_size_limit, "\n", "\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "\t", "debug:                    ", this.settings.debug.toString(), "\n", "\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set": "Not Set"), "\n", "\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "\t", "button_width:             ", this.settings.button_width.toString(), "\n", "\t", "button_height:            ", this.settings.button_height.toString(), "\n", "\t", "button_text:              ", this.settings.button_text.toString(), "\n", "\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "\t", "button_action:            ", this.settings.button_action.toString(), "\n", "\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n", "\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n", "\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n", "\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n", "\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n", "\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n", "\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n", "\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n", "\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n", "\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"].join(""))
};
SWFUpload.prototype.addSetting = function(c, a, b) {
    if (a == undefined) {
        return (this.settings[c] = b)
    } else {
        return (this.settings[c] = a)
    }
};
SWFUpload.prototype.getSetting = function(a) {
    if (this.settings[a] != undefined) {
        return this.settings[a]
    }
    return ""
};
SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
    argumentArray = argumentArray || [];
    var movieElement = this.getMovieElement();
    var returnValue, returnString;
    try {
        returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>");
        returnValue = eval(returnString)
    } catch(ex) {
        throw "Call to " + functionName + " failed"
    }
    if (returnValue != undefined && typeof returnValue.post === "object") {
        returnValue = this.unescapeFilePostParams(returnValue)
    }
    return returnValue
};
SWFUpload.prototype.selectFile = function() {
    this.callFlash("SelectFile")
};
SWFUpload.prototype.selectFiles = function() {
    this.callFlash("SelectFiles")
};
SWFUpload.prototype.startUpload = function(a) {
    this.callFlash("StartUpload", [a])
};
SWFUpload.prototype.cancelUpload = function(a, b) {
    if (b !== false) {
        b = true
    }
    this.callFlash("CancelUpload", [a, b])
};
SWFUpload.prototype.stopUpload = function() {
    this.callFlash("StopUpload")
};
SWFUpload.prototype.getStats = function() {
    return this.callFlash("GetStats")
};
SWFUpload.prototype.setStats = function(a) {
    this.callFlash("SetStats", [a])
};
SWFUpload.prototype.getFile = function(a) {
    if (typeof(a) === "number") {
        return this.callFlash("GetFileByIndex", [a])
    } else {
        return this.callFlash("GetFile", [a])
    }
};
SWFUpload.prototype.addFileParam = function(b, c, a) {
    return this.callFlash("AddFileParam", [b, c, a])
};
SWFUpload.prototype.removeFileParam = function(a, b) {
    this.callFlash("RemoveFileParam", [a, b])
};
SWFUpload.prototype.setUploadURL = function(a) {
    this.settings.upload_url = a.toString();
    this.callFlash("SetUploadURL", [a])
};
SWFUpload.prototype.setPostParams = function(a) {
    this.settings.post_params = a;
    this.callFlash("SetPostParams", [a])
};
SWFUpload.prototype.addPostParam = function(a, b) {
    this.settings.post_params[a] = b;
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.removePostParam = function(a) {
    delete this.settings.post_params[a];
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.setFileTypes = function(a, b) {
    this.settings.file_types = a;
    this.settings.file_types_description = b;
    this.callFlash("SetFileTypes", [a, b])
};
SWFUpload.prototype.setFileSizeLimit = function(a) {
    this.settings.file_size_limit = a;
    this.callFlash("SetFileSizeLimit", [a])
};
SWFUpload.prototype.setFileUploadLimit = function(a) {
    this.settings.file_upload_limit = a;
    this.callFlash("SetFileUploadLimit", [a])
};
SWFUpload.prototype.setFileQueueLimit = function(a) {
    this.settings.file_queue_limit = a;
    this.callFlash("SetFileQueueLimit", [a])
};
SWFUpload.prototype.setFilePostName = function(a) {
    this.settings.file_post_name = a;
    this.callFlash("SetFilePostName", [a])
};
SWFUpload.prototype.setUseQueryString = function(a) {
    this.settings.use_query_string = a;
    this.callFlash("SetUseQueryString", [a])
};
SWFUpload.prototype.setRequeueOnError = function(a) {
    this.settings.requeue_on_error = a;
    this.callFlash("SetRequeueOnError", [a])
};
SWFUpload.prototype.setHTTPSuccess = function(a) {
    if (typeof a === "string") {
        a = a.replace(" ", "").split(",")
    }
    this.settings.http_success = a;
    this.callFlash("SetHTTPSuccess", [a])
};
SWFUpload.prototype.setAssumeSuccessTimeout = function(a) {
    this.settings.assume_success_timeout = a;
    this.callFlash("SetAssumeSuccessTimeout", [a])
};
SWFUpload.prototype.setDebugEnabled = function(a) {
    this.settings.debug_enabled = a;
    this.callFlash("SetDebugEnabled", [a])
};
SWFUpload.prototype.setButtonImageURL = function(a) {
    if (a == undefined) {
        a = ""
    }
    this.settings.button_image_url = a;
    this.callFlash("SetButtonImageURL", [a])
};
SWFUpload.prototype.setButtonDimensions = function(a, b) {
    this.settings.button_width = a;
    this.settings.button_height = b;
    var c = this.getMovieElement();
    if (c != undefined) {
        c.style.width = a + "px";
        c.style.height = b + "px"
    }
    this.callFlash("SetButtonDimensions", [a, b])
};
SWFUpload.prototype.setButtonText = function(a) {
    this.settings.button_text = a;
    this.callFlash("SetButtonText", [a])
};
SWFUpload.prototype.setButtonTextPadding = function(b, a) {
    this.settings.button_text_top_padding = a;
    this.settings.button_text_left_padding = b;
    this.callFlash("SetButtonTextPadding", [b, a])
};
SWFUpload.prototype.setButtonTextStyle = function(a) {
    this.settings.button_text_style = a;
    this.callFlash("SetButtonTextStyle", [a])
};
SWFUpload.prototype.setButtonDisabled = function(a) {
    this.settings.button_disabled = a;
    this.callFlash("SetButtonDisabled", [a])
};
SWFUpload.prototype.setButtonAction = function(a) {
    this.settings.button_action = a;
    this.callFlash("SetButtonAction", [a])
};
SWFUpload.prototype.setButtonCursor = function(a) {
    this.settings.button_cursor = a;
    this.callFlash("SetButtonCursor", [a])
};
SWFUpload.prototype.queueEvent = function(c, a) {
    if (a == undefined) {
        a = []
    } else {
        if (! (a instanceof Array)) {
            a = [a]
        }
    }
    var b = this;
    if (typeof this.settings[c] === "function") {
        this.eventQueue.push(function() {
            this.settings[c].apply(this, a)
        });
        setTimeout(function() {
            b.executeNextEvent()
        },
        0)
    } else {
        if (this.settings[c] !== null) {
            throw "Event handler " + c + " is unknown or is not a function"
        }
    }
};
SWFUpload.prototype.executeNextEvent = function() {
    var a = this.eventQueue ? this.eventQueue.shift() : null;
    if (typeof(a) === "function") {
        a.apply(this)
    }
};
SWFUpload.prototype.unescapeFilePostParams = function(a) {
    var c = /[$]([0-9a-f]{4})/i;
    var d = {};
    var b;
    if (a != undefined) {
        for (var e in a.post) {
            if (a.post.hasOwnProperty(e)) {
                b = e;
                var f;
                while ((f = c.exec(b)) !== null) {
                    b = b.replace(f[0], String.fromCharCode(parseInt("0x" + f[1], 16)))
                }
                d[b] = a.post[e]
            }
        }
        a.post = d
    }
    return a
};
SWFUpload.prototype.testExternalInterface = function() {
    try {
        return this.callFlash("TestExternalInterface")
    } catch(a) {
        return false
    }
};
SWFUpload.prototype.flashReady = function() {
    var a = this.getMovieElement();
    if (!a) {
        this.debug("Flash called back ready but the flash movie can't be found.");
        return
    }
    this.cleanUp(a);
    this.queueEvent("swfupload_loaded_handler")
};
SWFUpload.prototype.cleanUp = function(c) {
    try {
        if (this.movieElement && typeof(c.CallFunction) === "unknown") {
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for (var a in c) {
                try {
                    if (typeof(c[a]) === "function") {
                        c[a] = null
                    }
                } catch(d) {}
            }
        }
    } catch(b) {}
    window.__flash__removeCallback = function(g, e) {
        try {
            if (g) {
                g[e] = null
            }
        } catch(f) {}
    }
};
SWFUpload.prototype.fileDialogStart = function() {
    this.queueEvent("file_dialog_start_handler")
};
SWFUpload.prototype.fileQueued = function(a) {
    a = this.unescapeFilePostParams(a);
    this.queueEvent("file_queued_handler", a)
};
SWFUpload.prototype.fileQueueError = function(b, a, c) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("file_queue_error_handler", [b, a, c])
};
SWFUpload.prototype.fileDialogComplete = function(c, a, b) {
    this.queueEvent("file_dialog_complete_handler", [c, a, b])
};
SWFUpload.prototype.uploadStart = function(a) {
    a = this.unescapeFilePostParams(a);
    this.queueEvent("return_upload_start_handler", a)
};
SWFUpload.prototype.returnUploadStart = function(a) {
    var b;
    if (typeof this.settings.upload_start_handler === "function") {
        a = this.unescapeFilePostParams(a);
        b = this.settings.upload_start_handler.call(this, a)
    } else {
        if (this.settings.upload_start_handler != undefined) {
            throw "upload_start_handler must be a function"
        }
    }
    if (b === undefined) {
        b = true
    }
    b = !!b;
    this.callFlash("ReturnUploadStart", [b])
};
SWFUpload.prototype.uploadProgress = function(b, a, c) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("upload_progress_handler", [b, a, c])
};
SWFUpload.prototype.uploadError = function(b, a, c) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("upload_error_handler", [b, a, c])
};
SWFUpload.prototype.uploadSuccess = function(c, b, a) {
    c = this.unescapeFilePostParams(c);
    this.queueEvent("upload_success_handler", [c, b, a])
};
SWFUpload.prototype.uploadComplete = function(a) {
    a = this.unescapeFilePostParams(a);
    this.queueEvent("upload_complete_handler", a)
};
SWFUpload.prototype.debug = function(a) {
    this.queueEvent("debug_handler", a)
};
SWFUpload.prototype.debugMessage = function(a) {
    if (this.settings.debug) {
        var c, b = [];
        if (typeof a === "object" && typeof a.name === "string" && typeof a.message === "string") {
            for (var d in a) {
                if (a.hasOwnProperty(d)) {
                    b.push(d + ": " + a[d])
                }
            }
            c = b.join("\n") || "";
            b = c.split("\n");
            c = "EXCEPTION: " + b.join("\nEXCEPTION: ");
            SWFUpload.Console.writeLine(c)
        } else {
            SWFUpload.Console.writeLine(a)
        }
    }
};
SWFUpload.Console = {};
SWFUpload.Console.writeLine = function(b) {
    var d, c;
    try {
        d = document.getElementById("SWFUpload_Console");
        if (!d) {
            c = document.createElement("form");
            document.getElementsByTagName("body")[0].appendChild(c);
            d = document.createElement("textarea");
            d.id = "SWFUpload_Console";
            d.style.fontFamily = "monospace";
            d.setAttribute("wrap", "off");
            d.wrap = "off";
            d.style.overflow = "auto";
            d.style.width = "700px";
            d.style.height = "350px";
            d.style.margin = "5px";
            c.appendChild(d)
        }
        d.value += b + "\n";
        d.scrollTop = d.scrollHeight - d.clientHeight
    } catch(a) {
        alert("Exception: " + a.name + " Message: " + a.message)
    }
}; (function(f) {
    var d = {
        init: function(b, a) {
            return this.each(function() {
                var p = f(this);
                var q = p.clone();
                var t = f.extend({
                    id: p.attr("id"),
                    swf: "uploadify.swf",
                    uploader: "uploadify.php",
                    auto: true,
                    buttonClass: "",
                    buttonCursor: "hand",
                    buttonImage: null,
                    buttonText: "SELECT FILES",
                    checkExisting: false,
                    debug: false,
                    fileObjName: "Filedata",
                    fileSizeLimit: 0,
                    fileTypeDesc: "All Files",
                    fileTypeExts: "*.*",
                    height: 30,
                    itemTemplate: false,
                    method: "post",
                    multi: true,
                    formData: {},
                    preventCaching: true,
                    progressData: "percentage",
                    queueID: false,
                    queueSizeLimit: 999,
                    removeCompleted: true,
                    removeTimeout: 3,
                    requeueErrors: false,
                    successTimeout: 30,
                    uploadLimit: 0,
                    width: 120,
                    overrideEvents: []
                },
                b);
                var w = {
                    assume_success_timeout: t.successTimeout,
                    button_placeholder_id: t.id,
                    button_width: t.width,
                    button_height: t.height,
                    button_text: null,
                    button_text_style: null,
                    button_text_top_padding: 0,
                    button_text_left_padding: 0,
                    button_action: (t.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES: SWFUpload.BUTTON_ACTION.SELECT_FILE),
                    button_disabled: false,
                    button_cursor: (t.buttonCursor == "arrow" ? SWFUpload.CURSOR.ARROW: SWFUpload.CURSOR.HAND),
                    button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
                    debug: t.debug,
                    requeue_on_error: t.requeueErrors,
                    file_post_name: t.fileObjName,
                    file_size_limit: t.fileSizeLimit,
                    file_types: t.fileTypeExts,
                    file_types_description: t.fileTypeDesc,
                    file_queue_limit: t.queueSizeLimit,
                    file_upload_limit: t.uploadLimit,
                    flash_url: t.swf,
                    prevent_swf_caching: t.preventCaching,
                    post_params: t.formData,
                    upload_url: t.uploader,
                    use_query_string: (t.method == "get"),
                    file_dialog_complete_handler: e.onDialogClose,
                    file_dialog_start_handler: e.onDialogOpen,
                    file_queued_handler: e.onSelect,
                    file_queue_error_handler: e.onSelectError,
                    swfupload_loaded_handler: t.onSWFReady,
                    upload_complete_handler: e.onUploadComplete,
                    upload_error_handler: e.onUploadError,
                    upload_progress_handler: e.onUploadProgress,
                    upload_start_handler: e.onUploadStart,
                    upload_success_handler: e.onUploadSuccess
                };
                if (a) {
                    w = f.extend(w, a)
                }
                w = f.extend(w, t);
                var c = swfobject.getFlashPlayerVersion();
                var v = (c.major >= 9);
                if (v) {
                    window["uploadify_" + t.id] = new SWFUpload(w);
                    var u = window["uploadify_" + t.id];
                    p.data("uploadify", u);
                    var r = f("<div />", {
                        id: t.id,
                        "class": "uploadify",
                        css: {
                            height: t.height + "px",
                            width: t.width + "px"
                        }
                    });
                    f("#" + u.movieName).wrap(r);
                    r = f("#" + t.id);
                    r.data("uploadify", u);
                    var x = f("<div />", {
                        id: t.id + "-button",
                        "class": "uploadify-button " + t.buttonClass
                    });
                    if (t.buttonImage) {
                        x.css({
                            "background-image": "url('" + t.buttonImage + "')",
                            "text-indent": "-9999px"
                        })
                    }
                    x.html('<span class="uploadify-button-text">' + t.buttonText + "</span>").css({
                        height: t.height + "px",
                        "line-height": t.height + "px",
                        width: t.width + "px"
                    });
                    r.append(x);
                    f("#" + u.movieName).css({
                        position: "absolute",
                        "z-index": 1
                    });
                    if (!t.queueID) {
                        var s = f("<div />", {
                            id: t.id + "-queue",
                            "class": "uploadify-queue"
                        });
                        r.after(s);
                        u.settings.queueID = t.id + "-queue";
                        u.settings.defaultQueue = true
                    }
                    u.queueData = {
                        files: {},
                        filesSelected: 0,
                        filesQueued: 0,
                        filesReplaced: 0,
                        filesCancelled: 0,
                        filesErrored: 0,
                        uploadsSuccessful: 0,
                        uploadsErrored: 0,
                        averageSpeed: 0,
                        queueLength: 0,
                        queueSize: 0,
                        uploadSize: 0,
                        queueBytesUploaded: 0,
                        uploadQueue: [],
                        errorMsg: "Some files were not added to the queue:"
                    };
                    u.original = q;
                    u.wrapper = r;
                    u.button = x;
                    u.queue = s;
                    if (t.onInit) {
                        t.onInit.call(p, u)
                    }
                } else {
                    if (t.onFallback) {
                        t.onFallback.call(p)
                    }
                }
            })
        },
        cancel: function(c, a) {
            var b = arguments;
            this.each(function() {
                var o = f(this),
                r = o.data("uploadify"),
                q = r.settings,
                s = -1;
                if (b[0]) {
                    if (b[0] == "*") {
                        var t = r.queueData.queueLength;
                        f("#" + q.queueID).find(".uploadify-queue-item").each(function() {
                            s++;
                            if (b[1] === true) {
                                r.cancelUpload(f(this).attr("id"), false)
                            } else {
                                r.cancelUpload(f(this).attr("id"))
                            }
                            f(this).find(".data").removeClass("data").html(" - Cancelled");
                            f(this).find(".uploadify-progress-bar").remove();
                            f(this).delay(1000 + 100 * s).fadeOut(500,
                            function() {
                                f(this).remove()
                            })
                        });
                        r.queueData.queueSize = 0;
                        r.queueData.queueLength = 0;
                        if (q.onClearQueue) {
                            q.onClearQueue.call(o, t)
                        }
                    } else {
                        for (var n = 0; n < b.length; n++) {
                            r.cancelUpload(b[n]);
                            f("#" + b[n]).find(".data").removeClass("data").html(" - Cancelled");
                            f("#" + b[n]).find(".uploadify-progress-bar").remove();
                            f("#" + b[n]).delay(1000 + 100 * n).fadeOut(500,
                            function() {
                                f(this).remove()
                            })
                        }
                    }
                } else {
                    var p = f("#" + q.queueID).find(".uploadify-queue-item").get(0);
                    $item = f(p);
                    r.cancelUpload($item.attr("id"));
                    $item.find(".data").removeClass("data").html(" - Cancelled");
                    $item.find(".uploadify-progress-bar").remove();
                    $item.delay(1000).fadeOut(500,
                    function() {
                        f(this).remove()
                    })
                }
            })
        },
        destroy: function() {
            this.each(function() {
                var a = f(this),
                c = a.data("uploadify"),
                b = c.settings;
                c.destroy();
                if (b.defaultQueue) {
                    f("#" + b.queueID).remove()
                }
                f("#" + b.id).replaceWith(c.original);
                if (b.onDestroy) {
                    b.onDestroy.call(this)
                }
                delete c
            })
        },
        disable: function(a) {
            this.each(function() {
                var b = f(this),
                h = b.data("uploadify"),
                c = h.settings;
                if (a) {
                    h.button.addClass("disabled");
                    if (c.onDisable) {
                        c.onDisable.call(this)
                    }
                } else {
                    h.button.removeClass("disabled");
                    if (c.onEnable) {
                        c.onEnable.call(this)
                    }
                }
                h.setButtonDisabled(a)
            })
        },
        settings: function(i, b, a) {
            var j = arguments;
            var c = b;
            this.each(function() {
                var h = f(this),
                n = h.data("uploadify"),
                m = n.settings;
                if (typeof(j[0]) == "object") {
                    for (var g in b) {
                        setData(g, b[g])
                    }
                }
                if (j.length === 1) {
                    c = m[i]
                } else {
                    switch (i) {
                    case "uploader":
                        n.setUploadURL(b);
                        break;
                    case "formData":
                        if (!a) {
                            b = f.extend(m.formData, b)
                        }
                        n.setPostParams(m.formData);
                        break;
                    case "method":
                        if (b == "get") {
                            n.setUseQueryString(true)
                        } else {
                            n.setUseQueryString(false)
                        }
                        break;
                    case "fileObjName":
                        n.setFilePostName(b);
                        break;
                    case "fileTypeExts":
                        n.setFileTypes(b, m.fileTypeDesc);
                        break;
                    case "fileTypeDesc":
                        n.setFileTypes(m.fileTypeExts, b);
                        break;
                    case "fileSizeLimit":
                        n.setFileSizeLimit(b);
                        break;
                    case "uploadLimit":
                        n.setFileUploadLimit(b);
                        break;
                    case "queueSizeLimit":
                        n.setFileQueueLimit(b);
                        break;
                    case "buttonImage":
                        n.button.css("background-image", settingValue);
                        break;
                    case "buttonCursor":
                        if (b == "arrow") {
                            n.setButtonCursor(SWFUpload.CURSOR.ARROW)
                        } else {
                            n.setButtonCursor(SWFUpload.CURSOR.HAND)
                        }
                        break;
                    case "buttonText":
                        f("#" + m.id + "-button").find(".uploadify-button-text").html(b);
                        break;
                    case "width":
                        n.setButtonDimensions(b, m.height);
                        break;
                    case "height":
                        n.setButtonDimensions(m.width, b);
                        break;
                    case "multi":
                        if (b) {
                            n.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES)
                        } else {
                            n.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE)
                        }
                        break
                    }
                    m[i] = b
                }
            });
            if (j.length === 1) {
                return c
            }
        },
        stop: function() {
            this.each(function() {
                var a = f(this),
                b = a.data("uploadify");
                b.queueData.averageSpeed = 0;
                b.queueData.uploadSize = 0;
                b.queueData.bytesUploaded = 0;
                b.queueData.uploadQueue = [];
                b.stopUpload()
            })
        },
        upload: function() {
            var a = arguments;
            this.each(function() {
                var c = f(this),
                h = c.data("uploadify");
                h.queueData.averageSpeed = 0;
                h.queueData.uploadSize = 0;
                h.queueData.bytesUploaded = 0;
                h.queueData.uploadQueue = [];
                if (a[0]) {
                    if (a[0] == "*") {
                        h.queueData.uploadSize = h.queueData.queueSize;
                        h.queueData.uploadQueue.push("*");
                        h.startUpload()
                    } else {
                        for (var b = 0; b < a.length; b++) {
                            h.queueData.uploadSize += h.queueData.files[a[b]].size;
                            h.queueData.uploadQueue.push(a[b])
                        }
                        h.startUpload(h.queueData.uploadQueue.shift())
                    }
                } else {
                    h.startUpload()
                }
            })
        }
    };
    var e = {
        onDialogOpen: function() {
            var a = this.settings;
            this.queueData.errorMsg = "Some files were not added to the queue:";
            this.queueData.filesReplaced = 0;
            this.queueData.filesCancelled = 0;
            if (a.onDialogOpen) {
                a.onDialogOpen.call(this)
            }
        },
        onDialogClose: function(h, b, a) {
            var c = this.settings;
            this.queueData.filesErrored = h - b;
            this.queueData.filesSelected = h;
            this.queueData.filesQueued = b - this.queueData.filesCancelled;
            this.queueData.queueLength = a;
            if (f.inArray("onDialogClose", c.overrideEvents) < 0) {
                if (this.queueData.filesErrored > 0) {}
            }
            if (c.onDialogClose) {
                c.onDialogClose.call(this, this.queueData)
            }
            if (c.auto) {
                f("#" + c.id).uploadify("upload", "*")
            }
        },
        onSelect: function(r) {
            var q = this.settings;
            var t = {};
            for (var s in this.queueData.files) {
                t = this.queueData.files[s];
                if (t.uploaded != true && t.name == r.name) {
                    var u = confirm('The file named "' + r.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
                    if (!u) {
                        this.cancelUpload(r.id);
                        this.queueData.filesCancelled++;
                        return false
                    } else {
                        f("#" + t.id).remove();
                        this.cancelUpload(t.id);
                        this.queueData.filesReplaced++
                    }
                }
            }
            var p = Math.round(r.size / 1024);
            var a = "KB";
            if (p > 1000) {
                p = Math.round(p / 1000);
                a = "MB"
            }
            var c = p.toString().split(".");
            p = c[0];
            if (c.length > 1) {
                p += "." + c[1].substr(0, 2)
            }
            p += a;
            var n = r.name;
            if (n.length > 25) {
                n = n.substr(0, 25) + "..."
            }
            itemData = {
                fileID: r.id,
                instanceID: q.id,
                fileName: n,
                fileSize: p
            };
            if (q.itemTemplate == false) {
                q.itemTemplate = '<div id="${fileID}" class="uploadify-queue-item">					<div class="cancel">						<a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">X</a>					</div>					<span class="fileName">${fileName} (${fileSize})</span><span class="data"></span>					<div class="uploadify-progress">						<div class="uploadify-progress-bar"><!--Progress Bar--></div>					</div>				</div>'
            }
            if (f.inArray("onSelect", q.overrideEvents) < 0) {
                itemHTML = q.itemTemplate;
                for (var b in itemData) {
                    itemHTML = itemHTML.replace(new RegExp("\\$\\{" + b + "\\}", "g"), itemData[b])
                }
                f("#" + q.queueID).append(itemHTML)
            }
            this.queueData.queueSize += r.size;
            this.queueData.files[r.id] = r;
            if (q.onSelect) {
                q.onSelect.apply(this, arguments)
            }
        },
        onSelectError: function(h, a, b) {
            var c = this.settings;
            if (f.inArray("onSelectError", c.overrideEvents) < 0) {
                switch (a) {
                case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                    if (c.queueSizeLimit > b) {
                        this.queueData.errorMsg += "\nThe number of files selected exceeds the remaining upload limit (" + b + ")."
                    } else {
                        this.queueData.errorMsg += "\nThe number of files selected exceeds the queue size limit (" + c.queueSizeLimit + ")."
                    }
                    break;
                case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                    this.queueData.errorMsg += '\nThe file "' + h.name + '" exceeds the size limit (' + c.fileSizeLimit + ").";
                    break;
                case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                    this.queueData.errorMsg += '\nThe file "' + h.name + '" is empty.';
                    break;
                case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                    this.queueData.errorMsg += '\nThe file "' + h.name + '" is not an accepted file type (' + c.fileTypeDesc + ").";
                    break
                }
            }
            if (a != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
                delete this.queueData.files[h.id]
            }
            if (c.onSelectError) {
                c.onSelectError.apply(this, arguments)
            }
        },
        onQueueComplete: function() {
            if (this.settings.onQueueComplete) {
                this.settings.onQueueComplete.call(this, this.settings.queueData)
            }
        },
        onUploadComplete: function(b) {
            var a = this.settings,
            h = this;
            var c = this.getStats();
            this.queueData.queueLength = c.files_queued;
            if (this.queueData.uploadQueue[0] == "*") {
                if (this.queueData.queueLength > 0) {
                    this.startUpload()
                } else {
                    this.queueData.uploadQueue = [];
                    if (a.onQueueComplete) {
                        a.onQueueComplete.call(this, this.queueData)
                    }
                }
            } else {
                if (this.queueData.uploadQueue.length > 0) {
                    this.startUpload(this.queueData.uploadQueue.shift())
                } else {
                    this.queueData.uploadQueue = [];
                    if (a.onQueueComplete) {
                        a.onQueueComplete.call(this, this.queueData)
                    }
                }
            }
            if (f.inArray("onUploadComplete", a.overrideEvents) < 0) {
                if (a.removeCompleted) {
                    switch (b.filestatus) {
                    case SWFUpload.FILE_STATUS.COMPLETE:
                        setTimeout(function() {
                            if (f("#" + b.id)) {
                                h.queueData.queueSize -= b.size;
                                h.queueData.queueLength -= 1;
                                delete h.queueData.files[b.id];
                                f("#" + b.id).fadeOut(500,
                                function() {
                                    f(this).remove()
                                })
                            }
                        },
                        a.removeTimeout * 1000);
                        break;
                    case SWFUpload.FILE_STATUS.ERROR:
                        if (!a.requeueErrors) {
                            setTimeout(function() {
                                if (f("#" + b.id)) {
                                    h.queueData.queueSize -= b.size;
                                    h.queueData.queueLength -= 1;
                                    delete h.queueData.files[b.id];
                                    f("#" + b.id).fadeOut(500,
                                    function() {
                                        f(this).remove()
                                    })
                                }
                            },
                            a.removeTimeout * 1000)
                        }
                        break
                    }
                } else {
                    b.uploaded = true
                }
            }
            if (a.onUploadComplete) {
                a.onUploadComplete.call(this, b)
            }
        },
        onUploadError: function(k, a, b) {
            var j = this.settings;
            var c = "Error";
            switch (a) {
            case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
                c = "HTTP Error (" + b + ")";
                break;
            case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
                c = "Missing Upload URL";
                break;
            case SWFUpload.UPLOAD_ERROR.IO_ERROR:
                c = "IO Error";
                break;
            case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
                c = "Security Error";
                break;
            case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
                alert("The upload limit has been reached (" + b + ").");
                c = "Exceeds Upload Limit";
                break;
            case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
                c = "Failed";
                break;
            case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
                break;
            case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
                c = "Validation Error";
                break;
            case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
                c = "Cancelled";
                this.queueData.queueSize -= k.size;
                this.queueData.queueLength -= 1;
                if (k.status == SWFUpload.FILE_STATUS.IN_PROGRESS || f.inArray(k.id, this.queueData.uploadQueue) >= 0) {
                    this.queueData.uploadSize -= k.size
                }
                if (j.onCancel) {
                    j.onCancel.call(this, k)
                }
                delete this.queueData.files[k.id];
                break;
            case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
                c = "Stopped";
                break
            }
            if (f.inArray("onUploadError", j.overrideEvents) < 0) {
                if (a != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && a != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
                    f("#" + k.id).addClass("uploadify-error")
                }
                f("#" + k.id).find(".uploadify-progress-bar").css("width", "1px");
                if (a != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && k.status != SWFUpload.FILE_STATUS.COMPLETE) {
                    f("#" + k.id).find(".data").html(" - " + c)
                }
            }
            var l = this.getStats();
            this.queueData.uploadsErrored = l.upload_errors;
            if (j.onUploadError) {
                j.onUploadError.call(this, k, a, b, c)
            }
        },
        onUploadProgress: function(w, q, t) {
            var v = this.settings;
            var y = new Date();
            var c = y.getTime();
            var s = c - this.timer;
            if (s > 500) {
                this.timer = c
            }
            var u = q - this.bytesLoaded;
            this.bytesLoaded = q;
            var z = this.queueData.queueBytesUploaded + q;
            var a = Math.round(q / t * 100);
            var b = "KB/s";
            var r = 0;
            var x = (u / 1024) / (s / 1000);
            x = Math.floor(x * 10) / 10;
            if (this.queueData.averageSpeed > 0) {
                this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + x) / 2)
            } else {
                this.queueData.averageSpeed = Math.floor(x)
            }
            if (x > 1000) {
                r = (x * 0.001);
                this.queueData.averageSpeed = Math.floor(r);
                b = "MB/s"
            }
            if (f.inArray("onUploadProgress", v.overrideEvents) < 0) {
                if (v.progressData == "percentage") {
                    f("#" + w.id).find(".data").html(" - " + a + "%")
                } else {
                    if (v.progressData == "speed" && s > 500) {
                        f("#" + w.id).find(".data").html(" - " + this.queueData.averageSpeed + b)
                    }
                }
                f("#" + w.id).find(".uploadify-progress-bar").css("width", a + "%")
            }
            if (v.onUploadProgress) {
                v.onUploadProgress.call(this, w, q, t, z, this.queueData.uploadSize)
            }
        },
        onUploadStart: function(c) {
            var b = this.settings;
            var a = new Date();
            this.timer = a.getTime();
            this.bytesLoaded = 0;
            if (this.queueData.uploadQueue.length == 0) {
                this.queueData.uploadSize = c.size
            }
            if (b.checkExisting) {
                f.ajax({
                    type: "POST",
                    async: false,
                    url: b.checkExisting,
                    data: {
                        filename: c.name
                    },
                    success: function(i) {
                        if (i == 1) {
                            var j = confirm('A file with the name "' + c.name + '" already exists on the server.\nWould you like to replace the existing file?');
                            if (!j) {
                                this.cancelUpload(c.id);
                                f("#" + c.id).remove();
                                if (this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0) {
                                    if (this.queueData.uploadQueue[0] == "*") {
                                        this.startUpload()
                                    } else {
                                        this.startUpload(this.queueData.uploadQueue.shift())
                                    }
                                }
                            }
                        }
                    }
                })
            }
            if (b.onUploadStart) {
                b.onUploadStart.call(this, c)
            }
        },
        onUploadSuccess: function(c, a, j) {
            var b = this.settings;
            var i = this.getStats();
            this.queueData.uploadsSuccessful = i.successful_uploads;
            this.queueData.queueBytesUploaded += c.size;
            if (f.inArray("onUploadSuccess", b.overrideEvents) < 0) {
                f("#" + c.id).find(".data").html(" - Complete")
            }
            if (b.onUploadSuccess) {
                b.onUploadSuccess.call(this, c, a, j)
            }
        }
    };
    f.fn.uploadify = function(a) {
        if (d[a]) {
            return d[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return d.init.apply(this, arguments)
            } else {
                f.error("The method " + a + " does not exist in $.uploadify")
            }
        }
    }
})($);