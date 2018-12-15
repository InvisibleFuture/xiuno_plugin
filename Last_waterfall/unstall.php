<?php

/*
	Xiuno BBS 4.0 插件安装
	Last
*/

!defined('DEBUG') AND exit('Forbidden');

function deldir($dir) {
  //先删除目录下的文件：
  $dh=opendir($dir);
  while ($file=readdir($dh)) {
    if($file!="." && $file!="..") {
      $fullpath=$dir."/".$file;
      if(!is_dir($fullpath)) {
          unlink($fullpath);
      } else {
          deldir($fullpath);
      }
    }
  }

  closedir($dh);
  //删除当前文件夹：
  if(rmdir($dir)) {
    return true;
  } else {
    return false;
  }
}

$filepath = $conf['upload_path'].'preview/';
if(!is_dir($filepath)) deldir($dir);

message(0, '删除成功');
