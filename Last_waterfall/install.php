<?php

/*
	Xiuno BBS 4.0 插件安装
	Last
*/

!defined('DEBUG') AND exit('Forbidden');

//创建文件夹
$filepath = $conf['upload_path'].'preview/';
if(!is_dir($filepath)) mkdir($filepath);

//为已有主题创建缩略图 时间可能很长

message(0, '创建成功');
