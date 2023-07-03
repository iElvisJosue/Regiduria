<?php
    include('ConexionBD.php');

    if(isset($_POST['idDeLaCitaSeleccionada'])){

        $idParaElArchivo = $_POST['idDeLaCitaSeleccionada'];

        mysqli_set_charset($Conexion, "utf8");

        $ObtenerArchivos = "SELECT NombreArchivo FROM archivo WHERE Cita_idCita = '$idParaElArchivo'";
        $ArchivosTotales = $Conexion->query($ObtenerArchivos);
    
        $ListaDeArchivos = array();
    
        while($LDArchivos=$ArchivosTotales->fetch_assoc()){
        $ListaDeArchivos[] = $LDArchivos;
        }
        echo json_encode($ListaDeArchivos);
    }
    
?>
