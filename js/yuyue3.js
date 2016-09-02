$(function () {
    $(function () {
        var height = document.documentElement.scrollHeight || document.body.scrollHeight;
        $('.only').click(function () {
            $('.y_vid').show();
            // $('.mengceng').html('<div style="height: '+height+'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')
        })
        $('.close_video').click(function () {
            $('.gongxi').hide();
            // $('.mengceng').html('');
        })
    })


    var apiUrl = "http://119.29.196.195";
    var height = document.documentElement.scrollHeight || document.body.scrollHeight;
 // 所有的数据
    function refN() {
        var getAll = apiUrl + '/tmfy_ph_add/getnu.php?pt=all';
        $.get(getAll, function (data) {
            $('#allNum').text(data.msg);
        }, 'json');
    }
    refN();
 
 
    // 验证码
    // http://119.29.196.195/tmfy_ph_add/duanxin_check.php?phone=18515221515
    $('.huoqu').click(function () {
        var ph = $.trim($('.enter_phone').val());
        if (!checkedMobile(ph)) {
                    return;
                };
        countDown(ph);

    });
 
 //一分钟倒计时  点击过 发送验证码，就把按钮disable禁用。
var seconds = 59;
var speed = 1000;
function countDown(mob) {
    $(".huoqu").css('background', 'url(img/yuyue/post.png)').attr("disabled", true);
    var timeId = setTimeout(countDown,speed);
    
    seconds--;

    if(seconds == 0){
        clearTimeout(timeId);
        seconds = 59;
        $(".huoqu").css('background', 'url(img/yuyue/shuru.png) no-repeat').attr("disabled", false);
    };
    if (seconds == 58) {
    var yzUrl = 'http://119.29.196.195/tmfy_ph_add/duanxin_check.php?phone=' + mob;
        $.get(yzUrl, function (json) {
            if (json.ret == 'error') {
                alert(json.msg);
                console.log(json.msg);
                return;
            }
            alert('已成功发送!')
        }, 'json');
    }  
};


    // 信息发送 验证码和手机号
    $('.daoyou').on('click', function () {
        var phone = $.trim($('.enter_phone').val());
        var $andri = $('.radioselect .andr');
        var $ios = $('.radioselect .ios');
        var qd = getQueryString('qd');
        var yanzheng = $.trim($('.enter_yanzheng').val());
        if (phone == '' || yanzheng == '') {
            alert('手机号和验证码填写不完整');
        } else if ($andri.hasClass('shadow')) {
            //119.29.196.195/tmfy_ph_add/phone_huafei.php?pt=ios&ph=18515221515&qd=test&key=866683
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: apiUrl + "/tmfy_ph_add/phone_huafei.php?pt=an&ph=" + phone + "&qd=" + qd + "&key=" + yanzheng,
                success: function (json) {
                    if (json.ret == 'error') { // 失败
                        alert(json.msg);
                        return;
                    }
                    refN();
                    // alert('success');
                    $('.gongxi').attr('style', 'display:block');
 
                    $('.mengceng').html('<div style="height: ' + height +
                        'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')
 
                }
            })
        } else if ($ios.hasClass('sha')) {
            var iosUrl = apiUrl + "/tmfy_ph_add/phone_huafei.php?pt=ios&ph=" + phone + "&qd=" + qd + "&key=" + yanzheng;
            if (!checkedMobile(phone)) {
                return;
            }
            $.get(iosUrl, function (json) {
                if (json.ret == 'error') {
                    alert(json.msg);
                    return;
                }
                refN();
                $('.gongxi').attr('style', 'display:block');
                $('form').hide();
                $('.mengceng').html('<div style="height: ' + height +
                    'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')
 
            }, 'json')
 
        }
 
    })
 
 
 // 验证手机号
    function checkedMobile(mobile) {
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myreg.test(mobile)) {
            alert('请填写正确的手机号码');
            return false;
        }
        return true;
    }
 // 渠道获取
    function getQueryString(qd) {
        var reg = new RegExp("(^|&)" + qd + "=([^&]*)(&|$)", "i");
        var r = decodeURIComponent(window.location.search).substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
 
    $('.yuyueXitong .andr').on('click', function () {
        $(this).addClass('shadow');
        $('.ios').removeClass('sha');
    })
    $('.yuyueXitong .ios').on('click', function () {
        $(this).addClass('sha');
        $('.andr').removeClass('shadow');
 
        // $(this).siblings().removeClass('shadow');
 
        // $(this).css('background','url(img/xitong.png)')
    })
    $('.gongxi  .close_weixin').click(function () {
        $('.gongxi').hide();
        $('.mengceng').html('');
    })
 
    $('.yuyuew .close').click(function () {
        $('.gongxi').hide();
        $('.mengceng').html('');
 
    })
})
