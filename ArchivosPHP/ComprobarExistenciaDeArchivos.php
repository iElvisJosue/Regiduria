<?php
    include('ConexionBD.php');
    
        
    $NombreDelArchivoUno = $_POST['NombreDelArchivoUno'];
    $NombreDelArchivoDos = $_POST['NombreDelArchivoDos'];
    $NombreDelArchivoTres = $_POST['NombreDelArchivoTres'];
    $NombreDelArchivoCuatro = $_POST['NombreDelArchivoCuatro'];
    $NombreDelArchivoCinco = $_POST['NombreDelArchivoCinco'];
    mysqli_set_charset($Conexion, "utf8");

    $ConsultaDeTodosLosArchivos = "SELECT NombreArchivo FROM archivo 
    WHERE NombreArchivo = '$NombreDelArchivoUno' OR  NombreArchivo = '$NombreDelArchivoDos'
    OR NombreArchivo = '$NombreDelArchivoTres' OR NombreArchivo = '$NombreDelArchivoCuatro'
    OR NombreArchivo = '$NombreDelArchivoCinco'";
    $ResultadoDeConsultaDeTodosLosArchivos = $Conexion->query($ConsultaDeTodosLosArchivos);
    $ArrayConResultadoDeConsultaDeTodosLosArchivos = $ResultadoDeConsultaDeTodosLosArchivos -> fetch_assoc();
    
    if($ResultadoDeConsultaDeTodosLosArchivos->num_rows>0){
        if( $NombreDelArchivoUno ===  $ArrayConResultadoDeConsultaDeTodosLosArchivos["NombreArchivo"] ||
            $NombreDelArchivoDos ===  $ArrayConResultadoDeConsultaDeTodosLosArchivos["NombreArchivo"] ||
            $NombreDelArchivoTres ===  $ArrayConResultadoDeConsultaDeTodosLosArchivos["NombreArchivo"] ||
            $NombreDelArchivoCuatro ===  $ArrayConResultadoDeConsultaDeTodosLosArchivos["NombreArchivo"] ||
            $NombreDelArchivoCinco ===  $ArrayConResultadoDeConsultaDeTodosLosArchivos["NombreArchivo"])
            {
                $NombreDelArchivoEncontrado = $ArrayConResultadoDeConsultaDeTodosLosArchivos["NombreArchivo"];
                echo($NombreDelArchivoEncontrado);
            }
    }else{
        echo("no");
    }
    
?>
