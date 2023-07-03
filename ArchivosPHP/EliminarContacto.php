<?php
    include('ConexionBD.php');

    if(isset($_POST['IdDelContactoAEliminar'])){

        $IdDelContactoAEliminar = $_POST['IdDelContactoAEliminar'];
        mysqli_set_charset($Conexion, "utf8");

        $EliminarContacto = "UPDATE contacto SET ContactoActivo = 'no' WHERE idContacto = '$IdDelContactoAEliminar'";
        $Conexion->query($EliminarContacto);

    }else{
        echo("Vacio");
    }
    
?>
