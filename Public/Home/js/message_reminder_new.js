var _message_newObj = {
    $mod_message_new: $(".mod_message_new"),
    $mod_toolBar:$(".mod_toolBar"),
    listHover: function() {
        _message_newObj.$mod_message_new.delegate(".message", "mouseenter", function() {
            $(this).addClass("shadom");
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#cfcfcf");
            }
            $(this).find(".li_p_del").css("display", "block");
        });
        _message_newObj.$mod_message_new.delegate(".message", "mouseleave", function() {
            $(this).removeClass("shadom");
            if ($.browser.msie && parseInt($.browser.version) < 9) {
                $(this).css("border-color", "#EAEAEA");
            }
            $(this).find(".li_p_del").css("display", "none");
        });
    },
    //判断内容是否全光
    listIsRemove:function(){
        if(_message_newObj.$mod_message_new.find("dd").length<=0){
            var $mod_message_type=$(".mod_message_type");
            _message_newObj.$mod_toolBar.remove();
            $mod_message_type.remove();
        }
    },
    //列表里面的复选框
    checkboxClick: function() {
        _message_newObj.$mod_message_new.delegate(".input", "click", function() {
            var _val = ''; //选中的值集合
            if ($(this).attr("name") === "checkbox") {
                if ($(this).hasClass("checkbox_c")) {
                    $(this).removeClass("checkbox_c").addClass("checkbox_c_sed");
                } else if ($(this).hasClass("checkbox_c_sed")) {
                    $(this).removeClass("checkbox_c_sed").addClass("checkbox_c");
                }

                for (var i = 0; i < _message_newObj.$mod_message_new.find("a.checkbox_c_sed").length; i++) {
                    _val += "," + _message_newObj.$mod_message_new.find("a.checkbox_c_sed").eq(i).attr("id");
                }
            }
            _message_newObj.allCheckStyle();
        });
    },
    //全选按钮样式控制
    allCheckStyle: function() {
        var _len = _message_newObj.$mod_message_new.find(".input"),
            _num = _len.length,
            temp = 0,
            _input=_message_newObj.$mod_toolBar.find(".input");

        for (var i = 0; i < _len.length; i++) {
            if (_len.eq(i).hasClass("checkbox_c_sed")) {
                temp += 1;
            }
        }

        _input.removeClass("checkbox_c_sed").addClass("checkbox_c");
        if (_num > temp) {
            _input.removeClass("checkbox_c_sed").addClass("checkbox_c");
        }
        if (_num === temp) {
            _input.addClass("checkbox_c_sed").removeClass("checkbox_c");
        }
    },
    //全选
    allCheckboxClick: function() {
        _message_newObj.$mod_toolBar.delegate(".input", "click", function() {
            var _product_arry = _message_newObj.$mod_message_new.find(".input");

            if ($(this).attr("name") === "checkbox") {
                if ($(this).hasClass("checkbox_c")) {
                    $(this).removeClass("checkbox_c").addClass("checkbox_c_sed");
                    _product_arry.removeClass("checkbox_c").addClass("checkbox_c_sed");
                } else if ($(this).hasClass("checkbox_c_sed")) {
                    $(this).removeClass("checkbox_c_sed").addClass("checkbox_c");
                    _product_arry.removeClass("checkbox_c_sed").addClass("checkbox_c");
                }
            }
            _message_newObj.allCheckStyle();
        });
    },
    //控制动画
    initFun: function() {
        this.listHover();
        this.checkboxClick();
        this.allCheckboxClick();
    }
};
$(document).ready(function() {
    _message_newObj.initFun();
});
