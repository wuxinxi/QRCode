$(function() {

    var w = $(window).width() * 0.6;
    var h = $(window).width() * 0.6;
    $(".layerBox").css({
        "height": $(window).height() + "px"
    });

    var s = "";
    $("#qr").on('tap', function() {

        var mch= $(".mch").val().toString();
        var city = $(".city").val().toString();
        var ordesc = $(".ordesc").val().toString();

        if(mch.length==0||city.length==0||ordesc.length==0){
            alert("参数缺省[10001]");
            return;
        }


        var key=localStorage.getItem("token");

        s = 'szxb_mch{"m":' + '"' + mch + '"' + ',"c":' + '"' + city + '"' + ',"o":' + '"' + utf16to8(ordesc) + '"' + ',"k":' + '"' + key + '"' + '}';

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

    function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            }
        }
        return out;
    }

})