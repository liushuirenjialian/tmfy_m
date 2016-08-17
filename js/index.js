$(function() {
    var cur = 0;
    var shijian = null;
    var len = $('.slide ul.img li').length;
    var $li = $('.slide ul.img li');
    var $li_dot = $('.slide ul.dot li');

    function eventT(cur) {
        // body...
        $li.find('img').fadeOut('slow');
        $li_dot.removeClass('cur');
        $li.eq(cur).find('img').fadeIn('fast');
        $li_dot.eq(cur).addClass('cur');
    }
    shijian = setInterval(function() {
        cur++;
        cur = (cur + length) % len;
        eventT(cur);
    }, 1900);
    $('ul.dot li').click(function() {
        var $this = $(this);
        var xuhao = $('ul.dot li').index($this);
        // var cur;
        eventT(xuhao);
    })

    function userCL() {
        $('ul.dot').delegate('li', 'click', function() {
        });
        // userCL();
    }

    var apiUrl = "http://119.29.196.195";
    var height = document.documentElement.scrollHeight || document.body.scrollHeight;
    function refN() {
        var getAll = apiUrl + '/tmfy_ph_add/getnu.php?pt=all';
        $.get(getAll, function(data) {
            $('#allNum').text(data.msg);
        }, 'json');
    }
    refN();

    $('.daoyou').on('click', function() {
        // debugger
        var phone = $.trim($('.enter_phone').val());
        // var checked = $('input[type="radio"]:checked').val();
        var $andri = $('.radioselect .andr');
        var $ios = $('.radioselect .ios');
        if ($andri.hasClass('shadow')) {
            if (!checkedMobile(phone)) {
            return;
        }
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: apiUrl + "/tmfy_ph_add/phone.php?pt=an&ph=" + phone,
                success: function(json) {
                    if (json.ret == 'error') { // 失败
                        alert(json.msg);
                        return;
                    }
                    refN();
                    // alert('success');
                    $('.gongxi').attr('style', 'display:block');
                    $('form').hide();
                    $('.mengceng').html('<div style="height: ' + height + 'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')


                }
            })
        } else if ($ios.hasClass('sha')) {
            var iosUrl = apiUrl + "/tmfy_ph_add/phone.php?pt=ios&ph=" + phone;
            if (!checkedMobile(phone)) {
            return;
        }
            $.post(iosUrl, function(json) {
                if (json.ret == 'error') {
                    alert(json.msg);
                    return;
                }
                refN();
                $('.gongxi').attr('style', 'display:block');
                $('form').hide();
                $('.mengceng').html('<div style="height: ' + height + 'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')

            }, 'json')

        }
        else{
            alert('请选择手机系统！')
        }

    })
    function checkedMobile(mobile) {
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myreg.test(mobile)) {
            alert('请填写正确的手机号码');
            return false;
        }
        return true;
    }
    $('.yuyueXitong .andr').on('click', function() {
        $(this).addClass('shadow');
        $('.ios').removeClass('sha');
    })
    $('.yuyueXitong .ios').on('click', function() {
        $(this).addClass('sha');
        $('.andr').removeClass('shadow');

        // $(this).siblings().removeClass('shadow');

        // $(this).css('background','url(img/xitong.png)')
    })
    $('.gongxi  .close_weixin').click(function() {
        $('.gongxi').hide();
        $('.mengceng').html('');
    })
    $('.yuyue').click(function() {
        $('.yuyuew, form').attr('style', 'display:block');
        $('.mengceng').html('<div style="height: ' + height + 'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')

    })
    $('.yuyuew .close').click(function() {
        $('.yuyuew').hide();
        $('.mengceng').html('');

    })

    $('.weixin').click(function() {
        $('#weixins').attr('style', 'display:block');
        $('.mengceng').html('<div style="height: ' + height + 'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')


    })
    $('.weixin_sec .close_weixin').click(function() {
        $('.weixin_sec').hide();
        $('.mengceng').html('');
    })

    $('.qq').click(function() {
        $('#wanjia').attr('style', 'display:block');
        $('.mengceng').html('<div style="height: ' + height + 'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')
    })
    $('#wanjia .close_weixin').click(function() {
        $('.wanjia').hide();
        $('.mengceng').html('');
    })


    $('.iosdown,.andrdown').click(function() {
        $('.ios_swc').attr('style', 'display:block');
        $('.mengceng').html('<div style="height: ' + height + 'px;opacity:0.6;width:100%;position:absolute;top:-50px;left:0px;background:rgb(0,0,0);"></div>')


    })
    $('.ios_swc .close_weixin').click(function() {
        $('.ios_swc').hide();
        $('.mengceng').html('');
    })
})
