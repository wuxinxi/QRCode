$(function () {
    var w = $(window).width() * 0.6;
    var h = $(window).width() * 0.6;

    $(".layerBox").css({
        "height": $(window).height() + "px"
    });

    var s = "";
    $("#qr").on('tap', function () {


        var str = prompt("请输入安全码");
        if (str.length == 0 || str !== "0000") {
            alert("安全码错误[0001]");
            return;
        }

        var select = $(".mui-select").val().toString();
        var longTime;
        if (select == 0) {
            var now = new Date();
            longTime = utf16to8(now.getFullYear() + "-" + now.getMonth() + 1 + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes());
        } else {
            var ti = $(".date").val().toString();
            if (ti.length < 14) {
                alert("参数不合法[0001]");
                return;
            }
            longTime = utf16to8(ti.replace("T", " "));
        }

        var key = localStorage.getItem("token");

        s = 'szxb_time{"t":' + '"' + longTime + '"' + ',"k":' + '"' + key + '"' + '}';

        $("#QRCodeBox").qrcode({
            render: "canvas", //table方式
            width: w, //宽度
            height: h, //高度
            text: s //任意内容
        });

        $(".layerBox").addClass("fadeIn").removeClass("none");
    })


    function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }


    $(".layerBox").on('tap', function () {
        $(this).removeClass("fadeIn").addClass("fadeOut");
        var _this = $(this);
        $("#QRCodeBox").html("");
        setTimeout(function () {
            _this.removeClass("fadeOut").addClass("none");
        }, 300);
    });
})