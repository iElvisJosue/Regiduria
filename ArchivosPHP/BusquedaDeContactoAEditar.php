<?php

    include('ConexionBD.php');

    if(isset($_POST['BusquedaPorNombreContacto'])){

        $BusquedaPorNombreContacto = $_POST['BusquedaPorNombreContacto'];

        $BusquedaTiempoRealEditarContacto = "SELECT idContacto, NombreContacto FROM contacto 
        WHERE ContactoActivo = 'si' AND NombreContacto LIKE '$BusquedaPorNombreContacto%' ORDER BY NombreContacto ASC";
        $ResultadoBusquedaTiempoRealEditarContacto = $Conexion->query($BusquedaTiempoRealEditarContacto);

        $ListaDeContactos = array();

        while($row=$ResultadoBusquedaTiempoRealEditarContacto->fetch_assoc()){
            $ListaDeContactos[]= $row;
        }
        echo json_encode($ListaDeContactos);

    }else{
        echo ("no");
    }
?>
