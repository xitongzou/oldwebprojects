<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>

<body>
<?php
	$fname = $_GET["fname"];
	$lname = $_GET["lname"];
	$email = $_GET["email"];
	$telephone = $_GET["telephone"];
	$area = $_GET["area"];
	$studentnum = $_GET["studentnum"];
	$program = $_GET["program"];
	$year = $_GET["year"];
	$other = $_GET["other"];
	
	$body = "First Name = ".$fname."\nLast Name = ".$lname."\nEmail = ".$email.
			"\nTelephone Number = ".$telephone."\nArea = ".$area."\nStudent Number = ".$studentnum.
			"\nProgram = ".$program."\nYear = ".$year."\nOther Info = ".$other;
			
	$to = "jeff.chong@rogers.com, ut.asianfocus@hotmail.com";
	$subject = "AF Application";
	if (mail($to, $subject, $body)) {
		echo("<p>Thank you for application has been submitted.</p>"
			."<p>Your application will be processed, and you will receive a reply within 10 days from one of our execs</p>"
			."<span class='link' onclick=\"viewPage('home.html')\">Click here to return to home page</span>");
	} else {
		echo("<p>Message delivery failed...please check your information or contact the webmaster</p>"
		."<span class='link' onclick=\"viewPage('home.html')\">Click here to return to home page</span>");
	}
?>
</body>
</html>
