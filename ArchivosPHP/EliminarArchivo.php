<?php
    include('ConexionBD.php');

    if(isset($_POST['TrapNombreArchivo']) && isset($_POST['IdDeCitaEditar'])){

        $TrapNombreArchivo = $_POST['TrapNombreArchivo'];
        $IdDeCitaEditar = $_POST['IdDeCitaEditar'];

        mysqli_set_charset($Conexion, "utf8");

        $EliminarArchivo = "DELETE FROM archivo WHERE NombreArchivo = '$TrapNombreArchivo' AND Cita_idCita = '$IdDeCitaEditar'";
        $Conexion->query($EliminarArchivo);
        echo("AEliminado");
        
    }else{
        echo("ID de cita no seleccionada");
    }
    
?>
