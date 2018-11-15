<?php
//删除字段 alter table `user_movement_log` drop column Gatewayid  
$sql="ALTER TABLE bbs_post DROP COLUMN pa, DROP COLUMN pb, DROP COLUMN pc, DROP COLUMN pd, DROP COLUMN pe, DROP COLUMN pf, DROP COLUMN pg, DROP COLUMN ph, DROP COLUMN pi, DROP COLUMN pj";
db_exec($sql);
?>