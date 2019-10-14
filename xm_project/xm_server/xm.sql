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
  upwd VARCHAR(40),                     #密码
  phone VARCHAR(16),                    #电话
  email VARCHAR(32),                    #邮箱
  gender BOOL                           #性别
);
INSERT INTO users VALUES
(null,'dingding',md5('123456'),'18624897407','123@163.com',1);

/*主页主要商品页面分区表单*/
#创建表格主页主要内容区域表格main_page;
CREATE TABLE main_page(
  aid INT PRIMARY KEY AUTO_INCREMENT,   #分区编号
  aname VARCHAR(10)                     #分区类名
);
INSERT INTO main_page VALUES
(1,'家电'),
(2,'智能'),
(3,'搭配'),
(4,'配件'),
(5,'周边');

/*创建家电内容表单*/
CREATE TABLE electric(
  eid INT PRIMARY KEY AUTO_INCREMENT,                      #家电编号
  aid INT,                                                 #分区编号
  epic VARCHAR(32),                                        #图片路径
  ename VARCHAR(12),                                       #商品名称
  espec VARCHAR(32),                                       #商品介绍
  eprice DECIMAL(10,2),                                    #商品价格
  echange DECIMAL(10,2),                                   #商品降价前价格
  ehref VARCHAR(40)                                        #商品详情路径
);
INSERT INTO electric VALUES
(1,1,'img/main_page/left1.png','','','','','/mainproduct/1'),
(2,1,'img/main_page/left2.png','','','','','/mainproduct/2'),
(3,1,'img/main_page/right1.png','米家互联网空调C1(一级能效)','1.5匹变频,自清洁,节能省电',2599,'2799','/mainproduct/3'),
(4,1,'img/main_page/right2.png','米家空调','大1匹,静音,快速制冷热',1699,'1799','/mainproduct/4'),
(5,1,'img/main_page/right3.png','米家互联网洗烘一体机Pro 10kg','只能洗烘,省心省力',2999,'','/mainproduct/5'),
(6,1,'img/main_page/right4.png','小米电视4A 32英寸','人工智能系统高清液晶屏',799,'','/mainproduct/6'),
(7,1,'img/main_page/right5.png','Redmi全自动波轮洗衣机1A8kg','一键操作,父母都爱用',799,'','/mainproduct/7'),
(8,1,'img/main_page/right6.png','小米全面屏电视E55A','全面屏设计,人工只能语音',2099,'','/mainproduct/8'),
(9,1,'img/main_page/right7.png','15.6四核i7 16G 独显 512G','全面均衡的国民轻薄本','4699','4899','/mainproduct/9'),
(10,1,'img/main_page/last_up.png','Air 13.3"2019款','','4699','','/mainproduct/10'),
(11,1,'img/main_page/arrow.png','浏览更多','热门','','','/mainproduct/11');


/*创建家电详情表单*/
CREATE TABLE electric_details(
  eid INT PRIMARY KEY AUTO_INCREMENT,                      #家电编号
  dpic1 VARCHAR(32),                                       #详情页商品图片1
  dpic2 VARCHAR(32),                                       #详情页商品图片2
  dpic3 VARCHAR(32),                                       #详情页商品图片3
  dpic4 VARCHAR(32),                                       #详情页商品图片4
  ename VARCHAR(12),                                       #商品名称
  edesc VARCHAR(100),                                       #商品介绍
  aftersale VARCHAR(12),                                   #售后(是否自营)
  issale VARCHAR(12),                                      #是否有货
  especs VARCHAR(32),                                      #规格
  eprice DECIMAL(10,2)                                      #价格
);
INSERT INTO electric_details VALUES
(1,'img/details/e1.jpg','img/details/e2.jpg','img/details/e3.jpg','img/details/e4.jpg','小米净水器600G','600加仑大流量 / 即滤即饮无存水 / 纤薄小巧省空间 / RO反渗透技术 智能灯控水龙头 / 自主换芯 / 无需自主预约，安装人员主动与您沟通安装时间，免费上门安装','小米自营','有现货','白色','2199'),
(2,'img/details/e5.jpg','img/details/e6.jpg','img/details/e7.jpg','img/details/e8.jpg','米家扫地机器人1S','激光+视觉融合导航 / 2000Pa大吸力 / AI图像识别房间分区 / 小爱同学高级语音控制','小米自营','有现货','白色','1999');

/*创建电视影音表单*/
CREATE TABLE tv(
  tid INT PRIMARY KEY AUTO_INCREMENT,                      #家电编号
  aid INT,                                                 #分区编号
  tpic VARCHAR(32),                                        #图片路径
  tname VARCHAR(12),                                       #商品名称
  tspec VARCHAR(32),                                       #商品介绍
  tprice DECIMAL(10,2),                                    #商品价格
  tchange DECIMAL(10,2)                                    #商品降价前价格
);
INSERT INTO tv VALUES
(11,1,'img/main_page/left1.png','','','',''),
(12,1,'img/main_page/left2.png','','','',''),
(13,1,'img/main_page/anotherright1.png','小米电视4A 32英寸','人工智能系统,高清液晶屏',799,''),
(14,1,'img/main_page/anotherright2.png','小米全面屏电视E55A','全面屏设计，人工智能语音',2099,''),
(15,1,'img/main_page/anotherright3.png','小米全面屏电视E65A','面屏设计，人工智能语音',3199,'3999'),
(16,1,'img/main_page/anotherright4.png','小米电视4X 43英寸','FHD全高清屏，人工智能系统',1399,'1499'),
(17,1,'img/main_page/anotherright5.png','小米电视4A 65英寸','4K HDR,人工智能语音系统',2999,''),
(18,1,'img/main_page/anotherright6.png','小米壁画电视 65英寸','壁画外观，全面屏，远场语音',6999,''),
(19,1,'img/main_page/anotherright7.png','小米电视4C 55英寸','4K HDR,人工智能系统',1999,''),
(20,1,'img/main_page/anotherlast_up.png','小米盒子4','',299,''),
(21,1,'img/main_page/arrow.png','浏览更多','电视影音','','');

/*小米明星单品表单*/
CREATE TABLE star_product(
  sid INT PRIMARY KEY AUTO_INCREMENT,                      #单品编号
  spic VARCHAR(32),                                        #单品图片路径
  sname varchar(16),                                       #单品名称
  specs VARCHAR(32),                                       #单品介绍
  sprice DECIMAL(10,2)                                     #单品价格
);
INSERT INTO star_product VALUES
(1,'img/xiaomi_danpin/pinpai1.png','小米MIX','5月9日-21日享花呗12期分期免息','3499'),
(2,'img/xiaomi_danpin/pinpai2.png','小米5s','5月9日-10日，下单立减200元','1999'),
(3,'img/xiaomi_danpin/pinpai3.png','小米手机5 64GB','5月9日-10日，下单立减100元','1799'),
(4,'img/xiaomi_danpin/pinpai4.png','小米电视3s 55英寸','5月9日，下单立减200元','3999'),
(5,'img/xiaomi_danpin/pinpai5.png','小米笔记本','更轻更薄，像杂志一样随身携带','3599');
/*购物车表单*/
CREATE TABLE cart(
  uid INT,                                  #用户编号
  eid INT,                                  #家电品编号
  ename VARCHAR(32),                        #家电商品名称
  eprice DECIMAL(10,2),                     #家电商品价格
  epic VARCHAR(32),                         #家电商品图片
  ecount INT                                #数量
);
INSERT INTO cart VALUES
(1,1,'小米净水器600G',2199,'img/details/e1.jpg',1),
(1,2,'米家扫地机器人1S',1999,'img/details/e5.jpg',1);

#购物车商品推荐表
CREATE TABLE p_cart(
  eid INT,
  ename VARCHAR(32),
  eprice DECIMAL(10,2),
  edpic VARCHAR(32)                                 
);
INSERT INTO p_cart VALUES
(3," Redmi K20 全网通版 8GB+256GB ",2229,"img/cart/cart1.png"),
(4," Redmi Note 8 Pro 8GB+128GB 全网通版 ",1799,"img/cart/cart2.jpg"),
(5," Redmi Note 8 Pro 标准高透贴膜(高透) ",1599,"img/cart/cart3.png"),
(6," Redmi Note 8 Pro 6GB+128GB ",2229,"img/cart/cart4.jpg"),
(7," Redmi Note 8 Pro 标准高透贴膜(高透) ",999,"img/cart/cart5.jpg"),
(8," Redmi K20 Pro 全网通版 6GB+128GB ",1399,"img/cart/cart6.jpg"),
(9," Redmi Note 8 4GB+64GB ",799,"img/cart/cart7.jpg"),
(10," Redmi Note 8 6GB+64GB ",2119,"img/cart/cart8.jpg"),
(11," Redmi Note 8 6GB+128GB ",1499,"img/cart/cart9.jpg"),
(12," Redmi Note 8 Pro 6GB+128GB ",1599,"img/cart/cart1.png")
