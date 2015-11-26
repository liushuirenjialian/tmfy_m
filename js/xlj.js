$(function() {
    var cur = 0;
    var timer = null;
    var len = $('.slide ul.img li').length;
    var $li = $('.slide ul.img li');
    // var $dot_li = $('.slide ul.dots li');

    function tab(cur) {
        $li.find('img').fadeOut('slow');
        // $dot_li.removeClass('cur');
        $li.eq(cur).find('img').fadeIn('slow');
        // $dot_li.eq(cur).addClass('cur');
        // $li.find('img').removeClass('cur');
        // $li.eq(cur).find('img').addClass('cur');
    }
    timer = setInterval(function() {
        cur++;
        cur = (cur + len) % len;
        tab(cur);
    }, 3000);
    $('a.gift').click(function() {
        $('div.pop').css('display', 'block');
        $(".touming_bg").html('<div id="pop" style="height: 1770px; width: 100%; opacity: 0.6; z-index: 99; position: absolute; top: -477px; left: 0; background: rgb(0, 0, 0);"></div>');
    });
    $('div.pop a.close').click(function() {
        $('div.pop').css('display', 'none');
        $('.touming_bg').html('');
    })
    $(".touming_bg").click(function() {
        $('div.pop').css('display', 'none');
        $(".touming_bg").html('');
    });

    $('ul.nav li.weixin').click(function() { //nav栏点击微信按钮弹窗
        $('div.weixin_pop').css('display', 'block');

        var d = document;
        var oShadow = d.getElementById('shadow');
        var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
        oShadow.style.height = scrollHeight + 'px';
        oShadow.style.display = 'block';
        $('#shadow,div.weixin_pop .close').click(function() {
            oShadow.style.display = 'none';
            $("div.weixin_pop").hide();

        });
    }); //end weixin_pop

    // $('ul.nav li.weibo').click(function() { //nav栏点击微博按钮弹窗
    //     $('div.weibo_pop').css('display', 'block');

    //     var d = document;
    //     var oShadow = d.getElementById('shadow');
    //     var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
    //     oShadow.style.height = scrollHeight + 'px';
    //     oShadow.style.display = 'block';
    //     $('#shadow,div.weibo_pop .close').click(function() {
    //         oShadow.style.display = 'none';
    //         $("div.weibo_pop").hide();

    //     });
    // }); //end weibo_pop

    $('ul.nav li.qq').click(function() {
        $('div.qq_pop').css('display', 'block');

        var d = document;
        var oShadow = d.getElementById('shadow');
        var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
        oShadow.style.height = scrollHeight + 'px';
        oShadow.style.display = 'block';
        $('#shadow,div.qq_pop .close').click(function() {
            oShadow.style.display = 'none';
            $("div.qq_pop").hide();

        });
    }); //end qq_pop

    $('div.dl a.ios,div.dl a.android').click(function() {
        var dataurl = $(this).attr('dataurl');
        var d = document;
        console.log(dataurl)
        var useragent = window.navigator.userAgent.toLowerCase();
        var oShadow = d.getElementById('shadow');
        var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
        $('#shadow,#weixinMsg .close').click(function() {
            oShadow.style.display = 'none';
            $("#weixinMsg").hide();

        });
        if (useragent.indexOf('micromessenger') >= 0) {
            oShadow.style.height = scrollHeight + 'px';
            oShadow.style.display = 'block';
            d.getElementById("weixinMsg").style.display = 'block';
        } else {

            if ((navigator.userAgent.match(/(Android)/i))) {
                location.href = $.trim(dataurl);
            }
        }
    })

});

function request(url, cal) {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        success: function(resp) {
            cal(false, resp);
        },
        error: function(resp) {
            cal(resp)
        }
    });
}
$(function() {
    var android_url = "http://games.hoolai.com/cms/?post_id=6292&json=get_post&include=title,custom_fields";
    var ios_url = "http://games.hoolai.com/cms/?post_id=6295&json=get_post&include=title,custom_fields";
    request(ios_url, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            if (data.post.custom_fields != {}) {
                // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                // var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;

                var $ios = $('div.dl').find('a.ios');
                console.log(data.post.custom_fields);
                var custom_fields = data.post.custom_fields;
                // console.log(custom_fields.url == undefined);
                if (custom_fields.href_url != undefined) {

                    $ios.attr('href', custom_fields.href_url[0]);
                } else {
                    if (custom_fields.intro != undefined) {
                        // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                        // var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
                        $ios.click(function() {
                            // $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            // $('div.pop2').find('a.close').css({'top': '-4px','right': '54px'});
                            $('div.pop2').find('div.info').text(custom_fields.intro[0]);
                            $('div.pop2').css('display', 'block');
                            $(".touming_bg").html('<div id="pop" style="height: 1770px; width: 100%; opacity: 0.6; z-index: 99; position: absolute; top: -477px; left: 0; background: rgb(0, 0, 0);"></div>');
                        });
                        $('div.pop2 a.close').click(function() {
                            $('div.pop2').css('display', 'none');
                            $('.touming_bg').html('');
                        })
                        $(".touming_bg").click(function() {
                            $('div.pop2').css('display', 'none');
                            $(".touming_bg").html('');
                        });
                    } else {
                        // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                        // var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
                        $ios.click(function() {
                            // $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            // $('div.pop2').find('a.close').css({'top': '-4px','right': '54px'});
                            $('div.pop2').find('div.info').text('敬请期待！');
                            $('div.pop2').css('display', 'block');
                            $(".touming_bg").html('<div id="pop" style="height: 1770px; width: 100%; opacity: 0.6; z-index: 99; position: absolute; top: -477px; left: 0; background: rgb(0, 0, 0);"></div>');
                        });
                        $('div.pop2 a.close').click(function() {
                            $('div.pop2').css('display', 'none');
                            $('.touming_bg').html('');
                        })
                        $(".touming_bg").click(function() {
                            $('div.pop2').css('display', 'none');
                            $(".touming_bg").html('');
                        });

                    }
                }
               
            }

        }
    });
    request(android_url, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            if (data.post.custom_fields != {}) {

                var $andr = $('div.dl').find('a.android');
                console.log(data.post.custom_fields);
                var custom_fields = data.post.custom_fields;
                console.log(custom_fields.url == undefined);
                if (custom_fields.href_url != undefined) {

                    $andr.attr('href', custom_fields.href_url[0]);
                } else {
                    if (custom_fields.intro != undefined) {
                        // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                        // var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
                        $andr.click(function() {
                            // $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            // $('div.pop2').find('a.close').css({'top': '-4px','right': '54px'});
                            $('div.pop2').find('div.info').text(custom_fields.intro[0]);
                            $('div.pop2').css('display', 'block');
                            $(".touming_bg").html('<div id="pop" style="height: 1770px; width: 100%; opacity: 0.6; z-index: 99; position: absolute; top: -477px; left: 0; background: rgb(0, 0, 0);"></div>');
                        });
                        $('div.pop2 a.close').click(function() {
                            $('div.pop2').css('display', 'none');
                            $('.touming_bg').html('');
                        })
                        $(".touming_bg").click(function() {
                            $('div.pop2').css('display', 'none');
                            $(".touming_bg").html('');
                        });
                    } else {
                        // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                        // var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
                        $andr.click(function() {
                            // $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            // $('div.pop2').find('a.close').css({'top': '-4px','right': '54px'});
                            $('div.pop2').find('div.info').text("敬请期待！");
                            $('div.pop2').css('display', 'block');
                            $(".touming_bg").html('<div id="pop" style="height: 1770px; width: 100%; opacity: 0.6; z-index: 99; position: absolute; top: -477px; left: 0; background: rgb(0, 0, 0);"></div>');
                        });
                        $('div.pop2 a.close').click(function() {
                            $('div.pop2').css('display', 'none');
                            $('.touming_bg').html('');
                        })
                        $(".touming_bg").click(function() {
                            $('div.pop2').css('display', 'none');
                            $(".touming_bg").html('');
                        });

                    }
                }
                
            }
        }
    });
});
