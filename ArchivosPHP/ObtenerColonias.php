<?php
    include('ConexionBD.php');

    if(isset($_POST['idMunicipio'])){

        $idMunicipio = $_POST['idMunicipio'];

        mysqli_set_charset($Conexion, "utf8");

        $obtenercolonias = "SELECT NombreColonia FROM colonia WHERE 
        Municipio_idMunicipio = $idMunicipio ORDER BY NombreColonia ASC";
        $resultadoconsulta = $Conexion->query($obtenercolonias);
    
        $listacolonias = array();
    
        while($row=$resultadoconsulta->fetch_assoc()){
        $listacolonias[]= $row;
        }
        echo json_encode($listacolonias);
    }
    
?>
