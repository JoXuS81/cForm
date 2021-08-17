<?php
//get data from form  
$name = $_POST['nameArea'];
$email= $_POST['mailArea'];
$phone= $_POST['phoneArea'];
$message= $_POST['messageArea'];
$to = "jstani2015@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>