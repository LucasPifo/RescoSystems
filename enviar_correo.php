<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$para = "betoescobedo34@gmail.com";
$mail = "<b>Nombre:</b><br>" . $nombre . "<br><br>";
$mail .= "<b>E-mail:</b><br>" . $email . "<br><br>";
$mail .= "<b>Teléfono:</b><br>" . $telefono . "<br><br>";
$mail .= "<b>Mensaje:</b><br>" . $mensaje . "<br><br>";
$titulo = "Contacto";
$headers = "From: Resco <biosinsasistema2@gmail.com>\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "Reply-To: " . $_POST['email'];
$bool = mail($para, $titulo, $mail, $headers);
if($bool){
    echo "Mensaje enviado";
}else{
    echo "Mensaje no enviado";
}
?>