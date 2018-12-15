<?php exit;

if($ajax) {
	$forum = forum_safe_info($forum);
	foreach($threadlist as &$thread) $thread = thread_safe_info($thread);
	message(0, array('threadlist'=>$threadlist ));
}

//include _include(APP_PATH.'plugin/Last_waterfall/index.html');
//exit;


?>