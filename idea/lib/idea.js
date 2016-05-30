$(function () {
    $('.idea-Top-Right').on('tap', function () {
        if ($('#txt').val() == "") {
            confirm('至少输入一段文字');
        } else if ($('#txt').val() != "") {
            confirm('感谢您的意见')
        }
    })
})