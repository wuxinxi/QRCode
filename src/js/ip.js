$(function() {

    var w = $(window).width() * 0.6;
    var h = $(window).width() * 0.6;
    $(".layerBox").css({
        "height": $(window).height() + "px"
    });

    var s = "";
    $("#qr").on('tap', function() {

        var ip= $(".ip").val().toString();

        if(ip.length==0){
            alert("参数不能缺省");
            return;
        }


        s = 'szxb_ip{"ip":' + '"' + ip + '"' + '}';

        $("#QRCodeBox").qrcode({
            render: "canvas", //table方式
            width: w, //宽度
            height: h, //高度
            text: s //任意内容
        });

        $(".layerBox").addClass("fadeIn").removeClass("none");
    })

    $(".layerBox").on('tap', function() {
        $(this).removeClass("fadeIn").addClass("fadeOut");
        var _this = $(this);
        $("#QRCodeBox").html("");
        setTimeout(function() {
            _this.removeClass("fadeOut").addClass("none");
        }, 300);
    });

})