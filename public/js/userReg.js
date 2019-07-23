function show_msg1(){
    msg1.innerHTML="用户名长度在6到9位之间"
}
function check_name(){
    var $uname=uname.value
    if(!$uname){
        msg1.innerHTML="用户名不能为空";
        return;
    }else{
    //创建异步对象
    var xhr=new XMLHttpRequest();
    //绑定监听,获取响应
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            console.log(result);
            if(result=="0"){
                msg1.innerHTML="用户名已注册"
            }else{
                msg1.innerHTML="用户名可以使用"
            }
        }
    }
    //打开连接,请求响应
    xhr.open("get","/user/v1/user_checkname/"+$uname,true);
    //发送响应
    xhr.send();
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
function show_msg3(){
    msg3.innerHTML="密码长度在6到12位之间"
}
function checkupwd(){
    var $upwd=upwd.value;
    var $cpwd=cpwd.value;
    if(!$cpwd){
        msg3.innerHTML="密码不能为空";
        return;
    }else if($upwd==$cpwd){
        msg3.innerHTML="密码一致";
    }else{
        msg3.innerHTML="密码不一致"
        return;
    }
}
function show_msg4(){
    msg4.innerHTML="请输入合法的邮箱地址"
}
function check_email(){
    var $email=email.value;
    if(!$email){
        show_msg4.innerHTML="邮箱不能为空"
    }else{
        msg4.innerHTML="邮箱可以使用"
    }
}
function show_msg5(){
    msg5.innerHTML="请输入合法的手机号码"
}
function check_phone(){
    var $phone=phone.value;
    console.log()
    var a=parseInt($phone/10000000000);
    console.log(a);
    if($phone==""){
        msg5.innerHTML="手机号码不能为空";
        return;
    }else if(a==1){
        var xhr=new XMLHttpRequest();
        console.log(xhr);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var result=xhr.responseText;
                console.log(result);
                if(result=="0"){
                    msg5.innerHTML="手机号码已注册";
                    return;
                }else{
                    msg5.innerHTML="手机号码可以使用";
                }
            }
        }
        xhr.open("get","/user/v1/user_checkphone/"+$phone,true);
        xhr.send();
    }else{
        msg5.innerHTML="手机号码不可用"
    }
}
function userReg(){
    var $uname=uname.value,$upwd=upwd.value,$email=email.value,$phone=phone.value;
    var n="用户名可以使用",w="密码可以使用",c="密码一致",e="邮箱可以使用",p="手机号码可以使用";
    if(msg1.innerHTML==n&&msg2.innerHTML==w&&msg3.innerHTML==c&&msg4.innerHTML==e&&msg5.innerHTML==p){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                if(result=="1"){
                    alert("注册成功")
                }else{
                    alert("注册失败")
                }
            }
        }
    xhr.open("post","/user/v1/userReg",true);
    var formdata=`uname=${$uname}&upwd=${$upwd}&email=${$email}&phone=${$phone}`;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
    }else{
        alert("不能注册")
    }
}
