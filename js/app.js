/**
 * Created by Neo on 16/8/18.
 */
function getJsTicket(){
    var url = "http://120.27.45.152/hjagent/hj/code/getJsTicket?callback=?";
     $.ajax({
        url: url,
        type:'post',
        dataType:'json',
        success: function (response) {
            if (response.retcode == 0) {
                define_wx_share(response.data);
            }
        },
        error: function () {
        }
     })
 

}

getJsTicket();
function nonceStr() {
    return Math.random().toString(36).substr(2, 15);
}
function timestamp() {
    return parseInt(new Date().getTime() / 1000);
}

function getRandomDesc(){
    var descArr =["已有217422人预约，原来真正的粽子是这个样子，跟外面那些妖艳贱货完全不一样！不信你自己来看看！","就这么轻而易举被女鬼收服了，感觉身体被掏空！救命！","我需要一个人静静，但是身处古墓，我觉得背后有人，头顶有人，脚下也有人……","是谁跟我说古墓里有美人的，站出来看我不打死他！"];
    var len = descArr.length;
    var pos = Math.floor(Math.random() * len);
    return descArr[pos];
}
function define_wx_share(jsTicket){
    var time = this.timestamp();
    var nonce = this.nonceStr();
    var title = '《探墓风云》预约秒送花费！';
    var desc = getRandomDesc();

    wx.config({
        debug: true,
        appId: "wx643f4ff723f51c58",
        timestamp:time,
        nonceStr:nonce,
        signature:hex_sha1('jsapi_ticket=' + jsTicket + '&noncestr='+nonce+'&timestamp='+time+'&url=' + location.href),
        jsApiList: [
            'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
    });
    wx.ready(function(){
        var shareUrl = location.href.split("?")[0];
        var path = shareUrl.slice(0, shareUrl.lastIndexOf("/"));
        var imageUrl = path + "/img/yuyue/fenxiang.png";
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title:desc,
            link:shareUrl,
            imgUrl: imageUrl,
            success: function () {

            },
            cancel: function () {

            }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link:shareUrl,
            imgUrl:imageUrl,
            success: function () {
            },
            cancel: function () {
            }
        });
        //分享到QQ
        wx.onMenuShareQQ({
            title: title,
            desc: desc,
            link: shareUrl,
            imgUrl: imageUrl,
            success: function () {
            },
            cancel: function () {

            }
        });
        //分享到微博
        wx.onMenuShareWeibo({
            title: title,
            desc: desc,
            link: shareUrl,
            imgUrl: imageUrl,
            success: function () {
            },
            cancel: function () {
            }
        });
        //分享到qq空间
        wx.onMenuShareQZone({
            title: title,
            desc: desc,
            link: shareUrl,
            imgUrl:imageUrl,
            success: function () {
            },
            cancel: function () {
            }
        });
    });
}
