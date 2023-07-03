<?php
    include('ConexionBD.php');

    if(isset($_POST['idDeLaCitaSeleccionada'])){

        $idDeLaCitaSeleccionada = $_POST['idDeLaCitaSeleccionada'];

        mysqli_set_charset($Conexion, "utf8");

        $ObtenerCita = "SELECT contacto.NombreContacto, contacto.TelefonoContacto, contacto.OcupacionContacto,
        contacto.MunicipioContacto, contacto.ColoniaContacto, contacto.CalleContacto, contacto.FotoContacto, cita.FechaCita, 
        cita.HoraCita, cita.MunicipioCita, cita.ColoniaCita, cita.CalleCita, cita.AsuntoCita, cita.ComentariosCita, cita.ActivaCita FROM contacto, cita 
        WHERE cita.idCita = '$idDeLaCitaSeleccionada' AND cita.Contacto_idContacto = contacto.idContacto";
        $CitasTotales = $Conexion->query($ObtenerCita);
    
        $ListaDeCitas = array();
    
        while($LDCitas=$CitasTotales->fetch_assoc()){
        $ListaDeCitas[] = $LDCitas;
        }
        echo json_encode($ListaDeCitas);
    }
    
?>
