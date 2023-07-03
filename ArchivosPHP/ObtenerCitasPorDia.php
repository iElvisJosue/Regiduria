<?php
    include('ConexionBD.php');

    mysqli_set_charset($Conexion, "utf8");

    $ObtenerFechas = "SELECT FechaCreacionCita AS MismoDia FROM cita WHERE EliminadaCita = 'NO' GROUP BY FechaCreacionCita ORDER BY FechaCreacionCita DESC LIMIT 7";
    $DiasIguales = $Conexion->query($ObtenerFechas);

    $ListaFechas = array();

    while($Fecha = $DiasIguales->fetch_assoc()){
    $ListaFechas[] = $Fecha;
    }
    echo json_encode($ListaFechas);
    
?>
