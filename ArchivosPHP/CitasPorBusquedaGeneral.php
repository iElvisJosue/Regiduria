<?php
    include('ConexionBD.php');

    mysqli_set_charset($Conexion, "utf8");

    $ContenidoBuscar = $_POST['ContenidoBuscar'];

    $CitasBusquedaGeneral = "SELECT cita.idCita, cita.FechaCita, cita.HoraCita, cita.MunicipioCita, cita.ColoniaCita, cita.HoraCreacionCita, cita.ActivaCita, SUBSTRING(cita.AsuntoCita, 1, 100) AS AsuntoCita,
    contacto.FotoContacto, contacto.NombreContacto FROM cita, contacto WHERE cita.EliminadaCita = 'NO' AND cita.Contacto_idContacto = contacto.idContacto 
    AND contacto.NombreContacto LIKE '%$ContenidoBuscar%' ORDER BY cita.FechaCita ASC";
    $CitasGeneral = $Conexion->query($CitasBusquedaGeneral);

    $ListaCitasBG = array();

    while($BG = $CitasGeneral->fetch_assoc()){
    $ListaCitasBG[] = $BG;
    }
    echo json_encode($ListaCitasBG);
    
?>
