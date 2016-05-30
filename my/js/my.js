(function ($) {
    var myspan = $(".myspan"),
        myIndent = $("#myIndent"),
        myCollect = $("#myCollect"),
        myPrint = $("#myPrint");
    myspan.on("tap", function () {
        $(this).addClass("border_name").siblings().removeClass("border_name");
    })
    myspan.eq(0).on("tap", function () {
        myIndent.show();
        myCollect.hide();
        myPrint.hide();
    })
    myspan.eq(1).on("tap", function () {
        myIndent.hide();
        myCollect.show();
        myPrint.hide();
    })
    myspan.eq(2).on("tap", function () {
            myIndent.hide();
            myCollect.hide();
            myPrint.show();
        })
        //点击 跳转传参
    var onTap = $(".onTap");
    onTap.on("tap", function () {
        var url=($(this).find("h2").html());
          location.href='lineItem.html?'+url;
    })
    //点击修改
    $("#update").on("tap",function(){
        if(confirm("是否更换手机号")){
           location.href="updatePhone.html"
        }

    })
})(Zepto);