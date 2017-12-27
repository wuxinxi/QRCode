$(function () {

    var w = $(window).width() * 0.6;
    var h = $(window).width() * 0.6;
    $(".layerBox").css({
        "height": $(window).height() + "px"
    });

    var s = "";
    $("#qr").on('tap', function () {

        var ip = $(".ip").val().toString();
        var port = $(".port").val().toString();
        var user = $(".user").val().toString();
        var psw = $(".psw").val().toString();

        if (ip.length == 0 || port.length == 0 || user.length == 0 || psw.length == 0) {
            alert("参数缺省[10001]");
            return;
        }

        var key=localStorage.getItem("token");

        s = 'szxb_ftp{"i":' + '"' + ip + '"' + ',"p":' + '"' + port + '"' + ',"u":' + '"' + user + '"' + ',"psw":' + '"' + psw + '"' + ',"k":' + '"' + key + '"' + '}';

        $("#QRCodeBox").qrcode({
            render: "canvas", //table方式
            width: w, //宽度
            height: h, //高度
            text: s //任意内容
        });

        $(".layerBox").addClass("fadeIn").removeClass("none");
    })

    $(".layerBox").on('tap', function () {
        $(this).removeClass("fadeIn").addClass("fadeOut");
        var _this = $(this);
        $("#QRCodeBox").html("");
        setTimeout(function () {
            _this.removeClass("fadeOut").addClass("none");
        }, 300);
    });


})