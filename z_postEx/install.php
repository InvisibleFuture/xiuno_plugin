<?php

/*
	Xiuno BBS 4.0 插件：楼中楼 插件安装
	创建posts表,用于回复楼层的时候多读取一遍楼层
	幻 / 2017-09-16 05:11
*/

!defined('DEBUG') AND exit('Forbidden');

$tablepre = $db->tablepre;

$sql = "CREATE TABLE IF NOT EXISTS {$tablepre}post_reply (
	pid int(11) unsigned NOT NULL DEFAULT '0',
	rid int(11) unsigned NOT NULL AUTO_INCREMENT,
	uid int(11) unsigned NOT NULL DEFAULT '0',
	isfirst int(11) unsigned NOT NULL DEFAULT '0',
	create_date int(11) unsigned NOT NULL DEFAULT '0',
	userip int(11) unsigned NOT NULL DEFAULT '0',
	message text NOT NULL DEFAULT '',
	PRIMARY KEY (pid),
	KEY (rid)
) ENGINE=MyISAM DEFAULT CHARSET=utf8";
$r = db_exec($sql);

/*




目前不使用缓存
// 缓存 tagid 10000,10000,10000,10000
$sql = "ALTER TABLE {$tablepre}thread ADD COLUMN tagids char(32) NOT NULL DEFAULT ''";
$r = db_exec($sql);

// 缓存的时间，用来和 setting('tag_update_time') 对比
$sql = "ALTER TABLE {$tablepre}thread ADD COLUMN tagids_time int(11) unsigned NOT NULL DEFAULT '0'";
$r = db_exec($sql);

// tag 缓存的时间
setting_set('tag_update_time', $time);


//$r === FALSE AND message(-1, '创建表结构失败');
*/
?>