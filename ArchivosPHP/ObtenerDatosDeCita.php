<?php
    include('ConexionBD.php');

    if(isset($_POST['IdDeCitaEditar'])){

        $IdDeCitaEditar = $_POST['IdDeCitaEditar'];

        mysqli_set_charset($Conexion, "utf8");

        $ObtenerDatosDeCita = "SELECT contacto.NombreContacto, cita.FechaCita, cita.HoraCita, cita.MunicipioCita, cita.ColoniaCita, cita.CalleCita, cita.AsuntoCita,
        cita.ComentariosCita, cita.Contacto_idContacto FROM contacto, cita WHERE cita.idCita = '$IdDeCitaEditar' AND cita.Contacto_idContacto = contacto.idContacto";
        $DatosDeCitaTotales = $Conexion->query($ObtenerDatosDeCita);
    
        $ListaDeDatosDeCita = array();
    
        while($LDDCitas=$DatosDeCitaTotales->fetch_assoc()){
        $ListaDeDatosDeCita[] = $LDDCitas;
        }
        echo json_encode($ListaDeDatosDeCita);
    }
    
?>
