$(document).ready(function () {
    if ($(window).width() >= 750) {
        $(".footer").css({
            "left": "50%",
            "margin-left": "-375px"
        })
    }
})

$("#goBack").click(function () {
    history.go(-1);
})

$(".case > ul:nth-of-type(1) > li").click(function () {
    if ($(window).width() >= 750) {
        $(".dialog").fadeIn();
        var dialogHeight = $(".dialog .area").height();
        var dialogWeight = $(".dialog .area").width();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".dialog .area").css("top", "50%").css("margin-top", -dialogHeight / 2).css("left", "50%").css("margin-left", (-dialogWeight / 2) - 10);
        $(".close").css("margin-left", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        $(".dialog").fadeIn();
        var dialogHeight = $(".dialog .area").height();
        var dialogWeight = $(".dialog .area").width();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".dialog .area").css("margin-top", dialogHeight / 2);
        $(".dialog .area").css("top", "50%").css("margin-top", -dialogHeight / 2).css("left", "50%").css("margin-left", (-dialogWeight / 2) - 10);
        $(".close").css("margin-left", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    }
})

$(".close").click(function () {
    $(".dialog").fadeOut();
})

// 表单验证
$(".index-form form div input, .get-price form input, .bg form input").click(function () {
    $(this).attr("placeholder", "");
})

$(".index-form form div input:eq(0), .get-price form input:eq(0), .bg form input:nth-of-type(1)").blur(function () {
    if ($(this).attr("placeholder") === "" && $(this).val() === "") {
        $(this).attr("placeholder", "您的称呼");
    }
});
$(".index-form form div input:eq(1), .get-price form input:eq(1), .bg form input:nth-of-type(2)").blur(function () {
    if ($(this).attr("placeholder") === "" && $(this).val() === "") {
        $(this).attr("placeholder", "您的联系方式");
    }
});
$(".index-form form div input:eq(2), .get-price form input:eq(2), .bg form input:nth-of-type(3)").blur(function () {
    if ($(this).attr("placeholder") === "" && $(this).val() === "") {
        $(this).attr("placeholder", "请输入您的房屋面积");
    }
});

//房屋面积末尾添加平方
$("#userArea").on("keyup", function () {
    var AreaString = $("#userArea").val() + "平方";
    $(this).val(AreaString);
})
$("#gp-userArea").on("keyup", function () {
    var AreaString = $("#gp-userArea").val() + "平方";
    $(this).val(AreaString);
})
$("#ny-userArea").on("keyup", function () {
    var AreaString = $("#ny-userArea").val() + "平方";
    $(this).val(AreaString);
})

//预约成功弹出框
$(".yuyue").click(function () {
    var userName = $(".index-form div:nth-of-type(1) input").val();
    var userPhone = $(".index-form div:nth-of-type(2) input").val();
    var userArea = $(".index-form div:nth-of-type(3) input").val();
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        $(".success-wrap").css("display", "block");
        $(".userName, .userPhone, .userArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("margin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        if (userName !== "") {
            $(".userName").hide();
        } else {
            $(".userName").show();
        };
        if (userPhone !== "" && regPhone.test(userPhone)) {
            $(".userPhone").hide();
        } else {
            $(".userPhone").show();
        };
        if (userArea !== "") {
            $(".userArea").hide();
        } else {
            $(".userArea").show();
        };
    }
})
//预约成功弹出框（智能报价）
$("#gpSubmit").click(function () {
    var userName = $(".get-price form input:nth-of-type(1)").val();
    var userPhone = $(".get-price form input:nth-of-type(2)").val();
    var userArea = $(".get-price form input:nth-of-type(3)").val();
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        $(".get-price-wrap").hide();
        $(".success-wrap").css("display", "block");
        $(".gpUserName, .gpUserPhone, .gpUserArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("margin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        if (userName !== "") {
            $(".gpUserName").hide();
        } else {
            $(".gpUserName").show();
        };
        if (userPhone !== "" && regPhone.test(userPhone)) {
            $(".gpUserPhone").hide();
        } else {
            $(".gpUserPhone").show();
        };
        if (userArea !== "") {
            $(".gpUserArea").hide();
        } else {
            $(".gpUserArea").show();
        };
    }
})
//预约成功弹出框（免费设计）
$("#fdSubmit").click(function () {
    var userName = $(".free-design form input:nth-of-type(1)").val();
    var userPhone = $(".free-design form input:nth-of-type(2)").val();
    var userArea = $(".free-design form input:nth-of-type(3)").val();
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        $(".free-design-wrap").hide();
        $(".success-wrap").css("display", "block");
        $(".fdUserName, .fdUserPhone, .fdUserArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("margin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        if (userName !== "") {
            $(".fdUserName").hide();
        } else {
            $(".fdUserName").show();
        };
        if (userPhone !== "" && regPhone.test(userPhone)) {
            $(".fdUserPhone").hide();
        } else {
            $(".fdUserPhone").show();
        };
        if (userArea !== "") {
            $(".fdUserArea").hide();
        } else {
            $(".fdUserArea").show();
        };
    }
})

//九周年表单报名弹框
$("#nySubmit").click(function () {
    var userName = $(".bg form input:nth-of-type(1)").val();
    var userPhone = $(".bg form input:nth-of-type(2)").val();
    var userArea = $(".bg form input:nth-of-type(3)").val();
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        $(".success-wrap").css("display", "block");
        $(".nyUserName, .nyUserPhone, .nyUserArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("margin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        if (userName !== "") {
            $(".nyUserName").hide();
        } else {
            $(".nyUserName").show();
        };
        if (userPhone !== "" && regPhone.test(userPhone)) {
            $(".nyUserPhone").hide();
        } else {
            $(".nyUserPhone").show();
        };
        if (userArea !== "") {
            $(".nyUserArea").hide();
        } else {
            $(".nyUserArea").show();
        };
    }
})

//点击叉叉隐藏弹出框
$(".close").click(function () {
    $(".success-wrap").fadeOut();
    $(".free-design-wrap").fadeOut();
    $(".get-price-wrap").fadeOut();
    $(".gpWarn").hide();
    $(".fdWarn").hide();
})

//免费设计弹出框
$("#free-design").click(function () {
    $(".free-design-wrap").fadeIn();
    var freeHeight = $(".free-design").height();
    var freeWidth = $(".free-design").width();
    var closeWidth = $(".close").width();
    var closeHeight = $(".close").height();
    $(".free-design").css("margin-top", -freeHeight / 2).css("margin-left", -freeWidth / 2 - 25);
    $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
})

//智能报价弹出框
$("#get-price").click(function () {
    $(".get-price-wrap").fadeIn();
    var freeHeight = $(".get-price").height();
    var freeWidth = $(".get-price").width();
    var closeWidth = $(".close").width();
    var closeHeight = $(".close").height();
    $(".get-price").css("margin-top", -freeHeight / 2).css("margin-left", -freeWidth / 2 - 25);
    $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
})

//九周年点击跳转到底部表单
$(".bg ul li img").click(function(){
    $("html,body").animate({"scrollTop":$(document).height()})
})