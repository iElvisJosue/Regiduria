<?php
    include('ConexionBD.php');

    mysqli_set_charset($Conexion, "utf8");

    $obtenermunicipios = "SELECT * FROM municipio";
    $resultadoconsulta = $Conexion->query($obtenermunicipios);

    $listamunicipios = array();

    while($row=$resultadoconsulta->fetch_assoc()){
    $listamunicipios[]= $row;
    }
    echo json_encode($listamunicipios);
    
?>
