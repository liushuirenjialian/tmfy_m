$(function() {


    /*news slide start*/
    var cur = 0;
    var timer = null;
    var len = $('.slide ul.img li').length;
    var $li = $('.slide ul.img li');
    var $dot_li = $('.slide ul.dots li');

    function tab(cur) {
        $li.find('img').fadeOut('slow');
        $dot_li.removeClass('cur');
        $li.eq(cur).find('img').fadeIn('slow');
        $dot_li.eq(cur).addClass('cur');
        // $li.find('img').removeClass('cur');
        // $li.eq(cur).find('img').addClass('cur');
    }
    timer = setInterval(function() {
        cur++;
        cur = (cur + len) % len;
        tab(cur);
    }, 3000);



});

var toutiao_url = "http://games.hoolai.com/cms/?cat=186&json=get_category_posts&include=title&count=500";
var news_url = "http://games.hoolai.com/cms/?cat=187&json=get_category_posts&include=title,categories,date&count=500";
// var shijue_url = "http://games.hoolai.com/cms/?cat=195&json=get_category_posts&include=title,custom_fields,categories&count=500";
// var url = "http://games.hoolai.com/cms/?cat=170&json=get_category_posts&include=title&count=6";
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
 // ios版 没有连接  弹出的是ok
  // Android  有  错误
                var $ios = $('div.dl').find('a.ios');
                console.log("ios" + data.post.custom_fields.href_url);
                var custom_fields = data.post.custom_fields;
                // console.log(custom_fields.url == undefined);
                if (custom_fields.href_url != undefined) {

                    $ios.attr('href', custom_fields.href_url[0]);
                    $ios.click(function() {
                        window.location.href = custom_fields.href_url[0];
                    })
                } else {
                    console.log(custom_fields.intro != undefined);
                    if (custom_fields.intro) {
                        $ios.click(function() {
                            $('div.pop2').css('display', 'block');
                            $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            $('div.pop2').find('a.close').css({
                                'top': '-4px',
                                'right': '54px'
                            });
                            $('div.pop2').find('div.info').text('custom_fields.intro[0]');
                            // $('div.pop2').css('display', 'block');
                            $('div.pop2').css('display', 'block');
                            var d = document;
                            var oShadow = d.getElementById('shadow');
                            var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
                            oShadow.style.height = scrollHeight + 'px';
                            oShadow.style.display = 'block';
                            $('#shadow,div.pop2 .close').click(function() {
                                oShadow.style.display = 'none';
                                $("div.pop2").hide();

                            });
                        });

                    } else {

                        $ios.click(function() {
                            $('div.pop2').css('display', 'block');
                            $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            $('div.pop2').find('a.close').css({
                                'top': '-4px',
                                'right': '54px'
                            });
                            $('div.pop2').find('div.info').text('敬请期待！');
                            // $('div.pop2').css('display', 'block');
                            $('div.pop2').css('display', 'block');
                            var d = document;
                            var oShadow = d.getElementById('shadow');
                            var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
                            oShadow.style.height = scrollHeight + 'px';
                            oShadow.style.display = 'block';
                            $('#shadow,div.pop2 .close').click(function() {
                                oShadow.style.display = 'none';
                                $("div.pop2").hide();

                            });
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
                    $andr.click(function() {
                        window.location.href = custom_fields.href_url[0];
                    });
                    // window.location.href = custom_fields.href_url[0];
                } else {
                    if (custom_fields.intro!=undefined) {
                        $andr.click(function() {
                            $('div.pop2').css('display', 'block');
                            $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            $('div.pop2').find('a.close').css({
                                'top': '-4px',
                                'right': '54px'
                            });
                            // 
                            $('div.pop2').find('div.info').text(custom_fields.intro[0]);
                            // $('div.pop2').css('display', 'block');
                            $('div.pop2').css('display', 'block');
                            var d = document;
                            var oShadow = d.getElementById('shadow');
                            var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
                            oShadow.style.height = scrollHeight + 'px';
                            oShadow.style.display = 'block';
                            $('#shadow,div.pop2 .close').click(function() {
                                oShadow.style.display = 'none';
                                $("div.pop2").hide();

                            });
                        });

                    } else {
                        $andr.click(function() {
                            $('div.pop2').css('display', 'block');
                            $('div.pop2').css('background', 'url(img/pop.png) no-repeat 0 0');
                            $('div.pop2').find('a.close').css({
                                'top': '-4px',
                                'right': '54px'
                            });
                            $('div.pop2').find('div.info').text('期待！');
                            // $('div.pop2').css('display', 'block');
                            $('div.pop2').css('display', 'block');
                            var d = document;
                            var oShadow = d.getElementById('shadow');
                            var scrollHeight = d.documentElement.scrollHeight || d.body.scrollHeight;
                            oShadow.style.height = scrollHeight + 'px';
                            oShadow.style.display = 'block';
                            $('#shadow,div.pop2 .close').click(function() {
                                oShadow.style.display = 'none';
                                $("div.pop2").hide();

                            });
                        });

                    }
                }

            }
        }
    });

    // $('div.dl a.ios,div.dl a.android').click(function() {
    $('div.dl a.android').click(function() {
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
            // $('div.pop2').css('display', 'none');

            oShadow.style.display = 'block';
            oShadow.style.height = scrollHeight + 'px';
            d.getElementById("weixinMsg").style.display = 'block';

            // if ((navigator.userAgent.match(/(Android)/i))) {
            //     d.getElementById("weixinMsg").style.display = 'block';
            // }

        } else {

            if ((navigator.userAgent.match(/(Android)/i))) {
                location.href = $.trim(dataurl);
            }
        }

    })

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

    request(toutiao_url, function(err, data) { //今日头条
        if (err) {
            console.log(err);
        } else {
            var _data = data.posts;
            // console.log(_data.length);
            if (_data) {
                if (_data.length == 1) {
                    $('div.server a').text(_data[0].title);
                } else {
                    console.log('此目录文章只能发一条，现在发了' + _data.lenght + '条')
                }
            } else {
                console.log("后台没有发文章");
            }


        }
    });

    request(news_url, function(err, data) { //新闻
        if (err) {
            console.log(err);
        } else {
            var _data = data.posts;
            var news_data = getDataList(189, _data);
            var gonggao_data = getDataList(200, _data);
            var activity_data = getDataList(199, _data);
            // var newest_data = getDataList(188, _data);
            var $content = $('div.news').find('ul.content');

            // var $newest = $('div.news').find('ul.title').find('li.newest');
            var $news = $('div.news').find('ul.title').find('li.news_content');
            var $activity = $('div.news').find('ul.title').find('li.activity');
            var $gonggao = $('div.news').find('ul.title').find('li.gonggao');



            // $content.html(getNewsLis(newest_data, '【最新消息】', 188));
            $content.html(getNewsLis(news_data, '【新闻】', 189));
            setMoreTag();

            $news.click(function() {
                $news.siblings('li').removeClass('cur');
                $news.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(news_data, '【新闻】', 189));
            });
            $activity.click(function() {
                $activity.siblings('li').removeClass('cur');
                $activity.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(activity_data, '【活动】', 199));
            });
            $gonggao.click(function() {
                $gonggao.siblings('li').removeClass('cur');
                $gonggao.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(gonggao_data, '【公告】', 200));
            });

        }
    });

    // $(".touming_bg").click(function() {
    //     $('div.large_image').css('display', 'none');
    //     $(".touming_bg").html('');
    // });


});


function setMoreTag() {
    var $more = $('div.news').children('a.more');
    var $newsTitle = $('div.news').children('ul.title').children('li');
    var tag = 188;
    var $cur;
    $newsTitle.each(function() {
        if ($(this).hasClass('cur')) {
            $cur = $(this);
        }
    });

    if ($cur.hasClass('news_content')) {
        tag = 189;
    }
    if ($cur.hasClass('gonggao')) {
        tag = 200;
    }
    if ($cur.hasClass('activity')) {
        tag = 199;
    }
    $more.attr('href', 'list.html#tag=' + tag);
}

function getDate(date) {
    var _date = date.substr(0, 10);
    return _date;
}


function getNewsLis(dataList, mark, tag) {

    var lis_str = '';
    var data;
    if (dataList) {
        var data_len = dataList.length;
        if (data_len >= 3) {
            for (var i = 0; i < 3; i++) {
                data = dataList[i];
                lis_str += '<li><span class="mark fl">' + mark + '</span><a href="article.html#post_id=' + data.id + '&tag=' + tag + '">' + data.title + '</a><span class="time fr">' + getDate(data.date) + '</span></li>'
            }
        } else {
            for (var i = 0; i < data_len; i++) {
                data = dataList[i];
                lis_str += '<li><span class="mark fl">' + mark + '</span><a href="article.html#post_id=' + data.id + '&tag=' + tag + '">' + data.title + '</a><span class="time fr">' + getDate(data.date) + '</span></li>'
            }
        }
    }

    return lis_str;
}

function getDataList(cat, posts) {
    var posts_len = posts.length;
    var dataList = [];
    if (posts_len == 0) {
        return null;
    }
    for (var j = 0; j < posts_len; j++) {
        var cat_len = posts[j].categories.length;
        for (var i = cat_len - 1; i >= 0; i--) {
            if (posts[j].categories[i].id == cat) {
                dataList.push(posts[j]);
            }
        }

        // }
    }
    return dataList;
}

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


// $(function () {
//     alert(navigator.connection.type);
// })
