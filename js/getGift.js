$(function() {
    var $get_gift = $('ul.content').find('li.get_gift');
    var $touming_bg = $('div.touming_bg');
    var $pop = $('div.pop');
    var $close = $pop.find('a.close');
    $get_gift.click(function() {
        $('div.pop').css('display', 'block');
        $touming_bg.html('<div id="pop" style="height: 2168px; width: 100%; opacity: 0.6; z-index: 99; position: absolute; top: 0px; left: 0; background: rgb(0, 0, 0);"></div>');
        $touming_bg.css('display', 'block');
    });
    $close.click(function() {
        $pop.css('display', 'none');
        $touming_bg.html('');
        $touming_bg.css('display', 'none');
    });
    $touming_bg.click(function() {
        $pop.css('display', 'none');
        $touming_bg.html('');
        $touming_bg.css('display', 'none');
    });


});
