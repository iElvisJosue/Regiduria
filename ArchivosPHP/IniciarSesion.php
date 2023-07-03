<?php
    include('ConexionBD.php');

    if(isset($_POST['NombreDeUsuario']) && isset($_POST['ContrasenaDeUsuario'])){

        $NombreDeUsuario = $_POST['NombreDeUsuario'];
        $ContrasenaDeUsuario = $_POST['ContrasenaDeUsuario'];

        mysqli_set_charset($Conexion, "utf8");

        $ComprobarIniciarSesion = "SELECT * FROM usuarios WHERE Usuario = '$NombreDeUsuario' AND Contrasena = '$ContrasenaDeUsuario'";
        $SesionIniciada = $Conexion->query($ComprobarIniciarSesion);

        if($SesionIniciada->num_rows>0){
            session_start();
            $_SESSION['Verificar'] = true;
            echo("Correcto");
        }else{
            echo("Incorrecto");
        }
    }
    
?>
