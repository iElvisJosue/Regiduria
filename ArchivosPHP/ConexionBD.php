<?php

    $localhost = 'localhost';
    $usuario = 'root';
    $contraseña = '';
    $bd = 'citas';

    $Conexion = mysqli_connect($localhost, $usuario, $contraseña, $bd);
    mysqli_set_charset($Conexion, "utf8");

    // if($Conexion){
    // echo ("Conexion exitosa");
    // }
    // else
    // echo("No se puedo conectar");

?>