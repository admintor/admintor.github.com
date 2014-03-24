<?php
	header('Content-Type:text/html;charset=utf-8');
	require_once 'conn.php';
	$title=$_POST[title];
	$content=$_POST[content];
	$user=$_POST[user];
	$query="INSERT INTO blog_blog(title,content, user, date) VALUES ('$title','$content','$user',NOW())";
	mysql_query($query)or die("新增失败,".mysql_error());
	sleep(3);
	echo mysql_affected_rows();
	mysql_close();
?>