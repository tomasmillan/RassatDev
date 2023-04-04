<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if($_SERVER['REQUEST_METHOD'] == 'POST') {
 
    define('FORM_ERR', 'Error en el formulario');
    define('EMAIL_ERR','El e-mail ingresado no es valido');
    define('NAME_ERR', 'El nombre es obligatorio');
    define('PHN_ERR', 'Ingrese un numero correcto');
    define('MSG_ERR', 'Ingrese su consulta');
    define('SUCCESS', 'Su mensaje fue enviado con exito');
    define('SERVER_ERR', 'Error en el servidor');
    

    $email_to = "info@rassat.com.ar";
    $email_subject = "Mensaje desde la web";
 
    function died($error) {
        $response = array('status' => 'error',
          'error' => $error
          );
        echo json_encode($response);
        die();
    }

    if(!isset($_POST['name']) || !isset($_POST['email'])  || !isset($_POST['phone']) || !isset($_POST['message'])) {
        died(array(FORM_ERR)); 
    }
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phone'];
    $message = $_POST['message']; // required
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    $string_exp = "/^[A-Za-z .'-]+$/";

    $errors = array();
 
    if(!preg_match($email_exp,$email_from)) {
      $errors[] = EMAIL_ERR;
    } 
   
    if(empty($name)) {
      $errors[] = NAME_ERR;
    }
   
    if(strlen($message) < 1) {
      $errors[] = MSG_ERR;
    }
   
    if(sizeof($errors) > 0) {
      died($errors);
    }
 
    $email_message = "Datos del mensaje: \n\n";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Nombre: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telefono: ".clean_string($phone)."\n";
    $email_message .= "Mensaje: ".clean_string($message)."\n";
    $contact_form_url = 'https://rassat.com.ar'."\n";
 
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    $isSent = mail($email_to, $email_subject, $email_message, $headers);  

    if($isSent) {
        $response = array('status' => 'ok',
          'message' => SUCCESS, 'redirect' => $contact_form_url  . $isSent
          );
        echo json_encode($response);    
    } else {
        $response = array('status' => 'error',
          'message' => SERVER_ERR
          );
        echo json_encode($response);    
    }

    
 
}

?>