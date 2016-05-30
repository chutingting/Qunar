(function ($) {
    var url = location.href;
    str = url.substring(url.indexOf("?") + 1, url.length);
    var txt = decodeURI(str),
        ohtml = "";
    // console.log(txt);
    if (txt == "金釜山火锅") {
        ohtml = "<span>金釜山火锅</span><span>优惠预订</span><ul><li>朝阳区北苑路36号去哪儿喝酒吧</li><li>4月26日</li><li>李先生 2-3人</li><li>18613242365</li></ul><i>使用礼券：-20元</i><i>合计：180元</i><div class='state'><img src='./imgs/zhuangtai.png'>预订中</div>"
    } else if (txt == "唱吧KTV") {
        ohtml = "<span>唱吧KTV</span><span>直接预订</span><ul><li>朝阳区北苑路36号去哪儿喝酒吧</li><li>4月26日</li><li>李先生 2-3人</li><li>18613242365</li></ul><div class='state'><img src='./imgs/zhuangtai.png'>预订中</div>"
    }else if(txt=="去哪儿喝酒吧"){
        ohtml = "<span>去哪儿喝酒吧</span><ul><li>朝阳区北苑路36号去哪儿喝酒吧</li><li>4月26日</li><li>李先生 2-3人</li><li>18613242365</li></ul><div class='state'><img src='./imgs/zhuangtai.png'>预订中</div>"
    }
    $("#indent_details").html(ohtml);
})(Zepto);