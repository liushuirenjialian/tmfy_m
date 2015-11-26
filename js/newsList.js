function request(url, cal) {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        success: function(data) {
            cal(false, data);
        },
        error: function(data) {
            cal(data);
        }
    });
}

function getArgs(strs) {
    var _strs = strs.length > 0 ? strs.substring(1) : '',
        args = {},
        items = _strs.split('&'),
        len = items.length,
        mame = null,
        value = null,
        item = [];
    if (_strs.length == 0) {
        console.log('没有要读取的字符串');
        return;
    }
    for (var i = 0; i < len; i++) {
        item = items[i].split("=");
        name = item[0];
        value = item[1];
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        args[name] = value;
    }
    return args;
}

function getDate(date) {
    var _date = date.substr(0, 10);
    return _date;
}

    var index = {};
function getLis(dataList, mark, tag) {

    var lis_str = '';
    var data, date;
    var total = dataList.length;
    var rows_once = 5;
    var p = -1;

    if (dataList) {
        var data_len = dataList.length;
        if(data_len > rows_once) {
            $('.wrap_inner a.more').css('display','block');
        }
        for (var i = 0; i < data_len; i++) {
            data = dataList[i];

            if(i % rows_once == 0) {
                p++;
            }
            date = getDate(data.date);
            lis_str += '<li class="page' + p + '"><span class="mark">' + mark + '</span><a href="article.html#post_id=' + data.id + '&tag=' + tag + '">' + data.title + '</a><span class="time">' + date + '</span></li>';
        }
        index.countPage = p;
        index.page = 0;
        // $('div.content ul.content')
    }

    return lis_str;
}

function getMark(tag) {
    var mark = '';
    // if (tag == 188) {
    //     mark = '【最新消息】';
    // }
    if (tag == 189) {
        mark = '【新闻】';
    }
    if (tag == 199) {
        mark = '【活动】';
    }
    if (tag == 200) {
        mark = '【公告】';
    }
    return mark;
}


$(function() {

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


    var str = window.location.hash.substr(0);
    var args = getArgs(str);
    var tag = args['tag'];
    console.log(tag);
    // console.log(tag == 188)
    if (tag == 188 || tag == 189 || tag == 199 || tag == 200) { //nav当前页样式
        var $li = $('div.nav ul').children('li');
        $li.each(function() {
            if ($(this).children('a').hasClass('news')) {
                $(this).addClass('cur');
            }
        });
    }
    // if (tag == 191 || tag == 192 || tag == 193 || tag == 194) {
    //     $('div.nav ul').delegate('a.news', 'click', function() {
    //         window.location.reload();
    //     });
    // }

    var $head = $('div.wrap_inner').find('h2.title');
    // if (tag == 188) {
    //     $head.css('background-image', 'url(img/title/newest.png)')
    // }
    if (tag == 189) {
        $head.css('background-image', 'url(img/title/news.png)')
    }
    if (tag == 199) {
        $head.css('background-image', 'url(img/title/activity.png)')
    }
    if (tag == 200) {
        $head.css('background-image', 'url(img/title/gonggao.png)')
    }
    if (tag == 191) {
        $head.css('background-image', 'url(img/title/jieshao.png)')
    }
    if (tag == 192) {
        $head.css('background-image', 'url(img/title/zhuangbei.png)')
    }
    if (tag == 201) {
        $head.css('background-image', 'url(img/title/fuben.png)')
    }
    // if (tag == 194) {
    //     $head.css('background-image', 'url(img/title/yinyuan.png)')
    // }



    var url = "http://games.hoolai.com/cms/?cat=" + tag + "&json=get_category_posts&include=title,date&count=500";
    var mark = getMark(tag);
    request(url, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var _data = data.posts;

            var li_str = getLis(_data, mark, tag);
            $('div.wrap_inner').find('ul.content').html(li_str);

            $('div.wrap_inner ul.content').find('li').hide();
            $('li.page0').show();
        }
    });//request end
    $('div.wrap_inner a.more').click(function () {
        index.page ++;
        $('.page' + index.page).show();
        if(index.page == index.countPage) {
            $('div.wrap_inner a.more').hide();
        }
    });//click more end 


});
