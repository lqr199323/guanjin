set names utf8;
drop  database if exists guanjin;
create database guanjin charset=utf8;
use guanjin;
/*用户列表*/
create table guanjin_user(
    uid int primary key auto_increment,
    uname varchar(8),
    upwd VARCHAR(10),
    email varchar(64),
    phone varchar(11),
    user_name varchar(32),
    gender int      # 性别 0-女 1-男  
);