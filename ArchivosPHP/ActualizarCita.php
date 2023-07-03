<?php
    include('ConexionBD.php');
    if($_POST['IdDeCitaEditar'] && isset($_POST['AsignandoIDCitaContactoAEditar']) && isset($_POST['NuevaFechaCita']) && isset($_POST['NuevaHoraCita'])
    && isset($_POST['NuevoMunicipioCita']) && isset($_POST['NuevaColoniaCita']) && isset($_POST['NuevaCalleCita']) 
    && isset($_POST['NuevoAsuntoCita'])){

        $NuevaFechaCita = $_POST['NuevaFechaCita'];
        $NuevaHoraCita = $_POST['NuevaHoraCita'];
        $NuevoMunicipioCita = $_POST['NuevoMunicipioCita'];
        $NuevaColoniaCita = $_POST['NuevaColoniaCita'];
        $NuevaCalleCita = $_POST['NuevaCalleCita'];
        $NuevoAsuntoCita = $_POST['NuevoAsuntoCita'];
        $NuevoComentarioCita = $_POST['NuevoComentarioCita'];
        $AsignandoIDCitaContactoAEditar = $_POST['AsignandoIDCitaContactoAEditar'];
        $IdDeCitaEditar = $_POST['IdDeCitaEditar'];
        mysqli_set_charset($Conexion, "utf8");

        $ActualizarCita = "UPDATE cita SET FechaCita = '$NuevaFechaCita', HoraCita = '$NuevaHoraCita', 
        MunicipioCita = '$NuevoMunicipioCita', ColoniaCita = '$NuevaColoniaCita', CalleCita = '$NuevaCalleCita', 
        AsuntoCita = '$NuevoAsuntoCita', ComentariosCita = '$NuevoComentarioCita', Contacto_idContacto = '$AsignandoIDCitaContactoAEditar' WHERE idCita = $IdDeCitaEditar";
        $Conexion->query($ActualizarCita);
        
    }else{
        echo ("no");
    }
?>
