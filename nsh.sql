SET NAMES UTF8;
DROP DATABASE IF EXISTS nsh;
CREATE DATABASE nsh CHARSET=UTF8;
USE nsh;
#表的结构 `nsh_comment`
CREATE TABLE `nsh_comment` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `uname` varchar(12) DEFAULT NULL,
  `upwd` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# 转存表中的数据 `nsh_comment`


INSERT INTO `nsh_comment` (`id`, `uname`, `upwd`) VALUES
(1, '胡慧军', '123456'),
(2, 'baba', '123456'),
(3, 'lala', '123456');




# 表的结构 `nsh_index_carousel`


CREATE TABLE `nsh_index_carousel` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `img` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


 #转存表中的数据 `nsh_index_carousel`


INSERT INTO `nsh_index_carousel` (`id`, `img`, `title`) VALUES
(9, 'img/index/banner1.png', '轮播广告1'),
(10, 'img/index/banner2.png', '轮播广告2'),
(11, 'img/index/banner3.png', '轮播广告3'),
(12, 'img/index/banner4.png', '轮播广告4');




# 表的结构 `nsh_login`


CREATE TABLE `nsh_login` (
  `uid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `uname` varchar(25) DEFAULT NULL,
  `upass` varchar(32) DEFAULT NULL
)


# 转存表中的数据 `nsh_login`


INSERT INTO `nsh_login` (`uid`, `uname`, `upass`) VALUES
(1, 'dengdeng', '25d55ad283aa400af464c76d713c07ad'),
(2, 'tom12345', '25d55ad283aa400af464c76d713c07ad');





# 表的结构 `nsh_news`


CREATE TABLE `nsh_news` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `class` varchar(20) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(2000) DEFAULT NULL,
  `ntime` date DEFAULT NULL
)


# 转存表中的数据 `nsh_news`


INSERT INTO `nsh_news` (`id`, `class`, `title`, `content`, `ntime`) VALUES
(1, '公告', '制作人老叶来给大家拜年！顺便向全体玩家汇报新年工作计划', '　过年了，拿着好不容易在12306上抢到的火车票，我今年带儿子回老家过年。', '2019-02-05'),
(2, '公告', '《逆水寒》2019年1月31日更新公告', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-19'),
(3, '新闻', '制作人老叶来给大家拜年！顺便向全体玩家汇报新年工作计划', '　过年了，拿着好不容易在12306上抢到的火车票，我今年带儿子回老家过年。', '2019-01-18'),
(4, '公告', '新年的喜悦与幸福已经降临在会呼吸的江湖', '为了保证服务器的运行稳定和服务质量，《逆水寒》将于2019年1月31日早8:00停机进行维护工作，预计维护到上午10:00。如在维护期间无法完成维护内容，开机时间将顺延。请少侠留意游戏时间，以免造成损失。', '2019-01-17'),
(5, '新闻', '走路也能领红包？逆水寒春节最全福利领取指南！', '春节即将到来，一年一度的“抢红包大战”又将轰轰烈烈地上演，各路戏精又要开始自己的表演了。有“一言不合交收款码”的简单粗暴型；有“说着不要不要身体却很诚实”的白莲花型；有“抢红包百分百触发最少buff”的非酋型。', '2019-01-16'),
(6, '主题', '逆水寒携手斗鱼“助力龙吟破浪而来', '网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒', '2019-01-20'),
(7, '主题', '逆水寒​携手鱼乐大咖，陪你一起过七夕！', '七夕今宵看碧霄，牵牛织女渡河桥，逆水寒将于8月17日晚19:00—21:00​ 携手鱼乐大咖进行一场辩论脱口秀大赛，与大家一起讨论逆水寒世界中的复杂人性及人生百味。', '2019-01-28'),
(8, '主题', '武侠年，中国味，你有一份专属称号待查收', '天地风霜尽，乾坤气象和；历添新岁月，春满旧山河。新春的喜悦与幸福从神州大地上传递到了会呼吸的江湖中，逆水寒的游戏世界焕然一新，所有的大宋子民、自在同门都一同期待着己亥猪年的到来。贴窗花、燃爆竹、抢红包、除夕守岁、走亲访友……现实世界中的过年的喜悦，记得也要和游戏里的好友分享！', '2019-01-20'),
(9, '公告', '逆水寒将开启最严格的北宋春节庆典', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-22'),
(10, '公告', '《逆水寒》南山雪礼盒&一夕苍雷礼盒概率公示', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-29'),
(11, '公告', '新年的喜悦与幸福已经降临在会呼吸的江湖', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-20'),
(12, '新闻', '《逆水寒》2019年1月24日更新公告', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-15'),
(13, '主题', '第一届《逆水寒》跨服帮会联赛规则', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-18'),
(14, '新闻', '《逆水寒》第一届跨服帮会联赛参与名单公布', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-22'),
(15, '主题', '虎牙直播逆水寒舞阳城竞速赛启动 千元京东卡等你拿', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-16'),
(16, '新闻', '1月10日服务器合并命名最终结果公告', '大年三十除夕夜，河坊街的秦娘子挂上了最后一盏灯，往来商客停下了兜售货物的手，往店铺里贴着福字祈愿来年，虹桥上熙熙攘攘的是买好年货后回家的行人，远处皇城里烟花升起，照亮了大宋的整片天空。', '2019-01-18');



# 表的结构 `nsh_user`


CREATE TABLE `nsh_user` (
  `uid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(12) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `user_name` varchar(4) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# 转存表中的数据 `nsh_user`


INSERT INTO `nsh_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `user_name`, `gender`) VALUES
(1, 'dingding', '12345678', 'ding@qq.com', '13511011000', '丁春秋', 0),
(2, 'dangdang', '12345678', 'dang@qq.com', '13501234568', '当当喵', 1);



