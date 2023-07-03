<?php
    include('ConexionBD.php');

    if(isset($_POST['NombreUsuarioCrearCuenta']) && isset($_POST['ContrasenaUsuarioCrearCuenta']) && isset($_POST['LlaveAcceso'])){

        $NombreUsuarioCrearCuenta = $_POST['NombreUsuarioCrearCuenta'];
        $ContrasenaUsuarioCrearCuenta = $_POST['ContrasenaUsuarioCrearCuenta'];
        $LlaveAcceso = $_POST['LlaveAcceso'];

        mysqli_set_charset($Conexion, "utf8");

        $ComprobarNombre = "SELECT * FROM usuarios WHERE Usuario = '$NombreUsuarioCrearCuenta'";
        $NombreRepetido = $Conexion->query($ComprobarNombre);

        if($NombreRepetido->num_rows>0){
            echo("Repetido");
        }else{
            $ComprobarLlave = "SELECT * FROM tokenacceso WHERE TokenAcceso = '$LlaveAcceso'";
            $LlaveComprobada = $Conexion->query($ComprobarLlave);
            if($LlaveComprobada->num_rows>0){
                $InsertarUsuario = "INSERT INTO usuarios (Usuario, Contrasena) VALUES('$NombreUsuarioCrearCuenta', '$ContrasenaUsuarioCrearCuenta')";
                $Conexion->query($InsertarUsuario);
                session_start();
                $_SESSION['Verificar'] = true;
                echo("Registrado");
            }else{
                echo("ErrorToken");
            }
        }
    }
    
?>
