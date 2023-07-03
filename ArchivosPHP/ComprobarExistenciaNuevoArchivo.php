<?php
    include('ConexionBD.php');
    
        
    $NombreDelNuevoArchivo = $_POST['NombreDelNuevoArchivo'];
    $IdDeCitaEditar = $_POST['IdDeCitaEditar'];
    mysqli_set_charset($Conexion, "utf8");

    $CNA = "SELECT NombreArchivo FROM archivo WHERE NombreArchivo = '$NombreDelNuevoArchivo'";
    $RDCNA = $Conexion->query($CNA);
    $ArrayConRDCNA = $RDCNA -> fetch_assoc();
    
    if($RDCNA->num_rows>0){
        if( $NombreDelNuevoArchivo ===  $ArrayConRDCNA["NombreArchivo"])
            {
                $NombreDelArchivoEncontrado = $ArrayConRDCNA["NombreArchivo"];
                echo($NombreDelArchivoEncontrado);
            }
    }else{
        $IAN = "INSERT INTO archivo(NombreArchivo, Cita_idCita	) VALUES('$NombreDelNuevoArchivo', '$IdDeCitaEditar')";
        $RDIAN = $Conexion->query($IAN);
        echo("Insertado");
    }
    
?>
