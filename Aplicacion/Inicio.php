<?php
    include('../ArchivosPHP/ValidarSesion.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="../RecursosSVG/Icono.svg">
    <link rel="stylesheet" href="../index.css">
    <link rel="stylesheet" href="../CSS/Estandar.css">
    <link rel="stylesheet" href="../CSS/Principal.css">
    <link rel="stylesheet" href="../CSS/Responsive.css">
    <link rel="stylesheet" href="../CSS/VerInformacion.css">
    <link rel="stylesheet" href="../CSS/RegistrarContacto.css">
    <link rel="stylesheet" href="../CSS/RegistrarCita.css">
    <link rel="stylesheet" href="../CSS/BuscarContacto.css">
    <link rel="stylesheet" href="../CSS/EditarCita.css">
    <link rel="stylesheet" href="../CSS/ResultadosDeBusqueda.css">
    <link rel="stylesheet" href="../CSS/ModalMensajes.css">
    <title>REGIDOR GENARO</title>
</head>
<body onload="Notificaciones(); ObtenerMunicipios(); CitaObtenerMunicipios(); ObtenerMunicipiosAEditar(); ObtenerFechaCita(); ObtenerMunicipiosCitaAEditar();">
    
    <!-- PRINCIPAL -->
    <?php
        include('../Aplicacion/Principal.php');
    ?>

    <!-- VER INFORMACION -->
    <?php
        include('../Aplicacion/VerInformacion.php');
    ?>

    <!-- REGISTRAR CONTACTO -->
    <?php
        include('../Aplicacion/RegistrarContacto.php');
    ?>

    <!-- REGISTRAR CITA -->
    <?php
        include('../Aplicacion/RegistrarCita.php');
    ?>

    <!-- BUSCAR CONTACTO -->
    <?php
        include('../Aplicacion/BuscarContacto.php');
    ?>
    
    <!-- EDITAR CITA -->
    <?php
        include('../Aplicacion/EditarCita.php');
    ?>

    <!-- MENSAJE BORRAR CITA -->
    <?php
        include('../Aplicacion/MensajeBorrarCita.php');
    ?>

    <!-- MENSAJE BORRAR CONTACTO -->
    <?php
        include('../Aplicacion/MensajeBorrarContacto.php');
    ?>

    <!-- MENSAJE CONTACTO EXISTENTE -->
    <?php
        include('../Aplicacion/MensajeContactoExistente.php');
    ?>
    <!-- MENSAJE AGREGADO CORRECTAMENTE -->
    <?php
        include('../Aplicacion/MensajeContactoAgregado.php');
    ?>

    <!-- MENSAJE IMAGEN DUPLICADA -->
    <?php
        include('../Aplicacion/MensajeImagenDuplicada.php');
    ?>

    <!-- MENSAJE MAXIMO ARCHIVOS -->
    <?php
        include('../Aplicacion/MensajeMaximoArchivos.php');
    ?>

    <!-- MENSAJE CITA AGREGADA -->
    <?php
        include('../Aplicacion/MensajeCitaAgregada.php');
    ?>

    <!-- MENSAJE CONTACTO INEXISTENTE -->
    <?php
        include('../Aplicacion/MensajeContactoInexistente.php');
    ?>

    <!-- MENSAJE ARCHIVO INEXISTENTE -->
    <?php
        include('../Aplicacion/MensajeArchivoExistente.php');
    ?>

    <!-- MENSAJE ARCHIVO INEXISTENTE -->
    <?php
        include('../Aplicacion/MensajeContactoActualizado.php');
    ?>

    <!-- MENSAJE CONTACTO ELIMINADO  -->
    <?php
        include('../Aplicacion/MensajeContactoEliminado.php');
    ?>

    <!-- MENSAJE CONCLUIR CITA -->
    <?php
        include('../Aplicacion/MensajeConcluirCita.php');
    ?>

    <!-- MENSAJE CITA CONCLUIDA -->
    <?php
        include('../Aplicacion/MensajeCitaConcluida.php');
    ?>

    <!-- MENSAJE CITA ELIMINADA -->
    <?php
        include('../Aplicacion/MensajeCitaEliminada.php');
    ?>

    <!-- MENSAJE CITA ELIMINADA -->
    <?php
        include('../Aplicacion/MensajeCitaActualizada.php');
    ?>

    <!-- MENSAJE CITA ELIMINADA -->
    <?php
        include('../Aplicacion/MensajeNotificacion.php');
    ?>
    <!-- DESABILITAR CLICK DERECHO -->
    <!-- <script type='text/javascript'>
	    document.oncontextmenu = function(){return false}
    </script> -->
    <script src="../FuncionesJS/Jquery.min.js"></script>
    <script src="../FuncionesJS/CitasParaHoy.js"></script>
    <script src="../FuncionesJS/RegistrarCita.js"></script>
    <script src="../FuncionesJS/RegistrarContacto.js"></script>
    <script src="../FuncionesJS/EditarContacto.js"></script>
    <script src="../FuncionesJS/EliminarContacto.js"></script>
    <script src="../FuncionesJS/VerCitas.js"></script>
    <script src="../FuncionesJS/ConcluirCita.js"></script>
    <script src="../FuncionesJS/EditarCita.js"></script>
    <script src="../FuncionesJS/EliminarCita.js"></script>
    <script src="../FuncionesJS/BusquedaPorFecha.js"></script>
    <script src="../FuncionesJS/BusquedaGeneral.js"></script>

    <script src="../AnimacionesJS/Agregar.js"></script>
    <script src="../AnimacionesJS/RegistrarCita.js"></script>
    <script src="../AnimacionesJS/RegistrarContacto.js"></script>
    <script src="../AnimacionesJS/BusquedaContacto.js"></script>
    <script src="../AnimacionesJS/EditarCita.js"></script>
    <script src="../AnimacionesJS/EliminarCita.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <!-- 
    <script>

    var f = new Date();
    alert(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    
    </script> -->
    <!-- <script>
        var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
        alert(x + ' × ' + y);
    </script> -->
</body>
</html>