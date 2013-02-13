<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>

<body>
<?php
	$name = $_GET["name"];
	$email = $_GET["email"];
	$comment = $_GET["comment"];
	$body = "name = ".$name."\nemail = ".$email."\ncomment = ".$comment;
	
	$to = "jeff.chong@rogers.com, ut.asianfocus@hotmail.com";
	$subject = "Question or Comment";
	if (mail($to, $subject, $body)) {
		echo("<p>Thank you for your time, we always appreciate your feedback</p>"
			."<span class='link' onclick=\"viewPage('home.html')\">Click here to return to home page</span>");
	} else {
		echo("<p>Message delivery failed...please check your information or contact the webmaster</p>"
		."<span class='link' onclick=\"viewPage('home.html')\">Click here to return to home page</span>");
	}
?>
</body>
</html>
