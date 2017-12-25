
$(function(){
    var spinner =null;
    $('#login').on("tap",function () {

        var user=$("#account").val().toString();
        var psw=$("#password").val().toString();
        var select=$(".mui-select").val().toString();
        if (!user||!psw){
            alert("参数缺省[10001]");
        }else {
            $('#loading').css("display","block");
            spinner= new Spinner().spin(document.getElementById('loading'));
            $.ajax({
                type:"GET",
                url:"http://112.74.102.125/bipbus/interaction/bus_Login",
                data:{
                    "username":$('#account').val(),
                    "password":$('#password').val()
                },
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    if (data.rescode=="0000"){
                        $('#loading').css("display","none");
                        var longTime=(new Date().getTime());
                        localStorage.setItem('time',longTime);
                        localStorage.setItem("login-type",select);
                        window.location.href="home.html";
                    }else {
                        var result=data.result;
                        alert(result+"["+data.rescode+"]");
                        $('#loading').css("display","none");
                    }
                },
                error:function () {
                    alert("网络或服务器异常!");
                    $('#loading').css("display","none");
                }
            })
        }

    })

    $('#loading').on("tap",function () {
        $('#loading').css("display","none");
        delete  spinner;
    })


    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    }


});