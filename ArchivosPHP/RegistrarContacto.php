<?php
    include('ConexionBD.php');
    if(
    isset($_POST['ContactoNombre']) && isset($_POST['ContactoTelefono']) && isset($_POST['ContactoActivo'])){

        $ContactoNombre = $_POST['ContactoNombre'];
        $ContactoTelefono = $_POST['ContactoTelefono'];
        $ContactoOcupacion = $_POST['ContactoOcupacion'];
        $ContactoMunicipio = $_POST['ContactoMunicipio'];
        $ContactoColonia = $_POST['ContactoColonia'];
        $ContactoCalle = $_POST['ContactoCalle'];
        $FotoContacto = $_POST['NombreFotoContacto'];
        $ContactoActivo = $_POST['ContactoActivo'];
        mysqli_set_charset($Conexion, "utf8");

        $ComprobarImagen = "SELECT FotoContacto FROM contacto WHERE FotoContacto = '$FotoContacto' AND FotoContacto != 'Default.png'";
        $ResultadoComprobarImagen = $Conexion->query($ComprobarImagen);
        
        if($ResultadoComprobarImagen->num_rows>0){
            echo("repetido");
        }else{
            $insertar = "INSERT INTO contacto (NombreContacto, TelefonoContacto, OcupacionContacto, 
            MunicipioContacto, ColoniaContacto, CalleContacto, FotoContacto, ContactoActivo) 
            VALUES('$ContactoNombre', '$ContactoTelefono', '$ContactoOcupacion',
            '$ContactoMunicipio', '$ContactoColonia', '$ContactoCalle', '$FotoContacto', '$ContactoActivo')";
            $Conexion->query($insertar);

            echo("si");
        }
    }else{
        echo ("no");
    }
?>