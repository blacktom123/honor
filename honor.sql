SET NAMES UTF8;
DROP DATABASE IF EXISTS honor;
CREATE DATABASE honor CHARSET=UTF8;
USE honor;
CREATE TABLE honor_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  birthday DATE,
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
INSERT INTO honor_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com','1990-5-5', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com','1991-8-5', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com','1995-10-20', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com','1993-12-5', '13501234560', 'img/avatar/default.png', '秦小雅', '0');