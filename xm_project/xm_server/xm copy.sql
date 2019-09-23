#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库,如果存在xm
DROP DATABASE IF EXISTS xm;
#创建数据库xm
CREATE DATABASE xm CHARSET=UTF8;
#进入数据库xm
USE xm;

/*用户表单*/
#创建用户表格users;
CREATE TABLE users(
  uid INT PRIMARY KEY AUTO_INCREMENT,   #用户编号
  uname VARCHAR(8),                     #用户名
  upwd VARCHAR(16),                     #密码
  phone VARCHAR(16),                    #电话
  email VARCHAR(32),                    #邮箱
  gender BOOL                           #性别
);
INSERT INTO users VALUES
(null,'dingding','123456','18624897407','123@163.com',1);

/*主页主要商品页面分区表单*/
#创建表格主页主要内容区域表格main_page;
CREATE TABLE main_page(
  aid INT PRIMARY KEY AUTO_INCREMENT,   #分区编号
  aname VARCHAR(10)                     #分区类名
);
INSERT INTO main_page VALUES
(null,'家电'),
(null,'智能'),
(null,'搭配'),
(null,'配件'),
(null,'周边');