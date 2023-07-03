<?php
    include('ConexionBD.php');
    
    if(isset($_POST['ContactoNombre'])){

        $ContactoNombre = $_POST['ContactoNombre'];
        mysqli_set_charset($Conexion, "utf8");

        $ComprobarContacto = "SELECT NombreContacto FROM contacto WHERE NombreContacto = '$ContactoNombre'";
        $ResultadoComprobarContacto = $Conexion->query($ComprobarContacto);
        
        if($ResultadoComprobarContacto->num_rows>0){
            echo("Existente");
        }else{
            echo("Inexistente");
        }
    }else{
        echo ("no");
    }
?>