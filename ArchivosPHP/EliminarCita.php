<?php
    include('ConexionBD.php');

    if(isset($_POST['idDeLaCitaSeleccionada'])){

        $idDeLaCitaSeleccionada = $_POST['idDeLaCitaSeleccionada'];

        mysqli_set_charset($Conexion, "utf8");

        $ConcluirCita = "UPDATE cita SET EliminadaCita = 'SI' WHERE cita.idCita = '$idDeLaCitaSeleccionada'; ";
        $Conexion->query($ConcluirCita);
        echo("Eliminada");
        
    }else{
        echo("ID de cita no seleccionada");
    }
    
?>
