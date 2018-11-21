
// // 下拉下载更多数据
//     var AjaxIndex = 0;
//     $(window).scroll(function(){
//         if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//             $(".more-news").show();
//             // Ajax
//             var url = '';
//             $.ajax({
//                 url:url,
//                 type:'GET',
//                 success:function(){
//                     // console.log("success!");
//                     AjaxIndex++;
//                     $(".more-news").hide();
//                     $(".learn ul:nth-of-type(2)").append('<li><a class="new"><h3>123</h3></a><li>');
//                 },
//                 fail:function(){
//                     console.log("fail!");
//                 }
//             })
//         }
//     });

$("header button").click(function () {
    if ($(window).width() >= 750) {
        var dialogNav = $(".dialog-nav").width() / 2;
        $(".dialog-nav").slideToggle().css("left", "50%").css("margin-left", -dialogNav);
    } else {
        $(".dialog-nav").slideToggle();
    }
})

$(".title button").click(function () {
    if ($(window).width() >= 750) {
        var dialogNav = $(".dialog-nav").width() / 2;
        $(".dialog-nav").slideToggle().css({
            "left": "50%",
            "margin-left": -dialogNav
        });
    } else {
        $(".dialog-nav").slideToggle();
        $(".dialog-nav ul").css({
            "margin-top": "6px"
        })
    }
})

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

// 隐藏dialog
$(".dialog").click(function (event) {
    if (event.target.nodeName === 'DIV') {
        $(this).fadeOut();
    }
})
//dialog弹框选择
$(".dialog .area ul:nth-of-type(1) li a").click(function () {
    $(".dialog .area ul:nth-of-type(1) li a").removeClass('active');
    $(this).addClass('active');
    console.log($(this));
})
// dialog地区切换
$(".dialog .area ul:nth-of-type(1) li:nth-of-type(1) a").click(function () {
    $(".dialog .area ul").removeClass('first');
    $(".dialog .area ul:nth-of-type(2)").addClass('first');
})
$(".dialog .area ul:nth-of-type(1) li:nth-of-type(2) a").click(function () {
    $(".dialog .area ul").removeClass('first');
    $(".dialog .area ul:nth-of-type(3)").addClass('first');
})
$(".dialog .area ul:nth-of-type(1) li:nth-of-type(3) a").click(function () {
    $(".dialog .area ul").removeClass('first');
    $(".dialog .area ul:nth-of-type(4)").addClass('first');
})
$(".dialog .area ul:nth-of-type(1) li:nth-of-type(4) a").click(function () {
    $(".dialog .area ul").removeClass('first');
    $(".dialog .area ul:nth-of-type(5)").addClass('first');
})
$(".dialog .area ul:nth-of-type(1) li:nth-of-type(5) a").click(function () {
    $(".dialog .area ul").removeClass('first');
    $(".dialog .area ul:nth-of-type(6)").addClass('first');
})
//swiper列表切换
$(".case ul:nth-of-type(1) li").click(function () {
    var liIndex = $(this).index();
    // console.log(liIndex);
    if (liIndex === 0) {
        $(".case ul:nth-of-type(1) li a").css("color", "#000000");
        $(this).find('a').css("color", "green");
        $(".none").removeClass("show");
        // $(".case ul:nth-of-type(2)").addClass("show");
        $(".none").eq(0).addClass("show");
        var mySwiper = new Swiper('.swiper2', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 40,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    } else if (liIndex === 1) {
        $(".case ul:nth-of-type(1) li a").css("color", "#000000");
        $(this).find('a').css("color", "green");
        $(".none").removeClass("show");
        $(".none").eq(1).addClass("show");
        var mySwiper = new Swiper('.swiper3', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 40,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    } else if (liIndex === 2) {
        $(".case ul:nth-of-type(1) li a").css("color", "#000000");
        $(this).find('a').css("color", "green");
        $(".none").removeClass("show");
        $(".none").eq(2).addClass("show");
        var mySwiper = new Swiper('.swiper4', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 40,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    } else if (liIndex === 3) {
        $(".case ul:nth-of-type(1) li a").css("color", "#000000");
        $(this).find('a').css("color", "green");
        $(".none").removeClass("show");
        $(".none").eq(3).addClass("show");
        var mySwiper = new Swiper('.swiper5', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 40,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    } else if (liIndex === 4) {
        $(".case ul:nth-of-type(1) li a").css("color", "#000000");
        $(this).find('a').css("color", "green");
        $(".none").removeClass("show");
        $(".none").eq(4).addClass("show");
        var mySwiper = new Swiper('.swiper6', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 40,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    } else if (liIndex === 5) {
        $(".case ul:nth-of-type(1) li a").css("color", "#000000");
        $(this).find('a').css("color", "green");
        $(".none").removeClass("show");
        $(".none").eq(5).addClass("show");
        var mySwiper = new Swiper('.swiper7', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 40,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }
})
//预约成功弹出框
$(".yuyue").click(function () {
    var userName = $(".index-form div:nth-of-type(1) input").val();
    var userPhone = $(".index-form div:nth-of-type(2) input").val();
    var userArea = $(".index-form div:nth-of-type(3) input").val();
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        var mj = parseFloat(userArea);
        //-----ajax start
        //来源
        var source = window.location.href;
        var AjaxUrl = SCOPE.loadAjax_url;
        var category_val = 2; //免费报价
        //这里请求接口
        $.ajax({
            url: AjaxUrl + "?" + new Date().getTime(),
            // data: { name:1},
            data: { name: userName, tel: userPhone, area: mj, source: source, category_val: category_val },
            type: 'post',
            success: function (res) {
                if (res == 'SUCC') {
                    // $("#name").val('');
                    // $("#tel").val('');
                    // alert('申请成功');
                }
            }
        });
        //-----ajax end
        $(".success-wrap").css("display", "block");
        $(".userName, .userPhone, .userArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("margin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".message p:nth-of-type(1) span").text($(".index-form div:nth-of-type(1) input").val());
        $(".message p:nth-of-type(2) span").text($(".index-form div:nth-of-type(2) input").val());
        $(".message p:nth-of-type(3) span").text($(".index-form div:nth-of-type(3) input").val());
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
    var freeHeight = $(".get-price").height();
    var freeWidth = $(".get-price").width();
    var count = 0;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        var mj = parseFloat(userArea);
        //-----ajax start
        //来源
        var source = window.location.href;
        var AjaxUrl = SCOPE.loadAjax_url;
        var category_val = 2; //免费报价
        //这里请求接口
        $.ajax({
            url: AjaxUrl + "?" + new Date().getTime(),
            // data: { name:1},
            data: { name: userName, tel: userPhone, area: mj, source: source, category_val: category_val },
            type: 'post',
            success: function (res) {
                if (res == 'SUCC') {
                    $(".get-price form input:nth-of-type(1)").val('');
                    $(".get-price form input:nth-of-type(2)").val('');
                    $(".get-price form input:nth-of-type(3)").val('');
                    // $("#tel").val('');
                    // alert('申请成功');
                }
            }
        });
        //-----ajax end

        $(".get-price-wrap").hide();
        $(".success-wrap").css("display", "block");
        $(".gpUserName, .gpUserPhone, .gpUserArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("myuyueargin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".message p:nth-of-type(1) span").text($(".get-price form input:nth-of-type(1)").val());
        $(".message p:nth-of-type(2) span").text($(".get-price form input:nth-of-type(2)").val());
        $(".message p:nth-of-type(3) span").text($(".get-price form input:nth-of-type(3)").val());
        $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        if (userName !== "") {
            $(".gpUserName").hide();
            count = 0;
        } else {
            $(".gpUserName").show();
            count += 16;
            $(".get-price").css("margin-top", -freeHeight / 2 - count).css("margin-left", -freeWidth / 2 - 25);
        };
        if (userPhone !== "" && regPhone.test(userPhone)) {
            $(".gpUserPhone").hide();
            count = 0;
        } else {
            $(".gpUserPhone").show();
            count += 16;
            $(".get-price").css("margin-top", -freeHeight / 2 - count).css("margin-left", -freeWidth / 2 - 25);
        };
        if (userArea !== "") {
            $(".gpUserArea").hide();
            count = 0;
        } else {
            $(".gpUserArea").show();
            count += 16;
            $(".get-price").css("margin-top", -freeHeight / 2 - count).css("margin-left", -freeWidth / 2 - 25);
        };
    }
})
//预约成功弹出框（免费设计）
$("#fdSubmit").click(function () {
    var userName = $(".free-design form input:nth-of-type(1)").val();
    var userPhone = $(".free-design form input:nth-of-type(2)").val();
    var userArea = $(".free-design form input:nth-of-type(3)").val();
    var freeHeight = $(".free-design").height();
    var freeWidth = $(".free-design").width();
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    var count = 0;
    if (userName !== "" && (userPhone !== "" && regPhone.test(userPhone)) && userArea !== "") {
        var mj = parseFloat(userArea);
        //-----ajax start
        //来源
        var source = window.location.href;
        var AjaxUrl = SCOPE.loadAjax_url;
        var category_val = 1; //免费设计
        //这里请求接口
        $.ajax({
            url: AjaxUrl + "?" + new Date().getTime(),
            // data: { name:1},
            data: { name: userName, tel: userPhone, area: mj, source: source, category_val: category_val },
            type: 'post',
            success: function (res) {
                if (res == 'SUCC') {

                    $(".free-design form input:nth-of-type(1)").val('');
                    $(".free-design form input:nth-of-type(2)").val('');
                    $(".free-design form input:nth-of-type(3)").val('');
                    // alert('申请成功');
                }
            }
        });
        //-----ajax end

        $(".free-design-wrap").hide();
        $(".success-wrap").css("display", "block");
        $(".fdUserName, .fdUserPhone, .fdUserArea").hide();
        var yuyueWidth = $(".success").width();
        var yuyueHeight = $(".success").height();
        var footerHeight = $(".footer").height();
        var closeWidth = $(".close").width();
        var closeHeight = $(".close").height();
        $(".success").css("margin-left", -yuyueWidth / 2 - 5).css("margin-top", -yuyueHeight / 2 - footerHeight / 2);
        $(".message p:nth-of-type(1) span").text($(".free-design form input:nth-of-type(1)").val());
        $(".message p:nth-of-type(2) span").text($(".free-design form input:nth-of-type(2)").val());
        $(".message p:nth-of-type(3) span").text($(".free-design form input:nth-of-type(3)").val());
        $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
    } else {
        if (userName !== "") {
            $(".fdUserName").hide();
            count = 0;
        } else {
            $(".fdUserName").show();
            count += 16;
            $(".free-design").css("margin-top", -freeHeight / 2 - count).css("margin-left", -freeWidth / 2 - 25);
        };
        if (userPhone !== "" && regPhone.test(userPhone)) {
            $(".fdUserPhone").hide();
            count = 0;
        } else {
            $(".fdUserPhone").show();
            count += 16;
            $(".free-design").css("margin-top", -freeHeight / 2 - count).css("margin-left", -freeWidth / 2 - 25);
        };
        if (userArea !== "") {
            $(".fdUserArea").hide();
            count = 0;
        } else {
            $(".fdUserArea").show();
            count += 16;
            $(".free-design").css("margin-top", -freeHeight / 2 - count).css("margin-left", -freeWidth / 2 - 25);
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
        $(".message p:nth-of-type(1) span").text($(".bg form input:nth-of-type(1)").val());
        $(".message p:nth-of-type(2) span").text($(".bg form input:nth-of-type(2)").val());
        $(".message p:nth-of-type(3) span").text($(".bg form input:nth-of-type(3)").val());
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
$("#free-design,#bottom-get-price,#ask-online,.person button").click(function () {
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
$(".bg ul li img").click(function () {
    $("html,body").animate({ "scrollTop": $(document).height() })
})

// 设计师预约
$(".designer ul li div p:nth-of-type(1) button").click(function () {
    $(".free-design-wrap").fadeIn();
    var freeHeight = $(".free-design").height();
    var freeWidth = $(".free-design").width();
    var closeWidth = $(".close").width();
    var closeHeight = $(".close").height();
    $(".free-design").css("margin-top", -freeHeight / 2).css("margin-left", -freeWidth / 2 - 25);
    $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
})

// 在线工地预约
$(".intro .top button").click(function () {
    $(".free-design-wrap").fadeIn();
    var freeHeight = $(".free-design").height();
    var freeWidth = $(".free-design").width();
    var closeWidth = $(".close").width();
    var closeHeight = $(".close").height();
    $(".free-design").css("margin-top", -freeHeight / 2).css("margin-left", -freeWidth / 2 - 25);
    $(".close").css("margin-right", -closeWidth / 2).css("margin-top", -closeHeight / 2);
})
// 切换新闻
$(".learn ul:nth-of-type(1) li:nth-of-type(1)").click(function () {
    $(".learn ul:nth-of-type(2)").fadeIn();
    $(".learn ul:nth-of-type(3)").css("display", "none");
    $(".learn ul:nth-of-type(4)").css("display", "none");
    $(".learn ul:nth-of-type(5)").css("display", "none");
    $('.learn button').addClass('hd');
    $('.index-findMore').removeClass('hd');
    $('.learn ul:nth-of-type(1) li').removeClass('active')
    $(this).addClass('active')
})
$(".learn ul:nth-of-type(1) li:nth-of-type(2)").click(function () {
    $(".learn ul:nth-of-type(2)").css("display", "none");
    $(".learn ul:nth-of-type(3)").fadeIn();
    $(".learn ul:nth-of-type(4)").css("display", "none");
    $(".learn ul:nth-of-type(5)").css("display", "none");
    $('.learn button').addClass('hd');
    $('.index-findMore2').removeClass('hd');
    $('.learn ul:nth-of-type(1) li').removeClass('active')
    $(this).addClass('active')
})
$(".learn ul:nth-of-type(1) li:nth-of-type(3)").click(function () {
    $(".learn ul:nth-of-type(2)").css("display", "none");
    $(".learn ul:nth-of-type(3)").css("display", "none");
    $(".learn ul:nth-of-type(4)").fadeIn();
    $(".learn ul:nth-of-type(5)").css("display", "none");
    $('.learn button').addClass('hd');
    $('.index-findMore3').removeClass('hd');
    $('.learn ul:nth-of-type(1) li').removeClass('active')
    $(this).addClass('active')
})
$(".learn ul:nth-of-type(1) li:nth-of-type(4)").click(function () {
    $(".learn ul:nth-of-type(2)").css("display", "none");
    $(".learn ul:nth-of-type(3)").css("display", "none");
    $(".learn ul:nth-of-type(4)").css("display", "none");
    $(".learn ul:nth-of-type(5)").fadeIn();
    $('.learn button').addClass('hd');
    $('.index-findMore4').removeClass('hd');
    $('.learn ul:nth-of-type(1) li').removeClass('active')
    $(this).addClass('active')
})
// 设计师作品和信息切换
$(".toggle_button button:nth-of-type(1)").click(function () {
    $(".toggle_button button").removeClass("toggle_active");
    $(this).addClass("toggle_active");
    $(".case").fadeIn();
    $(".infor").hide();
})
$(".toggle_button button:nth-of-type(2)").click(function () {
    $(".toggle_button button").removeClass("toggle_active");
    $(this).addClass("toggle_active");
    $(".case").hide();
    $(".infor").fadeIn();
})

// 点击加载更多
var numLi = 0;
var numLi2 = 0;
var numLi3 = 0;
var numLi4 = 0;
$(".index-findMore").click(function () {
    numLi++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { category_id: 1, page: numLi },
        type: 'post',
        success: function (res) {
            if(res == 'NONE'){
                // alert('123');
                $(".index-findMore").html("人家也是有底线的");
            }else{
                $('#ul-1').append(res);
            }

        }
    });
    //-----ajax end

    
})
$(".index-findMore2").click(function () {
    numLi2++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { category_id: 2, page: numLi2 },
        type: 'post',
        success: function (res) {
            if (res == 'NONE') {
                // alert('123');
                $(".index-findMore2").html("人家也是有底线的");
            } else {
                $('#ul-2').append(res);
            }

        }
    });
    //-----ajax end
})
$(".index-findMore3").click(function () {
    numLi3++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { category_id: 3, page: numLi3 },
        type: 'post',
        success: function (res) {
            if (res == 'NONE') {
                // alert('123');
                $(".index-findMore3").html("人家也是有底线的");
            } else {
                $('#ul-3').append(res);
            }

        }
    });
    //-----ajax end
})
$(".index-findMore4").click(function () {
    numLi4++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { category_id: 4, page: numLi4 },
        type: 'post',
        success: function (res) {
            if (res == 'NONE') {
                // alert('124');
                $(".index-findMore4").html("人家也是有底线的");
            } else {
                $('#ul-4').append(res);
            }

        }
    });
    //-----ajax end
})
// $(".index-findMore4").click(function () {
//     numLi++;
//     $('#ul-4').append('<li>123</li>');
//     $('.learn button').addClass('hd');
//     $(this).removeClass('hd');
// })


// 案例列表 加载更多
var anliNum = 0;
$("#AnlifindMore").click(function () {
    anliNum++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    var source = window.location.href;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { page: anliNum, source: source },
        type: 'post',
        success: function (res) {
            if (res == 'NONE') {
                // alert('124');
                $("#AnlifindMore").html("人家也是有底线的");
            } else {
                // alert(res);
                $('#caseList').append(res);
            }

        }
    });
    //-----ajax end
})
// 设计师列表加载更多
var shejiNum = 0;
$("#ShejifindMore").click(function () {
    shejiNum++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { page: shejiNum},
        type: 'post',
        success: function (res) {
            if (res == 'NONE') {
                // alert('124');
                $("#ShejifindMore").html("人家也是有底线的");
            } else {
                // alert(res);
                $('#shejiList').append(res);
            }

        }
    });
    //-----ajax end
})

// 工地列表加载更多
var GdNum = 0;
$("#GdfindMore").click(function () {
    GdNum++;
    var AjaxUrl = INDEX_SCOPE.loadAjax_url;
    //这里请求接口
    $.ajax({
        url: AjaxUrl + "?" + new Date().getTime(),
        // data: { name:1},
        data: { page: GdNum },
        type: 'post',
        success: function (res) {
            if (res == 'NONE') {
                // alert('124');
                $("#GdfindMore").html("人家也是有底线的");
            } else {
                // alert(res);
                $('#GdList').append(res);
            }

        }
    });
    //-----ajax end
})