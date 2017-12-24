var token = localStorage.getItem('token');
var loginUrl = window.location.pathname;
if(getNowFormatDate()-token.getDate()>7){
    if(loginUrl.indexOf("login.html") < 0){
        window.location.href = 'login.html';
    }
}else{
    if(loginUrl.indexOf("login.html") > -1){
        window.location.href = 'home.html';
    }
};

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

$(function(){

    $(".actionBar").on('tap',function(){
        window.history.go(-1);
    });
})