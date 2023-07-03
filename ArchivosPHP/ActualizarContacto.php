<?php
    include('ConexionBD.php');

    if( isset($_POST['IdFinalDelContacto']) && isset($_POST['NuevoNombreContacto']) && isset($_POST['NuevoTelefonoContacto'])){

        $IdFinalDelContacto = $_POST["IdFinalDelContacto"];
        $NuevoNombreContacto = $_POST["NuevoNombreContacto"];
        $NuevoTelefonoContacto = $_POST["NuevoTelefonoContacto"];
        $NuevaOcupacionContacto = $_POST["NuevaOcupacionContacto"];
        $NuevoMunicipioContacto = $_POST["NuevoMunicipioContacto"];
        $NuevaColoniaContacto = $_POST["NuevaColoniaContacto"];
        $NuevaCalleDeContacto = $_POST["NuevaCalleDeContacto"];
        $NombreArchivoFinalDelContacto = $_POST["NombreArchivoFinalDelContacto"];

        $ComprobarImagen = "SELECT FotoContacto FROM contacto WHERE FotoContacto = '$NombreArchivoFinalDelContacto' AND FotoContacto != 'Default.png' AND idContacto != '$IdFinalDelContacto'";
        $ResultadoComprobarImagen = $Conexion->query($ComprobarImagen);

        if($ResultadoComprobarImagen->num_rows>0){
            echo("repetido");
        }else{
            $ActualizarContacto = "UPDATE contacto SET NombreContacto = '$NuevoNombreContacto', TelefonoContacto = '$NuevoTelefonoContacto', 
            OcupacionContacto = '$NuevaOcupacionContacto', MunicipioContacto = '$NuevoMunicipioContacto', ColoniaContacto = '$NuevaColoniaContacto', 
            CalleContacto = '$NuevaCalleDeContacto', FotoContacto = '$NombreArchivoFinalDelContacto' WHERE idContacto = $IdFinalDelContacto";
            $Conexion->query($ActualizarContacto);
            echo("si");
        }
    }else{
        echo ("Vacio");
    }
    
?>
