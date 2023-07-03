<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="RecursosSVG/Icono.svg">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="CSS/Responsive.css">

    <title>Iniciar Sesion</title>
</head>
<body onload="MostrarIC()">

    <?php
        include('Aplicacion/MensajeIniciandoSesion.php');
    ?>

    <div class="IniciarSesion">
        <div class="Login-LogoDelSistema">
            <img src="RecursosSVG/Icono.svg" alt="LogoSistema" class="Login-Logo">
        </div>
        <p class="IniciarSesion-Titulo">Ingresa tus datos de acceso.</p>
        <p class="IniciarSesion-Subtitulo">¿Nuevo? <a onclick="MostrarCC();">REGISTRATE.</a></p>
        <div class="IniciarSesion-Usuario">
            <p class="IniciarSesion-UsuarioSubtitulo">Usuario</p>
            <input type="text" class="IniciarSesion-InputUsuario" onkeyup="RemoverCampoVacio(event)">
            <ion-icon name="person-circle-outline" class="IniciarSesion-IconoUsuario"></ion-icon>
        </div>
        <div class="IniciarSesion-Contrasena">
            <p class="IniciarSesion-ContrasenaSubtitulo">Contraseña</p>
            <input type="password" class="IniciarSesion-InputContrasena" onkeyup="RemoverCampoVacio(event)">
            <ion-icon name="lock-closed-outline" class="IniciarSesion-IconoContrasena"></ion-icon>
        </div>
        <p class="IniciarSesion-DatosIncorrectos"></p>
        <a onclick="ValidarIniciarSesion()" class="IniciarSesion-Ingresar">Ingresar</a>
    </div>

    <div class="CrearCuenta">
        <div class="Login-LogoDelSistema">
            <img src="RecursosSVG/Icono.svg" alt="LogoSistema" class="Login-Logo">
        </div>
        <p class="CrearCuenta-Titulo">Datos de tu nueva cuenta.</p>
        <p class="CrearCuenta-Subtitulo">¿Ya registrado? <a onclick="MostrarIC();">INGRESA.</a></p>
        <div class="CrearCuenta-Usuario">
            <p class="CrearCuenta-UsuarioSubtitulo">Usuario</p>
            <input type="text" class="CrearCuenta-InputUsuario" onkeyup="RemoverCamposVaciosCC(event)">
            <ion-icon name="person-circle-outline" class="CrearCuenta-IconoUsuario"></ion-icon>
        </div>
        <div class="CrearCuenta-Contrasena">
            <p class="CrearCuenta-ContrasenaSubtitulo">Contraseña</p>
            <input type="password" class="CrearCuenta-InputContrasena" onkeyup="RemoverCamposVaciosCC(event)">
            <ion-icon name="lock-closed-outline" class="CrearCuenta-IconoContrasena"></ion-icon>
        </div>
        <div class="CrearCuenta-Llave">
            <p class="CrearCuenta-LlaveSubtitulo">Llave de registro</p>
            <input type="password" class="CrearCuenta-InputLlave" onkeyup="RemoverCamposVaciosCC(event)">
            <ion-icon name="key-outline" class="CrearCuenta-IconoLlave"></ion-icon>
        </div>
        <p class="CrearCuenta-DatosIncorrectos"></p>
        <a onclick="ValidarRegistro()" class="CrearCuenta-Ingresar">Crear cuenta</a>
    </div>

    <script src="FuncionesJS/Jquery.min.js"></script>
    <script src="index.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>