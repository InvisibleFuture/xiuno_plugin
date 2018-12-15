<?php exit;

# 删除主贴时删除缩略图像
$ptm = $conf['upload_path'].'preview/'.$tid.'.png';
if(file_exists($ptm)) unlink($ptm);
