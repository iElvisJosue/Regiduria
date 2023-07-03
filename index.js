//ELEMENTOS PARA INCIAR SESION
const IniciarSesion = document.querySelector(".IniciarSesion");
const IniciarSesionInput = document.querySelector(".IniciarSesion-InputUsuario");
const CrearCuentaInput = document.querySelector(".IniciarSesion-InputContrasena");
const IniciarSesionCampoVacio = document.querySelector(".IniciarSesion-CampoVacio");
const IniciarSesionDatosIncorrectos = document.querySelector(".IniciarSesion-DatosIncorrectos");
const MensajeIniciandoSesion = document.querySelector(".MensajeIniciandoSesion");

//ELEMENTOS PARA CREAR CUENTA
const CrearCuenta = document.querySelector(".CrearCuenta");
const CrearCuentaInputUsuario = document.querySelector(".CrearCuenta-InputUsuario");
const CrearCuentaInputContrasena = document.querySelector(".CrearCuenta-InputContrasena");
const CrearCuentaInputLlave = document.querySelector(".CrearCuenta-InputLlave");
const CrearCuentaDatosIncorrectos = document.querySelector(".CrearCuenta-DatosIncorrectos");

const MensajeISOCR = document.querySelector(".MensajeISOCR");

function MostrarIC(){
    CrearCuenta.classList.remove("MostrarCC");
    IniciarSesion.classList.add("MostrarIC");
}
function MostrarCC(){
    IniciarSesion.classList.remove("MostrarIC");
    CrearCuenta.classList.add("MostrarCC");
}
function ValidarIniciarSesion(){
    let NombreDeUsuario = IniciarSesionInput.value.toUpperCase();
    let ContrasenaDeUsuario = CrearCuentaInput.value;
    if (NombreDeUsuario != '' && ContrasenaDeUsuario != ''){
        $.ajax({
            data: { NombreDeUsuario, ContrasenaDeUsuario },
            url: 'ArchivosPHP/IniciarSesion.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
            dataType: 'html',
            type: 'POST'
        }).done(function(ResultadoIS){
            if(ResultadoIS === "Correcto"){
                MensajeISOCR.innerHTML = `Sesión iniciada`
                MensajeIniciandoSesion.classList.add("MostrarMIS");
                setTimeout(function(){
                    MensajeIniciandoSesion.classList.remove("MostrarMIS");
                    location.href = "Aplicacion/Inicio.php";
                },3000);
            }else if (ResultadoIS === "Incorrecto"){
                DatosIncorrectos();
            }
        }).fail(function(){
            console.log("Error en ajax INICIAR SESION");
        });
    }else{
        CamposVacios();
    }
}
function CamposVacios(){
    IniciarSesionDatosIncorrectos.innerHTML = "Ambos campos son requeridos";
    IniciarSesionDatosIncorrectos.style.display = "block";
    IniciarSesionInput.classList.add("ErrorIC");
    CrearCuentaInput.classList.add("ErrorIC");
}
function RemoverCampoVacio(event){
    if(event.keyCode == 13){
        ValidarIniciarSesion();
    }else{
        IniciarSesionDatosIncorrectos.style.display = "none";
        IniciarSesionInput.classList.remove("ErrorIC");
        CrearCuentaInput.classList.remove("ErrorIC");
    }
}
function DatosIncorrectos(){
    IniciarSesionDatosIncorrectos.innerHTML = "Datos incorrectos, intentalo de nuevo.";
    IniciarSesionDatosIncorrectos.style.display = "block";
    IniciarSesionInput.classList.add("ErrorIC");
    CrearCuentaInput.classList.add("ErrorIC");
}

///////////////////////////////////////////////////////////////////////////////////////


function ValidarRegistro(){
    let NombreUsuarioCrearCuenta = CrearCuentaInputUsuario.value.toUpperCase();
    let ContrasenaUsuarioCrearCuenta = CrearCuentaInputContrasena.value;
    let LlaveAcceso = CrearCuentaInputLlave.value;
    if (NombreUsuarioCrearCuenta != '' && ContrasenaUsuarioCrearCuenta != '' && LlaveAcceso != ''){
        $.ajax({
            data: { NombreUsuarioCrearCuenta, ContrasenaUsuarioCrearCuenta, LlaveAcceso },
            url: 'ArchivosPHP/RegistrarUsuario.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
            dataType: 'html',
            type: 'POST'
        }).done(function(ResultadoRU){
            if(ResultadoRU === "Registrado"){
                MensajeISOCR.innerHTML = `Usuario creado, <br> no olvides tus datos`;
                MensajeIniciandoSesion.classList.add("MostrarMIS");
                setTimeout(function(){
                    MensajeIniciandoSesion.classList.remove("MostrarMIS");
                    location.href = "Aplicacion/Inicio.php";
                },5000);
            }else if(ResultadoRU === "Repetido"){
                RURepetido();
            }else if (ResultadoRU === "ErrorToken"){
                LlaveIncorrecta();
            }
        }).fail(function(){
            console.log("Error en ajax CREAR CUENTA SESION");
        });
    }else{
        CamposVaciosCC();
    }
}
function CamposVaciosCC(){
    CrearCuentaDatosIncorrectos.innerHTML = "Todos los campos son requeridos";
    CrearCuentaDatosIncorrectos.style.display = "block";
    CrearCuentaInputUsuario.classList.add("ErrorCC");
    CrearCuentaInputContrasena.classList.add("ErrorCC");
    CrearCuentaInputLlave.classList.add("ErrorCC");
}
function RemoverCamposVaciosCC(event){
    if(event.keyCode == 13){
        ValidarRegistro();
    }else{
        CrearCuentaDatosIncorrectos.style.display = "none";
        CrearCuentaInputUsuario.classList.remove("ErrorCC");
        CrearCuentaInputContrasena.classList.remove("ErrorCC");
        CrearCuentaInputLlave.classList.remove("ErrorCC");
    }
}
function RURepetido(){
    CrearCuentaDatosIncorrectos.innerHTML = "Nombre de usuario ya registrado, intenta con otro nombre";
    CrearCuentaDatosIncorrectos.style.display = "block";
    CrearCuentaInputUsuario.classList.add("ErrorCC");
}
function LlaveIncorrecta(){
    CrearCuentaDatosIncorrectos.innerHTML = "Llave de registro incorrecta";
    CrearCuentaDatosIncorrectos.style.display = "block";
    CrearCuentaInputLlave.classList.add("ErrorCC");
}