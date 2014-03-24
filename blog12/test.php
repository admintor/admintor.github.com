<?php
	header('Content-Type:text/html;charset=utf-8');
	require_once 'conn.php';
	$query=mysql_query("SELECT user FROM blog_user WHERE user='{$_POST['user']}' AND pass='{$_POST['pass']}'") or die("sql错误:".mysql_error());
	if(mysql_fetch_array($query,MYSQL_ASSOC)){
		sleep(2);
		echo 1;
	}else{
		sleep(2);
		echo 0;
	}
	mysql_close();
?>