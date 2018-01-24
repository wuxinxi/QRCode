var token=localStorage.getItem('time');
var loginUrl = window.location.pathname;

if(token == null){
    if(loginUrl.indexOf("login.html") < 0){
        window.location.href = 'login.html';
    }
}else{
    if(loginUrl.indexOf("login.html") > -1){
        window.location.href = 'home.html';
    }else {
        var currentTime = new Date().getTime();
        console.log("当前日期="+currentTime+"--保存日期："+token);
        if (currentTime-token>1000*60*60*24*7){//token有效期7天
            window.location.href = 'login.html';
            localStorage.removeItem("time");
        }
    }
};


$(function () {
    $("#actionBar").on('tap', function () {
        if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE
            if(history.length > 0){
                window.history.go( -1 );
            }else{
                window.opener=null;window.close();
            }
        }else{ //非IE浏览器
            if (navigator.userAgent.indexOf('Firefox') >= 0 ||
                navigator.userAgent.indexOf('Opera') >= 0 ||
                navigator.userAgent.indexOf('Safari') >= 0 ||
                navigator.userAgent.indexOf('Chrome') >= 0 ||
                navigator.userAgent.indexOf('WebKit') >= 0){

                if(window.history.length > 1){
                    window.history.go( -1 );
                }else{
                    window.opener=null;window.close();
                }
            }else{ //未知的浏览器
                window.history.go( -1 );
            }
        }
    });
})