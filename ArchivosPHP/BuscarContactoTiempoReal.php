<?php

    include('ConexionBD.php');

    if(isset($_POST['NombreContactoTiempoReal'])){

        $NombreContactoTiempoReal = $_POST['NombreContactoTiempoReal'];

        $BusquedaTiempoReal = "SELECT idContacto, NombreContacto FROM contacto 
        WHERE ContactoActivo = 'si' AND NombreContacto LIKE '$NombreContactoTiempoReal%' ORDER BY NombreContacto ASC";
        $ResultadoBusquedaTiempoReal = $Conexion->query($BusquedaTiempoReal);

        $ListaDeNombres = array();

        while($row=$ResultadoBusquedaTiempoReal->fetch_assoc()){
            $ListaDeNombres[]= $row;
        }
        echo json_encode($ListaDeNombres);

    }else{
        echo ("no");
    }
?>
