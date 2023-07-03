<?php
    include('ConexionBD.php');
    
    if(isset($_POST['CitaNombreDelContacto'])){
        
        $CitaNombreDelContacto = $_POST['CitaNombreDelContacto'];
        mysqli_set_charset($Conexion, "utf8");

        $ComprobarNombre = "SELECT idContacto FROM contacto WHERE NombreContacto = '$CitaNombreDelContacto'";
        $ResultadoComprobarNombre = $Conexion->query($ComprobarNombre);
        
        if($ResultadoComprobarNombre->num_rows>0){
            echo("si existe");
        }else{
            echo("no existe");
        }
    }else{
        echo ("vacio");
    }
    
?>
