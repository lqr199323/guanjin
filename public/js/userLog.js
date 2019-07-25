function show_msg1(){
    msg1.innerHTML="用户名长度在6到9位之间"
}
function check_name(){
    var $uname=uname.value
    if(!$uname){
        msg1.innerHTML="用户名不能为空";
        return;
    }else{
        msg1.innerHTML="用户名可以使用"
    }
}
function show_msg2(){
    msg2.innerHTML="密码长度在6到12位之间"
}
function check_upwd(){
    var $upwd=upwd.value;
    if(!$upwd){
        msg2.innerHTML="密码不能为空";
        return;
    }else{
        msg2.innerHTML="密码可以使用";
    }
}
function userLogin(){
    var $uname=uname.value,$upwd=upwd.value;
    var n="用户名可以使用",w="密码可以使用",c="密码一致",e="邮箱可以使用",p="手机号码可以使用";
    if(msg1.innerHTML==n&&msg2.innerHTML){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                if(result=="1"){
                    alert("登录成功")
                }else{
                    alert("用户名或者密码错误")
                }
            }
        }
    xhr.open("get","/user/v1/userlogin/"+$uname+"&"+$upwd,true);
    xhr.send();
    }else{
        alert("用户名或者密码错误")
    }
}
