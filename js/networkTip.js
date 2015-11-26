window.onload = function () {
	

    // alert(navigator.connection.type == 'wifi');
    if (navigator.connection.type) {
        var network_type = navigator.connection.type;
        if (network_type == 3 || network_type == 4 || network_type == 5 || network_type == '2g' || network_type == '3g' || network_type == '4g' || network_type == 'CELL_2G' || network_type == 'CELL_3G' || network_type == 'CELL_4G') {
            alert('当前网络状态是：' + network_type + ',此状态下网页上图片已经进行压缩处理，请放心浏览网页！')
        } // else {
        //     alert('当前网络状态是：' + navigator.connection.type)
        // }
    }

}
