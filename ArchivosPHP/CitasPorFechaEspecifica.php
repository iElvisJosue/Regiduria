<?php
    include('ConexionBD.php');

    mysqli_set_charset($Conexion, "utf8");

    $BusquedaPorFecha = $_POST['BusquedaPorFecha'];

    $ObtenerCitasDeEseDia = "SELECT cita.idCita, cita.FechaCita, cita.HoraCita, cita.MunicipioCita, cita.ColoniaCita, cita.HoraCreacionCita, cita.ActivaCita, SUBSTRING(cita.AsuntoCita, 1, 50) AS AsuntoCita,
    contacto.FotoContacto, contacto.NombreContacto FROM cita, contacto 
    WHERE FechaCita = '$BusquedaPorFecha' AND cita.Contacto_idContacto = contacto.idContacto AND cita.EliminadaCita = 'NO' ORDER BY cita.HoraCita";
    $CitasDeEseDia = $Conexion->query($ObtenerCitasDeEseDia);

    $ListaDeCDED = array();

    while($Citas = $CitasDeEseDia->fetch_assoc()){
    $ListaDeCDED[] = $Citas;
    }
    echo json_encode($ListaDeCDED);
    
?>
