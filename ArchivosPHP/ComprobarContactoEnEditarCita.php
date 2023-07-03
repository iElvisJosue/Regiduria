<?php
    include('ConexionBD.php');
    
    if(isset($_POST['EditarCitaNombreDelContacto'])){
        
        $EditarCitaNombreDelContacto = $_POST['EditarCitaNombreDelContacto'];
        mysqli_set_charset($Conexion, "utf8");

        $ComprobarNombre = "SELECT NombreContacto FROM contacto WHERE NombreContacto = '$EditarCitaNombreDelContacto'";
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
