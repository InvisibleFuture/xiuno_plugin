		$pa = param('pa', '', FALSE);
		$pb = param('pb', '', FALSE);
		$pc = param('pc', '', FALSE);
		$pd = param('pd', '', FALSE);
		$pe = param('pe', '', FALSE);
		$pf = param('pf', '', FALSE);
		$pg = param('pg', '', FALSE);
		$ph = param('ph', '', FALSE);
		$pi = param('pi', '', FALSE);
		$pj = param('pj', '', FALSE);
    db_update('post', array('pid'=>$pid), array('pa'=>$pa,'pb'=>$pb,'pc'=>$pc,'pd'=>$pd,'pe'=>$pe,'pf'=>$pf,'pg'=>$pg,'ph'=>$ph,'pi'=>$pi,'pj'=>$pj));
		