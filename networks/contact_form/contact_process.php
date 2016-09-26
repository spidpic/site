<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'email_validation.php';

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$subject = "CONTACTO SPIDPIC";
$phone = stripslashes($_POST['phone']);
$message = "Nombre: " . $name . "\n\nEmail: " . $email . "\n\nTelefono: " . $phone . "\n\nMensaje: " . stripslashes($_POST['message']);


$error = '';

// Check name

if(!$name)
{
$error .= 'Por favor escrib&iacute; tu nombre.<br />';
}

// Check email

if(!$email)
{
$error .= 'Por favor escrib&iacute; tu e-mail.<br />';
}

if($email && !ValidateEmail($email))
{
$error .= 'Por favor escrib&iacute; un e-mail v&aacute;lido.<br />';
}

// Check phone

if(!$phone)
{
$error .= 'Por favor escrib&iacute; tu tel&eacute;fono.<br />';
}

// Check message (length)

if(!$message || strlen($message) < 10)
{
$error .= "Por favor escrib&iacute; tu mensaje.<br />";
}


if(!$error)
{
$mail = mail(CONTACT_FORM, $subject, $message,
     "From: ".$name." <".$email.">\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());


if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>