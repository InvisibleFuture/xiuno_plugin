<?php

/*
	Xiuno BBS 4.0 插件实例：TAG 插件卸载
	admin/plugin-unstall-xn_tag.htm
*/

!defined('DEBUG') AND exit('Forbidden');

$tablepre = $db->tablepre;
$sql = "DROP TABLE IF EXISTS {$tablepre}post_reply;";
$r = db_exec($sql);

$r === FALSE AND message(-1, '卸载表失败');

?>