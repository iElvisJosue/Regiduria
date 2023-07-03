<?php

    session_start();
    error_reporting(0);
    
    if(!$_SESSION['Verificar']){
        header("Location: ../index.php");
        die();
        session_destroy();
    }

?>
