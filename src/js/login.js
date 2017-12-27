$(function () {
    var spinner = null;
    $('#login').on("tap", function () {

        var user = $("#account").val().toString();
        var psw = $("#password").val().toString();
        var select = $(".mui-select").val().toString();
        if (!user || !psw) {
            alert("参数缺省[10001]");
        } else {
            $('#loading').css("display", "block");
            spinner = new Spinner().spin(document.getElementById('loading'));
            $.ajax({
                type: "GET",
                url: "http://112.74.102.125/bipczbus/interaction/bus_Login",
                data: {
                    "username": $('#account').val(),
                    "password": $('#password').val()
                },
                dataType: "json",
                success: function (data) {

                    if (data.rescode == "0000") {
                        $('#loading').css("display", "none");
                        var key = data.busprivate_key;
                        var level = data.level;
                        var longTime = (new Date().getTime());
                        localStorage.setItem('time', longTime);
                        localStorage.setItem("login-type", select + level);
                        localStorage.setItem("token", key);
                        window.location.href = "home.html";
                    } else {
                        var result = data.result;
                        alert(result + "[" + data.rescode + "]");
                        $('#loading').css("display", "none");
                    }
                },
                error: function () {
                    alert("网络或服务器异常!");
                    $('#loading').css("display", "none");
                }
            })
        }

    })

    $('#loading').on("tap", function () {
        $('#loading').css("display", "none");
        delete  spinner;
    })


});