<?php
    include('ConexionBD.php');

    if(isset($_POST['IdDeCitaEditar'])){

        $IdDeCitaEditar = $_POST['IdDeCitaEditar'];

        mysqli_set_charset($Conexion, "utf8");

        $ObtenerArchivosAEditar = "SELECT * FROM archivo WHERE Cita_idCita = '$IdDeCitaEditar'";
        $ArchivosTotalesAEditar = $Conexion->query($ObtenerArchivosAEditar);
    
        $ListaDeArchivosAEditar = array();
    
        while($LDAE=$ArchivosTotalesAEditar->fetch_assoc()){
        $ListaDeArchivosAEditar[] = $LDAE;
        }
        echo json_encode($ListaDeArchivosAEditar);
    }
    
?>
