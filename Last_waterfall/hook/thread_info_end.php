<?php exit;

if($ajax) {
	$thread = thread_safe_info($thread);
	$first = thread_safe_info($first);
	foreach($postlist as &$post) $post = post_safe_info($post);
	message(0, array('thread'=>$thread, 'first'=>$first, 'postlist'=>$postlist));
}
/**
//include _include(APP_PATH.'plugin/Last_waterfall/index.html');
//exit;
**/
