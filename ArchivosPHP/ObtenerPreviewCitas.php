<?php
    include('ConexionBD.php');

    mysqli_set_charset($Conexion, "utf8");

    $ObtenerCitas = "SELECT cita.idCita, cita.FechaCita, cita.HoraCita, cita.MunicipioCita, cita.ColoniaCita, cita.HoraCreacionCita, cita.ActivaCita, SUBSTRING(cita.AsuntoCita, 1, 50) AS AsuntoCita, cita.FechaCreacionCita,
    contacto.FotoContacto, contacto.NombreContacto FROM cita, contacto 
    WHERE cita.Contacto_idContacto = contacto.idContacto AND cita.EliminadaCita = 'NO' ORDER BY cita.FechaCreacionCita DESC, cita.FechaCita ASC";
    $CitasTotales = $Conexion->query($ObtenerCitas);

    $ListaDeCitas = array();

    while($Citas = $CitasTotales->fetch_assoc()){
    $ListaDeCitas[] = $Citas;
    }
    echo json_encode($ListaDeCitas);
    
?>
