<?php
    include('ConexionBD.php');

    if(isset($_POST['idDeLaCitaSeleccionada'])){

        $idDeLaCitaSeleccionada = $_POST['idDeLaCitaSeleccionada'];

        mysqli_set_charset($Conexion, "utf8");

        $ConcluirCita = "UPDATE cita SET ActivaCita = 'NO' WHERE cita.idCita = '$idDeLaCitaSeleccionada'; ";
        $Conexion->query($ConcluirCita);
        echo("CitaConcluida");
        
    }else{
        echo("ID de cita no seleccionada");
    }
    
?>
