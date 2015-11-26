function request(url) {
    var deferred = $.Deferred();
    $.ajax({
        url: url,
        type: "POST",
        dataType: "JSONP",
        success: function(data, status, xhr) {
            deferred.notify("fetching");
            if (data) {
                deferred.resolve(data.post);
            } else {
                deferred.reject("nothing got");
            }
        },
        error: function(xhr, errorType, error) {
            // console.log(error);
        }
    });
    return deferred;
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

    var content_img = $('div.content div img');
    content_img.each(function() {
        $this = $(this);
        console.log($this.css('width') + 'aa' + $this.css('height'));
    })


    var hash = window.location.hash;
    var args = getArgs(hash);

    var tag = args['tag'];
    var $head = $('div.wrap_inner').find('h2.title');

    // if (tag == 188) {
    //     $head.css('background-image', 'url(img/title/newest.png)')
    // }
    if (tag == 189) {
        // $head.css('background-color','red')
        $head.css('background-image', 'url(img/title/news.png)')
    }
    if (tag == 199) {
        $head.css('background-image', 'url(img/title/activity.png)')
    }
    if (tag == 200) {
        $head.css('background-image', 'url(img/title/gonggao.png)')
    }
    if (tag == 186) {
        $head.css('background-image', 'url(img/title/toutiao.png)')
    }
    if (tag == 191) {
        $head.css('background-image', 'url(img/title/jieshao.png)')
    }
    if (tag == 201) {
        $head.css('background-image', 'url(img/title/fuben.png)')
    }
    // if (tag == 18) {
    //     $head.css('background-image', 'url(img/title/toutiao.png)')
    // }

    var post_id = args['post_id'];

    if (post_id == 5419) {
        $head.css('background-image', 'url(img/title/richang.png)')
    }
    if (post_id == 5422) {
        $head.css('background-image', 'url(img/title/zhuangbei.png)')
    }
    if (post_id == 5430) {
        $head.css('background-image', 'url(img/title/fabao.png)')
    }
    if (post_id == 5428) {
        $head.css('background-image', 'url(img/title/yuyi.png)')
    }
    if (post_id == 5426) {
        $head.css('background-image', 'url(img/title/zuoji.png)')
    }
    if (post_id == 5424) {
        $head.css('background-image', 'url(img/title/chongwu.png)')
    }



    // console.log(args);
    // if (args['tag'] == 186) { //新闻资讯href
    //     $('div.nav').children('ul').children('li').find('a.news').attr('href', 'newsList.html#188');
    // } else {
    //     $('div.nav').children('ul').children('li').find('a.news').attr('href', 'newsList.html#' + args['tag']);
    // }

    var url = 'http://games.hoolai.com/cms/?post_id=' + post_id + '&json=get_post&include=title,content,author,date';
    console.log(url);
    // request(url, function(err, data) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // console.log(data.title)
    //         $('div.content').children('h5.time').text('作者：' + data.post.author.name + ' 发布时间：' + data.post.date);
    //         $('div.content').children('h1.title').text(data.post.title);
    //         $('div.content').children('div').html(data.post.content);
    //     }
    // });
    var promise = request(url);
    promise.then(function(data) {
        if (data) {
            $('div.content').children('h5.time').text('作者：' + data.author.name + ' 发布时间：' + data.date);
            $('div.content').children('h1.head').text(data.title);
            $('div.content').children('div.news_content').html(data.content);

            /*start   图片宽度控制在900px以内，小于900不处理，大于900等比例压缩*/
            var images = $('div.content div img');
            // console.log('img:' + images)
            var cur_width = 550;
            images.each(function() {
                    // console.log("zhi")
                    if (images) {
                        var width = parseInt($(this).css('width'));
                        var height = parseInt($(this).height());
                        console.log('width:' + width + '' + 'height:' + height)
                        console.log(width > cur_width)
                        if (width > cur_width) {
                            var cur_height = height / width * cur_width;
                            $(this).width(cur_width);
                            $(this).height(cur_height);
                            console.log('width:' + $(this).css('width') + '' + 'height:' + $(this).height())
                        };
                    }
                })
                /*end      图片宽度控制在900px以内，小于900不处理，大于900等比例压缩*/
                /*start    图片居中居左居右处理*/
            $('.content img').parent().wrap('<div class="pic"></div>')

            var $pics = $('div.content').find('div.pic');

            $pics.each(function() {
                    var $this = $(this);
                    var $img = $this.find('img');
                    if ($img.hasClass('aligncenter')) {
                        $this.css('text-align', 'center');
                    }
                    if ($img.hasClass('alignleft')) {
                        $this.css('text-align', 'left');
                    }
                    if ($img.hasClass('alignright')) {
                        $this.css('text-align', 'right');
                    }
                    if ($img.hasClass('alignnone')) {
                        $this.css('text-align', 'center');
                    }
                })
                /*end        图片居中居左居右处理*/
        }

    });
    //  console.log($('div.content').css('height'))
    //  var wrap_h = parseInt($('div.wrap_inner').css('height')) + 542;
    // $('div.wrap_outer').css('height',wrap_h+'px');






});
