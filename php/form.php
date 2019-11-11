


<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);


$name = urldecode($name);
$email = urldecode($email);
$text = urldecode($text);


$name = trim($name);
$email = trim($email);
$text = trim($text);


if (mail("zaharov@simple74.ru", "Сообщение с сайта форма контакты", "ФИО:".$name.". E-mail: ".$email."\r\n сообщение: ".$text ,"From: support@simple74.ru \r\n"))
  {     $data= "сообщение успешно отправлено"; 
} else { 
    $data= "при отправке сообщения возникли ошибки";
}

echo json_encode($data);
?>
