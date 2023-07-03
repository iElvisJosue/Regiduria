<?php
    include('ConexionBD.php');

    $FechaDeHoy = $_POST['FechaDeHoy'];
    mysqli_set_charset($Conexion, "utf8");

    $CitasParaHoy = "SELECT FechaCita FROM cita WHERE FechaCita = '$FechaDeHoy' AND ActivaCita = 'SI' AND EliminadaCita = 'NO'";
    $Hoy = $Conexion->query($CitasParaHoy);

    $ListaCitasHoy = array();

    while($CH = $Hoy->fetch_assoc()){
    $ListaCitasHoy[] = $CH;
    }
    echo json_encode($ListaCitasHoy);
    
?>
