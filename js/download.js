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

                var $ios = $('div.ios').find('a.btn');
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

                var $andr = $('div.android').find('a.btn');
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


    if ((navigator.userAgent.match(/(Android)/i))) {

        location.replace("http://zchlaccount.capstones.cn/device/forcecoldupdate?did=hoolai");

    }
    if ((navigator.userAgent.match(/(iPhone|iPod|ios|iOS|iPad)/i))) {
        location.replace("https://itunes.apple.com/cn/app/fen-tian-zhi-nu/id1021183829?mt=8")
    }

})
window.onload = function() {



    $('a.ios_btn,a.android_btn').click(function() {
        var $this = $(this);
        var dataurl = $(this).attr('dataurl');
        var d = document;
        // console.log(dataurl)
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
        }
        // else {

        //     if ($this.hasClass('ios_btn')) {
        //         location.href = 'http://www.css88.com';
        //     }
        //     if($this.hasClass("android_btn")) {
        //         location.href = 'http://www.baidu.com';
        //     }
        // }

    }); //click end

    // $('a.ios_btn,a.android_btn').click(function(){
    //    document.getElementById("weixinMsg").style.display = 'block';
    // })





}
