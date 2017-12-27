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
        window.history.go(-1);
    });
})