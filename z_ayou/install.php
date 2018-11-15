<?php
//新建标签表 alter table tableName add newColumn varchar(8) comment '新添加的字段'
$sql="ALTER TABLE bbs_post ADD pa longtext, ADD pb longtext, ADD pc longtext, ADD pd longtext, ADD pe longtext, ADD pf longtext, ADD pg longtext, ADD ph longtext, ADD pi longtext, ADD pj longtext";
db_exec($sql);
?>