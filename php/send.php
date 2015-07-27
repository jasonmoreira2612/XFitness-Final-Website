<?php
	$sendTo = "yourmail@mail.com";
	$subject = "Contact Message";
	$title = "Somebody want to talk with you";
	$ip = $_SERVER["REMOTE_ADDR"];
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$comments = $_POST["message"];
	$message = "\nSomebody want to talk with you:"
	. "\nHis or Her Name: " . $name . "\nEmail: " . $email . "\nPhone: " . $phone . "\nMessage: " . $comments . "\nIP: " . $ip;
	mail($sendTo, $subject, $message);
	header('Location: /index.html');
?>