<?php
    include('ConexionBD.php');

    if(isset($_POST['AsignandoIDContactoAEditar'])){
        mysqli_set_charset($Conexion, "utf8");

        $IDContacto = $_POST['AsignandoIDContactoAEditar'];
        $ConsultaContacto = "SELECT * FROM contacto WHERE idContacto = '$IDContacto'";
        $ResultadosContacto = $Conexion->query($ConsultaContacto);

        $DatosDelContacto = array();

        while($row=$ResultadosContacto->fetch_assoc()){
        $DatosDelContacto[]= $row;
        }
        echo json_encode($DatosDelContacto);
    }else{
        echo("Vacio");
    }    
?>
