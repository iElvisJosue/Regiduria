<?php

    include('ConexionBD.php');

    $NombreMunicipio = $_POST['NombreDelMunicipioSeleccionado'];
    mysqli_set_charset($Conexion, "utf8");
    
    $ObtenerIdMunicipio = "SELECT idMunicipio FROM municipio WHERE NombreMunicipio = '$NombreMunicipio'";
    $ResultadoIdMunicipio = $Conexion->query($ObtenerIdMunicipio);
    $ArrayIdMunicipio = $ResultadoIdMunicipio->fetch_assoc();
    echo($ArrayIdMunicipio['idMunicipio']);
    
?>
