<?php
    include('ConexionBD.php');

    if( isset($_POST['CitaFecha']) && isset($_POST['CitaHora']) 
        && isset($_POST['CitaMunicipio']) && isset($_POST['CitaColonia'])
        && isset($_POST['CitaCalle']) && isset($_POST['CitaAsunto']) 
        && isset($_POST['today']) && isset($_POST['hora']) && isset($_POST['CitaIdContacto'])){

        $CitaFecha = $_POST["CitaFecha"];
        $CitaHora = $_POST["CitaHora"];
        $CitaMunicipio = $_POST["CitaMunicipio"];
        $CitaColonia = $_POST["CitaColonia"];
        $CitaCalle = $_POST["CitaCalle"];
        $CitaAsunto = $_POST["CitaAsunto"];
        $CitaComentarios = $_POST["CitaComentarios"];
        $today = $_POST["today"];
        $hora = $_POST["hora"];
        $CitaIdContacto = $_POST["CitaIdContacto"];
        $NombreDelArchivoUno = $_POST["NombreDelArchivoUno"];
        $NombreDelArchivoDos = $_POST["NombreDelArchivoDos"];
        $NombreDelArchivoTres = $_POST["NombreDelArchivoTres"];
        $NombreDelArchivoCuatro = $_POST["NombreDelArchivoCuatro"];
        $NombreDelArchivoCinco = $_POST["NombreDelArchivoCinco"];

        $RegistrarCita = "INSERT INTO cita (FechaCita, HoraCita, MunicipioCita, ColoniaCita, CalleCita, 
        AsuntoCita, ComentariosCita, FechaCreacionCita, HoraCreacionCita, Contacto_idContacto) VALUES('$CitaFecha', '$CitaHora', 
        '$CitaMunicipio', '$CitaColonia', '$CitaCalle', '$CitaAsunto', '$CitaComentarios', '$today', '$hora', 
        '$CitaIdContacto')";
        $Conexion->query($RegistrarCita);

        if($NombreDelArchivoUno != '' || $NombreDelArchivoDos != '' || $NombreDelArchivoTres != '' || $NombreDelArchivoCuatro != '' || $NombreDelArchivoCinco != ''){
            $UltimoIDAgreado = $Conexion->insert_id;
                if($NombreDelArchivoUno != ''){
                    $AgregarArchivoUno = "INSERT INTO archivo (NombreArchivo, Cita_idCita) VALUES('$NombreDelArchivoUno', '$UltimoIDAgreado')";
                    $Conexion->query($AgregarArchivoUno);
                }
                if($NombreDelArchivoDos != ''){
                    $NombreDelArchivoDos = "INSERT INTO archivo (NombreArchivo, Cita_idCita) VALUES('$NombreDelArchivoDos', '$UltimoIDAgreado')";
                    $Conexion->query($NombreDelArchivoDos);
                }
                if($NombreDelArchivoTres != ''){
                    $NombreDelArchivoTres = "INSERT INTO archivo (NombreArchivo, Cita_idCita) VALUES('$NombreDelArchivoTres', '$UltimoIDAgreado')";
                    $Conexion->query($NombreDelArchivoTres);
                }
                if($NombreDelArchivoCuatro != ''){
                    $NombreDelArchivoCuatro = "INSERT INTO archivo (NombreArchivo, Cita_idCita) VALUES('$NombreDelArchivoCuatro', '$UltimoIDAgreado')";
                    $Conexion->query($NombreDelArchivoCuatro);
                }
                if($NombreDelArchivoCinco != ''){
                    $NombreDelArchivoCinco = "INSERT INTO archivo (NombreArchivo, Cita_idCita) VALUES('$NombreDelArchivoCinco', '$UltimoIDAgreado')";
                    $Conexion->query($NombreDelArchivoCinco);
                }
            echo("CYAR");
        }else{
            echo("CR");
        }
    }else{
        echo ("Vacio");
    }
    
?>
